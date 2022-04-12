import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import DataFilter from "./components/DataFilter";
import ChartPage from "./components/ChartPage";

function App() {
  const [data, setState] = useState([]);
  const [filteredData, setFilteredData] = useState({
    name: "",
    amount: "",
    date: "",
  });
  const [chartData, setChartData] = useState([]);

  const chartDataPage = useMemo(() => <ChartPage charData={chartData} />);

  useEffect(() => {
    axios
      .get("https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json")
      .then((res) => res.data)
      .then((res) => setState(res));
  }, []);

  console.log(chartData);

  return (
    <div className="App">
      <DataFilter
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        allData={data}
        setChartData={setChartData}
      />
      {chartDataPage}
    </div>
  );
}

export default App;
