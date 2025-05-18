import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import DoctorDetailsPage from './pages/DoctorDetailsPage';
import BookingsPage from './pages/BookingsPage';
import BlogsPage from './pages/BlogsPage';
import ErrorPage from './pages/ErrorPage';
import LoadingSpinner from './components/ui/LoadingSpinner';
import doctorsData from './data/doctorsData';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    let title = 'Medix';
    
    if (location.pathname === '/') {
      title = 'Medix - Home';
    } else if (location.pathname === '/bookings') {
      title = 'Medix - Bookings';
    } else if (location.pathname === '/blogs') {
      title = 'Medix - Blogs';
    } else if (location.pathname === '/emergency') {
      title = 'Medix - Emergency';
    } else if (location.pathname === '/contact-us') {
      title = 'Medix - Contact Us';
    } else if (location.pathname.includes('/doctor/')) {
      const doctorId = location.pathname.split('/').pop();
      const doctor = doctorsData.find(doc => doc.id === doctorId);
      if (doctor) {
        title = `Medix - Dr. ${doctor.name}`;
      } else {
        title = 'Medix - Doctor Not Found';
      }
    } else {
      title = 'Medix - Page Not Found';
    }
    
    document.title = title;
  }, [location]);

  const addAppointment = (doctorData) => {
    setAppointments([...appointments, doctorData]);
  };

  const cancelAppointment = (doctorId) => {
    setAppointments(appointments.filter(app => app.id !== doctorId));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/doctors/:id" 
            element={
              <DoctorDetailsPage 
                appointments={appointments}
                addAppointment={addAppointment}
              />
            } 
          />
          <Route 
            path="/doctor/:id" 
            element={
              <DoctorDetailsPage 
                appointments={appointments}
                addAppointment={addAppointment}
              />
            } 
          />
          <Route 
            path="/bookings" 
            element={
              <BookingsPage 
                appointments={appointments}
                cancelAppointment={cancelAppointment}
              />
            } 
          />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/emergency" element={<ErrorPage />} />
          <Route path="/contact-us" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      {!['/emergency', '/contact-us', '*'].includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;