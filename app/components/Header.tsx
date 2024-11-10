// components/Header.js
import Link from 'next/link';


const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-30 w-full pb-2 bg-[#2b2d42]">
      <nav className="flex items-center justify-end mx-2 p-1">
       
        <div>
          <ul className="flex items-center justify-center gap-5  list-none navmenu">
            <li>
              <Link href="#home" className="text-[#ff9f43] font-semibold sm:text-xl lg:text-2xl transition-all duration-300 ease-in-out p-3 rounded-full hover:bg-[#37bcf7] hover:text-[#f5f5f5]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#intro" className="text-[#ff9f43] font-semibold sm:text-xl lg:text-2xl transition-all duration-300 ease-in-out p-3 rounded-full hover:bg-[#37bcf7] hover:text-[#f5f5f5]">
                Intro
              </Link>
            </li>
            <li>
              <Link href="#project" className="text-[#ff9f43] font-semibold sm:text-xl lg:text-2xl transition-all duration-300 ease-in-out p-3 rounded-full hover:bg-[#37bcf7] hover:text-[#f5f5f5]">
                Project
              </Link>
            </li>
            <li>
              <Link href="#Contact-Us" className="text-[#ff9f43] font-semibold sm:text-xl lg:text-2xl transition-all duration-300 ease-in-out p-3 rounded-full hover:bg-[#37bcf7] hover:text-[#f5f5f5]">
                Contact-Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;