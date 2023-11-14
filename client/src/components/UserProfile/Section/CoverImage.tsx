import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserUpload } from "../../../models/user";
import { updateUserApi } from "../../../apis/user-apis";

interface Props {
  coverImage: string;
}

function CoverImage({ coverImage }: Props) {
  return (
    <div className="relative group">
      <img
        src={localStorage.getItem("coverImage") || coverImage}
        className="object-cover h-96 rounded-3xl w-[100%]"
        alt="cover image"
      />
      <button className="invisible absolute top-1 right-1 -translate-x-1 bg-transparent border-none transition-all hover:scale-125 ease-out hover:text-gray-600 group-hover:visible">
        <FontAwesomeIcon icon={faPenToSquare} />
        <label htmlFor="uploadCoverImage" className="mx-2">
          Edit
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
              updateUserApi(newUser).then((value) => console.log(value));
            }
          }}
        />
      </button>
    </div>
  );
}

export default CoverImage;
