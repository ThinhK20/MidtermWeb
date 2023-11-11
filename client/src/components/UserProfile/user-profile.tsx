import Header from "../LandingPage/Header/header";

export default function UserProfile() {
   return (
      <div>
         <Header />
         <div className="grid grid-cols-6 pt-36">
            <div className="col-span-1 gap-4 flex flex-col items-center">
               <img
                  className="object-cover w-64 h-64 rounded-full"
                  src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ATTCB0rsW4oAX88HGJb&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfAA2VM2AUz-j3jzWx7kwkVmlIfT3QyU5RjBR6CQbzqgIg&oe=6553C0F1"
               />
               <div className="flex flex-col gap-1 pl-16 w-full">
                  <h1 className="text-3xl font-normal">Jena Ventin</h1>
                  <h3 className="text-xl font-light">Gold Member</h3>
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
                  src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/198093531_878963729640337_9180045278255563666_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=__Prnco9NG0AX9MOFGl&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfCOLToLEDMXFd6qCZ3MBsfK7zLebRnlkrrj57LdASP99Q&oe=6575CF75"
                  className="object-cover h-96 rounded-3xl w-[100%]"
               />

               <div className="grid grid-cols-6">
                  <div className="col-span-4">
                     <div className="bg-slate-300 mr-8 rounded-3xl p-8">
                        <h1 className="text-xl font-bold mb-8">
                           Recently visited country
                        </h1>
                        <div className="flex items-center gap-4">
                           <div>
                              <img
                                 className="rounded-full w-32 h-32 object-cover"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-span-2">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
