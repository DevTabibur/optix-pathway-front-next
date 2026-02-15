import { MapPin } from 'lucide-react';

export function OurOffice() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6 text-center">
            Our Office
          </h2>

          {/* Description Text */}
          <p className="text-[15px] leading-[1.6] text-[#475569] text-center mb-12 max-w-[600px] mx-auto">
            Our office is based in London. Appointments are available by prior arrangement.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Address Card */}
            <div className="bg-[#F8FAFC] rounded-[20px] p-8 border border-[#E2E8F0]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1F4E6D]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    Visit Our Office
                  </h3>
                  <address className="not-italic text-[15px] leading-[1.8] text-[#475569]">
                    Unit 5, 84–86 Roman Road<br />
                    London, E2 0PJ
                  </address>
                  <a
                    href="https://maps.google.com/?q=Unit+5,+84-86+Roman+Road,+London,+E2+0PJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-semibold text-[#E63946] hover:text-[#d32f3c] transition-colors duration-200"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-sm h-[300px] lg:h-full lg:min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0376873877844!2d-0.058877523168992!3d51.527633009659444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d1cc98c8a8b%3A0x7d1e3e3d3e3e3e3e!2s84-86%20Roman%20Rd%2C%20London%20E2%200PJ!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Optix Pathway Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
