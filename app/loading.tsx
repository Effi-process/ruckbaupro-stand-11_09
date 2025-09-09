export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full animate-ping opacity-30"></div>
          <div className="relative w-24 h-24 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>
        <p className="text-lg font-semibold text-gray-700">Lade Inhalte...</p>
        <p className="text-sm text-gray-500 mt-2">Premium Asbestsanierung</p>
      </div>
    </div>
  );
}