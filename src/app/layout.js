import { Inter } from "next/font/google";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact Graeme",
  description: "Contact form game made in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
