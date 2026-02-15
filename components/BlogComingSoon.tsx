import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export function BlogComingSoon() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Visual Element - Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-[#F8FAFC] rounded-2xl flex items-center justify-center border border-[#E2E8F0]">
              <BookOpen className="w-10 h-10 text-[#1F4E6D]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Eyebrow Label */}
          <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-3">
            Blog & Insights
          </div>

          {/* Main Heading */}
          <h1 className="text-[30px] md:text-[44px] font-bold leading-[1.2] text-[#0F172A]">
            Insights for Students Are Coming Soon
          </h1>

          {/* Description Text */}
          <p className="text-lg leading-[1.6] text-[#475569] max-w-[700px] mx-auto mt-4">
            We're working on helpful articles covering UK study options, courses, universities, visas, and student life. This section will be updated soon with practical guidance for UK Home and International students.
          </p>

          {/* Secondary Note */}
          <p className="text-[15px] text-[#64748B] mt-6">
            In the meantime, explore our Courses, Universities, and Student Path pages for detailed guidance.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/courses"
              className="inline-block bg-[#E63946] text-white text-[15px] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#D32735] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
