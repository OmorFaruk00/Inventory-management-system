(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{367:function(t,e,o){var content=o(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("1376e1ac",content,!0,{sourceMap:!1})},378:function(t,e,o){"use strict";o(367)},379:function(t,e,o){var n=o(47)(!1);n.push([t.i,'a[data-v-4e777e38]{text-decoration:none}.dashboard[data-v-4e777e38]{color:#0b697e;background:linear-gradient(#0b697e,#0b697e 43%,transparent 0,transparent 57%,#0b697e 0);font-family:"Poppins",sans-serif;text-align:center;width:210px;height:210px;padding:43px 28px 35px;margin:0 auto;border-radius:70px;position:relative;z-index:1;transition:all .2s ease-in-out;cursor:pointer}.dashboard[data-v-4e777e38]:hover{transform:scale(1.1)}.dashboard[data-v-4e777e38]:after,.dashboard[data-v-4e777e38]:before{content:"";background-color:#fff;border-radius:50%;position:absolute;top:13px;left:13px;right:13px;bottom:13px;z-index:-1}.dashboard[data-v-4e777e38]:after{box-shadow:5px 5px 10px rgba(0,0,0,.3);top:23px;left:23px;right:23px;bottom:23px}.dashboard .dashboard-icon[data-v-4e777e38]{font-size:30px;margin:0 0 10px}.dashboard-icon svg[data-v-4e777e38]{height:40px}.dashboard h3[data-v-4e777e38]{font-size:20px;font-weight:500;text-transform:capitalize;margin:0 0 9px}.dashboard .dashboard-value[data-v-4e777e38]{font-size:30px;font-weight:600;display:block}.dashboard.green[data-v-4e777e38]{color:#59ae58;background:linear-gradient(#59ae58,#59ae58 43%,transparent 0,transparent 57%,#59ae58 0)}.dashboard.yellow[data-v-4e777e38]{color:#fea703;background:linear-gradient(#fea703,#fea703 43%,transparent 0,transparent 57%,#fea703 0)}.dashboard.blue[data-v-4e777e38]{color:#0c8afa;background:linear-gradient(#0c8afa,#0c8afa 43%,transparent 0,transparent 57%,#0c8afa 0)}@media screen and (max-width:990px){.dashboard[data-v-4e777e38]{margin-bottom:40px}}',""]),t.exports=n},415:function(t,e,o){"use strict";o.r(e);var n={layout:"Dum-content",mounted:function(){this.getNotice(),this.getEvent(),this.getSlider(),this.getProgram()},data:function(){return{notices:[],events:[],sliders:[],programs:[]}},methods:{getNotice:function(){var t=this;this.$axios.$get("/notice/show").then((function(e){t.notices=e.length})).catch((function(t){console.log(t)}))},getEvent:function(){var t=this;this.$axios.$get("/event/show").then((function(e){t.events=e.length})).catch((function(t){console.log(t)}))},getSlider:function(){var t=this;this.$axios.$get("/slider/show").then((function(e){t.sliders=e.length})).catch((function(t){console.log(t)}))},getProgram:function(){var t=this;this.$axios.$get("/program/show").then((function(e){t.programs=e.length})).catch((function(t){console.log(t)}))}}},r=(o(378),o(34)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 col-sm-12 col-xl-3"},[o("nuxt-link",{attrs:{to:"/dum-ac/event"}},[o("div",{staticClass:"dashboard"},[o("div",{staticClass:"dashboard-icon"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}})])]),t._v(" "),o("h3",[t._v("Event")]),t._v(" "),o("span",{staticClass:"dashboard-value"},[t._v(t._s(t.events))])])])],1),t._v(" "),o("div",{staticClass:"col-md-6 col-sm-12 col-xl-3"},[o("nuxt-link",{attrs:{to:"/dum-ac/notice"}},[o("div",{staticClass:"dashboard green"},[o("div",{staticClass:"dashboard-icon"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),t._v(" "),o("h3",[t._v("Notice")]),t._v(" "),o("span",{staticClass:"dashboard-value"},[t._v(t._s(t.notices))])])])],1),t._v(" "),o("div",{staticClass:"col-md-6 col-sm-12 col-xl-3"},[o("nuxt-link",{attrs:{to:"/dum-ac/program"}},[o("div",{staticClass:"dashboard yellow"},[o("div",{staticClass:"dashboard-icon"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])]),t._v(" "),o("h3",[t._v("Program")]),t._v(" "),o("span",{staticClass:"dashboard-value"},[t._v(t._s(t.programs))])])])],1),t._v(" "),o("div",{staticClass:"col-md-6 col-sm-12 col-xl-3"},[o("nuxt-link",{attrs:{to:"/dum-ac/slider"}},[o("div",{staticClass:"dashboard blue"},[o("div",{staticClass:"dashboard-icon"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}})])]),t._v(" "),o("h3",[t._v("Slider")]),t._v(" "),o("span",{staticClass:"dashboard-value"},[t._v(t._s(t.sliders))])])])],1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center py-5"},[o("h2",[t._v("Welcome To Darul Uloom Moniram")])])}],!1,null,"4e777e38",null);e.default=component.exports}}]);