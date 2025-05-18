import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const { id, name, image, education, speciality, experience, registrationNumber } = doctor;

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col h-full">
      <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 text-xs rounded-full text-green-700 bg-green-100">
            Available
          </span>
          <span className="px-2 py-1 text-xs rounded-full text-blue-700 bg-blue-100">
            {experience}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. {name}</h3>
        <p className="text-gray-600 text-sm mb-1">{education}</p>
        <p className="text-gray-600 text-sm mb-2">{speciality}</p>
        
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Reg No: {registrationNumber}</span>
        </div>
      </div>

      <Link 
        to={`/doctor/${id}`}
        className="block w-full py-2 text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors mt-auto"
      >
        View Details
      </Link>
    </div>
  );
};

export default DoctorCard;