import React, { useState } from "react";
import "./App.css";

import useCityInfo from "./Hook/useCityInfo.js";
import useWeatherInfo from "./Hook/useWeatherInfo.js";
import { debounce } from "lodash";

function App() {
  // WE NEED A CITY INPUT
  const [cityName, setcityName] = useState("");
  const [geoInfo, setGeoInfo] = useState({});
  const [cityVisible, setCityVisible] = useState(true);
  const [weatherVisible, setWeatherVisible] = useState(false);
  const cityInfo = useCityInfo(cityName);
  const weatherInfo = useWeatherInfo(geoInfo);

  const handleInputChange = debounce((e) => {
    e.preventDefault();
    setcityName(e.target.value);
  }, 600);

  const handleOnClick = (lat, lon, name) => {
    setGeoInfo({ lat, lon, name });
    setWeatherVisible(true);
    setCityVisible(false);
  };

  const handleChangeCity = () => {
    setWeatherVisible(false);
    setCityVisible(true);
  };

  return (
    <div className="w-screen flex-col gap-8 h-screen bg-black text-white flex justify-center items-center ">
      {cityVisible && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <label htmlFor="selectCity" className="mb-2 text-lg font-bold ">
              Select City
            </label>
            <input
              type="text"
              className="text-white bg-transparent border-2 py-2 pl-4"
              id="selectCity"
              onChange={handleInputChange}
            />
          </div>

          <ul className="flex flex-col gap-3 justify-center items-center duration-500">
            {cityInfo?.map((city, i) => (
              <li
                key={i}
                onClick={() => handleOnClick(city.lat, city.lon, city.name)}
                className=" bg-gray-800 text-white p-4 w-full rounded-md font-bold "
              >
                {city.name} ,{" "}
                <span className="text-gray-400 text-sm font-light">
                  {" "}
                  {city.country}{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {weatherInfo && weatherVisible && (
        <div className="text-white text-center text-xl ">
          <div className="flex justify-center items-center">

          <h1>Showing Weather of <span className="font-bold">{geoInfo.name}</span></h1>

          <img src={` https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}  className="w-[5rem] " alt="" />
          </div>
          <div className="flex mt-4 gap-8  justify-between border-2 border-white p-8 bg-slate-900 rounded-md">
            <div>
              <h2>Temp</h2>
              <p>
                {weatherInfo && weatherInfo.main.temp} <span> &deg; C</span>
              </p>
            </div>
            <div>
              <h2>Feels Like</h2>
              <p>
                {weatherInfo && weatherInfo.main.feels_like}{" "}
                <span> &deg; C</span>
              </p>
            </div>
            <div>
              <h2>Humidity</h2>
              <p>
                {weatherInfo && weatherInfo.main.humidity} <span>%</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {weatherVisible && <button className="border-2 p-2 rounded-md hover:bg-gray-600/50" onClick={handleChangeCity}>ChangeCity</button>}
    </div>
  );
}

export default App;

// obj.map((city)=>{console.log(city["name"])})
