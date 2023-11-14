
interface Props {
    icon: React.ReactNode;
    text: string;
    active: boolean;
    handleClick: React.MouseEventHandler;
}

function SideBarItem({icon, text, active, handleClick}:Props) {
  return (
    <li className={`relative flex items-center py-2 px-3 my-6 font-medium rounded-md cursor-pointer transition-colors group ${
        active
            ? "btn-bg-gradient text-white" :
            "hover:bg-indigo-50 text-gray-600"
    }`}
        onClick={handleClick}>
        {icon}
        <span className="w-52 ml-4 medium-14 ">{text}</span>
    </li>
  )
}

export default SideBarItem