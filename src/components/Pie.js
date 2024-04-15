import React from 'react'
import { Pie } from 'react-chartjs-2'
import { 
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js"
import { pirChartData } from '../data'

ChartJS.register(
  ArcElement,
  Tooltip,
  Title,
  Legend,
)

export const PieChart = () => {
  const options = {}
  return <Pie options={ options } data={pirChartData}/>
}
