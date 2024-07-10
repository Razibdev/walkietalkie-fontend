"use client";
import { Inter } from "next/font/google";
import Providers from "@/context/Providers";
import Header from "@/components/frontend/Header";
import Footer from "@/components/frontend/Footer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { usePathname } from "next/navigation"
import "../styles/main.scss";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    const sessionId = uuidv4();
    const role = localStorage.getItem('role');
    const session_Id = localStorage.getItem('sessionId');

    // Check if the user is logged in
    setLoggedIn(!!role);

    // Set a new session ID if it's not already set
    if (!session_Id) {
      localStorage.setItem('sessionId', sessionId);
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>

      <head>
        {/* Conditionally include styles if isLoggedIn is true */}
        {!pathname.startsWith("/dashboard") &&
          <>
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/LineIcons.3.0.css" />
            <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
            <link rel="stylesheet" href="/assets/css/glightbox.min.css" />
            <link rel="stylesheet" href="/assets/css/main.css" />
          </>
        }
      </head>
      <body className={inter.className}>
        {!pathname.startsWith("/dashboard") &&
          <Header />
        }



        <Providers>{children}</Providers>


        {!pathname.startsWith("/dashboard") &&
          <>
            <Footer />

            <script src="/assets/js/bootstrap.min.js"></script>
            <script src="/assets/js/tiny-slider.js"></script>
            <script src="/assets/js/glightbox.min.js"></script>
            <script src="/assets/js/main.js"></script>
          </>
        }
      </body>
    </html >
  );
}
