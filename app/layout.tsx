import "./globals.css"
import type { Metadata, Viewport } from "next"
import { M_PLUS_1, Noto_Sans_JP } from "next/font/google"
import Header from './_components/Header/Header'
import Footer from './_components/Footer/Footer'

const mPlus1 = M_PLUS_1({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: "portfolio",
    default: "portfolio",
  },
  description: '私のポートフォリオサイトへようこそ',
}

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${mPlus1.className} ${notoSansJP.className}`}>
        <div className="flex min-h-screen flex-col bg-black">
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}