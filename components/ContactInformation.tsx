import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInformation() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 020 3793 4541",
      href: "tel:+442037934541"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@optixpathway.com",
      href: "mailto:info@optixpathway.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Unit 5, 84–86 Roman Road\nLondon, E2 0PJ",
      href: "https://maps.google.com/?q=Unit+5,+84-86+Roman+Road,+London,+E2+0PJ"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] hover:shadow-md transition-shadow duration-200"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-[#1F4E6D]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    {card.title}
                  </h3>

                  {/* Content */}
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.icon === MapPin ? "_blank" : undefined}
                      rel={card.icon === MapPin ? "noopener noreferrer" : undefined}
                      className="text-[15px] leading-[1.6] text-[#475569] hover:text-[#1F4E6D] transition-colors duration-200 whitespace-pre-line"
                    >
                      {card.content}
                    </a>
                  ) : (
                    <p className="text-[15px] leading-[1.6] text-[#475569] whitespace-pre-line">
                      {card.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
