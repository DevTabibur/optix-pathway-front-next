interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, onClick, className = '' }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[48px] px-6 bg-transparent border-[1.5px] border-[#1F4E6D] text-[#1F4E6D] font-semibold rounded-lg hover:bg-[#F8FAFC] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1F4E6D] focus:ring-offset-2 ${className}`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
}
