import { BarChart } from '@mui/x-charts/BarChart';

const Barchart = () => {
  return (
    <>
    <BarChart className='bg-white'
    xAxis={[
      {
        id: 'barCategories',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: [0, 50, 100, 200, 300, 400, 80, 20, 250, 350, 150, 220],
        label: "Patients Statistics"
      },
    ]}
    width={500}
    height={300}
  />
  </>
  )
}

export default Barchart