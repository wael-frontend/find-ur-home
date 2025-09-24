import Vediobg from "../assets/video.mp4";

export default function Videobg() {
  return (
    <div className="w-[90%] h-[100%] mt-20">
      <video src={Vediobg} autoPlay loop muted />
    </div>
  );
}
