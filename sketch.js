function setup()
{
   createCanvas(800, 800);
   background(0);
   
}


function draw()
{
   background(0);
   fill(255);
   ellipse(mouseX,mouseY,100,100);

drawdonut(100,239,215,100,100);
drawdonut(161,235,81,300,200);
drawdonut(235,204,81,600,300);
drawdonut(235,168,81,800,400);



}

function drawdonut(r,g,b,x,y)
{
   fill(r,g,b);
   ellipse(x,y,200,200);
   fill(0);
   ellipse(x,y,120,120);

}

