import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import doctorsData from '../data/doctorsData';
import DoctorAvailability from '../components/doctors/DoctorAvailability';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const DoctorDetailsPage = ({ appointments, addAppointment }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    let doctorData = doctorsData.find(doc => doc.id === id);
    
    if (!doctorData && id.startsWith('dr-')) {
      const idWithoutPrefix = id.substring(3); // Remove "dr-" prefix
      doctorData = doctorsData.find(doc => doc.id === idWithoutPrefix);
    }
    
    if (!doctorData) {
      doctorData = doctorsData.find(doc => 
        doc.id.includes(id) || 
        `dr-${doc.id}` === id ||
        doc.id.toLowerCase() === id.toLowerCase()
      );
    }
    
    if (doctorData) {
      console.log("Doctor found:", doctorData);
      setDoctor(doctorData);
      setLoading(false);
    } else {
      console.log("Doctor not found for ID:", id);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
  const today = new Date().toLocaleString('en-us', { weekday: 'long' });
  const isAvailableToday = doctor?.availability.includes(today);
  const isAlreadyBooked = appointments.some(app => app.id === (doctor?.id || ''));
  
  const handleBookNow = () => {
    if (isAlreadyBooked) {
      toast.error(`You already have an appointment with Dr. ${doctor.name}`);
      return;
    }
    
    addAppointment(doctor);
    toast.success(`Appointment booked with Dr. ${doctor.name}`);
    navigate('/bookings');
  };
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!doctor) {
    return (
      <div className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h2>
        <p className="text-gray-600 mb-8">
          The doctor you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const DoctorInfo = () => {
    const { name, image, education, speciality, designation, workplace, fee, registrationNumber } = doctor;
    
    return (
      <div className="flex flex-col md:flex-row gap-8">
        {}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="aspect-square rounded-xl overflow-hidden">
            {}
            {console.log("Image path:", image)}
            
            {}
            <img 
              src={image} 
              alt={`Dr. ${name}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Error loading image from path: ${image}`);
                if (image.startsWith('/')) {
                e.target.src = image.substring(1);
                } else {
                  e.target.src = `/${image}`;
                }
                
                e.target.onerror = () => {
                  e.target.src = '/placeholder-doctor.png';
                  e.target.onerror = null;
                };
              }}
            />
          </div>
        </div>
        
        {/* Doctor Info */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. {name}</h2>
          <p className="text-blue-600 mb-4">{education}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Speciality</h3>
              <p className="font-medium text-gray-800">{speciality}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Designation</h3>
              <p className="font-medium text-gray-800">{designation}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Workplace</h3>
              <p className="font-medium text-gray-800">{workplace}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Consultation Fee</h3>
              <p className="font-medium text-blue-600">${fee}</p>
            </div>
            
            {registrationNumber && (
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Registration No.</h3>
                <p className="font-medium text-gray-800">{registrationNumber}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="container mx-auto py-12 px-6">
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Doctor's Profile Details</h1>
        <p className="text-gray-600 mb-6">Book a consultation with a trusted healthcare professional</p>
        
        <DoctorInfo />
        <DoctorAvailability availability={doctor.availability} />
        
        <div className="mt-10 p-6 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Ready to book an appointment?</h3>
              <p className="text-gray-600">
                {isAvailableToday 
                  ? "Doctor is available today. Book now to secure your slot!" 
                  : "Doctor is not available today. You can still book for a future date."}
              </p>
            </div>
            
            <div className="flex items-center">
              <div className={`mr-4 px-3 py-1 rounded-full text-sm ${
                isAvailableToday 
                  ? 'bg-green-100 text-success' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {isAvailableToday ? 'Available' : 'Unavailable'} Today
              </div>
              
              <button
                onClick={handleBookNow}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition"
              >
                Book Now
              </button>
            </div>
          </div>  
        </div>
      </div>
    </main>
  );
};

export default DoctorDetailsPage;