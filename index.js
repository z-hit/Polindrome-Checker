function palindrome(str) {
  
var pureStr1 = str.toLowerCase().match(/[a-z]|[A-Z]|[0-9]/g);

var pureStr2 = [];
pureStr1.forEach(function(letter) {
    pureStr2.unshift(letter);
  })

 return pureStr1.join('') === pureStr2.join('') ? true : false;

  console.log(pureStr1);
  console.log(pureStr2);
}



palindrome("nope");
