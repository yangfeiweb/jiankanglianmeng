require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([49],[,,,,,,,,,,,function(e,n,t){"use strict";var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=a(t(5)),i=a(t(13)),r=a(t(16));function a(e){return e&&e.__esModule?e:{default:e}}u.default.config.productionTip=!1,u.default.prototype.$store=r.default,u.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},i.default.mpType="app",new u.default(o({store:r.default},i.default)).$mount()},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(15),u=t.n(o);var i=function(e){t(14)},r=t(0)(u.a,null,i,null,null);n.default=r.exports},function(e,n){},function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default={onLaunch:function(){console.log("App Launch"),plus.screen.lockOrientation("portrait-primary");var n={appid:plus.runtime.appid,version:plus.runtime.version,imei:plus.device.imei};e.request({url:"https://uniapp.dcloud.io/update",data:n,success:function(n){if(console.log("success",n),200==n.statusCode&&n.data.isUpdate){var t="iOS"===plus.os.name?n.data.iOS:n.data.Android;e.showModal({title:"更新提示",content:n.data.note?n.data.note:"是否选择更新",success:function(e){e.confirm&&plus.runtime.openURL(t)}})}}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}}).call(n,t(2).default)},function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(6)),u=r(t(5)),i=r(t(19));function r(e){return e&&e.__esModule?e:{default:e}}u.default.use(i.default);var a=new i.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null},mutations:{login:function(e,n){e.hasLogin=!0,e.loginProvider=n},logout:function(e){e.hasLogin=!1,e.openid=null},setOpenid:function(e,n){e.openid=n}},actions:{getUserOpenId:function(){var n,t=(n=o.default.mark(function n(t){var u=t.commit,i=t.state;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise(function(n,t){i.openid?n(i.openid):e.login({success:function(e){u("login"),setTimeout(function(){console.log("uni.request mock openid[123456789]"),u("setOpenid","123456789"),n("123456789")},1e3)},fail:function(e){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),t(e)}})});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,this)}),function(){var e=n.apply(this,arguments);return new Promise(function(n,t){return function o(u,i){try{var r=e[u](i),a=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(a).then(function(e){o("next",e)},function(e){o("throw",e)});n(a)}("next")})});return function(e){return t.apply(this,arguments)}}()}});n.default=a}).call(n,t(2).default)}],[11]);