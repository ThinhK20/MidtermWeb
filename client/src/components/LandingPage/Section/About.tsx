
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ABOUT } from "../../../shared/constants";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";



interface AboutItem {
    title: string;
    icon?: string ;
}

const AboutItem = ({title, icon}: AboutItem) => {
    return(
        <div className="w-1/2 flex gap-2 mb-4 items-center">
            {/* <img src={icon} alt="icon" height={20} width={20} className="object-fill "></img> */}
            <FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>  
            <p className="regular-14">{title}</p>
        </div>
    );
}

function About() {
  return (

    <div className="max-w-full mx-auto padding-container py-24 lg:py-20">
        {/* First */}
        <div className="flex flex-col gap-8 lg:flex-row pb-24">
            {/* LEFT */}
            <div className="flex flex-1 flex-col items-start justify-center">
                <h1 className="bold-52 capitalize pb-4">
                    John Us in Exploring The Entire World
                </h1>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
                    nobis soluta tempora, adipisci cum accusamus hic. Blanditiis, id iure
                    natus repellendus, molestias iste veniam illum, reprehenderit
                    recusandae excepturi non?
                </p>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
                    nobis soluta tempora, adipisci cum accusamus hic. Blanditiis, id iure
                    natus repellendus, molestias iste veniam illum, reprehenderit
                    recusandae excepturi non?
                </p>
                <div className="flex flex-wrap mt-8">
                    {ABOUT.map((about) => {
                        return(
                            <AboutItem 
                                title={about.Title}
                                icon={about.icon}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Right */}
            <div className="flex flex-1 gap-4 lg:gap-8">
                <div className="w-1/2">
                    <img src="/src/assets/maldives3.jpg"
                         alt="about"
                         height={444}
                         width={333}
                         className="w-auto h-full rounded-lg border border-gray-100 mt-10 shadow-lg object-cover"/>

                </div>
                <div className="w-1/2">
                    <img src="/src/assets/maldives2.jpg"
                         alt="about"
                         height={444}
                         width={333}
                         className="w-auto h-full rounded-lg border border-gray-100 mt-5 shadow-lg object-cover"/>

                </div>
                
            </div>
        </div>

        {/* Second */}
        <div className="flex flex-col gap-8 lg:flex-row pb-24">
            {/* LEFT */}
            <div className="flex flex-1 gap-4 lg:gap-8">
                <div className="w-1/2">
                    <img src="/src/assets/keywest.jpg"
                         alt="about"
                         height={444}
                         width={333}
                         className="w-auto h-full rounded-lg border border-gray-100 mt-10 shadow-lg object-cover"/>

                </div>
                <div className="w-1/2">
                    <img src="/src/assets/borabora.jpg"
                         alt="about"
                         height={444}
                         width={333}
                         className="w-auto h-full rounded-lg border border-gray-100 mt-5 shadow-lg object-cover"/>

                </div>
                
            </div>

            {/* Right */}
            <div className="flex flex-1 flex-col items-start justify-center">
                <h1 className="bold-52 capitalize pb-4">
                    John Us in Exploring The Entire World
                </h1>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
                    nobis soluta tempora, adipisci cum accusamus hic. Blanditiis, id iure
                    natus repellendus, molestias iste veniam illum, reprehenderit
                    recusandae excepturi non?
                </p>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
                    nobis soluta tempora, adipisci cum accusamus hic. Blanditiis, id iure
                    natus repellendus, molestias iste veniam illum, reprehenderit
                    recusandae excepturi non?
                </p>
                <div className="flex flex-wrap mt-8">
                    {ABOUT.map((about) => {
                        return(
                            <AboutItem 
                                title={about.Title}
                                icon={about.icon}
                            />
                        );
                    })}
                </div>
            </div>

            

        </div>
    </div>
  );
}

export default About;
