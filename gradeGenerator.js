let grade = prompt("Please enter your grade");


function gradeGenerator(grade){

    if(grade >= 79 && grade <= 100){
        return "GRADE IS A"
    }

    else if(grade >= 60 && grade < 79){
        return "GRADE IS B"
    }

    else if(grade >= 49 && grade < 60){
        return "GRADE IS C"
    }

    else if(grade >= 40 && grade < 50){
        return "GRADE IS D"
    }

    else if(grade < 40){
        return "GRADE IS E"
    }

    else{
        return "NOT APPLICABLE"
    }
    
}

conslole.log(gradeGenerator(60))