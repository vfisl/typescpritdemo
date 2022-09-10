var cities = ['Bangalore', 'Belgaum', 'Bijapur', 'Hasan', 'tumkur'];
let newcities = [];
cities.forEach((city) => {
    if (!city.startsWith('Z'))
        newcities.push(city);
});
newcities.forEach(city => console.log(`Cities ${city}`));
