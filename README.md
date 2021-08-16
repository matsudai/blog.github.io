# blog.github.io

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Create Project

### Create Next.js App

```txt
> npx create-next-app --typescript --use-npm matsudai.github.io
```

### Create src directory and move sources

```txt
> mkdir src
> git mv pages src\
> git mv styles src\
```

### Tailwind CSS

refs: https://tailwindcss.com/docs/guides/nextjs

```
> npm install tailwindcss@latest postcss@latest autoprefixer@latest
> npx tailwindcss init -p

   tailwindcss 2.0.2

   ✅ Created Tailwind config file: tailwind.config.js
   ✅ Created PostCSS config file: postcss.config.js
```

### MDX

MDX in order to post Blog.

* refs: https://mdxjs.com/getting-started/next
* refs: https://mdxjs.com/guides/syntax-highlighting#syntax-highlighting

```txt
> npm install @next/mdx @mdx-js/loader
> npm install @mdx-js/react

> npm install highlight.js
> npm install -D @types/highlightjs
```

## Debug on VSCode

In order to use breakpoints.

1. `> npm run dev`
2. VSCode -> "Run and Debug" ->
    * Run "Next: Attach Backend" - for SSR
    * Run "Next: Launch Chrome"  - for CSR

## Prettier

```txt
> npm i -D prettier eslint-config-prettier
```

## Add Github Actions

refs: [https://github.com/peaceiris/actions-gh-pages#⭐️ React and Next](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-react-and-next)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
