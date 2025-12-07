export default function DashboardHome() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      <p className="text-gray-700">
        Welcome to your CRM Dashboard. Choose a section from the sidebar.
      </p>

      <div className="mt-6 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <ul className="mt-3 list-disc ml-6 text-blue-600">
          <li>
            <a href="/dashboard/today" className="hover:underline">
              View Today&apos;s Tasks
            </a>
          </li>
          <li>
            <a href="/dashboard/tasks" className="hover:underline">
              View All Tasks
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
