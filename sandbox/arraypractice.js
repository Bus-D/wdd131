//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join()

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points
}

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total,item) {
    return total + item;
});
const gpa = pointsTotal /gpaPoints.length;

// alt way of ^^
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// even simpler
// const gpa = gpaPoints.reduce((total, item) => total + item) /gpaPoints.length;

// .filter

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const filter = fruits.filter(fruit => fruit.length < 6);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21
let luckyIndex = numbers.indexOf(luckyNumber);