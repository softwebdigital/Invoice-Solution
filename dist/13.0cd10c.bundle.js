(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1147:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c(2),l=c(6),r=c(3),s=c(15),o=c(28);c(33),c(46);const i={class:"card bg-white"},b={class:"card-body pt-0"},d={class:"table-responsive mt-0"},p={class:"d-flex align-items-center justify-content-between py-4"},u=Object(a.createElementVNode)("span",null,"Show",-1),m=[Object(a.createElementVNode)("option",{value:"50"},"50",-1),Object(a.createElementVNode)("option",{value:"100"},"100",-1),Object(a.createElementVNode)("option",{value:"200"},"200",-1),Object(a.createElementVNode)("option",{value:"500"},"500",-1)],j=Object(a.createElementVNode)("span",null,"banks",-1),O=Object(a.createElementVNode)("div",null,[Object(a.createElementVNode)("input",{type:"text",class:"form-control",placeholder:"Search"})],-1),g={class:"table table-stripped table-center table-hover datatable"},v=Object(a.createElementVNode)("thead",{class:"thead-light"},[Object(a.createElementVNode)("tr",null,[Object(a.createElementVNode)("th",null,"#"),Object(a.createElementVNode)("th",null,"Bank"),Object(a.createElementVNode)("th",null,"Account Name"),Object(a.createElementVNode)("th",null,"Account number"),Object(a.createElementVNode)("th",null,"Status")])],-1),N={key:0},k={class:"text-capitalize"},E={class:"text-capitalize"},h={class:"text-capitalize"},V={key:0,class:"badge badge-pill text-capitalize bg-success-light"},y={key:1,class:"badge badge-pill text-capitalize bg-danger-light"},f={key:0,class:"d-flex my-5 align-items-center justify-content-center"},B={key:1,class:"d-flex my-5 align-items-center justify-content-center"};const w={__name:"UserBanks",setup(e){const t=Object(s.b)(),c=Object(o.c)(),w=Object(l.s)(1),x=Object(l.s)(50),S=Object(l.s)(""),_=Object(l.s)(!1),D=Object(l.s)(null);Object(a.watch)(S,e=>{P(e)});const P=e=>{let c={page:w.value,per_page:x.value,query:e};t.dispatch("users/getUserBanks",c)};Object(a.watch)(x,e=>{x.value=e,A()});const z=Object(a.computed)(()=>t.getters["users/userbanks"]),A=()=>{_.value=!0;let e={id:c.params.id,page:w.value,per_page:x.value,query:""};t.dispatch("users/getUserBanks",e).then(()=>{_.value=!1,D.value=z.value.data.length}).catch(()=>{_.value=!1})},C=Object(a.computed)(()=>t.getters["users/total"]);Object(a.computed)(()=>{const e=[];for(let t=1;t<=C.value;t++)e.push(t);return e.length>10?e.splice(0,10):e});return Object(a.onMounted)(()=>{A()}),(e,t)=>(Object(a.openBlock)(),Object(a.createElementBlock)("div",i,[Object(a.createElementVNode)("div",b,[Object(a.createElementVNode)("div",d,[Object(a.createElementVNode)("div",p,[Object(a.createElementVNode)("div",null,[u,Object(a.withDirectives)(Object(a.createElementVNode)("select",{class:"mx-1 py-1","onUpdate:modelValue":t[0]||(t[0]=e=>x.value=e),name:"",id:""},m,512),[[n.vModelSelect,x.value]]),j]),O]),Object(a.createElementVNode)("table",g,[v,Object(l.E)(z).data&&0!==Object(l.E)(z).data.length?(Object(a.openBlock)(),Object(a.createElementBlock)("tbody",N,[(Object(a.openBlock)(!0),Object(a.createElementBlock)(a.Fragment,null,Object(a.renderList)(Object(l.E)(z).data,(e,t)=>(Object(a.openBlock)(),Object(a.createElementBlock)("tr",{key:e.id},[Object(a.createElementVNode)("td",null,Object(r.toDisplayString)(t+1),1),Object(a.createElementVNode)("td",k,Object(r.toDisplayString)(e.bank_name),1),Object(a.createElementVNode)("td",E,Object(r.toDisplayString)(e.account_name),1),Object(a.createElementVNode)("td",h,Object(r.toDisplayString)(e.account_number),1),Object(a.createElementVNode)("td",null,[!0===e.preferred?(Object(a.openBlock)(),Object(a.createElementBlock)("span",V,"Active")):(Object(a.openBlock)(),Object(a.createElementBlock)("span",y,"Inactive"))])]))),128))])):Object(a.createCommentVNode)("v-if",!0)]),_.value?(Object(a.openBlock)(),Object(a.createElementBlock)("div",f," Loading... ")):Object(a.createCommentVNode)("v-if",!0),0===D.value?(Object(a.openBlock)(),Object(a.createElementBlock)("div",B," No Data Available ")):Object(a.createCommentVNode)("v-if",!0),Object(a.createCommentVNode)(' <div\r\n      v-if="!isFetching && length !== 0"\r\n      class="d-flex align-items-center justify-content-between p-4"\r\n    >\r\n      <p v-if="subscriptions.meta">\r\n        Showing {{ subscriptions.data.length }} of\r\n        {{ subscriptions.meta.total }} estimates\r\n      </p>\r\n      <div>\r\n        <ul class="pagination mb-4">\r\n          <li\r\n            class="page-item"\r\n            @click="previousPage"\r\n            :class="{ disabled: currentPage == 1 }"\r\n          >\r\n            <a class="page-link" href="javascript:;" tabindex="-1">Previous</a>\r\n          </li>\r\n          <li\r\n            class="page-item"\r\n            v-for="pageNumber in pageNumbers"\r\n            :key="pageNumber"\r\n            @click="setPage(pageNumber)"\r\n            :class="{\r\n              active: pageNumber === currentPage,\r\n            }"\r\n          >\r\n            <a class="page-link" href="javascript:;">{{ pageNumber }}</a>\r\n          </li>\r\n          <li\r\n            class="page-item"\r\n            @click="nextPage"\r\n            :class="{ disabled: pageNumbers.length <= 1 }"\r\n          >\r\n            <a class="page-link" href="javascript:;">Next</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div> ')])])]))}};t.default=w}}]);
//# sourceMappingURL=13.0cd10c.bundle.js.map