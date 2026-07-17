import { NuqsAdapter } from "nuqs/adapters/react";
import ReactQueryProvider from "./components/react-query.provider";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      scriptProps={{ async: true }}
      value={{
        light: "light",
        dark: "dark",
      }}
    >
      <NuqsAdapter>
        <Toaster />
        <NextIntlClientProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextIntlClientProvider>
      </NuqsAdapter>
    </ThemeProvider>
  );
}
