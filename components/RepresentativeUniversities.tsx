export function RepresentativeUniversities() {
  const universities = [
    "University of Oxford",
    "University of Cambridge",
    "Imperial College London",
    "University College London",
    "University of Edinburgh",
    "University of Manchester",
    "King's College London",
    "University of Bristol",
    "University of Warwick",
    "University of Leeds",
    "University of Birmingham",
    "University of Nottingham",
    "University of Glasgow",
    "University of Sheffield",
    "Durham University",
    "University of Southampton"
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              UK Universities
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              Examples of UK Universities Students Apply To
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[760px] mx-auto mt-3">
              University options depend on course, intake, and eligibility. Below are examples of institutions students may consider.
            </p>
          </div>

          {/* University Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex items-center justify-center min-h-[120px] group transition-all duration-300"
                role="img"
                aria-label={university}
              >
                {/* University Name as Text Logo */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#64748B] group-hover:text-[#1F4E6D] transition-colors duration-300 leading-snug">
                    {university}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-[13px] text-[#64748B] max-w-[900px] mx-auto">
              Logos are shown for illustrative purposes only and do not indicate partnerships or guaranteed admission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
