function isPalindrome(str) {
    // remove all 
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  const reversedStr = cleanStr.split("").reverse().join("");
  
  return cleanStr === reversedStr;
}
