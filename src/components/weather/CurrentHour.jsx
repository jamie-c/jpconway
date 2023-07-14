const CurrentHour = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
  
    // Pad single-digit hours with leading zero
    const formattedHour = (currentHour < 10 ? '0' : '') + currentHour;
  
    // Append ':00' to the formatted hour
    const formattedTime = formattedHour + ':00';

    return formattedTime;
}

export default CurrentHour;