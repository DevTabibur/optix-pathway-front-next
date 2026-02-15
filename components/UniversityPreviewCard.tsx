import { motion } from 'motion/react';

interface UniversityPreviewCardProps {
  name: string;
  delay?: number;
}

export function UniversityPreviewCard({ name, delay = 0 }: UniversityPreviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 text-center group hover:border-[#1F4E6D] transition-all duration-300"
    >
      {/* University Logo Placeholder */}
      <div className="w-full aspect-square flex items-center justify-center mb-4 rounded-xl bg-white p-4">
        <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-[#1F4E6D] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* University Name */}
      <p className="text-[14px] font-semibold text-[#0F172A] leading-snug">
        {name}
      </p>
    </motion.div>
  );
}
