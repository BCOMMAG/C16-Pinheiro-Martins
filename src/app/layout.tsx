import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pinheiro-martins.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pinheiro & Martins Advocacia e Assessoria Jurídica | Curitiba PR",
    template: "%s | Pinheiro & Martins Advocacia",
  },
  description:
    "Pinheiro & Martins Advocacia e Assessoria Jurídica. Atendimento jurídico especializado, estratégico e humanizado nas áreas Cível, Família, Sucessões, Trabalhista, Previdenciária, Imobiliária, Bancária, Consumidor e Tributária. Sede no bairro Portão em Curitiba/PR e atendimento digital em todo o Brasil.",
  keywords: [
    "advogado curitiba",
    "advocacia curitiba portao",
    "pinheiro e martins advocacia",
    "advogado direito de familia curitiba",
    "divorcio e pensao alimenticia curitiba",
    "inventario em cartorio curitiba pr",
    "advogado bancario e revisional de ccb",
    "advogado imobiliario curitiba",
    "advogado tributario e execucao fiscal",
    "advogado trabalhista curitiba",
    "advogado previdenciario inss curitiba",
  ],
  authors: [{ name: "Pinheiro & Martins Advocacia" }],
  creator: "Pinheiro & Martins Advocacia",
  publisher: "Pinheiro & Martins Advocacia e Assessoria Jurídica",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Pinheiro & Martins Advocacia e Assessoria Jurídica | Curitiba PR",
    description:
      "Atendimento jurídico ágil, estratégico e humanizado. Soluções seguras nas áreas Cível, Família, Inventários, Bancária, Tributária, Imobiliária, Previdenciária e Trabalhista. Sede física no Portão em Curitiba e atendimento online em todo o Brasil.",
    siteName: "Pinheiro & Martins Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Pinheiro & Martins Advocacia e Assessoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinheiro & Martins Advocacia e Assessoria Jurídica | Curitiba PR",
    description:
      "Atendimento jurídico ágil, estratégico e humanizado nas áreas Cível, Família, Inventários, Previdenciária, Trabalhista, Bancária e Tributária. Sede no Portão em Curitiba e online em todo o Brasil.",
    images: ["/og-image_optimized_300.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html lang="pt-BR" className={`${raleway.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] antialiased transition-colors duration-300 font-body">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}