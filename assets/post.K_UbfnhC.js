import{a as K,_ as W}from"./SakuraPage.vue_vue_type_style_index_0_lang.CzyulW46.js";import{s as Z,f as $,r as T,l as q,ae as ee,p as te,I as S,K as u,O as m,a0 as w,j as C,J as P,F as E,V as D,v as r,u as g,a1 as v,X as V,Y as k,L as b,P as h,$ as O,Q as ne,R as oe,S as i,U as F,a2 as se,af as ae,W as le}from"./framework.DjuBL7GU.js";import{u as R}from"./chunks/vue-i18n.NUs0JSr5.js";import{v as B,x as re,a as ie,y as ce,z as H,h as Y,_ as Q,g as N,t as ue,i as pe,A as de,f as M}from"./app.CkNf6mdb.js";import"./chunks/dayjs.i0BUjmvK.js";import{o as fe}from"./content.Bb6P-sym.js";import{a as me,u as _e}from"./chunks/vue-router.DML_bUyU.js";import{_ as ve}from"./SakuraDate.vue_vue_type_script_setup_true_lang.W0eSwL8B.js";import{useSchemaOrg as he,defineArticle as ge}from"./index.DKYSvJg-.js";import"./SakuraMultiColumns.BhCLYbLA.js";import"./chunks/pinia.COAAoROJ.js";import"./chunks/nprogress.MTuYNGdb.js";var j=[];function ke(a,t,e){j.length=0;let o=[],s=[];return a.forEach(n=>{let l={...n,children:[]},c=s[s.length-1];for(;c&&c.level>=l.level;)s.pop(),c=s[s.length-1];if(l.element.classList.contains("ignore-header")||c&&"shouldIgnore"in c){s.push({level:l.level,shouldIgnore:!0});return}l.level>e||l.level<t||(j.push({element:l.element,link:l.link}),c?c.children.push(l):o.push(l),s.push(l))}),o}function ye(a,t=[2,4]){let e=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,s]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;return ke(a,o,s)}function $e(a){let t="";for(let e of Array.from(a.childNodes))if(e.nodeType===1){if(e.classList.contains("VABadge")||e.classList.contains("header-anchor"))continue;t+=e.textContent}else e.nodeType===3&&(t+=e.textContent);return t.trim()}function be(a={range:[2,4],selector:".markdown-body"}){let t=a.selector||".markdown-body",e=document.querySelectorAll(t),o=e[e.length-1],s=Array.from(o.querySelectorAll(`${t} :where(h1,h2,h3,h4,h5,h6)`)).filter(n=>a.filter?a.filter(n):!0).map(n=>{let l=Number(n.tagName[1]);return{element:n,title:$e(n),link:`#${n.id}`,level:l,lang:n.lang}});return ye(s,a.range)}function Ce(a,t){let e,o=!1;return()=>{e&&clearTimeout(e),o?e=setTimeout(a,t):(a(),o=!0,setTimeout(()=>{o=!1},t))}}function Se(){const a=B(),t=re(),e=Z([]),o=$(()=>a.value.outline??t.value.outline);return fe(()=>{o.value!==!1&&(e.value=be({range:o.value,selector:".markdown-body",filter:n=>!!n.id&&n.hasChildNodes()}))}),{headers:e,handleClick:({target:n})=>{const l=n.href.split("#")[1],c=document.getElementById(decodeURIComponent(l));c==null||c.focus({preventScroll:!0})}}}function we(a){const t=me(),e=$(()=>t.path),o=ie(),s=$(()=>{let c=-1;return o.postList.find((p,d)=>p.path===e.value?(c=d,!0):!1),c}),n=$(()=>s.value-1>=0?o.postList[s.value-1]:null),l=$(()=>s.value+1<o.postList.length?o.postList[s.value+1]:null);return[n,l]}function xe(){const a=T(!1),t=B(),e=ce(),o=$(()=>t.value.sidebar!==!1&&e.value!=="home");function s(){a.value=!0}function n(){a.value=!1}function l(){a.value?n():s()}return{isOpen:a,hasSidebar:o,open:s,close:n,toggle:l}}function Ae(){const{hasSidebar:a}=xe(),t=H("(min-width: 960px)"),e=H("(min-width: 1280px)");return{isAsideEnabled:$(()=>!e.value&&!t.value?!1:a.value?e.value:t.value)}}const Le=56,U=33;function Te(a,t,e=!1){const{isAsideEnabled:o}=Ae(),s=Ce(l,100);let n=null;q(()=>{requestAnimationFrame(l),window.addEventListener("scroll",s)}),ee(()=>{p(location.hash)}),te(()=>{window.removeEventListener("scroll",s)});function l(){if(!o.value)return;const d=[].slice.call(a.value.querySelectorAll(".outline-link")),f=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(y=>d.some(I=>I.hash===y.hash&&y.offsetParent!==null)),_=window.scrollY,x=window.innerHeight,A=a.value.offsetHeight,L=Math.abs(_+x-A)<1;if(f.length&&L){p(f[f.length-1].hash);return}for(let y=0;y<f.length;y++){const I=f[y],X=f[y+1],[J,G]=Ie(y,I,X);if(J){p(G);return}}}const c=()=>{const d=n;if(!d||e)return;const f=d.getBoundingClientRect().top,_=d.getBoundingClientRect().bottom;(f<U||_>window.innerHeight-U)&&d.scrollIntoView()};function p(d){n&&n.classList.remove("active"),d==null?n=null:n=a.value.querySelector(`a[href="${decodeURIComponent(d)}"]`);const f=n;c(),f?(f.classList.add("active"),t.value.style.top=`${f.offsetTop+U}px`,t.value.style.opacity="1"):(t.value.style.top=`${U}px`,t.value.style.opacity="0")}}function z(a){return a.parentElement.offsetTop-Le-15}function Ie(a,t,e){const o=window.scrollY;return a===0&&o===0?[!0,null]:o<z(t)?[!1,null]:!e||o<z(e)?[!0,t.hash]:[!1,null]}const Pe={},Oe={class:"sakura-aside <md:hidden"};function Re(a,t){return u(),m("div",Oe,[w(a.$slots,"default",{},void 0,!0)])}const Ue=S(Pe,[["render",Re],["__scopeId","data-v-e0bf1ef9"]]),Ve=["lang"],Be=C({__name:"SakuraOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(a){const{locale:t}=R();return(e,o)=>{const s=P("RouterLink"),n=P("SakuraOutlineItem",!0);return u(),m("ul",{class:O([e.root?"root":"nested","va-toc css-i18n-toc"])},[(u(!0),m(E,null,D(e.headers,({children:l,link:c,title:p,lang:d})=>(u(),m("li",{key:c,class:"va-toc-item",lang:d||r(t)},[g(s,{to:c,class:"outline-link",href:c,onClick:e.onClick},{default:v(()=>[V(k(p),1)]),_:2},1032,["to","href","onClick"]),l!=null&&l.length?(u(),b(n,{key:0,headers:l,"on-click":e.onClick},null,8,["headers","on-click"])):h("v-if",!0)],8,Ve))),128))],2)}}}),Ne=S(Be,[["__scopeId","data-v-7d34f2b8"]]),Ee={class:"content"},Fe={class:"outline-title"},He={"aria-labelledby":"doc-outline-aria-label"},Me=C({__name:"SakuraOutline",props:{viewScroll:{type:Boolean}},setup(a){const t=Y(),e=T(),o=T();Te(e,o,!a.viewScroll);const{headers:s,handleClick:n}=Se();return(l,c)=>{const p=Ne;return ne((u(),m("div",{ref_key:"container",ref:e},[i("div",Ee,[i("div",Fe,k(r(t).outlineTitle||"On this page"),1),i("div",{ref_key:"marker",ref:o,class:"outline-marker"},null,512),i("nav",He,[c[0]||(c[0]=i("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),g(p,{class:"va-toc css-i18n-toc relative z-1",headers:r(s),"on-click":r(n),root:""},null,8,["headers","on-click"])])])],512)),[[oe,r(s).length]])}}}),je=S(Me,[["__scopeId","data-v-ff038e8c"]]),ze={key:0,font:"serif black"},qe={class:"custom-container"},De=C({__name:"SakuraToc",props:{viewScroll:{type:Boolean,default:!1}},setup(a){const t=B(),{t:e}=R();return(o,s)=>{const n=je;return u(),m(E,null,[r(t).toc!==!1?(u(),m("h2",ze,k(r(e)("sidebar.toc")),1)):h("v-if",!0),i("div",qe,[w(o.$slots,"default",{},()=>[r(t).toc!==!1?(u(),b(n,{key:0,"view-scroll":o.viewScroll},null,8,["view-scroll"])):h("v-if",!0)],!0)])],64)}}}),Ye=S(De,[["__scopeId","data-v-22ec835f"]]),Qe={class:"sakura-post-nav-content"},Xe={class:"sakura-post-nav-content"},Je=C({__name:"SakuraPostNav",props:{src:{},to:{},alt:{},errorImg:{},scale:{},rotate:{},skewX:{},skewY:{},opacity:{},translateX:{},translateY:{},transitionDuration:{},transitionTimingFunction:{},overlay:{type:Boolean,default:!0},overlayColor:{},overlayOpacity:{default:0},overlayOpacityInitial:{default:.5}},setup(a){const t=a,e=Y(),[o,s]=we(),n=$(()=>{var l;return((l=e.value.postFooter)==null?void 0:l.navigationMerge)||!1});return(l,c)=>{var f,_,x,A,L,y;const p=P("RouterLink"),d=Q;return u(),m("div",{class:O(["sakura-post-nav",n.value&&"flex"])},[(f=r(o))!=null&&f.path?(u(),b(d,F({key:0},{...t,src:r(o).cover,to:r(o).path},{class:["card-prev",{"mt-10":!n.value,"w-1/2 rounded-l-$sakura-border-radius":((_=r(s))==null?void 0:_.path)&&n.value,"rounded-$sakura-border-radius":n.value&&!((x=r(s))!=null&&x.path)||!n.value}]}),{default:v(()=>[i("div",Qe,[c[0]||(c[0]=i("span",{class:"sakura-post-nav-label"}," Previous Post ",-1)),g(p,{to:r(o).path,class:"sakura-post-nav-title"},{default:v(()=>[V(k(r(o).title),1)]),_:1},8,["to"])])]),_:1},16,["class"])):h("v-if",!0),(A=r(s))!=null&&A.path?(u(),b(d,F({key:1},{...t,src:r(s).cover,to:r(s).path},{class:["card-next",{"w-1/2 rounded-r-$sakura-border-radius":((L=r(o))==null?void 0:L.path)&&n.value,"rounded-$sakura-border-radius":n.value&&!((y=r(o))!=null&&y.path)||!n.value}]}),{default:v(()=>[i("div",Xe,[c[1]||(c[1]=i("span",{flex:"","justify-end":"",class:"sakura-post-nav-label"}," Next Post ",-1)),g(p,{to:r(s).path,class:"sakura-post-nav-title",flex:"","justify-end":""},{default:v(()=>[V(k(r(s).title),1)]),_:1},8,["to"])])]),_:1},16,["class"])):h("v-if",!0)],2)}}}),Ge=S(Je,[["__scopeId","data-v-b6bb6733"]]),Ke={},We={class:"sakura-post-footer"},Ze={class:"py-8"};function et(a,t){const e=Ge,o=P("RouterLink");return u(),m("footer",We,[w(a.$slots,"nav",{},()=>[g(e)],!0),w(a.$slots,"back",{},()=>[i("div",Ze,[g(o,{class:"link",to:"/"},{default:v(()=>t[0]||(t[0]=[V(" ← Back to the blog ")])),_:1})])],!0)])}const tt=S(Ke,[["render",et],["__scopeId","data-v-f99429f0"]]),nt={class:"post-copyright"},ot={class:"post-copyright-author"},st={key:0,class:"post-copyright-link"},at=["href","title"],lt={class:"post-copyright-license"},rt=["innerHTML"],it=C({__name:"ValaxyCopyright",props:{url:{default:""}},setup(a){const{t,locale:e}=R(),o=N(),s=o.value.license.type==="zero"?"1.0":"4.0",n=o.value.license.type==="zero"?"publicdomain":"licenses",l=$(()=>{const p=o.value.license.language?o.value.license.language:e.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${n}/${o.value.license.type}/${s}/deed.${p}`}),c=$(()=>t("post.copyright.license_content",[`<a href="${l.value}" target="_blank" rel="noopener" title="CC ${`${o.value.license.type.toUpperCase()} ${s}`} ">CC ${o.value.license.type.toUpperCase()}</a>`]));return(p,d)=>(u(),m("ul",nt,[i("li",ot,[i("strong",null,k(r(t)("post.copyright.author")+r(t)("symbol.colon")),1),i("span",null,k(r(o).author.name),1)]),p.url?(u(),m("li",st,[i("strong",null,k(r(t)("post.copyright.link")+r(t)("symbol.colon")),1),i("a",{href:p.url,target:"_blank",title:r(t)("post.copyright.link")},k(decodeURI(p.url)),9,at)])):h("v-if",!0),i("li",lt,[i("strong",null,k(r(t)("post.copyright.license_title")+r(t)("symbol.colon")),1),i("span",{innerHTML:c.value},null,8,rt)])]))}}),ct={class:"flex-center flex-col"},ut=["title"],pt={key:0,class:"sponsor-description",mb:"4",text:"sm"},dt={class:"flex justify-around"},ft=["href"],mt=["src","title"],_t=C({__name:"SakuraSponsor",setup(a){const{t}=R(),e=N(),o=T(!1),s=$(()=>{var n;return((n=e.value.sponsor)==null?void 0:n.title)??t("reward.donate")});return(n,l)=>(u(),m("div",ct,[i("button",{title:s.value,onClick:l[0]||(l[0]=c=>o.value=!o.value)},l[1]||(l[1]=[i("div",{"i-ri-heart-line":"",class:"animation-hvr-bounce-in color-red-400"},null,-1)]),8,ut),i("div",{class:O(["flex-center qrcode-container qrcode flex-col",o.value&&"show"]),m:"y-4"},[r(e).sponsor.description?(u(),m("div",pt,k(r(e).sponsor.description),1)):h("v-if",!0),i("div",dt,[(u(!0),m(E,null,D(r(e).sponsor.methods,(c,p)=>(u(),m("a",{key:p,class:"flex-center flex-col animate-fade-in animate-iteration-1",href:c.url,target:"_blank",style:se(`color:${c.color}`)},[i("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:c.url,title:c.name},null,8,mt),i("div",{text:"xl",m:"2",class:O(c.icon)},null,2)],12,ft))),128))])],2)]))}}),vt=S(_t,[["__scopeId","data-v-e947c681"]]);function ht(){const a=ue();return $(()=>({placeholder:"-",...a.value.addons["valaxy-addon-vercount"].options}))}function gt(){const a=ht(),t=a.value.placeholder,e=T({pv:t,uv:t}),o=T({pv:t,uv:t});if(!pe)return{page:e,site:o};const s=_e(),n=a.value.baseUrl??window.location.origin,p=a.value.api==="cn"?"https://cn.vercount.one/log?jsonpCallback=VisitorCountCallback":a.value.api||"https://vercount.one/log?jsonpCallback=VisitorCountCallback",d=f=>{fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:f})}).then(_=>{if(!_.ok)throw new Error("Network response was not ok.");return _.json()}).then(_=>{e.value.pv=_.page_pv,e.value.uv=_.page_uv,o.value.pv=_.site_pv,o.value.uv=_.site_uv}).catch(_=>{console.error("Error fetching visitor count:",_)})};return s.beforeEach(f=>{const _=n+f.fullPath;d(_)}),q(()=>{d(window.location.href)}),{page:e,site:o}}const kt={class:"post-time flex items-center"},yt={class:"inline-flex-center"},$t={m:"l-1"},bt={class:"inline-flex-center"},Ct={m:"l-1"},St={key:0,class:"post-time flex items-center"},wt=["title"],xt=["title"],At={key:1,class:"post-time flex items-center"},Lt=["title"],Tt={m:"l-1"},It=["title"],Pt={m:"l-1"},Ot=C({__name:"SakuraPostMeta",props:{fm:{}},setup(a){const{page:t}=gt(),{t:e}=R(),o=N();return(s,n)=>{const l=Q,c=ve;return u(),m("div",{class:O(["sakura-post-meta",{"text-$sakura-text-muted-color":!s.fm.cover}]),flex:"~ <md:col",justify:"center",items:"center",py:"1"},[i("div",kt,[i("span",yt,[g(l,{to:"/about",class:"mr-3px h-30px w-30px rounded-full",src:r(o).author.avatar,alt:"author image"},null,8,["src"]),i("span",$t,k(r(o).author.name),1)]),h(" TODO: 分类,标签 "),n[1]||(n[1]=i("span",{"mr-4":""},null,-1)),i("span",bt,[n[0]||(n[0]=i("div",{"i-ri-eye-line":""},null,-1)),i("span",Ct,k(r(t).pv),1)]),n[2]||(n[2]=i("span",{"mr-4":""},null,-1))]),s.fm?(u(),m("div",St,[i("span",{class:"inline-flex-center posted-time",title:r(e)("post.posted")+s.fm.date},[n[3]||(n[3]=i("div",{class:"inline-block","i-ri-calendar-line":""},null,-1)),g(c,{m:"l-1",itemprop:"datePublished",date:s.fm.date},null,8,["date"])],8,wt),s.fm.updated&&s.fm.updated!==s.fm.date?(u(),m("span",{key:0,class:"inline-flex-center edited-time",title:r(e)("post.edited")+s.fm.updated},[n[4]||(n[4]=i("span",{m:"x-2"},"-",-1)),n[5]||(n[5]=i("div",{"i-ri-calendar-2-line":""},null,-1)),g(c,{m:"l-1",itemprop:"dateModified",date:s.fm.updated},null,8,["date"])],8,xt)):h("v-if",!0),n[6]||(n[6]=i("span",{"mr-4":""},null,-1))])):h("v-if",!0),r(o).statistics.enable?(u(),m("div",At,[s.fm.wordCount?(u(),m("span",{key:0,class:"inline-flex-center word-count",title:r(e)("statistics.word")},[n[7]||(n[7]=i("div",{class:"inline-block","i-ri-file-word-line":""},null,-1)),i("span",Tt,k(s.fm.wordCount),1)],8,Lt)):h("v-if",!0),s.fm.readingTime?(u(),m("span",{key:1,class:"inline-flex-center reading-time",title:r(e)("statistics.time")},[n[8]||(n[8]=i("span",{m:"x-2"},"-",-1)),n[9]||(n[9]=i("div",{"i-ri-timer-line":""},null,-1)),i("time",Pt,k(s.fm.readingTime)+"m",1)],8,It)):h("v-if",!0)])):h("v-if",!0)],2)}}}),Rt={class:"flex flex-col"},Ut=C({__name:"SakuraPostHeader",props:{fm:{}},setup(a){return(t,e)=>{const o=Ot,s=K;return u(),b(s,{fm:t.fm,class:"sakura-post-header"},{default:v(()=>[i("div",Rt,[g(o,{fm:t.fm},null,8,["fm"])])]),_:1},8,["fm"])}}}),Vt=C({__name:"SakuraPost",setup(a){const t=N(),e=B(),o=de(),s=$(()=>typeof e.value.sponsor=="boolean"?e.value.sponsor:t.value.sponsor.enable),n={"@type":"BlogPosting",headline:e.value.title,description:e.value.description,author:[{name:t.value.author.name,url:t.value.author.link}],datePublished:M(e.value.date||0),dateModified:M(e.value.updated||0),image:e.value.image||e.value.cover};return he(ge(n)),(l,c)=>{const p=Ut,d=vt,f=it,_=tt,x=P("RouterView"),A=Ye,L=Ue,y=W;return u(),b(y,{class:"sakura-post"},ae({header:v(()=>[g(p,{fm:r(e)},null,8,["fm"])]),content:v(()=>[w(l.$slots,"content",{},()=>[g(x,null,{default:v(({Component:I})=>[(u(),b(le(I),null,{"main-content-after":v(()=>[s.value?(u(),b(d,{key:0})):h("v-if",!0),r(e).copyright||r(t).license.enabled?(u(),b(f,{key:1,url:r(o)},null,8,["url"])):h("v-if",!0)]),footer:v(()=>[g(_)]),_:2},1024))]),_:1})])]),right:v(()=>[w(l.$slots,"right",{},()=>[g(L,null,{default:v(()=>[g(A)]),_:1})])]),_:2},[l.$slots.left?{name:"left",fn:v(()=>[w(l.$slots,"left")]),key:"0"}:void 0]),1024)}}}),Bt={};function Nt(a,t){const e=Vt;return u(),b(e)}const Gt=S(Bt,[["render",Nt]]);export{Gt as default};
