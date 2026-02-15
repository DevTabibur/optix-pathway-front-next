export function ContactCTA() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Not Sure Where to Start?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-[#475569] mb-8">
            Check your eligibility to understand your options before applying.
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <a
              href="/eligibility-check"
              className="inline-block bg-[#E63946] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#d32f3c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#E63946]/30"
            >
              Check Your Eligibility
            </a>
          </div>

          {/* Micro-copy */}
          <p className="text-sm text-[#64748B]">
            No obligation • Clear guidance • UK Home & International students supported
          </p>
        </div>
      </div>
    </section>
  );
}
