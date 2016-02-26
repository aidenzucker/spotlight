canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
var myCursor = {x: 0, y: 0};
var frequency = 20;

var bwidth = window.innerWidth;
var bheight = 4700;
//var bheight = window.innerHeight;

canvas.width = bwidth;
canvas.height = bheight;

$(document).bind('mousemove', function(e) {
    myCursor.x = e.pageX;
    myCursor.y = e.pageY;
});

$(document).bind('scroll', function(e) {
    console.log('yooo');
    myCursor.x = e.pageX;
    myCursor.y = e.pageY;
    //draw();
});

// this kills the circle
var clearCircle = function(x, y, radius)
{
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.restore();
};

myInterval = setInterval( draw, frequency );  // run

function draw() {
    var grad = ctx.createLinearGradient(0, 0, 0, bheight);
    console.log('draw');    
    grad.addColorStop(0, "black"); 
    grad.addColorStop(1, "#284DA9"); //or gold: #D4B14E
    ctx.fillStyle = grad;

    ctx.fillRect(0, 0, bwidth, bheight);  //can replace these with "page width" or something
    clearCircle(myCursor.x, myCursor.y, 150); //200 is radius size
};
