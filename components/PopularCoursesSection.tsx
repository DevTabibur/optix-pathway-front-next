import { motion } from 'motion/react';
import { CourseCard } from './CourseCard';
import { 
  Briefcase, 
  Code, 
  Heart, 
  Settings, 
  Scale, 
  Hotel 
} from 'lucide-react';

export function PopularCoursesSection() {
  const courses = [
    {
      icon: Briefcase,
      title: "Business & Management",
      description: "MBA, Business Management, International Business, Finance.",
      delay: 0.1
    },
    {
      icon: Code,
      title: "Computing & IT",
      description: "Computer Science, Data Science, Cyber Security, AI.",
      delay: 0.15
    },
    {
      icon: Heart,
      title: "Health & Social Care",
      description: "Nursing, Health Management, Social Care.",
      delay: 0.2
    },
    {
      icon: Settings,
      title: "Engineering",
      description: "Civil, Mechanical, Electrical, Software Engineering.",
      delay: 0.25
    },
    {
      icon: Scale,
      title: "Law",
      description: "LLB, LLM, International Law, Business Law.",
      delay: 0.3
    },
    {
      icon: Hotel,
      title: "Hospitality & Tourism",
      description: "Hospitality Management, Tourism, Events Management.",
      delay: 0.35
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#1F4E6D] tracking-[0.08em] uppercase mb-4">
                Popular Courses
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-[32px] md:text-[38px] lg:text-[40px] font-bold text-[#0F172A] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Explore High-Demand Courses in the UK
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Discover courses that align with current job markets and student demand.
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                icon={course.icon}
                title={course.title}
                description={course.description}
                delay={course.delay}
              />
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-10 md:mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="#all-courses"
              className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-[#E63946] hover:text-[#C52A35] transition-colors duration-200"
            >
              View All Courses
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
