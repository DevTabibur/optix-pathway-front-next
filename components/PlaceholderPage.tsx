import { useState, useEffect } from 'react';
import { TopBar } from './TopBar';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description = "This page is currently in development." }: PlaceholderPageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide top bar and make header sticky when scrolling down
      if (currentScrollY > 50) {
        setShowTopBar(false);
        setIsScrolled(true);
      } else {
        setShowTopBar(true);
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Top Bar */}
      <TopBar isVisible={showTopBar} />
      
      {/* Main Header - Sticky */}
      <div className={`${isScrolled ? 'sticky top-0 z-40' : ''}`}>
        <MainHeader isScrolled={isScrolled} />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] w-full">
          <div className="max-w-[800px] mx-auto text-center">
            {/* Page Title */}
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#0F172A] mb-6">
              {title}
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-[#475569] mb-8 leading-relaxed">
              {description}
            </p>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#E63946] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#475569]">Page in progress</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
