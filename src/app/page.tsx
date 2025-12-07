
// ============================================================================
// FILE: app/page.tsx (HOME PAGE - REQUIRED)
// ============================================================================

'use client';

import Link from 'next/link';
import { Calendar, Users, CheckSquare, ArrowRight, BarChart3 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <CheckSquare className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LearnLynk CRM</span>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/dashboard/today"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to LearnLynk CRM
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Manage leads, applications, and tasks all in one place
          </p>
          <Link 
            href="/dashboard/today"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            View Today&apos;s Tasks
            <Calendar className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Management</h3>
            <p className="text-gray-600">
              Track and manage your leads with role-based access control. Counselors see their assigned leads, admins see everything.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <CheckSquare className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Tracking</h3>
            <p className="text-gray-600">
              Never miss a follow-up. Track calls, emails, and reviews with due dates and completion status.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
            <p className="text-gray-600">
              Stay synchronized with your team. All updates happen in real-time across all devices.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-1">Secure</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">Real-time</div>
              <div className="text-gray-600 mt-1">Updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">Multi-tenant</div>
              <div className="text-gray-600 mt-1">Architecture</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">RLS</div>
              <div className="text-gray-600 mt-1">Protected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 LearnLynk CRM. Built with Next.js, Supabase, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



// 'use client';

// import Link from 'next/link';
// import { Calendar, Users, CheckSquare, ArrowRight, BarChart3 } from 'lucide-react';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <CheckSquare className="w-8 h-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-900">LearnLynk CRM</span>
//             </div>
//             <div className="flex gap-4">
//               <Link 
//                 href="/dashboard/today"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//               >
//                 Go to Dashboard
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Welcome to LearnLynk CRM
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Manage leads, applications, and tasks all in one place
//           </p>
//           <Link 
//             href="/dashboard/today"
//             className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
//           >
//             View Today&apos;s Tasks
//             <Calendar className="w-5 h-5" />
//           </Link>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
//           {/* Feature 1 */}
//           <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <Users className="w-6 h-6 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Management</h3>
//             <p className="text-gray-600">
//               Track and manage your leads with role-based access control. Counselors see their assigned leads, admins see everything.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//               <CheckSquare className="w-6 h-6 text-green-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Tracking</h3>
//             <p className="text-gray-600">
//               Never miss a follow-up. Track calls, emails, and reviews with due dates and completion status.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//               <BarChart3 className="w-6 h-6 text-purple-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
//             <p className="text-gray-600">
//               Stay synchronized with your team. All updates happen in real-time across all devices.
//             </p>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Overview</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600">100%</div>
//               <div className="text-gray-600 mt-1">Secure</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-green-600">Real-time</div>
//               <div className="text-gray-600 mt-1">Updates</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-purple-600">Multi-tenant</div>
//               <div className="text-gray-600 mt-1">Architecture</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-orange-600">RLS</div>
//               <div className="text-gray-600 mt-1">Protected</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center text-gray-600">
//             <p>© 2024 LearnLynk CRM. Built with Next.js, Supabase, and Tailwind CSS.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }





// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/dashboard/today");
// }




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
