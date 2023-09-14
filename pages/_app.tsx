import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ToastContainer />
        <Component {...pageProps} />;
      </MantineProvider>
    </QueryClientProvider>
  );
}
