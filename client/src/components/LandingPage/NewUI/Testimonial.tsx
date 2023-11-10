import React from 'react'

function Testimonial() {
  return (
    <div className="max-w-full mx-auto padding-container py-12 lg:py-20">
        {/* Text Heading */}
        <div className="font-light sm:text-lg">
        <h1 className="bold-40 font-extrabold text-center">
            Testimonial
        </h1>
        <div className="text-center">
            <span className="inline-block w-5 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-40 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
            nobis soluta tempora, adipisci cum accusamus hic. Blanditiis, id iure
            natus repellendus, molestias iste veniam illum, reprehenderit
            recusandae excepturi non?
        </p>
        </div>
    </div>
  )
}

export default Testimonial