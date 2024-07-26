(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{85356:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(84643)}])},84643:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return HomePage}});var o=r(7896),n=r(2784),s=r(25445),i=r(38752),a=r(66759),l=r(31054);r(54163),r(31368),r(69378);var u=r(71662),c=r(10081),d=r(2756),g=r(64338),p=r(51511);function ListCard({listKey:e,count:t,hideCreate:r}){let{colors:o,palette:n,radii:l,spacing:u}=(0,s.Fg)(),c=(0,g.sm)(e);return(0,s.tZ)("div",{css:{position:"relative"}},(0,s.tZ)(p.rU,{href:`/${c.path}${c.isSingleton?"/1":""}`,css:{backgroundColor:o.background,borderColor:o.border,borderRadius:l.medium,borderWidth:1,display:"inline-block",minWidth:280,padding:u.large,textDecoration:"none",":hover":{borderColor:n.blue400},":hover h3":{textDecoration:"underline"}}},(0,s.tZ)("h3",{css:{margin:`0 0 ${u.small}px 0`}},c.label," "),c.isSingleton?null:"success"===t.type?(0,s.tZ)("span",{css:{color:o.foreground,textDecoration:"none"}},t.count," item",1!==t.count?"s":""):"error"===t.type?t.message:"loading"===t.type?(0,s.tZ)(a.xg,{label:`Loading count of ${c.plural}`,size:"small",tone:"passive"}):"No access"),!1===r&&!c.isSingleton&&(0,s.tZ)(CreateButton,{title:`Create ${c.singular}`,href:`/${c.path}/create`},(0,s.tZ)(i.p,{size:"large"}),(0,s.tZ)(s.TX,null,"Create ",c.singular)))}function CreateButton(e){let t=(0,s.Fg)();return(0,s.tZ)(p.rU,(0,o.Z)({css:{alignItems:"center",backgroundColor:t.palette.neutral400,border:0,borderRadius:t.radii.xsmall,color:"white",cursor:"pointer",display:"flex",height:32,justifyContent:"center",outline:0,position:"absolute",right:t.spacing.large,top:t.spacing.large,transition:"background-color 80ms linear",width:32,"&:hover, &:focus":{color:"white",backgroundColor:t.tones.positive.fill[0]}}},e))}function HomePage(){let{adminMeta:{lists:e},visibleLists:t}=(0,g.jf)(),r=(0,n.useMemo)(()=>c.Ps`
    query {
      keystone {
        adminMeta {
          lists {
            key
            hideCreate
          }
        }
      }
      ${Object.values(e).filter(e=>!e.isSingleton).map(e=>`${e.key}: ${e.gqlNames.listQueryCountName}`).join("\n")}
    }`,[e]),{data:o,error:i}=(0,d.a)(r,{errorPolicy:"all"}),p=(0,l.m)(o,null==i?void 0:i.graphQLErrors);return(0,s.tZ)(u.P,{header:(0,s.tZ)(s.X6,{type:"h3"},"Dashboard")},"loading"===t.state?(0,s.tZ)(s.M5,{css:{height:`calc(100vh - ${u.H}px)`}},(0,s.tZ)(a.xg,{label:"Loading lists",size:"large",tone:"passive"})):(0,s.tZ)(s.gF,{as:"ul",gap:"large",paddingY:"xlarge",css:{paddingLeft:"0px",marginBottom:"0px"}},"error"===t.state?(0,s.tZ)("span",{css:{color:"red"}},t.error instanceof Error?t.error.message:t.error[0].message):Object.keys(e).map(e=>{var r,n;if(!t.lists.has(e))return null;let i=p.get(e);return(0,s.tZ)(ListCard,{count:o?i.errors?{type:"error",message:i.errors[0].message}:{type:"success",count:o[e]}:{type:"loading"},hideCreate:null!==(r=null==o||null===(n=o.keystone.adminMeta.lists.find(t=>t.key===e))||void 0===n?void 0:n.hideCreate)&&void 0!==r&&r,key:e,listKey:e})})))}r(2445),r(25631),r(50469),r(5632),r(80487),r(40891),r(25273),r(6987),r(39097),r(55364),r(8999),r(96819),r(74002),r(69393),r(37668),r(51168),r(35976),r(10581),r(26763),r(97729)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=85356)}),_N_E=e.O()}]);