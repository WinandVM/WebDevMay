let result;
let lead = document.querySelector('.lead');
let date = new Date();


// get full year
result = date.getFullYear();
lead.innerHTML = result

// get month 
lead.innerHTML = date.getMonth();

// toLocaleString
result = date.toLocaleString();
// lead.innerHTML = date.toLocaleString();
lead.innerHTML = date.toLocaleString('nl-BE', { timeZone: 'Europe/Brussels', day: '2-digit', month: 'long', year: 'numeric' });


// window.setInterval(UpdateTime, 1000)

// function UpdateTime() {
//     let date2 = new Date()
//     var hours, minutes, seconds;
//     hours = date2.getHours();
//     minutes = date2.getMinutes();
//     seconds = date2.getSeconds();
//     lead.innerHTML = `${hours}:${minutes}:${seconds}`
// }

var DaysInNederlands= ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];

lead.innerHTML = DaysInNederlands[date.getDay()];

result = date.setFullYear(2021,01,01)

console.log(result)