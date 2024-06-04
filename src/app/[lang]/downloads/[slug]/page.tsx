import React from "react";

const Downloads = () => {
  return (
    <div className="">
      <h3>Downloads222</h3>
      <div className="-mx-4 flex overflow-auto sm:mx-0">
        <ul
          className="inline-grid flex-none gap-x-2 px-4 sm:px-0 xl:gap-x-6"
          style={{
            gridTemplateColumns: "repeat(4, minmax(6rem, 1fr))",
          }}
        >
          <li>
            <button className="group flex w-full flex-col items-center text-sm font-semibold text-sky-500">
              <svg
                width="48"
                height="48"
                fill="none"
                aria-hidden="true"
                className="mb-6 text-sky-500"
              >
                <path
                  d="M30.685 27.536c-5.353 9.182-12.462 15.042-15.878 13.089-3.416-1.953-1.846-10.98 3.508-20.161 5.353-9.182 12.462-15.042 15.878-13.089 3.416 1.953 1.846 10.98-3.508 20.161Z"
                  fill="currentColor"
                  fillOpacity=".1"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <ellipse
                  cx="24"
                  cy="24"
                  rx="7"
                  ry="19"
                  transform="rotate(90 24 24)"
                  fill="currentColor"
                  fillOpacity=".1"
                  stroke="currentColor"
                  strokeWidth="2"
                ></ellipse>
                <path
                  d="M17.315 27.536c5.353 9.182 12.462 15.042 15.878 13.089 3.416-1.953 1.846-10.98-3.508-20.161-5.353-9.182-12.462-15.042-15.878-13.089-3.416 1.953-1.846 10.98 3.508 20.161Z"
                  fill="currentColor"
                  fillOpacity=".1"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button className="group flex w-full flex-col items-center text-sm font-semibold ">
              <svg
                width="48"
                height="48"
                fill="none"
                aria-hidden="true"
                className="mb-6 text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"
              >
                <path
                  d="M24 12.814 20.474 7H15l9 15 9-15h-5.476l-3.525 5.814Z"
                  fill="currentColor"
                  fillOpacity="0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M37.408 7 24 28.982 10.592 7H3l21 34L45 7h-7.592Z"
                  fill="currentColor"
                  fillOpacity="0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return [{ slug: "lindb", lang: "en" }, { slug: "linsight" }];
}
export default Downloads;
