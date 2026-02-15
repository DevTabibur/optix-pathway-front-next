import { UniversityCard } from './UniversityCard';

interface University {
  name: string;
  logoQuery: string;
}

interface UniversityCardGridProps {
  universities: University[];
}

export function UniversityCardGrid({ universities }: UniversityCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {universities.map((university, index) => (
        <UniversityCard
          key={index}
          name={university.name}
          logoQuery={university.logoQuery}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
}
