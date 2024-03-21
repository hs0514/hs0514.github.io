import{r as n,j as e,n as o,R as x,C as l,L as t,ah as a}from"./index-1a6bfb36.js";import{B as m}from"./BreadcrumbWidget-875bcefe.js";import{C as r}from"./CustomButton-5af5d5df.js";import{S as c}from"./sweetalert2-7ffa6006.js";import{T as i}from"./Table-c74bcb7f.js";const h="/assets/images/shop/product/08.webp",j="/assets/images/shop/product/09.webp",p="/assets/images/shop/product/10.webp",b=n.memo(()=>{const s=()=>{c.fire({title:"Are you sure?",text:"You want to delete this item",icon:"error",background:"#141314",color:"#ffffff",showCancelButton:!0,backdrop:"rgba(60,60,60,0.8)",confirmButtonText:"Yes, delete it!",confirmButtonColor:"#c03221"}).then(d=>{d.isConfirmed&&c.fire({title:"Deleted!",text:"Your item has been deleted.",icon:"success",background:"#141314",color:"#ffffff"})})};return e.jsxs(n.Fragment,{children:[e.jsx(m,{title:"Cart"}),e.jsx("div",{className:"cart-page  section-padding",children:e.jsxs(o,{children:[e.jsx("div",{className:"main-cart mb-3 mb-md-5 pb-0 pb-md-5",children:e.jsxs("ul",{className:"cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap",children:[e.jsxs("li",{className:"cart-page-item active",children:[e.jsx("span",{className:"cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1",children:" 1"}),e.jsx("span",{className:"cart-page-link ",children:"Shopping Cart "})]}),e.jsx("li",{children:e.jsxs("svg",{width:"25",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsxs("li",{children:[e.jsx("span",{className:" cart-pre-number border-radius rounded-circle me-1",children:"2 "}),e.jsx("span",{className:"cart-page-link ",children:"Checkout "})]}),e.jsx("li",{children:e.jsxs("svg",{width:"25",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsxs("li",{children:[e.jsx("span",{className:" cart-pre-number border-radius rounded-circle me-1",children:" 3 "}),e.jsx("span",{className:"cart-page-link ",children:"Order Summary "})]})]})}),e.jsxs(x,{children:[e.jsxs(l,{lg:"8",children:[e.jsxs(i,{responsive:!0,className:"cart-table",children:[e.jsx("thead",{className:"border-bottom",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"font-size-18 fw-500",children:"Product"}),e.jsx("th",{scope:"col",className:"font-size-18 fw-500",children:"Price"}),e.jsx("th",{scope:"col",className:"font-size-18 fw-500",children:"Quantity"}),e.jsx("th",{scope:"col",className:"font-size-18 fw-500",children:"Subtotal"}),e.jsx("th",{scope:"col",className:"font-size-18 fw-500"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{"data-item":"list",children:[e.jsx("td",{children:e.jsxs("div",{className:"product-thumbnail d-flex align-items-center gap-3",children:[e.jsx(t,{className:"d-block mb-2",to:"#",children:e.jsx("img",{className:"avatar-80",src:h,alt:""})}),e.jsx("span",{className:"text-white",children:"Coffee Cup"})]})}),e.jsx("td",{children:e.jsx("span",{className:"fw-500",children:"$15.00"})}),e.jsx("td",{children:e.jsx(a,{})}),e.jsx("td",{children:e.jsx("span",{className:"fw-500",children:"$123.00"})}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0",onClick:s,children:e.jsx("span",{className:"btn-inner",children:e.jsx("i",{className:"far fa-trash-alt"})})})})]}),e.jsxs("tr",{"data-item":"list",children:[e.jsx("td",{children:e.jsxs("div",{className:"product-thumbnail d-flex align-items-center gap-3",children:[e.jsx(t,{className:"d-block mb-2",to:"#",children:e.jsx("img",{className:"avatar-80",src:j,alt:""})}),e.jsx("span",{className:"text-white",children:"Medical Box"})]})}),e.jsx("td",{children:e.jsx("span",{className:"fw-500",children:"$92.00"})}),e.jsx("td",{children:e.jsx(a,{})}),e.jsx("td",{children:e.jsx("span",{className:"fw-500",children:"$92.00"})}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0",onClick:s,children:e.jsx("span",{className:"btn-inner",children:e.jsx("i",{className:"far fa-trash-alt"})})})})]}),e.jsxs("tr",{"data-item":"list",children:[e.jsx("td",{children:e.jsxs("div",{className:"product-thumbnail d-flex align-items-center gap-3",children:[e.jsx(t,{className:"d-block mb-2",to:"#",children:e.jsx("img",{className:"avatar-80",src:p,alt:""})}),e.jsx("span",{className:"text-white",children:"Hand Sanitizer Bottle"})]})}),e.jsx("td",{children:e.jsx("span",{className:"fw-500",children:"$90.00"})}),e.jsx("td",{children:e.jsx(a,{})}),e.jsx("td",{children:e.jsx("span",{className:"fw-500",children:"$90.00"})}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0",onClick:s,children:e.jsx("span",{className:"btn-inner",children:e.jsx("i",{className:"far fa-trash-alt"})})})})]})]})]}),e.jsxs("div",{className:"coupon-main d-flex justify-content-between  gap-5 flex-wrap align-items-center pt-4 pb-5 border-bottom",children:[e.jsxs("div",{className:"wrap-coupon d-flex align-items-center gap-3 flex-wrap",children:[e.jsx("label",{children:"Coupon :"}),e.jsx("input",{className:"form-control d-inline-block w-auto me-2",name:"coupon_code",type:"text",placeholder:"Coupon code"}),e.jsx("div",{className:" d-inline-block",children:e.jsx(r,{buttonTitle:"Apply Coupon",link:"#",linkButton:"false"})})]}),e.jsx("div",{className:"button-primary",children:e.jsx(r,{buttonTitle:"Update Cart",link:"#",linkButton:"false"})})]})]}),e.jsx(l,{lg:"4",children:e.jsxs("div",{className:"cart_totals p-4",children:[e.jsx("h5",{className:"mb-3 font-size-18 fw-500",children:"Cart Totals"}),e.jsxs("div",{className:"css_prefix-woocommerce-cart-box table-responsive",children:[e.jsx(i,{className:"table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"cart-subtotal",children:[e.jsx("th",{className:"border-0",children:e.jsx("span",{className:"fw-500",children:"Subtotal"})}),e.jsx("td",{className:"border-0",children:e.jsx("span",{children:"$305.00"})})]}),e.jsxs("tr",{className:"order-total",children:[e.jsx("th",{className:"border-0",children:e.jsx("span",{className:"fw-500",children:" Total "})}),e.jsx("td",{className:"border-0",children:e.jsx("span",{className:"fw-500 text-primary",children:"$305.00"})})]})]})}),e.jsx("div",{className:"button-primary",children:e.jsx(r,{buttonTitle:"Proceed to checkout",link:"/checkout",linkButton:"false"})})]})]})})]})]})})]})});b.displayName="CartPage";export{b as default};