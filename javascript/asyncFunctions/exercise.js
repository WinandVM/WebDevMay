const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ]

// https://jsonplaceholder.typicode.com/users
// async function 

// 1 will take users

// 2 find the user by id

// 3 update a property value of a single user

// 4 return updated user object (printerService)

async function getUsers(usersArr){
    return await usersArr
}

function GetUserById(arr,id){
    let user = arr.filter(user => user.id === id)
    console.log('helloooooooooooooooooooooooooo')
    return user
}

function GetObjectAndUpdatePropertyValue(user,property,value){
    user[property] = value
    return user
}

function PrintService(response){
    console.log(response)
}

getUsers(users)
.then(data=>GetUserById(data,2))
.then(data=>GetObjectAndUpdatePropertyValue(data[0],'username','Joe Dalton'))
.then(PrintService)


const user = [{
    name:'x',
    username:'y'
}
]
user[0]['name'] = 'Joe'
console.log(user)
console.log(users)