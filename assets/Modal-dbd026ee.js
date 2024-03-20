import{a1 as _,r as o,G as f,j as n,H as d,a2 as Ce,a3 as Ee,a4 as ke,a5 as Be,a6 as L,a7 as Ae,a8 as De,a9 as W,aa as Fe,ab as Oe,Y as K,ac as He,ad as Ie,ae as be,af as xe}from"./index-1a6bfb36.js";var p;function z(e){if((!p&&p!==0||e)&&_){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return p}const G=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-body"),n.jsx(s,{ref:l,className:d(e,t),...r})));G.displayName="ModalBody";const Ue=G,Y=o.forwardRef(({bsPrefix:e,className:t,contentClassName:s,centered:r,size:l,fullscreen:i,children:w,scrollable:R,...v},N)=>{e=f(e,"modal");const m=`${e}-dialog`,c=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return n.jsx("div",{...v,ref:N,className:d(m,t,l&&`${e}-${l}`,r&&`${m}-centered`,R&&`${m}-scrollable`,i&&c),children:n.jsx("div",{className:d(`${e}-content`,s),children:w})})});Y.displayName="ModalDialog";const q=Y,J=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-footer"),n.jsx(s,{ref:l,className:d(e,t),...r})));J.displayName="ModalFooter";const Le=J,Q=o.forwardRef(({bsPrefix:e,className:t,closeLabel:s="Close",closeButton:r=!1,...l},i)=>(e=f(e,"modal-header"),n.jsx(Ce,{ref:i,...l,className:d(t,e),closeLabel:s,closeButton:r})));Q.displayName="ModalHeader";const We=Q,ze=Ee("h4"),V=o.forwardRef(({className:e,bsPrefix:t,as:s=ze,...r},l)=>(t=f(t,"modal-title"),n.jsx(s,{ref:l,className:d(e,t),...r})));V.displayName="ModalTitle";const _e=V;function Ke(e){return n.jsx(K,{...e,timeout:null})}function Ge(e){return n.jsx(K,{...e,timeout:null})}const X=o.forwardRef(({bsPrefix:e,className:t,style:s,dialogClassName:r,contentClassName:l,children:i,dialogAs:w=q,"aria-labelledby":R,"aria-describedby":v,"aria-label":N,show:m=!1,animation:c=!0,backdrop:h=!0,keyboard:Z=!0,onEscapeKeyDown:j,onShow:P,onHide:y,container:ee,autoFocus:ae=!0,enforceFocus:te=!0,restoreFocus:oe=!0,restoreFocusOptions:ne,onEntered:le,onExit:C,onExiting:se,onEnter:E,onEntering:k,onExited:B,backdropClassName:A,manager:D,...re},de)=>{const[ie,ce]=o.useState({}),[ue,F]=o.useState(!1),S=o.useRef(!1),T=o.useRef(!1),g=o.useRef(null),[M,fe]=ke(),me=Be(de,fe),O=L(y),ge=Ae();e=f(e,"modal");const Me=o.useMemo(()=>({onHide:O}),[O]);function H(){return D||He({isRTL:ge})}function I(a){if(!_)return;const u=H().getScrollbarWidth()>0,U=a.scrollHeight>be(a).documentElement.clientHeight;ce({paddingRight:u&&!U?z():void 0,paddingLeft:!u&&U?z():void 0})}const $=L(()=>{M&&I(M.dialog)});De(()=>{W(window,"resize",$),g.current==null||g.current()});const he=()=>{S.current=!0},ye=a=>{S.current&&M&&a.target===M.dialog&&(T.current=!0),S.current=!1},b=()=>{F(!0),g.current=xe(M.dialog,()=>{F(!1)})},pe=a=>{a.target===a.currentTarget&&b()},we=a=>{if(h==="static"){pe(a);return}if(T.current||a.target!==a.currentTarget){T.current=!1;return}y==null||y()},Re=a=>{Z?j==null||j(a):(a.preventDefault(),h==="static"&&b())},ve=(a,u)=>{a&&I(a),E==null||E(a,u)},Ne=a=>{g.current==null||g.current(),C==null||C(a)},Se=(a,u)=>{k==null||k(a,u),Ie(window,"resize",$)},Te=a=>{a&&(a.style.display=""),B==null||B(a),W(window,"resize",$)},$e=o.useCallback(a=>n.jsx("div",{...a,className:d(`${e}-backdrop`,A,!c&&"show")}),[c,A,e]),x={...s,...ie};x.display="block";const je=a=>n.jsx("div",{role:"dialog",...a,style:x,className:d(t,e,ue&&`${e}-static`,!c&&"show"),onClick:h?we:void 0,onMouseUp:ye,"aria-label":N,"aria-labelledby":R,"aria-describedby":v,children:n.jsx(w,{...re,onMouseDown:he,className:r,contentClassName:l,children:i})});return n.jsx(Fe.Provider,{value:Me,children:n.jsx(Oe,{show:m,ref:me,backdrop:h,container:ee,keyboard:!0,autoFocus:ae,enforceFocus:te,restoreFocus:oe,restoreFocusOptions:ne,onEscapeKeyDown:Re,onShow:P,onHide:y,onEnter:ve,onEntering:Se,onEntered:le,onExit:Ne,onExiting:se,onExited:Te,manager:H(),transition:c?Ke:void 0,backdropTransition:c?Ge:void 0,renderBackdrop:$e,renderDialog:je})})});X.displayName="Modal";const qe=Object.assign(X,{Body:Ue,Header:We,Title:_e,Footer:Le,Dialog:q,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{qe as M};
