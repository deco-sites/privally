import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* PrivallyApp */}
      {/* <script
        type="text/javascript"
        id="PrivallyApp"
        src="https://app.privally.global/app.next.js"
        // @ts-ignore pid
        pid="f2b265-1b86cb"
      >
      </script> */}
      
      <script
        type="text/javascript"
        src="https://app.privally.global/privally/static-bar.min.js"
      >
      </script>

      <script
        type="text/javascript"
        id="PrivallyApp"
        src="https://app.privally.global/privally/static-cookies.min.js"
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

    </Head>
  );
}

export default GlobalTags;
