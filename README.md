# ElektroMaks
Official website for Elektro Maks DOO – electrician services and company presentation.

## Development

```bash
npm install
npm run dev
```

## Build for Hostinger Git deployment

Hostinger shared hosting serves files from the repository root. This project
source lives in `apps/web`, so run the command below before deploying from Git:

```bash
npm run build:hostinger
```

This creates the production build and exports these files to the repository
root so Apache can serve the site directly:

- `index.html`
- `assets/`
- `.htaccess`
- `llms.txt` (if generated)
