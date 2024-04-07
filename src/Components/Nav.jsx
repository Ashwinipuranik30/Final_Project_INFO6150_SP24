import Logo from './Logo';
import Navlinks from './Navlinks';



const Nav = () => {
  return ( 
    <nav className="bg-teal-500 text-white text-center ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
       <Logo /> 
       <Navlinks />
      </div>
    </nav>
  )
};

export default Nav;