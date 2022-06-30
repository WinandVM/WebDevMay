import { faker } from '@faker-js/faker'


const generateUser = () => {
    let userAndPass = `${faker.internet.userName()}:${faker.internet.password()}`
    return userAndPass
}

let i = 0
while (i < 20) {
    console.log(generateUser())

    i++
}