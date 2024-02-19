// p5.js sketch code goes here
let time = 0;
let arr = [];
let slider;


//let lastVector = createVector(0,0);

function setup() {
    // Create a canvas of 600x400 pixels
    createCanvas(1000, 800);
    slider = createSlider(1, 25, 1);
    slider.parent('slider-container')
}

function draw() {
    // Set the background to black
    background(0);

    // move the circle closer to center
    translate(300, 400);



    let x = 0;
    let y = 0;
    let formula = "";
    let formula2 = `\\[\\Large \\sum_{i=0}^{n} \\frac{4 \\cdot \\sin((2i + 1) \\cdot x)}{(2i + 1) \\pi}\\]`;
    document.getElementById('math-formula2').innerHTML = formula2;
    MathJax.typeset();


    for (let i = 0; i < slider.value(); i++) {
        let prevX = x;
        let prevY = y;
        n = i * 2 + 1;

        formula += `\\(\\Huge{\\frac{4 \\cdot \\sin(${n} \\cdot x)}{${n} \\pi}}\\)` + ` + `; // LaTeX format
        

        let coefficient = 55 * (10 / (n * PI));


        x += coefficient * cos(n * time);
        y += coefficient * sin(n * time);

        stroke(255, 165, 0);
        noFill();
        //ellipse(prevX, prevY, coefficient * 2)


        if (arr.length > 250) {
            arr.pop()
        }


        line(prevX, prevY, x, y);

        stroke(255);

        ellipse(prevX, prevY, coefficient * 2)

    }
   
    
    fill(255, 0, 0); // Set fill color to red
stroke(255, 10, 10); // Set stroke color to a slightly different red, if you want the border to be visible
ellipse(x, y, 10, 10); // Draw solid ellipse
    
    


    arr.unshift(y);


    translate(300, 0)
    stroke(255, 10, 5);
    line(x - 300, y, 0, arr[0])


    noFill();
    stroke(255);
    //draw the wave from array
    beginShape();
    arr.forEach(dot => {
        vertex(arr.indexOf(dot), dot);
    })

    endShape();


    time += 0.03;
    document.getElementById('math-formula').innerHTML = formula;
    MathJax.typeset(); // Ask MathJax to render the formula

}
