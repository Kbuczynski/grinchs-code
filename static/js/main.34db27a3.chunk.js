(this["webpackJsonpgrinchs-code"]=this["webpackJsonpgrinchs-code"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/logo-header.3037cf57.png"},22:function(e,a,t){e.exports=t.p+"static/media/avatar1.fdeb6675.png"},23:function(e,a,t){e.exports=t.p+"static/media/avatar2.837a944f.png"},24:function(e,a,t){e.exports=t.p+"static/media/avatar3.ec9aab28.png"},25:function(e,a,t){e.exports=t.p+"static/media/avatar4.5e1353d5.png"},28:function(e,a,t){e.exports=t(54)},33:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(5),c=t.n(i),o=(t(33),t(16)),s=t.n(o),l=t(2),m=function(){return r.a.createElement("div",{className:"navigation-container"},r.a.createElement("nav",{className:"navigation"},r.a.createElement("div",{className:"navigation__logo"},r.a.createElement("img",{src:s.a,alt:"Grinch's Code",onClick:l.animateScroll.scrollToTop})),r.a.createElement("div",{className:"navigation__links"},r.a.createElement("div",{className:"navigation__links__link"},r.a.createElement(l.Link,{className:"effect-underline",activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-150,duration:500},"Jak to dzia\u0142a?")),r.a.createElement("div",{className:"navigation__links__link"},r.a.createElement(l.Link,{className:"effect-underline",activeClass:"active",to:"program",spy:!0,smooth:!0,offset:-150,duration:500},"Program")),r.a.createElement("div",{className:"navigation__links__link"},r.a.createElement(l.Link,{className:"effect-underline",activeClass:"active",to:"organizers",spy:!0,smooth:!0,offset:-150,duration:500},"Organizatorzy")))))},d=t(17),u=t(18),g=t(26),p=t(19),f=t(27),v=t(10),E=t.n(v),z=t(20),k=window.innerWidth>800?100:50,_=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).handleRender=function(e){var a=e.days,t=e.hours,n=e.minutes,i=e.seconds;return e.completed?r.a.createElement(E.a,{height:k,width:k,color:"#fff",background:"none",play:!0,perspective:600,numbers:"00:00:00:00"}):(a<10&&(a="0".concat(a)),t<10&&(t="0".concat(t)),n<10&&(n="0".concat(n)),i<10&&(i="0".concat(i)),r.a.createElement(E.a,{height:k,width:k,color:"#fff",background:"none",play:!0,perspective:600,numbers:"".concat(a,":").concat(t,":").concat(n,":").concat(i)}))},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=new Date(2019,10,15,17,0,0)-new Date;return r.a.createElement(z.a,{date:Date.now()+e,renderer:this.handleRender})}}]),a}(n.Component),y=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__box"},r.a.createElement("h3",{className:"home__box__title"},"Widzimy si\u0119 ju\u017c za:"),r.a.createElement(_,null),r.a.createElement("div",{className:"border-radius-anim home__box__btn"},r.a.createElement(l.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-150,duration:500},"Jak to dzia\u0142a?"))))},h=function(e){var a=e.ico,t=e.title,n=e.text;return r.a.createElement("div",{className:"about__grid__box"},r.a.createElement("i",{className:a}),r.a.createElement("h4",null,t),r.a.createElement("p",null,n))},b=function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about__title"},r.a.createElement("h3",null,"Jak to dzia\u0142a?")),r.a.createElement("div",{className:"about__desc"},r.a.createElement("span",null,"Hackathon to 24-godzinny maraton kodowania. W tym czasie ca\u0142\u0105 dru\u017cyn\u0105 tworzycie program na temat, kt\xf3ry zostanie podany dopiero przy rozpocz\u0119ciu wydarzenia :)")),r.a.createElement("div",{className:"about__grid"},[{ico:"fas fa-users",title:"Zbierz zesp\xf3\u0142",text:"Zbierz zesp\xf3\u0142 maksymalnie 3 osobowy lub wystartuj sam! Na ka\u017cdego b\u0119dzie czeka\u0107 gor\u0105ca pizza \ud83c\udf55 Wpisowe to jedynie 10z\u0142/os."},{ico:"fas fa-code",title:"Programuj",text:"Poka\u017c co potrafisz \ud83d\ude0e stw\xf3rz niesamowit\u0105 aplikacj\u0119, gr\u0119, albo stron\u0119 internetow\u0105. My\u015blisz, \u017ce nie dasz rady? Nasi mentorzy Ci pomog\u0105!"},{ico:"fas fa-trophy",title:"Zwyci\u0119\u017caj",text:"Dla wygranej dru\u017cyny \ud83c\udfc6 szykujemy wyj\u0105tkow\u0105 nagrod\u0119 rzeczow\u0105, a dla wszystkich - podwy\u017cszenie ocen z przedmiot\xf3w zawodowych!"}].map((function(e,a){var t=e.ico,n=e.title,i=e.text;return r.a.createElement(h,{key:a,ico:t,title:n,text:i})})))))},w=t(21),N=t.n(w),x=function(){return r.a.createElement("div",{className:"program-container"},r.a.createElement("div",{className:"program"},r.a.createElement("div",{className:"program__title"},r.a.createElement("h3",null,"Program")),r.a.createElement("div",{className:"program__timeline"},r.a.createElement(N.a,{items:[{ts:"2019-11-15T17:00:00",text:"Inauguracja"},{ts:"2019-11-15T18:00:00",text:"Rozpocz\u0119cie kodowania"},{ts:"2019-11-15T22:00:00",text:"Przerwa na pizze \ud83c\udf55"},{ts:"2019-11-15T00:00:00",text:"Turniej wybranej przez was gry \ud83c\udfae"},{ts:"2019-11-16T08:00:00",text:"\u015aniadanie \ud83c\udf73"},{ts:"2019-11-16T15:00:00",text:"Koniec kodowania"},{ts:"2019-11-16T16:00:00",text:"Prezentacje"},{ts:"2019-11-16T17:00:00",text:"Og\u0142oszenie wynik\xf3w \ud83c\udfc6"}]}))))},j=t(22),T=t.n(j),C=t(23),O=t.n(C),P=t(24),J=t.n(P),A=t(25),D=t.n(A),L=function(e){var a=e.img,t=e.msg,n=e.name,i="https://www.facebook.com/messages/t/".concat(t);return r.a.createElement("div",{className:"organizers__grid__box"},r.a.createElement("img",{src:a,alt:"organizator"}),r.a.createElement("span",null,n),r.a.createElement("a",{href:i},r.a.createElement("i",{className:"fab fa-facebook-messenger border-radius-anim"})))},W=function(){var e=[{img:T.a,msg:"kamil.buczynski.00",name:"Kamil Buczy\u0144ski"},{img:J.a,msg:"angela.iskra.9",name:"Angelika Iskra"},{img:O.a,msg:"tomek.borowski.75",name:"Tomek Borowski"},{img:D.a,msg:"Vergilek",name:"Adam Hallmann"}];return r.a.createElement("div",{className:"organizers-container"},r.a.createElement("div",{className:"organizers"},r.a.createElement("div",{className:"organizers__title"},r.a.createElement("h3",null,"Organizatorzy")),r.a.createElement("div",{className:"organizers__grid"},e.map((function(e,a){var t=e.img,n=e.msg,i=e.name;return r.a.createElement(L,{key:a,img:t,msg:n,name:i})})))))},B=function(){return r.a.createElement("footer",{className:"footer"},"\xa9 2019 Grinch\u2019s Code. All rights reserved")},I=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m,null),r.a.createElement(y,null),r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(W,null),r.a.createElement(B,null))};c.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.34db27a3.chunk.js.map