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
import { addPathPrefix } from "@site/utils/utils";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { docs } from "@site/docs.config";
import { useRouter } from "next/router";

const isExtenal = (url: string) => {
  const regex = new RegExp("^(http|https)://.*");
  return regex.test(url);
};

export const DocLink: React.FC<{
  href?: string;
  children?: React.ReactNode;
  className?: string;
  internal?: boolean;
}> = (props) => {
  const { href = "", internal, children, className } = props;
  const extenal = isExtenal(href);
  const { i18n } = useTranslation();
  const router = useRouter();
  const path = router.asPath;

  const getHref = () => {
    if (extenal) {
      return href;
    }
    if (href.startsWith("#")) {
      const p = path.split("#");
      return `${p[0]}${href}`;
    }
    return addPathPrefix(
      href,
      i18n.language !== docs.i18n.defaultLocale ? i18n.language : "",
    );
  };

  return (
    <Link
      href={getHref()}
      target={extenal ? "_blank" : "_self"}
      className={className}
      prefetch={false}
    >
      {children}
      {!internal && extenal && !href.startsWith("https://github.com") && (
        <span className="ml-1 inline-flex">
          <ArrowTopRightOnSquareIcon className="size-4 fill-sky-500" />
        </span>
      )}
    </Link>
  );
};

export default DocLink;
