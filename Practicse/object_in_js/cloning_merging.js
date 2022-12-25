let a={
user_fname:"shashank",
user_lname:"singh"
}
let b=a;
console.log(a);
console.log(a==b);
console.log(a==b);
b.user_lname="Rajput"
console.log(b);
/*
{ user_fname: 'shashank', user_lname: 
'singh' }
true
true
{ user_fname: 'shashank', user_lname: 
'Rajput' }
a====>user_fname,user_lname<==============b
*/
//what if we need to duplicate obj
let clone={};
//now copy all details of 'a' into clone
for(key in a)
{
    clone[key]=a[key];
} 
console.log(clone);
clone.user_lname="Sisodhiya";
console.log(clone);//{ user_fname: 'shashank', user_lname:'Sisodhiya' }
console.log(a);//{ user_fname: 'shashank', user_lname: 'Rajput' }
//see here we duplicate the object
//change in clone doest lead any change in a or b;
/*
let user = new User; // <-- no parentheses
same as
let user = new User();


*/