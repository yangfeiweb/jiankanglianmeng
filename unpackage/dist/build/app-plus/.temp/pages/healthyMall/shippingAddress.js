require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([42],{250:function(e,t,i){"use strict";var a=c(i(1)),s=c(i(251));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(s.default))},251:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(253),s=i.n(a),c=i(254);var n=function(e){i(252)},d=i(0)(s.a,c.a,n,null,null);t.default=d.exports},252:function(e,t){},253:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{checkedId:0,siteData:[{tel:"15638521342",name:"张三",prov:"河南省",citiy:"郑州市",count:"郑东新区",definite:"中州大道与商都路交汇处东500米路南",checked:0,id:1},{tel:"15638521342",name:"张三",prov:"河南省",citiy:"郑州市",count:"郑东新区",definite:"中州大道与商都路交汇处东500米路南",checked:1,id:2},{tel:"15638521342",name:"张三",prov:"河南省",citiy:"郑州市",count:"郑东新区",definite:"中州大道与商都路交汇处东500米路南",checked:1,id:3}]}},onUnload:function(){for(var e=this.siteData.length,t=0;t<e;t++)0===this.siteData[t].checked&&(this.checkedId=this.siteData[t].id)},methods:{complie:function(t){console.log(t,"编辑");var i=JSON.stringify(t);console.log(i),e.navigateTo({url:"/pages/healthyMall/addShippingAddress?name=shippingAddress&siteData="+i})},detele:function(e){console.log(e,"删除");e.id},checkedSite:function(e){console.log(e);var t=e.id;this.checkedId=t;for(var i=this.siteData.length,a=0;a<i;a++)this.siteData[a].id===t?this.siteData[a].checked=0:this.siteData[a].checked=1},addSite:function(){e.navigateTo({url:"/pages/healthyMall/addShippingAddress"})}}}}).call(t,i(2).default)},254:function(e,t,i){"use strict";var a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"index"},[i("view",{staticClass:"siteView"},[e._l(e.siteData,function(t,a){return i("view",{key:a,staticClass:"siteViewItem"},[i("label",{staticClass:"radio"},[i("radio",{attrs:{color:"#87BBF8",value:t.id,checked:0===t.checked,eventid:"7QR-0-"+a},on:{tap:function(i){e.checkedSite(t)}}})],1),i("view",{staticClass:"siteDefalut"},[i("view",{staticClass:"siteInfoTop"},[i("text",{staticClass:"siteName"},[e._v(e._s(t.name))]),i("text",{staticClass:"siteTel"},[e._v(e._s(t.tel))]),i("text",{directives:[{name:"show",rawName:"v-show",value:0===t.checked,expression:"item.checked===0?true:false"}],staticClass:"defalutbtn"},[e._v("默认地址")])]),i("text",{staticClass:"siteDefinite"},[e._v("\n         \t\t\t"+e._s(t.prov+t.citiy+t.count+t.definite)+"\n         \t")])]),i("view",{staticClass:"imgView"},[i("image",{staticClass:"complieIcon",attrs:{src:"../../static/compile_icon.png",mode:"",eventid:"Pk9-1-"+a},on:{tap:function(i){e.complie(t)}}}),i("text",{staticClass:"imgViewBorder"}),i("image",{staticClass:"deteleIocn",attrs:{src:"../../static/delete_icon.png",mode:"",eventid:"P5H-2-"+a},on:{tap:function(i){e.detele(t)}}})])],1)}),i("view",{staticClass:"addSiteView"},[i("text",{staticClass:"addSite",attrs:{eventid:"uVt-3"},on:{tap:e.addSite}},[e._v("新增收货地址")])])],2)])},staticRenderFns:[]};t.a=a}},[250]);