(this["webpackJsonp11-spotify-clone"]=this["webpackJsonp11-spotify-clone"]||[]).push([[12],{115:function(e,s,c){"use strict";s.a=[{id:0,name:"Selena Gomez",color:"rgb(176, 48, 56)",profile:"https://i.scdn.co/image/ab67616100005174a5205abffd84341e5bace828",banner:"https://i.scdn.co/image/ab676186000010166e26b86a9f8a8d78b14c2dac"},{id:1,name:"BLACKPINK",color:"rgb(72, 120, 128)",profile:"https://i.scdn.co/image/ab6761610000f1789f73197444a8a6b016f4a546",banner:"https://i.scdn.co/image/ab6761860000101605db059c417be575326b4370"},{id:2,name:"Ariana Grande",color:"rgb(144, 168, 176)",profile:"https://i.scdn.co/image/ab6761610000f178cdce7620dc940db079bf4952",banner:"https://i.scdn.co/image/ab67618600001016d54af005f6b5d45b9ed4a76c"}]},116:function(e,s,c){"use strict";c.d(s,"a",(function(){return t}));var n=c(0);function t(){return Object(n.useEffect)((function(){document.querySelector(".main-view").scrollTo(0,0)}),[]),null}},118:function(e,s,c){"use strict";var n=c(25),t=c(61),i=c(115),a=c(62),o=(c(119),c(3));s.a=function(e){var s=Object(n.c)((function(e){return e.songs})),c=s.queue,r=s.isPlaying,d=s.currentSong,l=Object(n.b)(),j=e.songs||c;return d?Object(o.jsxs)("div",{className:"songs",children:[Object(o.jsxs)("div",{className:"songs__header",children:[Object(o.jsx)("div",{className:"songs__header__index",children:"#"}),Object(o.jsx)("div",{className:"songs__header__desc",children:"TITLE"}),Object(o.jsx)("div",{className:"songs__header__views",children:"VIEWS"}),Object(o.jsx)("div",{className:"songs__header__duration",children:Object(o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:Object(o.jsx)("path",{d:"M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z",fill:"currentColor"})})})]}),j.map((function(e,s){return Object(o.jsxs)("div",{className:(null===d||void 0===d?void 0:d.song)===e.song?"songs__song active":"songs__song",children:[Object(o.jsxs)("div",{className:"songs__song__index",children:[(null===d||void 0===d?void 0:d.song)===e.song&&r?Object(o.jsx)("img",{alt:"",src:"/images/equalizer.gif",width:"14",height:"14"}):Object(o.jsx)("p",{children:s+1}),Object(o.jsx)("button",{onClick:function(){(null===d||void 0===d?void 0:d.song)===e.song?l(r?Object(a.n)():Object(a.o)()):l(Object(a.a)({song:e.id,index:s}))},children:(null===d||void 0===d?void 0:d.song)===e.song&&r?Object(o.jsxs)("svg",{height:"32",role:"img",width:"32",viewBox:"0 0 24 24",children:[Object(o.jsx)("rect",{x:"5",y:"3",width:"4",height:"18",fill:"currentColor"}),Object(o.jsx)("rect",{x:"15",y:"3",width:"4",height:"18",fill:"currentColor"})]}):Object(o.jsx)("svg",{height:"32",role:"img",width:"32",viewBox:"0 0 24 24",children:Object(o.jsx)("polygon",{points:"21.57 12 5.98 3 5.98 21 21.57 12",fill:"currentColor"})})})]}),Object(o.jsxs)("div",{className:"songs__song__desc",children:[Object(o.jsx)("div",{className:"songs__song__desc__image-container",children:Object(o.jsx)("div",{className:"songs__song__desc__image-container__image",children:Object(o.jsx)("img",{loading:"lazy",draggable:"false",src:e.img,alt:"",onError:function(e){e.target.insertAdjacentHTML("afterend",'<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M9 6.159v10.899A3.485 3.485 0 006.5 16C4.57 16 3 17.57 3 19.5S4.57 23 6.5 23s3.5-1.57 3.5-3.5V6.969L21 4.63v10.178a3.485 3.485 0 00-2.5-1.058c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5V3.395L9 6.159zM6.5 22C5.122 22 4 20.878 4 19.5S5.122 17 6.5 17 9 18.122 9 19.5 7.878 22 6.5 22zm12-2.25a2.503 2.503 0 01-2.5-2.5c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path></svg>'),e.target.style.display="none"}})})}),Object(o.jsxs)("div",{className:"songs__song__desc__content",children:[Object(o.jsx)("p",{className:"one-line",children:e.name}),Object(o.jsx)("span",{className:"one-line",children:e.artists.map((function(s,c){var n;return Object(o.jsxs)("div",{children:[Object(o.jsx)(t.b,{to:"/artist/".concat(s),children:null===(n=i.a.find((function(e){return e.id===s})))||void 0===n?void 0:n.name}),c<e.artists.length-1&&", "]},c)}))})]})]}),Object(o.jsx)("div",{className:"songs__song__views",children:e.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(o.jsx)("div",{className:"songs__song__duration",children:e.duration})]},s)}))]}):Object(o.jsx)(o.Fragment,{})}},119:function(e,s,c){},244:function(e,s,c){},271:function(e,s,c){"use strict";c.r(s);var n=c(0),t=c(25),i=c(61),a=c(63),o=c(116),r=c(118),d=(c(244),c(3));s.default=function(){var e=Object(t.c)((function(e){return e.songs})).queue,s=Object(t.b)();return Object(n.useEffect)((function(){s(Object(a.b)("queue")),document.title="Spotify - Play Queue"}),[s]),Object(d.jsxs)("div",{className:"queue",children:[Object(d.jsx)(o.a,{}),e.length<1?Object(d.jsxs)("div",{className:"queue__no",children:[Object(d.jsx)("svg",{width:"46",height:"46",version:"1.1",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsxs)("g",{children:[Object(d.jsx)("g",{children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M3,14c-0.1689453,0-0.3369141-0.0429688-0.4892578-0.1279297C2.1953125,13.6953125,2,13.3613281,2,13V5     c0-0.3613281,0.1953125-0.6953125,0.5107422-0.8720703C2.828125,3.9521484,3.2128906,3.9580078,3.5214844,4.1464844l6.5458984,4     C10.3642578,8.328125,10.5458984,8.6513672,10.5458984,9s-0.1816406,0.671875-0.4785156,0.8535156l-6.5458984,4     C3.3613281,13.9511719,3.1806641,14,3,14z M4,6.7832031v4.4335938L7.6279297,9L4,6.7832031z"})})}),Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M29,10H13c-0.5527344,0-1-0.4472656-1-1s0.4472656-1,1-1h16c0.5527344,0,1,0.4472656,1,1S29.5527344,10,29,10z"})}),Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M29,28H5c-0.5527344,0-1-0.4472656-1-1s0.4472656-1,1-1h24c0.5527344,0,1,0.4472656,1,1S29.5527344,28,29,28z"})}),Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M29,19H5c-0.5527344,0-1-0.4472656-1-1s0.4472656-1,1-1h24c0.5527344,0,1,0.4472656,1,1S29.5527344,19,29,19z"})})]})}),Object(d.jsx)("h1",{children:"Add to your queue"}),Object(d.jsx)("p",{children:'Tap "Add to queue" from a track\'s menu to see it here'}),Object(d.jsx)(i.b,{to:"/search",children:"FIND SOMETHING TO PLAY"})]}):Object(d.jsx)(r.a,{arr:e})]})}}}]);
//# sourceMappingURL=12.6ba06f4b.chunk.js.map