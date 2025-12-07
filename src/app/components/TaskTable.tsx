
// ----- File: src/components/TaskTable.tsx -----
'use client';

import { useState } from 'react';
import { Task } from '../lib/types';
import { CheckCircle, Clock, Mail, Phone, FileText } from 'lucide-react';

interface TaskTableProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => Promise<void>;
  isUpdating: string | null;
}

export function TaskTable({ tasks, onTaskComplete, isUpdating }: TaskTableProps) {
  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'call': return <Phone className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'review': return <FileText className="w-4 h-4" />;
      default: return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const isOverdue = (dueAt: string) => {
    return new Date(dueAt) < new Date();
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <Clock className="w-12 h-12 mx-auto text-gray-400 mb-3" />
        <p className="text-gray-600 text-lg">No tasks due today</p>
        <p className="text-gray-500 text-sm mt-1">You&apos;re all caught up!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Task
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Application ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{task.title}</div>
                {task.description && (
                  <div className="text-sm text-gray-500">{task.description}</div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {getTaskIcon(task.type)}
                  <span className="text-sm text-gray-900 capitalize">{task.type}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-600 font-mono">
                  {task.related_id.substring(0, 8)}...
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className={`text-sm ${isOverdue(task.due_at) ? 'text-red-600 font-semibold' : 'text-gray-900'}`}>
                  {formatDate(task.due_at)}
                </div>
                {isOverdue(task.due_at) && (
                  <span className="text-xs text-red-600">Overdue</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  task.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {task.status !== 'completed' && (
                  <button
                    onClick={() => onTaskComplete(task.id)}
                    disabled={isUpdating === task.id}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isUpdating === task.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        <span>Updating...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Mark Complete</span>
                      </>
                    )}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
