background(61, 61, 61);
fill(0, 0, 0);
ellipse(200, 200, 375, 375);

var answer = floor(random(1, 6));
if (answer === 1) {
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("   Blue", 176, 200);
    text("           " + answer, 159, 229); 
}
else if (answer === 2){
    fill(255, 0, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("    Red", 176, 200);
    text("           " + answer, 159, 229); 
}
else if (answer === 3){
    fill(145, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("  Purple", 176, 200);
    text("           " + answer, 159, 229); 
}
else if (answer === 4){
    fill(77, 255, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("  Green", 176, 200);
    text("           " + answer, 159, 229); 
}
else if (answer === 5){
    fill(0, 251, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("   Cyan", 176, 200);
    text("           " + answer, 159, 229); 
}
