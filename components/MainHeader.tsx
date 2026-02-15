"use client"
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { Menu } from 'lucide-react';
// import logo from 'figma:asset/93bcdc7aedb493fb887668e08dcc5db56294f17a.png';
import { CTAButton } from './CTAButton';
import { MobileMenu } from './MobileMenu';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/', path: '/' },
  { label: 'Courses', href: '/courses', path: '/courses' },
  { label: 'Services', href: '/services', path: '/services' },
  { label: 'Universities', href: '/universities', path: '/universities' },
  { label: 'Blog', href: '/blog', path: '/blog' },
  { label: 'About Us', href: '/about', path: '/about' },
  { label: 'Contact', href: '/contact', path: '/contact' }
];

interface MainHeaderProps {
  isScrolled?: boolean;
}

export function MainHeader({ isScrolled = false }: MainHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a menu item is active
  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(itemPath);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`bg-white border-b border-[#E5E7EB] transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-[68px]' : 'h-16 md:h-[72px] lg:h-[80px]'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              {/* <img 
                src={logo} 
                alt="Optix Pathway" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-8 md:h-9 lg:h-10'
                }`}
              /> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => {
                const active = isActive(item.path);
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-[15px] transition-all duration-200 relative py-2 block min-h-[44px] flex items-center group ${
                      active 
                        ? 'text-[#E63946] font-semibold' 
                        : 'text-[#0F172A] font-medium hover:text-[#E63946] focus:text-[#E63946]'
                    } focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-50 rounded-sm`}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#E63946] transition-all duration-200 ${
                        active 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full group-focus:w-full'
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <CTAButton>
                  Get Free Consultation
                </CTAButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-[#0F172A]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
