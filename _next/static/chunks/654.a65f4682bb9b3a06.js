(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{1654:function(e,r,n){"use strict";n.r(r),n.d(r,{Carousel:function(){return R}});var t,a=n(7568),i=n(8616),u=n(1799),o=n(9396),c=n(9534),s=n(9815),l=n(7582),f=n(5893),d=n(7294);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},v.apply(this,arguments)}var m,p=e=>d.createElement("svg",v({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42"},e),t||(t=d.createElement("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})));function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},g.apply(this,arguments)}var h=e=>d.createElement("svg",g({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42"},e),m||(m=d.createElement("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"}))),y=n(3302),x=n(2064),_=n(4529),b=n(9477),w=n(5622),C=n(2362),I=n(3142),F=n(6834),j=n.n(F);function E(e,r,n,t){if(null!==r)return r;var a=n.length;return t>0?(e+1)%a:(e-1+a)%a}var R=function(e){var r=e.width,n=e.height,t=e.images,v=e.placeholder,m=(0,c.Z)(e,["width","height","images","placeholder"]),g=(0,d.useState)(!1),F=g[0],R=g[1],k=(0,d.useState)(0),S=k[0],M=k[1],P=(0,d.useState)(!1),Z=P[0],A=P[1],D=(0,d.useState)(!0),L=D[0],N=D[1],O=(0,d.useState)(),q=O[0],B=O[1],z=(0,d.useState)(),T=z[0],U=z[1],K=(0,d.useRef)(),W=(0,d.useRef)(),J=(0,d.useRef)(),G=(0,d.useRef)(),V=(0,d.useRef)(),X=(0,d.useRef)(),H=(0,d.useRef)(),Q=(0,d.useRef)(!1),Y=(0,d.useRef)(),$=(0,d.useRef)(),ee=(0,d.useRef)(),re=(0,y.J)(),ne=(0,_.NM)(K,!0),te=(0,d.useRef)(),ae=(0,d.useRef)(),ie="Slide ".concat(S+1," of ").concat(t.length,". ").concat(t[S].alt);(0,d.useEffect)((function(){return F&&(document.body.style.cursor="grabbing"),function(){document.body.style.cursor=""}}),[F]),(0,d.useEffect)((function(){var e=[r/-2,r/2,n/2,n/-2,1,1e3];return H.current=new b.CP7({canvas:K.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),X.current=(0,i.Z)(b.iKG,(0,s.Z)(e)),V.current=new b.xsS,H.current.setPixelRatio(2),H.current.setClearColor(1118481,1),H.current.setSize(r,n),H.current.domElement.style.width="100%",H.current.domElement.style.height="auto",V.current.background=new b.Ilk(1118481),X.current.position.z=1,function(){Q.current=!1,(0,I.in)(V.current),(0,I.e8)(H.current)}}),[n,r]),(0,d.useEffect)((function(){var e=!0,i=function(){var i=(0,a.Z)((function(){var i,u,o;return(0,l.__generator)(this,(function(c){switch(c.label){case 0:return i=H.current.capabilities.getMaxAnisotropy(),u=t.map(function(){var e=(0,a.Z)((function(e){var r,n,t;return(0,l.__generator)(this,(function(a){switch(a.label){case 0:return e.srcSet?[4,(0,w.Ro)(e)]:[3,2];case 1:return n=a.sent(),[3,3];case 2:n=e.src.src,a.label=3;case 3:return r=n,[4,I.Et.loadAsync(r)];case 4:return t=a.sent(),[4,H.current.initTexture(t)];case 5:return a.sent(),t.encoding=b.knz,t.minFilter=b.wem,t.magFilter=b.wem,t.anisotropy=i,t.generateMipmaps=!1,[2,t]}}))}));return function(r){return e.apply(this,arguments)}}()),[4,Promise.all(u)];case 1:return o=c.sent(),e?(G.current=new b.jyz({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:o[0]},nextImage:{type:"t",value:o[1]},reduceMotion:{type:"b",value:re}},vertexShader:"varying vec2 vUv;\r\n\r\nvoid main() {\r\n  vUv = uv;\r\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}\r\n",fragmentShader:"varying vec2 vUv;\r\nuniform sampler2D currentImage;\r\nuniform sampler2D nextImage;\r\nuniform float dispFactor;\r\nuniform float direction;\r\nuniform bool reduceMotion;\r\n\r\nvoid main() {\r\n  if (reduceMotion) {\r\n    // Simple crossfade\r\n    vec4 _currentImage = texture2D(currentImage, vUv);\r\n    vec4 _nextImage = texture2D(nextImage, vUv);\r\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\r\n    gl_FragColor = finalTexture;\r\n  } else {\r\n    // Liquid distortion effect\r\n    vec2 uv = vUv;\r\n    vec4 _currentImage;\r\n    vec4 _nextImage;\r\n    float intensity = 0.6;\r\n\r\n    vec4 orig1 = texture2D(currentImage, uv);\r\n    vec4 orig2 = texture2D(nextImage, uv);\r\n\r\n    vec2 distortedPosition = vec2(\r\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\r\n      uv.y + direction * (dispFactor * (orig2 * intensity))\r\n    );\r\n\r\n    vec2 distortedPosition2 = vec2(\r\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\r\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\r\n    );\r\n\r\n    _currentImage = texture2D(currentImage, distortedPosition);\r\n    _nextImage = texture2D(nextImage, distortedPosition2);\r\n\r\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\r\n    gl_FragColor = finalTexture;\r\n  }\r\n}\r\n",transparent:!1,opacity:1}),J.current=new b.BKK(r,n,1),W.current=new b.Kj0(J.current,G.current),W.current.position.set(0,0,0),V.current.add(W.current),A(!0),B(o),requestAnimationFrame((function(){H.current.render(V.current,X.current)})),[2]):[2]}}))}));return function(){return i.apply(this,arguments)}}();return ne&&!Z&&i(),function(){e=!1}}),[n,t,ne,Z,re,r]);var ue=(0,d.useCallback)((function(e){var r=e.index,n=e.direction,t=void 0===n?1:n;if(q){M(r);var a=G.current.uniforms;a.nextImage.value=q[r],a.direction.value=t;1!==a.dispFactor.value&&(Q.current=!0,(0,x.j)(a.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:function(e){a.dispFactor.value=e},onComplete:function(){a.currentImage.value=q[r],a.dispFactor.value=0,Q.current=!1}}))}}),[q]),oe=(0,d.useCallback)((function(e){var r=e.direction,n=e.index,t=void 0===n?null:n,a=(0,c.Z)(e,["direction","index"]);if(Z){if(Q.current)return cancelAnimationFrame(ee.current),void(ee.current=requestAnimationFrame((function(){return oe((0,u.Z)({direction:r,index:t},a))})));var i=E(S,t,q,r);ue((0,u.Z)({index:i,direction:r},a))}}),[ue,S,Z,q]),ce=(0,d.useCallback)((function(e){e!==S&&oe({direction:e>S?1:-1,index:e})}),[S,oe]);(0,d.useEffect)((function(){var e=function(){var e=K.current.getBoundingClientRect();U(e)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),(0,d.useEffect)((function(){var e,r=function(){e=requestAnimationFrame(r),Q.current&&H.current.render(V.current,X.current)};return e=requestAnimationFrame(r),function(){cancelAnimationFrame(e)}}),[]),(0,d.useEffect)((function(){if(v){var e=function(){N(!1)},r=te.current;return r.addEventListener("transitionend",e),function(){r&&r.removeEventListener("transitionend",e)}}}),[v]);var se=(0,d.useCallback)((function(e){if(!Q.current&&G.current&&q){$.current=e;var r=Math.abs(e),n=T.width;Y.current=e>0?-1:1;var a=1-(r-n)/n*-1,i=E(S,null,t,Y.current),u=G.current.uniforms,o=Math.min(Math.max(a,0),1);u.currentImage.value=q[S],u.nextImage.value=q[i],u.direction.value=Y.current,u.dispFactor.value=o,requestAnimationFrame((function(){H.current.render(V.current,X.current)}))}}),[T,S,t,q]),le=(0,d.useCallback)((function(){if(G.current){var e=G.current.uniforms,r=1e3*(1-e.dispFactor.value),n=Math.abs($.current),t=.2*T.width;$.current=0,Q.current||0!==n&&n&&(n>t?oe({duration:r,direction:Y.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,oe({direction:-1*Y.current,index:S})))}}),[T,S,oe]),fe=(0,d.useCallback)((function(e){se(e.clientX-ae.current)}),[se]),de=(0,d.useCallback)((function(){R(!1),le(),document.removeEventListener("pointerup",de),document.removeEventListener("pointermove",fe)}),[fe,le]),ve=(0,d.useCallback)((function(e){ae.current=e.clientX,R(!0),document.addEventListener("pointermove",fe),document.addEventListener("pointerup",de)}),[fe,de]);return(0,f.jsxs)("div",(0,o.Z)((0,u.Z)({className:j().carousel,onKeyDown:function(e){switch(e.key){case"ArrowRight":oe({direction:1});break;case"ArrowLeft":oe({direction:-1})}}},m),{children:[(0,f.jsxs)("div",{className:j().content,children:[(0,f.jsxs)("div",{className:j().imageWrapper,"data-dragging":F,onPointerDown:ve,style:(0,C.Fh)({aspectRatio:"".concat(r," / ").concat(n)}),children:[(0,f.jsx)("div",{"aria-atomic":!0,className:j().canvasWrapper,"aria-live":"polite","aria-label":ie,role:"img",children:(0,f.jsx)("canvas",{"aria-hidden":!0,className:j().canvas,ref:K})}),L&&v&&(0,f.jsx)("img",{"aria-hidden":!0,className:j().placeholder,"data-loaded":Z&&!!q,src:v.src,ref:te,alt:"",role:"presentation"})]}),(0,f.jsx)("button",{className:j().button,"data-prev":!0,"aria-label":"Previous slide",onClick:function(){return oe({direction:-1})},children:(0,f.jsx)(p,{})}),(0,f.jsx)("button",{className:j().button,"data-next":!0,"aria-label":"Next slide",onClick:function(){return oe({direction:1})},children:(0,f.jsx)(h,{})})]}),(0,f.jsx)("div",{className:j().nav,children:t.map((function(e,r){return(0,f.jsx)("button",{className:j().navButton,onClick:function(){return ce(r)},"aria-label":"Jump to slide ".concat(r+1),"aria-pressed":r===S},e.alt)}))})]}))}},3142:function(e,r,n){"use strict";n.d(r,{Et:function(){return s},Ji:function(){return v},Zf:function(){return c},e8:function(){return d},in:function(){return l},x2:function(){return m}});var t=n(9477),a=n(4976),i=n(1265);t.CtF.enabled=!0;var u=new a._,o=new i.E;u.setDecoderPath("/draco/"),o.setDRACOLoader(u);var c=o,s=new t.dpR,l=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else{var r=!0,n=!1,t=void 0;try{for(var a,i=e.material[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=a.value;f(u)}}catch(o){n=!0,t=o}finally{try{r||null==i.return||i.return()}finally{if(n)throw t}}}}))},f=function(e){e.dispose();var r=!0,n=!1,t=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u,o,c,s=e[a.value];if(s&&"object"===typeof s&&"minFilter"in s)s.dispose(),null===(u=s.source)||void 0===u||null===(o=u.data)||void 0===o||null===(c=o.close)||void 0===c||c.call(o)}}catch(l){n=!0,t=l}finally{try{r||null==i.return||i.return()}finally{if(n)throw t}}},d=function(e){e.dispose(),e=null},v=function(e){var r=!0,n=!1,t=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=a.value;u.parent.remove(u)}}catch(o){n=!0,t=o}finally{try{r||null==i.return||i.return()}finally{if(n)throw t}}},m=function(e,r){var n;return r.traverse((function(r){r.name===e&&(n=r)})),n}},6834:function(e){e.exports={carousel:"Carousel_carousel__Sspl_",content:"Carousel_content__gQHGr",imageWrapper:"Carousel_imageWrapper__qTCVg",canvasWrapper:"Carousel_canvasWrapper__fJ9wa",canvas:"Carousel_canvas__M9q1k",placeholder:"Carousel_placeholder__9B_u0",button:"Carousel_button___Co_K",nav:"Carousel_nav__aYsww",navButton:"Carousel_navButton__Fq3pI"}},8616:function(e,r,n){"use strict";function t(e,r){return t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},t(e,r)}function a(e,r){return t(e,r)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,r,n){return u=i()?Reflect.construct:function(e,r,n){var t=[null];t.push.apply(t,r);var i=new(Function.bind.apply(e,t));return n&&a(i,n.prototype),i},u.apply(null,arguments)}function o(e,r,n){return u.apply(null,arguments)}n.d(r,{Z:function(){return o}})},9815:function(e,r,n){"use strict";n.d(r,{Z:function(){return u}});var t=n(943);var a=n(3375);var i=n(1566);function u(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,a.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2064:function(e,r,n){"use strict";n.d(r,{j:function(){return u}});var t=n(5524),a=n(3234),i=n(406);function u(e,r,n={}){const u=(0,i.i)(e)?e:(0,a.B)(e);return u.start((0,t.Z)("",u,r,n)),{stop:()=>u.stop(),isAnimating:()=>u.isAnimating()}}}}]);