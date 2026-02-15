import Link from "next/link";


const suitableFor = [
  'Students interested in education, learning, and teaching methods',
  'Applicants planning careers in education support, training, or academia',
  'Graduates seeking progression into education-related fields',
  'International students exploring UK education systems'
];

const degreeOptions = [
  'Education Studies',
  'Early Childhood Education',
  'Educational Leadership',
  'TESOL / TEFL (Academic)',
  'Special Educational Needs (SEN)',
  'Childhood Studies',
  'Education & Training'
];

const eligibilityInfo = [
  'Available for UK Home and International students',
  'English language proficiency required',
  'Teaching placements may apply for some courses',
  'Professional teaching routes require separate assessment'
];

export function EducationTeachingSection() {
  return (
    <section id="education-teaching" className="bg-white py-24">
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
              Education & Teaching Pathways
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base text-[#475569] leading-[1.7] max-w-[760px] mt-4">
              Education-related courses in the UK focus on learning theory, teaching methods, educational leadership, and academic research. These programmes provide a foundation for careers in education, training, and related fields.
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

              {/* Teaching Qualification Note */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Teaching Qualification Note
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  Academic education degrees do not automatically confer Qualified Teacher Status (QTS) in the UK. Professional teaching roles require additional training, accreditation, and eligibility checks depending on the teaching level and location.
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
                    Get guidance before choosing an education pathway
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
