//Selectors

const birthDay = document.querySelector('[data-bDay]');
const birthTime = document.querySelector('[data-bTime]');
const submitButton = document.querySelector('[data-bButton]');
const form = document.querySelector('[data-form]');
let birthDayInfo;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getBdayInfo(submitAction) {

    submitAction.preventDefault(); //prevent the form from reloading the page

    //Fixed values
    const milisecsToDays = (1000 * 60 * 60 * 24);//Convert miliseconds to days = 1000 milliseconds * 60 seconds in a minute * 60 minutes in an hour * 24 hours in a day
    const todayYear = new Date().getFullYear(); //Current year
    const todayDays = Math.floor((new Date().getTime()) / milisecsToDays); //get the number of days since 1/1/1970 
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
    const age = todayYear - bYear;

    //calculate the age in days
    const month = months[bMonth - 1];

    //calculate the age in days
    const daysOld = Math.floor(todayDays - (dayOfBirth.getTime()) / milisecsToDays);

    //calculate the age in minutes
    const minutesOld = Math.floor((todayDays - (dayOfBirth.getTime()) / milisecsToDays) * 1440);

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
        age,
        daysOld,
        dayTenThousand: `${days[day10000.getDay()]} ${months[day10000.getMonth()]} ${day10000.getDate()} ${day10000.getFullYear()}`,
        dayTwentyThousand: `${days[day20000.getDay()]} ${months[day20000.getMonth()]} ${day20000.getDate()} ${day20000.getFullYear()}`,
        hour500000: `${days[hour500000.getDay()]} ${months[hour500000.getMonth()]} ${hour500000.getDate()} ${hour500000.getFullYear()}`,
        minute1000000: `${days[minute1000000.getDay()]} ${months[minute1000000.getMonth()]} ${minute1000000.getDate()} ${minute1000000.getFullYear()}`,
        minute10000000: `${days[minute10000000.getDay()]} ${months[minute10000000.getMonth()]} ${minute10000000.getDate()} ${minute10000000.getFullYear()}`,
        minute50000000: `${days[minute50000000.getDay()]} ${months[minute50000000.getMonth()]} ${minute50000000.getDate()} ${minute50000000.getFullYear()}`,
        second1000000000: `${days[second1000000000.getDay()]} ${months[second1000000000.getMonth()]} ${second1000000000.getDate()} ${second1000000000.getFullYear()}`

    }

    //is or was
}

//add event listener
form.addEventListener('submit', getBdayInfo);
