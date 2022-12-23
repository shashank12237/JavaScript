/*
User Input 
You should have noted that prompt returns the user input as a string, 
but what if you want the user input to return a number instead of a string? 
You can convert the string to an integer using "parseInt()"
readLine(prompt): Reads a string value from a user
readInt(prompt): Reads an integer value from a user
readFloat(prompt): Reads a float value from a user
*/
//var age=prompt('enter ur age ');
var age=19;
if(parseInt(age) > 18)
{
    console.log("u r eligible to vote");

}
else
console.log("not eligible to vote");
var n1=33;
var n2=63;
var n3=93;
if(n1>n2 && n1>n3)
{
    console.log(n1+" is gretest");
}
else if(n2>n1 && n2>n3)
{
    console.log(n2+" is gretest");
}
else
console.log(n3+" is greatest");
