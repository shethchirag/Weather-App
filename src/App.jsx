import Forecast from "./components/Forecast";
import Input from "./components/Input";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import { fetchDataFromApi } from "./services/weatherService";

function App() {
  const fetchWeatherData = async () => {
    const data = await fetchDataFromApi("weather", { q: "berlin" });

    console.log(data);
  };

  fetchWeatherData();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-[6rem] bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Input />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;
