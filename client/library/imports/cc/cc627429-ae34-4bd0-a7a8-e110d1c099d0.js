"use strict";
cc._RF.push(module, 'cc627QprjRL0Keo4RDRwJnQ', 'bullet');
// Script/bullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,
        speedX: 0,
        speedY: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},
    setAngle: function setAngle(a, b) {
        // console.log(this.speedX)
        // console.log(this.speedY)

        // console.log(a.x+","+a.y+"|"+b.x+","+b.y)
        this.bx = parseInt(a.x - b.x);
        this.by = parseInt(a.y - b.y);

        // console.log(this.speedX+","+this.speedY);
        var normalizedVector = cc.pNormalize(cc.v2(this.bx, this.by));
        // console.log(normalizedVector)
        var radians = Math.atan2(normalizedVector.y, -normalizedVector.x);
        // console.log(radians)

        this.speedX = Math.abs(this.speedX * 5 * normalizedVector.x);
        this.speedY = Math.abs(this.speedY * 5 * normalizedVector.y);

        // this.speedX = parseInt(a.x)/this.speedX;
        // this.speedY = parseInt(a.y)/this.speedY;

        // console.log(parseInt(a.x)+","+parseInt(a.y));
        if (this.bx >= 0 && this.by >= 0) {
            this.speedX = this.speedX * 1;
            this.speedY = this.speedY * 1;
        } else if (this.bx <= 0 && this.by >= 0) {
            this.speedX = this.speedX * -1;
            this.speedY = this.speedY * 1;
        } else if (this.bx <= 0 && this.by <= 0) {
            this.speedX = this.speedX * -1;
            this.speedY = this.speedY * -1;
        } else if (this.bx >= 0 && this.by <= 0) {
            this.speedX = this.speedX * 1;
            this.speedY = this.speedY * -1;
        }

        console.log(this.speedX + "," + this.speedY);

        // var degree = 180/Math.PI * radians; 

        // var rotateSpeed = 2 * Math.PI;  
        // //那么旋转1弧度所用时间为  
        // var rotate_1rad_time = 1 / rotateSpeed;  
        // //所以旋转的时长为  
        // var rotateDuration = Math.abs(radians * rotate_1rad_time); 

        // console.log(rotateDuration+","+degree)


        // var t = cc.pDistance(cc.p(a.x,a.y),b)/this.speed;

        // var moveBy = cc.moveBy(t, cc.p(a.x,a.y)).easing(cc.EaseOutSine(3)); 
        // this.node.runAction(moveBy);
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        // this.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.node.x += this.speedX * dt;
        this.node.y += this.speedY * dt;
    }
});

cc._RF.pop();