import HourLine from './HourLine';
import CurrentHour from './CurrentHour';

const HourCard = ({hour, dayOfWeek, highTemp, lowTemp}) => {

    return (
        <div
            style={{
                backgroundColor: '#FCFCFC',
                color: '#4b595e',  
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: '20px',
                borderRadius: '6px'
            }}
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