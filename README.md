# SUPPLYMATE

A structured study desk for Telangana students clearing supply/backlog exams.

## GitHub Pages deployment

This repository includes `.github/workflows/deploy-pages.yml`. It builds and deploys the **static client/demo** to GitHub Pages whenever code is pushed to `main`.

### Setup

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch, or run **Deploy SUPPLYMATE to GitHub Pages** from the Actions tab.
5. GitHub will publish the site at:

   `https://<your-github-username>.github.io/<repository-name>/`

The workflow automatically sets the Vite base path to the repository name and creates a `404.html` SPA fallback.

### Local static build

```bash
pnpm install
pnpm build:pages
```

The static files are generated in `dist/public`.

## Important GitHub Pages limitation

GitHub Pages is a static host. It can run the SUPPLYMATE landing page, demo flow, local progress tracking, mock tests, and client-side PDF generation, but it **cannot run** the project’s Express/tRPC server, Manus OAuth callback, or MySQL/TiDB database.

That means the GitHub Pages version is suitable for a frontend demonstration. For real account login, cross-device sync, and database-backed student progress, keep using the Manus deployment or deploy the server separately and configure a matching API endpoint.

The existing full-stack build remains available:

```bash
pnpm build
pnpm start
```

## VS Code and faculty review

For local setup, compulsory code checks, the file map, and a suggested faculty demo order, read [VS_CODE_SETUP.md](./VS_CODE_SETUP.md).
