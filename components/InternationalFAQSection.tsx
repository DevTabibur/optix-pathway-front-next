"use client"
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Can I apply if I am already in the UK?",
    answer: "Yes, students already in the UK on a temporary visa may be eligible to apply or change courses, depending on their circumstances."
  },
  {
    question: "Do you help with visa switching?",
    answer: "We provide guidance on visa switching options based on eligibility and regulations. Final decisions are made by the relevant authorities."
  },
  {
    question: "I had a visa refusal before — can I apply again?",
    answer: "Previous refusals do not always prevent future applications. Each case is assessed individually."
  },
  {
    question: "When should I apply for my preferred intake?",
    answer: "Application timelines depend on course availability and visa processing. We help you plan appropriately."
  },
  {
    question: "Do you charge students for your services?",
    answer: "We offer free consultation and guidance. Any applicable costs are explained clearly before you proceed."
  }
];

export function InternationalFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14 lg:mb-16">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[13px] font-semibold text-[#1F4E6D] tracking-[0.12em] uppercase mb-4">
                FAQs
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Clear answers to questions international students often ask before applying.
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-[#E5E7EB]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left hover:bg-[#F8FAFC] px-4 -mx-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1F4E6D] focus:ring-opacity-50"
                  aria-expanded={openIndex === index}
                >
                  {/* Question */}
                  <span className="text-[16px] font-semibold text-[#0F172A] pr-4">
                    {faq.question}
                  </span>

                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#1F4E6D]" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 px-4 -mx-4">
                        <p className="text-[15px] text-[#475569] leading-[1.7] mt-2">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Supporting Note */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B]">
              If you have questions not covered here, our advisors are happy to assist during a free consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
