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

//Task 5: Logical Operators

let hasKeyCard = true;
let hasPermission = false;


let canAccessSecureAre = hasKeyCard && hasPermission
console.log("Access to secure areas:", canAccessSecureAre); //prints true or false if they have keycard and perms or not

let canAccessGeneralArea = hasKeyCard || hasPermission;
console.log("Has access to unrestricted areas:", canAccessGeneralArea); //allows access to general area with keycard

let reversedPermisiion = !hasPermission
console.log("Reversed Permission:", reversedPermisiion); //reverses permission value and checks again

let accessWithReversedPermssion = hasKeyCard && reversedPermisiion;
console.log("Has access with reversed permission:", accessWithReversedPermssion); //if someone has reversed perms and keycard it prints true