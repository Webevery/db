This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

===================================

// Create a new Date object representing the current date and time
const currentDate = new Date();

// Get the individual components of the current date and time
const year = currentDate.getFullYear(); // 4-digit year
const month = currentDate.getMonth() + 1; // Month (0-11, so we add 1)
const day = currentDate.getDate(); // Day of the month (1-31)
const hours = currentDate.getHours(); // Hours (0-23)
const minutes = currentDate.getMinutes(); // Minutes (0-59)
const seconds = currentDate.getSeconds(); // Seconds (0-59)
const milliseconds = currentDate.getMilliseconds(); // Milliseconds (0-999)

// Display the current date and time
console.log(`Current Date: ${year}-${month}-${day}`);
console.log(`Current Time: ${hours}:${minutes}:${seconds}.${milliseconds}`);

import { format } from "date-fns";

const formattedDate = format(currentDate, "yyyy-MM-dd");
console.log(`Formatted Date: ${formattedDate}`);

=============================
