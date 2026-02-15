import { Search, Mail, FileText, Plane, Users } from 'lucide-react';

const timelineSteps = [
  {
    icon: Search,
    label: 'Course & University Selection'
  },
  {
    icon: Mail,
    label: 'Offer Letter'
  },
  {
    icon: FileText,
    label: 'CAS Issuance'
  },
  {
    icon: Plane,
    label: 'Visa Application'
  },
  {
    icon: Users,
    label: 'UK Arrival & Onboarding'
  }
];

export function UKStudyTimelineSection() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-[28px] md:text-[32px] lg:text-4xl font-bold text-[#0F172A] mb-3">
            Your UK Study Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            {/* Connecting Line */}
            <div className="absolute top-[52px] left-0 right-0 h-[2px] bg-[#E5E7EB]" style={{ left: '10%', right: '10%' }}></div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-5 gap-4 relative">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="w-[104px] h-[104px] rounded-full bg-white border-[3px] border-[#1F4E6D] flex items-center justify-center mb-4 relative z-10 shadow-sm">
                      <Icon className="w-10 h-10 text-[#1F4E6D] stroke-[1.5]" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="text-sm font-semibold text-[#1F4E6D] mb-2">
                      Step {index + 1}
                    </div>
                    
                    {/* Label */}
                    <div className="text-[15px] font-medium text-[#0F172A] leading-tight">
                      {step.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-6">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  {/* Left: Icon and Connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Icon Circle */}
                    <div className="w-[72px] h-[72px] rounded-full bg-white border-[3px] border-[#1F4E6D] flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-[#1F4E6D] stroke-[1.5]" />
                    </div>
                    
                    {/* Connecting Line (except last item) */}
                    {index < timelineSteps.length - 1 && (
                      <div className="w-[2px] h-10 bg-[#E5E7EB] mt-2"></div>
                    )}
                  </div>
                  
                  {/* Right: Content */}
                  <div className="pt-3">
                    <div className="text-sm font-semibold text-[#1F4E6D] mb-1">
                      Step {index + 1}
                    </div>
                    <div className="text-[15px] font-medium text-[#0F172A]">
                      {step.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#64748B] max-w-[700px] mx-auto">
            Timelines vary based on intake, course, and visa processing times. Early planning is recommended.
          </p>
        </div>
      </div>
    </section>
  );
}
