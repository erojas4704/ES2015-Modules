import fruits from "./foods.js";
import { remove, choice } from "./helpers.js";

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
remove(fruits, randomFruit);

console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);

