const mongoose = require('mongoose');

// add data
// isCustomerExist(customer1.fullname)
// .then(res=>{
//     if(res!==null){
//         console.log('customer already exist')
//     }else{
//         if (EmailValidation(customer1.email)) {
//             //  save to db
//             console.log('true')
//             customer1.save()
//             .then(data=>{
//                 console.log(data, "SAVED")
//             })
//         } else {
//             console.log("Please enter a valid email")
//         }
//     }
// })

// update data
// Customer.findByIdAndUpdate('63297bd558da0f8f678b4c10',{
//     email:"michael@gmail.com",
//     website:"www.michael.com"
// })
// .then(data=>console.log(data,"updated"))

// Customer.findByIdAndUpdate('63297bd558da0f8f678b4c10',{
//     email:'michael@hotmail.com'
// })
// .then(data=>console.log("updated"))


// delete data
// Customer.findByIdAndDelete('63297bd558da0f8f678b4c10')
// .then(data=>console.log(data,"deleted"))

// find data
// Customer.find({
//     _id:'63297bd558da0f8f678b4c10'
// }).then(data=>console.log(data))

// 3 Customer-1 user object
// const customerObj = {
//     fullname: 'Hande Jackson',
//     email: 'john@gmail.com',
//     phone: '1234567890',
//     address: '1234 Main St',
//     website: 'www.john.com'
// }


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/customers', (err) => console.log('connected to db'));
}

// 1. create a schema
const customerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    address: String,
    website: String
})

// 2. compile schema to model
const Customer = mongoose.model('Customer', customerSchema)

// email validation
function EmailValidation(email) {
    let domains = ['gmail.com', 'hotmail.com']

    let foundEmail = domains.filter(domain => domain === email.split('@')[1])
    // console.log(foundEmail)
    if (foundEmail.length > 0) {
        return true
    } else {
        return false
    }
}

// userValidation

function isCustomerExist(fullname){
    return Customer.exists({
        fullname:fullname
    })
    .then(res=>res)
}



// 4 create an object from model
// const customer1 = new Customer(customerObj)


