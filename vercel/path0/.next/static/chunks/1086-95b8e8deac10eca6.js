(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1086],{21086:function(e,t,i){"use strict";i.d(t,{p:function(){return getItemPage}});var l=i(7896),n=i(34273),a=i.n(n),o=i(5632),r=i(2784),s=i(25631),d=i(25445),u=i(66759),m=i(13123),c=i(8999),g=i(43900),v=i(55364),p=i(29730),f=i(2445),h=i(31054),y=i(54163);i(31368);var Z=i(36928),b=i(1804),w=i(10081),x=i(2756),C=i(64338),k=i(71662),E=i(28346),F=i(45478),I=i(57035),S=i(49258);function useEventCallback(e){let t=(0,r.useRef)(e),i=(0,r.useCallback)((...e)=>t.current(...e),[]);return(0,r.useEffect)(()=>{t.current=e}),i}function ItemForm({listKey:e,itemGetter:t,selectedFields:i,fieldModes:n,fieldPositions:o,showDelete:u,item:c}){var g,x,k;let I=(0,C.sm)(e),{spacing:S,typography:M}=(0,d.Fg)(),[D,{loading:P,error:T,data:R}]=(0,b.D)(w.Ps`mutation ($data: ${I.gqlNames.updateInputName}!, $id: ID!) {
      item: ${I.gqlNames.updateMutationName}(where: { id: $id }, data: $data) {
        ${i}
      }
    }`,{errorPolicy:"all"});t=null!==(g=(0,r.useMemo)(()=>{if(R)return(0,h.m)(R,null==T?void 0:T.graphQLErrors).get("item")},[R,T]))&&void 0!==g?g:t;let[q,z]=(0,r.useState)(()=>{let e=(0,Z.d)(I.fields,t);return{value:e,item:t}});if(!P&&q.item.data!==t.data&&(t.errors||[]).every(e=>{var t;return(null===(t=e.path)||void 0===t?void 0:t.length)!==1})){let e=(0,Z.d)(I.fields,t);z({value:e,item:t})}let{changedFields:L,dataForUpdate:B}=(0,Z.u)(I.fields,q.item,q.value),N=(0,Z.a)(I.fields,q.value),[X,V]=(0,r.useState)(!1),A=(0,v.e)(),Q=useEventCallback(()=>{let e=0!==N.size;V(e),e||D({variables:{data:B,id:q.item.get("id").data}}).then(({errors:e})=>{let t=null==e?void 0:e.find(e=>{var t;return void 0===e.path||(null===(t=e.path)||void 0===t?void 0:t.length)===1});t?A.addToast({title:"Failed to update item",tone:"negative",message:t.message}):A.addToast({tone:"positive",title:"Saved successfully"})}).catch(e=>{A.addToast({title:"Failed to update item",tone:"negative",message:e.message})})}),K=I.isSingleton?I.label:null===(x=q.item.data)||void 0===x?void 0:x[I.labelField],O=null===(k=q.item.data)||void 0===k?void 0:k.id,W=!!L.size;return(0,F.u)((0,r.useMemo)(()=>({current:W}),[W])),(0,d.tZ)(r.Fragment,null,(0,d.tZ)(d.xu,{marginTop:"xlarge"},(0,d.tZ)(E.G,{networkError:null==T?void 0:T.networkError,errors:null==T?void 0:T.graphQLErrors.filter(e=>{var t;return(null===(t=e.path)||void 0===t?void 0:t.length)===1})}),(0,d.tZ)(y.F,{groups:I.groups,fieldModes:n,fields:I.fields,forceValidation:X,invalidFields:N,position:"form",fieldPositions:o,onChange:(0,r.useCallback)(e=>{z(t=>({item:t.item,value:e(t.value)}))},[z]),value:q.value}),(0,d.tZ)($,{onSave:Q,hasChangedFields:!!L.size,onReset:useEventCallback(()=>{z(e=>({item:e.item,value:(0,Z.d)(I.fields,e.item)}))}),loading:P,deleteButton:(0,r.useMemo)(()=>u?(0,d.tZ)(DeleteButton,{list:I,itemLabel:null!=K?K:O,itemId:O}):void 0,[u,I,K,O])})),(0,d.tZ)(StickySidebar,null,(0,d.tZ)(f.Qy,null,"Item ID"),(0,d.tZ)("div",{css:{display:"flex",alignItems:"center"}},(0,d.tZ)(f.oi,{css:{marginRight:S.medium,fontFamily:M.fontFamily.monospace,fontSize:M.fontSize.small},readOnly:!0,value:c.id}),(0,d.tZ)(p.u,{content:"Copy ID"},e=>(0,d.tZ)(s.zx,(0,l.Z)({},e,{"aria-label":"Copy ID",onClick:()=>{a()(c.id)}}),(0,d.tZ)(m.K,{size:"small"})))),(0,d.tZ)(d.xu,{marginTop:"xlarge"},(0,d.tZ)(y.F,{groups:I.groups,fieldModes:n,fields:I.fields,forceValidation:X,invalidFields:N,position:"sidebar",fieldPositions:o,onChange:(0,r.useCallback)(e=>{z(t=>({item:t.item,value:e(t.value)}))},[z]),value:q.value}))))}function DeleteButton({itemLabel:e,itemId:t,list:i}){let l=(0,v.e)(),[n,{loading:a}]=(0,b.D)(w.Ps`mutation ($id: ID!) {
      ${i.gqlNames.deleteMutationName}(where: { id: $id }) {
        id
      }
    }`,{variables:{id:t}}),[u,m]=(0,r.useState)(!1),g=(0,o.useRouter)();return(0,d.tZ)(r.Fragment,null,(0,d.tZ)(s.zx,{tone:"negative",onClick:()=>{m(!0)}},"Delete"),(0,d.tZ)(c.aR,{title:"Delete Confirmation",isOpen:u,tone:"negative",actions:{confirm:{label:"Delete",action:async()=>{try{await n()}catch(t){return l.addToast({title:`Failed to delete ${i.singular} item: ${e}`,message:t.message,tone:"negative"})}return g.push(i.isSingleton?"/":`/${i.path}`),l.addToast({title:e,message:`Deleted ${i.singular} item successfully`,tone:"positive"})},loading:a},cancel:{label:"Cancel",action:()=>{m(!1)}}}},"Are you sure you want to delete ",(0,d.tZ)("strong",null,e),"?"))}i(69378),i(96819),i(74002),i(69393),i(37668),i(51168),i(35976),i(10581),i(26763),i(50469),i(80487),i(40891),i(25273),i(51511),i(39097),i(97729),i(6987);let getItemPage=e=>()=>(0,d.tZ)(ItemPage,e);function ItemPage({listKey:e}){var t,i;let l=(0,C.sm)(e),n=(0,o.useRouter)().query.id,{query:a,selectedFields:s}=(0,r.useMemo)(()=>{let e=Object.entries(l.fields).filter(([e,t])=>"id"===e||"hidden"!==t.itemView.fieldMode).map(([e])=>l.fields[e].controller.graphqlSelection).join("\n");return{selectedFields:e,query:w.Ps`
        query ItemPage($id: ID!, $listKey: String!) {
          item: ${l.gqlNames.itemQueryName}(where: {id: $id}) {
            ${e}
          }
          keystone {
            adminMeta {
              list(key: $listKey) {
                hideCreate
                hideDelete
                fields {
                  path
                  itemView(id: $id) {
                    fieldMode
                    fieldPosition
                  }
                }
              }
            }
          }
        }
      `}},[l]),{data:m,error:c,loading:v}=(0,x.a)(a,{variables:{id:n,listKey:e},errorPolicy:"all",skip:void 0===n}),p=(0,h.m)(m,null==c?void 0:c.graphQLErrors),f=(0,r.useMemo)(()=>{var e;let t={};return null===(e=p.data)||void 0===e||null===(e=e.keystone)||void 0===e||null===(e=e.adminMeta)||void 0===e||null===(e=e.list)||void 0===e||null===(e=e.fields)||void 0===e||e.forEach(e=>{var i;null!==e&&null!==e.path&&(null==e||null===(i=e.itemView)||void 0===i?void 0:i.fieldMode)!=null&&(t[e.path]=e.itemView.fieldMode)}),t},[null===(t=p.data)||void 0===t||null===(t=t.keystone)||void 0===t||null===(t=t.adminMeta)||void 0===t||null===(t=t.list)||void 0===t?void 0:t.fields]),y=(0,r.useMemo)(()=>{var e;let t={};return null===(e=p.data)||void 0===e||null===(e=e.keystone)||void 0===e||null===(e=e.adminMeta)||void 0===e||null===(e=e.list)||void 0===e||null===(e=e.fields)||void 0===e||e.forEach(e=>{var i;null!==e&&null!==e.path&&(null==e||null===(i=e.itemView)||void 0===i?void 0:i.fieldPosition)!=null&&(t[e.path]=e.itemView.fieldPosition)}),t},[null===(i=p.data)||void 0===i||null===(i=i.keystone)||void 0===i||null===(i=i.adminMeta)||void 0===i||null===(i=i.list)||void 0===i?void 0:i.fields]),Z=v||void 0===n,b=p.get("keystone").errors,F=l.isSingleton?l.label:Z?void 0:m&&m.item&&(m.item[l.labelField]||m.item.id)||n;return(0,d.tZ)(k.P,{title:F,header:(0,d.tZ)(S.I,{list:l,label:Z?"Loading...":m&&m.item&&(m.item[l.labelField]||m.item.id)||n})},Z?(0,d.tZ)(d.M5,{css:{height:`calc(100vh - ${k.H}px)`}},(0,d.tZ)(u.xg,{label:"Loading item data",size:"large",tone:"passive"})):b?(0,d.tZ)(d.xu,{marginY:"xlarge"},(0,d.tZ)(g.qX,{tone:"negative"},b[0].message)):(0,d.tZ)(S.C,null,(null==m?void 0:m.item)==null?(0,d.tZ)(d.xu,{marginY:"xlarge"},null!=c&&c.graphQLErrors.length||null!=c&&c.networkError?(0,d.tZ)(E.G,{errors:null==c?void 0:c.graphQLErrors,networkError:null==c?void 0:c.networkError}):l.isSingleton?"1"===n?(0,d.tZ)(d.Kq,{gap:"medium"},(0,d.tZ)(g.qX,{tone:"negative"},l.label," doesn't exist or you don't have access to it."),!m.keystone.adminMeta.list.hideCreate&&(0,d.tZ)(I.C,{list:l})):(0,d.tZ)(g.qX,{tone:"negative"},'The item with id "',n,'" does not exist'):(0,d.tZ)(g.qX,{tone:"negative"},'The item with id "',n,"\" could not be found or you don't have access to it.")):(0,d.tZ)(r.Fragment,null,(0,d.tZ)(ItemForm,{fieldModes:f,fieldPositions:y,selectedFields:s,showDelete:!m.keystone.adminMeta.list.hideDelete,listKey:e,itemGetter:p.get("item"),item:m.item}))))}let $=(0,r.memo)(function({hasChangedFields:e,loading:t,onSave:i,onReset:l,deleteButton:n}){return(0,d.tZ)(S.B,null,(0,d.tZ)(s.zx,{isDisabled:!e,isLoading:t,weight:"bold",tone:"active",onClick:i},"Save changes"),(0,d.tZ)(d.Kq,{align:"center",across:!0,gap:"small"},e?(0,d.tZ)(ResetChangesButton,{onReset:l}):(0,d.tZ)(d.xv,{weight:"medium",paddingX:"large",color:"neutral600"},"No changes"),n))});function ResetChangesButton(e){let[t,i]=(0,r.useState)(!1);return(0,d.tZ)(r.Fragment,null,(0,d.tZ)(s.zx,{weight:"none",onClick:()=>{i(!0)}},"Reset changes"),(0,d.tZ)(c.aR,{actions:{confirm:{action:()=>e.onReset(),label:"Reset changes"},cancel:{action:()=>i(!1),label:"Cancel"}},isOpen:t,title:"Are you sure you want to reset changes?",tone:"negative"},null))}function StickySidebar(e){let{spacing:t}=(0,d.Fg)();return(0,d.tZ)("div",(0,l.Z)({css:{marginTop:t.xlarge,marginBottom:t.xxlarge,position:"sticky",top:t.xlarge}},e))}},57035:function(e,t,i){"use strict";i.d(t,{C:function(){return CreateButtonLink}});var l=i(25631),n=i(25445),a=i(51511);function CreateButtonLink(e){return(0,n.tZ)(l.zx,{css:{textDecoration:"none",":hover":{color:"white"}},as:a.rU,href:`/${e.list.path}/create`,tone:"active",size:"small",weight:"bold"},"Create ",e.list.singular)}},49258:function(e,t,i){"use strict";i.d(t,{B:function(){return BaseToolbar},C:function(){return ColumnLayout},I:function(){return ItemPageHeader}});var l=i(7896),n=i(25445),a=i(25273),o=i(2784),r=i(51511);let Container=({children:e,...t})=>(0,n.tZ)("div",(0,l.Z)({css:{minWidth:0,maxWidth:1080}},t),e);function ItemPageHeader(e){let{palette:t,spacing:i}=(0,n.Fg)();return(0,n.tZ)(Container,{css:{alignItems:"center",display:"flex",flex:1,justifyContent:"space-between"}},(0,n.tZ)("div",{css:{alignItems:"center",display:"flex",flex:1,minWidth:0}},e.list.isSingleton?(0,n.tZ)(n.X6,{type:"h3"},e.list.label):(0,n.tZ)(o.Fragment,null,(0,n.tZ)(n.X6,{type:"h3"},(0,n.tZ)(r.rU,{href:`/${e.list.path}`,css:{textDecoration:"none"}},e.list.label)),(0,n.tZ)("div",{css:{color:t.neutral500,marginLeft:i.xsmall,marginRight:i.xsmall}},(0,n.tZ)(a.X,null)),(0,n.tZ)(n.X6,{as:"h1",type:"h3",css:{minWidth:0,maxWidth:"100%",overflow:"hidden",flex:1,textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.label))))}function ColumnLayout(e){let{spacing:t}=(0,n.Fg)();return(0,n.tZ)(Container,{css:{position:"relative",height:"100%"}},(0,n.tZ)("div",(0,l.Z)({css:{alignItems:"start",display:"grid",gap:t.none,gridTemplateColumns:"100vw","@media (min-width: 576px)":{gridTemplateColumns:"2fr 1fr",gap:t.xlarge}}},e)))}function BaseToolbar(e){let{colors:t,spacing:i}=(0,n.Fg)();return(0,n.tZ)("div",{css:{background:t.background,borderTop:`1px solid ${t.border}`,bottom:0,display:"flex",justifyContent:"space-between",marginTop:i.xlarge,paddingBottom:i.xlarge,paddingTop:i.xlarge,position:"sticky",zIndex:20}},e.children)}},34273:function(e){function makeError(){return new DOMException("The request is not allowed","NotAllowedError")}async function copyClipboardApi(e){if(!navigator.clipboard)throw makeError();return navigator.clipboard.writeText(e)}async function copyExecCommand(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let i=window.getSelection(),l=window.document.createRange();i.removeAllRanges(),l.selectNode(t),i.addRange(l);let n=!1;try{n=window.document.execCommand("copy")}finally{i.removeAllRanges(),window.document.body.removeChild(t)}if(!n)throw makeError()}async function clipboardCopy(e){try{await copyClipboardApi(e)}catch(t){try{await copyExecCommand(e)}catch(e){throw e||t||makeError()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=clipboardCopy}}]);