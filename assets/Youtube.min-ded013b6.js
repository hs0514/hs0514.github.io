import{g as P,a as _,c as b}from"./index-1a6bfb36.js";import{v}from"./video.es-e335598a.js";function S(h,d){for(var r=0;r<d.length;r++){const o=d[r];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in h)){const i=Object.getOwnPropertyDescriptor(o,n);i&&Object.defineProperty(h,n,i.get?i:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var c={exports:{}};const I=P(v);(function(h,d){(function(r,o){{var n=I;h.exports=o(n.default||n)}})(b,function(r){var o=r.browser.IS_IOS||r.browser.IS_NATIVE_ANDROID,n=r.getTech("Tech");class i extends n{constructor(e,t){super(e,t),this.setPoster(e.poster),this.setSrc(this.options_.source,!0),this.setTimeout((function(){this.el_&&(this.el_.parentNode.className+=" vjs-youtube",o&&(this.el_.parentNode.className+=" vjs-youtube-mobile"),i.isApiReady?this.initYTPlayer():i.apiReadyQueue.push(this))}).bind(this))}dispose(){if(this.ytPlayer)this.ytPlayer.stopVideo&&this.ytPlayer.stopVideo(),this.ytPlayer.destroy&&this.ytPlayer.destroy();else{var e=i.apiReadyQueue.indexOf(this);e!==-1&&i.apiReadyQueue.splice(e,1)}this.ytPlayer=null,this.el_.parentNode.className=this.el_.parentNode.className.replace(" vjs-youtube","").replace(" vjs-youtube-mobile",""),this.el_.parentNode.removeChild(this.el_),n.prototype.dispose.call(this)}createEl(){var e=document.createElement("div");e.setAttribute("id",this.options_.techId),e.setAttribute("style","width:100%;height:100%;top:0;left:0;position:absolute"),e.setAttribute("class","vjs-tech");var t=document.createElement("div");if(t.appendChild(e),!o&&!this.options_.ytControls){var s=document.createElement("div");s.setAttribute("class","vjs-iframe-blocker"),s.setAttribute("style","position:absolute;top:0;left:0;width:100%;height:100%"),s.onclick=(function(){this.pause()}).bind(this),t.appendChild(s)}return t}initYTPlayer(){var e={controls:0,modestbranding:1,rel:0,showinfo:0,loop:this.options_.loop?1:0};if(typeof this.options_.autohide<"u"&&(e.autohide=this.options_.autohide),typeof this.options_.cc_load_policy<"u"&&(e.cc_load_policy=this.options_.cc_load_policy),typeof this.options_.ytControls<"u"&&(e.controls=this.options_.ytControls),typeof this.options_.disablekb<"u"&&(e.disablekb=this.options_.disablekb),typeof this.options_.color<"u"&&(e.color=this.options_.color),e.controls?typeof this.options_.fs<"u"&&(e.fs=this.options_.fs):e.fs=0,this.options_.source.src.indexOf("end=")!==-1){var t=this.options_.source.src.match(/end=([0-9]*)/);this.options_.end=parseInt(t[1])}if(typeof this.options_.end<"u"&&(e.end=this.options_.end),typeof this.options_.hl<"u"?e.hl=this.options_.hl:typeof this.options_.language<"u"&&(e.hl=this.options_.language.substr(0,2)),typeof this.options_.iv_load_policy<"u"&&(e.iv_load_policy=this.options_.iv_load_policy),typeof this.options_.list<"u"?e.list=this.options_.list:this.url&&typeof this.url.listId<"u"&&(e.list=this.url.listId),typeof this.options_.listType<"u"&&(e.listType=this.options_.listType),typeof this.options_.modestbranding<"u"&&(e.modestbranding=this.options_.modestbranding),typeof this.options_.playlist<"u"&&(e.playlist=this.options_.playlist),typeof this.options_.playsinline<"u"&&(e.playsinline=this.options_.playsinline),typeof this.options_.rel<"u"&&(e.rel=this.options_.rel),typeof this.options_.showinfo<"u"&&(e.showinfo=this.options_.showinfo),this.options_.source.src.indexOf("start=")!==-1){var s=this.options_.source.src.match(/start=([0-9]*)/);this.options_.start=parseInt(s[1])}if(typeof this.options_.start<"u"&&(e.start=this.options_.start),typeof this.options_.theme<"u"&&(e.theme=this.options_.theme),typeof this.options_.customVars<"u"){var l=this.options_.customVars;Object.keys(l).forEach(function(y){e[y]=l[y]})}this.activeVideoId=this.url?this.url.videoId:null,this.activeList=e.list;var u={videoId:this.activeVideoId,playerVars:e,events:{onReady:this.onPlayerReady.bind(this),onPlaybackQualityChange:this.onPlayerPlaybackQualityChange.bind(this),onPlaybackRateChange:this.onPlayerPlaybackRateChange.bind(this),onStateChange:this.onPlayerStateChange.bind(this),onVolumeChange:this.onPlayerVolumeChange.bind(this),onError:this.onPlayerError.bind(this)}};typeof this.options_.enablePrivacyEnhancedMode<"u"&&this.options_.enablePrivacyEnhancedMode&&(u.host="https://www.youtube-nocookie.com"),this.ytPlayer=new YT.Player(this.options_.techId,u)}onPlayerReady(){this.options_.muted&&this.ytPlayer.mute();var e=this.ytPlayer.getAvailablePlaybackRates();e.length>1&&(this.featuresPlaybackRate=!0),this.playerReady_=!0,this.triggerReady(),this.playOnReady?this.play():this.cueOnReady&&(this.cueVideoById_(this.url.videoId),this.activeVideoId=this.url.videoId)}onPlayerPlaybackQualityChange(){}onPlayerPlaybackRateChange(){this.trigger("ratechange")}onPlayerStateChange(e){var t=e.data;if(!(t===this.lastState||this.errorNumber))switch(this.lastState=t,t){case-1:this.trigger("loadstart"),this.trigger("loadedmetadata"),this.trigger("durationchange"),this.trigger("ratechange");break;case YT.PlayerState.ENDED:this.trigger("ended");break;case YT.PlayerState.PLAYING:this.trigger("timeupdate"),this.trigger("durationchange"),this.trigger("playing"),this.trigger("play"),this.isSeeking&&this.onSeeked();break;case YT.PlayerState.PAUSED:this.trigger("canplay"),this.isSeeking?this.onSeeked():this.trigger("pause");break;case YT.PlayerState.BUFFERING:this.player_.trigger("timeupdate"),this.player_.trigger("waiting");break}}onPlayerVolumeChange(){this.trigger("volumechange")}onPlayerError(e){this.errorNumber=e.data,this.trigger("pause"),this.trigger("error")}error(){var e=1e3+this.errorNumber;switch(this.errorNumber){case 5:return{code:e,message:"Error while trying to play the video"};case 2:case 100:return{code:e,message:"Unable to find the video"};case 101:case 150:return{code:e,message:"Playback on other Websites has been disabled by the video owner."}}return{code:e,message:"YouTube unknown error ("+this.errorNumber+")"}}loadVideoById_(e){var t={videoId:e};this.options_.start&&(t.startSeconds=this.options_.start),this.options_.end&&(t.endSeconds=this.options_.end),this.ytPlayer.loadVideoById(t)}cueVideoById_(e){var t={videoId:e};this.options_.start&&(t.startSeconds=this.options_.start),this.options_.end&&(t.endSeconds=this.options_.end),this.ytPlayer.cueVideoById(t)}src(e){return e&&this.setSrc({src:e}),this.source}poster(){return o?null:this.poster_}setPoster(e){this.poster_=e}setSrc(e){!e||!e.src||(delete this.errorNumber,this.source=e,this.url=i.parseUrl(e.src),this.options_.poster||this.url.videoId&&(this.poster_="https://img.youtube.com/vi/"+this.url.videoId+"/0.jpg",this.trigger("posterchange"),this.checkHighResPoster()),this.options_.autoplay&&!o?this.isReady_?this.play():this.playOnReady=!0:this.activeVideoId!==this.url.videoId&&(this.isReady_?(this.cueVideoById_(this.url.videoId),this.activeVideoId=this.url.videoId):this.cueOnReady=!0))}autoplay(){return this.options_.autoplay}setAutoplay(e){this.options_.autoplay=e}loop(){return this.options_.loop}setLoop(e){this.options_.loop=e}play(){!this.url||!this.url.videoId||(this.wasPausedBeforeSeek=!1,this.isReady_?(this.url.listId&&(this.activeList===this.url.listId?this.ytPlayer.playVideo():(this.ytPlayer.loadPlaylist(this.url.listId),this.activeList=this.url.listId)),this.activeVideoId===this.url.videoId?this.ytPlayer.playVideo():(this.loadVideoById_(this.url.videoId),this.activeVideoId=this.url.videoId)):(this.trigger("waiting"),this.playOnReady=!0))}pause(){this.ytPlayer&&this.ytPlayer.pauseVideo()}paused(){return this.ytPlayer?this.lastState!==YT.PlayerState.PLAYING&&this.lastState!==YT.PlayerState.BUFFERING:!0}currentTime(){return this.ytPlayer?this.ytPlayer.getCurrentTime():0}setCurrentTime(e){this.lastState===YT.PlayerState.PAUSED&&(this.timeBeforeSeek=this.currentTime()),this.isSeeking||(this.wasPausedBeforeSeek=this.paused()),this.ytPlayer.seekTo(e,!0),this.trigger("timeupdate"),this.trigger("seeking"),this.isSeeking=!0,this.lastState===YT.PlayerState.PAUSED&&this.timeBeforeSeek!==e&&(clearInterval(this.checkSeekedInPauseInterval),this.checkSeekedInPauseInterval=setInterval((function(){this.lastState!==YT.PlayerState.PAUSED||!this.isSeeking?clearInterval(this.checkSeekedInPauseInterval):this.currentTime()!==this.timeBeforeSeek&&(this.trigger("timeupdate"),this.onSeeked())}).bind(this),250))}seeking(){return this.isSeeking}seekable(){return this.ytPlayer?r.createTimeRange(0,this.ytPlayer.getDuration()):r.createTimeRange()}onSeeked(){clearInterval(this.checkSeekedInPauseInterval),this.isSeeking=!1,this.wasPausedBeforeSeek&&this.pause(),this.trigger("seeked")}playbackRate(){return this.ytPlayer?this.ytPlayer.getPlaybackRate():1}setPlaybackRate(e){this.ytPlayer&&this.ytPlayer.setPlaybackRate(e)}duration(){return this.ytPlayer?this.ytPlayer.getDuration():0}currentSrc(){return this.source&&this.source.src}ended(){return this.ytPlayer?this.lastState===YT.PlayerState.ENDED:!1}volume(){return this.ytPlayer?this.ytPlayer.getVolume()/100:1}setVolume(e){this.ytPlayer&&this.ytPlayer.setVolume(e*100)}muted(){return this.ytPlayer?this.ytPlayer.isMuted():!1}setMuted(e){if(this.ytPlayer)this.muted(!0);else return;e?this.ytPlayer.mute():this.ytPlayer.unMute(),this.setTimeout(function(){this.trigger("volumechange")},50)}buffered(){if(!this.ytPlayer||!this.ytPlayer.getVideoLoadedFraction)return r.createTimeRange();var e=this.ytPlayer.getVideoLoadedFraction()*this.ytPlayer.getDuration();return r.createTimeRange(0,e)}preload(){}load(){}reset(){}networkState(){if(!this.ytPlayer)return 0;switch(this.ytPlayer.getPlayerState()){case-1:return 0;case 3:return 2;default:return 1}}readyState(){if(!this.ytPlayer)return 0;switch(this.ytPlayer.getPlayerState()){case-1:return 0;case 5:return 1;case 3:return 2;default:return 4}}supportsFullScreen(){return document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled}checkHighResPoster(){var e="https://img.youtube.com/vi/"+this.url.videoId+"/maxresdefault.jpg";try{var t=new Image;t.onload=(function(){if("naturalHeight"in t){if(t.naturalHeight<=90||t.naturalWidth<=120)return}else if(t.height<=90||t.width<=120)return;this.poster_=e,this.trigger("posterchange")}).bind(this),t.onerror=function(){},t.src=e}catch{}}}i.isSupported=function(){return!0},i.canPlaySource=function(a){return i.canPlayType(a.type)},i.canPlayType=function(a){return a==="video/youtube"},i.parseUrl=function(a){var e={videoId:null},t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,s=a.match(t);s&&s[2].length===11&&(e.videoId=s[2]);var l=/[?&]list=([^#\&\?]+)/;return s=a.match(l),s&&s[1]&&(e.listId=s[1]),e};function f(){YT.ready(function(){i.isApiReady=!0;for(var a=0;a<i.apiReadyQueue.length;++a)i.apiReadyQueue[a].initYTPlayer()})}function g(a,e){var t=!1,s=document.createElement("script"),l=document.getElementsByTagName("script")[0];l&&(l.parentNode.insertBefore(s,l),s.onload=function(){t||(t=!0,e())},s.onreadystatechange=function(){!t&&(this.readyState==="complete"||this.readyState==="loaded")&&(t=!0,e())},s.src=a)}function m(){var a=".vjs-youtube .vjs-iframe-blocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-iframe-blocker { display: block; }.vjs-youtube .vjs-poster { background-size: cover; }.vjs-youtube-mobile .vjs-big-play-button { display: none; }",e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=a:t.appendChild(document.createTextNode(a)),e.appendChild(t)}i.apiReadyQueue=[],typeof document<"u"&&(g("https://www.youtube.com/iframe_api",f),m()),typeof r.registerTech<"u"?r.registerTech("Youtube",i):r.registerComponent("Youtube",i)})})(c);var p=c.exports;const k=_(p),w=S({__proto__:null,default:k},[p]);export{w as Y};
