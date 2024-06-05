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

export const BackgroundBeams = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden">
      <div className="flex w-[108rem] flex-none justify-end">
        <picture>
          <source
            srcSet={require("@site/img/beams/docs@30.avif").default.src}
            type="image/avif"
          />
          <img
            src={require("@site/img/beams/docs@tinypng.png").default.src}
            alt=""
            className="w-[71.75rem] max-w-none flex-none dark:hidden"
            decoding="async"
          />
        </picture>
        <picture>
          <source
            srcSet={require("@site/img/beams/docs-dark@30.avif").default.src}
            type="image/avif"
          />
          <img
            src={require("@site/img/beams/docs-dark@tinypng.png").default.src}
            alt=""
            className="hidden w-[90rem] max-w-none flex-none dark:block"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
};
