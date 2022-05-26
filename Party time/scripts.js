//Selectors

const birthDay = document.querySelector('[data-bDay]');
const birthTime = document.querySelector('[data-bTime]');
const submitButton = document.querySelector('[data-bButton]');
const form = document.querySelector('[data-form]');
const birthDayList = document.querySelector(".birtday_info");
const timeList = document.querySelector(".time_info");
let birthDayInfo;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getBdayInfo(submitAction) {

    submitAction.preventDefault(); //prevent the form from reloading the page

    //Fixed values
    const milisecsToDays = (1000 * 60 * 60 * 24);//Convert miliseconds to days = 1000 milliseconds * 60 seconds in a minute * 60 minutes in an hour * 24 hours in a day
    const todayYear = new Date().getFullYear(); //Current year
    const todayDays = Math.floor((new Date().getTime()) / milisecsToDays); //get the number of days since 1/1/1970 
    const todayMinutes = (new Date().getTime()) / (1000 * 60) //get the number of minutes since 1/1/1970
    const tenKDays = (10000 * 24 * 60 * 60 * 1000) //10,000 days in miliseconds
    const twentyKDays = (20000 * 24 * 60 * 60 * 1000) //20,000 days in miliseconds
    const fiveHundredThousandHours = (500000 * 60 * 60 * 1000) //500,000 hours in miliseconds
    const oneMillionMinute = (1000000 * 60 * 1000) //1,000,000 minutes in miliseconds
    const tenMillionMinute = (10000000 * 60 * 1000) //10,000,000 minutes in miliseconds
    const fiftyMillionMinute = (50000000 * 60 * 1000) //50,000,000 minutes in miliseconds
    const oneBillionSecond = (1000000000000) //1,000,000,000 seconds in miliseconds
    const dayOfBirth = new Date(birthDay.value)

    //get the values from the form
    const bYear = birthDay.value.slice(0, 4); //get the year from the input
    const bMonth = birthDay.value.slice(5, 7); //get the month from the input
    const bDay = birthDay.value.slice(8, 10); //get the day from the input

    //calculate the age in years
    const yearsOld = todayYear - bYear;

    //calculate the age in days
    const month = months[bMonth - 1];

    //calculate the age in days
    const daysOld = Math.floor(todayDays - (dayOfBirth.getTime()) / milisecsToDays);

    //calculate the age in minutes
    const minutesOld = (Math.floor((todayMinutes - (dayOfBirth.getTime()) / (1000 * 60))))-360;

    //calculate the day #10000
    const day10000 = new Date(dayOfBirth.getTime() + tenKDays);

    //calculate the day #20000
    const day20000 = new Date(dayOfBirth.getTime() + twentyKDays);

    //calculate the hour #500,000
    const hour500000 = new Date(dayOfBirth.getTime() + fiveHundredThousandHours);

    //calculate the minute #1,000,000
    const minute1000000 = new Date(dayOfBirth.getTime() + oneMillionMinute);

    //calculate the minute #10,000,000
    const minute10000000 = new Date(dayOfBirth.getTime() + tenMillionMinute);

    //calculate the minute #50,000,000
    const minute50000000 = new Date(dayOfBirth.getTime() + fiftyMillionMinute);

    //calculate the second #1,000,000,000
    const second1000000000 = new Date(dayOfBirth.getTime() + oneBillionSecond);

    return birthDayInfo = {
        month,
        day: bDay,
        yearsOld,
        daysOld,
        minutesOld,
        day10000,
        day20000,
        hour500000,
        minute1000000,
        minute10000000,
        minute50000000,
        second1000000000,

    }

    //is or was
}

function showInfo(submitEvent){
    getBdayInfo(submitEvent);
    
    //create the list with the info of the birthday
    birthDayList.innerHTML = `
            <li>Your birthday is ${birthDayInfo.month} ${birthDayInfo.day}</li>
            <li>You're ${birthDayInfo.yearsOld} years old</li>
            <li>You're ${birthDayInfo.daysOld} days old</li>
            <li>You're ${birthDayInfo.minutesOld} minutes old</li>
    `;

    //create the list with the info of the time, basically play around with seconds, hours, days and months
    timeList.innerHTML = `
            <li>Your 10,000th day ${(new Date().getTime() - birthDayInfo.day10000.getTime()) < 0 ? "is" : "was" } ${days[birthDayInfo.day10000.getDay()]} ${months[birthDayInfo.day10000.getMonth()]} ${birthDayInfo.day10000.getDate()} ${birthDayInfo.day10000.getFullYear()}<li>

            <li>Your 20,000th day ${(new Date().getTime() - birthDayInfo.day20000.getTime()) < 0 ? "is" : "was" } ${days[birthDayInfo.day20000.getDay()]} ${months[birthDayInfo.day20000.getMonth()]} ${birthDayInfo.day20000.getDate()} ${birthDayInfo.day20000.getFullYear()}</li>

            <li>Your 500,000th hour ${(new Date().getTime() - birthDayInfo.hour500000.getTime()) < 0 ? "is" : "was" } ${days[birthDayInfo.hour500000.getDay()]} ${months[birthDayInfo.hour500000.getMonth()]} ${birthDayInfo.hour500000.getDate()} ${birthDayInfo.hour500000.getFullYear()}</li>

            <li>Your one millionth minute ${(new Date().getTime() - birthDayInfo.minute1000000.getTime()) < 0 ? "is" : "was" } ${days[birthDayInfo.minute1000000.getDay()]} ${months[birthDayInfo.minute1000000.getMonth()]} ${birthDayInfo.minute1000000.getDate()} ${birthDayInfo.minute1000000.getFullYear()}</li>

            <li>Your ten millionth minute ${(new Date().getTime() - birthDayInfo.minute10000000.getTime()) < 0 ? "is" : "was" } ${days[birthDayInfo.minute10000000.getDay()]} ${months[birthDayInfo.minute10000000.getMonth()]} ${birthDayInfo.minute10000000.getDate()} ${birthDayInfo.minute10000000.getFullYear()}</li>

            <li>Your fifty millionth minute ${(new Date().getTime() - birthDayInfo.minute50000000.getTime()) < 0 ? "is" : "was" } ${days[birthDayInfo.minute50000000.getDay()]} ${months[birthDayInfo.minute50000000.getMonth()]} ${birthDayInfo.minute50000000.getDate()} ${birthDayInfo.minute50000000.getFullYear()}</li>

            <li>Your one billionth second ${(new Date().getTime() - birthDayInfo.second1000000000.getTime()) < 0 ? "is" : "was" } ${days[birthDayInfo.second1000000000.getDay()]} ${months[birthDayInfo.second1000000000.getMonth()]} ${birthDayInfo.second1000000000.getDate()} ${birthDayInfo.second1000000000.getFullYear()}</li>
                `;
    
}

//add event listener
form.addEventListener('submit', showInfo);
