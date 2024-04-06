import Tripinn_logo from '../assets/images/Tripinn_logo.png';
const Logo = () => {
    return (
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Tripinn_logo} className="h-8" alt="Tripinn Logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Tripinn</span>
       </a>
    );
  };
  export default Logo;