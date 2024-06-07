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
import matter from "gray-matter";
import fs from "fs";
import { DocContainer, TOCItem } from "@site/components";
import { serialize } from "next-mdx-remote/serialize";
import { visit } from "unist-util-visit";
import {
  currentWorkingDirectory,
  getPath,
  getSidebar,
  pages,
} from "@site/navs/documentation";
import { Metadata } from "next";
import { getDocPages, getHeadingId } from "@site/utils/utils";

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

export default async function DocsContent({
  params,
}: {
  params: { slug: string[]; lang: string };
}) {
  const urlPath = getPath(params.lang, params.slug);

  const page = pages.get(urlPath);
  const filePath = currentWorkingDirectory + "/i18n" + urlPath + ".mdx";

  if (!page || !fs.existsSync(filePath)) {
    return <div>Doc not found</div>;
  }
  const headingsRef = { tocItems: undefined };
  const source = fs.readFileSync(filePath);
  const { content } = matter(source);
  await serialize(content, {
    mdxOptions: {
      development: false,
      remarkPlugins: [[toc, { export: headingsRef }]],
    },
  });

  const docPages = getDocPages(getSidebar(params.lang, params.slug));

  return (
    <DocContainer
      page={page}
      source={content}
      tocItems={headingsRef.tocItems}
      pages={docPages}
    />
  );
}

export async function generateStaticParams() {
  return Array.from(pages.values());
}

export function generateMetadata({ params }): Metadata {
  const urlPath = getPath(params.lang, params.slug);
  const page = pages.get(urlPath);
  if (!page) {
    return {
      title: "Documentation - Lin",
    };
  }
  return {
    title: page.title + " - " + page.product ? page.product : "Lin",
  };
}
