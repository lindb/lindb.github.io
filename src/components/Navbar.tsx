import React from "react";
import clsx from "clsx";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const NavPopover: React.FC<{ display?: string; className: string }> = (
  props,
) => {
  const { display, className } = props;
  return (
    <div className={clsx(className, display)}>
      <button
        type="button"
        className="flex size-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          className="size-6 stroke-slate-500"
        >
          <path d="M4 7h16M4 12h16M4 17h16"></path>
        </svg>
      </button>
      <Popover className="group">
        <PopoverButton className="flex items-center gap-2"></PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="dark:highlight-white/5 fixed right-4 top-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-400"
        >
          <ul className="space-y-6">
            <li>
              <a href="/insights">Insights</a>
            </li>
            <li>
              <a href="/automations">Automations</a>
            </li>
            <li>
              <a href="/reports">Reports</a>
            </li>
          </ul>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-transparent">
      <div className="mx-auto max-w-8xl">
        <div className="mx-4 border-b border-slate-900/10 py-4 lg:mx-0 lg:border-0 lg:px-8 dark:border-slate-300/10">
          <div className="relative flex items-center">
            <div className="relative ml-auto hidden items-center lg:flex">
              <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <li className="hover:cursor-pointer">
                    <a className="hover:text-sky-500 dark:hover:text-sky-400">
                      Docs
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
                <button
                  type="button"
                  id="headlessui-listbox-button-:r5:"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  data-headlessui-state="open active"
                  aria-labelledby="headlessui-label-:r4: headlessui-listbox-button-:r5:"
                  data-open=""
                  data-active=""
                  aria-controls="headlessui-listbox-options-:r6:"
                >
                  <span className="dark:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="fill-sky-400/20 stroke-sky-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-sky-500"
                      ></path>
                    </svg>
                  </span>
                  <span className="hidden dark:inline">
                    <svg viewBox="0 0 24 24" fill="none" className="size-6">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-sky-400/20"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className="fill-sky-500"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className="fill-sky-500"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <NavPopover className="-my-1 ml-2" display="lg:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
