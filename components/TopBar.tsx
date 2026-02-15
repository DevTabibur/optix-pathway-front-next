import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

interface TopBarProps {
  isVisible?: boolean;
}

export function TopBar({ isVisible = true }: TopBarProps) {
  return (
    <div 
      className={`bg-[#1F4E6D] text-white transition-all duration-300 ${
        isVisible ? 'opacity-100 max-h-[36px] md:max-h-[36px]' : 'opacity-0 max-h-0 overflow-hidden'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 md:py-0 md:h-[36px] gap-2 md:gap-0">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-white/80">
            <a 
              href="tel:+442037934541" 
              className="flex items-center gap-2 hover:text-white transition-colors text-xs md:text-[13px]"
            >
              <Phone className="w-[14px] h-[14px] flex-shrink-0" />
              <span>+44 02037 934541</span>
            </a>
            <a 
              href="mailto:info@optixpathway.com" 
              className="flex items-center gap-2 hover:text-white transition-colors text-xs md:text-[13px]"
            >
              <Mail className="w-[14px] h-[14px] flex-shrink-0" />
              <span>info@optixpathway.com</span>
            </a>
            <div className="flex items-center gap-2 text-xs md:text-[13px]">
              <MapPin className="w-[14px] h-[14px] flex-shrink-0" />
              <span>Unit 5, 84–86 Roman Road, London E2 0PJ</span>
            </div>
          </div>

          {/* Right Side - Social Icons (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
