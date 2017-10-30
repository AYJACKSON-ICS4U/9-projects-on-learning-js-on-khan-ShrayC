var xPos = -10;
var yPos = -10;
var sizeX = 10;

draw = function() {
    background(29, 40, 115);
    fill(255, 196, 196);
    ellipse(xPos, yPos, sizeX, sizeX);
    ellipse(xPos+30, yPos+70, sizeX+4, sizeX+4);
    ellipse(xPos-21, yPos-32, sizeX+2, sizeX+2);
    ellipse(xPos, yPos, sizeX, sizeX);
    fill(65, 130, 0);
    rect(-22,359,447,100);
    sizeX+=0.04;
    xPos++;
    yPos++;
};
