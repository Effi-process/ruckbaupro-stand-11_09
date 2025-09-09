export default function LoadingSpinner({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin`}>
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#0066CC] border-t-transparent animate-pulse"></div>
        </div>
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-[#0066CC]/10 animate-ping`}></div>
      </div>
    </div>
  );
}