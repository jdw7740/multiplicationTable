// SETTING ALL VARIABLES
let i = 0;
let x = 0;
let runtime = 0;
let eachrun = 0;
let runAmmount = 100;
let newanswer = [];
let arrayAnswer = [];
let start = Date.now();
let update = document.getElementById('root');

// START OVER FUNCTION

function runScript() {
    while (runAmmount = prompt('How many tables do you want to run? ')) {
        if(isNaN(runAmmount)) {
            alert('Invalid Input');
        } else if (runAmmount > 500) {
            alert('Too High of a number');
        } else {
            break;
        }
    }
    
    // SET ALL ANSWERS IN ARRAY
    while(runtime < Number(runAmmount) + 1) {
        while(x < 51) {
            arrayAnswer.push(i * x);
            x++;
        }
        // ADD EACH ARRAY OF ANSWERS TO MASTER ARRAY
        newanswer.push(arrayAnswer);
    
        // CLEAR ARRAY TO START NEXT TABLE
        arrayAnswer = [];
        i++;
        x = 0;
        runtime++;
    
    }
    
    // LOOP THROUGH THE AMMOUNT OF TABLES REQUESTED
    let siteUpdate = 1;
    while(siteUpdate < newanswer.length) {
        // START OF DISPLAY FOR EACH TABLE
        let newContent = "<div class='tableBase'><h3>" + siteUpdate + " tables</h3>";
        let firstNum = 0;
        // ADDING A SPAN TAG FOR EACH MULTIPLICATION LINE
        newanswer[siteUpdate].forEach((numbers) => {
            newContent += "<span class='numList'><b>" + firstNum + " x " + siteUpdate + " = " + numbers + "</span>";
            firstNum++;
        });
        siteUpdate++;
        newContent += "</p>";
    
        //  UPDATE THE INNER HTML TO SHOW EACH TABLE
        update.innerHTML += newContent;
    }
}


// while (runAmmount = prompt('How many tables do you want to run? ')) {
//     if(isNaN(runAmmount)) {
//         alert('Invalid Input');
//     } else {
//         break;
//     }
// }

// // SET ALL ANSWERS IN ARRAY
// while(runtime < Number(runAmmount) + 1) {
//     while(x < 11) {
//         arrayAnswer.push(i * x);
//         x++;
//     }
//     // ADD EACH ARRAY OF ANSWERS TO MASTER ARRAY
//     newanswer.push(arrayAnswer);

//     // CLEAR ARRAY TO START NEXT TABLE
//     arrayAnswer = [];
//     i++;
//     x = 0;
//     runtime++;

// }

// // LOOP THROUGH THE AMMOUNT OF TABLES REQUESTED
// let siteUpdate = 1;
// while(siteUpdate < newanswer.length) {
//     // START OF DISPLAY FOR EACH TABLE
//     let newContent = "<div class='test'><h3>" + siteUpdate + " tables</h3>";
//     let firstNum = 0;
//     // ADDING A SPAN TAG FOR EACH MULTIPLICATION LINE
//     newanswer[siteUpdate].forEach((numbers) => {
//         newContent += "<span class='numList'><b>" + firstNum + " x " + siteUpdate + " = " + numbers + "</span>";
//         firstNum++;
//     });
//     siteUpdate++;
//     newContent += "</p>";

//     //  UPDATE THE INNER HTML TO SHOW EACH TABLE
//     update.innerHTML += newContent;
// }