# sczhao.me

Personal site. Two independent pieces that do **not** depend on each other:

- `frontend/` — React + Vite static site. This is what `sczhao.me` serves (Cloudflare Pages). Project data is a static file, no API calls.
- `backend/` — Spring Boot + Maven REST API. A standalone learning project for the work stack (Spring Boot + Maven + React). Not wired into the live site yet.

## Frontend

Needs Node 20 (via `mise`, see `mise.toml`).

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs frontend/dist/
npm run preview  # serve the built site
```

Projects are edited in `src/data/projects.json`.

### Deploy (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect `scdevs97/website`.
2. Build settings:
   - Root directory: `frontend`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Pages project → Custom domains → add `sczhao.me`. Cloudflare creates the DNS record automatically.

Every push to `main` redeploys.

## Backend

Needs Java 21 + Maven (via `mise`).

```bash
cd backend
mvn spring-boot:run      # http://localhost:8080/api/projects
mvn clean package        # target/website-0.1.0.jar
```

In-memory data (`ProjectService`), resets on restart. CRUD at `/api/projects`.

### Roadmap

1. Swap in-memory `ProjectService` for JPA + Postgres.
2. Add auth and a real domain (see notes on project ideas — e.g. a personal API aggregator).
3. Add tests (`spring-boot-starter-test` is already included).
4. Deploy to Railway at `api.sczhao.me`, then optionally point the frontend at it.
