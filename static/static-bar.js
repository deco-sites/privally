!function(e){let t=window.location.hostname,i=t+".privally",o=new Date;o.setFullYear(o.getFullYear()+1);let n=o.toUTCString(),r=document.cookie.includes(i),a;r?a=JSON.parse(document.cookie.split("; ").find(e=>e.startsWith(i)).split("=")[1]):(a={allow:[{name:"necessary",value:!0},{name:"analytical",value:!1},{name:"functional",value:!1},{name:"marketing",value:!1},],cookies:{necessary:[{name:i,domain:t},{name:"vtex_segment",domain:"loja-deco.privally.dev"},{name:"CheckoutOrderFormOwnership",domain:".loja-deco.privally.dev"},{name:"FPID",domain:".privally.dev"},{name:"checkout.vtex.com",domain:".loja-deco.privally.dev"},],analytical:[{name:"_ga",domain:".privally.dev"},],functional:[{name:"FPLC",domain:".privally.dev"},],marketing:[{name:"_fbp",domain:".privally.dev"},]}},document.cookie=`${i}=${JSON.stringify(a)}; path=/; SameSite=strict; expires=${n}; Secure`);let l=a.allow.reduce(function(e,t){return t.value||(e=e.concat(a.cookies[t.name])),e},[]);e.b=l,setInterval(function(){l.forEach(function(e){var t=e.name,i=e.domain;document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain="+i})},8e3);var p,c=document.getElementById("PrivallyApp"),d="true"===c.getAttribute("reload"),s="true"===c.getAttribute("h-reject"),v="js/block",u=[],m=new MutationObserver(function(e){e.forEach(function(e){var t=e.addedNodes.item(0);if(t&&1===t.nodeType&&"SCRIPT"===t.tagName&&y(t.outerHTML)&&A(t.src)){var i=t.type,o=t.parentNode?.localName;u.push({node:t,originalType:i,parentNode:o}),t.type=v,t.addEventListener("beforescriptexecute",f),t.remove()}})}),y=function(t){return e.f.every(function(e){return!t.includes(decodeURIComponent(atob(e)))})},A=function(e){return!!e&&!e.includes(window.location.host)},f=function(e){e.srcElement.getAttribute("type")===v&&e.preventDefault(),e.srcElement.removeEventListener("beforescriptexecute",f)},x=function(){if($()){var e=u[p];u.splice(p,1);for(var t=document.createElement("script"),i=0;i<e.node.attributes.length;i++){var o=e.node.attributes[i];"src"!==o.name&&"type"!==o.name&&t.setAttribute(o.name,e.node.attributes[i].value)}e.node.src&&t.setAttribute("src",e.node.src),t.setAttribute("type",e.originalType||"application/javascript"),t.text=e.node.text,t.async=!1,t.defer=!0,e.node.src?(t.onload=function(e){x()},t.onerror=function(e){x()}):setTimeout(function(){x()},100),document[e.parentNode]?document[e.parentNode].appendChild(t):document.body.appendChild(t)}},$=function(){return -1!==(p=u.findIndex(function(t){return e.b.every(function(i){var o=!t.node.outerHTML.includes(i.domain),n=e.r.reduce(function(e,o){return decodeURIComponent(atob(o.n))===i.name&&(e=!t.node.outerHTML.includes(decodeURIComponent(atob(o.p)))),e},!0),r=e.rb.reduce(function(e,o){return decodeURIComponent(atob(o.n))===i.name&&(e=!t.node.outerHTML.includes(decodeURIComponent(atob(o.p)))),e},!0);return o&&n&&r})}))},b=function(){null==document.querySelector("#oPrivallyApp")?setTimeout(function(){b()},200):(x(),P(),s&&(document.querySelector("#oPrivallyApp #oPrivallyApp-RejectAllBox")?.remove(),document.querySelector("#oPrivallyApp .btnRejectAllM3")?.remove()))},P=function(){document.querySelector("#oPrivallyApp #oPrivallyApp-SettingsSaveBox")?.addEventListener("click",k),document.querySelector("#oPrivallyApp .btnRejectAllM3")?.addEventListener("click",k),document.querySelector("#oPrivallyApp .btnAcceptCookiesM3")?.addEventListener("click",k),document.querySelector("#oPrivallyApp .oPrivallyApp-RejectLinkA")?.addEventListener("click",k),document.querySelector("#oPrivallyApp .oPrivallyApp-AcceptLinkA")?.addEventListener("click",k)},k=function(){d?setTimeout(function(){location.reload(!0)},300):x()};m.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]}),document.addEventListener("DOMContentLoaded",function(e){m.disconnect(),b()})}({b:[],f:["X2Zyc2glMkY=","cmVxdWVzdElkbGVDYWxsYmFjaw==","YXBwbGljYXRpb24lMkZqc29u","ZGVidWdHbG9iYWxz","YXBwbGljYXRpb24lMkZsZCUyQmpzb24="],r:[{n:"X0dSRUNBUFRDSEE=",p:"Z3JlY2FwdGNoYS5lbnRlcnByaXNl"},],rb:[{n:"ZnI=",p:"Y29ubmVjdC5mYWNlYm9vay5uZXQ="}]}),function(){let e=`<style rel="stylesheet" type="text/css">#oPrivallyApp-Bar,.oPrivallyApp-BarCookies{padding:8px 10px!important}#oPrivallyApp *{transition:.5s}#oPrivallyApp-AlertBox p,#oPrivallyApp-BarContent{font-family:Arial,Helvetica,sans-serif!important}#oPrivallyApp-Bar{background:#fff!important;bottom:0;border-radius:3px!important;-moz-border-radius:3px!important;-webkit-border-radius:3px 3px 3px 3px!important;box-shadow:0 3px 6px 0 rgba(0,0,0,.2)!important;left:0!important;right:0!important;margin:60px auto!important;width:calc(100% - 20px)!important;max-width:800px;position:fixed!important;clear:both!important;z-index:9999999998!important;box-sizing:border-box!important;letter-spacing:normal!important}#oPrivallyApp-BarContent p{color:#000}#oPrivallyApp-AcceptBox,#oPrivallyApp-RejectAllBox,#oPrivallyApp-SettingsBox{border-radius:3px!important}#oPrivallyApp-AlertBox p{color:#000!important;font-size:13px!important}#oPrivallyApp-AlertBox a{color:#ffb500!important}#oPrivallyApp-AcceptLink,#oPrivallyApp-ConsentLink,#oPrivallyApp-RejectAll,#oPrivallyApp-SettingsLink{color:#fff!important;background:#f20024!important;border-radius:3px!important;font:13px Arial,Helvetica,sans-serif!important;white-space:nowrap;padding:8px 15px!important;cursor:pointer}#oPrivallyApp-AcceptLink:hover,#oPrivallyApp-ConsentLink:hover,#oPrivallyApp-RejectAll:hover,#oPrivallyApp-SettingsLink:hover{background:#92a2ae!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important}#oPrivallyApp-OptionsBox{display:flex;align-items:center;gap:10px;justify-content:center}@media only screen and (max-width:699px){#oPrivallyApp-BarContent{text-align:center!important;padding-bottom:10px!important}#oPrivallyApp-OptionsBox{margin-top:15px;flex-wrap:wrap}}@media only screen and (min-width:700px){#oPrivallyApp-BarContent{display:flex;justify-content:space-between;align-items:center;gap:10px}}</style><div id=oPrivallyApp style=display:block;opacity:1.012><div id=oPrivallyApp-Bar><div class=oPrivallyApp-Clearfix></div><div class=oPrivallyApp-BarCookies><div id=oPrivallyApp-BarContent><div id=oPrivallyApp-AlertBox><p>Clicando em "Aceito todos os Cookies", voc\xea concorda com o armazenamento de cookies no seu dispositivo para melhorar a experi\xeancia e navega\xe7\xe3o no site.</p></div><div id=oPrivallyApp-OptionsBox><div id=oPrivallyApp-SettingsBox><span id=oPrivallyApp-SettingsLink> Prefer\xeancias </span></div><div id=oPrivallyApp-RejectAllBox><span id=oPrivallyApp-RejectAll class=oPrivallyApp-RejectLinkA>Rejeitar Todos</span></div><div id=oPrivallyApp-AcceptBox><span id=oPrivallyApp-AcceptLink class=oPrivallyApp-AcceptLinkA>Aceitar Todos</span></div></div></div></div></div></div>`;window.onload=t=>{console.log("page is fully loaded"),document.body.insertAdjacentHTML("beforeend",e)}}();