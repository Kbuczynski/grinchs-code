(this["webpackJsonpgrinchs-code"]=this["webpackJsonpgrinchs-code"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo-header.3037cf57.png"},27:function(e,a,t){e.exports=t.p+"static/media/avatar1.fdeb6675.png"},28:function(e,a,t){e.exports=t.p+"static/media/avatar2.837a944f.png"},29:function(e,a,t){e.exports=t.p+"static/media/avatar3.ec9aab28.png"},30:function(e,a,t){e.exports=t.p+"static/media/avatar4.5e1353d5.png"},33:function(e,a,t){e.exports=t(74)},38:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(3),c=t.n(r),o=(t(38),t(13)),s=t(21),l=t.n(s),m=t(4),d=t(22),u=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},E=function(){var e=Object(n.useState)(u()),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),E=s[0],_=s[1];Object(n.useEffect)((function(){function e(){r(u())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var g=function(e){_(e.isOpen)},p=function(){E&&g({isOpen:!1})},v=function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-150;return i.a.createElement(m.Link,{onClick:function(){return p()},className:e,activeClass:"active",to:a,spy:!0,smooth:!0,offset:n,duration:500},t)};return t.width>1e3?i.a.createElement("div",{className:"navigation-container"},i.a.createElement("nav",{className:"navigation"},i.a.createElement("div",{className:"navigation__logo"},i.a.createElement("img",{src:l.a,alt:"Grinch's Code",onClick:m.animateScroll.scrollToTop})),i.a.createElement("div",{className:"navigation__links"},i.a.createElement("div",{className:"navigation__links__link"},v("menu-item","about","Jak to dzia\u0142a?")),i.a.createElement("div",{className:"navigation__links__link"},v("menu-item","why-worth","Dlaczego warto?")),i.a.createElement("div",{className:"navigation__links__link"},v("menu-item","program","Program")),i.a.createElement("div",{className:"navigation__links__link"},v("menu-item","join","Do\u0142\u0105cz")),i.a.createElement("div",{className:"navigation__links__link"},v("menu-item","organizers","Organizatorzy"))))):i.a.createElement("div",{className:"navigation-container-burger"},i.a.createElement(d.slide,{id:"menu",pageWrapId:"app",outerContainerId:"navigation-container-burger",disableAutoFocus:!0,isOpen:E,onStateChange:function(e){return g(e)}},v("menu-item","about","Jak to dzia\u0142a?"),v("menu-item","why-worth","Dlaczego warto?"),v("menu-item","program","Program"),v("menu-item","join-container","Do\u0142\u0105cz"),v("menu-item","organizers","Organizatorzy")))},_=t(23),g=t(24),p=t(31),v=t(25),f=t(32),w=t(11),h=t.n(w),z=t(12),k=window.innerWidth>800?100:50,y=function(e){function a(e){var t;return Object(_.a)(this,a),(t=Object(p.a)(this,Object(v.a)(a).call(this,e))).handleRenderDesktop=function(e){var a=e.days,t=e.hours,n=e.minutes,r=e.seconds;return e.completed?i.a.createElement(h.a,{height:k,width:k,color:"#fff",background:"none",play:!0,perspective:600,numbers:"00:00:00:00"}):(a<10&&(a="0".concat(a)),t<10&&(t="0".concat(t)),n<10&&(n="0".concat(n)),r<10&&(r="0".concat(r)),i.a.createElement(h.a,{height:k,width:k,color:"#fff",background:"none",play:!0,perspective:600,numbers:"".concat(a,":").concat(t,":").concat(n,":").concat(r)}))},t.handleRenderMac=function(e){var a=e.days,t=e.hours,n=e.minutes,r=e.seconds;return e.completed?i.a.createElement("div",{className:"timer-mac"},"00:00:00:00"):(a<10&&(a="0".concat(a)),t<10&&(t="0".concat(t)),n<10&&(n="0".concat(n)),r<10&&(r="0".concat(r)),i.a.createElement("div",{className:"timer-mac"},"".concat(a,":").concat(t,":").concat(n,":").concat(r)))},t.state={system:navigator.appVersion},t}return Object(f.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.state.system,a=new Date(2019,10,15,17,0,0)-new Date;return-1!==e.indexOf("Mac")?i.a.createElement(z.a,{date:Date.now()+a,renderer:this.handleRenderMac}):i.a.createElement(z.a,{date:Date.now()+a,renderer:this.handleRenderDesktop})}}]),a}(n.Component),b=function(){return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"home__box"},i.a.createElement("h3",{className:"home__box__title"},"Widzimy si\u0119 ju\u017c za:"),i.a.createElement(y,null),i.a.createElement("div",{className:"border-radius-anim home__box__btn"},i.a.createElement(m.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-150,duration:500},"Jak to dzia\u0142a?"))))},N=function(e){var a=e.ico,t=e.title,n=e.text;return i.a.createElement("div",{className:"about__grid__box"},i.a.createElement("i",{className:a}),i.a.createElement("h4",null,t),i.a.createElement("p",null,n))},j=function(){return i.a.createElement("div",{className:"about-container"},i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"about__title"},i.a.createElement("h3",null,"Jak to dzia\u0142a?")),i.a.createElement("div",{className:"about__desc"},i.a.createElement("span",null,"Hackathon to 24-godzinny maraton kodowania. W tym czasie ca\u0142\u0105 dru\u017cyn\u0105 tworzycie program na temat, kt\xf3ry zostanie podany dopiero przy rozpocz\u0119ciu wydarzenia :)")),i.a.createElement("div",{className:"about__grid"},[{ico:"fas fa-users",title:"Zbierz zesp\xf3\u0142",text:"Zbierz zesp\xf3\u0142 maksymalnie 3 osobowy lub wystartuj sam! Wpisowe to jedynie 10z\u0142/os."},{ico:"fas fa-code",title:"Programuj",text:"Poka\u017c co potrafisz \ud83d\ude0e stw\xf3rz niesamowit\u0105 aplikacj\u0119, gr\u0119, albo stron\u0119 internetow\u0105!"},{ico:"fas fa-trophy",title:"Zwyci\u0119\u017caj",text:"Dla wygranej dru\u017cyny \ud83c\udfc6 szykujemy wyj\u0105tkow\u0105 nagrod\u0119 rzeczow\u0105, a dla wszystkich - podwy\u017cszenie ocen z przedmiot\xf3w zawodowych!"}].map((function(e,a){var t=e.ico,n=e.title,r=e.text;return i.a.createElement(N,{key:a,ico:t,title:n,text:r})})))))},x=t(26),O=t.n(x);function C(e){var a=e.time,t=e.text;return i.a.createElement("li",null,i.a.createElement("i",{className:"fa"}),i.a.createElement("div",{className:"time-line-item"},i.a.createElement("span",{className:"time"},i.a.createElement("i",{className:"fa fa-clock-o"})," ",a),i.a.createElement("div",{className:"time-line-header"},t)))}C.defaultProps={};var T=C;t(73);var I=function(e){var a=function(e){var a={};return e.forEach((function(e,t){var n=e.ts,i=e.text,r=O()(n),c=r.format("DD MMM YYYY"),o=a[c]||[];o.push({time:r.format("kk:mm"),text:i,key:t}),a[c]=o})),a}(e.items),t=Object.keys(a);return i.a.createElement("div",{className:"time-line-ctnr"},t.map((function(e){return i.a.createElement("ul",{className:"time-line",key:e},i.a.createElement("li",{className:"time-label"},i.a.createElement("span",null,e)),a[e].map((function(e){var a=e.time,t=e.text,n=e.key;return i.a.createElement(T,{time:a,text:t,key:n})})))})))},D=function(){return i.a.createElement("div",{className:"program-container"},i.a.createElement("div",{className:"program"},i.a.createElement("div",{className:"program__title"},i.a.createElement("h3",null,"Program")),i.a.createElement("div",{className:"program__timeline"},i.a.createElement(I,{items:[{ts:"2019-11-15T17:00:00",text:"Rozpocz\u0119cie hackathonu, przygotowanie stanowisk komputerowych"},{ts:"2019-11-15T18:00:00",text:"Start kodowania"},{ts:"2019-11-15T22:00:00",text:"Przerwa na pizz\u0119 \ud83c\udf55"},{ts:"2019-11-15T00:00:00",text:"Turniej w gry FIFA 20 i Tekken 7 \ud83c\udfae"},{ts:"2019-11-16T08:00:00",text:"\u015aniadanie \ud83c\udf73"},{ts:"2019-11-16T15:00:00",text:"Koniec kodowania"},{ts:"2019-11-16T16:00:00",text:"Prezentacje projekt\xf3w"},{ts:"2019-11-16T17:00:00",text:"Og\u0142oszenie wynik\xf3w i rozdanie nagr\xf3d \ud83c\udfc6"}]}))))},P=t(27),M=t.n(P),R=t(28),Z=t.n(R),A=t(29),S=t.n(A),W=t(30),J=t.n(W),L=function(e){var a=e.img,t=e.msg,n=e.name,r="http://m.me/".concat(t);return i.a.createElement("div",{className:"organizers__grid__box"},i.a.createElement("img",{src:a,alt:"organizator"}),i.a.createElement("span",null,n),i.a.createElement("a",{href:r,target:"_blank"},i.a.createElement("i",{className:"fab fa-facebook-messenger border-radius-anim"})))},K=function(){var e=[{img:M.a,msg:"kamil.buczynski.00",name:"Kamil Buczy\u0144ski"},{img:S.a,msg:"angela.iskra.9",name:"Angelika Iskra"},{img:Z.a,msg:"tomek.borowski.75",name:"Tomek Borowski"},{img:J.a,msg:"Vergilek",name:"Adam Hallmann"}];return i.a.createElement("div",{className:"organizers-container"},i.a.createElement("div",{className:"organizers"},i.a.createElement("div",{className:"organizers__title"},i.a.createElement("h3",null,"Organizatorzy")),i.a.createElement("div",{className:"organizers__grid"},e.map((function(e,a){var t=e.img,n=e.msg,r=e.name;return i.a.createElement(L,{key:a,img:t,msg:n,name:r})})))))},H=function(){return i.a.createElement("footer",{className:"footer"},"\xa9 2019 Grinch\u2019s Code. All rights reserved")},F=function(){var e=function(e){var a=e.ico,t=e.title,n=e.text;return i.a.createElement("div",{className:"why-worth__cards__box"},i.a.createElement("div",{className:"why-worth__cards__box__left"},i.a.createElement("div",{className:"why-worth__cards__box__left__title"},t),i.a.createElement("p",{className:"why-worth__cards__box__left__text"},n)),i.a.createElement("div",{className:"why-worth__cards__box__right"},i.a.createElement("i",{className:a})))};return i.a.createElement("div",{className:"why-worth-container"},i.a.createElement("div",{className:"why-worth"},i.a.createElement("div",{className:"why-worth__title"},i.a.createElement("span",null,"Dlaczego warto wzi\u0105\u0107 udzia\u0142?")),i.a.createElement("div",{className:"why-worth__cards"},[{ico:"fas fa-utensils",title:"PIZZA, ZIMNE NAPOJE, PRZEK\u0104SKI",text:"Na naszym hackathonie nie b\u0119dziesz chodzi\u0142 g\u0142odny! Zapewniamy kolacj\u0119, pyszne \u015bniadanie i sta\u0142y dost\u0119p do zimnych napoi i przek\u0105sek."},{ico:"fas fa-gamepad",title:"CHILLROOM, GAMEROOM, SLEEPROOM",text:"Przygotowali\u015bmy dla Ciebie specjalne sale, gdzie do Twojej dyspozycji b\u0119dzie konsola, VR, ping pong, pi\u0142karzyki i o wiele wi\u0119cej!"},{ico:"fab fa-playstation",title:"TURNIEJ W FIFA 20 I TEKKEN 7",text:"24 godziny ci\u0105g\u0142ego kodowania to kawa\u0142 czasu, dlatego w ramach odpoczynku 'dla umys\u0142u' organizujemy turniej na konsoli PS4 :)"},{ico:"fas fa-user-tie",title:"POMOC MENTOR\xd3W I NAUCZYCIELI",text:"Nie jeste\u015b pewny swoich umiej\u0119tno\u015bci? Nie stresuj si\u0119! Mo\u017cesz liczy\u0107 na pomoc do\u015bwiadczonych mentor\xf3w i nauczycieli."}].map((function(a,t){var n=a.ico,r=a.title,c=a.text;return i.a.createElement(e,{key:t,ico:n,title:r,text:c})})))))},Y="https://grinchscode.pl",G=function(){return i.a.createElement("div",{className:"join-container"},i.a.createElement("div",{className:"join"},i.a.createElement("div",{className:"join__title"},"DO\u0141\u0104CZ DO PIERWSZEGO HACKATHONU SCI!"),i.a.createElement("div",{className:"join__desc"},"Zapisy u organizator\xf3w lub u pana Adama Czarniawskiego."),i.a.createElement("div",{className:"join__buttons"},i.a.createElement("div",{className:"join__buttons__btn border-radius-anim",onClick:function(){return window.open("".concat(Y,"/regulamin.pdf"),"_blank")}},"Regulamin"),i.a.createElement("div",{className:"join__buttons__btn border-radius-anim",onClick:function(){return window.open("".concat(Y,"/formularz.pdf"),"_blank")}},"Zapisy"),i.a.createElement("div",{className:"join__buttons__btn border-radius-anim",onClick:function(){return window.open("".concat(Y,"/zgoda.pdf"),"_blank")}},"Zgoda rodzica"))))},B=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(E,null),i.a.createElement(b,null),i.a.createElement(j,null),i.a.createElement(F,null),i.a.createElement(D,null),i.a.createElement(G,null),i.a.createElement(K,null),i.a.createElement(H,null))};c.a.render(i.a.createElement(B,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6604f988.chunk.js.map