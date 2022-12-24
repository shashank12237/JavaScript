//nested object
let airlines={
    name:"shashank",
    arrival:{
        time:"8:05",
        stn:"prayagraj"
    },
  
    dep:{
        time:"9:05",
    stn:"bhopal"    }
    
}
let x=airlines;
console.log(x);
//fetch arrival
console.log();
console.log(airlines.arrival);
console.log();
//fetching particulr details of arrival 
console.log("arrival stn "+airlines.arrival.stn);

//fetch dep
console.log();
console.log(x.dep);
console.log("***updating****");

//update bhopal to pune
x.dep.stn="pune";
console.log(x.dep);
//add new detail status
console.log("***adding new key:valuei.e status in arrival****");
airlines.arrival.status="On time"
console.log(x.arrival.status);
console.log("***adding new key:valuei.e status in dep****");
x.dep.status="half-n-hr late";
console.log(x.arrival.status);
//add age
console.log();
x.age="age is : 27 yrs";
console.log(x.age);
console.log();

//for in loop
for(key in airlines)
{
    console.log(key,airlines[key]);
    
}
//checking length
console.log();
console.log(x.arrival.stn.length);
console.log();
//delete age
console.log(delete airlines.age);
console.log(x);

//if any property not exist then it will show error
//to avoid this use "?" symbol
console.log(airlines?.arrival1);//using "?"==> undefined
//display only arrival details via for in loop
for(key in airlines.arrival)
{
    console.log(key,x.arrival[key]);
}
