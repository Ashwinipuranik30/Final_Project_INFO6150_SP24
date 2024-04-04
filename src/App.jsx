import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/aboutus';
import Contactus from './Pages/contactus';
import Deals from './Pages/deals';
import Registration from './Pages/Registration';
import Destination from './Pages/destination';
import Home from './Pages/home';
import Login from './Pages/login';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;