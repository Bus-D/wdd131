const PI = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area
}
area = circleArea(3)
console.log("Area 1:", area);
radius = 4;
area = circleArea(4)
console.log("Area 2:", area);



// modify the copyInput callback to receive the event object
function copyInput(event) {
  // take a look at the event!
  console.log(event);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}