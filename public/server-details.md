# Server & Architecture Overview

This document provides a technical deep-dive into the technologies and architectural patterns powering the Bryan MacMurray AI Portfolio.

## 1. High-Level Architecture
The application utilizes a **Decoupled "Static-First" Architecture**. This approach separates the user interface (UI) from the heavy computational logic of the AI agents, ensuring high performance, security, and lower maintenance overhead.

- **Frontend Interface:** Built with **Next.js 14** (App Router). It is exported as a fully static site to eliminate server-side vulnerabilities and ensure near-instant loading times.
- **Automation Backend:** Powered by **n8n**, a low-code workflow automation tool that acts as the "brain" of the application, orchestrating API calls and data flow.
- **AI Intelligence:** Leverages **Gemini 2.5 Flash** models via API for natural language understanding and response generation.
- **Data Management:** **Notion** serves as the primary database for lead capture, session tracking, and project management.

## 2. Technical Implementation Breakdown

### Interactive AI Chatbot & RAG Logic
The chatbot is more than a simple chat interface; it implements a **Retrieval-Augmented Generation (RAG)** pipeline:

1.  **Ingestion & Knowledge:** The AI agent is grounded with local knowledge including the [Full Resume](/resume-full.md) and this [Architecture Overview](/server-details.md). 
2.  **Intent Processing (n8n):** When a user sends a message, an n8n webhook receives the payload. The workflow determines the intent (e.g., "Answer Question", "Schedule Meeting", "View Resume").
3.  **Dynamic Rendering:** The frontend uses `react-markdown` with `rehype-raw` to render the AI's response. This allows the bot to return rich media, including:
    *   **Responsive Images:** Restricted to 40% width for optimal chat UI.
    *   **Interactive Links:** All links and images automatically open in new tabs to maintain session state.
    *   **Formatted Tables:** For clear presentation of skills and experience.
4.  **Markdown Normalization:** To prevent rendering artifacts common in LLM outputs, a custom regex layer ensures proper double-newline spacing for paragraphs and media.

- **Lead Capture & Compliance Logic**
To balance user engagement with professional data standards:
- **Lead Gate:** A custom React component captures user details (Name, Work Email, Company) before unlocking the chatbot.
- **Validation:** Client-side logic filters for valid work emails, preventing common spam domains from triggering backend workflows.
- **Storage:** Data is transmitted via a production n8n webhook to a **Notion User Database**.

### Project Management Workflow
Development progress is synchronized between the codebase and a **Notion Project Tracker**. 
- **Automated Updates:** The AI agent can query and update Notion tasks directly, ensuring the project documentation stays in sync with implementation.

## 3. Tech Stack Deep-Dive

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 | SSG (Static Site Generation) & Routing |
| **Language** | TypeScript | Type safety and build-time error detection |
| **Orchestration** | n8n | Workflow automation & API bridging |
| **AI Models** | Gemini 1.5 Pro/Flash | NLP & Decision Making |
| **Database** | Notion API | Lead tracking & Project management |
| **Analytics** | GTM / Clarity | UX analysis & Event tracking |

## 4. Security & Deployment
- **Static Export:** The site is compiled into static HTML/JS/CSS, removing the need for a Node.js server and significantly hardening the application.
- **Environment Safety:** All sensitive API keys and IDs are managed via environment variables and are never exposed to the client-side code.
- **Encrypted Webhooks:** Communication between the static frontend and n8n backend is strictly conducted over HTTPS with session-based identification.
