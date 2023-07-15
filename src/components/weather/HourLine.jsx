import Image from "next/image";

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
            className="text-[#4b595e] flex flex-row items-center justify-between gap-10"
        >
            <span
                className="flex flex-row items-center justify-start gap-10"
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
            <Image
                className="rounded-md w-auto h-6 sm:h-auto" 
                src={`https:${conditionImageUrl}`}
                width={320}
                height={320}
                alt="the daily condition" 
            />
        <span
            className="flex flex-row items-center"
        >
    	    <div>{condition}</div>
        </span>
        </span>
        <span
            className="flex flex-row items-center justify-end relative right-0 text-sm"
        >
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