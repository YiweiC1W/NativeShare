!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["NativeShare.js"]=t():e["NativeShare.js"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=document.getElementsByTagName("script")[0],o=document.createElement("script");o.src=e,o.async=!0,n.parentNode.insertBefore(o,n),o.onload=t}function i(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}function a(e){if(H)location.href=e;else{var t=document.createElement("iframe");t.style.display="none",t.src=e,document.body.appendChild(t),setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},2e3)}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];for(var r in e)t?n.push(r+"="+encodeURIComponent(e[r])):n.push(r+"="+e[r]);return n.join("&")}function u(e){return c({share_id:924053302,url:re.encode(e.link),title:re.encode(e.title),description:re.encode(e.desc),previewimageUrl:re.encode(e.icon),image_url:re.encode(e.icon)})}function l(e){a((H?"mqqapi://share/to_fri?src_type=web&version=1&file_type=news":"mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news")+"&"+u(e))}function s(e){a((H?"mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A":"mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1")+"&"+u(e))}function f(e){var t=e.link,n=e.title,r=e.icon,o={url:t,title:n,pic:r};location.href="http://service.weibo.com/share/share.php?"+c(o,!0)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function M(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function W(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function L(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var Z,F=navigator.userAgent,I=/(iPad).*OS\s([\d_]+)/.test(F),J=/(iPod)(.*OS\s([\d_]+))?/.test(F),X=!I&&/(iPhone\sOS)\s([\d_]+)/.test(F),H=I||J||X,G=/(Android);?[\s\/]+([\d.]+)?/.test(F),K=/micromessenger/i.test(F),V=/QQ\/([\d\.]+)/.test(F),Y=/Qzone\//.test(F),$=/MQQBrowser/i.test(F)&&!K&&!V,ee=/UCBrowser/i.test(F),te=/mobile.*baidubrowser/i.test(F),ne=/SogouMobileBrowser/i.test(F),re={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,r,o,i,a,c,u="",l=0;for(e=re._utf8_encode(e);l<e.length;)t=e.charCodeAt(l++),n=e.charCodeAt(l++),r=e.charCodeAt(l++),o=t>>2,i=(3&t)<<4|n>>4,a=(15&n)<<2|r>>6,c=63&r,isNaN(n)?a=c=64:isNaN(r)&&(c=64),u=u+this._keyStr.charAt(o)+this._keyStr.charAt(i)+this._keyStr.charAt(a)+this._keyStr.charAt(c);return u},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t}},oe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ie=function(){function e(t){p(this,e),this._shareData=null,this.initShareData()}return oe(e,[{key:"initShareData",value:function(){var e=document.querySelector("meta[name=description]"),t=document.querySelector("link[rel*=icon]"),n="from https://github.com/fa-ge/NativeShare",o="";e&&(n=e.getAttribute("content")),t&&(o=t.getAttribute("href")),this._shareData={link:location.href,title:document.title,desc:n,icon:o,from:"",success:r,fail:r,cancel:r,trigger:r}}},{key:"getShareData",value:function(){return i({},this._shareData)}},{key:"setShareData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this._shareData,e)}}]),e}(),ae=ie,ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ue=function(e){function t(e){b(this,t);var n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o("https://jsapi.qq.com/get?api=app.share"),n}return d(t,e),ce(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];browser.app.share({title:n.title,description:n.desc,url:n.link,img_url:n.icon,from:n.from,to_app:r})}}]),t}(ae);ue.commamdMap=(Z={},h(Z,"wechattimeline",8),h(Z,"wechatfriend",1),h(Z,"qqfriend",4),h(Z,"qzone",3),h(Z,"weibo",11),h(Z,"copyurl",10),h(Z,"more",5),h(Z,"generateqrcode",7),h(Z,"default",void 0),Z);var le,se=ue,fe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),pe=function(e){function t(e){return m(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return g(t,e),fe(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];ucbrowser.web_shareEX?ucbrowser.web_shareEX(JSON.stringify({title:n.title,content:n.desc,sourceUrl:n.link,imageUrl:n.icon,source:n.from,target:r})):ucbrowser.web_share(title,desc,link,r,"",from,"")}}]),t}(ae);pe.commamdMap=(le={},v(le,"wechattimeline","kWeixinFriend"),v(le,"wechatfriend","kWeixin"),v(le,"qqfriend","kQQ"),v(le,"qzone","kQZone"),v(le,"weibo","kSinaWeibo"),v(le,"default",void 0),le);var he,be=pe,ye=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),de=function(e){function t(e){return O(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return S(t,e),ye(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];ucweb.startRequest("shell.page_share",[n.title,n.desc,n.link,r,"",n.from,n.icon])}}]),t}(ae);de.commamdMap=(he={},_(he,"wechattimeline","WechatTimeline"),_(he,"wechatfriend","WechatFriends"),_(he,"qqfriend","QQ"),_(he,"qzone","Qzone"),_(he,"weibo","SinaWeibo"),_(he,"default",""),he);var ve=de,me=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),we=function(e){function t(e){return k(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return q(t,e),me(t,[{key:"call",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setShareData(t);var n=this.getShareData();_flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify({title:n.title,content:n.desc,landurl:n.link,imageurl:n.icon,shareSource:n.from}),"")}}]),t}(ae),ge=we,_e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Oe=function(e){function t(e){return C(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return x(t,e),_e(t,[{key:"call",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setShareData(t);var n=this.getShareData();SogouMse.Utility.shareWithInfo({shareTitle:n.title,shareContent:n.desc,shareImageUrl:n.icon,shareUrl:n.link})}}]),t}(ae),je=Oe,Se=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ke=function(e){function t(e){D(this,t);var n=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(Object(e).wechatConfig),n}return M(t,e),Se(t,[{key:"call",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setShareData(t)}},{key:"init",value:function(e){var t=this;o("https://res.wx.qq.com/open/js/jweixin-1.2.0.js",function(){wx.config(i({debug:!1,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]},e));var n=t._shareData,r={title:n.title,desc:n.desc,link:n.link,imgUrl:n.icon,type:n.type,dataUrl:n.dataUrl,success:n.success,cancel:n.cancel,fail:n.fail};Object.defineProperty(r,"trigger",{get:function(){return function(){n.trigger.apply(n,arguments),i(r,n)}},set:function(e){n.trigger=e},enumerable:!0}),wx.ready(function(){wx.onMenuShareAppMessage(r),wx.onMenuShareQQ(r),wx.onMenuShareQZone(r),wx.onMenuShareWeibo(r),wx.onMenuShareTimeline(r)})})}}]),t}(ae),Pe=ke,qe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ce=function(e){function t(e){return Q(this,t),A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return N(t,e),qe(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=String(e).toLowerCase(),this.setShareData(t);var n=this.getShareData();if("weibo"!==e)throw"qqfriend"===e?l(n):"qzone"===e&&s(n),new Error("the browser may not support command "+e+"!");f(n)}}]),t}(ae),Ee=Ce,xe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),De=function(e){function t(e){R(this,t);var n=U(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return W(t,e),xe(t,[{key:"call",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});this.setShareData(e),mqq.ui.showShareMenu()}},{key:"init",value:function(){var e=this;o("https://open.mobile.qq.com/sdk/qqapi.js",function(){var t=e._shareData;mqq.ui.setOnShareHandler(function(e){mqq.ui.shareMessage({back:!0,share_type:e,title:t.title,desc:t.desc,share_url:t.link,image_url:t.icon},function(e){var n=e.retCode;0===n?t.success.call(this):1===n?t.cancel.call(this):t.fail.call(this)})})})}}]),t}(ae),Te=De,Me=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Qe=function(e){function t(e){z(this,t);var n=B(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return L(t,e),Me(t,[{key:"call",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});i(this._shareData,t);for(var n=this.getShareData(),r=[],o=[],a=[],c=[],u=0;u<5;u++)r.push(n.icon),c.push(n.link),o.push(n.title),a.push(n.desc);QZAppExternal.setShare(function(t){0!=t.code&&(e.hasSomethingWrong=!0)},{type:"share",image:r,title:o,summary:a,shareURL:c})}},{key:"setShareData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{this.call("default",e)}catch(e){}}},{key:"init",value:function(){var e=this;o("https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js",function(){e.call("default")})}}]),t}(ae),Ae=Qe,Ne=void 0;Ne=K?Pe:V&&H?Te:Y?Ae:$?se:ee&&H?be:ee&&G?ve:te&&G?ge:ne&&H?je:Ee,window.NativeShare=Ne,t.default=Ne}])});