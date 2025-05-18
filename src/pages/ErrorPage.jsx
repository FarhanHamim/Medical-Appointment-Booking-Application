import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="flex items-center justify-center min-h-[80vh]">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;