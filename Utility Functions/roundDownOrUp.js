let number = 2.3;

//Round Down
let roundedDown = number - (number % 1);
console.log('roundedDown', roundedDown);

//Round Up
let roundedUp = ++number - (number % 1);
console.log('roundedUp', roundedUp);
