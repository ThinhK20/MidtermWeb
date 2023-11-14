/* eslint-disable @typescript-eslint/no-explicit-any */
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserUpload } from "../../../../models/user";
import { updateUserApi } from "../../../../apis/user-apis";
import { toast } from "react-toastify";

interface SideBarProps {
   avatar: string;
   user_name: string;
   gmail: string;
   children: React.ReactNode;
}

function SideBar({avatar, user_name, gmail, children, editAvatar}:SideBarProps) {
  return (
    

    <div>
      {/* <div className="col-span-1 gap-4 flex flex-col items-center">
        <img
          className="object-cover w-64 h-64 rounded-full"
          src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ATTCB0rsW4oAX88HGJb&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfAA2VM2AUz-j3jzWx7kwkVmlIfT3QyU5RjBR6CQbzqgIg&oe=6553C0F1"
        />
        <div className="flex flex-col gap-1 pl-16 w-full">
          <h1 className="text-3xl font-bold text-blue-600">Jena Ventin</h1>
          <h3 className="text-xl font-bold ">Gold Member</h3>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-1 pl-16 w-full my-4">
            <div className="flex items-center gap-4 items-end">
              <h1 className="font-bold text-2xl">Email: </h1>
              <span className="font-light text-2xl">example@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 pl-16 w-full my-4">
            <div className="flex items-center gap-4 items-end">
              <h1 className="font-bold text-2xl">Phone: </h1>
              <span className="font-light text-2xl">07173551512</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 pl-16 w-full my-4">
            <div className="flex items-center gap-4 items-end">
              <h1 className="font-bold text-2xl">Birthday: </h1>
              <span className="font-light text-2xl">07/08/2012</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="h-screen fixed">
        <nav className="h-full w-96 flex-col bg-white border-r shadow-sm" >
            
            <div className="flex flex-col justify-center items-center mt-6 -mx-2" >
              <div className="relative group">
                <img src={avatar} alt="avatar" className="w-52 h-48 mx-2 rounded-xl ring-4 ring-slate-400 "/>
                <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-transparent border-none scale-0 group-hover:scale-100 transition-all duration-700 hover:text-gray-400" onClick={editAvatar}>
                  <FontAwesomeIcon icon={faPenToSquare}/>
                  <span className="mx-2">Edit</span>
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
