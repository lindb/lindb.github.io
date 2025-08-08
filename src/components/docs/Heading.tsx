/**
 * Licensed to LinDB under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. LinDB licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { ReactNode } from "react";

import Link from "next/link";

import classNames from "classnames";

import { getHeadingId } from "@site/utils/utils";

export const H = (props: {
  heading: number;
  href?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  disableHref?: boolean;
}) => {
  const { disableHref, ...newProps } = props;
  const { href, heading, children } = newProps;
  const Component = `h${heading}` as `h${1 | 2 | 3 | 4 | 5 | 6}`;
  if (disableHref) {
    return <Component {...newProps}>{children}</Component>;
  }
  return (
    <Component {...newProps}>
      <Link
        className={classNames(
          "flex items-center gap-2 group relative border-none",
          "lg:-ml-2 lg:pl-2",
        )}
        href={href || ""}
      >
        <span className="border border-base-content/10 bg-base-content/5 p-1 group-hover:border-primary">
          <svg
            width="12"
            height="12"
            className="text-base-content/10 group-hover:text-primary"
          >
            <path
              d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span>{children}</span>
      </Link>
    </Component>
  );
};

export const Heading = (props: {
  level: number;
  children: ReactNode;
  disableHref?: boolean;
}) => {
  const { children, level, disableHref } = props;
  if (typeof children !== "string") {
    return children;
  }

  const idText = getHeadingId(children);
  return (
    <H
      id={idText}
      heading={level}
      href={"#" + idText}
      disableHref={disableHref}
    >
      {children}
    </H>
  );
};
