import HourLine from './HourLine';
import CurrentHour from './CurrentHour';

const HourCard = ({hour, dayOfWeek, highTemp, lowTemp}) => {

    return (
        <div
            className='bg-[#FCFCFC] text-[#4b595e] flex flex-col justify-start p-4 rounded-md mb-4'
        > Hourly Forcast for {dayOfWeek}
            {hour.map(({ time, condition, temp_f }) => {
                const timeSlice = time.slice(-5);

                const displayTime = () => {
                    if (dayOfWeek === 'Today') {
                        return (CurrentHour() === timeSlice) ? 'Now' : timeSlice;
                    } else {
                        return timeSlice;
                    }
                }

                return (
                <HourLine
                    key={time}
                    time={displayTime()}
                    conditionImageUrl={condition.icon}
                    condition={condition.text}
                    temp={temp_f}
                    highTemp={highTemp}
                    lowTemp={lowTemp}
                />
                );
            })}
        </div>
    )
};

export default HourCard;