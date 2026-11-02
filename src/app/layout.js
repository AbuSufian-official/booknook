import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./components/navber";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookNook - Online Library",
  description: "Add a book, borrow a book, return a book.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
