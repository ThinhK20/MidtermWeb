import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import bgVideo from '/src/assets/video-background.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video  className='w-full h-full object-cover' src={bgVideo} autoPlay loop muted/>
        <div className='w-full h-full absolute left-0 top-0 bg-gray-900/30'></div>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center p-4 text-white'>
            <h1>Wonderful.<br/><span>Island</span>  </h1>
            <a href="">Read More</a>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-full text-black bg-gray-100/90'>
                <div>
                    <input type='text' placeholder='Search Destination'
                           className='px-1 bg-transparent w-auto sm:w-[600px] font-[Poppins] focus:outline-none'/>
                </div>
                <div>
                    <button className='rounded-full w-10'>
                        <FontAwesomeIcon icon={faSearch} className='text-white'/>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero