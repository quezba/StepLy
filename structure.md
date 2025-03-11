# **Project Structure - Next.js Boilterplate**
------

This document outlines the standard folder structure for our Next.js project

```
/src
 ├── /app
 │    ├── /page.tsx
 │    ├── /layout.tsx
 │    ├── /dashboard
 │    │      ├── /layout.tsx
 │    │      └── /[slug]
 │    │            └── /page.tsx
 │    ├── /api
 │    │     ├─  /users
 │    │     │   └── /[userId]
 │    │     │           └── /route.ts
 │    │     └── /data
 │    │           └── /[dataID]
 │    │                 └── /route.ts
 │    ├── /not-found.tsx
 │    └── /loading.tsx
 │
 ├── /components
 │    ├── ButtonBar.tsx
 │    ├── header.tsx
 │    └── playerFrame.tsx
 │
 ├── /public
 │    └── sampleImages
 │        └── screenshot.png
 ├── /styles
 │     └── /globals.css
 ├── /lib
 │    └── /middleware.ts
 └── /utils

```
