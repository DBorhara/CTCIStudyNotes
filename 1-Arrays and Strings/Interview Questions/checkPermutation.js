// Given two strings, write a method to decide if one is a permutation of the other

const checkPermutation = (str1, str2) => {
  if (str1.length === 0 && str2.length === 0) {
    console.log(true);
    return true;
  }
  if (str1.length !== str2.length) {
    console.log(false);
    return false;
  }

  let str1Map = new Map();

  for (let i = 0; i < str1.length; i++) {
    let curLetter = str1[i];
    if (str1Map[curLetter]) {
      str1Map[curLetter]++;
    } else {
      str1Map[curLetter] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const curLetter = str2[i];
    // console.log('str1Map', str1Map);

    if (str1Map[curLetter]) {
      str1Map[curLetter]--;
    } else {
      console.log(false);
      return false;
    }
  }

  // console.log('str1Map', str1Map);
  console.log(true);
  return true;
};

checkPermutation('abc', 'bca');
checkPermutation('aaa', 'baa');
checkPermutation('', '');
checkPermutation('abcdef', 'abc');
