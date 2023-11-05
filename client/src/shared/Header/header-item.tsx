import { Link } from "react-router-dom";

interface Props {
   title?: string;
   link?: string;
}
export default function HeaderItem({ title, link }: Props) {
   return (
      <li>
         <Link
            to={link ? link : "#"}
            className="block py-2 px-4 font-normal hover:brightness-75 z-10"
            aria-current="page"
         >
            {title}
         </Link>
      </li>
   );
}
