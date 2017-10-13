cc.Class({
    extends: cc.Component,

    properties: {
        // bullet: {
        //     default: null,
        //     type: cc.Prefeb
        // }
        bullet: cc.Prefab,
        bp:cc.Node
    },

    // use this for initialization
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        
        // this.newStar = cc.instantiate(this.bullet);
        // this.bulletScript = newStar.getComponent("bullet");
        // this.bulletScript.setAngle();

        // console.log(this.bp.getPosition())
    },

    onTouchBegan: function (event) {
        var scene = cc.director.getScene();

        var touchLoc = this.bp.convertToWorldSpaceAR()
        // console.log(this.bp.convertToWorldSpaceAR())
        var x1 = touchLoc.x;
        var y1 = touchLoc.y;
        //jiao du角度
        var mousePosition = event.touch.getLocation();
        var x2 = mousePosition.x;
        var y2 = mousePosition.y;
        
        // var deltaRotation = 90-Math.atan2(y2-y1,x2-x1)*180/Math.PI;
        // this.node.setRotation(deltaRotation-90)

        //炮口旋转
           // console.log(this.speedX+","+this.speedY);
        var normalizedVector = cc.pNormalize(cc.v2(x1-x2,y1-y2));
        // console.log(normalizedVector)
        var radians = Math.atan2(normalizedVector.y, - normalizedVector.x); 
        // console.log(normalizedVector.x+","+normalizedVector.y)

        var degree = 180/Math.PI * radians; 


        var rotateSpeed = 2 * Math.PI;  
        //那么旋转1弧度所用时间为  
        var rotate_1rad_time = 1 / rotateSpeed;  
        //所以旋转的时长为  
        var rotateDuration = Math.abs(radians * rotate_1rad_time); 

        // console.log(rotateDuration+","+degree)
        
        var rotation = cc.rotateTo(0.3,(degree+90))
        var call = cc.callFunc(function(){

            var touchLoc = this.bp.convertToWorldSpaceAR()

            var bullet = cc.instantiate(this.bullet);
            // bullet.position = mousePosition;
            bullet.rotation = (degree+90)
            bullet.setPosition(touchLoc.x,touchLoc.y)
            
            var setAngle = bullet.getComponent("bullet");
            setAngle.setAngle(mousePosition,this.node.getPosition());

              // bullet.active = true;
            scene.addChild(bullet);

         },this);
        // console.log(radians)
        var seq = cc.sequence(rotation,call);
        this.node.runAction(seq)


      
    }
});
