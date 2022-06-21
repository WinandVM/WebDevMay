const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    address:{
        city: 'Lviv',
        street: 'Shevchenko',
    }
}

const student1= {
    x:'John',
    y:30,
    z:false
}

//console.log("Result", student['isAdmin'])

function UpdateData(obj,key,newValue){
    return obj[key] = newValue;
}



UpdateData(student,'address',{city:'Brussels',street:'Stalingrad'})
UpdateData(student,'courses',['python','django'])
UpdateData(student1,'x','Joe Dalton')
//console.log(student1)

// for in
for(var key in student){
   // console.log(key)
   // console.log(student[key])
    if(key === 'address'){
        for(var key2 in student[key]){
         //   console.log(student[key][key2])
            
        }
    }
}

function UpdateObjectData(obj,key,newValue){}
// for of
// for (var key of Object.entries(student)){
//     console.log(key)
// }

for (var key of Object.keys(student)){
    console.log(key)
    console.log(student[key])
}
// console.log(Object.entries(student)[0][1])
// console.log(Object.keys(student))
