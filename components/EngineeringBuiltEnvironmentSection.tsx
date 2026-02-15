import Link from "next/link";


const suitableFor = [
  'Students with interest in engineering, construction, or infrastructure',
  'Applicants with maths, physics, or technical backgrounds',
  'Career-focused students seeking applied study routes',
  'Students interested in design, project management, or technical systems'
];

const degreeOptions = [
  'Civil Engineering',
  'Mechanical Engineering',
  'Electrical & Electronic Engineering',
  'Construction Management',
  'Quantity Surveying',
  'Architectural Technology',
  'Built Environment Studies'
];

const eligibilityInfo = [
  'Suitable for UK Home and International students',
  'Technical background may be required',
  'English language and subject prerequisites apply',
  'Professional accreditation depends on course and institution'
];

export function EngineeringBuiltEnvironmentSection() {
  return (
    <section id="engineering-built-environment" className="bg-white py-24">
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
              Engineering & Built Environment
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base text-[#475569] leading-[1.7] max-w-[760px] mt-4">
              Engineering and built environment courses in the UK focus on design, construction, systems, and infrastructure. These programmes are best suited to students with technical interests and relevant academic backgrounds.
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

              {/* Common Degree Options */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Common Degree Options
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {degreeOptions.map((degree, index) => (
                    <div
                      key={index}
                      className="bg-[#F1F5F9] text-[#0F172A] rounded-full px-3.5 py-2 text-sm text-center"
                    >
                      {degree}
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic & Entry Considerations */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Academic & Entry Considerations
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  Engineering-related courses often require prior study in mathematics or technical subjects. Entry criteria vary by institution, and foundation or preparatory routes may be available for eligible students.
                </p>
              </div>
            </div>

            {/* Right Column (5 columns) */}
            <div className="lg:col-span-5">
              {/* Info Card */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sticky top-8">
                {/* Card Title */}
                <h3 className="text-base font-semibold text-[#0F172A] mb-4">
                  Eligibility & Study Notes
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
                    Get expert guidance before choosing an engineering pathway
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
