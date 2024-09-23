import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MailIcon from "@mui/icons-material/Mail";
import passport from "../assets/passprt.jpg";

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
            </div>

            <div className="w-2/3">
              <div className="bg-white p-3 rounded-2xl m-2 text-dark">
                <div className="flex justify-between p-2">
                  <h1>Overview</h1>
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
