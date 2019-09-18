// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const cool = async () => {
 return new Promise(resolve => {
   setTimeout(() => Promise.resolve('hai'), 10000);
 });
}

let test = async () => {
let result = await cool();
console.log(result);
}

test();