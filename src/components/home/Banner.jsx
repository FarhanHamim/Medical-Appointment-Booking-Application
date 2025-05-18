import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="bg-white rounded-2xl py-12 px-6 md:px-12 my-12 relative">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
        
        <div className="flex max-w-2xl mx-auto mb-12 gap-4">
          <input 
            type="text"
            placeholder="Search any doctor..."
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition">
            Search Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-[300px]">
            <img 
              src="/src/assests/banner-img-1.png" 
              alt="Medical Professional"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[300px]">
            <img 
              src="/src/assests/banner-img-2.jpg" 
              alt="Medical Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;