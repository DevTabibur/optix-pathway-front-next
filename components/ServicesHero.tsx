import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesHero() {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-1">
              {/* Eyebrow */}
              <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-3">
                Services
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#0F172A] max-w-[580px]">
                Student Support From Application to Arrival
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg leading-[1.6] text-[#475569] max-w-[580px] mt-4">
                We provide eligibility-based guidance and support to help students plan, apply, and prepare for their UK study journey.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-5 mt-8">
                {/* Primary CTA */}
                <button className="bg-[#E63946] text-white text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-[#d32f3c] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2">
                  Check Your Eligibility
                </button>

                {/* Secondary CTA */}
                <a 
                  href="#services-list" 
                  className="text-base font-semibold text-[#E63946] hover:text-[#d32f3c] transition-colors duration-200 focus:outline-none focus:underline"
                >
                  See all services ↓
                </a>
              </div>

              {/* Trust Micro-copy */}
              <p className="text-sm text-[#64748B] mt-5">
                UK Home & International students supported • Eligibility-based guidance
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="order-2">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565688420536-11a4ddfa246f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY29uc3VsdGF0aW9uJTIwZ3VpZGFuY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNzcwMzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student receiving professional guidance and consultation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
