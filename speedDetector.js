
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

speedDetector();