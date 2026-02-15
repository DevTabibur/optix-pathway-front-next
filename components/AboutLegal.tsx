export function AboutLegal() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              Legal Information
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-4xl font-bold text-[#0F172A] mt-2">
              Legal & Company Information
            </h2>
          </div>

          {/* Legal Information Card */}
          <div className="max-w-[720px] mx-auto bg-white rounded-[20px] p-8 md:p-10 border border-[#E2E8F0]">
            <div className="space-y-6 text-center">
              {/* Trading Name */}
              <p className="text-[15px] leading-[1.7] text-[#475569]">
                Optix Pathway is a trading name.
              </p>

              <p className="text-[15px] leading-[1.7] text-[#475569]">
                The legal entity operating this service is:
              </p>

              {/* Company Name */}
              <div className="py-4">
                <p className="text-lg font-semibold text-[#0F172A]">
                  OPTIX PRIME SERVICES LIMITED
                </p>
              </div>

              {/* Company Details */}
              <div className="space-y-2">
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  Company Number: 16958832
                </p>
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  Registered in England and Wales
                </p>
              </div>

              {/* Supporting Note */}
              <div className="pt-4 mt-6 border-t border-[#E2E8F0]">
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  All services are provided in accordance with UK regulations and applicable education and immigration guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
