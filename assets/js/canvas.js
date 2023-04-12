function draw_square(x,y,color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(x,y,20,20);
}

function draw_line(x1,y1,x2,y2,color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function draw_thick_line(x1,y1,x2,y2,color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.stroke();
}

function draw_arc(x, y, r, angle1, angle2, color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, angle1, angle2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function draw_filled_arc(x, y, r, angle1, angle2, color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, angle1, angle2);
    ctx.fillStyle = color;
    ctx.fill();
}

function draw_text(x, y, text, color){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

function draw_squares(){
    draw_square(0,0,"blue");
    draw_square(0,20,"blue");
    draw_square(20,20,"blue")
    draw_square(20,0,"blue");

    draw_square(300-20*2,0, "red");
    draw_square(300-20*1,0, "red");
    draw_square(300-20*2,20, "red");
    draw_square(300-20*1,20, "red");

    draw_square(300/2-20, 300/2, "red");
    draw_square(300/2-20*2, 300/2, "red");
    draw_square(300/2-20*1, 300/2+20, "red");
    draw_square(300/2-20*2, 300/2+20, "red");

    draw_square(0, 300/2-20, "cyan");
    draw_square(0, 300/2, "cyan");
    draw_square(300-20*2, 300/2-10, "cyan");
    draw_square(300-20*1, 300/2-10, "cyan");

    draw_square(0, 300-20*2, "yellow");
    draw_square(0, 300-20*1, "yellow");
    draw_square(20, 300-20*1, "yellow");

    draw_square(300-20*1, 300-20*2, "black");
    draw_square(300-20, 300-20*1, "black");
    draw_square(300-20*2, 300-20*1, "black");
}
function draw_lines(){
    draw_line(0, 300/2, 300, 300/2, "green");
    draw_line(300/2, 300/2, 300/2, 300-41, "black");
    draw_line(0, 0, 300/2, 300/2, "blue");
    draw_line(300/2, 300/2, 300, 0, "red");

    draw_thick_line(0,0,300,0,"black");
    draw_thick_line(0,0,0,300,"black");
    draw_thick_line(300,0,300,300,"black");
    draw_thick_line(0,300,300,300,"black");
}

function draw_arcs(){

    draw_arc(300/2, 300/2, 60, Math.PI, 0, "green");

    draw_arc(300/2, 300/2, 80, Math.PI, -(3*Math.PI/4), "green");
    draw_arc(300/2, 300/2, 80, (7*Math.PI/4), 0, "green");
    draw_arc(300/2, 300/2-30, 15, 0, Math.PI*2, "blue");
    draw_filled_arc(300/2, 300/2-30, 14, 0, Math.PI*2, "cyan");

    draw_filled_arc(300/4, 300*3/4, 14, 0, Math.PI*2, "yellow");
    draw_arc(300/4, 300*3/4, 15, 0, Math.PI*2, "green");
    draw_filled_arc(300*3/4, 300*3/4, 14, 0, Math.PI*2, "yellow");
    draw_arc(300*3/4, 300*3/4, 15, 0, Math.PI*2, "green");

    draw_filled_arc(300/2, 300, 40, Math.PI, 0, "cyan");
    draw_arc(300/2, 300, 41, Math.PI, 0, "green");

    draw_arc(300/2, 300, 60, 3*Math.PI/2, 0, "green");
    draw_arc(300/2, 300, 80, 0, 3*Math.PI/2, "green");
}

function draw_texts(){
    draw_text(300/2-55, 300/4-15, "Canvas", "black");
}

function clear_canvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
