// ***********Using Watch Mode
// run w/: tsc app.ts
console.log('Time to get started...');

// enter watchmode: tsc app.ts -w and compile the following
// automatically refreshes in browser w/o navigating folder
let username: number;

function convertToNum(str: string) {
    username = +str;
    console.log(username);
}
convertToNum("89");



// ! SEE analytics.ts