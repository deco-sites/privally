import { HandlerContext, Handlers } from "$fresh/server.ts";

const ALLOWLIST_URLS: Set<string> = new Set([
  "110005032.collect.igodigital.com",
  "www.googletagmanager.com",
  "collect.vendavalida.com.br",
  "cdn.pn.vg",
  "connect.facebook.net",
  "cdn.jsdelivr.net",
  "dynamic.criteo.com",
  "advcake.dataroyal.com.br",
  "websdk.appsflyer.com",
  "tag.rmp.rakuten.com",
  "www.google-analytics.com",
  "static.sizebay.technology",
  "secure.afilio.com.br",
  "x.cnt.my",
  "ss.lojastorra.com.br",
  "i.btg360.com.br",
  "gum.criteo.com",
  "googleads.g.doubleclick.net",
  "www.facebook.com",
  "us.creativecdn.com",
  "osp-assets.pn.vg",
  "b.smrk.io",
  "app.privally.global",
  "api.privally.global",
  "static.privally.io",
  "ss.privally.dev",
]);

const HOP_BY_HOP = [
  "Keep-Alive",
  "Transfer-Encoding",
  "TE",
  "Connection",
  "Trailer",
  "Upgrade",
  "Proxy-Authorization",
  "Proxy-Authenticate",
];

const generateProxyHandler = (
  { cachePolicy }: { cachePolicy: "cache" | "forward" },
) =>
async (req: Request, _: HandlerContext) => {
  const reqUrl = new URL(req.url);
  const _url = (reqUrl).searchParams.get("url");
  const url = _url ? new URL(_url) : undefined;

  if (
    !url ||
    !ALLOWLIST_URLS.has(url.host)
  ) {
    return new Response(null, {
      status: 404,
      headers: { "cache-control": "no-cache, no-store" },
    });
  }

  const reqHeaders = new Headers(req.headers);
  HOP_BY_HOP.forEach((h) => reqHeaders.delete(h));
  reqHeaders.set("x-forwarded-host", reqUrl.host);

  const response = await fetch(url, {
    headers: reqHeaders,
    redirect: "manual",
    method: req.method,
    body: req.body,
  });

  const headers = new Headers(response.headers);
  headers.delete("cross-origin-resource-policy");
  headers.delete("cross-origin-embedder-policy");
  if (cachePolicy === "cache") {
    headers.set("cache-control", "public, max-age=3600");
  } else if (cachePolicy === "forward") {
    const resCacheControl = response.headers.get("cache-control");
    resCacheControl && (headers.set("cache-control", resCacheControl));
  }

  if (response.status >= 300 && response.status < 400) { // redirect change location header
    const location = headers.get("location");

    if (location) {
      headers.set(
        "location",
        location.replace(url.origin, reqUrl.origin),
      );
    }
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export const handler: Handlers = {
  GET: generateProxyHandler({ cachePolicy: "cache" }),
  POST: generateProxyHandler({ cachePolicy: "forward" }),
};
