import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | Sites e landing pages com propósito`,
  description: `Sites e landing pages que apresentam seu negócio com clareza. Conheça o trabalho de ${profile.name} e vamos conversar sobre seu projeto.`,
  applicationName: `Portfólio ${profile.name}`,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `Seu negócio merece uma presença à altura. | ${profile.name}`,
    description:
      "Sites e landing pages com design cuidadoso, experiência simples e engenharia de software. Vamos falar sobre seu projeto?",
    locale: "pt_BR",
    type: "website",
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | Sites e landing pages`,
    description:
      "Design, experiência e engenharia para a presença digital do seu negócio.",
  },
};
export const viewport: Viewport = { themeColor: "#101816" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Shared App Router layout loads these fonts for every route. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('gs-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch{}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
