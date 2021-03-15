# blog.github.io

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Create Project

### Create Next.js App

```txt
> npx create-next-app matsudai.github.io
npx: installed 1 in 4.928s
Creating a new Next.js app in C:\xxxxx\matsudai.github.io.

Installing react, react-dom, and next using npm...

<<snip>>

Success! Created matsudai.github.io at C:\xxxxx\matsudai.github.io.
```

### Create src directory and move sources

```txt
> mkdir src
> git mv pages src\
> git mv styles src\
```

### SASS

※ UNINSTALLED in current version because Tailwind CSS recommend CSS but not SCSS.

```txt
> npm install sass
```

### Typescript

```txt
> touch tsconfig.json
> npm install --save-dev typescript @types/react @types/node
> npm run dev # -> default tsconfig.json is written.
```

### ESLint

```txt
> npx eslint --init

? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style

? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? ...
> React
  Vue.js
  None of these

? Does your project use TypeScript? » No / > Yes

? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node

? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
? Which style guide do you want to follow? ...
> Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google

? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON

---

√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JavaScript
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

* Install VSCode extension: bradlc.vscode-tailwindcss in order to syntax highlight .scss
* UNINSTALL SCSS because ↑ extension is for .css but not .scss

```txt
> npm uninstall sass
```

## Storybook

* refs: https://storybook.js.org/tutorials/intro-to-storybook/react/ja/get-started/

```txt
> npx -p @storybook/cli sb init
> npm i -D css-loader @storybook/addon-a11y @storybook/addon-essentials @storybook/addon-knobs
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
