import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";
import { defineDocs } from "fumadocs-mdx/macro";
import { defineConfig } from "fumapress";
import { fumadocsMdx } from "fumapress/adapters/mdx";
import { Image } from "fumapress/image";
import { llmsPlugin } from "fumapress/plugins/llms.txt";

const docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig({
  content: docs.toFumadocsSource(),
  loaderOptions: {
    plugins: [lucideIconsPlugin()],
  },
  site: {
    name: "Remux Wiki",
    baseUrl: import.meta.env.DEV ? "http://localhost:3000" : "https://remux.wiki",
  },
  defaultLayoutProps: {
    nav: {
      title: (
        <>
          <Image
            src="/logo.png"
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
  .plugins(llmsPlugin({ routes: "all" }));
