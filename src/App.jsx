import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/aboutus';
import Contactus from './Pages/contactus';
import Deals from './Pages/deals';
import Registration from './Pages/Registration';
import Europe from './Pages/europe';
import India from './Pages/india';
import Maldives from './Pages/maldives';
import Thailand from './Pages/thailand';
import Italy from './Pages/italy';
import Spain from './Pages/spain';
import France from './Pages/France';
import Asia from './Pages/asia';
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
        <Route path="/destination/europe" element={<Europe />} />
        <Route path="/destination/asia" element={<Asia />} />
        <Route path="/destination/asia/india" element={<India />} />
        <Route path="/destination/asia/maldives" element={<Maldives />} />
        <Route path="/destination/asia/thailand" element={<Thailand />} />
        <Route path="/destination/europe/spain" element={<Spain />} />
        <Route path="/destination/europe/france" element={<France />} />
        <Route path="/destination/europe/italy" element={<Italy />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;