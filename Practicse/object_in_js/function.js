function first()
{
    console.log("hello world");
}//fun ends
first();//calling fun

//The function has full access to the outer variable. It can modify it as well.
let uname="shashank";

function user_name()
{
    console.log(" my name is "+uname);
}
//alert(uname);//o/p==> shashank 
user_name();// sks
// let uname="sks"; can't write it outside cz already uname var is defined
function user_name()
{
    uname="sks";
    // let  uname="sks"; //again created a local var of uname
    //it shadows the outer uname i.e ignores it
    console.log(" my name is "+uname);
}
user_name();

//n JavaScript, a function is a value, so we can deal with it as a value. 
//The code above shows its string representation, which is the source code.

//copying a function 
console.log("*******************");
function f1()
{
    console.log(" ok guys  ");
}
var f2=f1;// copy is created
console.log(" calling f1() ");
f1();
console.log(" calling copy f2() ");
f2();

//by telusko
function greet1()
{
   // console.log(" karanchi se salam hai bhaijaan ");//line1
   return " karanchi se salam hai bhaijaan ";
   //we can have only one return statements
}
greet1();//line 1
let str=greet1();
console.log(str);
//case:1
/*
function greet(user)
{
   
   return " hello user ";//${user} dindnt work here
  
}

let user=" Bhaijaan ";
let str1=greet(user);
console.log(str1);//hello user
 */
//but we thought o/p is bhaijaan
//reason: in greet() ==> return hello user ==> here it thinks
//that this is normal string thats why we r getting "hello user"
//not hello bhaijaan
//Solutn:
function greet(user)
{
   
   return `Salam ${user} `  ;
  
}
let user=' Bhaijaan' ;
let str1=greet(user);
console.log(str1);

