# SUPPLYMATE: VS Code Setup Guide

This guide moves the project from the Manus workspace to a local VS Code folder.

## 1. Install the requirements

Install these first:

- **VS Code**: https://code.visualstudio.com/
- **Git**: https://git-scm.com/downloads
- **Node.js 22 LTS**: https://nodejs.org/
- **pnpm 10**:

```bash
corepack enable
corepack prepare pnpm@10.4.1 --activate
```

## 2. Open the project in VS Code

### If you received the ZIP

1. Extract `SUPPLYMATE-vscode.zip` into a folder such as `Documents/SUPPLYMATE`.
2. Open VS Code.
3. Select **File → Open Folder** and choose the extracted `supplymate-site` folder.
4. Open **Terminal → New Terminal**.

### If the project is already on GitHub

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
code .
```

## 3. Install dependencies

Run this inside the project folder:

```bash
pnpm install
```

Do not copy `node_modules` from another computer. `pnpm install` recreates it from `package.json` and `pnpm-lock.yaml`.

## 4. Run the compulsory checks

Run these before showing the project to faculty:

```bash
pnpm check
pnpm test
pnpm build
```

Or run all three with one command:

```bash
pnpm check:all
```

What they check:

- `pnpm check` — TypeScript errors
- `pnpm test` — automated behavior tests
- `pnpm build` — production compilation

## 5. Start the local website

```bash
pnpm dev
```

Open the URL shown in the terminal, normally:

```text
http://localhost:3000
```

Stop the server with **Ctrl+C**.

## 6. Important environment note

The source code does **not** include private keys or database credentials. Full backend features such as Manus OAuth, MySQL/TiDB sync, storage uploads, and the AI Study Helper need the project environment variables supplied by the deployment environment.

Never commit `.env` files, API keys, database passwords, or OAuth secrets to GitHub.

For a faculty presentation, the safest options are:

1. Use the published SUPPLYMATE project for the full connected demonstration.
2. Use the local `pnpm dev` demo for code review and client-side flows.
3. If a full local backend is required, configure the approved environment variables privately on the machine.

## 7. Useful VS Code extensions

- ESLint — if linting is added later
- Prettier — code formatting
- TypeScript and JavaScript Language Features — built into VS Code
- GitLens — optional Git history view

## 8. Main files to explain

| File | What it does |
|---|---|
| `client/src/App.tsx` | Main screens, curriculum selection, roadmap, mock tests, PDF export, and Study Helper wiring |
| `client/src/components/AIChatBox.tsx` | Reusable AI chat interface and textbook-photo attachment control |
| `client/src/index.css` | SUPPLYMATE visual system and responsive styling |
| `server/routers.ts` | tRPC procedures for student sync, AI chat, and image upload |
| `server/_core/llm.ts` | Secure server-side LLM gateway wrapper |
| `server/storage.ts` | Secure image storage helper |
| `server/ai.test.ts` | Tests for image upload validation and vision-message forwarding |
| `drizzle/schema.ts` | Database schema |
| `package.json` | Project scripts and dependencies |

## 9. Suggested faculty demo order

1. Open the public landing page.
2. Click **Try the demo**.
3. Show the Intermediate, Diploma, and B.Tech level choices.
4. Select a regulation, semester, and supply subject.
5. Open a roadmap topic and mark progress.
6. Open a mock test and show the ten-question flow with explanations.
7. Download the offline study PDF.
8. Ask the Study Helper a question.
9. Attach a textbook photo and ask it to explain the question.
10. Explain that authenticated users can sync their saved state across devices through the backend.

## 10. Before presenting

```bash
pnpm check:all
```

Then start the app with `pnpm dev` and keep the terminal visible if faculty want to see the development server running.
