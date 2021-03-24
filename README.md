# Svelte + Vite + Tailwind JIT + Routify (Maybe)
> This template should help get you started developing with Svelte in Vite.

## Features
- [x] Svelte
- [x] Vite
- [x] Prettier
- [x] ESLint
- [x] Aliasing
- [x] Netlify SPA
- [x] Tailwind JIT
- [ ] Routify

## Why?
- This is a starter I want to use to replace the defacto Rollup starter provided by Svelte, which is verbose and slow as hell for development purposes. See [Quiller Bee Repo](https://github.com/quillerbee/job-portal)
- Svelte Kit is not yet ready.
- Using Sapper is like going backwords. (Even though Svelte Kit is going to have migration guide for Sapper users.)

## Issues:
- Currently Routify doesn't work in Dev mode. I have raised issues in both Vite & Routify repos.
- I moved routify setup to `vite-routify-issue` branch.
- Tickets:
  - https://github.com/vitejs/vite/issues/2647
  - https://github.com/roxiness/routify/issues/353
