(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{20:function(t,e,n){t.exports={header:"Header_header__1XjID",ava:"Header_ava__34e2R",text:"Header_text__2rDaz",login:"Header_login__1B1ug",button:"Header_button__-qblk",log:"Header_log__mK_IX"}},216:function(t,e,n){},222:function(t,e,n){},223:function(t,e,n){"use strict";n.r(e);n(66);var r=function(t){t&&t instanceof Function&&n.e(9).then(n.bind(null,300)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))},a=n(31),c=n(24),u=n(59),o=n(45),i=n(60),s=n(84),l=n(82),f=Object(a.c)({profilePage:o.a,dialogsPage:u.a,humansPage:i.a,auth:c.a,form:l.a}),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,b=Object(a.e)(f,d(Object(a.a)(s.a)));window.store=b;var h=b,j=n(0),p=n.n(j),O=n(46),g=n.n(O),m=n(18),v=n.n(m),x=n(32),y=n(34),P=n(35),_=n(37),I=n(36),k=n(15),w=n(7),C=(n(216),n(21)),N=n(3),D=n(47),M=n(2),U=function(t){return function(e){return Object(M.jsx)(j.Suspense,{fallback:Object(M.jsx)(D.a,{}),children:Object(M.jsx)(t,Object(N.a)({},e))})}},L=n(20),T=n.n(L),S=n.p+"static/media/logo.793fc9e6.png",F=function(t){return Object(M.jsxs)("header",{className:T.a.header+" flex fSpaceBetween",children:[Object(M.jsx)("div",{children:Object(M.jsx)("img",{src:S,alt:""})}),Object(M.jsx)("div",{children:t.id?Object(M.jsxs)("div",{className:"flex",children:[Object(M.jsx)("img",{className:T.a.ava,src:t.photo,alt:""}),Object(M.jsxs)("div",{className:T.a.text,children:[Object(M.jsx)("p",{className:T.a.login,children:t.login}),Object(M.jsx)("button",{className:T.a.button,onClick:t.logout,children:"LogOut"})]})]}):Object(M.jsx)("h1",{className:T.a.log,children:Object(M.jsx)(k.b,{to:"/login",children:"Login"})})})]})},H=function(t){Object(_.a)(n,t);var e=Object(I.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(P.a)(n,[{key:"componentDidMount",value:function(){this.props.getMyProfileTC(this.props.data.id)}},{key:"render",value:function(){return Object(M.jsx)(F,Object(N.a)(Object(N.a)({},this.props.data),{},{photo:this.props.photo,logout:this.props.logoutTC}))}}]),n}(p.a.Component),z={logoutTC:c.d,getMyProfileTC:o.b},A=Object(C.b)((function(t){return{data:t.auth,photo:t.profilePage.myPhotos.small}}),z)(H),E=n(25),B=n.n(E),J=function(t){return Object(M.jsxs)("nav",{className:B.a.nav,children:[Object(M.jsx)("div",{children:Object(M.jsx)(k.b,{activeClassName:B.a.active,to:/Profile/+t.myId,children:"My profile"})}),Object(M.jsx)("div",{children:Object(M.jsx)(k.b,{activeClassName:B.a.active,to:"/Dialogs",children:"Dialogs"})}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{children:Object(M.jsx)(k.b,{activeClassName:B.a.active,to:"/Humans",children:"Humans"})}),Object(M.jsx)("div",{children:Object(M.jsx)(k.b,{activeClassName:B.a.active,to:"/login",children:"Login"})})]})},X=(n(222),function(){return Object(M.jsx)("h1",{children:"__News__"})}),q=p.a.lazy((function(){return n.e(8).then(n.bind(null,301))})),R=p.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,305))})),K=p.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,303))})),Y=p.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,302))})),V=p.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,304))})),G=function(t){Object(_.a)(n,t);var e=Object(I.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(P.a)(n,[{key:"componentDidMount",value:function(){var t=Object(x.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.title="Marmel social network",t.next=3,this.props.getAuthMeTC();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return null===this.props.login?Object(M.jsx)(D.a,{}):Object(M.jsx)(k.a,{children:Object(M.jsxs)("div",{className:"app-wraper",children:[Object(M.jsx)(A,{}),Object(M.jsx)(J,{myId:this.props.myId}),Object(M.jsxs)("div",{className:"content",children:[Object(M.jsx)(w.b,{path:"/Profile/:userId?",render:U(K)}),Object(M.jsx)(w.b,{path:"/Dialogs/:userId?",render:U(V)}),Object(M.jsx)(w.b,{path:"/News",render:function(){return Object(M.jsx)(X,{})}}),Object(M.jsx)(w.b,{path:"/Humans",render:U(R)}),Object(M.jsx)(w.b,{path:"/Settings",render:U(q)}),Object(M.jsx)(w.b,{path:"/login",render:U(Y)})]})]})})}}]),n}(p.a.Component),Q={getAuthMeTC:c.b},W=Object(C.b)((function(t){return{login:t.auth.login,myId:t.auth.id}}),Q)(G);g.a.render(Object(M.jsx)(p.a.StrictMode,{children:Object(M.jsx)(C.a,{store:h,children:Object(M.jsx)(W,{})})}),document.getElementById("root")),r()},24:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l}));var r=n(3),a=n(27),c=n(6),u={id:null,login:null,email:null,captcha:null,myId:null},o=function(t,e,n){return{type:"setAuthData",data:{id:t,login:e,email:n}}},i=function(t){return function(e){Object(c.c)().then((function(n){0===n.resultCode?e(o(n.data.id,n.data.login,n.data.email)):e(o(t,t,t))}))}},s=function(t,e,n,r){return function(u){Object(c.k)(t,e,n,r).then((function(t){0===t.resultCode?u(i()):10===t.resultCode&&Object(c.d)().then((function(t){u({type:"setCaptchaUrl",data:{captcha:t.url}})})),u(Object(a.b)("login",{_error:t.messages}))}))}},l=function(){return function(t){Object(c.l)().then((function(e){0===e.resultCode?t(i(!1)):alert(e.messages)}))}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"setAuthData":case"setCaptchaUrl":return Object(r.a)(Object(r.a)({},t),e.data);default:return t}}},25:function(t,e,n){t.exports={nav:"Nav_nav__2utiy",active:"Nav_active__3S1xY"}},45:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return b})),n.d(e,"f",(function(){return h})),n.d(e,"d",(function(){return j})),n.d(e,"e",(function(){return p}));var r=n(18),a=n.n(r),c=n(32),u=n(48),o=n(3),i=n(6),s={profileInfo:{photos:{small:null,large:null},userId:null,aboutMe:null,lookingForAJob:null,lookingForAJobDescription:null,fullName:null,contacts:{github:null,vk:null,facebook:null,instagram:null,twitter:null,website:null,youtube:null,mainLink:null}},myPhotos:{small:null,large:null},status:"bag"},l=function(t){return{type:"setProfile",profileInfo:t}},f=function(t){return{type:"setStatus",status:t}},d=function(t){return function(e){Object(i.g)(t).then((function(t){e(l(t))})),Object(i.h)(t).then((function(t){e(f(t))}))}},b=function(t){return function(e){void 0!=t&&Object(i.g)(t).then((function(t){e({type:"setMyProfile",profileInfo:t})}))}},h=function(t){return function(e){Object(i.r)(t).then((function(n){0===n.resultCode?e(f(t)):e(f("Debil"))}))}},j=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.n)(t);case 2:0===(r=e.sent).resultCode&&n({type:"setPhotoData",dataPhoto:r.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.o)(t);case 2:0===n.sent.resultCode?Object(i.g)(e).then((function(t){r(l(t))})):r();case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"addPost":var n={name:"Meredit",message:e.postText,likeCount:"5"};return Object(o.a)(Object(o.a)({},t),{},{posts:[].concat(Object(u.a)(t.posts),[n])});case"setProfile":return Object(o.a)(Object(o.a)({},t),{},{profileInfo:e.profileInfo});case"setMyProfile":return Object(o.a)(Object(o.a)({},t),{},{myPhotos:e.profileInfo.photos});case"setStatus":return Object(o.a)(Object(o.a)({},t),{},{status:e.status});case"setPhotoData":var r=e.dataPhoto.photos,a=Object(o.a)(Object(o.a)({},t),{},{profileInfo:Object(o.a)(Object(o.a)({},t.profileInfo),{},{photos:r})});return a;case"deletePost":return Object(o.a)(Object(o.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!=e.postId}))});default:return t}}},47:function(t,e,n){"use strict";n(0);var r=n(2);e.a=function(t){return Object(r.jsx)("div",{children:"PreLoader mather fucker!!"})}},59:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return b}));var r=n(3),a=n(27),c=n(6),u={messages:[],dialogs:[]},o=function(t){return{type:"setDialogs",data:t}},i=function(t){return{type:"setMessages",data:t}},s=function(){return function(t){Object(c.e)().then((function(e){t(o(e))}))}},l=function(t){return function(e){Object(c.p)(t).then((function(t){e(o(t.messages))}))}},f=function(t,e){return function(n){Object(c.m)(t,e).then((function(e){Object(c.p)(t).then((function(e){Object(c.e)().then((function(t){n(o(t))})),Object(c.f)(t).then((function(t){n(i(t))})),n(Object(a.a)("DialogMessageForm"))}))}))}},d=function(t){return function(e){void 0!=t&&Object(c.f)(t).then((function(t){e(i(t))}))}},b=function(t,e){return function(n){Object(c.a)(t).then((function(t){Object(c.f)(e).then((function(t){n(i(t))}))}))}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"setDialogs":return Object(r.a)(Object(r.a)({},t),{},{dialogs:e.data});case"setMessages":return Object(r.a)(Object(r.a)({},t),{},{messages:e.data.items});default:return t}}},6:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"r",(function(){return b})),n.d(e,"o",(function(){return h})),n.d(e,"p",(function(){return j})),n.d(e,"q",(function(){return p})),n.d(e,"l",(function(){return O})),n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return m})),n.d(e,"k",(function(){return v})),n.d(e,"m",(function(){return x})),n.d(e,"n",(function(){return y}));var r=n(83),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"07c315dc-c503-4487-834e-08b5a5a30b20"}}),c=function(t,e){return a.get("users?count=".concat(t,"&page=").concat(e)).then((function(t){return t.data}))},u=function(t,e){return a.get("users?count=".concat(t,"&page=").concat(e))},o=function(t){return a.get("profile/".concat(t)).then((function(t){return t.data}))},i=function(t){return a.get("profile/status/".concat(t)).then((function(t){return t.data}))},s=function(){return a.get("auth/me").then((function(t){return t.data}))},l=function(){return a.get("security/get-captcha-url").then((function(t){return t.data}))},f=function(){return a.get("dialogs").then((function(t){return t.data}))},d=function(t){return a.get("dialogs/".concat(t,"/messages?count=20")).then((function(t){return t.data}))},b=function(t){return a.put("profile/status",{status:t}).then((function(t){return t.data}))},h=function(t){return a.put("profile",t).then((function(t){return t.data}))},j=function(t){return a.put("dialogs/".concat(t)).then((function(t){return t.data}))},p=function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))},O=function(){return a.delete("/auth/login").then((function(t){return t.data}))},g=function(t){return a.delete("dialogs/messages/".concat(t)).then((function(t){return t.data}))},m=function(t){return a.post("follow/".concat(t)).then((function(t){return t.data}))},v=function(t,e,n,r){return a.post("/auth/login",{email:t,password:e,rememberMe:n,captcha:r}).then((function(t){return t.data}))},x=function(t,e){return a.post("dialogs/".concat(t,"/messages"),{body:e}).then((function(t){return t.data}))},y=function(t){var e=new FormData;return e.append("image",t),a.post("profile/photo",e,{headers:{"Content-type":"multipart/form-data"}}).then((function(t){return t.data}))}},60:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"c",(function(){return d}));var r=n(48),a=n(3),c=n(6),u={users:[],pageCount:0,pageTotal:1,pageSize:5,isLoaded:!1,isDisable:!1,disableId:[],massUsers:[],page:1,backPage:[],nextPage:1,serchName:"",serchNameProfile:[]},o=function(t){return{type:"setUsers",users:t}},i=function(t,e){return{type:"disableIdUpdate",boolean:t,userId:e}},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(n){var r=function r(a){Object(c.i)(e,a).then((function(c){for(var i=0;i<e;i++)if(null!=c.items[i].photos.small){if(u.massUsers.push(c.items[i]),5==u.massUsers.length){u.nextPage=a;break}break}5==u.massUsers.length?("back"==t&&n(o(u.massUsers.reverse())),n(o(u.massUsers))):("back"!=t?++a:--a,r(a))}))};"next"==t?(u.massUsers=[],r(u.nextPage+1),u.backPage.push(u.nextPage)):"back"==t?(u.massUsers=[],r(u.backPage[u.backPage.length-1]),u.backPage.splice(u.backPage.length-1)):(u.massUsers=[],r(u.page))}},l=function(t){return function(e){!function n(r){Object(c.j)(100,r).then((function(a){for(var c=0;c<100;c++)if(a.data.items[c].name==t){u.serchNameProfile[0]=a.data.items[c],e(o(u.serchNameProfile));break}if(null==u.serchNameProfile[0])if(r%10!=0)n(++r);else if(r%20==0){e(o([{name:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",photos:{small:"1"}}]))}else setTimeout(n,1e3,++r)}))}(1)}},f=function(t){return function(e){e(i(!0,t)),Object(c.q)(t).then((function(n){0==n.resultCode&&e(function(t){return{type:"unfollow",userId:t}}(t)),e(i(!1,t))}))}},d=function(t){return function(e){e(i(!0,t)),Object(c.b)(t).then((function(n){0==n.resultCode&&e(function(t){return{type:"follow",userId:t}}(t)),e(i(!1,t))}))}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"follow":return Object(a.a)(Object(a.a)({},t),{},{users:t.users.map((function(t){return t.id==e.userId?Object(a.a)(Object(a.a)({},t),{},{followed:!0}):t}))});case"unfollow":return Object(a.a)(Object(a.a)({},t),{},{users:t.users.map((function(t){return t.id==e.userId?Object(a.a)(Object(a.a)({},t),{},{followed:!1}):t}))});case"setUsers":return Object(a.a)(Object(a.a)({},t),{},{users:e.users});case"setPageCount":return Object(a.a)(Object(a.a)({},t),{},{pageCount:e.pageCount});case"isLoadedTrue":return Object(a.a)(Object(a.a)({},t),{},{isLoaded:!0});case"isLoadedFalse":return Object(a.a)(Object(a.a)({},t),{},{isLoaded:!1});case"disableIdUpdate":return Object(a.a)(Object(a.a)({},t),{},{disableId:e.boolean?[].concat(Object(r.a)(t.disableId),[e.userId]):t.disableId.filter((function(t){return t!=e.userId}))});default:return t}}},66:function(t,e,n){}},[[223,2,3]]]);
//# sourceMappingURL=main.39e9789f.chunk.js.map