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
                { name: 'analytical', value: false },
                { name: 'functional', value: false },
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
        "X2Zyc2glMkY=",
        "cmVxdWVzdElkbGVDYWxsYmFjaw==",
        "YXBwbGljYXRpb24lMkZqc29u",
        "ZGVidWdHbG9iYWxz",
        "YXBwbGljYXRpb24lMkZsZCUyQmpzb24="
    ],
    r: [
        { n: 'X0dSRUNBUFRDSEE=', p: 'Z3JlY2FwdGNoYS5lbnRlcnByaXNl' },
    ],
    rb: [
        { n: 'ZnI=', p: 'Y29ubmVjdC5mYWNlYm9vay5uZXQ=' }
    ]
});