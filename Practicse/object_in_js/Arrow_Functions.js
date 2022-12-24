/*
SYNTAX:
var add=()=>{
    fun body
}
add();
if we have arguments:
var add=(argumnts)=>{
    fun body
}
add(argumnts);
*/
//ex1
var add=()=>{
    return 5+6;
}
var res =add();
console.log(res);//11

//ex2
var name1=(user)=>{
    console.log("Randwa "+user);
}
// let user="sagar";m1
// var u_name=name1(user);
console.log(name1("sagar"));//m2
// MORE short form ex3
add1=(x,y)=>x+y;//since one statement inside fun so no {}
var res =add(5,6);
console.log(res);//11
