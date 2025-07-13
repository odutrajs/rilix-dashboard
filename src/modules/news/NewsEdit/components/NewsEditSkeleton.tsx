const NewsEditSkeleton = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
      <div className="h-10 bg-gray-200 rounded animate-pulse" />
      <div className="h-24 bg-gray-200 rounded animate-pulse" />
      <div className="h-24 bg-gray-200 rounded animate-pulse" />
      <div className="h-10 bg-gray-200 rounded w-1/2 animate-pulse" />
      <div className="h-10 bg-gray-200 rounded w-1/4 animate-pulse" />
    </div>
  );
};

export default NewsEditSkeleton;
