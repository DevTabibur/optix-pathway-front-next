"use client"
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InternationalStudentsHero() {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-[13px] font-semibold text-[#1F4E6D] tracking-[0.12em] uppercase mb-3">
                  Student Path
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.2] max-w-[560px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Study in the UK as an International Student
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-[16px] md:text-[18px] text-[#475569] leading-[1.6] max-w-[560px] mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Guidance for students applying from outside the UK or already in the UK on a temporary visa, including visa switching support.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* Primary CTA */}
                <button className="bg-[#E63946] text-white text-[16px] font-semibold px-7 py-3.5 rounded-xl min-h-[44px] hover:bg-[#C62E3A] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center">
                  Get Free Consultation
                </button>

                {/* Secondary CTA */}
                <button className="text-[#1F4E6D] text-[16px] font-semibold hover:text-[#153A52] transition-colors duration-150 inline-flex items-center gap-1.5 group">
                  Check Eligibility
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </button>
              </motion.div>

              {/* Trust Micro-copy */}
              <motion.div
                className="flex items-start gap-2 mt-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <CheckCircle className="w-4 h-4 text-[#1F4E6D] flex-shrink-0 mt-0.5" />
                <p className="text-[14px] text-[#64748B] leading-[1.6]">
                  Eligibility-based guidance • In-country support included • No pressure
                </p>
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-[#F1F5F9] aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1667017897661-47f65e263ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBVSyUyMGNhbXB1cyUyMGRpdmVyc2V8ZW58MXx8fHwxNzcwNjU0MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="International students on UK campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
