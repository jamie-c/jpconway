import HeadingOne from "@/components/HeadingOne";
import WeatherForecast from "@/components/weather/WeatherForecast";
import { getApiKey } from "./getWeatherForecast";
import Link from "next/link";

const Weather = () => {

    const WEATHER_API_KEY = getApiKey()

    return (
        <div id="weather-forecast" className="px-1 md:px-24 lg:px-48 w-full max-w-7xl">
            <HeadingOne title='Weather App'/>
            <WeatherForecast api_key={WEATHER_API_KEY}/>
            <div>
                <h3 className="text-3xl mt-10 mb-5">About the Project</h3>
                <p>This project was a quick Saturday afternoon project built during one of the OKCoders classes.</p>
                <p>The goal here was simply to consume an API.</p>
                <p>I've posted my version here.</p>
                <p>The API is <Link href="https://www.weatherapi.com/">weatherapi.com</Link></p>
            </div>
        </div>
    );
};

export default Weather;