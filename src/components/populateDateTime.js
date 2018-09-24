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