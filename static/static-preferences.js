(function () {
  const style = `
		<style rel="stylesheet" type="text/css">
        #oPrivallyApp-ModalContent {
          padding-bottom: 20px !important;
        }
        #oPrivallyApp label {
          padding: 0;
          position: relative;
        }
        #oPrivallyApp-Modal p,
        #oPrivallyApp-Modal h1,
        #oPrivallyApp-Modal h2,
        #oPrivallyApp-Modal h3,
        #oPrivallyApp-Modal h4,
        #oPrivallyApp-Modal h5,
        #oPrivallyApp-Modal a,
        #oPrivallyApp-Modal ul li #oPrivallyApp-Modal label {
          font-family: Arial, Helvetica, sans-serif !important;
        }
        .oPrivallyApp-ModalTitle {
          color: rgb(255, 255, 255) !important;
          font-family: Arial, Helvetica, sans-serif !important;
        }
        .oPrivallyModalHeader {
          color: rgb(0, 0, 0) !important;
          font-size: 11px !important;
        }
        .oPrivallyApp-ModalText {
          color: rgb(0, 0, 0);
          font-size: 11px;
          font-family: Arial, Helvetica, sans-serif !important;
        }
        .oPrivallyApp-ModalText ul li {
          color: rgb(0, 0, 0) !important;
        }
        #oPrivallyApp-ModalMenuFooter {
          font-family: Arial, Helvetica, sans-serif !important;
          margin-bottom: 10px !important;
        }
        #oPrivallyApp-ModalMenuFooter ul li a,
        #oPrivallyApp-ModalMenuFooter ul li a:hover {
          color: #e7e7e7 !important;
        }
        a.oPrivallyApp-link,
        a:hover.oPrivallyApp-link {
          color: #e7e7e7 !important;
        }
        #oPrivallyApp-ModalMenuFooter ul li {
          border-color: #e7e7e7 !important;
        }
        .oPrivallyApp-BoxClose {
          color: rgb(0, 0, 0) !important;
        }
        #oPrivallyApp-Modal .privcontainer {
          color: rgb(0, 0, 0) !important;
        }
        .oPrivallyApp-ModalOptions a {
          font-family: Arial, Helvetica, sans-serif !important;
          color: #e7e7e7 !important;
        }
        .oPrivallyApp-ModalOption a.oPrivallyApp-Active {
          color: #ffb500 !important;
        }
        #oPrivallyApp-ModalHeader,
        #oPrivallyApp-ModalBody,
        .oPrivallyApp-ModalFooter {
          background: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp-AcceptAllLink,
        #oPrivallyApp-AcceptAllLink:hover {
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp-ModalHeader,
        #oPrivallyApp-ModalBody,
        #oPrivallyApp-ModalFooter {
          font-family: Arial, Helvetica, sans-serif !important;
          color: rgb(0, 0, 0) !important;
        }
        .oPrivallyApp-ModalPowered a,
        .oPrivallyApp-ModalPowered a:hover {
          color: rgb(0, 0, 0) !important;
        }
        #oPrivallyApp-ModalTitle h3 {
          color: #ffffff !important;
        }
        #oPrivallyApp-ModalBodyText,
        #oPrivallyApp-ModalBodyText p {
          font-family: Arial, Helvetica, sans-serif !important;
          color: rgb(0, 0, 0) !important;
        }
        #oPrivallyApp-ModalMenu ul li a,
        #oPrivallyApp-ModalMenu ul li a:hover {
          color: #e7e7e7 !important;
        }
        .oPrivallyApp-ModalOptionActive,
        .oPrivallyApp-ModalOptionActive:hover {
          color: #ffb500 !important;
        }
        #oPrivallyApp-ModalMenu ul li {
          border-color: #e7e7e7 !important;
        }
        #oPrivallyApp .accordion-item,
        #oPrivallyApp .oPrivallyApp-lefttabcontent {
          background: #92a2ae !important;
        }
        #oPrivallyApp .oPrivallyConsentPanel {
          background: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp .accordion-item > label,
        #oPrivallyApp .accordion-item > span {
          font-size: 13px;
          color: rgb(255, 255, 255) !important;
          font-family: Arial, Helvetica, sans-serif !important;
        }
        .oPrivallyApp-ArrowRight {
          border-left: 6px solid rgb(255, 255, 255) !important;
        }
        .oPrivallyApp-ArrowBottom {
          border-top: 6px solid rgb(255, 255, 255) !important;
        }
        #oPrivallyApp .oPrivally-accordion-content p,
        #oPrivallyApp .oPrivally-accordion-content div,
        #oPrivallyApp .accordion-item p,
        #oPrivallyApp .accordion-item div {
          font-size: 13px !important;
          color: rgb(255, 255, 255) !important;
        }
        .oPrivally-ModalPanel {
          font-size: 13px !important;
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp .section {
          margin: 0px !important;
        }
        .oPrivallyApp-ProtocolNumber {
          font-size: 130% !important;
          font-weight: bold !important;
        }
        .oPrivallyApp-ModalPanelText {
          font-size: 13px !important;
          text-align: left !important;
        }
        .oPrivallyApp-ModalPanelText p {
          margin-bottom: 5px !important;
        }
        .oPrivallyApp-ModalPanelText ul li {
          margin-bottom: 3px !important;
        }
        .oPrivallyApp-ModalPanelText b {
          font-weight: bolder !important;
        }
        .oPrivallyApp-ModalPanelText u {
          text-decoration: underline !important;
        }
        .oPrivallyApp-ModalPanelText hr {
          margin-top: 15px !important;
          margin-bottom: 15px !important;
          border: 1px solid rgb(255, 255, 255) !important;
        }
        .oPrivallyApp-ModalPanelText ul,
        .oPrivallyApp-ModalPanelText h1,
        .oPrivallyApp-ModalPanelText h2,
        .oPrivallyApp-ModalPanelText h3 {
          margin-top: 15px !important;
          margin-bottom: 15px !important;
        }
        .oPrivallyApp-ModalPanelText ul li,
        .oPrivallyApp-ModalPanelText h1,
        .oPrivallyApp-ModalPanelText h2,
        .oPrivallyApp-ModalPanelText h3 {
          color: rgb(255, 255, 255) !important;
        }
        .oPrivallyApp-ModalPanelText h1,
        .oPrivallyApp-ModalPanelText h1 b {
          font-size: 170% !important;
        }
        .oPrivallyApp-ModalPanelText h2,
        .oPrivallyApp-ModalPanelText h2 b {
          font-size: 150% !important;
        }
        .oPrivallyApp-ModalPanelText h3,
        .oPrivallyApp-ModalPanelText h3 b {
          font-size: 130% !important;
        } 
        #oPrivallyApp .oPrivallyApp-slider {
          background: rgb(0, 0, 0) !important;
        }
        #oPrivallyApp .oPrivallyApp-slider:before {
          background: #92a2ae !important;
        }
        #oPrivallyApp input:checked + .oPrivallyApp-slider {
          background: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp input:focus + .oPrivallyApp-slider {
          box-shadow: 0 0 1px rgb(255, 255, 255) !important;
        }
        #oPrivallyApp .oPrivallyTab button,
        #oPrivallyApp .oPrivallySubTab button {
          font-family: Arial, Helvetica, sans-serif !important;
        }
        #oPrivallyApp .oPrivallyTab button {
          min-width: 100px !important;
        }
        #oPrivallyApp .oPrivallyTab button,
        #oPrivallyApp .oPrivallySubTab button,
        #oPrivallyApp .oPrivallyApp-lefttab button {
          background: #92a2ae !important;
          color: rgb(255, 255, 255) !important;
          font-size: 11px !important;
        }
        #oPrivallyApp .oPrivallyApp-lefttab button {
          background: #92a2ae !important;
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp .oPrivallyTab button:hover,
        #oPrivallyApp .oPrivallySubTab button:hover,
        #oPrivallyApp .oPrivallyApp-lefttab button:hover {
          background: #cad2d8 !important;
          color: #000000 !important;
        }
        #oPrivallyApp .oPrivallyTab button.active,
        #oPrivallyApp .oPrivallySubTab button.active,
        #oPrivallyApp .oPrivallyApp-lefttab button.active {
          background: #f20024 !important;
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp .oPrivalyApp-ButtonFooter {
          float: left !important;
          margin-right: 3px !important;
          margin-top: -2px !important;
        }
        #oPrivallyApp .oPrivallyIconEmail {
          height: 10px;
        }
        .oPrivallyAppRightForm label,
        .oPrivally-Form label {
          color: rgb(255, 255, 255);
          font-size: 13px !important;
        } 
        .oPrivally-ReloadIcon {
          border-color: transparent rgb(255, 255, 255) !important;
        }
        .oPrivally-ReloadIcon::before {
          border-color: transparent rgb(255, 255, 255) transparent transparent !important;
        }
        .oPrivally-ReloadIcon::after {
          border-color: transparent transparent transparent rgb(255, 255, 255) !important;
        }
        .oPrivallyContact-box {
          background: #92a2ae !important;
        }
        .oPrivallyContact-label {
          font-size: 13px !important;
          color: rgb(255, 255, 255) !important;
          font-family: Arial, Helvetica, sans-serif !important;
        }
        #oPrivallyApp-Modal .oPrivallyContact-text p,
        #oPrivallyApp-Modal .oPrivallyContact-text p a {
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp-Modal .oPrivallyConsentGroup-box {
          background: #92a2ae !important;
        }
        #oPrivallyApp-ModalContent .oPrivallyConsentGroup-label p {
          font-size: 13px !important;
          color: rgb(255, 255, 255) !important;
          font-family: Arial, Helvetica, sans-serif !important;
        }
        #oPrivallyApp-Modal .oPrivallyConsentGroup-text p,
        #oPrivallyApp-Modal .oPrivallyConsentGroup-text p a {
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp-ModalContent .oPrivallyConsentGroup-Container,
        #oPrivallyApp-ModalContent
          .oPrivallyConsentGroup-label
          p.oPrivallyApp-Excerpt {
          color: rgb(0, 0, 0) !important;
        }
        #oPrivallyApp-ModalContent .oPrivallyConsentGroup-Checkmark {
          border: solid 1px #82b501 !important;
        }
        #oPrivallyApp-ModalContent
          .oPrivallyConsentGroup-Container:hover
          input
          ~ .oPrivallyConsentGroup-Checkmark {
          background-color: #82b501 !important;
        }
        #oPrivallyApp-ModalContent
          .oPrivallyConsentGroup-Container
          input:checked
          ~ .oPrivallyConsentGroup-Checkmark {
          background-color: #82b501 !important;
        }
        .oPrivallyApp-Button {
          width: auto !important;
          height: auto !important;
          border-radius: 3px !important;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 13px !important;
          background: #f20024 !important;
          color: rgb(255, 255, 255) !important;
        }
        .oPrivallyApp-Button:hover {
          background: rgb(255, 255, 255) !important;
          color: #92a2ae !important;
        }
        .oPrivallyApp-TabButton,
        .oPrivallyApp-SubTabButton {
          font-family: Arial, Helvetica, sans-serif !important;
          background: #92a2ae !important;
          color: rgb(255, 255, 255) !important;
        }
        .oPrivallyApp-TabButton.active,
        .oPrivallyApp-SubTabButton.active {
          background: #cad2d8 !important;
          color: #000000 !important;
        }
        .oPrivallyApp-Input {
          font-size: 13px !important;
        }
        .oPrivallyApp-CaptchaInput {
          font-size: 16px !important;
          text-align: center !important;
          line-height: 30px !important;
        }
        .oPrivallyApp-Input,
        .oPrivallyApp-CaptchaInput,
        #oPrivallyApp .enjoy_css {
          color: #000000 !important;
          background: rgba(252, 252, 252, 1) !important;
        }
        #oPrivallyApp .enjoy_css::placeholder,
        #oPrivallyApp .enjoy_css:-ms-input-placeholder,
        #oPrivallyApp .enjoy_css::-ms-input-placeholder,
        .oPrivallyApp-Input::placeholder,
        .oPrivallyApp-Input:-ms-input-placeholder,
        .oPrivallyApp-Input::-ms-input-placeholder,
        .oPrivallyApp-CaptchaInput::placeholder,
        .oPrivallyApp-CaptchaInput:-ms-input-placeholder,
        .oPrivallyApp-CaptchaInput::-ms-input-placeholder {
          color: #000000 !important;
        }
        #oPrivallyApp table th,
        #oPrivallyApp b {
          font-family: Arial, Helvetica, sans-serif !important;
        }
        a.oPrivallyApp-link,
        a:hover.oPrivallyApp-link {
          color: #e7e7e7 !important;
          font-family: Arial, Helvetica, sans-serif !important;
        }
        #oPrivallyApp-ModalBody table {
          font-family: Arial, Helvetica, sans-serif !important;
        }
        #oPrivallyApp-ModalBody table td {
          color: rgb(255, 255, 255) !important;
          font-family: Arial, Helvetica, sans-serif !important;
        }
        #oPrivallyApp-ModalBody table td b {
          font-family: Arial, Helvetica, sans-serif !important;
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp-ModalText p {
          color: rgb(0, 0, 0) !important;
        }
        .oPrivallyApp-ModalText .oPrivallyApp-ModalTextScroll p b,
        .oPrivallyApp-ModalText .oPrivallyApp-ModalTextScroll p b u {
          font-family: Arial, Helvetica, sans-serif !important;
        }
        #oPrivallyApp .toggleCookiesStyle {
          background: #f20024 !important;
          color: rgb(255, 255, 255) !important;
          margin-right: 10px !important;
        }
        #oPrivallyApp .toggleCookiesStyle button,
        #oPrivallyApp .oPrivallyTab button {
          width: auto !important;
          height: auto !important;
        }
        @media only screen and (max-width: 699px) {
          #oPrivallyApp-AlertBox {
            text-align: left !important;
          }
        }
        @media only screen and (min-width: 700px) {
          #oPrivallyApp-AlertBox {
            min-height: 32px;
          }
          #oPrivallyApp-OptionsBox {
            display: flex;
            align-items: center;
          }
        }
        @media only screen and (min-width: 1114px) {
        }
        @media only screen and (min-width: 1200px) {
        }
        #oPrivallyApp .oPrivallyApp-Loader {
          border: 3px solid #f20024 !important;
          border-top: 3px solid rgb(255, 255, 255) !important;
        }
        #oPrivallyApp #oPrivallyApp-MessageSuccess-Overview,
        #oPrivallyApp #oPrivallyApp-MessageSuccess-TicketOverview {
          margin-bottom: 20px !important;
          margin-top: 20px !important;
        }
        #oPrivallyApp #oPrivallyApp-MessageSuccess-Overview table,
        #oPrivallyApp #oPrivallyApp-MessageSuccess-TicketOverview table {
          width: 100%;
          overflow: hidden;
          border: solid #ccc 1px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
        }
        #oPrivallyApp #oPrivallyApp-MessageSuccess-Overview .oPrivally-thead,
        #oPrivallyApp
          #oPrivallyApp-MessageSuccess-TicketOverview
          .oPrivally-thead {
          background: #f20024 !important;
          color: rgb(255, 255, 255) !important;
        }
        #oPrivallyApp #oPrivallyApp-MessageSuccess-Overview .oPrivally-tr,
        #oPrivallyApp
          #oPrivallyApp-MessageSuccess-TicketOverview
          .oPrivally-tr {
          border-bottom: solid 1px rgb(255, 255, 255) !important;
        }
        #oPrivallyApp #oPrivallyApp-MessageSuccess-Overview .oPrivally-th,
        #oPrivallyApp
          #oPrivallyApp-MessageSuccess-TicketOverview
          .oPrivally-th {
          padding: 5px 8px !important;
        }
        #oPrivallyApp #oPrivallyApp-MessageSuccess-Overview .oPrivally-td,
        #oPrivallyApp
          #oPrivallyApp-MessageSuccess-TicketOverview
          .oPrivally-td {
          padding: 10px 5px !important;
        }
		</style>
	`;

  const template = `
  <div
    id="oPrivallyApp-Modal"
    style="display: none; opacity: -0.006"
    class="privally-central privally-central-263"
  >
    <div id="oPrivallyApp-ModalContent">
      <div id="oPrivallyApp-ModalHeader">
        <span class="oPrivallyApp-BoxClose" id="boxclose"></span>
        <div id="oPrivallyApp-ModalLogo">
          <img
            src="https://cdn-app-privally-io.s3.amazonaws.com/env/suite/images/treatment/central/0001/00000263/darkLogo/20210128190636.png"
          />
        </div>
        <div class="oPrivallyTab oPrivallyApp-ElDesk">
          <button
            class="tablinks oPrivallyApp-CookiesPreferencesTab active"
            data-content="oPrivallyApp-CookiesPreferencesTab"
            type="button"
          >
            Preferências de Cookies
          </button>

          <button
            class="tablinks tabLinksPolicyTab"
            data-content="oPrivallyApp-PolicyTab"
            type="button"
          >
            Política de Privacidade
          </button>
        </div>
      </div>

      <div id="oPrivallyApp-ModalBody">
        <div class="oPrivallyApp-ElMob">
          <button
            class="oPrivallyApp-TabButton oPrivallyApp-CookiesButtonPreferencesTab active"
            type="button"
          >
            Preferências de Cookies
          </button>
        </div>
        <div
          id="oPrivallyApp-CookiesPreferencesTab"
          class="oPrivallyTabContent active"
        >
          <form name="fprivclasscookie" id="fprivclasscookie">
            <div class="oPrivallyApp-ModalText">
              <div class="oPrivallyMenuBorders"></div>
              <p class="oPrivallyModalHeader">
                Você pode configurar suas preferências de privacidade,
                verificando e selecionando quais cookies você deseja que
                este site utilize ou não. Você pode modificar suas
                preferências de privacidade a qualquer momento.
              </p>
            </div>
            <div class="accordions">
              <div class="accordion-item">
                <span
                  onclick="
                    if( document.getElementsByClassName('accordion-cookie-2')[0].className.match(/\bopenedHeight\b/) ){document.getElementsByClassName('accordion-cookie-2')[0].classList.remove('openedHeight');
                      document.getElementsByClassName('accordion-cookie-2')[0].classList.add('closedHeight');
                      document.getElementsByClassName('arrow-cookie-2')[0].classList.remove('oPrivallyApp-ArrowBottom');
                      document.getElementsByClassName('arrow-cookie-2')[0].classList.add('oPrivallyApp-ArrowRight');
                    }else{
                      document.getElementsByClassName('accordion-cookie-2')[0].classList.remove('closedHeight');
                      document.getElementsByClassName('accordion-cookie-2')[0].classList.add('openedHeight');
                      document.getElementsByClassName('arrow-cookie-2')[0].classList.remove('oPrivallyApp-ArrowRight');
                      document.getElementsByClassName('arrow-cookie-2')[0].classList.add('oPrivallyApp-ArrowBottom');
                    }"
                >
                  Cookies Necessários
                  <span
                    class="arrow-cookie-2 oPrivallyApp-ArrowBottom"
                  ></span
                ></span>
                <div
                  class="oPrivally-accordion-content accordion-cookie-2 openedHeight"
                >
                  <p>
                    Estes cookies são aqueles necessários para o site
                    funcionar e não podem ser desligados em nossos sistemas.
                    Eles geralmente são definidos apenas em resposta às
                    ações feitas por você, como por exemplo, definir suas
                    preferências de privacidade, fazer login ou preencher
                    formulários. Caso queira, pode configurar seu navegador
                    para bloqueá-lo ou alertá-lo sobre esses cookies, mas
                    algumas partes do site podem não funcionar de forma
                    adequada.
                  </p>
                  <table
                    border="0"
                    width="100%"
                    style="margin-left: 10px; margin-bottom: 10px"
                    id="privallyapp-cookie-type-2"
                    class="privallyapp-cookie-type-2 cookieTypeTable"
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-6"
                                id="toggleCookiesStyle"
                                rel="2-6"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Windows Azure</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-6"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">ai_session</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">ai_user</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 4 mes(es) 28 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">ai_session</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>2 ano(s) 5 mes(es) 4 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">ai_user</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 5 mes(es) 4 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-22"
                                id="toggleCookiesStyle"
                                rel="2-22"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>privally.global</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-22"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >__Secure-Spvll</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .api.privally.global
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 13 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >__Secure-Senv</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .api.privally.global
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 30 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >__Secure-Spvll</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 4 mes(es) 24 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">Spvll</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 4 mes(es) 1 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >__Secure-Spvll</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 5 mes(es) 9 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-45"
                                id="toggleCookiesStyle"
                                rel="2-45"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>CloudFlare</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-45"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">cf_chl_prog</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 3 mes(es) 19 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">cf_chl_2</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 3 mes(es) 19 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">__cf_bm</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 4 mes(es) 23 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">__cf_bm</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.hubspot.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 4 mes(es) 13 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-137"
                                id="toggleCookiesStyle"
                                rel="2-137"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Google</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-137"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_GRECAPTCHA</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.google.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 2 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_GRECAPTCHA</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      www.google.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 3 mes(es) 18 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="accordion-item">
                <span
                  onclick="
                    if( document.getElementsByClassName('accordion-cookie-3')[0].className.match(/\bopenedHeight\b/) ){document.getElementsByClassName('accordion-cookie-3')[0].classList.remove('openedHeight');
                      document.getElementsByClassName('accordion-cookie-3')[0].classList.add('closedHeight');
                      document.getElementsByClassName('arrow-cookie-3')[0].classList.remove('oPrivallyApp-ArrowBottom');
                      document.getElementsByClassName('arrow-cookie-3')[0].classList.add('oPrivallyApp-ArrowRight');
                    }else{
                      document.getElementsByClassName('accordion-cookie-3')[0].classList.remove('closedHeight');
                      document.getElementsByClassName('accordion-cookie-3')[0].classList.add('openedHeight');
                      document.getElementsByClassName('arrow-cookie-3')[0].classList.remove('oPrivallyApp-ArrowRight');
                      document.getElementsByClassName('arrow-cookie-3')[0].classList.add('oPrivallyApp-ArrowBottom');
                    }"
                >
                  Cookies Analíticos
                  <span
                    class="arrow-cookie-3 oPrivallyApp-ArrowRight"
                  ></span>
                  <div class="divswitch">
                    <label class="switch"
                      ><input
                        type="checkbox"
                        name="fprivclasscookies[]"
                        value="3"
                        class="oPrivallyApp-SettingsSaveBoxFPrivcCookies" /><span
                        class="oPrivallyApp-slider oPrivallyApp-rounded"
                      ></span
                    ></label></div
                ></span>
                <div class="oPrivally-accordion-content accordion-cookie-3">
                  <p>
                    Os cookies analíticos fornecem informações sobre como
                    este site está sendo usado para que possamos melhorar a
                    experiência do usuário. Os dados capturados são
                    agregados e anonimizados.
                  </p>
                  <table
                    border="0"
                    width="100%"
                    style="margin-left: 10px; margin-bottom: 10px"
                    id="privallyapp-cookie-type-3"
                    class="privallyapp-cookie-type-3 cookieTypeTable"
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-2"
                                id="toggleCookiesStyle"
                                rel="3-2"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div>
                              <b>Google Analytics</b><br /><a
                                class="oPrivallyApp-link"
                                href="https://policies.google.com/terms"
                                target="_blank"
                                >Termos de Uso</a
                              ><br /><a
                                class="oPrivallyApp-link"
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                >Política de Privacidade</a
                              >
                            </div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-2"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_ga</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 3 mes(es) 22 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_gat</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_gid</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_gat_UA-57196150-1</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>2 ano(s) 2 mes(es) 7 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-3"
                                id="toggleCookiesStyle"
                                rel="3-3"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Hot Jar</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-3"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjAbsoluteSessionInProgress</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjIncludedInPageviewSample</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_hjid</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 4 mes(es) 28 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjIncludedInSessionSample</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 11 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjIncludedInSessionSample</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>7 mes(es) 12 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjIncludedInPageviewSample</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      www.tivit.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>2 ano(s) 5 mes(es) 4 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_hjTLDTest</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>Sessão</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-84"
                                id="toggleCookiesStyle"
                                rel="3-84"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>HubSpot</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-84"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">__hssc</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>2 ano(s) 1 mes(es) 23 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">__hssrc</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>Sessão</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="accordion-item">
                <span
                  onclick="
                    if( document.getElementsByClassName('accordion-cookie-5')[0].className.match(/\bopenedHeight\b/) ){document.getElementsByClassName('accordion-cookie-5')[0].classList.remove('openedHeight');
                      document.getElementsByClassName('accordion-cookie-5')[0].classList.add('closedHeight');
                      document.getElementsByClassName('arrow-cookie-5')[0].classList.remove('oPrivallyApp-ArrowBottom');
                      document.getElementsByClassName('arrow-cookie-5')[0].classList.add('oPrivallyApp-ArrowRight');
                    }else{
                      document.getElementsByClassName('accordion-cookie-5')[0].classList.remove('closedHeight');
                      document.getElementsByClassName('accordion-cookie-5')[0].classList.add('openedHeight');
                      document.getElementsByClassName('arrow-cookie-5')[0].classList.remove('oPrivallyApp-ArrowRight');
                      document.getElementsByClassName('arrow-cookie-5')[0].classList.add('oPrivallyApp-ArrowBottom');
                    }"
                >
                  Cookies Funcionais
                  <span
                    class="arrow-cookie-5 oPrivallyApp-ArrowRight"
                  ></span>
                  <div class="divswitch">
                    <label class="switch"
                      ><input
                        type="checkbox"
                        name="fprivclasscookies[]"
                        value="5"
                        class="oPrivallyApp-SettingsSaveBoxFPrivcCookies" /><span
                        class="oPrivallyApp-slider oPrivallyApp-rounded"
                      ></span
                    ></label></div
                ></span>
                <div class="oPrivally-accordion-content accordion-cookie-5">
                  <p>
                    Estes cookies tem a função de personalização aprimorada,
                    como a utilização vídeos e bate-papos ao vivo. Podendo
                    ser definidos pela empresa ou por provedores terceiros,
                    cujos serviços foram adicionamos às nossas páginas. Se
                    você não permitir estes cookies, algumas ou todas estas
                    funcionalidades podem não funcionar corretamente.
                  </p>
                  <table
                    border="0"
                    width="100%"
                    style="margin-left: 10px; margin-bottom: 10px"
                    id="privallyapp-cookie-type-5"
                    class="privallyapp-cookie-type-5 cookieTypeTable"
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-138"
                                id="toggleCookiesStyle"
                                rel="5-138"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Hot Jar</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-138"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjSessionUser_2515737</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>7 mes(es) 13 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjSession_2515737</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 7 mes(es) 12 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjSession_1587314</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 7 mes(es) 11 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjSessionUser_1587314</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>7 mes(es) 12 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-139"
                                id="toggleCookiesStyle"
                                rel="5-139"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Linkedin</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-139"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">ln_or</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>6 mes(es) 17 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">ln_or</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>7 mes(es) 11 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-64"
                                id="toggleCookiesStyle"
                                rel="5-64"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>HubSpot</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-64"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">__hstc</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 29 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">hubspotutk</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 29 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="accordion-item">
                <span
                  onclick="
                    if( document.getElementsByClassName('accordion-cookie-4')[0].className.match(/\bopenedHeight\b/) ){document.getElementsByClassName('accordion-cookie-4')[0].classList.remove('openedHeight');
                      document.getElementsByClassName('accordion-cookie-4')[0].classList.add('closedHeight');
                      document.getElementsByClassName('arrow-cookie-4')[0].classList.remove('oPrivallyApp-ArrowBottom');
                      document.getElementsByClassName('arrow-cookie-4')[0].classList.add('oPrivallyApp-ArrowRight');
                    }else{
                      document.getElementsByClassName('accordion-cookie-4')[0].classList.remove('closedHeight');
                      document.getElementsByClassName('accordion-cookie-4')[0].classList.add('openedHeight');
                      document.getElementsByClassName('arrow-cookie-4')[0].classList.remove('oPrivallyApp-ArrowRight');
                      document.getElementsByClassName('arrow-cookie-4')[0].classList.add('oPrivallyApp-ArrowBottom');
                    }"
                >
                  Cookies de Marketing
                  <span
                    class="arrow-cookie-4 oPrivallyApp-ArrowRight"
                  ></span>
                  <div class="divswitch">
                    <label class="switch"
                      ><input
                        type="checkbox"
                        name="fprivclasscookies[]"
                        value="4"
                        class="oPrivallyApp-SettingsSaveBoxFPrivcCookies" /><span
                        class="oPrivallyApp-slider oPrivallyApp-rounded"
                      ></span
                    ></label></div
                ></span>
                <div class="oPrivally-accordion-content accordion-cookie-4">
                  <p>
                    Os cookies de marketing fornecem informações sobre a
                    interação do usuário com o conteúdo do nosso site,
                    ajudando-nos a entender melhor a eficácia do nosso
                    conteúdo de e-mail e website.
                  </p>
                  <table
                    border="0"
                    width="100%"
                    style="margin-left: 10px; margin-bottom: 10px"
                    id="privallyapp-cookie-type-4"
                    class="privallyapp-cookie-type-4 cookieTypeTable"
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-4"
                                id="toggleCookiesStyle"
                                rel="4-4"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Google/DoubleClick</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-4"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">GPS</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.youtube.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">IDE</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .doubleclick.net
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 3 mes(es) 22 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">NID</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.google.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 16 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">YSC</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.youtube.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>Sessão</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">test_cookie</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .doubleclick.net
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">1P_JAR</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.google.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 3 mes(es) 5 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-12"
                                id="toggleCookiesStyle"
                                rel="4-12"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Linkedin</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-12"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >UserMatchHistory</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">bcookie</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 3 mes(es) 22 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">bscookie</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .www.linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 3 mes(es) 22 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">lang</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .ads.linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>Sessão</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">lang</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>Sessão</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">li_sugr</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 25 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">lidc</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">lissc</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 4 mes(es) 28 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >AnalyticsSyncHistory</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .linkedin.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 24 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-5"
                                id="toggleCookiesStyle"
                                rel="4-5"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Youtube</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-5"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >VISITOR_INFO1_LIVE</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.youtube.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 16 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-17"
                                id="toggleCookiesStyle"
                                rel="4-17"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Facebook</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-17"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_fbp</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 25 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">fr</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      .facebook.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 25 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Http Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-44"
                                id="toggleCookiesStyle"
                                rel="4-44"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Google AdSense</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-44"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_gcl_au</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 5 mes(es) 25 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-136"
                                id="toggleCookiesStyle"
                                rel="4-136"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Hot Jar</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-136"
                              data-initial-state="off"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">_hjFirstSeen</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 6 mes(es) 3 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="accordion-item">
                <span
                  onclick="
                    if( document.getElementsByClassName('accordion-cookie-1')[0].className.match(/\bopenedHeight\b/) ){document.getElementsByClassName('accordion-cookie-1')[0].classList.remove('openedHeight');
                      document.getElementsByClassName('accordion-cookie-1')[0].classList.add('closedHeight');
                      document.getElementsByClassName('arrow-cookie-1')[0].classList.remove('oPrivallyApp-ArrowBottom');
                      document.getElementsByClassName('arrow-cookie-1')[0].classList.add('oPrivallyApp-ArrowRight');
                    }else{
                      document.getElementsByClassName('accordion-cookie-1')[0].classList.remove('closedHeight');
                      document.getElementsByClassName('accordion-cookie-1')[0].classList.add('openedHeight');
                      document.getElementsByClassName('arrow-cookie-1')[0].classList.remove('oPrivallyApp-ArrowRight');
                      document.getElementsByClassName('arrow-cookie-1')[0].classList.add('oPrivallyApp-ArrowBottom');
                    }"
                >
                  Cookies em Classificação
                  <span
                    class="arrow-cookie-1 oPrivallyApp-ArrowRight"
                  ></span
                ></span>
                <div class="oPrivally-accordion-content accordion-cookie-1">
                  <p>
                    Os cookies não classificados são cookies que estão em
                    processo de classificação, juntamente com os
                    fornecedores de cookies individuais.
                  </p>
                  <table
                    border="0"
                    width="100%"
                    style="margin-left: 10px; margin-bottom: 10px"
                    id="privallyapp-cookie-type-1"
                    class="privallyapp-cookie-type-1 cookieTypeTable"
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          style="line-height: 22px; vertical-align: top"
                        >
                          <div class="oPrivallyBoxCookies">
                            <div class="toggleCookiesStyle">
                              <button
                                type="button"
                                class="toggleCookiesStyle-1"
                                id="toggleCookiesStyle"
                                rel="1-1"
                                style="min-width: 8px !important"
                              >
                                +
                              </button>
                            </div>
                            <div><b>Cookie não classificado</b></div>
                            <div
                              class="oprivallyapp-cookie-list"
                              id="privallyapp-cookie-list-1"
                            >
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">pll_language</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 2 mes(es) 24 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_hjIncludedInSessionSample_2515737</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>4 mes(es) 18 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_ga_800T5GDGCR</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 10 mes(es) 4 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie">OTZ</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">
                                      ogs.google.com
                                    </td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>11 ano(s) 3 mes(es) 11 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html Seguro</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                width="auto"
                                style="margin-bottom: 20px"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="top" width="16">●</td>
                                    <td colspan="2">
                                      <b data-name="cookie"
                                        >_ga_5SL0DMZLRL</b
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top" width="100">
                                      Domínio
                                    </td>
                                    <td data-name="domain">.tivit.com</td>
                                  </tr>
                                  <tr hidden="true">
                                    <td>&nbsp;</td>
                                    <td valign="top">Duração</td>
                                    <td>1 ano(s) 6 mes(es) 2 dia(s)</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td valign="top">Tipo</td>
                                    <td>Html</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
          <div class="oPrivallyApp-ModalFooterOptions">
            <div class="oPrivallyApp-ButtomPanel">
              <button
                class="oPrivallyApp-Button"
                type="button"
                id="oPrivallyApp-SettingsSaveBox"
              >
                Salvar Preferências</button
              ><button
                class="oPrivallyApp-Button btnRejectAllM3"
                type="button"
              >
                Rejeitar Todos</button
              ><button
                class="oPrivallyApp-Button btnAcceptCookiesM3"
                type="button"
              >
                Aceitar Todos os Cookies
              </button>
            </div>
          </div>
        </div>
        

        <div class="oPrivallyApp-ElMob">
          <button
            class="oPrivallyApp-TabButton oPrivallyApp-TabButtonPolicyTab"
          >
            Política de Privacidade
          </button>
        </div>
        <div id="oPrivallyApp-PolicyTab" class="oPrivallyTabContent">
          <div class="oPrivallyApp-ModalText">
            <div class="oPrivallyMenuBorders"></div>
            <p class="oPrivallyModalHeader">
              Disponibilizamos a seguir nossa Política de Privacidade
            </p>
          </div>
          <div class="accordions">
            <div
              class="oPrivallyApp-ModalPanelText oPrivallyApp-ModalTextScroll accordion-item"
            >
              <p><b>SEG-POL-001-019 - Política de Privacidade</b></p>
              <p></p>
              <p><b>Versão 4 - 18/11/2021</b><br /></p>
              <p>
                <b><br /></b>
              </p>
              <p><b>1.OBJETIVO</b></p>
              <p>
                Esta Política de Privacidade tem como objetivo esclarecer e
                informar as diretrizes e práticas da TIVIT ("nós ", "nossa"
                ou "a TIVIT") com relação a segurança e ao tratamento
                conferidos aos seus dados pessoais, bem como nossa
                responsabilidade com asinformações captadas ou
                disponibilizadas em nosso domínio
                <a
                  href="https://www.tivit.com/"
                  target="_blank"
                  class="oPrivallyApp-link"
                  title="https://www.tivit.com/"
                  >https://www.tivit.com/</a
                >
                ("Site"),com o uso de nossos sites, aplicativos móveis e
                páginas de mídia sociais, o que inclui também suas
                interações conosco durante reuniões ou em nossos eventos e
                no contexto de outras atividades de vendas e marketing
                off-line.
              </p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div id="oPrivallyApp-ContactTab" class="oPrivallyTabContent">
          <div class="oPrivallyApp-ModalText">
            <div class="oPrivallyMenuBorders"></div>
            <p class="oPrivallyModalHeader">
              Abaixo estão os contatos responsáveis pelos Dados Pessoais e
              Privacidade.
            </p>
            <div class="oPrivallyContact-box">
              <div class="oPrivallyContact-label">
                Contatos do DPO (Encarregado de Dados)
              </div>
              <div class="oPrivallyContact-text">
                <p><b>Eduardo Pereira Gonçales</b></p>
                <p>
                  <b>E-mail</b><br /><a
                    class="oPrivallyApp-link"
                    href="mailto:lgpd@tivit.com"
                    >lgpd@tivit.com</a
                  >
                </p>
                <p><b>Telefone</b><br />+55 (11) 3757-2222</p>
              </div>
            </div>
            <div class="oPrivallyContact-box">
              <div class="oPrivallyContact-label">
                Contatos Corporativos
              </div>
              <div class="oPrivallyContact-text">
                <p><b>Tivit</b></p>
                <p>
                  <b>Endereço</b><br />Eldorado Business Tower - Av. das
                  Nações Unidas, 8501 – 9º Andar - CEP 05423-110 – Pinheiros
                  – São Paulo – SP – Brasil
                </p>
                <p><b>Telefone</b><br />11 37572222</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="oPrivallyApp-ModalFooter">
        <button
          class="oPrivalyApp-ButtonFooter oPrivallyApp-Button tabLinksContactTab oPrivallyBtnContactsMenu"
          data-content="oPrivallyApp-ContactTab"
          type="button"
        >
          Contatos de Privacidade
        </button>
        <div id="oPrivallyApp-ModalMenuFooter"></div>
        <div class="oPrivallyApp-ModalPowered">
          <a href="https://privally.global/" target="_blank"
            ><img
              src="https://cdn-app-privally-io.s3.amazonaws.com/env/suite/images/treatment/central/0001/00000001/poweredByDarkLogo/20200707191537.png"
              style="width: 80px !important"
              width="80"
              border="0"
          /></a>
        </div>
      </div>
    </div>
  </div>	
	`;

  const _oPrivallyApp = document.getElementById('oPrivallyApp')

  _oPrivallyApp.insertAdjacentHTML("beforeend", style);
  _oPrivallyApp.insertAdjacentHTML("beforeend", template);

  setTimeout(() => {
    var oPrivallyAppOptionBar = document.getElementById(
      "oPrivallyApp-OptionBar"
    );

    oPrivallyAppOptionBar.addEventListener("click", function () {
      var oPrivallyAppModal = document.getElementById("oPrivallyApp-Modal");

      oPrivallyAppModal.style.display = "block";
      oPrivallyAppModal.style.opacity = "1";
    });

    var oPrivallyAppClose = document.getElementById("boxclose");

    oPrivallyAppClose.addEventListener("click", function () {
      var oPrivallyAppModal = document.getElementById("oPrivallyApp-Modal");

      oPrivallyAppModal.style.display = "none";
      oPrivallyAppModal.style.opacity = "0";
    });

    function iniTabs() {
      var tabsLinks = document.querySelectorAll(".tablinks");

      tabsLinks.forEach((tab) => {
        tab.addEventListener("click", function (event) {
          clearActiveTabsLinks();

          this.className += " active";

          var idTargetContent = event.target.dataset.content;
          changeTabsContent(idTargetContent);
        });
      });
    }

    function clearActiveTabsLinks() {
      var tabsLinks = document.querySelectorAll(".tablinks");

      tabsLinks.forEach((tab) => {
        tab.className = tab.className.replace(" active", "");
      });
    }

    function changeTabsContent(idTargetContent) {
      var tabContent = document.querySelectorAll(".oPrivallyTabContent");

      tabContent.forEach((tab) => {
        tab.className = tab.className.replace(" active", "");
      });

      document.getElementById(idTargetContent).classList.add("active");
    }

    var btnContacts = document.querySelector(".oPrivallyBtnContactsMenu");
    btnContacts.addEventListener("click", function (event) {
      clearActiveTabsLinks();

      var idTargetContent = event.target.dataset.content;
      changeTabsContent(idTargetContent);
    });

    iniTabs();
  }, 500);
})();
