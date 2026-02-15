import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CoursesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const courses = [
  'Business & Management',
  'Computing & IT',
  'Health & Social Care',
  'Engineering',
  'Law',
  'Hospitality & Tourism'
];

export function CoursesDropdown({ isOpen, onClose }: CoursesDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-[340px] bg-white border border-[#E5E7EB] rounded-xl shadow-lg overflow-hidden z-50"
        >
          {/* Dropdown Content */}
          <div className="py-3">
            {/* Section Title */}
            <div className="px-4 py-2">
              <span className="text-sm font-semibold text-[#1F4E6D] uppercase tracking-wide">
                Popular Courses
              </span>
            </div>

            {/* Course Links */}
            <div className="mt-1">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href={`#course-${course.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3 text-[15px] text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#E63946] transition-colors duration-200"
                >
                  {course}
                </a>
              ))}
            </div>

            {/* View All CTA */}
            <div className="mt-2 pt-3 px-4 border-t border-[#E5E7EB]">
              <a
                href="#all-courses"
                onClick={onClose}
                className="flex items-center gap-2 text-[15px] font-semibold text-[#E63946] hover:text-[#C52A35] transition-colors duration-200"
              >
                View All Courses
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
