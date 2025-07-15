import { Homedata } from "../StarterData";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Appartement() {
  return (
    <div className="  h-[100%] mt-[100px] max-sm:h-screen w-full ">
      {Homedata.map((data) => {
        return (
          <ul key={data.id} className="flex gap-6 pt-7 text-2xl font-bold ">
            <li>
              <img src={data.Homepics} className="h-[200px] rounded-2xl " />
            </li>
            <li>{data.cityname} </li>

            <li className="relative bottom-[150px] right-[250px]">
              <LocationOnOutlinedIcon />
            </li>
          </ul>
        );
      })}
    </div>
  );
}
