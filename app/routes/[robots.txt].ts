import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const headers = new Headers(request.headers);
  const baseUrl = `https://${
    request.headers.get("host") || request.headers.get("x-forwarded-host")
  }`;

  const robots = `
  # *
  User-agent: *
  Allow: /
      
  # Host
  Host: ${baseUrl}
      
  # Sitemaps
  Sitemap: ${baseUrl}/sitemap.xml
  `;

  headers.set("Content-Type", "text/plain");
  headers.set("Cache-Control", `max-age=${60 * 60 * 1}`); // 1 hour cache
  return new Response(robots, {
    status: 200,
    headers,
  });
};
