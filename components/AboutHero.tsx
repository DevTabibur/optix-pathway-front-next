
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';

export function AboutHero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div>
              {/* Eyebrow Label */}
              <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-3">
                About Optix Pathway
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#0F172A] max-w-[580px]">
                Guiding Students Through Their UK Study Journey
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg leading-[1.6] text-[#475569] max-w-[580px] mt-4">
                Optix Pathway provides eligibility-based guidance and student support to help individuals plan, apply, and prepare for higher education in the UK.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-8">
                {/* Primary CTA */}
                <button className="bg-[#E63946] text-white text-base font-semibold px-7 py-3.5 rounded-xl min-h-[44px] hover:bg-[#D32735] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2">
                  Check Your Eligibility
                </button>

                {/* Secondary CTA */}
                <Link 
                  href="/services"
                  className="text-base font-semibold text-[#E63946] hover:text-[#D32735] transition-colors duration-200 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 rounded-sm px-2 py-1"
                >
                  See how we support students
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="order-first lg:order-last">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzA3NzA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students collaborating and studying together"
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
