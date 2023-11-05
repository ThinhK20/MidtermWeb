interface Props {
   children?: React.ReactNode;
   direction?: "alternate" | "alternate-reverse";
}

export default function SliderCarousel({ children, direction }: Props) {
   return (
      <div className="scrollbar-hide group mb-6 h-[180px] w-full overflow-x-hidden">
         <div
            className="group-hover:pause animate-marquee relative h-full w-max"
            style={{ animationDirection: direction }}
         >
            <div className="grid h-full w-full grid-flow-col items-stretch gap-6">
               {children}
            </div>
         </div>
      </div>
   );
}
