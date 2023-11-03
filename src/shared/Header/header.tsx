import { Link } from "react-router-dom";
import HeaderItem from "./header-item";

export default function Header() {
   return (
      <header className="bg-transparent backdrop-blur-md  px-4 lg:px-6 py-2.5 fixed top-0 left-0 right-0 h-fit z-10 ">
         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-white">
            <a href="https://flowbite.com" className="flex items-center">
               <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
               />
               <span className="self-center text-xl font-semibold whitespace-nowrap ">
                  Flowbite
               </span>
            </a>

            <div
               className=" bg-[rgba(0,0,0,0.4)] text-white rounded-full justify-between items-center w-auto"
               id="mobile-menu-2"
            >
               <ul className="flex flex-row py-1 px-2 font-medium">
                  <HeaderItem title="Home" />
                  <HeaderItem title="Gallery" />
                  <HeaderItem title="How it works" />
                  <HeaderItem title="About us" />
                  <HeaderItem title="Contact us" />
               </ul>
            </div>
            <div className="flex items-center lg:order-2">
               <Link
                  to="/login"
                  className="hover:brightness-75 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
               >
                  Log in
               </Link>
            </div>
         </div>
      </header>
   );
}
