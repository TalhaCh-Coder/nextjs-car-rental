import Navbar from "@/components/commonComponents/Navbar";
import "./globals.css";
import Footer from "@/components/commonComponents/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
