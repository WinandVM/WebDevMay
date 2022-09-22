const mongoose = require('mongoose')
const budgetSchema = new mongoose.Schema({
    username: String,
    expenses:{
        type:Array,
    },
    income:{
        type:Array,
    },
    balance:Number
})


const BudgetModel = mongoose.model('budget', budgetSchema)

module.exports = BudgetModel