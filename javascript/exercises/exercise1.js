// BMI Calculator
// regular function

// weight / (height * height)

// function BMICalculator(weight,height){
//     var result = weight / (height*height)
//     return result;
// }

// let bmi = BMICalculator(68,1.72);
// console.log(bmi);

const BMICalculator = (weight,height) => {
    return weight/(height*height);
}


console.log(BMICalculator(68,1.72));


// Netto Salary calculator

// function GetNettoSalary(salary,tax){

//     let getTaxAmount = (salary*tax)/100;
//     let getNetto = salary - getTaxAmount;
//     return getNetto;

// }

// const GetNettoSalary = (salary,tax)=>{
//     let getTaxAmount = (salary*tax)/100;
//     let getNetto = salary - getTaxAmount;
//     return getNetto;
// }

// console.log("Netto salary is", GetNettoSalary(1000,21));

