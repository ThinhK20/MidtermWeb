interface Props {
   children?: React.ReactNode;
}

export default function CarouselSliderItem({ children }: Props) {
   return (
      <div className="bg-w-90015 flex h-full w-screen items-center overflow-hidden rounded-xl text-white/80 md:w-[75vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]">
         {children}
      </div>
   );
}
