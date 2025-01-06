var isPalindrome=(str)=> {
  let str1 = "";
  for (i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
//   console.log(str1);
  if(str1==str){
    console.log(`${str} is a palindrome`);
  }
  else{
    console.log(`${str} is not a palindrome`)
  }
}
isPalindrome("level");
isPalindrome("malayalam")




