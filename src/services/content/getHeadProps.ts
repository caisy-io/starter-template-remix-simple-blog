import type { Maybe } from "graphql/jsutils/Maybe";
import type { IGenSeoInformation } from "../graphql/__generated/sdk";

export const getPublicUrl = () => {
  return process.env.REMIX_PUBLIC_SITE_URL
    ? process.env.REMIX_PUBLIC_SITE_URL
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
};

export const getMetadataProps = (seo: Maybe<IGenSeoInformation>, publicURL) => {
  const ogImageSrc = seo?.ogImage?.src;
  const ogImageAlt = seo?.ogImage?.description;

  const metadata: {}[] = [
    { property: "og:locale", content: "en_US" },
    { name: "url", content: publicURL },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:type", content: "website" },
  ];

  if (!seo) return metadata;

  if (seo.title) {
    metadata.push(
      { title: seo.title },
      { property: "og:title", content: seo.title },
      { name: "twitter:title", content: seo.title }
    );
  }

  if (seo.description) {
    metadata.push(
      { name: "description", content: seo.description },
      { property: "og:description", content: seo.description },
      { name: "twitter:description", content: seo.description }
    );
  }

  if (ogImageSrc) {
    metadata.push(
      { property: "og:image", content: ogImageSrc },
      { property: "og:image:secure_url", content: ogImageSrc },
      { name: "twitter:image", content: ogImageSrc },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" }
    );
  }

  if (ogImageAlt) {
    metadata.push(
      { property: "og:image:alt", content: ogImageAlt },
      { name: "twitter:image:alt", content: ogImageAlt }
    );
  }
  return metadata;
};
