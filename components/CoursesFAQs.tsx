"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'Can I change my course after applying?',
    answer: 'Course changes may be possible depending on the university, intake stage, and eligibility. It is best to seek guidance before making any changes.'
  },
  {
    question: 'Do I need a specific background for all courses?',
    answer: 'Some courses require relevant academic or subject backgrounds, while others offer foundation or conversion routes.'
  },
  {
    question: 'Are these courses available for both UK Home and International students?',
    answer: 'Many courses are available for both student types, but eligibility and intake availability may vary.'
  },
  {
    question: 'Can I apply without traditional qualifications?',
    answer: 'Alternative entry routes such as foundation or access programmes may be available for eligible students.'
  },
  {
    question: 'How do I know which course is right for me?',
    answer: 'Choosing the right course depends on your background, goals, eligibility, and timing. Our advisors help assess these factors together.'
  }
];

export function CoursesFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-2">
              FAQS
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              Frequently Asked Questions About Courses
            </h2>

            {/* Subheading */}
            <p className="text-base text-[#475569] leading-[1.6] max-w-[720px] mx-auto mt-3">
              Answers to common questions students ask when exploring UK course pathways.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-[12px] overflow-hidden transition-all duration-200"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200 hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#1F4E6D] focus:ring-offset-2"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-semibold text-[#0F172A]">
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
                  id={`faq-answer-${index}`}
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
          <p className="text-sm text-[#64748B] text-center mt-8">
            If you still have questions, our advisors can help you understand your options before you apply.
          </p>
        </div>
      </div>
    </section>
  );
}
