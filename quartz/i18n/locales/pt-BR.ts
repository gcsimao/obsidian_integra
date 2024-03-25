import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sem título",
    description: "Sem descrição",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Abstrato",
      info: "Info",
      todo: "Pendência",
      tip: "Dica",
      success: "Sucesso",
      question: "Pergunta",
      warning: "Aviso",
      failure: "Falha",
      danger: "Perigo",
      bug: "Bug",
      example: "Exemplo",
      quote: "Citação",
    },
    backlinks: {
      title: "Links para esta página",
      noBacklinksFound: "Sem links encontrados",
    },
    themeToggle: {
      lightMode: "Tema claro",
      darkMode: "Tema escuro",
    },
    explorer: {
      title: "Conteúdo",
    },
    footer: {
      createdWith: "Criado por",
    },
    graph: {
      title: "Visão de gráfico",
    },
    recentNotes: {
      title: "Notas recentes",
      seeRemainingMore: ({ remaining }) => `Veja mais ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transcrever de ${targetSlug}`,
      linkToOriginal: "Link ao original",
    },
    search: {
      title: "Pesquisar (CTRL + K)",
      searchBarPlaceholder: "Começe a digitar para pesquisar...",
    },
    tableOfContents: {
      title: "Sumário",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} de leitura`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Notas recentes",
      lastFewNotes: ({ count }) => `Últimas ${count} notas`,
    },
    error: {
      title: "Não encontrado",
      notFound: "Esta página ainda não foi criada.",
    },
    folderContent: {
      folder: "Pasta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item nesta pasta." : `${count} items nesta pasta.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Sumário de Tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta tag." : `${count} items com esta tag.`,
      showingFirst: ({ count }) => `Mostrando as ${count} primeiras tags.`,
      totalTags: ({ count }) => `Encontradas ${count} tags.`,
    },
  },
} as const satisfies Translation
