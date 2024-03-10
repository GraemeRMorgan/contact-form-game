import { Inter } from "next/font/google";
import "./index.css";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../../public/fonts/Recursive_VF_1.085.woff2" });



export const metadata = {
  title: "Contact Graeme",
  description: "Contact form game made in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
