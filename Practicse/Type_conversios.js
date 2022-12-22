var num =6;
console.log(typeof num, num);//number 6
/*
var num =6;
console.log(typeof num, num);
*/
//converting to string
var num =String(6);
console.log(typeof num, num);//string 6

//number + string==> string
let n1=6;
console.log(n1,typeof n1);//6 number
n1=n1+"";
console.log(n1,typeof n1);//6 string

//string - number==>number javascript smart enough to do it fr us
n1=n1-2;
console.log(n1,typeof n1);//4 number

//number to boolean
n1=!n1
console.log(n1,typeof n1);//false boolean

let n2="hello";
n2=Boolean(n2);
console.log(n2,typeof n2);//true boolean
//parseint
let n3=parseInt("12237Sks");
console.log(n3,typeof n3);//12237 number
let n4=parseInt("Sks12237");
console.log(n4,typeof n4);//NaN number==>it means we can only parse when starting charctrs r integers

