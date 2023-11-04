import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Photo {
   id: number;
   width: number;
   height: number;
   urls: { large: string; regular: string; raw: string; small: string };
   color: string | null;
   user: {
      username: string;
      name: string;
   };
   alt_description: string;
   description: string;
}

export default function Gallery() {
   const [images, setImages] = useState<Photo[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const abortController = new AbortController();
      setLoading(true);

      const queryByPage = `https://api.unsplash.com/photos/?client_id=q1XtHKjIhGTyq__IaXIKF1iNZPG46CJ-KeDE9tJ3Mdk&page=0`;

      try {
         fetch(queryByPage, { signal: abortController.signal })
            .then((res) => res.json())
            .then((value: Photo[]) => {
               setImages(value);
               setLoading(false);
            });
      } catch (e) {
         if (!abortController.signal.aborted) {
            console.log(e);
         }
      }

      return () => {
         abortController.abort();
      };
   }, []);

   // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    setSearch(e.target.value);
   //    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   // };

   return (
      <div className="py-10 px-4">
         {!loading && (
            <div className="grid grid-cols-4 gap-4">
               {images.map((image, index) => {
                  return (
                     <div
                        key={index}
                        className="w-full  my-2 overflow-hidden shadow-lg  bg-theme rounded"
                     >
                        <Link to="#">
                           <img
                              className="object-cover h-64 rounded w-full hover:brightness-75"
                              src={image.urls.regular}
                              alt="Sunset in the mountains"
                           />
                        </Link>
                        <div className="px-6 py-4">
                           <p className="text-sm">Kerhonkson, New York</p>
                           <div className="font-bold text-lg text-white">
                              Wander Catskills Creek
                           </div>
                           <p className="text-sm">
                              Next Avaible:
                              <span className="text-white text-xs ml-1">
                                 Nov 10 to Nov 13
                              </span>
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>
         )}
      </div>
   );
}
