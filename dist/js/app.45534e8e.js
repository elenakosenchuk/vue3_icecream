(function(t){function e(e){for(var c,a,r=e[0],s=e[1],l=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);b&&b(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(c=!1)}c&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var c={},a={app:0},o={app:0},i=[];function r(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-25489640":"dd498afc","chunk-2d2261a6":"5c9934ef","chunk-31f9e160":"4cd2a307","chunk-dc690616":"fe678f81","chunk-2d0c9189":"c81458cc","chunk-2d0cf391":"020c75ea","chunk-2d0da8f3":"c8c3e7e8","chunk-2d2248b6":"d84473c1","chunk-2d22523a":"4b710d99"}[t]+".js"}function s(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-25489640":1,"chunk-31f9e160":1,"chunk-dc690616":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var c="css/"+({}[t]||t)+"."+{"chunk-25489640":"dc4779c8","chunk-2d2261a6":"31d6cfe0","chunk-31f9e160":"38aede30","chunk-dc690616":"c5b04802","chunk-2d0c9189":"31d6cfe0","chunk-2d0cf391":"31d6cfe0","chunk-2d0da8f3":"31d6cfe0","chunk-2d2248b6":"31d6cfe0","chunk-2d22523a":"31d6cfe0"}[t]+".css",o=s.p+c,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var l=i[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===c||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===c||u===o)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var c=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=c,delete a[t],b.parentNode.removeChild(b),n(i)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){a[t]=0})));var c=o[t];if(0!==c)if(c)e.push(c[2]);else{var i=new Promise((function(e,n){c=o[t]=[e,n]}));e.push(c[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(b);var n=o[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,n[1](d)}o[t]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=c,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)s.d(n,c,function(e){return t[e]}.bind(null,c));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue3_icecream/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var b=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08e8":function(t,e,n){},"11de":function(t,e,n){"use strict";var c=n("7a23"),a={class:"modal-mask"},o={class:"modal-wrapper"},i={class:"modal-container"},r={class:"modal-header"},s=Object(c["j"])(" default header "),l={class:"modal-body"},u=Object(c["j"])(" default body "),d={class:"modal-footer"},b=Object(c["j"])(" default footer ");function p(t,e,n,p,h,m){return Object(c["w"])(),Object(c["g"])("div",a,[Object(c["h"])("div",o,[Object(c["h"])("div",i,[Object(c["h"])("div",r,[Object(c["E"])(t.$slots,"header",{},(function(){return[s]}),!0)]),Object(c["h"])("div",l,[Object(c["E"])(t.$slots,"body",{},(function(){return[u]}),!0)]),Object(c["E"])(t.$slots,"footer",{},(function(){return[Object(c["h"])("div",d,[b,Object(c["h"])("button",{class:"btn modal-default-button",onClick:e[0]||(e[0]=function(e){return t.$emit("close")})}," OK ")])]}),!0)])])])}var h={name:"Modal"},m=(n("92f7"),n("6b0d")),f=n.n(m);const O=f()(h,[["render",p],["__scopeId","data-v-fb19193e"]]);e["a"]=O},"1b02":function(t,e,n){},"20d4":function(t,e,n){},"309d":function(t,e,n){"use strict";n("20d4")},3695:function(t,e,n){"use strict";n("08e8")},"433f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=Object(c["h"])("main",null,null,-1);function o(t,e,n,o,i,r){var s=Object(c["F"])("Header"),l=Object(c["F"])("router-view"),u=Object(c["F"])("Footer");return Object(c["w"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(s),a,Object(c["k"])(l),Object(c["k"])(u)],64)}var i=function(t){return Object(c["z"])("data-v-3c3a32fa"),t=t(),Object(c["x"])(),t},r={id:"mobile_menu_wrap"},s={class:"sidemenu_top"},l={class:"mobile_logo"},u=i((function(){return Object(c["h"])("img",{src:"assets/images/logo.png",alt:"Site Logo"},null,-1)})),d=i((function(){return Object(c["h"])("span",{class:"hamburger-box"},[Object(c["h"])("span",{class:"hamburger-inner"})],-1)})),b=[d],p={class:"sidemenu"},h=Object(c["j"])("Home"),m=Object(c["j"])("Product"),f=Object(c["j"])("Articles"),O=Object(c["j"])("Testimonials"),j=Object(c["j"])("Contact Us"),g=i((function(){return Object(c["h"])("div",{id:"page_overlay"},null,-1)})),v={class:"container header-container"},_={id:"header_logo"},k=i((function(){return Object(c["h"])("img",{src:"assets/images/logo.png",alt:"Site Logo"},null,-1)})),y={class:"header_navigation"},w={id:"main_menu"},F=Object(c["j"])("Home"),T=Object(c["j"])("Product"),S=Object(c["j"])("Articles"),A=Object(c["j"])("Testimonials"),P=Object(c["j"])("Contact Us"),M={class:"btn_wrapper"},C=i((function(){return Object(c["h"])("div",{id:"hamburger_menu"},[Object(c["h"])("button",{class:"hamburger hamburger--slider",type:"button"},[Object(c["h"])("span",{class:"hamburger-box"},[Object(c["h"])("span",{class:"hamburger-inner"})])])],-1)})),x=Object(c["j"])(" ");function E(t,e,n,a,o,i){var d=Object(c["F"])("router-link"),E=Object(c["F"])("CallbackForm"),B=Object(c["F"])("modal");return Object(c["w"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",r,[Object(c["h"])("div",s,[Object(c["h"])("div",l,[Object(c["k"])(d,{to:"/",class:"logo"},{default:Object(c["O"])((function(){return[u]})),_:1})]),Object(c["h"])("button",{onClick:e[0]||(e[0]=function(e){return t.toggle=!t.toggle}),class:"hamburger hamburger--slider",type:"button"},b)]),Object(c["h"])("nav",p,[Object(c["h"])("ul",null,[Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/"},{default:Object(c["O"])((function(){return[h]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/products"},{default:Object(c["O"])((function(){return[m]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/articles"},{default:Object(c["O"])((function(){return[f]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/testimonials"},{default:Object(c["O"])((function(){return[O]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/contacts"},{default:Object(c["O"])((function(){return[j]})),_:1})])])])]),g,Object(c["h"])("header",{id:"header_menu",class:Object(c["q"])(o.isFixed?"fixed":"")},[Object(c["h"])("div",v,[Object(c["h"])("div",_,[Object(c["k"])(d,{to:"/",class:"logo"},{default:Object(c["O"])((function(){return[k]})),_:1})]),Object(c["h"])("div",y,[Object(c["h"])("nav",w,[Object(c["h"])("ul",null,[Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/"},{default:Object(c["O"])((function(){return[F]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/products"},{default:Object(c["O"])((function(){return[T]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/articles"},{default:Object(c["O"])((function(){return[S]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/testimonials"},{default:Object(c["O"])((function(){return[A]})),_:1})]),Object(c["h"])("li",null,[Object(c["k"])(d,{to:"/contacts"},{default:Object(c["O"])((function(){return[P]})),_:1})])])]),Object(c["h"])("div",M,[Object(c["h"])("button",{onClick:e[1]||(e[1]=Object(c["Q"])((function(t){return i.callbackFormDisplay()}),["prevent"])),class:"btn callback_btn",type:"submit"},"Call Back")])]),C]),Object(c["k"])(c["b"],{name:"modal"},{default:Object(c["O"])((function(){return[o.showModal?(Object(c["w"])(),Object(c["e"])(B,{key:0,onClose:e[3]||(e[3]=function(t){return o.showModal=!1})},{header:Object(c["O"])((function(){return[Object(c["h"])("button",{onClick:e[2]||(e[2]=function(t){return o.showModal=!1}),class:"close_btn"},"✖"),Object(c["h"])("h3",null,Object(c["I"])(o.modalTitle),1)]})),body:Object(c["O"])((function(){return[Object(c["k"])(E,{hideme:i.hideModal},null,8,["hideme"])]})),footer:Object(c["O"])((function(){return[x]})),_:1})):Object(c["f"])("",!0)]})),_:1})],2)],64)}var B=n("11de"),I=(n("b0c0"),function(t){return Object(c["z"])("data-v-f8f8db5e"),t=t(),Object(c["x"])(),t}),D=I((function(){return Object(c["h"])("div",{class:"form_subtext"},"Office hours are 9am to 6pm",-1)})),L=I((function(){return Object(c["h"])("button",{class:"btn",type:"submit"},"Send",-1)}));function U(t,e,n,a,o,i){var r=Object(c["G"])("maska");return Object(c["w"])(),Object(c["g"])("form",{class:"callback_form",onSubmit:e[4]||(e[4]=Object(c["Q"])((function(){return i.validateAndSend&&i.validateAndSend.apply(i,arguments)}),["prevent"]))},[Object(c["P"])(Object(c["h"])("input",{class:"input_wrapper",type:"text",placeholder:"Your name","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.name=t})},null,512),[[c["K"],o.name,void 0,{trim:!0}]]),Object(c["P"])(Object(c["h"])("input",{class:"input_wrapper",type:"text",placeholder:"Your phone","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.phone=t}),onBlur:e[2]||(e[2]=function(){return i.checkPhoneLength&&i.checkPhoneLength.apply(i,arguments)})},null,544),[[r,"+38 (0##) ###-##-##"],[c["K"],o.phone]]),Object(c["P"])(Object(c["h"])("input",{class:"input_wrapper",type:"time",min:"09:00",max:"18:00","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.time=t})},null,512),[[c["K"],o.time,void 0,{trim:!0}]]),D,L],32)}n("a15b"),n("99af"),n("a4d3"),n("e01a");var N=n("795b"),$=n("bc3a"),H=n.n($),K=n("3d20"),q=n.n(K),Y={name:"CallbackForm",directives:{maska:N["a"]},props:{hideme:{type:Function}},data:function(){return{name:"",phone:"",time:"",BOT_TOKEN:"5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4",CHAT_ID:"-1001765759474"}},methods:{checkPhoneLength:function(){19!==this.phone.length&&this.phone},validateForm:function(){var t=!0,e=[];return""===this.name&&(t=!1,e.push("Enter your name")),""===this.phone&&(t=!1,e.push("Enter your phone")),""===this.time&&(t=!1,e.push("Enter time for callback")),t||this.$toast.error(e.join("<br/>")),t},validateAndSend:function(){var t=this;if(this.validateForm()){var e=encodeURI("Name: ".concat(this.name,"\nPhone: ").concat(this.phone,"\nTime: ").concat(this.time));H.a.get("https://api.telegram.org/bot".concat(this.BOT_TOKEN,"/sendMessage?chat_id=").concat(this.CHAT_ID,"&text=").concat(e,"&parse_mode=html")).then((function(e){e.data.ok?(q.a.fire({position:"center",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),t.name="",t.phone="",t.time="",t.hideme()):t.$toast.error(e.data.description)})).catch((function(e){t.$toast.error(e)}))}}}},J=(n("e4ae"),n("6b0d")),V=n.n(J);const z=V()(Y,[["render",U],["__scopeId","data-v-f8f8db5e"]]);var R=z,G={name:"Header",components:{Modal:B["a"],CallbackForm:R},data:function(){return{showModal:!1,isFixed:!1,modalTitle:""}},methods:{hideModal:function(){this.showModal=!1},callbackFormDisplay:function(){this.showModal=!0,this.modalTitle="Order callback"}},mounted:function(){var t=this;window.document.onscroll=function(){t.isFixed=window.scrollY>100}}};n("3695");const Q=V()(G,[["render",E],["__scopeId","data-v-3c3a32fa"]]);var Z=Q,W={id:"footer"},X={class:"container footer_container"},tt=Object(c["i"])('<div class="footer_logo_block"><div id="footer_logo"><a href="#main_page"><img src="assets/images/logo.png" alt="Site Logo"></a></div><div class="footer_description"><p>Some food has looked so awful that it&#39;s looked like something that the dog&#39;s brought home. </p></div><div class="footer_network"><p class="network_title">Fllow Us</p><ul class="network_list"><li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img src="assets/images/facebook.png" alt="Facebook logo"></a></li><li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img src="assets/images/twitter.png" alt="Twitter logo"></a></li><li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img src="assets/images/instagram.png" alt="Instagram logo"></a></li><li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img src="assets/images/linkedin.png" alt="Linkedin logo"></a></li></ul></div></div><div class="footer_navigation_block"><nav id="footer_navigation"><ul><li><a href="#main_page">Home</a></li><li><a href="#product">Product</a></li><li><a href="#articles">Articles</a></li><li><a href="#testimonials">Testimonials</a></li><li><a href="#contact">Contact Us</a></li></ul></nav></div>',2),et={class:"footer_subscribe_block"},nt=Object(c["h"])("h5",null,"Newsletter",-1),ct=Object(c["i"])('<ul class="pay_list"><li class="pay_list_item small"><img src="assets/images/pay-pal.png" alt="Paypal logo"></li><li class="pay_list_item middle"><img src="assets/images/master-card.png" alt="Mastercard logo"></li><li class="pay_list_item big"><img src="assets/images/visa.png" alt="Visa logo"></li></ul>',1);function at(t,e,n,a,o,i){var r=Object(c["F"])("SubscribeForm");return Object(c["w"])(),Object(c["g"])("footer",W,[Object(c["h"])("div",X,[tt,Object(c["h"])("div",et,[nt,Object(c["k"])(r),ct])])])}var ot={class:"input_wrapper"},it=Object(c["h"])("div",{class:"btn_wrapper"},[Object(c["h"])("button",{class:"btn subscribe_btn",type:"submit"},"Subscribe")],-1);function rt(t,e,n,a,o,i){return Object(c["w"])(),Object(c["g"])("form",{class:"subscribe_form",action:"#",method:"post",onSubmit:e[1]||(e[1]=Object(c["Q"])((function(){return i.validateAndSend&&i.validateAndSend.apply(i,arguments)}),["prevent"]))},[Object(c["h"])("div",ot,[Object(c["P"])(Object(c["h"])("input",{class:"subscribe_form_textarea",type:"email",name:"email",placeholder:"Your Email","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.email=t})},null,512),[[c["K"],o.email,void 0,{trim:!0}]])]),it],32)}n("ac1f"),n("466d");var st={name:"SubscribeForm",data:function(){return{email:"",BOT_TOKEN:"5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4",CHAT_ID:"-1001765759474"}},methods:{validateEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.match(e)},validateForm:function(){var t=!0;return""===this.email?(t=!1,this.$toast.error("Enter your email")):this.validateEmail(this.email)||(t=!1,this.$toast.error("Enter valid email address")),t},validateAndSend:function(){var t=this;if(this.validateForm()){var e=encodeURI("Email: ".concat(this.email));H.a.get("https://api.telegram.org/bot".concat(this.BOT_TOKEN,"/sendMessage?chat_id=").concat(this.CHAT_ID,"&text=").concat(e,"&parse_mode=html")).then((function(e){e.data.ok?(q.a.fire({position:"center",icon:"success",title:"You are succefully subscribe",showConfirmButton:!1,timer:1500}),t.email=""):t.$toast.error(e.data.description)})).catch((function(e){t.$toast.error(e)}))}}}};const lt=V()(st,[["render",rt]]);var ut=lt,dt={name:"Footer",components:{SubscribeForm:ut}};const bt=V()(dt,[["render",at]]);var pt=bt,ht={components:{Header:Z,Footer:pt}};const mt=V()(ht,[["render",o]]);var ft=mt,Ot=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),jt={class:"home"};function gt(t,e,n,a,o,i){var r=Object(c["F"])("MainPage"),s=Object(c["F"])("Delivery"),l=Object(c["F"])("Details"),u=Object(c["F"])("TopProducts"),d=Object(c["F"])("AppBlock");return Object(c["w"])(),Object(c["g"])("div",jt,[Object(c["k"])(r),Object(c["k"])(s),Object(c["k"])(l),Object(c["k"])(u),Object(c["k"])(d)])}var vt={id:"main_page"},_t=Object(c["i"])('<div class="container"><div class="main_inner"><div class="main_content"><p class="subtext">Sweet fun, full of milk.</p><h2 class="main_title">Feel inside cold with our delicious <span class="main_title_item">ice-cream.</span></h2><p class="main_text">Some food has looked so awful that it&#39;s looked like something that the dog&#39;s brought home, yet after one mouthful I&#39;ve been left eating my thoughts, my words. </p></div><div class="main_picture"><img src="assets/images/header-icecream-2.png" alt="Big ice-cream picture"></div></div></div>',1),kt=[_t];function yt(t,e,n,a,o,i){return Object(c["w"])(),Object(c["g"])("section",vt,kt)}var wt={name:"MainPage"};const Ft=V()(wt,[["render",yt]]);var Tt=Ft,St={class:"delivery"},At=Object(c["i"])('<div class="container"><ul class="delivery_list"><li class="delivery_list_item"><a href="#"><svg><use xlink:href="assets/images/icons/sprite.svg#car"></use></svg><h5>Free Shipping</h5><p>Last Chance! Free shipping on all orders ends today.</p></a></li><li class="delivery_list_item"><a href="#"><img class="delivery_icon icecup" src="assets/images/icecup.png" alt="Ice cream icon"><h5>Quick Packaging</h5><p>Last Chance! Free shipping on all orders ends today.</p></a></li><li class="delivery_list_item"><a href="#"><img class="delivery_icon" src="assets/images/cash-back.png" alt="Cash-back icon"><h5>100% Money Back</h5><p>Last Chance! Free shipping on all orders ends today.</p></a></li><li class="delivery_list_item"><a href="#"><svg><use xlink:href="assets/images/icons/sprite.svg#fast-delivery"></use></svg><h5>Fast Delivery</h5><p>Last Chance! Free shipping on all orders ends today.</p></a></li></ul></div>',1),Pt=[At];function Mt(t,e,n,a,o,i){return Object(c["w"])(),Object(c["g"])("div",St,Pt)}var Ct={name:"Delivery"};const xt=V()(Ct,[["render",Mt]]);var Et=xt,Bt={id:"details"},It=Object(c["i"])('<div class="container"><div class="details_inner"><div class="details_content"><h3 class="details_title">Brown Sugar Oatmea</h3><p class="details_text">Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous. </p></div><div class="details_picture"><img src="assets/images/pink-icecream2.png" alt="Tasty ice-cream picture"></div></div></div>',1),Dt=[It];function Lt(t,e,n,a,o,i){return Object(c["w"])(),Object(c["g"])("section",Bt,Dt)}var Ut={name:"Details"};const Nt=V()(Ut,[["render",Lt]]);var $t=Nt,Ht={id:"top_products"},Kt={class:"container"},qt=Object(c["h"])("div",{class:"top_title"},[Object(c["h"])("h3",null,"Top Products")],-1),Yt={class:"slider_wrap"},Jt={id:"product_slider"},Vt={class:"product_card_title"},zt=Object(c["j"])(" ");function Rt(t,e,n,a,o,i){var r=Object(c["F"])("OneTopProduct"),s=Object(c["F"])("slide"),l=Object(c["F"])("navigation"),u=Object(c["F"])("pagination"),d=Object(c["F"])("carousel"),b=Object(c["F"])("BuyNow"),p=Object(c["F"])("modal");return Object(c["w"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("section",Ht,[Object(c["h"])("div",Kt,[qt,Object(c["h"])("div",Yt,[Object(c["h"])("div",Jt,[Object(c["k"])(d,{settings:o.sliderSettings,breakpoints:o.breakpoints},{addons:Object(c["O"])((function(){return[Object(c["k"])(l),Object(c["k"])(u)]})),default:Object(c["O"])((function(){return[(Object(c["w"])(!0),Object(c["g"])(c["a"],null,Object(c["D"])(o.topProdList,(function(t){return Object(c["w"])(),Object(c["e"])(s,{key:t.id},{default:Object(c["O"])((function(){return[Object(c["k"])(r,{onGetproduct:i.openBuyModal,topproduct:t},null,8,["onGetproduct","topproduct"])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"])])])])]),Object(c["k"])(c["b"],{name:"modal"},{default:Object(c["O"])((function(){return[o.showModal?(Object(c["w"])(),Object(c["e"])(p,{key:0,onClose:e[1]||(e[1]=function(t){return o.showModal=!1})},{header:Object(c["O"])((function(){return[Object(c["h"])("h4",Vt,Object(c["I"])(o.product.name),1),Object(c["h"])("button",{class:"close_btn",onClick:e[0]||(e[0]=function(t){return o.showModal=!1})},"✖")]})),body:Object(c["O"])((function(){return[Object(c["k"])(b,{hideme:i.hideModal,product:o.product},null,8,["hideme","product"])]})),footer:Object(c["O"])((function(){return[zt]})),_:1})):Object(c["f"])("",!0)]})),_:1})],64)}var Gt={class:"product_card"},Qt={class:"product_pic"},Zt=["src"],Wt={class:"product_card_content"},Xt={class:"product_card_title"},te={class:"product_card_text"},ee={class:"product_card_prise"},ne={class:"discount_card_price"},ce={class:"main_card_price"},ae={class:"btn_wrapper"};function oe(t,e,n,a,o,i){return Object(c["w"])(),Object(c["g"])("div",Gt,[Object(c["h"])("div",Qt,[Object(c["h"])("img",{class:"top_prod_pic",src:"assets/images/".concat(n.topproduct.img),alt:"Tasty ice-cream picture"},null,8,Zt)]),Object(c["h"])("div",Wt,[Object(c["h"])("h4",Xt,Object(c["I"])(n.topproduct.name),1),Object(c["h"])("p",te,Object(c["I"])(n.topproduct.content),1),Object(c["h"])("div",ee,[Object(c["h"])("span",ne,"$"+Object(c["I"])(n.topproduct.discount),1),Object(c["h"])("span",ce,"$"+Object(c["I"])(n.topproduct.price),1)]),Object(c["h"])("div",ae,[Object(c["h"])("button",{onClick:e[0]||(e[0]=function(t){return i.clickBuy(n.topproduct)}),class:"btn buy_btn",type:"button"},"Buy Now")])])])}var ie={name:"OneTopProduct",props:["topproduct"],data:function(){return{showModal:!1,modalTitle:""}},methods:{clickBuy:function(t){this.$emit("getproduct",t)},hideModal:function(){this.showModal=!1},callbackFormDisplay:function(){this.showModal=!0,this.modalTitle="Buy now form"}}};n("309d");const re=V()(ie,[["render",oe]]);var se=re,le=(n("4001"),n("0b81")),ue=n("f183"),de={name:"TopProducts",components:{OneTopProduct:se,Carousel:le["a"],Slide:le["d"],Pagination:le["c"],Navigation:le["b"],Modal:B["a"],BuyNow:ue["a"]},methods:{hideModal:function(){this.showModal=!1},openBuyModal:function(t){this.product=t,this.showModal=!0}},data:function(){return{showModal:!1,product:{},topProdList:[],sliderSettings:{itemsToShow:3,itemsToScroll:1,wrapAround:!0,snapAlign:"start"},breakpoints:{300:{itemsToShow:1},560:{itemsToShow:2},780:{itemsToShow:2},1024:{itemsToShow:3}}}},created:function(){var t=this;H.a.get("data/top_products.json").then((function(e){t.topProdList=e.data,window.dispatchEvent(new Event("resize"))}))}};n("7982");const be=V()(de,[["render",Rt]]);var pe=be,he={id:"app_block"},me=Object(c["i"])('<div class="container"><div class="app_block_wrapper"><div class="app_block_picture"><img src="assets/images/app-pic.png" alt="App icecream picture"></div><div class="app_block_content"><h4 class="app_block_title">Simple Way To Order Your Food</h4><p class="app_block_text">Some food has looked so awful that it&#39;s looked like something that the dog&#39;s brought home, yet after one mouthful I&#39;ve been left eating my thoughts.</p><ul class="app_list"><li class="app_list_item"><svg><use xlink:href="assets/images/icons/sprite.svg#select"></use></svg><p>Select Your Food</p></li><li class="app_list_item"><svg><use xlink:href="assets/images/icons/sprite.svg#cart"></use></svg><p>Add To Cart</p></li><li class="app_list_item"><svg><use xlink:href="assets/images/icons/sprite.svg#order"></use></svg><p>Order Your Food</p></li></ul><div class="apps_logo"><a href="https://play.google.com" target="_blank" rel="nofollow"><img src="assets/images/google-play-logo.png" alt="Google play logo"></a><a href="https://www.apple.com/store" target="_blank" rel="nofollow"><img src="assets/images/app-store-logo.png" alt="App store logo"></a></div></div></div></div>',1),fe=[me];function Oe(t,e,n,a,o,i){return Object(c["w"])(),Object(c["g"])("section",he,fe)}var je={name:"AppBlock"};const ge=V()(je,[["render",Oe]]);var ve=ge,_e={name:"Home",components:{MainPage:Tt,Delivery:Et,Details:$t,TopProducts:pe,AppBlock:ve}};const ke=V()(_e,[["render",gt]]);var ye=ke,we=[{path:"/",name:"Home",component:ye},{path:"/products",name:"Products",component:function(){return n.e("chunk-2d2261a6").then(n.bind(null,"e6dc"))}},{path:"/articles",name:"Articles",component:function(){return n.e("chunk-25489640").then(n.bind(null,"291b"))}},{path:"/testimonials",name:"Testimonials",component:function(){return n.e("chunk-dc690616").then(n.bind(null,"66d9"))}},{path:"/contacts",name:"Contact Us",component:function(){return n.e("chunk-31f9e160").then(n.bind(null,"b8fa"))}}],Fe=Object(Ot["a"])({base:"/vue3_icecream/",history:Object(Ot["b"])(),routes:we}),Te=Fe,Se=n("af56"),Ae=n("f9d5"),Pe=n.n(Ae),Me=(n("4413"),n("2058"));Object(c["d"])(ft).use(Te).use(Se["a"],{position:"top"}).use(Pe.a).use(Me["a"]).mount("#app")},"6a23":function(t,e,n){},7982:function(t,e,n){"use strict";n("6a23")},"7f30":function(t,e,n){"use strict";n("433f")},"8a16":function(t,e,n){},"92f7":function(t,e,n){"use strict";n("8a16")},e4ae:function(t,e,n){"use strict";n("1b02")},f183:function(t,e,n){"use strict";n("b0c0");var c=n("7a23"),a=function(t){return Object(c["z"])("data-v-9f9bcfd4"),t=t(),Object(c["x"])(),t},o={class:"content_wrapper"},i={class:"form_product"},r={class:"form_picture"},s=["src","alt"],l={class:"form_btn_group"},u={id:"prise"},d={class:"form_content"},b=a((function(){return Object(c["h"])("button",{class:"btn btn_buy",type:"submit"},"Buy",-1)}));function p(t,e,n,a,p,h){var m=Object(c["G"])("maska");return Object(c["w"])(),Object(c["g"])("form",{class:"callback_form",onSubmit:e[6]||(e[6]=Object(c["Q"])((function(){return h.validateAndSend&&h.validateAndSend.apply(h,arguments)}),["prevent"]))},[Object(c["h"])("div",o,[Object(c["h"])("div",i,[Object(c["h"])("div",r,[Object(c["h"])("img",{class:"buy_pic",src:"assets/images/".concat(n.product.img),alt:n.product.name},null,8,s)]),Object(c["h"])("div",l,[Object(c["h"])("button",{onClick:e[0]||(e[0]=function(){return h.decrease&&h.decrease.apply(h,arguments)}),class:"mini_btm minus",type:"button"},"−"),Object(c["P"])(Object(c["h"])("input",{id:"qty",class:"input_wrapper",type:"number",placeholder:"1",min:"1",readonly:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return p.quantity=t})},null,512),[[c["K"],p.quantity,void 0,{trim:!0}]]),Object(c["h"])("button",{onClick:e[2]||(e[2]=function(){return h.increase&&h.increase.apply(h,arguments)}),class:"mini_btm plus",type:"button"},"+"),Object(c["h"])("div",u,"$"+Object(c["I"])(p.summ),1)])]),Object(c["h"])("div",d,[Object(c["P"])(Object(c["h"])("input",{class:"input_wrapper",type:"text",placeholder:"Your name","onUpdate:modelValue":e[3]||(e[3]=function(t){return p.name=t})},null,512),[[c["K"],p.name,void 0,{trim:!0}]]),Object(c["P"])(Object(c["h"])("input",{class:"input_wrapper",type:"text",placeholder:"Your phone","onUpdate:modelValue":e[4]||(e[4]=function(t){return p.phone=t}),onBlur:e[5]||(e[5]=function(){return t.checkPhoneLength&&t.checkPhoneLength.apply(t,arguments)})},null,544),[[m,"+38 (0##) ###-##-##"],[c["K"],p.phone]])]),b])],32)}n("b680"),n("a15b"),n("99af"),n("a4d3"),n("e01a");var h=n("bc3a"),m=n.n(h),f=n("3d20"),O=n.n(f),j=n("795b"),g={name:"BuyNow",directives:{maska:j["a"]},props:{hideme:{type:Function},product:Object},data:function(){return{quantity:1,name:"",phone:"",summ:this.product.discount,BOT_TOKEN:"5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4",CHAT_ID:"-1001765759474"}},methods:{decrease:function(){this.quantity>1&&(this.quantity=this.quantity-1,this.countSumm())},increase:function(){this.quantity++,this.countSumm()},countSumm:function(){this.summ=(this.quantity*this.product.discount).toFixed(2)},validateForm:function(){var t=!0,e=[];return""===this.name&&(t=!1,e.push("Enter your name")),""===this.phone&&(t=!1,e.push("Enter your phone")),t||this.$toast.error(e.join("<br/>")),t},validateAndSend:function(){var t=this;if(this.validateForm()){var e=encodeURI("Buy product ".concat(this.product.name,"\nName: ").concat(this.name,"\nPhone: ").concat(this.phone));m.a.get("https://api.telegram.org/bot".concat(this.BOT_TOKEN,"/sendMessage?chat_id=").concat(this.CHAT_ID,"&text=").concat(e,"&parse_mode=html")).then((function(e){e.data.ok?(O.a.fire({position:"center",icon:"success",title:"Your order has successfully done",showConfirmButton:!1,timer:1500}),t.name="",t.phone="",t.hideme()):t.$toast.error(e.data.description)})).catch((function(e){t.$toast.error(e)}))}}}},v=(n("7f30"),n("6b0d")),_=n.n(v);const k=_()(g,[["render",p],["__scopeId","data-v-9f9bcfd4"]]);e["a"]=k}});
//# sourceMappingURL=app.45534e8e.js.map