import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import { useState } from "react";

const Navbar = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleImageClick = () => {
    setIsBouncing(true);

    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };
  return (
    <header className='header'>
      <NavLink to='/' onClick={handleImageClick}>
      <img
        src={logo}
        alt='logo'
        className={`w-20 h-15 object-contain ${isBouncing ? 'animate-bounce' : ''}`}
      />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        {/* <NavLink to='/about' className={({ isActive }) => isActive ? "text-red-600" : "text-black" }>
          About
        </NavLink> */}
        {/* <NavLink to='/projects' className={({ isActive }) => isActive ? "text-red-600" : "text-black"}>
          Projects
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Navbar;
