LearnLynk CRM - Complete 


Home page
<img width="1919" height="964" alt="image" src="https://github.com/user-attachments/assets/8a9f7583-e3c7-45db-9bcd-7cfe853d2510" />
Dashboard
<img width="1894" height="967" alt="image" src="https://github.com/user-attachments/assets/1a353714-76db-4cde-bb6b-e0d9249fdfca" />
all task page
<img width="1917" height="916" alt="image" src="https://github.com/user-attachments/assets/b538ec0d-7d6a-45a2-8a00-20a6323ba92d" />
Supabase dashboard
<img width="1919" height="919" alt="image" src="https://github.com/user-attachments/assets/0967d83d-6cdc-4d75-9c59-c092d7c8f334" />

File structure 
learnlynk-crm/
├── supabase/
│   ├── functions/
│   │   └── create-task/
│   │       └── index.ts
│   └── migrations/
│       ├── 001_schema.sql
│       └── 002_rls_policies.sql
│
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── today/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   └── server.ts
│   │   └── types.ts
│   │
│   └── components/
│       ├── TaskTable.tsx
│       └── LoadingSpinner.tsx
│
├── .env.local
├── .env.example
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── README.md



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
