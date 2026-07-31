const DEFAULT_SITE_URL = "https://solarluxkenya.co.ke";

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.PAYLOAD_PUBLIC_SERVER_URL ||
    DEFAULT_SITE_URL;

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getCanonicalUrl(
  configuredCanonical: string | undefined,
  fallbackPath: string,
) {
  const siteUrl = getSiteUrl();

  if (!configuredCanonical) {
    return `${siteUrl}${fallbackPath}`;
  }

  try {
    const canonical = new URL(configuredCanonical, siteUrl);
    return canonical.origin === siteUrl
      ? canonical.toString()
      : `${siteUrl}${fallbackPath}`;
  } catch {
    return `${siteUrl}${fallbackPath}`;
  }
}
