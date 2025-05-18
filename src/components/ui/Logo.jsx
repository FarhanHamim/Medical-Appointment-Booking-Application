const Logo = ({ size = 24, className = '' }) => {
  return (
    <img 
      src="/src/assests/logo.png"
      alt="Phudu Logo"
      className={className}
      style={{ width: size, height: size }}
    />
  );
};

export default Logo;