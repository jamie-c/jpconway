require('dotenv').config()

export function getApiKey() {

	const weatherApiKey = process.env.WEATHER_API_KEY;
	
    return weatherApiKey;
};