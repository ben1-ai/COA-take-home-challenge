const transformString = (str) => {
  const length = str.length;

  if (length % 3 === 0 && length % 5 === 0) {
    let reversedString = "";
    for (let i = length - 1; i >= 0; i--) {
      reversedString += str[i];
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += reversedString.charCodeAt(i) + " ";
    }
    return result.trim();
  } else if (length % 3 === 0) {
    let reversedString = "";
    for (let i = length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  } else if (length % 5 === 0) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += str.charCodeAt(i) + " ";
    }
    return result.trim();
  } else {
    return str;
  }
};
