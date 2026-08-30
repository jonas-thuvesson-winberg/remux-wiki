import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";
import { defineDocs } from "fumadocs-mdx/macro";
import { defineConfig, type PressPlugin } from "fumapress";
import { fumadocsMdx } from "fumapress/adapters/mdx";
import { Image } from "fumapress/image";
import { llmsPlugin } from "fumapress/plugins/llms.txt";
import { StraightToc } from "./src/straight-toc";

function DiscordIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" aria-label="Discord">
      <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.5 18.5 0 0 0-5.487 0 12.6 12.6 0 0 0-.618-1.25.077.077 0 0 0-.078-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.319 13.58.1 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 12.3 12.3 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.007.128c-.597.342-1.22.644-1.873.891a.077.077 0 0 0-.04.107c.36.698.771 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.03a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.031-.029ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419s.956-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419Z" />
    </svg>
  );
}

function KoFiIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" aria-label="Ko-fi">
      <path d="M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493 1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182 2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195-1.09-2-1.298-4.155-1.298-7.506 0-2.181.857-3.402 3.012-3.714 1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545 1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142 0 1.533.858 2.857 1.949 3.897.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896 1.117-1.039 1.974-2.364 1.974-3.897 0-1.662-1.247-3.142-3.039-3.142-1.065 0-1.792.545-2.338 1.298-.493-.753-1.246-1.298-2.312-1.298" />
    </svg>
  );
}

const docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

const basePath = process.env.BASE_PATH ?? "/";

const straightTocPlugin = {
  name: "straight-toc",
  configure() {
    const layout = (this.data["core:docs-layout"] ??= {});
    (layout.pageInterceptors ??= []).push(({ props, next }) =>
      next({
        ...props,
        tableOfContent: {
          ...props.tableOfContent,
          component: <StraightToc />,
        },
      }),
    );
  },
} satisfies PressPlugin<any>;

export default defineConfig({
  mode: "static",
  content: docs.toFumadocsSource(),
  meta: {
    root: () => <link rel="icon" href={`${basePath}favicon.ico`} />,
  },
  loaderOptions: {
    plugins: [lucideIconsPlugin()],
  },
  site: {
    name: "Remux Wiki",
    baseUrl: import.meta.env.DEV
      ? "http://localhost:1337"
      : (process.env.SITE_URL ?? "http://localhost:3000"),
  },
  defaultLayoutProps: {
    githubUrl: "https://github.com/lostb1t/remux",
    links: [
      {
        type: "icon",
        label: "Join the Remux Discord",
        text: "Discord",
        url: "https://discord.gg/hgNwXrMeT",
        external: true,
        icon: <DiscordIcon />,
      },
      {
        type: "icon",
        label: "Support Remux on Ko-fi",
        text: "Ko-fi",
        url: "https://ko-fi.com/lostb1t",
        external: true,
        icon: <KoFiIcon />,
      },
    ],
    nav: {
      title: (
        <>
          <Image
            src={`${basePath}logo.png`}
            width={1024}
            height={1024}
            className="size-8 rounded-lg"
          />
          <span>Remux Wiki</span>
        </>
      ),
    },
    themeSwitch: {
      mode: "light-dark-system",
    },
  },
})
  .adapters(fumadocsMdx())
  .plugins(straightTocPlugin, llmsPlugin({ routes: "all" }));
