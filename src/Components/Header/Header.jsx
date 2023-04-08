import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>

               <nav className='  flex gap-6 bg-[#0105eb] text-white py-1 px-3 '>
                    <Link className=' text-xl font-medium' to={"/"}>Home</Link>
                    <Link className=' text-xl font-medium' to={"/order"}>Order</Link>
                    <Link className=' text-xl font-medium' to={"/grand"}>Grander</Link>
                    <Link className=' text-xl font-medium' to={"/about"}>About</Link>
                    <Link className=' text-xl font-medium' to={"/contact"}>Contact</Link>
               </nav>
          </div>
     );
};

export default Header;