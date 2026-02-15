import { ImageWithFallback } from './figma/ImageWithFallback';

export function UniversitiesHero() {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-1">
              {/* Eyebrow Label */}
              <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-3">
                Universities
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#0F172A] max-w-[560px]">
                Explore Universities in the UK
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg leading-[1.6] text-[#475569] max-w-[560px] mt-4">
                Discover UK universities and understand how course choice, eligibility, and intake affect where you can apply.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8">
                {/* Primary CTA */}
                <button className="bg-[#E63946] text-white text-base font-semibold px-7 py-3.5 rounded-[12px] min-h-[44px] transition-all duration-200 hover:bg-[#D32F3C] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2">
                  Check University Options
                </button>

                {/* Secondary CTA */}
                <a 
                  href="#how-we-match" 
                  className="text-base font-semibold text-[#E63946] transition-colors duration-200 hover:text-[#D32F3C] inline-flex items-center gap-1"
                >
                  See how we match students
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Trust Micro-copy */}
              <p className="text-sm text-[#64748B] mt-5">
                University options depend on course, intake, and eligibility
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="order-2">
              <div className="relative rounded-[24px] overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629992219172-09eefc9c4d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMHVuaXZlcnNpdHklMjBjYW1wdXMlMjBzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MDc2OTgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students studying at a UK university campus"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
