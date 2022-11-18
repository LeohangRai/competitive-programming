function timeConversion(s) {
    let meridiem = s.slice(s.length - 2, s.length);
    let hour = s.slice(0, 2);
    let timeWithoutHour = s.slice(2, s.length - 2);
    let timeWithoutMeridiem = s.slice(0, s.length - 2);
    if(meridiem === 'AM') {
        if(hour === '12') {
            return "00" + timeWithoutHour;
        } 
        return s.slice(0, s.length - 2);
    }
    if (meridiem === 'PM') {
        if(hour === '12') {
            return timeWithoutMeridiem;
        }
        return (Number(hour) + 12).toString() + timeWithoutHour;
    }
}


console.log(timeConversion("12:45:54PM"));
