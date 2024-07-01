import{r,a as z}from"./index-CTjT7uj6.js";import{r as _,R as K}from"./index-9r8iugjR.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p.apply(null,arguments)}function C(e,n,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return n==null?void 0:n(s)}}function H(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function I(...e){return n=>e.forEach(t=>H(t,n))}function M(...e){return r.useCallback(I(...e),e)}function ve(e,n){const t=r.createContext(n);function o(i){const{children:a,...c}=i,u=r.useMemo(()=>c,Object.values(c));return r.createElement(t.Provider,{value:u},a)}function s(i){const a=r.useContext(t);if(a)return a;if(n!==void 0)return n;throw new Error(`\`${i}\` must be used within \`${e}\``)}return o.displayName=e+"Provider",[o,s]}function $e(e,n=[]){let t=[];function o(i,a){const c=r.createContext(a),u=t.length;t=[...t,a];function l(d){const{scope:m,children:$,...b}=d,g=(m==null?void 0:m[e][u])||c,E=r.useMemo(()=>b,Object.values(b));return r.createElement(g.Provider,{value:E},$)}function f(d,m){const $=(m==null?void 0:m[e][u])||c,b=r.useContext($);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${d}\` must be used within \`${i}\``)}return l.displayName=i+"Provider",[l,f]}const s=()=>{const i=t.map(a=>r.createContext(a));return function(c){const u=(c==null?void 0:c[e])||i;return r.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return s.scopeName=e,[o,X(s,...n)]}function X(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=o.reduce((c,{useScope:u,scopeName:l})=>{const d=u(i)[`__scope${l}`];return{...c,...d}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:a}),[a])}};return t.scopeName=n.scopeName,t}const U=r.forwardRef((e,n)=>{const{children:t,...o}=e,s=r.Children.toArray(t),i=s.find(q);if(i){const a=i.props.children,c=s.map(u=>u===i?r.Children.count(a)>1?r.Children.only(null):r.isValidElement(a)?a.props.children:null:u);return r.createElement(x,p({},o,{ref:n}),r.isValidElement(a)?r.cloneElement(a,void 0,c):null)}return r.createElement(x,p({},o,{ref:n}),t)});U.displayName="Slot";const x=r.forwardRef((e,n)=>{const{children:t,...o}=e;return r.isValidElement(t)?r.cloneElement(t,{...G(o,t.props),ref:n?I(n,t.ref):t.ref}):r.Children.count(t)>1?r.Children.only(null):null});x.displayName="SlotClone";const Z=({children:e})=>r.createElement(r.Fragment,null,e);function q(e){return r.isValidElement(e)&&e.type===Z}function G(e,n){const t={...n};for(const o in n){const s=e[o],i=n[o];/^on[A-Z]/.test(o)?s&&i?t[o]=(...c)=>{i(...c),s(...c)}:s&&(t[o]=s):o==="style"?t[o]={...s,...i}:o==="className"&&(t[o]=[s,i].filter(Boolean).join(" "))}return{...e,...t}}const J=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],k=J.reduce((e,n)=>{const t=r.forwardRef((o,s)=>{const{asChild:i,...a}=o,c=i?U:n;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(c,p({},a,{ref:s}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function Q(e,n){e&&_.flushSync(()=>e.dispatchEvent(n))}function h(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}function Y(e,n=globalThis==null?void 0:globalThis.document){const t=h(e);r.useEffect(()=>{const o=s=>{s.key==="Escape"&&t(s)};return n.addEventListener("keydown",o),()=>n.removeEventListener("keydown",o)},[t,n])}const N="dismissableLayer.update",ee="dismissableLayer.pointerDownOutside",ne="dismissableLayer.focusOutside";let A;const te=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),me=r.forwardRef((e,n)=>{var t;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:c,onDismiss:u,...l}=e,f=r.useContext(te),[d,m]=r.useState(null),$=(t=d==null?void 0:d.ownerDocument)!==null&&t!==void 0?t:globalThis==null?void 0:globalThis.document,[,b]=r.useState({}),g=M(n,v=>m(v)),E=Array.from(f.layers),[B]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),W=E.indexOf(B),D=d?E.indexOf(d):-1,j=f.layersWithOutsidePointerEventsDisabled.size>0,S=D>=W,V=oe(v=>{const y=v.target,R=[...f.branches].some(O=>O.contains(y));!S||R||(i==null||i(v),c==null||c(v),v.defaultPrevented||u==null||u())},$),w=re(v=>{const y=v.target;[...f.branches].some(O=>O.contains(y))||(a==null||a(v),c==null||c(v),v.defaultPrevented||u==null||u())},$);return Y(v=>{D===f.layers.size-1&&(s==null||s(v),!v.defaultPrevented&&u&&(v.preventDefault(),u()))},$),r.useEffect(()=>{if(d)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(A=$.body.style.pointerEvents,$.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),L(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&($.body.style.pointerEvents=A)}},[d,$,o,f]),r.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),L())},[d,f]),r.useEffect(()=>{const v=()=>b({});return document.addEventListener(N,v),()=>document.removeEventListener(N,v)},[]),r.createElement(k.div,p({},l,{ref:g,style:{pointerEvents:j?S?"auto":"none":void 0,...e.style},onFocusCapture:C(e.onFocusCapture,w.onFocusCapture),onBlurCapture:C(e.onBlurCapture,w.onBlurCapture),onPointerDownCapture:C(e.onPointerDownCapture,V.onPointerDownCapture)}))});function oe(e,n=globalThis==null?void 0:globalThis.document){const t=h(e),o=r.useRef(!1),s=r.useRef(()=>{});return r.useEffect(()=>{const i=c=>{if(c.target&&!o.current){let l=function(){F(ee,t,u,{discrete:!0})};const u={originalEvent:c};c.pointerType==="touch"?(n.removeEventListener("click",s.current),s.current=l,n.addEventListener("click",s.current,{once:!0})):l()}else n.removeEventListener("click",s.current);o.current=!1},a=window.setTimeout(()=>{n.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),n.removeEventListener("pointerdown",i),n.removeEventListener("click",s.current)}},[n,t]),{onPointerDownCapture:()=>o.current=!0}}function re(e,n=globalThis==null?void 0:globalThis.document){const t=h(e),o=r.useRef(!1);return r.useEffect(()=>{const s=i=>{i.target&&!o.current&&F(ne,t,{originalEvent:i},{discrete:!1})};return n.addEventListener("focusin",s),()=>n.removeEventListener("focusin",s)},[n,t]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function L(){const e=new CustomEvent(N);document.dispatchEvent(e)}function F(e,n,t,{discrete:o}){const s=t.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&s.addEventListener(e,n,{once:!0}),o?Q(s,i):s.dispatchEvent(i)}const T=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},se=z.useId||(()=>{});let ie=0;function be(e){const[n,t]=r.useState(se());return T(()=>{e||t(o=>o??String(ie++))},[e]),e||(n?`radix-${n}`:"")}const pe=r.forwardRef((e,n)=>{var t;const{container:o=globalThis==null||(t=globalThis.document)===null||t===void 0?void 0:t.body,...s}=e;return o?K.createPortal(r.createElement(k.div,p({},s,{ref:n})),o):null});function ce(e,n){return r.useReducer((t,o)=>{const s=n[t][o];return s??t},e)}const ae=e=>{const{present:n,children:t}=e,o=ue(n),s=typeof t=="function"?t({present:o.isPresent}):r.Children.only(t),i=M(o.ref,s.ref);return typeof t=="function"||o.isPresent?r.cloneElement(s,{ref:i}):null};ae.displayName="Presence";function ue(e){const[n,t]=r.useState(),o=r.useRef({}),s=r.useRef(e),i=r.useRef("none"),a=e?"mounted":"unmounted",[c,u]=ce(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const l=P(o.current);i.current=c==="mounted"?l:"none"},[c]),T(()=>{const l=o.current,f=s.current;if(f!==e){const m=i.current,$=P(l);e?u("MOUNT"):$==="none"||(l==null?void 0:l.display)==="none"?u("UNMOUNT"):u(f&&m!==$?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,u]),T(()=>{if(n){const l=d=>{const $=P(o.current).includes(d.animationName);d.target===n&&$&&_.flushSync(()=>u("ANIMATION_END"))},f=d=>{d.target===n&&(i.current=P(o.current))};return n.addEventListener("animationstart",f),n.addEventListener("animationcancel",l),n.addEventListener("animationend",l),()=>{n.removeEventListener("animationstart",f),n.removeEventListener("animationcancel",l),n.removeEventListener("animationend",l)}}else u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:r.useCallback(l=>{l&&(o.current=getComputedStyle(l)),t(l)},[])}}function P(e){return(e==null?void 0:e.animationName)||"none"}function he({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,s]=le({defaultProp:n,onChange:t}),i=e!==void 0,a=i?e:o,c=h(t),u=r.useCallback(l=>{if(i){const d=typeof l=="function"?l(e):l;d!==e&&c(d)}else s(l)},[i,e,s,c]);return[a,u]}function le({defaultProp:e,onChange:n}){const t=r.useState(e),[o]=t,s=r.useRef(o),i=h(n);return r.useEffect(()=>{s.current!==o&&(i(o),s.current=o)},[o,s,i]),t}export{k as $,p as _,T as a,$e as b,M as c,h as d,be as e,he as f,C as g,ae as h,pe as i,me as j,Z as k,U as l,ve as m};
