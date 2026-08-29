// In dev, Vite proxies /api to the Spring Boot backend (see vite.config.js).
// In production, set VITE_API_BASE_URL to your deployed backend's URL, e.g.
// https://api.sczhao.me
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export async function fetchProjects() {
  const res = await fetch(`${BASE_URL}/api/projects`)
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status}`)
  }
  return res.json()
}
