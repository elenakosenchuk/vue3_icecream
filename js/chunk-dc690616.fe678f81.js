(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc690616"],{"66d9":function(t,e,n){"use strict";n.r(e);var s=n("7a23"),a={id:"testimonials"},i={class:"container"},c=Object(s["h"])("div",{class:"testimonials_title"},[Object(s["h"])("h3",null,"Custumers say")],-1);function o(t,e,n,o,l,r){var u=Object(s["F"])("Testimonial"),d=Object(s["F"])("slide"),m=Object(s["F"])("navigation"),b=Object(s["F"])("pagination"),O=Object(s["F"])("carousel");return Object(s["w"])(),Object(s["g"])("section",a,[Object(s["h"])("div",i,[c,Object(s["k"])(O,{settings:l.sliderSettings},{addons:Object(s["O"])((function(){return[Object(s["k"])(m),Object(s["k"])(b)]})),default:Object(s["O"])((function(){return[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(l.testimonialsList,(function(t){return Object(s["w"])(),Object(s["e"])(d,{key:t.id,class:"testimonials_content"},{default:Object(s["O"])((function(){return[Object(s["k"])(u,{testimonial:t},null,8,["testimonial"])]})),_:2},1024)})),128))]})),_:1},8,["settings"])])])}n("b0c0");var l={class:"testimonials_slider_wrapper"},r={id:"testimonials_slider"},u={class:"testimonials_item"},d={class:"author_name"},m={class:"testimonial_text"},b=Object(s["h"])("svg",null,[Object(s["h"])("use",{"xlink:href":"assets/images/icons/sprite.svg#left_quoutes"})],-1),O=Object(s["h"])("svg",null,[Object(s["h"])("use",{"xlink:href":"assets/images/icons/sprite.svg#right_quoutes"})],-1),j={class:"btn_wrapper"},h={class:"testimonials_picture"},f=["src"];function g(t,e,n,a,i,c){return Object(s["w"])(),Object(s["g"])(s["a"],null,[Object(s["h"])("div",l,[Object(s["h"])("ul",r,[Object(s["h"])("li",u,[Object(s["h"])("h5",d,Object(s["I"])(n.testimonial.name),1),Object(s["h"])("p",m,[b,Object(s["j"])(" "+Object(s["I"])(n.testimonial.content)+" ",1),O]),Object(s["h"])("div",j,[Object(s["h"])("button",{onClick:e[0]||(e[0]=Object(s["Q"])((function(){return c.openModal&&c.openModal.apply(c,arguments)}),["prevent"])),class:"btn buy_btn",type:"button"},"Add testimonial")])])])]),Object(s["h"])("div",h,[Object(s["h"])("img",{src:"assets/images/".concat(n.testimonial.img),alt:"Ice-cream picture"},null,8,f)])],64)}n("99af");var p=n("3d20"),v=n.n(p),_=n("bc3a"),w=n.n(_),T={name:"Testimonial",props:["testimonial"],data:function(){return{BOT_TOKEN:"5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4",CHAT_ID:"-1001765759474"}},methods:{openModal:function(){var t=this;this.$swal({title:"Add your name and testimonial",html:'<input id="name" class="swal2-input"><textarea id="message" class="swal2-textarea"></textarea>',showDenyButton:!1,showCancelButton:!0,confirmButtonText:"Save",denyButtonText:"Don't save"}).then((function(e){if(e.isConfirmed){var n=document.getElementById("name").value,s=document.getElementById("message").value;if(n+s=="")return void t.$toast.error("Enter your name and testimonial");var a=encodeURI("Name: ".concat(n,"\nTestimonual: ").concat(s));w.a.get("https://api.telegram.org/bot".concat(t.BOT_TOKEN,"/sendMessage?chat_id=").concat(t.CHAT_ID,"&text=").concat(a,"&parse_mode=html")).then((function(t){t.data.ok&&v.a.fire("Saved!","","success")}))}else e.isDenied&&v.a.fire("Changes are not saved","","info")}))}}},k=(n("72b0"),n("6b0d")),y=n.n(k);const I=y()(T,[["render",g]]);var x=I,A=(n("4001"),n("0b81")),B={name:"Testimonials",components:{Testimonial:x,Carousel:A["a"],Slide:A["d"],Pagination:A["c"],Navigation:A["b"]},data:function(){return{testimonialsList:[],sliderSettings:{itemsToShow:1,itemsToScroll:1,wrapAround:!0}}},created:function(){var t=this;w.a.get("data/testimonials.json").then((function(e){t.testimonialsList=e.data}))}};const C=y()(B,[["render",o]]);e["default"]=C},"72b0":function(t,e,n){"use strict";n("fd57")},fd57:function(t,e,n){}}]);
//# sourceMappingURL=chunk-dc690616.fe678f81.js.map