# Copilot / AI Agent Instructions for this repo

This repository is a small two-part portfolio app: a Vite + React client in `client/` and a tiny Node-based mock API/server in `server/` that serves JSON data from `server/data/`.

Keep guidance short and specific to patterns discovered in the codebase.

- **Architecture (big picture):**
  - **Frontend:** `client/` is a Vite + React app (entry `client/src/main.jsx`, components under `client/src/components/`).
  - **Backend / Mock API:** `server/server.js` implements a compact HTTP server with a plugin-based context (storage, auth, util, rules). It loads seed data from `server/data/*.json` and exposes services at top-level routes like `/data`, `/users`, `/util`, `/admin`.
  - The server is intentionally simple and meant as a development/mock API; it embeds an admin index HTML for production mode but can read `./client/index.html` in dev mode.

- **How to run / developer workflows:**
  - Frontend (dev):
    - From `client/`: run `npm install` then `npm run dev` to start Vite (HMR).
  - Backend (mock server):
    - From `server/`: run `npm install` then `npm start` (runs `node server.js`) — server listens on port `3030` by default.
  - Running both locally while developing: open two terminals — one running `client` dev server, one running `server`.
  - Server dev mode: start server with `node server.js -dev` (server will read `./client/index.html` instead of using the embedded template). Use this if you want server to serve the file copy from `client/` instead of the embedded HTML.

- **Build / preview**
  - Build frontend: `cd client && npm run build`.
  - Preview static build: `cd client && npm run preview` (Vite preview) or let `server` serve built assets (server already knows to serve files under `./client/` when requested).

- **API patterns & examples (useful for code generation/testing):**
  - Collections and endpoints come from `server/data/*.json`. Example: `server/data/recipes.json` maps to endpoints under `/data/recipes`.
  - CRUD: `GET /data/:collection`, `GET /data/:collection/:id`, `POST /data/:collection`, `PUT /data/:collection/:id`, `PATCH /data/:collection/:id`, `DELETE /data/:collection/:id`.
  - Example curl to list recipes:
    - `curl http://localhost:3030/data/recipes`
  - Authentication: register/login via `/users/register` and `/users/login` (server `identity` is `email`). After login you will receive an access token; pass it on requests as header `X-Authorization: <token>`.
    - Register: `POST /users/register` body: `{ "email": "a@b.c", "password": "pass" }`.
    - Login: `POST /users/login` body: `{ "email": "a@b.c", "password": "pass" }`.

- **Server internals to preserve when editing or extending**
  - `server/server.js` implements a small plugin system: plugins decorate `context` with `storage`, `auth`, `util`, and `rules`. Respect these extension points.
  - `storage` exposes `get`, `add`, `set`, `merge`, `delete`, and `query` — many services and tests rely on these behaviors and error types (e.g., throwing `ReferenceError` for missing collections/entries).
  - Access rules are configured via the `rules` object inside server settings — property-level rules are supported and sometimes encoded as strings evaluated with `eval`. Be careful when editing rule logic.

- **Patterns & conventions in this repo**
  - Small, self-contained mock server rather than Express — handlers expect plain Node `http` requests and use a custom `Service` class (see `server/server.js`).
  - Seed data is stored as static JSON in `server/data/` and loaded at server start. Changes made by API requests modify in-memory data only (not persisted to disk).
  - The client uses React Router (`client/src/main.jsx` -> `BrowserRouter`), and components live under `client/src/components/` with one component per folder.
  - Linting: run `cd client && npm run lint` (ESLint config in `client/eslint.config.js`).

- **What to avoid/attention items for AI agents**
  - Do not assume a full production database — the server is an in-memory mock backed by JSON files. Persisted state does not survive server restart.
  - Server code contains inlined errors and string-eval rules; avoid large refactors that change the plugin contract unless tests / manual verification are planned.
  - When updating server routes, keep the service naming conventions (`data`, `users`, `util`, `admin`) — the frontend expects these endpoints.

- **Key files to reference while coding**
  - `server/server.js` — single-file mock server and the most important source of truth for API behavior.
  - `server/data/*.json` — seed collections used by the API.
  - `client/package.json` and `client/src/` — React app entry points and scripts.
  - `client/eslint.config.js` — linting rules used by the project.

If anything here is unclear or you want me to add examples for specific tasks (writing a new endpoint, updating auth, or creating tests), tell me which area to expand. 
