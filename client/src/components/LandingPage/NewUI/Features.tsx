import React from 'react'
import BoraBora from '/src/assets/borabora.jpg';
import BoraBora2 from '/src/assets/borabora2.jpg';
import Maldives from '/src/assets/maldives.jpg';
import Maldives2 from '/src/assets/maldives2.jpg';
import KeyWest from '/src/assets/keywest.jpg';

function Features() {
  return (
    <div className='max-w-full mx-auto py-16 px-4 text-center'>
        <h1>Road Trip All-Inclusice Resorts</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam nobis soluta tempora, adipisci cum accusamus hic. Blanditiis, id iure natus repellendus, molestias iste veniam illum, reprehenderit recusandae excepturi non?</p>

        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img src={BoraBora} alt='/' className='w-full h-full rounded-2xl object-cover col-span-2 md:col-span-3 row-span-2'/>
            <img src={BoraBora2} alt='/' className='w-full h-full rounded-2xl object-cover'/>
            <img src={Maldives} alt='/' className='w-full h-full rounded-2xl object-cover'/>
            <img src={Maldives2} alt='/' className='w-full h-full rounded-2xl object-cover'/>
            <img src={KeyWest} alt='/' className='w-full h-full rounded-2xl object-cover'/>

        </div>

    </div>
  )
}

export default Features