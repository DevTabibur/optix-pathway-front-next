import { motion } from 'motion/react';
import { BlogCategoryTag } from './BlogCategoryTag';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogCardProps {
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  delay?: number;
}

export function BlogCard({ imageUrl, category, title, excerpt, delay = 0 }: BlogCardProps) {
  return (
    <motion.article
      className="group bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#1F4E6D] hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Featured Image */}
      <div className="relative h-[180px] md:h-[200px] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Category Tag */}
        <div className="mb-3">
          <BlogCategoryTag category={category} />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-3 line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm md:text-[15px] text-[#475569] mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Read Link */}
        <a
          href="#blog"
          className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[#E63946] hover:text-[#C52A35] transition-colors duration-200"
        >
          Read Article
          <svg 
            className="w-4 h-4" 
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
      </div>
    </motion.article>
  );
}
