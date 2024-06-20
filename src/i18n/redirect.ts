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
import { useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./language-detector";
import { docs } from "@site/docs.config";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to.startsWith("/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.push("/" + detectedLng + router.route);
      return;
    }

    if (languageDetector && languageDetector.cache) {
      languageDetector.cache(detectedLng || docs.i18n.defaultLocale);
    }
    router.push("/" + detectedLng + to);
  });
};

export const Redirect = () => {
  useRedirect();
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => () => {
  useRedirect(to);
};
