(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9669:function(e,t,r){Promise.resolve().then(r.t.bind(r,4896,23)),Promise.resolve().then(r.bind(r,1239)),Promise.resolve().then(r.t.bind(r,3240,23)),Promise.resolve().then(r.bind(r,3984)),Promise.resolve().then(r.bind(r,6643)),Promise.resolve().then(r.bind(r,5338)),Promise.resolve().then(r.bind(r,6621)),Promise.resolve().then(r.bind(r,6352)),Promise.resolve().then(r.bind(r,5166)),Promise.resolve().then(r.bind(r,4976)),Promise.resolve().then(r.bind(r,5573)),Promise.resolve().then(r.bind(r,6096)),Promise.resolve().then(r.bind(r,2076)),Promise.resolve().then(r.bind(r,6288)),Promise.resolve().then(r.bind(r,6298)),Promise.resolve().then(r.bind(r,1469)),Promise.resolve().then(r.bind(r,1439)),Promise.resolve().then(r.bind(r,7967)),Promise.resolve().then(r.bind(r,5905)),Promise.resolve().then(r.bind(r,1355)),Promise.resolve().then(r.bind(r,2421))},5338:function(e,t,r){"use strict";r.r(t),r.d(t,{FooterContentContainer:function(){return i}});var s=r(9268),n=r(6006);let i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;i(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(l.current),()=>e.disconnect()},[]),(0,n.useLayoutEffect)(()=>{var e,t;r?null===(e=l.current)||void 0===e||e.classList.add("footertextfadeup"):null===(t=l.current)||void 0===t||t.classList.remove("footertextfadeup")},[r]),(0,s.jsx)("div",{ref:l,className:"invisible",children:t})}},1239:function(e,t,r){"use strict";r.r(t),r.d(t,{MobileMenu:function(){return u}});var s=r(9268),n=r(8058),i=r(6394),l=r.n(i),a={src:"https://thyenigmatic.github.io/immihub/_next/static/media/hamburger.69c72ec4.svg",height:32,width:32,blurWidth:0,blurHeight:0},o=r(5846),c=r.n(o);let u=e=>{let{navlinks:t}=e;return(0,s.jsxs)(n.v,{as:"div",className:"block md:hidden",children:[(0,s.jsx)(n.v.Button,{as:"div",className:"border-none",children:(0,s.jsx)(l(),{alt:"menu",src:a,height:24,width:24})}),(0,s.jsx)(n.v.Items,{className:"flex flex-col p-4 bg-gray-900 rounded focus-visible:outline-none absolute right-1 top-[4.75rem]",children:t.map(e=>(0,s.jsx)(n.v.Item,{children:t=>{let{active:r}=t;return(0,s.jsx)(c(),{className:"".concat(r&&"bg-white"," px-1 py-2 rounded text-white text-xl"),href:e.href,children:e.text})}},e.text))})]})}},2941:function(e,t,r){"use strict";r.d(t,{$:function(){return n}});var s=r(9268);let n=e=>{let{children:t,className:r="px-8 my-10 w-full"}=e;return(0,s.jsx)("section",{className:r,children:t})};n.Heading=e=>{let{children:t,className:r}=e;return(0,s.jsx)("div",{className:"flex flex-col items-start gap-6 "+r,children:t})},n.Subtitle=e=>{let{children:t,className:r}=e;return(0,s.jsx)("div",{className:"uppercase font-semibold text-sm text-gray-500 "+r,children:t})},n.Title=e=>{let{children:t,className:r}=e;return(0,s.jsx)("h2",{className:"font-saira-condensed text-4xl leading-[1.3] font-medium text-gray-900 "+r,children:t})},n.Body=e=>{let{children:t,className:r}=e;return(0,s.jsx)("div",{className:"mt-8 "+r,children:t})}},5905:function(e,t,r){"use strict";r.r(t),r.d(t,{AppDemoScreenContainer:function(){return i}});var s=r(9268),n=r(6006);let i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),l=(0,n.useRef)(null),[a,o]=(0,n.useState)(!1),c=(0,n.useRef)(0);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;c.current>t.boundingClientRect.y?o(!0):o(!1),c.current=t.boundingClientRect.y,i(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(l.current),()=>e.disconnect()},[]),(0,n.useLayoutEffect)(()=>{var e,t,s,n;r?a?null===(e=l.current)||void 0===e||e.classList.add("fadeup"):null===(t=l.current)||void 0===t||t.classList.add("fadedown"):a?null===(s=l.current)||void 0===s||s.classList.remove("fadeup"):null===(n=l.current)||void 0===n||n.classList.remove("fadedown")},[r,a]),(0,s.jsx)("div",{ref:l,className:"flex invisible items-start justify-center gap-2 lg:gap-14 mt-12 mb-20 md:my-32",children:t})}},7967:function(e,t,r){"use strict";r.r(t),r.d(t,{FAQS:function(){return z}});var s,n,i,l=r(9268),a=r(6394),o=r.n(a),c=r(6006),u=r(9325),d=r(4602),m=r(8496),f=r(6236),h=r(8277),g=r(4373),p=r(546),x=r(1795),b=r(3432),v=r(3562);let y=null!=(i=c.startTransition)?i:function(e){e()};var A=((s=A||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),j=((n=j||{})[n.ToggleDisclosure=0]="ToggleDisclosure",n[n.CloseDisclosure=1]="CloseDisclosure",n[n.SetButtonId=2]="SetButtonId",n[n.SetPanelId=3]="SetPanelId",n[n.LinkPanel=4]="LinkPanel",n[n.UnlinkPanel=5]="UnlinkPanel",n);let w={0:e=>({...e,disclosureState:(0,u.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},N=(0,c.createContext)(null);function P(e){let t=(0,c.useContext)(N);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,P),t}return t}N.displayName="DisclosureContext";let I=(0,c.createContext)(null);I.displayName="DisclosureAPIContext";let E=(0,c.createContext)(null);function C(e,t){return(0,u.E)(t.type,w,e,t)}E.displayName="DisclosurePanelContext";let k=c.Fragment,R=d.AN.RenderStrategy|d.AN.Static,S=Object.assign((0,d.yV)(function(e,t){let{defaultOpen:r=!1,...s}=e,n=(0,c.useRef)(null),i=(0,m.T)(t,(0,m.h)(e=>{n.current=e},void 0===e.as||e.as===c.Fragment)),l=(0,c.useRef)(null),a=(0,c.useRef)(null),o=(0,c.useReducer)(C,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:a,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:f,buttonId:h},g]=o,x=(0,v.z)(e=>{g({type:1});let t=(0,b.r)(n);if(!t||!h)return;let r=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(h):t.getElementById(h);null==r||r.focus()}),y=(0,c.useMemo)(()=>({close:x}),[x]),A=(0,c.useMemo)(()=>({open:0===f,close:x}),[f,x]);return c.createElement(N.Provider,{value:o},c.createElement(I.Provider,{value:y},c.createElement(p.up,{value:(0,u.E)(f,{0:p.ZM.Open,1:p.ZM.Closed})},(0,d.sY)({ourProps:{ref:i},theirProps:s,slot:A,defaultTag:k,name:"Disclosure"}))))}),{Button:(0,d.yV)(function(e,t){let r=(0,f.M)(),{id:s=`headlessui-disclosure-button-${r}`,...n}=e,[i,l]=P("Disclosure.Button"),a=(0,c.useContext)(E),o=null!==a&&a===i.panelId,u=(0,c.useRef)(null),p=(0,m.T)(u,t,o?null:i.buttonRef);(0,c.useEffect)(()=>{if(!o)return l({type:2,buttonId:s}),()=>{l({type:2,buttonId:null})}},[s,l,o]);let b=(0,v.z)(e=>{var t;if(o){if(1===i.disclosureState)return;switch(e.key){case h.R.Space:case h.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0}),null==(t=i.buttonRef.current)||t.focus()}}else switch(e.key){case h.R.Space:case h.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0})}}),y=(0,v.z)(e=>{e.key===h.R.Space&&e.preventDefault()}),A=(0,v.z)(t=>{var r;(0,g.P)(t.currentTarget)||e.disabled||(o?(l({type:0}),null==(r=i.buttonRef.current)||r.focus()):l({type:0}))}),j=(0,c.useMemo)(()=>({open:0===i.disclosureState}),[i]),w=(0,x.f)(e,u),N=o?{ref:p,type:w,onKeyDown:b,onClick:A}:{ref:p,id:s,type:w,"aria-expanded":e.disabled?void 0:0===i.disclosureState,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:b,onKeyUp:y,onClick:A};return(0,d.sY)({ourProps:N,theirProps:n,slot:j,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,d.yV)(function(e,t){let r=(0,f.M)(),{id:s=`headlessui-disclosure-panel-${r}`,...n}=e,[i,l]=P("Disclosure.Panel"),{close:a}=function e(t){let r=(0,c.useContext)(I);if(null===r){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("Disclosure.Panel"),o=(0,m.T)(t,i.panelRef,e=>{y(()=>l({type:e?4:5}))});(0,c.useEffect)(()=>(l({type:3,panelId:s}),()=>{l({type:3,panelId:null})}),[s,l]);let u=(0,p.oJ)(),h=null!==u?(u&p.ZM.Open)===p.ZM.Open:0===i.disclosureState,g=(0,c.useMemo)(()=>({open:0===i.disclosureState,close:a}),[i,a]);return c.createElement(E.Provider,{value:i.panelId},(0,d.sY)({ourProps:{ref:o,id:s},theirProps:n,slot:g,defaultTag:"div",features:R,visible:h,name:"Disclosure.Panel"}))})});var L={src:"https://thyenigmatic.github.io/immihub/_next/static/media/using-mobile.69e0ed5d.png",height:665,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAATlBMVEVjgF8PKBiYoJtbYlN3Y1QlOioeJiN/hn2CaFhORDhviGyKemvZ3NWQn497Uz1GYERrTUU0TjUoQS5Vb1XKy8QvRDTHyMCosKu4t6+1l4RPPV9UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBBwKAIAwAsQMLbVkOnP//qAn7mvKEdORtFkJwAy612kHPu7VCfN7PnFhlDEFl6eo/NUcB4hbI4lQAAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},M={src:"https://thyenigmatic.github.io/immihub/_next/static/media/chevronup.5c1f7482.svg",height:52,width:52,blurWidth:0,blurHeight:0};r(3984),r(6643),r(7619);var D=r(5846),B=r.n(D);r(1239);let T=e=>{let{bgcolor:t,children:r,width:s,borderRadius:n="rounded"}=e;return(0,l.jsx)("div",{className:"border rounded font-sans border-black pr-1 pb-1 bg-black ".concat(n," ").concat(s),children:(0,l.jsx)("div",{className:"border rounded font-sans -ml-2 -mt-2 border-black py-4 px-4 md:px-6 h-full ".concat(n," ").concat(t),children:r})})};T.Image=e=>{let{bgcolor:t,children:r}=e;return(0,l.jsx)("div",{className:"w-8 h-8 rounded-full relative flex items-center justify-center "+t,children:r})},T.ImageWithText=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"flex flex-row items-center gap-4",children:t})},T.Text=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"text-sm md:text-base text-gray-900 capitalize font-medium",children:t})},T.Content=e=>{let{color:t,children:r}=e;return(0,l.jsx)("div",{className:"flex flex-col items-start justify-between gap-2 mt-4 text-sm md:text-xs w-full md:w-11/12 "+t,children:r})},T.More=e=>{let{color:t,children:r}=e;return(0,l.jsx)("div",{className:"text-xs text-blue-600 font-medium my-4 "+t,children:r})};var O=r(2941);let H=()=>(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)("div",{className:"h-12 w-12 bg-black rounded-full text-white flex items-center justify-center",children:(0,l.jsx)("h1",{className:"text-3xl font-black -tracking-widest p-0 m-0",children:"iH"})}),(0,l.jsx)("p",{className:"text-2xl font-extrabold text-black tracking-wide",children:"Immihub"})]});var F=r(6621),U=r(5338);let V=()=>(0,l.jsxs)("div",{id:"footer",className:"border-t border-black bg-gray-100",children:[(0,l.jsx)(U.FooterContentContainer,{children:(0,l.jsx)(V.Content,{children:(0,l.jsxs)(V.Row,{children:[(0,l.jsxs)(V.Col,{children:[(0,l.jsx)(H,{}),(0,l.jsxs)("div",{className:"mt-12",children:[(0,l.jsx)("p",{className:"uppercase text-sm text-gray-700",children:"*subscribe to our newsletter*"}),(0,l.jsxs)("div",{className:"flex items-center relative mt-2",children:[(0,l.jsx)("input",{type:"text",placeholder:"Enter your e-mail",className:"rounded-full w-[14rem] bg-gray-200 py-2 px-4"}),(0,l.jsx)("button",{className:"w-9 h-9 rounded-full -ml-5 bg-gray-800 hover:bg-gray-600 flex items-center justify-center",children:(0,l.jsx)(o(),{src:F.default,alt:"user mobile",style:{objectFit:"cover"},className:"rotate-90 transform h-[1.1rem] w-[1.1rem] abolute"})})]})]})]}),Q.map(e=>(0,l.jsxs)(V.Col,{children:[(0,l.jsx)(V.Title,{children:e.title}),e.links.map(e=>(0,l.jsx)(V.Link,{href:e.herf,text:e.text},e.text))]},e.title))]})})}),(0,l.jsxs)(V.Tail,{children:[(0,l.jsx)("p",{children:"Copyright・\xa9・2020 Immihub"}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)(B(),{href:"#",children:"Privacy Policy"}),(0,l.jsx)(B(),{href:"#",children:"Terms & Conditions"})]})]})]});V.Content=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"px-0 md:px-40 py-16",children:t})},V.Row=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-6  grid-flow-row gap-y-12 gap-x-4 md:gap-y-0",children:t})},V.Col=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"flex col-span-1 first:col-span-2 flex-col items-center md:items-start justify-start gap-4",children:t})},V.Title=e=>{let{children:t}=e;return(0,l.jsx)("p",{className:"uppercase text-gray-800 text-sm",children:t})},V.Link=e=>{let{text:t,href:r}=e;return(0,l.jsx)(B(),{href:r,className:"text-sm text-gray-600",children:t})},V.Tail=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"bg-gray-800 text-white flex items-center justify-between px-4 md:px-40 py-3 text-xs",children:t})};let Q=[{title:"overview",links:[{text:"Homepage",herf:"./"},{text:"Pricing",herf:"#"},{text:"Features",herf:"./#features"},{text:"About us",herf:"#"},{text:"Contact",herf:"#"}]},{title:"Product",links:[{text:"Integration",herf:"#"},{text:"Download",herf:"#"},{text:"Login",herf:"#"}]},{title:"pages",links:[{text:"Blog",herf:"#"},{text:"Blog Post",herf:"#"},{text:"Resources",herf:"#"},{text:"Case Study",herf:"#"}]},{title:"utilities",links:[{text:"Style guide",herf:"#"},{text:"Licesnse",herf:"#"},{text:"Changelog",herf:"#"}]}],W=e=>{let{children:t}=e,[r,s]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;s(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(n.current),()=>e.disconnect()},[]),(0,c.useLayoutEffect)(()=>{var e,t;r?null===(e=n.current)||void 0===e||e.classList.add("fadeuptext"):null===(t=n.current)||void 0===t||t.classList.remove("fadeuptext")},[r]),(0,l.jsx)("div",{id:"faqs",ref:n,className:"grid invisible grid-cols-5 grid-flow-row gap-8 my-20 w-full py-12",children:t})},z=()=>(0,l.jsxs)(W,{children:[(0,l.jsx)("div",{className:"hidden md:block col-span-2 bg-black relative rounded h-[32rem] pr-2 pb-1",children:(0,l.jsx)("div",{className:"border relative rounded font-sans -ml-3 -mt-1 bg-black border-black py-4 px-6 h-full",children:(0,l.jsx)(o(),{src:L,alt:"user mobile",fill:!0,sizes:"",style:{objectFit:"cover"},className:"rounded"})})}),(0,l.jsxs)(O.$,{className:"px-2 col-span-5 md:col-span-3",children:[(0,l.jsxs)(O.$.Heading,{children:[(0,l.jsx)(O.$.Subtitle,{children:(0,l.jsx)("p",{children:"faqs"})}),(0,l.jsxs)(O.$.Title,{children:["Frequently Asked ",(0,l.jsx)("br",{})," Questions"]})]}),(0,l.jsx)(O.$.Body,{children:(0,l.jsxs)(T,{bgcolor:"bg-white",children:[(0,l.jsx)(S,{children:e=>{let{open:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(S.Button,{className:"flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75",children:[(0,l.jsx)("span",{children:"What specific immigration services do you offer?"}),(0,l.jsx)(o(),{src:M,alt:"user mobile",style:{objectFit:"cover"},className:"".concat(t?"rotate-180 transform":""," h-5 w-5 text-purple-500")})]}),(0,l.jsx)(S.Panel,{className:"px-4 pt-4 pb-2 text-sm text-gray-500",children:"We offer a wide range of immigration services, including visa applications, work permits, permanent residency applications, citizenship applications, and more."})]})}}),(0,l.jsx)(S,{as:"div",className:"mt-2",children:e=>{let{open:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(S.Button,{className:"flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75",children:[(0,l.jsx)("span",{children:"How can I contact your customer support team?"}),(0,l.jsx)(o(),{src:M,alt:"user mobile",style:{objectFit:"cover"},className:"".concat(t?"rotate-180 transform":""," h-5 w-5 text-purple-500")})]}),(0,l.jsx)(S.Panel,{className:"px-4 pt-4 pb-2 text-sm text-gray-500",children:"You can contact our customer support team via phone, email, or through our online chat system on our website."})]})}}),(0,l.jsx)(S,{as:"div",className:"mt-2",children:e=>{let{open:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(S.Button,{className:"flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75",children:[(0,l.jsx)("span",{children:"What payment methods do you provide?"}),(0,l.jsx)(o(),{src:M,alt:"user mobile",style:{objectFit:"cover"},className:"".concat(t?"rotate-180 transform":""," h-5 w-5 text-purple-500")})]}),(0,l.jsx)(S.Panel,{className:"px-4 pt-4 pb-2 text-sm text-gray-500",children:"Paypal, Wire-transfer, Online Card Payment"})]})}}),(0,l.jsx)(S,{as:"div",className:"mt-2",children:e=>{let{open:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(S.Button,{className:"flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75",children:[(0,l.jsx)("span",{children:"Is your customer support team multilingual?"}),(0,l.jsx)(o(),{src:M,alt:"user mobile",style:{objectFit:"cover"},className:"".concat(t?"rotate-180 transform":""," h-5 w-5 text-purple-500")})]}),(0,l.jsx)(S.Panel,{className:"px-4 pt-4 pb-2 text-sm text-gray-500",children:"Yes, our customer support team consists of multilingual representatives who can assist you in various languages based on your preferences and needs."})]})}}),(0,l.jsx)(S,{as:"div",className:"mt-2",children:e=>{let{open:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(S.Button,{className:"flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75",children:[(0,l.jsx)("span",{children:"Can your customer support team provide legal advice?"}),(0,l.jsx)(o(),{src:M,alt:"user mobile",style:{objectFit:"cover"},className:"".concat(t?"rotate-180 transform":""," h-5 w-5 text-purple-500")})]}),(0,l.jsx)(S.Panel,{className:"px-4 pt-4 pb-2 text-sm text-gray-500",children:"Our customer support team consists of immigration experts who can provide general guidance and information regarding immigration processes. However, they cannot provide specific legal advice. For legal matters, we recommend consulting with an immigration attorney."})]})}})]})})]})]})},1469:function(e,t,r){"use strict";r.r(t),r.d(t,{FeaturesContainer:function(){return l}});var s=r(9268),n=r(2941),i=r(6006);let l=e=>{let{children:t}=e,[r,l]=(0,i.useState)(!1),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;l(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(a.current),()=>e.disconnect()},[]),(0,i.useLayoutEffect)(()=>{var e,t;r?null===(e=a.current)||void 0===e||e.classList.add("fliphorizontal"):null===(t=a.current)||void 0===t||t.classList.remove("fliphorizontal")},[r]),(0,s.jsx)("div",{id:"features",ref:a,className:"invisible w-full my-5 py-5",children:(0,s.jsx)(n.$,{className:"my-0 w-auto",children:t})})}},6288:function(e,t,r){"use strict";r.r(t),r.d(t,{ImageContainer:function(){return i}});var s=r(9268),n=r(6006);let i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;i(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(l.current),()=>e.disconnect()},[]),(0,n.useLayoutEffect)(()=>{var e,t;r?null===(e=l.current)||void 0===e||e.classList.add("fadeleft"):null===(t=l.current)||void 0===t||t.classList.remove("fadeleft")},[r]),(0,s.jsx)("section",{ref:l,className:"items-start justify-end hidden relative md:flex col-span-4 lg:col-span-5 invisible",children:t})}},2076:function(e,t,r){"use strict";r.r(t),r.d(t,{LandingTextContainer:function(){return i}});var s=r(9268),n=r(6006);let i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;i(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(l.current),()=>e.disconnect()},[]),(0,n.useLayoutEffect)(()=>{var e,t;r?null===(e=l.current)||void 0===e||e.classList.add("faderight"):null===(t=l.current)||void 0===t||t.classList.remove("faderight")},[r]),(0,s.jsx)("section",{ref:l,className:"col-span-8 md:col-span-4 lg:col-span-3 invisible",children:t})}},1439:function(e,t,r){"use strict";r.r(t),r.d(t,{MetricsContainer:function(){return i}});var s=r(9268),n=r(6006);let i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;i(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(l.current),()=>e.disconnect()}),(0,n.useLayoutEffect)(()=>{var e,t;r?null===(e=l.current)||void 0===e||e.classList.add("fadeleft"):null===(t=l.current)||void 0===t||t.classList.remove("fadeleft")},[r]),(0,s.jsx)("div",{ref:l,className:"grid invisible grid-cols-4 gap-4 w-full my-16 md:my-10 text-gray-900",children:t})}},2421:function(e,t,r){"use strict";r.r(t),r.d(t,{RequestDemoContainer:function(){return i}});var s=r(9268),n=r(6006);let i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;i(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(l.current),()=>e.disconnect()},[]),(0,n.useLayoutEffect)(()=>{var e,t;r?null===(e=l.current)||void 0===e||e.classList.add("fliphorizontal"):null===(t=l.current)||void 0===t||t.classList.remove("fliphorizontal")},[r]),(0,s.jsx)("div",{ref:l,className:"w-auto md:w-full my-24 invisible",children:t})}},6352:function(e,t,r){"use strict";r.r(t),r.d(t,{TheoryContainer:function(){return i}});var s=r(9268),n=r(6006);let i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;i(t.isIntersecting)},{rootMargin:"-100px"});return e.observe(l.current),()=>e.disconnect()},[]),(0,n.useLayoutEffect)(()=>{var e,t;r?null===(e=l.current)||void 0===e||e.classList.add("faderight"):null===(t=l.current)||void 0===t||t.classList.remove("faderight")},[r]),(0,s.jsx)("div",{id:"why-immihub",ref:l,className:"invisible grid grid-flow-row grid-cols-4 w-full my-5 py-5 md:my-28 gap-y-4 gap-x-4 md:gap-x-8",children:t})}},7619:function(){},3984:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/apple.36744dab.svg",height:288,width:288,blurWidth:0,blurHeight:0}},4976:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/bell.32af714d.svg",height:24,width:24,blurWidth:0,blurHeight:0}},6621:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/chevronup-white.04fad45c.svg",height:52,width:52,blurWidth:0,blurHeight:0}},5573:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/flag.71def5cc.svg",height:24,width:24,blurWidth:0,blurHeight:0}},6096:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/group.f9297942.svg",height:200,width:200,blurWidth:0,blurHeight:0}},6643:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/play-store.be58509e.svg",height:24,width:24,blurWidth:0,blurHeight:0}},1355:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/app-screen.af5414ba.png",height:1224,width:566,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAOVBMVEUiJCdHSUogHyC9vME2TqYnMFNKT0QREx1bXV4uQo6Lpj4iISEsOWcrOGVzdHfIysOEhImu0U1ZYkQlhf/BAAAAC3RSTlPw8vPv7/P5/PzA8jIEvRUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicBcEJAgAQCADBjShy//+xZqivCv3ujLiDnwVmBikCypiFpto+E6sA7pkAIvMAAAAASUVORK5CYII=",blurWidth:4,blurHeight:8}},6298:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/landing.a04e6043.png",height:1071,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAY1BMVEVMaXHQ0unA0PTz/P+UrvHN1/PKw9Dh6vnq9Pru+f/t9//49O3MvcPSopmBpfjr9Prez9Lh7v/q8fvr8vvLe1jeqp3r4uKXp8Txxqrg3uzr6u6bu///pGDzrH6rlafG3/+wp7Lw6yIXAAAAG3RSTlMA/f1r+fv9HMD8x8H97Or0VpyIzuzs6uz///5/sL7DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nAXBBwKAIAwAsQOBFvcWcP7/lSYgOkyjAFX01vgZaYoJNi/UuU0pvEo83X19T0Fd323Huv83eQKVH4QIJQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},5166:function(e,t,r){"use strict";r.r(t),t.default={src:"https://thyenigmatic.github.io/immihub/_next/static/media/user-using-app.b5576a71.webp",height:6e3,width:4e3,blurDataURL:"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoFAAgAAkA4JZQCsAD0kBm9oAAA/vNe8uwmrvFp8iDcb7mHt6ul/rM0aCpQoAAA",blurWidth:5,blurHeight:8}}},function(e){e.O(0,[464,253,961,744],function(){return e(e.s=9669)}),_N_E=e.O()}]);