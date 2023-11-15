import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CATEGORIES, VIDEO } from '../../../shared/constants';
import { faAngleLeft, faAngleRight, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Hero() {
    const [slide, setSlide] = useState(0);

    const prevSlider = () => {
        const isFirstSlide = slide === 0;
        const newSlide = isFirstSlide ? VIDEO.length - 1: slide - 1;
        setSlide(newSlide);  
    }

    const nextSlider = () => {
        const isFirstSlide = slide === VIDEO.length - 1;
        const newSlide = isFirstSlide ? 0: slide + 1;
        setSlide(newSlide);  
    }



    return (
        <div className='w-full h-screen relative'>
            <video  className='w-full h-full object-cover transition ease-linear duration-700'
                    src={VIDEO[slide]} autoPlay loop muted/>


            <div className='w-full h-full absolute left-0 top-0 bg-gray-900/30'></div>

            {/* Content */}
            <div className='absolute padding-container top-28 sm:top-1/3 left-0 w-full h-auto flex flex-col p-4 text-white group'>

                {/* Arrow left slider */}
                <div className='hidden group-hover:block absolute top-[20%] -translate-x-2 translate-y-[-50%] left-5 rounded-full  bg-white/10 cursor-pointer px-2 hover:bg-white/20'
                     onClick={prevSlider}>
                    <FontAwesomeIcon icon={faAngleLeft} className='regular-16'/>
                </div>

                {/* Arrow right slider */}
                <div className='hidden group-hover:block absolute top-[20%] -translate-x-2 translate-y-[-50%] right-5 rounded-full  bg-white/10 cursor-pointer px-2 hover:bg-white/20'
                     onClick={nextSlider}>
                    <FontAwesomeIcon icon={faAngleRight} className='regular-16'/>
                </div>

                {/* main */}
                <h1 className='bold-44 sm:bold-64 capitalize'> Explore The World <br/> With US </h1>
                <p className='regular-16 mt-4 lg:w-1/2'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
                {/* <a href="" className='mt-2 text-black'>Read More</a> */}
                <div className='mt-4 cursor-pointer'>
                    <button className='rounded-full bg-white flex items-center justify-center gap-2 p-4'>
                        <FontAwesomeIcon icon={faLocationArrow} className='text-black'/>
                        <p className='bold-16 text-black'> Travel Plan </p>
                    </button>
                </div>
                <h4 className='text-white my-4 bold-20'>Explore the key</h4>
                <ul className='flex flex-wrap gap-4'>
                    {CATEGORIES.map((category) => {
                        return(
                            <div className='rounded-md flex items-center gap-2 px-4 py-2 bg-white cursor-pointer hover:-translate-y-[2px] transition-all duration-500'>
                                <FontAwesomeIcon icon={category.icon} className='text-black'/>
                                <span className='text-black regular-20'>{category.title}</span>
                            </div>
                        );
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Hero