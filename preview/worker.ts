// Private preview Worker for the readiness checker. Static assets from ./out plus
// the /api/readiness logic in dry run (no HubSpot token is ever bound here, and
// alerts are not wired). Access needs ?k=<key> once; a cookie carries it after.
import { handleReadiness } from '../lib/readiness/handler'

interface Env { ASSETS: { fetch: (r: Request) => Promise<Response> }; PREVIEW_KEY: string }

const NOINDEX = 'noindex, nofollow, noarchive'
const notFound = () => new Response('Not found', { status: 404, headers: { 'X-Robots-Tag': NOINDEX, 'Cache-Control': 'no-store' } })

function safeEqual(a: string, b: string) {
  if (!a || a.length !== b.length) return false
  let d = 0
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return d === 0
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const cookie = /(?:^|;\s*)ati_pk=([^;]+)/.exec(request.headers.get('Cookie') ?? '')?.[1] ?? ''
    const viaQuery = safeEqual(url.searchParams.get('k') ?? '', env.PREVIEW_KEY)
    if (!viaQuery && !safeEqual(cookie, env.PREVIEW_KEY)) return notFound()
    let res: Response
    if (url.pathname === '/robots.txt') res = new Response('User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain' } })
    else if (url.pathname === '/api/readiness') res = await handleReadiness(request, { DRY_RUN: 'true' })
    else if (url.pathname.startsWith('/api/')) res = notFound()
    else res = await env.ASSETS.fetch(request)
    res = new Response(res.body, res)
    res.headers.set('X-Robots-Tag', NOINDEX)
    res.headers.set('Cache-Control', 'no-store')
    if (viaQuery) res.headers.append('Set-Cookie', `ati_pk=${env.PREVIEW_KEY}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`)
    return res
  },
}
