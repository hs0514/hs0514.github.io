import{r as e,s as a,j as t}from"./index-1a6bfb36.js";import{S as o}from"./SectionSlider-68895d07.js";import{C as m}from"./CardStyle-b71fb6e8.js";const r=e.memo(()=>{const[s]=e.useState("Related Videos"),[l]=e.useState(a);return t.jsx(e.Fragment,{children:t.jsx(o,{title:s,list:l,className:"streamit-block",children:i=>t.jsx(m,{image:i.image,title:i.title,movieTime:i.movieTime,watchlistLink:"/playlist",link:"/movies-detail"})})})});r.displayName="RelatedVideos";const d=e.memo(()=>{const[s]=e.useState("Related Movies"),[l]=e.useState(a);return t.jsx(e.Fragment,{children:t.jsx(o,{title:s,list:l,className:"related-movie-block",slidesPerView:5,children:i=>t.jsx(m,{image:i.image,title:i.title,movieTime:i.movieTime,watchlistLink:"/playlist",link:"/movies-detail"})})})});d.displayName="RelatedMovies";export{d as R,r as a};
