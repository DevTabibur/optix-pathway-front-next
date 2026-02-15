import { CheckCircle2, GraduationCap, FileCheck } from 'lucide-react';

const icons = {
  consultation: CheckCircle2,
  universities: GraduationCap,
  visa: FileCheck,
};

interface TrustSignalProps {
  icon: keyof typeof icons;
  text: string;
}

export function TrustSignal({ icon, text }: TrustSignalProps) {
  const Icon = icons[icon];
  
  return (
    <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
      <Icon className="w-5 h-5 text-[#1F4E6D] flex-shrink-0" />
      <span className="text-sm text-[#475569] font-medium">{text}</span>
    </div>
  );
}
