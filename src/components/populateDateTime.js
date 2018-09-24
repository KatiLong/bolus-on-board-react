export function populateDateTime () {
    let currentDateTime = new Date();
    let currentDate, currentTime = '';
    let month = currentDateTime.getMonth() + 1;
    let day = currentDateTime.getDate();
    let hour = currentDateTime.getHours();
    let year = currentDateTime.getFullYear();
    let minutes = currentDateTime.getMinutes();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;

    currentDate = `${year}-${month}-${day}`;
    currentTime = `${hour}:${minutes}`;

    let inputDateTime = currentDate.substring(0, 11) + 'T' + currentTime;

    

    return {
        date: currentDate,
        time: currentTime
    }
}

export function bolusEntryTime (date, time) {
    let currentDateTime = new Date();

    // 2015-02-23 16:11
    // console.log(date.slice(5, 7) - 1); // month
    // console.log(date.slice(8, 10)); // day
    // console.log(time.slice(0, 2)); // hours
    // console.log(date.slice(0, 4)); // year
    // console.log(time.slice(3, 5)); // minutes
    currentDateTime.setMonth(date.slice(5, 7) - 1);
    currentDateTime.setDate(date.slice(8, 10));
    currentDateTime.setHours(time.slice(0, 2));
    currentDateTime.setFullYear(date.slice(0, 4));
    currentDateTime.setMinutes(time.slice(3, 5));

    // console.log('Updated Bolus Time: ', currentDateTime);

    return currentDateTime.getTime();

}

