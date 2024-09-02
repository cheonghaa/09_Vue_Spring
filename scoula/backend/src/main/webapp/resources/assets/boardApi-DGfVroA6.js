import{i as o}from"./index-R7OI5l8a.js";const a="/api/board",p={"Content-Type":"multipart/form-data"},d={async getList(e){console.log(e,"params");try{const{data:t}=await o.get(a,{params:e});return console.log("BOARD GET LIST: ",t),t}catch(t){console.log(t.message)}},async create(e){const t=new FormData;if(t.append("title",e.title),t.append("writer",e.writer),t.append("content",e.content),e.files)for(let n=0;n<e.files.length;n++)t.append("files",e.files[n]);const{data:s}=await o.post(a,t,{headers:p});return console.log("BOARD POST: ",s),s},async get(e){const{data:t}=await o.get(`${a}/${e}`);return console.log("BOARD GET",t),t},async delete(e){const{data:t}=await o.delete(`${a}/${e}`);return console.log("BOARD DELETE: ",t),t},async update(e){const t=new FormData;if(t.append("no",e.no),t.append("title",e.title),t.append("writer",e.writer),t.append("content",e.content),e.files)for(let n=0;n<e.files.length;n++)t.append("files",e.files[n]);const{data:s}=await o.put(`${a}/${e.no}`,t,{headers:p});return console.log("BOARD PUT: ",s),s},async deleteAttachment(e){const{data:t}=await o.delete(`${a}/deleteAttachment/${e}`);return console.log("ATTACHMENT DELETE: ",t),t}};export{d as b};
