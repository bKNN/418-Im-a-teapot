$(document).ready(function(){
    $("div").each(function(i,v){
      moveIlluminati(v);
    });
});

function newSpot(){
    // viewport - dimension of obj
    var height = $(window).height() - 50;
    var width = $(window).width() - 50;
    var newheight = Math.floor(Math.random() * height);
    var newwidth = Math.floor(Math.random() * width);
    return [newheight,newwidth];
}

function moveIlluminati(obj){
    var newspot = newSpot();
    var oldspot = $(obj).offset();
    var speed = howFast([oldspot.top, oldspot.left], newspot);
    $(obj).animate({ top: newspot[0], left: newspot[1] }, speed, function(){
      moveIlluminati(obj);
    });
};

function howFast(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var vel = 0.1;
    var newspeed = Math.ceil(greatest/vel);
    return newspeed;
}
