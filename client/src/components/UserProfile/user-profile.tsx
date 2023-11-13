import { PAKAGES } from "../../shared/constants";
import BackgroundImage from "../../assets/maldives.jpg";
import Header from "../../shared/Header/header";
import { PakageItem } from "../Home/Section/Package";

export default function UserProfile() {
   return (
      <div className="relative bg-slate-100">
         {/* <div>
            <img
               src={BackgroundImage}
               className="absolute object-cover w-full h-full top-0 left-0 right-0 bottom-0 -z-10"
            />
         </div> */}
         <div className="bg-slate-600 w-full h-full">
            <Header />
         </div>
         <div className="grid grid-cols-6 pt-36">
            <div className="col-span-1 gap-4 flex flex-col items-center">
               <img
                  className="object-cover w-64 h-64 rounded-full"
                  src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ATTCB0rsW4oAX88HGJb&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfAA2VM2AUz-j3jzWx7kwkVmlIfT3QyU5RjBR6CQbzqgIg&oe=6553C0F1"
               />
               <div className="flex flex-col gap-1 pl-16 w-full">
                  <h1 className="text-3xl font-bold text-blue-600">
                     Jena Ventin
                  </h1>
                  <h3 className="text-xl font-bold ">Gold Member</h3>
               </div>
               <div className="flex flex-col gap-8 w-full">
                  <div className="flex flex-col gap-1 pl-16 w-full my-4">
                     <div className="flex items-center gap-4 items-end">
                        <h1 className="font-bold text-2xl">Email: </h1>
                        <span className="font-light text-2xl">
                           example@gmail.com
                        </span>
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
            </div>
            <div className="col-span-5 px-16 flex flex-col gap-16">
               <img
                  src={BackgroundImage}
                  className="object-cover h-96 rounded-3xl w-[100%]"
               />

               <div className="grid grid-cols-6">
                  <div className="col-span-4">
                     <div className="bg-slate-200 mr-8 rounded-3xl p-8">
                        <h1 className="text-2xl font-bold mb-8">
                           Recently visited countries
                        </h1>
                        <div className="flex items-center gap-4">
                           <div>
                              <img
                                 className="rounded-full w-24 h-24 object-cover"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png"
                              />
                           </div>
                           <div>
                              <img
                                 className="rounded-full w-24 h-24 object-cover"
                                 src="https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg"
                              />
                           </div>
                        </div>
                     </div>

                     <h1 className="text-3xl pt-16">Recently tour booked</h1>

                     <div className=" py-8 grid grid-cols-2 gap-8">
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
                  <div className="col-span-2">
                     <h1>Introduction</h1>
                     <p className="font-normal pt-4 text-2xl">
                        Hey there! I'm someone who absolutely loves to travel.
                        Exploring new places, meeting different people, and
                        experiencing diverse cultures bring me so much joy. My
                        dream? To visit every country on this beautiful planet
                        during my lifetime. Let's go on this adventure together!
                        🌍✈️.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
