var x = 0;
var y = 0;
var place = 0;
var wide = 10;

draw = function() {
    stroke(random(0,255),random(0,255),random(0,255));
    
    if (random(1) > 0.5){
        line(place+x,place+y,wide+x,wide+y);
    }
    else{
        line(wide+x,place+y,place+x,wide+y);   
    }
    x+=10;
    if(x>390){
        x=0;
        y+=10;
    }
};
