"use client";

import { TOCItem } from "fumadocs-core/toc";
import { TOCScrollArea, useTOCItems } from "fumadocs-ui/components/toc";
import { Text } from "lucide-react";

function itemIndent(depth: number) {
  if (depth <= 2) return 16;
  if (depth === 3) return 28;
  return 40;
}

export function StraightToc() {
  const items = useTOCItems();

  if (items.length === 0) {
    return (
      <div
        id="nd-toc-placeholder"
        className="hidden xl:layout:[--fd-toc-width:268px]"
      />
    );
  }

  return (
    <div
      id="nd-toc"
      className="sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 xl:layout:[--fd-toc-width:268px] max-xl:hidden"
    >
      <h3
        id="toc-title"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground"
      >
        <Text className="size-4" />
        On this page
      </h3>

      <TOCScrollArea>
        <div className="relative mt-3 flex flex-col border-s border-fd-foreground/10">
          {items.map((item) => (
            <TOCItem
              key={item.url}
              href={item.url}
              style={{ paddingInlineStart: itemIndent(item.depth) }}
              className="relative py-1.5 pe-2 text-sm text-fd-muted-foreground transition-colors before:absolute before:-inset-s-px before:inset-y-0 before:w-px before:bg-transparent before:content-[''] hover:text-fd-foreground data-[active=true]:text-fd-primary data-[active=true]:before:bg-fd-primary"
            >
              {item.title}
            </TOCItem>
          ))}
        </div>
      </TOCScrollArea>
    </div>
  );
}
