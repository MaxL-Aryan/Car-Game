canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

random_num=Math.floor(Math.random()*4);
console.log(random_num);

car_width=100;
car_height=100;

car_x=10;
car_y=10;

background_img="canvasbkgrnd.jpg";
car_img="car1.png";

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_img;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar()
{
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);

    if (keypressed=='38')
    {
        up();
        console.log("up");
    }

    if (keypressed=='40')
    {
        down();
        console.log("down");
    }

    if (keypressed=='37')
    {
        left();
        console.log("left");
    }

    if (keypressed=='39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if (car_y>=0)
    {
        car_y=car_y-10;
        console.log("when up pressed,x= "+car_x+"  y= "+car_y);
        uploadBackground();
        uploadcar();
    }
}

function down()
{
    if (car_y<=500)
    {
        car_y=car_y+10;
        console.log("when down pressed,x= "+car_x+"  y= "+car_y);
        uploadBackground();
        uploadcar();
    }
}

function left()
{
    if (car_x>=0)
    {
        car_x=car_x-10;
        console.log("when left pressed,x= "+car_x+"  y= "+car_y);
        uploadBackground();
        uploadcar();
    }
}

function right()
{
    if (car_x<=700)
    {
        car_x=car_x+10;
        console.log("when up pressed,x= "+car_x+"  y= "+car_y);
        uploadBackground();
        uploadcar();
    }
}