/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (no actual backend integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log form data to console for demonstration
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        studentType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[700px] mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Send Us a Message
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-[10px] border border-[#CBD5E1] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-colors duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-[10px] border border-[#CBD5E1] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Number (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Phone Number <span className="text-[#64748B] font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-[10px] border border-[#CBD5E1] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-colors duration-200"
                placeholder="+44 20 1234 5678"
              />
            </div>

            {/* Student Type */}
            <div>
              <label htmlFor="studentType" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Student Type *
              </label>
              <select
                id="studentType"
                name="studentType"
                value={formData.studentType}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-[10px] border border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-colors duration-200 bg-white"
              >
                <option value="">Select your student type</option>
                <option value="uk-home">UK Home</option>
                <option value="international">International</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-[10px] border border-[#CBD5E1] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-colors duration-200 resize-vertical"
                placeholder="Tell us about your enquiry..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E63946] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#d32f3c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#E63946]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm text-center">
                Something went wrong. Please try again later.
              </div>
            )}

            {/* Disclaimer */}
            <p className="text-sm text-[#64748B] text-center pt-2">
              This form is for general enquiries. For personalised guidance, please use the eligibility check.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
