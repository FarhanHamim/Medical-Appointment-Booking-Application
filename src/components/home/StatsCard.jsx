import CountUp from 'react-countup';

const StatsCard = ({ image, number, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg success-card-shadow text-center">
      <div className="mb-4 flex justify-center">
        <img 
          src={image} 
          alt={title} 
          className="h-16 w-16 object-contain"
        />
      </div>
      <div className="text-3xl font-bold text-primary mb-2">
        <CountUp end={number} duration={2.5} />+
      </div>
      <div className="text-gray-600">{title}</div>
    </div>
  );
};

export default StatsCard;