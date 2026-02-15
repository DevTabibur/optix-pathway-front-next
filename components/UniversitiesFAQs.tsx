import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function UniversitiesFAQs() {
  const faqs = [
    {
      question: "Do you work with specific universities only?",
      answer: "We guide students toward suitable universities based on eligibility and course requirements. University options vary depending on individual profiles."
    },
    {
      question: "Can I choose any university I like?",
      answer: "University suitability depends on course availability, entry requirements, intake, and eligibility."
    },
    {
      question: "Are these universities guaranteed to accept me?",
      answer: "Final admission decisions are made by universities. We provide guidance and application support."
    },
    {
      question: "Do rankings matter when choosing a university?",
      answer: "Rankings are one of many factors. Course suitability, teaching quality, and student support are equally important."
    },
    {
      question: "How many universities can I apply to?",
      answer: "The number of applications depends on course level, intake, and university policies."
    }
  ];

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
              Frequently Asked Questions About Universities
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] mt-3">
              Clear answers to common questions students ask when choosing UK universities.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion.Root 
            type="single" 
            collapsible 
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-5 py-5 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-[#1F4E6D] focus:ring-offset-2">
                    <span className="text-base font-semibold text-[#0F172A] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className="w-5 h-5 text-[#1F4E6D] flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                      strokeWidth={2}
                    />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-[15px] leading-[1.7] text-[#475569]">
                      {faq.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {/* Supporting Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B]">
              If you still have questions, our advisors can help clarify your university options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
