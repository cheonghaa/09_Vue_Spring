import{i as f,u as y,b as p,r as g,o as U,d as k,e as a,g as n,n as D,t as x,w as d,v as u,h as E}from"./index-D-3oGFuw.js";const v="/api/member",I={"Content-Type":"multipart/form-data"},h={async checkUsername(o){const{data:e}=await f.get(`${v}/checkusername/${o}`);return console.log("AUTH GET CHECKUSERNAME",e),e},async create(o){const e=new FormData;e.append("username",o.username),e.append("email",o.email),e.append("password",o.password),o.avatar&&e.append("avatar",o.avatar);const{data:i}=await f.post(v,e,I);return console.log("AUTH POST: ",i),i}},T={class:"mt-5 mx-auto",style:{width:"500px"}},S=a("h1",{class:"my-5"},[a("i",{class:"fa-solid fa-user-plus"}),n(" 회원 가입 ")],-1),V={class:"mb-3 mt-3"},A={for:"username",class:"form-label"},C=a("i",{class:"fa-solid fa-user"},null,-1),B=a("label",{for:"avatar",class:"form-label"},[a("i",{class:"fa-solid fa-user-astronaut"}),n(" 아바타 이미지: ")],-1),H={class:"mb-3 mt-3"},M=a("label",{for:"email",class:"form-label"},[a("i",{class:"fa-solid fa-envelope"}),n(" email ")],-1),N={class:"mb-3"},R=a("label",{for:"password",class:"form-label"},[a("i",{class:"fa-solid fa-lock"}),n(" 비밀번호: ")],-1),j={class:"mb-3"},P=a("label",{for:"password",class:"form-label"},[a("i",{class:"fa-solid fa-lock"}),n(" 비밀번호 확인: ")],-1),$=["disabled"],z=a("i",{class:"fa-solid fa-user-plus"},null,-1),G={__name:"JoinPage",setup(o){const e=y(),i=p(null),c=p(""),s=g({username:"hong",email:"hong@gmail.com",password:"12",password2:"12",avatar:null}),l=p(!0),_=async()=>{if(!s.username)return alert("사용자 ID를 입력하세요.");l.value=await h.checkUsername(s.username),console.log(l.value,typeof l.value),c.value=l.value?"이미 사용중인 ID입니다.":"사용가능한 ID입니다."},b=()=>{l.value=!0,s.username?c.value="ID 중복 체크를 하셔야 합니다.":c.value=""},w=async()=>{if(s.password!=s.password2)return alert("비밀번호가 일치하지 않습니다.");i.value.files.length>0&&(s.avatar=i.value.files[0]);try{await h.create(s),e.push({name:"home"})}catch(m){console.error(m)}};return(m,t)=>(U(),k("div",T,[S,a("form",{onSubmit:E(w,["prevent"])},[a("div",V,[a("label",A,[C,n(" 사용자 ID : "),a("button",{type:"button",class:"btn btn-success btn-sm py-0 me-2",onClick:_},"ID 중복 확인"),a("span",{class:D(l.value.value?"text-primary":"text-danger")},x(c.value),3)]),d(a("input",{type:"text",class:"form-control",placeholder:"사용자 ID",id:"username",onInput:b,"onUpdate:modelValue":t[0]||(t[0]=r=>s.username=r)},null,544),[[u,s.username]])]),a("div",null,[B,a("input",{type:"file",class:"form-control",ref_key:"avatar",ref:i,id:"avatar",accept:"image/png, image/jpeg"},null,512)]),a("div",H,[M,d(a("input",{type:"email",class:"form-control",placeholder:"Email",id:"email","onUpdate:modelValue":t[1]||(t[1]=r=>s.email=r)},null,512),[[u,s.email]])]),a("div",N,[R,d(a("input",{type:"password",class:"form-control",placeholder:"비밀번호",id:"password","onUpdate:modelValue":t[2]||(t[2]=r=>s.password=r)},null,512),[[u,s.password]])]),a("div",j,[P,d(a("input",{type:"password",class:"form-control",placeholder:"비밀번호 확인",id:"password2","onUpdate:modelValue":t[3]||(t[3]=r=>s.password2=r)},null,512),[[u,s.password2]])]),a("button",{type:"submit",class:"btn btn-primary mt-4",disabled:l.value},[z,n(" 확인 ")],8,$)],32)]))}};export{G as default};
