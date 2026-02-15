"use client"
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrustBadge } from './TrustBadge';
import { CTAButton } from './CTAButton';
import { SecondaryButton } from './SecondaryButton';
import { TrustSignal } from './TrustSignal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC]" aria-label="Hero section">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 md:py-16 lg:py-0 lg:h-[680px]">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex-1 max-w-full lg:max-w-[520px] space-y-6 lg:space-y-8"
            initial="initial"
            animate="animate"
          >
            {/* Trust Badge */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <TrustBadge>Trusted UK Education Consultancy</TrustBadge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-[#0F172A] leading-[1.2] text-center lg:text-left"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Your Trusted Pathway to{' '}
              <span className="text-[#E63946]">Study in the UK</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-lg md:text-xl text-[#475569] leading-[1.6] text-center lg:text-left"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              From course selection to visa success — we guide international and UK students every step of the way.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <CTAButton className="w-full sm:w-auto h-[48px] px-6">
                Get Free Consultation
              </CTAButton>
              <SecondaryButton className="w-full sm:w-auto">
                Explore Services
              </SecondaryButton>
            </motion.div>

            {/* Trust Signals */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <TrustSignal icon="consultation" text="100% Free Consultation" />
              <TrustSignal icon="universities" text="UK Partner Universities" />
              <TrustSignal icon="visa" text="Visa Guidance Support" />
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="flex-1 w-full lg:w-auto relative"
            {...fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Image */}
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629992219172-09eefc9c4d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBVS3xlbnwxfHx8fDE3NzA1OTgxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students at UK University Campus"
                className="w-full h-[400px] md:h-[500px] lg:h-[580px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F4E6D]/20 to-transparent"></div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-8 right-8 w-24 h-24 bg-[#E63946]/10 rounded-full blur-2xl"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-12 left-8 w-32 h-32 bg-[#1F4E6D]/10 rounded-full blur-3xl"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
