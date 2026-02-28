import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files inside /public (e.g. favicon.ico)
         */
        '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
    ],
};

export default function middleware(req: NextRequest) {
    const url = req.nextUrl;

    // Get hostname of request (e.g. demo.clinicos.com, demo.localhost:3000)
    const hostname = req.headers.get('host') || 'localhost:3000';

    // Only consider localhost or clinicos domains for subdomain parsing
    const isLocalhost = hostname.includes('localhost');

    // Extract subdomain (remove port if any, remove base domain)
    // For demo.localhost:3000 -> demo
    // For demo.clinicos.com -> demo
    let subdomain = '';
    const domainParts = hostname.replace(/:\d+$/, '').split('.');

    // Assuming 2 parts for localhost (subdomain.localhost), or 3 parts for prod (subdomain.clinicos.com)
    if (isLocalhost && domainParts.length >= 2) {
        if (domainParts[0] !== 'localhost') {
            subdomain = domainParts[0];
        }
    } else if (!isLocalhost && domainParts.length >= 3) {
        subdomain = domainParts[0];
        // Avoid "www"
        if (subdomain === 'www') {
            subdomain = domainParts[1];
        }
    }

    // If there's a valid subdomain, rewrite the request to the dynamic route
    if (subdomain && subdomain !== 'www' && subdomain !== 'clinicos') {
        // Rewrite /path to /clinics/subdomain/path
        return NextResponse.rewrite(new URL(`/clinics/${subdomain}${url.pathname}`, req.url));
    }

    // If no subdomain is present, serve normally
    return NextResponse.next();
}
