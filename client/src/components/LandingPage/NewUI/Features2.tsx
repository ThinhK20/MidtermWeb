import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PERSON } from "../../../shared/constants"
import { faMap } from "@fortawesome/free-solid-svg-icons";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

function SiteFeatures({backgroundImage, title, subtitle, peopleJoined}: CampProps) {
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-no-repeat lg:rounded-3xl rounded-xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-blue-500 p-4">
            <FontAwesomeIcon icon={faMap} className="bold-40 text-white"/>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PERSON.map((url) => {
              return (
                <img src={url} className="inline-block h-10 w-10 rounded-full" alt="person"></img>
              );
            })}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}


function Features2() {
  return (
    <div className='relative flex flex-col py-12 lg:py-20 padding-container'>
      <div className='hide-scrollbar flex h-[400px] w-full items-start justify-start gap-8 overflow-x-auto lg-h-[400px] xl:h-[550px]'>
        <SiteFeatures
          backgroundImage="bg-bg-img-1"
          title = "Putuk Truno Camp"
          subtitle = "Prigen, Pasurauan"
          peopleJoined = "50+ Joined"
        />
        <SiteFeatures
          backgroundImage="bg-bg-img-2"
          title = "Mountain View Camp"
          subtitle = "Somewhere in the wilderness"
          peopleJoined = "50+ Joined"
        />

      </div>

      <div className="flex justify-end items-center mt-10 px-6 lg:-mt-52 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-3xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p> 
          <img src="/src/assets/quote.svg" className="camp-quote text-white" width={186} height={219}/>
        </div>
      </div>

    </div>
  )
}

export default Features2