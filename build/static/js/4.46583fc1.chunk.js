(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{288:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(89);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,s=void 0;try{for(var i,r=e[Symbol.iterator]();!(a=(i=r.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){o=!0,s=l}finally{try{a||null==r.return||r.return()}finally{if(o)throw s}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},290:function(e,t,n){e.exports={ava:"Humans_ava__2bDjI"}},299:function(e,t,n){"use strict";n.r(t);var a,o=n(92),s=n(31),i=n(32),r=n(34),l=n(33),c=n(0),d=n.n(c),u=n(11),p=n(288),b=n(13),h=(n(18),n(290)),f=n.n(h),j=n(1),g=function(e){for(var t=[],n=1;n<=10;n++)t.push(n);for(var a=[],o=Object(c.useState)(1),s=Object(p.a)(o,2),i=s[0],r=s[1],l=20*i,d=20*(i-1)+1;d<=l;d++)a.push(d);return Object(j.jsxs)("div",{children:[i>1&&Object(j.jsx)("button",{onClick:function(){r(--i)},children:"BACK"}),a.map((function(t){return Object(j.jsxs)("button",{onClick:function(n){e.setNewPageTotal(t)},children:[" ",t," "]})})),i<10&&Object(j.jsx)("button",{onClick:function(){r(++i)},children:"NEXT"}),e.users.map((function(t){return Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:f.a.ava,src:t.photos.small?t.photos.small:t.photos.large?t.photos.large:"https://i.pinimg.com/originals/18/48/c3/1848c3f11dd2ae9a8dd70eba0b7af3c6.jpg",alt:""})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(b.b,{to:"/Profile/"+t.id,children:t.name})}),Object(j.jsx)("div",{children:t.status}),Object(j.jsxs)("div",{children:["id: ",t.id]}),Object(j.jsx)("div",{children:t.followed?Object(j.jsx)("button",{disabled:e.disableId.some((function(e){return e==t.id})),onClick:function(){e.unfollowTC(t.id)},children:"unfollow"}):Object(j.jsx)("button",{disabled:e.disableId.some((function(e){return e==t.id})),onClick:function(){e.followTC(t.id)},children:"follow"})})]})]})}))]})},m=n(61),O=n(88),v=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).setNewPageTotal=function(t){e.props.getUsersTC(e.props.pageSize,t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.pageSize,this.props.pageTotal)}},{key:"render",value:function(){return this.props.isLoaded?Object(j.jsx)(m.a,{}):Object(j.jsx)(g,{users:this.props.users,setNewPageTotal:this.setNewPageTotal,pageCount:this.props.pageCount,pageSize:this.props.pageSize,unfollowTC:this.props.unfollowTC,followTC:this.props.followTC,disableId:this.props.disableId,disableIdUpdate:this.props.disableIdUpdate})}}]),n}(d.a.Component),C=(a={followTC:O.c,unfollowTC:O.e,disableIdUpdate:O.b},Object(o.a)(a,"disableIdUpdate",O.b),Object(o.a)(a,"getUsersTC",O.d),a),w=Object(u.b)((function(e){return{users:e.humansPage.users,pageCount:e.humansPage.pageCount,pageTotal:e.humansPage.pageTotal,pageSize:e.humansPage.pageSize,isLoaded:e.humansPage.isLoaded,disableId:e.humansPage.disableId}}),C)(v);t.default=w}}]);
//# sourceMappingURL=4.46583fc1.chunk.js.map