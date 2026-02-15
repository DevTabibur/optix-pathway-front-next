export function UniversitiesCTA() {
  return (
    <section className="bg-[#1F4E6D] py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-bold text-white leading-[1.25]">
            Not Sure Which University Is Right for You?
          </h2>

          {/* Subheading */}
          <p className="text-lg leading-[1.6] text-[#E5E7EB] mt-3 max-w-[700px] mx-auto">
            Get eligibility-based guidance to find universities that match your course, background, and study plans.
          </p>

          {/* Primary CTA Button */}
          <div className="mt-8">
            <button 
              className="bg-[#E63946] text-white text-base font-semibold px-8 py-4 rounded-xl min-h-[48px] hover:bg-[#d32f3c] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F4E6D]"
            >
              Check Your Eligibility
            </button>
          </div>

          {/* Reassurance Micro-copy */}
          <p className="text-sm text-[#E5E7EB] mt-4">
            No obligation • Eligibility-based guidance • UK Home & International students supported
          </p>
        </div>
      </div>
    </section>
  );
}
