import index from './index.js';


console.log(index.generateUniqueID("Alan", "Turing"));

console.log(index.addAccount(["Alan","Turing","atruing@w3c.com",58]));

console.log(index.addAccount(["Alan","Turing","atruing@w3c.com"]));
console.log(index.addAccount(["Alan","","atruing@w3c.com",58]));
console.log(index.addAccount(["Alan","Turing","atruing",58]));
console.log(index.addAccount(["Alan","Turing","atruing@w3c.com",12]));