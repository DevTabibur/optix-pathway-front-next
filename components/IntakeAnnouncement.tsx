import { motion } from 'motion/react';

export function IntakeAnnouncement() {
  return (
    <motion.div 
      className="bg-[#1F4E6D] text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 md:py-0 md:h-14">
          <p className="text-sm md:text-base text-center md:text-left">
            <span className="font-semibold">September 2026 Intake Now Open</span>
            <span className="hidden md:inline"> – Apply Early to Secure Your Seat</span>
          </p>
          <button className="h-9 px-5 bg-[#E63946] text-white font-semibold rounded-md hover:bg-[#CC2F3C] transition-all duration-200 whitespace-nowrap text-sm">
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
