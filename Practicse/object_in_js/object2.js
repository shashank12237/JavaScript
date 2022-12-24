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
//console.log(x);
//fetch arrival
//console.log("arrival details "+x.arrival[arrival]);
//console.log(x.arrival.stn);
//fetch dep
//console.log("dep details "+x.dep);

//update bhopal to pune
//x.dep.stn="pune";
//console.log(x.dep);
//add new detail status
//x.arrival.status="on time";
//add age
//x.age="27";
//delete age 
for(key in airlines)
{
    console.log(key,airlines[key]);
    
}

