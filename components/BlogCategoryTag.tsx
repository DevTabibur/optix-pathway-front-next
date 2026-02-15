interface BlogCategoryTagProps {
  category: string;
}

export function BlogCategoryTag({ category }: BlogCategoryTagProps) {
  return (
    <span className="inline-block px-3 py-1.5 bg-[#F8FAFC] text-[#1F4E6D] text-xs font-semibold rounded-full">
      {category}
    </span>
  );
}
