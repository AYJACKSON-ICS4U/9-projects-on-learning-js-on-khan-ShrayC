var bodyX = 200;
var bodyY = 176;
var bodyW = 121;
var bodyH = bodyW/1.5;
var bodyZ = bodyW*1.5;

draw = function() {
    noStroke();
    background(0, 0, 0);
    fill(255, 255, 255);
    ellipse(bodyX, bodyY, bodyW, bodyW); // body?
    ellipse(bodyX, bodyY-80, bodyH, bodyH); // face?
    ellipse(bodyX, bodyY+120, bodyZ, bodyZ); // face?
    fill(0, 0, 0);
    ellipse(bodyX-15, bodyY-100, bodyW-110, bodyW-110);
    ellipse(bodyX+15, bodyY-100, bodyW-110, bodyW-110);
    ellipse(bodyX, bodyY-68, bodyW-114, bodyW-114);
    ellipse(bodyX + 12, bodyY-72, bodyW-114, bodyW-114);
    ellipse(bodyX + -12, bodyY-72, bodyW-114, bodyW-114);
    fill(252, 113, 0);
    triangle(bodyX,bodyX-102,bodyX,bodyW-33,bodyW+20,bodyW-33);
    bodyW++;
};
