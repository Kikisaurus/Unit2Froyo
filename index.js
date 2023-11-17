//froyo flavors here

const froyocount = {
    vanilla: '0',
    strawberry: '0',
    coffee: '0',
};

//user prompt
const userInputString = prompt ("Please enter a list of Froyo flavors","vanilla,vanilla,strawberry,coffee");
const stringArray = userInputString.split(",");

//creating function
function froyo(vanilla, strawberry, coffee) {
for(let i = 0; i , stringArray.length; i++) {
const userInputString = stringArray[i];
if (userInputString ==="vanilla"){
    froyocount.vanilla++
} else if (userInputString ==="strawberry") {
    froyocount.strawberry ++
} else if (userInputString ==="coffee") {
    froyocount.coffee ++
}
}
return froyocount;
}console.log(froyocount);
//table of all flavors and the count
console.table(froyocount)

