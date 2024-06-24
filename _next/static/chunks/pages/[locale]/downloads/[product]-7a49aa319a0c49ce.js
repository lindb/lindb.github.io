(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2384],{1851:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/downloads/[product]",function(){return a(1774)}])},1774:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return u}});var l=a(2676),t=a(6118),n=a(6963),i=a(9962),c=a(9739),d=a(5271),r=a(4814),o=a(9056),x=a(7798),m=a(7442);let h=(e,s)=>(e.assets||[]).find(e=>e.name.startsWith(s));var u=!0;s.default=e=>{let{t:s}=(0,o.$G)(),{releases:a}=e,u=(e,a)=>{let t=h(e,"lindb-".concat(e.tag_name,"-").concat(a,"-amd64")),n=h(e,"lindb-".concat(e.tag_name,"-").concat(a,"-arm64"));return(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[t&&(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)("h2",{className:"text-lg font-semibold dark:text-white",children:"Standalone Binaries(64 Bit/AMD)"}),(0,l.jsxs)("ul",{className:"list-inside list-decimal text-sm",children:[(0,l.jsxs)("li",{className:"py-2",children:[(0,l.jsx)("span",{children:s("Downloads")}),(0,l.jsx)(x.dn,{className:"pt-2",code:"wget ".concat(t.browser_download_url)})]}),(0,l.jsxs)("li",{className:"py-2",children:[s("Uncompress"),(0,l.jsx)(x.dn,{className:"pt-2",code:"tar -zxvf ".concat(t.name)})]})]})]}),n&&(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("h2",{className:"text-lg font-semibold dark:text-white",children:"Standalone Binaries(64 Bit/ARM)"}),(0,l.jsxs)("ul",{className:"list-inside list-decimal text-sm",children:[(0,l.jsxs)("li",{className:"py-2",children:[(0,l.jsx)("span",{children:s("Downloads")}),(0,l.jsx)(x.dn,{className:"py-2",code:"wget ".concat(n.browser_download_url)})]}),(0,l.jsxs)("li",{className:"py-2",children:[s("Uncompress"),(0,l.jsx)(x.dn,{code:"tar -zxvf ".concat(n.name," "),className:"pt-2"})]})]})]})]})},f=[{name:"Linux",icon:m.jR,cmds:e=>u(e,"linux")},{name:"Windows",icon:m.WI,cmds:e=>{let s=h(e,"lindb-".concat(e.tag_name,"-windows-amd64"));return s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"text-lg font-semibold dark:text-white",children:"Standalone Windows Binaries(64 Bit)"}),(0,l.jsx)("div",{className:"prose dark:prose-invert",children:(0,l.jsx)(x.G2,{href:s.browser_download_url,children:"Download the zip file"})})]}):null}},{name:"MacOS",icon:m.Lx,cmds:e=>u(e,"darwin")},{name:"Docker",icon:m.xJ,cmds:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"text-lg font-semibold dark:text-white",children:"Docker"}),(0,l.jsx)(x.dn,{className:"pt-2",code:"docker run -d --name=lindb -p 9000:9000 lindata/lindb:".concat((null==e?void 0:e.tag_name)||"latest"," lind standalone run")})]})}],[p,j]=(0,d.useState)(a[0]),[N,g]=(0,d.useState)(f[0]);return(0,l.jsx)("div",{className:"flex w-full flex-1 justify-center lg:my-6 lg:px-12",children:(0,l.jsxs)("div",{className:"m-8 flex max-w-8xl flex-1 flex-col gap-4",children:[(0,l.jsxs)("h2",{className:"mb-6 text-3xl font-bold text-neutral-900 lg:text-4xl dark:text-white",children:[s("Downloads")," LinDB"]}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 text-sm",children:[(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsxs)("div",{className:"w-32",children:[s("Version"),":"]}),(0,l.jsx)("div",{children:(0,l.jsxs)(t.Ri,{value:p,onChange:j,children:[(0,l.jsxs)(t.Y4,{className:(0,r.Z)("relative block w-48 rounded-sm bg-slate-100 py-1.5 pl-3 pr-8 text-left text-sm/6 text-current dark:bg-slate-800 dark:text-white","focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"),children:[p.name,(0,l.jsx)(i.Z,{className:"fill-current/60 group pointer-events-none absolute right-2.5 top-2.5 size-4 dark:fill-white","aria-hidden":"true"})]}),(0,l.jsx)(n.u,{leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)(t.O_,{anchor:"bottom",className:"mt-1 w-[var(--button-width)] border border-slate-200/5 bg-slate-100 p-1 dark:bg-slate-800",children:a.map(e=>(0,l.jsxs)(t.wt,{value:e,onSelect:()=>j(e),className:"group flex cursor-default select-none items-center py-1.5  data-[focus]:bg-white/10",children:[(0,l.jsx)(c.Z,{className:"invisible mx-2 size-4 fill-current group-data-[selected]:visible dark:fill-white"}),(0,l.jsx)("div",{className:"text-sm/6 text-current dark:text-white",children:e.name})]},e.name))})})]})})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsxs)("div",{className:"w-32",children:[s("License"),":"]}),(0,l.jsx)("div",{className:"dark:text-white",children:"Apache 2.0"})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsxs)("div",{className:"w-32",children:[s("Release Date"),":"]}),(0,l.jsx)("div",{className:" dark:text-white",children:p.published_at})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsxs)("div",{className:"w-32",children:[s("Release Note"),":"]}),(0,l.jsx)("div",{className:"prose dark:prose-invert",children:(0,l.jsxs)(x.G2,{href:"/docs/lindb/release-notes#"+p.name,children:[s("What's New in")," LinDB ",p.name]})})]})]}),(0,l.jsx)("div",{className:"flex gap-4 lg:gap-8",children:f.map(e=>{let s=e.icon,a=e.name===N.name;return(0,l.jsxs)("button",{onClick:()=>g(e),className:(0,r.Z)("group flex flex-col items-center gap-2 text-sm font-semibold",{"text-sky-500":a,"group:hover:text-slate-00":!a}),children:[(0,l.jsx)(s,{className:(0,r.Z)("size-10 ",{"text-slate-300 group-hover:fill-slate-400 dark:fill-slate-600 dark:group-hover:fill-slate-500":!a,"fill-sky-500":a})}),e.name]},e.name)})}),(0,l.jsx)("div",{children:N.cmds(p)}),(0,l.jsx)("div",{className:"prose dark:prose-invert",children:(0,l.jsx)(x.G2,{href:"Docker"===N.name?"/docs/lindb/getting-started/docker":"/docs/lindb/getting-started/package?tab="+N.name,children:s("Read the installation guide for more information.")})})]})})}}},function(e){e.O(0,[705,2888,9774,179],function(){return e(e.s=1851)}),_N_E=e.O()}]);