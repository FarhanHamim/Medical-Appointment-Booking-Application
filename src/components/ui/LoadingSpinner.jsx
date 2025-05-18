import Logo from './Logo';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-pulse">
        <Logo size={48} />
      </div>
      <p className="mt-4 text-primary font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;