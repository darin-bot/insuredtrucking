// Cloudflare Pages Function: POST /api/readiness
import { handleReadiness, type ReadinessEnv } from '../../lib/readiness/handler'

interface Ctx { request: Request; env: ReadinessEnv }

export const onRequestPost = (ctx: Ctx) => handleReadiness(ctx.request, ctx.env)
export const onRequest = () =>
  new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } })
