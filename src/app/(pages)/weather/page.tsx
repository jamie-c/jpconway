import HeadingOne from "@/components/HeadingOne"
import WeatherForecast from "@/components/weather/WeatherForecast"

const Weather = () => {
    return (
        <div id="weather-forecast" className="px-8 md:px-24 lg:px-48 w-full max-w-7xl">
            <HeadingOne title='Weather App'/>
            <WeatherForecast />
        </div>
    )
}

export default Weather