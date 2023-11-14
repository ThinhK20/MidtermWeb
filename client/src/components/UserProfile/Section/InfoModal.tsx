import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
   faCalendarDay,
   faEarthAsia,
   faFeather,
   faIdCard,
   faLocationDot,
   faMobileAndroid,
   faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { UserUpload } from "../../../models/user";
import { updateUserApi } from "../../../apis/user-apis";
function InfoModal() {
   const [userBasicInfo, setUserBasicInfo] = useState<UserUpload>({
      fullName: "",
      email: "",
      facebook: "",
      location: "",
      phone: "",
      age: 0,
      gender: "",
      about: "",
   });
   return (
      <div className="relative w-[100%] h-auto px-40 py-20 shadow-md bg-white hover:shadow-xl rounded-3xl">
         <h1 className="medium-18 pb-10">Basic Info</h1>
         <form>
            <div className="relative z-0 w-full mb-12 group">
               <input
                  type="FullName"
                  name="floating_FullName"
                  id="floating_FullName"
                  className="block py-2.5 px-0 my-1 w-full regular-16 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) => {
                     setUserBasicInfo({
                        ...userBasicInfo,
                        fullName: e.target.value,
                     });
                  }}
               />
               <label
                  about="floating_FullName"
                  className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
               >
                  <FontAwesomeIcon icon={faIdCard} className="pr-3" />
                  Full Name
               </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
               <div className="relative z-0 w-full group">
                  <input
                     type="Facebook"
                     name="floating_phone"
                     id="floating_Facebook"
                     className="block py-2.5 px-0 my-1 w-full regular-16 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     required
                     onChange={(e) =>
                        setUserBasicInfo({
                           ...userBasicInfo,
                           facebook: e.target.value,
                        })
                     }
                  />

                  <label
                     about="floating_Facebook"
                     className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                  >
                     <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className="pr-3"
                     />
                     Facebook
                  </label>
               </div>
            </div>

            <div className="grid md:grid-cols-10 gap-4 md:gap-6 mb-12">
               <div className="relative z-0 w-full md:col-span-8  group">
                  <input
                     type="Location"
                     name="floating_Location"
                     id="floating_Location"
                     className="block py-2.5 px-0 my-1 w-full regular-16 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     required
                     onChange={(e) =>
                        setUserBasicInfo({
                           ...userBasicInfo,
                           location: e.target.value,
                        })
                     }
                  />
                  <label
                     about="floating_Location"
                     className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                  >
                     <FontAwesomeIcon icon={faLocationDot} className="pr-3" />
                     Location
                  </label>
               </div>
               <div className="relative z-0 w-full md:col-span-2  group">
                  <select
                     id="countries"
                     className="block py-2.5 px-0 my-1 w-full regular-16 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                     <option>United States</option>
                     <option>Canada</option>
                     <option>France</option>
                     <option>Germany</option>
                     <option>Viet Nam</option>
                  </select>

                  <label
                     about="floating_Location"
                     className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                  >
                     <FontAwesomeIcon icon={faEarthAsia} className="pr-3" />
                     Location
                  </label>
               </div>
            </div>

            <div className="grid md:grid-cols-8 gap-4 md:gap-6 mb-6">
               <div className="relative z-0 w-full group md:col-span-3">
                  <input
                     type="tel"
                     name="floating_phone"
                     id="floating_phone"
                     className="block py-2.5 px-0 w-full regular-16 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     required
                     onChange={(e) =>
                        setUserBasicInfo({
                           ...userBasicInfo,
                           phone: e.target.value,
                        })
                     }
                  />

                  <label
                     about="floating_phone"
                     className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                  >
                     <FontAwesomeIcon icon={faMobileAndroid} className="pr-3" />
                     Phone number (123-456-7890)
                  </label>
               </div>

               <div className="relative z-0 w-full group md:col-span-2 md:mx-20">
                  <input
                     type="number"
                     name="floating_age"
                     id="floating_age"
                     onChange={(e) =>
                        setUserBasicInfo({
                           ...userBasicInfo,
                           age: Number(e.target.value),
                        })
                     }
                     className="block py-2.5 px-0 w-full regular-16 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     required
                  />

                  <label
                     about="floating_age"
                     className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                  >
                     <FontAwesomeIcon icon={faCalendarDay} className="pr-3" />
                     Age
                  </label>
               </div>

               <div className="relative z-0 w-full group md:col-span-3 md:mx-52">
                  <fieldset className="flex gap-10">
                     <legend className="sr-only text-black">Countries</legend>
                     <div className="flex items-center mb-4 gap-2">
                        <input
                           id="country-option-1"
                           type="radio"
                           name="countries"
                           value="male"
                           onChange={(e) => {
                              setUserBasicInfo({
                                 ...userBasicInfo,
                                 gender: e.target.value,
                              });
                           }}
                           className="w-10 h-20 bg-blue-700 rounded-full"
                           checked
                        />
                        <label
                           about="country-option-1"
                           className="block  medium-14 text-balck"
                        >
                           Male
                        </label>
                     </div>

                     <div className="flex items-center mb-4 gap-2">
                        <input
                           id="country-option-1"
                           type="radio"
                           name="countries"
                           onChange={(e) =>
                              setUserBasicInfo({
                                 ...userBasicInfo,
                                 gender: e.target.value,
                              })
                           }
                           value="female"
                           className="w-10 h-20  bg-gray-700  "
                           checked
                        />
                        <label
                           about="country-option-1"
                           className="block  medium-14 text-black"
                        >
                           Female
                        </label>
                     </div>
                  </fieldset>
                  <label
                     about="floating_phone"
                     className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                  >
                     <FontAwesomeIcon icon={faVenusMars} className="pr-3" />
                     Gender
                  </label>
               </div>
            </div>

            <div className="relative z-0 w-full mb-12 group">
               <textarea
                  name="floating_FullName"
                  id="floating_FullName"
                  className="block py-2.5 px-0 my-1 w-full h-60 regular-16 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                  placeholder=" "
                  onChange={(e) =>
                     setUserBasicInfo({
                        ...userBasicInfo,
                        about: e.target.value,
                     })
                  }
               ></textarea>
               <label
                  about="floating_FullName"
                  className="peer-focus:medium-20 absolute medium-18 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
               >
                  <FontAwesomeIcon icon={faFeather} className="pr-3" />
                  About me
               </label>
            </div>

            <div className="flex w-[100%] justify-end items-center px-10">
               <button
                  type="button"
                  onClick={() => {
                     updateUserApi(userBasicInfo).then((value) =>
                        console.log(value)
                     );
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-slate-50 regular-16 rounded-lg text-sm w-full sm:w-auto px-5 py-5 text-center"
               >
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
}

export default InfoModal;
