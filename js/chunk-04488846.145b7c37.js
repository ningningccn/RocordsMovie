(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04488846"],{"0b42":function(t,e,o){var n=o("da84"),c=o("e8b5"),a=o("68ee"),s=o("861d"),r=o("b622"),i=r("species"),l=n.Array;t.exports=function(t){var e;return c(t)&&(e=t.constructor,a(e)&&(e===l||c(e.prototype))?e=void 0:s(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?l:e}},"159b":function(t,e,o){var n=o("da84"),c=o("fdbc"),a=o("785a"),s=o("17c2"),r=o("9112"),i=function(t){if(t&&t.forEach!==s)try{r(t,"forEach",s)}catch(e){t.forEach=s}};for(var l in c)c[l]&&i(n[l]&&n[l].prototype);i(a)},"17c2":function(t,e,o){"use strict";var n=o("b727").forEach,c=o("a640"),a=c("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"65f0":function(t,e,o){var n=o("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},a640:function(t,e,o){"use strict";var n=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&n((function(){o.call(null,e||function(){return 1},1)}))}},b727:function(t,e,o){var n=o("0366"),c=o("e330"),a=o("44ad"),s=o("7b0b"),r=o("07fa"),i=o("65f0"),l=c([].push),u=function(t){var e=1==t,o=2==t,c=3==t,u=4==t,b=6==t,d=7==t,f=5==t||b;return function(g,p,m,j){for(var O,h,v=s(g),y=a(v),w=n(p,m),x=r(y),k=0,U=j||i,C=e?U(g,x):o||d?U(g,0):void 0;x>k;k++)if((f||k in y)&&(O=y[k],h=w(O,k,v),t))if(e)C[k]=h;else if(h)switch(t){case 3:return!0;case 5:return O;case 6:return k;case 2:l(C,O)}else switch(t){case 4:return!1;case 7:l(C,O)}return b?-1:c||u?u:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d96d:function(t,e,o){"use strict";o.r(e);var n=o("7a23"),c={class:"row"},a={class:"form-signin col-10 col-md-2 mx-auto"},s=Object(n["g"])("h1",{class:"h3 mb-3 fw-normal"},"免費註冊",-1),r={class:"form-floating"},i=Object(n["g"])("label",{for:"floatingInput"},"Email address",-1),l={class:"form-floating"},u=Object(n["g"])("label",{for:"floatingPassword"},"Password",-1),b={class:"form-signin col-10 col-md-2 mx-auto"},d=Object(n["g"])("div",{class:"w-100 d-flex justify-content-end"},[Object(n["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f=Object(n["g"])("h1",{class:"h3 mb-3 fw-normal"},"登入",-1),g={class:"form-floating"},p=Object(n["g"])("label",{for:"floatingInput"},"Email address",-1),m={class:"form-floating"},j=Object(n["g"])("label",{for:"floatingPassword"},"Password",-1),O={class:"box d-flex"},h=["onMouseenter","onClick"],v={class:"d-flex"},y={key:0},w=Object(n["g"])("i",{class:"bi bi-star"},null,-1),x=[w],k={key:1},U=Object(n["g"])("i",{class:"bi bi-star-fill"},null,-1),C=[U],I=Object(n["g"])("div",null,null,-1),D={class:"d-flex"},E=Object(n["g"])("div",{class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"11"}},[Object(n["g"])("div",{id:"liveToast",class:"toast align-items-center text-white bg-primary border-0",role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000"},[Object(n["g"])("div",{class:"toast-body"},"123")])],-1),T=Object(n["g"])("button",{type:"button",class:"btn btn-secondary","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Tooltip on top"}," Tooltip on top ",-1),F=Object(n["g"])("button",{type:"button",class:"btn btn-secondary","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Tooltip on bottom"}," Tooltip on ",-1),J=["disabled"],P=Object(n["i"])(" Loading... "),A=Object(n["g"])("button",{class:"btn btn-primary"},"忘記密碼",-1);function G(t,e,o,w,U,G){return Object(n["u"])(),Object(n["f"])("div",c,[Object(n["g"])("div",a,[Object(n["g"])("form",null,[s,Object(n["g"])("div",r,[Object(n["J"])(Object(n["g"])("input",{type:"email",class:"form-control",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=function(t){return U.formData.email=t})},null,512),[[n["G"],U.formData.email]]),i]),Object(n["g"])("div",l,[Object(n["J"])(Object(n["g"])("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=function(t){return U.formData.password=t})},null,512),[[n["G"],U.formData.password]]),u]),Object(n["g"])("button",{class:"w-100 btn mt-4 btn-primary",onClick:e[2]||(e[2]=function(){return G.signUp&&G.signUp.apply(G,arguments)})},"註冊")]),Object(n["g"])("button",{onClick:e[3]||(e[3]=function(){return G.signUp&&G.signUp.apply(G,arguments)})},"123")]),Object(n["g"])("div",b,[d,Object(n["g"])("form",null,[f,Object(n["g"])("div",g,[Object(n["J"])(Object(n["g"])("input",{type:"email",class:"form-control",placeholder:"name@example.com","onUpdate:modelValue":e[4]||(e[4]=function(t){return U.loginForm.email=t})},null,512),[[n["G"],U.loginForm.email]]),p]),Object(n["g"])("div",m,[Object(n["J"])(Object(n["g"])("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":e[5]||(e[5]=function(t){return U.loginForm.password=t})},null,512),[[n["G"],U.loginForm.password]]),j])]),Object(n["g"])("button",{onClick:e[6]||(e[6]=function(){return G.login&&G.login.apply(G,arguments)})},"登入"),Object(n["g"])("button",{onClick:e[7]||(e[7]=function(){return G.state&&G.state.apply(G,arguments)})},"nowState")]),Object(n["g"])("div",null,[Object(n["g"])("button",{onClick:e[8]||(e[8]=function(){return G.logout&&G.logout.apply(G,arguments)})},"登出")]),Object(n["g"])("div",O,[(Object(n["u"])(),Object(n["f"])(n["a"],null,Object(n["A"])(5,(function(t){return Object(n["g"])("div",{key:t,onMouseenter:function(e){return G.enter(t)},onMouseleave:e[9]||(e[9]=function(){return G.out&&G.out.apply(G,arguments)}),onClick:function(e){return G.ok(t)},class:Object(n["p"])({active:U.curIndex>=t})},[Object(n["g"])("div",v,[U.curIndex<t?(Object(n["u"])(),Object(n["f"])("div",y,x)):Object(n["e"])("",!0),U.curIndex>=t?(Object(n["u"])(),Object(n["f"])("div",k,C)):Object(n["e"])("",!0)]),I],42,h)})),64))]),Object(n["g"])("div",D,[Object(n["J"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=function(t){return U.testUsername=t})},null,512),[[n["G"],U.testUsername]]),Object(n["g"])("button",{class:".btn",onClick:e[11]||(e[11]=function(){return G.searchUsername&&G.searchUsername.apply(G,arguments)})},"search")]),Object(n["g"])("button",{type:"button",class:"btn btn-primary",id:"liveToastBtn",onClick:e[12]||(e[12]=function(t){return G.toast()})}," Show live toast "),E,T,F,Object(n["g"])("button",{class:"btn btn-primary",type:"button",disabled:U.isDisable,onClick:e[13]||(e[13]=function(t){return G.spinner()})},[Object(n["g"])("span",{class:Object(n["p"])(["spinner-border-sm",{"spinner-border":U.isLoading}]),role:"status","aria-hidden":"true"},null,2),P],8,J),A])}o("d3b7"),o("159b");var L=o("7b17"),M=o("17e1"),V=o("ea7b"),B=o("66ce"),S={data:function(){return{formData:{email:"",password:""},loginForm:{email:"",password:""},curIndex:0,flag:!1,testUsername:"",isDisable:!1,isLoading:!1}},methods:{enter:function(t){this.flag||(this.curIndex=t,console.log("this.curIndex: ",this.curIndex))},out:function(){this.flag||(this.curIndex=-1)},ok:function(t){console.log(this.flag),0==this.flag?(this.flag=!0,console.log("click")):(this.flag=!1,console.log("click")),this.curIndex=t},signUp:function(){var t=this,e=t.formData.email,o=t.formData.password;Object(V["a"])(M["a"],e,o).then((function(t){var o=t.user;console.log("user: ",o),Object(B["j"])(Object(B["h"])(M["b"],"user/"+o.uid),{email:e}),console.log(123)})).catch((function(t){var e=t.code,o=t.message;console.log("errorCode: ",e),console.log("errorMessage: ",o)}))},login:function(){var t=this,e=t.loginForm.email,o=t.loginForm.password;Object(V["e"])(M["a"],e,o).then((function(t){var e=t.user;console.log("user: ",e)})).catch((function(t){var e=t.code,o=t.message;console.log("errorCode: ",e),console.log("errorMessage: ",o)}))},state:function(){Object(V["c"])(M["a"],(function(t){if(t){console.log(t);var e=t.uid;console.log("uid: ",e)}else console.log("User is signed out: ")}))},logout:function(){Object(V["f"])(M["a"]).then((function(){console.log("the user signed out")}))},searchUsername:function(){console.log("click");var t=this.testUsername,e=Object(B["g"])(Object(B["h"])(M["b"],"user"),Object(B["e"])("username"),Object(B["b"])("".concat(t))),o={};Object(B["c"])(e).then((function(t){t.forEach((function(t){console.log(t.val()),o=t.val(),console.log(o.post)}))}))},toast:function(){var t=document.getElementById("liveToast"),e=new L["b"](t);e.show()},spinner:function(){var t=this;this.isLoading=!0,this.isDisable=!0,setTimeout((function(){t.isLoading=!1,t.isDisable=!1}),3e3)},forgetPassword:function(){}}},z=o("6b0d"),R=o.n(z);const q=R()(S,[["render",G]]);e["default"]=q},e8b5:function(t,e,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-04488846.145b7c37.js.map