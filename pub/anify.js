"use strict";

///////////////////////////////////////////////////////////////////////////////////
//Background Animation
///////////////////////////////////////////////////////////////////////////////////

//x: x-coordinate
//y: y-coordinate
//r: radius of the circle
//c: color of circle
class Circle {
    constructor(x, y, r, c, vx, vy){
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.velocityX = vx;
        this.velocityY = vy;
    }
    
    draw(circleObj, ctx){
        ctx.beginPath();
        ctx.fillStyle = circleObj.c
        ctx.arc(circleObj.x, circleObj.y, circleObj.r, 0, Math.PI * 2);
        ctx.fill();
    }
        
    move(circleObj, ctx){
        circleObj.x += circleObj.velocityX
        circleObj.y += circleObj.velocityY
        circleObj.draw(circleObj, ctx)
    }
    
    drawRChanged(circleObj, ctx){
        ctx.beginPath();
        ctx.fillStyle = circleObj.c
        ctx.arc(circleObj.x, circleObj.y, circleObj.r, 0, Math.PI * 2);
        ctx.fill();
    }
        
    increaseRadius(circleObj, ctx){
        circleObj.r += circleObj.velocityX
        circleObj.drawRChanged(circleObj, ctx)
    }
}

function randomNumerGen(radius, length){
    return Math.random() * (length - radius * 2) + radius;
}

//intialize background animation
// @canvas  canvas to draw the background animation
// @img  an image element that stores picture for the background in the animation
function BackGroundAnimations(canvas, img = null){
    this.canvas = canvas//canvas to draw animation
    this.circles = []//stores all the circles elements for animation
    this.img = img
    this.makeSnow.bind(this)
    this.makeRain.bind(this)
    this.makeHeart.bind(this)
    this.makediamond.bind(this)
}

BackGroundAnimations.prototype = {

    makeSnow: function(){
        for (let i = 0; i < 40; i++) {
            const r = 2
            const x = randomNumerGen(r, this.canvas.width);
            const y = randomNumerGen(r, this.canvas.height);
            const c = 'white';
            this.circles.push(new Circle(x, y, r, c, 0, 0.9));
        }
        this.updateSnow()
    },

    updateSnow: function() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }

        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].move(this.circles[i], ctx);

            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                this.circles[i].x = randomNumerGen(2, this.canvas.width);
                this.circles[i].y = 0;
            }
        }

        requestAnimationFrame(this.updateSnow.bind(this))//call update
    },
    
    makeRain: function(){
        for (let i = 0; i < 50; i++) {
            const r = 1.5
            const x = randomNumerGen(r, this.canvas.width);
            const y = randomNumerGen(r, this.canvas.height);
            const c = 'skyblue';
            this.circles.push(new Circle(x, y, r, c, 0, 5));
        }
        this.updateRain()
    },
    
    updateRain: function() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].move(this.circles[i], ctx);
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                this.circles[i].x = randomNumerGen(1.5, this.canvas.width)
                this.circles[i].y = 0;
            }
        }
        
        requestAnimationFrame(this.updateRain.bind(this))//call update
    },
    
    makeHeart: function(){
        for (let i = 0; i < 30; i++) {
            const r = 1.5
            const x = randomNumerGen(r, this.canvas.width);
            const y = randomNumerGen(r, this.canvas.height);
            const c = 'red';
            this.circles.push(new Circle(x, y, r, c, 0.3, 0.7));
            this.circles.push(new Circle(x+2, y-0.5, r, 'red', 0.3, 0.7));
            this.circles.push(new Circle(x-2, y-0.5, r, 'red', 0.3, 0.7));
            this.circles.push(new Circle(x, y+0.5, r, 'red', 0.3, 0.7));
        }
        this.updateHeart()
    },
    
    updateHeart: function() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        for (let i = 0; i < this.circles.length; i+=4) {
            this.circles[i].move(this.circles[i], ctx);
            this.circles[i+1].move(this.circles[i+1], ctx);
            this.circles[i+2].move(this.circles[i+2], ctx);
            this.circles[i+3].move(this.circles[i+3], ctx);
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                const x = randomNumerGen(1, this.canvas.width)
                const y = 0
                this.circles[i].x = x
                this.circles[i].y = y;
                this.circles[i+1].x = x+2
                this.circles[i+1].y = y-0.5;
                this.circles[i+2].x = x-2
                this.circles[i+2].y = y-0.5;
                this.circles[i+3].x = x
                this.circles[i+3].y = y + 0.5;
            }
        }
        
        requestAnimationFrame(this.updateHeart.bind(this))//call update
    },
    
    //create circles for diamond
    makediamond: function(){
        for (let i = 0; i < 30; i++) {
            const r = 2
            const x = randomNumerGen(r, this.canvas.width);
            const y = randomNumerGen(r, this.canvas.height);
            const c = 'white';
            this.circles.push(new Circle(x, y, r, c, 0.3, 0.7));
            this.circles.push(new Circle(x+2, y, 1, 'skyblue', 0.3, 0.7));
            this.circles.push(new Circle(x-2, y, 1, 'skyblue', 0.3, 0.7));
            this.circles.push(new Circle(x, y+2, 1, 'skyblue', 0.3, 0.7));
            this.circles.push(new Circle(x, y-2, 1, 'skyblue', 0.3, 0.7));
        }
        this.updateDiamond()
    },
    
    updateDiamond: function() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        for (let i = 0; i < this.circles.length; i+=5) {
            this.circles[i].move(this.circles[i], ctx);
            this.circles[i+1].move(this.circles[i+1], ctx);
            this.circles[i+2].move(this.circles[i+2], ctx);
            this.circles[i+3].move(this.circles[i+3], ctx);
            this.circles[i+4].move(this.circles[i+4], ctx);
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                const x = randomNumerGen(1, this.canvas.width)
                const y = 0
                this.circles[i].x = x
                this.circles[i].y = y;
                this.circles[i+1].x = x+2
                this.circles[i+1].y = y;
                this.circles[i+2].x = x-2
                this.circles[i+2].y = y;
                this.circles[i+3].x = x
                this.circles[i+3].y = y + 2;
                this.circles[i+4].x = x
                this.circles[i+4].y = y - 2;
            }
        }
        
        requestAnimationFrame(this.updateDiamond.bind(this))//call update
    }

}
///////////////////////////////////////////////////////////////////////////////////
//end of Background Animation
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
//Tetris Animation
////////////////////////////////////////////////////////////////////

//x: x-coordinate
//y: y-coordinate
//w: width of square
//c: color of square
class Square {
    constructor(x, y, w, c, vx, vy){
        this.x = x;
        this.y = y;
        this.w = w;
        this.c = c;
        this.velocityX = vx;
        this.velocityY = vy;
    }
    
    draw(squareObj, ctx){
        ctx.beginPath();
        ctx.rect(squareObj.x, squareObj.y, squareObj.w, squareObj.w);
        ctx.fillStyle = squareObj.c;
        ctx.fill();
    }
        
    move(squareObj, ctx){
        squareObj.x += squareObj.velocityX
        squareObj.y += squareObj.velocityY
        squareObj.draw(squareObj, ctx)
    }
    drawWChanged(squareObj, ctx){
        ctx.beginPath();
        ctx.rect(squareObj.x, squareObj.y, squareObj.w, squareObj.w);
        ctx.fillStyle = squareObj.c;
        ctx.fill();
    }
        
    increaseWidth(squareObj, ctx){
        squareObj.w += squareObj.velocityX
        squareObj.drawWChanged(squareObj, ctx)
    }
    
}

//tetris Generator
//@canvas   canvas to display ghost animation
//@width    the width of the tetris block
//@img    an image element that stores picture for the background in the animation
function TetrisGenerator(canvas, width = 2, img = null) {
    this.canvas = canvas//canvas to draw animation
    this.squares = []//stores all the circles elements for animation
    this.width = width
    this.img = img
    this.makeTetris(this)
    this.update.bind(this)
}

TetrisGenerator.prototype = {
    
    makeTetris: function(tetrisObj){
        const w = tetrisObj.width
        for (let i = 0; i < 5; i++) {
            const red_4_square_x = randomNumerGen(w, tetrisObj.canvas.width);
            const red_4_square_y = randomNumerGen(w, tetrisObj.canvas.height);
            
            //red 4 square
            const red_4_square = []
            red_4_square.push(new Square(red_4_square_x, red_4_square_y, w, 'red', 0, 0.7));
            red_4_square.push(new Square(red_4_square_x+w, red_4_square_y, w, 'red', 0, 0.7));
            red_4_square.push(new Square(red_4_square_x, red_4_square_y+w, w, 'red', 0, 0.7));
            red_4_square.push(new Square(red_4_square_x+w, red_4_square_y+w, w, 'red', 0, 0.7));
            tetrisObj.squares.push(red_4_square)
        }
        
        for (let i = 0; i < 5; i++) {
            const orange_bent_x = randomNumerGen(w, tetrisObj.canvas.width);
            const orange_bent_y = randomNumerGen(w, tetrisObj.canvas.height);
            
            //orange bent
            const orange_bent = []
            orange_bent.push(new Square(orange_bent_x-w, orange_bent_y, w, 'orange', 0, 1.1));
            orange_bent.push(new Square(orange_bent_x, orange_bent_y, w, 'orange', 0, 1.1));
            orange_bent.push(new Square(orange_bent_x, orange_bent_y-w, w, 'orange', 0, 1.1));
            orange_bent.push(new Square(orange_bent_x, orange_bent_y-2*w, w, 'orange', 0, 1.1));
            orange_bent.push(new Square(orange_bent_x, orange_bent_y-3*w, w, 'orange', 0, 1.1));
            tetrisObj.squares.push(orange_bent)
        }
        
        for (let i = 0; i < 5; i++) {
            const lightening_x = randomNumerGen(w, tetrisObj.canvas.width);
            const lightening_y = randomNumerGen(w, tetrisObj.canvas.height);
            
            //orange bent
            const lightening = []
            lightening.push(new Square(lightening_x, lightening_y, w, 'blue', 0, 0.9));
            lightening.push(new Square(lightening_x, lightening_y-w, w, 'blue', 0, 0.9));
            lightening.push(new Square(lightening_x-w, lightening_y-w, w, 'blue', 0, 0.9));
            lightening.push(new Square(lightening_x-w, lightening_y-2*w, w, 'blue', 0, 0.9));
            tetrisObj.squares.push(lightening)
        }
        
        for (let i = 0; i < 5; i++) {
            const bar_x = randomNumerGen(w, tetrisObj.canvas.width);
            const bar_y = randomNumerGen(w, tetrisObj.canvas.height);
            
            //bar
            const bar = []
            bar.push(new Square(bar_x, bar_y, w, 'green', 0, 0.8));
            bar.push(new Square(bar_x+w, bar_y, w, 'green', 0, 0.8));
            bar.push(new Square(bar_x+2*w, bar_y, w, 'green', 0, 0.8));
            bar.push(new Square(bar_x+3*w, bar_y, w, 'green', 0, 0.8));
            tetrisObj.squares.push(bar)
        }
    },
    
    //make various types of tetris to fall down randomly on canvas
    update: function() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        for (let i = 0; i < this.squares.length; i++) {
            
            //make the circles fall again
            if (this.squares[i][0].y + this.squares[i][0].w > this.canvas.height) {
                const randX = randomNumerGen(this.squares[i][0].w, this.canvas.width);
                const randY = randomNumerGen(this.squares[i][0].w, this.canvas.height);
                for (let e = 0; e < this.squares[i].length; e++) {
                    this.squares[i][e].x += randX;
                    this.squares[i][e].y -= (this.canvas.height + randY);
                }
            }
            
            if (this.squares[i][0].x + this.squares[i][0].w > this.canvas.width) {
                const randX = randomNumerGen(this.squares[i][0].w*2, this.canvas.width);
                for (let e = 0; e < this.squares[i].length; e++) {
                    this.squares[i][e].x -= randX;
                }
            }
            
            for (let e = 0; e < this.squares[i].length; e++) {
                this.squares[i][e].move(this.squares[i][e], ctx);
            }
        }
        
        requestAnimationFrame(this.update.bind(this))//call update
    }
    
}
////////////////////////////////////////////////////////////////////
// end of Tetris Animation
////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Trail animation
//////////////////////////////////////////////////////////////////////

//Create a trail animation object
//@canvas  canvas to draw the background animation
//@canvasW  width of the canvas to draw animation on
//@canvasH  height of the canvas to draw animation on
//@img  an image element that stores picture for the background in the animation
function TrailAnimations(canvas, canvasW, canvasH, img = null){
    this.canvas = canvas//canvas to draw animation
    this.circles = []//stores all the circles elements for animation
    this.img = img
    this.canvasW = canvasW
    this.canvasH = canvasH
    this.getCanvasLoc.bind(this)
    this.makeSnow.bind(this)
    this.makeRain.bind(this)
    this.makeHeart.bind(this)
    this.heartCanvasLoc.bind(this)
    this.makeDiamond.bind(this)
    this.diamondCanvasLoc.bind(this)
}

TrailAnimations.prototype = {
    
    //get canvas location and update circles array
    getCanvasLoc: function(event, color, radius, speed){
        const canv = this.canvas.getBoundingClientRect();
        const x_axis = event.clientX - canv.left;
        const y_axis = event.clientY - canv.top;
        
        const r = radius
        const x = x_axis
        const y = y_axis
        const c = color
        this.circles.push(new Circle(x, y, r, c, 0, speed));
    },
    
    //update any animation with the given circles
    update: function() {
        const circle_copy = this.circles
        
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        for (let i = 0; i < circle_copy.length; i++) {
            circle_copy[i].move(circle_copy[i], ctx);
        }
        
        requestAnimationFrame(this.update.bind(this))//call update
    },
    
    //make snow trails that follow the cursor when hovering on canvas
    makeSnow: function(){
        this.canvas.width = this.canvasW
        this.canvas.width = this.canvasH
        
        const current_obj = this
        
        this.canvas.addEventListener("mousemove", function(e){
            current_obj.getCanvasLoc(e, "white", 2, 0.9);
        })
        this.update()
    },
    
    //make rain trails that follow the cursor when hovering on canvas
    makeRain: function(){
        this.canvas.width = this.canvasW
        this.canvas.width = this.canvasH
        
        const current_obj = this
        this.canvas.addEventListener("mousemove", function(e){
            current_obj.getCanvasLoc(e, 'skyblue', 2, 5)
        })
        this.update()
    },
    
    //make heart trails that follow the cursor when hovering on canvas
    makeHeart: function(){
        this.canvas.width = this.canvasW
        this.canvas.width = this.canvasH
        
        const current_obj = this
        this.canvas.addEventListener("mousemove", function(e){
            current_obj.heartCanvasLoc(e)
        })
        this.update()
    },
    
    heartCanvasLoc: function(event){
        const canv = this.canvas.getBoundingClientRect();
        const x_axis = event.clientX - canv.left;
        const y_axis = event.clientY - canv.top;
        
        const r = 2
        const x = x_axis
        const y = y_axis
        const c = 'red';
        
        this.circles.push(new Circle(x, y, r, c, 0.3, 0.7));
        this.circles.push(new Circle(x+2, y-0.5, r, 'red', 0.3, 0.7));
        this.circles.push(new Circle(x-2, y-0.5, r, 'red', 0.3, 0.7));
        this.circles.push(new Circle(x, y+0.5, r, 'red', 0.3, 0.7));
    },
    
    ////make diamond trails that follow the cursor when hovering on canvas
    makeDiamond: function(){
        this.canvas.width = this.canvasW
        this.canvas.width = this.canvasH
        
        const current_obj = this
        this.canvas.addEventListener("mousemove", function(e){
            current_obj.diamondCanvasLoc(e)
        })
        this.update()
    },
    
    diamondCanvasLoc: function(event){
        const canv = this.canvas.getBoundingClientRect();
        const x_axis = event.clientX - canv.left;
        const y_axis = event.clientY - canv.top;
        
        const r = 2
        const x = x_axis
        const y = y_axis
        const c = 'white';
        this.circles.push(new Circle(x, y, r, c, 0.3, 0.7));
        this.circles.push(new Circle(x+2, y, 1, 'skyblue', 0.3, 0.7));
        this.circles.push(new Circle(x-2, y, 1, 'skyblue', 0.3, 0.7));
        this.circles.push(new Circle(x, y+2, 1, 'skyblue', 0.3, 0.7));
        this.circles.push(new Circle(x, y-2, 1, 'skyblue', 0.3, 0.7));
    }

}

/////////////////////////////////////////////////////////////////////
//end of Trail animation
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
//Halloween Animation
///////////////////////////////////////////////////////////////////////////////////

class Ghost {
    constructor(x, y, c, vx, vy, left_img, right_img){
        this.x = x;
        this.y = y;
        this.left_img = left_img;
        this.right_img = right_img
        this.velocityX = vx;
        this.velocityY = vy;
        this.change = c
    }
    
    draw(ghost, ghostObj, ctx){
        const height_move = Math.floor((Math.random() * 2) + -2);
        
        if (ghost.change == 1){
            ctx.drawImage(ghost.right_img,0, 0, ghost.right_img.width,
                               ghost.right_img.height, ghost.x - 20, ghost.y - 20 + height_move, 40, 40);
            ghost.x += ghost.velocityX
        }
        else{
            ctx.drawImage(ghost.left_img,0, 0, ghost.left_img.width,
                               ghost.left_img.height, ghost.x - 20, ghost.y - 20 + height_move, 40, 40);
            ghost.x -= ghost.velocityX
        }
    }
        
    move(ghost, ghostObj, ctx){
        if(ghostObj.changeCounter <= 0){
            ghost.x = randomNumerGen(40 ,ghostObj.canvas.width)
            ghost.y = randomNumerGen(40 ,ghostObj.canvas.height)
        }
        
        ghost.draw(ghost, ghostObj, ctx)
    }
    
}

//Create a ghost animation object
//@canvas   canvas to display ghost animation
//@ghost    number of ghost in the canvas
//@img  an image element that stores picture for the background in the animation
function ghostGenerator(canvas, ghost_num=1, img = null) {
    this.canvas = canvas//canvas to draw animation
    this.ghost = []
    this.ghost_num = ghost_num
    this.changeCounter = 1
    this.x = this.canvas.width/2
    this.y = this.canvas.height/2
    this.img = img
    this.makeGhost(this)
    this.update.bind(this)
}

ghostGenerator.prototype = {
    
    //create circles for snow
    makeGhost: function(ghostObj){
        const left_img = document.createElement('img');
        left_img.src = 'halloween_Pic/ghost.png';
        
        const right_img = document.createElement('img');
        right_img.src = 'halloween_Pic/ghost2.png';
        
        for (let i = 0; i < ghostObj.ghost_num; i++) {
            const x = randomNumerGen(40 ,this.canvas.width)
            const y = randomNumerGen(40 ,this.canvas.height)
            const c = Math.floor((Math.random() * 2) + 1);
            ghostObj.ghost.push(new Ghost(x, y, c, 1, 1, left_img, right_img))
        }
    },
    
    //display ghost animation on the canvas with the specified number of ghosts
    update: function() {
        
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        for (let i = 0; i < this.ghost_num; i++) {
            //left motion time
            if(this.changeCounter <= 0){
                this.ghost[i].change = 1
            }
            else if(this.changeCounter >= 1){
                this.ghost[i].change = -1 //right motion time
            }
            
            //send ghost to different location
            this.ghost[i].move(this.ghost[i], this, ctx)
            
            if(this.ghost[i].change == 1){
                this.changeCounter += 0.01
            }
            else{
                this.changeCounter -= 0.01
            }
        }
        
        requestAnimationFrame(this.update.bind(this))//call update
    }
    
}

//Create a redEye animation object
//@canvas   canvas to display redEye animation
function RedEyeGenerator(canvas) {
    this.canvas = canvas
    this.circles = []
    this.makeEye(this)
    this.update.bind(this)
    this.timer = 0
}

RedEyeGenerator.prototype = {
    
    //create eye
    makeEye: function(eyeObj){
        const r = 1
        const x = eyeObj.canvas.width / 2;
        const y = eyeObj.canvas.height / 2;
        let c = 'white';
        eyeObj.circles.push(new Circle(x, y, r, c, 0.5, 0.3))
    },
    
    //display redEye animation on the canvas specified
    update: function() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.circles.length; i+=1) {
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                this.circles[i].drawRChanged(this.circles[i], ctx)
                ctx.beginPath();
                ctx.fillStyle = 'red'
                ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 25, 0, Math.PI * 2);
                ctx.fill();
                if(this.timer >= 100){
                    this.circles[i].r = 1
                    this.timer = 0
                }
                this.timer += 1;
            }
            else{
                this.circles[i].increaseRadius(this.circles[i], ctx);
            }
        }
        
        requestAnimationFrame(this.update.bind(this))//call update
    }
    
}

//Create a pumpkin animation object
//@canvas   canvas to display pumpkin animation
function PumpkinGenerator(canvas) {
    this.canvas = canvas
    this.state = 0
    this.timer = 0
    this.left_pumpkin = null
    this.right_pumpkin = null
    this.full_pumpkin = null
    this.empty_pumpkin = null
    this.makePumpkin(this)
    this.update.bind(this)
}

PumpkinGenerator.prototype = {
    
    //create circles for diamond
    makePumpkin: function(pumpkinObj){
        pumpkinObj.left_pumpkin = document.createElement('img');
        pumpkinObj.left_pumpkin.src = 'halloween_Pic/left_pumpkin.png';
        
        pumpkinObj.right_pumpkin = document.createElement('img');
        pumpkinObj.right_pumpkin.src = 'halloween_Pic/right_pumpkin.png';
        
        pumpkinObj.empty_pumpkin = document.createElement('img');
        pumpkinObj.empty_pumpkin.src = 'halloween_Pic/pumpkin.png';
        
        pumpkinObj.full_pumpkin = document.createElement('img');
        pumpkinObj.full_pumpkin.src = 'halloween_Pic/full_pumpkin.png';
        
    },
    
    //display pumpkin animation on the canvas specified
    update: function() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let img = null
        
        switch(this.state) {
            case 0:
                img = this.empty_pumpkin
                break;
            case 1:
                img = this.left_pumpkin
                break;
            case 2:
                img = this.right_pumpkin
                break;
            case 3:
                img = this.full_pumpkin
                break;
            default:
                break;
        }
        if(this.timer >= 100){
            this.state += 1
            this.timer = 0
            if (this.state > 3){
                this.state = 0
            }
        }
        this.timer += 1;
        
        ctx.drawImage(img,0, 0, this.canvas.width, this.canvas.height)
        
        requestAnimationFrame(this.update.bind(this))//call update
    }
    
}

///////////////////////////////////////////////////////////////////////////////////
// End of Halloween Animation
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// Text Animation
///////////////////////////////////////////////////////////////////////////////////

//text Generator
//Create a text animation object
//@canvas   canvas to draw the background animation
//@text   text that is going to be displayed on canvas with animations
//@color   The color of text that is going to be displayed on canvas
//@font   the size and font of the text that is going to be displayed on canvas
//@img   an image element that stores picture for the background in the animation
function textGenerator(canvas, text, color = "white", font = "30px Arial", img = null) {
    this.canvas = canvas//canvas to draw animation
    this.text = text
    this.font = font
    this.color = color
    this.textArr = this.text.split("")
    this.textCounter = 0
    this.img = img
    this.flash = true
    this.displayOneByOne.bind(this)
    this.flashPop.bind(this)
}

textGenerator.prototype = {
    
    //make each letter of the text display one by one until the full text shows on the centre of the canvas repeatedly
    displayOneByOne: function() {
        
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        let text = ''
        
        for (let i = 0; i < this.textCounter; i++) {
            text = text.concat(this.textArr[i])
        }
        
        if(this.textCounter >= this.text.length){
            this.textCounter = 0
        }
        
        this.textCounter += 1
        
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = "center";
        ctx.fillText(text, this.canvas.width/2, this.canvas.height/2);
        
        window.setTimeout(() => {requestAnimationFrame(this.displayOneByOne.bind(this))}, 100);
    },
    
    //repeatedly display letter and make it disappear in a flash
    flashPop: function() {
        
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }

        this.textCounter = this.text.length
        
        let text = ''
        
        if(this.flash){
            for (let i = 0; i < this.textCounter; i++) {
                text = text.concat(this.textArr[i])
            }
            
            this.flash = false
        }
        else{
            this.flash = true
        }
        
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = "center";
        ctx.fillText(text, this.canvas.width/2, this.canvas.height/2);
        
        window.setTimeout(() => {requestAnimationFrame(this.flashPop.bind(this))}, 200);
    },
    
}

///////////////////////////////////////////////////////////////////////////////////
//end of Text Animation
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
//bubble animation
//////////////////////////////////////////////////////////////////////////////////

class Bubble {
    constructor(x, y, r, vx, vy, img){
        this.x = x;
        this.y = y;
        this.r = r;
        this.img = img;
        this.vx = vx;
        this.vy = vy;
    }
    
    draw(bubbleObj, ctx){
        ctx.drawImage(bubbleObj.img,0, 0, bubbleObj.img.width,
            bubbleObj.img.height, bubbleObj.x - bubbleObj.r, bubbleObj.y - bubbleObj.r, bubbleObj.r, bubbleObj.r);
    }
        
    move(bubbleObj, ctx){
        bubbleObj.x += bubbleObj.vx
        bubbleObj.y -= bubbleObj.vy
        bubbleObj.draw(bubbleObj, ctx)
    }
}


//bubble Generator
//Create a bubble animation object
//@canvas   canvas to draw the background animation
//@pic_Arr     a list of images to make the bubble that randomly moves sideways and go up just like a bubble moving up the surface
//@canvasWidth    width of the canvas to draw animation on
//@canvasHeight  height of the canvas to draw animation on
//@img    an image element that stores picture for the background in the animation
function BubbleGenerator(canvas, pic_Arr, canvasWidth, canvasHeight, img = null) {
    this.canvas = canvas//canvas to draw animation
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.cursorX = 0
    this.cursorY = 0
    this.bubbles = []//stores all the circles elements for animation
    this.pic_Arr = pic_Arr
    this.img = img
    this.createBubbles(this)
    this.update.bind(this)
}

BubbleGenerator.prototype = {
    
    //create circles for snow
    createBubbles: function(bubbleObj){
        bubbleObj.canvas.width = bubbleObj.canvasWidth
        bubbleObj.canvas.width = bubbleObj.canvasHeight
        
        bubbleObj.canvas.addEventListener("mousedown", function(e){
            bubbleObj.getCanvasLoc(bubbleObj, e)
        })
        
        for (let i = 0; i < bubbleObj.pic_Arr.length; i++) {
            const r = randomNumerGen(bubbleObj.canvas.width/16, bubbleObj.canvas.width/8)
            const x = randomNumerGen(r, bubbleObj.canvas.width);
            const y = bubbleObj.canvas.height
            const vy = randomNumerGen(0.5, 1.2)
            const vx = randomNumerGen(1.2, 2)
            
            bubbleObj.bubbles.push(new Bubble(x, y, r, 0, vy, bubbleObj.pic_Arr[i]));
        }
    },
    
    reset: function(bubbleObj, canvas) {
        bubbleObj.vx = randomNumerGen(0.5, 1.2)
        bubbleObj.vy = randomNumerGen(0.5, 1.2)
        bubbleObj.r = randomNumerGen(5, canvas.width/8)
        bubbleObj.x = randomNumerGen(bubbleObj.r, canvas.width);
        bubbleObj.y = canvas.height + bubbleObj.r;
    },
    
    getCanvasLoc: function(bubbleObj, event){
        const canv = bubbleObj.canvas.getBoundingClientRect();
        const x_axis = event.clientX - canv.left;
        const y_axis = event.clientY - canv.top;
        
        bubbleObj.cursorX = x_axis
        bubbleObj.cursorY = y_axis
    },
    
    //activate the bubble animation where it creates bubble made by images that makes motions just like a bubble moving up the surface
    update: function() {
        
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(this.img != null){
            ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        }
        
        for (let i = 0; i < this.bubbles.length; i++) {
            this.bubbles[i].move(this.bubbles[i], ctx);
            
            if(this.bubbles[i].vx < randomNumerGen(-0.5, -2)){
                this.bubbles[i].vx = randomNumerGen(1.2, 2)
            }
            
            this.bubbles[i].vx -= 0.01
            
            if (this.bubbles[i].y < 0 
                ||((this.cursorX < this.bubbles[i].x) 
                && (this.cursorX > this.bubbles[i].x - this.bubbles[i].r)
                && (this.cursorY < this.bubbles[i].y)
                && (this.cursorY > this.bubbles[i].y - this.bubbles[i].r))) {
                this.reset(this.bubbles[i], this.canvas)
            }
        }
        
        this.cursorX = 0;
        this.cursorY = 0;
        
        requestAnimationFrame(this.update.bind(this))//call update
    }
    
}

///////////////////////////////////////////////////////////////////////////////////
//end of bubble animation
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
//Canvas animation profile picture
//////////////////////////////////////////////////////////////////////////////////////

// Create a profile popup for the maker
class ProfilePopup {
	constructor(profile) {
        this.profilePic = profile //profile pic its connected to
        this.popup = null; //store instance of this popup
        this.shade = null; // shaded background
        this.icons = ['./img/heart.png', './img/sun.png', './img/star.png',
                      './img/moon.png', './img/sparkle.png', './img/balloon.png',
                      './img/water.png', './img/parachutist.png', './img/splash.png']
        this.canvasx = '' //canvas x-axis
        this.canvasy = '' //canvas y-axis
        this.selectedIcon = null; //indicate which icon is selected
        this.iconInfo = null //informs the user how to place an icon
        this.canvasElements = [] //contains a list of [\type, imgElement, x-location, y-location]\ of all the icon /image on canvas
        this.animation = [] //a list containing [\ canvas, animation generator ]\ of all animations
        
        this.makePopup(this)
	}
    
    //make a dom for a popup
	makePopup(profilePopup){
        
        //black shade
        const shade = document.createElement('div')
        shade.style = 'top: 0; left: 0; position: fixed; width:100%; height:100%; background-color: black; opacity: 0.5;'
        profilePopup.shade = shade
        
        //circluar profile background
        const popupBackground = document.createElement('div')
        popupBackground.style = 'visibility: visible; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 700px; height: 500px; border-radius: 2%; border-color: grey;'
        profilePopup.popup = popupBackground
        
        //left Section
        const leftSection = document.createElement('div')
        leftSection.style = 'float: left; position: relative; width: 30%; height: 100%;'
        
        //pic Section where it will store profile picture
        const profilePicSection = document.createElement('div')
        profilePicSection.style = 'position: relative; width: 98.7%; height: 50%; background-color: #ffffff; border-radius: 3%; border-style: outset; border-color: grey;';
        
        //profile picture header
        const profilePicHeader = document.createElement('h2')
        profilePicHeader.style = 'position: relative; display: inline-block; text-align: center; margin: 0 auto; left: 50%; transform: translate(-50%, 0%); top: 1%;'
        const profileTit = document.createTextNode("");
        profilePicHeader.appendChild(profileTit);
        
        //profile picture
        const canvas = document.createElement('canvas')
        canvas.width = 168
        canvas.height = 168
        canvas.style = 'position: relative; left: calc(50% - 40%); top: 5%; width: 168px; height: 168px; margin: 0 auto; border-radius: 50%; background-color: #D0D3D4;'
        
        //add canvas click listener
        canvas.addEventListener("mousedown", function(e){
            profilePopup.getCanvasLoc(profilePopup, canvas, e)
            if(profilePopup.selectedIcon != null){
                profilePopup.drawOnCanvas(canvas, profilePopup.profilePic, profilePopup.selectedIcon, 'icon', profilePopup.canvasx, profilePopup.canvasy)
                profilePopup.canvasElements.push(['icon', profilePopup.selectedIcon, profilePopup.canvasx, profilePopup.canvasy])
            }
        })
        
        //display how to put icon if its selected
        const iconInfo = document.createElement('h5')
        iconInfo.style = 'display: none; position: relative; text-align: center; font-size: 13px; margin: 0 auto; left: 50%; transform: translate(-50%, 50%); bottom: 0%;'
        const iconInfoText = document.createTextNode("click above to place the icon you selected")
        iconInfo.appendChild(iconInfoText);
        profilePopup.iconInfo = iconInfo
        
        //add Photo section where its right below pic section
        const addPhotoSection = document.createElement('div')
        addPhotoSection.style = 'top: -1px; width: 100%; height: 50%; background-color: #ffffff; border-radius: 2%; border-color: grey; border-style: ridge;';
        
        //add picture button
        const uploadPhoto = document.createElement('input')
        uploadPhoto.type = 'file'
        uploadPhoto.style = 'display:none;'
        
        //add picture Label that wraps the input tag
        const uploadPhotoLabel = document.createElement('label')
        uploadPhotoLabel.style = 'position: relative; display: inline-block; text-align: center; font-size: 30px; margin: 0 auto; left: 50%; transform: translate(-50%, 0%); width: 100%; height: 20%; background-color: white; border-bottom: 1px solid grey;'
        uploadPhotoLabel.appendChild(document.createTextNode("Upload Photo"));
        //add hover effect
        uploadPhotoLabel.addEventListener("mouseover", e => {
            uploadPhotoLabel.style.setProperty("background-color", "#D7DBDD ");
        });
        uploadPhotoLabel.addEventListener("mouseout", e => {
            uploadPhotoLabel.style.setProperty("background-color", "white");
        });
        uploadPhotoLabel.append(uploadPhoto)
        
        //undo button
        const undoButton = document.createElement('button')
        undoButton.style = 'position: relative; display: inline-block; text-align: center; font-size: 30px; margin: 0 auto; left: 50%; transform: translate(-50%, 0%); width: 100%; height: 20%; background-color: white; border: none; border-bottom: 1px solid grey;'
        undoButton.appendChild(document.createTextNode("Undo"));
        //add hover effect
        undoButton.addEventListener("mouseover", e => {
            undoButton.style.setProperty("background-color", "#D7DBDD ");
        });
        undoButton.addEventListener("mouseout", e => {
            undoButton.style.setProperty("background-color", "white");
        });
        undoButton.addEventListener("click", e => {
            if (profilePopup.canvasElements.length != 0){
                profilePopup.canvasElements.pop();
                const ctx1 = canvas.getContext('2d');
                const ctx2 = profilePopup.profilePic.getContext('2d');
                ctx1.clearRect(0, 0, canvas.width, canvas.height);
                ctx2.clearRect(0, 0, profilePopup.profilePic.width, profilePopup.profilePic.height);

                //redraw all the elements in canvasElements
                profilePopup.canvasElements.map(function (element) {
                    profilePopup.drawOnCanvas(canvas, profilePopup.profilePic, element[1], element[0], element[2], element[3])
                })
            }
        });
        
        //clear button
        const clearButton = document.createElement('button')
        clearButton.style = 'position: relative; display: inline-block; text-align: center; font-size: 30px; margin: 0 auto; left: 50%; transform: translate(-50%, 0%); width: 100%; height: 20%; background-color: white; border: none; border-bottom: 1px solid grey;'
        clearButton.appendChild(document.createTextNode("Clear"));
        //add hover effect
        clearButton.addEventListener("mouseover", e => {
            clearButton.style.setProperty("background-color", "#D7DBDD ");
        });
        clearButton.addEventListener("mouseout", e => {
            clearButton.style.setProperty("background-color", "white");
        });
        clearButton.addEventListener("click", e => {
            profilePopup.canvasElements = []
            const ctx1 = canvas.getContext('2d');
            const ctx2 = profilePopup.profilePic.getContext('2d');
            ctx1.clearRect(0, 0, canvas.width, canvas.height);
            ctx2.clearRect(0, 0, profilePopup.profilePic.width, profilePopup.profilePic.height);
            
            //get rid of all the animation
            if(profilePopup.animation.length != 0){
                profilePopup.animation[0].style.setProperty("border-color", "grey");
                profilePopup.animation[1].canvasElements = []
                profilePopup.animation[1].clicked = true
                profilePopup.animation = []
            }
        });
        
        //add eventlistener in uploadPhoto
        uploadPhoto.addEventListener("change", function(){
            //image that will hold the profile picture
            const profileimage = document.createElement('img')
            profileimage.id = 'profileImg'
            profileimage.style = 'visibility: hidden; width: 150px; height: 150px;'
            profilePopup.setProfileImg(uploadPhoto, profilePopup, canvas, profileimage);
            
            //add eventlistener when upload photo
            profileimage.addEventListener('load', e => {
                profilePopup.drawOnCanvas(canvas, profilePopup.profilePic, profileimage, 'background', null, null)
                profilePopup.canvasElements.push(['background', profileimage, null, null])
            });
            addPhotoSection.append(profileimage)
        });
        
        //right Section
        const rightSection = document.createElement('div')
        rightSection.style = 'float: left; position: relative; width: 70%; height: 100%;'
        
        //close button
        const closeButton = document.createElement('button')
        closeButton.style = 'position: absolute; top: 0px; right: 0px; width: 25px; height: 25px; background-color: red; border-radius: 50%;'
        
        //add button listener to close the popup when exit
        closeButton.addEventListener('click', e => {
            popupBackground.style.setProperty("display", "none");
            shade.style.setProperty("display", "none");
        });
        
        //delete bar section
        const deleteSection = document.createElement('div')
        deleteSection.style = 
            'position: relative; width: 100%; height: 30px; background-color: #ffffff; border-style: ridge; border-color: grey; border-radius: 2%;';
        
        //story board title
        const deleteHeader = document.createElement('h2')
        deleteHeader.style = 'position: relative; display: inline-block; text-align: center; margin: 0 auto; left: calc(50% - 35%); top: 1%;'
        const deleteTit = document.createTextNode("Animation Maker");
        deleteHeader.appendChild(deleteTit);
        
        //story board
        const storyBoard = document.createElement('div')
        storyBoard.style = 'position: relative; width: 100%; height: 91%; background-color: #ffffff';
        
        //icon section
        const iconSection = document.createElement('div')
        iconSection.style = 'top: -2px; position: relative; width: 100%; height: 20%; background-color: #ffffff; border-style: ridge; border-color: grey;';
        
        //icon image container
        const iconContainer = document.createElement('div')
        iconContainer.style = 
            'float: left; position: relative; top: 50%; left: 50%; width: 90%; transform: translate(-50%, -50%); height: 40%;';
        
        profilePopup.icons.map(function (icon) {
            const newIcon = new IconGenereator(canvas, profilePopup.profilePic, iconContainer, profilePopup, icon)
        })
        
        //pic animation
        const picAnimationContainer = document.createElement('div')
        picAnimationContainer.style = 'top: -3px; position: relative; width: 100%; height: 74%; background-color: #ffffff; border-style: ridge; border-radius: 2%; border-color: grey;';
        
        //animation container
        const animationContainer = document.createElement('div')
        animationContainer.style = 
            'float: left; position: relative; top: 50%; left: 50%; width: 70%; height: 90%; transform: translate(-50%, -50%);';
        
        //animations from other js files
        //snow animation
        const snowCanvas = document.createElement('canvas')
        snowCanvas.width = 168
        snowCanvas.height = 168
        snowCanvas.style = 'float: left; position: relative; width: 168px; height: 168px; margin: 0 auto; border-radius: 50%; border: 1px solid grey; background-color: #B3B6B7 ;'
        const snowAnimationButton = new ProfileSnowGenerator(snowCanvas, profilePopup, profilePopup.canvasElements);
        snowAnimationButton.twoCanvas = false;
        snowAnimationButton.canvasElements = []
        snowAnimationButton.update()
        
        snowCanvas.addEventListener('click', function(){
            const snowAnimation = new ProfileSnowGenerator(canvas, profilePopup, profilePopup.canvasElements);
            profilePopup.resetCanvas(profilePopup, snowCanvas, snowAnimation)
        });
        
        //rain animation
        const rainCanvas = document.createElement('canvas')
        rainCanvas.width = 168
        rainCanvas.height = 168
        rainCanvas.style = 'float: left; position: relative; width: 168px; height: 168px; margin: 0 auto; border-radius: 50%; border: 1px solid grey; background-color: #B3B6B7 ;'
        const rainAnimationButton = new ProfileRainGenerator(rainCanvas, profilePopup, profilePopup.canvasElements);
        rainAnimationButton.twoCanvas = false;
        rainAnimationButton.canvasElements = []
        rainAnimationButton.update()
        
        rainCanvas.addEventListener('click', function(){
            const rainAnimation = new ProfileRainGenerator(canvas, profilePopup, profilePopup.canvasElements);
            profilePopup.resetCanvas(profilePopup, rainCanvas, rainAnimation)
        });
        
        //heart animation
        const heartCanvas = document.createElement('canvas')
        heartCanvas.width = 168
        heartCanvas.height = 168
        heartCanvas.style = 'position: relative; width: 168px; height: 168px; margin: 0 auto; border-radius: 50%; border: 1px solid grey; background-color: #B3B6B7 ;'
        const heartAnimationButton = new ProfileHeartGenerator(heartCanvas, profilePopup, profilePopup.canvasElements);
        heartAnimationButton.twoCanvas = false;
        heartAnimationButton.canvasElements = []
        heartAnimationButton.update()
        
        heartCanvas.addEventListener('click', function(){
            const heartAnimation = new ProfileHeartGenerator(canvas, profilePopup, profilePopup.canvasElements);
            profilePopup.resetCanvas(profilePopup, heartCanvas, heartAnimation)
        });
        
        //Diamond animation
        const diamondCanvas = document.createElement('canvas')
        diamondCanvas.width = 168
        diamondCanvas.height = 168
        diamondCanvas.style = 'position: relative; width: 168px; height: 168px; margin: 0 auto; border-radius: 50%; border: 1px solid grey; background-color: #B3B6B7 ;'
        const diamondAnimationButton = new ProfileDiamondGenerator(diamondCanvas, profilePopup, profilePopup.canvasElements);
        diamondAnimationButton.twoCanvas = false;
        diamondAnimationButton.canvasElements = []
        diamondAnimationButton.update()
        
        diamondCanvas.addEventListener('click', function(){
            const diamondAnimation = new ProfileDiamondGenerator(canvas, profilePopup, profilePopup.canvasElements);
            profilePopup.resetCanvas(profilePopup, diamondCanvas, diamondAnimation)
        });
        
        //append snow Canvas to animation Container
        animationContainer.append(snowCanvas)
        
        //append rain Canvas to animation Container
        animationContainer.append(rainCanvas)
        
        //append flower Canvas to animation Container
        animationContainer.append(heartCanvas)
        
        //append diamond Canvas to animation Container
        animationContainer.append(diamondCanvas)
        
        //add picture button on addPhotoSection
        addPhotoSection.append(uploadPhotoLabel)
        
        //add undo button on addPhotoSection
        addPhotoSection.append(undoButton)
        
        //add clear button on addPhotoSection
        addPhotoSection.append(clearButton)
        
        //add picture title
        profilePicSection.append(profilePicHeader)
        
        //add picture to profilePicSection
        profilePicSection.append(canvas)
        
        //add info Icon to profile pic section
        profilePicSection.append(iconInfo)
        
        //add ProfilePicSection to left Section
        leftSection.append(profilePicSection)
        
        //add addPhotoSection to left Section
        leftSection.append(addPhotoSection)
        
        //add close button on the story Board Section
        deleteSection.append(closeButton)
        
        //add story board header on the story Board Section
        deleteSection.append(deleteHeader)
        
        //add story board in the story board section
        deleteSection.append(storyBoard)
        
        //add story Board Section to the right section
        rightSection.append(deleteSection)
        
        //add icon container in icon section
        iconSection.append(iconContainer)
        
        //add icon Section to the right section
        rightSection.append(iconSection)
        
        //add animationContainer in picAnimationContainer
        picAnimationContainer.append(animationContainer)
        
        //add pic icon section to the right section
        rightSection.append(picAnimationContainer)
        
        //add leftSection to popupBackground
        popupBackground.append(leftSection)
        
        //add rightSection to popupBackground
        popupBackground.append(rightSection)
        
        const body = document.querySelector('body')
        body.append(shade)
		body.append(popupBackground)
    }
    
    //set the img of the profile
    setProfileImg(addPhoto, profilePopup, canvas, profileImg) {

        profilePopup.img = addPhoto.value
        if (addPhoto.files && addPhoto.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                profileImg.src = e.target.result
                profileImg.width = 150
                profileImg.height= 150
            };
            reader.readAsDataURL(addPhoto.files[0]);
        }
        addPhoto.value = '';
    }
    
    //change profile image by drawing it on canvas
    drawOnCanvas(canvas1, canvas2, img, type, x, y) {
        //change the popup profile pic
        const ctx = canvas1.getContext("2d");
        
        //change the ori profile pic
        const ctx2 = canvas2.getContext("2d")
        
        if(type == 'background'){
            ctx.drawImage(img, 0, 0, canvas1.width, canvas1.height);
            ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height)
        }
        else if (type == 'icon'){
            const size = img.iconWidth / 4
            ctx.drawImage(img.icon,0, 0, img.iconWidth, img.iconHeight, x - (size/2), y - (size/2), size, size);
            ctx2.drawImage(img.icon,0, 0, img.iconWidth, img.iconHeight,  x - (size/2), y - (size/2), size, size);
        }
    }
    
    //set popUp visible
    setPopupVisible(profilePopup){
        profilePopup.popup.style.setProperty("display", "block");
        profilePopup.shade.style.setProperty("display", "block");
    }
    
    //get canvas location
    getCanvasLoc(popup, canvas, event){
        const profile = canvas.getBoundingClientRect();
        const x_axis = event.clientX - profile.left;
        const y_axis = event.clientY - profile.top;
        
        popup.canvasx = x_axis;
        popup.canvasy = y_axis;
    }
    
    //resets canvas when changing animation
    resetCanvas(popup, animationCanvas, animation){
        if (popup.animation.length != 0){
            if(popup.animation[0] != animationCanvas){
                popup.animation[0].style.setProperty("border-color", "grey");
                popup.animation[1].clicked = true
                popup.animation = [animationCanvas, animation]
                animation.update()
                animationCanvas.style.setProperty("border-color", "blue");
            }
            else{
                popup.animation[1].clicked = true
                popup.animation = []
                animationCanvas.style.setProperty("border-color", "grey");
            }
        }
        else{
            animationCanvas.style.setProperty("border-color", "blue");
            animation.update()
            popup.animation = [animationCanvas, animation]
        }
    }
    
    //display how to put icon if its selected
    iconInfoDisplay(iconInfo, clicked){
        if(clicked){
            iconInfo.style.setProperty("display", "inline-block");
        }
        else{
            iconInfo.style.setProperty("display", "none");
        }
    }
}

//Icon gen
function IconGenereator(popupCanvas, profileCanvas, container, popup, iconName) {
    this.popupCanvas = popupCanvas;
    this.profileCanvas = profileCanvas;
    this.container = container;
    this.icon = null;
    this.iconWidth = 0;
    this.iconHeight = 0;
    this.clicked = true;
    
    this.makeIcon(this, popup, iconName)
    
}

IconGenereator.prototype = {
    //make icon in the Icon container
    makeIcon: function(IconGen, popup, iconName) {
        const icon = document.createElement('img')
        IconGen.icon = icon
        
        icon.src = iconName;
        
        //update icon selected in the popup when click icon
        icon.addEventListener("click", function(){
            if(IconGen.clicked){
                if (popup.selectedIcon != null){
                    popup.selectedIcon.icon.style.setProperty("border-color", "initial")
                    popup.selectedIcon.clicked = true
                }
                popup.selectedIcon = IconGen;
                
                //display icon info
                popup.iconInfoDisplay(popup.iconInfo,IconGen.clicked)
                
                IconGen.clicked = false
                icon.style.setProperty("border-color", "blue");
            }
            else{
                popup.selectedIcon = null
                
                //display icon info
                popup.iconInfoDisplay(popup.iconInfo,IconGen.clicked)
                
                IconGen.clicked = true
                icon.style.setProperty("border-color", "initial");
            }
        })
        
        //set icon width and height and adjust css
        icon.onload = function() {
            IconGen.iconWidth = this.width
            IconGen.iconHeight = this.height
            icon.style = 'float: left; width: 40px; height: 40px; background-color: #ECF0F1; border-style: ridge;';
        }
        
        IconGen.container.append(icon)
    },
}

//decorate canvas animation maker
//@id   user can set the id of the maker so they can specify where they want to use it in their DOM
//@canvasWidth  width of the canvas
//@canvasHeight height of the canvas
function canvasAnimationDecorationMaker(id, canvasWidth, canvasHeight) {
    this.popUp = null;
    this.id = id
    this.canvasWidth= canvasWidth;
    this.canvasHeight = canvasHeight;
    this.makeCanvasAnimationDecorationMaker.bind(this)
	this.makeCanvasAnimationDecorationMaker()
    this.edge;
    this.setEdgeColor.bind(this)
}

// Added common funcionality to the prototype property of the constructor.
// Add functionality for profilepicturegenerator
canvasAnimationDecorationMaker.prototype = {
    
    //make a circular shaped canvas inside div to store profile picture
    makeCanvasAnimationDecorationMaker: function() {
        //circluar profile background
        const circle = document.createElement('div')
        circle.style = 'position: relative; border-radius: 50%; background-color: white;'
        circle.style.setProperty("width", (this.canvasWidth + 1.5).toString() + "px");
        circle.style.setProperty("height", (this.canvasHeight + 1.5).toString() + "px");
        this.edge = circle
        
        //profile image
        const picture = document.createElement('canvas')
        picture.style = 'position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; background-color: #D0D3D4;'
        picture.width = this.canvasWidth;
        picture.height = this.canvasHeight;
        
        picture.style.setProperty("width", this.canvasWidth.toString() + "px");
        picture.style.setProperty("height", this.canvasHeight.toString() + "px");
        
        
        circle.append(picture)
        
        const body = document.querySelector('#' + this.id)
		body.append(circle)
        
        //create a popup and save it in profilepic generator
        circle.addEventListener("click", function(){
            if(this.popUp == null){
                this.popUp = new ProfilePopup(picture)
            }else{
                this.popUp.setPopupVisible(this.popUp)
            }
        });
    },
    
    //sets the edge color if the input color is a valid color
    //@color: the color of the edge of the canvas
    setEdgeColor: function(color) {
        //check if its a valid color
        const validColor = new Option().style;
        validColor.color = color;
        if (validColor.color == color){
            this.edge.style.setProperty("background-color", color);
        }
    }
    
}

//////////////////////////////////////////////////////////////////////////
//Animations for decorate canvas animation maker
//////////////////////////////////////////////////////////////////////////
class ProfileCircle {
    constructor(x, y, r, c, vx, vy){
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.velocityX = vx;
        this.velocityY = vy;
    }
    
    draw(circleObj, ctx){
        ctx.beginPath();
        ctx.fillStyle = circleObj.c
        ctx.arc(circleObj.x, circleObj.y, circleObj.r, 0, Math.PI * 2);
        ctx.fill();
    }
        
    move(circleObj, ctx1, ctx2, twoCanvas){
        circleObj.x += circleObj.velocityX
        circleObj.y += circleObj.velocityY
        circleObj.draw(circleObj, ctx1)
        if (twoCanvas){
            circleObj.draw(circleObj, ctx2)
        }
    }
    
}

//snow Generator
function ProfileSnowGenerator(canvas, popup, canvasElement) {
    this.canvas = canvas
    this.twoCanvas = true
    this.clicked = false;
    this.popup = popup
    this.canvasElements = canvasElement
    this.circles = []
    this.makeSnow(this)
    this.update.bind(this)
}

ProfileSnowGenerator.prototype = {
    
    //create circles for snow
    makeSnow: function(snowObj){
        for (let i = 0; i < 40; i++) {
            const r = 2
            const x = Math.random() * (snowObj.canvas.width - r * 2) + r;
            const y = Math.random() * (snowObj.canvas.height - r * 2) + r;
            const c = 'white';
            snowObj.circles.push(new ProfileCircle(x, y, r, c, 0, 0.9));
        }
    },
    
    //update any animation with the given circles
    update: function() {
        const ctx1 = this.canvas.getContext('2d');
        const ctx2 = this.popup.profilePic.getContext('2d');
        ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.twoCanvas){
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
        }
        
        const snowGeneratorObj = this
        
        snowGeneratorObj.canvasElements.map(function (element) {
            snowGeneratorObj.popup.drawOnCanvas(snowGeneratorObj.canvas, snowGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
        })
        
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].move(this.circles[i], ctx1, ctx2, this.twoCanvas);
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                this.circles[i].x = Math.random() * (this.canvas.width - 1 * 2) + 1;
                this.circles[i].y = 0;
            }
        }
        
        if(this.clicked){
            cancelAnimationFrame(this.update.bind(this))
            ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
            snowGeneratorObj.canvasElements.map(function (element) {
                snowGeneratorObj.popup.drawOnCanvas(snowGeneratorObj.canvas, snowGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
            })
        }
        else{
            requestAnimationFrame(this.update.bind(this))//call update
        }
    }
    
}

//rain Generator
function ProfileRainGenerator(canvas, popup, canvasElement) {
    this.canvas = canvas
    this.twoCanvas = true
    this.clicked = false;
    this.popup = popup
    this.canvasElements = canvasElement
    this.circles = []
    this.makeRain(this)
    this.update.bind(this)
}

ProfileRainGenerator.prototype = {
    
    //create circles for rain
    makeRain: function(rainObj){
        for (let i = 0; i < 50; i++) {
            const r = 1.5
            const x = Math.random() * (rainObj.canvas.width - r * 2) + r;
            const y = Math.random() * (rainObj.canvas.height - r * 2) + r;
            const c = 'skyblue';
            rainObj.circles.push(new ProfileCircle(x, y, r, c, 0, 5));
        }
    },
    
    //update any animation with the given circles
    update: function() {
        const ctx1 = this.canvas.getContext('2d');
        const ctx2 = this.popup.profilePic.getContext('2d');
        ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.twoCanvas){
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
        }
        
        const rainGeneratorObj = this
        
        rainGeneratorObj.canvasElements.map(function (element) {
            rainGeneratorObj.popup.drawOnCanvas(rainGeneratorObj.canvas, rainGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
        })
        
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].move(this.circles[i], ctx1, ctx2, this.twoCanvas);
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                this.circles[i].x = Math.random() * (this.canvas.width - 1 * 2) + 1;
                this.circles[i].y = 0;
            }
        }
        
        if(this.clicked){
            cancelAnimationFrame(this.update.bind(this))
            ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
            rainGeneratorObj.canvasElements.map(function (element) {
                rainGeneratorObj.popup.drawOnCanvas(rainGeneratorObj.canvas, rainGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
            })
        }
        else{
            requestAnimationFrame(this.update.bind(this))//call update
        }
    }
    
}

//heart Generator
function ProfileHeartGenerator(canvas, popup, canvasElement) {
    this.canvas = canvas
    this.twoCanvas = true
    this.clicked = false;
    this.popup = popup
    this.canvasElements = canvasElement
    this.circles = []
    this.makeheart(this)
    this.update.bind(this)
}

ProfileHeartGenerator.prototype = {
    
    //create circles for heart
    makeheart: function(heartObj){
        for (let i = 0; i < 15; i++) {
            const r = 1
            const x = Math.random() * (heartObj.canvas.width - r * 2) + r;
            const y = Math.random() * (heartObj.canvas.height - r * 2) + r;
            const c = 'red';
            heartObj.circles.push(new ProfileCircle(x, y, r, c, 0.3, 0.7));
            heartObj.circles.push(new ProfileCircle(x+2, y-0.5, r, 'green', 0.3, 0.7));
            heartObj.circles.push(new ProfileCircle(x-2, y-0.5, r, 'green', 0.3, 0.7));
            heartObj.circles.push(new ProfileCircle(x, y+0.5, r, 'green', 0.3, 0.7));
        }
    },
    
    //update any animation with the given circles
    update: function() {
        const ctx1 = this.canvas.getContext('2d');
        const ctx2 = this.popup.profilePic.getContext('2d');
        ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.twoCanvas){
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
        }
        
        const heartGeneratorObj = this
        
        heartGeneratorObj.canvasElements.map(function (element) {
            heartGeneratorObj.popup.drawOnCanvas(heartGeneratorObj.canvas, heartGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
        })
        
        for (let i = 0; i < this.circles.length; i+=4) {
            this.circles[i].move(this.circles[i], ctx1, ctx2, this.twoCanvas);
            this.circles[i+1].move(this.circles[i+1], ctx1, ctx2, this.twoCanvas);
            this.circles[i+2].move(this.circles[i+2], ctx1, ctx2, this.twoCanvas);
            this.circles[i+3].move(this.circles[i+3], ctx1, ctx2, this.twoCanvas);
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                const x = Math.random() * (this.canvas.width - 1 * 2) + 1;
                const y = 3
                this.circles[i].x = x
                this.circles[i].y = y;
                this.circles[i+1].x = x+2
                this.circles[i+1].y = y-0.5;
                this.circles[i+2].x = x-2
                this.circles[i+2].y = y-0.5;
                this.circles[i+3].x = x
                this.circles[i+3].y = y + 0.5;
            }
        }
        
        if(this.clicked){
            cancelAnimationFrame(this.update.bind(this))
            ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
            heartGeneratorObj.canvasElements.map(function (element) {
                heartGeneratorObj.popup.drawOnCanvas(heartGeneratorObj.canvas, heartGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
            })
        }
        else{
            requestAnimationFrame(this.update.bind(this))//call update
        }
    }
    
}

//diamond Generator
function ProfileDiamondGenerator(canvas, popup, canvasElement) {
    this.canvas = canvas
    this.twoCanvas = true
    this.clicked = false;
    this.popup = popup
    this.canvasElements = canvasElement
    this.circles = []
    this.makeDiamond.bind(this)
    this.makeDiamond()
    this.update.bind(this)
}

ProfileDiamondGenerator.prototype = {
    
    //create circles for diamond
    makeDiamond: function(){
        for (let i = 0; i < 30; i++) {
            const r = 2
            const x = randomNumerGen(r, this.canvas.width);
            const y = randomNumerGen(r, this.canvas.height);
            const c = 'white';
            this.circles.push(new ProfileCircle(x, y, r, c, 0.3, 0.7));
            this.circles.push(new ProfileCircle(x+2, y, 1, 'skyblue', 0.3, 0.7));
            this.circles.push(new ProfileCircle(x-2, y, 1, 'skyblue', 0.3, 0.7));
            this.circles.push(new ProfileCircle(x, y+2, 1, 'skyblue', 0.3, 0.7));
            this.circles.push(new ProfileCircle(x, y-2, 1, 'skyblue', 0.3, 0.7));
        }
    },
    
    //update any animation with the given circles
    update: function() {
        const ctx1 = this.canvas.getContext('2d');
        const ctx2 = this.popup.profilePic.getContext('2d');
        ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.twoCanvas){
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
        }
        
        const diamondGeneratorObj = this
        
        diamondGeneratorObj.canvasElements.map(function (element) {
            diamondGeneratorObj.popup.drawOnCanvas(diamondGeneratorObj.canvas, diamondGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
        })
        
        for (let i = 0; i < this.circles.length; i+= 5) {
            this.circles[i].move(this.circles[i], ctx1, ctx2, this.twoCanvas);
            this.circles[i+1].move(this.circles[i+1], ctx1, ctx2, this.twoCanvas);
            this.circles[i+2].move(this.circles[i+2], ctx1, ctx2, this.twoCanvas);
            this.circles[i+3].move(this.circles[i+3], ctx1, ctx2, this.twoCanvas);
            this.circles[i+4].move(this.circles[i+4], ctx1, ctx2, this.twoCanvas);
            
            //make the circles fall again
            if (this.circles[i].y + this.circles[i].r > this.canvas.height) {
                const x = randomNumerGen(1, this.canvas.width)
                const y = 0
                this.circles[i].x = x
                this.circles[i].y = y;
                this.circles[i+1].x = x+2
                this.circles[i+1].y = y;
                this.circles[i+2].x = x-2
                this.circles[i+2].y = y;
                this.circles[i+3].x = x
                this.circles[i+3].y = y + 2;
                this.circles[i+4].x = x
                this.circles[i+4].y = y - 2;
            }
        }
        
        if(this.clicked){
            cancelAnimationFrame(this.update.bind(this))
            ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx2.clearRect(0, 0, this.popup.profilePic.width, this.popup.profilePic.height);
            diamondGeneratorObj.canvasElements.map(function (element) {
                diamondGeneratorObj.popup.drawOnCanvas(diamondGeneratorObj.canvas, diamondGeneratorObj.popup.profilePic, element[1], element[0], element[2], element[3])
            })
        }
        else{
            requestAnimationFrame(this.update.bind(this))//call update
        }
    }
    
}
