import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Datechart = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          "& .MuiPickersDay-root": { color: "white", backgroundColor: "black" }, // For day color and background
          "& .MuiPickersDay-root.Mui-selected": { backgroundColor: "blue", color: "white" }, // Selected day
          "& .MuiPickersDay-root:hover": { backgroundColor: "gray" }, // Hover effect for the days
          "& .MuiPickersDay-root.Mui-disabled": { color: "red" }, // Disabled days
        }}
        // Removed Tailwind className for cleaner styling
      />
    </LocalizationProvider>
  );
};

export default Datechart;
