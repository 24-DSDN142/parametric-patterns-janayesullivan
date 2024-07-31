//your parameter variables go here!

let headX = 100 //changes x axis of whole ladybug
let headY = 80 //changes y axis of whole ladybug

let spotsizeW = 9 //changes width of all ladybug spots
let spotsizeL = 9 //changes length of all ladybug spots

let spotPattern = 1 //changes spot pattern depending on whether it is 1 or 2

let flowerX = 30 //changes x axis of all flowers
let flowerY = 90 //changes y axis of all flowers

let flowersizeW = 15 //width of flower 
let flowersizeL = 15 //length of flower

let flowerPattern = 1 //formation of flowers

let ladybugPosition = 1 //x and y of the ladybug

let ladybugColour = 1 // changes ladybug body between red and yellow
let flowerColour = 1 //changes middle colour of flower between yellow and orange 
let flowerpetalColour = 1//changes flower petal colours between white and pink.

let ladybugVariation = 1



//pre-done code 
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
function wallpaper_background() {
  background(246, 231, 236); //light pink colour 
} //pre done code end 






function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//clones the daisy and moves its X and Y with flower parameter (draw daisy function)

if (flowerPattern ==1){ //changes if statment flowerPattern (codes for 5) 
DrawDaisy(flowerX,flowerY) 
DrawDaisy(flowerX+20,flowerY+70)
DrawDaisy(flowerX+120,flowerY+70)
DrawDaisy(flowerX+140,flowerY)
DrawDaisy(flowerX+70,flowerY-60)
}

if (flowerPattern ==2){//changes if statment flowerPattern (4 flowers on each side)
  DrawDaisy(flowerX+70,flowerY-50) 
  DrawDaisy(flowerX+10,flowerY+10) 
  DrawDaisy(flowerX+130,flowerY+15) 
  DrawDaisy(flowerX+70,flowerY+80) 
}

if (flowerPattern ==3){//changes if statment flowerPattern (4 flowers on each side)
  
  DrawDaisy(flowerX+10,flowerY+75) 
  DrawDaisy(flowerX+130,flowerY-45)  
}



//is the simplifyed code to draw ladybug, can clone, and move on X and Y with head parameter

if (ladybugPosition ==1){
DrawLadybug(headX,headY);
}

if (ladybugPosition ==2){
  DrawLadybug(headX,headY);
  DrawLadybug(headX+70,headY+70);
  DrawLadybug(headX-70,headY-70);
  }

  if (ladybugPosition ==3){
    DrawLadybug(headX,headY);
    DrawLadybug(headX+70,headY+70);
    DrawLadybug(headX-70,headY-70);
    DrawLadybug(headX+80,headY-70);
    DrawLadybug(headX-70,headY+65);
    }
  

}

//details to symbols 
function DrawDaisy(flowerX,flowerY){ //all code for daisy drawing, shows what is being cloned and moved above)

//petals 
if (flowerpetalColour ==1){
fill(255, 248, 249)
noStroke()
ellipse(flowerX,flowerY-8,flowersizeW,flowersizeL); //middle top
ellipse(flowerX-6,flowerY+7,flowersizeW,flowersizeL);//left bottom
ellipse(flowerX+6,flowerY+7,flowersizeW,flowersizeL);//right bottom
ellipse(flowerX-8,flowerY-2,flowersizeW,flowersizeL);//left middle side 
ellipse(flowerX+8,flowerY-2,flowersizeW,flowersizeL);//right middle side
}

if (flowerpetalColour ==2){
  fill(246, 131, 162)
  noStroke()
  ellipse(flowerX,flowerY-8,flowersizeW,flowersizeL); //middle top
  ellipse(flowerX-6,flowerY+7,flowersizeW,flowersizeL);//left bottom
  ellipse(flowerX+6,flowerY+7,flowersizeW,flowersizeL);//right bottom
  ellipse(flowerX-8,flowerY-2,flowersizeW,flowersizeL);//left middle side 
  ellipse(flowerX+8,flowerY-2,flowersizeW,flowersizeL);//right middle side
  }


//middle bit of flower
if (flowerColour ==1){
fill(255, 222, 89) 
noStroke()
ellipse(flowerX,flowerY,flowersizeW,flowersizeL);
}

if (flowerColour ==2){
  fill(240, 180, 88)
  noStroke()
  ellipse(flowerX,flowerY,flowersizeW,flowersizeL);
  }





}


function DrawLadybug(headX, headY) { //all coding for ladybug drawing, shows whats being cloned/moved above
  push();

  //head 
  fill(0);
  ellipse(headX,headY,40,30);

//body and body variation
if (ladybugColour ==1){
fill(210, 1, 3);
noStroke ();
ellipse(headX,headY+30,70, 70);
}

if (ladybugColour ==2){
  fill(255, 222, 89);
  noStroke ();
  ellipse(headX,headY+30,70, 70);
  }

//break in wing
fill(0)
triangle(headX, headY+40, headX-9.5, headY+63.5, headX+9.5, headY+63.5);
ellipse(headX, headY+63, 19, 5);
strokeWeight(0.8);
stroke(0)
line(headX, headY-5, headX, headY+50);

//antenna 
strokeWeight(0.3);
stroke(0)
line(headX-10, headY-20, headX-5, headY-15);
line(headX+5, headY-15, headX+10, headY-20);

//spots 

//if the number after spotPattern at the top says 1 -code will show this spot variation below
if (spotPattern ==1){
fill(0)
ellipse(headX-25, headY+28, spotsizeW, spotsizeL);
ellipse(headX-15, headY+13, spotsizeW, spotsizeL);
ellipse(headX-15, headY+43, spotsizeW, spotsizeL);

ellipse(headX+25, headY+28, spotsizeW, spotsizeL);
ellipse(headX+15, headY+13, spotsizeW, spotsizeL);
ellipse(headX+15, headY+43, spotsizeW, spotsizeL);
}

//if the number after spotPattern at the top says 2 -code will show this spot variation below
if (spotPattern == 2){
fill(0)
ellipse(headX, headY+25, 9, 9); //middle spot 
ellipse(headX-25,headY+30, 9, 9); //middle left spot 
ellipse(headX+25,headY+30, 9, 9); //middle right spot 
ellipse(headX-17,headY+10, 9, 9); // top left spot
ellipse(headX+15,headY+10, 9, 9); //top right spot
ellipse(headX-17,headY+50, 9, 9); // bottom left spot
ellipse(headX+15,headY+50, 9, 9); //bottom right spot
}
}

  



