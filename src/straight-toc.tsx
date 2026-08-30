"use client";

import { TOCItem } from "fumadocs-core/toc";
import {
  TOCScrollArea,
  useItems,
  useTOCItems,
} from "fumadocs-ui/components/toc";
import { ChevronDown, Text } from "lucide-react";
import { useState } from "react";

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
        <StraightTocItems />
      </TOCScrollArea>
    </div>
  );
}

export function StraightTocMobile() {
  const items = useTOCItems();
  const trackedItems = useItems();
  const [open, setOpen] = useState(false);
  const selectedIndex = trackedItems.findIndex((item) => item.active);
  const selectedItem = trackedItems[selectedIndex];
  const lastActiveIndex = trackedItems.reduce(
    (last, item, index) => (item.active ? index : last),
    -1,
  );
  const progress =
    (lastActiveIndex + 1) / Math.max(1, trackedItems.length);

  if (items.length === 0) return null;

  return (
    <div
      data-toc-popover=""
      className="sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]"
    >
      <header className="border-b bg-fd-background/80 backdrop-blur-sm">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-full items-center gap-2.5 px-4 py-2.5 text-start text-sm text-fd-muted-foreground md:px-6"
        >
          <ProgressCircle value={progress} />
          <span className="flex-1 truncate transition-colors">
            {!open && selectedItem
              ? selectedItem.original.title
              : "On this page"}
          </span>
          <ChevronDown
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="max-h-[50vh] overflow-y-auto px-4 pb-4 md:px-6">
            <StraightTocItems onSelect={() => setOpen(false)} />
          </div>
        )}
      </header>
    </div>
  );
}

function ProgressCircle({ value }: { value: number }) {
  const size = 18;
  const strokeWidth = 1.5;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(1, Math.max(0, value));

  return (
    <svg
      role="progressbar"
      aria-label="Page progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      viewBox={`0 0 ${size} ${size}`}
      className="size-4.5 shrink-0"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        className="stroke-current/25"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="transition-all"
      />
    </svg>
  );
}

function StraightTocItems({ onSelect }: { onSelect?: () => void }) {
  const items = useTOCItems();

  return (
    <div className="relative mt-3 flex flex-col border-s border-fd-foreground/10">
      {items.map((item) => (
        <TOCItem
          key={item.url}
          href={item.url}
          onClick={onSelect}
          style={{ paddingInlineStart: itemIndent(item.depth) }}
          className="relative py-1.5 pe-2 text-sm text-fd-muted-foreground transition-colors before:absolute before:-inset-s-px before:inset-y-0 before:w-px before:bg-transparent before:content-[''] hover:text-fd-foreground data-[active=true]:text-fd-primary data-[active=true]:before:bg-fd-primary"
        >
          {item.title}
        </TOCItem>
      ))}
    </div>
  );
}
