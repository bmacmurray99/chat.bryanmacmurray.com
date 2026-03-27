# Server & Architecture Overview

This document provides a high-level overview of the technologies and architecture powering this portfolio application.

## 1. High-Level Architecture
The application follows a **Decoupled Architecture** designed for high performance, security, and scalability.

- **Frontend Interface:** A modern, static web application built with **Next.js 14**.
- **Automation Backend:** A specialized **n8n** workflow engine that handles logic, AI interactions, and data processing.
- **Data Management:** Structured storage systems (e.g., Notion) are used for secure data retention and project tracking.
- **Delivery:** High-performance static assets and local media files served directly from the application's production build.

## 2. Technical Implementation
### Interactive AI Chatbot
The chatbot serves as an interactive bridge between users and the site's content.
- **Processing:** Real-time intent analysis and response generation handled by backend AI agents.
- **Rendering:** Full support for Markdown, GitHub Flavored Markdown (GFM), and responsive media.
- **Interface:** Custom-built React components designed for low-latency feedback.

### Security & Privacy
- **Encrypted Communication:** All data transfer between the client and backend services is conducted over secure HTTPS connections.
- **Gated Access:** Lead capture is handled through a secure validation process before data is committed to persistent storage.
- **Static Security:** By exporting the frontend as a static site, the application minimizes its attack surface.

## 3. Tech Stack
- **Framework:** Next.js (TypeScript)
- **Styling:** Vanilla CSS
- **Workflow Automation:** n8n
- **Data Integration:** Secure APIs (Notion)
- **Hosting:** Static Site Deployment
