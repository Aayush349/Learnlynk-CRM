"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, ListTodo, LayoutDashboard } from "lucide-react";
import "../globals.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Today's Tasks", href: "/dashboard/today", icon: Calendar },
    { label: "All Tasks", href: "/dashboard/tasks", icon: ListTodo },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-6">LearnLynk CRM</h1>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors 
                ${active ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
