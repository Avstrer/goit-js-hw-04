function isEnoughCapacity(products, containerSize) {

  const values = Object.keys(products);
  
  let total = 0;

  for (const key of values) {
  
    total += products[key];
    
  }
  
  return true ? total <= containerSize : false;
 }
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
console.log(
  isEnoughCapacity({ apples: 3, potatoes: 3, oranges: 1 }, 7)
); // true