"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../lib/supabase/client";
import { TaskTable } from "../../components/TaskTable";
import { LoadingSpinner } from "../../components/LoadSpinner";

export default function AllTasksPage() {
  const { data: tasks, isLoading, error, refetch } = useQuery({
    queryKey: ["tasks", "all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("due_at", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="p-6 text-red-600">
        Error loading tasks: {(error as Error).message}
      </div>
    );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">All Tasks</h1>

      <TaskTable
        tasks={tasks || []}
        onTaskComplete={async () => {}}
        isUpdating={null}
      />
    </div>
  );
}




// import TaskTable from "../../components/TaskTable";
// import { supabase } from "../../lib/supabase/client";

// export default async function AllTasksPage() {
//   // Fetch ALL tasks
//   const { data: tasks, error } = await supabase
//     .from("tasks")
//     .select("*")
//     .order("due_at", { ascending: true });

//   if (error) {
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold text-red-600">Error loading tasks</h1>
//         <p>{error.message}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">All Tasks</h1>

//       <TaskTable
//         tasks={tasks || []}
//         onTaskComplete={async () => {}}
//         isUpdating={null}
//       />
//     </div>
//   );
// }
