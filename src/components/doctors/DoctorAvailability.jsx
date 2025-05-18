const DoctorAvailability = ({ availability }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Availability</h3>
        <div className="flex flex-wrap gap-3">
          {days.map(day => {
            const isAvailable = availability.includes(day);
            return (
              <div 
                key={day}
                className={`px-4 py-2 rounded-md text-sm ${
                  isAvailable 
                    ? 'bg-green-50 text-success' 
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default DoctorAvailability;