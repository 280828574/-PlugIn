webpackJsonp([4],{141:function(t,n,e){var o=e(142);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(2)("1c6af89a",o,!1)},142:function(t,n,e){(t.exports=e(1)(void 0)).push([t.i,"\nimg[data-v-b36bf80e]{\r\n    width: 100%;\n}\nli[data-v-b36bf80e] {\r\n    list-style: none;\n}\nul[data-v-b36bf80e] {\r\n    margin: 0;\r\n    padding: 0;\n}\n.photo-title[data-v-b36bf80e] {\r\n    overflow: hidden;\n}\n.photo-title[data-v-b36bf80e],\r\n.photo-desc[data-v-b36bf80e] {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n    padding-left: 5px;\n}\n.photo-title p[data-v-b36bf80e] {\r\n    color: #13c2f7;\r\n    font-size: 20px;\r\n    font-weight: bold;\n}\n.photo-title span[data-v-b36bf80e] {\r\n    margin-right: 20px;\n}\n.photo-desc p[data-v-b36bf80e] {\r\n    font-size: 18px;\n}\r\n\r\n",""])},143:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{imgInfo:{},imgs:[]}},created:function(){var t=this,n=this.$route.params.imgId;this.$axios.get("getimageInfo/"+n).then(function(n){t.imgInfo=n.data.message[0]}),this.$axios.get("getthumimages/"+n).then(function(n){t.imgs=n.data.message,t.imgs.forEach(function(t){t.h=400,t.w=600})})}}},144:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav-bar",{attrs:{title:"图文详情"}}),t._v(" "),e("div",{staticClass:"photo-title"},[e("p",[t._v(t._s(t.imgInfo.title))]),t._v(" "),e("span",[t._v("发起日期："+t._s(t._f("convertTime")(t.imgInfo.add_time)))]),t._v(" "),e("span",[t._v(t._s(t.imgInfo.click)+"次浏览")]),t._v(" "),e("span",[t._v("分类：民生经济")])]),t._v(" "),e("my-ul",t._l(t.imgs,function(n,o){return e("my-li",{key:o},[e("img",{staticClass:"preview-img",attrs:{src:n.src},on:{click:function(n){t.$preview.open(o,t.imgs)}}})])})),t._v(" "),e("div",{staticClass:"photo-desc"},[e("p",{domProps:{innerHTML:t._s(t.imgInfo.content)}})]),t._v(" "),e("comment",{attrs:{cid:t.$route.params.imgId}})],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};n.a=i},96:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(143),i=e.n(o),a=e(144),s=!1,r=function(t){s||e(141)},d=e(3)(i.a,a.a,!1,r,"data-v-b36bf80e",null);d.options.__file="src\\components\\Photo\\PhotoDetail.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.default=d.exports}});