
  console.log("I'm ready!");
  

// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "David";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length<hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let spacedOut = "";
for (let i=0; i<hacker1.length; i++){
    // Iteration 3.1 'Name' to 'N A M E'
    spacedOut = spacedOut.concat(hacker1[i]," "); 
    spacedOut.trim();
}console.log(spacedOut.toUpperCase());

// Iteration 3.2 'Name' to 'emaN'

let reverseName = "";
for (let i=hacker1.length-1; i>=0; i--){
    // Iteration 3.1 'Name' to 'N A M E'
    reverseName = reverseName+hacker1[i]
}console.log(reverseName);

// Iteration 3.3 Lexicographic order
if(hacker1<hacker2){
    console.log(`The driver's name goes first.`)} 
    else if (hacker1>hacker2)
    {console.log(`Yo, the navigator goes first definitely.`)} 
    else{console.log(`wrong`)}

// Bonus 1: Lorem ipsum counter
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let countWords=text.split(" et ").length - 1;
console.log(countWords);

// Bonus 2: Palindromes

