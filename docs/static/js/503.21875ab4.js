"use strict";(self["webpackChunkpsychology"]=self["webpackChunkpsychology"]||[]).push([[503],{4914:function(t,s,e){e.r(s),e.d(s,{default:function(){return y}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"psychology-item"},[s("div",{staticClass:"psychology-item-header"},[s("div",{staticClass:"psychology-item-header-title"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"psychology-item-header-info"},[s("div",{staticClass:"psychology-item-header-info-author"},[t._v(t._s(t.item.author))]),s("div",{staticClass:"psychology-item-header-info-time"},[t._v(t._s(t.item.time))])])]),s("div",{staticClass:"psychology-item-content",domProps:{innerHTML:t._s(t.msg)}}),s("div",{staticClass:"psychology-item-footer"},[s("img",{staticClass:"psychology-item-footer-img",attrs:{src:e(5150)(`./illness_${t.fileNumber}.png`),alt:""}})])])},i=[],l=e(6067),c={name:"PsychologyItem",data(){return{}},props:{item:{type:Object,default:{}}},computed:{msg(){return this.item.psychology.map((t=>`<p class="psychology-item-content-item">${t}</p><br/>`)).join("")},fileNumber(){return(0,l["default"])()}}},n=c,a=e(1001),r=(0,a.Z)(n,o,i,!1,null,"7795e2d4",null),y=r.exports},9503:function(t,s,e){e.r(s),e.d(s,{default:function(){return h}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"psychology-knowledge"},t._l(t.psychologyList,(function(t,e){return s("PsychologyItem",{key:e,staticClass:"psychology-knowledge-item",attrs:{item:t}})})),1)},i=[],l=e(4914),c=e(3822),n={components:{PsychologyItem:l["default"]},mounted(){this.$store.state.psychology.psychologyList.length||this.$store.dispatch("getPsychologyList")},computed:{...(0,c.rn)({psychologyList:t=>t.psychology.psychologyList})}},a=n,r=e(1001),y=(0,r.Z)(a,o,i,!1,null,"6ad47a78",null),h=y.exports},6067:function(t,s,e){function o(){try{const t=e(5416);return t.keys().length}catch(t){}}function i(){return Math.floor(o()*Math.random())+1}e.r(s),e.d(s,{default:function(){return i}})}}]);
//# sourceMappingURL=503.21875ab4.js.map