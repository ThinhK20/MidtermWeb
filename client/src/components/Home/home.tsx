import SliderCarousel from "../../shared/SliderCarousel/slider-carousel";
import CarouselSliderItem from "../../shared/SliderCarousel/slider-carousel-item";
import Gallery from "./Gallery/gallery";

export default function Home() {
   return (
      <div>
         <div className="bg-transparent absolute top-[40%] w-[40%] left-[30%] flex flex-col gap-4">
            <h1 className="text-white text-5xl  translate-x-[25%]">
               Reverse: 1999
            </h1>
            <p className=" text-white text-xl font-extralight text-center">
               Look at events in the past
            </p>
         </div>
         <h1 className="text-white pt-8 pl-4 text-5xl">Gallery</h1>
         <Gallery />
         <div className="pb-16 pt-8 flex flex-col gap-4 items-center justify-center">
            <h2 className="text-gray-400 text-lg">
               To acquire knowledge about the past
            </h2>
            <h1 className="text-white text-5xl">
               See what happend in the old era
            </h1>
         </div>
         <SliderCarousel direction="alternate-reverse">
            <CarouselSliderItem>
               <img
                  src="https://re1999.bluepoch.com/en/home/img/backstory/p2.png"
                  className="h-full w-[200px] flex-none object-cover"
                  alt="wander-testimonial"
                  width="180"
                  height="180"
                  loading="lazy"
               />
               <div className="flex h-full flex-col justify-start px-4">
                  <h1 className="text-white text-2xl font-bold">
                     1929: The Jazz Age
                  </h1>
                  <p className="line-clamp-5 text-sm">
                     For the 20s, everyone agree that symbolic city was New
                     York. At that time in the Big Apple, Ford Motor and radio
                     broadcast spread the positive attitude to an even larger
                     range. Jazz music playing all night. No one could say no to
                     this carnival.
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                     <img
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RtFt57F7q38AX_U6xnR&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfCXWCdSDIBFWhy0JnArz6dBmr5pGdCyWx_OLPCIfSRImw&oe=6549DDB1"
                        className="bg-white/20 grid place-items-center h-7 w-7 flex-none rounded-full object-cover"
                        alt="Testimonial image"
                        width="28"
                        height="28"
                        loading="lazy"
                     />
                     <span className="text-xs">Mist from New York, 1929</span>
                  </div>
               </div>
            </CarouselSliderItem>
            <CarouselSliderItem>
               <img
                  src="https://re1999.bluepoch.com/en/home/img/backstory/p3.png"
                  className="h-full w-[200px] flex-none object-cover"
                  alt="wander-testimonial"
                  width="180"
                  height="180"
                  loading="lazy"
               />
               <div className="flex h-full flex-col justify-start px-4">
                  <h1 className="text-white text-2xl font-bold">
                     1966: The Swinging London
                  </h1>
                  <p className="line-clamp-5 text-sm">
                     Everything was nice in the 60s. Pop art and the hippie
                     movement became popular among the young people, making
                     London the Capital of Cool. More importantly, tho era
                     witnessed the rise of the Pirate Radio and rock music.
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                     <img
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RtFt57F7q38AX_U6xnR&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfCXWCdSDIBFWhy0JnArz6dBmr5pGdCyWx_OLPCIfSRImw&oe=6549DDB1"
                        className="bg-white/20 grid place-items-center h-7 w-7 flex-none rounded-full object-cover"
                        alt="Testimonial image"
                        width="28"
                        height="28"
                        loading="lazy"
                     />
                     <span className="text-xs">Mist from London, 1966</span>
                  </div>
               </div>
            </CarouselSliderItem>
            <CarouselSliderItem>
               <img
                  src="https://streetfins.com/wp-content/uploads/2021/01/illuminate-shefrin-7.jpg"
                  className="h-full w-[200px] flex-none object-cover"
                  alt="wander-testimonial"
                  width="180"
                  height="180"
                  loading="lazy"
               />
               <div className="flex h-full flex-col justify-start px-4">
                  <h1 className="text-white text-2xl font-bold">
                     2008: Financial Crisis
                  </h1>
                  <p className="line-clamp-5 text-sm">
                     It was a catastrophic event that had profound implications
                     for the global economy. This crisis was triggered by a
                     combination of factors, including a housing market bubble,
                     risky lending practices, and the widespread securitization
                     of subprime mortgages.
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                     <img
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RtFt57F7q38AX_U6xnR&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfCXWCdSDIBFWhy0JnArz6dBmr5pGdCyWx_OLPCIfSRImw&oe=6549DDB1"
                        className="bg-white/20 grid place-items-center h-7 w-7 flex-none rounded-full object-cover"
                        alt="Testimonial image"
                        width="28"
                        height="28"
                        loading="lazy"
                     />
                     <span className="text-xs">Mist from US, 2008</span>
                  </div>
               </div>
            </CarouselSliderItem>
         </SliderCarousel>
         <SliderCarousel direction="alternate">
            <CarouselSliderItem>
               <img
                  src="https://re1999.bluepoch.com/en/home/img/backstory/p2.png"
                  className="h-full w-[200px] flex-none object-cover"
                  alt="wander-testimonial"
                  width="180"
                  height="180"
                  loading="lazy"
               />
               <div className="flex h-full flex-col justify-start px-4">
                  <h1 className="text-white text-2xl font-bold">
                     1929: The Jazz Age
                  </h1>
                  <p className="line-clamp-5 text-sm">
                     For the 20s, everyone agree that symbolic city was New
                     York. At that time in the Big Apple, Ford Motor and radio
                     broadcast spread the positive attitude to an even larger
                     range. Jazz music playing all night. No one could say no to
                     this carnival.
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                     <img
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RtFt57F7q38AX_U6xnR&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfCXWCdSDIBFWhy0JnArz6dBmr5pGdCyWx_OLPCIfSRImw&oe=6549DDB1"
                        className="bg-white/20 grid place-items-center h-7 w-7 flex-none rounded-full object-cover"
                        alt="Testimonial image"
                        width="28"
                        height="28"
                        loading="lazy"
                     />
                     <span className="text-xs">Mist from New York, 1929</span>
                  </div>
               </div>
            </CarouselSliderItem>
            <CarouselSliderItem>
               <img
                  src="https://re1999.bluepoch.com/en/home/img/backstory/p3.png"
                  className="h-full w-[200px] flex-none object-cover"
                  alt="wander-testimonial"
                  width="180"
                  height="180"
                  loading="lazy"
               />
               <div className="flex h-full flex-col justify-start px-4">
                  <h1 className="text-white text-2xl font-bold">
                     1966: The Swinging London
                  </h1>
                  <p className="line-clamp-5 text-sm">
                     Everything was nice in the 60s. Pop art and the hippie
                     movement became popular among the young people, making
                     London the Capital of Cool. More importantly, tho era
                     witnessed the rise of the Pirate Radio and rock music.
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                     <img
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RtFt57F7q38AX_U6xnR&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfCXWCdSDIBFWhy0JnArz6dBmr5pGdCyWx_OLPCIfSRImw&oe=6549DDB1"
                        className="bg-white/20 grid place-items-center h-7 w-7 flex-none rounded-full object-cover"
                        alt="Testimonial image"
                        width="28"
                        height="28"
                        loading="lazy"
                     />
                     <span className="text-xs">Mist from London, 1966</span>
                  </div>
               </div>
            </CarouselSliderItem>
            <CarouselSliderItem>
               <img
                  src="https://streetfins.com/wp-content/uploads/2021/01/illuminate-shefrin-7.jpg"
                  className="h-full w-[200px] flex-none object-cover"
                  alt="wander-testimonial"
                  width="180"
                  height="180"
                  loading="lazy"
               />
               <div className="flex h-full flex-col justify-start px-4">
                  <h1 className="text-white text-2xl font-bold">
                     2008: Financial Crisis
                  </h1>
                  <p className="line-clamp-5 text-sm">
                     It was a catastrophic event that had profound implications
                     for the global economy. This crisis was triggered by a
                     combination of factors, including a housing market bubble,
                     risky lending practices, and the widespread securitization
                     of subprime mortgages.
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                     <img
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/326531349_947755589483002_6935008565326110642_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RtFt57F7q38AX_U6xnR&_nc_ht=scontent.fsgn8-4.fna&cb_e2o_trans=t&oh=00_AfCXWCdSDIBFWhy0JnArz6dBmr5pGdCyWx_OLPCIfSRImw&oe=6549DDB1"
                        className="bg-white/20 grid place-items-center h-7 w-7 flex-none rounded-full object-cover"
                        alt="Testimonial image"
                        width="28"
                        height="28"
                        loading="lazy"
                     />
                     <span className="text-xs">Mist from US, 2008</span>
                  </div>
               </div>
            </CarouselSliderItem>
         </SliderCarousel>
      </div>
   );
}
