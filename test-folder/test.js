const { lookupMobileOperator } = require("../dist/index.js");

console.log("Testing mobile operator lookup...\n");

console.log("Africell Example (+23277123456):");
console.log(lookupMobileOperator("+23277123456"));
console.log();

console.log("Qcell Example (+23231123456):");
console.log(lookupMobileOperator("+23231123456"));
console.log();

console.log("Orange Example (+23278123456):");
console.log(lookupMobileOperator("+23278123456"));
console.log();

console.log("Invalid Number Example (+1234567890):");
console.log(lookupMobileOperator("+1234567890"));
console.log();

console.log("All tests completed!");  