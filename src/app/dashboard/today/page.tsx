'use client';

import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase/client';
import { Task } from '../../lib/types';
import { TaskTable } from '../../components/TaskTable';
import { LoadingSpinner } from '../../components/LoadSpinner';
import { Calendar, RefreshCw } from 'lucide-react';

export default function TodayTasksPage() {
  const queryClient = useQueryClient();
  const [updatingTaskId, setUpdatingTaskId] = useState<string | null>(null);

  // Fetch tasks due today
  const { data: tasks, isLoading, error, refetch } = useQuery({
    queryKey: ['tasks', 'today'],
    queryFn: async () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const { data, error } = await supabase
        .from('tasks')
        .select(`
          *,
          applications (
            id,
            lead_id,
            status
          )
        `)
        .gte('due_at', today.toISOString())
        .lt('due_at', tomorrow.toISOString())
        .order('due_at', { ascending: true });

      if (error) throw error;
      return data as Task[];
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  // Mutation to mark task as complete
  const completeMutation = useMutation({
    mutationFn: async (taskId: string) => {
      setUpdatingTaskId(taskId);
      const { data, error } = await supabase
        .from('tasks')
        .update({ status: 'completed' })
        .eq('id', taskId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', 'today'] });
    },
    onSettled: () => {
      setUpdatingTaskId(null);
    },
  });

  const handleTaskComplete = async (taskId: string) => {
    await completeMutation.mutateAsync(taskId);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-red-800 font-semibold">Error Loading Tasks</h3>
            <p className="text-red-600 mt-1">{(error as Error).message}</p>
            <button
              onClick={() => refetch()}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-8 h-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Today&apos;s Tasks</h1>
              </div>
              <p className="text-gray-600">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <button
              onClick={() => refetch()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Task Summary */}
        {tasks && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-gray-600 text-sm font-medium">Total Tasks</div>
              <div className="text-3xl font-bold text-gray-900 mt-1">{tasks.length}</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-gray-600 text-sm font-medium">Pending</div>
              <div className="text-3xl font-bold text-yellow-600 mt-1">
                {tasks.filter(t => t.status === 'pending').length}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-gray-600 text-sm font-medium">Completed</div>
              <div className="text-3xl font-bold text-green-600 mt-1">
                {tasks.filter(t => t.status === 'completed').length}
              </div>
            </div>
          </div>
        )}

        {/* Tasks Table */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <TaskTable 
            tasks={tasks || []} 
            onTaskComplete={handleTaskComplete}
            isUpdating={updatingTaskId}
          />
        )}
      </div>
    </div>
  );
}