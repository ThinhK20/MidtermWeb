import Gallery from "./Gallery/gallery";

export default function Home() {
   return (
      <div>
         <div className="bg-transparent absolute top-[40%] w-[40%] left-[30%] flex flex-col gap-4">
            <h1 className="text-white text-5xl  translate-x-[25%]">
               Reverse: 1999
            </h1>
            <p className=" text-white text-xl font-extralight text-center">
               23:59. December 31, 1999
            </p>
         </div>
         <Gallery />
      </div>
   );
}
