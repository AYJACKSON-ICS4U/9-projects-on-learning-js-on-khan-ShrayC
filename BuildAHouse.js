background(219, 255, 255);


fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

var brickY = 127;
for(var brickX = 61; brickX < 310; brickX+=40){
image(getImage("cute/RoofSouth"), brickX, brickY, 40, 80);
if (brickX > 267 && brickY < 400){
    brickX = 21;
    brickY += 55;
}
}

fill(120, 80, 19);
rect(180, 280, 40, 77);

var grassX;
for(grassX = 0; grassX < 400; grassX+=73){
    image(getImage("cute/GrassBlock"), grassX, 328, 73, 100);
}
image(getImage("cute/TreeTall"), -26, 233);

var windX = 100;
while (windX < 300){
    fill(255, 247, 0);
    rect(windX,180,30,30);
    rect(windX,210,30,30);
    rect(windX+30,180,30,30);
    rect(windX+30,210,30,30);
    windX += 140;
}
