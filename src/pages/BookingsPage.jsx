import { Link } from 'react-router-dom';
import AppointmentCard from '../components/bookings/AppointmentCard';
import AppointmentChart from '../components/bookings/AppointmentChart';

const BookingsPage = ({ appointments, cancelAppointment }) => {
  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">My Today Appointments</h1>
      
      {appointments.length > 0 ? (
        <>
          <AppointmentChart appointments={appointments} />
          
          <div className="mt-10">
            {appointments.map(appointment => (
              <AppointmentCard 
                key={appointment.id}
                appointment={appointment}
                onCancelAppointment={cancelAppointment}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-bold text-gray-800 mb-4">No Appointments Found</h2>
          <p className="text-gray-600 mb-8">
            You don't have any appointments scheduled yet. Find a doctor to book an appointment.
          </p>
          <Link 
            to="/"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition"
          >
            Find a Doctor
          </Link>
        </div>
      )}
    </main>
  );
};

export default BookingsPage;