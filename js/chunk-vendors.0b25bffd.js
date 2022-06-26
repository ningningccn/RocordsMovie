(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var i=n("b622"),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var i=n("e330"),r=n("59ed"),s=n("40d5"),o=i(i.bind);e.exports=function(e,t){return r(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var i=n("83ab"),r=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),l=n("1a2d"),u=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!r(s.f,e,t),e[t])}},"07fa":function(e,t,n){var i=n("50c4");e.exports=function(e){return i(e.length)}},"0cfb":function(e,t,n){var i=n("83ab"),r=n("d039"),s=n("cc12");e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var i=n("da84"),r=i.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,n){var i=n("da84"),r=n("3a9b"),s=i.TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var i=n("e330"),r=n("7b0b"),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},"1be4":function(e,t,n){var i=n("d066");e.exports=i("document","documentElement")},"1c7e":function(e,t,n){var i=n("b622"),r=i("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(c){}return n}},"1cdc":function(e,t,n){var i=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},"1d80":function(e,t,n){var i=n("da84"),r=i.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return P})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return H})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return B})),n.d(t,"q",(function(){return J})),n.d(t,"r",(function(){return _})),n.d(t,"s",(function(){return R})),n.d(t,"t",(function(){return y})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return v})),n.d(t,"x",(function(){return O})),n.d(t,"y",(function(){return b})),n.d(t,"z",(function(){return A})),n.d(t,"A",(function(){return S})),n.d(t,"B",(function(){return D})),n.d(t,"C",(function(){return U})),n.d(t,"D",(function(){return q})),n.d(t,"E",(function(){return N})),n.d(t,"F",(function(){return Y})),n.d(t,"G",(function(){return K})),n.d(t,"H",(function(){return x}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const l=r<e.length,u=l?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==u){const e=c<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=o(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?k(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new C(i,o,n);return a}}function k(e,t){return e.replace(I,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return JSON.parse(e)}function x(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=S(h(s[0])||""),n=S(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},A=function(e){const t=j(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},R=function(e){const t=j(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function M(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(F(n)&&F(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function B(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function H(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=V(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=z),void 0===i.error&&(i.error=z),void 0===i.complete&&(i.complete=z);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Y=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var i=n("da84"),r=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),l=n("07fa"),u=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=i.TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,n){var i,_,v,y,b,w,O,E=n&&n.that,C=!(!n||!n.AS_ENTRIES),T=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),I=r(t,E),S=function(e){return i&&f(i,"normal",e),new m(!0,e)},x=function(e){return C?(o(e),k?I(e[0],e[1],S):I(e[0],e[1])):k?I(e,S):I(e)};if(T)i=e;else{if(_=d(e),!_)throw p(a(e)+" is not iterable");if(c(_)){for(v=0,y=l(e);y>v;v++)if(b=x(e[v]),b&&u(g,b))return b;return new m(!1)}i=h(e,_)}w=i.next;while(!(O=s(w,i)).done){try{b=x(O.value)}catch(j){f(i,"throw",j)}if("object"==typeof b&&b&&u(g,b))return b}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n("1fd5");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var i=n("5926"),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},"23e7":function(e,t,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),l=n("94ca");e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,_=e.stat;if(u=g?i:_?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=r(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(_?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},"241c":function(e,t,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},"260b":function(e,t,n){"use strict";var i=n("589b");n.d(t,"a",(function(){return i["e"]}));var r="firebase",s="9.6.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(i["f"])(r,s,"app")},2626:function(e,t,n){"use strict";var i=n("d066"),r=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=i(e),n=r.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var i=n("c65b"),r=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;r(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=i(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return r(o),n}},"2ba4":function(e,t,n){var i=n("40d5"),r=Function.prototype,s=r.apply,o=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},"2cf4":function(e,t,n){var i,r,s,o,a=n("da84"),c=n("2ba4"),l=n("0366"),u=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("d6d6"),_=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,w=a.process,O=a.Dispatch,E=a.Function,C=a.MessageChannel,T=a.String,k=0,I={},S="onreadystatechange";try{i=a.location}catch(P){}var x=function(e){if(h(I,e)){var t=I[e];delete I[e],t()}},j=function(e){return function(){x(e)}},A=function(e){x(e.data)},R=function(e){a.postMessage(T(e),i.protocol+"//"+i.host)};y&&b||(y=function(e){g(arguments.length,1);var t=u(e)?e:E(e),n=p(arguments,1);return I[++k]=function(){c(t,void 0,n)},r(k),k},b=function(e){delete I[e]},v?r=function(e){w.nextTick(j(e))}:O&&O.now?r=function(e){O.now(j(e))}:C&&!_?(s=new C,o=s.port2,s.port1.onmessage=A,r=l(o.postMessage,o)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!d(R)?(r=R,a.addEventListener("message",A,!1)):r=S in m("script")?function(e){f.appendChild(m("script"))[S]=function(){f.removeChild(this),x(e)}}:function(e){setTimeout(j(e),0)}),e.exports={set:y,clear:b}},"2d00":function(e,t,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},"342f":function(e,t,n){var i=n("d066");e.exports=i("navigator","userAgent")||""},"35a1":function(e,t,n){var i=n("f5df"),r=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return r(e,a)||r(e,"@@iterator")||s[i(e)]}},"37e8":function(e,t,n){var i=n("83ab"),r=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");t.f=i&&!r?Object.defineProperties:function(e,t){o(e);var n,i=a(t),r=c(t),l=r.length,u=0;while(l>u)s.f(e,n=r[u++],i[n]);return e}},"3a9b":function(e,t,n){var i=n("e330");e.exports=i({}.isPrototypeOf)},"3bbe":function(e,t,n){var i=n("da84"),r=n("1626"),s=i.String,o=i.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var i=n("6547").charAt,r=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,l=s.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:r(e),index:0})}),(function(){var e,t=l(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=i(n,r),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("abc5");const r="devtools-plugin:setup",s="plugin:settings:set";class o{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const i="__vue-devtools-plugin-settings__"+e.id;let r=Object.assign({},n);try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(r,t)}catch(o){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(o){}r=e}},t&&t.on(s,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function a(e,t){const n=e,s=Object(i["b"])(),a=Object(i["a"])(),c=i["c"]&&n.enableEarlyProxy;if(!a||!s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new o(n,a):null,i=s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else a.emit(r,e,t)}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var i=n("d039");e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var i=n("da84"),r=n("e330"),s=n("d039"),o=n("c6b6"),a=i.Object,c=r("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var i=n("b622"),r=n("7c73"),s=n("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var i=n("da84");e.exports=function(e,t){var n=i.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var i=n("825a"),r=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=i(e).constructor;return void 0===s||void 0==(n=i(s)[o])?t:r(n)}},"485a":function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("1626"),o=n("861d"),a=i.TypeError;e.exports=function(e,t){var n,i;if("string"===t&&s(n=e.toString)&&!o(i=r(n,e)))return i;if(s(n=e.valueOf)&&!o(i=r(n,e)))return i;if("string"!==t&&s(n=e.toString)&&!o(i=r(n,e)))return i;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var i=n("2d00"),r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"4d64":function(e,t,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=i(t),l=s(c),u=r(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5087:function(e,t,n){var i=n("da84"),r=n("68ee"),s=n("0d51"),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var i=n("5926"),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return go})),n.d(t,"b",(function(){return Io})),n.d(t,"c",(function(){return bo})),n.d(t,"d",(function(){return Do})),n.d(t,"e",(function(){return To})),n.d(t,"f",(function(){return _o})),n.d(t,"g",(function(){return So})),n.d(t,"h",(function(){return mo})),n.d(t,"i",(function(){return vo})),n.d(t,"j",(function(){return yo}));var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["H"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["A"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),g=new o["b"]("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),v=function(e){const t=Object(s["G"])(e),n=new s["d"];n.update(t);const i=n.digest();return s["g"].encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?Object(s["H"])(i):i,t+=" "}return t};let b=null,w=!0;const O=function(e,t){Object(s["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["a"].VERBOSE,b=g.log.bind(g),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},E=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&O(!0)),b){const t=y.apply(null,e);b(t)}},C=function(e){return function(...t){E(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);g.error(t)},k=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw g.error(t),new Error(t)},I=function(...e){const t="FIREBASE WARNING: "+y(...e);g.warn(t)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&I("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},j=function(e){if(Object(s["x"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},A="[MIN_NAME]",R="[MAX_NAME]",P=function(e,t){if(e===t)return 0;if(e===A||t===R)return-1;if(t===A||e===R)return 1;{const n=V(e),i=V(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},N=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["H"])(t))},D=function(e){if("object"!==typeof e||null===e)return Object(s["H"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(s["H"])(t[i]),n+=":",n+=D(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){Object(s["e"])(!x(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},B=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const W=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,$=2147483647,V=function(e){if(W.test(e)){const t=Number(e);if(t>=H&&t<=$)return t}return null},z=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw I("Exception was thrown by user callback.",e),t},Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},K=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){I(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',I(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="5",Z="v",ee="s",te="r",ne="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,re="ls",se="p",oe="ac",ae="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function he(e,t,n){let i;if(Object(s["e"])("string"===typeof t,"typeof type must == string"),Object(s["e"])("object"===typeof n,"typeof params must == object"),t===ae)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);const r=[];return F(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},pe={};function me(e){const t=e.toString();return fe[t]||(fe[t]=new de),fe[t]}function ge(e,t){const n=e.toString();return pe[n]||(pe[n]=t()),pe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&z(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="start",ye="close",be="pLPCommand",we="pRTLPCB",Oe="id",Ee="pw",Ce="ser",Te="cb",ke="seg",Ie="ts",Se="d",xe="dframe",je=1870,Ae=30,Re=je-Ae,Pe=25e3,Ne=3e4;class Le{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[oe]=this.appCheckToken),he(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ne)),j(()=>{if(this.isClosed_)return;this.scriptTagHolder=new De((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=i;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ve]="t",e[Ce]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Z]=X,this.transportSessionId&&(e[ee]=this.transportSessionId),this.lastSessionId&&(e[re]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[oe]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[te]=ne);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!Object(s["x"])()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!B())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["i"])(t),i=M(n,Re);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["x"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[xe]="t",n[Oe]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["H"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class De{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["x"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[be+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=De.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){E("frame writing exception"),r.stack&&E(r.stack),E(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Oe]=this.myID,e[Ee]=this.myPW,e[Ce]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ae+n.length<=je))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+i+"="+e.seg+"&"+Ie+i+"="+e.ts+"&"+Se+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Pe)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){Object(s["x"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=16384,Fe=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class qe{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=me(t),this.connURL=qe.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={};return r[Z]=X,!Object(s["x"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(r[te]=ne),t&&(r[ee]=t),n&&(r[re]=n),i&&(r[oe]=i),he(e,ae,r)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(s["x"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${X}/${l}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:""}),r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(n["proxy"]={origin:r}),this.mySock=new Ue(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ue(this.connURL,[],e)}}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!qe.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["A"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Me);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,qe]}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||I("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of Be.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=6e4,He=5e3,$e=10240,Ve=102400,ze="t",Ge="d",Ke="s",Ye="r",Je="e",Qe="o",Xe="a",Ze="n",et="p",tt="h";class nt{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new Be(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=K(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ve?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$e?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ze in e){const t=e[ze];t===Xe?this.upgradeIfSecondaryHealthy_():t===Ye?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ze,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(ze,e);if(Ge in e){const n=e[Ge];if(t===tt)this.onHandshake_(n);else if(t===Ze){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ke?this.onConnectionShutdown_(n):t===Ye?this.onReset_(n):t===Je?T("Server Error: "+n):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&I("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),K(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(We))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):K(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){Object(s["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends rt{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["w"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new st}getInitialEvent(e){return Object(s["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=32,at=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ct("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ht(e){return e.pieces_.length-e.pieceNum_}function dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function _t(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ut(e),i=ut(t);if(null===n)return t;if(n===i)return yt(dt(e),dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(ht(e)!==ht(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function wt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ht(e)>ht(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ot{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["F"])(this.parts_[n]);Tt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["F"])(t),Tt(e)}function Ct(e){const t=e.parts_.pop();e.byteLength_-=Object(s["F"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>at)throw new Error(e.errorPrefix_+"has a key path longer than "+at+" bytes ("+e.byteLength_+").");if(e.parts_.length>ot)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ot+") or object contains a cycle "+kt(e))}function kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends rt{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new It}getInitialEvent(e){return Object(s["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1e3,xt=3e5,jt=3e3,At=3e4,Rt=1.3,Pt=3e4,Nt="server_kill",Lt=3;class Dt extends it{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Dt.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=St,this.maxReconnectDelay_=xt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["x"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");It.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Object(s["H"])(r)),Object(s["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},jt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["e"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,r=>{const s=r["d"],o=r["s"];Dt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["j"])(e,"w")){const n=Object(s["E"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();I(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["s"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["z"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["H"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+Object(s["H"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Pt&&(this.reconnectDelay_=St),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new nt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{I(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Nt)},r))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&I(T),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["u"])(this.interruptReasons_)&&(this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>D(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lt&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["x"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(s["w"])()?e["framework.cordova"]=1:Object(s["y"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return Object(s["u"])(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0,Dt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Mt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Mt(A,e),i=new Mt(A,t);return 0!==this.compare(n,i)}minPost(){return Mt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class qt extends Ft{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return P(e.name,t.name)}isDefinedOn(e){throw Object(s["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Mt.MIN}maxPost(){return new Mt(R,Ut)}makePost(e,t){return Object(s["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Mt(e,Ut)}toString(){return".key"}}const Bt=new qt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=i?i:Vt.EMPTY_NODE,this.right=null!=r?r:Vt.EMPTY_NODE}copy(e,t,n,i,r){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Vt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class $t{copy(e,t,n,i,r){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,t=Vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return P(e.name,t.name)}function Gt(e,t){return P(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;function Yt(e){Kt=e}Vt.EMPTY_NODE=new $t;const Jt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Qt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["j"])(t,".sv"),"Priority must be a string or number.")}else Object(s["e"])(e===Kt||e.isEmpty(),"priority of unexpected type.");Object(s["e"])(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xt,Zt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qt(this.priorityNode_)}static set __childrenNodeConstructor(e){Xt=e}static get __childrenNodeConstructor(){return Xt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ut(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["e"])(".priority"!==n||1===ht(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:(Object(s["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=tn.VALUE_TYPE_ORDER.indexOf(t),r=tn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["e"])(i>=0,"Unknown leaf type: "+t),Object(s["e"])(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Zt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ft{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Mt.MIN}maxPost(){return new Mt(R,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Zt(e);return new Mt(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Ht(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ht.BLACK):(a(i,Ht.BLACK),a(i,Ht.RED))}return s},o=new cn(e.length),a=s(o);return new Vt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["e"])(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(e){const t=Object(s["E"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vt?t:null}hasIndex(e){return Object(s["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["e"])(e!==Bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Mt.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?ln(n,e.getCompare()):hn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new dn(u,l)}addToIndexes(e,t){const n=Object(s["B"])(this.indexes_,(n,i)=>{const r=Object(s["E"])(this.indexSet_,i);if(Object(s["e"])(r,"Missing index implementation for "+i),n===hn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Mt.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ln(n,r.getCompare())}return hn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Mt(e.name,i))),r.insert(e,e.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["B"])(this.indexes_,n=>{if(n===hn)return n;{const i=t.get(e.name);return i?n.remove(new Mt(e.name,i)):n}});return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qt(this.priorityNode_),this.children_.isEmpty()&&Object(s["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new Vt(Gt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new pn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Mt(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?fn:this.priorityNode_;return new pn(i,s,r)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{Object(s["e"])(".priority"!==ut(e)||1===ht(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(on,(s,o)=>{t[s]=o.val(e),n++,r&&pn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(on,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Mt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Mt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Mt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===Bt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Bt?null:this.indexMap_.get(e.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends pn{constructor(){super(new Vt(Gt),pn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pn.EMPTY_NODE}isEmpty(){return!1}}const gn=new mn;Object.defineProperties(Mt,{MIN:{value:new Mt(A,pn.EMPTY_NODE)},MAX:{value:new Mt(R,gn)}}),qt.__EMPTY_NODE=pn.EMPTY_NODE,tn.__childrenNodeConstructor=pn,Yt(gn),rn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=!0;function vn(e,t=null){if(null===e)return pn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,vn(t))}if(e instanceof Array||!_n){let n=pn.EMPTY_NODE;return F(e,(t,i)=>{if(Object(s["j"])(e,t)&&"."!==t.substring(0,1)){const e=vn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(vn(t))}{const n=[];let i=!1;const r=e;if(F(r,(e,t)=>{if("."!==e.substring(0,1)){const r=vn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Mt(e,r)))}}),0===n.length)return pn.EMPTY_NODE;const s=ln(n,zt,e=>e.name,Gt);if(i){const e=ln(n,on.getCompare());return new pn(s,vn(t),new dn({".priority":e},{".priority":on}))}return new pn(s,vn(t),dn.Default)}}nn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Ft{constructor(e){super(),this.indexPath_=e,Object(s["e"])(!vt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}makePost(e,t){const n=vn(e),i=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Mt(t,i)}maxPost(){const e=pn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Mt(R,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ft{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?P(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Mt.MIN}maxPost(){return Mt.MAX}makePost(e,t){const n=vn(e);return new Mt(t,n)}toString(){return".value"}}const wn=new bn,On="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",En=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=On.charAt(n%64),n=Math.floor(n/64);Object(s["e"])(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=On.charAt(t[r]);return Object(s["e"])(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function kn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function In(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){Object(s["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(kn(t,a)):Object(s["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(In(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,(e,i)=>{t.hasChild(e)||n.trackChildChange(kn(e,i))}),t.isLeafNode()||t.forEachChild(on,(t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(In(t,i,r))}else n.trackChildChange(Tn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.indexedFilter_=new xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=jn.getStartPost_(e),this.endPost_=jn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Mt(t,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(pn.EMPTY_NODE);const r=this;return t.forEachChild(on,(e,t)=>{r.matches(new Mt(e,t))||(i=i.updateImmediateChild(e,pn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.rangedFilter_=new jn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Mt(t,n))||(n=pn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=pn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(pn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&r(t,n)<=0;c?o++:i=i.updateImmediateChild(t.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["e"])(a.numChildren()===this.limit_,"");const c=new Mt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(In(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(kn(t,e));const n=a.updateImmediateChild(t,pn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Tn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=r&&(r.trackChildChange(kn(l.name,l.node)),r.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,pn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pn(e){return e.loadsAllData()?new xn(e.getIndex()):e.hasLimit()?new An(e):new jn(e)}function Nn(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Ln(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function Dn(e,t){const n=e.copy();return n.index_=t,n}function Mn(e){const t={};if(e.isDefault())return t;let n;return e.index_===on?n="$priority":e.index_===wn?n="$value":e.index_===Bt?n="$key":(Object(s["e"])(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["H"])(n),e.startSet_&&(t["startAt"]=Object(s["H"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(s["H"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(s["H"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(s["H"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Fn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends it{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Un.getListenId_(e,n),a={};this.listens_[o]=a;const c=Mn(e._queryParams);this.restRequest_(r+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),Object(s["E"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=Un.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mn(e._queryParams),n=e._path.toString(),i=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["C"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["A"])(a.responseText)}catch(e){I("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&I("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return{value:null,children:new Map}}function Wn(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ut(t);e.children.has(i)||e.children.set(i,Bn());const r=e.children.get(i);t=dt(t),Wn(r,t,n)}}function Hn(e,t,n){null!==e.value?n(t,e.value):$n(e,(e,i)=>{const r=new ct(t.toString()+"/"+e);Hn(i,r,n)})}function $n(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e4,Gn=3e4,Kn=3e5;class Yn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vn(e);const n=zn+(Gn-zn)*Math.random();K(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,i)=>{i>0&&Object(s["j"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),K(this.reportStats_.bind(this),Math.floor(2*Math.random()*Kn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn;function Qn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Jn||(Jn={}));class ei{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Jn.ACK_USER_WRITE,this.source=Qn()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return Object(s["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new ei(lt(),t,this.revert)}}return Object(s["e"])(ut(this.path)===e,"operationForChild called for unrelated child."),new ei(dt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Jn.OVERWRITE}operationForChild(e){return vt(this.path)?new ti(this.source,lt(),this.snap.getImmediateChild(e)):new ti(this.source,dt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Jn.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new ti(this.source,lt(),t.value):new ni(this.source,lt(),t)}return Object(s["e"])(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ni(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function si(e,t,n,i){const r=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Sn(t.childName,t.snapshotNode))}),oi(e,r,"child_removed",t,i,n),oi(e,r,"child_added",t,i,n),oi(e,r,"child_moved",s,i,n),oi(e,r,"child_changed",t,i,n),oi(e,r,"value",t,i,n),r}function oi(e,t,n,i,r,s){const o=i.filter(e=>e.type===n);o.sort((t,n)=>ci(e,t,n)),o.forEach(n=>{const i=ai(e,n,s);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}function ai(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ci(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["f"])("Should only compare child_ events.");const i=new Mt(t.childName,t.snapshotNode),r=new Mt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e,t){return{eventCache:e,serverCache:t}}function ui(e,t,n,i){return li(new ii(t,n,i),e.serverCache)}function hi(e,t,n,i){return li(e.eventCache,new ii(t,n,i))}function di(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;const mi=()=>(pi||(pi=new Vt(N)),pi);class gi{constructor(e,t=mi()){this.value=e,this.children=t}static fromObject(e){let t=new gi(null);return F(e,(e,n)=>{t=t.set(new ct(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(vt(e))return null;{const n=ut(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(dt(e),t);if(null!=r){const e=_t(new ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(vt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(dt(e)):new gi(null)}}set(e,t){if(vt(e))return new gi(t,this.children);{const n=ut(e),i=this.children.get(n)||new gi(null),r=i.set(dt(e),t),s=this.children.insert(n,r);return new gi(this.value,s)}}remove(e){if(vt(e))return this.children.isEmpty()?new gi(null):new gi(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const i=n.remove(dt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new gi(null):new gi(this.value,r)}return this}}get(e){if(vt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ut(e),i=this.children.get(n)||new gi(null),r=i.setTree(dt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new gi(this.value,s)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(_t(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(vt(e))return null;{const i=ut(e),r=this.children.get(i);return r?r.findOnPath_(dt(e),_t(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const i=ut(e),r=this.children.get(i);return r?r.foreachOnPath_(dt(e),_t(t,i),n):new gi(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(_t(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.writeTree_=e}static empty(){return new _i(new gi(null))}}function vi(e,t,n){if(vt(t))return new _i(new gi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=yt(r,t);return s=s.updateChild(o,n),new _i(e.writeTree_.set(r,s))}{const i=new gi(n),r=e.writeTree_.setTree(t,i);return new _i(r)}}}function yi(e,t,n){let i=e;return F(n,(e,n)=>{i=vi(i,_t(t,e),n)}),i}function bi(e,t){if(vt(t))return _i.empty();{const n=e.writeTree_.setTree(t,new gi(null));return new _i(n)}}function wi(e,t){return null!=Oi(e,t)}function Oi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function Ei(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,(e,n)=>{t.push(new Mt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Mt(e,n.value))}),t}function Ci(e,t){if(vt(t))return e;{const n=Oi(e,t);return new _i(null!=n?new gi(n):e.writeTree_.subtree(t))}}function Ti(e){return e.writeTree_.isEmpty()}function ki(e,t){return Ii(lt(),e.writeTree_,t)}function Ii(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,r)=>{".priority"===t?(Object(s["e"])(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ii(_t(e,t),r,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(_t(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e,t){return Ji(t,e)}function xi(e,t,n,i,r){Object(s["e"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=vi(e.visibleWrites,t,n)),e.lastWriteId=i}function ji(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Ai(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["e"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ri(t,i.path)?r=!1:wt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Pi(e),!0;if(i.snap)e.visibleWrites=bi(e.visibleWrites,i.path);else{const t=i.children;F(t,t=>{e.visibleWrites=bi(e.visibleWrites,_t(i.path,t))})}return!0}return!1}function Ri(e,t){if(e.snap)return wt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&wt(_t(e.path,n),t))return!0;return!1}function Pi(e){e.visibleWrites=Li(e.allWrites,Ni,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ni(e){return e.visible}function Li(e,t,n){let i=_i.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)wt(n,e)?(t=yt(n,e),i=vi(i,t,o.snap)):wt(e,n)&&(t=yt(e,n),i=vi(i,lt(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["f"])("WriteRecord should have .snap or .children");if(wt(n,e))t=yt(n,e),i=yi(i,t,o.children);else if(wt(e,n))if(t=yt(e,n),vt(t))i=yi(i,lt(),o.children);else{const e=Object(s["E"])(o.children,ut(t));if(e){const n=e.getChild(dt(t));i=vi(i,lt(),n)}}}}}return i}function Di(e,t,n,i,r){if(i||r){const s=Ci(e.visibleWrites,t);if(!r&&Ti(s))return n;if(r||null!=n||wi(s,lt())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=Li(e.allWrites,s,t),a=n||pn.EMPTY_NODE;return ki(o,a)}return null}{const i=Oi(e.visibleWrites,t);if(null!=i)return i;{const i=Ci(e.visibleWrites,t);if(Ti(i))return n;if(null!=n||wi(i,lt())){const e=n||pn.EMPTY_NODE;return ki(i,e)}return null}}}function Mi(e,t,n){let i=pn.EMPTY_NODE;const r=Oi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(on,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const r=Ci(e.visibleWrites,t);return n.forEachChild(on,(e,t)=>{const n=ki(Ci(r,new ct(e)),t);i=i.updateImmediateChild(e,n)}),Ei(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=Ci(e.visibleWrites,t);return Ei(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Fi(e,t,n,i,r){Object(s["e"])(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=_t(t,n);if(wi(e.visibleWrites,o))return null;{const t=Ci(e.visibleWrites,o);return Ti(t)?r.getChild(n):ki(t,r.getChild(n))}}function Ui(e,t,n,i){const r=_t(t,n),s=Oi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Ci(e.visibleWrites,r);return ki(t,i.getNode().getImmediateChild(n))}return null}function qi(e,t){return Oi(e.visibleWrites,t)}function Bi(e,t,n,i,r,s,o){let a;const c=Ci(e.visibleWrites,t),l=Oi(c,lt());if(null!=l)a=l;else{if(null==n)return[];a=ki(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function Wi(){return{visibleWrites:_i.empty(),allWrites:[],lastWriteId:-1}}function Hi(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function $i(e,t){return Mi(e.writeTree,e.treePath,t)}function Vi(e,t,n,i){return Fi(e.writeTree,e.treePath,t,n,i)}function zi(e,t){return qi(e.writeTree,_t(e.treePath,t))}function Gi(e,t,n,i,r,s){return Bi(e.writeTree,e.treePath,t,n,i,r,s)}function Ki(e,t,n){return Ui(e.writeTree,e.treePath,t,n)}function Yi(e,t){return Ji(_t(e.treePath,t),e.writeTree)}function Ji(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,In(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,kn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(s["f"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,In(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Zi=new Xi;class er{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ki(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fi(this.viewCache_),r=Gi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){return{filter:e}}function nr(e,t){Object(s["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ir(e,t,n,i,r){const o=new Qi;let a,c;if(n.type===Jn.OVERWRITE){const l=n;l.source.fromUser?a=ar(e,t,l.path,l.snap,i,r,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!vt(l.path),a=or(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===Jn.MERGE){const l=n;l.source.fromUser?a=lr(e,t,l.path,l.children,i,r,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=hr(e,t,l.path,l.children,i,r,c,o))}else if(n.type===Jn.ACK_USER_WRITE){const s=n;a=s.revert?pr(e,t,s.path,i,r,o):dr(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==Jn.LISTEN_COMPLETE)throw Object(s["f"])("Unknown operation type: "+n.type);a=fr(e,t,n.path,i,o)}const l=o.getChanges();return rr(t,a,l),{viewCache:a,changes:l}}function rr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=di(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Cn(di(t)))}}function sr(e,t,n,i,r,o){const a=t.eventCache;if(null!=zi(i,n))return t;{let c,l;if(vt(n))if(Object(s["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=fi(t),r=n instanceof pn?n:pn.EMPTY_NODE,s=$i(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=Hi(i,fi(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ut(n);if(".priority"===u){Object(s["e"])(1===ht(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=Vi(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=dt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Vi(i,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Ki(i,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return ui(t,c,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function or(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(vt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ut(n);if(!c.isCompleteForPath(n)&&ht(n)>1)return t;const r=dt(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,Zi,null)}const h=hi(t,l,c.isFullyInitialized()||vt(n),u.filtersNodes()),d=new er(r,h,s);return sr(e,h,n,r,d,a)}function ar(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new er(r,t,s);if(vt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ui(t,l,!0,e.filter.filtersNodes());else{const r=ut(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ui(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=dt(n),l=a.getNode().getImmediateChild(r);let h;if(vt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(s)&&e.getChild(gt(s)).isEmpty()?e:e.updateChild(s,i):pn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=ui(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function cr(e,t){return e.eventCache.isCompleteForChild(t)}function lr(e,t,n,i,r,s,o){let a=t;return i.foreach((i,c)=>{const l=_t(n,i);cr(t,ut(l))&&(a=ar(e,a,l,c,r,s,o))}),i.foreach((i,c)=>{const l=_t(n,i);cr(t,ut(l))||(a=ar(e,a,l,c,r,s,o))}),a}function ur(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function hr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=vt(n)?i:new gi(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=ur(e,c,i);l=or(e,l,new ct(n),u,r,s,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=ur(e,c,i);l=or(e,l,new ct(n),u,r,s,o,a)}}),l}function dr(e,t,n,i,r,s,o){if(null!=zi(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(vt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return or(e,t,n,c.getNode().getChild(n),r,s,a,o);if(vt(n)){let i=new gi(null);return c.getNode().forEachChild(Bt,(e,t)=>{i=i.set(new ct(e),t)}),hr(e,t,n,i,r,s,a,o)}return t}{let l=new gi(null);return i.foreach((e,t)=>{const i=_t(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))}),hr(e,t,n,l,r,s,a,o)}}function fr(e,t,n,i,r){const s=t.serverCache,o=hi(t,s.getNode(),s.isFullyInitialized()||vt(n),s.isFiltered());return sr(e,o,n,i,Zi,r)}function pr(e,t,n,i,r,o){let a;if(null!=zi(i,n))return t;{const c=new er(i,t,r),l=t.eventCache.getNode();let u;if(vt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=Hi(i,fi(t));else{const e=t.serverCache.getNode();Object(s["e"])(e instanceof pn,"serverChildren would be complete if leaf node"),n=$i(i,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const r=ut(n);let s=Ki(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?e.filter.updateChild(l,r,s,dt(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,pn.EMPTY_NODE,dt(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Hi(i,fi(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=zi(i,lt()),ui(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new xn(n.getIndex()),r=Pn(n);this.processor_=tr(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),l=new ii(a,s.isFullyInitialized(),i.filtersNodes()),u=new ii(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=li(u,l),this.eventGenerator_=new ri(this.query_)}get query(){return this.query_}}function gr(e){return di(e.viewCache_)}function _r(e,t){const n=fi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function vr(e,t,n,i){t.type===Jn.MERGE&&null!==t.source.queryId&&(Object(s["e"])(fi(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["e"])(di(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=ir(e.processor_,r,t,n,i);return nr(e.processor_,o.viewCache),Object(s["e"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,yr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function yr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return si(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br,wr;class Or{constructor(){this.views=new Map}}function Er(e){Object(s["e"])(!br,"__referenceConstructor has already been defined"),br=e}function Cr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(s["e"])(null!=o,"SyncTree gave us an op for an invalid query."),vr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(vr(s,t,n,i));return r}}function Tr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Hi(n,r?i:null),s=!1;e?s=!0:i instanceof pn?(e=$i(n,i),s=!1):(e=pn.EMPTY_NODE,s=!1);const o=li(new ii(e,s,!1),new ii(i,r,!1));return new mr(t,o)}return o}function kr(e,t){let n=null;for(const i of e.views.values())n=n||_r(i,t);return n}function Ir(e){Object(s["e"])(!wr,"__referenceConstructor has already been defined"),wr=e}class Sr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new gi(null),this.pendingWriteTree_=Wi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xr(e,t,n,i,r){return xi(e.pendingWriteTree_,t,n,i,r),r?Mr(e,new ti(Qn(),t,n)):[]}function jr(e,t,n=!1){const i=ji(e.pendingWriteTree_,t),r=Ai(e.pendingWriteTree_,t);if(r){let t=new gi(null);return null!=i.snap?t=t.set(lt(),!0):F(i.children,e=>{t=t.set(new ct(e),!0)}),Mr(e,new ei(i.path,t,n))}return[]}function Ar(e,t,n){return Mr(e,new ti(Xn(),t,n))}function Rr(e,t,n){const i=gi.fromObject(n);return Mr(e,new ni(Xn(),t,i))}function Pr(e,t,n,i){const r=qr(e,i);if(null!=r){const i=Br(r),s=i.path,o=i.queryId,a=yt(s,t),c=new ti(Zn(o),a,n);return Wr(e,s,c)}return[]}function Nr(e,t,n,i){const r=qr(e,i);if(r){const i=Br(r),s=i.path,o=i.queryId,a=yt(s,t),c=gi.fromObject(n),l=new ni(Zn(o),a,c);return Wr(e,s,l)}return[]}function Lr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=yt(e,t),r=kr(n,i);if(r)return r});return Di(r,t,s,n,i)}function Dr(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const r=yt(e,n);i=i||kr(t,r)});let r=e.syncPointTree_.get(n);r?i=i||kr(r,lt()):(r=new Or,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new ii(i,!0,!1):null,a=Si(e.pendingWriteTree_,t._path),c=Tr(r,t,a,s?o.getNode():pn.EMPTY_NODE,s);return gr(c)}function Mr(e,t){return Fr(t,e.syncPointTree_,null,Si(e.pendingWriteTree_,lt()))}function Fr(e,t,n,i){if(vt(e.path))return Ur(e,t,n,i);{const r=t.get(lt());null==n&&null!=r&&(n=kr(r,lt()));let s=[];const o=ut(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Yi(i,o);s=s.concat(Fr(a,c,e,t))}return r&&(s=s.concat(Cr(r,e,i,n))),s}}function Ur(e,t,n,i){const r=t.get(lt());null==n&&null!=r&&(n=kr(r,lt()));let s=[];return t.children.inorderTraversal((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Yi(i,t),c=e.operationForChild(t);c&&(s=s.concat(Ur(c,r,o,a)))}),r&&(s=s.concat(Cr(r,e,i,n))),s}function qr(e,t){return e.tagToQueryMap.get(t)}function Br(e){const t=e.indexOf("$");return Object(s["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Wr(e,t,n){const i=e.syncPointTree_.get(t);Object(s["e"])(i,"Missing sync point for query tag that we're tracking");const r=Si(e.pendingWriteTree_,t);return Cr(i,n,r,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hr(t)}node(){return this.node_}}class $r{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new $r(this.syncTree_,t)}node(){return Lr(this.syncTree_,this.path_)}}const Vr=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},zr=function(e,t,n){return e&&"object"===typeof e?(Object(s["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Gr(e[".sv"],t,n):"object"===typeof e[".sv"]?Kr(e[".sv"],t):void Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Gr=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["e"])(!1,"Unexpected server value: "+e)}},Kr=function(e,t,n){e.hasOwnProperty("increment")||Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(s["e"])(!1,"Unexpected increment value: "+i);const r=t.node();if(Object(s["e"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Yr=function(e,t,n,i){return Qr(t,new $r(n,e),i)},Jr=function(e,t,n){return Qr(e,new Hr(t),n)};function Qr(e,t,n){const i=e.getPriority().val(),r=zr(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=zr(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new tn(s,vn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new tn(r))),i.forEachChild(on,(e,i)=>{const r=Qr(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Zr(e,t){let n=t instanceof ct?t:new ct(t),i=e,r=ut(n);while(null!==r){const e=Object(s["E"])(i.node.children,r)||{children:{},childCount:0};i=new Xr(r,i,e),n=dt(n),r=ut(n)}return i}function es(e){return e.node.value}function ts(e,t){e.node.value=t,cs(e)}function ns(e){return e.node.childCount>0}function is(e){return void 0===es(e)&&!ns(e)}function rs(e,t){F(e.node.children,(n,i)=>{t(new Xr(n,e,i))})}function ss(e,t,n,i){n&&!i&&t(e),rs(e,e=>{ss(e,t,!0,i)}),n&&i&&t(e)}function os(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function as(e){return new ct(null===e.parent?e.name:as(e.parent)+"/"+e.name)}function cs(e){null!==e.parent&&ls(e.parent,e.name,e)}function ls(e,t,n){const i=is(n),r=Object(s["j"])(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,cs(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,cs(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=/[\[\].#$\/\u0000-\u001F\u007F]/,hs=/[\[\].#$\u0000-\u001F\u007F]/,ds=10485760,fs=function(e){return"string"===typeof e&&0!==e.length&&!us.test(e)},ps=function(e){return"string"===typeof e&&0!==e.length&&!hs.test(e)},ms=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ps(e)},gs=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!x(e)||e&&"object"===typeof e&&Object(s["j"])(e,".sv")},_s=function(e,t,n,i){i&&void 0===t||vs(Object(s["o"])(e,"value"),t,n)},vs=function(e,t,n){const i=n instanceof ct?new Ot(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kt(i));if("function"===typeof t)throw new Error(e+"contains a function "+kt(i)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+kt(i));if("string"===typeof t&&t.length>ds/3&&Object(s["F"])(t)>ds)throw new Error(e+"contains a string greater than "+ds+" utf8 bytes "+kt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(F(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!fs(t)))throw new Error(e+" contains an invalid key ("+t+") "+kt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(i,t),vs(e,s,i),Ct(i)}),n&&r)throw new Error(e+' contains ".value" child '+kt(i)+" in addition to actual children.")}},ys=function(e,t,n,i){if((!i||void 0!==n)&&!fs(n))throw new Error(Object(s["o"])(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},bs=function(e,t,n,i){if((!i||void 0!==n)&&!ps(n))throw new Error(Object(s["o"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ws=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bs(e,t,n,i)},Os=function(e,t){if(".info"===ut(t))throw new Error(e+" failed = Can't modify data under /.info/")},Es=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!fs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!ms(n))throw new Error(Object(s["o"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ts(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||bt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function ks(e,t,n){Ts(e,n),Ss(e,e=>bt(e,t))}function Is(e,t,n){Ts(e,n),Ss(e,e=>wt(e,t)||wt(t,e))}function Ss(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(xs(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function xs(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&E("event: "+n.toString()),z(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="repo_interrupt",As=25;class Rs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Cs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bn(),this.transactionQueueTree_=new Xr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ps(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||G())e.server_=new Un(e.repoInfo_,(t,n,i,r)=>{Ds(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Ms(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["H"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Dt(e.repoInfo_,t,(t,n,i,r)=>{Ds(e,t,n,i,r)},t=>{Ms(e,t)},t=>{Fs(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ge(e.repoInfo_,()=>new Yn(e.stats_,e.server_)),e.infoData_=new qn,e.infoSyncTree_=new Sr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ar(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),Us(e,"connected",!1),e.serverSyncTree_=new Sr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{const s=r(n,i);Is(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ns(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Ls(e){return Vr({timestamp:Ns(e)})}function Ds(e,t,n,i,r){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=Object(s["B"])(n,e=>vn(e));a=Nr(e.serverSyncTree_,o,t,r)}else{const t=vn(n);a=Pr(e.serverSyncTree_,o,t,r)}else if(i){const t=Object(s["B"])(n,e=>vn(e));a=Rr(e.serverSyncTree_,o,t)}else{const t=vn(n);a=Ar(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Js(e,o)),Is(e.eventQueue_,c,a)}function Ms(e,t){Us(e,"connected",t),!1===t&&Hs(e)}function Fs(e,t){F(t,(t,n)=>{Us(e,t,n)})}function Us(e,t,n){const i=new ct("/.info/"+t),r=vn(n);e.infoData_.updateSnapshot(i,r);const s=Ar(e.infoSyncTree_,i,r);Is(e.eventQueue_,i,s)}function qs(e){return e.nextWriteId_++}function Bs(e,t){const n=Dr(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const i=vn(n).withIndex(t._queryParams.getIndex()),r=Ar(e.serverSyncTree_,t._path,i);return ks(e.eventQueue_,t._path,r),Promise.resolve(i)},n=>(Vs(e,"get for query "+Object(s["H"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Ws(e,t,n,i,r){Vs(e,"set",{path:t.toString(),value:n,priority:i});const s=Ls(e),o=vn(n,i),a=Lr(e.serverSyncTree_,t),c=Jr(o,a,s),l=qs(e),u=xr(e.serverSyncTree_,t,c,l,!0);Ts(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,i)=>{const s="ok"===n;s||I("set at "+t+" failed: "+n);const o=jr(e.serverSyncTree_,l,!s);Is(e.eventQueue_,t,o),zs(e,r,n,i)});const h=no(e,t);Js(e,h),Is(e.eventQueue_,h,[])}function Hs(e){Vs(e,"onDisconnectEvents");const t=Ls(e),n=Bn();Hn(e.onDisconnect_,lt(),(i,r)=>{const s=Yr(i,r,e.serverSyncTree_,t);Wn(n,i,s)});let i=[];Hn(n,lt(),(t,n)=>{i=i.concat(Ar(e.serverSyncTree_,t,n));const r=no(e,t);Js(e,r)}),e.onDisconnect_=Bn(),Is(e.eventQueue_,lt(),i)}function $s(e){e.persistentConnection_&&e.persistentConnection_.interrupt(js)}function Vs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function zs(e,t,n,i){t&&z(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}})}function Gs(e,t,n){return Lr(e.serverSyncTree_,t,n)||pn.EMPTY_NODE}function Ks(e,t=e.transactionQueueTree_){if(t||to(e,t),es(t)){const n=Zs(e,t);Object(s["e"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&Ys(e,as(t),n)}else ns(t)&&rs(t,t=>{Ks(e,t)})}function Ys(e,t,n){const i=n.map(e=>e.currentWriteId),r=Gs(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(s["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=yt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,i=>{Vs(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(jr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();to(e,Zr(e.transactionQueueTree_,t)),Ks(e,e.transactionQueueTree_),Is(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)z(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{I("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Js(e,t)}},a)}function Js(e,t){const n=Xs(e,t),i=as(n),r=Zs(e,n);return Qs(e,r,i),i}function Qs(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=yt(n,o.path);let u,h=!1;if(Object(s["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(jr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=As)h=!0,u="maxretry",r=r.concat(jr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Gs(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){vs("transaction failed: Data returned ",i,o.path);let t=vn(i);const c="object"===typeof i&&null!=i&&Object(s["j"])(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=Ls(e),h=Jr(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=qs(e),a.splice(a.indexOf(l),1),r=r.concat(xr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(jr(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(jr(e.serverSyncTree_,o.currentWriteId,!0))}Is(e.eventQueue_,n,r),r=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?i.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):i.push(()=>t[c].onComplete(new Error(u),!1,null))))}to(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)z(i[s]);Ks(e,e.transactionQueueTree_)}function Xs(e,t){let n,i=e.transactionQueueTree_;n=ut(t);while(null!==n&&void 0===es(i))i=Zr(i,n),t=dt(t),n=ut(t);return i}function Zs(e,t){const n=[];return eo(e,t,n),n.sort((e,t)=>e.order-t.order),n}function eo(e,t,n){const i=es(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);rs(t,t=>{eo(e,t,n)})}function to(e,t){const n=es(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ts(t,n.length>0?n:void 0)}rs(t,t=>{to(e,t)})}function no(e,t){const n=as(Xs(e,t)),i=Zr(e.transactionQueueTree_,t);return os(i,t=>{io(e,t)}),io(e,i),ss(i,t=>{io(e,t)}),n}function io(e,t){const n=es(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(jr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?ts(t,void 0):n.length=o+1,Is(e.eventQueue_,as(t),r);for(let e=0;e<i.length;e++)z(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function so(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):I(`Invalid query segment '${n}' in query '${e}'`)}return t}const oo=function(e,t){const n=ao(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new ct(n.pathString)}},ao=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=ro(e.substring(u,h)));const d=so(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return vt(this._path)?null:ft(this._path)}get ref(){return new fo(this._repo,this._path)}get _queryIdentifier(){const e=Fn(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return Fn(this._queryParams)}isEqual(e){if(e=Object(s["q"])(e),!(e instanceof co))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pt(this._path)}}function lo(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function uo(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Bt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==A)throw new Error(i);if("string"!==typeof t)throw new Error(r)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==R)throw new Error(i);if("string"!==typeof n)throw new Error(r)}}else if(e.getIndex()===on){if(null!=t&&!gs(t)||null!=n&&!gs(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(s["e"])(e.getIndex()instanceof yn||e.getIndex()===wn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ho(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class fo extends co{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=gt(this._path);return null===e?null:new fo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class po{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=go(this.ref,e);return new po(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new po(n,go(this.ref,t),on)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mo(e,t){return e=Object(s["q"])(e),e._checkNotDeleted("ref"),void 0!==t?go(e._root,t):e._root}function go(e,t){return e=Object(s["q"])(e),null===ut(e._path)?ws("child","path",t,!1):bs("child","path",t,!1),new fo(e._repo,_t(e._path,t))}function _o(e,t){e=Object(s["q"])(e),Os("push",e._path),_s("push",t,e._path,!0);const n=Ns(e._repo),i=En(n),r=go(e,i),o=go(e,i);let a;return a=null!=t?yo(o,t).then(()=>o):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function vo(e){return Os("remove",e._path),yo(e,null)}function yo(e,t){e=Object(s["q"])(e),Os("set",e._path),_s("set",t,e._path,!1);const n=new s["a"];return Ws(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function bo(e){return e=Object(s["q"])(e),Bs(e._repo,e).then(t=>new po(t,new fo(e._repo,e._path),e._queryParams.getIndex()))}class wo{}class Oo extends wo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){_s("endAt",this._value,e._path,!0);const t=Ln(e._queryParams,this._value,this._key);if(ho(t),uo(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new co(e._repo,e._path,t,e._orderByCalled)}}class Eo extends wo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){_s("startAt",this._value,e._path,!0);const t=Nn(e._queryParams,this._value,this._key);if(ho(t),uo(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new co(e._repo,e._path,t,e._orderByCalled)}}class Co extends wo{constructor(e){super(),this._path=e}_apply(e){lo(e,"orderByChild");const t=new ct(this._path);if(vt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new yn(t),i=Dn(e._queryParams,n);return uo(i),new co(e._repo,e._path,i,!0)}}function To(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return bs("orderByChild","path",e,!1),new Co(e)}class ko extends wo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(_s("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Oo(this._value,this._key)._apply(new Eo(this._value,this._key)._apply(e))}}function Io(e,t){return ys("equalTo","key",t,!0),new ko(e,t)}function So(e,...t){let n=Object(s["q"])(e);for(const i of t)n=i._apply(n);return n}Er(fo),Ir(fo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xo="FIREBASE_DATABASE_EMULATOR_HOST",jo={};let Ao=!1;function Ro(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=oo(o,s),l=c.repoInfo,u=void 0;"undefined"!==typeof e&&(u=Object({NODE_ENV:"production",BASE_URL:""})[xo]),u?(a=!0,o=`http://${u}?ns=${l.namespace}`,c=oo(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new Q(Q.OWNER):new J(t.name,t.options,n);Es("Invalid Firebase Database URL",c),vt(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const d=No(l,t,h,new Y(t.name,i));return new Lo(d,t)}function Po(e,t){const n=jo[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),$s(e),delete n[e.key]}function No(e,t,n,i){let r=jo[t.name];r||(r={},jo[t.name]=r);let s=r[e.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Rs(e,Ao,n,i),r[e.toURLString()]=s,s}class Lo{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ps(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fo(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Po(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function Do(e=Object(i["d"])(),t){return Object(i["b"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mo(e){u(i["a"]),Object(i["c"])(new r["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ro(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(a,c,e),Object(i["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Dt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Mo()}).call(this,n("4362"))},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var i=n("7a23"),r=n("3f4e"),s="store";function o(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function u(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,a={};o(s,(function(t,n){a[n]=u(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(i["y"])({data:t}),e.strict&&b(e),r&&n&&e._withCommit((function(){r.data=null}))}function p(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[o]=i),!s&&!r){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=i.state}))}var l=i.context=m(e,o,n);i.forEachMutation((function(t,n){var i=o+n;_(e,i,t,l)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;v(e,i,r,l)})),i.forEachGetter((function(t,n){var i=o+n;y(e,i,t,l)})),i.forEachChild((function(i,s){p(e,t,n.concat(s),i,r)}))}function m(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var s=O(n,i,r),o=s.payload,a=s.options,c=s.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,o);console.error("[vuex] unknown local action type: "+s.type+", global type: "+c)},commit:i?e.commit:function(n,i,r){var s=O(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+c)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),r}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function _(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function v(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return c(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function y(e,t,n,i){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)}}function b(e){Object(i["H"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var E="vuex bindings",C="vuex:mutations",T="vuex:actions",k="vuex",I=0;function S(e,t){Object(r["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:C,label:"Vuex Mutations",color:x}),n.addTimelineLayer({id:T,label:"Vuex Actions",color:x}),n.addInspector({id:k,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===k)if(n.filter){var i=[];L(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[N(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===k){var i=n.nodeId;g(t,i),n.state=D(F(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===k){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(k),n.sendInspectorState(k),n.addTimelineEvent({layerId:C,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=I++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:T,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var x=8702998,j=6710886,A=16777215,R={label:"namespaced",textColor:A,backgroundColor:j};function P(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:P(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return N(e._children[n],t+n+"/")}))}}function L(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(r){L(e,t._children[r],n,i+r+"/")}))}function D(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var s=M(t);r.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?P(e):e,editable:!1,value:U((function(){return s[e]}))}}))}return r}function M(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[s]=U((function(){return e[n]}))}else t[n]=U((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,r){var s=e[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+t+'".');return r===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function U(e){try{return e()}catch(t){return t}}var q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},q.prototype.addChild=function(e,t){this._children[e]=t},q.prototype.removeChild=function(e){delete this._children[e]},q.prototype.getChild=function(e){return this._children[e]},q.prototype.hasChild=function(e){return e in this._children},q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},q.prototype.forEachChild=function(e){o(this._children,e)},q.prototype.forEachGetter=function(e){this._rawModule.getters&&o(this._rawModule.getters,e)},q.prototype.forEachAction=function(e){this._rawModule.actions&&o(this._rawModule.actions,e)},q.prototype.forEachMutation=function(e){this._rawModule.mutations&&o(this._rawModule.mutations,e)},Object.defineProperties(q.prototype,B);var W=function(e){this.register([],e,!1)};function H(e,t,n){if(G(e,n),t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void console.warn("[vuex] trying to add a new module '"+i+"' on hot reloading, manual reload is needed");H(e.concat(i),t.getChild(i),n.modules[i])}}W.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},W.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},W.prototype.update=function(e){H([],this.root,e)},W.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0),G(e,t);var r=new q(t,n);if(0===e.length)this.root=r;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],r)}t.modules&&o(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},W.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i?i.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},W.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var $={assert:function(e){return"function"===typeof e},expected:"function"},V={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},z={getters:$,mutations:$,actions:V};function G(e,t){Object.keys(z).forEach((function(n){if(t[n]){var i=z[n];o(t[n],(function(t,r){l(i.assert(t),K(e,n,r,t,i.expected))}))}}))}function K(e,t,n,i,r){var s=t+" should be "+r+' but "'+t+"."+n+'"';return e.length>0&&(s+=' in module "'+e.join(".")+'"'),s+=" is "+JSON.stringify(i)+".",s}function Y(e){return new J(e)}var J=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var i=t.plugins;void 0===i&&(i=[]);var r=t.strict;void 0===r&&(r=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new W(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(o,e,t)},this.commit=function(e,t,n){return u.call(o,e,t,n)},this.strict=r;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),i.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};J.prototype.install=function(e,t){e.provide(t||s,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&S(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(e,t,n){var i=this,r=O(e,t,n),s=r.type,o=r.payload,a=r.options,c={type:s,payload:o},l=this._mutations[s];l?(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(c,i.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},J.prototype.dispatch=function(e,t){var n=this,i=O(e,t),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){console.warn("[vuex] error in before action subscribers: "),console.error(l)}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){console.warn("[vuex] error in after action subscribers: "),console.error(l)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){console.warn("[vuex] error in error action subscribers: "),console.error(l)}t(e)}))}))}console.error("[vuex] unknown action type: "+r)},J.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},J.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},J.prototype.watch=function(e,t,n){var r=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(i["H"])((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},J.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},J.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},J.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},J.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},J.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},J.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(J.prototype,Q);ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=te(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var s=te(this.$store,"mapMutations",e);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||te(this.$store,"mapGetters",e)){if(r in this.$store.getters)return this.$store.getters[r];console.error("[vuex] unknown getter: "+r)}},n[i].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var s=te(this.$store,"mapActions",e);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n}));function X(e){return Z(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function Z(e){return Array.isArray(e)||a(e)}function ee(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function te(e,t,n){var i=e._modulesNamespaceMap[n];return i||console.error("[vuex] module namespace not found in "+t+"(): "+n),i}},5692:function(e,t,n){var i=n("c430"),r=n("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var i=n("d066"),r=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var i=n("da84"),r=n("f5df"),s=i.String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},"588e":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return tt})),n.d(t,"c",(function(){return et})),n.d(t,"d",(function(){return Xe}));var i=n("589b"),r=n("1fd5"),s=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends r["c"]{constructor(e,t){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new u("unknown",e)}function f(e){return new u("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new u("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u("unauthenticated",e)}function g(){return new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function _(e){return new u("unauthorized","User does not have permission to access '"+e+"'.")}function v(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function y(){return new u("canceled","User canceled the upload/download.")}function b(e){return new u("invalid-url","Invalid URL '"+e+"'.")}function w(e){return new u("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function O(){return new u("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function E(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function C(){return new u("no-download-url","The given file does not have any download URLs.")}function T(e){return new u("invalid-argument",e)}function k(){return new u("app-deleted","The Firebase app was deleted.")}function I(e){return new u("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(e,t){return new u("invalid-format","String does not match format '"+e+"': "+t)}function x(e){throw new u("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=j.makeFromUrl(e,t)}catch(i){return new j(e,"")}if(""===n.path)return n;throw w(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",_=new RegExp(`^https?://${m}/${i}/${g}`,"i"),v={bucket:1,path:2},y=[{regex:a,indices:c,postModify:r},{regex:f,indices:p,postModify:l},{regex:_,indices:v,postModify:l}];for(let o=0;o<y.length;o++){const t=y[o],i=t.regex.exec(e);if(i){const e=i[t.indices.bucket];let r=i[t.indices.path];r||(r=""),n=new j(e,r),t.postModify(n);break}}if(null==n)throw b(e);return n}}class A{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){r=setTimeout(()=>{r=null,e(f,c())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||o;if(n)return d(),void u.call(null,e,...t);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function m(e){p||(p=!0,d(),l||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function P(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return void 0!==e}function L(e){return"object"===typeof e&&!Array.isArray(e)}function D(e){return"string"===typeof e||e instanceof String}function M(e){return F()&&e instanceof Blob}function F(){return"undefined"!==typeof Blob}function U(e,t,n,i){if(i<t)throw T(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw T(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t,n){let i=t;return null==n&&(i="https://"+t),`${n}://${i}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(W||(W={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(e,t,n,i,r,s,o,a,c,l,u){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new $(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===W.NO_ERROR,r=n.getStatus();if(!t||this.isRetryStatusCode_(r)){const t=n.getErrorCode()===W.ABORT;return void e(!1,new $(!1,null,t))}const s=-1!==this.successCodes_.indexOf(r);e(!0,new $(s,n))})},t=(e,t)=>{const n=this.resolve_,i=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());N(e)?n(e):n()}catch(s){i(s)}else if(null!==r){const e=d();e.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,e)):i(e)}else if(t.canceled){const e=this.appDelete_?k():y();i(e)}else{const e=v();i(e)}};this.canceled_?t(!1,new $(!1,null,!0)):this.backoffId_=R(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],i=-1!==n.indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||i||r}}class ${constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function V(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function z(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function G(e,t){t&&(e["X-Firebase-GMPID"]=t)}function K(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Y(e,t,n,i,r,s){const o=B(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return G(c,t),V(c,n),z(c,s),K(c,i),new H(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Q(...e){const t=J();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(F())return new Blob(e);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}function X(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class te{constructor(e,t){this.data=e,this.contentType=t||null}}function ne(e,t){switch(e){case ee.RAW:return new te(ie(t));case ee.BASE64:case ee.BASE64URL:return new te(se(e,t));case ee.DATA_URL:return new te(ae(t),ce(t))}throw d()}function ie(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(r){const r=i,s=e.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else t.push(239,191,189)}else 56320===(64512&i)?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function re(e){let t;try{t=decodeURIComponent(e)}catch(n){throw S(ee.DATA_URL,"Malformed data URL.")}return ie(t)}function se(e,t){switch(e){case ee.BASE64:{const n=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(n||i){const t=n?"-":"_";throw S(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ee.BASE64URL:{const n=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(n||i){const t=n?"+":"/";throw S(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z(t)}catch(r){throw S(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class oe{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw S(ee.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=le(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ae(e){const t=new oe(e);return t.base64?se(ee.BASE64,t.rest):re(t.rest)}function ce(e){const t=new oe(e);return t.contentType}function le(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){let n=0,i="";M(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(M(this.data_)){const n=this.data_,i=X(n,e,t);return null===i?null:new ue(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new ue(n,!0)}}static getBlob(...e){if(F()){const t=e.map(e=>e instanceof ue?e.data_:e);return new ue(Q.apply(null,t))}{const t=e.map(e=>D(e)?ne(ee.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const i=new Uint8Array(n);let r=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)i[r++]=e[t]}),new ue(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){let t;try{t=JSON.parse(e)}catch(n){return null}return L(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function fe(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function pe(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e,t){return t}class ge{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||me}}let _e=null;function ve(e){return!D(e)||e.length<2?e:pe(e)}function ye(){if(_e)return _e;const e=[];function t(e,t){return ve(t)}e.push(new ge("bucket")),e.push(new ge("generation")),e.push(new ge("metageneration")),e.push(new ge("name","fullPath",!0));const n=new ge("name");function i(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const r=new ge("size");return r.xform=i,e.push(r),e.push(new ge("timeCreated")),e.push(new ge("updated")),e.push(new ge("md5Hash",null,!0)),e.push(new ge("cacheControl",null,!0)),e.push(new ge("contentDisposition",null,!0)),e.push(new ge("contentEncoding",null,!0)),e.push(new ge("contentLanguage",null,!0)),e.push(new ge("contentType",null,!0)),e.push(new ge("metadata","customMetadata",!0)),_e=e,_e}function be(e,t){function n(){const n=e["bucket"],i=e["fullPath"],r=new j(n,i);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function we(e,t,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const e=n[s];i[e.local]=e.xform(i,t[e.server])}return be(i,e),i}function Oe(e,t,n){const i=he(t);if(null===i)return null;const r=i;return we(e,r,n)}function Ee(e,t,n,i){const r=he(t);if(null===r)return null;if(!D(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(t=>{const r=e["bucket"],s=e["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=q(a,n,i),l=B({alt:"media",token:t});return c+l});return c[0]}function Ce(e,t){const n={},i=t.length;for(let r=0;r<i;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e){if(!e)throw d()}function Ie(e,t){function n(n,i){const r=Oe(e,i,t);return ke(null!==r),r}return n}function Se(e,t){function n(n,i){const r=Oe(e,i,t);return ke(null!==r),Ee(r,i,e.host,e._protocol)}return n}function xe(e){function t(t,n){let i;return i=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===t.getStatus()?p(e.bucket):403===t.getStatus()?_(e.path):n,i.serverResponse=n.serverResponse,i}return t}function je(e){const t=xe(e);function n(n,i){let r=t(n,i);return 404===n.getStatus()&&(r=f(e.path)),r.serverResponse=i.serverResponse,r}return n}function Ae(e,t,n){const i=t.fullServerUrl(),r=q(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Te(r,s,Se(e,n),o);return a.errorHandler=je(t),a}function Re(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Pe(e,t,n){const i=Object.assign({},n);return i["fullPath"]=e.path,i["size"]=t.size(),i["contentType"]||(i["contentType"]=Re(null,t)),i}function Ne(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Pe(t,i,r),u=Ce(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ue.getBlob(h,i,d);if(null===f)throw E();const p={name:l["fullPath"]},m=q(s,e.host,e._protocol),g="POST",_=e.maxUploadRetryTime,v=new Te(m,g,Ie(e,n),_);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=xe(t),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Le=null;class De{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=W.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=W.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,i){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Me extends De{initXhr(){this.xhr_.responseType="text"}}function Fe(){return Le?Le():new Me}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(e,t){this._service=e,this._location=t instanceof j?t:j.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ue(e,t)}get root(){const e=new j(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=de(this._location.path);if(null===e)return null;const t=new j(this._location.bucket,e);return new Ue(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw I(e)}}function qe(e,t,n){e._throwIfRoot("uploadBytes");const i=Ne(e.storage,e._location,ye(),new ue(t,!0),n);return e.storage.makeRequestWithTokens(i,Fe).then(t=>({metadata:t,ref:e}))}function Be(e){e._throwIfRoot("getDownloadURL");const t=Ae(e.storage,e._location,ye());return e.storage.makeRequestWithTokens(t,Fe).then(e=>{if(null===e)throw C();return e})}function We(e,t){const n=fe(e._location.path,t),i=new j(e._location.bucket,n);return new Ue(e.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return/^[A-Za-z]+:\/\//.test(e)}function $e(e,t){return new Ue(e,t)}function Ve(e,t){if(e instanceof Ke){const n=e;if(null==n._bucket)throw O();const i=new Ue(n,n._bucket);return null!=t?Ve(i,t):i}return void 0!==t?We(e,t):e}function ze(e,t){if(t&&He(t)){if(e instanceof Ke)return $e(e,t);throw T("To use ref(service, url), the first argument must be a Storage instance.")}return Ve(e,t)}function Ge(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:j.makeFromBucketSpec(n,e)}class Ke{constructor(e,t,n,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?j.makeFromBucketSpec(i,this._host):Ge(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=j.makeFromBucketSpec(this._url,e):this._bucket=Ge(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){U("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){U("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ue(this,e)}_makeRequest(e,t,n,i){if(this._deleted)return new A(k());{const r=Y(e,this._appId,n,i,t,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const Ye="@firebase/storage",Je="0.9.2",Qe="storage";function Xe(e,t,n){return e=Object(r["q"])(e),qe(e,t,n)}function Ze(e){return e=Object(r["q"])(e),Be(e)}function et(e,t){return e=Object(r["q"])(e),ze(e,t)}function tt(e=Object(i["d"])(),t){e=Object(r["q"])(e);const n=Object(i["b"])(e,Qe),s=n.getImmediate({identifier:t});return s}function nt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Ke(n,r,s,t,i["a"])}function it(){Object(i["c"])(new s["a"](Qe,nt,"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(Ye,Je,""),Object(i["f"])(Ye,Je,"esm2017")}it()},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return z})),n.d(t,"b",(function(){return W})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return Y}));var i=n("22e5"),r=n("e691"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.17",u=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",_="@firebase/auth-compat",v="@firebase/database",y="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",E="@firebase/installations-compat",C="@firebase/messaging",T="@firebase/messaging-compat",k="@firebase/performance",I="@firebase/performance-compat",S="@firebase/remote-config",x="@firebase/remote-config-compat",j="@firebase/storage",A="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",N="firebase",L="9.6.7",D="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[_]:"fire-auth-compat",[v]:"fire-rtdb",[y]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[E]:"fire-iid-compat",[C]:"fire-fcm",[T]:"fire-fcm-compat",[k]:"fire-perf",[I]:"fire-perf-compat",[S]:"fire-rc",[x]:"fire-rc-compat",[j]:"fire-gcs",[A]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},F=new Map,U=new Map;function q(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function B(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())q(n,e);return!0}function W(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$=new s["b"]("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=L;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw $.create("bad-app-name",{appName:String(r)});const o=F.get(r);if(o){if(Object(s["n"])(e,o.options)&&Object(s["n"])(n,o.config))return o;throw $.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of U.values())a.addComponent(i);const c=new V(e,n,a);return F.set(r,c),c}function K(e=D){const t=F.get(e);if(!t)throw $.create("no-app",{appName:e});return t}function Y(e,t,n){var r;let s=null!==(r=M[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}B(new i["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){B(new i["a"]("platform-logger",e=>new o(e),"PRIVATE")),Y(c,l,e),Y(c,l,"esm2017"),Y("fire-js","")}J("")},5926:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?i:n)(t)}},"59ed":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("0d51"),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var i=n("83ab"),r=n("1a2d"),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},"605d":function(e,t,n){var i=n("c6b6"),r=n("da84");e.exports="process"==i(r.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var i=n("83ab"),r=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),l=n("d1e7"),u=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=r([].concat);e.exports=!d||o((function(){if(i&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=r}))?function(e,t){var n=u(e),r=arguments.length,o=1,d=c.f,f=l.f;while(r>o){var m,g=h(arguments[o++]),_=d?p(a(g),d(g)):a(g),v=_.length,y=0;while(v>y)m=_[y++],i&&!s(f,g,m)||(n[m]=g[m])}return n}:d},6547:function(e,t,n){var i=n("e330"),r=n("5926"),s=n("577e"),o=n("1d80"),a=i("".charAt),c=i("".charCodeAt),l=i("".slice),u=function(e){return function(t,n){var i,u,h=s(o(t)),d=r(n),f=h.length;return d<0||d>=f?e?"":void 0:(i=c(h,d),i<55296||i>56319||d+1===f||(u=c(h,d+1))<56320||u>57343?e?a(h,d):i:e?l(h,d,d+2):u-56320+(i-55296<<10)+65536)}};e.exports={codeAt:u(!1),charAt:u(!0)}},"66ce":function(e,t,n){"use strict";var i=n("51b0");n.d(t,"a",(function(){return i["a"]})),n.d(t,"b",(function(){return i["b"]})),n.d(t,"c",(function(){return i["c"]})),n.d(t,"d",(function(){return i["d"]})),n.d(t,"e",(function(){return i["e"]})),n.d(t,"f",(function(){return i["f"]})),n.d(t,"g",(function(){return i["g"]})),n.d(t,"h",(function(){return i["h"]})),n.d(t,"i",(function(){return i["i"]})),n.d(t,"j",(function(){return i["j"]}))},"68ee":function(e,t,n){var i=n("e330"),r=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),l=function(){},u=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=i(d.exec),p=!d.exec(l),m=function(e){if(!s(e))return!1;try{return h(l,u,e),!0}catch(t){return!1}},g=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||r((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},"69f3":function(e,t,n){var i,r,s,o=n("7f9a"),a=n("da84"),c=n("e330"),l=n("861d"),u=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,_=a.WeakMap,v=function(e){return s(e)?r(e):i(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=r(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new _),w=c(b.get),O=c(b.has),E=c(b.set);i=function(e,t){if(O(b,e))throw new g(m);return t.facade=e,E(b,e,t),t},r=function(e){return w(b,e)||{}},s=function(e){return O(b,e)}}else{var C=f("state");p[C]=!0,i=function(e,t){if(h(e,C))throw new g(m);return t.facade=e,u(e,C,t),t},r=function(e){return h(e,C)?e[C]:{}},s=function(e){return h(e,C)}}e.exports={set:i,get:r,has:s,enforce:v,getterFor:y}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return V}));var i=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>r?Symbol(e):"_vr_"+e,o=s("rvlm"),a=s("rvd"),c=s("r"),l=s("rl"),u=s("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||r&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const m=()=>{};const g=/\/$/,_=e=>e.replace(g,"");function v(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),r=e(s)),c>-1&&(i=i||t.slice(0,c),o=t.slice(c,t.length)),i=k(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function b(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&O(t.matched[i],n.matched[r])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!C(e[n],t[n]))return!1;return!0}function C(e,t){return Array.isArray(e)?T(e,t):Array.isArray(t)?T(t,e):e===t}function T(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var I,S;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function x(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),_(e)}const j=/^[^#]+#/;function A(e,t){return e.replace(j,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=R(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function M(e,t){D.set(e,t)}function F(e){const t=D.get(e);return D.delete(e),t}let U=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),b(n,"")}const o=b(n,e);return o+i+r}function B(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=q(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach(e=>{e(n.value,c,{delta:u,type:I.pop,direction:u?u>0?S.forward:S.back:S.unknown})})};function c(){o=n.value}function l(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:P()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function W(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?P():null}}function H(e){const{history:t,location:n}=window,i={value:q(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:U()+e+i;try{t[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,W(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function a(e,n){const o=f({},r.value,t.state,{forward:e,scroll:P()});s(o.current,o,!0);const a=f({},W(i.value,e,null),{position:o.position+1},n);s(e,a,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function $(e){e=x(e);const t=H(e),n=B(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=f({location:"",base:e,go:i,createHref:A.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),$(e)}function z(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=s("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function Q(e,t){return f(new Error,{type:e,[Y]:!0},t)}function X(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=f({},ee,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let t=0;t<u.length;t++){const i=u[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(te,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:a,regexp:c}=i;s.push({name:e,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n}return{re:o,score:i,keys:s,parse:a,stringify:c}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=ie(i[n],r[n]);if(e)return e;n++}return r.length-i.length}const se={type:0,value:""},oe=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[se]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function ce(e,t,n){const i=ne(ae(e.path),n);const r=f(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function le(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,a=he(e);a.aliasOf=i&&i.record;const l=me(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(f({},a,{components:i?i.record.components:a.components,path:e,aliasOf:i?i.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(h=ce(t,n,l),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),r&&e.name&&!fe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,i&&i.children[t])}i=i||h,c(h)}return d?()=>{o(d)}:m}function o(e){if(G(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!fe(e)&&i.set(e.record.name,e)}function l(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw Q(1,{location:e});o=r.record.name,a=f(ue(t.params,r.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=r.stringify(a)}else if("path"in e)s=e.path,r=n.find(e=>e.re.test(s)),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find(e=>e.re.test(t.path)),!r)throw Q(1,{location:e,currentLocation:t});o=r.record.name,a=f({},t.params,e.params),s=r.stringify(a)}const c=[];let l=r;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:pe(c)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ue(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function me(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const ge=/#/g,_e=/&/g,ve=/\//g,ye=/=/g,be=/\?/g,we=/\+/g,Oe=/%5B/g,Ee=/%5D/g,Ce=/%5E/g,Te=/%60/g,ke=/%7B/g,Ie=/%7C/g,Se=/%7D/g,xe=/%20/g;function je(e){return encodeURI(""+e).replace(Ie,"|").replace(Oe,"[").replace(Ee,"]")}function Ae(e){return je(e).replace(ke,"{").replace(Se,"}").replace(Ce,"^")}function Re(e){return je(e).replace(we,"%2B").replace(xe,"+").replace(ge,"%23").replace(_e,"%26").replace(Te,"`").replace(ke,"{").replace(Se,"}").replace(Ce,"^")}function Pe(e){return Re(e).replace(ye,"%3D")}function Ne(e){return je(e).replace(ge,"%23").replace(be,"%3F")}function Le(e){return null==e?"":Ne(e).replace(ve,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(we," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Fe(e){let t="";for(let n in e){const i=e[n];if(n=Pe(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=Array.isArray(i)?i.map(e=>e&&Re(e)):[i&&Re(i)];r.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map(e=>null==e?null:""+e):null==i?i:""+i)}return t}function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(Q(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(Q(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(i&&i.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(e=>a(e))})}function We(e,t,n,i){const r=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(o)){const a=o.__vccOpts||o,c=a[t];c&&r.push(Be(c,n,i,s,e))}else{let a=o();0,r.push(()=>a.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=d(r)?r.default:r;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Be(c,n,i,s,e)()}))}}return r}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=Object(i["n"])(c),n=Object(i["n"])(l),r=Object(i["b"])(()=>t.resolve(Object(i["E"])(e.to))),s=Object(i["b"])(()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(O.bind(null,i));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(i)===a&&s[s.length-1].path!==a?s.findIndex(O.bind(null,e[t-2])):o}),o=Object(i["b"])(()=>s.value>-1&&Ke(n.params,r.value.params)),a=Object(i["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&E(n.params,r.value.params));function u(n={}){return Ge(n)?t[Object(i["E"])(e.replace)?"replace":"push"](Object(i["E"])(e.to)).catch(m):Promise.resolve()}return{route:r,href:Object(i["b"])(()=>r.value.href),isActive:o,isExactActive:a,navigate:u}}const Ve=Object(i["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=Object(i["y"])($e(e)),{options:r}=Object(i["n"])(c),s=Object(i["b"])(()=>({[Je(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Object(i["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ze=Ve;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((e,t)=>e!==r[t]))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=Object(i["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Object(i["n"])(u),s=Object(i["b"])(()=>e.route||r.value),c=Object(i["n"])(a,0),l=Object(i["b"])(()=>s.value.matched[c]);Object(i["w"])(a,c+1),Object(i["w"])(o,l),Object(i["w"])(u,s);const h=Object(i["z"])();return Object(i["H"])(()=>[h.value,l.value,e.name],([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&O(t,r)&&i||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const r=s.value,o=l.value,a=o&&o.components[e.name],c=e.name;if(!a)return Xe(n.default,{Component:a,route:r});const u=o.props[e.name],d=u?!0===u?r.params:"function"===typeof u?u(r):u:null,p=e=>{e.component.isUnmounted&&(o.instances[c]=null)},m=Object(i["m"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Xe(n.default,{Component:m,route:r})||m}}});function Xe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Qe;function et(e){const t=le(e.routes,e),n=e.parseQuery||Me,r=e.stringifyQuery||Fe,s=e.history;const o=qe(),a=qe(),d=qe(),g=Object(i["C"])(K);let _=K;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=p.bind(null,e=>""+e),O=p.bind(null,Le),E=p.bind(null,De);function C(e,n){let i,r;return G(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map(e=>e.record)}function S(e){return!!t.getRecordMatcher(e)}function x(e,i){if(i=f({},i||g.value),"string"===typeof e){const r=v(n,e,i.path),o=t.resolve({path:r.path},i),a=s.createHref(r.fullPath);return f(r,o,{params:E(o.params),hash:De(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=f({},e,{path:v(n,e.path,i.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];o=f({},e,{params:O(e.params)}),i.params=O(i.params)}const a=t.resolve(o,i),c=e.hash||"";a.params=b(E(a.params));const l=y(r,f({},e,{hash:Ae(c),path:a.path})),u=s.createHref(l);return f({fullPath:l,hash:c,query:r===Fe?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function j(e){return"string"===typeof e?v(n,e,g.value.path):f({},e)}function A(e,t){if(_!==e)return Q(8,{from:t,to:e})}function R(e){return q(e)}function D(e){return R(f(j(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=j(i):{path:i},i.params={}),f({query:e.query,hash:e.hash,params:e.params},i)}}function q(e,t){const n=_=x(e),i=g.value,s=e.state,o=e.force,a=!0===e.replace,c=U(n);if(c)return q(f(j(c),{state:s,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&w(r,i,n)&&(u=Q(16,{to:l,from:i}),ie(i,i,!0,!1)),(u?Promise.resolve(u):W(l,i)).catch(e=>X(e)?e:ee(e,l,i)).then(e=>{if(e){if(X(e,2))return q(f(j(e.to),{state:s,force:o,replace:a}),t||l)}else e=$(l,i,!0,a,s);return H(l,i,e),e})}function B(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function W(e,t){let n;const[i,r,s]=nt(e,t);n=We(i.reverse(),"beforeRouteLeave",e,t);for(const o of i)o.leaveGuards.forEach(i=>{n.push(Be(i,e,t))});const c=B.bind(null,e,t);return n.push(c),tt(n).then(()=>{n=[];for(const i of o.list())n.push(Be(i,e,t));return n.push(c),tt(n)}).then(()=>{n=We(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach(i=>{n.push(Be(i,e,t))});return n.push(c),tt(n)}).then(()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const r of i.beforeEnter)n.push(Be(r,e,t));else n.push(Be(i.beforeEnter,e,t));return n.push(c),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=We(s,"beforeRouteEnter",e,t),n.push(c),tt(n))).then(()=>{n=[];for(const i of a.list())n.push(Be(i,e,t));return n.push(c),tt(n)}).catch(e=>X(e,8)?e:Promise.reject(e))}function H(e,t,n){for(const i of d.list())i(e,t,n)}function $(e,t,n,i,r){const o=A(e,t);if(o)return o;const a=t===K,c=h?history.state:{};n&&(i||a?s.replace(e.fullPath,f({scroll:a&&c&&c.scroll},r)):s.push(e.fullPath,r)),g.value=e,ie(e,t,n,a),ne()}let V;function z(){V=s.listen((e,t,n)=>{const i=x(e),r=U(i);if(r)return void q(f(r,{replace:!0}),i).catch(m);_=i;const o=g.value;h&&M(L(o.fullPath,n.delta),P()),W(i,o).catch(e=>X(e,12)?e:X(e,2)?(q(e.to,i).then(e=>{X(e,20)&&!n.delta&&n.type===I.pop&&s.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&s.go(-n.delta,!1),ee(e,i,o))).then(e=>{e=e||$(i,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===I.pop&&X(e,20)&&s.go(-1,!1)),H(i,o,e)}).catch(m)})}let Y,J=qe(),Z=qe();function ee(e,t,n){ne(e);const i=Z.list();return i.length?i.forEach(i=>i(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Y&&g.value!==K?Promise.resolve():new Promise((e,t)=>{J.add([e,t])})}function ne(e){Y||(Y=!0,z(),J.list().forEach(([t,n])=>e?n(e):t()),J.reset())}function ie(t,n,r,s){const{scrollBehavior:o}=e;if(!h||!o)return Promise.resolve();const a=!r&&F(L(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Object(i["o"])().then(()=>o(t,n,a)).then(e=>e&&N(e)).catch(e=>ee(e,t,n))}const re=e=>s.go(e);let se;const oe=new Set,ae={currentRoute:g,addRoute:C,removeRoute:T,hasRoute:S,getRoutes:k,resolve:x,options:e,push:R,replace:D,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",ze),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(i["E"])(g)}),h&&!se&&g.value===K&&(se=!0,R(s.location).catch(e=>{0}));const n={};for(const s in K)n[s]=Object(i["b"])(()=>g.value[s]);e.provide(c,t),e.provide(l,Object(i["y"])(n)),e.provide(u,g);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(_=K,V&&V(),g.value=K,se=!1,Y=!1),r()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>O(e,s))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>O(e,a))||r.push(a))}return[n,i,r]}},"6eeb":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),l=n("69f3"),u=n("5e77").CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;r(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==g)&&o(n,"name",g),l=d(n),l.source||(l.source=f.join("string"==typeof g?g:""))),e!==i?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var i=n("cc12"),r=i("span").classList,s=r&&r.constructor&&r.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7a23":function(e,t,n){"use strict";n.d(t,"y",(function(){return ye})),n.d(t,"z",(function(){return Ne})),n.d(t,"C",(function(){return Le})),n.d(t,"E",(function(){return Fe})),n.d(t,"p",(function(){return i["J"]})),n.d(t,"q",(function(){return i["K"]})),n.d(t,"D",(function(){return i["M"]})),n.d(t,"a",(function(){return _i})),n.d(t,"b",(function(){return vr})),n.d(t,"d",(function(){return xi})),n.d(t,"e",(function(){return Wi})),n.d(t,"f",(function(){return Si})),n.d(t,"g",(function(){return Li})),n.d(t,"h",(function(){return Bi})),n.d(t,"i",(function(){return qi})),n.d(t,"j",(function(){return Di})),n.d(t,"k",(function(){return Zt})),n.d(t,"l",(function(){return nr})),n.d(t,"m",(function(){return yr})),n.d(t,"n",(function(){return Dt})),n.d(t,"o",(function(){return ot})),n.d(t,"r",(function(){return rn})),n.d(t,"s",(function(){return sn})),n.d(t,"t",(function(){return _n})),n.d(t,"u",(function(){return Ei})),n.d(t,"v",(function(){return Tt})),n.d(t,"w",(function(){return Lt})),n.d(t,"x",(function(){return Ct})),n.d(t,"A",(function(){return Ki})),n.d(t,"B",(function(){return fi})),n.d(t,"H",(function(){return Ft})),n.d(t,"I",(function(){return kt})),n.d(t,"J",(function(){return Xn})),n.d(t,"c",(function(){return xs})),n.d(t,"F",(function(){return bs})),n.d(t,"G",(function(){return ys})),n.d(t,"K",(function(){return Ts}));var i=n("9ff4");let r;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(e){if(this.active)try{return r=this,e()}finally{r=this.parent}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=r){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,l=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];c(r)&&!l(r)?r.delete(e):t[n++]=r,r.w&=~p,r.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const _=Symbol(""),v=Symbol("");class y{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,p=1<<++f,f<=m?u(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,w=t,this.parent=void 0}}stop(){this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const O=[];function E(){O.push(w),w=!1}function C(){const e=O.pop();w=void 0===e||e}function T(e,t,n){if(w&&g){let t=d.get(e);t||d.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=a());const r=void 0;k(i,r)}}function k(e,t){let n=!1;f<=m?l(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function I(e,t,n,r,s,o){const c=d.get(e);if(!c)return;let l=[];if("clear"===t)l=[...c.values()];else if("length"===n&&Object(i["o"])(e))c.forEach((e,t)=>{("length"===t||t>=r)&&l.push(e)});else switch(void 0!==n&&l.push(c.get(n)),t){case"add":Object(i["o"])(e)?Object(i["t"])(n)&&l.push(c.get("length")):(l.push(c.get(_)),Object(i["u"])(e)&&l.push(c.get(v)));break;case"delete":Object(i["o"])(e)||(l.push(c.get(_)),Object(i["u"])(e)&&l.push(c.get(v)));break;case"set":Object(i["u"])(e)&&l.push(c.get(_));break}if(1===l.length)l[0]&&S(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);S(a(e))}}function S(e,t){for(const n of Object(i["o"])(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const x=Object(i["I"])("__proto__,__v_isRef,__isVue"),j=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(i["F"])),A=D(),R=D(!1,!0),P=D(!0),N=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ie(this);for(let t=0,r=this.length;t<r;t++)T(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Ie)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){E();const n=Ie(this)[t].apply(this,e);return C(),n}}),e}function D(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?ge:me:t?pe:fe).get(n))return n;const o=Object(i["o"])(n);if(!e&&o&&Object(i["k"])(N,r))return Reflect.get(N,r,s);const a=Reflect.get(n,r,s);if(Object(i["F"])(r)?j.has(r):x(r))return a;if(e||T(n,"get",r),t)return a;if(Pe(a)){const e=!o||!Object(i["t"])(r);return e?a.value:a}return Object(i["w"])(a)?e?we(a):ye(a):a}}const M=U(),F=U(!0);function U(e=!1){return function(t,n,r,s){let o=t[n];if(Ce(o)&&Pe(o)&&!Pe(r))return!1;if(!e&&!Ce(r)&&(Te(r)||(r=Ie(r),o=Ie(o)),!Object(i["o"])(t)&&Pe(o)&&!Pe(r)))return o.value=r,!0;const a=Object(i["o"])(t)&&Object(i["t"])(n)?Number(n)<t.length:Object(i["k"])(t,n),c=Reflect.set(t,n,r,s);return t===Ie(s)&&(a?Object(i["j"])(r,o)&&I(t,"set",n,r,o):I(t,"add",n,r)),c}}function q(e,t){const n=Object(i["k"])(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&I(e,"delete",t,void 0,r),s}function B(e,t){const n=Reflect.has(e,t);return Object(i["F"])(t)&&j.has(t)||T(e,"has",t),n}function W(e){return T(e,"iterate",Object(i["o"])(e)?"length":_),Reflect.ownKeys(e)}const H={get:A,set:M,deleteProperty:q,has:B,ownKeys:W},$={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},V=Object(i["h"])({},H,{get:R,set:F}),z=e=>e,G=e=>Reflect.getPrototypeOf(e);function K(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Ie(e),s=Ie(t);t!==s&&!n&&T(r,"get",t),!n&&T(r,"get",s);const{has:o}=G(r),a=i?z:n?je:xe;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],i=Ie(n),r=Ie(e);return e!==r&&!t&&T(i,"has",e),!t&&T(i,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function J(e,t=!1){return e=e["__v_raw"],!t&&T(Ie(e),"iterate",_),Reflect.get(e,"size",e)}function Q(e){e=Ie(e);const t=Ie(this),n=G(t),i=n.has.call(t,e);return i||(t.add(e),I(t,"add",e,e)),this}function X(e,t){t=Ie(t);const n=Ie(this),{has:r,get:s}=G(n);let o=r.call(n,e);o||(e=Ie(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(i["j"])(t,a)&&I(n,"set",e,t,a):I(n,"add",e,t),this}function Z(e){const t=Ie(this),{has:n,get:i}=G(t);let r=n.call(t,e);r||(e=Ie(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&I(t,"delete",e,void 0,s),o}function ee(){const e=Ie(this),t=0!==e.size,n=void 0,i=e.clear();return t&&I(e,"clear",void 0,void 0,n),i}function te(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=Ie(s),a=t?z:e?je:xe;return!e&&T(o,"iterate",_),s.forEach((e,t)=>n.call(i,a(e),a(t),r))}}function ne(e,t,n){return function(...r){const s=this["__v_raw"],o=Ie(s),a=Object(i["u"])(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...r),h=n?z:t?je:xe;return!t&&T(o,"iterate",l?v:_),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function re(){const e={get(e){return K(this,e)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return K(this,e,!1,!0)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return K(this,e,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:te(!0,!1)},i={get(e){return K(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:te(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach(r=>{e[r]=ne(r,!1,!1),n[r]=ne(r,!0,!1),t[r]=ne(r,!1,!0),i[r]=ne(r,!0,!0)}),[e,n,t,i]}const[se,oe,ae,ce]=re();function le(e,t){const n=t?e?ce:ae:e?oe:se;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(Object(i["k"])(n,r)&&r in t?n:t,r,s)}const ue={get:le(!1,!1)},he={get:le(!1,!0)},de={get:le(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e(Object(i["P"])(e))}function ye(e){return Ce(e)?e:Oe(e,!1,H,ue,fe)}function be(e){return Oe(e,!1,V,he,pe)}function we(e){return Oe(e,!0,$,de,me)}function Oe(e,t,n,r,s){if(!Object(i["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ve(e);if(0===a)return e;const c=new Proxy(e,2===a?r:n);return s.set(e,c),c}function Ee(e){return Ce(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Ee(e)||Ce(e)}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Se(e){return Object(i["g"])(e,"__v_skip",!0),e}const xe=e=>Object(i["w"])(e)?ye(e):e,je=e=>Object(i["w"])(e)?we(e):e;function Ae(e){w&&g&&(e=Ie(e),k(e.dep||(e.dep=a())))}function Re(e,t){e=Ie(e),e.dep&&S(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function Ne(e){return De(e,!1)}function Le(e){return De(e,!0)}function De(e,t){return Pe(e)?e:new Me(e,t)}class Me{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ie(e),this._value=t?e:xe(e)}get value(){return Ae(this),this._value}set value(e){e=this.__v_isShallow?e:Ie(e),Object(i["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:xe(e),Re(this,e))}}function Fe(e){return Pe(e)?e.value:e}const Ue={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Pe(r)&&!Pe(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function qe(e){return Ee(e)?e:new Proxy(e,Ue)}class Be{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new y(e,()=>{this._dirty||(this._dirty=!0,Re(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Ie(this);return Ae(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t,n=!1){let r,s;const o=Object(i["q"])(e);o?(r=e,s=i["d"]):(r=e.get,s=e.set);const a=new Be(r,s,o||!s,n);return a}Promise.resolve();function He(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){Ve(s,t,n)}return r}function $e(e,t,n,r){if(Object(i["q"])(e)){const s=He(e,t,n,r);return s&&Object(i["z"])(s)&&s.catch(e=>{Ve(e,t,n)}),s}const s=[];for(let i=0;i<e.length;i++)s.push($e(e[i],t,n,r));return s}function Ve(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,s=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void He(o,null,10,[e,r,s])}ze(e,n,r,i)}function ze(e,t,n,i=!0){console.error(e)}let Ge=!1,Ke=!1;const Ye=[];let Je=0;const Qe=[];let Xe=null,Ze=0;const et=[];let tt=null,nt=0;const it=Promise.resolve();let rt=null,st=null;function ot(e){const t=rt||it;return e?t.then(this?e.bind(this):e):t}function at(e){let t=Je+1,n=Ye.length;while(t<n){const i=t+n>>>1,r=gt(Ye[i]);r<e?t=i+1:n=i}return t}function ct(e){Ye.length&&Ye.includes(e,Ge&&e.allowRecurse?Je+1:Je)||e===st||(null==e.id?Ye.push(e):Ye.splice(at(e.id),0,e),lt())}function lt(){Ge||Ke||(Ke=!0,rt=it.then(_t))}function ut(e){const t=Ye.indexOf(e);t>Je&&Ye.splice(t,1)}function ht(e,t,n,r){Object(i["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),lt()}function dt(e){ht(e,Xe,Qe,Ze)}function ft(e){ht(e,tt,et,nt)}function pt(e,t=null){if(Qe.length){for(st=t,Xe=[...new Set(Qe)],Qe.length=0,Ze=0;Ze<Xe.length;Ze++)Xe[Ze]();Xe=null,Ze=0,st=null,pt(e,t)}}function mt(e){if(et.length){const e=[...new Set(et)];if(et.length=0,tt)return void tt.push(...e);for(tt=e,tt.sort((e,t)=>gt(e)-gt(t)),nt=0;nt<tt.length;nt++)tt[nt]();tt=null,nt=0}}const gt=e=>null==e.id?1/0:e.id;function _t(e){Ke=!1,Ge=!0,pt(e),Ye.sort((e,t)=>gt(e)-gt(t));i["d"];try{for(Je=0;Je<Ye.length;Je++){const e=Ye[Je];e&&!1!==e.active&&He(e,null,14)}}finally{Je=0,Ye.length=0,mt(e),Ge=!1,rt=null,(Ye.length||Qe.length||et.length)&&_t(e)}}new Set;new Map;function vt(e,t,...n){const r=e.vnode.props||i["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=r[e]||i["b"];o?s=n.map(e=>e.trim()):t&&(s=n.map(i["O"]))}let c;let l=r[c=Object(i["N"])(t)]||r[c=Object(i["N"])(Object(i["e"])(t))];!l&&o&&(l=r[c=Object(i["N"])(Object(i["l"])(t))]),l&&$e(l,e,6,s);const u=r[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,$e(u,e,6,s)}}function yt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(i["q"])(e)){const r=e=>{const n=yt(e,t,!0);n&&(c=!0,Object(i["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?(Object(i["o"])(o)?o.forEach(e=>a[e]=null):Object(i["h"])(a,o),r.set(e,a),a):(r.set(e,null),null)}function bt(e,t){return!(!e||!Object(i["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(i["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(i["k"])(e,Object(i["l"])(t))||Object(i["k"])(e,t))}let wt=null,Ot=null;function Et(e){const t=wt;return wt=e,Ot=e&&e.type.__scopeId||null,t}function Ct(e){Ot=e}function Tt(){Ot=null}function kt(e,t=wt,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&ki(-1);const r=Et(t),s=e(...n);return Et(r),i._d&&ki(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function It(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:l,emit:u,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let _,v;const y=Et(e);try{if(4&n.shapeFlag){const e=s||r;_=Hi(h.call(e,e,d,o,p,f,m)),v=l}else{const e=t;0,_=Hi(e.length>1?e(o,{attrs:l,slots:c,emit:u}):e(o,null)),v=t.props?l:St(l)}}catch(w){wi.length=0,Ve(w,e,1),_=Di(yi)}let b=_;if(v&&!1!==g){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(a&&e.some(i["v"])&&(v=xt(v,a)),b=Ui(b,v))}return n.dirs&&(b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),_=b,Et(y),_}const St=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(i["x"])(n))&&((t||(t={}))[n]=e[n]);return t},xt=(e,t)=>{const n={};for(const r in e)Object(i["v"])(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function jt(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||At(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?At(i,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!bt(l,n))return!0}}return!1}function At(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!bt(n,s))return!0}return!1}function Rt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Pt=e=>e.__isSuspense;function Nt(e,t){t&&t.pendingBranch?Object(i["o"])(e)?t.effects.push(...e):t.effects.push(e):ft(e)}function Lt(e,t){if(tr){let n=tr.provides;const i=tr.parent&&tr.parent.provides;i===n&&(n=tr.provides=Object.create(i)),n[e]=t}else 0}function Dt(e,t,n=!1){const r=tr||wt;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(i["q"])(t)?t.call(r.proxy):t}else 0}const Mt={};function Ft(e,t,n){return Ut(e,t,n)}function Ut(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:a}=i["b"]){const c=tr;let l,u,h=!1,d=!1;if(Pe(e)?(l=()=>e.value,h=Te(e)):Ee(e)?(l=()=>e,r=!0):Object(i["o"])(e)?(d=!0,h=e.some(Ee),l=()=>e.map(e=>Pe(e)?e.value:Ee(e)?Wt(e):Object(i["q"])(e)?He(e,c,2):void 0)):l=Object(i["q"])(e)?t?()=>He(e,c,2):()=>{if(!c||!c.isUnmounted)return u&&u(),$e(e,c,3,[f])}:i["d"],t&&r){const e=l;l=()=>Wt(e())}let f=e=>{u=_.onStop=()=>{He(e,c,4)}};if(cr)return f=i["d"],t?n&&$e(t,c,3,[l(),d?[]:void 0,f]):l(),i["d"];let p=d?[]:Mt;const m=()=>{if(_.active)if(t){const e=_.run();(r||h||(d?e.some((e,t)=>Object(i["j"])(e,p[t])):Object(i["j"])(e,p)))&&(u&&u(),$e(t,c,3,[e,p===Mt?void 0:p,f]),p=e)}else _.run()};let g;m.allowRecurse=!!t,g="sync"===s?m:"post"===s?()=>si(m,c&&c.suspense):()=>{!c||c.isMounted?dt(m):m()};const _=new y(l,g);return t?n?m():p=_.run():"post"===s?si(_.run.bind(_),c&&c.suspense):_.run(),()=>{_.stop(),c&&c.scope&&Object(i["L"])(c.scope.effects,_)}}function qt(e,t,n){const r=this.proxy,s=Object(i["E"])(e)?e.includes(".")?Bt(r,e):()=>r[e]:e.bind(r,r);let o;Object(i["q"])(t)?o=t:(o=t.handler,n=t);const a=tr;ir(this);const c=Ut(s,o.bind(r),n);return a?ir(a):rr(),c}function Bt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Wt(e,t){if(!Object(i["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Pe(e))Wt(e.value,t);else if(Object(i["o"])(e))for(let n=0;n<e.length;n++)Wt(e[n],t);else if(Object(i["C"])(e)||Object(i["u"])(e))e.forEach(e=>{Wt(e,t)});else if(Object(i["y"])(e))for(const n in e)Wt(e[n],t);return e}function Ht(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fn(()=>{e.isMounted=!0}),gn(()=>{e.isUnmounting=!0}),e}const $t=[Function,Array],Vt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(e,{slots:t}){const n=nr(),i=Ht();let r;return()=>{const s=t.default&&Xt(t.default(),!0);if(!s||!s.length)return;const o=Ie(e),{mode:a}=o;const c=s[0];if(i.isLeaving)return Yt(c);const l=Jt(c);if(!l)return Yt(c);const u=Kt(l,o,i,n);Qt(l,u);const h=n.subTree,d=h&&Jt(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===r?r=e:e!==r&&(r=e,f=!0)}if(d&&d.type!==yi&&(!Ai(l,d)||f)){const e=Kt(d,o,i,n);if(Qt(d,e),"out-in"===a)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},Yt(c);"in-out"===a&&l.type!==yi&&(e.delayLeave=(e,t,n)=>{const r=Gt(i,d);r[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}},zt=Vt;function Gt(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Kt(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:_,onAppearCancelled:v}=t,y=String(e.key),b=Gt(n,e),w=(e,t)=>{e&&$e(e,i,9,t)},O={mode:s,persisted:o,beforeEnter(t){let i=a;if(!n.isMounted){if(!r)return;i=m||a}t._leaveCb&&t._leaveCb(!0);const s=b[y];s&&Ai(e,s)&&s.el._leaveCb&&s.el._leaveCb(),w(i,[t])},enter(e){let t=c,i=l,s=u;if(!n.isMounted){if(!r)return;t=g||c,i=_||l,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?s:i,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();w(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),w(n?p:f,[t]),t._leaveCb=void 0,b[r]===e&&delete b[r])};b[r]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return Kt(e,t,n,i)}};return O}function Yt(e){if(tn(e))return e=Ui(e),e.children=null,e}function Jt(e){return tn(e)?e.children?e.children[0]:void 0:e}function Qt(e,t){6&e.shapeFlag&&e.component?Qt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Xt(e,t=!1){let n=[],i=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===_i?(128&s.patchFlag&&i++,n=n.concat(Xt(s.children,t))):(t||s.type!==yi)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Zt(e){return Object(i["q"])(e)?{setup:e,name:e.name}:e}const en=e=>!!e.type.__asyncLoader;const tn=e=>e.type.__isKeepAlive;RegExp,RegExp;function nn(e,t){return Object(i["o"])(e)?e.some(e=>nn(e,t)):Object(i["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function rn(e,t){on(e,"a",t)}function sn(e,t){on(e,"da",t)}function on(e,t,n=tr){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(un(t,i,n),n){let e=n.parent;while(e&&e.parent)tn(e.parent.vnode)&&an(i,t,n,e),e=e.parent}}function an(e,t,n,r){const s=un(t,e,r,!0);_n(()=>{Object(i["L"])(r[t],s)},n)}function cn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function ln(e){return 128&e.shapeFlag?e.ssContent:e}function un(e,t,n=tr,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;E(),ir(n);const r=$e(t,n,e,i);return rr(),C(),r});return i?r.unshift(s):r.push(s),s}}const hn=e=>(t,n=tr)=>(!cr||"sp"===e)&&un(e,t,n),dn=hn("bm"),fn=hn("m"),pn=hn("bu"),mn=hn("u"),gn=hn("bum"),_n=hn("um"),vn=hn("sp"),yn=hn("rtg"),bn=hn("rtc");function wn(e,t=tr){un("ec",e,t)}let On=!0;function En(e){const t=In(e),n=e.proxy,r=e.ctx;On=!1,t.beforeCreate&&Tn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:w,render:O,renderTracked:E,renderTriggered:C,errorCaptured:T,serverPrefetch:k,expose:I,inheritAttrs:S,components:x,directives:j,filters:A}=t,R=null;if(u&&Cn(u,r,R,e.appContext.config.unwrapInjectedRef),a)for(const N in a){const e=a[N];Object(i["q"])(e)&&(r[N]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(i["w"])(t)&&(e.data=ye(t))}if(On=!0,o)for(const N in o){const e=o[N],t=Object(i["q"])(e)?e.bind(n,n):Object(i["q"])(e.get)?e.get.bind(n,n):i["d"];0;const s=!Object(i["q"])(e)&&Object(i["q"])(e.set)?e.set.bind(n):i["d"],a=vr({get:t,set:s});Object.defineProperty(r,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const i in c)kn(c[i],r,n,i);if(l){const e=Object(i["q"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Lt(t,e[t])})}function P(e,t){Object(i["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Tn(h,e,"c"),P(dn,d),P(fn,f),P(pn,p),P(mn,m),P(rn,g),P(sn,_),P(wn,T),P(bn,E),P(yn,C),P(gn,y),P(_n,w),P(vn,k),Object(i["o"])(I))if(I.length){const t=e.exposed||(e.exposed={});I.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===i["d"]&&(e.render=O),null!=S&&(e.inheritAttrs=S),x&&(e.components=x),j&&(e.directives=j)}function Cn(e,t,n=i["d"],r=!1){Object(i["o"])(e)&&(e=Rn(e));for(const s in e){const n=e[s];let o;o=Object(i["w"])(n)?"default"in n?Dt(n.from||s,n.default,!0):Dt(n.from||s):Dt(n),Pe(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Tn(e,t,n){$e(Object(i["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function kn(e,t,n,r){const s=r.includes(".")?Bt(n,r):()=>n[r];if(Object(i["E"])(e)){const n=t[e];Object(i["q"])(n)&&Ft(s,n)}else if(Object(i["q"])(e))Ft(s,e.bind(n));else if(Object(i["w"])(e))if(Object(i["o"])(e))e.forEach(e=>kn(e,t,n,r));else{const r=Object(i["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(i["q"])(r)&&Ft(s,r,e)}else 0}function In(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:r.length||n||i?(c={},r.length&&r.forEach(e=>Sn(c,e,o,!0)),Sn(c,t,o)):c=t,s.set(t,c),c}function Sn(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Sn(e,s,n,!0),r&&r.forEach(t=>Sn(e,t,n,!0));for(const o in t)if(i&&"expose"===o);else{const i=xn[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const xn={data:jn,props:Nn,emits:Nn,methods:Nn,computed:Nn,beforeCreate:Pn,created:Pn,beforeMount:Pn,mounted:Pn,beforeUpdate:Pn,updated:Pn,beforeDestroy:Pn,beforeUnmount:Pn,destroyed:Pn,unmounted:Pn,activated:Pn,deactivated:Pn,errorCaptured:Pn,serverPrefetch:Pn,components:Nn,directives:Nn,watch:Ln,provide:jn,inject:An};function jn(e,t){return t?e?function(){return Object(i["h"])(Object(i["q"])(e)?e.call(this,this):e,Object(i["q"])(t)?t.call(this,this):t)}:t:e}function An(e,t){return Nn(Rn(e),Rn(t))}function Rn(e){if(Object(i["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pn(e,t){return e?[...new Set([].concat(e,t))]:t}function Nn(e,t){return e?Object(i["h"])(Object(i["h"])(Object.create(null),e),t):t}function Ln(e,t){if(!e)return t;if(!t)return e;const n=Object(i["h"])(Object.create(null),e);for(const i in t)n[i]=Pn(e[i],t[i]);return n}function Dn(e,t,n,r=!1){const s={},o={};Object(i["g"])(o,Ri,1),e.propsDefaults=Object.create(null),Fn(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:be(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Mn(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=Ie(s),[l]=e.propsOptions;let u=!1;if(!(r||a>0)||16&a){let r;Fn(e,t,s,o)&&(u=!0);for(const o in c)t&&(Object(i["k"])(t,o)||(r=Object(i["l"])(o))!==o&&Object(i["k"])(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Un(l,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(i["k"])(t,e)||(delete o[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let a=n[r];const h=t[a];if(l)if(Object(i["k"])(o,a))h!==o[a]&&(o[a]=h,u=!0);else{const t=Object(i["e"])(a);s[t]=Un(l,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,u=!0)}}u&&I(e,"set","$attrs")}function Fn(e,t,n,r){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(i["A"])(l))continue;const u=t[l];let h;s&&Object(i["k"])(s,h=Object(i["e"])(l))?o&&o.includes(h)?(a||(a={}))[h]=u:n[h]=u:bt(e.emitsOptions,l)||l in r&&u===r[l]||(r[l]=u,c=!0)}if(o){const t=Ie(n),r=a||i["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Un(s,t,c,r[c],e,!Object(i["k"])(r,c))}}return c}function Un(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=Object(i["k"])(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&Object(i["q"])(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(ir(s),r=i[n]=e.call(null,t),rr())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==Object(i["l"])(n)||(r=!0))}return r}function qn(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!Object(i["q"])(e)){const r=e=>{l=!0;const[n,r]=qn(e,t,!0);Object(i["h"])(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,i["a"]),i["a"];if(Object(i["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(i["e"])(o[h]);Bn(e)&&(a[e]=i["b"])}else if(o){0;for(const e in o){const t=Object(i["e"])(e);if(Bn(t)){const n=o[e],r=a[t]=Object(i["o"])(n)||Object(i["q"])(n)?{type:n}:n;if(r){const e=$n(Boolean,r.type),n=$n(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||Object(i["k"])(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function Bn(e){return"$"!==e[0]}function Wn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Hn(e,t){return Wn(e)===Wn(t)}function $n(e,t){return Object(i["o"])(t)?t.findIndex(t=>Hn(t,e)):Object(i["q"])(t)&&Hn(t,e)?0:-1}const Vn=e=>"_"===e[0]||"$stable"===e,zn=e=>Object(i["o"])(e)?e.map(Hi):[Hi(e)],Gn=(e,t,n)=>{const i=kt((...e)=>zn(t(...e)),n);return i._c=!1,i},Kn=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Vn(s))continue;const n=e[s];if(Object(i["q"])(n))t[s]=Gn(s,n,r);else if(null!=n){0;const e=zn(n);t[s]=()=>e}}},Yn=(e,t)=>{const n=zn(t);e.slots.default=()=>n},Jn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ie(t),Object(i["g"])(t,"_",n)):Kn(t,e.slots={})}else e.slots={},t&&Yn(e,t);Object(i["g"])(e.slots,Ri,1)},Qn=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i["b"];if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(i["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,Kn(t,s)),a=t}else t&&(Yn(e,t),a={default:1});if(o)for(const i in s)Vn(i)||i in a||delete s[i]};function Xn(e,t){const n=wt;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i["b"]]=t[o];Object(i["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&Wt(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Zn(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(E(),$e(c,n,8,[e.el,a,e,t]),C())}}function ei(){return{app:null,config:{isNativeTag:i["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ti=0;function ni(e,t){return function(n,r=null){null==r||Object(i["w"])(r)||(r=null);const s=ei(),o=new Set;let a=!1;const c=s.app={_uid:ti++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:br,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(i["q"])(e.install)?(o.add(e),e.install(c,...t)):Object(i["q"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,l){if(!a){const u=Di(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,mr(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function ii(e,t,n,r,s=!1){if(Object(i["o"])(e))return void e.forEach((e,o)=>ii(e,t&&(Object(i["o"])(t)?t[o]:t),n,r,s));if(en(r)&&!s)return;const o=4&r.shapeFlag?mr(r.component)||r.component.proxy:r.el,a=s?null:o,{i:c,r:l}=e;const u=t&&t.r,h=c.refs===i["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=u&&u!==l&&(Object(i["E"])(u)?(h[u]=null,Object(i["k"])(d,u)&&(d[u]=null)):Pe(u)&&(u.value=null)),Object(i["q"])(l))He(l,c,12,[a,h]);else{const t=Object(i["E"])(l),r=Pe(l);if(t||r){const r=()=>{if(e.f){const n=t?h[l]:l.value;s?Object(i["o"])(n)&&Object(i["L"])(n,o):Object(i["o"])(n)?n.includes(o)||n.push(o):t?h[l]=[o]:(l.value=[o],e.k&&(h[e.k]=l.value))}else t?(h[l]=a,Object(i["k"])(d,l)&&(d[l]=a)):Pe(l)&&(l.value=a,e.k&&(h[e.k]=a))};a?(r.id=-1,si(r,n)):r()}else 0}}function ri(){}const si=Nt;function oi(e){return ai(e)}function ai(e,t){ri();const n=Object(i["i"])();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=i["d"],cloneNode:m,insertStaticContent:g}=e,_=(e,t,n,i=null,r=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ai(e,t)&&(i=K(e),H(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case vi:v(e,t,n,i);break;case yi:b(e,t,n,i);break;case bi:null==e&&w(t,n,i,o);break;case _i:P(e,t,n,i,r,s,o,a,c);break;default:1&h?k(e,t,n,i,r,s,o,a,c):6&h?N(e,t,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,i,r,s,o,a,c,J)}null!=u&&r&&ii(u,e&&e.ref,s,t||e,!t)},v=(e,t,n,i)=>{if(null==e)r(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},b=(e,t,n,i)=>{null==e?r(t.el=l(t.children||""),n,i):t.el=e.el},w=(e,t,n,i)=>{[e.el,e.anchor]=g(e.children,t,n,i,e.el,e.anchor)},O=({el:e,anchor:t},n,i)=>{let s;while(e&&e!==t)s=f(e),r(e,n,i),e=s;r(t,n,i)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},k=(e,t,n,i,r,s,o,a,c)=>{o=o||"svg"===t.type,null==e?I(t,n,i,r,s,o,a,c):j(e,t,r,s,o,a,c)},I=(e,t,n,s,c,l,u,d)=>{let f,p;const{type:g,props:_,shapeFlag:v,transition:y,patchFlag:b,dirs:w}=e;if(e.el&&void 0!==m&&-1===b)f=e.el=m(e.el);else{if(f=e.el=a(e.type,l,_&&_.is,_),8&v?h(f,e.children):16&v&&x(e.children,f,null,s,c,l&&"foreignObject"!==g,u,d),w&&Zn(e,null,s,"created"),_){for(const t in _)"value"===t||Object(i["A"])(t)||o(f,t,null,_[t],l,e.children,s,c,G);"value"in _&&o(f,"value",null,_.value),(p=_.onVnodeBeforeMount)&&Gi(p,s,e)}S(f,e,e.scopeId,u,s)}w&&Zn(e,null,s,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(f),r(f,t,n),((p=_&&_.onVnodeMounted)||O||w)&&si(()=>{p&&Gi(p,s,e),O&&y.enter(f),w&&Zn(e,null,s,"mounted")},c)},S=(e,t,n,i,r)=>{if(n&&p(e,n),i)for(let s=0;s<i.length;s++)p(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;S(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},x=(e,t,n,i,r,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?$i(e[l]):Hi(e[l]);_(null,c,t,n,i,r,s,o,a)}},j=(e,t,n,r,s,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i["b"],m=t.props||i["b"];let g;n&&ci(n,!1),(g=m.onVnodeBeforeUpdate)&&Gi(g,n,t,e),f&&Zn(t,e,n,"beforeUpdate"),n&&ci(n,!0);const _=s&&"foreignObject"!==t.type;if(d?A(e.dynamicChildren,d,l,n,r,_,a):c||U(e,t,l,null,n,r,_,a,!1),u>0){if(16&u)R(l,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&o(l,"class",null,m.class,s),4&u&&o(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],c=p[a],u=m[a];u===c&&"value"!==a||o(l,a,c,u,s,e.children,n,r,G)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||R(l,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&si(()=>{g&&Gi(g,n,t,e),f&&Zn(t,e,n,"updated")},r)},A=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===_i||!Ai(c,l)||70&c.shapeFlag)?d(c.el):n;_(c,l,u,null,i,r,s,o,!0)}},R=(e,t,n,r,s,a,c)=>{if(n!==r){for(const l in r){if(Object(i["A"])(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&o(e,l,h,u,c,t.children,s,a,G)}if(n!==i["b"])for(const l in n)Object(i["A"])(l)||l in r||o(e,l,n[l],null,c,t.children,s,a,G);"value"in r&&o(e,"value",n.value,r.value)}},P=(e,t,n,i,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(r(h,n,i),r(d,n,i),x(t.children,n,d,s,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&li(e,t,!0)):U(e,t,n,d,s,o,a,l,u)},N=(e,t,n,i,r,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,c):L(t,n,i,r,s,o,c):D(e,t,c)},L=(e,t,n,i,r,s,o)=>{const a=e.component=er(e,i,r);if(tn(e)&&(a.ctx.renderer=J),lr(a),a.asyncDep){if(r&&r.registerDep(a,M),!e.el){const e=a.subTree=Di(yi);b(null,e,t,n)}}else M(a,e,t,n,r,s,o)},D=(e,t,n)=>{const i=t.component=e.component;if(jt(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void F(i,t,n);i.next=t,ut(i.update),i.update()}else t.component=e.component,t.el=e.el,i.vnode=t},M=(e,t,n,r,s,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:c,parent:l,vnode:u}=e,h=n;0,ci(e,!1),n?(n.el=u.el,F(e,n,a)):n=u,r&&Object(i["n"])(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Gi(t,l,n,u),ci(e,!0);const f=It(e);0;const p=e.subTree;e.subTree=f,_(p,f,d(p.el),K(p),e,s,o),n.el=f.el,null===h&&Rt(e,f.el),c&&si(c,s),(t=n.props&&n.props.onVnodeUpdated)&&si(()=>Gi(t,l,n,u),s)}else{let a;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=en(t);if(ci(e,!1),u&&Object(i["n"])(u),!f&&(a=l&&l.onVnodeBeforeMount)&&Gi(a,d,t),ci(e,!0),c&&X){const n=()=>{e.subTree=It(e),X(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const i=e.subTree=It(e);0,_(null,i,n,r,e,s,o),t.el=i.el}if(h&&si(h,s),!f&&(a=l&&l.onVnodeMounted)){const e=t;si(()=>Gi(a,d,e),s)}256&t.shapeFlag&&e.a&&si(e.a,s),e.isMounted=!0,t=n=r=null}},l=e.effect=new y(c,()=>ct(e.update),e.scope),u=e.update=l.run.bind(l);u.id=e.uid,ci(e,!0),u()},F=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Mn(e,t.props,i,n),Qn(e,t.children,n),E(),pt(void 0,e.update),C()},U=(e,t,n,i,r,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(l,d,n,i,r,s,o,a,c);if(256&f)return void q(l,d,n,i,r,s,o,a,c)}8&p?(16&u&&G(l,r,s),d!==l&&h(n,d)):16&u?16&p?B(l,d,n,i,r,s,o,a,c):G(l,r,s,!0):(8&u&&h(n,""),16&p&&x(d,n,i,r,s,o,a,c))},q=(e,t,n,r,s,o,a,c,l)=>{e=e||i["a"],t=t||i["a"];const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=t[f]=l?$i(t[f]):Hi(t[f]);_(e[f],i,n,null,s,o,a,c,l)}u>h?G(e,s,o,!0,!1,d):x(t,n,r,s,o,a,c,l,d)},B=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const i=e[u],r=t[u]=l?$i(t[u]):Hi(t[u]);if(!Ai(i,r))break;_(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const i=e[d],r=t[f]=l?$i(t[f]):Hi(t[f]);if(!Ai(i,r))break;_(i,r,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)_(null,t[u]=l?$i(t[u]):Hi(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)H(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?$i(t[u]):Hi(t[u]);null!=e.key&&g.set(e.key,u)}let v,y=0;const b=f-m+1;let w=!1,O=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=p;u<=d;u++){const i=e[u];if(y>=b){H(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(v=m;v<=f;v++)if(0===E[v-m]&&Ai(i,t[v])){r=v;break}void 0===r?H(i,s,o,!0):(E[r-m]=u+1,r>=O?O=r:w=!0,_(i,t[r],n,null,s,o,a,c,l),y++)}const C=w?ui(E):i["a"];for(v=C.length-1,u=b-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===E[u]?_(null,i,n,d,s,o,a,c,l):w&&(v<0||u!==C[v]?W(i,n,d,2):v--)}}},W=(e,t,n,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,J);if(a===_i){r(o,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,i);return void r(e.anchor,t,n)}if(a===bi)return void O(e,t,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),r(o,t,n),si(()=>c.enter(o),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>r(o,t,n),l=()=>{e(o,()=>{a(),s&&s()})};i?i(o,a,l):l()}else r(o,t,n)},H=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&ii(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!en(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Gi(m,t,e),6&u)z(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);f&&Zn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,J,i):l&&(s!==_i||h>0&&64&h)?G(l,t,n,!1,!0):(s===_i&&384&h||!r&&16&u)&&G(c,t,n),i&&$(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&si(()=>{m&&Gi(m,t,e),f&&Zn(e,null,t,"unmounted")},n)},$=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===_i)return void V(n,i);if(t===bi)return void T(e);const o=()=>{s(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,s=()=>t(n,o);i?i(e.el,o,s):s()}else o()},V=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},z=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&Object(i["n"])(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&si(c,t),si(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,i,r)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Y=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),mt(),t._vnode=e},J={p:_,um:H,m:W,r:$,mt:L,mc:x,pc:U,pbc:A,n:K,o:e};let Q,X;return t&&([Q,X]=t(J)),{render:Y,hydrate:Q,createApp:ni(Y,Q)}}function ci({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function li(e,t,n=!1){const r=e.children,s=t.children;if(Object(i["o"])(r)&&Object(i["o"])(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=$i(s[i]),t.el=e.el),n||li(e,t))}}function ui(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const c=e[i];if(0!==c){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const hi=e=>e.__isTeleport;const di="components";function fi(e,t){return mi(di,e,!0,t)||e}const pi=Symbol();function mi(e,t,n=!0,r=!1){const s=wt||tr;if(s){const n=s.type;if(e===di){const e=gr(n);if(e&&(e===t||e===Object(i["e"])(t)||e===Object(i["f"])(Object(i["e"])(t))))return n}const o=gi(s[e]||n[e],t)||gi(s.appContext[e],t);return!o&&r?n:o}}function gi(e,t){return e&&(e[t]||e[Object(i["e"])(t)]||e[Object(i["f"])(Object(i["e"])(t))])}const _i=Symbol(void 0),vi=Symbol(void 0),yi=Symbol(void 0),bi=Symbol(void 0),wi=[];let Oi=null;function Ei(e=!1){wi.push(Oi=e?null:[])}function Ci(){wi.pop(),Oi=wi[wi.length-1]||null}let Ti=1;function ki(e){Ti+=e}function Ii(e){return e.dynamicChildren=Ti>0?Oi||i["a"]:null,Ci(),Ti>0&&Oi&&Oi.push(e),e}function Si(e,t,n,i,r,s){return Ii(Li(e,t,n,i,r,s,!0))}function xi(e,t,n,i,r){return Ii(Di(e,t,n,i,r,!0))}function ji(e){return!!e&&!0===e.__v_isVNode}function Ai(e,t){return e.type===t.type&&e.key===t.key}const Ri="__vInternal",Pi=({key:e})=>null!=e?e:null,Ni=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(i["E"])(e)||Pe(e)||Object(i["q"])(e)?{i:wt,r:e,k:t,f:!!n}:e:null;function Li(e,t=null,n=null,r=0,s=null,o=(e===_i?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Pi(t),ref:t&&Ni(t),scopeId:Ot,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Vi(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=Object(i["E"])(n)?8:16),Ti>0&&!a&&Oi&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Oi.push(l),l}const Di=Mi;function Mi(e,t=null,n=null,r=0,s=null,o=!1){if(e&&e!==pi||(e=yi),ji(e)){const i=Ui(e,t,!0);return n&&Vi(i,n),i}if(_r(e)&&(e=e.__vccOpts),t){t=Fi(t);let{class:e,style:n}=t;e&&!Object(i["E"])(e)&&(t.class=Object(i["J"])(e)),Object(i["w"])(n)&&(ke(n)&&!Object(i["o"])(n)&&(n=Object(i["h"])({},n)),t.style=Object(i["K"])(n))}const a=Object(i["E"])(e)?1:Pt(e)?128:hi(e)?64:Object(i["w"])(e)?4:Object(i["q"])(e)?2:0;return Li(e,t,n,r,s,a,o,!0)}function Fi(e){return e?ke(e)||Ri in e?Object(i["h"])({},e):e:null}function Ui(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?zi(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Pi(c),ref:t&&t.ref?n&&s?Object(i["o"])(s)?s.concat(Ni(t)):[s,Ni(t)]:Ni(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_i?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ui(e.ssContent),ssFallback:e.ssFallback&&Ui(e.ssFallback),el:e.el,anchor:e.anchor};return l}function qi(e=" ",t=0){return Di(vi,null,e,t)}function Bi(e,t){const n=Di(bi,null,e);return n.staticCount=t,n}function Wi(e="",t=!1){return t?(Ei(),xi(yi,null,e)):Di(yi,null,e)}function Hi(e){return null==e||"boolean"===typeof e?Di(yi):Object(i["o"])(e)?Di(_i,null,e.slice()):"object"===typeof e?$i(e):Di(vi,null,String(e))}function $i(e){return null===e.el||e.memo?e:Ui(e)}function Vi(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Object(i["o"])(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Vi(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Ri in t?3===i&&wt&&(1===wt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=wt}}else Object(i["q"])(t)?(t={default:t,_ctx:wt},n=32):(t=String(t),64&r?(n=16,t=[qi(t)]):n=8);e.children=t,e.shapeFlag|=n}function zi(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Object(i["J"])([t.class,r.class]));else if("style"===e)t.style=Object(i["K"])([t.style,r.style]);else if(Object(i["x"])(e)){const n=t[e],s=r[e];!s||n===s||Object(i["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function Gi(e,t,n,i=null){$e(e,t,7,[n,i])}function Ki(e,t,n,r){let s;const o=n&&n[r];if(Object(i["o"])(e)||Object(i["E"])(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(i["w"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[r]=s),s}const Yi=e=>e?sr(e)?mr(e)||e.proxy:Yi(e.parent):null,Ji=Object(i["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yi(e.parent),$root:e=>Yi(e.root),$emit:e=>e.emit,$options:e=>In(e),$forceUpdate:e=>()=>ct(e.update),$nextTick:e=>ot.bind(e.proxy),$watch:e=>qt.bind(e)}),Qi={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(r!==i["b"]&&Object(i["k"])(r,t))return a[t]=1,r[t];if(s!==i["b"]&&Object(i["k"])(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&Object(i["k"])(u,t))return a[t]=3,o[t];if(n!==i["b"]&&Object(i["k"])(n,t))return a[t]=4,n[t];On&&(a[t]=0)}}const h=Ji[t];let d,f;return h?("$attrs"===t&&T(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==i["b"]&&Object(i["k"])(n,t)?(a[t]=4,n[t]):(f=l.config.globalProperties,Object(i["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i["b"]&&Object(i["k"])(s,t)?(s[t]=n,!0):r!==i["b"]&&Object(i["k"])(r,t)?(r[t]=n,!0):!Object(i["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i["b"]&&Object(i["k"])(e,a)||t!==i["b"]&&Object(i["k"])(t,a)||(c=o[0])&&Object(i["k"])(c,a)||Object(i["k"])(r,a)||Object(i["k"])(Ji,a)||Object(i["k"])(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?this.set(e,t,n.get(),null):null!=n.value&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const Xi=ei();let Zi=0;function er(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Xi,a={uid:Zi++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qn(r,o),emitsOptions:yt(r,o),emit:null,emitted:null,propsDefaults:i["b"],inheritAttrs:r.inheritAttrs,ctx:i["b"],data:i["b"],props:i["b"],attrs:i["b"],slots:i["b"],refs:i["b"],setupState:i["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=vt.bind(null,a),e.ce&&e.ce(a),a}let tr=null;const nr=()=>tr||wt,ir=e=>{tr=e,e.scope.on()},rr=()=>{tr&&tr.scope.off(),tr=null};function sr(e){return 4&e.vnode.shapeFlag}let or,ar,cr=!1;function lr(e,t=!1){cr=t;const{props:n,children:i}=e.vnode,r=sr(e);Dn(e,n,r,t),Jn(e,i);const s=r?ur(e,t):void 0;return cr=!1,s}function ur(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Se(new Proxy(e.ctx,Qi));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?pr(e):null;ir(e),E();const s=He(r,e,0,[e.props,n]);if(C(),rr(),Object(i["z"])(s)){if(s.then(rr,rr),t)return s.then(n=>{hr(e,n,t)}).catch(t=>{Ve(t,e,0)});e.asyncDep=s}else hr(e,s,t)}else dr(e,t)}function hr(e,t,n){Object(i["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(i["w"])(t)&&(e.setupState=qe(t)),dr(e,n)}function dr(e,t,n){const r=e.type;if(!e.render){if(!t&&or&&!r.render){const t=r.template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=r,c=Object(i["h"])(Object(i["h"])({isCustomElement:n,delimiters:o},s),a);r.render=or(t,c)}}e.render=r.render||i["d"],ar&&ar(e)}ir(e),E(),En(e),C(),rr()}function fr(e){return new Proxy(e.attrs,{get(t,n){return T(e,"get","$attrs"),t[n]}})}function pr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=fr(e))},slots:e.slots,emit:e.emit,expose:t}}function mr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(qe(Se(e.exposed)),{get(t,n){return n in t?t[n]:n in Ji?Ji[n](e):void 0}}))}function gr(e){return Object(i["q"])(e)&&e.displayName||e.name}function _r(e){return Object(i["q"])(e)&&"__vccOpts"in e}const vr=(e,t)=>We(e,t,cr);function yr(e,t,n){const r=arguments.length;return 2===r?Object(i["w"])(t)&&!Object(i["o"])(t)?ji(t)?Di(e,null,[t]):Di(e,t):Di(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ji(n)&&(n=[n]),Di(e,t,n))}Symbol("");const br="3.2.31",wr="http://www.w3.org/2000/svg",Or="undefined"!==typeof document?document:null,Er=Or&&Or.createElement("template"),Cr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?Or.createElementNS(wr,e):Or.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>Or.createTextNode(e),createComment:e=>Or.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Or.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{Er.innerHTML=i?`<svg>${e}</svg>`:e;const r=Er.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Tr(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function kr(e,t,n){const r=e.style,s=Object(i["E"])(n);if(n&&!s){for(const e in n)Sr(r,e,n[e]);if(t&&!Object(i["E"])(t))for(const e in t)null==n[e]&&Sr(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ir=/\s*!important$/;function Sr(e,t,n){if(Object(i["o"])(n))n.forEach(n=>Sr(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Ar(e,t);Ir.test(n)?e.setProperty(Object(i["l"])(r),n.replace(Ir,""),"important"):e[r]=n}}const xr=["Webkit","Moz","ms"],jr={};function Ar(e,t){const n=jr[t];if(n)return n;let r=Object(i["e"])(t);if("filter"!==r&&r in e)return jr[t]=r;r=Object(i["f"])(r);for(let i=0;i<xr.length;i++){const n=xr[i]+r;if(n in e)return jr[t]=n}return t}const Rr="http://www.w3.org/1999/xlink";function Pr(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Rr,t.slice(6,t.length)):e.setAttributeNS(Rr,t,n);else{const r=Object(i["D"])(t);null==n||r&&!Object(i["m"])(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Nr(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if("boolean"===r)return void(e[t]=Object(i["m"])(n));if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let Lr=Date.now,Dr=!1;if("undefined"!==typeof window){Lr()>document.createEvent("Event").timeStamp&&(Lr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Dr=!!(e&&Number(e[1])<=53)}let Mr=0;const Fr=Promise.resolve(),Ur=()=>{Mr=0},qr=()=>Mr||(Fr.then(Ur),Mr=Lr());function Br(e,t,n,i){e.addEventListener(t,n,i)}function Wr(e,t,n,i){e.removeEventListener(t,n,i)}function Hr(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=Vr(t);if(i){const o=s[t]=zr(i,r);Br(e,n,o,a)}else o&&(Wr(e,n,o,a),s[t]=void 0)}}const $r=/(?:Once|Passive|Capture)$/;function Vr(e){let t;if($r.test(e)){let n;t={};while(n=e.match($r))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(i["l"])(e.slice(2)),t]}function zr(e,t){const n=e=>{const i=e.timeStamp||Lr();(Dr||i>=n.attached-1)&&$e(Gr(e,n.value),t,5,[e])};return n.value=e,n.attached=qr(),n}function Gr(e,t){if(Object(i["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Kr=/^on[a-z]/,Yr=(e,t,n,r,s=!1,o,a,c,l)=>{"class"===t?Tr(e,r,s):"style"===t?kr(e,n,r):Object(i["x"])(t)?Object(i["v"])(t)||Hr(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Jr(e,t,r,s))?Nr(e,t,r,o,a,c,l):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),Pr(e,t,r,s))};function Jr(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&Kr.test(t)&&Object(i["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Kr.test(t)||!Object(i["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Qr="transition",Xr="animation",Zr=(e,{slots:t})=>yr(zt,is(e),t);Zr.displayName="Transition";const es={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ts=(Zr.props=Object(i["h"])({},zt.props,es),(e,t=[])=>{Object(i["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),ns=e=>!!e&&(Object(i["o"])(e)?e.some(e=>e.length>1):e.length>1);function is(e){const t={};for(const i in e)i in es||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=rs(s),g=m&&m[0],_=m&&m[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:O,onBeforeAppear:E=v,onAppear:C=y,onAppearCancelled:T=b}=t,k=(e,t,n)=>{as(e,t?h:c),as(e,t?u:a),n&&n()},I=(e,t)=>{as(e,p),as(e,f),t&&t()},S=e=>(t,n)=>{const i=e?C:y,s=()=>k(t,e,n);ts(i,[t,s]),cs(()=>{as(t,e?l:o),os(t,e?h:c),ns(i)||us(t,r,g,s)})};return Object(i["h"])(t,{onBeforeEnter(e){ts(v,[e]),os(e,o),os(e,a)},onBeforeAppear(e){ts(E,[e]),os(e,l),os(e,u)},onEnter:S(!1),onAppear:S(!0),onLeave(e,t){const n=()=>I(e,t);os(e,d),ps(),os(e,f),cs(()=>{as(e,d),os(e,p),ns(w)||us(e,r,_,n)}),ts(w,[e,n])},onEnterCancelled(e){k(e,!1),ts(b,[e])},onAppearCancelled(e){k(e,!0),ts(T,[e])},onLeaveCancelled(e){I(e),ts(O,[e])}})}function rs(e){if(null==e)return null;if(Object(i["w"])(e))return[ss(e.enter),ss(e.leave)];{const t=ss(e);return[t,t]}}function ss(e){const t=Object(i["O"])(e);return t}function os(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function as(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function cs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ls=0;function us(e,t,n,i){const r=e._endId=++ls,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=hs(e,t);if(!o)return i();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,d)}function hs(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(Qr+"Delay"),s=i(Qr+"Duration"),o=ds(r,s),a=i(Xr+"Delay"),c=i(Xr+"Duration"),l=ds(a,c);let u=null,h=0,d=0;t===Qr?o>0&&(u=Qr,h=o,d=s.length):t===Xr?l>0&&(u=Xr,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Qr:Xr:null,d=u?u===Qr?s.length:c.length:0);const f=u===Qr&&/\b(transform|all)(,|$)/.test(n[Qr+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function ds(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>fs(t)+fs(e[n])))}function fs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ps(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ms=e=>{const t=e.props["onUpdate:modelValue"];return Object(i["o"])(t)?e=>Object(i["n"])(t,e):t};function gs(e){e.target.composing=!0}function _s(e){const t=e.target;t.composing&&(t.composing=!1,vs(t,"input"))}function vs(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const ys={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=ms(s);const o=r||s.props&&"number"===s.props.type;Br(e,t?"change":"input",t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():o&&(r=Object(i["O"])(r)),e._assign(r)}),n&&Br(e,"change",()=>{e.value=e.value.trim()}),t||(Br(e,"compositionstart",gs),Br(e,"compositionend",_s),Br(e,"change",_s))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=ms(o),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(i["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const bs={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Object(i["C"])(t);Br(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(i["O"])(Os(e)):Os(e));e._assign(e.multiple?s?new Set(t):t:t[0])}),e._assign=ms(r)},mounted(e,{value:t}){ws(e,t)},beforeUpdate(e,t,n){e._assign=ms(n)},updated(e,{value:t}){ws(e,t)}};function ws(e,t){const n=e.multiple;if(!n||Object(i["o"])(t)||Object(i["C"])(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],o=Os(s);if(n)Object(i["o"])(t)?s.selected=Object(i["H"])(t,o)>-1:s.selected=t.has(o);else if(Object(i["G"])(Os(s),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Os(e){return"_value"in e?e._value:e.value}const Es=["ctrl","shift","alt","meta"],Cs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Es.some(n=>e[n+"Key"]&&!t.includes(n))},Ts=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=Cs[t[e]];if(i&&i(n,t))return}return e(n,...i)};const ks=Object(i["h"])({patchProp:Yr},Cr);let Is;function Ss(){return Is||(Is=oi(ks))}const xs=(...e)=>{const t=Ss().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=js(e);if(!r)return;const s=t._component;Object(i["q"])(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function js(e){if(Object(i["E"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var i=n("da84"),r=n("1d80"),s=i.Object;e.exports=function(e){return s(r(e))}},"7b17":function(e,t,n){"use strict";n.d(t,"a",(function(){return fs})),n.d(t,"b",(function(){return ja})),n.d(t,"c",(function(){return co}));var i={};n.r(i),n.d(i,"top",(function(){return r})),n.d(i,"bottom",(function(){return s})),n.d(i,"right",(function(){return o})),n.d(i,"left",(function(){return a})),n.d(i,"auto",(function(){return c})),n.d(i,"basePlacements",(function(){return l})),n.d(i,"start",(function(){return u})),n.d(i,"end",(function(){return h})),n.d(i,"clippingParents",(function(){return d})),n.d(i,"viewport",(function(){return f})),n.d(i,"popper",(function(){return p})),n.d(i,"reference",(function(){return m})),n.d(i,"variationPlacements",(function(){return g})),n.d(i,"placements",(function(){return _})),n.d(i,"beforeRead",(function(){return v})),n.d(i,"read",(function(){return y})),n.d(i,"afterRead",(function(){return b})),n.d(i,"beforeMain",(function(){return w})),n.d(i,"main",(function(){return O})),n.d(i,"afterMain",(function(){return E})),n.d(i,"beforeWrite",(function(){return C})),n.d(i,"write",(function(){return T})),n.d(i,"afterWrite",(function(){return k})),n.d(i,"modifierPhases",(function(){return I})),n.d(i,"applyStyles",(function(){return L})),n.d(i,"arrow",(function(){return se})),n.d(i,"computeStyles",(function(){return he})),n.d(i,"eventListeners",(function(){return pe})),n.d(i,"flip",(function(){return De})),n.d(i,"hide",(function(){return qe})),n.d(i,"offset",(function(){return He})),n.d(i,"popperOffsets",(function(){return Ve})),n.d(i,"preventOverflow",(function(){return Ke})),n.d(i,"popperGenerator",(function(){return st})),n.d(i,"detectOverflow",(function(){return Re})),n.d(i,"createPopperBase",(function(){return ot})),n.d(i,"createPopper",(function(){return ct})),n.d(i,"createPopperLite",(function(){return ut}));var r="top",s="bottom",o="right",a="left",c="auto",l=[r,s,o,a],u="start",h="end",d="clippingParents",f="viewport",p="popper",m="reference",g=l.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+h])}),[]),_=[].concat(l,[c]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+h])}),[]),v="beforeRead",y="read",b="afterRead",w="beforeMain",O="main",E="afterMain",C="beforeWrite",T="write",k="afterWrite",I=[v,y,b,w,O,E,C,T,k];function S(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function j(e){var t=x(e).Element;return e instanceof t||e instanceof Element}function A(e){var t=x(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function R(e){if("undefined"===typeof ShadowRoot)return!1;var t=x(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function P(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];A(r)&&S(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))}function N(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});A(i)&&S(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:P,effect:N,requires:["computeStyles"]};function D(e){return e.split("-")[0]}var M=Math.max,F=Math.min,U=Math.round;function q(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,r=1;if(A(e)&&t){var s=e.offsetHeight,o=e.offsetWidth;o>0&&(i=U(n.width)/o||1),s>0&&(r=U(n.height)/s||1)}return{width:n.width/i,height:n.height/r,top:n.top/r,right:n.right/i,bottom:n.bottom/r,left:n.left/i,x:n.left/i,y:n.top/r}}function B(e){var t=q(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function W(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&R(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function H(e){return x(e).getComputedStyle(e)}function $(e){return["table","td","th"].indexOf(S(e))>=0}function V(e){return((j(e)?e.ownerDocument:e.document)||window.document).documentElement}function z(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||V(e)}function G(e){return A(e)&&"fixed"!==H(e).position?e.offsetParent:null}function K(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&A(e)){var i=H(e);if("fixed"===i.position)return null}var r=z(e);while(A(r)&&["html","body"].indexOf(S(r))<0){var s=H(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function Y(e){var t=x(e),n=G(e);while(n&&$(n)&&"static"===H(n).position)n=G(n);return n&&("html"===S(n)||"body"===S(n)&&"static"===H(n).position)?t:n||K(e)||t}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Q(e,t,n){return M(e,F(t,n))}function X(e,t,n){var i=Q(e,t,n);return i>n?n:i}function Z(){return{top:0,right:0,bottom:0,left:0}}function ee(e){return Object.assign({},Z(),e)}function te(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ne=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ee("number"!==typeof e?e:te(e,l))};function ie(e){var t,n=e.state,i=e.name,c=e.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=D(n.placement),d=J(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var m=ne(c.padding,n),g=B(l),_="y"===d?r:a,v="y"===d?s:o,y=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],b=u[d]-n.rects.reference[d],w=Y(l),O=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,E=y/2-b/2,C=m[_],T=O-g[p]-m[v],k=O/2-g[p]/2+E,I=Q(C,k,T),S=d;n.modifiersData[i]=(t={},t[S]=I,t.centerOffset=I-k,t)}}function re(e){var t=e.state,n=e.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r),r))&&W(t.elements.popper,r)&&(t.elements.arrow=r)}var se={name:"arrow",enabled:!0,phase:"main",fn:ie,effect:re,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var ae={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ce(e){var t=e.x,n=e.y,i=window,r=i.devicePixelRatio||1;return{x:U(t*r)/r||0,y:U(n*r)/r||0}}function le(e){var t,n=e.popper,i=e.popperRect,c=e.placement,l=e.variation,u=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=e.isFixed,_=u.x,v=void 0===_?0:_,y=u.y,b=void 0===y?0:y,w="function"===typeof m?m({x:v,y:b}):{x:v,y:b};v=w.x,b=w.y;var O=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),C=a,T=r,k=window;if(p){var I=Y(n),S="clientHeight",j="clientWidth";if(I===x(n)&&(I=V(n),"static"!==H(I).position&&"absolute"===d&&(S="scrollHeight",j="scrollWidth")),I=I,c===r||(c===a||c===o)&&l===h){T=s;var A=g&&k.visualViewport?k.visualViewport.height:I[S];b-=A-i.height,b*=f?1:-1}if(c===a||(c===r||c===s)&&l===h){C=o;var R=g&&k.visualViewport?k.visualViewport.width:I[j];v-=R-i.width,v*=f?1:-1}}var P,N=Object.assign({position:d},p&&ae),L=!0===m?ce({x:v,y:b}):{x:v,y:b};return v=L.x,b=L.y,f?Object.assign({},N,(P={},P[T]=E?"0":"",P[C]=O?"0":"",P.transform=(k.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",P)):Object.assign({},N,(t={},t[T]=E?b+"px":"",t[C]=O?v+"px":"",t.transform="",t))}function ue(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:D(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,le(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,le(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var he={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ue,data:{}},de={passive:!0};function fe(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,c=x(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,de)})),a&&c.addEventListener("resize",n.update,de),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,de)})),a&&c.removeEventListener("resize",n.update,de)}}var pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fe,data:{}},me={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return me[e]}))}var _e={start:"end",end:"start"};function ve(e){return e.replace(/start|end/g,(function(e){return _e[e]}))}function ye(e){var t=x(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function be(e){return q(V(e)).left+ye(e).scrollLeft}function we(e){var t=x(e),n=V(e),i=t.visualViewport,r=n.clientWidth,s=n.clientHeight,o=0,a=0;return i&&(r=i.width,s=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=i.offsetLeft,a=i.offsetTop)),{width:r,height:s,x:o+be(e),y:a}}function Oe(e){var t,n=V(e),i=ye(e),r=null==(t=e.ownerDocument)?void 0:t.body,s=M(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+be(e),c=-i.scrollTop;return"rtl"===H(r||n).direction&&(a+=M(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ee(e){var t=H(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Ce(e){return["html","body","#document"].indexOf(S(e))>=0?e.ownerDocument.body:A(e)&&Ee(e)?e:Ce(z(e))}function Te(e,t){var n;void 0===t&&(t=[]);var i=Ce(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),s=x(i),o=r?[s].concat(s.visualViewport||[],Ee(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(Te(z(o)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ie(e){var t=q(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Se(e,t){return t===f?ke(we(e)):j(t)?Ie(t):ke(Oe(V(e)))}function xe(e){var t=Te(z(e)),n=["absolute","fixed"].indexOf(H(e).position)>=0,i=n&&A(e)?Y(e):e;return j(i)?t.filter((function(e){return j(e)&&W(e,i)&&"body"!==S(e)})):[]}function je(e,t,n){var i="clippingParents"===t?xe(e):[].concat(t),r=[].concat(i,[n]),s=r[0],o=r.reduce((function(t,n){var i=Se(e,n);return t.top=M(i.top,t.top),t.right=F(i.right,t.right),t.bottom=F(i.bottom,t.bottom),t.left=M(i.left,t.left),t}),Se(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ae(e){var t,n=e.reference,i=e.element,c=e.placement,l=c?D(c):null,d=c?oe(c):null,f=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2;switch(l){case r:t={x:f,y:n.y-i.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-i.width,y:p};break;default:t={x:n.x,y:n.y}}var m=l?J(l):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case u:t[m]=t[m]-(n[g]/2-i[g]/2);break;case h:t[m]=t[m]+(n[g]/2-i[g]/2);break;default:}}return t}function Re(e,t){void 0===t&&(t={});var n=t,i=n.placement,a=void 0===i?e.placement:i,c=n.boundary,u=void 0===c?d:c,h=n.rootBoundary,g=void 0===h?f:h,_=n.elementContext,v=void 0===_?p:_,y=n.altBoundary,b=void 0!==y&&y,w=n.padding,O=void 0===w?0:w,E=ee("number"!==typeof O?O:te(O,l)),C=v===p?m:p,T=e.rects.popper,k=e.elements[b?C:v],I=je(j(k)?k:k.contextElement||V(e.elements.popper),u,g),S=q(e.elements.reference),x=Ae({reference:S,element:T,strategy:"absolute",placement:a}),A=ke(Object.assign({},T,x)),R=v===p?A:S,P={top:I.top-R.top+E.top,bottom:R.bottom-I.bottom+E.bottom,left:I.left-R.left+E.left,right:R.right-I.right+E.right},N=e.modifiersData.offset;if(v===p&&N){var L=N[a];Object.keys(P).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[r,s].indexOf(e)>=0?"y":"x";P[e]+=L[n]*t}))}return P}function Pe(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?_:c,h=oe(i),d=h?a?g:g.filter((function(e){return oe(e)===h})):l,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Re(e,{placement:n,boundary:r,rootBoundary:s,padding:o})[D(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Ne(e){if(D(e)===c)return[];var t=ge(e);return[ve(e),t,ve(t)]}function Le(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var l=n.mainAxis,h=void 0===l||l,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,_=n.rootBoundary,v=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,O=t.options.placement,E=D(O),C=E===O,T=p||(C||!b?[ge(O)]:Ne(O)),k=[O].concat(T).reduce((function(e,n){return e.concat(D(n)===c?Pe(t,{placement:n,boundary:g,rootBoundary:_,padding:m,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),I=t.rects.reference,S=t.rects.popper,x=new Map,j=!0,A=k[0],R=0;R<k.length;R++){var P=k[R],N=D(P),L=oe(P)===u,M=[r,s].indexOf(N)>=0,F=M?"width":"height",U=Re(t,{placement:P,boundary:g,rootBoundary:_,altBoundary:v,padding:m}),q=M?L?o:a:L?s:r;I[F]>S[F]&&(q=ge(q));var B=ge(q),W=[];if(h&&W.push(U[N]<=0),f&&W.push(U[q]<=0,U[B]<=0),W.every((function(e){return e}))){A=P,j=!1;break}x.set(P,W)}if(j)for(var H=b?3:1,$=function(e){var t=k.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},V=H;V>0;V--){var z=$(V);if("break"===z)break}t.placement!==A&&(t.modifiersData[i]._skip=!0,t.placement=A,t.reset=!0)}}var De={name:"flip",enabled:!0,phase:"main",fn:Le,requiresIfExists:["offset"],data:{_skip:!1}};function Me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Fe(e){return[r,o,s,a].some((function(t){return e[t]>=0}))}function Ue(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=Re(t,{elementContext:"reference"}),a=Re(t,{altBoundary:!0}),c=Me(o,i),l=Me(a,r,s),u=Fe(c),h=Fe(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var qe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ue};function Be(e,t,n){var i=D(e),s=[a,r].indexOf(i)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*s,[a,o].indexOf(i)>=0?{x:u,y:l}:{x:l,y:u}}function We(e){var t=e.state,n=e.options,i=e.name,r=n.offset,s=void 0===r?[0,0]:r,o=_.reduce((function(e,n){return e[n]=Be(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=o}var He={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:We};function $e(e){var t=e.state,n=e.name;t.modifiersData[n]=Ae({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ve={name:"popperOffsets",enabled:!0,phase:"read",fn:$e,data:{}};function ze(e){return"x"===e?"y":"x"}function Ge(e){var t=e.state,n=e.options,i=e.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,_=n.tether,v=void 0===_||_,y=n.tetherOffset,b=void 0===y?0:y,w=Re(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),O=D(t.placement),E=oe(t.placement),C=!E,T=J(O),k=ze(T),I=t.modifiersData.popperOffsets,S=t.rects.reference,x=t.rects.popper,j="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,A="number"===typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(I){if(l){var N,L="y"===T?r:a,U="y"===T?s:o,q="y"===T?"height":"width",W=I[T],H=W+w[L],$=W-w[U],V=v?-x[q]/2:0,z=E===u?S[q]:x[q],G=E===u?-x[q]:-S[q],K=t.elements.arrow,ee=v&&K?B(K):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Z(),ne=te[L],ie=te[U],re=Q(0,S[q],ee[q]),se=C?S[q]/2-V-re-ne-A.mainAxis:z-re-ne-A.mainAxis,ae=C?-S[q]/2+V+re+ie+A.mainAxis:G+re+ie+A.mainAxis,ce=t.elements.arrow&&Y(t.elements.arrow),le=ce?"y"===T?ce.clientTop||0:ce.clientLeft||0:0,ue=null!=(N=null==R?void 0:R[T])?N:0,he=W+se-ue-le,de=W+ae-ue,fe=Q(v?F(H,he):H,W,v?M($,de):$);I[T]=fe,P[T]=fe-W}if(d){var pe,me="x"===T?r:a,ge="x"===T?s:o,_e=I[k],ve="y"===k?"height":"width",ye=_e+w[me],be=_e-w[ge],we=-1!==[r,a].indexOf(O),Oe=null!=(pe=null==R?void 0:R[k])?pe:0,Ee=we?ye:_e-S[ve]-x[ve]-Oe+A.altAxis,Ce=we?_e+S[ve]+x[ve]-Oe-A.altAxis:be,Te=v&&we?X(Ee,_e,Ce):Q(v?Ee:ye,_e,v?Ce:be);I[k]=Te,P[k]=Te-_e}t.modifiersData[i]=P}}var Ke={name:"preventOverflow",enabled:!0,phase:"main",fn:Ge,requiresIfExists:["offset"]};function Ye(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Je(e){return e!==x(e)&&A(e)?Ye(e):ye(e)}function Qe(e){var t=e.getBoundingClientRect(),n=U(t.width)/e.offsetWidth||1,i=U(t.height)/e.offsetHeight||1;return 1!==n||1!==i}function Xe(e,t,n){void 0===n&&(n=!1);var i=A(t),r=A(t)&&Qe(t),s=V(t),o=q(e,r),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&(("body"!==S(t)||Ee(s))&&(a=Je(t)),A(t)?(c=q(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=be(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Ze(e){var t=new Map,n=new Set,i=[];function r(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),i}function et(e){var t=Ze(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function tt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function nt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var it={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function st(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,s=void 0===r?it:r;return function(e,t,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},it,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:j(e)?Te(e):e.contextElement?Te(e.contextElement):[],popper:Te(t)};var a=et(nt([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(e){return e.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var e=r.elements,t=e.reference,n=e.popper;if(rt(t,n)){r.rects={reference:Xe(t,Y(n),"fixed"===r.options.strategy),popper:B(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(r=o({state:r,options:u,name:h,instance:c})||r)}else r.reset=!1,i=-1}}},update:tt((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){u(),a=!0}};if(!rt(e,t))return c;function l(){r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:r,name:t,instance:c,options:i}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ot=st(),at=[pe,Ve,he,L,He,De,Ke,se,qe],ct=st({defaultModifiers:at}),lt=[pe,Ve,he,L],ut=st({defaultModifiers:lt});
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ht=3,dt={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let i=e.parentNode;while(i&&i.nodeType===Node.ELEMENT_NODE&&i.nodeType!==ht)i.matches(t)&&n.push(i),i=i.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]}},ft=1e6,pt=1e3,mt="transitionend",gt=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),_t=e=>{do{e+=Math.floor(Math.random()*ft)}while(document.getElementById(e));return e},vt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},yt=e=>{const t=vt(e);return t&&document.querySelector(t)?t:null},bt=e=>{const t=vt(e);return t?document.querySelector(t):null},wt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),r=Number.parseFloat(n);return i||r?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*pt):0},Ot=e=>{e.dispatchEvent(new Event(mt))},Et=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),Ct=e=>Et(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?dt.findOne(e):null,Tt=(e,t,n)=>{Object.keys(n).forEach(i=>{const r=n[i],s=t[i],o=s&&Et(s)?"element":gt(s);if(!new RegExp(r).test(o))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)})},kt=e=>!(!Et(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),It=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),St=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?St(e.parentNode):null},xt=()=>{},jt=e=>e.offsetHeight,At=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},Rt=[],Pt=e=>{"loading"===document.readyState?(Rt.length||document.addEventListener("DOMContentLoaded",()=>{Rt.forEach(e=>e())}),Rt.push(e)):e()},Nt=()=>"rtl"===document.documentElement.dir,Lt=e=>{Pt(()=>{const t=At();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}})},Dt=e=>{"function"===typeof e&&e()},Mt=(e,t,n=!0)=>{if(!n)return void Dt(e);const i=5,r=wt(t)+i;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(mt,o),Dt(e))};t.addEventListener(mt,o),setTimeout(()=>{s||Ot(t)},r)},Ft=(e,t,n,i)=>{let r=e.indexOf(t);if(-1===r)return e[!n&&i?e.length-1:0];const s=e.length;return r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))]},Ut=/[^.]*(?=\..*)\.|.*/,qt=/\..*/,Bt=/::\d+$/,Wt={};let Ht=1;const $t={mouseenter:"mouseover",mouseleave:"mouseout"},Vt=/^(mouseenter|mouseleave)/i,zt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Gt(e,t){return t&&`${t}::${Ht++}`||e.uidEvent||Ht++}function Kt(e){const t=Gt(e);return e.uidEvent=t,Wt[t]=Wt[t]||{},Wt[t]}function Yt(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&rn.off(e,i.type,t),t.apply(e,[i])}}function Jt(e,t,n){return function i(r){const s=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return r.delegateTarget=o,i.oneOff&&rn.off(e,r.type,t,n),n.apply(o,[r]);return null}}function Qt(e,t,n=null){const i=Object.keys(e);for(let r=0,s=i.length;r<s;r++){const s=e[i[r]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function Xt(e,t,n){const i="string"===typeof t,r=i?n:t;let s=nn(e);const o=zt.has(s);return o||(s=e),[i,r,s]}function Zt(e,t,n,i,r){if("string"!==typeof t||!e)return;if(n||(n=i,i=null),Vt.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i?i=e(i):n=e(n)}const[s,o,a]=Xt(t,n,i),c=Kt(e),l=c[a]||(c[a]={}),u=Qt(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=Gt(o,t.replace(Ut,"")),d=s?Jt(e,n,i):Yt(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=r,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function en(e,t,n,i,r){const s=Qt(t[n],i,r);s&&(e.removeEventListener(n,s,Boolean(r)),delete t[n][s.uidEvent])}function tn(e,t,n,i){const r=t[n]||{};Object.keys(r).forEach(s=>{if(s.includes(i)){const i=r[s];en(e,t,n,i.originalHandler,i.delegationSelector)}})}function nn(e){return e=e.replace(qt,""),$t[e]||e}const rn={on(e,t,n,i){Zt(e,t,n,i,!1)},one(e,t,n,i){Zt(e,t,n,i,!0)},off(e,t,n,i){if("string"!==typeof t||!e)return;const[r,s,o]=Xt(t,n,i),a=o!==t,c=Kt(e),l=t.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void en(e,c,o,s,r?n:null)}l&&Object.keys(c).forEach(n=>{tn(e,c,n,t.slice(1))});const u=c[o]||{};Object.keys(u).forEach(n=>{const i=n.replace(Bt,"");if(!a||t.includes(i)){const t=u[n];en(e,c,o,t.originalHandler,t.delegationSelector)}})},trigger(e,t,n){if("string"!==typeof t||!e)return null;const i=At(),r=nn(t),s=t!==r,o=zt.has(r);let a,c=!0,l=!0,u=!1,h=null;return s&&i&&(a=i.Event(t,n),i(e).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(r,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach(e=>{Object.defineProperty(h,e,{get(){return n[e]}})}),u&&h.preventDefault(),l&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},sn=new Map;var on={set(e,t,n){sn.has(e)||sn.set(e,new Map);const i=sn.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(e,t){return sn.has(e)&&sn.get(e).get(t)||null},remove(e,t){if(!sn.has(e))return;const n=sn.get(e);n.delete(t),0===n.size&&sn.delete(e)}};const an="5.0.2";class cn{constructor(e){e=Ct(e),e&&(this._element=e,on.set(this._element,this.constructor.DATA_KEY,this))}dispose(){on.remove(this._element,this.constructor.DATA_KEY),rn.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){Mt(e,t,n)}static getInstance(e){return on.get(e,this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return an}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const ln="alert",un="bs.alert",hn="."+un,dn=".data-api",fn='[data-bs-dismiss="alert"]',pn="close"+hn,mn="closed"+hn,gn=`click${hn}${dn}`,_n="alert",vn="fade",yn="show";class bn extends cn{static get NAME(){return ln}close(e){const t=e?this._getRootElement(e):this._element,n=this._triggerCloseEvent(t);null===n||n.defaultPrevented||this._removeElement(t)}_getRootElement(e){return bt(e)||e.closest("."+_n)}_triggerCloseEvent(e){return rn.trigger(e,pn)}_removeElement(e){e.classList.remove(yn);const t=e.classList.contains(vn);this._queueCallback(()=>this._destroyElement(e),e,t)}_destroyElement(e){e.remove(),rn.trigger(e,mn)}static jQueryInterface(e){return this.each((function(){const t=bn.getOrCreateInstance(this);"close"===e&&t[e](this)}))}static handleDismiss(e){return function(t){t&&t.preventDefault(),e.close(this)}}}rn.on(document,gn,fn,bn.handleDismiss(new bn)),Lt(bn);const wn="button",On="bs.button",En="."+On,Cn=".data-api",Tn="active",kn='[data-bs-toggle="button"]',In=`click${En}${Cn}`;class Sn extends cn{static get NAME(){return wn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Tn))}static jQueryInterface(e){return this.each((function(){const t=Sn.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function xn(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function jn(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}rn.on(document,In,kn,e=>{e.preventDefault();const t=e.target.closest(kn),n=Sn.getOrCreateInstance(t);n.toggle()}),Lt(Sn);const An={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+jn(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+jn(t))},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=xn(e.dataset[n])}),t},getDataAttribute(e,t){return xn(e.getAttribute("data-bs-"+jn(t)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},Rn="carousel",Pn="bs.carousel",Nn="."+Pn,Ln=".data-api",Dn="ArrowLeft",Mn="ArrowRight",Fn=500,Un=40,qn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Bn={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Wn="next",Hn="prev",$n="left",Vn="right",zn={[Dn]:Vn,[Mn]:$n},Gn="slide"+Nn,Kn="slid"+Nn,Yn="keydown"+Nn,Jn="mouseenter"+Nn,Qn="mouseleave"+Nn,Xn="touchstart"+Nn,Zn="touchmove"+Nn,ei="touchend"+Nn,ti="pointerdown"+Nn,ni="pointerup"+Nn,ii="dragstart"+Nn,ri=`load${Nn}${Ln}`,si=`click${Nn}${Ln}`,oi="carousel",ai="active",ci="slide",li="carousel-item-end",ui="carousel-item-start",hi="carousel-item-next",di="carousel-item-prev",fi="pointer-event",pi=".active",mi=".active.carousel-item",gi=".carousel-item",_i=".carousel-item img",vi=".carousel-item-next, .carousel-item-prev",yi=".carousel-indicators",bi="[data-bs-target]",wi="[data-bs-slide], [data-bs-slide-to]",Oi='[data-bs-ride="carousel"]',Ei="touch",Ci="pen";class Ti extends cn{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=dt.findOne(yi,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return qn}static get NAME(){return Rn}next(){this._slide(Wn)}nextWhenVisible(){!document.hidden&&kt(this._element)&&this.next()}prev(){this._slide(Hn)}pause(e){e||(this._isPaused=!0),dt.findOne(vi,this._element)&&(Ot(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=dt.findOne(mi,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void rn.one(this._element,Kn,()=>this.to(e));if(t===e)return this.pause(),void this.cycle();const n=e>t?Wn:Hn;this._slide(n,this._items[e])}_getConfig(e){return e={...qn,...An.getDataAttributes(this._element),..."object"===typeof e?e:{}},Tt(Rn,e,Bn),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Un)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Vn:$n)}_addEventListeners(){this._config.keyboard&&rn.on(this._element,Yn,e=>this._keydown(e)),"hover"===this._config.pause&&(rn.on(this._element,Jn,e=>this.pause(e)),rn.on(this._element,Qn,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>{!this._pointerEvent||e.pointerType!==Ci&&e.pointerType!==Ei?this._pointerEvent||(this.touchStartX=e.touches[0].clientX):this.touchStartX=e.clientX},t=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},n=e=>{!this._pointerEvent||e.pointerType!==Ci&&e.pointerType!==Ei||(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(e=>this.cycle(e),Fn+this._config.interval))};dt.find(_i,this._element).forEach(e=>{rn.on(e,ii,e=>e.preventDefault())}),this._pointerEvent?(rn.on(this._element,ti,t=>e(t)),rn.on(this._element,ni,e=>n(e)),this._element.classList.add(fi)):(rn.on(this._element,Xn,t=>e(t)),rn.on(this._element,Zn,e=>t(e)),rn.on(this._element,ei,e=>n(e)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=zn[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?dt.find(gi,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Wn;return Ft(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),i=this._getItemIndex(dt.findOne(mi,this._element));return rn.trigger(this._element,Gn,{relatedTarget:e,direction:t,from:i,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=dt.findOne(pi,this._indicatorsElement);t.classList.remove(ai),t.removeAttribute("aria-current");const n=dt.find(bi,this._indicatorsElement);for(let i=0;i<n.length;i++)if(Number.parseInt(n[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[i].classList.add(ai),n[i].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||dt.findOne(mi,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),i=dt.findOne(mi,this._element),r=this._getItemIndex(i),s=t||this._getItemByOrder(n,i),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Wn,l=c?ui:li,u=c?hi:di,h=this._orderToDirection(n);if(s&&s.classList.contains(ai))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!i||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{rn.trigger(this._element,Kn,{relatedTarget:s,direction:h,from:r,to:o})};if(this._element.classList.contains(ci)){s.classList.add(u),jt(s),i.classList.add(l),s.classList.add(l);const e=()=>{s.classList.remove(l,u),s.classList.add(ai),i.classList.remove(ai,u,l),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,i,!0)}else i.classList.remove(ai),s.classList.add(ai),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[Vn,$n].includes(e)?Nt()?e===$n?Hn:Wn:e===$n?Wn:Hn:e}_orderToDirection(e){return[Wn,Hn].includes(e)?Nt()?e===Hn?$n:Vn:e===Hn?Vn:$n:e}static carouselInterface(e,t){const n=Ti.getOrCreateInstance(e,t);let{_config:i}=n;"object"===typeof t&&(i={...i,...t});const r="string"===typeof t?t:i.slide;if("number"===typeof t)n.to(t);else if("string"===typeof r){if("undefined"===typeof n[r])throw new TypeError(`No method named "${r}"`);n[r]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){Ti.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=bt(this);if(!t||!t.classList.contains(oi))return;const n={...An.getDataAttributes(t),...An.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),Ti.carouselInterface(t,n),i&&Ti.getInstance(t).to(i),e.preventDefault()}}rn.on(document,si,wi,Ti.dataApiClickHandler),rn.on(window,ri,()=>{const e=dt.find(Oi);for(let t=0,n=e.length;t<n;t++)Ti.carouselInterface(e[t],Ti.getInstance(e[t]))}),Lt(Ti);const ki="collapse",Ii="bs.collapse",Si="."+Ii,xi=".data-api",ji={toggle:!0,parent:""},Ai={toggle:"boolean",parent:"(string|element)"},Ri="show"+Si,Pi="shown"+Si,Ni="hide"+Si,Li="hidden"+Si,Di=`click${Si}${xi}`,Mi="show",Fi="collapse",Ui="collapsing",qi="collapsed",Bi="width",Wi="height",Hi=".show, .collapsing",$i='[data-bs-toggle="collapse"]';class Vi extends cn{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=dt.find(`${$i}[href="#${this._element.id}"],${$i}[data-bs-target="#${this._element.id}"]`);const n=dt.find($i);for(let i=0,r=n.length;i<r;i++){const e=n[i],t=yt(e),r=dt.find(t).filter(e=>e===this._element);null!==t&&r.length&&(this._selector=t,this._triggerArray.push(e))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return ji}static get NAME(){return ki}toggle(){this._element.classList.contains(Mi)?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains(Mi))return;let e,t;this._parent&&(e=dt.find(Hi,this._parent).filter(e=>"string"===typeof this._config.parent?e.getAttribute("data-bs-parent")===this._config.parent:e.classList.contains(Fi)),0===e.length&&(e=null));const n=dt.findOne(this._selector);if(e){const i=e.find(e=>n!==e);if(t=i?Vi.getInstance(i):null,t&&t._isTransitioning)return}const i=rn.trigger(this._element,Ri);if(i.defaultPrevented)return;e&&e.forEach(e=>{n!==e&&Vi.collapseInterface(e,"hide"),t||on.set(e,Ii,null)});const r=this._getDimension();this._element.classList.remove(Fi),this._element.classList.add(Ui),this._element.style[r]=0,this._triggerArray.length&&this._triggerArray.forEach(e=>{e.classList.remove(qi),e.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const s=()=>{this._element.classList.remove(Ui),this._element.classList.add(Fi,Mi),this._element.style[r]="",this.setTransitioning(!1),rn.trigger(this._element,Pi)},o=r[0].toUpperCase()+r.slice(1),a="scroll"+o;this._queueCallback(s,this._element,!0),this._element.style[r]=this._element[a]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains(Mi))return;const e=rn.trigger(this._element,Ni);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",jt(this._element),this._element.classList.add(Ui),this._element.classList.remove(Fi,Mi);const n=this._triggerArray.length;if(n>0)for(let r=0;r<n;r++){const e=this._triggerArray[r],t=bt(e);t&&!t.classList.contains(Mi)&&(e.classList.add(qi),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0);const i=()=>{this.setTransitioning(!1),this._element.classList.remove(Ui),this._element.classList.add(Fi),rn.trigger(this._element,Li)};this._element.style[t]="",this._queueCallback(i,this._element,!0)}setTransitioning(e){this._isTransitioning=e}_getConfig(e){return e={...ji,...e},e.toggle=Boolean(e.toggle),Tt(ki,e,Ai),e}_getDimension(){return this._element.classList.contains(Bi)?Bi:Wi}_getParent(){let{parent:e}=this._config;e=Ct(e);const t=`${$i}[data-bs-parent="${e}"]`;return dt.find(t,e).forEach(e=>{const t=bt(e);this._addAriaAndCollapsedClass(t,[e])}),e}_addAriaAndCollapsedClass(e,t){if(!e||!t.length)return;const n=e.classList.contains(Mi);t.forEach(e=>{n?e.classList.remove(qi):e.classList.add(qi),e.setAttribute("aria-expanded",n)})}static collapseInterface(e,t){let n=Vi.getInstance(e);const i={...ji,...An.getDataAttributes(e),..."object"===typeof t&&t?t:{}};if(!n&&i.toggle&&"string"===typeof t&&/show|hide/.test(t)&&(i.toggle=!1),n||(n=new Vi(e,i)),"string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}static jQueryInterface(e){return this.each((function(){Vi.collapseInterface(this,e)}))}}rn.on(document,Di,$i,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=An.getDataAttributes(this),n=yt(this),i=dt.find(n);i.forEach(e=>{const n=Vi.getInstance(e);let i;n?(null===n._parent&&"string"===typeof t.parent&&(n._config.parent=t.parent,n._parent=n._getParent()),i="toggle"):i=t,Vi.collapseInterface(e,i)})})),Lt(Vi);const zi="dropdown",Gi="bs.dropdown",Ki="."+Gi,Yi=".data-api",Ji="Escape",Qi="Space",Xi="Tab",Zi="ArrowUp",er="ArrowDown",tr=2,nr=new RegExp(`${Zi}|${er}|${Ji}`),ir="hide"+Ki,rr="hidden"+Ki,sr="show"+Ki,or="shown"+Ki,ar="click"+Ki,cr=`click${Ki}${Yi}`,lr=`keydown${Ki}${Yi}`,ur=`keyup${Ki}${Yi}`,hr="show",dr="dropup",fr="dropend",pr="dropstart",mr="navbar",gr='[data-bs-toggle="dropdown"]',_r=".dropdown-menu",vr=".navbar-nav",yr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",br=Nt()?"top-end":"top-start",wr=Nt()?"top-start":"top-end",Or=Nt()?"bottom-end":"bottom-start",Er=Nt()?"bottom-start":"bottom-end",Cr=Nt()?"left-start":"right-start",Tr=Nt()?"right-start":"left-start",kr={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ir={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Sr extends cn{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return kr}static get DefaultType(){return Ir}static get NAME(){return zi}toggle(){if(It(this._element))return;const e=this._element.classList.contains(hr);e?this.hide():this.show()}show(){if(It(this._element)||this._menu.classList.contains(hr))return;const e=Sr.getParentFromElement(this._element),t={relatedTarget:this._element},n=rn.trigger(this._element,sr,t);if(!n.defaultPrevented){if(this._inNavbar)An.setDataAttribute(this._menu,"popper","none");else{if("undefined"===typeof i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:Et(this._config.reference)?t=Ct(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),r=n.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=ct(t,this._menu,n),r&&An.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!e.closest(vr)&&[].concat(...document.body.children).forEach(e=>rn.on(e,"mouseover",xt)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle(hr),this._element.classList.toggle(hr),rn.trigger(this._element,or,t)}}hide(){if(It(this._element)||!this._menu.classList.contains(hr))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){rn.on(this._element,ar,e=>{e.preventDefault(),this.toggle()})}_completeHide(e){const t=rn.trigger(this._element,ir,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>rn.off(e,"mouseover",xt)),this._popper&&this._popper.destroy(),this._menu.classList.remove(hr),this._element.classList.remove(hr),this._element.setAttribute("aria-expanded","false"),An.removeDataAttribute(this._menu,"popper"),rn.trigger(this._element,rr,e))}_getConfig(e){if(e={...this.constructor.Default,...An.getDataAttributes(this._element),...e},Tt(zi,e,this.constructor.DefaultType),"object"===typeof e.reference&&!Et(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(zi.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_getMenuElement(){return dt.next(this._element,_r)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(fr))return Cr;if(e.classList.contains(pr))return Tr;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(dr)?t?wr:br:t?Er:Or}_detectNavbar(){return null!==this._element.closest("."+mr)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=dt.find(yr,this._menu).filter(kt);n.length&&Ft(n,t,e===er,!n.includes(t)).focus()}static dropdownInterface(e,t){const n=Sr.getOrCreateInstance(e,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}static jQueryInterface(e){return this.each((function(){Sr.dropdownInterface(this,e)}))}static clearMenus(e){if(e&&(e.button===tr||"keyup"===e.type&&e.key!==Xi))return;const t=dt.find(gr);for(let n=0,i=t.length;n<i;n++){const i=Sr.getInstance(t[n]);if(!i||!1===i._config.autoClose)continue;if(!i._element.classList.contains(hr))continue;const r={relatedTarget:i._element};if(e){const t=e.composedPath(),n=t.includes(i._menu);if(t.includes(i._element)||"inside"===i._config.autoClose&&!n||"outside"===i._config.autoClose&&n)continue;if(i._menu.contains(e.target)&&("keyup"===e.type&&e.key===Xi||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(r.clickEvent=e)}i._completeHide(r)}}static getParentFromElement(e){return bt(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Qi||e.key!==Ji&&(e.key!==er&&e.key!==Zi||e.target.closest(_r)):!nr.test(e.key))return;const t=this.classList.contains(hr);if(!t&&e.key===Ji)return;if(e.preventDefault(),e.stopPropagation(),It(this))return;const n=()=>this.matches(gr)?this:dt.prev(this,gr)[0];return e.key===Ji?(n().focus(),void Sr.clearMenus()):e.key===Zi||e.key===er?(t||n().click(),void Sr.getInstance(n())._selectMenuItem(e)):void(t&&e.key!==Qi||Sr.clearMenus())}}rn.on(document,lr,gr,Sr.dataApiKeydownHandler),rn.on(document,lr,_r,Sr.dataApiKeydownHandler),rn.on(document,cr,Sr.clearMenus),rn.on(document,ur,Sr.clearMenus),rn.on(document,cr,gr,(function(e){e.preventDefault(),Sr.dropdownInterface(this)})),Lt(Sr);const xr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",jr=".sticky-top";class Ar{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(xr,"paddingRight",t=>t+e),this._setElementAttributes(jr,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),r=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(r))+"px"};this._applyManipulationCallback(e,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(xr,"paddingRight"),this._resetElementAttributes(jr,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&An.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=An.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(An.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){Et(e)?t(e):dt.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const Rr={isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Pr={isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Nr="backdrop",Lr="modal-backdrop",Dr="fade",Mr="show",Fr="mousedown.bs."+Nr;class Ur{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&jt(this._getElement()),this._getElement().classList.add(Mr),this._emulateAnimation(()=>{Dt(e)})):Dt(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(Mr),this._emulateAnimation(()=>{this.dispose(),Dt(e)})):Dt(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=Lr,this._config.isAnimated&&e.classList.add(Dr),this._element=e}return this._element}_getConfig(e){return e={...Rr,..."object"===typeof e?e:{}},e.rootElement=Ct(e.rootElement),Tt(Nr,e,Pr),e}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),rn.on(this._getElement(),Fr,()=>{Dt(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(rn.off(this._element,Fr),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Mt(e,this._getElement(),this._config.isAnimated)}}const qr="modal",Br="bs.modal",Wr="."+Br,Hr=".data-api",$r="Escape",Vr={backdrop:!0,keyboard:!0,focus:!0},zr={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Gr="hide"+Wr,Kr="hidePrevented"+Wr,Yr="hidden"+Wr,Jr="show"+Wr,Qr="shown"+Wr,Xr="focusin"+Wr,Zr="resize"+Wr,es="click.dismiss"+Wr,ts="keydown.dismiss"+Wr,ns="mouseup.dismiss"+Wr,is="mousedown.dismiss"+Wr,rs=`click${Wr}${Hr}`,ss="modal-open",os="fade",as="show",cs="modal-static",ls=".modal-dialog",us=".modal-body",hs='[data-bs-toggle="modal"]',ds='[data-bs-dismiss="modal"]';class fs extends cn{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=dt.findOne(ls,this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ar}static get Default(){return Vr}static get NAME(){return qr}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=rn.trigger(this._element,Jr,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ss),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),rn.on(this._element,es,ds,e=>this.hide(e)),rn.on(this._dialog,is,()=>{rn.one(this._element,ns,e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(e){if(e&&["A","AREA"].includes(e.target.tagName)&&e.preventDefault(),!this._isShown||this._isTransitioning)return;const t=rn.trigger(this._element,Gr);if(t.defaultPrevented)return;this._isShown=!1;const n=this._isAnimated();n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),rn.off(document,Xr),this._element.classList.remove(as),rn.off(this._element,es),rn.off(this._dialog,is),this._queueCallback(()=>this._hideModal(),this._element,n)}dispose(){[window,this._dialog].forEach(e=>rn.off(e,Wr)),this._backdrop.dispose(),super.dispose(),rn.off(document,Xr)}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ur({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(e){return e={...Vr,...An.getDataAttributes(this._element),..."object"===typeof e?e:{}},Tt(qr,e,zr),e}_showElement(e){const t=this._isAnimated(),n=dt.findOne(us,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&jt(this._element),this._element.classList.add(as),this._config.focus&&this._enforceFocus();const i=()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,rn.trigger(this._element,Qr,{relatedTarget:e})};this._queueCallback(i,this._dialog,t)}_enforceFocus(){rn.off(document,Xr),rn.on(document,Xr,e=>{document===e.target||this._element===e.target||this._element.contains(e.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?rn.on(this._element,ts,e=>{this._config.keyboard&&e.key===$r?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==$r||this._triggerBackdropTransition()}):rn.off(this._element,ts)}_setResizeEvent(){this._isShown?rn.on(window,Zr,()=>this._adjustDialog()):rn.off(window,Zr)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ss),this._resetAdjustments(),this._scrollBar.reset(),rn.trigger(this._element,Yr)})}_showBackdrop(e){rn.on(this._element,es,e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(os)}_triggerBackdropTransition(){const e=rn.trigger(this._element,Kr);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:i}=this._element,r=n>document.documentElement.clientHeight;!r&&"hidden"===i.overflowY||t.contains(cs)||(r||(i.overflowY="hidden"),t.add(cs),this._queueCallback(()=>{t.remove(cs),r||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!Nt()||n&&!e&&Nt())&&(this._element.style.paddingLeft=t+"px"),(n&&!e&&!Nt()||!n&&e&&Nt())&&(this._element.style.paddingRight=t+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=fs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}rn.on(document,rs,hs,(function(e){const t=bt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),rn.one(t,Jr,e=>{e.defaultPrevented||rn.one(t,Yr,()=>{kt(this)&&this.focus()})});const n=fs.getOrCreateInstance(t);n.toggle(this)})),Lt(fs);const ps="offcanvas",ms="bs.offcanvas",gs="."+ms,_s=".data-api",vs=`load${gs}${_s}`,ys="Escape",bs={backdrop:!0,keyboard:!0,scroll:!1},ws={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Os="show",Es=".offcanvas.show",Cs="show"+gs,Ts="shown"+gs,ks="hide"+gs,Is="hidden"+gs,Ss="focusin"+gs,xs=`click${gs}${_s}`,js="click.dismiss"+gs,As="keydown.dismiss"+gs,Rs='[data-bs-dismiss="offcanvas"]',Ps='[data-bs-toggle="offcanvas"]';class Ns extends cn{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return ps}static get Default(){return bs}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=rn.trigger(this._element,Cs,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||((new Ar).hide(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Os);const n=()=>{rn.trigger(this._element,Ts,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=rn.trigger(this._element,ks);if(e.defaultPrevented)return;rn.off(document,Ss),this._element.blur(),this._isShown=!1,this._element.classList.remove(Os),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ar).reset(),rn.trigger(this._element,Is)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),super.dispose(),rn.off(document,Ss)}_getConfig(e){return e={...bs,...An.getDataAttributes(this._element),..."object"===typeof e?e:{}},Tt(ps,e,ws),e}_initializeBackDrop(){return new Ur({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(e){rn.off(document,Ss),rn.on(document,Ss,t=>{document===t.target||e===t.target||e.contains(t.target)||e.focus()}),e.focus()}_addEventListeners(){rn.on(this._element,js,Rs,()=>this.hide()),rn.on(this._element,As,e=>{this._config.keyboard&&e.key===ys&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=Ns.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}rn.on(document,xs,Ps,(function(e){const t=bt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),It(this))return;rn.one(t,Is,()=>{kt(this)&&this.focus()});const n=dt.findOne(Es);n&&n!==t&&Ns.getInstance(n).hide();const i=Ns.getOrCreateInstance(t);i.toggle(this)})),rn.on(window,vs,()=>dt.find(Es).forEach(e=>Ns.getOrCreateInstance(e).show())),Lt(Ns);const Ls=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ds=/^aria-[\w-]*$/i,Ms=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,Fs=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Us=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Ls.has(n)||Boolean(Ms.test(e.nodeValue)||Fs.test(e.nodeValue));const i=t.filter(e=>e instanceof RegExp);for(let r=0,s=i.length;r<s;r++)if(i[r].test(n))return!0;return!1},qs={"*":["class","dir","id","lang","role",Ds],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Bs(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const i=new window.DOMParser,r=i.parseFromString(e,"text/html"),s=Object.keys(t),o=[].concat(...r.body.querySelectorAll("*"));for(let a=0,c=o.length;a<c;a++){const e=o[a],n=e.nodeName.toLowerCase();if(!s.includes(n)){e.remove();continue}const i=[].concat(...e.attributes),r=[].concat(t["*"]||[],t[n]||[]);i.forEach(t=>{Us(t,r)||e.removeAttribute(t.nodeName)})}return r.body.innerHTML}const Ws="tooltip",Hs="bs.tooltip",$s="."+Hs,Vs="bs-tooltip",zs=new RegExp(`(^|\\s)${Vs}\\S+`,"g"),Gs=new Set(["sanitize","allowList","sanitizeFn"]),Ks={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ys={AUTO:"auto",TOP:"top",RIGHT:Nt()?"left":"right",BOTTOM:"bottom",LEFT:Nt()?"right":"left"},Js={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:qs,popperConfig:null},Qs={HIDE:"hide"+$s,HIDDEN:"hidden"+$s,SHOW:"show"+$s,SHOWN:"shown"+$s,INSERTED:"inserted"+$s,CLICK:"click"+$s,FOCUSIN:"focusin"+$s,FOCUSOUT:"focusout"+$s,MOUSEENTER:"mouseenter"+$s,MOUSELEAVE:"mouseleave"+$s},Xs="fade",Zs="modal",eo="show",to="show",no="out",io=".tooltip-inner",ro="hover",so="focus",oo="click",ao="manual";class co extends cn{constructor(e,t){if("undefined"===typeof i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Js}static get NAME(){return Ws}static get Event(){return Qs}static get DefaultType(){return Ks}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(eo))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),rn.off(this._element.closest("."+Zs),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._popper&&this._popper.destroy(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=rn.trigger(this._element,this.constructor.Event.SHOW),t=St(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;const i=this.getTipElement(),r=_t(this.constructor.NAME);i.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this.setContent(),this._config.animation&&i.classList.add(Xs);const s="function"===typeof this._config.placement?this._config.placement.call(this,i,this._element):this._config.placement,o=this._getAttachment(s);this._addAttachmentClass(o);const{container:a}=this._config;on.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.appendChild(i),rn.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ct(this._element,i,this._getPopperConfig(o)),i.classList.add(eo);const c="function"===typeof this._config.customClass?this._config.customClass():this._config.customClass;c&&i.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{rn.on(e,"mouseover",xt)});const l=()=>{const e=this._hoverState;this._hoverState=null,rn.trigger(this._element,this.constructor.Event.SHOWN),e===no&&this._leave(null,this)},u=this.tip.classList.contains(Xs);this._queueCallback(l,this.tip,u)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==to&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),rn.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))},n=rn.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(eo),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>rn.off(e,"mouseover",xt)),this._activeTrigger[oo]=!1,this._activeTrigger[so]=!1,this._activeTrigger[ro]=!1;const i=this.tip.classList.contains(Xs);this._queueCallback(t,this.tip,i),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");return e.innerHTML=this._config.template,this.tip=e.children[0],this.tip}setContent(){const e=this.getTipElement();this.setElementContent(dt.findOne(io,e),this.getTitle()),e.classList.remove(Xs,eo)}setElementContent(e,t){if(null!==e)return Et(t)?(t=Ct(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.appendChild(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Bs(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){let e=this._element.getAttribute("data-bs-original-title");return e||(e="function"===typeof this._config.title?this._config.title.call(this._element):this._config.title),e}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){const n=this.constructor.DATA_KEY;return t=t||on.get(e.delegateTarget,n),t||(t=new this.constructor(e.delegateTarget,this._getDelegateConfig()),on.set(e.delegateTarget,n,t)),t}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${Vs}-${this.updateAttachment(e)}`)}_getAttachment(e){return Ys[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach(e=>{if("click"===e)rn.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if(e!==ao){const t=e===ro?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===ro?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;rn.on(this._element,t,this._config.selector,e=>this._enter(e)),rn.on(this._element,n,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},rn.on(this._element.closest("."+Zs),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?so:ro]=!0),t.getTipElement().classList.contains(eo)||t._hoverState===to?t._hoverState=to:(clearTimeout(t._timeout),t._hoverState=to,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===to&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?so:ro]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=no,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{t._hoverState===no&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=An.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{Gs.has(e)&&delete t[e]}),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:Ct(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),Tt(Ws,e,this.constructor.DefaultType),e.sanitize&&(e.template=Bs(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};if(this._config)for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=e.getAttribute("class").match(zs);null!==t&&t.length>0&&t.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}static jQueryInterface(e){return this.each((function(){const t=co.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Lt(co);const lo="popover",uo="bs.popover",ho="."+uo,fo="bs-popover",po=new RegExp(`(^|\\s)${fo}\\S+`,"g"),mo={...co.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},go={...co.DefaultType,content:"(string|element|function)"},_o={HIDE:"hide"+ho,HIDDEN:"hidden"+ho,SHOW:"show"+ho,SHOWN:"shown"+ho,INSERTED:"inserted"+ho,CLICK:"click"+ho,FOCUSIN:"focusin"+ho,FOCUSOUT:"focusout"+ho,MOUSEENTER:"mouseenter"+ho,MOUSELEAVE:"mouseleave"+ho},vo="fade",yo="show",bo=".popover-header",wo=".popover-body";class Oo extends co{static get Default(){return mo}static get NAME(){return lo}static get Event(){return _o}static get DefaultType(){return go}isWithContent(){return this.getTitle()||this._getContent()}getTipElement(){return this.tip||(this.tip=super.getTipElement(),this.getTitle()||dt.findOne(bo,this.tip).remove(),this._getContent()||dt.findOne(wo,this.tip).remove()),this.tip}setContent(){const e=this.getTipElement();this.setElementContent(dt.findOne(bo,e),this.getTitle());let t=this._getContent();"function"===typeof t&&(t=t.call(this._element)),this.setElementContent(dt.findOne(wo,e),t),e.classList.remove(vo,yo)}_addAttachmentClass(e){this.getTipElement().classList.add(`${fo}-${this.updateAttachment(e)}`)}_getContent(){return this._element.getAttribute("data-bs-content")||this._config.content}_cleanTipClass(){const e=this.getTipElement(),t=e.getAttribute("class").match(po);null!==t&&t.length>0&&t.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}static jQueryInterface(e){return this.each((function(){const t=Oo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Lt(Oo);const Eo="scrollspy",Co="bs.scrollspy",To="."+Co,ko=".data-api",Io={offset:10,method:"auto",target:""},So={offset:"number",method:"string",target:"(string|element)"},xo="activate"+To,jo="scroll"+To,Ao=`load${To}${ko}`,Ro="dropdown-item",Po="active",No='[data-bs-spy="scroll"]',Lo=".nav, .list-group",Do=".nav-link",Mo=".nav-item",Fo=".list-group-item",Uo=".dropdown",qo=".dropdown-toggle",Bo="offset",Wo="position";class Ho extends cn{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._selector=`${this._config.target} ${Do}, ${this._config.target} ${Fo}, ${this._config.target} .${Ro}`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,rn.on(this._scrollElement,jo,()=>this._process()),this.refresh(),this._process()}static get Default(){return Io}static get NAME(){return Eo}refresh(){const e=this._scrollElement===this._scrollElement.window?Bo:Wo,t="auto"===this._config.method?e:this._config.method,n=t===Wo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const i=dt.find(this._selector);i.map(e=>{const i=yt(e),r=i?dt.findOne(i):null;if(r){const e=r.getBoundingClientRect();if(e.width||e.height)return[An[t](r).top+n,i]}return null}).filter(e=>e).sort((e,t)=>e[0]-t[0]).forEach(e=>{this._offsets.push(e[0]),this._targets.push(e[1])})}dispose(){rn.off(this._scrollElement,To),super.dispose()}_getConfig(e){if(e={...Io,...An.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},"string"!==typeof e.target&&Et(e.target)){let{id:t}=e.target;t||(t=_t(Eo),e.target.id=t),e.target="#"+t}return Tt(Eo,e,So),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=this._selector.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=dt.findOne(t.join(","));n.classList.contains(Ro)?(dt.findOne(qo,n.closest(Uo)).classList.add(Po),n.classList.add(Po)):(n.classList.add(Po),dt.parents(n,Lo).forEach(e=>{dt.prev(e,`${Do}, ${Fo}`).forEach(e=>e.classList.add(Po)),dt.prev(e,Mo).forEach(e=>{dt.children(e,Do).forEach(e=>e.classList.add(Po))})})),rn.trigger(this._scrollElement,xo,{relatedTarget:e})}_clear(){dt.find(this._selector).filter(e=>e.classList.contains(Po)).forEach(e=>e.classList.remove(Po))}static jQueryInterface(e){return this.each((function(){const t=Ho.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}rn.on(window,Ao,()=>{dt.find(No).forEach(e=>new Ho(e))}),Lt(Ho);const $o="tab",Vo="bs.tab",zo="."+Vo,Go=".data-api",Ko="hide"+zo,Yo="hidden"+zo,Jo="show"+zo,Qo="shown"+zo,Xo=`click${zo}${Go}`,Zo="dropdown-menu",ea="active",ta="fade",na="show",ia=".dropdown",ra=".nav, .list-group",sa=".active",oa=":scope > li > .active",aa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ca=".dropdown-toggle",la=":scope > .dropdown-menu .active";class ua extends cn{static get NAME(){return $o}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ea))return;let e;const t=bt(this._element),n=this._element.closest(ra);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?oa:sa;e=dt.find(t,n),e=e[e.length-1]}const i=e?rn.trigger(e,Ko,{relatedTarget:this._element}):null,r=rn.trigger(this._element,Jo,{relatedTarget:e});if(r.defaultPrevented||null!==i&&i.defaultPrevented)return;this._activate(this._element,n);const s=()=>{rn.trigger(e,Yo,{relatedTarget:this._element}),rn.trigger(this._element,Qo,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const i=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?dt.children(t,sa):dt.find(oa,t),r=i[0],s=n&&r&&r.classList.contains(ta),o=()=>this._transitionComplete(e,r,n);r&&s?(r.classList.remove(na),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(ea);const e=dt.findOne(la,t.parentNode);e&&e.classList.remove(ea),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ea),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),jt(e),e.classList.contains(ta)&&e.classList.add(na);let i=e.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains(Zo)){const t=e.closest(ia);t&&dt.find(ca,t).forEach(e=>e.classList.add(ea)),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=ua.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}rn.on(document,Xo,aa,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),It(this))return;const t=ua.getOrCreateInstance(this);t.show()})),Lt(ua);const ha="toast",da="bs.toast",fa="."+da,pa="click.dismiss"+fa,ma="mouseover"+fa,ga="mouseout"+fa,_a="focusin"+fa,va="focusout"+fa,ya="hide"+fa,ba="hidden"+fa,wa="show"+fa,Oa="shown"+fa,Ea="fade",Ca="hide",Ta="show",ka="showing",Ia={animation:"boolean",autohide:"boolean",delay:"number"},Sa={animation:!0,autohide:!0,delay:5e3},xa='[data-bs-dismiss="toast"]';class ja extends cn{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Ia}static get Default(){return Sa}static get NAME(){return ha}show(){const e=rn.trigger(this._element,wa);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ea);const t=()=>{this._element.classList.remove(ka),this._element.classList.add(Ta),rn.trigger(this._element,Oa),this._maybeScheduleHide()};this._element.classList.remove(Ca),jt(this._element),this._element.classList.add(ka),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Ta))return;const e=rn.trigger(this._element,ya);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Ca),rn.trigger(this._element,ba)};this._element.classList.remove(Ta),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Ta)&&this._element.classList.remove(Ta),super.dispose()}_getConfig(e){return e={...Sa,...An.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},Tt(ha,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){rn.on(this._element,pa,xa,()=>this.hide()),rn.on(this._element,ma,e=>this._onInteraction(e,!0)),rn.on(this._element,ga,e=>this._onInteraction(e,!1)),rn.on(this._element,_a,e=>this._onInteraction(e,!0)),rn.on(this._element,va,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=ja.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Lt(ja)},"7c73":function(e,t,n){var i,r=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},_=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(_("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(_("document.F=Object")),e.close(),e.F},b=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&i?v(i):y():v(i);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=r(e),n=new g,g[f]=null,n[m]=e):n=b(),void 0===t?n:s.f(n,t)}},"7dd0":function(e,t,n){"use strict";var i=n("23e7"),r=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),l=n("e163"),u=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),_=o.PROPER,v=o.CONFIGURABLE,y=g.IteratorPrototype,b=g.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",E="values",C="entries",T=function(){return this};e.exports=function(e,t,n,o,p,g,k){c(n,t,o);var I,S,x,j=function(e){if(e===p&&L)return L;if(!b&&e in P)return P[e];switch(e){case O:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case C:return function(){return new n(this,e)}}return function(){return new n(this)}},A=t+" Iterator",R=!1,P=e.prototype,N=P[w]||P["@@iterator"]||p&&P[p],L=!b&&N||j(p),D="Array"==t&&P.entries||N;if(D&&(I=l(D.call(new e)),I!==Object.prototype&&I.next&&(s||l(I)===y||(u?u(I,y):a(I[w])||f(I,w,T)),h(I,A,!0,!0),s&&(m[A]=T))),_&&p==E&&N&&N.name!==E&&(!s&&v?d(P,"name",E):(R=!0,L=function(){return r(N,this)})),p)if(S={values:j(E),keys:g?L:j(O),entries:j(C)},k)for(x in S)(b||R||!(x in P))&&f(P,x,S[x]);else i({target:t,proto:!0,forced:b||R},S);return s&&!k||P[w]===L||f(P,w,L,{name:p}),m[t]=L,S}},"7f9a":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("8925"),o=i.WeakMap;e.exports=r(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var i=n("da84"),r=n("861d"),s=i.String,o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var i=n("d039");e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var i=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},8925:function(e,t,n){var i=n("e330"),r=n("1626"),s=n("c6cd"),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"90e3":function(e,t,n){var i=n("e330"),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},9112:function(e,t,n){var i=n("83ab"),r=n("9bf2"),s=n("5c6c");e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var i=n("d039"),r=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},"9a1f":function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),l=i.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(r(n,e));throw l(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var i=n("da84"),r=n("83ab"),s=n("0cfb"),o=n("aed9"),a=n("825a"),c=n("a04b"),l=i.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=r?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var i=h(e,t);i&&i[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:i[f],enumerable:d in n?n[d]:i[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return u(e,t,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var i=n("ae93").IteratorPrototype,r=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,l){var u=t+" Iterator";return e.prototype=r(i,{next:s(+!l,n)}),o(e,u,!1,!0),a[u]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return ie})),n.d(t,"k",(function(){return P})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return Y})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return G})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return x})),n.d(t,"w",(function(){return B})),n.d(t,"x",(function(){return S})),n.d(t,"y",(function(){return z})),n.d(t,"z",(function(){return W})),n.d(t,"A",(function(){return K})),n.d(t,"B",(function(){return _})),n.d(t,"C",(function(){return D})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return q})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return b})),n.d(t,"I",(function(){return i})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return l})),n.d(t,"L",(function(){return A})),n.d(t,"M",(function(){return w})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return oe})),n.d(t,"P",(function(){return V}));const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(o);function c(e){return!!e||""===e}function l(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=U(i)?d(i):l(i);if(r)for(const e in r)t[e]=r[e]}return t}return U(e)||B(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const i=f(e[n]);i&&(t+=i+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=i(p),_=i(m);function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=y(e[i],t[i]);return n}function y(e,t){if(e===t)return!0;let n=M(e),i=M(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=N(e),i=N(t),n||i)return!(!n||!i)&&v(e,t);if(n=B(e),i=B(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function b(e,t){return e.findIndex(e=>y(e,t))}const w=e=>U(e)?e:null==e?"":N(e)||B(e)&&(e.toString===H||!F(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!B(t)||N(t)||z(t)?t:String(t),E={},C=[],T=()=>{},k=()=>!1,I=/^on[^a-z]/,S=e=>I.test(e),x=e=>e.startsWith("onUpdate:"),j=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,P=(e,t)=>R.call(e,t),N=Array.isArray,L=e=>"[object Map]"===$(e),D=e=>"[object Set]"===$(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,q=e=>"symbol"===typeof e,B=e=>null!==e&&"object"===typeof e,W=e=>B(e)&&F(e.then)&&F(e.catch),H=Object.prototype.toString,$=e=>H.call(e),V=e=>$(e).slice(8,-1),z=e=>"[object Object]"===$(e),G=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Y=i("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),J=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},Q=/-(\w)/g,X=J(e=>e.replace(Q,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=J(e=>e.replace(Z,"-$1").toLowerCase()),te=J(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=J(e=>e?"on"+te(e):""),ie=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},se=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var i=n("c04e"),r=n("d9b5");e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},a4b4:function(e,t,n){var i=n("342f");e.exports=/web0s(?!.*chrome)/i.test(i)},a79d:function(e,t,n){"use strict";var i=n("23e7"),r=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),l=n("4840"),u=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(i({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=l(this,a("Promise")),n=c(e);return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),!r&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},ab8b:function(e,t,n){},abc5:function(e,t,n){"use strict";(function(e){function i(){return r().__VUE_DEVTOOLS_GLOBAL_HOOK__}function r(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var i,r,s,o=n("d039"),a=n("1626"),c=n("7c73"),l=n("e163"),u=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(r=l(l(s)),r!==Object.prototype&&(i=r)):p=!0);var m=void 0==i||o((function(){var e={};return i[f].call(e)!==e}));m?i={}:d&&(i=c(i)),a(i[f])||u(i,f,(function(){return this})),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var i=n("83ab"),r=n("d039");e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var i=n("00ee"),r=n("f5df");e.exports=i?{}.toString:function(){return"[object "+r(this)+"]"}},b575:function(e,t,n){var i,r,s,o,a,c,l,u,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),g=n("d4c3"),_=n("a4b4"),v=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,O=h.Promise,E=f(h,"queueMicrotask"),C=E&&E.value;C||(i=function(){var e,t;v&&(e=w.domain)&&e.exit();while(r){t=r.fn,r=r.next;try{t()}catch(n){throw r?o():s=void 0,n}}s=void 0,e&&e.enter()},m||v||_||!y||!b?!g&&O&&O.resolve?(l=O.resolve(void 0),l.constructor=O,u=d(l.then,l),o=function(){u(i)}):v?o=function(){w.nextTick(i)}:(p=d(p,h),o=function(){p(i)}):(a=!0,c=b.createTextNode(""),new y(i).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=C||function(e){var t={fn:e,next:void 0};s&&(s.next=t),r||(r=t,o()),s=t}},b622:function(e,t,n){var i=n("da84"),r=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),l=r("wks"),u=i.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&s(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},c04e:function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),l=n("b622"),u=i.TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,i=a(e,h);if(i){if(void 0===t&&(t="default"),n=r(i,e,t),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var i=n("40d5"),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},c6b6:function(e,t,n){var i=n("e330"),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},c6cd:function(e,t,n){var i=n("da84"),r=n("ce4e"),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var i=n("e330"),r=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=i([].push);e.exports=function(e,t){var n,i=s(e),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(t.length>l)r(i,n=t[l++])&&(~o(u,n)||c(u,n));return u}},cc12:function(e,t,n){var i=n("da84"),r=n("861d"),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var i=n("23e7"),r=n("60da");i({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cd74:function(e,t,n){},cdf9:function(e,t,n){var i=n("825a"),r=n("861d"),s=n("f069");e.exports=function(e,t){if(i(e),r(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var i=n("da84"),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var i=n("da84"),r=n("1626"),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},d1e7:function(e,t,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!i.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:i},d2bb:function(e,t,n){var i=n("e330"),r=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(e,t,n){var i=n("00ee"),r=n("6eeb"),s=n("b041");i||r(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var i=n("9bf2").f,r=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!r(e,o)&&i(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var i=n("342f"),r=n("da84");e.exports=/ipad|iphone|ipod/i.test(i)&&void 0!==r.Pebble},d6d6:function(e,t,n){var i=n("da84"),r=i.TypeError;e.exports=function(e,t){if(e<t)throw r("Not enough arguments");return e}},d9b5:function(e,t,n){var i=n("da84"),r=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=i.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&o(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var i=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},ddb0:function(e,t,n){var i=n("da84"),r=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),l=c("iterator"),u=c("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[l]!==h)try{a(e,l,h)}catch(i){e[l]=h}if(e[u]||a(e,u,t),r[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(i){e[n]=o[n]}}};for(var f in r)d(i[f]&&i[f].prototype,f);d(s,"DOMTokenList")},df75:function(e,t,n){var i=n("ca84"),r=n("7839");e.exports=Object.keys||function(e){return i(e,r)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(r(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===s(e,-1);return e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,c=0;c<o;c++)if(r[c]!==s[c]){a=c;break}var l=[];for(c=a;c<r.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var i=n("da84"),r=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),l=a("IE_PROTO"),u=i.Object,h=u.prototype;e.exports=c?u.getPrototypeOf:function(e){var t=o(e);if(r(t,l))return t[l];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof u?h:null}},e177:function(e,t,n){var i=n("d039");e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var i=n("fc6a"),r=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),l=n("c430"),u=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:i(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values");var p=s.Arguments=s.Array;if(r("keys"),r("values"),r("entries"),!l&&u&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e2cc:function(e,t,n){var i=n("6eeb");e.exports=function(e,t,n){for(var r in t)i(e,r,t[r],n);return e}},e330:function(e,t,n){var i=n("40d5"),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);e.exports=i?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function u(e){i.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var i,r,s,o,a=n("23e7"),c=n("c430"),l=n("da84"),u=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),_=n("2626"),v=n("59ed"),y=n("1626"),b=n("861d"),w=n("19aa"),O=n("8925"),E=n("2266"),C=n("1c7e"),T=n("4840"),k=n("2cf4").set,I=n("b575"),S=n("cdf9"),x=n("44de"),j=n("f069"),A=n("e667"),R=n("01b4"),P=n("69f3"),N=n("94ca"),L=n("b622"),D=n("6069"),M=n("605d"),F=n("2d00"),U=L("species"),q="Promise",B=P.getterFor(q),W=P.set,H=P.getterFor(q),$=d&&d.prototype,V=d,z=$,G=l.TypeError,K=l.document,Y=l.process,J=j.f,Q=J,X=!!(K&&K.createEvent&&l.dispatchEvent),Z=y(l.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,ie=1,re=2,se=1,oe=2,ae=!1,ce=N(q,(function(){var e=O(V),t=e!==String(V);if(!t&&66===F)return!0;if(c&&!z["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new V((function(e){e(1)})),i=function(e){e((function(){}),(function(){}))},r=n.constructor={};return r[U]=i,ae=n.then((function(){}))instanceof i,!ae||!t&&D&&!Z})),le=ce||!C((function(e){V.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!b(e)||!y(t=e.then))&&t},he=function(e,t){var n,i,r,s=t.value,o=t.state==ie,a=o?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{a?(o||(t.rejection===oe&&ge(t),t.rejection=se),!0===a?n=s:(u&&u.enter(),n=a(s),u&&(u.exit(),r=!0)),n===e.promise?l(G("Promise-chain cycle")):(i=ue(n))?h(i,n,c,l):c(n)):l(s)}catch(d){u&&!r&&u.exit(),l(d)}},de=function(e,t){e.notified||(e.notified=!0,I((function(){var n,i=e.reactions;while(n=i.get())he(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var i,r;X?(i=K.createEvent("Event"),i.promise=t,i.reason=n,i.initEvent(e,!1,!0),l.dispatchEvent(i)):i={promise:t,reason:n},!Z&&(r=l["on"+e])?r(i):e===ee&&x("Unhandled promise rejection",n)},pe=function(e){h(k,l,(function(){var t,n=e.facade,i=e.value,r=me(e);if(r&&(t=A((function(){M?Y.emit("unhandledRejection",i,n):fe(ee,n,i)})),e.rejection=M||me(e)?oe:se,t.error))throw t.value}))},me=function(e){return e.rejection!==se&&!e.parent},ge=function(e){h(k,l,(function(){var t=e.facade;M?Y.emit("rejectionHandled",t):fe(te,t,e.value)}))},_e=function(e,t,n){return function(i){e(t,i,n)}},ve=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,de(e,!0))},ye=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw G("Promise can't be resolved itself");var i=ue(t);i?I((function(){var n={done:!1};try{h(i,t,_e(ye,n,e),_e(ve,n,e))}catch(r){ve(n,r,e)}})):(e.value=t,e.state=ie,de(e,!1))}catch(r){ve({done:!1},r,e)}}};if(ce&&(V=function(e){w(this,z),v(e),h(i,this);var t=B(this);try{e(_e(ye,t),_e(ve,t))}catch(n){ve(t,n)}},z=V.prototype,i=function(e){W(this,{type:q,done:!1,notified:!1,parent:!1,reactions:new R,rejection:!1,state:ne,value:void 0})},i.prototype=p(z,{then:function(e,t){var n=H(this),i=J(T(this,V));return n.parent=!0,i.ok=!y(e)||e,i.fail=y(t)&&t,i.domain=M?Y.domain:void 0,n.state==ne?n.reactions.add(i):I((function(){he(i,n)})),i.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new i,t=B(e);this.promise=e,this.resolve=_e(ye,t),this.reject=_e(ve,t)},j.f=J=function(e){return e===V||e===s?new r(e):Q(e)},!c&&y(d)&&$!==Object.prototype)){o=$.then,ae||(f($,"then",(function(e,t){var n=this;return new V((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f($,"catch",z["catch"],{unsafe:!0}));try{delete $.constructor}catch(be){}m&&m($,z)}a({global:!0,wrap:!0,forced:ce},{Promise:V}),g(V,q,!1,!0),_(q),s=u(q),a({target:q,stat:!0,forced:ce},{reject:function(e){var t=J(this);return h(t.reject,void 0,e),t.promise}}),a({target:q,stat:!0,forced:c||ce},{resolve:function(e){return S(c&&this===s?V:this,e)}}),a({target:q,stat:!0,forced:le},{all:function(e){var t=this,n=J(t),i=n.resolve,r=n.reject,s=A((function(){var n=v(t.resolve),s=[],o=0,a=1;E(e,(function(e){var c=o++,l=!1;a++,h(n,t,e).then((function(e){l||(l=!0,s[c]=e,--a||i(s))}),r)})),--a||i(s)}));return s.error&&r(s.value),n.promise},race:function(e){var t=this,n=J(t),i=n.reject,r=A((function(){var r=v(t.resolve);E(e,(function(e){h(r,t,e).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}})},e893:function(e,t,n){var i=n("1a2d"),r=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=r(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(e,h)||n&&i(n,h)||c(e,h,l(t,h))}}},e95a:function(e,t,n){var i=n("b622"),r=n("3f8c"),s=i("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[s]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return ht})),n.d(t,"b",(function(){return di})),n.d(t,"c",(function(){return ft})),n.d(t,"d",(function(){return ut})),n.d(t,"e",(function(){return dt})),n.d(t,"f",(function(){return pt}));var i=n("1fd5"),r=n("589b");function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(e,...t){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${r["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i["b"]("auth","Firebase",r);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function _(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(r["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Object(i["n"])(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||Object(i["t"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(i["w"])()||Object(i["y"])()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,r,s={}){return D(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=Object(i["C"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof i["c"])throw s;f(e,"network-request-failed")}}async function M(e,t,n,i,r={}){const s=await L(e,t,n,i,r);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?j(e.config,r):`${e.config.apiScheme}://${r}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=p(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t=!1){const n=Object(i["q"])(e),r=await n.getIdToken(t),s=z(r);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:H(V(s.auth_time)),issuedAtTime:H(V(s.iat)),expirationTime:H(V(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function V(e){return 1e3*Number(e)}function z(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(i["h"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function G(e){const t=z(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i["c"]&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,i=await e.getIdToken(),r=await K(e,W(n,{idToken:i}));_(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Z(e){const t=Object(i["q"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await D(e,{},async()=>{const n=Object(i["C"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=F(e,r,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ne(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ie;return n&&(_("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(_("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(_("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:O,stsTokenManager:E}=t;_(y&&E,e,"internal-error");const C=ie.fromJSON(this.name,E);_("string"===typeof y,e,"internal-error"),re(u,e.name),re(h,e.name),_("boolean"===typeof b,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),re(d,e.name),re(f,e.name),re(p,e.name),re(m,e.name),re(g,e.name),re(v,e.name);const T=new se({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:g,lastLoginAt:v});return O&&Array.isArray(O)&&(T.providerData=O.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new ie;i.updateFromServerResponse(t);const r=new se({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await X(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ce(this.userKey,i.apiKey,r),this.fullPersistenceKey=ce("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ae),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||w(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=se._fromJSON(e,t);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(c){}})),new le(r,e,n)):new le(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(_e(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(i["r"])()){return/firefox\//i.test(e)}function de(e=Object(i["r"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(i["r"])()){return/crios\//i.test(e)}function pe(e=Object(i["r"])()){return/iemobile/i.test(e)}function me(e=Object(i["r"])()){return/android/i.test(e)}function ge(e=Object(i["r"])()){return/blackberry/i.test(e)}function _e(e=Object(i["r"])()){return/webos/i.test(e)}function ve(e=Object(i["r"])()){return/iphone|ipad|ipod/i.test(e)}function ye(e=Object(i["r"])()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return Object(i["v"])()&&10===document.documentMode}function we(e=Object(i["r"])()){return ve(e)||me(e)||_e(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ue(Object(i["r"])());break;case"Worker":n=`${ue(Object(i["r"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(i["q"])(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Te(e){return Object(i["q"])(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(i["l"])(e=>this.observer=e)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}async function je(e,t){return L(e,"POST","/v1/accounts:sendOobCode",N(e,t))}async function Ae(e,t){return je(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function Pe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Ie{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ne(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ne(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Se(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="http://localhost";class Me extends Ie{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Me(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:De,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(i["C"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function Ue(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function qe(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const Be={["USER_NOT_FOUND"]:"user-not-found"};async function We(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),Be)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Ie{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new He({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new He({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ue(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return We(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new He({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ve(e){const t=Object(i["D"])(Object(i["p"])(e))["link"],n=t?Object(i["D"])(Object(i["p"])(t))["deep_link_id"]:null,r=Object(i["D"])(Object(i["p"])(e))["deep_link_id"],s=r?Object(i["D"])(Object(i["p"])(r))["link"]:null;return s||r||n||t||e}class ze{constructor(e){var t,n,r,s,o,a;const c=Object(i["D"])(Object(i["p"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=$e(null!==(r=c["mode"])&&void 0!==r?r:null);_(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ve(e);try{return new ze(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,t){return Ne._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return _(n,"argument-error"),Ne._fromEmailAndCode(e,n.code,n.tenantId)}}Ge.PROVIDER_ID="password",Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Ke{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ye{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ye{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Me._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Qe.credential(t,n)}catch(i){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com",Qe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ye{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Ye{constructor(){super("twitter.com")}static credential(e,t){return Me._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ze.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function et(e,t){return M(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.TWITTER_SIGN_IN_METHOD="twitter.com",Ze.PROVIDER_ID="twitter.com";class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await se._fromIdTokenResponse(e,n,i),s=nt(n),o=new tt({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=nt(n);return new tt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function nt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends i["c"]{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,it.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new it(e,t,n,i)}}function rt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw it._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){const i=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return tt._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await K(e,rt(i,r,t,e),n);_(s.idToken,i,"internal-error");const o=z(s.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(e.uid===a,i,"user-mismatch"),tt._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t,n=!1){const i="signIn",r=await rt(e,i,t),s=await tt._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function ct(e,t){return at(Te(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t,n){var i;_((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),_("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n){const r=Object(i["q"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&lt(r,s,n),await Ae(r,s)}async function ht(e,t,n){const i=Te(e),r=await et(i,{returnSecureToken:!0,email:t,password:n}),s=await tt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function dt(e,t,n){return ct(Object(i["q"])(e),Ge.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t,n,r){return Object(i["q"])(e).onAuthStateChanged(t,n,r)}function pt(e){return Object(i["q"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function gt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const _t="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_t,"1"),this.storage.removeItem(_t),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){const e=Object(i["r"])();return de(e)||ve(e)}const bt=1e3,wt=10;class Ot extends vt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);be()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wt):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ot.type="LOCAL";const Et=Ot;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends vt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ct.type="SESSION";const Tt=Ct;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new It(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await kt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.receivers=[];class xt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=St("",20);i.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function At(e){jt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return"undefined"!==typeof jt()["WorkerGlobalScope"]&&"function"===typeof jt()["importScripts"]}async function Pt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Nt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Lt(){return Rt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="firebaseLocalStorageDb",Mt=1,Ft="firebaseLocalStorage",Ut="fbase_key";class qt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bt(e,t){return e.transaction([Ft],t?"readwrite":"readonly").objectStore(Ft)}function Wt(){const e=indexedDB.deleteDatabase(Dt);return new qt(e).toPromise()}function Ht(){const e=indexedDB.open(Dt,Mt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Ft,{keyPath:Ut})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Ft)?t(n):(n.close(),await Wt(),t(await Ht()))})})}async function $t(e,t,n){const i=Bt(e,!0).put({[Ut]:t,value:n});return new qt(i).toPromise()}async function Vt(e,t){const n=Bt(e,!1).get(t),i=await new qt(n).toPromise();return void 0===i?null:i.value}function zt(e,t){const n=Bt(e,!0).delete(t);return new qt(n).toPromise()}const Gt=800,Kt=3;class Yt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ht()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Kt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=It._getInstance(Lt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Pt(),!this.activeServiceWorker)return;this.sender=new xt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Nt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ht();return await $t(e,_t,"1"),await zt(e,_t),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$t(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Vt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Bt(e,!1).getAll();return new qt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yt.type="LOCAL";const Jt=Yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function Xt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function en(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Zt().appendChild(i)})}function tn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nn="recaptcha";async function rn(e,t,n){var i;const r=await n.verify();try{let s;if(_("string"===typeof r,e,"argument-error"),_(n.type===nn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await Qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Fe(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(e){this.providerId=sn.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return rn(this.auth,e,Object(i["q"])(t))}static credential(e,t){return He._fromVerification(e,t)}static credentialFromResult(e){const t=e;return sn.credentialFromTaggedObject(t)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?He._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e,t){return t?w(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.PROVIDER_ID="phone",sn.PHONE_SIGN_IN_METHOD="phone";class an extends Ie{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cn(e){return at(e.auth,new an(e),e.bypassAuthState)}function ln(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),ot(n,new an(e),e.bypassAuthState)}async function un(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),st(n,new an(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cn;case"linkViaPopup":case"linkViaRedirect":return un;case"reauthViaPopup":case"reauthViaRedirect":return ln;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new x(2e3,1e4);class fn extends hn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=St();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,dn.get())};e()}}fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn="pendingRedirect",mn=new Map;class gn extends hn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const t=await _n(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function _n(e,t){const n=yn(t),i=vn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function vn(e){return w(e._redirectPersistence)}function yn(e){return ce(pn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t,n=!1){const i=Te(e),r=on(i,t),s=new gn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn=6e5;class On{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Cn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(e))}saveEventToCache(e){this.cachedEventUids.add(En(e)),this.lastProcessedEventTime=Date.now()}}function En(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Cn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Tn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sn=/^https?/;async function xn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await kn(e);for(const i of t)try{if(jn(i))return}catch(n){}f(e,"unauthorized-domain")}function jn(e){const t=C(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Sn.test(n))return!1;if(In.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new x(3e4,6e4);function Rn(){const e=jt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Pn(e){return new Promise((t,n)=>{var i,r,s;function o(){Rn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Rn(),n(p(e,"network-request-failed"))},timeout:An.get()})}if(null===(r=null===(i=jt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=jt().gapi)||void 0===s?void 0:s.load)){const t=tn("iframefcb");return jt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},en("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Nn=null,e})}let Nn=null;function Ln(e){return Nn=Nn||Pn(e),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new x(5e3,15e3),Mn="__/auth/iframe",Fn="emulator/auth/iframe",Un={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,Fn):`https://${e.config.authDomain}/${Mn}`,s={apiKey:t.apiKey,appName:e.name,v:r["a"]},o=qn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["C"])(s).slice(1)}`}async function Wn(e){const t=await Ln(e),n=jt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:Bn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Un,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=p(e,"network-request-failed"),s=jt().setTimeout(()=>{i(r)},Dn.get());function o(){jt().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$n=500,Vn=600,zn="_blank",Gn="http://localhost";class Kn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Yn(e,t,n,r=$n,s=Vn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Hn),{width:r.toString(),height:s.toString(),top:o,left:a}),u=Object(i["r"])().toLowerCase();n&&(c=fe(u)?zn:n),he(u)&&(t=t||Gn,l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(u)&&"_self"!==c)return Jn(t||"",c),new Kn(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Kn(d)}function Jn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="__/auth/handler",Xn="emulator/auth/handler";function Zn(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r["a"],eventId:o};if(t instanceof Ke){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(i["u"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ye){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${ei(e)}?${Object(i["C"])(l).slice(1)}`}function ei({config:e}){return e.emulator?j(e,Xn):`https://${e.authDomain}/${Qn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="webStorageSupport";class ni{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tt,this._completeRedirectFn=bn}async _openPopup(e,t,n,i){var r;y(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Zn(e,t,n,C(),i);return Yn(e,s,St())}async _openRedirect(e,t,n,i){return await this._originValidation(e),At(Zn(e,t,n,C(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Wn(e),n=new On(e);return t.register("authEvent",t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ti,{type:ti},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ti];void 0!==r&&t(!!r),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ve()}}const ii=ni;class ri{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class si extends ri{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new si(e)}_finalizeEnroll(e,t,n){return gt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Xt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class oi{constructor(){}static assertion(e){return si._fromCredential(e)}}oi.FACTOR_ID="phone";var ai="@firebase/auth",ci="0.19.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hi(e){Object(r["c"])(new a["a"]("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(t=>{_(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),_(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},o=new Ce(t,i);return E(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Object(r["c"])(new a["a"]("auth-internal",e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new li(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["f"])(ai,ci,ui(e)),Object(r["f"])(ai,ci,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e=Object(r["d"])()){const t=Object(r["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:ii,persistence:[Jt,Et,Tt]})}hi("Browser")},f069:function(e,t,n){"use strict";var i=n("59ed"),r=function(e){var t,n;this.promise=new e((function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i})),this.resolve=i(t),this.reject=i(n)};e.exports.f=function(e){return new r(e)}},f36a:function(e,t,n){var i=n("e330");e.exports=i([].slice)},f5df:function(e,t,n){var i=n("da84"),r=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),l=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=l(e),c))?n:u?o(t):"Object"==(i=o(t))&&s(t.callee)?"Arguments":i}},f772:function(e,t,n){var i=n("5692"),r=n("90e3"),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},fc6a:function(e,t,n){var i=n("44ad"),r=n("1d80");e.exports=function(e){return i(r(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var i=n("4930");e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var i=n("da84");e.exports=i.Promise}}]);
//# sourceMappingURL=chunk-vendors.0b25bffd.js.map