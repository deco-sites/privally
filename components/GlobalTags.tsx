import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>

      {/* PrivallyApp */}
      <script
        type="text/partytown"
        id="PrivallyApp"
        src="https://app.privally.global/app.next.js"
        pid="f2b265-1b86cb"
      >
      </script>

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

      {/* Meta Pixel Code */}
      {
        /* <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '639959938027628');
      fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=639959938027628&ev=PageView&noscript=1"
      /></noscript> */
      }
      {/* End Meta Pixel Code */}

      {/* PushNews */}
      {/* <script src="https://cdn.pn.vg/push/pushnews-launcher.js?appId=c4c07fbe-596f-49b8-a55a-672e6e72bc2d" async></script> */}
    </Head>
  );
}

export default GlobalTags;
