(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{5192:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(5893),a=n(63),i=n(7346),o=n(2362),s=n(1883),c=n.n(s),l=function(e){var t=e.className;return(0,r.jsx)("footer",{className:(0,o.Sh)(c().footer,t),children:(0,r.jsxs)(i.x,{size:"s",align:"center",children:[(0,r.jsx)("span",{className:c().date,children:"\xa9 ".concat((new Date).getFullYear()," David Ryan Synnott.")}),(0,r.jsx)(a.r,{secondary:!0,className:c().link,href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})})}},2221:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(1799),a=n(9396),i=n(9534),o=n(5893),s=n(7294),c=n(2362),l=n(361),u=n.n(l),d=function(e){var t=e.children,n=e.level,l=void 0===n?1:n,d=e.as,f=e.align,h=void 0===f?"auto":f,m=e.weight,p=void 0===m?"medium":m,g=e.className,v=(0,i.Z)(e,["children","level","as","align","weight","className"]),y=Math.min(Math.max(l,0),5),_=d||"h".concat(Math.max(y,1));return(0,o.jsx)(s.Fragment,{children:(0,o.jsx)(_,(0,a.Z)((0,r.Z)({className:(0,c.Sh)(u().heading,g),"data-align":h,"data-weight":p,"data-level":y},v),{children:t}))})}},1424:function(e,t,n){"use strict";n.d(t,{E:function(){return y}});var r=n(7568),a=n(1799),i=n(9534),o=n(7582),s=n(5893),c=n(8526),l=n(1879),u=n(8718),d=n(3302),f=n(4529),h=n(7294),m=n(5622),p=n(2362),g=n(2288),v=n.n(g),y=function(e){var t=e.className,n=e.style,r=e.reveal,o=e.delay,c=void 0===o?0:o,l=e.raised,d=e.src,m=e.srcSet,g=e.placeholder,y=(0,i.Z)(e,["className","style","reveal","delay","raised","src","srcSet","placeholder"]),j=(0,h.useState)(!1),w=j[0],S=j[1],N=(0,u.Fg)().themeId,Z=(0,h.useRef)(),b=d||(null===m||void 0===m?void 0:m[0]),k=(0,f.NM)(Z,!x(b)),R=(0,h.useCallback)((function(){S(!0)}),[]);return(0,s.jsx)("div",{className:(0,p.Sh)(v().image,t),"data-visible":k||w,"data-reveal":r,"data-raised":l,"data-theme":N,style:(0,p.Fh)({delay:(0,p.aU)(c)},n),ref:Z,children:(0,s.jsx)(_,(0,a.Z)({delay:c,onLoad:R,loaded:w,inViewport:k,reveal:r,src:b,srcSet:m,placeholder:g},y))})},_=function(e){var t=e.onLoad,n=e.loaded,u=e.inViewport,g=e.srcSet,y=e.placeholder,_=e.delay,j=e.src,w=e.alt,S=e.play,N=void 0===S||S,Z=e.restartOnPause,b=e.reveal,k=e.sizes,R=e.noPauseButton,E=(0,i.Z)(e,["onLoad","loaded","inViewport","srcSet","placeholder","delay","src","alt","play","restartOnPause","reveal","sizes","noPauseButton"]),F=(0,d.J)(),I=(0,h.useState)(!0),L=I[0],P=I[1],z=(0,h.useState)(!F),C=z[0],B=z[1],M=(0,h.useState)(),D=M[0],U=M[1],W=(0,h.useState)(!1),V=W[0],H=W[1],J=(0,h.useRef)(),K=(0,h.useRef)(),O=x(j),X=u,Y=(0,m.A2)(g),A=(0,f.f3)();(0,h.useEffect)((function(){var e=function(){var e=(0,r.Z)((function(){var e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,m.Ro)({srcSet:g,sizes:k})];case 1:return e=t.sent(),U(e),[2]}}))}));return function(){return e.apply(this,arguments)}}();O&&g?e():O&&U(j.src)}),[O,k,j,g]),(0,h.useEffect)((function(){if(K.current&&D){var e=function(){B(!1),K.current.pause()};N||(e(),Z&&(K.current.currentTime=0)),V||(u?u&&!F&&N&&(B(!0),K.current.play()):e())}}),[u,N,F,Z,V,D]);return(0,s.jsxs)("div",{className:v().elementWrapper,"data-reveal":b,"data-visible":u||n,style:(0,p.Fh)({delay:(0,p.aU)(_+1e3)}),children:[O&&A&&(0,s.jsxs)(h.Fragment,{children:[(0,s.jsx)("video",(0,a.Z)({muted:!0,loop:!0,playsInline:!0,className:v().element,"data-loaded":n,autoPlay:!F,role:"img",onLoadStart:t,src:D,"aria-label":w,ref:K},E)),!R&&(0,s.jsxs)(c.z,{className:v().button,onClick:function(e){e.preventDefault(),H(!0),K.current.paused?(B(!0),K.current.play()):(B(!1),K.current.pause())},children:[(0,s.jsx)(l.J,{icon:C?"pause":"play"}),C?"Pause":"Play"]})]}),!O&&(0,s.jsx)("img",(0,a.Z)({className:v().element,"data-loaded":n,onLoad:t,decoding:"async",src:X?j.src:void 0,srcSet:X?Y:void 0,width:j.width,height:j.height,alt:w,sizes:k},E)),L&&(0,s.jsx)("img",{"aria-hidden":!0,className:v().placeholder,"data-loaded":n,style:(0,p.Fh)({delay:(0,p.aU)(_)}),ref:J,src:y.src,width:y.width,height:y.height,onTransitionEnd:function(){return P(!1)},decoding:"async",alt:"",role:"presentation"})]})};function x(e){return"string"===typeof e.src&&e.src.endsWith(".mp4")}},63:function(e,t,n){"use strict";n.d(t,{r:function(){return m}});var r=n(1799),a=n(9396),i=n(9534),o=n(5893),s=n(1664),c=n.n(s),l=n(7294),u=n(2362),d=n(8469),f=n.n(d),h=["txt","png","jpg"];var m=(0,l.forwardRef)((function(e,t){var n=e.href,a=(0,i.Z)(e,["href"]);return function(e){var t=h.includes(null===e||void 0===e?void 0:e.split(".").pop());return(null===e||void 0===e?void 0:e.includes("://"))||"#"===(null===e||void 0===e?void 0:e[0])||t}(n)?(0,o.jsx)(p,(0,r.Z)({href:n,ref:t},a)):(0,o.jsx)(c(),{passHref:!0,href:n,scroll:!1,children:(0,o.jsx)(p,(0,r.Z)({ref:t},a))})})),p=(0,l.forwardRef)((function(e,t){var n=e.rel,s=e.target,c=e.children,l=e.secondary,d=e.className,h=e.href,m=(0,i.Z)(e,["rel","target","children","secondary","className","href"]),p=null===h||void 0===h?void 0:h.includes("://"),g=n||(p?"noreferrer noopener":void 0),v=s||(p?"_blank":void 0);return(0,o.jsx)("a",(0,a.Z)((0,r.Z)({className:(0,u.Sh)(f().link,d),"data-secondary":l,rel:g,href:h,target:v,ref:t},m),{children:c}))}))},5633:function(e,t,n){"use strict";n.d(t,{h:function(){return u}});var r=n(5893),a=n(9008),i=n.n(a),o="https://jamesrobert013.github.io/portfolio2/",s="David Ryan Synnott",c="@hamishMW",l="".concat(o,"/social-image.png"),u=function(e){var t=e.title,n=e.description,a=e.prefix,u=void 0===a?s:a,d=e.ogImage,f=void 0===d?l:d,h=[u,t].filter(Boolean).join(" | ");return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:h},"title"),(0,r.jsx)("meta",{name:"description",content:n},"description"),(0,r.jsx)("meta",{name:"author",content:s}),(0,r.jsx)("meta",{property:"og:image",content:f}),(0,r.jsx)("meta",{property:"og:image:alt",content:"Banner for the site"}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1280"}),(0,r.jsx)("meta",{property:"og:image:height",content:"675"}),(0,r.jsx)("meta",{property:"og:title",content:h}),(0,r.jsx)("meta",{property:"og:site_name",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:o}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:title",content:h}),(0,r.jsx)("meta",{name:"twitter:site",content:c}),(0,r.jsx)("meta",{name:"twitter:creator",content:c}),(0,r.jsx)("meta",{name:"twitter:image",content:f})]})}},6602:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var r=n(1799),a=n(9396),i=n(9534),o=n(5893),s=n(7294),c=n(2362),l=n(4828),u=n.n(l),d=(0,s.forwardRef)((function(e,t){var n=e.as,s=void 0===n?"div":n,l=e.children,d=e.className,f=(0,i.Z)(e,["as","children","className"]);return(0,o.jsx)(s,(0,a.Z)((0,r.Z)({className:(0,c.Sh)(u().section,d),ref:t},f),{children:l}))}))},5622:function(e,t,n){"use strict";n.d(t,{A2:function(){return c},Ro:function(){return d}});var r=n(7568),a=n(828),i=n(7582);function o(e){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)((function(e){var t,n,r;return(0,i.__generator)(this,(function(a){return t=e.src,n=e.srcSet,r=e.sizes,[2,new Promise((function(e,a){var i=c(n);try{if(!t&&!n)throw new Error("No image src or srcSet provided");var o=new Image;t&&(o.src=t),i&&(o.srcset=i),r&&(o.sizes=r);var s=function(){o.removeEventListener("load",s);var t=o.currentSrc;o=null,e(t)};o.addEventListener("load",s)}catch(l){a("Error loading ".concat(i,": ").concat(l))}}))]}))}))).apply(this,arguments)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"string"===typeof e?e:e.map((function(e){return"".concat(e.src," ").concat(e.width,"w")})).join(", ")}function l(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)((function(){var e,t,n=arguments;return(0,i.__generator)(this,(function(a){return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1&&void 0!==n[1]?n[1]:1,[2,new Promise((function(n){var a=document.createElement("canvas"),o=a.getContext("2d");a.width=e,a.height=t,o.fillStyle="rgba(0, 0, 0, 0)",o.fillRect(0,0,e,t),a.toBlob(function(){var e=(0,r.Z)((function(e){var t;return(0,i.__generator)(this,(function(r){if(!e)throw new Error("Video thumbnail failed to load");return t=URL.createObjectURL(e),a.remove(),n(t),[2]}))}));return function(t){return e.apply(this,arguments)}}())}))]}))})),u.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,r.Z)((function(e){var t,n,s,u,d,f;return(0,i.__generator)(this,(function(h){switch(h.label){case 0:return t=e.srcSet,n=e.sizes,s=c(t),[4,Promise.all(s.split(", ").map(function(){var e=(0,r.Z)((function(e){var t,n,r,o;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return t=(0,a.Z)(e.split(" "),2),n=t[0],r=t[1],[4,l(Number(r.replace("w","")))];case 1:return o=i.sent(),[2,{src:n,image:o,width:r}]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 1:return u=h.sent(),d=u.map((function(e){var t=e.image,n=e.width;return"".concat(t," ").concat(n)})).join(", "),[4,o({srcSet:d,sizes:n})];case 2:return f=h.sent(),[2,u.find((function(e){return e.image===f})).src]}}))})),f.apply(this,arguments)}},1883:function(e){e.exports={footer:"Footer_footer__nKPS_",link:"Footer_link__2Y2qR",date:"Footer_date__d0nD9"}},361:function(e){e.exports={heading:"Heading_heading__209rB"}},2288:function(e){e.exports={image:"Image_image__fhfXL",container:"Image_container__9ry6H",elementWrapper:"Image_elementWrapper__dY5KC",placeholder:"Image_placeholder__rZeKX",element:"Image_element__EpM9I",button:"Image_button__S1k_J"}},8469:function(e){e.exports={link:"Link_link__1F_mp"}},4828:function(e){e.exports={section:"Section_section__FuI7l"}}}]);