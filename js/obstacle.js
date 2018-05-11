class Rock{
    constructor(y){
        this.x = width;
        this.y = y;
        this.size = random(64, 128);
    }
    
    show(){
        console.log(bird.x)
        fill(50,50,0);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}
