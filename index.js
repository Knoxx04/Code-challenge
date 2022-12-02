
 
const mayWeather = document.getElementById("mayWeather")
function formReset(){
    document.getElementById("marks").reset();
}

mayWeather.addEventListener("click", function(event){
    event.preventDefault();

    var grade = document.getElementById("floyd").value;

    const result = document.getElementById("result");

    console.log(grade);
    
    if(grade >= 79 && grade <= 100){
                result.innerHTML = "GRADE IS A"
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
    formReset();
            
        



    
})
        




// const speed = document.getElementById("speed");

// function formReseting(){
//     document.getElementById("myForm").reset();
// }


// speed.addEventListener("click", function (e){
//     e.preventDefault();
//     var speedDriven = document.getElementById("speedDriven").value;
//     const speedLimit = 70;
//     const detector = document.getElementById("detector");

//     console.log(speedDriven);
//     console.log(speedLimit);

//     let demerit = (speedDriven -speedLimit)/5;
//     console.log(demerit);
//     if(speedDriven < 70){
//         detector.innerHTML = "OK";
//     }else if(speedDriven > speedLimit && demerit <= 12){
//         detector.innerHTML = demerit;
//     }else if(demerit > 12){
//         detector.innerHTML = "License Suspended";
//     }


//     formReseting();
// });









