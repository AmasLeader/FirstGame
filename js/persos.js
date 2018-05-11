/* jshint esversion:6 */
class Bird{
    constructor(radius, x ,y){
        this.radius = radius || 32;
        this.x = x || width/2;
        this.y = y || height/2;
        this.speedx = 0;
        this.speedy = 0;
        this.accelx = 0;
        this.accely = 0;
        this.maxSpeed = 5;
        this.gravity = 1;
        this.hasJumped = false;
    }

    show(){
        fill(255,255,0);
        ellipse(this.x, this.y, this.radius*2);
    }

    move(ground){
        if(keyIsDown(UP_ARROW) && !this.hasJumped){
                this.speedy = -20;
                this.hasJumped = !this.hasJumped;
        }
        else{
            this.speedy += this.gravity;
        }
        if(!keyIsDown(UP_ARROW)){
            this.hasJumped=false;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.speedx += 1;
        }
        else if(keyIsDown(LEFT_ARROW)){
            this.speedx -= 1;
        }
        else{
            this.speedx = 0;
        }

        // Limit speed (not too fast birdy!!!)
        if(this.speedx > this.maxSpeed){
            this.speedx = this.maxSpeed;
        }
        if(this.speedx < -this.maxSpeed){
            this.speedx = -this.maxSpeed;
        }
        if(this.speedy > this.maxSpeed*3){
            this.speedy = this.maxSpeed*3;
        }
        if(this.speedy < -this.maxSpeed*3){
            this.speedy = -this.maxSpeed*3;
        }
       
        this.x += this.speedx;
        this.y += this.speedy;

        // Limit speed (not too fast birdy!!!)
        if(this.x > width){
            this.x = width;
        }
        if(this.x < 0){
            this.x = 0;
        }
        let groundHeight = height - this.groundHeight(ground) - this.radius + 5;
        if(this.y > groundHeight){
            this.y = groundHeight;
        }
        if(this.y < 0){
            this.y = 0;
        }
    }
    
    groundHeight(ground){
        let groundHeight = 0;
        let count = 0;
        for(let i= max(floor(this.x - this.radius), 0); i < min(floor(this.x + this.radius), ground.heights.length); i++){
            groundHeight += ground.heights[i];
            count ++;
        }
        return groundHeight/count;
    }
}
