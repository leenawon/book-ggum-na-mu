(this["webpackJsonpggum-na-mu-app"]=this["webpackJsonpggum-na-mu-app"]||[]).push([[0],{30:function(e,t,n){e.exports={auth_form:"Auth_auth_form__M_AZV",toggle_button:"Auth_toggle_button__1GxTM",social_login:"Auth_social_login__2wJ6n"}},31:function(e,t,n){e.exports={update_form:"Content_update_form__DumgT",title:"Content_title__1Sg1q",image:"Content_image__3Cw8h",content_button:"Content_content_button__1c9GY"}},32:function(e,t,n){e.exports={content_form:"ContentForm_content_form__1cZqt",input_wrapper:"ContentForm_input_wrapper__1zDnJ",image_upload:"ContentForm_image_upload__1lCcS",submit_button:"ContentForm_submit_button__2H3W6"}},36:function(e,t,n){e.exports={name_input:"Profile_name_input__3Adx0",edit_button:"Profile_edit_button__22_jO",logout_button:"Profile_logout_button__cOU2X"}},42:function(e,t,n){e.exports={nav_list:"Navigation_nav_list__1Zdwd"}},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(40),i=n.n(r),s=n(11),u=n(27),o=n(12),j=n(0),b=n.n(j),l=n(2),d=n(41),O=n(23),p=n(19),m=n(24),f=Object(d.a)({apiKey:"AIzaSyDSgexpYwBCc7yltvsm1nc3drS6pCsRAQQ",authDomain:"my-real-time-note.firebaseapp.com",projectId:"my-real-time-note",storageBucket:"my-real-time-note.appspot.com",messagingSenderId:"877733060415",appId:"1:877733060415:web:5e0341dae11166fdc73d8a"}),x=Object(O.c)(f),h=Object(p.e)(),_=Object(m.c)(),v=n(4),g=n(29),w=n(30),y=n.n(w),N=n(7);var C=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),i=Object(s.a)(r,2),u=i[0],o=i[1],j=Object(c.useState)(""),d=Object(s.a)(j,2),p=d[0],m=d[1],f=function(e){var t=e.target,c=t.name,r=t.value;a(Object(g.a)(Object(g.a)({},n),{},Object(v.a)({},c,r)))},h=function(){var e=Object(l.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!u){e.next=8;break}return e.next=5,Object(O.b)(x,n.email,n.password);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,Object(O.d)(x,n.email,n.password);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),m(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsxs)("form",{className:y.a.auth_form,onSubmit:h,children:[Object(N.jsx)("input",{type:"email",name:"email",value:n.email,placeholder:"\uc774\uba54\uc77c",required:!0,onChange:f}),Object(N.jsx)("input",{type:"password",name:"password",value:n.password,placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,onChange:f}),Object(N.jsx)("button",{type:"submit",children:u?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778"}),p&&Object(N.jsxs)("p",{children:["Error : ",p]})]}),Object(N.jsx)("button",{className:y.a.toggle_button,onClick:function(){o((function(e){return!e}))},children:u?"\ub85c\uadf8\uc778\ud558\uae30":"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})]})};var k=function(){var e=function(){var e=Object(l.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a,e.next=3,Object(O.e)(x,t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(C,{}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{className:y.a.social_login,onClick:e,children:"Google\ub85c \uc2dc\uc791\ud558\uae30"})})]})},S=n(31),U=n.n(S);var F=function(e){var t=e.content,n=e.isWriter,a=Object(c.useState)(!1),r=Object(s.a)(a,2),i=r[0],u=r[1],o=Object(c.useState)(t.text),j=Object(s.a)(o,2),d=j[0],O=j[1],f=Object(p.d)(h,"contents","".concat(t.id)),x=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,Object(p.c)(f);case 4:if(""===t.imageFileURL){e.next=7;break}return e.next=7,Object(m.a)(Object(m.d)(_,t.imageFileURL));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){u((function(e){return!e}))},g=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(p.i)(f,{text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{children:i?Object(N.jsx)(N.Fragment,{children:n&&Object(N.jsxs)("div",{className:U.a.update_form,children:[Object(N.jsxs)("form",{onSubmit:g,children:[Object(N.jsx)("input",{type:"text",value:d,onChange:function(e){var t=e.target.value;O(t)},required:!0}),Object(N.jsx)("button",{type:"submit",children:"\uc218\uc815\ud558\uae30"})]}),Object(N.jsx)("button",{onClick:v,children:"\ucde8\uc18c"})]})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h4",{className:U.a.title,children:t.text}),t.imageFileURL&&Object(N.jsx)("img",{className:U.a.image,src:t.imageFileURL,alt:"\uc5c5\ub85c\ub4dc \uc774\ubbf8\uc9c0"}),Object(N.jsxs)("h5",{children:["\uae00\uc4f4\uc774 : ",t.writer]}),n&&Object(N.jsxs)("div",{className:U.a.content_button,children:[Object(N.jsx)("button",{type:"button",onClick:v,children:"\uc218\uc815"}),Object(N.jsx)("button",{type:"button",onClick:x,children:"\uc0ad\uc81c"})]})]})})},D=n(53),A=n(32),R=n.n(A);var P=function(e){var t=e.userObject,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1],u=Object(c.useState)(""),o=Object(s.a)(u,2),j=o[0],d=o[1],O=Object(c.useRef)(),f=function(){var e=Object(l.a)(b.a.mark((function e(n){var c,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",""===j){e.next=9;break}return a=Object(m.d)(_,"".concat(t.uid,"/").concat(Object(D.a)())),e.next=6,Object(m.e)(a,j,"data_url");case 6:return e.next=8,Object(m.b)(a).then();case 8:c=e.sent;case 9:return s={text:r,createdAt:Date.now(),writerUID:t.uid,imageFileURL:c,writer:t.displayName},e.next=12,Object(p.a)(Object(p.b)(h,"contents"),s);case 12:i(""),d("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{className:R.a.content_form,onSubmit:f,children:[Object(N.jsxs)("div",{className:R.a.input_wrapper,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{type:"text",value:r,onChange:function(e){var t=e.target.value;i(t)},placeholder:"\uc791\uc131\ud558\uace0 \uc2f6\uc740 \ub0b4\uc6a9\uc744 \uc801\uc5b4\uc8fc\uc138\uc694\ud83d\udce2",maxLength:150}),Object(N.jsx)("button",{className:R.a.submit_button,type:"submit",children:"\uae00 \uc62c\ub9ac\uae30"})]}),Object(N.jsx)("label",{htmlFor:"input_file",children:"\ud83d\udcf8\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),Object(N.jsx)("input",{type:"file",ref:O,id:"input_file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(e){var t=e.currentTarget.result;d(t)}}})]}),j&&Object(N.jsxs)("div",{className:R.a.image_upload,children:[Object(N.jsx)("img",{src:j,alt:"\uc5c5\ub85c\ub4dc\ud55c \uc774\ubbf8\uc9c0"}),Object(N.jsx)("button",{onClick:function(){d(""),O.current.value=""},children:"\uc774\ubbf8\uc9c0 \uc9c0\uc6b0\uae30"})]})]})})};var I=function(e){var t=e.userObject,n=Object(c.useState)([]),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){var e=Object(p.h)(Object(p.b)(h,"contents"),Object(p.g)("createdAt","desc"));return Object(p.f)(e,(function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));i(t)})),function(){return i([])}}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(P,{userObject:t}),Object(N.jsx)("div",{children:r.map((function(e){return Object(N.jsx)(F,{content:e,isWriter:e.writerUID===t.uid},e.id)}))})]})},L=n(42),q=n.n(L);var B=function(e){var t=e.userObject;return Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{className:q.a.nav_list,children:[Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/",children:"\ud83c\udfe1\ud648\uc73c\ub85c"})}),Object(N.jsx)("li",{children:Object(N.jsxs)(u.b,{to:"/profile",children:["\ud83d\udc9a",t.displayName,"\uc758 \ud504\ub85c\ud544"]})})]})})},E=n(36),J=n.n(E);var G=function(e){var t=e.userObject,n=e.currentUserName,a=Object(c.useState)(t.displayName),r=Object(s.a)(a,2),i=r[0],u=r[1],j=Object(o.f)(),d=function(){var e=Object(l.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),t.displayName===i){e.next=5;break}return e.next=4,Object(O.f)(x.currentUser,{displayName:i});case 4:n();case 5:j("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h4",{children:[t.displayName,"\uc758 Profile"]}),Object(N.jsxs)("form",{onSubmit:d,children:[Object(N.jsx)("input",{className:J.a.name_input,type:"text",placeholder:"\uc774\ub984",value:i,onChange:function(e){var t=e.target.value;u(t)}}),Object(N.jsx)("button",{className:J.a.edit_button,type:"submit",children:"\uc218\uc815\ud558\uae30"})]}),Object(N.jsx)("button",{className:J.a.logout_button,onClick:function(){x.signOut(),j("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})},M=function(e){var t=e.login,n=e.userObject,c=e.currentUserName;return Object(N.jsxs)(u.a,{basename:"/book-ggum-na-mu",children:[t&&Object(N.jsx)(B,{userObject:n}),Object(N.jsx)(o.c,{children:t?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",element:Object(N.jsx)(I,{userObject:n})}),Object(N.jsx)(o.a,{exact:!0,path:"/profile",element:Object(N.jsx)(G,{userObject:n,currentUserName:c})})]}):Object(N.jsx)(o.a,{exact:!0,path:"/",element:Object(N.jsx)(k,{})})})]})};n(50);var T=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(s.a)(r,2),u=i[0],o=i[1];return Object(c.useEffect)((function(){x.onAuthStateChanged((function(e){o(e?{displayName:e.displayName?e.displayName:"\uc0ac\uc6a9\uc790",uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),a(!0)}))}),[]),Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)("h3",{className:"title",children:"\ud83c\udf33 Book-ggum-na-mu \ud83c\udf33"}),n?Object(N.jsx)(M,{login:Boolean(u),userObject:u,currentUserName:function(){var e=x.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"\ub85c\uadf8\uc778 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911..."]})};i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(T,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d2eb0d1d.chunk.js.map