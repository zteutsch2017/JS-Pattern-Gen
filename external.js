
//script

var can = document.getElementById("area");
var cont = can.getContext("2d");

col = 0;

//parameter variables for both text and pattern

var radiusInput = 5;
var renditionsInput = 500;
var color1 = "black";
var color2 = "black";
var color3 = "black";
var color4 = "black";

var message = "Type your text here..."
var txtX = 100;
var txtY = can.height - 100;
var textColor = "white";

//function called when form is edited, updates parameters for pattern

function getFormInput() {

   radiusInput = document.getElementById("iRadius").value;
   renditionsInput = document.getElementById("iRenditions").value;

   color1 = document.getElementById("color1").value;
   color2 = document.getElementById("color2").value;
   color3 = document.getElementById("color3").value;
   color4 = document.getElementById("color4").value;

   if(radiusInput < .1){
     radiusInput = .1;
     document.getElementById("iRadius").value = .1;

   }

   if(radiusInput > 15){
     radiusInput = 15;
     document.getElementById("iRadius").value = 15;
   }

   if(renditionsInput < 10){
     renditionsInput = 10;
     document.getElementById("iRenditions").value = 10;
   }

   if(renditionsInput > 2750){
     renditionsInput = 2750;
     document.getElementById("iRenditions").value = 2750;
   }


}

//function called when form is edited, updates parameters for text

function getTextInput(){

  message = document.getElementById("textInput").value;
  txtX = document.getElementById("xCoordInput").value;
  txtY = can.height - document.getElementById("yCoordInput").value;
  textColor = document.getElementById("textColorInput").value;

  if(txtY > 500){
    txtY = 100;
    document.getElementById("yCoordInput").value = 100;
  }

  if(txtX > 700){
    txtX = 100;
    document.getElementById("xCoordInput").value = 100;
  }

}

//circle draw function recursively called by the generate function

function drawCircle(rad){

    this.radius = rad;

    if(col == 0){

      cont.beginPath();
      cont.strokeStyle = color1;
      cont.arc(0 + this.radius,can.height - this.radius,
        this.radius,0,2*Math.PI);
      cont.stroke();

    }
    if(col == 1){

      cont.beginPath();
      cont.strokeStyle = color2;
      cont.arc(can.width - this.radius ,0 + this.radius ,
        this.radius,0,2*Math.PI);

      cont.stroke();

    }
    if(col == 2){

      cont.beginPath();
      cont.strokeStyle = color3;
      cont.arc(can.width - this.radius ,can.height - this.radius ,
        this.radius,0,2*Math.PI);

      cont.stroke();

    }
   if(col == 3){

      cont.beginPath();
      cont.strokeStyle = color4;
      cont.arc(0 + this.radius ,0 + this.radius ,
        this.radius,0,2*Math.PI);

      cont.stroke();

    }

    if(col < 3){
     col++;
   }else{
     col = 0;
   }


}

//function that generates text
//regenerates pattern to prevent glitching, only 1 text allowed currently

function drawText(txt){

  generate();

  cont.font = "50px Georgia";
  cont.fillStyle = textColor;
  cont.fillText(txt, txtX, txtY);
}

//pattern generating function, doesn't default with text

function generate() {

 cont.fillStyle = "#FFFFFF";
 cont.fillRect(0, 0, can.width, can.height);

 col = 0;

  for(var x = 1; x <= renditionsInput ; x++){

    drawCircle(x * radiusInput);

}

}
