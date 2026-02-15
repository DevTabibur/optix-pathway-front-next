"use client"
import { X } from 'lucide-react';
import { CTAButton } from './CTAButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '/', path: '/' },
  { label: 'Courses', href: '/courses', path: '/courses' },
  { label: 'Services', href: '/services', path: '/services' },
  { label: 'Universities', href: '/universities', path: '/universities' },
  { label: 'Blog', href: '/blog', path: '/blog' },
  { label: 'About Us', href: '/about', path: '/about' },
  { label: 'Contact', href: '/contact', path: '/contact' }
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {

const pathname = usePathname();
  if (!isOpen) return null;

  // Function to check if a menu item is active
  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(itemPath);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 h-16 border-b border-[#E5E7EB]">
        <span className="text-[#0F172A] font-semibold">Menu</span>
        <button
          onClick={onClose}
          className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-[#0F172A]" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col p-4 gap-2 overflow-y-auto max-h-[calc(100vh-64px)]">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center ${
                active 
                  ? 'text-[#E63946] font-semibold bg-[#FFF5F5] border-l-[3px] border-[#E63946]' 
                  : 'text-[#0F172A] font-medium hover:bg-[#FFF5F5] hover:text-[#E63946] hover:border-l-[3px] hover:border-[#E63946] focus:bg-[#FFF5F5] focus:text-[#E63946] focus:border-l-[3px] focus:border-[#E63946]'
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-50`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          );
        })}

        {/* CTA Button in Mobile Menu */}
        <div className="mt-4 px-4">
          <Link href="/contact" onClick={onClose}>
            <CTAButton className="w-full">
              Get Free Consultation
            </CTAButton>
          </Link>
        </div>
      </nav>
    </div>
  );
}
