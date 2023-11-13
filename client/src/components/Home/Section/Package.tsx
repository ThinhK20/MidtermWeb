import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PAKAGES } from "../../../shared/constants";
import { faClock } from "@fortawesome/free-solid-svg-icons";

interface PakageProps {
   title: string;
   url: string;
   price: string;
   des: string;
   duration: string;
}

export const PakageItem = ({
   title,
   url,
   price,
   des,
   duration,
}: PakageProps) => {
   return (
      <div className="group cursor-pointer ">
         <div className="relative h-80">
            <img
               src={url}
               alt="img"
               className="object-cover h-full w-full rounded-t-xl group-hover:scale-10 group-hover:rotate-2 transition-all duration-500"
            ></img>
         </div>
         <div className="p-4 bg-slate-100">
            <div className="capitalize medium-18 flex items-center justify-between">
               {title}
               <span>{price}</span>
            </div>
            <p className="text-gray-800 my-30 regular-14 border-b border-gray-200 pb-3 my-3">
               {des}
            </p>
            <div className="flex items-center justify-between">
               <p className="flex items-center justify-start text-gray-800 gap-2">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="medium-14">{duration}</span>
               </p>

               <a
                  href="/"
                  className="medium-14 px-4 py-2 rounded-md border bg-black hover:scale-105 transform transition duration-300 ease-out"
               >
                  <span className="text-white">Book now</span>
               </a>
            </div>
         </div>
      </div>
   );
};

function Package() {
   return (
      <div className="max-w-full mx-auto padding-container py-24 lg:py-20 ">
         <div className="font-light sm:text-lg">
            <h1 className="bold-40 font-extrabold text-center">Out Pakages</h1>
            <div className="text-center">
               <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
               <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
               <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
            <p className="mb-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
               nobis soluta tempora, adipisci cum accusamus hic. Blanditiis, id
               iure natus repellendus, molestias iste veniam illum,
               reprehenderit recusandae excepturi non?
            </p>
         </div>

         <div className="hide-scrollbar overflow-x-auto flex gap-8">
            {PAKAGES.map((card) => {
               return (
                  <PakageItem
                     title={card.title}
                     url={card.url}
                     price={card.price}
                     des={card.des}
                     duration={card.duration}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default Package;
