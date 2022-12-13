const process = require('process');

const multiplicationTable = (num) =>{
    
    for(let i = 1; i <= 10; i++){
        console.log(num, "*", i, "=",num*i)
    }

}


const checkLeapYear = (year) =>{
    if((year %400!==0 && year %4==0)|| (year%400==0)){
        console.log("Leap year");
        return;

    }
    console.log("Not a leap year");

}


const checkpalindrome = (palindrome) =>{
    var len = palindrome.length;
    var half = Math.floor(palindrome.length/2);
    for (let i = 0; i < half; i++){
        if(palindrome[i]!== palindrome[len-i-1]){
            console.log("Not a palindrome");
            return;
        }
        
    }
    console.log("It is a palindrome");
    
}

process.nextTick(multiplicationTable,12);

setImmediate(checkLeapYear,2001);

const intervalHandler = setInterval(checkpalindrome,500,"malayalam");

setTimeout(()=>{
    clearInterval(intervalHandler);
    
},600)


