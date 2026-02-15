import { GraduationCap, FileText, FileCheck } from 'lucide-react';

export function CoreStudentServices() {
  const services = [
    {
      icon: GraduationCap,
      title: "Course & University Guidance",
      description: "Personalised guidance to help students identify suitable courses and universities based on eligibility, background, and goals."
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Support with university applications, document preparation, and submission processes."
    },
    {
      icon: FileCheck,
      title: "CAS & Visa Guidance",
      description: "Step-by-step advisory support on Confirmation of Acceptance for Studies (CAS) and the UK student visa process."
    }
  ];

  return (
    <section id="services-list" className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              What We Do
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              Our Core Student Services
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[720px] mx-auto mt-3">
              Our services are designed to guide students through each stage of the UK study process.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] transition-all duration-300 hover:border-[#E63946] hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <IconComponent 
                      className="w-10 h-10 text-[#1F4E6D]" 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[15px] leading-[1.7] text-[#475569]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Important Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B] max-w-[900px] mx-auto">
              Admission and visa decisions are made by universities and relevant authorities. Our role is to guide and support students throughout the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
