var dog;
var food;

function preLoad(){
  dogImg.png = dog;
  dogImg1.png = dog;
}
function setup() {
  createCanvas(800, 700);
  dog=createSprite(300,227);
  dog=addImg("dogImg.png");
  
}


function draw() {  
  background(46, 139, 87);

    if(keyDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage(dogImg1);
    }
   
    drawSprites();
  

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



