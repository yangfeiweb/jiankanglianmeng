require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([3],{80:function(e,t,s){"use strict";var a=o(s(1)),i=o(s(81));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(i.default))},81:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(83),i=s.n(a),o=s(84);var n=function(e){s(82)},r=s(0)(i.a,o.a,n,null,null);t.default=r.exports},82:function(e,t){},83:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{userPhone:"",userpwd:"",usercode:"",show:!0,timer:null,count:"",type:1}},methods:{delUserPhone:function(){this.userPhone=""},delUserpwd:function(){this.userpwd=""},getCode:function(){var e=this;this.show=!1;this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){e.count>0&&e.count<=60?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null)},1e3))},loginCode:function(){""!=this.userPhone.trim()||""!=this.usercode.trim()||""!=this.userpwd.trim()?/^1[345789]\d{9}$/.test(this.userPhone)?""!=this.userPhone.trim()?""!=this.usercode.trim()?this.usercode.trim().length<6?e.showToast({title:"您输入的验证码有误!",duration:2e3,icon:"none"}):""!=this.userpwd?e.redirectTo({url:"../../myCenter/myOrder"}):e.showToast({title:"您输入的密码不能为空!",duration:2e3,icon:"none"}):e.showToast({title:"验证码不能为空!",duration:2e3,icon:"none"}):e.showToast({title:"手机号码不能为空!",duration:2e3,icon:"none"}):e.showToast({title:"您输入的的手机号码有误!",duration:2e3,icon:"none"}):e.showToast({title:"请将内容填写完整!",duration:2e3,icon:"none"})}}}}).call(t,s(2).default)},84:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"content"},[e._m(0),s("image",{staticClass:"img",attrs:{src:"../../../static/loginBg.jpg",mode:""}}),s("view",{staticClass:"lTop"},[s("navigator",{attrs:{url:"../login/login"}},[e._v("登录")])],1),e.haveLogin?e._e():s("view",{staticClass:"login"},[s("view",{staticClass:"lMiddle"},[s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/user.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPhone,expression:"userPhone"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"11",placeholder:"请输入手机号",eventid:"jiq-0"},domProps:{value:e.userPhone},on:{input:function(t){t.target.composing||(e.userPhone=t.target.value)}}}),""!=e.userPhone?s("image",{attrs:{src:"../../../static/del.png",mode:"",eventid:"vsZ-1"},on:{tap:e.delUserPhone}}):e._e()]),s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/code.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userpwd,expression:"userpwd"}],attrs:{"placeholder-class":"place-holder",type:"text",placeholder:"请输入密码",eventid:"90s-2"},domProps:{value:e.userpwd},on:{input:function(t){t.target.composing||(e.userpwd=t.target.value)}}}),""!=e.userpwd?s("image",{attrs:{src:"../../../static/del.png",mode:"",eventid:"IZ1-3"},on:{tap:e.delUserpwd}}):e._e()]),s("view",{staticClass:"phone"},[s("image",{attrs:{src:"../../../static/pwd.png",mode:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.usercode,expression:"usercode"}],attrs:{"placeholder-class":"place-holder",type:"text",maxlength:"6",placeholder:"请输入验证码",eventid:"QA9-4"},domProps:{value:e.usercode},on:{input:function(t){t.target.composing||(e.usercode=t.target.value)}}}),e.show?s("view",{staticClass:"getcode",attrs:{eventid:"rlQ-5"},on:{tap:e.getCode}},[e._v("获取验证码")]):s("view",{staticClass:"getcode"},[e._v(e._s(e.count)+"s后重新发送")])]),s("view",{staticClass:"btn"},[s("button",{staticClass:"btn1",attrs:{type:"primary",eventid:"NyT-6"},on:{tap:e.loginCode}},[e._v("注册")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"wrapper"},[t("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}}),t("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}}),t("image",{staticClass:"box",attrs:{src:"../../../static/jumpMap.png"}})])}]};t.a=a}},[80]);