interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function CTAButton({ children, onClick, className = '' }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[44px] px-5 bg-[#E63946] text-white font-semibold rounded-lg hover:bg-[#CC2F3C] transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 ${className}`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
}
