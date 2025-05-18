const DoctorInfo = ({ doctor }) => {
    const { 
      name, 
      image, 
      education, 
      speciality, 
      designation, 
      workplace, 
      fee 
    } = doctor;
    
    return (
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={`Dr. ${name}`}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800">Dr. {name}</h2>
          <p className="text-primary mb-4">{education}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-gray-500 text-sm">Speciality</h3>
              <p className="font-medium">{speciality}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500 text-sm">Designation</h3>
              <p className="font-medium">{designation}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500 text-sm">Workplace</h3>
              <p className="font-medium">{workplace}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500 text-sm">Consultation Fee</h3>
              <p className="font-medium text-primary">${fee}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">About Doctor</h3>
            <p className="text-gray-600">
              Dr. {name} is a highly qualified {speciality.toLowerCase()} specialist with extensive experience in diagnosing and treating various medical conditions. With a strong educational background from {education.split(',')[1].trim()}, Dr. {name} has been providing exceptional care to patients for many years. Currently serving as a {designation} at {workplace}, Dr. {name} is dedicated to delivering personalized care and improving patient outcomes through evidence-based practices.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DoctorInfo;