import Sidebar from "../components/Sidebar";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import Dashcard from "../components/Dashcard";
import Barchart from "../charts/Barchart";
import Datechart from "../charts/Datechart";
import Table from "../components/Tableclient";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full ml-52 p-5">
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
        <div className="bg-gray-200 rounded-2xl p-5">
          <div className="dashboard flex justify-around flex-wrap flex-basis-4   ">
            <Dashcard backg={true} />
            <Dashcard backg={false} />
            <Dashcard backg={false} />
            <Dashcard backg={false} />

            <div className="flex justify-between items-center w-full mt-2">
              <div className="w-1/2">
                <Barchart />
              </div>
              <div className="w-1/2">
                <Datechart />
              </div>
            </div>
          </div>

          <div className="patients bg-white p-5 rounded-2xl">
            <div className="flex justify-between  mb-5   w-full">
              <h1 className="font-bold">All Patients</h1>
              <p className="text-blue-700 text-sm">See All</p>
            </div>
            <div>
              <Table />
            </div>
          </div>
        </div>

        <div className="footer w-full mt-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
