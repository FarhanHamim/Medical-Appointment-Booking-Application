import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="text-xl font-bold ml-2">Medix</span>
          </Link>
        </div>

        {}
        <nav className="flex justify-center mb-6">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-gray-700 hover:text-primary">Home</Link></li>
            <li><Link to="/my-bookings" className="text-gray-700 hover:text-primary">My-Bookings</Link></li>
            <li><Link to="/blogs" className="text-gray-700 hover:text-primary">Blogs</Link></li>
            <li><Link to="/contact-us" className="text-gray-700 hover:text-primary">Contact Us</Link></li>
          </ul>
        </nav>

        {}
        <div className="flex justify-center space-x-3">
          <a 
            href="https://www.facebook.com/nahar.amina.56" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-6 h-6 transition-transform hover:scale-110" 
            aria-label="Facebook"
          >
            <svg height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" fill="#1877f2"/>
              <path d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z" fill="#fff"/>
            </svg>
          </a>
          <a 
            href="https://x.com/ZulkarnainSaer" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-6 h-6 transition-transform hover:scale-110" 
            aria-label="Twitter"
          >
            <svg height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104" fill="#1da1f2"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/amirun-nahar-899473344" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-6 h-6 transition-transform hover:scale-110" 
            aria-label="LinkedIn"
          >
            <svg height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z" fill="#2867b2"/>
              <rect height="257.962" fill="#fff" width="85.76" x="61.053" y="178.667"/>
              <path d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z" fill="#fff"/>
              <path d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z" fill="#fff"/>
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/@MrBeast" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-6 h-6 transition-transform hover:scale-110" 
            aria-label="YouTube"
          >
            <svg height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z" fill="#ed1f24"/>
              <path d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;