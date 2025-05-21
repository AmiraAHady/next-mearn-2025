// import "./globals.css";
import { Oswald } from "next/font/google";
import Header from "@/components/header";
import "bootstrap/dist/css/bootstrap.min.css";

const oswald = Oswald({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata={
  title:"create Next app",
  description:'created by Next js'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
