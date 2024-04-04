import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Integra Extrajudicial",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto Serif",
        body: "Roboto Serif",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff", //page background
          lightgray: "#abaaa880", //borders
          gray: "#44444470", //graph links, heavier borders
          darkgray: "#000000", //body text
          dark: "#7e3a3a", //header text and icons
          secondary: "#b79266", //link colour, current graph node
          tertiary: "#cb6764", //hover states and visited graph nodes
          highlight: "#ffe0b280",// highlight: "rgba(241, 242, 222, 0.6)", //internal link background, highlighted text, highlighted lines of code
          strong: "#333333",
          link: "#5689a6",
          linkHighlight: "#f3f3f390",
        },
      darkMode: {
          light: "#1f1f1f",
          lightgray: "#89898970",
          gray: "#646464",
          darkgray: "#d5d5d5",
          dark: "#febe78",
          secondary: "#cb6764",
          tertiary: "#cb975f",
          highlight: "#b71c1c90",
          strong: "#ffffff",
          link: "#bcdffb",
          linkHighlight: "#33333390",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}


export default config
