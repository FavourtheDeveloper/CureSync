import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Dashcard = ({backg}) => {
  return (
    <div className={`dashcard mb-2 p-5 ${backg ? "bg-black text-white" : "bg-white text-black"}  rounded-xl w-56`}>
    <h1 className="flex text-sm items-center">
      <PersonOutlineIcon fontSize="large" className="mr-3 ml-2 bg-blue-600 text-white rounded-xl p-2" /> Total
      Doctors
    </h1>
    <h1 className="text-2xl my-3 text-center font-bold">300K</h1>
    <div className="flex justify-between items-center w-full">
      <h2 className="text-xs"><span className='text-blue-700'>30%</span> last month</h2>
      <h2><ArrowForwardIosIcon style={{fontSize: 25 }} className={`bg-blue-950 rounded-full p-2 ${backg ? "" : "text-white"}`} /></h2>
    </div>
  </div>
  )
}

export default Dashcard