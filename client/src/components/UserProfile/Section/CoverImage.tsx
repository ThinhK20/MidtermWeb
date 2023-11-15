import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserUpload } from "../../../models/user";
import { fetchUserApiByStorage, updateUserApi } from "../../../apis/user-apis";
import { toast } from "react-toastify";
import { forceUpdate } from "../../../utils";

interface Props {
   coverImage: string;
}

function CoverImage({ coverImage }: Props) {
   return (
      <div className="relative group">
         <img
            src={coverImage}
            className="object-cover h-96 rounded-3xl w-[100%]"
            alt="cover image"
         />
         <button className="invisible absolute text-xl top-1 right-1 -translate-x-1 bg-transparent border-none transition-all hover:scale-125 ease-out hover:text-gray-600 group-hover:visible">
            <label
               htmlFor="uploadCoverImage"
               className="mx-2 flex gap-2 cursor-pointer items-center"
            >
               <FontAwesomeIcon icon={faPenToSquare} />
               <span className="mt-0.5">Edit</span>
            </label>
            <input
               type="file"
               className="hidden"
               id="uploadCoverImage"
               name="uploadCoverImage"
               onChange={(e) => {
                  if (
                     e.target.files &&
                     e.target.files.length > 0 &&
                     e.target.files[0]
                  ) {
                     const file = e.target?.files[0];
                     if (!file) return;
                     const newUser = {
                        coverImage: file,
                     } as UserUpload;
                     updateUserApi(newUser).then(() => {
                        toast.success("Upload Cover Image successfully !");
                        fetchUserApiByStorage();
                        forceUpdate();
                     });
                  }
               }}
            />
         </button>
      </div>
   );
}

export default CoverImage;
