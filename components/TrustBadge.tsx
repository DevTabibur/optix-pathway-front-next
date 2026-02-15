interface TrustBadgeProps {
  children: React.ReactNode;
}

export function TrustBadge({ children }: TrustBadgeProps) {
  return (
    <div className="inline-flex items-center px-4 py-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-full">
      <span className="text-sm font-medium text-[#1F4E6D]">{children}</span>
    </div>
  );
}
