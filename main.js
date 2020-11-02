var canvas = new fabric.Canvas('myCanvas');

block_width = 30;
block_height = 30;

player_X = 30;
player_Y = 40;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png" , function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top : player_Y,
            left : player_X
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image , function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);

        block_image_object.set({
            top : player_Y,
            left : player_X
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("P and Shift keys are pressed SIZE INCREASED");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("M and Shift keys are pressed SIZE DECREASED");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(keyPressed == '70'){
       new_image('spiderman_legs.png');
       console.log("F key is pressed HULK FACE");
    }
    if(keyPressed == '66'){
        new_image('hulkd_body.png');
        console.log("B key is pressed HULK BODY");
    }
    if(keyPressed == '76'){
        new_image('hulk_legs.png');
        console.log("L key is pressed HULK LEGS");
    }
    if(keyPressed == '82'){
        new_image('hulk_left_hand.png');
        console.log("R key is pressed HULK LEFT HAND");
    }
    if(keyPressed == '72'){
        new_image('hulk_right_hand.png');
        console.log("H key is pressed HULK RIGHT HAND");
    }
}