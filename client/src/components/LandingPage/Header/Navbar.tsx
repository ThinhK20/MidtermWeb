import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'


function Navbar() {

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  }

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      {/* Logo Start */}
      <div >
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}> TRAVEL. </h1>
      </div>

      {/* Middle navigation */}
      <ul className='hidden md:flex'>
        <li> Home </li>
        <li> Destination </li>
        <li> Travel </li>
        <li> View </li>
        <li> Book </li>
      </ul>

      {/* End */}
      <div className='hidden md:flex'>
        <button className='rounded-full border-0'>
          <FontAwesomeIcon icon={faUser} />
          <a className='px-1 font-bold'> login </a>
        </button>
        
      </div>

      {/* screen md */}
      <div className='md:hidden z-10'
           onClick={handleNav}>
        {nav ? <FontAwesomeIcon icon={faClose} size='2xl' className='text-black'/> : <FontAwesomeIcon icon={faGripLines} size='2xl'/>}
      </div>
      {/* moblie menu drowdown here  */}
      <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black' : 'absolute left-[-100%]'}
           onClick={handleNav}>
        <ul>
          <h1 className='text-3xl md:text-4xl font-bold'>TRAVEL</h1>
          <li className='border-b'> Home </li>
          <li className='border-b'> Destination </li>
          <li className='border-b'> Travel </li>
          <li className='border-b'> View </li>
          <li className='border-b'> Book </li>
          <div className='flex flex-col'>
            <button className='my-6'>search</button>
            <button>login</button>
          </div>
          <div className='flex justify-between my-6'>
            <FontAwesomeIcon icon={faFacebook} className='icon'/>
            <FontAwesomeIcon icon={faYoutube} className='icon'/>
            <FontAwesomeIcon icon={faInstagram} className='icon'/>
            <FontAwesomeIcon icon={faTwitter} className='icon'/>
            <FontAwesomeIcon icon={faPinterest} className='icon'/>
          </div>
        </ul>
      </div>

      
    </div>
  )
}

export default Navbar