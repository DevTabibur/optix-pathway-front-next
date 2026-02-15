import { Plane, Car, Home, BookOpen } from 'lucide-react';

export function UKArrivalSupport() {
  const features = [
    {
      icon: Plane,
      title: "Arrival Preparation",
      description: "Guidance on travel planning, arrival readiness, and what to expect when entering the UK."
    },
    {
      icon: Car,
      title: "Airport Pickup Assistance",
      description: "Support with understanding airport pickup options and coordinating safe arrival arrangements."
    },
    {
      icon: Home,
      title: "Accommodation Guidance",
      description: "Advice on student accommodation options, including university halls and private housing."
    },
    {
      icon: BookOpen,
      title: "New Student Starter Guide",
      description: "Practical guidance covering essential steps for new international students in the UK."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              Beyond Admission
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              UK Arrival & Student Onboarding Support
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[760px] mx-auto mt-3">
              We support international students beyond admission by helping them prepare for arrival and settle into life in the UK.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent 
                      className="w-8 h-8 text-[#1F4E6D]" 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-[15px] leading-[1.7] text-[#475569]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Important Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B] max-w-[900px] mx-auto">
              Availability of post-arrival support may vary based on location and service type. We provide guidance and coordination support to help students prepare effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
