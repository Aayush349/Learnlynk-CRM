'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <html lang="en">
      <head>
        <title>LearnLynk CRM - Task Management</title>
        <meta name="description" content="Manage your leads, applications, and tasks" />
      </head>
      <body className="antialiased">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}


// 'use client';

// import './globals.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useState } from 'react';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [queryClient] = useState(() => new QueryClient({
//     defaultOptions: {
//       queries: {
//         staleTime: 60 * 1000,
//       },
//     },
//   }));

//   return (
//     <html lang="en">
//       <body>
//         <QueryClientProvider client={queryClient}>
//           {children}
//         </QueryClientProvider>
//       </body>
//     </html>
//   );
// }

// 'use client';

// import './globals.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useState } from 'react';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [queryClient] = useState(() => new QueryClient({
//     defaultOptions: {
//       queries: {
//         staleTime: 60 * 1000,
//       },
//     },
//   }));

//   return (
//     <html lang="en">
//       <body>
//         <QueryClientProvider client={queryClient}>
//           {children}
//         </QueryClientProvider>
//       </body>
//     </html>
//   );
// }