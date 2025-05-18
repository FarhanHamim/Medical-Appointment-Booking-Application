const AppointmentCard = ({ appointment, onCancelAppointment }) => {
    const { id, name, image, fee, education, speciality } = appointment;
    
    return (
      <div className="bg-white p-6 rounded-lg appointment-card-shadow mb-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={image} 
              alt={`Dr. ${name}`}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Dr. {name}</h3>
              <p className="text-gray-500 text-sm">{education}</p>
            </div>
          </div>
          
          <div className="md:ml-auto flex flex-col md:flex-row md:items-center">
            <div className="mr-8 mb-4 md:mb-0">
              <div className="text-gray-600 text-sm mb-1">Speciality</div>
              <div className="font-medium">{speciality}</div>
            </div>
            
            <div className="mr-8 mb-4 md:mb-0">
              <div className="text-gray-600 text-sm mb-1">Fee</div>
              <div className="font-medium text-primary">${fee}</div>
            </div>
            
            <button 
              onClick={() => onCancelAppointment(id)}
              className="bg-red-50 text-error hover:bg-red-100 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AppointmentCard;