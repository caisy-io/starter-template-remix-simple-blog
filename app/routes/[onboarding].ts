import { LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async ({ request }) => {
  let url = new URL(
    `https://app.caisy.io/app/project/home?project_id=${process.env.CAISY_PROJECT_ID}&verify_template_setup=true`,
    request.url
  );

  return new Response(null, {
    status: 302, 
    headers: {
      Location: url.toString(),
    },
  });
};
