// src/pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";          // ← グローバル CSS はここだけで import

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
