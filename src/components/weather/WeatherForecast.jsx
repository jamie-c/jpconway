'use client'

import { useEffect, useState } from 'react';
import DayCard from './DayCard';
import { getForecast } from '@/app/(pages)/weather/getWeatherForecast';

const WeatherForecast = ({ api_key }) => {

	const [zipCode, setZipCode] = useState(null);
	const [forecastData, setForecastData] = useState([]);
	const [loading, setLoading] = useState('');
	const [loadingMsg, setLoadingMsg] = useState('');
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${zipCode}&days=3&aqi=no&alerts=no`;

	const getResponse = () => {
		setLoading('loading');
		if (zipCode) {
			getForecast(url)
			.then((data) => { 
				setForecastData(data)
			})
			.catch(e => 'there was an error getting the data')
			.finally(setLoading('loaded'));
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		getResponse();
	}

	useEffect(() => {
		switch (loading) {
			case 'loading':
				setLoadingMsg((<div>Getting weather forecast for {zipCode}.</div>));
				break;
			case 'entering zip':
				setLoadingMsg((<div>Please enter a zip code...</div>));
				break;
			case 'loaded':
				setLoadingMsg((<div>Weather forecast for {zipCode}:</div>));
				break;
		}
	}, [loading]);


	return (
		<div
			className='flex flex-col m-auto'
        >
			<form
				className='my-5'
				onSubmit={handleSubmit}
			>
				<label 
            	    htmlFor="zipCode"
            	>Zip Code</label>
				<input
					className="py-2 text-tricornBlack-500"
					name="zipCode"
					type="number"
					placeholder="Enter your Zip Code"
					value={zipCode}
					onChange={e => {
						setLoading('entering zip');
						setZipCode(e.target.value);
					}}
					style={{
						width: '100%',
						margin: '10px 0'
					}}
				/>
			</form>

			{loadingMsg}

			{/* build the DayCard with the forecastData */}
			{forecastData.map(({ date, day: { condition, maxtemp_f, mintemp_f }, hour }) => {

				const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] // days of week 0-6
			    const todayNum = new Date().getDay();  // returns number 0-6 Sun-Sat for current day

				const [fcYear, fcMonth, fcDay] = date.split("-");
				const fcDayObject = new Date(fcYear, fcMonth - 1, fcDay); // month - 1 since month indices start from 0

			    const fcDayNum = fcDayObject.getDay();  // returns number 0-6 Sun-Sat for forecast day
			    daysOfWeek[todayNum] = 'Today';  // rename day at index value of current day to Today
			    const dayOfWeek = daysOfWeek[fcDayNum];  // get name of forecast day from array

				return (
						<DayCard
							key={dayOfWeek}
							date={dayOfWeek}
							conditionImageUrl={condition.icon}
							condition={condition.text}
							highTemp={maxtemp_f}
							lowTemp={mintemp_f}
							hour={hour}
						/>
				)
			})}
			
		</div>
	);
};

export default WeatherForecast;
