


  function grade (){

    
      
        
        if(grade >= 79 && grade <= 100){
        console.log ("Grade is A");
    }
    
       else if (grade >= 59 && grade <= 79){
       console.log ("Grade is B");
     }

     else if ( grade <= 59 && grade > 49){
     console.log ("Grade is C");
  }

     else if (grade <= 49 && grade > 39){
     console.log ("Grade is D");
  }

     else if (grade < 39){
     console.log ("Grade is E");
  } 
  else {
      console.log ("please enter a valid number")
  }
      
}
  
console.log(grade(12));