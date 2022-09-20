// mongodb://localhost:27017

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017', (err) => {
        if (err) {
            console.log("connecttion error")
        } else {
            console.log("connected!!")
        }
    });
 
}


   // create your schema here!
   const users = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: String,
    age: Number,
    isAdmin: Boolean
})

// compile it to model
const Users = mongoose.model('Users',users)

// create a record 
const user1 = {
    username:'root',
    password:'123456',
    age:18,
    isAdmin:true
}
const _user1 = new Users(user1)

// _user1.save()
// .then(res=>{
//     console.log(res,'saved')
// })

Users.find({})
.then(users=>{
    console.log(users)
})

// _user1.save()
// .then(res=>console.log(res,'saved'))


// save when username is unique
// Users.findOne({
//     username:'admin'
// })
// .then(user=>{
//     if(user!==null){
//         console.log('username is exist')
//     }else{
//         console.log('username is available')
//         // save
//         new Users({
//             username:'root',
//             password:'3434',
//             age:30,
//             isAdmin:true
//         }).save().then((newUser)=>console.log(newUser))
//     }
// })


// Users.find({})
// .then(res=>{
//     console.log(res) // all records
// })

// Users.find({
//     _id:'63285dd72c96982457acdc26'
// })
// .then(res=>{
//     console.log(res)
// })

// Users.find({
//     username:'joe'
// })
// .then(res=>{
//     console.log(res)
// })

// find by id and delete them
// Users.findByIdAndDelete('63285d3742b46f3d0b636452')
// .then(res=>{
//     console.log(res,' record is deleted')
// })

// delete all records 
// Users.deleteMany({},(err)=>{
//     console.log('deleted!!!')
// })