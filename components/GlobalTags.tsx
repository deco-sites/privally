import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      {/* PrivallyApp */}
      {/* <script type="text/javascript" id="PrivallyApp" src="https://app.privally.global/app.next.js" pid="f2b265-306786" async></script> */}

      {/* Google Tag Manager */}
      {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K3BX9WT');</script> */}
    </Head>
  );
}

export default GlobalTags;
