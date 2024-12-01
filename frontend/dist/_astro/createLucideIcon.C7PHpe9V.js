import{r as g}from"./index.l2PZgWEW.js";var ne={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=g,ye=Symbol.for("react.element"),ve=Symbol.for("react.fragment"),xe=Object.prototype.hasOwnProperty,we=he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ce={key:!0,ref:!0,__self:!0,__source:!0};function se(e,r,t){var o,s={},n=null,l=null;t!==void 0&&(n=""+t),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)xe.call(r,o)&&!Ce.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)s[o]===void 0&&(s[o]=r[o]);return{$$typeof:ye,type:e,key:n,ref:l,props:s,_owner:we.current}}L.Fragment=ve;L.jsx=se;L.jsxs=se;ne.exports=L;var E=ne.exports;function ke(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function ie(...e){return r=>e.forEach(t=>ke(t,r))}function mr(...e){return g.useCallback(ie(...e),e)}var le=g.forwardRef((e,r)=>{const{children:t,...o}=e,s=g.Children.toArray(t),n=s.find(Se);if(n){const l=n.props.children,i=s.map(d=>d===n?g.Children.count(l)>1?g.Children.only(null):g.isValidElement(l)?l.props.children:null:d);return E.jsx(F,{...o,ref:r,children:g.isValidElement(l)?g.cloneElement(l,void 0,i):null})}return E.jsx(F,{...o,ref:r,children:t})});le.displayName="Slot";var F=g.forwardRef((e,r)=>{const{children:t,...o}=e;if(g.isValidElement(t)){const s=Re(t);return g.cloneElement(t,{...Ae(o,t.props),ref:r?ie(r,s):s})}return g.Children.count(t)>1?g.Children.only(null):null});F.displayName="SlotClone";var ze=({children:e})=>E.jsx(E.Fragment,{children:e});function Se(e){return g.isValidElement(e)&&e.type===ze}function Ae(e,r){const t={...r};for(const o in r){const s=e[o],n=r[o];/^on[A-Z]/.test(o)?s&&n?t[o]=(...i)=>{n(...i),s(...i)}:s&&(t[o]=s):o==="style"?t[o]={...s,...n}:o==="className"&&(t[o]=[s,n].filter(Boolean).join(" "))}return{...e,...t}}function Re(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function ae(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=ae(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function je(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=ae(e))&&(o&&(o+=" "),o+=r);return o}const ee=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,re=je,Ee=(e,r)=>t=>{var o;if(r?.variants==null)return re(e,t?.class,t?.className);const{variants:s,defaultVariants:n}=r,l=Object.keys(s).map(c=>{const f=t?.[c],y=n?.[c];if(f===null)return null;const h=ee(f)||ee(y);return s[c][h]}),i=t&&Object.entries(t).reduce((c,f)=>{let[y,h]=f;return h===void 0||(c[y]=h),c},{}),d=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,f)=>{let{class:y,className:h,...C}=f;return Object.entries(C).every(x=>{let[m,u]=x;return Array.isArray(u)?u.includes({...n,...i}[m]):{...n,...i}[m]===u})?[...c,y,h]:c},[]);return re(e,l,d,t?.class,t?.className)};function ce(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=ce(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ne(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=ce(e))&&(o&&(o+=" "),o+=r);return o}const Z="-",Pe=e=>{const r=Me(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const i=l.split(Z);return i[0]===""&&i.length!==1&&i.shift(),de(i,r)||Ie(l)},getConflictingClassGroupIds:(l,i)=>{const d=t[l]||[];return i&&o[l]?[...d,...o[l]]:d}}},de=(e,r)=>{if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?de(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(Z);return r.validators.find(({validator:l})=>l(n))?.classGroupId},te=/^\[(.+)\]$/,Ie=e=>{if(te.test(e)){const r=te.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Me=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Ge(Object.entries(e.classGroups),t).forEach(([n,l])=>{q(l,o,n,r)}),o},q=(e,r,t,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:oe(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(_e(s)){q(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,l])=>{q(l,oe(r,n),t,o)})})},oe=(e,r)=>{let t=e;return r.split(Z).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},_e=e=>e.isThemeGetter,Ge=(e,r)=>r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,i])=>[r+l,i])):n);return[t,s]}):e,Oe=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(n,l)=>{t.set(n,l),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let l=t.get(n);if(l!==void 0)return l;if((l=o.get(n))!==void 0)return s(n,l),l},set(n,l){t.has(n)?t.set(n,l):s(n,l)}}},ue="!",Ve=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length,l=i=>{const d=[];let c=0,f=0,y;for(let u=0;u<i.length;u++){let v=i[u];if(c===0){if(v===s&&(o||i.slice(u,u+n)===r)){d.push(i.slice(f,u)),f=u+n;continue}if(v==="/"){y=u;continue}}v==="["?c++:v==="]"&&c--}const h=d.length===0?i:i.substring(f),C=h.startsWith(ue),x=C?h.substring(1):h,m=y&&y>f?y-f:void 0;return{modifiers:d,hasImportantModifier:C,baseClassName:x,maybePostfixModifierPosition:m}};return t?i=>t({className:i,parseClassName:l}):l},Le=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Te=e=>({cache:Oe(e.cacheSize),parseClassName:Ve(e),...Pe(e)}),We=/\s+/,$e=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=[],l=e.trim().split(We);let i="";for(let d=l.length-1;d>=0;d-=1){const c=l[d],{modifiers:f,hasImportantModifier:y,baseClassName:h,maybePostfixModifierPosition:C}=t(c);let x=!!C,m=o(x?h.substring(0,C):h);if(!m){if(!x){i=c+(i.length>0?" "+i:i);continue}if(m=o(h),!m){i=c+(i.length>0?" "+i:i);continue}x=!1}const u=Le(f).join(":"),v=y?u+ue:u,w=v+m;if(n.includes(w))continue;n.push(w);const P=s(m,x);for(let R=0;R<P.length;++R){const G=P[R];n.push(v+G)}i=c+(i.length>0?" "+i:i)}return i};function Be(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=pe(r))&&(o&&(o+=" "),o+=t);return o}const pe=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=pe(e[o]))&&(t&&(t+=" "),t+=r);return t};function Ue(e,...r){let t,o,s,n=l;function l(d){const c=r.reduce((f,y)=>y(f),e());return t=Te(c),o=t.cache.get,s=t.cache.set,n=i,i(d)}function i(d){const c=o(d);if(c)return c;const f=$e(d,t);return s(d,f),f}return function(){return n(Be.apply(null,arguments))}}const p=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},fe=/^\[(?:([a-z-]+):)?(.+)\]$/i,Fe=/^\d+\/\d+$/,qe=new Set(["px","full","screen"]),Ze=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,He=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Je=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ke=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>j(e)||qe.has(e)||Fe.test(e),S=e=>N(e,"length",nr),j=e=>!!e&&!Number.isNaN(Number(e)),U=e=>N(e,"number",j),M=e=>!!e&&Number.isInteger(Number(e)),Ye=e=>e.endsWith("%")&&j(e.slice(0,-1)),a=e=>fe.test(e),A=e=>Ze.test(e),Qe=new Set(["length","size","percentage"]),De=e=>N(e,Qe,be),er=e=>N(e,"position",be),rr=new Set(["image","url"]),tr=e=>N(e,rr,ir),or=e=>N(e,"",sr),_=()=>!0,N=(e,r,t)=>{const o=fe.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},nr=e=>He.test(e)&&!Je.test(e),be=()=>!1,sr=e=>Ke.test(e),ir=e=>Xe.test(e),lr=()=>{const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),s=p("borderColor"),n=p("borderRadius"),l=p("borderSpacing"),i=p("borderWidth"),d=p("contrast"),c=p("grayscale"),f=p("hueRotate"),y=p("invert"),h=p("gap"),C=p("gradientColorStops"),x=p("gradientColorStopPositions"),m=p("inset"),u=p("margin"),v=p("opacity"),w=p("padding"),P=p("saturate"),R=p("scale"),G=p("sepia"),H=p("skew"),J=p("space"),K=p("translate"),T=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",a,r],b=()=>[a,r],X=()=>["",z,S],O=()=>["auto",j,a],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",a],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[j,a];return{cacheSize:500,separator:":",theme:{colors:[_],spacing:[z,S],blur:["none","",A,a],brightness:k(),borderColor:[e],borderRadius:["none","","full",A,a],borderSpacing:b(),borderWidth:X(),contrast:k(),grayscale:I(),hueRotate:k(),invert:I(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[Ye,S],inset:$(),margin:$(),opacity:k(),padding:b(),saturate:k(),scale:k(),sepia:I(),skew:k(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),a]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",M,a]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",M,a]}],"grid-cols":[{"grid-cols":[_]}],"col-start-end":[{col:["auto",{span:["full",M,a]},a]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[_]}],"row-start-end":[{row:["auto",{span:[M,a]},a]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",A,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",U]}],"font-family":[{font:[_]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",j,U]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,S]}],"underline-offset":[{"underline-offset":["auto",z,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),er]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",De]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},tr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:V()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[z,a]}],"outline-w":[{outline:[z,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[z,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,or]}],"shadow-color":[{shadow:[_]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",A,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[y]}],saturate:[{saturate:[P]}],sepia:[{sepia:[G]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[G]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[M,a]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[H]}],"skew-y":[{"skew-y":[H]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,S,U]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ar=Ue(lr);function ge(...e){return ar(Ne(e))}const cr=Ee("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),dr=g.forwardRef(({className:e,variant:r,size:t,asChild:o=!1,...s},n)=>{const l=o?le:"button";return E.jsx(l,{className:ge(cr({variant:r,size:t,className:e})),ref:n,...s})});dr.displayName="Button";const ur=g.forwardRef(({className:e,type:r,...t},o)=>E.jsx("input",{type:r,className:ge("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...t}));ur.displayName="Input";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),me=(...e)=>e.filter((r,t,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===t).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=g.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:l,...i},d)=>g.createElement("svg",{ref:d,...fr,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:me("lucide",s),...i},[...l.map(([c,f])=>g.createElement(c,f)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=(e,r)=>{const t=g.forwardRef(({className:o,...s},n)=>g.createElement(br,{ref:n,iconNode:r,className:me(`lucide-${pr(e)}`,o),...s}));return t.displayName=`${e}`,t};export{dr as B,ur as I,le as S,ge as a,Ne as b,hr as c,ie as d,Ee as e,ze as f,E as j,mr as u};
