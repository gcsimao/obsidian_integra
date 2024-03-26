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
          light: "#e7e7e7", //page background
          lightgray: "#abaaa8", //borders
          gray: "#8c6a42", //graph links, heavier borders
          darkgray: "#000000", //body text
          dark: "#7e3a3a", //header text and icons
          secondary: "#b27b3d", //link colour, current graph node
          tertiary: "#cb6764", //hover states and visited graph nodes
          highlight: "rgba(50, 50, 50, 0.05)",// highlight: "rgba(241, 242, 222, 0.6)", //internal link background, highlighted text, highlighted lines of code
        },
      darkMode: {
          light: "#333333",
          lightgray: "#898989",
          gray: "#646464",
          darkgray: "#d5d5d5",
          dark: "#febe78",
          secondary: "#cb6764",
          tertiary: "#cb975f",
          highlight: "rgba(200, 200, 200, 0.1)",
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
