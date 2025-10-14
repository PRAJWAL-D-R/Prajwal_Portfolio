## Deploying to Vercel

### Prerequisites
- Vercel account and the Vercel CLI installed: `npm i -g vercel`
- Notion content is configured in `site.config.ts`.

### Required environment variables
Set these in Vercel Project Settings → Environment Variables (Production and Preview):

- `RESEND_API_KEY` — for `pages/api/send-email.ts`
- `NEXT_PUBLIC_FATHOM_ID` — optional
- `NEXT_PUBLIC_POSTHOG_ID` — optional
- `REDIS_ENABLED` — optional (`true`/`false`)
- `REDIS_HOST` — optional
- `REDIS_PASSWORD` — optional
- `REDIS_USER` — optional (default `default`)
- `REDIS_URL` — optional
- `REDIS_NAMESPACE` — optional (default `preview-images`)

Note: `PORT` is managed by Vercel automatically.

### One-time setup (CLI)
1. Login: `vercel login`
2. From the project root, link or create the Vercel project: `vercel`
   - When prompted, select the scope and project name
   - Confirm framework detection (Next.js)

### Deploy
- Preview deploy: `vercel`
- Production deploy: `vercel --prod`

### Custom domain
1. Add `prajwaldr.dev` in Vercel Project → Domains
2. Update your DNS to the records Vercel provides
3. Set `prajwaldr.dev` as primary

### Notes
- `vercel.json` is provided to pin Node runtime and pnpm usage.
- Build uses `pnpm build`; lockfile `pnpm-lock.yaml` is present.

