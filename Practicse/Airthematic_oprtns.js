//predefined airthematic functions
var a = Math.pow(5,2);
console.log(a);
b=Math.pow(5.5,2);
var b=Math.round(Math.pow(5.5,2));

console.log(b);
//date api==> Date()==>ctor
/*
In JavaScript, date objects are created with new Date().

new Date() returns a date object with the current date and time.

Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/
var now=new Date();//2022-12-22T10:52:12.535Z
console.log(now);
var e=now.getTime();//gives present time
console.log(e);//gives present time
//OR
console.log(now.getTime())//gives present time

console.log(now.getFullYear());//2022
console.log(now.getMonth());//11==>means dec cz it starts from 0 i.e january
