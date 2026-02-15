import Link from "next/link";


const suitableFor = [
  'Students interested in business, finance, management, or entrepreneurship',
  'Career switchers looking for practical and flexible degrees',
  'Applicants with academic or professional backgrounds in any discipline',
  'Students seeking broad career options after graduation'
];

const degreeOptions = [
  'Business Management',
  'Accounting & Finance',
  'International Business',
  'Marketing',
  'Human Resource Management',
  'Entrepreneurship',
  'Supply Chain & Operations'
];

const studentInfo = [
  'Suitable for UK Home students with access to Student Finance (subject to eligibility)',
  'Available for international and in-country students under approved visa routes',
  'Course availability depends on intake, institution, and background'
];

export function BusinessManagementSection() {
  return (
    <section id="business-management" className="bg-white py-24">
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
              Business & Management
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base text-[#475569] leading-[1.7] max-w-[760px] mt-4">
              Business and management degrees are among the most popular study choices in the UK, offering flexible career pathways across finance, operations, marketing, entrepreneurship, and leadership roles.
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

              {/* Entry & Eligibility Considerations */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Entry & Eligibility Considerations
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  Entry requirements vary depending on the university and course level. Factors such as academic background, English proficiency, work experience, and previous study gaps may be considered. Alternative routes such as foundation years or access programmes may be available for eligible students.
                </p>
              </div>
            </div>

            {/* Right Column (5 columns) */}
            <div className="lg:col-span-5">
              {/* Info Card */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sticky top-8">
                {/* Card Title */}
                <h3 className="text-base font-semibold text-[#0F172A] mb-4">
                  UK Home & International Students
                </h3>

                {/* Bullet List */}
                <ul className="space-y-3 mb-6">
                  {studentInfo.map((item, index) => (
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
                    Get guidance before choosing a course
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
