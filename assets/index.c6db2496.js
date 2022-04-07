var Z=Object.defineProperty;var J=(r,e,t)=>e in r?Z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(J(r,typeof e!="symbol"?e+"":e,t),t);const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};ee();class a extends Error{constructor(e,...t){super(e);c(this,"args");this.args=t}}const A="accepted",L="alpha",M="alpha-num",I="alpha-num-dash",P="between-length",O="between-number",R="digits",F="email",U="ends-with",x="equal-length",q="equal-number",D="greater-equal",H="integer",B="less-equal",G="max-length",W="min-length",V="num-dash",j="number",C="required",z="starts-with",v="within";function re(r){return r==="checked"?!0:new a(A)}const te=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ne=/^[+-]?\d+$/,se=/^[+-]?(\d+|\d*\.\d*)$/,oe=/^[\p{L}\p{M}]+$/u,ie=/^[\p{L}\p{M}\p{N}]+$/u,ae=/^[\p{L}\p{M}\p{N}_-]+$/u,ue=/^[\p{N}_-]+$/u;function le(r){return oe.test(r)||new a(L)}function ce(r){return ie.test(r)||new a(M)}function he(r){return ae.test(r)||new a(I)}class fe{constructor(){c(this,"lang")}set(e){this.lang=e}get(){return typeof this.lang=="object"?this.lang:{}}}var S=new fe;const de="checkbox",me="radio";function k(r){return r.replace(/-./g,e=>e[1].toUpperCase())}function Q(r){return r instanceof HTMLInputElement?r.type===de||r.type===me?r.checked?"checked":"":r.value:r instanceof HTMLSelectElement?Array.from(r.selectedOptions).map(e=>e.value).join(","):""}function ge(r,...e){return r.replace(/\$(\d)/g,(t,n)=>(e==null?void 0:e[n-1])||"")}function m(r){const[e,t=""]=r.split(":");return{name:e,argsText:t,args:h(t)}}function h(r){return r?r.split(","):[]}function Ee(r,...e){const t=S.get();let n=r;return Object.prototype.hasOwnProperty.call(t,r)&&(n=t[r]),ge(n,...e)}function i(r){return{throwError(e){if(r)throw new Error(e)}}}function pe(r){r.on("field:error",(e,t,n)=>{n.reverse().forEach(s=>{const o=document.createElement("p");o.classList.add("validator-err"),o.innerHTML=s.message,t.parentNode&&t.parentNode.insertBefore(o,t.nextSibling)})}),r.on("validation:start",e=>{e.querySelectorAll(".validator-err").forEach(t=>{t.remove()})})}const l="argument must be provided",g="argument must be a number",E="argument must be a positive number",be="argument must be an integer";function Ne(r,e=""){const[t,n,s]=h(e);i(!t).throwError(l),i(!n||!s).throwError(l);const o=Number(n),u=Number(s);return i(Number.isNaN(o)||Number.isNaN(u)).throwError(g),i(o>u).throwError("min must be less than max"),i(o===u).throwError("min and max must not be equal"),t==="number"?we(r,o,u):ve(r,o,u)}function we(r,e,t){const n=Number(r);return r!==""&&!Number.isNaN(n)&&n>=e&&n<=t?!0:new a(O,String(e),String(t))}function ve(r,e,t){return i(e<0||t<0).throwError(E),r.length>=e&&r.length<=t?!0:new a(P,String(e),String(t))}function Te(r,e=""){return i(e==="").throwError(l),i(T(e)!==!0||+e<1).throwError(be),new RegExp(`^-?[0-9]{${e}}$`).test(r)?!0:new a(R,e)}function ye(r,e=""){return i(e==="").throwError(l),r.endsWith(e)||new a(U,e)}function Se(r){return te.test(r)||new a(F)}function _e(r,e=""){const[t,n]=h(e);i(!t).throwError(l),i(!n).throwError(l);const s=Number(n);return i(Number.isNaN(s)).throwError(g),t==="number"?$e(r,s):Ae(r,s)}function $e(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t>=e?!0:new a(D,String(e))}function Ae(r,e){return i(e<0).throwError(E),r.length>=e?!0:new a(W,String(e))}function T(r){return ne.test(r)||new a(H)}function Le(r,e=""){const[t,n]=h(e);i(!t).throwError(l),i(!n).throwError(l);const s=Number(n);return i(Number.isNaN(s)).throwError(g),t==="number"?Me(r,s):Ie(r,s)}function Me(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t<=e?!0:new a(B,String(e))}function Ie(r,e){return i(e<0).throwError(E),r.length<=e?!0:new a(G,String(e))}function Pe(r){return!0}function Oe(r){return se.test(r)||new a(j)}function Re(r){return ue.test(r)||new a(V)}function y(r){return r.trim().length>0||new a(C)}function Fe(r,e=""){return y(e)===!0?y(r):!0}function Ue(r,e=""){const[t,n]=h(e);i(!t).throwError(l),i(!n).throwError(l);const s=Number(n);return i(Number.isNaN(s)).throwError(g),t==="number"?xe(r,s):qe(r,s)}function xe(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t===e?!0:new a(q,String(e))}function qe(r,e){return i(e<0).throwError(E),r.length===e?!0:new a(x,String(e))}function De(r,e=""){return i(e==="").throwError(l),r.startsWith(e)||new a(z,e)}function _(r,e){const[t,...n]=h(e);if(i(!t).throwError(l),t==="array"){const s=h(r);for(const o of s)if(!n.includes(o))return new a(v);return!0}return n.includes(r)||new a(v)}var $=Object.freeze(Object.defineProperty({__proto__:null,accepted:re,alpha:le,alphaNum:ce,alphaNumDash:he,between:Ne,digits:Te,endsWith:ye,email:Se,min:_e,integer:T,int:T,max:Le,nullable:Pe,number:Oe,numDash:Re,required:y,requiredIf:Fe,size:Ue,startsWith:De,within:_,in:_},Symbol.toStringTag,{value:"Module"}));class He{constructor(){c(this,"lang");c(this,"errorsList");this.lang=S.get(),this.errorsList=[]}setError(e,t,n){let s=this.errorsList.find(p=>p[0].element===e);s||(s=[],this.errorsList.push(s));const u={message:Ee(n.message,...n.args),element:e,rule:t,cause:n.message,args:n.args};s.push(u)}get hasError(){return Object.keys(this.errorsList).length>0}get errors(){return this.errorsList}clearErrors(){this.errorsList=[]}}class Be{constructor(e={}){c(this,"events");this.events={},Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(this.events[n]=[],this.events[n].push(e[n]))})}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}off(e,t){if(typeof this.events[e]=="undefined")return;const n=this.events[e],s=n.indexOf(t);s!==-1&&n.splice(s,1)}call(e,...t){typeof this.events[e]!="undefined"&&this.events[e].forEach(s=>{s(...t)})}clear(){this.events={}}}const w={requiredIf:We,between:f,size:f,min:f,max:f,in:f};function Ge(r,e,t,n){var o;const s=k(m(r).name);return((o=w[s])==null?void 0:o.call(w,r,e,t,n))||r}function f(r,e){const{name:t,argsText:n}=m(r),s=e.indexOf(r),o=e.slice(0,s);let u="string";return o.includes("number")||o.includes("int")||o.includes("integer")?u="number":o.includes("array")&&(u="array"),`${t}:${u},${n}`}function We(r){const{name:e,args:t}=m(r);if(t.length===0)return e;let n="";if(t.length>0){const s=document.getElementById(t[0]);s!==null&&(n=Q(s))}return t.splice(0,1,n),`${e}:${t.join(",")}`}const Ve={renderErrors:!0};class je{constructor(e,t={}){c(this,"validatorError");c(this,"events");c(this,"options");c(this,"parentEl");if(e===null||!(e instanceof HTMLElement))throw new Error("Invalid parentEl element");this.options=Object.assign(Ve,t),this.validatorError=new He,this.events=new Be(this.options.on),this.parentEl=e,S.set(this.options.lang),this.options.renderErrors&&pe(this.events),this.events.on("validation:start",()=>this.validatorError.clearErrors()),this.events.on("validation:failed",()=>this.errorEventTrigger())}validate(){this.events.call("validation:start",this.parentEl);let e=!0,t="success";const n=this.parentEl.querySelectorAll("[data-rules]");return n.length>0&&(e=this.validateFields(Array.from(n)),t=e?"success":"failed"),this.events.call(`validation:${t}`,this.parentEl),this.events.call("validation:end",this.parentEl,e),e}on(e,t){this.events.on(e,t)}off(e,t){this.events.off(e,t)}validateFields(e){var t;for(const n of e){const s=(t=n.getAttribute("data-rules"))==null?void 0:t.split("|");if(s&&s.length>0){const o=Q(n),u=this.shouldStopOnFirstFailure(s),p=this.getComputedFieldRules(s,n);for(const X of p){const{name:b,argsText:Y}=m(X),N=k(b);if(this.isNullable(N)&&o==="")break;if(N in $)try{const d=$[N](o,Y);if(d instanceof a&&(this.validatorError.setError(n,b,d),u))break}catch(d){return console.error(new Error(`${b}: ${d.message}`)),!1}}}}return!this.validatorError.hasError}shouldStopOnFirstFailure(e){return e.includes("bail")}isNullable(e){return e==="nullable"}getComputedFieldRules(e,t){return e.map(n=>Ge(n,e,t,this.parentEl))}errorEventTrigger(){this.validatorError.errors.forEach(t=>{t.length!==0&&this.events.call("field:error",this.parentEl,t[0].element,t)})}}const Ce={[A]:"Please accept this field",[L]:"Please enter only alphabetic characters",[M]:"Please enter only alpha-numeric characters",[I]:"Please enter only alpha-numeric characters, dashes, and underscores",[P]:"The value must have between $1 and $2 characters",[O]:"Please enter a number between $1 and $2",[R]:"The value must be a $1-digits number",[F]:"Please enter a valid email address",[U]:'The value must ends with "$1"',[x]:"The value must have $1 characters",[q]:"The value must be equal to $1",[D]:"Please enter a number greater than or equal to $1",[H]:"The value must be a valid integer",[B]:"Please enter a number less than or equal to $1",[G]:"Max length is $1",[W]:"Min length is $1",[V]:"Please enter numbers with dashes and underscores",[j]:"Please enter a valid number",[C]:"This field is required",[z]:'The value must start with "$1"',[v]:"The value is incorrect"},K=document.querySelector("form");K.onsubmit=r=>{r.preventDefault(),ze.validate()};const ze=new je(K,{lang:Ce,on:{"validation:success":()=>{alert("Success! Form validated with no errors")}}});