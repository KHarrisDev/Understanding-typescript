// *****Number, String, Boolean Types & Type Basics and Inference
// *****Number Types
// No differentiation between integers or floats
// *****String Types
// All text values
// *****Boolean Types
// Only TRUE and FALSE values
// !NO truthy/falsy values

// The result in the following code would be 52.8 since the string type is added to a number type
// !TypeScript allows us to define the type of the following parameter to prevent these errors
// ? Example: an error occurred b/c "5" is a string type assigned to a number type
// function add(transaction1: number, transaction2: number) {
//   return (transaction1 + transaction2)
// }

// const firstTrans = '5';
// const secondTrans = 2.8;

// const result = add(firstTrans, secondTrans);
// console.log(result);

// ?Example: 
// function add(transaction1: number, transaction2: number, showTransaction: boolean, phrase: string) {
//   const transResult = transaction1 + transaction2;;
//   if(showTransaction) {
//     console.log(phrase + transResult);
//   } else {
//     return transResult;
//   }
// }

// const firstTrans = 5;
// const secondTrans = 2.8;
// const printTrans = true;
// const resultPhrase = 'Result is: ';

// add(firstTrans, secondTrans, printTrans, resultPhrase);





// *****Object Types
// objects types are inferred and have keys & types instead of keys & values
// to make a more generic type, assign "object" type to object
// ?  Example: Inferred object type
// const siabBox: object = {
//   name: 'Halloween In A Box',
//   price: 100,
// };
//  - assigning an object the type "object" will return the type of the object and none of the content in the object

// the content of the object can be explicitly inferred by assigning types to the key/type pairs
// this is not the best practice, better to let object infer the type
// ?  Example: Explicitly inferred type
// const person: {
//   name: string;
//   price: number;
// } = {
//   name: 'Halloween In A Box',
//   price: 100,
// };

// hobbies has the type of 'string[]' b/c of inference (an array of strings)






// *****Array types
// ?  Example: Array 
// let favoriteItems: string[];
// favoriteItems = ['Sports', 1]; //error b/c '1' is not a string
// favoriteItems = "sports"; //error b/c "sports" is not an array of strings

// const siabBox = {
//   name: 'Halloween In A Box',
//   price: 100,
//   items: ['Masks', 'Spider webs'],
// };
// console.log(siabBox);

// toUppercase is a function for strings so no error would occur since const hobby is a string
// if there was another data type in the array an error would occur
// for example, map() would show an error
// for (const item of siabBox.items) {
//   console.log(item.toUpperCase());
//   console.log(item.map()); //!error b/c you can't map strings
// }






// *****Tuples
// Tuples are a type array that has a fixed length and fixed type
// With Tuples, we can assign a specific types to the roles array
// const siabMember: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   preferences: string[];
//   role: [number, string]; // this marks a tuple type
// } = {
//   firstName: 'Roy',
//   lastName: 'Munson',
//   age: 30,
//   preferences: ['Celebrations', 'Miscellaneous'],
//   role: [567, 'standard user'],
// };

// siabMember.role.push('admin'); 
//  No error b/c typescript doesn't know we only want 2 objects. 
//  Tuple will not read certain array methods so this is still valid w/Tuple in place.
// console.log(siabMember);

// siabMember.role[1] = 10; 
//  No error if tuple isn't defined b/c typescript only knows that the array type is number or string. 
// !Error with Tuples defined b/c a number can't be swaped for a string in a tuple






// **********ENUM type
// ENUM are constants that are assigned as numbers but can also be assign a label
// Inference can be done through assigning the following variables to the object
// In the following code, role is inferred to be a number
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const siabMember = {
//   firstName: 'Roy',
//   lastName: 'Munson',
//   age: 30,
//   preferences: ['Celebrations', 'Miscellaneous'],
//   role: ADMIN,
// };

// if(siabMember.role === ADMIN) {
//   console.log("is admin")
// }

// ENUM makes this easier
// ENUM variables can be assigned numbers, then each enum defined after that would increase by one
// In the following example the enum should increase by one unless assigned a number 
// enum Role { ADMIN = 5, READ_ONLY = 100 , AUTHOR };
// const siabMember = {
//   firstName: 'Roy',
//   lastName: 'Munson',
//   age: 30,
//   preferences: ['Celebrations', 'Miscellaneous'],
//   role: Role.ADMIN,
// };

// if (siabMember.role === Role.ADMIN) {
//   console.log("is admin");
// }






// ***********Any Type
// Doesn't tell TypeScript anything
// Use "any" when you are not sure of the data type
// ?Example: no error would occur b/c "any" type is assigned so any data type can be added
// let boxes: any[];
// boxes = ["4th of July in a box", 1];
// console.log(boxes);





// ***********Union Type
// ?Example:
// b/c we can add transaction1 + transaction2, we can either get a string or number
// We assign a union type in the parameter that allows the data type to be either string or number
// We add some runtime JavaScript to make sure that either 2 strings or 2 numbers are getting added
// function add(transaction1: string | number, transaction2: string | number) {
//   let transResult;
//   if (typeof transaction1 === "number" && typeof transaction2 === "number") {
//     transResult = transaction1 + transaction2;
//   } else {
//     transResult = transaction1.toString() + transaction2.toString();
//   }
//   return transResult;
// }

// const combinedTranactions1 = add(20, 36); // 56
// const combinedTranactions2 = add('Mike', 'Vic'); // Error b/c types for parameters are set to number
// console.log(combinedTranactions1);
// console.log(combinedTranactions2);





// ************Literal Types
// Literal types are more clear on the exact values that they hold
// ? Example: We can force the conversion of a certain data type
// The literal type is the resultConversion parameter
// We set the union type in resultConversion to 2 Literal types (literal types don't have to be the product of a union type)
// If user enters as-number or as-string the data type will be converted accordingly in the add function
function add(transaction1: string | number, transaction2: string | number, resultConversion: 'as-number' | 'as-text') {
  let transResult;
  if (typeof transaction1 === "number" && typeof transaction2 === "number" || resultConversion === "as-number") {
    transResult = +transaction1 + +transaction2; //converts to number
  } else {
    transResult = transaction1.toString() + transaction2.toString(); //converts to string
  }
  return transResult;
  // if (resultConversion === "as-number"){
  //   return +transResult
  // } else {
  //   return transResult.toString();
  // }
}

const combinedTranactions1 = add(20, 36, "as-number");
const combinedTranactions2 = add('Mike', 'Vic', "as-text"); 
console.log(combinedTranactions1);
console.log(combinedTranactions2);





//*******Type alias/custom types */