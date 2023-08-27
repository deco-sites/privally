(function () {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  const dateCookie = oneYearFromNow.toUTCString();

  const dataCookie = {
    teste: "oi",
  };

  document.cookie = `__oPrivallyCookiePref=${JSON.stringify(
    dataCookie
  )}; path=/; SameSite=strict; expires=${dateCookie}; Secure`;

  const template = `
    <style rel="stylesheet" type="text/css">#oPrivallyApp-AlertBox p,#oPrivallyApp-BarContent{font-family:Arial,Helvetica,sans-serif!important}#oPrivallyApp-Bar{background:#fff!important;padding:8px 10px!important;bottom:0;border-radius:3px!important;-moz-border-radius:3px!important;-webkit-border-radius:3px 3px 3px 3px!important;box-shadow:0 3px 6px 0 rgba(0,0,0,.2)!important;left:0!important;right:0!important;margin:60px auto!important;width:calc(100% - 20px)!important;max-width:800px}#oPrivallyApp-BarContent p{color:#000}#oPrivallyApp-AcceptBox,#oPrivallyApp-RejectAllBox,#oPrivallyApp-SettingsBox{border-radius:3px!important}#oPrivallyApp-AlertBox p{color:#000!important;font-size:13px!important}#oPrivallyApp-AlertBox a{color:#ffb500!important}#oPrivallyApp-AcceptLink,#oPrivallyApp-ConsentLink,#oPrivallyApp-RejectAll,#oPrivallyApp-SettingsLink{color:#fff!important;background:#f20024!important;border-radius:3px!important;font:13px Arial,Helvetica,sans-serif!important}#oPrivallyApp-AcceptLink:hover,#oPrivallyApp-ConsentLink:hover,#oPrivallyApp-RejectAll:hover,#oPrivallyApp-SettingsLink:hover{background:#92a2ae!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important}</style>
    <div id=oPrivallyApp style=display:block;opacity:1.012><div id=oPrivallyApp-Bar><div class=oPrivallyApp-Clearfix></div><div class=oPrivallyApp-BarCookies><div id=oPrivallyApp-BarContent><div id=oPrivallyApp-AlertBox><p>Clicando em "Aceito todos os Cookies", você concorda com o armazenamento de cookies no seu dispositivo para melhorar a experiência e navegação no site.</p></div><div id=oPrivallyApp-OptionsBox><div id=oPrivallyApp-SettingsBox><span id=oPrivallyApp-SettingsLink> Preferências </span></div><div id=oPrivallyApp-RejectAllBox><span id=oPrivallyApp-RejectAll class=oPrivallyApp-RejectLinkA>Rejeitar Todos</span></div><div id=oPrivallyApp-AcceptBox><span id=oPrivallyApp-AcceptLink class=oPrivallyApp-AcceptLinkA>Aceitar Todos</span></div></div></div></div></div></div>
  `;

  document.body.insertAdjacentHTML("beforeend", template);
})();
