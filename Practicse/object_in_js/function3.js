//argument passing
/* case 1:
function add(x,y,z)
{
    console.log(x,y,z)//5 6 undefined
    return x+y+z;
}
let res=add(5,6);
console.log(res);//NaN
*/
/*
function add(x,y,z)
{
    console.log(x,y,z=0)//5 6 0==>where 1 is default value
    return x+y+z;
}
let res=add(5,6);
console.log(res);//11
*/
function add(x,y,z)
{
    console.log(x,y,z)//5 6 7
    return x+y+z;
}
let res=add(5,6,7);
console.log(res);//18
