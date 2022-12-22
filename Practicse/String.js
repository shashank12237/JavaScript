/*
var s = "hello, world" // Start with some text.
s.charAt(0) // => "h": the first character.
s.charAt(s.length-1) // => "d": the last character.
s.substring(1,4) // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.indexOf("l") // => 2: position of first letter l.
s.lastIndexOf("l") // => 10: position of last letter l.
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
38 | Chapter 3: Types, Values, and Variables
s.split(", ") // => ["hello", "world"] split into substrings
s.replace("h", "H") // => "Hello, world": replaces all instances
s.toUpperCase()
*/
var str= "I am known as Shashank";
console.log("charctr is "+str.charAt(1),str.charAt(2));
console.log(str[0]);//first charatr
console.log(str[str.length-1]);//k==> last charactr
/*
Whenever you try to
refer to a property of a string s, JavaScript converts the string value to an object as if by
calling new String(s). This object inherits (see §6.2.2) string methods and is used to
resolve the property reference. Once the property has been resolved, the newly created
object is discarded. (
*/
