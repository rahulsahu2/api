(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7888],{33241:function(e,t,r){"use strict";r.d(t,{G:function(){return getCreateItemPage}});var n=r(25445),i=r(66759),a=r(25631),o=r(5632),l=r(54163);r(31368),r(2784),r(69378);var s=r(71662),u=r(64338);r(39097),r(97729),r(77595),r(80487),r(40891),r(25273),r(6987),r(8999);var d=r(51231),c=r(28346),g=r(49258);function CreatePageForm(e){var t,r;let i=(0,d.u)(e.list),s=(0,o.useRouter)();return(0,n.tZ)(n.xu,{paddingTop:"xlarge"},i.error&&(0,n.tZ)(c.G,{networkError:null===(t=i.error)||void 0===t?void 0:t.networkError,errors:null===(r=i.error)||void 0===r?void 0:r.graphQLErrors}),(0,n.tZ)(l.F,i.props),(0,n.tZ)(g.B,null,(0,n.tZ)(a.zx,{isLoading:"loading"===i.state,weight:"bold",tone:"active",onClick:async()=>{let t=await i.create();t&&s.push(`/${e.list.path}/${t.id}`)}},"Create ",e.list.singular)))}r(2445),r(50469),r(51511),r(55364),r(96819),r(74002),r(69393),r(37668),r(51168),r(35976),r(10581),r(26763),r(45478),r(43900);let getCreateItemPage=e=>()=>(0,n.tZ)(CreateItemPage,e);function CreateItemPage(e){let t=(0,u.sm)(e.listKey),{createViewFieldModes:r}=(0,u.jf)();return(0,n.tZ)(s.P,{title:`Create ${t.singular}`,header:(0,n.tZ)(g.I,{list:t,label:"Create"})},(0,n.tZ)(g.C,null,(0,n.tZ)(n.xu,null,"error"===r.state&&(0,n.tZ)(c.G,{networkError:r.error instanceof Error?r.error:void 0,errors:r.error instanceof Error?void 0:r.error}),"loading"===r.state&&(0,n.tZ)(i.xg,{label:"Loading create form"}),(0,n.tZ)(CreatePageForm,{list:t}))))}},49258:function(e,t,r){"use strict";r.d(t,{B:function(){return BaseToolbar},C:function(){return ColumnLayout},I:function(){return ItemPageHeader}});var n=r(7896),i=r(25445),a=r(25273),o=r(2784),l=r(51511);let Container=({children:e,...t})=>(0,i.tZ)("div",(0,n.Z)({css:{minWidth:0,maxWidth:1080}},t),e);function ItemPageHeader(e){let{palette:t,spacing:r}=(0,i.Fg)();return(0,i.tZ)(Container,{css:{alignItems:"center",display:"flex",flex:1,justifyContent:"space-between"}},(0,i.tZ)("div",{css:{alignItems:"center",display:"flex",flex:1,minWidth:0}},e.list.isSingleton?(0,i.tZ)(i.X6,{type:"h3"},e.list.label):(0,i.tZ)(o.Fragment,null,(0,i.tZ)(i.X6,{type:"h3"},(0,i.tZ)(l.rU,{href:`/${e.list.path}`,css:{textDecoration:"none"}},e.list.label)),(0,i.tZ)("div",{css:{color:t.neutral500,marginLeft:r.xsmall,marginRight:r.xsmall}},(0,i.tZ)(a.X,null)),(0,i.tZ)(i.X6,{as:"h1",type:"h3",css:{minWidth:0,maxWidth:"100%",overflow:"hidden",flex:1,textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.label))))}function ColumnLayout(e){let{spacing:t}=(0,i.Fg)();return(0,i.tZ)(Container,{css:{position:"relative",height:"100%"}},(0,i.tZ)("div",(0,n.Z)({css:{alignItems:"start",display:"grid",gap:t.none,gridTemplateColumns:"100vw","@media (min-width: 576px)":{gridTemplateColumns:"2fr 1fr",gap:t.xlarge}}},e)))}function BaseToolbar(e){let{colors:t,spacing:r}=(0,i.Fg)();return(0,i.tZ)("div",{css:{background:t.background,borderTop:`1px solid ${t.border}`,bottom:0,display:"flex",justifyContent:"space-between",marginTop:r.xlarge,paddingBottom:r.xlarge,paddingTop:r.xlarge,position:"sticky",zIndex:20}},e.children)}},37736:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/call-requests/create",function(){return r(67482)}])},67482:function(e,t,r){"use strict";r.r(t);var n=r(33241);t.default=(0,n.G)({listKey:"CallRequest"})}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=37736)}),_N_E=e.O()}]);