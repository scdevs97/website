# sczhao.me

Personal site — built to learn Spring Boot + Maven + React (the stack used at work).

- `backend/` — Spring Boot + Maven REST API (in-memory data for now)
- `frontend/` — React app built with Vite

## Run it locally

**Backend** (needs Java 21 + Maven installed, or just run `WebsiteApplication` from your IDE):
```bash
cd backend
mvn spring-boot:run
```
No Maven installed? `mvn -N io.takari:maven:wrapper` (run once, needs Maven itself) or simplest: open the `backend/` folder in IntelliJ/VS Code and run `WebsiteApplication.java` directly — both handle dependencies for you.
Runs on http://localhost:8080. Try http://localhost:8080/api/projects.

**Frontend** (needs Node 18+):
```bash
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173 and proxies `/api/*` calls to the backend (see `vite.config.js`), so no CORS issues in dev.

## Push to GitHub

From the root of this project:
```bash
git init
git add .
git commit -m "Initial scaffold: Spring Boot backend + React frontend"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploying

- **Frontend**: `npm run build` in `frontend/` produces `frontend/dist/`. Deploy that to GitHub Pages, Vercel, or Netlify, and point `sczhao.me`'s DNS at it.
- **Backend**: Spring Boot needs a real runtime (not GitHub Pages). Railway or Render both deploy straight from a GitHub repo and have free/hobby tiers — point them at the `backend/` folder. Once deployed, set the frontend's `VITE_API_BASE_URL` env var to the backend's URL (e.g. `https://api.sczhao.me`) and add that same URL to `allowedOrigins` in `CorsConfig.java`.
- Consider a subdomain like `api.sczhao.me` (CNAME record) pointed at your backend host, separate from the apex domain serving the frontend.

## Next steps as you learn

1. Swap the in-memory `ProjectService` for a JPA repository (start with H2, move to Postgres).
2. Add a `/api/contact` endpoint with email sending (e.g. via Spring Mail).
3. Add tests (`spring-boot-starter-test` is already included).
4. Add a build/deploy GitHub Action so pushes to `main` auto-deploy both sides.
