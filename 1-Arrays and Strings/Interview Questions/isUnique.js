// Implement an algorithm to deteminte if a string has all unique characters.

// What if you cannot use additional data structures?

const isUnique = (str) => {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let curLetter = str[i];

    if (map[curLetter]) {
      console.log('false');
      return false;
    } else {
      map[curLetter] = 1;
    }
  }
  console.log('true');
  return true;
};

isUnique('abc');
isUnique('aaab');
isUnique('abcacb');
