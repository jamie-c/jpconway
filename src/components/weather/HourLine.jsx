const HourLine = ({ time, conditionImageUrl, condition, temp, highTemp, lowTemp }) => {
    
    let color = '';

    temp = Math.trunc(temp);
    lowTemp = Math.trunc(lowTemp);
    highTemp = Math.trunc(highTemp);

    if (highTemp === temp) {
        color = '#ff6d6d';
    } 
    if (lowTemp === temp) {
        color = '#8ad0ce';
    }
    if (temp !== lowTemp && temp !== highTemp) {
        color = '#4b595e';
    }

    return (
    <>
        <span
            style={{
                color: '#4b595e',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px'
            }}
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
                    color: `${color}`,
                    width: '3rem',
                    textAlign: 'left',
                    fontSize: '1rem'
                }}
            >
                {time}
            </div>
    	    <img 
                alt="the hourly condition"
                src={conditionImageUrl}
                height='30px'
            />
        <span
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
    	    <div>{condition}</div>
        </span>
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
                    color:`${color}`
                }}
            >
                {temp}&#8457;
            </div>
        </span>	
        </span>
    </>
)
};
    
export default HourLine;