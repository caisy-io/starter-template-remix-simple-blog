import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProps } from "../../src/services/content/getProps";
import {
  getMetadataProps,
  getPublicUrl,
} from "../../src/services/content/getHeadProps";
import { Layout } from "../../src/layouts/Layout";
import type { ILayout, MetaProps } from "../../src/types";

export const meta = (props: MetaProps): ReturnType<MetaFunction> => {
  return props?.data?.page?.Page
    ? getMetadataProps(props.data.page.Page.seo, props.data.publicURL)
    : [];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  let slug = params.slug;

  if (slug === "home") {
    return redirect("/");
  }

  if (!slug) slug = "home";
  const page = await getProps({ slug });

  if (page.is404) {
    return redirect("/404");
  }

  return json(
    { page, publicURL: getPublicUrl() },
    {
      headers: {
        "Cache-Control": "s-maxage=1, stale-while-revalidate",
      },
    }
  );
};

export default function SlugPage() {
  const { page } = useLoaderData<typeof loader>();
  return <Layout {...(page as ILayout)} />;
}
