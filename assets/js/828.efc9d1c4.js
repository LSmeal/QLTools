"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[828],{3798:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(6252);const i=e=>((0,a.dD)("data-v-326b083d"),e=e(),(0,a.Cn)(),e),d={class:"mdui-m-t-5",id:"footer"},o={class:"mdui-p-a-5 mdui-typo mdui-container"},l={class:"mdui-col mdui-text"},c=i((()=>(0,a._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),s={href:"https://github.com/nuanxinqing123/QLTools"},r=(0,a.Uk)("青龙 Tools"),m=i((()=>(0,a._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1)));function u(e,t,n,i,u,g){const v=(0,a.up)("st");return(0,a.wg)(),(0,a.iD)("footer",d,[(0,a._)("div",o,[(0,a._)("div",l,[(0,a._)("p",null,[c,(0,a._)("a",s,[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[r])),_:1})])]),m])])])}var g={name:"FooterCom"},v=n(3744);const p=(0,v.Z)(g,[["render",u],["__scopeId","data-v-326b083d"]]);var y=p},5388:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(6252);const i={class:"mdui-toolbar"},d=(0,a._)("a",{href:"/#/",class:"mdui-btn mdui-btn-icon"},[(0,a._)("i",{class:"mdui-icon material-icons"},"account_balance_wallet")],-1),o=(0,a._)("span",{class:"mdui-typo-title"},"青龙Tools",-1),l=(0,a._)("div",{class:"mdui-toolbar-spacer"},null,-1),c=(0,a._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon"},[(0,a._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),s=(0,a._)("i",{class:"mdui-icon material-icons"},"center_focus_strong",-1),r=[s],m=(0,a._)("i",{class:"mdui-icon material-icons"},"center_focus_weak",-1),u=[m],g=(0,a._)("i",{class:"mdui-icon material-icons"},"account_circle",-1),v=[g],p=(0,a._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),y=[p];function _(e,t,n,s,m,g){return(0,a.wg)(),(0,a.iD)("div",i,[d,o,l,c,(0,a._)("a",{"mdui-tooltip":"{content: '登录'}",onClick:t[0]||(t[0]=e=>this.Login()),id:"Login",class:"mdui-btn mdui-btn-icon"},r),(0,a._)("a",{"mdui-tooltip":"{content: '注册'}",onClick:t[1]||(t[1]=e=>this.Register()),id:"Register",class:"mdui-btn mdui-btn-icon"},u),(0,a._)("a",{"mdui-tooltip":"{content: '管理面板'}",onClick:t[2]||(t[2]=e=>this.GoAdmin()),id:"Admin",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},v),(0,a._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:t[3]||(t[3]=e=>this.LogOut()),id:"LogOut",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},y)])}var h=n(9669),E=n.n(h),x={name:"HeaderCom",methods:{CheckLogin(){let e=localStorage.getItem("Bearer");if(null!==e&&""!==e){let t={token:e};E().post("/v1/api/check/token",t).then((e=>{!0===e.data.data?(document.getElementById("Admin").style.display="inline",document.getElementById("Login").style.display="none",document.getElementById("Register").style.display="none",document.getElementById("LogOut").style.display="inline"):localStorage.clear()}))}},LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/#/","_self"),location.reload()},GoAdmin(){window.open("/#/admin","_self"),location.reload()},Register(){window.open("/#/register","_self"),location.reload()},Login(){window.open("/#/login","_self"),location.reload()}},mounted(){this.CheckLogin()}},I=n(3744);const D=(0,I.Z)(x,[["render",_]]);var b=D},8828:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(6252);function i(e,t,n,i,d,o){const l=(0,a.up)("HeaderCom"),c=(0,a.up)("NoticeCom"),s=(0,a.up)("FooterCom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a.Wm)(l)]),(0,a._)("div",null,[(0,a.Wm)(c)]),(0,a._)("div",null,[(0,a.Wm)(s)])],64)}var d=n(3577),o=n(9963);const l=e=>((0,a.dD)("data-v-fe3d9706"),e=e(),(0,a.Cn)(),e),c={id:"BodyCon"},s=l((()=>(0,a._)("div",{class:"box",id:"box_notice"},[(0,a._)("div",null,[(0,a._)("p",{style:{"padding-bottom":"10px"}},"网站公告"),(0,a._)("hr"),(0,a._)("div",{class:"notice_data",id:"notice_data"},[(0,a._)("strong",null,[(0,a._)("span",{style:{color:"#E53333","text-align":"center"}},"本工具仅用于学习和调试使用，禁止用于任何违法犯罪行为")]),(0,a._)("br")])])],-1))),r={class:"box",style:{"margin-top":"35px"}},m=l((()=>(0,a._)("p",{style:{"padding-bottom":"10px"}},"变量提交",-1))),u=l((()=>(0,a._)("hr",null,null,-1))),g={id:"envSelect"},v={style:{width:"100%"}},p={style:{"margin-top":"8px"}},y=(0,a.Uk)(" 服务器： "),_=["value"],h={style:{"margin-top":"8px"}},E=(0,a.Uk)(" 变量组： "),x=["value","selected"],I=l((()=>(0,a._)("div",{style:{"margin-top":"8px","font-size":"16px"}},[(0,a.Uk)(" 剩余位置："),(0,a._)("span",{id:"num"},"0")],-1))),D={class:"envInput"},b={class:"mdui-textfield"},k={class:"mdui-textfield"},B=l((()=>(0,a._)("div",{style:{"text-align":"center","padding-top":"20px"}},[(0,a._)("button",{class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue-50",style:{width:"200px"},id:"LoginBtn"},"提  交")],-1))),T=l((()=>(0,a._)("div",{id:"SendOK",class:"mdui-dialog",style:{display:"none"}},[(0,a._)("div",{class:"mdui-dialog-title",id:"dialog-title"},"Success"),(0,a._)("div",{class:"mdui-dialog-content",id:"dialog-content"},"您已提交成功"),(0,a._)("div",{class:"mdui-dialog-actions"},[(0,a._)("button",{class:"mdui-btn mdui-ripple","mdui-dialog-close":""},"确认")])],-1)));function f(e,t,n,i,l,f){return(0,a.wg)(),(0,a.iD)("div",c,[s,(0,a._)("div",r,[(0,a._)("div",null,[m,u,(0,a._)("div",g,[(0,a._)("div",v,[(0,a._)("div",p,[y,(0,a._)("select",{class:"mdui-select",onChange:t[0]||(t[0]=e=>f.changeEnvData(e)),id:"server"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.InitIndexData["serverData"],(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e["PanelName"]},(0,d.zw)(e["PanelName"]),9,_)))),128))],32)]),(0,a._)("div",h,[E,(0,a._)("select",{class:"mdui-select",onChange:t[1]||(t[1]=e=>f.changeNum(e)),id:"env"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.EnvData,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e["name"],selected:e.selected},(0,d.zw)(e["name"]),9,x)))),128))],32)]),I])]),(0,a._)("div",D,[(0,a._)("form",{onSubmit:t[4]||(t[4]=(0,o.iM)(((...e)=>f.POSTEnvAdd&&f.POSTEnvAdd(...e)),["prevent"]))},[(0,a._)("div",b,[(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"Cookie","onUpdate:modelValue":t[2]||(t[2]=e=>l.EnvAdd.envData=e)},null,512),[[o.nr,l.EnvAdd.envData]])]),(0,a._)("div",k,[(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"备注（可空）","onUpdate:modelValue":t[3]||(t[3]=e=>l.EnvAdd.envRemarks=e)},null,512),[[o.nr,l.EnvAdd.envRemarks]])]),B],32)])])]),T])}var w=n(9669),C=n.n(w),A=n(4493),S={name:"NoticeCom",data(){return{InitIndexData:[],EnvData:[{selected:!1}],EnvAdd:{serverID:0,envName:"",envData:"",envRemarks:""}}},methods:{GetIndexData(){C().get("/v1/api/index/data").then((e=>{this.InitIndexData=e.data.data,this.EnvData=this.InitIndexData["serverData"][0]["envData"],this.EnvAdd.serverID=this.InitIndexData["serverData"][0]["ID"],this.EnvAdd.envName=this.InitIndexData["serverData"][0]["envData"][0]["name"],this.EnvData[0].selected=!0,document.getElementById("num").innerText=this.InitIndexData["serverData"][0]["envData"][0]["quantity"]}))},GetNotice(){C().get("/v1/api/set/setting?key=notice").then((e=>{document.getElementById("notice_data").innerHTML=e.data.data["value"]}))},changeEnvData(e){let t=e.target.selectedIndex;this.EnvData=this.InitIndexData["serverData"][t]["envData"],this.EnvAdd.serverID=this.InitIndexData["serverData"][t]["ID"],this.EnvAdd.envName=this.InitIndexData["serverData"][t]["envData"][0]["name"],this.EnvData[0].selected=!0,document.getElementById("num").innerText=this.InitIndexData["serverData"][t]["envData"][0]["quantity"]},changeNum(e){let t=e.target.selectedIndex;document.getElementById("num").innerText=this.EnvData[t]["quantity"],this.EnvAdd.envName=this.EnvData[t]["name"]},POSTEnvAdd(){let e=new A.Z.Dialog("#SendOK");C().post("/v1/api/env/add",this.EnvAdd).then((t=>{switch(""!==t.data){case 2e3===t.data.code:document.getElementById("dialog-title").innerText="Success",document.getElementById("dialog-content").innerText="您已提交成功",e.toggle();break;case 5020===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="限额已满，禁止提交",e.toggle();break;case 5019===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="上传内容不符合规定, 请检查后再提交",e.toggle();break;case 5015===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="提交服务器或变量名不在白名单",e.toggle();break;case 5016===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="发生一点小意外，请重新提交",e.toggle();break;case 5024===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="禁止提交重复数据",e.toggle();break;case 5025===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="变量已被管理员禁止提交",e.toggle();break;case 5026===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="今日提交已到达上限",e.toggle();break;case 5028===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText=t.data.msg,e.toggle();break;case 5029===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="提交数据已被管理员拒绝，原因："+t.data.msg,e.toggle();break;case 5003===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="服务繁忙,请稍后重试",e.toggle();break;case 5002===t.data.code:""===t.data.data?(document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="服务繁忙,请稍后重试",e.toggle()):(document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText=JSON.parse(t.data.msg),e.toggle());break}})).catch((e=>{A.Z.snackbar({message:e,position:"right-top"})}))},changeStyle(){let e=document.querySelector("#BodyCon");e.style.minHeight=window.innerHeight-document.body.clientHeight+e.clientHeight+"px",A.Z.mutation()}},mounted(){this.GetIndexData(),this.GetNotice(),this.changeStyle()}},N=n(3744);const L=(0,N.Z)(S,[["render",f],["__scopeId","data-v-fe3d9706"]]);var H=L,Z=n(5388),O=n(3798),q={name:"IndexView",components:{HeaderCom:Z.Z,NoticeCom:H,FooterCom:O.Z}};const R=(0,N.Z)(q,[["render",i]]);var G=R}}]);
//# sourceMappingURL=828.efc9d1c4.js.map