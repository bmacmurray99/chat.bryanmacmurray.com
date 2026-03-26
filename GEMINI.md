# Project Overview: Bryan MacMurray's AI Portfolio

This project is a personal portfolio and interactive resume for Bryan MacMurray. It is built using **Next.js 14** with **TypeScript** and **Vanilla CSS**. The site is designed for static hosting (e.g., GitHub Pages) using Next.js's `output: 'export'` feature.

### Key Features
- **AI Chatbot:** An interactive assistant that uses an external **n8n** webhook (`https://n8n.contextaware.xyz`) to answer questions about Bryan's experience and resume.
- **Static Resume:** A dedicated resume page (`/resume`) and markdown versions available in the `public/` folder (`resume.md`, `resume-full.md`).
- **Google Calendar Integration:** Embedded appointment scheduling for booking meetings.
- **SEO/GEO Optimization:** Includes Schema.org structured data (JSON-LD) for better visibility in search engines and AI agents.
- **Analytics:** Integrated **Google Tag Manager (GTM)** via the **Analytics** library for flexible tracking and event management.

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (globals.css)
- **AI Integration:** n8n (Webhook), React Markdown (for bot responses)
- **Analytics:** Analytics Engine (`analytics`, `@analytics/google-tag-manager`)
- **Deployment:** Static Export (`out/` directory, renamed to `dist/`)

---

## Analytics Configuration

The site uses the `analytics` library with the Google Tag Manager plugin. Configuration is handled through environment variables (see `.env.example`):

- **Google Tag Manager (GTM):** Configured via `NEXT_PUBLIC_GTM_ID` in `lib/analytics.ts`.

Tracking is initialized in the `Providers` component to ensure client-side execution.

---

## Building and Running

### Development
To run the project locally in development mode:
```bash
npm run dev
```

### Production Build
To generate a static export of the site:
```bash
npm run build
```
The build process generates an `out/` directory, which is then moved to `dist/` for deployment.

### Linting
To run the ESLint check:
```bash
npm run lint
```

---

## Development Conventions

### Routing
- Uses the **Next.js App Router**.
- **Trailing Slashes:** Enabled in `next.config.js` (`trailingSlash: true`) to ensure compatibility with static hosting environments like GitHub Pages.

### Component Structure
- **`app/`**: Contains page definitions (`page.tsx`) and layouts (`layout.tsx`).
- **`components/`**: Houses reusable UI components like `Chatbot.tsx`, `Providers.tsx`, and `SchemaLD.tsx`.
- **`public/`**: Static assets including resume markdown files and site verification files.

### Styling
- Primary styling is handled in `app/globals.css`.
- Uses CSS variables for consistent branding (colors, spacing, fonts).
- Prefers a dark-themed, modern aesthetic with linear gradients for accents.

### Chatbot Logic
- The chatbot communicates with a specific n8n webhook. 
- **Image Rendering:** Supports markdown image rendering (`![alt](url)`). Includes a post-processing step to detect raw image URLs and convert them to markdown syntax.
- **Image Styling:** Images are styled to be responsive, limited to **40% width** of the chat container, and are wrapped in anchor tags to **open in a new tab** upon clicking.
- **Markdown Parsing:** Uses `react-markdown` with `remark-gfm` and `rehype-raw`. Added a regex fix to ensure double-newlines for proper paragraph and image separation in bot responses.
- It includes basic file upload capabilities for providing context to the AI (handled via `FormData`).

### Production Configuration
- **Webhooks:** The production gate webhook is configured to `https://n8n.contextaware.xyz/webhook/a444ecf0-d162-4cf4-a546-89fcbfd3624d`.
- **TypeScript:** Strict typing is enforced in the chatbot component, specifically for regex replacement callbacks to ensure successful production builds.

### Project Management
- **Notion Integration:** A dedicated Notion project and tasks database are used to track development progress.
  - **Project Page:** [Website Project: AI Portfolio](https://www.notion.so/32f62f842a328101b94af40f1930d7d1)
  - **Tasks Database:** [Project Tasks](https://www.notion.so/7014af3c5fea4b3d90a129da518fc2c7)

### Data Practices
- **SEO:** Every page should include relevant `SchemaLD` components.
- **Privacy:** A basic privacy policy page is maintained at `/privacy`.
