const prompt = require('prompt')
const db = require('./modules/db')
const BudgetModel = require('./modules/dbSchema')
db().catch(err => console.log(err));

prompt.start();


function Menu(username) {
    console.log('\x1b[33m%s\x1b[0m', `
────██──────▀▀▀██ Budget app v.1.0
──▄▀█▄▄▄─────▄▀█▄▄▄
▄▀──█▄▄──────█─█▄▄
─▄▄▄▀──▀▄───▄▄▄▀──▀▄
─▀───────▀▀─▀───────▀▀`)
    console.log('\x1b[33m%s\x1b[0m', `${username} logged in, welcome to your budget app`)
    console.log('\x1b[1m', `Please choose one of the following options:`)
    console.log('\x1b[31m', `1. Add income`)
    console.log('\x1b[31m', `2. Add expenses`)
    console.log('\x1b[31m', `3. Show balance`)
    console.log('\x1b[31m', `4. Exit`)

    // menu start here
    prompt.get(['option'], function (err, result) {
        if (err) { return onErr(err); }
        switch (result.option) {
            case '1':
                prompt.get(['income', 'category'], (err, result) => {
                    if (err) { return console.error(err) }
                    BudgetModel.findOneAndUpdate({ username: username }, { $push: { income: { amount: result.income, category: result.category } } })
                        .then(() => {
                            console.log('income added')

                        })
                        .finally(() => {
                            setTimeout(() => Menu(username), 3000)
                        })

                })
                break;
            case '2':
                prompt.get(['expense', 'category'], (err, result) => {
                    if (err) { return onErr(err) }
                    BudgetModel.findOneAndUpdate({ username: username }, { $push: { expenses: { amount: result.expense, category: result.category } } })
                        .then(() => {
                            console.log('expense added')

                        })
                        .finally(() => {
                            setTimeout(() => Menu(username), 3000)
                        })

                })
                break;
            case '3':
                BudgetModel.findOne({ username: username })
                .then(response=>{
                    let income = response.income.reduce((acc,curr)=>parseInt(acc)+parseInt(curr.amount),0)
                    let expenses = response.expenses.reduce((acc,curr)=>parseInt(acc)+parseInt(curr.amount),0)
                    console.log('income:',Math.floor(income))
                    console.log('expenses:',Math.floor(expenses))
                    console.log('balance:',Math.floor(income-expenses))
                })
            
                break;
            case '4':
                console.log('\x1b[33m%s\x1b[0m', `Thank you for using our app!`)
                break;
            default:
                console.log('\x1b[31m', `Please choose a valid option!`)
                Menu()
                break;
        }
    });
    // menu end here


}

(() => {
    console.log('\x1b[33m%s\x1b[0m', 'Login with your username')
    prompt.get(['username'], function (err, result) {
       
        BudgetModel.find({ username: result.username }, function (err, docs) {
        
            if (docs.length == 0) {
                console.log('user not found, creating new user and logging in...')
                BudgetModel.create({ username: result.username, expenses: [], income: [], balance: 0 }, function (err, small) {
                    if (err) return console.error(err);
                    setTimeout(() => {
                        Menu(result.username)
                    }, 2000)
                })

            } else {
                Menu(result.username)
            }
        })
    });
    //Menu()
})()