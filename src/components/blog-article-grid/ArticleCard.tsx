import React from "react";
import type { IGenBlogArticle } from "../../services/graphql/__generated/sdk";
import { Link } from "@remix-run/react";


export const ArticleCard: React.FC<IGenBlogArticle> = ({
  teaserImage,
  teaserHeadline,
  teaserDesciption,
  slug,
}) => {
  return (
    <div className="flex flex-col justify-between items-start flex-grow relative overflow-hidden gap-7 lg:w-3/12 md:w-2/5 sm:w-full">
      <div>
        {teaserImage?.src && (
          <div className="self-stretch h-[300px] md:h-[220px] relative overflow-hidden rounded-lg">
            <img
              loading="lazy"
              src={`${teaserImage.src}?w=1024`}
              srcSet={`${teaserImage.src}?w=1024 1920w, ${teaserImage.src}?w=1024 1280w, ${teaserImage.src}?w=480 640w, ${teaserImage.src}?w=480 320w`}
              alt={teaserImage.description ?? ""}
              className="object-cover object-top  w-full h-full"
            />
          </div>
        )}
        <div className="flex flex-col justify-start items-start relative gap-3 mt-3">
          <h2 className="text-xl font-semibold text-left text-gray-600">
            {teaserHeadline}
          </h2>
          <p className="text-base text-left text-gray-600">
            {teaserDesciption}
          </p>
        </div>
      </div>
      <div>
        <Link to={`/blog/${slug}`} className="pointer" title="Visit blog">
          <div className="flex justify-start items-start">
            <div className="flex justify-center items-center relative overflow-hidden gap-2 rounded-md bg-white">
              <p
                className="text-[15px] font-semibold text-center text-blue-600"
                title="Visit blog"
              >
                Visit Blog
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.06525 1.4403C4.10589 1.39956 4.15417 1.36723 4.20732 1.34518C4.26048 1.32312 4.31746 1.31177 4.375 1.31177C4.43255 1.31177 4.48953 1.32312 4.54268 1.34518C4.59584 1.36723 4.64411 1.39956 4.68475 1.4403L9.93475 6.6903C9.9755 6.73094 10.0078 6.77922 10.0299 6.83237C10.0519 6.88552 10.0633 6.9425 10.0633 7.00005C10.0633 7.0576 10.0519 7.11458 10.0299 7.16773C10.0078 7.22088 9.9755 7.26916 9.93475 7.3098L4.68475 12.5598C4.6026 12.642 4.49118 12.6881 4.375 12.6881C4.25882 12.6881 4.1474 12.642 4.06525 12.5598C3.9831 12.4776 3.93695 12.3662 3.93695 12.25C3.93695 12.1339 3.9831 12.0225 4.06525 11.9403L9.00638 7.00005L4.06525 2.0598C4.02451 2.01916 3.99219 1.97088 3.97013 1.91773C3.94807 1.86458 3.93672 1.8076 3.93672 1.75005C3.93672 1.6925 3.94807 1.63552 3.97013 1.58237C3.99219 1.52922 4.02451 1.48094 4.06525 1.4403Z"
                  fill="#2563EB"
                ></path>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
