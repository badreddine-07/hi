//Reverse a String
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString
}
// Methode2
function reverseString(str){
    var reversed=''
    for(var i=0;i<str.length;i++){
        reversed+=str[str.length-1-i]

    }return reversed
}
//Count Characters
function numb(str){
    console.log (str.length)
}
//Capitalize Words
function capWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
//methode2
function capWord(str) {
    var words = str.split(" ")
    var capWords = []

    for ( word of words) {
        capWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return capWords.join(" ")
}
//Find Maximum and Minimum
function minMax(arr){
    var min = arr[0]
    var max = arr[0]
    for( i=0 ; i<arr.length ; i++){
    if( min>arr[i] ){
        min = arr[i]
    }
    if( max<arr[i] ){
        max=arr[i]
    }
    }
    console.log ([ min , max ])
}
//Sum of Array
function sumArr(arr){
   var sum=0
   for(i=0 ; i<arr.length ; i++){
    sum+=arr[i]
   }
   return sum
}
//Filter Array 
function filterarr(arr){
    var newarr=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            newarr.push(arr[i])
        }
    }
    return newarr
}
//Factorial
function factorialize(num) {
    if (num < 0) 
          return -1
    else if (num == 0) 
        return 1
    else {
        return (num * factorialize(num - 1));
    }
  }
  //m2
  function factorialize(num) {
    if (num < 0) {
        return -1; 
    } else if (num === 0) {
        return 1; 
    } else {
        result = 1
        for (i = 1; i <= num; i++) {
            result *= i
        }
        return result
    }
}
//Prime Number Check
function prime(num){
if(num < 2){
    return false
}
for (var i=2;i<= Math.sqrt(num);i++){     // (Math.sqrt(number))This loop is responsible for checking potential divisors of the given number
    // for(var i=2;i<n;i++)
    if(num %i===0){
        return false
    }
}
return true
}
//Fibonacci Sequence
function fibonacci(){
var suite = []
    var a = 0
    var b = 1
    for( i=0 ; i<n ; i++){
        suite.push(a)
        var sum = a + b
        a = b
        b = sum
    }
    return suite
}