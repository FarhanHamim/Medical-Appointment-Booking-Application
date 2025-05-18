import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary';
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-12 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-2">
          <Logo size={32} className="text-primary" />
          <span className="text-xl font-bold text-primary">Medix</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`${isActive('/')}`}>Home</Link>
          <Link to="/bookings" className={`${isActive('/bookings')}`}>My Bookings</Link>
          <Link to="/blogs" className={`${isActive('/blogs')}`}>Blogs</Link>
          <Link to="/contact-us" className={`${isActive('/contact-us')}`}>Contact Us</Link>
        </div>
        
        {/* Emergency Button */}
        <Link 
          to="/emergency" 
          className="bg-blue-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
        >
          Emergency
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;