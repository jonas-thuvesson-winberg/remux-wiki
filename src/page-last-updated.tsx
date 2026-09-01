export function PageLastUpdated({
  timestamp,
  author,
  authorUrl,
}: {
  timestamp: number;
  author?: string;
  authorUrl?: string;
}) {
  const date = new Date(timestamp);
  const formatted = date.toLocaleString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "UTC",
  });

  return (
    <>
      <p className="text-sm text-fd-muted-foreground">
        Last updated on{" "}
        <time dateTime={date.toISOString()}>{formatted} UTC</time>
        {author && (
          <>
            {" "}
            by{" "}
            {authorUrl ? (
              <a className="hover:underline hover:text-black" href={authorUrl}>
                {author}
              </a>
            ) : (
              author
            )}
          </>
        )}
      </p>
    </>
  );
}
