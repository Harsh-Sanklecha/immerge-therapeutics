import { Html, Head, Main, NextScript } from "next/document";
import { plusJakartaSans } from "./_app";

export default function Document() {
  return (
    <Html className="overflow-x-hidden" lang="en">
      <Head />
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
