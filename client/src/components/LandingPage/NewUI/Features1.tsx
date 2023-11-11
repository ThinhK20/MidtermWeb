
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DESTINATION } from '../../../shared/constants';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


interface ItemProps {
    title: string;
    url: string;
    des: string;
}

const FeaturesItem = ({title, url, des}: ItemProps) => {
    return (
        <div className='flex items-center m-2 mt-4 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform group'>
            <div className='relative h-60 w-60'>
                <img
                    className='hover:scale-105 hover:rotate-2 transition-all duration-700 rounded-xl object-fill w-full h-full' 
                    src={url} 
                    alt={title} 
                />
                <a href='/' className='absolute top-1/2 left-1/2 h-14 w-14 bg-white flex justify-center items-center rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-700'>
                    <FontAwesomeIcon icon={faSearch}/>
                </a>
                
            </div>
            <div className=''>
                <h2 className='regular-32'> {title}</h2>
                <h3 className='regular-20 text-gray-500'> {des}</h3>
            </div>
        </div>
    );
}

function Features1() {
  return (
    <div className='padding-container py-12'>
        <div className='m-auto w-[90%]'>
            <h3 className='bold-40 font-extrabold text-center'>Features Destination</h3>
            <p className='regular-18 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam nobis soluta tempora
          </p>
        </div>
        <div className='grid items-center gap-4 grid-cols-1 sm:grid-flow-cols-2 lg:grid-cols-3'>
            {DESTINATION.map(({title, url, des}) => {
                return(
                    <FeaturesItem 
                        title={title}
                        url={url}
                        des={des}/>
                );
            })}
        </div>
    </div>
  )
}

export default Features1