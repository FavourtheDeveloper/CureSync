import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import DeleteIcon from '@mui/icons-material/Delete';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MailIcon from "@mui/icons-material/Mail";
import passport from "../assets/passprt.jpg";
import Datechart from "../charts/Datechart";
import Piechart from "../charts/Piechart";

const Patients = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full ml-52 p-5">
        <div className="mb-6">
          <div>
            <h1 className="font-bold flex items-center text-2xl">
              <ChevronLeftIcon
                fontSize="large"
                className="mr-2 bg-gray-200 rounded-xl p-2"
              />
              Patient profile
            </h1>
          </div>
        </div>
        <div className="bg-gray-200 rounded-2xl p-5">
          <div className="patient flex justify-between flex-wrap">
            <div className="w-1/3">
              <div className=" bg-blue-600 p-3 m-2 rounded-2xl text-white">
                <div className="flex items-center">
                  <img
                    src={passport}
                    alt="Passport"
                    className="rounded-full mr-4 m-2 w-20 h-20"
                  />
                  <h1 className="font-semibold">Mr. Favour Olajide</h1>
                </div>
                <div className="text-xs">
                  <h1 className="text-lg font-semibold py-3">Contacts:</h1>
                  <ul>
                    <li className="flex items-center pb-2">
                      <PhoneInTalkIcon fontSize="small" className="mr-2" />
                      +234 80 3368 1443
                    </li>
                    <li className="flex items-center pb-2">
                      <LocationOnIcon fontSize="small" className="mr-2" />
                      Powerline Area, Osogbo, Osun State
                    </li>
                    <li className="flex items-center pb-2">
                      <MailIcon fontSize="small" className="mr-2" />
                      favourolajide@gmail.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-3 rounded-2xl m-2 mt-5 text-dark">
                <div className="flex justify-between p-2">
                  <h1>Physical Exam:</h1>
                  <LinearScaleIcon fontSize="small" />
                </div>

                <div className="flex justify-between w-full pt-2">
                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Heart</h2>
                    <h1>Blockage in left actery</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-end text-gray-400">TA</h2>
                    <h1>120 mins/Hg</h1>
                  </div>

                  

                  
                </div>
                <hr className="mb-3 mt-1" />
                <div className="flex justify-between w-full">
                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Lungs</h2>
                    <h1>Congestion in left side of chest</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-end text-gray-400">FC</h2>
                    <h1>72/mins</h1>
                  </div>

                  
                </div>
                <hr className="mb-3 mt-1" />

                <div className="flex justify-between w-full">
                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Abdomath</h2>
                    <h1>Pain on right side</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-end text-gray-400">Poids</h2>
                    <h1>71.6 Kg</h1>
                  </div>

                  
                </div>
                <hr className="mb-3 mt-1" />

                <div className="flex justify-between w-full">
                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Volliura status</h2>
                    <h1>S/P</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-end text-gray-400">Poids</h2>
                    <h1>71.6 Kg</h1>
                  </div>

                  
                </div>
              </div>
            </div>

            <div className="w-2/3">
              <div className="bg-white p-3 rounded-2xl m-2 text-dark">
                <div className="flex justify-between p-2">
                  <h1>Overview:</h1>
                  <LinearScaleIcon fontSize="small" />
                </div>

                <div className="flex justify-between w-full pt-2">
                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Gender</h2>
                    <h1>Male</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Phone</h2>
                    <h1>+234</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Address</h2>
                    <h1>Power</h1>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Date of Birth</h2>
                    <h1>23/10/2024</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">City</h2>
                    <h1>Lagos</h1>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="text-xs pb-2 text-gray-400">Register Date</h2>
                    <h1>22/09/2024</h1>
                  </div>
                </div>
              </div>


              <div className="bg-white p-3 rounded-2xl m-2 mt-3 text-dark">
                <div className="flex justify-between items-center p-2">
                  <h1>Reports:</h1>
                  <LinearScaleIcon fontSize="small" />
                </div>

                <div className="flex justify-between items-center pb-5 w-full">
                  <div className="text-sm p-2">
                    <h2 className="">Checkup Result</h2>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="">Date - 12 Mon, 2022</h2>
                  </div>

                  <div className="text-sm p-2">
                  <DeleteIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
              <ArrowCircleRightIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
                  </div>
                </div>

                <div className="flex justify-between items-center pb-5 w-full">
                  <div className="text-sm p-2">
                    <h2 className="">Checkup Result</h2>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="">Date - 12 Mon, 2022</h2>
                  </div>

                  <div className="text-sm p-2">
                  <DeleteIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
              <ArrowCircleRightIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
                  </div>
                </div>

                <div className="flex justify-between items-center pb-5 w-full">
                  <div className="text-sm p-2">
                    <h2 className="">Checkup Result</h2>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="">Date - 12 Mon, 2022</h2>
                  </div>

                  <div className="text-sm p-2">
                  <DeleteIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
              <ArrowCircleRightIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
                  </div>
                </div>

                <div className="flex justify-between items-center pb-5 w-full">
                  <div className="text-sm p-2">
                    <h2 className="">Checkup Result</h2>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="">Date - 12 Mon, 2022</h2>
                  </div>

                  <div className="text-sm p-2">
                  <DeleteIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
              <ArrowCircleRightIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
                  </div>
                </div>

                <div className="flex justify-between items-center pb-5 w-full">
                  <div className="text-sm p-2">
                    <h2 className="">Checkup Result</h2>
                  </div>

                  <div className="text-sm p-2">
                    <h2 className="">Date - 12 Mon, 2022</h2>
                  </div>

                  <div className="text-sm p-2">
                  <DeleteIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
              <ArrowCircleRightIcon
                fontSize="small"
                className="mr-2 border-gray-400 border text-gray-400  rounded-sm"
              />
                  </div>
                </div>
                
              </div>

              <div className="flex justify-between p-2 gap-3">
                <div className="w-1/2 bg-white justify-self-center rounded-2xl">
                  <Datechart />

                  <div className="flex justify-between px-3">
                    <h1 className="flex text-gray-400 items-center"> <CircleIcon
                fontSize="small"
                className="mr-2 text-blue-500"
              />Current Steak</h1>
                    <h1>4 days</h1>
                  </div>

                  <div className="flex justify-between p-3">
                    <h1 className="flex text-gray-400 items-center"><CircleIcon
                fontSize="small"
                className="mr-2 text-red-500"
              />Completed Days</h1>
                    <h1>5 days</h1>
                  </div>
                </div>

                <div className="w-1/2 bg-white justify-self-center rounded-2xl pt-6">
                  <Piechart />

                  <div className="flex justify-between px-3 pt-6">
                    <h1 className="flex text-gray-400 items-center"> <CircleIcon
                fontSize="small"
                className="mr-2 text-blue-500"
              />Following Plan</h1>
                    <h1>10</h1>
                  </div>

                  <div className="flex justify-between p-3">
                    <h1 className="flex text-gray-400 items-center"><CircleIcon
                fontSize="small"
                className="mr-2 text-red-500"
              />Skipped</h1>
                    <h1>05</h1>
                  </div>

                  <div className="flex justify-between px-3">
                    <h1 className="flex text-gray-400 items-center"> <CircleIcon
                fontSize="small"
                className="mr-2 text-blue-500"
              />Outside Plan</h1>
                    <h1>25</h1>
                  </div>
                  
                </div>

              </div>
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

export default Patients;
