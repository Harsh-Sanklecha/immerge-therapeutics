import Layout from "@/components/layout/Layout";
import { AppContextProvider } from "@/lib/context";
import { cn } from "@/lib/utils/cnHelper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plusJakarta",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <main
        className={cn(
          "min-h-screen font-sans antialiased bg-secondary-gradient",
          plusJakartaSans.variable
        )}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </AppContextProvider>
  );
}
