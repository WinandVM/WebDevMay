const mongoose = require('mongoose')
// npm i prompt
const prompt = require('prompt')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/customers');
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
function isCustomerExist(fullname) {
    return Customer.exists({
        fullname: fullname
    })
        .then(res => res)
}

prompt.start();

function AddCustomer() {
    prompt.get(['fullname', 'email', 'phone', 'address', 'website'], (err, customer) => {
        // console.log(customer)
        // create obj from model
        const customerObj = new Customer(customer)
        isCustomerExist(customer.fullname)
            .then(fullname => {
                fullname === null ?
                    EmailValidation(customer.email) ?
                        customerObj.save()
                            .then(data => console.log("Customer is saved!"))
                        :
                        console.log("Invalid Email")
                    :
                    console.log('fullname is not available')
                // clear console after 2 seconds
            })
            .finally(() => setTimeout(() => {
                console.clear()
                Menu()
            }, 2000))

    })
}

function GetAllCustomers() {
    Customer.find({})
        .then(data => {
            data.forEach(customer => {
                console.table({
                    fullname: customer.fullname,
                    email: customer.email,
                    phone: customer.phone,
                    address: customer.address,
                    website: customer.website
                })
            })
        })
        .finally(() => {
            console.log('To return menu press 0')
            prompt.get(['return'], (err, answer) => {
                if (answer.return === '0') {
                    console.clear()
                    Menu()
                }
            })
        })
}

function Menu() {
    console.log(`1. Add Customer\n2. Update Customer\n3. Delete Customer\n4. Get Customers\n5. Exit`)
    prompt.get(['option'], (err, opt) => {
        switch (opt.option) {
            case '1':
                // console.log('Add Customer')
                AddCustomer()
                break;
            case '2':
                console.log('Update Customer')
                Menu()
                break;
            case '3':
                console.log('Delete Customer')
                Menu()
                break;
            case '4':
                GetAllCustomers()
                break;
            case '5':
                console.log("Exit")
                process.exit()
            default:
                console.log('Invalid Option')
                Menu()
        }
    })
}

Menu()