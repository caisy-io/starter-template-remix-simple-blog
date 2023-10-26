import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  getMetadataProps,
  getPublicUrl,
} from "../../src/services/content/getHeadProps";
import { useLoaderData } from "@remix-run/react";
import { EPageType, getProps } from "../../src/services/content/getProps";
import { Layout } from "../../src/layouts/Layout";
import type { ILayout, MetaProps } from "../../src/types";

export const meta = (props: MetaProps): ReturnType<MetaFunction> => {
  return props?.data?.page?.Page
    ? getMetadataProps(props.data.page.Page.seo, props.data.publicURL)
    : [];
};

export const loader = async () => {
  const page = await getProps({ pageType: EPageType.NotFound });

  return json(
    { page, publicURL: getPublicUrl() },
    {
      headers: {
        "Cache-Control": "s-maxage=1, stale-while-revalidate",
      },
    }
  );
};

export default function NofFound() {
  const { page } = useLoaderData<typeof loader>();
  return <Layout {...(page as ILayout)} />;
}
