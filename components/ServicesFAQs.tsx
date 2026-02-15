import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function ServicesFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Do you guarantee university admission or visa approval?",
      answer: "No. University admissions and visa decisions are made by universities and relevant authorities. We provide guidance and support throughout the process."
    },
    {
      question: "Do you charge students for your services?",
      answer: "We offer free consultation and guidance. Any applicable costs are explained clearly before you proceed."
    },
    {
      question: "Can you help if I am already in the UK?",
      answer: "Yes. We support in-country students based on eligibility, course availability, and visa conditions."
    },
    {
      question: "Do you support students from all countries?",
      answer: "Our services are available to students from many countries, subject to eligibility and UK study regulations."
    },
    {
      question: "What if I am not eligible right now?",
      answer: "If you are not currently eligible, we explain alternative routes or next steps where possible."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              FAQs
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              Frequently Asked Questions About Our Services
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] mt-3">
              Clear answers to common questions students ask before getting started.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 py-5 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-semibold text-[#0F172A] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1F4E6D] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 pt-2">
                    <p className="text-[15px] leading-[1.7] text-[#475569]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B]">
              If you have additional questions, our advisors can help clarify your options during a consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
