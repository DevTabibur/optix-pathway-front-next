
// import logo from 'figma:asset/93bcdc7aedb493fb887668e08dcc5db56294f17a.png';
import Link from 'next/link';

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Services', href: '/services' },
  { label: 'Universities', href: '/universities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

const studentPaths = [
  { label: 'International Students', href: '/international-students' },
  { label: 'UK Home Students', href: '/uk-home-students' },
  { label: 'In-Country Students', href: '/international-students' },
  { label: 'Popular Courses', href: '/courses' },
  { label: 'Upcoming Intakes', href: '/' }
];

const resources = [
  { label: 'Study in the UK Guide', href: '/blog' },
  { label: 'Visa & Immigration Articles', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#020617] text-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Row 1: Main Footer Content */}
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
              {/* Column 1 - Brand & Contact */}
              <div className="lg:col-span-1">
                {/* Logo */}
                <div className="mb-6">
                  <Link href="/">
                    {/* <img 
                      src={logo} 
                      alt="Optix Pathway" 
                      className="h-10 w-auto"
                    /> */}
                  </Link>
                </div>

                {/* Contact Details */}
                <div className="space-y-3 text-sm leading-[1.7] mb-4">
                  <p>
                    Unit 5, 84–86 Roman Road<br />
                    London E2 0PJ
                  </p>

                  <p>
                    <a 
                      href="tel:+442037934541" 
                      className="hover:text-[#E63946] transition-colors duration-200"
                    >
                      +44 02037 934541
                    </a>
                  </p>

                  <p>
                    <a 
                      href="mailto:info@optixpathway.com" 
                      className="hover:text-[#E63946] transition-colors duration-200"
                    >
                      info@optixpathway.com
                    </a>
                  </p>
                </div>

                {/* Legal Entity */}
                <p className="text-[12.5px] text-[#9CA3AF] mb-6 leading-relaxed">
                  Optix Pathway is a trading name of Optix Prime Services Limited.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5E7EB] hover:text-[#E63946] transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5E7EB] hover:text-[#E63946] transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5E7EB] hover:text-[#E63946] transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2 - Explore */}
              <div>
                <h4 className="text-[13px] font-semibold tracking-[0.08em] text-[#9CA3AF] uppercase mb-4">
                  Explore
                </h4>
                <ul className="space-y-2">
                  {exploreLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm leading-[1.8] hover:text-[#E63946] transition-colors duration-200 inline-block hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Student Paths */}
              <div>
                <h4 className="text-[13px] font-semibold tracking-[0.08em] text-[#9CA3AF] uppercase mb-4">
                  Student Paths
                </h4>
                <ul className="space-y-2">
                  {studentPaths.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm leading-[1.8] hover:text-[#E63946] transition-colors duration-200 inline-block hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 - Resources */}
              <div>
                <h4 className="text-[13px] font-semibold tracking-[0.08em] text-[#9CA3AF] uppercase mb-4">
                  Resources
                </h4>
                <ul className="space-y-2">
                  {resources.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm leading-[1.8] hover:text-[#E63946] transition-colors duration-200 inline-block hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2: Legal & Copyright Bar */}
          <div className="pb-8 md:pb-10">
            {/* Disclaimer */}
            <div className="mb-6">
              <p className="text-[12.5px] text-[#9CA3AF] max-w-[900px] leading-relaxed">
                Optix Pathway provides independent education guidance and application support. We do not represent universities unless formally stated.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1F2937] pt-6">
              <p className="text-[12.5px] text-[#9CA3AF] text-center md:text-left">
                © 2026 Optix Prime Services Limited (Company No. 16958832). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
