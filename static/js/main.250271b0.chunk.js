(this["webpackJsonpwarehouse-pos"]=this["webpackJsonpwarehouse-pos"]||[]).push([[0],{101:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),i=n.n(r),o=(n(101),n(189)),s=n(186),l=n(17),d=n(15),u=n(27),j=n(2),b="SHOW_TOTAL",h="HIDE_TOTAL",x="SHOW_ALERT",O="HIDE_ALERT",m="SHOW_LOADING",p="HIDE_LOADING",f=function(e,t){switch(t.type){case b:return e.calculate=!0,e;case h:return e.calculate=!1,e;case x:return e.alert=Object(d.a)(Object(d.a)({},e.alert),t.data),e;case O:return e.alert.open=!1,e;case m:return e.loading=!0,e;case p:return e.loading=!1,e}},v={calculate:!1,alert:{open:!1,severity:"info",message:""},loading:!1},g=a.a.createContext(v),y=a.a.createContext(void 0),C=function(e){var t=e.children,n=Object(u.a)(f,v),c=Object(l.a)(n,2),a=c[0],r=c[1];return Object(j.jsx)(g.Provider,{value:a,children:Object(j.jsx)(y.Provider,{value:r,children:t})})},w=function(){return a.a.useContext(g)},N=function(){var e=a.a.useContext(y);if(void 0===e)throw new Error("useDisplayDispatch must be used within a DisplayProvider");var t=a.a.useCallback((function(){e({type:b})}),[e]),n=a.a.useCallback((function(){e({type:h})}),[e]),c=a.a.useCallback((function(t){e({type:x,data:t})}),[e]),r=a.a.useCallback((function(){e({type:O})}),[e]),i=a.a.useCallback((function(){e({type:m})}),[e]),o=a.a.useCallback((function(){e({type:p})}),[e]);return a.a.useMemo((function(){return{showTotal:t,hideTotal:n,showAlert:c,hideAlert:r,showLoading:i,hideLoading:o}}),[t,n,c,r,i,o])},P="*None*",D={id:"",sku:P,name:"",price:0,quantity:1,inventory:1},_={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},E={id:"",name:"",company:"",discount:0},k=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),I=function(e){return k.format(e/100)},S=function(e,t){var n={subtotal:0,discount:0,taxes:0,total:0,discountRate:t};return e&&e.length>0&&(n.subtotal=e.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0),n.discount=t*n.subtotal,n.taxes=.085*n.subtotal,n.total=n.subtotal+n.taxes-n.discount),n},T=function(e){return Object(d.a)(Object(d.a)({},e),{},{taxPercentage:"".concat(8.5.toFixed(1)," %"),discountPercentage:"".concat((100*e.discountRate).toFixed(1)," %"),subtotalFormatted:I(e.subtotal),discountFormatted:"(".concat(I(e.discount),")"),taxesFormatted:I(e.taxes),totalFormatted:I(e.total)})},R=function(e){var t=!1,n={},c=e.length;if(c>1)for(var a=0;a<c;a++)if(e[a].sku!==P){if(n[e[a].sku]){t=!0;break}n[e[a].sku]=!0}return t},F=function(e){return e.includes(D)},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=!0;return e.length<1?(t({open:!0,severity:"warning",message:"No products in cart"}),n=!1):R(e)?(t({open:!0,severity:"warning",message:"Duplicate product in cart"}),n=!1):F(e)&&(t({open:!0,severity:"warning",message:"One or more products not set"}),n=!1),n},L="SET_PRODUCTS",q="SORT_PRODUCTS",U=function(e,t){switch(t.type){case L:return e.concat(t.data);case q:return e.sort((function(e,t){return e.sku.localeCompare(t.sku)}))}},H=[D],Q=a.a.createContext(H),M=a.a.createContext(void 0),W=function(e){var t=e.children,n=Object(u.a)(U,H),c=Object(l.a)(n,2),a=c[0],r=c[1];return Object(j.jsx)(Q.Provider,{value:a,children:Object(j.jsx)(M.Provider,{value:r,children:t})})},G=n(177),J="SET_CONTRACTOR",z="CLOSE",B="SHOW_LOADING",Y="HIDE_LOADING",V=function(e,t){switch(t.type){case J:return e.contractor=t.data,e;case z:return e=K;case B:return e.loading=!0,e;case Y:return e.loading=!1,e}},K={contractor:E,loading:!1},X=a.a.createContext(K),Z=a.a.createContext(void 0),$=function(e){var t=e.children,n=Object(u.a)(V,K),c=Object(l.a)(n,2),a=c[0],r=c[1];return Object(j.jsx)(X.Provider,{value:a,children:Object(j.jsx)(Z.Provider,{value:r,children:t})})},ee=function(){return a.a.useContext(X)},te=function(){var e=a.a.useContext(Z);if(void 0===e)throw new Error("useContractor must be used within a ContractorProvider");var t=a.a.useCallback((function(t){e({type:J,data:t})}),[e]),n=a.a.useCallback((function(){e({type:z})}),[e]),c=a.a.useCallback((function(){e({type:B})}),[e]),r=a.a.useCallback((function(){e({type:Y})}),[e]);return a.a.useMemo((function(){return{setContractor:t,closeContractor:n,showLoading:c,hideLoading:r}}),[t,n,c,r])},ne=n(50),ce=n(176),ae=n(51),re=n.n(ae),ie=n(192),oe=n(173),se=n(170),le=function(e){var t=e.value,n=e.onChange,c=e.onSubmit;return Object(j.jsx)("form",{onSubmit:c,className:"contractor__form",children:Object(j.jsxs)(se.a,{container:!0,justify:"flex-start",alignItems:"center",children:[Object(j.jsx)(se.a,{item:!0,xs:4,children:Object(j.jsx)(oe.a,{variant:"subtitle1",children:"Contactor ID:"})}),Object(j.jsx)(se.a,{item:!0,xs:8,children:Object(j.jsx)(ie.a,{id:"id",variant:"outlined",autoComplete:"off",inputProps:{className:"contractor__form__input"},value:t,onChange:n,required:!0})})]})})};le.defaultProps={value:"",onChange:function(){},onSubmit:function(){}};var de=le,ue=function(e){var t=e.contractor;return Object(j.jsxs)(se.a,{container:!0,justify:"flex-start",alignItems:"center",children:[Object(j.jsxs)(se.a,{container:!0,item:!0,xs:12,spacing:1,children:[Object(j.jsx)(se.a,{item:!0,xs:4,children:Object(j.jsx)(oe.a,{variant:"subtitle1",children:"Name:"})}),Object(j.jsx)(se.a,{item:!0,xs:8,children:Object(j.jsx)(oe.a,{variant:"body1",children:t.name})})]}),Object(j.jsxs)(se.a,{container:!0,item:!0,xs:12,children:[Object(j.jsx)(se.a,{item:!0,xs:4,children:Object(j.jsx)(oe.a,{variant:"subtitle1",children:"Company:"})}),Object(j.jsx)(se.a,{item:!0,xs:8,children:Object(j.jsx)(oe.a,{variant:"body1",children:t.company})})]})]})};ue.defaultProps={contractor:{name:"",company:""}};var je=ue,be=n(44),he=n.n(be),xe=function(){return Object(j.jsxs)(se.a,{container:!0,justify:"flex-start",alignItems:"center",children:[Object(j.jsxs)(se.a,{container:!0,item:!0,xs:12,spacing:1,children:[Object(j.jsx)(se.a,{item:!0,xs:4,children:Object(j.jsx)(oe.a,{variant:"subtitle1",children:"Name:"})}),Object(j.jsx)(se.a,{item:!0,xs:8,children:Object(j.jsx)(he.a,{height:24,width:"100%"})})]}),Object(j.jsxs)(se.a,{container:!0,item:!0,xs:12,children:[Object(j.jsx)(se.a,{item:!0,xs:4,children:Object(j.jsx)(oe.a,{variant:"subtitle1",children:"Company:"})}),Object(j.jsx)(se.a,{item:!0,xs:8,children:Object(j.jsx)(he.a,{height:24,width:"100%"})})]})]})},Oe=function(){var e=ee(),t=e.contractor,n=e.loading,c=te(),a=c.setContractor,r=c.showLoading,i=c.hideLoading,o=N(),s=o.showAlert,l=o.hideTotal,u=o.hideAlert;return Object(j.jsx)(ce.a,{elevation:3,className:"contractor",children:Object(j.jsxs)(G.a,{maxWidth:"sm",className:"contractor__container",children:[Object(j.jsx)(de,{onSubmit:function(e){var n;e.preventDefault(),r(),u(),l(),(n=t,re.a.get("".concat("https://enigmatic-waters-63171.herokuapp.com","/contractors/").concat(encodeURIComponent(n.id.toUpperCase())))).then((function(e){var t=e.data;s({open:!0,severity:"success",message:"Contractor Retrieved"}),a(t)})).catch((function(e){a(E),s({open:!0,severity:"error",message:"Fail to retrieve Contractor"}),console.log("Error: ".concat(JSON.stringify(e)))})).finally((function(){i()}))},onChange:function(e){var n=e.target,c=n.id,r=n.value,i=Object(d.a)(Object(d.a)({},t),{},Object(ne.a)({},c,r));a(i)},value:t.id}),n?Object(j.jsx)(xe,{}):Object(j.jsx)(je,{contractor:t})]})})},me="CLOSE",pe="ADD_PRODUCT",fe="SET_PRODUCT",ve="REMOVE_PRODUCT",ge="SET_QUANTITY",ye="RESET_QUANTITY",Ce=function(e,t){switch(t.type){case me:return e=we;case pe:return e.push(D),e;case fe:return e[t.data.rowIndex]=Object(d.a)(Object(d.a)({},e[t.data.rowIndex]),t.data.product),e;case ve:return e.splice(t.data,1),e;case ge:return e[t.data.rowIndex].quantity=t.data.quantity,e;case ye:return e[t.data].quantity=1,e}},we=[],Ne=a.a.createContext(we),Pe=a.a.createContext(void 0),De=function(e){var t=e.children,n=Object(u.a)(Ce,we),c=Object(l.a)(n,2),a=c[0],r=c[1];return Object(j.jsx)(Ne.Provider,{value:a,children:Object(j.jsx)(Pe.Provider,{value:r,children:t})})},_e=function(){return a.a.useContext(Ne)},Ee=function(){var e=a.a.useContext(Pe);if(void 0===e)throw new Error("useInvoiceDispatch must be used within a InvoiceProvider");var t=a.a.useCallback((function(){e({type:me})}),[e]),n=a.a.useCallback((function(){e({type:pe})}),[e]),c=a.a.useCallback((function(t){e({type:fe,data:t})}),[e]),r=a.a.useCallback((function(t){e({type:ve,data:t})}),[e]),i=a.a.useCallback((function(t){e({type:ge,data:t})}),[e]),o=a.a.useCallback((function(t){e({type:ye,data:t})}),[e]);return a.a.useMemo((function(){return{closeInvoice:t,addProduct:n,setProduct:c,removeProduct:r,setQuantity:i,resetQuantity:o}}),[t,n,c,r,i,o])},ke=n(188),Ie=function(e){var t=e.contractor,n=e.invoice;console.log("RENDERING: InvoiceDisplay");var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_;return new Intl.DateTimeFormat("en-US",t).format(e)}(new Date),r=a.a.useMemo((function(){return T(S(n,t.discount))}),[n,t.discount]),i=r.subtotalFormatted,o=r.discountFormatted,s=r.taxesFormatted,l=r.totalFormatted,d=r.taxPercentage,u=r.discountPercentage;return Object(j.jsx)("iframe",{id:"invoiceIframe",title:"invoice",style:{height:"0px",width:"0px",position:"absolute",visibility:"hidden"},children:Object(j.jsxs)("div",{id:"invoiceContents",children:[Object(j.jsx)("style",{type:"text/css",media:"print",children:"\n          @page { margin-top: 2cm; size: landscape; }\n          table { padding-top: 1cm; width: 100%; }\n          .date { padding-bottom: 1cm; }\n          .left { text-align: left; }\n          .center { text-align: center; }\n          .right { text-align: right; }\n          .discount { color: red; }\n          .bold { font-weight: bold; }\n          .blank { height: 1cm; }\n        "}),Object(j.jsxs)("div",{className:"date",children:[Object(j.jsx)("label",{className:"bold",children:"Invoice Date: "}),Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"bold",children:"Contractor ID: "}),Object(j.jsx)("span",{children:t.id})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"bold",children:"Name: "}),Object(j.jsx)("span",{children:t.name})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"bold",children:"Company: "}),Object(j.jsx)("span",{children:t.company})]})]}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"left",children:"Part No."}),Object(j.jsx)("th",{className:"left",children:"Description"}),Object(j.jsx)("th",{children:"Quantity"}),Object(j.jsx)("th",{className:"right",children:"Unit Price"}),Object(j.jsx)("th",{className:"right",children:"Sum"})]})}),Object(j.jsxs)("tbody",{children:[n.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.sku}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{align:"center",children:e.quantity}),Object(j.jsx)("td",{align:"right",children:I(e.price)}),Object(j.jsx)("td",{align:"right",children:I(e.price*e.quantity)})]},t)})),Object(j.jsx)("tr",{className:"blank",children:Object(j.jsx)("td",{colSpan:5})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{rowSpan:4,colSpan:2}),Object(j.jsx)("td",{colSpan:2,className:"bold",children:"Subtotal"}),Object(j.jsx)("td",{align:"right",className:"bold",children:i})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"bold",children:"Discount"}),Object(j.jsx)("td",{align:"right",children:u}),Object(j.jsx)("td",{align:"right",className:"bold discount",children:o})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"bold",children:"Tax"}),Object(j.jsx)("td",{align:"right",children:d}),Object(j.jsx)("td",{align:"right",className:"bold",children:s})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{colSpan:2,className:"bold",children:"Total"}),Object(j.jsx)("td",{align:"right",className:"bold",children:l})]})]})]})]})})};Ie.defaultProps={contractor:{id:"",name:"",company:"",discount:0},invoice:[]};var Se=a.a.memo(Ie),Te=n(178),Re=function(e){var t=e.type,n=e.variant,c=e.color,a=e.onClick,r=e.children;return Object(j.jsx)(Te.a,{type:t,variant:n,color:c,className:"order__controls__button",onClick:a,children:r})};Re.defaultProps={type:"submit",variant:"contained",color:"primary",onClick:function(){}};var Fe=Re,Ae=function(){var e=_e(),t=ee().contractor,n=N(),c=n.showTotal,r=n.hideTotal,i=n.showAlert,o=n.hideAlert,s=te().closeContractor,d=Ee().closeInvoice,u=a.a.useState(!1),b=Object(l.a)(u,2),h=b[0],x=b[1];return a.a.useEffect((function(){h&&(!function(){var e=document.getElementById("invoiceIframe"),t=e.contentWindow,n=e.innerHTML;t.document.open(),t.document.write(n),t.document.close(),t.focus(),t.print()}(),x(!1))}),[h]),Object(j.jsxs)(j.Fragment,{children:[h&&Object(j.jsx)(Se,{invoice:e,contractor:t}),Object(j.jsxs)(ke.a,{display:"flex",flexDirection:"column",className:"order__controls",children:[Object(j.jsx)(ke.a,{p:.5,children:Object(j.jsx)(Fe,{onClick:function(t){t.preventDefault(),A(e,i)&&(o(),c())},children:"Calculate"})}),Object(j.jsx)(ke.a,{p:.5,flexGrow:1,children:Object(j.jsx)(Fe,{type:"print",onClick:function(t){t.preventDefault(),navigator.userAgent.toLowerCase().indexOf("android")>-1?i({open:!0,severity:"warning",message:"Android not supported."}):A(e,i)&&x(!0)},children:"Print"})}),Object(j.jsx)(ke.a,{p:.5,children:Object(j.jsx)(Fe,{type:"clear",color:"secondary",onClick:function(e){e.preventDefault(),r(),s(),d()},children:"Close"})})]})]})},Le=n(183),qe=n(184),Ue=n(185),He=n(180),Qe=n(179),Me=n(181),We=n(182),Ge=n(80),Je=n.n(Ge),ze=function(){console.log("RENDERED: OrderTableHeader");var e=Ee().addProduct,t=N().hideTotal,n=N().showAlert,c=function(){var e=a.a.useContext(M);if(void 0===e)throw new Error("useProductDispatch must be used within a ProductProvider");var t=a.a.useCallback((function(t){e({type:L,data:t})}),[e]),n=a.a.useCallback((function(){e({type:q})}),[e]);return a.a.useMemo((function(){return{setProducts:t,sortProducts:n}}),[t,n])}().setProducts,r=a.a.useState(!1),i=Object(l.a)(r,2),o=i[0],s=i[1];return a.a.useEffect((function(){s(!0),re.a.get("".concat("https://enigmatic-waters-63171.herokuapp.com","/products")).then((function(e){var a=e.data;a.length>0?(a.sort((function(e,t){return e.sku.localeCompare(t.sku)})),t(),c(a)):n({open:!0,severity:"warning",message:"No products in system"})})).catch((function(e){n({open:!0,severity:"error",message:"Fail to retrieve Products"}),console.log("Error: ".concat(JSON.stringify(e)))})).finally((function(){s(!1)}))}),[]),Object(j.jsxs)(Qe.a,{children:[Object(j.jsxs)(He.a,{children:[Object(j.jsx)(Me.a,{align:"center",children:o?Object(j.jsx)(he.a,{circle:!0,height:35,width:35}):Object(j.jsx)(We.a,{size:"small",color:"primary","aria-label":"add to invoice",onClick:function(n){n.preventDefault(),t(),e()},children:Object(j.jsx)(Je.a,{})})}),Object(j.jsx)(Me.a,{align:"center",colSpan:3,children:"Order Form"}),Object(j.jsx)(Me.a,{align:"right",children:"Price"})]}),Object(j.jsxs)(He.a,{children:[Object(j.jsx)(Me.a,{children:"Part No."}),Object(j.jsx)(Me.a,{children:"Desc"}),Object(j.jsx)(Me.a,{align:"right",children:"Qty."}),Object(j.jsx)(Me.a,{align:"right",children:"Unit"}),Object(j.jsx)(Me.a,{align:"right",children:"Sum"})]})]})},Be=a.a.memo(ze),Ye=n(187),Ve=n(197),Ke=function(e){var t=e.rowIndex,n=a.a.useContext(Q),c=N().hideTotal,r=Ee(),i=r.removeProduct,o=r.setProduct,s=r.resetQuantity,d=a.a.useState(0),u=Object(l.a)(d,2),b=u[0],h=u[1];return console.log("RENDERED: ProductSelect (".concat(t,")")),Object(j.jsx)(Ye.a,{variant:"outlined",inputProps:{className:"order__form__table__product__select"},value:b,onChange:function(e){var a=e.target.value,r=n[a],l={product:r,rowIndex:t};r.sku===P?i(t):(h(a),c(),o(l),s(t))},children:n.map((function(e,t){return Object(j.jsx)(Ve.a,{value:t,children:e.sku},t)}))})},Xe=function(e){var t=e.rowIndex,n=e.inventory,c=e.quantity,a=N(),r=a.hideTotal,i=a.showAlert,o=Ee(),s=o.removeProduct,l=o.setQuantity;return console.log("RENDERED: ProductQuantityInput (".concat(t,")")),Object(j.jsx)(ie.a,{type:"number",variant:"outlined",label:"Avail: ".concat(n),inputProps:{min:0,max:n+1,className:"order__form__table__product__input"},onChange:function(e){var c=e.target.value,a={rowIndex:t,quantity:parseInt(c)};c<1?(r(),s(t)):c>n?i({open:!0,severity:"warning",message:"Not enough in inventory."}):(r(),l(a))},value:c})},Ze=function(e){var t=e.product,n=e.index;return console.log("RENDERED: ProductRow (".concat(n,")")),Object(j.jsxs)(He.a,{children:[Object(j.jsx)(Me.a,{children:Object(j.jsx)(Ke,{rowIndex:n})}),Object(j.jsx)(Me.a,{children:t.name}),Object(j.jsx)(Me.a,{align:"right",children:Object(j.jsx)(Xe,{rowIndex:n,inventory:t.inventory,quantity:t.quantity})}),Object(j.jsx)(Me.a,{align:"right",children:I(t.price)}),Object(j.jsx)(Me.a,{align:"right",children:I(t.quantity*t.price)})]})},$e=a.a.memo(Ze),et=function(e){var t=e.invoice,n=ee().contractor,c=a.a.useMemo((function(){return T(S(t,n.discount))}),[t,n.discount]),r=c.subtotalFormatted,i=c.discountFormatted,o=c.taxesFormatted,s=c.totalFormatted,l=c.taxPercentage,d=c.discountPercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(He.a,{children:[Object(j.jsx)(Me.a,{rowSpan:4,colSpan:2}),Object(j.jsx)(Me.a,{colSpan:2,children:"Subtotal"}),Object(j.jsx)(Me.a,{align:"right",children:r})]}),Object(j.jsxs)(He.a,{children:[Object(j.jsx)(Me.a,{children:"Discount"}),Object(j.jsx)(Me.a,{align:"right",children:d}),Object(j.jsx)(Me.a,{align:"right",className:"red",children:i})]}),Object(j.jsxs)(He.a,{children:[Object(j.jsx)(Me.a,{children:"Tax"}),Object(j.jsx)(Me.a,{align:"right",children:l}),Object(j.jsx)(Me.a,{align:"right",children:o})]}),Object(j.jsxs)(He.a,{children:[Object(j.jsx)(Me.a,{colSpan:2,children:"Total"}),Object(j.jsx)(Me.a,{align:"right",children:s})]})]})};et.defaultProps={invoice:[]};var tt=et,nt=function(){console.log("RENDERED: OrderTable");var e=w().calculate,t=_e();return Object(j.jsx)(Le.a,{component:ce.a,elevation:3,className:"order__form",children:Object(j.jsxs)(qe.a,{"aria-label":"order product",children:[Object(j.jsx)(Be,{}),t.length>0&&Object(j.jsxs)(Ue.a,{children:[t.map((function(e,t){return Object(j.jsx)($e,{index:t,product:e},t)})),e&&Object(j.jsx)(tt,{invoice:t})]})]})})},ct=function(){return console.log("RENDERED: OrderForm"),Object(j.jsx)(De,{children:Object(j.jsx)("form",{children:Object(j.jsxs)(se.a,{container:!0,justify:"space-between",alignItems:"center",spacing:2,children:[Object(j.jsx)(se.a,{item:!0,md:4,xs:12,children:Object(j.jsx)(Ae,{})}),Object(j.jsx)(se.a,{item:!0,md:8,xs:12,children:Object(j.jsx)(nt,{})})]})})})},at=n(81),rt=n(194),it=n(6),ot=n.n(it),st=n(190),lt=function(e){return Object(j.jsx)(st.a,Object(d.a)({elevation:6,variant:"filled"},e))};lt.propTpes={onClose:ot.a.func,severity:ot.a.string,children:ot.a.element.isRequired},lt.defaultProps={onClose:function(){},severity:"info"};var dt=lt,ut=function(e){var t=e.alert,n=e.onClose,c=e.duration,a=Object(at.a)(e,["alert","onClose","duration"]);return Object(j.jsx)(rt.a,Object(d.a)(Object(d.a)({open:t.open,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:c,onClose:n},a),{},{children:Object(j.jsx)(dt,{onClose:n,severity:t.severity,children:t.message})}))};ut.defaultProps={alert:{open:!1,severity:"info",message:""},onClose:function(){},duration:3e3};var jt=ut,bt=function(){var e=w().alert,t=N().hideAlert;return Object(j.jsx)(jt,{alert:e,onClose:function(e,n){"clickaway"!==n&&t()}})},ht=function(){return Object(j.jsxs)(G.a,{maxWidth:!1,className:"landing",children:[Object(j.jsxs)($,{children:[Object(j.jsx)(Oe,{}),Object(j.jsx)(ct,{})]}),Object(j.jsx)(bt,{})]})};var xt=function(){return Object(j.jsxs)(o.b,{injectFirst:!0,children:[Object(j.jsx)(s.a,{}),Object(j.jsx)(C,{children:Object(j.jsx)(W,{children:Object(j.jsx)(ht,{})})})]})},Ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(xt,{}),document.getElementById("root")),Ot()}},[[133,1,2]]]);
//# sourceMappingURL=main.250271b0.chunk.js.map