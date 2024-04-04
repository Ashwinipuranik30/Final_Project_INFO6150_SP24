import { Link } from 'react-router-dom';
import Home from '../Pages/home';
import About from '../Pages/aboutus';
import Contactus from '../Pages/contactus';
import Deals from '../Pages/deals';
import Login from '../Pages/login';
import Registration from '../Pages/Registration';
import Destination from '../Pages/destination';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About</Link>
            </li>
            <li>
              <Link to="/contactus">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/deals">Deals</Link>
            </li>
          </ul>
        </nav>
        <p className="mt-4">&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;