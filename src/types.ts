import type {
  IGenBlogArticle,
  IGenFooter,
  IGenNavigation,
  IGenPage,
} from "./services/graphql/__generated/sdk";

export interface ILayout {
  redirectHome?: boolean;
  is404: boolean;
  Navigation: IGenNavigation;
  Footer: IGenFooter;
  BlogArticle: IGenBlogArticle;
  Page: IGenPage;
}

export interface MetaProps {
  data: {
    page: ILayout;
    publicURL?: string;
  };
}
