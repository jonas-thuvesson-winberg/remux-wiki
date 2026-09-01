"use client";

import { PageFooter, type FooterProps } from "fumadocs-ui/layouts/docs/page";
import { PageLastUpdated } from "./page-last-updated";

type DocsPageFooterProps = FooterProps & {
  "data-last-updated"?: number;
  "data-last-author"?: string;
  "data-last-author-url"?: string;
};

export function DocsPageFooter({
  "data-last-updated": timestamp,
  "data-last-author": author,
  "data-last-author-url": authorUrl,
  ...props
}: DocsPageFooterProps) {
  return (
    <>
      <PageFooter className="mt-8" {...props} />
      {timestamp !== undefined && (
        <>
          <hr />
          <div className="self-center my-3">
            <PageLastUpdated
              timestamp={timestamp}
              author={author}
              authorUrl={authorUrl}
            />
          </div>
        </>
      )}
    </>
  );
}
