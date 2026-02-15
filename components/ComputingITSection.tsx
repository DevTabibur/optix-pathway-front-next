import Link from "next/link";

const suitableFor = [
  'Students interested in technology, systems, or digital innovation',
  'Career switchers from non-IT or non-STEM backgrounds',
  'Graduates seeking conversion or specialised IT programmes',
  'Applicants aiming for technical, analytical, or support roles'
];

const degreeOptions = [
  'Computer Science',
  'Information Technology',
  'Data Science',
  'Cyber Security',
  'Software Engineering',
  'Artificial Intelligence',
  'Computing Conversion Courses'
];

const eligibilityInfo = [
  'Suitable for UK Home and International students',
  'Conversion courses available for non-technical backgrounds',
  'Programming experience not always required',
  'Course intensity and assessment methods vary by university'
];

export function ComputingITSection() {
  return (
    <section id="computing-it" className="bg-white py-24">
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
              Computing & IT
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base text-[#475569] leading-[1.7] max-w-[760px] mt-4">
              Computing and IT courses in the UK focus on software, systems, data, and digital technologies. Many programmes are designed for both technical and non-technical backgrounds, including conversion and foundation pathways.
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

              {/* Popular Degree Options */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Popular Degree Options
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

              {/* Entry & Background Considerations */}
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Entry & Background Considerations
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#475569]">
                  Many UK universities offer computing programmes for students without prior IT experience through foundation or conversion routes. Entry requirements vary based on academic background, maths exposure, and English language proficiency.
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
                    Get guidance before selecting a computing pathway
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
