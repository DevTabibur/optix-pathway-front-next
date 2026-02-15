import { useState } from 'react';
import { motion } from 'motion/react';
import { UniversityCardGrid } from './UniversityCardGrid';

type StudentPath = 'international-incountry' | 'uk-home';

interface PathTab {
  id: StudentPath;
  label: string;
  description: string;
}

const tabs: PathTab[] = [
  {
    id: 'international-incountry',
    label: 'International & In-Country Students',
    description: 'Popular UK universities for international applicants and in-country visa switching students'
  },
  {
    id: 'uk-home',
    label: 'UK Home Students',
    description: 'UK universities commonly chosen by home fee status students'
  }
];

// Real UK universities data with logo search queries
const universityData = {
  'international-incountry': [
    { name: 'Abertay University', logoQuery: 'abertay university scotland campus' },
    { name: 'Aberystwyth University', logoQuery: 'aberystwyth university wales building' },
    { name: 'Anglia Ruskin University', logoQuery: 'anglia ruskin university cambridge' },
    { name: 'Arts University Plymouth', logoQuery: 'arts university plymouth building' },
    { name: 'Aston University', logoQuery: 'aston university birmingham campus' },
    { name: 'University of Bedfordshire', logoQuery: 'university of bedfordshire campus' },
    { name: 'Birmingham City University', logoQuery: 'birmingham city university building' },
    { name: 'Bishop Grosseteste University', logoQuery: 'bishop grosseteste university lincoln' },
    { name: 'BPP University', logoQuery: 'bpp university london building' },
    { name: 'Buckinghamshire New University', logoQuery: 'buckinghamshire new university campus' },
    { name: 'Canterbury Christ Church University', logoQuery: 'canterbury christ church university' },
    { name: 'Coventry University', logoQuery: 'coventry university campus building' }
  ],
  'uk-home': [
    { name: 'University of Oxford', logoQuery: 'university of oxford radcliffe camera' },
    { name: 'University of Cambridge', logoQuery: 'university of cambridge kings college' },
    { name: 'Durham University', logoQuery: 'durham university castle cathedral' },
    { name: 'University of Manchester', logoQuery: 'university of manchester campus building' },
    { name: 'University of Bristol', logoQuery: 'university of bristol wills building' },
    { name: 'University of Edinburgh', logoQuery: 'university of edinburgh old college' },
    { name: 'University of Leeds', logoQuery: 'university of leeds parkinson building' },
    { name: 'University of Birmingham', logoQuery: 'university of birmingham clocktower' },
    { name: 'University of Nottingham', logoQuery: 'university of nottingham trent building' }
  ]
};

export function UniversitiesByPathSection() {
  const [activeTab, setActiveTab] = useState<StudentPath>('international-incountry');

  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#1F4E6D] tracking-[0.08em] uppercase mb-4">
                University Options
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-[32px] md:text-[38px] lg:text-[40px] font-bold text-[#0F172A] mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Universities Based on Your Student Path
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Available universities vary depending on your eligibility and study pathway.
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <motion.div
            className="mb-8 md:mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="border-b-2 border-[#E5E7EB] overflow-x-auto">
              <div className="flex gap-2 md:gap-8 min-w-max md:justify-center px-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative pb-4 px-4 md:px-6 font-semibold text-sm md:text-base whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'text-[#1F4E6D]'
                        : 'text-[#475569] hover:text-[#1F4E6D]'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1F4E6D]"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tab Description */}
          <motion.div
            key={`desc-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-sm md:text-base text-[#475569]">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </motion.div>

          {/* University Card Grid */}
          <motion.div
            key={`content-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <UniversityCardGrid universities={universityData[activeTab]} />
          </motion.div>

          {/* Disclaimer Text */}
          <motion.div
            className="text-center mt-8 md:mt-10 max-w-[900px] mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <p className="text-[13px] text-[#475569] leading-relaxed">
              University options depend on course availability, intake, and eligibility. 
              Optix Pathway provides guidance and application support and does not represent 
              universities unless formally stated.
            </p>
          </motion.div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-6 md:mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="#all-universities"
              className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-[#E63946] hover:text-[#C52A35] transition-colors duration-200"
            >
              View full university list
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
