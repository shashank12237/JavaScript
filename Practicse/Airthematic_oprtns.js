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
console.log(now.getDay());
//function to change date
var d=new Date();//object
//d=d+10;
console.log(d,typeof d);//Thu Dec 22 2022 17:10:55 GMT+0530 (India Standard Time)10
//the ==>d=d+10; oprtn is concating 
//we will use set command to make any changes
//d.setDate(d.getDate()+3);//2022-12-25 T11:46:35.341Z
// the above is used to increment our date by +3
console.log(d);

// to set date to any specific valid date
// d.setDate(03);
// console.log(d);//2022-12-03 T11:48:00.265Zp

//if we add numbers >31 then the date is increment by that number
d.setDate(93);
console.log(d);//2023-03-03T11:50:31.878Z
//see our year is increased to 2023 also our month has increased

var f=new Date('7/11/2020')
var e= new Date();
var z=e.getDate()-f.getDate();
console.log(z);
