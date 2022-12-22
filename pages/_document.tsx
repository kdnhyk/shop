import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="kdnhyk@gmail.com" />
        <meta name="description" content="React Hook&Component" />
        <meta name="keywords" content="react, hook, component, api "></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <script
          defer
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          charSet="utf-8"
        ></script>
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.js"
        ></script>
        {/* <link rel="icon" href="../public/assets/HookFinder.ico" />
        <link rel="shortcut icon" href="../public/assets/HookFinder.ico" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
