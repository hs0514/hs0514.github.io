import{r as t,G as o,j as e,H as x,ag as p,n as B,R as I,C as y,d as C}from"./index-1a6bfb36.js";const b=t.forwardRef(({bsPrefix:a,active:r=!1,children:s,className:c,as:n="li",linkAs:m=p,linkProps:i={},href:l,title:d,target:j,...g},f)=>{const N=o(a,"breadcrumb-item");return e.jsx(n,{ref:f,...g,className:x(N,c,{active:r}),"aria-current":r?"page":void 0,children:r?s:e.jsx(m,{...i,href:l,title:d,target:j,children:s})})});b.displayName="BreadcrumbItem";const R=b,h=t.forwardRef(({bsPrefix:a,className:r,listProps:s={},children:c,label:n="breadcrumb",as:m="nav",...i},l)=>{const d=o(a,"breadcrumb");return e.jsx(m,{"aria-label":n,className:r,ref:l,...i,children:e.jsx("ol",{...s,className:x(d,s==null?void 0:s.className),children:c})})});h.displayName="Breadcrumb";const u=Object.assign(h,{Item:R}),w=C("/assets/images/pages/01.webp"),v=t.memo(a=>e.jsx(t.Fragment,{children:e.jsx("div",{className:"iq-breadcrumb",style:{backgroundImage:`url(${w})`},children:e.jsx(B,{fluid:!0,children:e.jsx(I,{className:"align-items-center",children:e.jsx(y,{sm:"12",children:e.jsxs("nav",{className:"text-center",children:[e.jsx("h2",{className:"title text-capitalize",children:a.title}),e.jsxs(u,{className:"main-bg",listProps:{className:"text-center justify-content-center"},children:[e.jsx(u.Item,{children:"Home"}),e.jsx(u.Item,{active:!0,children:a.title})]})]})})})})})}));v.displayName="BreadCrumbWidget";export{v as B};