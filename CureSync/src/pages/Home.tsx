import Sidebar from "../components/Sidebar";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import Dashcard from "../components/Dashcard";
import Barchart from "../charts/Barchart";
import Datechart from "../charts/Datechart";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full p-5">
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="font-bold flex items-center text-2xl">
              Hello, Favour Olajide
              <WavingHandIcon
                fontSize="medium"
                className="ml-2 text-yellow-500"
              />
            </h1>
            <p className="font-bold text-sm flex items-center">
              Good Morning{" "}
              <WbSunnyIcon fontSize="small" className="ml-2 text-yellow-500" />
            </p>
          </div>

          <div>
            <input
              type="text"
              className="rounded-lg p-2 pl-3 bg-gray-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Search for anything"
            />
          </div>
        </div>

        <div className="dashboard flex justify-around flex-wrap flex-basis-4 bg-gray-200 rounded-2xl p-5">
         <Dashcard backg={true} />
         <Dashcard backg={false} />
         <Dashcard backg={false} />
         <Dashcard backg={false}/>
       

        <div className="flex justify-between w-full mt-8">
          <div className="w-1/2">
          <Barchart />
          </div>
          <div className="w-full">
          <Datechart />
          </div>

          
          </div>
          </div>
          </div>
      </div>
  );
};

export default Home;
