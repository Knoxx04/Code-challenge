// CHALLENGE 1
//This function seeks to check students grades
//0 being the least and 100 being the maximum

function grade (){

    
      
        
    if(grade > 80 && grade <= 100){
    console.log("Grade is A") 
    
}

   else if (grade > 60 && grade < 80){
   console.log ("Grade is B");
 }

 else if ( grade > 50 && grade < 60){
 console.log ("Grade is C");
}

 else if (grade > 40 && grade < 50){
 console.log ("Grade is D");
}

 else if (grade < 39){
 console.log ("Grade is E");
} 
else {
   ("please enter a valid number")
   
}
  
}

console.log((150));


 




// speedDetectorChallenge2
//The purpose of the function is to check speed limit
//and accord whether speed limit is ok and demerit points for overspeeding


 
function speedDetector(speed){

    if(speed <= 70){
        console.log("ok")
    }

    else if(speed > 70 && speed <= 130){
        let demeritPoint = (speed-70)/5;
        console.log(`points: ${demeritPoint}`);

        }

    else{
        console.log("license suspended");
    }

}


speedDetector(150);



//CHALLENGE 3 NET SALARY CALCULATOR
// Function to calculate Net salary
//This function calculates Net salary from gross salary



function netSalaryCalculator(gs){
  
    if(gs >=0 && gs <= 10000){
        console.log (10/100 * gs)
    }

    else if(gs >= 10000 && gs< 20000){
        console.log (12/100 * gs)
    }

    else if(gs >= 20000 && gs < 40000 ){
        console.log (14/100 * gs)
    }

    else if(gs >= 40000 && gs < 60000){
        console.log (18/100 * gs)
    }

    else if(gs >= 60000 && gs < 80000){
        console.log (20/100 * gs)
    }

    else if(gs >= 80000 && gs < 100000){
        console.log (22/100 * gs)
    }

    else{
        console.log (25/100 * gs)
    }

}

netSalaryCalculator(5000);






