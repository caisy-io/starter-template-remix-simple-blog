import { Link, useLocation } from "@remix-run/react";
import React from "react";
import type { IGenNavigation } from "../services/graphql/__generated/sdk";

export const Navigation: React.FC<IGenNavigation> = ({ entries, homePage }) => {
  const slug = useLocation()?.pathname?.split("/")[1];
  return (
    <header className="flex flex-wrap m-10 z-50 bg-white text-sm">
      <nav className="mx-auto" aria-label="Global">
        <div className="flex items-end flex-col justify-between flex-end">
          <div className="flex gap-5 flex-row flex-wrap items-center justify-center mt-0">
            {entries?.map((entry) => {
              if (!entry?.title || !entry.connection?.slug) {
                return null;
              }
              const active =
                entry.connection?.slug === slug ||
                (!slug && entry.connection?.slug === homePage?.slug);
              return (
                <Link
                  key={entry.id}
                  to={"/" + entry.connection?.slug}
                  className={`font-medium ${
                    active
                      ? "text-blue-500"
                      : "text-gray-600 hover:text-gray-400"
                  }`}
                  aria-current="page"
                >
                  {entry?.title}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
