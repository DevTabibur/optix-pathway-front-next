import Link from "next/link";


export function AboutCTA() {
  return (
    <section className="bg-[#1F4E6D] py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-bold text-white leading-[1.25]">
            Let's Plan Your UK Study Path Together
          </h2>

          {/* Subheading */}
          <p className="text-lg leading-[1.6] text-[#E5E7EB] mt-3 max-w-[700px] mx-auto">
            Get clear, eligibility-based guidance before making any decisions.
          </p>

          {/* Primary CTA Button */}
          <div className="mt-8">
            <Link
              href="/uk-home-students"
              className="inline-flex items-center justify-center bg-[#E63946] text-white text-base font-semibold px-8 py-4 rounded-xl min-h-[48px] hover:bg-[#d32f3c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#E63946]/30"
            >
              Check Your Eligibility
            </Link>
          </div>

          {/* Reassurance Micro-Copy */}
          <p className="text-sm text-[#E5E7EB] mt-4">
            No obligation • Clear guidance • UK Home & International students supported
          </p>
        </div>
      </div>
    </section>
  );
}
