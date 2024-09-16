import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import GroupsIcon from '@mui/icons-material/Groups';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Sidebar = () => {
  return (
    <div className="w-52 mr-2 h-screen">
      <div className="headtext py-5 flex items-center w-full px-5">
        <h1 className="font-bold flex items-center text-yellow-600 text-2xl">
          <HealthAndSafetyIcon className="mr-1" /> CureSync
        </h1>
      </div>

      <div className="sidelinks p-3">
        <ul className="text-xs text-blue-600 font-medium">
          <li className="p-2 mb-2 flex items-center bg-blue-600 rounded-2xl text-white">
            <GridViewIcon fontSize="small" className="mx-1" /> Overview
          </li>
          <li className="p-2 flex items-center"><GroupsIcon fontSize="small" className="mx-1" /> Patients</li>
          <li className="p-2 flex items-center"><PermContactCalendarIcon fontSize="small" className="mx-1" /> Appointments</li>
          <li className="p-2 flex items-center"><PersonOutlineIcon fontSize="small" className="mx-1" /> Doctors</li>
          <li className="p-2 flex items-center"><HourglassFullIcon fontSize="small" className="mx-1" /> Departments</li>
          <li className="p-2 flex items-center"><PeopleAltIcon fontSize="small" className="mx-1" /> Employees</li>
          <li className="p-2 flex items-center"><AddShoppingCartIcon fontSize="small" className="mx-1" /> Products and stock</li>
          <li className="p-2 flex items-center"><CurrencyExchangeIcon fontSize="small" className="mx-1" /> Earnings</li>
          <br />
          <hr className="border-3" />
          <br />
          <li className="p-2 flex items-center"><SettingsIcon fontSize="small" className="mx-1" /> Settings</li>
          <li className="p-2 flex items-center"><HelpOutlineIcon fontSize="small" className="mx-1" /> Help and support</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
