"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7924],{7924:function(e,t,l){l.d(t,{d:function(){return getListPage}});var r=l(7896),i=l(2784),o=l(25631),s=l(25445),n=l(2445),a=l(28344),d=l(66759),u=l(8999),c=l(55364),p=l(58914),f=l(31054);l(54163);var g=l(31368);l(69378);var m=l(10081),h=l(2756),y=l(1804),b=l(46042);l(77595),l(39097);var Z=l(64338),v=l(5632),S=l(80487);l(40891);var k=l(25273),C=l(51511);l(6987);var $=l(71662),w=l(28346),x=l(50469),F=l(5540),P=l(57035),q=l(5934),z=l(33028),M=l(59740),N=l(46729),I=l(68020),O=l(18580);let T=["selectProps"],R=["components"],CheckMark=e=>{let{isDisabled:t,isFocused:l,isSelected:r}=e,i=(0,n.sF)({size:"medium",type:"radio"});return(0,s.tZ)("div",{className:`${t?"disabled ":""}${l?"focus ":""}${r?"selected":""}`,css:{alignItems:"center",backgroundColor:i.background,borderColor:i.borderColor,borderRadius:i.borderRadius,borderStyle:"solid",borderWidth:i.borderWidth,boxSizing:"border-box",color:i.foreground,cursor:"pointer",display:"flex",flexShrink:0,height:i.boxSize,justifyContent:"center",transition:i.transition,width:i.boxSize,"&.focus":{backgroundColor:i.focus.background,borderColor:i.focus.borderColor,boxShadow:i.focus.shadow,color:i.focus.foreground},"&.selected":{backgroundColor:i.selected.background,borderColor:i.selected.borderColor,boxShadow:i.selected.shadow,color:i.selected.foreground},"&.disabled":{backgroundColor:i.disabled.background,borderColor:i.disabled.borderColor,boxShadow:i.disabled.shadow,color:i.disabled.background,cursor:"default"},"&.selected.disabled":{color:i.disabled.foreground}}},(0,s.tZ)(N.n,{size:"small"}))},OptionPrimitive=e=>{let{children:t,isDisabled:l,isFocused:i,innerProps:o,innerRef:n,className:a}=e,d=(0,s.Fg)();return(0,s.tZ)("div",(0,r.Z)({ref:n,className:a,css:{alignItems:"center",color:l?d.colors.foregroundDim:i?d.colors.linkHoverColor:void 0,cursor:"pointer",display:"flex",fontSize:"0.9em",fontWeight:500,justifyContent:"space-between",background:i?d.colors.backgroundHover:void 0,outline:0,padding:`${d.spacing.small}px`,pointerEvents:l?"none":void 0,"&:not(:first-of-type)":{borderTop:`1px solid ${d.colors.backgroundDim}`},":hover":{background:d.colors.backgroundHover,color:d.colors.linkHoverColor}}},o),t)},D={Control:e=>{let{selectProps:t}=e,l=(0,M.Z)(e,T);return(0,s.tZ)(I.c.Control,(0,r.Z)({selectProps:t},l))},Option:OptionPrimitive,DropdownIndicator:null,IndicatorSeparator:null},Options=e=>{let{components:t}=e,l=(0,M.Z)(e,R),o=(0,i.useMemo)(()=>(0,z.Z)((0,z.Z)({},D),t),[t]),n=(0,s.Fg)(),a=(0,i.useMemo)(()=>({control:e=>(0,z.Z)((0,z.Z)({},e),{},{background:n.fields.inputBackground,boxShadow:"none",cursor:"text",padding:0,minHeight:34}),menu:()=>({marginTop:8}),menuList:e=>(0,z.Z)((0,z.Z)({},e),{},{padding:0}),placeholder:e=>(0,z.Z)((0,z.Z)({},e),{},{color:n.fields.inputPlaceholder})}),[n]);return(0,s.tZ)(O.ZP,(0,r.Z)({backspaceRemovesValue:!1,captureMenuScroll:!1,closeMenuOnSelect:!1,controlShouldRenderValue:!1,hideSelectedOptions:!1,isClearable:!1,isSearchable:!0,maxMenuHeight:1e3,menuIsOpen:!0,menuShouldScrollIntoView:!1,styles:a,tabSelectsValue:!1,components:o},l))};l(97729);var L=l(93478),_=l(75841);l(96819),l(74002),l(69393),l(37668),l(51168),l(35976),l(10581),l(26763),l(43900),l(18360);let getPaginationStats=({list:e,pageSize:t,currentPage:l,total:r})=>{let i="";if(r>t){let o=t*(l-1)+1;i=`${o} - ${Math.min(o+t-1,r)} of ${r} ${e.plural}`}else r>1&&e.plural?i=`${r} ${e.plural}`:1===r&&e.singular&&(i=`${r} ${e.singular}`);return{stats:i}};function Pagination({currentPage:e,total:t,pageSize:l,list:r}){let{query:o,pathname:a,push:d}=(0,v.useRouter)(),{stats:u}=getPaginationStats({list:r,currentPage:e,total:t,pageSize:l}),{opacity:c}=(0,s.Fg)(),p=e+1,f=e-1,g={...o,page:p},m={...o,page:f},h=Math.ceil(t/l),y=[];if((0,i.useEffect)(()=>{e>Math.ceil(t/l)&&d({pathname:a,query:{...o,page:Math.ceil(t/l)}})},[t,l,e,a,o,d]),t<=l)return null;for(let e=1;e<=h;e++)y.push({label:String(e),value:String(e)});return(0,s.tZ)(s.Kq,{as:"nav",role:"navigation","aria-label":"Pagination",paddingLeft:"medium",paddingRight:"medium",paddingTop:"large",paddingBottom:"large",across:!0,align:"center",css:{width:"100%",justifyContent:"space-between"}},(0,s.tZ)(s.Kq,{across:!0,gap:"xxlarge",align:"center"},(0,s.tZ)("span",null,`${r.plural} per page: ${l}`),(0,s.tZ)("span",null,(0,s.tZ)("strong",null,u))),(0,s.tZ)(s.Kq,{gap:"medium",across:!0,align:"center"},(0,s.tZ)(n.Ph,{width:"medium",value:{label:String(e),value:String(e)},options:y,styles:{valueContainer:e=>({...e,paddingLeft:"12px",paddingRight:"16px"})},menuPortalTarget:document.body,onChange:e=>{d({pathname:a,query:{...o,page:e.value}})}}),(0,s.tZ)("span",null,"of ",h),(0,s.tZ)(C.rU,{"aria-label":"Previous page",css:{color:"#415269",...f<1&&{pointerEvents:"none",opacity:c.disabled}},href:{query:m}},(0,s.tZ)(x.wyc,null)),(0,s.tZ)(C.rU,{"aria-label":"Next page",css:{color:"#415269",...p>h&&{pointerEvents:"none",opacity:c.disabled}},href:{query:g}},(0,s.tZ)(x.XCv,null))))}function PaginationLabel({currentPage:e,pageSize:t,plural:l,singular:r,total:i}){let{stats:o}=getPaginationStats({list:{plural:l,singular:r},currentPage:e,total:i,pageSize:t});return i?(0,s.tZ)("span",null,"Showing ",(0,s.tZ)("strong",null,o)):(0,s.tZ)("span",null,"No ",l)}function useSelectedFields(e,t){let{query:l}=(0,v.useRouter)(),r="string"==typeof l.fields?l.fields:"";return(0,i.useMemo)(()=>{let l=(r?r.split(","):e.initialColumns).filter(e=>"read"===t[e]);return new Set(0===l.length?[e.labelField]:l)},[e,r,t])}let j={Option:e=>(0,s.tZ)(OptionPrimitive,e,e.children,(0,s.tZ)(CheckMark,{isDisabled:e.isDisabled,isFocused:e.isFocused,isSelected:e.isSelected}))};function FieldSelection({list:e,fieldModesByFieldPath:t}){let l=(0,v.useRouter)(),i=useSelectedFields(e,t),setNewSelectedFields=t=>{if(function(e,t){if(e.length!==t.length)return!1;for(let l=0;l<e.length;l++)if(e[l]!==t[l])return!1;return!0}(t,e.initialColumns)){let{fields:e,...t}=l.query;l.push({query:t})}else l.push({query:{...l.query,fields:t.join(",")}})},n=[];return Object.keys(t).forEach(l=>{"read"===t[l]&&n.push({value:l,label:e.fields[l].label,isDisabled:1===i.size&&i.has(l)})}),(0,s.tZ)(S.J2,{"aria-label":`Columns options, list of column options to apply to the ${e.key} list`,triggerRenderer:({triggerProps:e})=>(0,s.tZ)(o.zx,(0,r.Z)({weight:"link",css:{padding:4}},e),(0,s.tZ)("span",{css:{display:"inline-flex",justifyContent:"center",alignItems:"center"}},i.size," column",1===i.size?"":"s"," ",(0,s.tZ)(q.v,{size:"smallish"})))},(0,s.tZ)("div",{css:{width:320}},(0,s.tZ)(s.xu,{padding:"medium"},(0,s.tZ)(Options,{onChange:e=>{Array.isArray(e)&&setNewSelectedFields(e.map(e=>e.value))},isMulti:!0,value:n.filter(e=>i.has(e.value)),options:n,components:j}))))}let E={Option:({children:e,...t})=>{let l=(0,s.Fg)(),r=t.isFocused?l.colors.foreground:l.colors.foregroundDim;return(0,s.tZ)(OptionPrimitive,t,(0,s.tZ)("span",null,e),(0,s.tZ)("div",{css:{alignItems:"center",display:"flex",height:24,justifyContent:"center",width:24}},(0,s.tZ)(k.X,{css:{color:r}})))}};function FilterAdd({listKey:e,filterableFields:t}){let{isOpen:l,setOpen:n,trigger:a,dialog:d,arrow:u}=(0,S.Sv)({placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,8]}}]});return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(o.zx,(0,r.Z)({tone:"active"},a.props,{ref:a.ref,onClick:()=>n(!l)}),(0,s.tZ)(s.xu,{as:"span",marginRight:"xsmall"},"Filter List"),(0,s.tZ)(q.v,{size:"small"})),(0,s.tZ)(S.c1,(0,r.Z)({"aria-label":`Filters options, list of filters to apply to the ${e} list`,arrow:u,isVisible:l},d.props,{ref:d.ref}),l&&(0,s.tZ)(FilterAddPopoverContent,{onClose:()=>{n(!1)},listKey:e,filterableFields:t})))}function FilterAddPopoverContent({onClose:e,listKey:t,filterableFields:l}){let r=(0,Z.sm)(t),a=(0,v.useRouter)(),d=(0,i.useMemo)(()=>{let e={};return Object.keys(r.fields).forEach(t=>{let i=r.fields[t];l.has(t)&&i.controller.filter&&(e[t]=i)}),e},[r.fields,l]),u=(0,i.useMemo)(()=>{let e={};return Object.keys(d).forEach(t=>{let l=d[t],r=!1,i={};Object.keys(l.controller.filter.types).forEach(e=>{void 0===a.query[`!${t}_${e}`]&&(r=!0,i[e]=l.controller.filter.types[e].label)}),r&&(e[t]=i)}),e},[a.query,d]),[c,p]=(0,i.useState)({kind:"selecting-field"});return(0,s.tZ)(s.Kq,{padding:"medium",as:"form",css:{minWidth:320},onSubmit:t=>{t.preventDefault(),"filter-value"===c.kind&&(a.push({query:{...a.query,[`!${c.fieldPath}_${c.filterType}`]:JSON.stringify(c.filterValue)}}),e())},gap:"small"},(0,s.tZ)("div",{css:{position:"relative"}},"selecting-field"!==c.kind&&(0,s.tZ)("button",{type:"button",onClick:()=>{p({kind:"selecting-field"})},css:{border:0,background:"transparent",cursor:"pointer",position:"absolute"}},(0,s.tZ)(s.TX,null,"Back"),(0,s.tZ)(L.w,{size:"smallish"})),(0,s.tZ)(s.X6,{textAlign:"center",type:"h5"},(()=>{switch(c.kind){case"selecting-field":return"Filter";case"filter-value":return r.fields[c.fieldPath].label}})())),(0,s.tZ)(s.iz,null),"selecting-field"===c.kind&&(0,s.tZ)(Options,{components:E,onChange:e=>{let t=e.value,l=Object.keys(u[t])[0];p({kind:"filter-value",fieldPath:t,filterType:l,filterValue:d[t].controller.filter.types[l].initialValue})},options:Object.keys(u).map(e=>({label:d[e].label,value:e}))}),"filter-value"===c.kind&&(0,s.tZ)(n.Ph,{width:"full",value:{value:c.filterType,label:u[c.fieldPath][c.filterType]},onChange:e=>{e&&p({kind:"filter-value",fieldPath:c.fieldPath,filterValue:d[c.fieldPath].controller.filter.types[e.value].initialValue,filterType:e.value})},options:Object.keys(u[c.fieldPath]).map(e=>({label:u[c.fieldPath][e],value:e}))}),"filter-value"==c.kind&&(()=>{let{Filter:e}=d[c.fieldPath].controller.filter;return(0,s.tZ)(e,{type:c.filterType,value:c.filterValue,onChange:e=>{p(t=>({...t,filterValue:e}))}})})(),"filter-value"==c.kind&&(0,s.tZ)("div",{css:{display:"flex",justifyContent:"space-between"}},(0,s.tZ)(o.zx,{onClick:e},"Cancel"),(0,s.tZ)(o.zx,{type:"submit"},"Apply")))}function FilterList({filters:e,list:t}){return(0,s.tZ)(s.gF,{gap:"small"},e.map(e=>{let l=t.fields[e.field];return(0,s.tZ)(FilterPill,{key:`${e.field}_${e.type}`,field:l,filter:e})}))}function FilterPill({filter:e,field:t}){let l=(0,v.useRouter)(),{isOpen:o,setOpen:n,trigger:a,dialog:d,arrow:u}=(0,S.Sv)({placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),c=t.controller.filter.Label;return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(_.D,(0,r.Z)({containerProps:{"aria-label":`Filter item ${e.field}, press to edit filter`}},a.props,{ref:a.ref,onClick:()=>n(!o),weight:"light",tone:"passive",onRemove:()=>{let{[`!${e.field}_${e.type}`]:t,...r}=l.query;l.push({pathname:l.pathname,query:r})}}),t.label," ",(0,s.tZ)(c,{label:t.controller.filter.types[e.type].label,type:e.type,value:e.value})),(0,s.tZ)(S.c1,(0,r.Z)({"aria-label":`filter item config, dialog for configuring ${e.field} filter`,arrow:u},d.props,{isVisible:o,ref:d.ref}),o&&(0,s.tZ)(EditDialog,{onClose:()=>{n(!1)},field:t,filter:e})))}function EditDialog({filter:e,field:t,onClose:l}){let r=t.controller.filter.Filter,n=(0,v.useRouter)(),[a,d]=(0,i.useState)(e.value);return(0,s.tZ)(s.Kq,{as:"form",padding:"small",gap:"small",onSubmit:t=>{t.preventDefault(),n.push({query:{...n.query,[`!${e.field}_${e.type}`]:JSON.stringify(a)}}),l()}},(0,s.tZ)(r,{type:e.type,value:a,onChange:d}),(0,s.tZ)("div",{css:{display:"flex",justifyContent:"space-between"}},(0,s.tZ)(o.zx,{onClick:l},"Cancel"),(0,s.tZ)(o.zx,{type:"submit"},"Save")))}function useSort(e,t){let{query:l}=(0,v.useRouter)(),r="string"==typeof l.sortBy?l.sortBy:null;return(0,i.useMemo)(()=>{if(""===r)return null;if(null===r)return e.initialSort;if(r.startsWith("-")){let e=r.slice(1);return t.has(e)?{field:e,direction:"DESC"}:null}return t.has(r)?{field:r,direction:"ASC"}:null},[r,e,t])}function SortSelection({list:e,orderableFields:t}){let l=useSort(e,t),{isOpen:n,setOpen:a,trigger:d,dialog:u,arrow:c}=(0,S.Sv)({placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,8]}}]});return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(o.zx,(0,r.Z)({},d.props,{weight:"link",css:{padding:4},ref:d.ref,onClick:()=>a(!n)}),(0,s.tZ)("span",{css:{display:"inline-flex",justifyContent:"center",alignItems:"center"}},l?`${e.fields[l.field].label} ${({ASC:"ascending",DESC:"descending"})[l.direction]}`:"No field",(0,s.tZ)(q.v,{size:"smallish"}))),(0,s.tZ)(S.c1,(0,r.Z)({"aria-label":`Sort options, list of sorting parameters to apply to the ${e.key} list`,arrow:c,isVisible:n},u.props,{ref:u.ref}),n&&(0,s.tZ)(SortSelectionPopoverContent,{onClose:()=>{a(!1)},list:e,orderableFields:t})))}let B={label:"No field",value:"___________NO_FIELD___________"};function SortSelectionPopoverContent({onClose:e,list:t,orderableFields:l}){let r=useSort(t,l),i=(0,v.useRouter)();return(0,s.tZ)(s.Kq,{padding:"medium",css:{minWidth:320},gap:"small"},(0,s.tZ)("div",{css:{position:"relative"}},(0,s.tZ)(s.X6,{textAlign:"center",type:"h5"},"Sort")),(0,s.tZ)(s.iz,null),(0,s.tZ)(Options,{value:r?{label:t.fields[r.field].label,value:r.field}:B,components:j,onChange:l=>{let o=l.value;if(o===B.value){let{sortBy:e,...l}=i.query;t.initialSort?i.push({query:{...i.query,sortBy:""}}):i.push({query:l})}else i.push({query:{...i.query,sortBy:(null==r?void 0:r.field)===o&&"ASC"===r.direction?`-${r.field}`:o}});e()},options:[...l].map(e=>({label:t.fields[e].label,value:e})).concat(B)}))}let A=m.Ps`
  query ($listKey: String!) {
    keystone {
      adminMeta {
        list(key: $listKey) {
          hideDelete
          hideCreate
          fields {
            path
            isOrderable
            isFilterable
            listView {
              fieldMode
            }
          }
        }
      }
    }
  }
`,H=["sortBy","fields"],getListPage=e=>()=>(0,s.tZ)(ListPage,e);function ListPage({listKey:e}){var t,l,r;let a=(0,Z.sm)(e),{query:u,push:c}=(0,v.useRouter)(),{resetToDefaults:g}=function(e){let t=(0,v.useRouter)(),l=`keystone.list.${e}.list.page.info`;return(0,i.useEffect)(()=>{if(!Object.keys(t.query).some(e=>e.startsWith("!")||H.includes(e))&&t.isReady){let e;let r=localStorage.getItem(l);try{e=JSON.parse(r)}catch(e){}e&&t.replace({query:{...t.query,...e}})}},[l,t.isReady]),(0,i.useEffect)(()=>{let e={};Object.keys(t.query).forEach(l=>{(l.startsWith("!")||H.includes(l))&&(e[l]=t.query[l])}),Object.keys(e).length?localStorage.setItem(l,JSON.stringify(e)):localStorage.removeItem(l)},[l,t]),{resetToDefaults:()=>{localStorage.removeItem(l),t.replace({pathname:t.pathname})}}}(e),y="string"!=typeof u.page||Number.isNaN(parseInt(u.page))?1:Number(u.page),b="string"!=typeof u.pageSize||Number.isNaN(parseInt(u.pageSize))?a.pageSize:parseInt(u.pageSize),S=(0,h.a)(A,{variables:{listKey:e}}),{listViewFieldModesByField:k,filterableFields:C,orderableFields:x}=(0,i.useMemo)(()=>{let e={},t=new Set,l=new Set;for(let i of(null===(r=S.data)||void 0===r||null===(r=r.keystone.adminMeta.list)||void 0===r?void 0:r.fields)||[]){var r;e[i.path]=i.listView.fieldMode,i.isOrderable&&t.add(i.path),i.isFilterable&&l.add(i.path)}return{listViewFieldModesByField:e,orderableFields:t,filterableFields:l}},[null===(t=S.data)||void 0===t||null===(t=t.keystone.adminMeta.list)||void 0===t?void 0:t.fields]),q=useSort(a,x),z=function(e,t){let{query:l}=(0,v.useRouter)(),r=(0,i.useMemo)(()=>{let l={};return Object.entries(e.fields).forEach(([e,r])=>{r.controller.filter&&t.has(e)&&Object.keys(r.controller.filter.types).forEach(t=>{l[`!${e}_${t}`]={type:t,field:e}})}),l},[e,t]),o=(0,i.useMemo)(()=>{let t=[];Object.keys(l).forEach(e=>{let i=r[e],o=l[e];if(i&&"string"==typeof o){let e;try{e=JSON.parse(o)}catch(e){}void 0!==o&&t.push({...i,value:e})}});let i=t.reduce((t,l)=>Object.assign(t,e.fields[l.field].controller.filter.graphql({type:l.type,value:l.value})),{});return e.isSingleton?{filters:t,where:{id:{equals:1},AND:[i]}}:{filters:t,where:i}},[l,r,e]);return o}(a,C),M=Object.keys(a.fields).filter(e=>a.fields[e].search),N=M.map(e=>a.fields[e].label),I="string"==typeof u.search?u.search:"",[O,T]=(0,i.useState)(I),R=(0,F.L)(I,a,M),updateSearch=e=>{let{search:t,...l}=u;e.trim()?c({query:{...l,search:e}}):c({query:l})},D=useSelectedFields(a,k),{data:L,error:_,refetch:j}=(0,h.a)((0,i.useMemo)(()=>{let e=[...D].map(e=>a.fields[e].controller.graphqlSelection).join("\n");return m.Ps`
      query ($where: ${a.gqlNames.whereInputName}, $take: Int!, $skip: Int!, $orderBy: [${a.gqlNames.listOrderName}!]) {
        items: ${a.gqlNames.listQueryName}(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
          ${D.has("id")?"":"id"}
          ${e}
        }
        count: ${a.gqlNames.listQueryCountName}(where: $where)
      }
    `},[a,D]),{fetchPolicy:"cache-and-network",errorPolicy:"all",skip:!S.data,variables:{where:{...z.where,...R},take:b,skip:(y-1)*b,orderBy:q?[{[q.field]:q.direction.toLowerCase()}]:void 0}}),[E,B]=(0,i.useState)({data:L,error:_});L&&E.data!==L&&B({data:L,error:_});let{data:V,error:K}=E,W=(0,f.m)(V,null==K?void 0:K.graphQLErrors),[U,X]=(0,i.useState)(()=>({itemsFromServer:void 0,selectedItems:new Set}));if(V&&V.items&&U.itemsFromServer!==V.items){let e=new Set;V.items.forEach(t=>{U.selectedItems.has(t.id)&&e.add(t.id)}),X({itemsFromServer:V.items,selectedItems:e})}let J=(0,s.Fg)(),Q=!(null===(l=null===(r=S.data)||void 0===r||null===(r=r.keystone.adminMeta.list)||void 0===r?void 0:r.hideCreate)||void 0===l||l)||null;return(0,s.tZ)($.P,{header:(0,s.tZ)(ListPageHeader,{listKey:e}),title:a.label},null!=K&&K.graphQLErrors.length||null!=K&&K.networkError?(0,s.tZ)(w.G,{errors:null==K?void 0:K.graphQLErrors,networkError:null==K?void 0:K.networkError}):null,S.error?"Error...":null,V&&S.data?(0,s.tZ)(i.Fragment,null,null!==a.description&&(0,s.tZ)("p",{css:{marginTop:"24px",maxWidth:"704px"}},a.description),(0,s.tZ)(s.Kq,{across:!0,gap:"medium",align:"center",marginTop:"xlarge"},(0,s.tZ)("form",{onSubmit:e=>{e.preventDefault(),updateSearch(O)}},(0,s.tZ)(s.Kq,{across:!0},(0,s.tZ)(n.oi,{css:{borderRadius:"4px 0px 0px 4px"},autoFocus:!0,value:O,onChange:e=>T(e.target.value),placeholder:`Search by ${N.length?N.join(", "):"ID"}`}),(0,s.tZ)(o.zx,{css:{borderRadius:"0px 4px 4px 0px"},type:"submit"},(0,s.tZ)(p.W,null)))),Q&&(0,s.tZ)(P.C,{list:a}),V.count||z.filters.length?(0,s.tZ)(FilterAdd,{listKey:e,filterableFields:C}):null,z.filters.length?(0,s.tZ)(FilterList,{filters:z.filters,list:a}):null,!!(z.filters.length||void 0!==u.sortBy||u.fields||u.search)&&(0,s.tZ)(o.zx,{size:"small",onClick:g},"Reset to defaults")),V.count?(0,s.tZ)(i.Fragment,null,(0,s.tZ)(ResultsSummaryContainer,null,(()=>{let e=U.selectedItems,t=e.size;if(t){var l,r;return(0,s.tZ)(i.Fragment,null,(0,s.tZ)("span",{css:{marginRight:J.spacing.small}},"Selected ",t," of ",V.items.length),!(null===(l=null===(r=S.data)||void 0===r||null===(r=r.keystone.adminMeta.list)||void 0===r?void 0:r.hideDelete)||void 0===l||l)&&(0,s.tZ)(DeleteManyButton,{list:a,selectedItems:e,refetch:j}))}return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(PaginationLabel,{currentPage:y,pageSize:b,plural:a.plural,singular:a.singular,total:V.count}),", sorted by ",(0,s.tZ)(SortSelection,{list:a,orderableFields:x}),"with"," ",(0,s.tZ)(FieldSelection,{list:a,fieldModesByFieldPath:k})," ")})()),(0,s.tZ)(ListTable,{count:V.count,currentPage:y,itemsGetter:W.get("items"),listKey:e,pageSize:b,selectedFields:D,sort:q,selectedItems:U.selectedItems,onSelectedItemsChange:e=>{X({itemsFromServer:U.itemsFromServer,selectedItems:e})},orderableFields:x})):(0,s.tZ)(ResultsSummaryContainer,null,"No ",a.plural," found.")):(0,s.tZ)(s.M5,{css:{height:`calc(100vh - ${$.H}px)`}},(0,s.tZ)(d.xg,{label:"Loading item data",size:"large",tone:"passive"})))}let ListPageHeader=({listKey:e})=>{let t=(0,Z.sm)(e);return(0,s.tZ)(i.Fragment,null,(0,s.tZ)("div",{css:{alignItems:"center",display:"flex",flex:1,justifyContent:"space-between"}},(0,s.tZ)(s.X6,{type:"h3"},t.label)))},ResultsSummaryContainer=({children:e})=>(0,s.tZ)("p",{css:{minHeight:38,display:"flex",alignItems:"center"}},e),SortDirectionArrow=({direction:e})=>{let t="0.25em";return(0,s.tZ)("span",{css:{borderLeft:`${t} solid transparent`,borderRight:`${t} solid transparent`,borderTop:`${t} solid`,display:"inline-block",height:0,marginLeft:"0.33em",marginTop:"-0.125em",verticalAlign:"middle",width:0,transform:`rotate(${"DESC"===e?"0deg":"180deg"})`}})};function DeleteManyButton({selectedItems:e,list:t,refetch:l}){let[r,n]=(0,y.D)((0,i.useMemo)(()=>m.Ps`
        mutation($where: [${t.gqlNames.whereUniqueInputName}!]!) {
          ${t.gqlNames.deleteManyMutationName}(where: $where) {
            id
            ${t.labelField}
          }
        }
`,[t]),{errorPolicy:"all"}),[a,d]=(0,i.useState)(!1),p=(0,c.e)();return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(o.zx,{isLoading:n.loading,tone:"negative",onClick:async()=>{d(!0)}},"Delete"),(0,s.tZ)(u.aR,{isOpen:a,title:"Delete Confirmation",tone:"negative",actions:{confirm:{label:"Delete",action:async()=>{let{data:i,errors:o}=await r({variables:{where:[...e].map(e=>({id:e}))}}),{successfulItems:s,unsuccessfulItems:n,successMessage:a}=i[t.gqlNames.deleteManyMutationName].reduce((e,l)=>(l?(e.successfulItems++,e.successMessage=""===e.successMessage?e.successMessage+=l[t.labelField]:e.successMessage+=`, ${l[t.labelField]}`):e.unsuccessfulItems++,e),{successfulItems:0,unsuccessfulItems:0,successMessage:""});return null!=o&&o.length&&p.addToast({tone:"negative",title:`Failed to delete ${n} of ${i[t.gqlNames.deleteManyMutationName].length} ${t.plural}`,message:o.reduce((e,t)=>(0>e.indexOf(t.message)&&e.push(t.message),e),[]).join("\n")}),s&&p.addToast({tone:"positive",title:`Deleted ${s} of ${i[t.gqlNames.deleteManyMutationName].length} ${t.plural} successfully`,message:a}),l()}},cancel:{label:"Cancel",action:()=>{d(!1)}}}},"Are you sure you want to delete ",e.size," ",1===e.size?t.singular:t.plural,"?"))}function ListTable({selectedFields:e,listKey:t,itemsGetter:l,count:r,sort:i,currentPage:o,pageSize:d,selectedItems:u,onSelectedItemsChange:c,orderableFields:p}){var f,m;let h=(0,Z.sm)(t),{query:y}=(0,v.useRouter)(),S=!h.fields[e.keys().next().value].views.Cell.supportsLinkTo;return(0,s.tZ)(s.xu,{paddingBottom:"xlarge"},(0,s.tZ)(TableContainer,null,(0,s.tZ)(s.TX,{as:"caption"},h.label," list"),(0,s.tZ)("colgroup",null,(0,s.tZ)("col",{width:"30"}),S&&(0,s.tZ)("col",{width:"30"}),[...e].map(e=>(0,s.tZ)("col",{key:e}))),(0,s.tZ)(TableHeaderRow,null,(0,s.tZ)(TableHeaderCell,{css:{paddingLeft:0}},(0,s.tZ)("label",{css:{display:"flex",alignItems:"center",justifyContent:"start",cursor:"pointer"}},(0,s.tZ)(n.Z8,{size:"small",checked:u.size===(null===(f=l.data)||void 0===f?void 0:f.length),css:{cursor:"default"},onChange:()=>{var e,t;let r=new Set;u.size!==(null===(e=l.data)||void 0===e?void 0:e.length)&&(null===(t=l.data)||void 0===t||t.forEach(e=>{null!==e&&null!==e.id&&r.add(e.id)})),c(r)}}))),S&&(0,s.tZ)(TableHeaderCell,null),[...e].map(e=>{let t=h.fields[e].label;return p.has(e)?(0,s.tZ)(TableHeaderCell,{key:e},(0,s.tZ)(C.rU,{css:{display:"block",textDecoration:"none",color:"inherit",":hover":{color:"inherit"}},href:{query:{...y,sortBy:(null==i?void 0:i.field)===e&&"ASC"===i.direction?`-${e}`:e}}},t,(null==i?void 0:i.field)===e&&(0,s.tZ)(SortDirectionArrow,{direction:i.direction}))):(0,s.tZ)(TableHeaderCell,{key:e},t)})),(0,s.tZ)("tbody",null,(null!==(m=l.data)&&void 0!==m?m:[]).map((t,r)=>{let i=l.get(r);if(null===i.data||null===i.data.id)return i.errors?(0,s.tZ)("tr",{css:{color:"red"},key:`index:${r}`},i.errors[0].message):null;let o=i.data.id;return(0,s.tZ)("tr",{key:o||`index:${r}`},(0,s.tZ)(TableBodyCell,null,(0,s.tZ)("label",{css:{display:"flex",minHeight:38,alignItems:"center",justifyContent:"start"}},(0,s.tZ)(n.Z8,{size:"small",checked:u.has(o),css:{cursor:"default"},onChange:()=>{let e=new Set(u);u.has(o)?e.delete(o):e.add(o),c(e)}}))),S&&(0,s.tZ)(TableBodyCell,null,(0,s.tZ)(C.rU,{css:{textDecoration:"none",minHeight:38,display:"flex",alignItems:"center",justifyContent:"center"},href:`/${h.path}/[id]`,as:`/${h.path}/${encodeURIComponent(o)}`},(0,s.tZ)(a.M,{size:"smallish","aria-label":"Go to item"}))),[...e].map((e,t)=>{let l=h.fields[e],{Cell:r}=h.fields[e].views,n={};for(let a of(0,g.g)(l.controller)){let l=i.get(a);if(l.errors){let i=l.errors[0].message;return(0,s.tZ)(TableBodyCell,{css:{color:"red"},key:e},0===t&&r.supportsLinkTo?(0,s.tZ)(b.C,{href:`/${h.path}/[id]`,as:`/${h.path}/${encodeURIComponent(o)}`},i):i)}n[a]=l.data}return(0,s.tZ)(TableBodyCell,{key:e},(0,s.tZ)(r,{field:l.controller,item:n,linkTo:0===t&&r.supportsLinkTo?{href:`/${h.path}/[id]`,as:`/${h.path}/${encodeURIComponent(o)}`}:void 0}))}))}))),(0,s.tZ)(Pagination,{list:h,total:r,currentPage:o,pageSize:d}))}let TableContainer=({children:e})=>(0,s.tZ)("table",{css:{minWidth:"100%",tableLayout:"fixed","tr:last-child td":{borderBottomWidth:0}},cellPadding:"0",cellSpacing:"0"},e),TableHeaderRow=({children:e})=>(0,s.tZ)("thead",null,(0,s.tZ)("tr",null,e)),TableHeaderCell=e=>{let{colors:t,spacing:l,typography:i}=(0,s.Fg)();return(0,s.tZ)("th",(0,r.Z)({css:{backgroundColor:t.background,borderBottom:`2px solid ${t.border}`,color:t.foregroundDim,fontSize:i.fontSize.medium,fontWeight:i.fontWeight.medium,padding:l.small,textAlign:"left",position:"sticky",top:0}},e))},TableBodyCell=e=>{let{colors:t,typography:l}=(0,s.Fg)();return(0,s.tZ)("td",(0,r.Z)({css:{borderBottom:`1px solid ${t.border}`,fontSize:l.fontSize.medium}},e))}},57035:function(e,t,l){l.d(t,{C:function(){return CreateButtonLink}});var r=l(25631),i=l(25445),o=l(51511);function CreateButtonLink(e){return(0,i.tZ)(r.zx,{css:{textDecoration:"none",":hover":{color:"white"}},as:o.rU,href:`/${e.list.path}/create`,tone:"active",size:"small",weight:"bold"},"Create ",e.list.singular)}}}]);