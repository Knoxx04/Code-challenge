/*netSalary = percentage of gross salary
percentage = value/100  
using the following function we calculate the net Salary of an individual with 
a gross salary of the values given*/

let gs = prompt("enter speed") 


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



