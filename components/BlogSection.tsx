"use client"
import { motion } from 'motion/react';
import { BlogCard } from './BlogCard';

const blogPosts = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1547817651-7fb0cc360536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA1NzgzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'UK Universities',
    title: 'How to Choose the Right UK University for Your Course',
    excerpt: 'Selecting the right university involves understanding course structure, location, career outcomes, and campus culture. Learn what factors to consider when shortlisting universities.',
    delay: 0.1
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1612365922929-eb3b5b4bddb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1ayUyMHBhc3Nwb3J0JTIwdmlzYSUyMGRvY3VtZW50fGVufDF8fHx8MTc3MDYwMTY4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Visa Guide',
    title: 'UK Student Visa Requirements Explained',
    excerpt: 'Navigate the UK student visa process with confidence. From CAS letters to financial requirements, we break down everything you need to know for a successful application.',
    delay: 0.2
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncm91cCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzA2MDE2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Study Tips',
    title: 'International vs UK Home Student: What\'s the Difference?',
    excerpt: 'Understanding the differences in fees, funding, and application processes between international and home students helps you plan your UK education journey better.',
    delay: 0.3
  }
];

export function BlogSection() {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-14">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#1F4E6D] tracking-[0.08em] uppercase mb-4">
                Insights & Guides
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
              Latest Articles for UK Study Aspirants
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Practical guidance, updates, and insights to help you make informed decisions.
            </motion.p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 md:mb-12">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                imageUrl={post.imageUrl}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                delay={post.delay}
              />
            ))}
          </div>

          {/* View All Blog CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="#blog"
              className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-[#E63946] hover:text-[#C52A35] transition-colors duration-200"
            >
              View All Blog Articles
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
