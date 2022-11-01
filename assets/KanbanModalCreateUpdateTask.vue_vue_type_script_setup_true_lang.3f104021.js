import{b as re,a as Yt,K as Zt}from"./KanbanButton.39b4a9b1.js";import{a as m,o as b,c as x,e as _,d as lt,j as Sr,t as V,k as $r,B as jr,l as Or,n as Er,m as Ir,p as Vr,i as ct,x as Br,h as Mr,r as Kr,y as Dr,b as D,F as Qt,q as te,g as Pr,w as Ur}from"./index.a00f9cf5.js";var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};class ee{static getAllBoards(){return m.get("/api/boards")}static createBoard(a){return m.post("/api/boards/create",a)}static getBoard(a){return m.get(`/api/boards/${a}`)}static updateBoard(a,o){return m.put(`/api/boards/${a}`,o)}static deleteColumn(a,o){return m.delete(`/api/boards/${a}/columns/${o}`)}static addNewColumn(a,o){return m.post(`/api/boards/${a}/columns`,{name:o})}static addTask(a,o){return m.post(`/api/boards/${a}/tasks`,o)}static updateTask(a,o,s){return m.put(`/api/boards/${a}/tasks/${o}`,s)}static moveTask(a,o,s){return m.post(`api/boards/${a}/tasks/${o}`,{columnId:s})}static updateSubtask(a,o){return m.put(`/api/boards/tasks/${a}`,{subtasks:o})}}var it={exports:{}};(function(l,a){var o=200,s="__lodash_hash_undefined__",w=9007199254740991,g="[object Arguments]",y="[object Array]",h="[object Boolean]",u="[object Date]",B="[object Error]",$="[object Function]",ut="[object GeneratorFunction]",P="[object Map]",dt="[object Number]",z="[object Object]",ft="[object Promise]",pt="[object RegExp]",U="[object Set]",ht="[object String]",bt="[object Symbol]",J="[object WeakMap]",_t="[object ArrayBuffer]",L="[object DataView]",gt="[object Float32Array]",yt="[object Float64Array]",mt="[object Int8Array]",xt="[object Int16Array]",wt="[object Int32Array]",vt="[object Uint8Array]",kt="[object Uint8ClampedArray]",Tt="[object Uint16Array]",Ct="[object Uint32Array]",ne=/[\\^$.*+?()[\]{}|]/g,ae=/\w*$/,oe=/^\[object .+?Constructor\]$/,se=/^(?:0|[1-9]\d*)$/,i={};i[g]=i[y]=i[_t]=i[L]=i[h]=i[u]=i[gt]=i[yt]=i[mt]=i[xt]=i[wt]=i[P]=i[dt]=i[z]=i[pt]=i[U]=i[ht]=i[bt]=i[vt]=i[kt]=i[Tt]=i[Ct]=!0,i[B]=i[$]=i[J]=!1;var ie=typeof q=="object"&&q&&q.Object===Object&&q,le=typeof self=="object"&&self&&self.Object===Object&&self,v=ie||le||Function("return this")(),At=a&&!a.nodeType&&a,St=At&&!0&&l&&!l.nodeType&&l,ce=St&&St.exports===At;function ue(t,e){return t.set(e[0],e[1]),t}function de(t,e){return t.add(e),t}function fe(t,e){for(var r=-1,n=t?t.length:0;++r<n&&e(t[r],r,t)!==!1;);return t}function pe(t,e){for(var r=-1,n=e.length,c=t.length;++r<n;)t[c+r]=e[r];return t}function $t(t,e,r,n){var c=-1,d=t?t.length:0;for(n&&d&&(r=t[++c]);++c<d;)r=e(r,t[c],c,t);return r}function he(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function be(t,e){return t==null?void 0:t[e]}function jt(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Ot(t){var e=-1,r=Array(t.size);return t.forEach(function(n,c){r[++e]=[c,n]}),r}function X(t,e){return function(r){return t(e(r))}}function Et(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var _e=Array.prototype,ge=Function.prototype,G=Object.prototype,Y=v["__core-js_shared__"],It=function(){var t=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Vt=ge.toString,T=G.hasOwnProperty,N=G.toString,ye=RegExp("^"+Vt.call(T).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bt=ce?v.Buffer:void 0,Mt=v.Symbol,Kt=v.Uint8Array,me=X(Object.getPrototypeOf,Object),xe=Object.create,we=G.propertyIsEnumerable,ve=_e.splice,Dt=Object.getOwnPropertySymbols,ke=Bt?Bt.isBuffer:void 0,Te=X(Object.keys,Object),Z=E(v,"DataView"),M=E(v,"Map"),Q=E(v,"Promise"),tt=E(v,"Set"),et=E(v,"WeakMap"),K=E(Object,"create"),Ce=S(Z),Ae=S(M),Se=S(Q),$e=S(tt),je=S(et),Pt=Mt?Mt.prototype:void 0,Ut=Pt?Pt.valueOf:void 0;function C(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Oe(){this.__data__=K?K(null):{}}function Ee(t){return this.has(t)&&delete this.__data__[t]}function Ie(t){var e=this.__data__;if(K){var r=e[t];return r===s?void 0:r}return T.call(e,t)?e[t]:void 0}function Ve(t){var e=this.__data__;return K?e[t]!==void 0:T.call(e,t)}function Be(t,e){var r=this.__data__;return r[t]=K&&e===void 0?s:e,this}C.prototype.clear=Oe,C.prototype.delete=Ee,C.prototype.get=Ie,C.prototype.has=Ve,C.prototype.set=Be;function k(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Me(){this.__data__=[]}function Ke(t){var e=this.__data__,r=R(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():ve.call(e,r,1),!0}function De(t){var e=this.__data__,r=R(e,t);return r<0?void 0:e[r][1]}function Pe(t){return R(this.__data__,t)>-1}function Ue(t,e){var r=this.__data__,n=R(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}k.prototype.clear=Me,k.prototype.delete=Ke,k.prototype.get=De,k.prototype.has=Pe,k.prototype.set=Ue;function j(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Le(){this.__data__={hash:new C,map:new(M||k),string:new C}}function Ge(t){return F(this,t).delete(t)}function Ne(t){return F(this,t).get(t)}function Re(t){return F(this,t).has(t)}function Fe(t,e){return F(this,t).set(t,e),this}j.prototype.clear=Le,j.prototype.delete=Ge,j.prototype.get=Ne,j.prototype.has=Re,j.prototype.set=Fe;function O(t){this.__data__=new k(t)}function He(){this.__data__=new k}function We(t){return this.__data__.delete(t)}function qe(t){return this.__data__.get(t)}function ze(t){return this.__data__.has(t)}function Je(t,e){var r=this.__data__;if(r instanceof k){var n=r.__data__;if(!M||n.length<o-1)return n.push([t,e]),this;r=this.__data__=new j(n)}return r.set(t,e),this}O.prototype.clear=He,O.prototype.delete=We,O.prototype.get=qe,O.prototype.has=ze,O.prototype.set=Je;function Xe(t,e){var r=at(t)||xr(t)?he(t.length,String):[],n=r.length,c=!!n;for(var d in t)(e||T.call(t,d))&&!(c&&(d=="length"||_r(d,n)))&&r.push(d);return r}function Lt(t,e,r){var n=t[e];(!(T.call(t,e)&&Ft(n,r))||r===void 0&&!(e in t))&&(t[e]=r)}function R(t,e){for(var r=t.length;r--;)if(Ft(t[r][0],e))return r;return-1}function Ye(t,e){return t&&Gt(e,ot(e),t)}function rt(t,e,r,n,c,d,p){var f;if(n&&(f=d?n(t,c,d,p):n(t)),f!==void 0)return f;if(!H(t))return t;var qt=at(t);if(qt){if(f=pr(t),!e)return ur(t,f)}else{var I=A(t),zt=I==$||I==ut;if(vr(t))return nr(t,e);if(I==z||I==g||zt&&!d){if(jt(t))return d?t:{};if(f=hr(zt?{}:t),!e)return dr(t,Ye(f,t))}else{if(!i[I])return d?t:{};f=br(t,I,rt,e)}}p||(p=new O);var Jt=p.get(t);if(Jt)return Jt;if(p.set(t,f),!qt)var Xt=r?fr(t):ot(t);return fe(Xt||t,function(st,W){Xt&&(W=st,st=t[W]),Lt(f,W,rt(st,e,r,n,W,t,p))}),f}function Ze(t){return H(t)?xe(t):{}}function Qe(t,e,r){var n=e(t);return at(t)?n:pe(n,r(t))}function tr(t){return N.call(t)}function er(t){if(!H(t)||yr(t))return!1;var e=Wt(t)||jt(t)?ye:oe;return e.test(S(t))}function rr(t){if(!Rt(t))return Te(t);var e=[];for(var r in Object(t))T.call(t,r)&&r!="constructor"&&e.push(r);return e}function nr(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}function nt(t){var e=new t.constructor(t.byteLength);return new Kt(e).set(new Kt(t)),e}function ar(t,e){var r=e?nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}function or(t,e,r){var n=e?r(Ot(t),!0):Ot(t);return $t(n,ue,new t.constructor)}function sr(t){var e=new t.constructor(t.source,ae.exec(t));return e.lastIndex=t.lastIndex,e}function ir(t,e,r){var n=e?r(Et(t),!0):Et(t);return $t(n,de,new t.constructor)}function lr(t){return Ut?Object(Ut.call(t)):{}}function cr(t,e){var r=e?nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}function ur(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function Gt(t,e,r,n){r||(r={});for(var c=-1,d=e.length;++c<d;){var p=e[c],f=n?n(r[p],t[p],p,r,t):void 0;Lt(r,p,f===void 0?t[p]:f)}return r}function dr(t,e){return Gt(t,Nt(t),e)}function fr(t){return Qe(t,ot,Nt)}function F(t,e){var r=t.__data__;return gr(e)?r[typeof e=="string"?"string":"hash"]:r.map}function E(t,e){var r=be(t,e);return er(r)?r:void 0}var Nt=Dt?X(Dt,Object):Cr,A=tr;(Z&&A(new Z(new ArrayBuffer(1)))!=L||M&&A(new M)!=P||Q&&A(Q.resolve())!=ft||tt&&A(new tt)!=U||et&&A(new et)!=J)&&(A=function(t){var e=N.call(t),r=e==z?t.constructor:void 0,n=r?S(r):void 0;if(n)switch(n){case Ce:return L;case Ae:return P;case Se:return ft;case $e:return U;case je:return J}return e});function pr(t){var e=t.length,r=t.constructor(e);return e&&typeof t[0]=="string"&&T.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function hr(t){return typeof t.constructor=="function"&&!Rt(t)?Ze(me(t)):{}}function br(t,e,r,n){var c=t.constructor;switch(e){case _t:return nt(t);case h:case u:return new c(+t);case L:return ar(t,n);case gt:case yt:case mt:case xt:case wt:case vt:case kt:case Tt:case Ct:return cr(t,n);case P:return or(t,n,r);case dt:case ht:return new c(t);case pt:return sr(t);case U:return ir(t,n,r);case bt:return lr(t)}}function _r(t,e){return e=e==null?w:e,!!e&&(typeof t=="number"||se.test(t))&&t>-1&&t%1==0&&t<e}function gr(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function yr(t){return!!It&&It in t}function Rt(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||G;return t===r}function S(t){if(t!=null){try{return Vt.call(t)}catch{}try{return t+""}catch{}}return""}function mr(t){return rt(t,!0,!0)}function Ft(t,e){return t===e||t!==t&&e!==e}function xr(t){return wr(t)&&T.call(t,"callee")&&(!we.call(t,"callee")||N.call(t)==g)}var at=Array.isArray;function Ht(t){return t!=null&&kr(t.length)&&!Wt(t)}function wr(t){return Tr(t)&&Ht(t)}var vr=ke||Ar;function Wt(t){var e=H(t)?N.call(t):"";return e==$||e==ut}function kr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=w}function H(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Tr(t){return!!t&&typeof t=="object"}function ot(t){return Ht(t)?Xe(t):rr(t)}function Cr(){return[]}function Ar(){return!1}l.exports=mr})(it,it.exports);const cn=it.exports,Lr={},Gr={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},Nr=_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"},null,-1),Rr=[Nr];function Fr(l,a){return b(),x("svg",Gr,Rr)}const un=re(Lr,[["render",Fr]]),Hr={class:"flex flex-col space-y-2 w-full"},Wr={class:"text-dark-lines text-sm dark:text-white",for:"kanban_input"},qr={class:"relative"},zr=["rows","placeholder"],Jr={key:0,class:"text-red"},Xr=lt({__name:"KanbanInputTextArea",props:{modelValue:null,label:{default:""},rows:{default:4},name:{default:""},placeholder:{default:""},error:{default:""}},emits:["update:modelValue","enter"],setup(l,{emit:a}){const o=l,s=Sr({get(){return o.modelValue},set(w){a("update:modelValue",w)}});return(w,g)=>(b(),x("div",Hr,[_("label",Wr,V(o.label),1),_("div",qr,[$r(_("textarea",{ref:`kanbanInput${l.name}`,class:Er(["rounded border w-full text-black text-p bg-white/0 text-black placeholder-black/25 placeholder-p px-4 py-2 dark:placeholder-gray-medium dark:text-white",l.error&&!!l.error.length?"border-red":"border-dark-lines/25 dark:border-light-lines/25"]),rows:l.rows,placeholder:o.placeholder,onKeyup:g[0]||(g[0]=Ir(y=>a("enter",y),["enter"])),type:"text",id:"kanban_input","onUpdate:modelValue":g[1]||(g[1]=y=>Vr(s)?s.value=y:null)},null,42,zr),[[jr,Or(s)]]),o.error?(b(),x("span",Jr,V(o.error),1)):ct("",!0)])]))}}),Yr={class:"flex relative flex-col space-y-2 relative"},Zr={class:"text-black text-sm dark:text-white"},Qr=lt({__name:"KanbanDropdown",props:{label:null,selectedText:null},setup(l){const a=Br(!1);return(o,s)=>(b(),x("div",Yr,[_("label",Zr,V(l.label),1),_("div",{class:"rounded border p-3 rounded border text-black dark:text-white border-dark-lines/25 cursor-pointer dark:border-light-lines/25 px-4 py-2",onClick:s[0]||(s[0]=w=>a.value=!a.value)},V(l.selectedText),1),a.value?(b(),x("div",{key:0,class:"bg-light-mode z-50 absolute w-full top-16 dark:bg-dark-gray text-black dark:text-white rounded",onClick:s[1]||(s[1]=w=>a.value=!a.value)},[Mr(o.$slots,"default",{},void 0,!0)])):ct("",!0)]))}});const tn=re(Qr,[["__scopeId","data-v-4753a5a7"]]),en={class:"flex flex-col space-y-6 text-black dark:text-white"},rn={class:"text-lg"},nn=_("label",{class:"text-dark-lines text-sm dark:text-white"}," Subtasks ",-1),an=["onClick"],on=["onClick"],dn=lt({__name:"KanbanModalCreateUpdateTask",props:{type:{default:"create"},board:null,task:null},emits:["close"],setup(l,{emit:a}){const o=l,s=Kr({title:"",description:"",subtasks:[],column:o.board.Columns[0]}),w=async()=>{try{await ee.addTask(o.board.id,s),a("close")}catch(y){console.log(y)}},g=async()=>{try{await ee.updateTask(o.board.id,o.task.id,s),a("close")}catch(y){console.log(y)}};return Dr(()=>{o.task&&o.type==="update"&&(s.title=o.task.title,s.description=o.task.description,s.subtasks=o.task.subtasks)}),(y,h)=>(b(),x("div",en,[_("h1",rn,V(l.type==="create"?"Add New Task":"Edit Task"),1),D(Yt,{label:"Title",placeholder:"e.g. Take coffee break",modelValue:s.title,"onUpdate:modelValue":h[0]||(h[0]=u=>s.title=u)},null,8,["modelValue"]),D(Xr,{label:"Description",placeholder:"e.g. It's always good to take a coffee break. This 15minute break will recharge the batteries a little",modelValue:s.description,"onUpdate:modelValue":h[1]||(h[1]=u=>s.description=u)},null,8,["modelValue"]),_("div",null,[nn,(b(!0),x(Qt,null,te(s.subtasks,(u,B)=>(b(),x("div",{key:B,class:"flex justify-between items-center space-x-4"},[D(Yt,{modelValue:u.name,"onUpdate:modelValue":$=>u.name=$},null,8,["modelValue","onUpdate:modelValue"]),_("button",{onClick:$=>s.subtasks.splice(B,1),class:"text-red text-sm text-center hover:underline"}," Delete ",8,an)]))),128)),D(Zt,{class:"mt-4",text:"Add new column",variant:"secondary",onClick:h[2]||(h[2]=u=>s.subtasks.push({name:"",isDone:!1}))})]),l.type==="create"?(b(),Pr(tn,{key:0,"selected-text":s.column.name,label:"Status"},{default:Ur(()=>[_("ul",null,[(b(!0),x(Qt,null,te(l.board.Columns,u=>(b(),x("li",{key:u.id,onClick:B=>s.column=u},V(u.name),9,on))),128))])]),_:1},8,["selected-text"])):ct("",!0),D(Zt,{text:l.type==="create"?"Create task":"Edit task",onClick:h[3]||(h[3]=u=>l.type==="create"?w():g())},null,8,["text"])]))}});export{un as I,ee as K,dn as _,cn as c};
