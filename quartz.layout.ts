import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
            "Ministério Público do Estado do Rio de Janeiro": "https://www.mprj.mp.br/home",
    },
  }),
}


// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        const nameOrderMap: Record<string, number> = {
          "Geral": 100,
          "Secretaria": 200,
          "MGP": 300,
        }
     
        let orderA = 0
        let orderB = 0
     
        if (a.file && a.file.slug) {
          orderA = nameOrderMap[a.file.slug]
        } else if (a.name) {
          orderA = nameOrderMap[a.name]
        }
     
        if (b.file && b.file.slug) {
          orderB = nameOrderMap[b.file.slug]
        } else if (b.name) {
          orderB = nameOrderMap[b.name]
        }
     
        return orderA - orderB
      },
      filterFn: (node) => {
        // exclude files with the tag "explorerexclude"
        return (node.file?.frontmatter?.tags?.includes("") !== true && node.name !== "tags" && node.name !== "_images" && node.name !== "_templates")
      },
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
                sortFn: (a, b) => {
                const nameOrderMap: Record<string, number> = {
                  "Geral": 100,
                  "Secretaria": 200,
                  "MGP": 300,
                }
            
                let orderA = 0
                let orderB = 0
            
                if (a.file && a.file.slug) {
                  orderA = nameOrderMap[a.file.slug]
                } else if (a.name) {
                  orderA = nameOrderMap[a.name]
                }
            
                if (b.file && b.file.slug) {
                  orderB = nameOrderMap[b.file.slug]
                } else if (b.name) {
                  orderB = nameOrderMap[b.name]
                }
            
                return orderA - orderB
              },
              filterFn: (node) => {
                const excludedFolders = ["tags", "_images", "_templates"];
                // exclude files with the tag "explorerexclude"
                return (node.file?.frontmatter?.tags?.includes("") !== true && !excludedFolders.includes(node.name));
              },
            })),
        ],
  right: [
    Component.Graph(),
  ],
}
