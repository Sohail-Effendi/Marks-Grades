let totalMarks : number = 850;
let obtainedMarks : number =640;
let percentage : number = obtainedMarks*100/totalMarks;
console.log(percentage+"%");
if(percentage>80) {console.log("You got A-one grade.");
    } else if(percentage>69 && percentage<80) {console.log("You got A grade.");
} else if(percentage>59 && percentage< 70) {console.log("You got B grade.");
} else if(percentage>49 && percentage< 60 ) {console.log("You got C grade.");
} else if(percentage>39 && percentage< 50 ) {console.log("You got D grade.");
} else {console.log("You are failed");
    }