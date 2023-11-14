
interface Props {
    avatar?: string,
    variant?: string
}

function Nav3Avatar({avatar, variant}: Props) {
  return (
    <div className={variant}>
        {/* // <div className="hidden md:flex justify-center items-center gap-2">
        //   <Link
        //     className="px-1 font-bold hover:text-gray-400/70 cursor-pointer"
        //     to="/user-profile"
        //   >
        //     Profile
        //   </Link>
        //   <button className="button-login ">
        //     <FontAwesomeIcon icon={faUser} />
        //     <Link to={"/"} className="px-1 font-bold ">
        //       Logout
        //     </Link>
        //   </button>
        // </div> */}
        <div className="flex items-center mt-4 lg:mt-0">
            <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img src={avatar} className="object-cover w-full h-full" alt="avatar"/>
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
            </button>
        </div>
    </div>
  );
}

export default Nav3Avatar