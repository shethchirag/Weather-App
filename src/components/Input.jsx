import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Input = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center w-3/4 justify-center space-x-4">
        <input
          type="text"
          placeholder="search for city..."
          className="text-xl font-light  p-2 shadow-xl focus:outline-none rounded-xl capitalize"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-xl text-white font-light" name="metric">
          °C{" "}
        </button>
        <span className="text-xl text-white mx-1">|</span>
        <button className="text-xl text-white font-light" name="imperial">
          {" "}
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
