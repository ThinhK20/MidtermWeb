import { PAKAGES } from "../../../shared/constants";
import { PakageItem } from "../../Home/Section/Package";


function Dashboard() {
  return (
    <div>
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

                <div className="grid items-center gap-4 grid-cols-1 sm:grid-flow-cols-2 lg:grid-cols-3 mr-8">
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
  )
}

export default Dashboard