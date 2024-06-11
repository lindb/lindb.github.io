/*
Licensed to LinDB under one or more contributor
license agreements. See the NOTICE file distributed with
this work for additional information regarding copyright
ownership. LinDB licenses this file to you under
the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/
import React from "react";
// import matter from "gray-matter";
import fs from "fs";
// import { DocContainer, TOCItem } from "@site/components";
// import { serialize } from "next-mdx-remote/serialize";
import { visit } from "unist-util-visit";
import {
  PageInfo,
  currentWorkingDirectory,
  docsPath,
  getPath,
  getSidebar,
  pages,
} from "@site/navs/documentation";
import type { GetStaticPaths, GetStaticProps } from "next";
// import { Metadata } from "next";
import { getDocPages, getHeadingId } from "@site/utils/utils";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import exp from "constants";
import { DocContainer, Footer, Sidebar, TOCItem } from "@site/components";
import { VFileCompatible } from "vfile";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import {
  transformerNotationDiff,
  transformerMetaHighlight,
  transformerNotationHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";

function toc(options: { export: { tocItems: TOCItem[] } }) {
  return (tree) => {
    const headings: TOCItem[] = [];
    visit(tree, "heading", (node) => {
      if (node.depth >= 1 && node.depth <= 3) {
        headings.push({
          id: getHeadingId(node.children[0].value),
          level: node.depth,
          title: node.children[0].value,
        });
      }
    });

    if (options && options.export) {
      options.export.tocItems = headings;
    }
  };
}

const DocPage: React.FC<{
  page: PageInfo;
  source: VFileCompatible;
  tocItems: TOCItem[];
  sidebar: PageInfo[];
}> = (props) => {
  const { page, source, tocItems, sidebar } = props;
  return (
    <main className="flex-1 pt-4">
      <div className="mx-auto flex min-h-full max-w-8xl flex-col px-4 sm:px-6 md:px-8">
        <Sidebar sidebarItems={sidebar} />
        <div className="flex-1 lg:pl-36 xl:pl-[19.5rem]">
          <DocContainer
            page={page}
            source={source}
            tocItems={tocItems}
            pages={getDocPages(sidebar)}
          />
        </div>
        <Footer className="flex lg:mx-8 lg:pl-36 xl:pl-[19.5rem]" />
      </div>
    </main>
  );
};

function DocsContent({ slug }: { slug: string[] }) {
  console.log("product", slug);
  // const urlPath = getPath(params.lang, params.slug);
  //
  // const page = pages.get(urlPath);
  // const filePath = currentWorkingDirectory + "/i18n" + urlPath + ".mdx";
  //
  // if (!page || !fs.existsSync(filePath)) {
  //   return <div>Doc not found</div>;
  // }
  // const headingsRef = { tocItems: undefined };
  // const source = fs.readFileSync(filePath);
  // const { content } = matter(source);
  // await serialize(content, {
  //   mdxOptions: {
  //     development: false,
  //     remarkPlugins: [[toc, { export: headingsRef }]],
  //   },
  // });
  return <div>test</div>;

  // const docPages = getDocPages(getSidebar(params.lang, params.slug));

  // return (
  //   <DocContainer
  //     page={page}
  //     source={content}
  //     tocItems={headingsRef.tocItems}
  //     pages={docPages}
  //   />
  // );
}

// export async function generateStaticParams() {
//   return Array.from(pages.values());
// }
// export const getStaticPaths = (async () => {
//   return Array.from(pages.values());
// }) satisfies GetStaticPaths;

// export function generateMetadata({ params }): Metadata {
//   const urlPath = getPath(params.lang, params.slug);
//   const page = pages.get(urlPath);
//   if (!page) {
//     return {
//       title: "Documentation - Lin",
//     };
//   }
//   return {
//     title: page.title + " - " + page.product ? page.product : "Lin",
//   };
// }
//
export async function getStaticProps(context) {
  const urlPath = "/" + context.params.slug.join("/");
  // const urlPath = getPath("", context.params.slug);
  const page = pages.get(urlPath);
  console.log("url path", urlPath, page);
  const filePath = path.join(
    currentWorkingDirectory,
    docsPath,
    urlPath + ".mdx",
  );
  // const locales = context.locales || [];
  // const docPages = Array.from(pages.values());
  // const urlPath = getPath(params.lang, params.slug);
  //
  // const page = pages.get(urlPath);
  // const filePath = currentWorkingDirectory + "/i18n" + urlPath + ".mdx";
  // 使用 fs 读取文件
  // const filePath = path.join(
  //   process.cwd(),
  //   "i18n/en/docs/lindb",
  //   "introduction.mdx",
  // );
  // docPages.forEach((page) => {
  //   locales.forEach((locale) => {
  //     paths.push({
  //       params: {
  //         slug: page.slug,
  //       },
  //       locale: locale,
  //     });
  //   });
  // });
  const headingsRef = { tocItems: undefined };
  const source = fs.readFileSync(filePath);
  const { content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: false,
      remarkPlugins: [
        [toc, { export: headingsRef }],
        [remarkAlert, {}],
        [
          remarkGfm,
          {
            footnotes: { labelTagName: "h4" },
          },
        ],
      ],
      rehypePlugins: [
        [
          rehypeShiki,
          {
            // ref: https://shiki.style/themes
            themes: {
              // light: "github-light",
              light: "material-theme-lighter",
              // light: "catppuccin-latte",
              dark: "catppuccin-macchiato",
            },
            //ref: https://shiki.style/packages/transformers
            transformers: [
              transformerMetaHighlight(),
              transformerNotationDiff(),
              transformerNotationHighlight(),
              transformerNotationFocus(),
            ],
            colorReplacements: { "#24273a": "#1e293b" },
          },
        ],
      ],
    },
  });
  const sidebar = getSidebar(context.locale, context.params.slug);

  console.log("get static props", context, filePath, page, content, sidebar);
  return {
    props: {
      page: page,
      source: mdxSource,
      tocItems: headingsRef.tocItems,
      sidebar: sidebar,
    },
  };
}

export const getStaticPaths = (async (context) => {
  const paths: Array<string | { params: ParsedUrlQuery; locale?: string }> = [];
  const locales = context.locales || ["en", "zh"];
  const docPages = Array.from(pages.values());
  docPages.forEach((page) => {
    paths.push({
      params: {
        slug: page.slug,
      },
    });
  });
  console.log("get paths...", context, paths, docPages);
  return {
    paths: paths,
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export default DocPage;
