import { useState } from "react";
import Moadal from "./Moadal";

export default function SideBar() {
  const [Open, setOpen] = useState(true);

  return (
    <Moadal open={Open}>
      <aside className="w-full h-400px bg-red ">
        <ul>
          <li>Home</li>
          <li>profile </li>
          <li> dashbord </li>
        </ul>
      </aside>
    </Moadal>
  );
}
