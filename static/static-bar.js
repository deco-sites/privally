(function(permissions) {

    const hostname = window.location.hostname;
    const _ctrlCookieName = hostname + '.privally';

    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  
    const _ctrlDateCookie = oneYearFromNow.toUTCString();

    const hasCtrlContentCookie = document.cookie.includes(_ctrlCookieName);

    let _ctrlContentCookie;
    if (!hasCtrlContentCookie) {
        _ctrlContentCookie = {
            allow: [
                { name: 'necessary', value: true },
                { name: 'analytical', value: true },
                { name: 'functional', value: true },
                { name: 'marketing', value: false },
            ],
            cookies: {
                necessary: [
                    { name: _ctrlCookieName, domain: hostname },
                    { name: 'vtex_segment', domain: 'loja-deco.privally.dev' },
                    { name: 'CheckoutOrderFormOwnership', domain: '.loja-deco.privally.dev' },
                    { name: 'FPID', domain: '.privally.dev' },
                    { name: 'checkout.vtex.com', domain: '.loja-deco.privally.dev' },
                ],
                analytical: [
                    { name: '_ga', domain: '.privally.dev' },
                ],
                functional: [
                    { name: 'FPLC', domain: '.privally.dev' },
                ],
                marketing: [
                    { name: '_fbp', domain: '.privally.dev' },
                ]
            }
        };
      
        document.cookie = `${_ctrlCookieName}=${JSON.stringify(
          _ctrlContentCookie
        )}; path=/; SameSite=strict; expires=${_ctrlDateCookie}; Secure`;

    } else {
        _ctrlContentCookie = JSON.parse(
          document.cookie
            .split('; ')
            .find((row) => row.startsWith(_ctrlCookieName))
            .split('=')[1]
        );
    }

    const clearListCookie = _ctrlContentCookie.allow.reduce(function(acc, item) {
        if (!item.value) {
            acc = acc.concat(_ctrlContentCookie.cookies[item.name]);
        }
        return acc;
    }, []);

    permissions.b = clearListCookie;
  
    const clearListCookieInterval = setInterval(function() {
        clearListCookie.forEach(function(e) {
            var name = e.name;
            var domain = e.domain;
            
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + domain;
        })
    }, 8000);

    var __a = document.getElementById('PrivallyApp');
    var isReload = __a.getAttribute("reload") === "true";
    var hideRejectAllButton = __a.getAttribute("h-reject") === "true";
  
    var ATTRIBUTE_TYPE = "js/block";
    var backupScripts = [];
    var _index;
  
    var mutationObserver = new MutationObserver(function(mutations) {
  
        mutations.forEach(function(mutation) {
            var node = mutation.addedNodes.item(0);
    
            if (node && node.nodeType === 1 && node.tagName === 'SCRIPT') {
  
                if (notOnTheFreeList(node.outerHTML) && anotherHost(node.src)) {
  
                    var originalType = node.type;
                    var parentNode = node.parentNode?.localName;
                    backupScripts.push({node, originalType, parentNode});
        
                    node.type = ATTRIBUTE_TYPE;
        
                    node.addEventListener('beforescriptexecute', beforeScriptExecuteListener);
                    node.remove();
                }
                
            }
        })
    });
  
    var notOnTheFreeList = function (outerHTML) {
        return permissions.f.every(function(freeItem) {
            return !outerHTML.includes(decodeURIComponent(atob(freeItem)));
        });
    }
  
    var anotherHost = function (src) {
        if (src) {
            return !src.includes(window.location.host);
        } 
        return false;
    }
  
    var beforeScriptExecuteListener = function (event) {
        if (event.srcElement.getAttribute('type') === ATTRIBUTE_TYPE) {
            event.preventDefault();
        };
        event.srcElement.removeEventListener('beforescriptexecute', beforeScriptExecuteListener);
    }
  
    var applyScript = function() {
  
        if (hasNonBlockingScript()) {
  
            var backup = backupScripts[_index];
  
            backupScripts.splice(_index, 1)
    
            var scriptNode = document.createElement('script');
            for (var i = 0; i < backup.node.attributes.length; i++) {
                var attribute = backup.node.attributes[i];
                if (attribute.name !== 'src' && attribute.name !== 'type') {
                    scriptNode.setAttribute(attribute.name, backup.node.attributes[i].value);
                }
            }
            backup.node.src && scriptNode.setAttribute('src', backup.node.src);
            scriptNode.setAttribute('type', backup.originalType || 'application/javascript');
    
            scriptNode.text = backup.node.text;
            scriptNode.async = false;
            scriptNode.defer = true;
    
            if (backup.node.src) {
                scriptNode.onload = function(event) {
                    applyScript();
                }
                scriptNode.onerror = function(error) {
                    applyScript();
                }
  
            } else {
                setTimeout(function(){
                    applyScript();
                }, 100)
            }
  
            if (document[backup.parentNode]) {
                document[backup.parentNode].appendChild(scriptNode);
            } else {
                document.body.appendChild(scriptNode);
            }
        }
    }
  
    var hasNonBlockingScript = function() {
        _index = backupScripts.findIndex(function(backupScript) {
  
            return permissions.b.every(function(blockItem) {
               
                var domainVerify = !backupScript.node.outerHTML.includes(blockItem.domain);
  
                var nameVerify = permissions.r.reduce(function(acc, item) {
  
                    if (decodeURIComponent(atob(item.n)) === blockItem.name) {
                        acc = !backupScript.node.outerHTML.includes(decodeURIComponent(atob(item.p)));
                    }
  
                    return acc;
  
                }, true);
  
                var noBlockingRelationship = permissions.rb.reduce(function(acc, item) {
  
                    if (decodeURIComponent(atob(item.n)) === blockItem.name) {
                        acc = !backupScript.node.outerHTML.includes(decodeURIComponent(atob(item.p)));
                    }
  
                    return acc;
  
                }, true);
  
                return domainVerify && nameVerify && noBlockingRelationship;
                
            });
        })
  
        return _index !== -1;
    }
  
    var unblock = function() {
        if (null == document.querySelector('#oPrivallyApp')) {
            setTimeout(function(){
                unblock();
            }, 200)
        } else {
            // generateBlockList();
            applyScript();
            onChangeConsent();
  
            if (hideRejectAllButton) {
                document.querySelector('#oPrivallyApp #oPrivallyApp-RejectAllBox')?.remove();
                document.querySelector('#oPrivallyApp .btnRejectAllM3')?.remove();
            }
        }
    }
  
    var onChangeConsent = function() {
        document.querySelector('#oPrivallyApp #oPrivallyApp-SettingsSaveBox')?.addEventListener('click', applyChangeConsent);
        document.querySelector('#oPrivallyApp .btnRejectAllM3')?.addEventListener('click', applyChangeConsent);
        document.querySelector('#oPrivallyApp .btnAcceptCookiesM3')?.addEventListener('click', applyChangeConsent);
        document.querySelector('#oPrivallyApp .oPrivallyApp-RejectLinkA')?.addEventListener('click', applyChangeConsent);
        document.querySelector('#oPrivallyApp .oPrivallyApp-AcceptLinkA')?.addEventListener('click', applyChangeConsent);
    }
  
    var applyChangeConsent = function() {
        if (isReload) {
            setTimeout(function () { location.reload(true); }, 300);
        } else { 
            // generateBlockList(true);
            applyScript();
        }
    }
  
    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["src"],
    });
  
    document.addEventListener("DOMContentLoaded", function(event) {
        mutationObserver.disconnect();
        unblock();
    });
  
  })({
    b: [],
    f: [
        "YXBwLnByaXZhbGx5Lmdsb2JhbA==",
        "Y2RuLmpzZGVsaXZyLm5ldCUyRm5wbSUyRiU0MHBvcHBlcmpz",
        "Y2RuLmpzZGVsaXZyLm5ldCUyRm5wbSUyRmJvb3RzdHJhcA==",
        "Y2RuLmpzZGVsaXZyLm5ldCUyRm5wbSUyRnNsaWNrLWNhcm91c2Vs",
        "Y2RuLmpzZGVsaXZyLm5ldCUyRm5wbSUyRnN3aXBlcg==",
        "bmV3JTIwU3dpcGVyKA==",
        "KS5zbGljayg=",
        "JTJGd3AtaW5jbHVkZXMlMkY=",
        "dmFyJTIwd3BjZjclM0QlN0I=",
        "JTJGd3AtY29udGVudCUyRg==",
        "dmFyJTIwUFBXQUdsb2JhbFZhcnMlM0QlN0I=",
        "dmFyJTIwbG9jYWxpemUlM0QlN0I=",
        "dmFyJTIwb2NlYW53cExvY2FsaXplJTNEJTdC",
        "d2luZG93LmxvZGFzaCUzRF8ubm9Db25mbGljdCgp",
        "d3AuaTE4bi5zZXRMb2NhbGVEYXRh",
        "d3AuZGF0YS51c2U=",
        "d3AuYXBpRmV0Y2gudXNl",
        "bW9tZW50LnVwZGF0ZUxvY2FsZQ==",
        "d3AuZGF0ZS5zZXRTZXR0aW5ncw==",
        "d3AucHJlZmVyZW5jZXNQZXJzaXN0ZW5jZQ==",
        "d2luZG93LndwLmVkaXRvcg==",
        "dmFyJTIwamdiU2V0dGluZ3MlM0QlN0I=",
        "dmFyJTIwamV0TWVudVB1YmxpY1NldHRpbmdzJTNEJTdC",
        "Q3hDU1NDb2xsZWN0b3I=",
        "dmFyJTIwRWxlbWVudG9yUHJvRnJvbnRlbmRDb25maWclM0QlN0I=",
        "dmFyJTIwZWxlbWVudG9yRnJvbnRlbmRDb25maWclM0QlN0I=",
        "dmFyJTIwamV0RWxlbWVudHMlM0QlN0I=",
        "dmFyJTIwX3dwVXRpbFNldHRpbmdzJTNEJTdC",
        "dmFyJTIwd3Bmb3Jtc0VsZW1lbnRvclZhcnMlM0QlN0I=",
        "c3RhdHMud3AuY29tJTJGZS0yMDIyNTEuanM=",
        "YXBwbGljYXRpb24lMkZsZCUyQmpzb24=",
        "d2luZG93LnNldFplcm9UaW1lb3V0",
        "d2luZG93Ll9fSEFTX0hZRFJBVEVEX18lMjAlM0Q=",
        "X19SVU5USU1FX18lMjAlM0QlMjAlN0I=",
        "d2luZG93Ll9fQVNZTkNfU0NSSVBUU19SRUFEWV9f",
        "aW8udnRleC5jb20=",
        "dnRleGltZy5jb20=",
        "dnRleGFzc2V0cy5jb20=",
        "SW50bC5OdW1iZXJGb3JtYXQucG9seWZpbGxlZA==",
        "JTJGbGliJTJGanF1ZXJ5LTMuNi4wLm1pbi5qcw==",
        "JTJGbGliJTJGYm9vdHN0cmFwLm1pbi5qcw==",
        "JTJGbGliJTJGanF1ZXJ5LmJzLm1zZ2JveC5qcw==",
        "JTJGbGliJTJGbW9kZXJuaXpyLTIuNi4yLmpz",
        "Z2V0UGVyc29uYWxpemFjYW9CeUhvc3RuYW1lKCk=",
        "RmluaXNoRGVtbygp",
        "TG9nYXJDYXB0aGEoKQ==",
        "JTJGanMlMkZpbml0Lmpz",
        "JTJGbGliJTJGcGx1Z2lucyUyRnN3ZWV0YWxlcnQyJTJGc3dlZXRhbGVydDIuanM=",
        "JTJGanMlMkZ2aWV3cyUyRmRlZmF1bHQlMkZsb2dpbi5qcw==",
        "d3d3Lmdvb2dsZS5jb20lMkZyZWNhcHRjaGElMkZhcGkuanM=",
        "JTJGbG9qYSUyRkFzc2V0cyUyRmpzJTJG",
        "YXJBeHlzR2FEYXRh",
        "JTJGbGliJTJGanF1ZXJ5",
        "JTJGanMlMkZhcHAuanM=",
        "JTJGbGliJTJGcGx1Z2lucyUyRnRvYXN0JTJGdG9hc3QuanM=",
        "JTJGbGliJTJGY29va2llcy5qcw==",
        "Q29va2llcy5nZXQo",
        "dGl0bGVpemUo",
        "JTJGbGliJTJGZnVsbGNhbGVuZGFyLm1pbi5qcw==",
        "KS5mdWxsQ2FsZW5kYXIo",
        "JTJGbGliJTJGbW9tZW50LXdpdGgtbG9jYWxlcy5qcw==",
        "JTJGbGliJTJGYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLm1pbi5qcw==",
        "Q2FycmVnYUNhbXBv",
        "RnVuY2FvQ2FtcG8=",
        "Q29kX0F1dG9yaXphY2Fv",
        "Tm9tX1NlcmlhbE51bWJlcg==",
        "Q29kX0JhbmRlaXJhUHJvZHV0bw==",
        "Q29kX1RpcG9UcmFu",
        "Q29kX1N0YXR1c1RyYW4=",
        "aXNOdW1iZXJLZXkoZXZ0KQ==",
        "TnVtX05TVUFjcXVpcmVy",
        "Q29kX01vZGVsb05lZ29jaW8=",
        "JTJGbGliJTJGYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpz",
        "JTJGbGliJTJGZGF0YVRhYmxlcy50YWJsZVRvb2xzLm1pbi5qcw==",
        "JTJGbGliJTJGZGF0YVRhYmxlcy5jb2xWaXMubWluLmpz",
        "YXR1YWxpemFyVG90YWlzSHRtbFZpYUpzb24=",
        "Q29kX1N0YXR1c1ByZVN1YlNlbGxlcg==",
        "c2V0UGVyc29uYWxpemFjYW9JbkhlYWRlclN0eWxl",
        "dHlwZSUzRCUyMmFwcGxpY2F0aW9uJTJGanNvbiUyMg==",
        "JTJGbG9qYS12aXJ0dWFsJTJG",
        "YWx0dWJvdHMuY29t",
        "X19fc2NyaXB0UGF0aA==",
        "X19fc2NyaXB0UGF0aFRyYW5zYWM=",
        "bXl2dGV4LmNvbQ==",
        "ZGVmYXVsdFV0bUZyb21Gb2xkZXI=",
        "dnRleFRhZ01hbmFnZXJIZWxwZXI=",
        "dnRleGlk",
        "bWVudUN1c3RvbQ==",
        "d2luZG93LnVldHE=",
        "ZW5hYmxlRnVsbFRleHRTZWFyY2hCb3g=",
        "bG96YWQubWluLmpz",
        "X2Zyc2glMkY=",
        "cmVxdWVzdElkbGVDYWxsYmFjaw==",
        "YXBwbGljYXRpb24lMkZqc29u",
        "ZGVidWdHbG9iYWxz",
        "Y2hhb3JkaWNzeXN0ZW1zLmNvbQ==",
        "YXBwLWFnZW5kYW1lbnRv",
        "JTJGZ3RtLmpz",
        "anF1ZXJ5JTJGanF1ZXJ5",
        "anF1ZXJ5LW1pZ3JhdGU=",
        "d2lkZ2V0cmVhY2g=",
        "YWRzYXBp",
        "am9zZWNhci1tYXZlcmljaw==",
        "bG9hZGVyLXNjcmlwdHM=",
        "cmRzdGF0aW9uLWZvcm1z",
        "a2FzcGVyc2t5LWxhYnM=",
        "YW9zLmpz",
        "Y29kZS5qcXVlcnk=",
        "cGxheWVyLnZpbWVv",
        "cmVjYXB0Y2hh",
        "bGlicyUyRmpxdWVyeQ==",
        "dGhlaG90ZWxzbmV0d29yay5jb20lMkZqcyUyRmxvYWRlci5qcw==",
        "dHJhbnNhbWVyaWNhY29tYW5kYXR1YmEuaW5mb3RyYXZlbC5jb20uYnI=",
        "ZnJlc2hkZXNr",
      ],
    r: [
        { n: 'X0dSRUNBUFRDSEE=', p: 'Z3JlY2FwdGNoYS5lbnRlcnByaXNl' },
    ],
    rb: [
        { n: 'ZnI=', p: 'Y29ubmVjdC5mYWNlYm9vay5uZXQ=' }
    ]
});

(function () {
const template = `
<style rel="stylesheet" type="text/css">#oPrivallyApp-Bar,.oPrivallyApp-BarCookies{padding:8px 10px!important}#oPrivallyApp *{transition:.5s}#oPrivallyApp-AlertBox p,#oPrivallyApp-BarContent{font-family:Arial,Helvetica,sans-serif!important}#oPrivallyApp-Bar{background:#fff!important;bottom:0;border-radius:3px!important;-moz-border-radius:3px!important;-webkit-border-radius:3px 3px 3px 3px!important;box-shadow:0 3px 6px 0 rgba(0,0,0,.2)!important;left:0!important;right:0!important;margin:60px auto!important;width:calc(100% - 20px)!important;max-width:800px;position:fixed!important;clear:both!important;z-index:9999999998!important;box-sizing:border-box!important;letter-spacing:normal!important}#oPrivallyApp-BarContent p{color:#000}#oPrivallyApp-AcceptBox,#oPrivallyApp-RejectAllBox,#oPrivallyApp-SettingsBox{border-radius:3px!important}#oPrivallyApp-AlertBox p{color:#000!important;font-size:13px!important}#oPrivallyApp-AlertBox a{color:#ffb500!important}#oPrivallyApp-AcceptLink,#oPrivallyApp-ConsentLink,#oPrivallyApp-RejectAll,#oPrivallyApp-SettingsLink{color:#fff!important;background:#f20024!important;border-radius:3px!important;font:13px Arial,Helvetica,sans-serif!important;white-space:nowrap;padding:8px 15px!important;cursor:pointer}#oPrivallyApp-AcceptLink:hover,#oPrivallyApp-ConsentLink:hover,#oPrivallyApp-RejectAll:hover,#oPrivallyApp-SettingsLink:hover{background:#92a2ae!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important}#oPrivallyApp-OptionsBox{display:flex;align-items:center;gap:10px;justify-content:center}@media only screen and (max-width:699px){#oPrivallyApp-BarContent{text-align:center!important;padding-bottom:10px!important}#oPrivallyApp-OptionsBox{margin-top:15px;flex-wrap:wrap}}@media only screen and (min-width:700px){#oPrivallyApp-BarContent{display:flex;justify-content:space-between;align-items:center;gap:10px}}</style>
<div id=oPrivallyApp style=display:block;opacity:1.012><div id=oPrivallyApp-Bar><div class=oPrivallyApp-Clearfix></div><div class=oPrivallyApp-BarCookies><div id=oPrivallyApp-BarContent><div id=oPrivallyApp-AlertBox><p>Clicando em "Aceito todos os Cookies", você concorda com o armazenamento de cookies no seu dispositivo para melhorar a experiência e navegação no site.</p></div><div id=oPrivallyApp-OptionsBox><div id=oPrivallyApp-SettingsBox><span id=oPrivallyApp-SettingsLink> Preferências </span></div><div id=oPrivallyApp-RejectAllBox><span id=oPrivallyApp-RejectAll class=oPrivallyApp-RejectLinkA>Rejeitar Todos</span></div><div id=oPrivallyApp-AcceptBox><span id=oPrivallyApp-AcceptLink class=oPrivallyApp-AcceptLinkA>Aceitar Todos</span></div></div></div></div></div></div>
`;
  
window.onload = (event) => {
    console.log("page is fully loaded");
    document.body.insertAdjacentHTML("beforeend", template);
};
})();
  