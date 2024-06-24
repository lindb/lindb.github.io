"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{6118:function(e,t,n){let o,i,r,l;n.d(t,{Ri:function(){return ep},Y4:function(){return es},wt:function(){return ed},O_:function(){return ec}});var a=n(9910),s=n(1721),u=n(5271),c=n(967),d=n(1620);function p(e,t){return null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t&&"id"in e&&"id"in t?e.id===t.id:e===t}var f=n(7100),v=n(424),b=n(1439),x=n(6012),R=n(7964),g=n(2078),h=n(962),m=n(2639),O=n(5932),S=n(7571),y=n(6263),T=n(6434),I=n(5472),E=n(1730),L=n(349),w=n(7381),P=n(101),M=n(6820),C=n(2836),z=n(4631),k=n(6145),D=n(8410),_=n(6725),A=n(7019),F=n(6513),V=n(3),N=n(2163),Q=n(4604),Z=n(7441),B=n(6845),U=n(2095),Y=n(5384),G=n(5836),j=((o=j||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),K=((i=K||{})[i.Single=0]="Single",i[i.Multi=1]="Multi",i),H=((r=H||{})[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r),J=((l=J||{})[l.OpenListbox=0]="OpenListbox",l[l.CloseListbox=1]="CloseListbox",l[l.GoToOption=2]="GoToOption",l[l.Search=3]="Search",l[l.ClearSearch=4]="ClearSearch",l[l.RegisterOption=5]="RegisterOption",l[l.UnregisterOption=6]="UnregisterOption",l);function X(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,o=(0,F.z2)(t(e.options.slice()),e=>e.dataRef.current.domRef.current),i=n?o.indexOf(n):null;return -1===i&&(i=null),{options:o,activeOptionIndex:i}}let q={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1,__demoMode:!1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,o=e.options.findIndex(e=>n(e.dataRef.current.value));return -1!==o&&(t=o),{...e,listboxState:0,activeOptionIndex:t,__demoMode:!1}},2(e,t){var n,o,i,r,l;if(e.dataRef.current.disabled||1===e.listboxState)return e;let a={...e,searchQuery:"",activationTrigger:null!=(n=t.trigger)?n:1,__demoMode:!1};if(t.focus===_.T.Nothing)return{...a,activeOptionIndex:null};if(t.focus===_.T.Specific)return{...a,activeOptionIndex:e.options.findIndex(e=>e.id===t.id)};if(t.focus===_.T.Previous){let n=e.activeOptionIndex;if(null!==n){let r=e.options[n].dataRef.current.domRef,l=(0,_.d)(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(null!==l){let t=e.options[l].dataRef.current.domRef;if((null==(o=r.current)?void 0:o.previousElementSibling)===t.current||(null==(i=t.current)?void 0:i.previousElementSibling)===null)return{...a,activeOptionIndex:l}}}}else if(t.focus===_.T.Next){let n=e.activeOptionIndex;if(null!==n){let o=e.options[n].dataRef.current.domRef,i=(0,_.d)(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(null!==i){let t=e.options[i].dataRef.current.domRef;if((null==(r=o.current)?void 0:r.nextElementSibling)===t.current||(null==(l=t.current)?void 0:l.nextElementSibling)===null)return{...a,activeOptionIndex:i}}}}let s=X(e),u=(0,_.d)(t,{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...a,...s,activeOptionIndex:u}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,o=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(o))}),r=i?e.options.indexOf(i):-1;return -1===r||r===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:r,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},o=X(e,e=>[...e,n]);return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(n)),{...e,...o}},6:(e,t)=>{let n=X(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},W=(0,u.createContext)(null);function $(e){let t=(0,u.useContext)(W);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Listbox /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,$),t}return t}W.displayName="ListboxActionsContext";let ee=(0,u.createContext)(null);function et(e){let t=(0,u.useContext)(ee);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Listbox /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,et),t}return t}function en(e,t){return(0,N.E)(t.type,q,e,t)}ee.displayName="ListboxDataContext";let eo=u.Fragment,ei=(0,u.createContext)(!1),er=Z.VN.RenderStrategy|Z.VN.Static,el=u.Fragment,ea=(0,Z.yV)(function(e,t){var n;let o=(0,P.B)(),{value:i,defaultValue:r,form:l,name:a,onChange:s,by:c,invalid:d=!1,disabled:v=o||!1,horizontal:x=!1,multiple:g=!1,__demoMode:h=!1,...m}=e,S=x?"horizontal":"vertical",y=(0,I.T)(t),T=function(e){let[t]=(0,u.useState)(e);return t}(r),[E=g?[]:void 0,L]=function(e,t,n){let[o,i]=(0,u.useState)(n),r=void 0!==e,l=(0,u.useRef)(r),a=(0,u.useRef)(!1),s=(0,u.useRef)(!1);return!r||l.current||a.current?r||!l.current||s.current||(s.current=!0,l.current=r,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(a.current=!0,l.current=r,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[r?e:o,(0,b.z)(e=>(r||i(e),null==t?void 0:t(e)))]}(i,s,T),[w,z]=(0,u.useReducer)(en,{dataRef:(0,u.createRef)(),listboxState:h?0:1,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1,optionsVisible:!1,__demoMode:h}),D=(0,u.useRef)({static:!1,hold:!1}),A=(0,u.useRef)(null),V=(0,u.useRef)(null),Q=(0,u.useRef)(new Map),B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return(0,u.useCallback)((t,n)=>"string"==typeof e?(null==t?void 0:t[e])===(null==n?void 0:n[e]):e(t,n),[e])}(c),U=(0,u.useCallback)(e=>(0,N.E)(G.mode,{1:()=>E.some(t=>B(t,e)),0:()=>B(E,e)}),[E]),G=(0,u.useMemo)(()=>({...w,value:E,disabled:v,invalid:d,mode:g?1:0,orientation:S,compare:B,isSelected:U,optionsPropsRef:D,buttonRef:A,optionsRef:V,listRef:Q}),[E,v,d,g,w,Q]);(0,f.e)(()=>{w.dataRef.current=G},[G]);let j=0===G.listboxState;(0,O.O)(j,[G.buttonRef,G.optionsRef],(e,t)=>{var n;z({type:1}),(0,F.sP)(t,F.tJ.Loose)||(e.preventDefault(),null==(n=G.buttonRef.current)||n.focus())});let K=(0,u.useMemo)(()=>({open:0===G.listboxState,disabled:v,invalid:d,value:E}),[G,v,E,d]),H=(0,b.z)(e=>{let t=G.options.find(t=>t.id===e);t&&er(t.dataRef.current.value)}),J=(0,b.z)(()=>{if(null!==G.activeOptionIndex){let{dataRef:e,id:t}=G.options[G.activeOptionIndex];er(e.current.value),z({type:2,focus:_.T.Specific,id:t})}}),X=(0,b.z)(()=>z({type:0})),q=(0,b.z)(()=>z({type:1})),$=(0,R.G)(),et=(0,b.z)((e,t,n)=>{$.dispose(),$.microTask(()=>e===_.T.Specific?z({type:2,focus:_.T.Specific,id:t,trigger:n}):z({type:2,focus:e,trigger:n}))}),ei=(0,b.z)((e,t)=>(z({type:5,id:e,dataRef:t}),()=>z({type:6,id:e}))),er=(0,b.z)(e=>(0,N.E)(G.mode,{0:()=>null==L?void 0:L(e),1(){let t=G.value.slice(),n=t.findIndex(t=>B(t,e));return -1===n?t.push(e):t.splice(n,1),null==L?void 0:L(t)}})),el=(0,b.z)(e=>z({type:3,value:e})),ea=(0,b.z)(()=>z({type:4})),es=(0,u.useMemo)(()=>({onChange:er,registerOption:ei,goToOption:et,closeListbox:q,openListbox:X,selectActiveOption:J,selectOption:H,search:el,clearSearch:ea}),[]),[eu,ec]=(0,Y.bE)({inherit:!0}),ed=(0,u.useCallback)(()=>{if(void 0!==T)return null==L?void 0:L(T)},[L,T]);return u.createElement(ec,{value:eu,props:{htmlFor:null==(n=G.buttonRef.current)?void 0:n.id},slot:{open:0===G.listboxState,disabled:v}},u.createElement(M.HO,null,u.createElement(W.Provider,{value:es},u.createElement(ee.Provider,{value:G},u.createElement(k.up,{value:(0,N.E)(G.listboxState,{0:k.ZM.Open,1:k.ZM.Closed})},null!=a&&null!=E&&u.createElement(C.Mt,{disabled:v,data:{[a]:E},form:l,onReset:ed}),(0,Z.sY)({ourProps:{ref:y},theirProps:m,slot:K,defaultTag:eo,name:"Listbox"}))))))}),es=(0,Z.yV)(function(e,t){var n;let o=et("Listbox.Button"),i=$("Listbox.Button"),r=(0,u.useId)(),l=(0,z.Q)(),{id:p=l||"headlessui-listbox-button-".concat(r),disabled:f=o.disabled||!1,autoFocus:v=!1,...x}=e,R=(0,I.T)(o.buttonRef,t,(0,M.AZ)()),g=(0,M.L)(),h=(0,b.z)(e=>{switch(e.key){case U.R.Enter:(0,V.g)(e.currentTarget);break;case U.R.Space:case U.R.ArrowDown:e.preventDefault(),(0,c.flushSync)(()=>i.openListbox()),o.value||i.goToOption(_.T.First);break;case U.R.ArrowUp:e.preventDefault(),(0,c.flushSync)(()=>i.openListbox()),o.value||i.goToOption(_.T.Last)}}),m=(0,b.z)(e=>{e.key===U.R.Space&&e.preventDefault()}),O=(0,b.z)(e=>{var t;if((0,D.P)(e.currentTarget))return e.preventDefault();0===o.listboxState?((0,c.flushSync)(()=>i.closeListbox()),null==(t=o.buttonRef.current)||t.focus({preventScroll:!0})):(e.preventDefault(),i.openListbox())}),S=(0,b.z)(e=>e.preventDefault()),T=(0,Y.wp)([p]),E=(0,B.zH)(),{isFocusVisible:L,focusProps:w}=(0,a.F)({autoFocus:v}),{isHovered:P,hoverProps:C}=(0,s.X)({isDisabled:f}),{pressed:k,pressProps:A}=(0,d.x)({disabled:f}),F=(0,u.useMemo)(()=>({open:0===o.listboxState,active:k||0===o.listboxState,disabled:f,invalid:o.invalid,value:o.value,hover:P,focus:L,autofocus:v}),[o.listboxState,o.value,f,P,L,k,o.invalid,v]),N=(0,Z.dG)(g(),{ref:R,id:p,type:(0,y.f)(e,o.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=o.optionsRef.current)?void 0:n.id,"aria-expanded":0===o.listboxState,"aria-labelledby":T,"aria-describedby":E,disabled:f||void 0,autoFocus:v,onKeyDown:h,onKeyUp:m,onKeyPress:S,onClick:O},w,C,A);return(0,Z.sY)({ourProps:N,theirProps:x,slot:F,defaultTag:"button",name:"Listbox.Button"})}),eu=Y.__,ec=(0,Z.yV)(function(e,t){var n;let o=(0,u.useId)(),{id:i="headlessui-listbox-options-".concat(o),anchor:r,portal:l=!1,modal:a=!0,transition:s=!1,...d}=e,p=(0,M.Vy)(r);p&&(l=!0);let O=et("Listbox.Options"),y=$("Listbox.Options"),E=(0,S.i)(O.optionsRef),L=(0,k.oJ)(),[P,C]=(0,w.Y)(s,O.optionsRef,null!==L?(L&k.ZM.Open)===k.ZM.Open:0===O.listboxState);(0,m.m)(P,O.buttonRef,y.closeListbox);let z=!O.__demoMode&&a&&0===O.listboxState;(0,T.P)(z,E);let D=!O.__demoMode&&a&&0===O.listboxState;(0,h.s)(D,{allowed:(0,b.z)(()=>[O.buttonRef.current,O.optionsRef.current])});let A=(0,u.useRef)(null);(0,u.useEffect)(()=>{var e;if(!(null!=(e=null==p?void 0:p.to)&&e.includes("selection")))return;if(!P){A.current=null;return}let t=Array.from(O.listRef.current.values());A.current=t.findIndex(e=>(null==e?void 0:e.dataset.selected)===""),-1===A.current&&(A.current=t.findIndex(e=>(null==e?void 0:e.dataset.disabled)===void 0),y.goToOption(_.T.First))},[P,O.listRef]);let V=0!==O.listboxState,B=!(0,x.C)(V,O.buttonRef)&&P,Y=(()=>{if(null==p)return;if(O.listRef.current.size<=0)return{...p,inner:void 0};let e=Array.from(O.listRef.current.values());return{...p,inner:{listRef:{current:e},index:A.current}}})(),[j,K]=(0,M.ES)(Y),H=(0,M.U8)(),J=(0,I.T)(O.optionsRef,t,p?j:null),X=(0,R.G)();(0,u.useEffect)(()=>{var e;let t=O.optionsRef.current;t&&0===O.listboxState&&t!==(null==(e=(0,Q.r)(t))?void 0:e.activeElement)&&(null==t||t.focus({preventScroll:!0}))},[O.listboxState,O.optionsRef,O.optionsRef.current]);let q=(0,b.z)(e=>{var t,n;switch(X.dispose(),e.key){case U.R.Space:if(""!==O.searchQuery)return e.preventDefault(),e.stopPropagation(),y.search(e.key);case U.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==O.activeOptionIndex){let{dataRef:e}=O.options[O.activeOptionIndex];y.onChange(e.current.value)}0===O.mode&&((0,c.flushSync)(()=>y.closeListbox()),null==(t=O.buttonRef.current)||t.focus({preventScroll:!0}));break;case(0,N.E)(O.orientation,{vertical:U.R.ArrowDown,horizontal:U.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),y.goToOption(_.T.Next);case(0,N.E)(O.orientation,{vertical:U.R.ArrowUp,horizontal:U.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),y.goToOption(_.T.Previous);case U.R.Home:case U.R.PageUp:return e.preventDefault(),e.stopPropagation(),y.goToOption(_.T.First);case U.R.End:case U.R.PageDown:return e.preventDefault(),e.stopPropagation(),y.goToOption(_.T.Last);case U.R.Escape:e.preventDefault(),e.stopPropagation(),(0,c.flushSync)(()=>y.closeListbox()),null==(n=O.buttonRef.current)||n.focus({preventScroll:!0});return;case U.R.Tab:e.preventDefault(),e.stopPropagation(),(0,c.flushSync)(()=>y.closeListbox()),(0,F.EO)(O.buttonRef.current,e.shiftKey?F.TO.Previous:F.TO.Next);break;default:1===e.key.length&&(y.search(e.key),X.setTimeout(()=>y.clearSearch(),350))}}),W=function(e,t){let[n,o]=(0,u.useState)(e),i=(0,v.E)(e);return(0,f.e)(()=>o(i.current),[i,o,...t]),n}(()=>{var e;return null==(e=O.buttonRef.current)?void 0:e.id},[O.buttonRef.current]),en=(0,u.useMemo)(()=>({open:0===O.listboxState}),[O.listboxState]),eo=(0,Z.dG)(p?H():{},{id:i,ref:J,"aria-activedescendant":null===O.activeOptionIndex||null==(n=O.options[O.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===O.mode||void 0,"aria-labelledby":W,"aria-orientation":O.orientation,onKeyDown:q,role:"listbox",tabIndex:0===O.listboxState?0:void 0,style:{...d.style,...K,"--button-width":(0,g.h)(O.buttonRef,!0).width},...(0,w.X)(C)}),ei=function(e,t){let[n,o]=(0,u.useState)(t);return e||n===t||o(t),e?n:t}(P&&1===O.listboxState,O.value),el=(0,b.z)(e=>O.compare(ei,e));return u.createElement(G.h_,{enabled:!!l&&(e.static||P)},u.createElement(ee.Provider,{value:1===O.mode?O:{...O,isSelected:el}},(0,Z.sY)({ourProps:eo,theirProps:d,slot:en,defaultTag:"div",features:er,visible:B,name:"Listbox.Options"})))}),ed=(0,Z.yV)(function(e,t){let n=(0,u.useId)(),{id:o="headlessui-listbox-option-".concat(n),disabled:i=!1,value:r,...l}=e,a=!0===(0,u.useContext)(ei),s=et("Listbox.Option"),d=$("Listbox.Option"),p=null!==s.activeOptionIndex&&s.options[s.activeOptionIndex].id===o,x=s.isSelected(r),R=(0,u.useRef)(null),g=(0,E.x)(R),h=(0,v.E)({disabled:i,value:r,domRef:R,get textValue(){return g()}}),m=(0,I.T)(t,R,e=>{e?s.listRef.current.set(o,e):s.listRef.current.delete(o)});(0,f.e)(()=>{if(!s.__demoMode&&0===s.listboxState&&p&&0!==s.activationTrigger)return(0,A.k)().requestAnimationFrame(()=>{var e,t;null==(t=null==(e=R.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})},[R,p,s.__demoMode,s.listboxState,s.activationTrigger,s.activeOptionIndex]),(0,f.e)(()=>{if(!a)return d.registerOption(o,h)},[h,o,a]);let O=(0,b.z)(e=>{var t;if(i)return e.preventDefault();d.onChange(r),0===s.mode&&((0,c.flushSync)(()=>d.closeListbox()),null==(t=s.buttonRef.current)||t.focus({preventScroll:!0}))}),S=(0,b.z)(()=>{if(i)return d.goToOption(_.T.Nothing);d.goToOption(_.T.Specific,o)}),y=(0,L.g)(),T=(0,b.z)(e=>{y.update(e),!i&&(p||d.goToOption(_.T.Specific,o,0))}),w=(0,b.z)(e=>{y.wasMoved(e)&&(i||p||d.goToOption(_.T.Specific,o,0))}),P=(0,b.z)(e=>{y.wasMoved(e)&&(i||p&&d.goToOption(_.T.Nothing))}),M=(0,u.useMemo)(()=>({active:p,focus:p,selected:x,disabled:i,selectedOption:x&&a}),[p,x,i,a]),C=a?{}:{id:o,ref:m,role:"option",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,"aria-selected":x,disabled:void 0,onClick:O,onFocus:S,onPointerEnter:T,onMouseEnter:T,onPointerMove:w,onMouseMove:w,onPointerLeave:P,onMouseLeave:P};return!x&&a?null:(0,Z.sY)({ourProps:C,theirProps:l,slot:M,defaultTag:"div",name:"Listbox.Option"})}),ep=Object.assign(ea,{Button:es,Label:eu,Options:ec,Option:ed,SelectedOption:(0,Z.yV)(function(e,t){let{options:n,placeholder:o,...i}=e,r={ref:(0,I.T)(t)},l=et("ListboxSelectedOption"),a=(0,u.useMemo)(()=>({}),[]),s=void 0===l.value||null===l.value||1===l.mode&&Array.isArray(l.value)&&0===l.value.length;return u.createElement(ei.Provider,{value:!0},(0,Z.sY)({ourProps:r,theirProps:{...i,children:u.createElement(u.Fragment,null,o&&s?o:n)},slot:a,defaultTag:el,name:"ListboxSelectedOption"}))})})},9739:function(e,t,n){var o=n(5271);let i=o.forwardRef(function(e,t){let{title:n,titleId:i,...r}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},r),n?o.createElement("title",{id:i},n):null,o.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))});t.Z=i},9962:function(e,t,n){var o=n(5271);let i=o.forwardRef(function(e,t){let{title:n,titleId:i,...r}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},r),n?o.createElement("title",{id:i},n):null,o.createElement("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))});t.Z=i}}]);