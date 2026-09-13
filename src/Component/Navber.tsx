import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../assets/logo-text.png';

const Navber = () => {
  return (
    <div className='border-t border-b border-gray-200  fixed top-0 left-0 w-full z-50 bg-white'>
      <nav className='container mx-auto hidden xl:w-270  md:flex justify-between items-center py-3'>
        <img className='w-fit h-8.5' src={Logo} alt="" />
        <ul className='hidden md:flex gap-6 items-center text-[#475569] text-[14px]  font-normal'>
          <li className='hover:text-[#DB2777] cursor-pointer'>Home</li>
          <li className='hover:text-[#DB2777] cursor-pointer'>Technologies</li>
          <li className='hover:text-[#DB2777] cursor-pointer'>Projects</li>
          <li className='hover:text-[#DB2777] cursor-pointer'>About</li>
          <li className='hover:text-[#DB2777] cursor-pointer'>Contact</li>
        </ul>
        <div className='flex gap-4 text-[#475569] text-[14px]  font-normal'>
          <button className=' cursor-pointer hover:text-[#DB2777] '>Sign In</button>
          <button className='cursor-pointer bg-linear-to-r from-[#EC4899] to-[#9333EA] text-white px-4 py-1.5 rounded-[18px] font-normal  '>Sign Up</button>
        </div>
      </nav>

     {/* Resposive */}

      <div className='flex justify-between tems-center py-3 px-3 md:hidden '>
        <span className='flex items-center md:hidden '><RxHamburgerMenu /></span>
        <span className='md:hidden '> <img className='w-fit h-8' src={Logo} alt="" /></span>
        <span className='md:hidden flex gap-4 text-[#475569] text-[14px]  font-normal'>
          <button className=' cursor-pointer hover:text-[#DB2777] '>Sign In</button>
          <button className='cursor-pointer bg-linear-to-r from-[#EC4899] to-[#9333EA] text-white px-4 py-1.5 rounded-[18px] font-normal  '>Sign Up</button>
        </span>
      </div>
    </div>


  );
};

export default Navber;