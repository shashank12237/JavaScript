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
    console.log(" ok guys ");
}
var f2=f1;// copy is created
console.log(" calling f1() ");
f1();
console.log(" calling copy f2() ");
f2();
