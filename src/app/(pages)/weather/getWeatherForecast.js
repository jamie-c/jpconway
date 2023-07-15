require('dotenv').config()

export function getApiKey() {

	const weatherApiKey = process.env.WEATHER_API_KEY;
	
    return weatherApiKey;
};

export async function getForecast(url) {
		const res = await fetch(url);
		const { forecast } = await res.json();
		return forecast.forecastday;
	};