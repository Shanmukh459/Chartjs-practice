import React from 'react'
import { Chart, Line } from "react-chartjs-2"
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
} from "chart.js"
import { lineChartData } from '../data'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
)

export const LineGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        text: "This is an example line graph using ChartJS",
        display: true,
        postion: "bottom",
      },
    }
  }
  const data = {}
  return <Line options={options} data={lineChartData} />
}
