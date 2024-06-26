import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or sunny</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">32°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">32%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">32 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:32 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set:<span className="font-medium ml-1">06:32 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">32°</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">32°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
