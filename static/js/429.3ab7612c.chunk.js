"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[429],{1429:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r=n(2791),o=n(9434),a=n(1413),i=n(5861),s=n(7757),c=n.n(s),d=n(4569),l=n.n(d),u=n(4443),p={fetchContacts:function(){return function(){var e=(0,i.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,u.$0)()),e.prev=1,e.next=4,l().get("/contacts");case 4:n=e.sent,r=n.data,t((0,u.v2)(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t((0,u.I7)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},addContacts:function(e,t){return function(){var n=(0,i.Z)(c().mark((function n(r){var o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o={name:e,number:t},r((0,u.sT)()),l().post("/contacts",o).then((function(e){var t=e.data;return r((0,u.TL)(t))})).catch((function(e){return r((0,u.wg)(e.message))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},deleteContacts:function(e){return function(){var t=(0,i.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n((0,u.v$)()),l().delete("/contacts/".concat(e)).then((function(){return n((0,u.fJ)(e))})).catch((function(e){return n((0,u.TO)(e.message))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},m=p,v=n(7247),f=n(493),g=n(4942),Z=n(3366),h=n(7462),b=n(8182),y=n(767),x=n(627),S=n(2065),I=n(7630),C=n(1046),w=n(7119),R=n(9103),j=n(162),A=n(2071),k=n(6199),N=n(5159),L=n(208);function M(e){return(0,N.Z)("MuiListItem",e)}var P=(0,L.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var z=(0,L.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function F(e){return(0,N.Z)("MuiListItemSecondaryAction",e)}(0,L.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var T=n(184),G=["className"],V=(0,I.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,h.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),B=r.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiListItemSecondaryAction"}),o=n.className,a=(0,Z.Z)(n,G),i=r.useContext(k.Z),s=(0,h.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,y.Z)(r,F,n)}(s);return(0,T.jsx)(V,(0,h.Z)({className:(0,b.Z)(c.root,o),ownerState:s,ref:t},a))}));B.muiName="ListItemSecondaryAction";var O=B,_=["className"],q=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],W=(0,I.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,h.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,h.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,g.Z)({},"& > .".concat(z.root),{paddingRight:48}),(t={},(0,g.Z)(t,"&.".concat(P.focusVisible),{backgroundColor:n.palette.action.focus}),(0,g.Z)(t,"&.".concat(P.selected),(0,g.Z)({backgroundColor:(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(P.focusVisible),{backgroundColor:(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,g.Z)(t,"&.".concat(P.disabled),{opacity:n.palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},r.button&&(0,g.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(P.selected,":hover"),{backgroundColor:(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),D=(0,I.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),$=r.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiListItem"}),o=n.alignItems,a=void 0===o?"center":o,i=n.autoFocus,s=void 0!==i&&i,c=n.button,d=void 0!==c&&c,l=n.children,u=n.className,p=n.component,m=n.components,v=void 0===m?{}:m,f=n.componentsProps,g=void 0===f?{}:f,S=n.ContainerComponent,I=void 0===S?"li":S,N=n.ContainerProps,L=(N=void 0===N?{}:N).className,z=n.dense,F=void 0!==z&&z,G=n.disabled,V=void 0!==G&&G,B=n.disableGutters,$=void 0!==B&&B,E=n.disablePadding,H=void 0!==E&&E,J=n.divider,U=void 0!==J&&J,Y=n.focusVisibleClassName,K=n.secondaryAction,Q=n.selected,X=void 0!==Q&&Q,ee=(0,Z.Z)(n.ContainerProps,_),te=(0,Z.Z)(n,q),ne=r.useContext(k.Z),re={dense:F||ne.dense||!1,alignItems:a,disableGutters:$},oe=r.useRef(null);(0,j.Z)((function(){s&&oe.current&&oe.current.focus()}),[s]);var ae=r.Children.toArray(l),ie=ae.length&&(0,R.Z)(ae[ae.length-1],["ListItemSecondaryAction"]),se=(0,h.Z)({},n,{alignItems:a,autoFocus:s,button:d,dense:re.dense,disabled:V,disableGutters:$,disablePadding:H,divider:U,hasSecondaryAction:ie,selected:X}),ce=function(e){var t=e.alignItems,n=e.button,r=e.classes,o=e.dense,a=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",a&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,y.Z)(i,M,r)}(se),de=(0,A.Z)(oe,t),le=v.Root||W,ue=g.root||{},pe=(0,h.Z)({className:(0,b.Z)(ce.root,ue.className,u),disabled:V},te),me=p||"li";return d&&(pe.component=p||"div",pe.focusVisibleClassName=(0,b.Z)(P.focusVisible,Y),me=w.Z),ie?(me=pe.component||p?me:"div","li"===I&&("li"===me?me="div":"li"===pe.component&&(pe.component="div")),(0,T.jsx)(k.Z.Provider,{value:re,children:(0,T.jsxs)(D,(0,h.Z)({as:I,className:(0,b.Z)(ce.container,L),ref:de,ownerState:se},ee,{children:[(0,T.jsx)(le,(0,h.Z)({},ue,!(0,x.Z)(le)&&{as:me,ownerState:(0,h.Z)({},se,ue.ownerState)},pe,{children:ae})),ae.pop()]}))})):(0,T.jsx)(k.Z.Provider,{value:re,children:(0,T.jsxs)(le,(0,h.Z)({},ue,{as:me,ref:de,ownerState:se},!(0,x.Z)(le)&&{ownerState:(0,h.Z)({},se,ue.ownerState)},pe,{children:[ae,K&&(0,T.jsx)(O,{children:K})]}))})}));function E(e){return(0,N.Z)("MuiListItemAvatar",e)}(0,L.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var H=["className"],J=(0,I.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,h.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),U=r.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiListItemAvatar"}),o=n.className,a=(0,Z.Z)(n,H),i=r.useContext(k.Z),s=(0,h.Z)({},n,{alignItems:i.alignItems}),c=function(e){var t=e.alignItems,n=e.classes,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,y.Z)(r,E,n)}(s);return(0,T.jsx)(J,(0,h.Z)({className:(0,b.Z)(c.root,o),ownerState:s,ref:t},a))})),Y=n(890);function K(e){return(0,N.Z)("MuiListItemText",e)}var Q=(0,L.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),X=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ee=(0,I.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,g.Z)({},"& .".concat(Q.primary),t.primary),(0,g.Z)({},"& .".concat(Q.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,h.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),te=r.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiListItemText"}),o=n.children,a=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,d=void 0!==c&&c,l=n.primary,u=n.primaryTypographyProps,p=n.secondary,m=n.secondaryTypographyProps,v=(0,Z.Z)(n,X),f=r.useContext(k.Z).dense,g=null!=l?l:o,x=p,S=(0,h.Z)({},n,{disableTypography:s,inset:d,primary:!!g,secondary:!!x,dense:f}),I=function(e){var t=e.classes,n=e.inset,r=e.primary,o=e.secondary,a={root:["root",n&&"inset",e.dense&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,y.Z)(a,K,t)}(S);return null==g||g.type===Y.Z||s||(g=(0,T.jsx)(Y.Z,(0,h.Z)({variant:f?"body2":"body1",className:I.primary,component:"span",display:"block"},u,{children:g}))),null==x||x.type===Y.Z||s||(x=(0,T.jsx)(Y.Z,(0,h.Z)({variant:"body2",className:I.secondary,color:"text.secondary",display:"block"},m,{children:x}))),(0,T.jsxs)(ee,(0,h.Z)({className:(0,b.Z)(I.root,a),ownerState:S,ref:t},v,{children:[g,x]}))})),ne=n(3044),re=n(4036);function oe(e){return(0,N.Z)("MuiIconButton",e)}var ae=(0,L.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ie=["edge","children","className","color","disabled","disableFocusRipple","size"],se=(0,I.ZP)(w.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,re.Z)(n.color))],n.edge&&t["edge".concat((0,re.Z)(n.edge))],t["size".concat((0,re.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,h.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:t.palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:(0,S.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t=e.theme,n=e.ownerState;return(0,h.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,h.Z)({color:t.palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:(0,S.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===n.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,g.Z)({},"&.".concat(ae.disabled),{backgroundColor:"transparent",color:t.palette.action.disabled}))})),ce=r.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiIconButton"}),r=n.edge,o=void 0!==r&&r,a=n.children,i=n.className,s=n.color,c=void 0===s?"default":s,d=n.disabled,l=void 0!==d&&d,u=n.disableFocusRipple,p=void 0!==u&&u,m=n.size,v=void 0===m?"medium":m,f=(0,Z.Z)(n,ie),g=(0,h.Z)({},n,{edge:o,color:c,disabled:l,disableFocusRipple:p,size:v}),x=function(e){var t=e.classes,n=e.disabled,r=e.color,o=e.edge,a=e.size,i={root:["root",n&&"disabled","default"!==r&&"color".concat((0,re.Z)(r)),o&&"edge".concat((0,re.Z)(o)),"size".concat((0,re.Z)(a))]};return(0,y.Z)(i,oe,t)}(g);return(0,T.jsx)(se,(0,h.Z)({className:(0,b.Z)(x.root,i),centerRipple:!0,focusRipple:!p,disabled:l,ref:t,ownerState:g},f,{children:a}))})),de=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.filter})),n=(0,o.v9)((function(e){return e.contacts.items}));console.log(n);var r=t.toLowerCase(),i=n.filter((function(e){return e.name.toLowerCase().includes(r)}));function s(e){var t,n=0;for(t=0;t<e.length;t+=1)n=e.charCodeAt(t)+((n<<5)-n);var r="#";for(t=0;t<3;t+=1){r+="00".concat((n>>8*t&255).toString(16)).slice(-2)}return r}function c(e){return{sx:{bgcolor:s(e)},children:"".concat(e.split(" ")[0][0])}}return(0,T.jsx)(f.Z,{children:i.map((function(t){var n=t.id,r=t.name,o=t.number;return(0,T.jsxs)($,{secondaryAction:(0,T.jsx)(ce,{edge:"end","aria-label":"delete",onClick:function(){return function(t){return e(m.deleteContacts(t))}(n)},children:(0,T.jsx)(v.Z,{})}),children:[(0,T.jsx)(U,{children:(0,T.jsx)(ne.Z,(0,a.Z)({},c("".concat(r))))}),(0,T.jsx)(te,{primary:r}),(0,T.jsx)(te,{primary:o})]},n)}))})},le=n(885),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},pe=function(e){return e.contacts.items},me=n(4554),ve=n(4110),fe=n(6151);var ge=function(){var e=(0,r.useState)(""),t=(0,le.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)(""),s=(0,le.Z)(i,2),c=s[0],d=s[1],l=(0,o.v9)(pe),u=ue(),p=ue();console.log(l);var v=(0,o.I0)();return(0,T.jsxs)(me.Z,{component:"form",onSubmit:function(e){e.preventDefault(),console.log(e);l.find((function(e){return e.name===n}))?alert("Name is alredy in contacts"):(v(m.addContacts(n,c)),a(""),d(""))},noValidate:!0,sx:{mt:1},children:[(0,T.jsx)(ve.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Name",autoFocus:!0,type:"text",name:"name",value:n,onChange:function(e){a(e.target.value)},id:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."}),(0,T.jsx)(ve.Z,{margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,label:"Number",type:"tel",name:"number",value:c,onChange:function(e){d(e.target.value)},id:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}),(0,T.jsx)(fe.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})},Ze=n(6895),he=function(){var e=(0,o.v9)((function(e){return e.filter})),t=(0,o.I0)();return(0,T.jsx)(me.Z,{noValidate:!0,sx:{mt:1},children:(0,T.jsx)(ve.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Find contacts by name",autoFocus:!0,type:"text",value:e,onChange:function(e){t((0,Ze.M6)(e.target.value))}})})},be="contactForm_container__p9-e1";function ye(){var e=(0,o.I0)();return(0,r.useEffect)((function(){e(m.fetchContacts())}),[e]),(0,T.jsxs)("div",{className:be,children:[(0,T.jsx)("h2",{children:"Phonebook"}),(0,T.jsx)(ge,{}),(0,T.jsx)("h2",{children:"Contacts"}),(0,T.jsx)(he,{}),(0,T.jsx)(de,{})]})}},7247:function(e,t,n){var r=n(5318);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i}}]);
//# sourceMappingURL=429.3ab7612c.chunk.js.map