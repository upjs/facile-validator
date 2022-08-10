var J=Object.defineProperty;var ee=(t,e,r)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(ee(t,typeof e!="symbol"?e+"":e,r),r);const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};te();class u extends Error{constructor(r,...n){super(r);c(this,"args");this.args=n}}const L="accepted",F="alpha",I="alpha-num",M="alpha-num-dash",x="between-length",R="between-number",P="digits",O="email",U="ends-with",D="equal-length",q="equal-number",H="greater-equal",V="integer",C="less-equal",B="max-length",G="min-length",j="num-dash",W="number",z="regex",k="required",Q="starts-with",y="within";function re(t){return t==="checked"?!0:new u(L)}const ne=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,se=/^[+-]?\d+$/,oe=/^[+-]?(\d+|\d*\.\d*)$/,ie=/^[\p{L}\p{M}]+$/u,ae=/^[\p{L}\p{M}\p{N}]+$/u,ue=/^[\p{L}\p{M}\p{N}_-]+$/u,le=/^[\p{N}_-]+$/u;function ce(t){return ie.test(t)||new u(F)}function he(t){return ae.test(t)||new u(I)}function de(t){return ue.test(t)||new u(M)}class fe{constructor(){c(this,"lang")}set(e){this.lang=e}get(){return typeof this.lang=="object"?this.lang:{}}}const p=new fe,me="checkbox",ge="radio";function X(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function K(t){return t instanceof HTMLInputElement?t.type===me||t.type===ge?t.checked?"checked":"":t.value:t instanceof HTMLTextAreaElement?t.value:t instanceof HTMLSelectElement?Array.from(t.selectedOptions).map(e=>e.value).join(","):""}function Ee(t,...e){return t.replace(/\$(\d)/g,(r,n)=>(e==null?void 0:e[n-1])||"")}function b(t,e){let[r,n=""]=t.split(":");if(we(t)){if(!Ne(t))throw new Error(`${t}: x-rules require an argument that is defined in the config.xRules object`);r=r.substring(2),n=String(e==null?void 0:e[n])||""}return{name:r,argsText:n,args:m(n)}}function m(t){return t?t.split(","):[]}function pe(t,...e){const r=p.get();let n=t;return Object.prototype.hasOwnProperty.call(r,t)&&(n=r[t]),Ee(n,...e)}function a(t){return{throwError(e){if(t)throw new Error(e)}}}function be(t){t.on("field:error",(e,r,n)=>{n.reverse().forEach(s=>{const o=document.createElement("p");o.classList.add("validator-err"),o.innerHTML=s.message,r.parentNode&&r.parentNode.insertBefore(o,r.nextSibling)})}),t.on("validation:start",e=>{e.querySelectorAll(".validator-err").forEach(r=>{r.remove()})})}function Ne(t){return t.includes(":")&&t.split(":").length===2}function we(t){return t.startsWith("x-")}const l="An argument must be provided",N="The argument must be a number",w="The argument must be a positive number",ve="The argument must be an integer",Te="Invalid pattern provided";function ye(t,e=""){const[r,n,s]=m(e);a(!r).throwError(l),a(!n||!s).throwError(l);const o=Number(n),i=Number(s);return a(Number.isNaN(o)||Number.isNaN(i)).throwError(N),a(o>i).throwError("min must be less than max"),a(o===i).throwError("min and max must not be equal"),r==="number"?_e(t,o,i):Ae(t,o,i)}function _e(t,e,r){const n=Number(t);return t!==""&&!Number.isNaN(n)&&n>=e&&n<=r?!0:new u(R,String(e),String(r))}function Ae(t,e,r){return a(e<0||r<0).throwError(w),t.length>=e&&t.length<=r?!0:new u(x,String(e),String(r))}function Se(t,e=""){return a(e==="").throwError(l),a(_(e)!==!0||+e<1).throwError(ve),new RegExp(`^-?[0-9]{${e}}$`).test(t)?!0:new u(P,e)}function $e(t,e=""){return a(e==="").throwError(l),t.endsWith(e)||new u(U,e)}function Le(t){return ne.test(t)||new u(O)}function Fe(t,e=""){const[r,n]=m(e);a(!r).throwError(l),a(!n).throwError(l);const s=Number(n);return a(Number.isNaN(s)).throwError(N),r==="number"?Ie(t,s):Me(t,s)}function Ie(t,e){const r=Number(t);return t!==""&&!Number.isNaN(r)&&r>=e?!0:new u(H,String(e))}function Me(t,e){return a(e<0).throwError(w),t.length>=e?!0:new u(G,String(e))}function _(t){return se.test(t)||new u(V)}function xe(t,e=""){const[r,n]=m(e);a(!r).throwError(l),a(!n).throwError(l);const s=Number(n);return a(Number.isNaN(s)).throwError(N),r==="number"?Re(t,s):Pe(t,s)}function Re(t,e){const r=Number(t);return t!==""&&!Number.isNaN(r)&&r<=e?!0:new u(C,String(e))}function Pe(t,e){return a(e<0).throwError(w),t.length<=e?!0:new u(B,String(e))}function Oe(t){return oe.test(t)||new u(W)}function Ue(t){return le.test(t)||new u(j)}const De=t=>{try{return new RegExp(t),!0}catch{return!1}},qe=t=>{var n,s,o,i;const e=(s=(n=t.match(/\/(.+)\/.*/))==null?void 0:n[1])!=null?s:"",r=(i=(o=t.match(/\/.+\/(.*)/))==null?void 0:o[1])!=null?i:"";return new RegExp(e,r)};function He(t,e){return a(!e).throwError(l),a(De(e)===!1).throwError(Te),qe(e).test(t)||new u(z)}function A(t){return t.trim().length>0||new u(k)}function Ve(t,e=""){return A(e)===!0?A(t):!0}function Ce(t,e=""){const[r,n]=m(e);a(!r).throwError(l),a(!n).throwError(l);const s=Number(n);return a(Number.isNaN(s)).throwError(N),r==="number"?Be(t,s):Ge(t,s)}function Be(t,e){const r=Number(t);return t!==""&&!Number.isNaN(r)&&r===e?!0:new u(q,String(e))}function Ge(t,e){return a(e<0).throwError(w),t.length===e?!0:new u(D,String(e))}function je(t,e=""){return a(e==="").throwError(l),t.startsWith(e)||new u(Q,e)}function S(t,e){const[r,...n]=m(e);if(a(!r).throwError(l),r==="array"){const s=m(t);for(const o of s)if(!n.includes(o))return new u(y);return!0}return n.includes(t)||new u(y)}const $=Object.freeze(Object.defineProperty({__proto__:null,accepted:re,alpha:ce,alphaNum:he,alphaNumDash:de,between:ye,digits:Se,endsWith:$e,email:Le,min:Fe,integer:_,int:_,max:xe,number:Oe,numDash:Ue,regex:He,required:A,requiredIf:Ve,size:Ce,startsWith:je,within:S,in:S},Symbol.toStringTag,{value:"Module"}));class We{constructor(){c(this,"lang");c(this,"errorsList");this.lang=p.get(),this.errorsList=[]}setError(e,r,n){let s=this.errorsList.find(d=>d[0].element===e);s||(s=[],this.errorsList.push(s));const i={message:pe(n.message,...n.args),element:e,rule:r,cause:n.message,args:n.args};s.push(i)}get hasError(){return Object.keys(this.errorsList).length>0}get errors(){return this.errorsList}clearErrors(){this.errorsList=[]}}class ze{constructor(e={}){c(this,"events");this.events={},Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(this.events[n]=[],this.events[n].push(e[n]))})}on(e,r){this.events[e]||(this.events[e]=[]),this.events[e].push(r)}off(e,r){if(typeof this.events[e]>"u")return;const n=this.events[e],s=n.indexOf(r);s!==-1&&n.splice(s,1)}call(e,...r){typeof this.events[e]<"u"&&this.events[e].forEach(s=>{s(...r)})}clear(){this.events={}}}const T={requiredIf:Qe,between:g,size:g,min:g,max:g,in:g};function ke(t,e,r,n,s){var i;const o=X(b(t,s).name);return((i=T[o])==null?void 0:i.call(T,t,e,r,n,s))||t}function g(t,e,r,n,s){const{name:o,argsText:i}=b(t,s),d=e.indexOf(t),h=e.slice(0,d);let f="string";return h.includes("number")||h.includes("int")||h.includes("integer")?f="number":h.includes("array")&&(f="array"),`${o}:${f},${i}`}function Qe(t,e,r,n,s){const{name:o,args:i}=b(t,s);if(i.length===0)return o;let d="";if(i.length>0){const h=document.getElementById(i[0]);h!==null&&(d=K(h))}return i.splice(0,1,d),`${o}:${i.join(",")}`}const Xe={renderErrors:!0,onFieldChangeValidationDelay:500};class Ke{constructor(e,r={}){c(this,"validatorError");c(this,"events");c(this,"options");c(this,"container");if(e===null||!(e instanceof HTMLElement))throw new Error("Invalid container element");this.options=Object.assign(Xe,r),this.validatorError=new We,this.events=new ze(this.options.on),this.container=e,p.set(this.options.lang),this.options.renderErrors&&be(this.events),this.events.on("validation:start",()=>this.validatorError.clearErrors()),this.events.on("validation:failed",()=>this.triggerFieldErrorEvent()),r.onFieldChangeValidation&&this.validateOnFieldChange()}validate(e,r=!0){this.events.call("validation:start",this.container);let n=!0,s="success";return e===void 0&&(e=this.container.querySelectorAll("[data-rules]")),e.length>0&&(n=this.validateFields(Array.from(e)),s=n?"success":"failed"),this.events.call("validation:end",this.container,n),r&&this.events.call(`validation:${s}`,this.container),n}on(e,r){this.events.on(e,r)}off(e,r){this.events.off(e,r)}validateFields(e){var r;for(const n of e){const s=(r=n.getAttribute("data-rules"))==null?void 0:r.split("|");if(s&&s.length>0){const o=K(n),i=this.shouldStopOnFirstFailure(s),d=this.getComputedFieldRules(s,n);for(const h of d){const{name:f,argsText:Z}=b(h,this.options.xRules),v=X(f);if(this.isNullable(v)&&o==="")break;if(v in $)try{const E=$[v](o,Z);if(E instanceof u&&(this.validatorError.setError(n,f,E),i))break}catch(E){return console.error(new Error(`${f}: ${E.message}`)),!1}}}}return!this.validatorError.hasError}shouldStopOnFirstFailure(e){return e.includes("bail")}isNullable(e){return e==="nullable"}getComputedFieldRules(e,r){return e.map(n=>ke(n,e,r,this.container,this.options.xRules))}triggerFieldErrorEvent(){this.validatorError.errors.forEach(r=>{r.length!==0&&this.events.call("field:error",this.container,r[0].element,r)})}validateOnFieldChange(){let e;this.container.addEventListener("input",r=>{window.clearTimeout(e);const n=this.options.onFieldChangeValidationDelay;e=window.setTimeout(()=>{const s=r.target;s.matches("[data-rules]")&&this.validate([s],!1)===!1&&this.triggerFieldErrorEvent()},n)})}setLanguage(e){p.set(e)}}const Ye={[L]:"Please accept this field",[F]:"Please enter only alphabetic characters",[I]:"Please enter only alpha-numeric characters",[M]:"Please enter only alpha-numeric characters, dashes, and underscores",[x]:"The value must have between $1 and $2 characters",[R]:"Please enter a number between $1 and $2",[P]:"The value must be a $1-digits number",[O]:"Please enter a valid email address",[U]:'The value must ends with "$1"',[D]:"The value must have $1 characters",[q]:"The value must be equal to $1",[H]:"Please enter a number greater than or equal to $1",[V]:"The value must be a valid integer",[C]:"Please enter a number less than or equal to $1",[B]:"Max length is $1",[G]:"Min length is $1",[j]:"Please enter numbers with dashes and underscores",[W]:"Please enter a valid number",[z]:"The value doesn't match the pattern",[k]:"This field is required",[Q]:'The value must start with "$1"',[y]:"The value is incorrect"},Y=document.querySelector("form");Y.onsubmit=t=>{t.preventDefault(),Ze.validate()};const Ze=new Ke(Y,{lang:Ye,onFieldChangeValidation:!0,onFieldChangeValidationDelay:500,xRules:{zipcode:"/^([0-9]{5})-([0-9]{5})$/","min-from-server":(()=>"2")()},on:{"validation:success":()=>{alert("Success! Form validated without any errors")},"validation:end":()=>{console.log("validation:end")},"validation:start":()=>{console.log("validation:start")},"validation:failed":()=>{console.log("validation:failed")},"field:error":()=>{console.log("field:error")}}});