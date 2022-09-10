var cities=['Bangalore','Belgaum','Bijapur','Hasan','tumkur']
let newcities:string[]=[];
cities.forEach((city:string)=>{
    if(!city.startsWith('Z'))
    newcities.push(city);
});

newcities.forEach(city=>console.log(`Cities ${city}`));

