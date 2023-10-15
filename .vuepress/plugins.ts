import { searchProPlugin } from "vuepress-plugin-search-pro";

export default [
    searchProPlugin({
        searchMaxSuggestions: 10,
        indexContent: true,
        customFields: [
            {
                getter: (page) => page.frontmatter.category,
                formatter: "分类：$content",
            },
            {
                getter: (page) => page.frontmatter.tag,
                formatter: "标签：$content",
            },
        ],
    })
]