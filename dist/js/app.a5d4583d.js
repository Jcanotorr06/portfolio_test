(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],m=0,f=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0367":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrapper"}},[a("vue-headful",{attrs:{title:"Joseph Cano | Web Developer & Software Engineer"}}),a("NavBar"),a("Body"),a("section",{attrs:{id:"footer"}})],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"header"}},[t._m(0),a("nav",{attrs:{id:"nav"}},[a("ul",[a("li",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#one",expression:"'#one'"}],staticClass:"item",attrs:{href:"#one"},on:{mouseover:function(t){return t.target.classList.toggle("active")},mouseout:function(t){return t.target.classList.toggle("active")}}},[t._v(" About")])]),a("li",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#two",expression:"'#two'"}],staticClass:"item",attrs:{href:"#two"},on:{mouseover:function(t){return t.target.classList.toggle("active")},mouseout:function(t){return t.target.classList.toggle("active")}}},[t._v(" Things I Can Do")])]),a("li",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#three",expression:"'#three'"}],staticClass:"item",attrs:{href:"#three"},on:{mouseover:function(t){return t.target.classList.toggle("active")},mouseout:function(t){return t.target.classList.toggle("active")}}},[t._v(" A Few Accomplishments")])]),a("li",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#four",expression:"'#four'"}],staticClass:"item",attrs:{href:"#four"},on:{mouseover:function(t){return t.target.classList.toggle("active")},mouseout:function(t){return t.target.classList.toggle("active")}}},[t._v(" Contact")])])])]),t._m(1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("span",{staticClass:"image avatar"},[a("img",{attrs:{src:"images/avatar.jpg",alt:""}})]),a("h1",{attrs:{id:"logo"}},[t._v("Joseph Cano")]),a("p",[t._v("I got reprogrammed by a rogue AI"),a("br"),t._v(" and now I'm totally cray")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("ul",{staticClass:"icons"},[a("li",[a("a",{staticClass:"icon brands fa-twitter",attrs:{href:"https://twitter.com/josephcano",target:"_blank"}},[a("span",{staticClass:"label"},[t._v("Twitter")])])]),a("li",[a("a",{staticClass:"icon brands fa-spotify",attrs:{href:"https://open.spotify.com/user/zt2w32udeqcxs2446jjncvfvj",target:"_blank"}},[a("span",{staticClass:"label"},[t._v("Spotify")])])]),a("li",[a("a",{staticClass:"icon brands fa-instagram",attrs:{href:"https://www.instagram.com/josc507/",target:"_blank"}},[a("span",{staticClass:"label"},[t._v("Instagram")])])]),a("li",[a("a",{staticClass:"icon brands fa-github",attrs:{href:"https://github.com/Jcanotorr06",target:"_blank"}},[a("span",{staticClass:"label"},[t._v("Github")])])]),a("li",[a("a",{staticClass:"icon solid fa-envelope",attrs:{href:"mailto:josephct06@gmail.com",target:"_blank"}},[a("span",{staticClass:"label"},[t._v("Email")])])])])])}],c={name:"NavBar"},l=c,u=a("2877"),m=Object(u["a"])(l,i,o,!1,null,null,null),f=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("About"),a("Experience"),a("Projects"),a("Contact")],1)},p=[],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"one"}},[a("div",{staticClass:"image main",attrs:{"data-position":"center"}},[a("img",{attrs:{src:"images/banner2.jpg",alt:""}}),a("h1",{staticClass:"centro"},[t._v("Hello, World!")])]),a("div",{staticClass:"container"},[a("header",{staticClass:"major"},[a("h2",[t._v("Read Only")]),a("p",[t._v("Just an incredibly simple responsive site"),a("br"),t._v(" template freebie by "),a("a",{attrs:{href:"http://html5up.net"}},[t._v("HTML5 UP")]),t._v(".")])]),a("p",[t._v("Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.")]),a("a",{staticClass:"button alt",attrs:{href:"resume.pdf",target:"_blank"}},[t._v("Check Out My Résumé")])])])}],b={name:"About"},h=b,_=(a("b8ab"),Object(u["a"])(h,g,d,!1,null,null,null)),C=_.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"two"}},[a("div",{staticClass:"container"},[a("h3",[t._v("Things I Can Do")]),a("p",[t._v("Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.")]),a("ul",{staticClass:"feature-icons"},[a("li",{staticClass:"icon brands fa-lg fa-python"},[t._v("Write all the code")]),a("li",{staticClass:"icon brands fa-lg fa-java"},[t._v("Stack small boxes")]),a("li",{staticClass:"icon brands fa-lg fa-js"},[t._v("Read books and stuff")]),a("li",{staticClass:"icon brands fa-lg fa-css3-alt"},[t._v("Drink much coffee")]),a("li",{staticClass:"icon brands fa-lg fa-html5"},[t._v("Lightning bolt")]),a("li",{staticClass:"icon brands fa-lg fa-bootstrap"},[t._v("Shadow clone technique")]),a("li",{staticClass:"icon brands fa-lg fa-github"},[t._v("Drink much coffee")]),a("li",{staticClass:"icon brands fa-lg fa-vuejs"},[t._v("Drink much coffee")])])])])}],w={name:"Experience"},x=w,k=Object(u["a"])(x,j,y,!1,null,null,null),O=k.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"three"}},[a("div",{staticClass:"container"},[a("h3",[t._v("A Few Accomplishments")]),a("p",[t._v("Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.")]),a("div",{staticClass:"features"},[a("article",[a("a",{staticClass:"image",attrs:{href:"#",target:"_blank"}},[a("img",{attrs:{src:"images/pic01.jpg",alt:""}})]),a("div",{staticClass:"inner"},[a("h4",[t._v("Possibly broke spacetime")]),a("p",[t._v("Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.")])])]),a("article",[a("a",{staticClass:"image",attrs:{href:"#",target:"_blank"}},[a("img",{attrs:{src:"images/pic01.jpg",alt:""}})]),a("div",{staticClass:"inner"},[a("h4",[t._v("Terraformed a small moon")]),a("p",[t._v("Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.")])])]),a("article",[a("a",{staticClass:"image",attrs:{href:"#",target:"_blank"}},[a("img",{attrs:{src:"images/pic01.jpg",alt:""}})]),a("div",{staticClass:"inner"},[a("h4",[t._v("Snapped dark matter in the wild")]),a("p",[t._v("Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.")])])])])])])}],$={name:"Projects"},I=$,P=Object(u["a"])(I,E,A,!1,null,null,null),S=P.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"four"}},[a("div",{staticClass:"container"},[a("i",{staticClass:"fas fa-4x fa-paper-plane"}),a("h3",[t._v("Get in Touch")]),a("p",[t._v("Whether you have an idea for a project "),a("br"),t._v(" or just want to chat, feel free to send me an email!")]),a("a",{staticClass:"button primary",attrs:{href:"mailto:josephct06@gmail.com",target:"_blank"}},[t._v("Say Hello")])])])}],D={name:"Contact"},N=D,B=(a("610c"),Object(u["a"])(N,L,T,!1,null,null,null)),J=B.exports,M={name:"Body",components:{About:C,Experience:O,Projects:S,Contact:J}},q=M,W=Object(u["a"])(q,v,p,!1,null,null,null),F=W.exports,H={name:"App",components:{Body:F,NavBar:f}},R=H,G=(a("034f"),Object(u["a"])(R,r,s,!1,null,null,null)),z=G.exports,U=a("3132"),V=a.n(U),K=(a("15f5"),a("7051"),a("f5af")),Q=a.n(K),X=(a("e829"),a("f13c"));n["a"].config.productionTip=!1,n["a"].component("vue-headful",V.a),n["a"].use(X,{container:"body",duration:2e3,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),n["a"].use(Q.a),new n["a"]({created:function(){Q.a.init({disable:"false"})},render:function(t){return t(z)}}).$mount("#app")},"610c":function(t,e,a){"use strict";var n=a("0367"),r=a.n(n);r.a},"85ec":function(t,e,a){},"98e0":function(t,e,a){},b8ab:function(t,e,a){"use strict";var n=a("98e0"),r=a.n(n);r.a}});
//# sourceMappingURL=app.a5d4583d.js.map