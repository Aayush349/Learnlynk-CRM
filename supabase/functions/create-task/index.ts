import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CreateTaskRequest {
  application_id: string;
  task_type: "call" | "email" | "review";
  due_at: string;
  title?: string;
  description?: string;
  tenant_id: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Parse request body
    const requestData: CreateTaskRequest = await req.json();
    const { application_id, task_type, due_at, title, description, tenant_id } = requestData;

    // Validation: task_type
    const validTaskTypes = ["call", "email", "review"];
    if (!validTaskTypes.includes(task_type)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Invalid task_type. Must be one of: ${validTaskTypes.join(", ")}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validation: due_at must be in the future
    const dueDate = new Date(due_at);
    const now = new Date();
    if (dueDate <= now) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "due_at must be in the future",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validation: application_id must exist
    const { data: application, error: appError } = await supabaseClient
      .from("applications")
      .select("id")
      .eq("id", application_id)
      .single();

    if (appError || !application) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid application_id",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Insert task into database
    const { data: task, error: insertError } = await supabaseClient
      .from("tasks")
      .insert({
        related_id: application_id,
        type: task_type,
        title: title || `${task_type} task`,
        description: description || "",
        due_at: due_at,
        tenant_id: tenant_id,
        status: "pending",
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    // Emit Realtime broadcast event
    const channel = supabaseClient.channel("tasks");
    await channel.send({
      type: "broadcast",
      event: "task.created",
      payload: {
        task_id: task.id,
        application_id: application_id,
        task_type: task_type,
        due_at: due_at,
      },
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        task_id: task.id,
        task: task,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating task:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Internal server error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
