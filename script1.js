// Get color input elements
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

// Get result element
var result = document.querySelector(".result");

// Add event listener to generate linear gradient button
document.getElementById("linearGradient").addEventListener("click", generateLinearGradient);

// Add event listener to generate radial gradient button
document.getElementById("radialGradient").addEventListener("click", generateRadialGradient);

function generateLinearGradient() {
  result.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function generateRadialGradient() {
  result.style.background = "radial-gradient(" + color1.value + ", " + color2.value + ")";
}
