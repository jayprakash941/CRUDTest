(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[7],{154:function(e,t,a){"use strict";var n=a(47),r=a(0),i=a.n(r),o=a(423);t.a=function(e){var t=e.field,a=e.form,r=a.touched,c=a.errors,s=Object(n.a)(e,["field","form"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,Object.assign({},t,s,{error:c[t.name]&&r[t.name]})),i.a.createElement("div",{className:"h-16 text-error"},c[t.name]&&r[t.name]?c[t.name]:""))}},420:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(0),i=a.n(r),o=a(125),c=a(415),s=a(129),l=a(398),u=a.n(l),d=a(245),m=Object(d.a)((function(e){return{btn:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),f=a(127),p=a(418),g=a(421),b=a(393),h=a.n(b),E=Object(d.a)((function(e){return{paper:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3),margin:"auto",height:"100%"}}})),v=function(e){var t=e.title,a=e.open,n=e.handleClose,r=e.children,o=E();return i.a.createElement(g.a,{open:a,onClose:n},i.a.createElement("div",{className:o.paper},i.a.createElement(c.a,{container:!0,direction:"column"},i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(c.a,{container:!0,justify:"space-between",alignItems:"center"},i.a.createElement(c.a,{item:!0},i.a.createElement(f.a,{component:"h1",variant:"h5"},t)),i.a.createElement(c.a,{item:!0},i.a.createElement(p.a,{onClick:function(e){return n()}},i.a.createElement(h.a,null))))),i.a.createElement(c.a,{item:!0,xs:12},r))))},k=a(29),C=a.n(k),x=a(40),D=a(192),j=a(170),T=a(154),y=a(47),O=a(419),N=a(425),L=a(426),I=a(414),S=function(e){var t=e.field,a=e.form,o=a.touched,c=a.errors,s=e.option_list,l=Object(y.a)(e,["field","form","option_list"]),u=Object(r.useRef)(null),d=Object(r.useState)(0),m=Object(n.a)(d,2),f=m[0],p=m[1];return i.a.useEffect((function(){p(u.current.offsetWidth)}),[]),i.a.createElement(I.a,{variant:l.variant,margin:l.margin,style:{width:"100%"}},i.a.createElement(L.a,{ref:u},l.label),i.a.createElement(O.a,Object.assign({labelWidth:f,error:c[t.name]&&o[t.name]},t),s.map((function(e,t){return i.a.createElement(N.a,{key:t,value:e.value},e.name)}))),i.a.createElement("div",{className:"h-16 text-error"},c[t.name]&&o[t.name]?c[t.name]:""))},w=a(46),_=j.object().shape({taskName:j.string().required("The task name field is required"),priority:j.string().required("The priority field is required"),startDate:j.string().required("The start date field is required"),endDate:j.string().required("The end date field is required").test("start-end-date-validation","End date should be after or on start date.",function(){var e=Object(x.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.parent.startDate){e.next=2;break}return e.abrupt("return",new Date(this.parent.startDate).getTime()<=new Date(t).getTime());case 2:return e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()),comments:j.string().required("The comments field is required")}),q=[{value:"low",name:"Low"},{value:"medium",name:"Medium"},{value:"high",name:"High"}],F=function(e){var t=e.isLoggedIn,a=e.user,n=e.initValues,o=e.isEditForm,l=e.handleClose,u=Object(r.useContext)(w.a),d=u.addTodoInList,m=u.editTodoInList,f=u.addTodoForGuest,p=u.editTodoForGuest;return i.a.createElement(c.a,{container:!0,justify:"center",alignItems:"center"},i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(D.b,{initialValues:{userID:t?a._id:"guest",taskName:o?n.taskName:"",priority:o?n.priority:"",startDate:o?n.startDate:"",endDate:o?n.endDate:"",comments:o?n.comments:""},validationSchema:_,onSubmit:function(){var e=Object(x.a)(C.a.mark((function e(r,i){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}if(!o){e.next=8;break}return e.next=4,m(a?a._id:"",n._id,a?a.token:"",r);case 4:e.sent&&l(),e.next=12;break;case 8:return e.next=10,d(a?a.token:"",a?a._id:"",r);case 10:e.sent&&l();case 12:e.next=16;break;case 14:o?p(n.id,r):f(r),l();case 16:i.setSubmitting(!1);case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.isValid,a=e.isSubmitting,n=e.handleSubmit,r=e.values,o=e.touched,c=e.handleChange,l=e.handleBlur;return i.a.createElement("form",{onSubmit:n,noValidate:!0},i.a.createElement(D.a,{margin:"normal",fullWidth:!0,type:"string",name:"taskName",label:"Task Name",touched:o,component:T.a,onChange:c,onBlur:l,value:r.taskName,variant:"outlined",autoFocus:!0}),i.a.createElement(D.a,{margin:"normal",fullWidth:!0,name:"priority",label:"Priority",touched:o,component:S,onChange:c,onBlur:l,defaultValue:r.priority,variant:"outlined",option_list:q}),i.a.createElement(D.a,{margin:"normal",fullWidth:!0,type:"date",name:"startDate",label:"Start Date",touched:o,component:T.a,onChange:c,onBlur:l,value:r.startDate,variant:"outlined",inputProps:{max:"2100-01-01"},InputLabelProps:{shrink:!0}}),i.a.createElement(D.a,{margin:"normal",fullWidth:!0,type:"date",name:"endDate",label:"End Date",touched:o,component:T.a,onChange:c,onBlur:l,value:r.endDate,variant:"outlined",inputProps:{min:r.startDate,max:"2100-01-01"},disabled:!r.startDate,InputLabelProps:{shrink:!0}}),i.a.createElement(D.a,{margin:"normal",fullWidth:!0,type:"string",name:"comments",label:"Comments",touched:o,component:T.a,onChange:c,onBlur:l,value:r.comments,variant:"outlined"}),i.a.createElement(s.a,{disabled:a||!t,type:"submit",variant:"contained",color:"primary",className:"m-15"},a?"Loading ...":"Submit"))}))))},H=a(25),W=a(396),Y=a.n(W),M=a(397),P=a.n(M),B=a(399),G=(a(394),a(395)),V=a.n(G),R=function(e){var t=e.user,a=e.isLoggedIn,n=e.editCurrentTodo,o=e.editCurrentTodoForGuest,c=Object(r.useContext)(w.a),s=c.todoList,l=c.todoLoader,u=c.getTodosList,d=c.deleteCurrentTodo,m=c.getTodoListForGuest,f=c.deleteTodoForGuest,g=[{Header:"Task Name",accessor:"taskName",sortable:!1},{Header:"Priority",accessor:"priority",sortable:!1},{Header:"Start Date",accessor:"startDate",sortable:!1,Cell:function(e){return V()(e.value).format("Do MMM YYYY")}},{Header:"End Date",accessor:"endDate",sortable:!1,Cell:function(e){return V()(e.value).format("Do MMM YYYY")}},{Header:"Comments",accessor:"comments",sortable:!1},{Header:"Delete",Cell:function(e){return i.a.createElement(p.a,{onClick:function(n){return a?d(t._id,e.original._id,e.original.taskName,t.token):f(e.index)}},i.a.createElement(Y.a,{color:"secondary"}))}},{Header:"Edit",Cell:function(e){return i.a.createElement(p.a,{onClick:function(t){return a?n(e.original):o(e.index,e.original)}},i.a.createElement(P.a,{color:"secondary"}))}}],b=Object(r.useRef)(!0);return Object(r.useEffect)((function(){b.current&&(a?u(t?t._id:"",t?t.token:""):m(),b.current=!1)}),[t,u,a,m]),i.a.createElement(B.a,{data:s,loading:l,columns:g,defaultPageSize:10,className:"mb-15",noDataText:"No Todo found"})};t.default=function(){var e=m(),t=Object(r.useContext)(H.a),a=Object(r.useState)(!1),l=Object(n.a)(a,2),d=l[0],f=l[1],p=Object(r.useState)(!1),g=Object(n.a)(p,2),b=g[0],h=g[1],E=Object(r.useState)(null),k=Object(n.a)(E,2),C=k[0],x=k[1],D=function(e){h(!1),f(!1)};return i.a.createElement(o.a,{maxWidth:"lg"},i.a.createElement(c.a,{container:!0,direction:"column"},i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(s.a,{onClick:function(e){return f(!0)},className:"".concat(e.btn," capitalize")},i.a.createElement(u.a,{color:"secondary",className:e.extendedIcon}),"Add Todo")),i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(R,{editCurrentTodo:function(e){h(!0),x(e),f(!0)},editCurrentTodoForGuest:function(e,t){t.id=e,h(!0),x(t),f(!0)},user:t.user,isLoggedIn:t.isLoggedIn}))),i.a.createElement(v,{title:"Create Todo",open:d,handleClose:function(e){return D()}},i.a.createElement(F,{user:t.user,isLoggedIn:t.isLoggedIn,isEditForm:b,initValues:C,handleClose:function(e){return D()}})))}}}]);
//# sourceMappingURL=7.43e3f4c3.chunk.js.map