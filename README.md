# Remux Wiki

The Remux documentation site, built with [Fumapress](https://press.fumadocs.dev/).

## Development

Requires Node.js 24 or newer.

```bash
npm install
npm run dev
```

The site is available at `http://localhost:1337`.

## Checks

```bash
npm run lint
npm run types:check
npm run build
```

Wiki pages live in `content/docs`.

## Deployment

Push the project to the `main` or `master` branch on GitHub. The included GitHub Actions workflow builds the static site and publishes `dist/public` to `https://<owner>.github.io/<repository>/`.

In the repository settings, select **GitHub Actions** under **Settings → Pages → Build and deployment → Source**. No custom domain or DNS configuration is required.
