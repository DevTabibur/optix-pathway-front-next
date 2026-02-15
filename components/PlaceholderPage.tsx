
interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({
  title,
  description = "This page is currently in development.",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] w-full">
          <div className="max-w-[800px] mx-auto text-center">
            {/* Page Title */}
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#0F172A] mb-6">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#475569] mb-8 leading-relaxed">
              {description}
            </p>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#E63946] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#475569]">
                Page in progress
              </span>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
