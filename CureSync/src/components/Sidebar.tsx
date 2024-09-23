import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import GroupsIcon from "@mui/icons-material/Groups";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-52 mr-2 h-screen fixed">
      <div className="headtext py-5 flex items-center w-full px-5">
        <h1 className="font-bold flex items-center text-yellow-600 text-2xl">
          <HealthAndSafetyIcon className="mr-1" /> CureSync
        </h1>
      </div>

      <div className="sidelinks p-3">
        <ul className="text-xs text-blue-600 font-medium">
          <li
            className={
              (location.pathname === "/"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <GridViewIcon fontSize="small" className="mx-1" />
            <Link to={"/"}> Overview</Link>
          </li>
          <li
            className={
              (location.pathname === "/patients"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <GroupsIcon fontSize="small" className="mx-1" />
            <Link to={"/patients"}>Patients</Link>
          </li>
          <li
            className={
              (location.pathname === "/appointments"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <PermContactCalendarIcon fontSize="small" className="mx-1" />{" "}
            Appointments
          </li>
          <li
            className={
              (location.pathname === "/doctors"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <PersonOutlineIcon fontSize="small" className="mx-1" /> Doctors
          </li>
          <li
            className={
              (location.pathname === "/departments"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <HourglassFullIcon fontSize="small" className="mx-1" /> Departments
          </li>
          <li
            className={
              (location.pathname === "/employees"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <PeopleAltIcon fontSize="small" className="mx-1" /> Employees
          </li>
          <li
            className={
              (location.pathname === "/products"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <AddShoppingCartIcon fontSize="small" className="mx-1" /> Products
            and stock
          </li>
          <li
            className={
              (location.pathname === "/earnings"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <CurrencyExchangeIcon fontSize="small" className="mx-1" /> Earnings
          </li>
          <br />
          <hr className="border-3" />
          <br />
          <li
            className={
              (location.pathname === "/settings"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <SettingsIcon fontSize="small" className="mx-1" /> Settings
          </li>
          <li
            className={
              (location.pathname === "/help"
                ? "bg-blue-600 rounded-2xl text-white p-2"
                : " flex items-center p-2")
            }
          >
            <HelpOutlineIcon fontSize="small" className="mx-1" /> Help and
            support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
