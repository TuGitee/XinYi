"use strict";(self["webpackChunkpsychology"]=self["webpackChunkpsychology"]||[]).push([[962],{86:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"illness-item",class:t.index%2?"even":"odd"},[s("div",{staticClass:"illness-item-left"},[s("img",{staticClass:"illness-item-left-image",attrs:{src:e(5150)(`./illness_${t.random}.png`),alt:""}})]),s("div",{staticClass:"illness-item-right"},[s("div",{staticClass:"illness-item-right-title"},[t._v(t._s(t.name))]),s("div",{staticClass:"illness-item-right-content",domProps:{innerHTML:t._s(t.msg)}})])])},l=[],n={data(){return{}},props:{name:{type:String,default:"undefined"},index:{type:Number},item:{type:Object|String|Array,default:{}}},computed:{msg(){const{item:t,name:s}=this;switch(typeof t){case"object":return Array.isArray(t)?`<ul class="illness-item-right-content-list ${-1!==s.indexOf("诊断")?"analysis":""}">`+t.map((t=>"string"===typeof t?`<li class="illness-item-right-content-list-item array">${t.replaceAll("\n","<br/>")}</li>`:Array.isArray(t)?`<div>${'<ul class="illness-item-right-content-list-children">'+t.map((t=>`<li class="illness-item-right-content-list-children-item">${t}</li>`)).join("")+"</ul>"}</div>`:void 0)).join("")+"</ul>":'<ul class="illness-item-right-content-list">'+Object.keys(t).map((s=>`<li class="illness-item-right-content-list-item object"><b class="illness-item-right-content-list-item-title">${s}</b>&nbsp;&nbsp;${t[s]}</li>`)).join("")+"</ul>";case"string":return t;default:return"暂无数据"}},random(){return Math.floor(Math.random()*this.getLength())+1}},methods:{getLength(){try{const t=e(5416);return t.keys().length}catch(t){}}}},a=n,r=e(1001),o=(0,r.Z)(a,i,l,!1,null,"062d62de",null),c=o.exports},8962:function(t,s,e){e.r(s),e.d(s,{default:function(){return m}});var i=function(){var t=this,s=t._self._c;return s("div",{ref:"scroll",staticClass:"illness-detail"},[s("button",{staticClass:"illness-detail-back",on:{click:t.goBack}},[t._v("返回")]),s("button",{staticClass:"illness-detail-bottom bottom",on:{click:t.goBottom}},[t._v(" 点击达到底部 ")]),s("h2",{staticClass:"illness-detail-title"},[t._v(t._s(t.active.name))]),t._l(t.data,(function(t,e,i){return s("IllnessItem",{key:e,staticClass:"illness-detail-item",attrs:{index:i,item:t,name:e}})})),s("div",{staticClass:"illness-detail-footer"},[s("router-link",{staticClass:"illness-detail-footer-link",attrs:{to:{name:"IllnessDetail",params:{illnessId:t.before.id}},replace:""}},[t._v("上一个疾病："+t._s(t.before.name))]),s("router-link",{staticClass:"illness-detail-footer-link",attrs:{to:{name:"IllnessDetail",params:{illnessId:t.after.id}},replace:""}},[t._v("下一个疾病："+t._s(t.after.name))]),s("a",{staticClass:"illness-detail-footer-link back",on:{click:t.goBack}},[t._v("返回上一页")])],1),t.isShow?s("CardItem",{staticClass:"warn",attrs:{item:t.introduction},on:{mask:t.handleShow}}):t._e()],2)},l=[],n=e(86),a=e(7097),r=e(3822),o={name:"IllnessDetail",components:{IllnessItem:n["default"],CardItem:a["default"]},methods:{goBack(){this.$router.go(-1)},goBottom(){window.scrollTo({top:this.$refs.scroll.offsetHeight,behavior:"smooth"})},async getItem(){0===this.illnessList.length&&await this.$store.dispatch("getIllnessList");const t=this.illnessList.findIndex((t=>t.id===this.$route.params.illnessId));this.active=this.illnessList[t],this.before=this.illnessList[t-1<0?this.illnessList.length-1:t-1],this.after=this.illnessList[(t+1)%this.illnessList.length];const s=JSON.parse(localStorage.getItem("historyList"))||[];if(s.find((t=>t.id===this.active.id))){const t=s.findIndex((t=>t.id===this.active.id));s.splice(t,1)}s.length>5&&s.pop();const e={id:this.active.id,name:this.active.name,introduction:this.active["基本定义"]};localStorage.setItem("historyList",JSON.stringify([e,...s]))},handleShow(){this.isShow=!1}},data(){return{active:{},before:{},after:{},introduction:{title:"注意",content:["请滑动左侧或点击页面回退返回上一页！","返回上一页按钮在页面底部！"]},isShow:!0}},mounted(){this.getItem()},computed:{data(){const{name:t,id:s,...e}=this.active;return e},...(0,r.Se)({illnessList:"illnessList"})}},c=o,d=e(1001),h=(0,d.Z)(c,i,l,!1,null,"2b78e2e7",null),m=h.exports}}]);
//# sourceMappingURL=962.5a66c980.js.map