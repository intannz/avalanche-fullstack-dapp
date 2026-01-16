import type { Metadata } from "next";
//import font montserrat
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';

//setup fontnya
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Avalanche dApp",
  description: "simple dApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //biar akun yang google translatenya otomatis ngga error
    <html lang="en" suppressHydrationWarning>
      <body
        //pakai font montserrat nya
        className={`${montserrat.variable} antialiased font-sans`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}