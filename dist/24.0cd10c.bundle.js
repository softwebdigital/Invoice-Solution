(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1126:function(t,e,c){"use strict";c.r(e);var a=c(4),l=c(2),o=c(6),n=c(3),r=c(15);c(46);const d={class:"main-wrapper"},s={class:"page-wrapper"},i={class:"content container-fluid"},m={class:"page-header"},b={class:"row align-items-center"},j={class:"col"},O=Object(a.createElementVNode)("h3",{class:"page-title"},"Subscriptions",-1),p={class:"breadcrumb"},v={class:"breadcrumb-item"},u=Object(a.createElementVNode)("li",{class:"breadcrumb-item active"},"Subscriptions",-1),N=[Object(a.createElementVNode)("i",{class:"fas fa-filter"},null,-1)],V={key:0,class:"card filter-card"},E={class:"card-body pb-0"},h={class:"row"},f=Object(a.createElementVNode)("div",{class:"col-sm-6 col-md-3"},[Object(a.createElementVNode)("div",{class:"form-group"},[Object(a.createElementVNode)("label",null,"Date"),Object(a.createElementVNode)("input",{type:"text",class:"form-control"})])],-1),g={class:"col-sm-6 col-md-3"},y={class:"form-group"},k=Object(a.createElementVNode)("label",null,"Status",-1),w={class:"col-sm-6 col-md-3"},C={class:"form-group"},D=Object(a.createElementVNode)("label",null,"Type",-1),S={class:"col-sm-6 col-md-3"},x={class:"form-group"},B=Object(a.createElementVNode)("label",null,"Method",-1),M={class:"row"},P={class:"col-sm-12"},A={class:"card card-table"},_={class:"card-body"},I={class:"table-responsive"},W={class:"d-flex align-items-center justify-content-between p-4"},U=Object(a.createElementVNode)("span",null,"Show",-1),$=[Object(a.createElementVNode)("option",{value:"50"},"50",-1),Object(a.createElementVNode)("option",{value:"100"},"100",-1),Object(a.createElementVNode)("option",{value:"200"},"200",-1),Object(a.createElementVNode)("option",{value:"500"},"500",-1)],q=Object(a.createElementVNode)("span",null,"subscriptions",-1),F=Object(a.createElementVNode)("div",null,[Object(a.createElementVNode)("input",{type:"text",class:"form-control",placeholder:"Search"})],-1),J={class:"table table-center table-hover datatable"},L=Object(a.createElementVNode)("thead",{class:"thead-light"},[Object(a.createElementVNode)("tr",null,[Object(a.createElementVNode)("th",null,"#"),Object(a.createElementVNode)("th",null,"Plan"),Object(a.createElementVNode)("th",null,"Amount"),Object(a.createElementVNode)("th",null,"Discount"),Object(a.createElementVNode)("th",null,"Duration"),Object(a.createCommentVNode)(" <th>Action</th> ")])],-1),T=Object(a.createElementVNode)("td",null,"1%",-1),z={key:0,class:"text-capitalize"},G={key:1},H={key:2},K={key:0,class:"d-flex my-5 align-items-center justify-content-center"},Q={key:1,class:"d-flex my-5 align-items-center justify-content-center"},R={class:"modal custom-modal fade bank-details",id:"add_items",role:"dialog"},X={class:"modal-dialog modal-dialog-centered modal-lg"},Y={class:"modal-content"},Z=Object(a.createStaticVNode)('<div class="modal-header"><div class="form-header text-start mb-0"><h4 class="mb-0">Create New Plan</h4></div><button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>',1),tt={class:"modal-body"},et={class:"bank-inner-details"},ct={class:"row"},at=Object(a.createElementVNode)("div",{class:"col-lg-6 col-md-6"},[Object(a.createElementVNode)("div",{class:"form-group"},[Object(a.createElementVNode)("label",null,"Item Name"),Object(a.createElementVNode)("input",{type:"text",class:"form-control",placeholder:"Add New Item"})])],-1),lt={class:"col-lg-6 col-md-6"},ot={class:"form-group"},nt=Object(a.createElementVNode)("label",null,"Category",-1),rt=Object(a.createStaticVNode)('<div class="col-lg-6 col-md-6"><div class="form-group"><label>Price Per unit</label><input type="text" class="form-control" placeholder="$"></div></div><div class="col-lg-6 col-md-6"><div class="form-group"><label>Discount</label><input type="text" class="form-control" placeholder="%"></div></div><div class="col-lg-12 col-md-12"><div class="form-group"><label>Description (Optional) </label><textarea class="form-control" placeholder="Add item description"></textarea></div></div>',3),dt=Object(a.createElementVNode)("div",{class:"modal-footer"},[Object(a.createElementVNode)("div",{class:"bank-details-btn"},[Object(a.createElementVNode)("a",{href:"javascript:void(0);","data-bs-dismiss":"modal",class:"btn bank-cancel-btn me-2"},"Cancel"),Object(a.createElementVNode)("a",{href:"javascript:void(0);",class:"btn bank-save-btn"},"Save Item")])],-1);const st={__name:"Subscription",setup(t){const e=Object(r.b)(),c=Object(o.s)(!1),st=Object(o.s)(1),it=Object(o.s)(50),mt=Object(o.s)(!1),bt=Object(o.s)(null),jt=()=>{c.value=!c.value};Object(a.watch)(it,t=>{it.value=t,vt()});const Ot=["Payment Mode","Cash","Cheque","Card","Online"],pt=Object(a.computed)(()=>e.getters["subscription/subscriptions"]),vt=()=>{mt.value=!0;let t={page:st.value,per_page:it.value,query:""};e.dispatch("subscription/getSubscriptions",t),e.dispatch("users/getUsers",t).then(()=>{mt.value=!1,bt.value=pt.value.data.length}).catch(()=>{mt.value=!1})},ut=Object(a.computed)(()=>e.getters["subscription/total"]);Object(a.computed)(()=>{const t=[];for(let e=1;e<=ut.value;e++)t.push(e);return t.length>10?t.splice(0,10):t});Object(a.onMounted)(()=>{vt()});return(t,e)=>{const r=Object(a.resolveComponent)("layout-header"),st=Object(a.resolveComponent)("layout-sidebar"),vt=Object(a.resolveComponent)("router-link"),ut=Object(a.resolveComponent)("vue-select");return Object(a.openBlock)(),Object(a.createElementBlock)(a.Fragment,null,[Object(a.createCommentVNode)(" Main Wrapper "),Object(a.createElementVNode)("div",d,[Object(a.createVNode)(r),Object(a.createVNode)(st),Object(a.createCommentVNode)(" Page Wrapper "),Object(a.createElementVNode)("div",s,[Object(a.createElementVNode)("div",i,[Object(a.createCommentVNode)(" Page Header "),Object(a.createElementVNode)("div",m,[Object(a.createElementVNode)("div",b,[Object(a.createElementVNode)("div",j,[O,Object(a.createElementVNode)("ul",p,[Object(a.createElementVNode)("li",v,[Object(a.createVNode)(vt,{to:"/"},{default:Object(a.withCtx)(()=>[Object(a.createTextVNode)("Dashboard")]),_:1})]),u])]),Object(a.createElementVNode)("div",{class:"col-auto"},[Object(a.createCommentVNode)(' <div class="btn btn-primary me-4">\r\n\t\t\t\t\t\t\t\t<router-link\r\n\t\t\t\t\t\t\t\t\tclass="text-white"\r\n\t\t\t\t\t\t\t\t\t:to="{ name: \'addsubscriptions\' }"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<i data-feather="plus-circle"></i> Add New Plan\r\n\t\t\t\t\t\t\t\t</router-link>\r\n\t\t\t\t\t\t\t</div> '),Object(a.createElementVNode)("a",{class:"btn btn-primary filter-btn",href:"javascript:void(0);",onClick:jt,id:"filter_search"},N)])])]),c.value?(Object(a.openBlock)(),Object(a.createElementBlock)("div",V,[Object(a.createElementVNode)("div",E,[Object(a.createElementVNode)("div",h,[f,Object(a.createElementVNode)("div",g,[Object(a.createElementVNode)("div",y,[k,Object(a.createVNode)(ut,{options:Ot})])]),Object(a.createElementVNode)("div",w,[Object(a.createElementVNode)("div",C,[D,Object(a.createVNode)(ut,{options:Ot})])]),Object(a.createElementVNode)("div",S,[Object(a.createElementVNode)("div",x,[B,Object(a.createVNode)(ut,{options:Ot})])])])])])):Object(a.createCommentVNode)("v-if",!0),Object(a.createElementVNode)("div",M,[Object(a.createElementVNode)("div",P,[Object(a.createElementVNode)("div",A,[Object(a.createElementVNode)("div",_,[Object(a.createElementVNode)("div",I,[Object(a.createElementVNode)("div",W,[Object(a.createElementVNode)("div",null,[U,Object(a.withDirectives)(Object(a.createElementVNode)("select",{class:"mx-1 py-1","onUpdate:modelValue":e[0]||(e[0]=t=>it.value=t),name:"",id:""},$,512),[[l.vModelSelect,it.value]]),q]),F]),Object(a.createElementVNode)("table",J,[L,Object(a.createElementVNode)("tbody",null,[(Object(a.openBlock)(!0),Object(a.createElementBlock)(a.Fragment,null,Object(a.renderList)(Object(o.E)(pt).data,(t,e)=>(Object(a.openBlock)(),Object(a.createElementBlock)("tr",{key:t.id},[Object(a.createElementVNode)("td",null,Object(n.toDisplayString)(e+1),1),Object(a.createElementVNode)("td",null,Object(n.toDisplayString)(t.name),1),Object(a.createElementVNode)("td",null,Object(n.toDisplayString)(`NGN ${t.amount_ngn} (USD ${t.amount_usd})`),1),T,Object(a.createElementVNode)("td",null,["unlimited"===t.duration?(Object(a.openBlock)(),Object(a.createElementBlock)("span",z,Object(n.toDisplayString)(t.duration),1)):1===t.duration?(Object(a.openBlock)(),Object(a.createElementBlock)("span",G,Object(n.toDisplayString)(t.duration+" month"),1)):(Object(a.openBlock)(),Object(a.createElementBlock)("span",H," 1 year "))]),Object(a.createCommentVNode)(' <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="dropdown dropdown-action">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thref="javascript:void(0)"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass="action-icon dropdown-toggle"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-bs-toggle="dropdown"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-expanded="false"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t><i class="fas fa-ellipsis-h"></i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass="dropdown-menu dropdown-menu-right"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle="width: fit-content"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass="dropdown-item"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thref="javascript:void(0);"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t><i class="fa fa-edit me-2"></i> Edit</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass="dropdown-item"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thref="javascript:void(0);"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t><i class="fa fa-trash me-2"></i> Delete</a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td> ')]))),128))])]),mt.value?(Object(a.openBlock)(),Object(a.createElementBlock)("div",K," Loading... ")):Object(a.createCommentVNode)("v-if",!0),0===bt.value?(Object(a.openBlock)(),Object(a.createElementBlock)("div",Q," No Data Available ")):Object(a.createCommentVNode)("v-if",!0)])])])])])])]),Object(a.createCommentVNode)(" /Page Wrapper "),Object(a.createCommentVNode)(" Add Invoices Items Modal "),Object(a.createElementVNode)("div",R,[Object(a.createElementVNode)("div",X,[Object(a.createElementVNode)("div",Y,[Z,Object(a.createElementVNode)("div",tt,[Object(a.createElementVNode)("div",et,[Object(a.createElementVNode)("div",ct,[at,Object(a.createElementVNode)("div",lt,[Object(a.createElementVNode)("div",ot,[nt,Object(a.createVNode)(ut,{options:t.category,placeholder:"Select category"},null,8,["options"])])]),rt])])]),dt])])]),Object(a.createCommentVNode)(" /Add Items Modal "),Object(a.createCommentVNode)(" Delete Items Modal "),Object(a.createCommentVNode)(' <div\r\n      class="modal custom-modal fade"\r\n      id="delete_paid"\r\n      tabindex="-1"\r\n      role="dialog"\r\n    >\r\n      <div class="modal-dialog modal-dialog-centered">\r\n        <div class="modal-content">\r\n          <div class="modal-body">\r\n            <div class="form-header">\r\n              <h3>Delete Subscription Plan</h3>\r\n              <p>Are you sure want to delete?</p>\r\n            </div>\r\n            <div class="modal-btn delete-action">\r\n              <div class="row">\r\n                <div class="col-6">\r\n                  <a\r\n                    href="javascript:void(0);"\r\n                    class="btn btn-primary paid-continue-btn"\r\n                    >Delete</a\r\n                  >\r\n                </div>\r\n                <div class="col-6">\r\n                  <a\r\n                    href="javascript:void(0);"\r\n                    data-bs-dismiss="modal"\r\n                    @click="closeModal"\r\n                    id="cancel"\r\n                    class="btn btn-primary paid-cancel-btn"\r\n                    >Cancel</a\r\n                  >\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> '),Object(a.createCommentVNode)(" /Delete Items Modal ")]),Object(a.createCommentVNode)(" /Main Wrapper ")],2112)}}};e.default=st}}]);
//# sourceMappingURL=24.0cd10c.bundle.js.map