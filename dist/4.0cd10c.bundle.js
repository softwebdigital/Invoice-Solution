(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1132:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c(6),a=c(3),l=c(15),r=c(28),b=c(33),s=c(46);const i=e=>(Object(n.pushScopeId)("data-v-132801f0"),e=e(),Object(n.popScopeId)(),e),j={class:"main-wrapper"},O={class:"page-wrapper"},d={class:"content container-fluid"},m={class:"row justify-content-center"},E={class:"col-xl-10"},u={class:"page-header"},p={class:"row align-items-center"},N={class:"col"},V={class:"breadcrumb"},v={class:"breadcrumb-item"},y=i(()=>Object(n.createElementVNode)("i",{"data-feather":"chevron-left",class:"mb-1"},null,-1)),g={class:"card"},k={class:"card-body"},B={class:"invoice-item mb-4"},x={class:"row"},f={class:"col-md-6"},D={key:0,class:"invoice-logo"},S=["src"],h={class:"col-md-6 des"},C={class:"my-0"},_={class:"invoice-details"},w={class:"invoice-item"},T={class:"row"},I={class:"col-md-5"},X={key:0,class:"invoice-info"},A=i(()=>Object(n.createElementVNode)("strong",{class:"customer-text"},"Invoice From",-1)),M={class:"invoice-details invoice-details-two"},P=i(()=>Object(n.createElementVNode)("br",null,null,-1)),F=i(()=>Object(n.createElementVNode)("br",null,null,-1)),L={key:0},H={key:1},W={class:"col-md-4"},$={key:0,class:"invoice-info"},z=i(()=>Object(n.createElementVNode)("strong",{class:"customer-text"},"Invoice To",-1)),J={class:"invoice-details invoice-details-two"},q=i(()=>Object(n.createElementVNode)("br",null,null,-1)),Q=i(()=>Object(n.createElementVNode)("br",null,null,-1)),U={key:0},G={key:1},K={class:"col-md-3"},R={key:0,class:"invoice-info"},Y={class:"invoice-details-two stat invoice-details text-capitalize"},Z=i(()=>Object(n.createElementVNode)("br",null,null,-1)),ee={key:0,class:"invoice-status text-success"},te={key:1,class:"invoice-status text-warning"},ce={key:2,class:"invoice-status text-warning"},ne={key:3,class:"invoice-status text-danger"},oe=i(()=>Object(n.createElementVNode)("br",null,null,-1)),ae=i(()=>Object(n.createElementVNode)("br",null,null,-1)),le={key:4},re=i(()=>Object(n.createElementVNode)("br",null,null,-1)),be=i(()=>Object(n.createElementVNode)("br",null,null,-1)),se={key:5},ie=i(()=>Object(n.createElementVNode)("br",null,null,-1)),je=i(()=>Object(n.createElementVNode)("br",null,null,-1)),Oe=i(()=>Object(n.createElementVNode)("hr",{class:"mt-0"},null,-1)),de={class:"invoice-item invoice-table-wrap"},me={class:"row"},Ee={class:"col-md-12"},ue={class:"table-responsive"},pe={class:"invoice-table table table-border mb-0"},Ne=i(()=>Object(n.createElementVNode)("thead",null,[Object(n.createElementVNode)("tr",null,[Object(n.createElementVNode)("th",null,"#"),Object(n.createElementVNode)("th",null,"Product / Service"),Object(n.createElementVNode)("th",null,"Quantity"),Object(n.createElementVNode)("th",null,"Price"),Object(n.createElementVNode)("th",null,"Discount"),Object(n.createElementVNode)("th",{class:"text-end"},"Amount")])],-1)),Ve={key:0},ve={class:"text-end"},ye={key:0},ge=i(()=>Object(n.createElementVNode)("td",{colspan:"5",class:"text-end text-muted border-bottom-0"}," Taxable Amount ",-1)),ke={class:"text-end border-bottom-0"},Be=i(()=>Object(n.createElementVNode)("td",{colspan:"5",class:"text-end text-muted border-bottom-0"}," Discount ",-1)),xe={class:"text-end border-bottom-0"},fe={key:1},De={colspan:"5",class:"text-end text-muted"},Se={class:"text-end"},he={colspan:"5",class:"text-end text-muted"},Ce={class:"text-end"},_e={colspan:"5",class:"text-end text-muted"},we={class:"text-end"},Te={class:"border-bottom mt-4"},Ie={key:0,class:"text-muted"},Xe=i(()=>Object(n.createElementVNode)("th",{colspan:"4",class:"text-end font-weight-600"},[Object(n.createElementVNode)("h4",null,"Total Amount")],-1)),Ae={class:"text-end font-weight-600"},Me={key:0},Pe={key:1},Fe=i(()=>Object(n.createElementVNode)("th",{colspan:"5",class:"text-end font-weight-600"}," Amount Paid ",-1)),Le={key:0,class:"text-end font-weight-600"},He={class:"border-bottom"},We=i(()=>Object(n.createElementVNode)("th",{colspan:"5",class:"text-end font-weight-600"}," Balance ",-1)),$e={key:0,class:"text-end font-weight-600"},ze={class:"border-bottom"},Je={colspan:"6",class:"text-muted"},qe={key:0,style:{"margin-left":"2px",color:"black","text-transform":"capitalize"}},Qe={class:"d-flex mx-4 align-items-center justify-content-between"},Ue={key:0,class:""},Ge={class:"invoice-sign ms-auto text-end py-0"},Ke={class:"d-block"},Re=["src"],Ye={key:0},Ze={key:1,class:"invoice-terms"},et=i(()=>Object(n.createElementVNode)("h6",null,"Terms and Conditions",-1)),tt=["innerHTML"],ct={key:2},nt={key:3,class:"invoice-terms"},ot=i(()=>Object(n.createElementVNode)("h6",null,"Note",-1)),at=["innerHTML"];var lt={__name:"view-user-invoice",setup(e){const t=Object(l.b)(),c=Object(r.c)(),i=Object(o.s)(0),lt=Object(o.s)(0),rt=Object(o.s)(0),bt=Object(o.s)(0),st=Object(o.s)(0),it=Object(o.s)(0),jt=Object(n.computed)(()=>t.getters["users/user"]),Ot=Object(n.computed)(()=>t.getters["users/invoice"]),dt=()=>{let e=0,t=0,c=0;for(let c=0;c<Ot.value.items.length;c++){const n=Ot.value.items[c];e+=n.amount,t+=n.discount/100*n.amount}it.value=t,(()=>{let e=0;i.value=0;for(let t=0;t<Ot.value.additional_charges.length;t++){const c=Ot.value.additional_charges[t];e+=parseInt(c.value)}i.value=e})(),(()=>{let e=0;lt.value=0;for(let t=0;t<Ot.value.more_discount.length;t++){const c=Ot.value.more_discount[t];e+=parseInt(c.value)}lt.value=e})(),c=e+i.value-(t+lt.value),1===Ot.value.tax_enabled?(st.value=bt.value*c/100,rt.value=c+st.value):rt.value=c};return Object(n.onMounted)(()=>{(()=>{let e={user_id:c.params.user_id,id:c.params.id};t.dispatch("users/getUser",c.params.user_id),t.dispatch("users/getInvoice",e).then(()=>{bt.value=Ot.value.tax_percentage}).then(()=>{dt()})})()}),(e,t)=>{const c=Object(n.resolveComponent)("layout-header"),l=Object(n.resolveComponent)("layout-sidebar");return Object(n.openBlock)(),Object(n.createElementBlock)(n.Fragment,null,[Object(n.createCommentVNode)(" Main Wrapper "),Object(n.createElementVNode)("div",j,[Object(n.createVNode)(c),Object(n.createVNode)(l),Object(n.createCommentVNode)(" Page Wrapper "),Object(n.createElementVNode)("div",O,[Object(n.createElementVNode)("div",d,[Object(n.createElementVNode)("div",m,[Object(n.createElementVNode)("div",E,[Object(n.createCommentVNode)(" Page Header "),Object(n.createElementVNode)("div",u,[Object(n.createElementVNode)("div",p,[Object(n.createElementVNode)("div",N,[Object(n.createElementVNode)("ul",V,[Object(n.createElementVNode)("li",v,[Object(n.createElementVNode)("a",{style:{cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.$router.go(-1))},[y,Object(n.createTextVNode)("Back")])])])])])]),Object(n.createElementVNode)("div",g,[Object(n.createElementVNode)("div",k,[Object(n.createElementVNode)("div",B,[Object(n.createElementVNode)("div",x,[Object(n.createElementVNode)("div",f,[Object(o.E)(jt).settings?(Object(n.openBlock)(),Object(n.createElementBlock)("div",D,[Object(n.createElementVNode)("img",{src:Object(o.E)(jt).settings.business_logo,alt:"logo"},null,8,S)])):Object(n.createCommentVNode)("v-if",!0)]),Object(n.createElementVNode)("div",h,[Object(n.createElementVNode)("h2",C,Object(a.toDisplayString)(Object(o.E)(Ot).invoice_id),1),Object(n.createElementVNode)("p",_,Object(a.toDisplayString)(Object(o.E)(Ot).description),1)])])]),Object(n.createCommentVNode)(" Invoice Item "),Object(n.createElementVNode)("div",w,[Object(n.createElementVNode)("div",T,[Object(n.createElementVNode)("div",I,[Object(o.E)(jt)?(Object(n.openBlock)(),Object(n.createElementBlock)("div",X,[A,Object(n.createElementVNode)("p",M,[Object(n.createTextVNode)(Object(a.toDisplayString)(Object(o.E)(jt).name)+" ",1),P,Object(n.createTextVNode)(" "+Object(a.toDisplayString)(Object(o.E)(jt).email)+" ",1),F,Object(n.createTextVNode)(" "+Object(a.toDisplayString)(Object(o.E)(jt).phone)+" ",1),Object(o.E)(jt).phone?(Object(n.openBlock)(),Object(n.createElementBlock)("br",L)):Object(n.createCommentVNode)("v-if",!0),Object(n.createTextVNode)(" "+Object(a.toDisplayString)(Object(o.E)(jt).address)+" ",1),Object(o.E)(jt).address?(Object(n.openBlock)(),Object(n.createElementBlock)("br",H)):Object(n.createCommentVNode)("v-if",!0),Object(n.createTextVNode)(" "+Object(a.toDisplayString)(Object(o.E)(jt).state)+" "+Object(a.toDisplayString)(Object(o.E)(jt).country),1)])])):Object(n.createCommentVNode)("v-if",!0)]),Object(n.createElementVNode)("div",W,[Object(o.E)(Ot).customer?(Object(n.openBlock)(),Object(n.createElementBlock)("div",$,[z,Object(n.createElementVNode)("p",J,[Object(n.createTextVNode)(Object(a.toDisplayString)(Object(o.E)(Ot).customer.name)+" ",1),q,Object(n.createTextVNode)(" "+Object(a.toDisplayString)(Object(o.E)(Ot).customer.email)+" ",1),Q,Object(n.createTextVNode)(" "+Object(a.toDisplayString)(`${Object(o.E)(Ot).customer.country_code}${Object(o.E)(Ot).customer.phone}`)+" ",1),Object(o.E)(Ot).customer.phone?(Object(n.openBlock)(),Object(n.createElementBlock)("br",U)):Object(n.createCommentVNode)("v-if",!0),Object(n.createTextVNode)(" "+Object(a.toDisplayString)(Object(o.E)(Ot).customer.address)+" ",1),Object(o.E)(Ot).customer.address?(Object(n.openBlock)(),Object(n.createElementBlock)("br",G)):Object(n.createCommentVNode)("v-if",!0),Object(n.createTextVNode)(" "+Object(a.toDisplayString)(Object(o.E)(Ot).customer.state)+" "+Object(a.toDisplayString)(Object(o.E)(Ot).customer.country),1)])])):Object(n.createCommentVNode)("v-if",!0)]),Object(n.createElementVNode)("div",K,[Object(o.E)(Ot).customer?(Object(n.openBlock)(),Object(n.createElementBlock)("div",R,[Object(n.createElementVNode)("p",Y,[Object(n.createTextVNode)(" Status"),Z,"paid"===Object(o.E)(Ot).status||"sent"===Object(o.E)(Ot).status||"viewed"===Object(o.E)(Ot).status||"accepted"===Object(o.E)(Ot).status?(Object(n.openBlock)(),Object(n.createElementBlock)("span",ee,Object(a.toDisplayString)(Object(o.E)(Ot).status),1)):"draft"===Object(o.E)(Ot).status||"pending"===Object(o.E)(Ot).status||"unpaid"===Object(o.E)(Ot).status||"recurring"===Object(o.E)(Ot).status?(Object(n.openBlock)(),Object(n.createElementBlock)("span",te,Object(a.toDisplayString)(Object(o.E)(Ot).status),1)):"partially_paid"===Object(o.E)(Ot).status?(Object(n.openBlock)(),Object(n.createElementBlock)("span",ce,"Partially paid")):"expired"===Object(o.E)(Ot).status||"rejected"===Object(o.E)(Ot).status||"refunded"===Object(o.E)(Ot).status||"overdue"===Object(o.E)(Ot).status?(Object(n.openBlock)(),Object(n.createElementBlock)("span",ne,Object(a.toDisplayString)(Object(o.E)(Ot).status),1)):Object(n.createCommentVNode)("v-if",!0),oe,Object(n.createTextVNode)(" Date"),ae,Object(o.E)(Ot).date?(Object(n.openBlock)(),Object(n.createElementBlock)("strong",le,Object(a.toDisplayString)(Object(o.E)(b.a)(Object(o.E)(Ot).date)),1)):Object(n.createCommentVNode)("v-if",!0),re,Object(n.createTextVNode)(" Due on"),be,Object(o.E)(Ot).due_date?(Object(n.openBlock)(),Object(n.createElementBlock)("strong",se,Object(a.toDisplayString)(Object(o.E)(b.a)(Object(o.E)(Ot).due_date)),1)):Object(n.createCommentVNode)("v-if",!0),ie,Object(n.createTextVNode)(" Amount"),je,Object(n.createElementVNode)("strong",null,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(Object(o.E)(Ot).total_amount)),1)])])):Object(n.createCommentVNode)("v-if",!0)])])]),Object(n.createCommentVNode)(" /Invoice Item "),Oe,Object(n.createCommentVNode)(" Invoice Item "),Object(n.createCommentVNode)(' <div class="invoice-item">\r\n                  <div class="row">\r\n                    <div class="col-md-12">\r\n                      <div class="invoice-info">\r\n                        <strong class="customer-text">Payment Method</strong>\r\n                        <p class="invoice-details invoice-details-two">\r\n                          Debit Card <br />\r\n                          XXXXXXXXXXXX-2541 <br />\r\n                          HDFC Bank<br />\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div> '),Object(n.createCommentVNode)(" /Invoice Item "),Object(n.createCommentVNode)(" Invoice Item "),Object(n.createElementVNode)("div",de,[Object(n.createElementVNode)("div",me,[Object(n.createElementVNode)("div",Ee,[Object(n.createElementVNode)("div",ue,[Object(n.createElementVNode)("table",pe,[Ne,Object(o.E)(Ot).items?(Object(n.openBlock)(),Object(n.createElementBlock)("tbody",Ve,[(Object(n.openBlock)(!0),Object(n.createElementBlock)(n.Fragment,null,Object(n.renderList)(Object(o.E)(Ot).items,(e,t)=>(Object(n.openBlock)(),Object(n.createElementBlock)("tr",{key:t},[Object(n.createElementVNode)("td",null,Object(a.toDisplayString)(t+1),1),Object(n.createElementVNode)("td",null,Object(a.toDisplayString)(e.name),1),Object(n.createElementVNode)("td",null,Object(a.toDisplayString)(e.quantity),1),Object(n.createElementVNode)("td",null,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(e.price)),1),Object(n.createElementVNode)("td",null,Object(a.toDisplayString)(e.discount)+"%",1),Object(n.createElementVNode)("td",ve,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(e.amount)),1)]))),128)),Object(o.E)(Ot)?(Object(n.openBlock)(),Object(n.createElementBlock)("tr",ye,[ge,Object(n.createElementVNode)("td",ke,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(Object(o.E)(Ot).amount)),1)])):Object(n.createCommentVNode)("v-if",!0),Object(n.createElementVNode)("tr",null,[Be,Object(n.createElementVNode)("td",xe,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(it.value.toFixed(2)),1)]),1===Object(o.E)(Ot).tax_enabled?(Object(n.openBlock)(),Object(n.createElementBlock)("tr",fe,[Object(n.createElementVNode)("td",De,Object(a.toDisplayString)(`VAT(${Object(o.E)(Ot).tax_percentage}%)`),1),Object(n.createElementVNode)("td",Se,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(st.value)),1)])):Object(n.createCommentVNode)("v-if",!0),(Object(n.openBlock)(!0),Object(n.createElementBlock)(n.Fragment,null,Object(n.renderList)(Object(o.E)(Ot).more_discount,(e,t)=>(Object(n.openBlock)(),Object(n.createElementBlock)("tr",{key:t},[Object(n.createElementVNode)("td",he,Object(a.toDisplayString)(e.description),1),Object(n.createElementVNode)("td",Ce," - "+Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(e.value)),1)]))),128)),(Object(n.openBlock)(!0),Object(n.createElementBlock)(n.Fragment,null,Object(n.renderList)(Object(o.E)(Ot).additional_charges,(e,t)=>(Object(n.openBlock)(),Object(n.createElementBlock)("tr",{key:t},[Object(n.createElementVNode)("td",_e,Object(a.toDisplayString)(e.description),1),Object(n.createElementVNode)("td",we," + "+Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(e.value)),1)]))),128))])):Object(n.createCommentVNode)("v-if",!0),Object(n.createElementVNode)("tr",Te,[Object(o.E)(Ot).items?(Object(n.openBlock)(),Object(n.createElementBlock)("th",Ie," Total Items : "+Object(a.toDisplayString)(Object(o.E)(Ot).items.length),1)):Object(n.createCommentVNode)("v-if",!0),Xe,Object(n.createElementVNode)("th",Ae,[Object(o.E)(Ot).currency?(Object(n.openBlock)(),Object(n.createElementBlock)("h4",Me,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(Object(o.E)(Ot).total_amount)),1)):Object(n.createCommentVNode)("v-if",!0)])]),0!=Object(o.E)(Ot).amount_paid?(Object(n.openBlock)(),Object(n.createElementBlock)("tr",Pe,[Fe,Object(o.E)(Ot).currency?(Object(n.openBlock)(),Object(n.createElementBlock)("th",Le,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(Object(o.E)(Ot).amount_paid)),1)):Object(n.createCommentVNode)("v-if",!0)])):Object(n.createCommentVNode)("v-if",!0),Object(n.createElementVNode)("tr",He,[We,Object(o.E)(Ot).currency?(Object(n.openBlock)(),Object(n.createElementBlock)("th",$e,Object(a.toDisplayString)(Object(o.E)(Ot).currency.slice(0,3))+" "+Object(a.toDisplayString)(Object(o.E)(s.a)(Object(o.E)(Ot).amount_due)),1)):Object(n.createCommentVNode)("v-if",!0)]),Object(n.createElementVNode)("tr",ze,[Object(n.createElementVNode)("th",Je,[Object(n.createTextVNode)(" Total Amount ( in words ): "),Object(o.E)(Ot).total_amount?(Object(n.openBlock)(),Object(n.createElementBlock)("span",qe,Object(a.toDisplayString)(Object(o.E)(s.b)(Object(o.E)(Ot).total_amount,Object(o.E)(Ot).currency)),1)):Object(n.createCommentVNode)("v-if",!0)])])])])])])]),Object(n.createCommentVNode)(" /Invoice Item "),Object(n.createElementVNode)("div",Qe,[Object(o.E)(Ot).preferred_bank?(Object(n.openBlock)(),Object(n.createElementBlock)("div",Ue,[Object(n.createElementVNode)("p",null,[Object(n.createTextVNode)(" Account number: "),Object(n.createElementVNode)("strong",null,Object(a.toDisplayString)(Object(o.E)(Ot).preferred_bank.account_number),1)]),Object(n.createElementVNode)("p",null,[Object(n.createTextVNode)(" Bank name: "),Object(n.createElementVNode)("strong",null,Object(a.toDisplayString)(Object(o.E)(Ot).preferred_bank.bank_name),1)]),Object(n.createElementVNode)("p",null,[Object(n.createTextVNode)(" Account name: "),Object(n.createElementVNode)("strong",null,Object(a.toDisplayString)(Object(o.E)(Ot).preferred_bank.account_name),1)])])):Object(n.createCommentVNode)("v-if",!0),Object(n.createElementVNode)("div",Ge,[Object(n.createElementVNode)("span",Ke,Object(a.toDisplayString)(Object(o.E)(Ot).signatory_name),1),Object(o.E)(Ot).signature?(Object(n.openBlock)(),Object(n.createElementBlock)("img",{key:0,class:"img-fluid d-inline-block",src:Object(o.E)(Ot).signature,alt:"sign"},null,8,Re)):Object(n.createCommentVNode)("v-if",!0)])]),Object(o.E)(Ot).terms?(Object(n.openBlock)(),Object(n.createElementBlock)("hr",Ye)):Object(n.createCommentVNode)("v-if",!0),Object(o.E)(Ot).terms?(Object(n.openBlock)(),Object(n.createElementBlock)("div",Ze,[et,Object(n.createElementVNode)("p",{class:"mb-0",innerHTML:Object(o.E)(Ot).terms},null,8,tt)])):Object(n.createCommentVNode)("v-if",!0),Object(o.E)(Ot).notes?(Object(n.openBlock)(),Object(n.createElementBlock)("hr",ct)):Object(n.createCommentVNode)("v-if",!0),Object(o.E)(Ot).notes?(Object(n.openBlock)(),Object(n.createElementBlock)("div",nt,[ot,Object(n.createElementVNode)("p",{class:"mb-0",innerHTML:Object(o.E)(Ot).notes},null,8,at)])):Object(n.createCommentVNode)("v-if",!0)])])])])])]),Object(n.createCommentVNode)(" /Page Wrapper ")]),Object(n.createCommentVNode)(" /Main Wrapper ")],2112)}}},rt=(c(1141),c(0));const bt=c.n(rt)()(lt,[["__scopeId","data-v-132801f0"]]);t.default=bt},1139:function(e,t,c){var n=c(10),o=c(1142);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},1141:function(e,t,c){"use strict";c(1139)},1142:function(e,t,c){(t=c(11)(!1)).push([e.i,"\n.invoice-info .stat[data-v-132801f0],\r\n.des[data-v-132801f0] {\r\n  text-align: end;\n}\n@media screen and (max-width: 960px) {\n.invoice-info .stat[data-v-132801f0],\r\n  .des[data-v-132801f0] {\r\n    text-align: start;\n}\n}\r\n",""]),e.exports=t}}]);
//# sourceMappingURL=4.0cd10c.bundle.js.map