// ***********Using Watch Mode
// run w/: tsc app.ts
// console.log('Time to get started...');

// enter watchmode: tsc app.ts -w and compile the following
// automatically refreshes in browser w/o navigating folder
// let username: number;

// function convertToNum(str: string) {
//     username = +str;
//     console.log(username);
// }
// convertToNum("89");

// const button = document.createElement('button');

// button.addEventListener('click', () => {
//     console.log("Click me!");
// });


// ! SEE analytics.ts

let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log('Clicked! ' + message);
}
// a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
