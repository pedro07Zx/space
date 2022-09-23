function preload(){
ground = loadImage("darkbackground.jpg");
inimigo1 = loadImage("inimigo1.png");
inimigo2 = loadImage("inimigo2.png");
inimigo3 = loadImage("inimigo3.png");
inimigo4 = loadImage("inimigo4.png");
mothership = loadImage("mothership.png");
Pc1 = loadImage("PC1.png");

}


function setup() {
 createCanvas(1000,650);
 nave = createSprite(500,500);
 nave.addImage(Pc1);
 nave.scale = 0.1;

}

function draw() {
 image(ground,0,0,1000,650);
 drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);
vangers();


}

function vangers(){
            if(frameCount%60===0){
                inimigo = createSprite(170,103);
                inimigo.addImage(inimigo1);
                inimigo.velocityY = 10; 
                inimigo.scale = 0.3;
                
                }
            if(frameCount%90===0){
                inimigo = createSprite(300,104);                                            
                inimigo.addImage(inimigo2);
                inimigo.velocityY = 10; 
                inimigo.scale = 0.3;
                
                }
            if(frameCount%120===0){
                inimigo = createSprite(500,110);
                inimigo.addImage(inimigo3);
                inimigo.velocityY = 10 
                inimigo.scale = 0.2;
                
                }
                if(frameCount%150===0){
                    inimigo = createSprite(400,103);
                    inimigo.addImage(inimigo4);
                    inimigo.x = Math.round(random(100,1000)) 
                    inimigo.scale = 0.1;
                       
                    }
    }