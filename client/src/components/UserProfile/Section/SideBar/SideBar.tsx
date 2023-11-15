/* eslint-disable @typescript-eslint/no-explicit-any */
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserUpload } from "../../../../models/user";
import {
   fetchUserApiByStorage,
   updateUserApi,
} from "../../../../apis/user-apis";
import { toast } from "react-toastify";
import { forceUpdate } from "../../../../utils";

interface SideBarProps {
   avatar: string;
   user_name: string;
   gmail: string;
   children: React.ReactNode;
}

function SideBar({ avatar, user_name, gmail, children }: SideBarProps) {
   return (
      <div>
         <div className="h-screen fixed">
            <nav className="h-full w-96 flex-col bg-white border-r shadow-sm">
               <div className="flex flex-col justify-center items-center mt-6 -mx-2">
                  <div className="relative group">
                     <img
                        src={avatar}
                        alt="avatar"
                        className="w-52 h-48 mx-2 rounded-xl ring-4 ring-slate-400 "
                     />
                     <button className="absolute bottom-1 top-0 left-1/2 text-3xl -translate-x-1/2 bg-transparent border-none scale-0 group-hover:scale-100 transition-all duration-700 hover:text-gray-400">
                        <label
                           htmlFor="uploadAvatar"
                           className="cursor-pointer mx-2"
                        >
                           <FontAwesomeIcon icon={faPenToSquare} />
                           Edit
                        </label>
                        <input
                           type="file"
                           className="hidden"
                           id="uploadAvatar"
                           name="uploadAvatar"
                           onChange={(e) => {
                              if (
                                 e.target.files &&
                                 e.target.files.length > 0 &&
                                 e.target.files[0]
                              ) {
                                 const file = e.target?.files[0];
                                 if (!file) return;
                                 const newUser = {
                                    avatarFile: file,
                                 } as UserUpload;
                                 updateUserApi(newUser).then(() => {
                                    toast.success(
                                       "Upload avatar successfully !"
                                    );
                                    fetchUserApiByStorage();
                                    forceUpdate();
                                 });
                              }
                           }}
                        />
                     </button>
                  </div>
                  <h4 className="mx-2 mt-2 medium-18">{user_name}</h4>
                  <p className="mx-2 mt-1 medium-14 text-gray-600">{gmail}</p>
               </div>

               <ul className="px-3">{children}</ul>
            </nav>
         </div>
      </div>
   );
}

export default SideBar;
