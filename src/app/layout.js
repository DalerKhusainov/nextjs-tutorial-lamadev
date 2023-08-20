// GLOBAL STYLES
import "./globals.css";
// IMPORTING GOOGLE FONT
import { Inter } from "next/font/google";
// DEFINING GOOGLE FONT
const inter = Inter({ subsets: ["latin"] });
// IMPORTING COMPONENTS
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/auth-provider/AuthProvider";
// IMPORTING REACT CONTEXT API
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Lama Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
