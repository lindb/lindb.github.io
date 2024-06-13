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
"use client";

import { addPathPrefix, getLocale } from "@site/utils/utils";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const Link: React.FC<{
  href?: string;
  children?: React.ReactNode;
  className?: string;
  locale?: string;
  internal?: boolean;
}> = (props) => {
  const { href = "", internal, locale, children, className } = props;
  const [isSameDomain, setIsSameDomain] = useState(true);
  const ref = useRef() as MutableRefObject<HTMLAnchorElement>;

  useEffect(() => {
    const currentDomain = window.location.hostname;
    const link = document.createElement("a");
    link.href = href;
    const isSameDomain = currentDomain === link.hostname;
    setIsSameDomain(isSameDomain);
    if (isSameDomain && ref && ref.current) {
      const { include } = getLocale(href);
      if (!include && locale) {
        ref.current.href = addPathPrefix(href, locale);
      }
    }
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target={!isSameDomain ? "_blank" : "_self"}
      rel="noreferrer"
      className={className}
    >
      {children}
      {!internal && !isSameDomain && (
        <span className="ml-1 inline-flex">
          <ArrowTopRightOnSquareIcon className="size-4 fill-sky-500" />
        </span>
      )}
    </a>
  );
};

export default Link;
