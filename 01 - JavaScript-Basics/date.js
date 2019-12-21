const format_time = date_obj => {

    const dayArr = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    let dayNum = date_obj.getDay();
    let day = dayArr[dayNum + 1];

    let hour = date_obj.getHours();

    let minute = date_obj.getMinutes();

    let amPM = (hour > 11) ? "PM" : "AM";
    if (hour > 12) {
        hour -= 12;
    } else if (hour == 0) {
        hour = "12";
    }
    if (minute < 10) {
        minute = "0" + minute;
    }

    return day + ' ' + hour + ": " + minute + amPM;
}



const timee = new Date();
console.log(format_time(timee));