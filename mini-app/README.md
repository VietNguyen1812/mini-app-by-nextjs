This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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


// Rendering convert code thành user interface 
// render ở server and client. (hybrid)


// Single application lifrcycle 
 Khi làn đầu trả 1 web 
 - Browser request tới server -> trả về file index.html (ko chứa gì)
 - Browser thấy trong file html có link đến file js, css nên là request lần nữa đến server để lấy file css js 
 - Browser chạy JS và render ra HTML 
 - User thấy và used website

 Ban đàu web sẽ không có gì tới khi xong bước 3 

 // Nextjs có server component và client component
 // Dùng client component : 
 // Dùng state : Hook, useState, ensubmit, onChange
 / khi nextjs build thì sẽ html ra sẵn hết -lúc chạy nextjs là nó sẽ ra website luon
 // UI ban dầu ngay lập tức do Server.js trả về HTML Sau đó browser render lại Client COmponent 1 lần nữa để sync DOM , event, state, effect
 ==> CLient COmponent render tối thiểu 2 lần: 1 lần build 1 lần ở client
 