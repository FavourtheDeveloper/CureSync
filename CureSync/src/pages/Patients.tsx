import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const Patients = () => {
    return (
        <div className="flex">
          <Sidebar />
    
          <div className="w-full ml-52 p-5">
            <div className="mb-6">
              <div>
                <h1 className="font-bold flex items-center text-2xl">
                  <ChevronLeftIcon fontSize="large"
                className="mr-2 bg-gray-200 rounded-xl p-2" /> Patient profile
                </h1>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl p-5">
              
    
              
            </div>
    
            <div className="footer w-full mt-3">
              <Footer />
            </div>
          </div>
        </div>
      );
}

export default Patients