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


const checkpallindrome = (pallindrome) =>{
    var len = pallindrome.length;
    var half = Math.floor(pallindrome.length/2);
    for (let i = 0; i < half; i++){
        if(pallindrome[i]!== pallindrome[len-i-1]){
            console.log("Not a pallindrome");
            return;
        }
        
    }
    console.log("It is a pallindrome");
    
}

process.nextTick(multiplicationTable,12);

setImmediate(checkLeapYear,2001);

const intervalHandler = setInterval(checkpallindrome,500,"malayalam");

setTimeout(()=>{
    clearInterval(intervalHandler);
    
},600)


