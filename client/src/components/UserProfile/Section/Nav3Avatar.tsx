import { faArrowRightFromBracket, faFire, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";
import { Link } from "react-router-dom";

interface Props {
    avatar?: string,
    variant?: string,
    userName?: string,
}

function Nav3Avatar({avatar, userName,variant}: Props) {

  const [isOpenAvatarButton, setOpenAvatarButton]  = useState(false);

  return (
    <div className={variant}>
        <div className="flex items-center justify-center">
            <button className="hidden md:flex mx-2 text-white transition-colors duration-300 transform border-none  hover:bg-gray-700/75  focus:outline-none group" aria-label="show notifications">
                <svg className="w-8 h-8 hover:scale-x-110 hover:rotate-12 transition-all duration-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <div className="hidden md:flex justify-center items-center gap-2 mx-2 p-2 hover:bg-gray-700/75 rounded-lg hover:scale-105 duration-500 transition-all ease-out">
                <FontAwesomeIcon icon={faFire} />
                <span className="regular-16"> 0 </span>
            </div>

            <button type="button" className="flex items-center justify-center outline-none border-none" aria-label="toggle profile dropdown" onClick={() => setOpenAvatarButton(!isOpenAvatarButton)}>
                <h3 className="mx-2 regular-16 text-white md:hidden">{userName}</h3>
                <div className="w-14 h-14 overflow-hidden rounded-full">
                    <img src={avatar} className="object-cover" alt="avatar"/>
                </div>
            </button>
            <div
                x-transition:enter="transition ease-out duration-100"
                x-transition:enter-start="opacity-0 scale-90"
                x-transition:enter-end="opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-100"
                x-transition:leave-start="opacity-100 scale-100"
                x-transition:leave-end="opacity-0 scale-90"
                className={`${isOpenAvatarButton ? 'visible':'invisible'} absolute right-2 top-[55px] z-20 w-56  -translate-x-4 bg-white rounded-lg shadow-xl p-4 flex flex-col items-center justify-center`}
                >
                    <div className="w-full">
                        <p className="regular-18 text-black text-center">{userName}</p>
                    </div>

                    <Link to={'/user-profile'} className="w-full">
                        <button className="w-full regular-14 text-black transition-colors duration-300 transform  hover:bg-gray-100 border-none flex justify-start items-center gap-4">
                            <FontAwesomeIcon icon={faUser}  />
                            <span className="regular-14">User profile</span>
                        </button>
                    </Link>
                    <Link to={'/'} className="w-full">
                        <button className="w-full regular-14 text-black transition-colors duration-300 transform  hover:bg-gray-100 border-none flex justify-start items-center gap-4">
                            <FontAwesomeIcon icon={faArrowRightFromBracket}  />
                            <span className="regular-14">Log out</span>
                        </button>
                    </Link>
            </div>
        </div>
    </div>
  );
}

export default Nav3Avatar