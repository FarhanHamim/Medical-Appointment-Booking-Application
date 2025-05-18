import statsData from '../../data/statsData';
import StatsCard from './StatsCard';

const SuccessSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">We Provide Best Medical Services</h2>
          <div className="flex justify-center">
            <p className="text-gray-600 whitespace-nowrap">
              Our platform connects you with verified, experienced doctors across specialties at your convenience.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map(stat => (
            <StatsCard 
              key={stat.id}
              image={stat.image}
              number={stat.number}
              title={stat.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;