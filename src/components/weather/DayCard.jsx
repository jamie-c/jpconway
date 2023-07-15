import HourCard from "./HourCard";
import autoAnimate from '@formkit/auto-animate'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DayCard = ({ date, conditionImageUrl, condition, highTemp, lowTemp, hour }) => {
    const [hourCardVisible, setHourCardVisible] = useState(false); // store visibility state for the HourCard
    const parentRef = useRef(); // Used for autoAnimate

    // add animation via autoAnimate
    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef]);

    // toggle visibility of HourCard
    const toggleHourCardVisibility = () => {
        setHourCardVisible(!hourCardVisible);
    };

    return (
    <div 
        onClick={toggleHourCardVisibility}
        className="low-box-shadow medium-box-shadow"
        ref={parentRef}
        style={{
            cursor: 'pointer'
        }}
    >

	<div
        className="bg-white backdrop-filter drop-shadow-xl backdrop-blur-lg text-[#4b595e] flex flex-row justify-between items-center p-4 sticky top-16 z-10 bg-opacity-60 rounded-md"
    >
        {/* <span
            className="flex flex-row items-center justify-start gap-4"
        > */}
		    <div
                className="w-8 font-lg flex-1"
            >
                {date}
            </div>
            <Image 
                className="rounded-md w-auto h-6 sm:h-auto pr-3" 
                src={`https:${conditionImageUrl}`}
                width={320}
                height={320}
                alt="the daily condition" 
            />
            <div
                className="text-[#8ad0ce] text-2xl sm:text-4xl flex-1"
            >
                {Math.trunc(lowTemp)}&#8457;
            </div>
        {/* </span> */}
        <span
            className="flex flex-row items-center text-sm flex-1"
        >
		<div>{condition}</div>
        </span>
        <span
            className="flex flex-row items-center justify-end relative right-0 flex-1"
        >
		<div
            className="text-[#ff6d6d] text-2xl sm:text-4xl"
        >{Math.trunc(highTemp)}&#8457;</div>
        </span>
	</div>
    
    {hourCardVisible && 
    <HourCard
		hour={hour}
		dayOfWeek={date}
        highTemp={highTemp}
        lowTemp={lowTemp}
	/>}
    </div>
)};

export default DayCard;
