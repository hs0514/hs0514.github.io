import{r as c,q as g,j as e,n as m,R as o,C as d,L as t,F as b,h as n,d as i}from"./index-1a6bfb36.js";import{R as j}from"./ReviewComponent-ec5a4512.js";import{S as f}from"./Sources-04ce62c5.js";import{U as v}from"./UpcomingMovies-977d7087.js";import{F as u}from"./fslight-box-adb42ad4.js";import{R as y}from"./rating-star-f8120d43.js";import{V as N}from"./VideoJs-c8fc78be.js";import{u as w}from"./usePage-2376af18.js";import{T as l}from"./Tab-14a4d81e.js";import"./SectionSlider-68895d07.js";import"./CardStyle-b71fb6e8.js";import"./index-fa5babab.js";import"./video.es-e335598a.js";const R=c.memo(()=>{w();const h=g.useRef(null),x={autoplay:!1,controls:!0,responsive:!0,techOrder:["youtube"],sources:[{src:"https://www.youtube.com/watch?v=QCGq1epI9pQ",type:"video/youtube"}],youtube:{iv_load_policy:1}},p=a=>{h.current=a,a.on("waiting",()=>{videojs.log("player is waiting")}),a.on("dispose",()=>{videojs.log("player will dispose")})},s={id:1,slug:"zombie-world",thumbnail:i("/assets/images/genre/01.webp"),title:"Zombie World",detail:"Zombie Island is a 1998 direct-to-video animated comedy horror film based on Hanna-Barbera's Scooby-Doo Saturday-morning cartoons. In the film, Shaggy, Scooby, Fred, Velma, and Daphne reunite after a year-long hiatus from Mystery, Inc. to investigate a bayou island said to be haunted by the ghost of the pirate Morgan Moonscar. The film was directed by Jim Stenstrum, from a screenplay by Glenn Leopold.",season_type:"2 Season",certificate:"Adventure",rating:4.5,likes:9,rating_from:"Imdb",geners:["action","adventure","drama"],tags:["brother","brother-relationship","kings","vikings"],video_link:"",video_type:"video",is_restricted:!1,cast:[{title:"James Chinlund",thumbnail:i("/assets/images/genre/g1.webp"),as:"As James"},{title:"James Earl Jones",thumbnail:i("/assets/images/genre/g2.webp"),as:"As Jones"}],crew:[{title:"Jeff Nathanson ",thumbnail:i("/assets/images/genre/g3.webp"),as:"Writing"},{title:" Irene Mecchi ",thumbnail:i("/assets/images/genre/g5.webp"),as:"Writing"},{title:" Karen Gilchrist ",thumbnail:i("/assets/images/genre/g4.webp"),as:"Production"}],created_by_username:"Admin",created_at:"Feb 2019",ranking:"#1 in Series Today ",date:"Nov 2020"};return e.jsxs(c.Fragment,{children:[e.jsx("div",{className:"iq-main-slider site-video",children:e.jsx(m,{fluid:!0,children:e.jsx(o,{children:e.jsx(d,{lg:"12",children:e.jsx("div",{className:"pt-0",children:e.jsx(N,{options:x,onReady:p})})})})})}),e.jsx("div",{className:"details-part",children:e.jsx(m,{fluid:!0,children:e.jsx(o,{children:e.jsxs(d,{lg:"12",children:[e.jsx("div",{className:"trending-info mt-4 pt-0 pb-4",children:e.jsxs(o,{children:[e.jsxs(d,{md:"9",className:"mb-auto",children:[e.jsxs("div",{className:"d-block d-lg-flex align-items-center",children:[e.jsx("h2",{className:"trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block",children:s.title}),e.jsxs("div",{className:"slider-ratting d-flex align-items-center ms-lg-3 ms-0",children:[e.jsx(y,{count:"4",count1:"1",starColor:"text-warning"}),e.jsxs("span",{className:"text-white ms-2",children:[s.rating," (imdb)"]})]})]}),e.jsx("ul",{className:"p-0 mt-2 list-inline d-flex flex-wrap movie-tag",children:s.geners.map((a,r)=>e.jsx("li",{className:"trending-list",children:e.jsx(t,{to:"/view-all",className:"text-primary text-capitalize",children:a})},r))}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4",children:[e.jsx("span",{className:"badge bg-secondary",children:"Horror"}),e.jsxs("span",{className:"ms-3 font-Weight-500 genres-info me-2",children:["1hr : 48mins"," "]}),e.jsx("span",{className:"trending-year trending-year-list font-Weight-500 genres-info",children:s.created_at})]}),e.jsxs("div",{className:"d-flex align-items-center gap-4 flex-wrap mb-4",children:[e.jsxs("ul",{className:"list-inline p-0 share-icons music-play-lists mb-n2 mx-n2",children:[e.jsxs("li",{className:"share",children:[e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-share-nodes"})}),e.jsxs("div",{className:"share-box",children:[e.jsx("svg",{width:"15",height:"40",viewBox:"0 0 15 40",className:"share-shape",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z",fill:"#191919"})}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(t,{to:"#",className:"share-ico",children:e.jsx("i",{className:"fa-brands fa-facebook-f"})}),e.jsx(t,{to:"#",className:"share-ico",children:e.jsx("i",{className:"fa-brands fa-twitter"})}),e.jsx(t,{to:"#",className:"share-ico",children:e.jsx("i",{className:"fa-solid fa-link"})})]})]})]}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-heart"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-download"})})})]}),e.jsx("div",{className:"movie-detail-select",children:e.jsxs(b.Select,{name:"movieselect",className:"form-select ",children:[e.jsx("option",{value:"1",children:"Playlist"}),e.jsx("option",{value:"2",children:"Zombie Island"}),e.jsx("option",{value:"3",children:"Sand Dust"}),e.jsx("option",{value:"4",children:"Jumbo Queen"})]})})]}),e.jsxs("ul",{className:"iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0",children:[e.jsxs("li",{className:"iq-tag-title text-primary mb-0",children:[e.jsx("i",{className:"fa fa-tags","aria-hidden":"true"}),"Tags:"," "]}),s.tags.map((a,r)=>e.jsxs("li",{children:[e.jsx(t,{to:"/view-all",className:"title text-capitalize",children:a}),e.jsx("span",{className:"text-secondary",children:","})]},r))]})]}),e.jsx(u,{image:s.thumbnail})]})}),e.jsx("div",{className:"content-details trending-info",children:e.jsxs(l.Container,{defaultActiveKey:"first",children:[e.jsx(n,{className:"iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline",children:e.jsxs(n,{variant:"",className:"nav-item",id:"nav-tab",role:"tablist",children:[e.jsx(n.Link,{eventKey:"first",variant:" d-flex align-items-center",id:"nav-description-tab","data-bs-toggle":"tab","data-bs-target":"#nav-description",type:"button",role:"tab","aria-controls":"nav-description","aria-selected":"true",children:"Description"}),e.jsx(n.Link,{eventKey:"second",variant:"",id:"nav-review-tab","data-bs-toggle":"tab","data-bs-target":"#nav-review",type:"button",role:"tab","aria-controls":"nav-review","aria-selected":"false",children:"Rate & Review"}),e.jsx(n.Link,{eventKey:"third",variant:"",id:"nav-sources-tab","data-bs-toggle":"tab","data-bs-target":"#nav-sources",type:"button",role:"tab","aria-controls":"nav-sources","aria-selected":"false",children:"Sources"})]})}),e.jsxs(l.Content,{children:[e.jsx(l.Pane,{className:" fade show",eventKey:"first",id:"nav-description",role:"tabpanel","aria-labelledby":"nav-description-tab",children:e.jsx("p",{children:s.detail})}),e.jsx(l.Pane,{className:" fade",id:"nav-review",eventKey:"second",role:"tabpanel","aria-labelledby":"nav-review-tab",children:e.jsx(j,{})}),e.jsx(l.Pane,{className:" fade",id:"nav-sources",eventKey:"third",role:"tabpanel","aria-labelledby":"nav-sources-tab",children:e.jsx(f,{})})]})]})})]})})})}),e.jsx(v,{})]})});R.displayName="VideoDetail";export{R as default};
