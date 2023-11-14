import Header from "../../shared/Header/header";
import SideBar from "./Section/SideBar/SideBar";
import SideBarItem from "./Section/SideBar/SideBarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faArrowRightFromBracket,
   faChartLine,
   faGear,
   faHandsHelping,
   faReceipt,
   faTerminal,
   faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import CoverImage from "./Section/CoverImage";
import Dashboard from "./Section/Dashboard";
import InfoModal from "./Section/InfoModal";
import AccountModal from "./Section/AccountModal";


export default function UserProfile() {
   const [isDashBoardActive, setDashBoardActive] = useState(true);
   const [isBasicInfoActive, setBasicInfoActive] = useState(false);
   const [isAcountActive, setAcountActive] = useState(false);
   const [isBillingActive, setBillingActive] = useState(false);
   const [isSettingActive, setSettingActive] = useState(false);
   const [isHelpActive, setHelpActive] = useState(false);
   const [isLogOutActive, setLogOutActive] = useState(false);

   return (
      <div className="relative">
         <div className="bg-slate-600 w-full h-full">
            <Header />
         </div>

         <div className="grid grid-cols-6 pt-32">
            <div className="col-span-1 flex flex-col">
               <SideBar
                  avatar={"/src/assets/hhman-ava.png"}
                  user_name={"Ainz Own Goal"}
                  gmail={"hhman@hcmus.edu.vn"}
               >
                  <SideBarItem
                     icon={
                        <FontAwesomeIcon
                           icon={faChartLine}
                           className="text-3xl"
                        />
                     }
                     text={"Dashboard"}
                     active={isDashBoardActive}
                     handleClick={() => {
                        setDashBoardActive(true);
                        setBasicInfoActive(false);
                        setAcountActive(false);
                        setBillingActive(false);
                        setSettingActive(false);
                        setHelpActive(false);
                        setLogOutActive(false);
                     }}
                  />
                  <SideBarItem
                     icon={
                        <FontAwesomeIcon
                           icon={faTerminal}
                           className="text-3xl"
                        />
                     }
                     text={"Basic Info"}
                     active={isBasicInfoActive}
                     handleClick={() => {
                        setDashBoardActive(false);
                        setBasicInfoActive(true);
                        setAcountActive(false);
                        setBillingActive(false);
                        setSettingActive(false);
                        setHelpActive(false);
                        setLogOutActive(false);
                     }}
                  />
                  <SideBarItem
                     icon={
                        <FontAwesomeIcon icon={faUser} className="text-3xl" />
                     }
                     text={"Account"}
                     active={isAcountActive}
                     handleClick={() => {
                        setDashBoardActive(false);
                        setBasicInfoActive(false);
                        setAcountActive(true);
                        setBillingActive(false);
                        setSettingActive(false);
                        setHelpActive(false);
                        setLogOutActive(false);
                     }}
                  />
                  <SideBarItem
                     icon={
                        <FontAwesomeIcon
                           icon={faReceipt}
                           className="text-3xl"
                        />
                     }
                     text={"Billing"}
                     active={isBillingActive}
                     handleClick={() => {
                        setDashBoardActive(false);
                        setBasicInfoActive(false);
                        setAcountActive(false);
                        setBillingActive(true);
                        setSettingActive(false);
                        setHelpActive(false);
                        setLogOutActive(false);
                     }}
                  />
                  <SideBarItem
                     icon={
                        <FontAwesomeIcon icon={faGear} className="text-3xl" />
                     }
                     text={"Settings"}
                     active={isSettingActive}
                     handleClick={() => {
                        setDashBoardActive(false);
                        setBasicInfoActive(false);
                        setAcountActive(false);
                        setBillingActive(false);
                        setSettingActive(true);
                        setHelpActive(false);
                        setLogOutActive(false);
                     }}
                  />
                  <SideBarItem
                     icon={
                        <FontAwesomeIcon
                           icon={faHandsHelping}
                           className="text-3xl"
                        />
                     }
                     text={"Helps"}
                     active={isHelpActive}
                     handleClick={() => {
                        setDashBoardActive(false);
                        setBasicInfoActive(false);
                        setAcountActive(false);
                        setBillingActive(false);
                        setSettingActive(false);
                        setHelpActive(true);
                        setLogOutActive(false);
                     }}
                  />
                  <div className="mt-40 flex-row justify-center items-center">
                     <hr></hr>
                     <SideBarItem
                        icon={
                           <FontAwesomeIcon
                              icon={faArrowRightFromBracket}
                              className="text-3xl"
                           />
                        }
                        text={"Log out"}
                        active={isLogOutActive}
                        handleClick={() => {
                           setDashBoardActive(false);
                           setBasicInfoActive(false);
                           setAcountActive(false);
                           setBillingActive(false);
                           setSettingActive(false);
                           setHelpActive(false);
                           setLogOutActive(true);
                        }}
                     />
                  </div>
               </SideBar>
            </div>

            <div className="col-span-5 px-16 flex flex-col gap-16">
               <CoverImage coverImage={"/src/assets/maldives3.jpg"} />

               {isDashBoardActive && <Dashboard />}
               {isBasicInfoActive && <InfoModal />}
               {isAcountActive && <AccountModal emailUser={"hhman@student.hcmus"} />}

               <div className="w-full mx-auto text-3xl ">
                  <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
                     {/* Social links */}
                     <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                        <li>
                           <a
                              href="#"
                              className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                              aria-label="Twitter"
                           >
                              <svg
                                 className="w-8 h-8 fill-current"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                              </svg>
                           </a>
                        </li>
                        <li className="ml-4">
                           <a
                              href="#"
                              className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                              aria-label="Github"
                           >
                              <svg
                                 className="w-8 h-8 fill-current"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                              </svg>
                           </a>
                        </li>
                        <li className="ml-4">
                           <a
                              href="#"
                              className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                              aria-label="Facebook"
                           >
                              <svg
                                 className="w-8 h-8 fill-current"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                              </svg>
                           </a>
                        </li>
                     </ul>

                     {/* Copyrights note */}
                     <div className="text-2xl text-gray-600 mr-4">
                        Made by{" "}
                        <a
                           className="text-blue-600 hover:underline"
                           href="https://cruip.com/"
                        >
                           Cruip
                        </a>
                        . All rights reserved.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
