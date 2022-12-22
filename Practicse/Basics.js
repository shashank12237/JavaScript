// alert("hello world");
console.log("3"/"2");
console.log();
//variables:
var number1=10;
var number2=20;
console.log(number1+number2);//treats it as number
var n1="12";
var n2="22"
console.log(n1+n2);//treat it as string
var string=1;
var string=2;
console.log(string+string);//considering the latest assigned value of var string
//also its doent show any error if we defined sam var name multiple times 
//the only thing it will consioder the latest one
/*
also we came to know that javascript too has datatypes
Primitive types:
1 string 2 number 3 boolean 4 null 5 undefined 6 bigint 7 Symbol
Non primitive(Complex)typeof
1 Object
*/
//Numbers
var number1=100;
var number2=200;
console.log(number1+number2);//300
//String
var n1="12";
var n2="22"
console.log(n1+n2);//1222 concated

//Boolean
var a =true;
var b=false;
console.log(a);//true
var c = 5>6;
console.log(c);//false
console.log(typeof c);//boolean

console.log(a , b);//true false
//object
var marks={
    // ravi= 94,==>SyntaxError: Invalid shorthand property initializer
    ravi:94,//also coma is given
    shubham:96,
    sks:90
}
console.log(marks);//{ ravi: 94, shubham: 96, sks: 90 }
//console.log(ravi+shubham);==>ReferenceError: ravi is not defined
var a =0xff;
console.log(a);//o/p==>255 js onverts hexadecimal to decimal 
//==>15*16 + 15 = 255 (base 10)
var b=0377;
console.log(b);
//escape sequences
console.log("shashank \t kumar singh");// \t==> tab space
console.log("shashank kumar \"Singh\" ");//shashank kumar "Singh"

