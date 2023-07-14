import HourCard from "./HourCard";
import autoAnimate from '@formkit/auto-animate'
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
        style={{
            backgroundColor: '#FCFCFC',
            color: '#4b595e',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px',
            borderRadius: '6px',
            position: 'sticky',
            top: 0,
            zIndex: 10,
        }}
        className="translucent"
    >
        <span
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px'
            }}
        >
		<div
            style={{
                width: '7rem',
                textAlign: 'left',
                fontSize: '2rem'
            }}
        >{date}</div>
		<img alt="the daily condition" src={conditionImageUrl} />
        <div
            style={{
                color: '#8ad0ce',
                fontSize: '2rem'
            }}
        >{Math.trunc(lowTemp)}&#8457;</div>
        </span>
        <span
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
		<div>{condition}</div>
        </span>
        <span
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
                right: 0
            }}>
		<div
            style={{
                color: '#ff6d6d',
                fontSize: '2rem'
            }}
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
