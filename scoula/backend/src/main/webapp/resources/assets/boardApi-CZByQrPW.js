import{i as a}from"./index-Dh7Fvi9m.js";const o="/api/board",d={"Content-Type":"multipart/form-data"},l={async getList(e){const{data:t}=await a.get(o,{params:e});return console.log("BOARD GET LIST: ",t),t},async create(e){const t=new FormData;if(t.append("title",e.title),t.append("writer",e.writer),t.append("content",e.content),e.files)for(let n=0;n<e.files.length;n++)t.append("files",e.files[n]);try{const{data:n}=await a.post(o,t,{headers:d})}catch(n){console.log(n.message)}return console.log("BOARD POST: ",data),data},async get(e){const{data:t}=await a.get(`${o}/${e}`);return console.log("BOARD GET",t),t},async delete(e){const{data:t}=await a.delete(`${o}/${e}`);return console.log("BOARD DELETE: ",t),t},async update(e){const t=new FormData;if(t.append("no",e.no),t.append("title",e.title),t.append("writer",e.writer),t.append("content",e.content),e.files)for(let s=0;s<e.files.length;s++)t.append("files",e.files[s]);const{data:n}=await a.put(`${o}/${e.no}`,t,{headers:d});return console.log("BOARD PUT: ",n),n},async deleteAttachment(e){const{data:t}=await a.delete(`${o}/deleteAttachment/${e}`);return console.log("ATTACHMENT DELETE: ",t),t}};export{l as b};
