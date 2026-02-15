import { useState } from 'react';
import { motion } from 'motion/react';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "Can I study without prior qualifications?",
    answer: "Some universities offer alternative or access-style pathways depending on your background. Our advisors assess your profile to identify suitable options."
  },
  {
    question: "Am I eligible for Student Finance?",
    answer: "Eligibility depends on your status and personal circumstances. We provide guidance to help you understand whether you may qualify."
  },
  {
    question: "Do you charge students for your services?",
    answer: "We provide free consultation and guidance. Any applicable costs will be explained clearly before you proceed."
  },
  {
    question: "I am a mature student — can I still apply?",
    answer: "Yes, many mature students successfully apply each year. Age alone does not prevent you from studying."
  },
  {
    question: "How long does the application process take?",
    answer: "Timelines vary depending on course, intake, and individual circumstances. We help you plan realistic timelines."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
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
              Clear answers to questions UK Home Students often ask before applying.
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>

          {/* Supporting Note */}
          <motion.div
            className="text-center mt-8 md:mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] leading-[1.6]">
              If you have questions not covered here, our advisors are happy to help during a free consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
