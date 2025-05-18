import { useState } from 'react';
import doctorsData from '../../data/doctorsData';
import DoctorCard from './DoctorCard';

const DoctorsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedDoctors = showAll ? doctorsData : doctorsData.slice(0, 6);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Best Doctors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-6">
            Our platform connects you with verified, experienced doctors across specialties at your convenience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {!showAll && doctorsData.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Doctors
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsSection;