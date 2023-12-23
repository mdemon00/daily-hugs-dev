import "./globals.css";
import { Inter, Montserrat, Work_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Sections/Footer";
import Providers from "@/components/Providers/Providers";
import Drawers from "@/components/Drawers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
const cremePastry = localFont({
  src: "../fonts/CremePastry.ttf",
  variable: "--font-creme-pastry",
});

export const metadata = {
  title: "Daily Hugs",
  description: "The perfect gift",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${work_sans.variable}
          ${inter.variable}
          ${montserrat.variable}
          ${cremePastry.variable}
          `}
      >
        <Providers>
          <Navbar />
          <div className="mt-6 md:mt-5 lg:mt-3">{children}</div>
          <Footer />
          <Drawers />
        </Providers>
      </body>
    </html>
  );
}
