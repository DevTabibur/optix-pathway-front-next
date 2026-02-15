"use client";

import { store } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
// import ClientThemeProvider from '../components/ClientThemeProvider';
// import ClientLanguageProvider from '@/components/ClientLanguageProvider';
import { AuthProvider } from "@/context/AuthContext";
import { TopBar } from '@/components/TopBar';
import { MainHeader } from "@/components/MainHeader";
import { Footer } from "@/components/Footer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <Provider store={store}>
      <TopBar />
      <MainHeader isScrolled={isScrolled} />
      <AuthProvider>
        {/* <ClientLanguageProvider>
          <ClientThemeProvider> */}
        {children}
        {/* </ClientThemeProvider>
        </ClientLanguageProvider> */}
      </AuthProvider>
      <Footer />
    </Provider>
  );
};

export default Providers;
