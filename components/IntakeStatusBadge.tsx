interface IntakeStatusBadgeProps {
  status: 'Open' | 'Limited' | 'Upcoming';
  color: string;
}

export function IntakeStatusBadge({ status, color }: IntakeStatusBadgeProps) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {status}
    </span>
  );
}
