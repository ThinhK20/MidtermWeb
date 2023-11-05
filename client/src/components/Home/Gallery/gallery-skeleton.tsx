import Skeleton from "react-loading-skeleton";

export default function SkeletonGallery() {
   const skeletonNumber = 6;
   return (
      <div className="h-full w-full">
         {Array(skeletonNumber)
            .fill(null)
            .map((_, id) => (
               <Skeleton key={id} className="w-40 h-40" />
            ))}
      </div>
   );
}
