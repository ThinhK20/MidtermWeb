import Header from "../Header/header";
import VideoBackground from "../../assets/video-background.mp4";

interface Props {
   children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
   return (
      <div className="layout-theme">
         <Header />
         <video
            src={VideoBackground}
            className="w-full h-full brightness-50 object-cover z-[-1]"
            autoPlay
            loop
            muted
         />
         {children}
      </div>
   );
}
