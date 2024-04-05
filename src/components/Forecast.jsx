const Forecast = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6 ">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 AM</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
            className="w-12 my-1"
          />
          <p className="font-medium">32°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 AM</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
            className="w-12 my-1"
          />
          <p className="font-medium">32°</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 AM</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
            className="w-12 my-1"
          />
          <p className="font-medium">32°</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 AM</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
            className="w-12 my-1"
          />
          <p className="font-medium">32°</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 AM</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
            className="w-12 my-1"
          />
          <p className="font-medium">32°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
