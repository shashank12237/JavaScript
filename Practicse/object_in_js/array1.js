let arr=new Array();//m1
let array=[];//m2
//both r same
//m1
let fruit=new Array();
fruit=["grapes","avagardo","guavava"];
console.log(fruit,typeof fruit);
//m2
let fruits=["apple","banana","peach"];
console.log(fruits[0]);
console.log(fruits);
/*
Some programming languages allow to use negative indexes for the same purpose, like fruits[-1].

Although, in JavaScript it won’t work. 
The result will be undefined,
 because the index in square brackets is treated literally.

 In other words, arr.at(i):

is exactly the same as arr[i], if i >= 0.
for negative values of i, it steps back from the end of the array.
*/
console.log(fruits.length);//3
console.log(fruits[fruits.length-1]);//peach
console.log(fruits.length-1);//2

console.log(fruits.at(-1));//peach
console.log(fruit.at(1));//avagadro
//push
fruits.push("grapes");//grapes added at last
console.log(fruits);
fruits.pop();
console.log(fruits);