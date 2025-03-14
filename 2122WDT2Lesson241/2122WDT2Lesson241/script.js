// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average() {
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);
    let output = document.getElementById("output");
    let average = (grade1 + grade2 + grade3) / 3;
    output.innerHTML = average;
  }

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function displaySlope() {
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);
    let slope = (x1, y1, x2, y2);

  }

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
