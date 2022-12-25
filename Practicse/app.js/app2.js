function Destination(a,b)//ctor
{
    this.a=a;
    this.b=b;
    this.transport=function()
    {
        console.log("by train");
    }
}
//creating object:
let Destination1=new Destination("manali","kasaul");//obj1
let Destination2=new Destination("shimla","dehradun");//obj2
console.log(Destination1);
//changing value
Destination1.b="kathmandu";
console.log(Destination1);

