export default function CourseSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="w-8 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-16 h-6 bg-gray-300 rounded"></div>
          <div className="w-24 h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
