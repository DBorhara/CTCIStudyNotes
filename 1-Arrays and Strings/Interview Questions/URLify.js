/* Write a method to replace all spaces in a string with '%20 You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
 EXAMPLE
 Input: "Mr John Smith     ", 13
 Output:"Mr%20John%20Smith"
*/

const URLify = (str) => {
  str = str.padEnd('');
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    let nextElement = str[i + 1];

    if (element === ' ' && nextElement === ' ') {
      console.log(newStr);
      return newStr;
    } else if (element === ' ') {
      newStr += '%20';
    } else {
      newStr += element;
    }
  }

  console.log(newStr);
  return newStr;
};

URLify('Mr John Smith     ');
