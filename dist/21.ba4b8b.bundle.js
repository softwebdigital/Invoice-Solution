(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1122:function(e,t,c){"use strict";c.r(t);var a=c(4),o=c(6),l=c(3),r=c(2),s=c(15);c(37);const n={class:"main-wrapper"},d={key:0,style:{width:"fit-content",position:"fixed",right:"10px",top:"5px","z-index":"9999"},class:"alert alert-danger alert-dismissible fade show pb-2 text-sm",role:"alert"},i=Object(a.createElementVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),b={key:1,style:{width:"fit-content",position:"fixed",right:"10px",top:"5px","z-index":"9999"},class:"alert alert-success alert-dismissible fade show pb-2 text-sm",role:"alert"},m=Object(a.createElementVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),j={class:"page-wrapper"},O={class:"content container-fluid"},p={class:"page-header"},u={class:"row"},N={class:"col-sm-12"},V=Object(a.createElementVNode)("h3",{class:"page-title"},"Expenses",-1),v={class:"breadcrumb"},E={class:"breadcrumb-item"},k={class:"breadcrumb-item"},h=Object(a.createElementVNode)("li",{class:"breadcrumb-item active"},"Add Role",-1),f={class:"row"},g={class:"col-md-12"},w={class:"card"},x={class:"card-body"},y=["onSubmit"],C={class:"row"},B={class:"col-md-6"},D={class:"form-group"},M=Object(a.createElementVNode)("label",null,"Role Name",-1),R={class:"form-group"},S=Object(a.createElementVNode)("label",null,"Permissions:",-1),A={class:"permission-container"},P=["value"],W={class:"text-end mt-4"},_=["disabled"],T={key:0,class:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"},z={key:1},F={key:2};const J={__name:"AddRole",setup(e){const t=Object(s.b)(),c=Object(o.s)(!1),J=Object(o.s)({name:"",permissions:[]}),U=()=>{c.value=!0,t.dispatch("roles/createRole",J.value).then(()=>{c.value=!1}).catch(()=>{c.value=!1})},q=Object(a.computed)(()=>t.getters["roles/permissions"]);return Object(a.onMounted)(()=>{t.dispatch("roles/getPermissions")}),(e,s)=>{const L=Object(a.resolveComponent)("layout-header"),G=Object(a.resolveComponent)("layout-sidebar"),H=Object(a.resolveComponent)("router-link");return Object(a.openBlock)(),Object(a.createElementBlock)(a.Fragment,null,[Object(a.createCommentVNode)(" Main Wrapper "),Object(a.createElementVNode)("div",n,[Object(a.createVNode)(L),Object(a.createVNode)(G),Object(a.createCommentVNode)(" Notification "),Object(o.E)(t).state.roles.error?(Object(a.openBlock)(),Object(a.createElementBlock)("div",d,[Object(a.createElementVNode)("p",null,Object(l.toDisplayString)(Object(o.E)(t).state.roles.error),1),i])):Object(a.createCommentVNode)("v-if",!0),Object(o.E)(t).state.roles.message?(Object(a.openBlock)(),Object(a.createElementBlock)("div",b,[Object(a.createElementVNode)("p",null,Object(l.toDisplayString)(Object(o.E)(t).state.roles.message),1),m])):Object(a.createCommentVNode)("v-if",!0),Object(a.createCommentVNode)(" Notification end "),Object(a.createCommentVNode)(" Page Wrapper "),Object(a.createElementVNode)("div",j,[Object(a.createElementVNode)("div",O,[Object(a.createElementVNode)("div",p,[Object(a.createElementVNode)("div",u,[Object(a.createElementVNode)("div",N,[V,Object(a.createElementVNode)("ul",v,[Object(a.createElementVNode)("li",E,[Object(a.createVNode)(H,{to:"/"},{default:Object(a.withCtx)(()=>[Object(a.createTextVNode)("Dashboard")]),_:1})]),Object(a.createElementVNode)("li",k,[Object(a.createVNode)(H,{to:"/roles-and-permissions"},{default:Object(a.withCtx)(()=>[Object(a.createTextVNode)("Roles and Permissions")]),_:1})]),h])])])]),Object(a.createElementVNode)("div",f,[Object(a.createElementVNode)("div",g,[Object(a.createElementVNode)("div",w,[Object(a.createElementVNode)("div",x,[Object(a.createElementVNode)("form",{onSubmit:Object(r.withModifiers)(U,["prevent"])},[Object(a.createElementVNode)("div",C,[Object(a.createElementVNode)("div",B,[Object(a.createElementVNode)("div",D,[M,Object(a.withDirectives)(Object(a.createElementVNode)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>J.value.name=e),type:"text",class:"form-control",placeholder:"Super Admin",required:""},null,512),[[r.vModelText,J.value.name]])]),Object(a.createElementVNode)("div",R,[S,Object(a.createElementVNode)("div",A,[(Object(a.openBlock)(!0),Object(a.createElementBlock)(a.Fragment,null,Object(a.renderList)(Object(o.E)(q),(e,t)=>(Object(a.openBlock)(),Object(a.createElementBlock)("div",{class:"permission-list",key:t},[Object(a.withDirectives)(Object(a.createElementVNode)("input",{type:"checkbox","onUpdate:modelValue":s[1]||(s[1]=e=>J.value.permissions=e),value:e.id},null,8,P),[[r.vModelCheckbox,J.value.permissions]]),Object(a.createElementVNode)("span",null,Object(l.toDisplayString)(e.name),1)]))),128))])]),Object(a.createElementVNode)("div",W,[Object(a.createElementVNode)("button",{class:"btn btn-primary",type:"submit",disabled:c.value},[c.value?(Object(a.openBlock)(),Object(a.createElementBlock)("span",T)):Object(a.createCommentVNode)("v-if",!0),c.value?Object(a.createCommentVNode)("v-if",!0):(Object(a.openBlock)(),Object(a.createElementBlock)("span",z,"Add Role")),c.value?(Object(a.openBlock)(),Object(a.createElementBlock)("span",F,"Adding...")):Object(a.createCommentVNode)("v-if",!0)],8,_)])])])],40,y)])])])])])]),Object(a.createCommentVNode)(" /Page Wrapper ")]),Object(a.createCommentVNode)(" /Main Wrapper ")],2112)}}};t.default=J}}]);
//# sourceMappingURL=21.ba4b8b.bundle.js.map