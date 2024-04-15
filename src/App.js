import './App.css';
import { BarChart } from './components/Bar';
import { LineGraph } from "./components/Line"
import { PieChart } from './components/Pie';

function App() {
  return (
    <div className="App">
      {/* <LineGraph /> */}
      {/* <BarChart /> */}
      <PieChart />
    </div>
  );
}

export default App;
