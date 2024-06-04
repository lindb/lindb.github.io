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
