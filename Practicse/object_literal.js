// object literals ==> here we have to define all the propertirs of an obj
/*
    syntax:

    let/var <obj_name> ={
        key:value,
        key:value
    };

    nested:
    var <obj1_name>
    {
        key:value,
        key:value,
        <obj2_name>{
            key:value,
        key:value
        }
    };
*/
let airlines={

    dep_stn:"Prayagraj",
    time:"12/10/2022 : 8:5 pm",
    arr_stn:"bhopal",
    time:"12/10/2022 : 9:5 pm",
};
//to fetch it
console.log(airlines);
//to fetch particular detail
console.log(airlines.arr_stn);

// to update any particular property
//suppose we have to update arrival_destintn
airlines["arr_stn"]="pune";
console.log(airlines);

// add a new key and value
airlines.status="on time";
console.log(airlines);

//creating a ref
var x=airlines;
console.log(x);//will print all details
console.log(x.time)//will print time

//adding new key and values via ref
x.fname="shashank";
console.log(x);