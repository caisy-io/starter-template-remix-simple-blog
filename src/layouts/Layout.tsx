import { FC } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Page } from "./Page";
import type { ILayout } from "../types";
import { EPageType } from "../services/content/getProps";
import { FullText } from "../components/fulltext/FullText";

export const Layout: FC<ILayout & { pageType?: EPageType }> = (props) => {
  return (
    <>
      <Navigation {...props?.Navigation} />
      <main>
        {props.pageType === EPageType.Blog ? (
          <FullText {...props?.BlogArticle} />
        ) : (
          <Page {...props?.Page} />
        )}
      </main>
      <Footer {...props?.Footer} />
    </>
  );
};
