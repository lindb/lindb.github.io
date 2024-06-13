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
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import {
  transformerNotationDiff,
  transformerMetaHighlight,
  transformerNotationHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDX, MDXFile, TOCItem } from "@site/types";
import { getHeadingId, languagePrefix } from "./utils";
import { visit } from "unist-util-visit";
import fs from "fs";
import { getFilePath } from "./navs";

function toc(options: { export: { tocItems: TOCItem[] } }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
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

export const findLanguage = (parent, node) => {
  if (!parent || parent.tagName !== "pre") {
    return;
  }
  if (node.tagName !== "code" && !node.properties.class) {
    return;
  }
  const classes = node.properties.class;
  const languageClass = Array.isArray(classes)
    ? classes.findLast(
        (d) => typeof d === "string" && d.startsWith(languagePrefix),
      )
    : undefined;

  const lang =
    typeof languageClass === "string"
      ? languageClass.slice(languagePrefix.length)
      : "text";

  if (!lang) {
    return;
  }
};

function addLanguageClass() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, "element", (node, _index, parent) => {
      if (!parent || parent.tagName !== "pre") {
        return;
      }
      if (node.tagName !== "code" && !node.properties.class) {
        return;
      }
      const classes = node.properties.class;
      const languageClass = Array.isArray(classes)
        ? classes.findLast(
            (d) => typeof d === "string" && d.startsWith(languagePrefix),
          )
        : undefined;

      const lang =
        typeof languageClass === "string"
          ? languageClass.slice(languagePrefix.length)
          : "text";

      if (!lang) {
        return;
      }
      parent.properties.class =
        parent.properties.class + " " + languagePrefix + lang;
      node.properties.class = languagePrefix + lang;
    });
  };
}

const allDocsPages = new Map<string, MDXFile>();

export const loadFile = (locale: string, filePath: string): MDXFile => {
  const p = getFilePath(locale, filePath);
  let f = allDocsPages.get(p);
  if (!f) {
    const fileContent = fs.readFileSync(p);
    const { data: meta, content } = matter(fileContent);
    f = {
      meta,
      content,
    };
    allDocsPages.set(p, f);
  }
  return f;
};

export const compile = async (content: string | Buffer): Promise<MDX> => {
  const headingsRef = { tocItems: undefined };
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
            langs: [
              "js",
              "sh",
              "toml",
              "xml",
              "go",
              "java",
              "groovy",
              "sql",
              "json",
              "yaml",
            ],
            addLanguageClass: true,
            // ref: https://shiki.style/themes
            themes: {
              light: "material-theme-lighter",
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
        //issue ref: https://github.com/shikijs/shiki/issues/685
        [addLanguageClass], // after shiki remove duplicate language
      ],
    },
  });
  return {
    source: mdxSource,
    toc: headingsRef.tocItems || [],
  };
};
