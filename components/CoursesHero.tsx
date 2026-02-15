import { ImageWithFallback } from './figma/ImageWithFallback';
import { CTAButton } from './CTAButton';
import Link from 'next/link';

export function CoursesHero() {
  const handleScrollToCourses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const coursesSection = document.getElementById('course-categories');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-14 md:py-[72px] lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Two-column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div>
              {/* Eyebrow Label */}
              <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-3">
                Courses
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] md:text-[40px] lg:text-5xl font-bold text-[#0F172A] leading-[1.2] max-w-[560px]">
                Explore UK Course Pathways
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-[#475569] leading-[1.6] max-w-[560px] mt-4">
                Browse popular UK course pathways and understand which options align with your background, eligibility, and study goals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-8">
                {/* Primary CTA */}
                <Link href="/contact">
                  <CTAButton>
                    Get Course Guidance
                  </CTAButton>
                </Link>

                {/* Secondary CTA */}
                <a
                  href="#course-categories"
                  onClick={handleScrollToCourses}
                  className="text-base font-semibold text-[#E63946] hover:text-[#D32F3D] transition-colors duration-200"
                >
                  Scroll to course categories ↓
                </a>
              </div>

              {/* Trust Micro-copy */}
              <p className="text-sm text-[#64748B] mt-5">
                Eligibility-based guidance • UK Home & International students supported
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="order-first lg:order-last">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1752920299210-0b727800ea50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzcwNjYyMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student studying in library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
