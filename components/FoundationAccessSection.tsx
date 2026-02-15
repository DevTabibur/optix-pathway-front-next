import Link from "next/link";


const suitableFor = [
  'Students without traditional academic qualifications',
  'Applicants with study gaps or career breaks',
  'Mature students returning to education',
  'International students needing academic preparation'
];

const routeOptions = [
  'Foundation Year',
  'Access to Higher Education',
  'International Foundation Programme',
  'Pre-Master\'s Programme',
  'Extended Degree Routes'
];

const eligibilityInfo = [
  'Available for UK Home and International students',
  'Progression depends on academic performance',
  'English language requirements may apply',
  'Course availability varies by institution'
];

export function FoundationAccessSection() {
  return (
    <section id="foundation-access" className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-2">
              Course Pathway
            </div>

            {/* Heading */}
            <h2 className="text-[26px] md:text-[34px] font-bold text-[#0F172A] mt-2">
              Foundation & Access Routes
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base text-[#475569] leading-[1.7] max-w-[760px] mt-4">
              Foundation and access routes provide alternative pathways into UK degrees for students who do not meet standard entry requirements. These programmes help build academic skills and subject knowledge before progressing to a full degree.
            </p>
          </div>

          {/* Two-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10">
            {/* Left Column (7 columns) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Who This Pathway Is For */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Who This Pathway Is For
                </h3>
                <ul className="space-y-3">
                  {suitableFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E6D] flex-shrink-0 mt-2.5"></span>
                      <span className="text-[15px] leading-[1.7] text-[#475569]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Route Options */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Common Route Options
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {routeOptions.map((route, index) => (
                    <div
                      key={index}
                      className="bg-[#F1F5F9] text-[#0F172A] rounded-full px-3.5 py-2 text-sm text-center"
                    >
                      {route}
                    </div>
                  ))}
                </div>
              </div>

              {/* Progression & Outcomes */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Progression & Outcomes
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  Successful completion of a foundation or access programme may allow progression to an undergraduate or postgraduate degree, subject to meeting progression criteria set by the institution.
                </p>
              </div>
            </div>

            {/* Right Column (5 columns) */}
            <div className="lg:col-span-5">
              {/* Info Card */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sticky top-8">
                {/* Card Title */}
                <h3 className="text-base font-semibold text-[#0F172A] mb-4">
                  Eligibility & Progression Notes
                </h3>

                {/* Bullet List */}
                <ul className="space-y-3 mb-6">
                  {eligibilityInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E6D] flex-shrink-0 mt-2"></span>
                      <span className="text-sm leading-[1.6] text-[#475569]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Block */}
                <div>
                  {/* Primary Button */}
                  <Link href="/contact">
                    <button className="w-full bg-[#E63946] text-white rounded-[10px] px-5 py-3.5 text-[15px] font-semibold hover:bg-[#D32F3D] transition-colors duration-200 min-h-[44px]">
                      Check Your Eligibility
                    </button>
                  </Link>

                  {/* Secondary Text */}
                  <p className="text-[13px] text-[#64748B] text-center mt-2">
                    Explore alternative entry routes with guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
