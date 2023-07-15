import HeadingOne from "@/components/HeadingOne";
import WeatherForecast from "@/components/weather/WeatherForecast";
import { getApiKey } from "./getWeatherForecast";

const Weather = () => {

    const WEATHER_API_KEY = getApiKey()

    return (
        <div id="weather-forecast" className="px-8 md:px-24 lg:px-48 w-full max-w-7xl">
            <HeadingOne title='Weather App'/>
            <WeatherForecast api_key={WEATHER_API_KEY}/>
        </div>
    );
};

export default Weather;