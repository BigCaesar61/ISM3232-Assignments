//Task 1: Variables and Data Types

let employeeName = "John Doe";
const employeeID = 1;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));




//Task 2: Compound Data Types

let products = ["Paper, Stapler, Markers"]
const productDetails = {
name: products,
price: 6.60,
inStock: 720


}

console.log(products, productDetails);


//Task 3: Assignment Operators

let accountBalance = 10000

accountBalance += 500; //deposit
console.log("deposit", accountBalance);

accountBalance -= 250; //withdrawl
console.log("withdrawl", accountBalance);

accountBalance *= 1.05; //5% interest rate
console.log("interest", accountBalance);

accountBalance /= 2; //dividing account in half if there was maybe two customers using the same account
console.log("divide", accountBalance);

accountBalance %= 100; //Find the remandier of the account if divided by 100
console.log("modulus", accountBalance);


//Task 4: Comparison Operators

let employeeScore1 = 50;
let employeeScore2 = 25;


console.log("Employee 1 > Employee 2:", employeeScore1 > employeeScore2);
console.log("Employee 1 < Employee 2:", employeeScore1 < employeeScore2);
console.log("Employee 1 >= Employee 2:", employeeScore1 >= employeeScore2);
console.log("Employee 1 <= Employee 2:", employeeScore1 <= employeeScore2);
console.log("Employee 1 === Employee 2:", employeeScore1 === employeeScore2);
console.log("Employee 1 !== Employee 2:", employeeScore1 !== employeeScore2);

