# Technical Overview: Bryan MacMurray's AI Portfolio

This document provides a technical deep-dive into the architecture, integration patterns, and deployment strategies of the portfolio application.

## 1. System Architecture

The application is a **Decoupled Static Frontend** that interacts with an external **Automation Backend (n8n)**. 

### Core Components:
- **Frontend:** Next.js 14 (App Router) with TypeScript.
- **Backend:** n8n Workflow Engine (External).
- **Storage/Hosting:** Static files served via GitHub Pages.
- **SEO/GEO Layer:** JSON-LD structured data for search and AI agent indexing.

---

## 2. Frontend Implementation

### Routing & Static Generation
- **Strategy:** Static Site Generation (SSG).
- **Configuration:** `output: 'export'` in `next.config.js`.
- **Static Hosting Fixes:** 
  - `trailingSlash: true` ensures that routes like `/resume` generate as `resume/index.html`, preventing 404s on static hosts without complex redirect rules.
  - `unoptimized: true` for images to avoid reliance on Next.js server-side image optimization.

### Component Design
- **State Management:** Local React state (`useState`) and refs (`useRef`) are used for the Chatbot interface to maintain session consistency without complex global stores.
- **Theming:** Custom CSS variables in `globals.css` provide a unified design system without the overhead of utility-first frameworks (Tailwind) or heavy component libraries.

---

## 3. AI & Chatbot Integration

The chatbot is the primary interactive element, acting as a bridge between the user and Bryan's professional data.

### Request Pipeline:
1. **Payload Construction:** The frontend gathers text input and optional file attachments using the `FormData` API.
2. **Session Identification:** A unique `sessionId` is generated per client session to allow the n8n backend to maintain conversation memory.
3. **Webhook Execution:** An asynchronous `fetch` call is made to a specific n8n webhook endpoint.
4. **Response Parsing:** The system dynamically handles various response keys (`output`, `response`, `text`) to ensure compatibility with different n8n workflow outputs.
5. **Markdown Rendering:** `react-markdown` with `remark-gfm` and `rehype-raw` is used to render rich text, tables, and links returned by the AI.

---

## 4. SEO & Agentic Engine Optimization (AEO/GEO)

The project implements specific strategies to be "Agent-friendly":
- **Schema.org Integration:** The `SchemaLD` component injects structured data into the `<head>` of every page, explicitly defining the `Person` and `WebPage` entities.
- **Markdown Mirroring:** Professional content is maintained both in interactive React components and as raw Markdown files in `/public`. This ensures that crawlers and LLMs can ingest the full resume content in a clean, structured format.

---

## 5. Deployment Workflow

The project uses a custom build-and-move script in `package.json`:

```bash
next build && (rm -rf dist || true) && mv out dist
```

1. **`next build`**: Triggers the standard Next.js build and static export to the `out/` folder.
2. **`rm -rf dist`**: Clears previous build artifacts.
3. **`mv out dist`**: Moves the production-ready files to `dist/`, which is the directory typically tracked or used by the deployment agent for GitHub Pages.

---

## 6. Core Dependencies

| Dependency | Purpose |
| :--- | :--- |
| `next` | React framework for SSG and routing. |
| `react-markdown` | Renders AI responses with full Markdown support. |
| `remark-gfm` | Adds GitHub Flavored Markdown (tables, task lists) support. |
| `rehype-raw` | Allows rendering of raw HTML within Markdown (used for bot UI elements). |
| `typescript` | Ensures type safety across the application. |
| `analytics` | Abstracted analytics engine for managing tracking containers (GTM). |
