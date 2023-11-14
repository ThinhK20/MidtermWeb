import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    coverImage: string;
    editCoverImage: React.MouseEventHandler;
}

function CoverImage({coverImage, editCoverImage}:Props) {
  return (
    <div className="relative group">
        <img
            src={coverImage}
            className="object-cover h-96 rounded-3xl w-[100%]"
            alt="cover image"
        />
        <button className="invisible absolute top-1 right-1 -translate-x-1 bg-transparent border-none transition-all hover:scale-125 ease-out hover:text-gray-600 group-hover:visible" onClick={editCoverImage}>
            <FontAwesomeIcon icon={faPenToSquare}/>
            <span className="mx-2">Edit</span>
        </button>
    </div>
  )
}

export default CoverImage