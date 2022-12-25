/*
we will use this keyword
compare one obj with another
but before doing it we will do by help of if else
*/

let laptop1={
    cpu:"i9",
    ram:16,
    brand:"hp",
    compare:function(other){
        if(this.cpu>other.cpu)
        {
            console.log(this);
        }
        else{
            console.log(other);
        }
    },
    config:function()
    {
        console.log(this.cpu);
       
    }
}
let laptop2={
    cpu:"i7",
    ram:16,
    brand:"dell",
//    function:this.compare(other),error
    
    config:function()
    {
        console.log(this.cpu);
        //console.log(laptop.cpu);
    }
}
//comparing on the basis of cpu performance
/*
if(laptop1.cpu > laptop2.cpu)
{
    console.log(laptop1);
}
else{
    console.log(laptop2);
}
*/
//using compare method
laptop1.compare(laptop2);//will go to laptop1 fr comapre fun
//what if i want to do:laptop2.compare(laptop1);
//should we write whole compare methd in object laptop2???
//no we just call the compare methd in laptop 2