// components/Footer.js
const Footer = () => {
    return (
      <footer className="mt-24 h-16 bg-[#2b2d42] flex items-center justify-center">
        <p className="text-white text-center text-lg">
          &copy; {new Date().getFullYear()} M-A-M. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;