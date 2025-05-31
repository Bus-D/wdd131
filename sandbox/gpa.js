function getGrades() {
    const inputElement = document.querySelector("#grades");
    const grades = inputElement.value.split(',');
    const grade = grades.map(grade => grade.trim().toUpperCase());
    console.log(grade);
    return grade

    
}

function lookupGrade(grade) {
    let points = 0
    if (grade === "A") {
        points = 4
    } else if (grade === "B") {
        points = 3
    } else if (grade === "C") {
        points = 2
    } else if (grade === "D") {
        points = 1
    } else if (grade === "F") {
        points = 0
    }
    return points
}

function calculateGpa(grades) {
    const gpaPoints = grades.map(lookupGrade);
    const totalPoints = gpaPoints.reduce((total, item) => total + item, 0); 
    const gpa = totalPoints / gpaPoints.length;
    return gpa.toFixed(2)
}

function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector)
    outputElement.innerHTML = `Your GPA is ${gpa}`
}

function clickHandler() {
    let button = document.getElementById("submitButton");
    button.addEventListener("click", function() {
        const grade = getGrades();

        const gpa = calculateGpa(grade);
        outputGpa(gpa, "#output");
        console.log("button clicked")
    });
}

clickHandler();