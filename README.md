# Fortis NonProfit

## Project Structure for Vercel

- `/client` — React/Vite frontend (static site)
- `/api` — Vercel serverless functions (backend logic, e.g., email)

## Deploying to Vercel

- Vercel will build the frontend from `/client` and serve static files from `/client/dist`.
- API endpoints are handled by files in `/api`.

## Local Development

- Run frontend: `cd client && npm install && npm run dev`
- Build frontend: `cd client && npm run build`

---

**Do not deploy the custom Express server to Vercel.**

All backend logic should be in `/api` as serverless functions.
