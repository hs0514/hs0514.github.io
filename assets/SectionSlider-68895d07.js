import{r as p,u as v,t as f,j as e,n as j,L as b,S as g,f as y,K as N,N as B}from"./index-1a6bfb36.js";const E=[N,B];function A(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var i=Math.random()*16|0,a=n=="x"?i:i&3|8;return a.toString(16)})}const C=p.memo(({children:n,title:i,list:a,slidesPerView:l=6,loop:u=!1,spaceBetween:m=0,className:w="",link:c})=>{const o=v(f),t=p.useRef(null),x=s=>{S(s)},S=s=>{if(t.current&&s){t.current.querySelectorAll(".swiper-slide").forEach(h=>h.classList.remove("last"));const r=t.current.querySelectorAll(".swiper-slide-visible"),d=r[r.length-1];setTimeout(()=>{d&&d.classList.add("swiper-active","last")},0)}};return e.jsx("div",{className:w,children:e.jsx(j,{fluid:!0,children:e.jsxs("div",{className:"overflow-hidden card-style-slider",ref:t,children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between px-3 my-4",children:[e.jsx("h5",{className:"main-title text-capitalize mb-0",children:i}),e.jsx(b,{to:c||"/view-all",className:"text-primary iq-view-all text-decoration-none",children:"View All"})]}),e.jsxs(g,{dir:o,className:"position-relative swiper swiper-card",slidesPerView:l,loop:u,watchSlidesProgress:!0,spaceBetween:m,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},breakpoints:{0:{slidesPerView:2,spaceBetween:0},576:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1025:{slidesPerView:l,spaceBetween:0},1500:{slidesPerView:l,spaceBetween:0}},onSwiper:x,onSlideChange:x,modules:E,children:[a.map((s,r)=>e.jsx(y,{tag:"li",children:n(s)},r+A()+"slider")),e.jsx("div",{className:"swiper-button swiper-button-next"}),e.jsx("div",{className:"swiper-button swiper-button-prev"})]},o)]})})})});C.displayName="SectionSlider";export{C as S};
