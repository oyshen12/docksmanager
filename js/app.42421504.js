(function(){"use strict";var e={6759:function(e,t,a){var i=a(144),s=a(998),o=a(4562),l=a(4145),r=a(4886),n=a(9930),d=a(9223),c=a(4324),u=a(5495),h=a(2928),A=a(8088),f=function(){var e=this,t=e._self._c;return t(s.Z,[t("header",{staticClass:"d-flex align-center justify-space-between px-16"},[t("div",{staticClass:"d-flex align-center py-3"},[t(u.Z,{attrs:{src:a(3641),"max-height":"44","max-width":"44"}}),t("h1",{staticClass:"ml-4"},[e._v("Документы")])],1),t("div",[e.authorizationToken?t(o.Z,{attrs:{color:"primary"},on:{click:e.logout}},[e._v("Выйти")]):t("div",[t(o.Z,{attrs:{color:"primary"},on:{click:function(t){return e.modalAuthDefind("login")}}},[e._v("Войти")]),t(o.Z,{staticClass:"ml-4",attrs:{color:"primary"},on:{click:function(t){return e.modalAuthDefind("register")}}},[e._v("Регистрация")])],1),e.modalAuth?t(n.Z,{attrs:{"max-width":"400"},model:{value:e.modalAuth,callback:function(t){e.modalAuth=t},expression:"modalAuth"}},[t(l.Z,{staticClass:"pa-8 d-flex flex-column"},[t(r.EB,{staticClass:"pl-0"},[e._v(e._s(e.registerModal?"Регистрация":"Авторизация"))]),e.authError?t(r.ZB,{staticClass:"pl-0 red--text"},[e._v("Неверный email или пароль")]):e._e(),e.registerModal?t(A.Z,{attrs:{label:"Имя"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}):e._e(),t(A.Z,{attrs:{rules:[e.rules.email],label:"Email"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),t(A.Z,{attrs:{label:"Пароль"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}}),t(o.Z,{staticClass:"ml-auto",attrs:{color:"primary"},on:{click:e.auth}},[e._v(e._s(e.registerModal?"Регистрация":"Войти"))])],1)],1):e._e()],1)]),t(d.Z,{}),e.authorizationToken?t(h.Z,{staticClass:"px-16"},[t("div",{staticClass:"d-flex justify-space-between my-8"},[t("h1",{staticClass:"text"},[e._v(" "+e._s("Корневая папка"===e.currentFolder.name?e.currentFolder.name:"Папка: "+e.currentFolder.name)+" ")]),t("h1",{},[e._v("- "+e._s(this.folderSize)+" Кб.")]),t(A.Z,{staticClass:"pt-0 mx-16",attrs:{label:"Поиск..."},model:{value:e.searchInputLoc,callback:function(t){e.searchInputLoc=t},expression:"searchInputLoc"}}),t("div",[t(o.Z,{staticClass:"mr-4",attrs:{icon:"",fab:""}},[t(c.Z,{attrs:{"x-large":"",color:"black"}},[e._v("list")])],1),-1===e.currentFolder.id?t(o.Z,{attrs:{color:"primary"},on:{click:function(t){e.modalState=!0}}},[e._v(" Добавить папку "),t(c.Z,{staticClass:"ml-2"},[e._v("folder")])],1):e._e(),e.modalState?t(n.Z,{attrs:{"max-width":"400"},model:{value:e.modalState,callback:function(t){e.modalState=t},expression:"modalState"}},[t(l.Z,{staticClass:"pa-8 d-flex flex-column"},[t(r.EB,{staticClass:"pl-0"},[e._v("Добавить папку")]),t(A.Z,{attrs:{label:"Название",rules:[e.rules.required]},model:{value:e.folderName,callback:function(t){e.folderName=t},expression:"folderName"}}),t(o.Z,{staticClass:"ml-auto",attrs:{color:"primary"},on:{click:e.addFolder}},[e._v("Добавить")])],1)],1):e._e()],1)],1),t("router-view")],1):t("h1",{staticClass:"text-center mt-8"},[e._v(" Зарегистрируйтесь или войдите чтобы добавить файлы или папки ")])],1)},m=[],p=function(){var e=this,t=e._self._c;return t(n.Z,{attrs:{"max-width":"400"},model:{value:e.modalState,callback:function(t){e.modalState=t},expression:"modalState"}},[e._t("default")],2)},g=[],v={props:{modalStateProp:{require:!1}},data(){return{modalState:!1}},mounted(){console.log("dialog mounted")},methods:{hideDialog(){}},watch:{modalStateProp(e){this.modalState=e},modalState(e){console.log("modalChange ",e),this.$emit("modalChange",e)}}},w=v,B=a(1001),C=(0,B.Z)(w,p,g,!1,null,"1f94873e",null),Z=C.exports,k=a(9669),x=a.n(k),b=a(629),D={data(){return{}},computed:{...(0,b.rn)({baseUrl:e=>e.baseUrl,authorizationToken:e=>e.authorizationToken,folders:e=>e.folders,files:e=>e.files,currentFolder:e=>e.currentFolder,searchInput:e=>e.searchInput}),...(0,b.Se)({filtredFiles:"filtredFiles",filtredFolders:"filtredFolders"})},methods:{...(0,b.OI)({setFolders:"setFolders",setAuthorizationToken:"setAuthorizationToken",setFiles:"setFiles",setSearchInput:"setSearchInput","setСurrentFolder":"setСurrentFolder"}),getFileExtention(e){return e.split(".").pop()},async downloadFolders(){const{data:e}=await x().get(`${this.baseUrl}/folders`,{headers:{Authorization:this.authorizationToken}});this.setFolders(e.data)},async downloadFiles(e=-1){const t={folder_id:e},{data:a}=await x().get("http://markwebdev.ru/api/v1/files",{params:t,headers:{Authorization:this.authorizationToken}});this.setFiles(a.data)}},mounted(){const e=localStorage.getItem("authorizationToken");e&&this.setAuthorizationToken("Bearer "+e)}},F={name:"App",components:{ModalForm:Z},mixins:[D],data:()=>({modalAuth:!1,modalRegister:!1,modalState:!1,rules:{required:e=>!!e||"Required.",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Неверный формат email."}},folderName:"",userEmail:"",userPassword:"",userName:"",typeAuth:"",authError:!1,searchInputLoc:"",folderSize:0}),computed:{registerModal(){return"register"===this.typeAuth}},methods:{...(0,b.OI)({setAuthorizationToken:"setAuthorizationToken"}),async addFolder(){this.folderName&&(await x().post(`${this.baseUrl}/folders`,{name:this.folderName},{headers:{Authorization:this.authorizationToken,"Content-Type":"multipart/form-data"}}),this.folderName="",this.modalState=!1,this.downloadFolders())},modalChange(e){this.authModal=e},modalAuthDefind(e){this.modalAuth=!0,this.typeAuth=e},async auth(){const e=this.baseUrl+"/auth/"+this.typeAuth,t={email:this.userEmail,password:this.userPassword};"register"===this.typeAuth&&(t.name=this.userName);try{const a=await x().post(e,{},{params:t,headers:{Authorization:this.authorizationToken}});200===a.status&&(this.setAuthorizationToken(a.data.data.token),localStorage.setItem("authorizationToken",this.authorizationToken),this.modalAuth=!1,this.authError=!1)}catch(a){422===a.response.status&&(this.authError=!0)}},async logout(){await x().post(`${this.baseUrl}/auth/logout`,{},{headers:{Authorization:this.authorizationToken}}),localStorage.removeItem("authorizationToken"),this.setAuthorizationToken("")}},watch:{modalAuth(){this.userEmail="",this.userPassword="",this.userName="",this.authError=!1},searchInputLoc(e){this.setSearchInput(e)},files(e){if(this.folderSize=e.reduce(((e,t)=>e+t.size),0)/1e3,-1===this.currentFolder.id){const e=this.folders.reduce(((e,t)=>e+t.size),0)/1e3;this.folderSize+=e}this.folderSize=Math.round(this.folderSize)}}},I=F,P=(0,B.Z)(I,f,m,!1,null,null,null),z=P.exports,y=a(8345),E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-wrap justify-md-space-between"},[t("file-add"),e._l(e.filtredFolders,(function(e){return t("folder-item",{key:e.id,staticClass:"mt-4",attrs:{folder:e}})})),e._l(e.filtredFiles,(function(e){return t("file-item",{key:e.id,staticClass:"mt-4",attrs:{file:e}})}))],2)},L=[],H=a(8224),M=a(2082),S=function(){var e=this,t=e._self._c;return t(H.Z,{scopedSlots:e._u([{key:"default",fn:function({hover:i}){return[t(l.Z,{staticClass:"d-flex flex-column py-6",class:{"card-hover":i},attrs:{width:"240"},on:{click:e.goToFolder}},[t(u.Z,{staticClass:"align-self-center",attrs:{"max-height":"128","max-width":"128",src:a(8874)}}),t(M.Z,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:i}){return[t(r.EB,e._g(e._b({staticClass:"pb-0 folder-name"},"v-card-title",i,!1),a),[e._v(e._s(e.folderName))])]}}],null,!0)},[t("span",[e._v(e._s(e.folderName))])]),t(r.ZB,{staticClass:"py-0"},[e._v(e._s(e.folderDate)+" г.")]),t(r.ZB,{staticClass:"py-0"},[e._v(" "+e._s(e.folder.size/1e3)+" Кб")])],1)]}}])})},O=[],X={props:{folder:{require:!0}},mixins:[D],data(){return{}},computed:{folderName(){return this.folder.name.split(" ").join("")},folderDate(){const e=new Date(this.folder.created_at),t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+e.getMonth():e.getMonth(),i=e.getFullYear(),s=`${t}.${a}.${i}`;return s}},methods:{goToFolder(){this.setСurrentFolder({id:this.folder.id,name:this.folder.name}),this.setFiles([]),this.$router.push({name:"folder",params:{id:this.folder.id}})}}},T=X,G=(0,B.Z)(T,S,O,!1,null,"16ed8e28",null),U=G.exports,R=a(5808),j=a(4525),N=a(1440),J=a(4568),q=function(){var e=this,t=e._self._c;return t(H.Z,{scopedSlots:e._u([{key:"default",fn:function({hover:i}){return[t(l.Z,{staticClass:"d-flex flex-column py-6",class:{"card-hover":i},attrs:{width:"240"}},[t(u.Z,{staticClass:"align-self-center",attrs:{"max-height":"92","max-width":"92",src:a(3641)}}),t("h2",{staticClass:"text-center"},[e._v("."+e._s(e.fileExtention))]),t(M.Z,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:i}){return[t(r.EB,e._g(e._b({staticClass:"pb-0 file-name"},"v-card-title",i,!1),a),[e._v(e._s(e.fileName))])]}}],null,!0)},[t("span",[e._v(e._s(e.fileName))])]),t("div",{staticClass:"d-flex justify-space-between align-center"},[t("div",[t(r.ZB,{staticClass:"py-0"},[e._v(e._s(e.fileDate)+" г.")]),t(r.ZB,{staticClass:"py-0"},[e._v(" "+e._s(e.file.size/1e3)+" Кб")])],1),t(J.Z,{attrs:{bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:i}){return[t(o.Z,e._g(e._b({attrs:{icon:""},on:{click:function(t){return e.getFileLink()}}},"v-btn",i,!1),a),[t(c.Z,[e._v("more_vert")])],1)]}}],null,!0)},[t(R.Z,[t(j.Z,[t(N.V9,[t("a",{staticClass:"download-file",attrs:{href:e.fileLink}},[e._v("Загрузить Файл")])])],1),t(j.Z,{on:{click:e.modalRenameOpen}},[t(N.V9,[e._v("Переименовать Файл")])],1),t(j.Z,{on:{click:e.getPublicLink}},[t(N.V9,[e._v("Получить ссылку для скачивания")])],1),t(j.Z,{on:{click:e.deleteFile}},[t(N.V9,{staticClass:"red--text"},[e._v("Удалить Файл")])],1)],1)],1),e.modalRenameFile?t(n.Z,{attrs:{"max-width":"400"},model:{value:e.modalRenameFile,callback:function(t){e.modalRenameFile=t},expression:"modalRenameFile"}},[t(l.Z,{staticClass:"d-flex flex-column"},[t(r.EB,[e._v("Переименовать файл")]),t(A.Z,{staticClass:"mx-8",attrs:{label:"Имя"},model:{value:e.newFileName,callback:function(t){e.newFileName=t},expression:"newFileName"}}),t(o.Z,{staticClass:"ml-auto mr-8 mb-8",attrs:{color:"primary"},on:{click:e.fileRename}},[e._v("Сохранить")])],1)],1):e._e(),t(n.Z,{model:{value:e.modalPublicLink,callback:function(t){e.modalPublicLink=t},expression:"modalPublicLink"}},[t(l.Z,{staticClass:"d-flex flex-column"},[t(r.EB,[e._v("Ссылка для скачивания файла:")]),t(A.Z,{staticClass:"mx-8",attrs:{value:e.fileLink,solo:"",readonly:""}})],1)],1)],1)],1)]}}])})},K=[],Y={props:{file:{require:!0}},mixins:[D],data(){return{fileExtention:"",modalRenameFile:!1,newFileName:"",fileLink:"",modalPublicLink:!1}},computed:{fileName(){return this.file.name.split(" ").join("")},fileDate(){const e=new Date(this.file.created_at),t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+e.getMonth():e.getMonth(),i=e.getFullYear(),s=`${t}.${a}.${i}`;return s}},watch:{modalRenameFile(e){e||(this.newFileName="")}},methods:{async deleteFile(){await x()["delete"](`${this.baseUrl}/files/${this.file.id}`,{headers:{Authorization:this.authorizationToken}}),this.downloadFiles(this.currentFolder.id)},async fileRename(){this.newFileName&&(await x().patch(`${this.baseUrl}/files/${this.file.id}`,{},{params:{name:this.newFileName},headers:{Authorization:this.authorizationToken}}),this.modalRenameFile=!1,this.downloadFiles(this.currentFolder.id))},async getFileLink(){if(this.fileLink)return;const e=await x().post(`${this.baseUrl}/files/${this.file.id}/publish`,{},{headers:{Authorization:this.authorizationToken}});this.fileLink=e.data.data.link},modalRenameOpen(){this.modalRenameFile=!0,this.newFileName=this.file.name},getPublicLink(){this.modalPublicLink=!0}},mounted(){this.fileExtention=this.getFileExtention(this.file.full_name)}},V=Y,Q=(0,B.Z)(V,q,K,!1,null,"181fd435",null),W=Q.exports,_=a(8360),$=a(3305),ee=a(8718),te=function(){var e=this,t=e._self._c;return t(H.Z,{scopedSlots:e._u([{key:"default",fn:function({hover:i}){return[t("label",{staticClass:"label d-flex flex-column mt-4",attrs:{for:"myfile",id:"uploadForm"}},[t(l.Z,{staticClass:"d-flex flex-column py-6",class:{"card-hover":i},attrs:{"min-width":"240","min-height":"268"}},[t("input",{ref:"inputFile",staticClass:"my",attrs:{type:"file",id:"myfile",name:"myfile"},on:{change:e.fileuploadWindow}}),t(u.Z,{staticClass:"align-self-center mt-4",attrs:{"max-height":"92","max-width":"92",src:a(8859)}}),t(ee.Z),t("h2",{staticClass:"text-center"},[e._v("Добавить файл")]),e.modalFile?t(n.Z,{attrs:{"max-width":"400"},model:{value:e.modalFile,callback:function(t){e.modalFile=t},expression:"modalFile"}},[t(l.Z,{staticClass:"d-flex flex-column"},[t(r.EB,[e._v("Имя файла: "+e._s(e.file.name))]),t(r.ZB,[e._v("Тип файла: "+e._s(e.file.type))]),t(r.ZB,[e._v("Размер файла: "+e._s(e.file.size/1e3)+" Кб.")]),t("div",{staticClass:"d-flex"},[t(r.ZB,{staticClass:"pt-0"},[t("h3",[e._v(" Файл удалится после: "),t("span",{staticClass:"font-weight-bold"},[t("br"),e._v(e._s(e.fileDeleteDate))])])]),t(o.Z,{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.setDateDeleteFile}},[e._v(e._s(e.pickerDateOpen?"Удалить":"Изменить"))])],1),e.pickerDateOpen?t(_.Z,{staticClass:"mx-4",attrs:{min:e.dateNow},model:{value:e.pickerDate,callback:function(t){e.pickerDate=t},expression:"pickerDate"}}):e._e(),e.fileLoading?t($.Z,{staticClass:"mx-4 my-4 align-self-center",attrs:{size:50,color:"primary",indeterminate:""}}):t(o.Z,{staticClass:"mx-4 my-4",attrs:{color:"primary"},on:{click:e.fileupload}},[e._v("Добавить файл")])],1)],1):e._e()],1)],1)]}}])})},ae=[],ie={props:{folderID:{require:!1}},mixins:[D],data(){return{modalFile:!1,file:"",pickerDate:"",pickerDateOpen:!1,dateNow:0,fileLoading:!1}},computed:{fileDeleteDate(){return this.pickerDate?this.pickerDate:"Никогда"},fileDeleteDateChange(){return this.pickerDate?"":"Никогда"}},watch:{modalFile(e){e||(this.pickerDate="",this.pickerDateOpen=!1,this.fileLoading=!1)}},methods:{fileuploadWindow(e){const t=this.$refs.inputFile.files[0],a=this.getFileExtention(t.name);"php"!==a?t.size>2e7?alert("Загрузка файлов больше 20 Мб. запрещена"):(this.file=t,this.modalFile=!0,console.log("file ",t)):alert("Загрузка файлов php запрещена")},async fileupload(){const e=new FormData;e.append("file",this.file),this.pickerDate&&e.append("expires_at",this.pickerDate),-1!==this.currentFolder.id&&e.append("folder_id",this.currentFolder.id),this.fileLoading=!0;try{await x().post(`${this.baseUrl}/files`,e,{headers:{Authorization:this.authorizationToken,"Content-Type":"multipart/form-data"}}),this.file="",this.modalFile=!1,this.pickerDate="",this.pickerDateOpen=!1,this.downloadFiles(this.currentFolder.id)}catch(t){}this.fileLoading=!1},setDateDeleteFile(){if(this.pickerDateOpen)this.pickerDate="",this.pickerDateOpen=!1;else{const e=new Date;this.dateNow=e.toISOString(),this.pickerDateOpen=!0}}}},se=ie,oe=(0,B.Z)(se,te,ae,!1,null,"2683b0d6",null),le=oe.exports,re={name:"Home",components:{FolderItem:U,FileItem:W,FileAdd:le},mixins:[D],data(){return{}},computed:{},methods:{},mounted(){this.setСurrentFolder({id:-1,name:"Корневая папка"}),this.downloadFolders(),this.downloadFiles()}},ne=re,de=(0,B.Z)(ne,E,L,!1,null,null,null),ce=de.exports,ue=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-wrap justify-md-space-between"},[t("file-add"),e._l(e.filtredFiles,(function(e){return t("file-item",{key:e.id,staticClass:"mt-4",attrs:{file:e}})}))],2)},he=[],Ae={mixins:[D],components:{FileItem:W,FileAdd:le},data(){return{}},mounted(){this.downloadFiles(this.$route.params.id)}},fe=Ae,me=(0,B.Z)(fe,ue,he,!1,null,"72b28bde",null),pe=me.exports;i.ZP.use(y.ZP);const ge=[{path:"/",name:"home",component:ce},{path:"/folder/:id",name:"folder",component:pe}],ve=new y.ZP({mode:"history",base:"/docksmanager/",routes:ge});var we=ve;i.ZP.use(b.ZP);var Be=new b.ZP.Store({state:{baseUrl:"http://markwebdev.ru/api/v1",authorizationToken:"",folders:[],files:[],currentFolder:{id:-1,name:""},searchInput:""},getters:{filtredFiles(e){return e.files.filter((t=>t.full_name.toLowerCase().includes(e.searchInput.toLowerCase())))},filtredFolders(e){return e.folders.filter((t=>t.name.toLowerCase().includes(e.searchInput.toLowerCase())))}},mutations:{setFolders(e,t){e.folders=t},"setСurrentFolder"(e,t){e.currentFolder=t},setFiles(e,t){e.files=t},setAuthorizationToken(e,t){e.authorizationToken=t},setSearchInput(e,t){e.searchInput=t}},actions:{},modules:{}}),Ce=a(1705);i.ZP.use(Ce.Z);var Ze=new Ce.Z({icons:{iconfont:"md"}});i.ZP.config.productionTip=!1,new i.ZP({router:we,store:Be,vuetify:Ze,render:e=>e(z)}).$mount("#app")},3641:function(e){e.exports="data:image/png;base64,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"},8874:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADyQAAA8kB9RSRGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQjSURBVHic7dpPaJt1HMfx9/Mkaxc7ZaCgFykTL1sUPGy3CIJMBG+ezGloRMSdRCqePHgRcQcZKDoX8CCEHb152bCYHhQGOpYOLxP0Isz5Z22X2PTp42HtaEc7kv7JN8nn8zr2CfRTnnd/TZMkeZ5jutLoARbLAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIC44v0utpvVaeAxIBnMnE1WgKulSqMT8L1lJPe+G9huVqeAd4C3gcMRozboAHPA16VK46vgLWNpUwDtZvUh4CJwPGzR9mZKlcaZ6BHj5t7nAHWG8+YDfNxuVk9Hjxg3d0+AdrP6JPALw/3EsAtUSpXGj9FD+pW1aseA54GpoAm3gZ+By4VyfXH9ixsDeA/4MGZbX34FnilVGreih/Qia9XeBd4CpqO3rFkAZoBzhXI93/jbXgka1K8jwLnoEb3IWrXTwEcMz80HeBD4HPgE1k6AdrOaAjeJf9bfj9dLlUY9esR2slbtJeAboBC9ZRs58ML6CfAUo3XzAc62m9Wj0SO2krVqBeAsw3vz4c5rO2+uBzAqx/9GDwAX2s3qweghW3gZeCJ6RA+OrwfwbOiMnXsa+KzdrEa8Unk/M9EDejQ96gEAvAp8OiwRZK3ac8CJ6B29Sm5//8oR4HovD145fIL/Hn9jnyeNtkN/fsGBznz0jJ6ljFCtw67Q/YMDnWvRM/qSAo9GjxgXBxcucue/q9GRAg9HjxgHafYvE+3L0TP6lgKPRI8YB5OLs5Bn0TP65gD2QLLaYXJpLnrGjvhPwB6YXJojWR3NDy75BNilNLvF5OJ30TN2zCfALiT5ModufkmajcQ701sq4hNgR5LVBab+vkBh+bfoKbtSTCeKpZ4fzD/kSz/s556hV8j+otiZp7j8O6P2P/9WkpWrr43+T2E7Nsyf/7MBcADiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4lLy/Eb0CAuS5zdSkuRS9A4LkiSXUmA2eoeFmU2B88CV6CU2cFeA82mhXO8Cp4Bu8CAbnC5wqlCud1OAQrn+E3ASuB46ywbhOnBy7Z6T5Hl+90rWqk0B7wMvAseAYsRC23MrwDzwLfBBoVxfWr+wKYCNslatBBwFJgax0PbNMnCtUK63t7q4bQCmwa8EinMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIO5/Lx7PM/J8XQUAAAAASUVORK5CYII="},8859:function(e){e.exports="data:image/png;base64,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"}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,o){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],o=e[c][2];for(var r=!0,n=0;n<i.length;n++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](i[n])}))?i.splice(n--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,l=i[0],r=i[1],n=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(n)var c=n(a)}for(t&&t(i);d<l.length;d++)o=l[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},i=self["webpackChunkdocksmanager"]=self["webpackChunkdocksmanager"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(6759)}));i=a.O(i)})();
//# sourceMappingURL=app.42421504.js.map