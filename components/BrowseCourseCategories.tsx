import { Briefcase, Heart, Laptop, Scale, Cog, GraduationCap, BookOpen } from 'lucide-react';

interface CourseCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const courseCategories: CourseCategory[] = [
  {
    id: 'business-management',
    icon: Briefcase,
    title: 'Business & Management',
    description: 'Accounting, finance, business management, marketing, and leadership-focused degrees.'
  },
  {
    id: 'health-social-care',
    icon: Heart,
    title: 'Health & Social Care',
    description: 'Health, social care, nursing-related, and public service academic pathways.'
  },
  {
    id: 'computing-it',
    icon: Laptop,
    title: 'Computing & IT',
    description: 'Computer science, software engineering, data, cybersecurity, and IT-related courses.'
  },
  {
    id: 'law-legal-studies',
    icon: Scale,
    title: 'Law & Legal Studies',
    description: 'LLB, law-related academic routes, and legal foundation programmes.'
  },
  {
    id: 'engineering-technology',
    icon: Cog,
    title: 'Engineering & Technology',
    description: 'Mechanical, electrical, civil engineering, and applied technology courses.'
  },
  {
    id: 'education-teaching',
    icon: GraduationCap,
    title: 'Education & Teaching',
    description: 'Education studies, teaching-related degrees, and academic progression routes.'
  },
  {
    id: 'foundation-access',
    icon: BookOpen,
    title: 'Foundation & Access Routes',
    description: 'Foundation years, access courses, and alternative entry pathways to UK degrees.'
  }
];

export function BrowseCourseCategories() {
  const handleCardClick = (categoryId: string) => {
    const targetSection = document.getElementById(categoryId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, categoryId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(categoryId);
    }
  };

  return (
    <section id="course-categories" className="bg-[#F8FAFC] py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-2">
              Course Categories
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-4xl font-bold text-[#0F172A] mt-2">
              Find the Right Course Pathway
            </h2>

            {/* Subheading */}
            <p className="text-base text-[#475569] leading-[1.6] max-w-[640px] mx-auto mt-3">
              Explore popular UK course categories and scroll to learn more about each pathway.
            </p>
          </div>

          {/* Course Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category) => {
              const Icon = category.icon;
              
              return (
                <div
                  key={category.id}
                  onClick={() => handleCardClick(category.id)}
                  onKeyDown={(e) => handleKeyDown(e, category.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${category.title} pathways`}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8F0] cursor-pointer transition-all duration-300 hover:border-[#E63946] hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-50 min-h-[44px] flex flex-col"
                >
                  {/* Icon Container */}
                  <div className="w-11 h-11 bg-[#F1F5F9] rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1F4E6D] stroke-[2]" />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-lg font-semibold text-[#0F172A] mt-4">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-[1.6] mt-2">
                    {category.description}
                  </p>

                  {/* Action Text */}
                  <div className="text-sm font-semibold text-[#E63946] mt-4">
                    View pathways →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
