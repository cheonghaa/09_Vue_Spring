import{b as q}from"./boardApi-DoUtq7p6.js";import{h as w}from"./moment-C5S46NFB.js";import{u as x,a as k,c as C,d as V,r as B,m as D,j as g,o as u,e as i,f as t,t as r,F as I,p as Y,k as c,l as o,q as d,h as p}from"./index-CtPXxlfV.js";import"./index-C_QKBRB1.js";const L=t("h1",{class:"mb-3"},[t("i",{class:"fa-solid fa-paste"}),p(" 게시글 목록")],-1),N={class:"mt-5 text-end"},R={class:"table table-striped"},A=t("thead",null,[t("tr",null," … ")],-1),F={class:"my-5 d-flex"},M={class:"flex-grow-1 text-center"},P=t("i",{class:"fa-solid fa-backward-fast"},null,-1),T=t("i",{class:"fa-solid fa-caret-left"},null,-1),j=t("i",{class:"fa-solid fa-caret-right"},null,-1),E=t("i",{class:"fa-solid fa-forward-fast"},null,-1),H=t("i",{class:"fa-solid fa-pen-to-square"},null,-1),J={__name:"BoardListPage",setup(S){const e=x(),h=k(),n=C({}),y=V(()=>n.value.list),a=B({page:parseInt(e.query.page)||1,amount:parseInt(e.query.amount)||10}),b=async l=>{h.push({query:{page:l,amount:a.amount}})};D(e,async l=>{console.log("WATCH",e.query.page),a.page=parseInt(e.query.page),a.amount=parseInt(e.query.amount),await m(a)});const m=async l=>{try{n.value=await q.getList(l),console.log(n.value)}catch{}};return m(a),(l,_)=>{const f=g("router-link"),v=g("vue-awesome-paginate");return u(),i("div",null,[L,t("div",N,"(총 "+r(n.value.totalCount)+"건)",1),t("table",R,[A,t("tbody",null,[(u(!0),i(I,null,Y(y.value,s=>(u(),i("tr",{key:s.no},[t("td",null,r(s.no),1),t("td",null,[c(f,{to:{name:"board/detail",params:{no:s.no},query:d(e).query}},{default:o(()=>[p(r(s.title),1)]),_:2},1032,["to"])]),t("td",null,r(s.writer),1),t("td",null,r(d(w)(s.regDate).format("YYYY-MM-DD")),1)]))),128))])]),t("div",F,[t("div",M,[c(v,{"total-items":n.value.totalCount,"items-per-page":a.amount,"max-pages-shown":5,"show-ending-buttons":!0,modelValue:a.page,"onUpdate:modelValue":_[0]||(_[0]=s=>a.page=s),onClick:b},{"first-page-button":o(()=>[P]),"prev-button":o(()=>[T]),"next-button":o(()=>[j]),"last-page-button":o(()=>[E]),_:1},8,["total-items","items-per-page","modelValue"])]),t("div",null,[c(f,{to:{name:"board/create",query:d(e).query},class:"btn btn-primary"},{default:o(()=>[H,p(" 글 작성")]),_:1},8,["to"])])])])}}};export{J as default};
