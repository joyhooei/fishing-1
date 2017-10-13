require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"animate":[function(require,module,exports){
"use strict";
cc._RF.push(module, '9995daeItZP2rW2WjkH4C8f', 'animate');
// Script/animate.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        ani: cc.Animation
    },

    // use this for initialization
    onLoad: function onLoad() {},
    playJump: function playJump() {
        this.ani.play("jump");
    },
    playRun: function playRun() {
        this.ani.play("run");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"bullet":[function(require,module,exports){
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
},{}],"fish":[function(require,module,exports){
"use strict";
cc._RF.push(module, '6b5c7qcIK1Hm4tszB+DtseW', 'fish');
// Script/fish.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        ani: cc.Animation
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.ani.play("fish");
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        // this.node.color = "red"
        // this.node.destroy();
        this.node.color = cc.Color.RED;
    },
    onCollisionExit: function onCollisionExit(other, self) {
        this.node.color = cc.Color.WHITE;

        // this.node.color = ""
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"pool":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'cca78gm9lNAcY/qFa5pNZPK', 'pool');
// Script/pool.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        enemyPrefab: cc.Prefab
    },
    onLoad: function onLoad() {
        this.enemyPool = new cc.NodePool();
        var initCount = 5;
        for (var i = 0; i < initCount; ++i) {
            var _enemy = cc.instantiate(this.enemyPrefab); // 创建节点
            this.enemyPool.put(_enemy); // 通过 putInPool 接口放入对象池
        }

        console.log(this.enemyPool.size());

        var enemy1 = null;
        var enemy2 = null;
        var enemy3 = null;
        if (this.enemyPool.size() > 0) {
            // 通过 size 接口判断对象池中是否有空闲的对象
            enemy1 = this.enemyPool.get();
            enemy2 = this.enemyPool.get();
            enemy3 = this.enemyPool.get();
        } else {
            // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            enemy = cc.instantiate(this.enemyPrefab);
        }
        enemy1.setPosition(100, 100);
        enemy2.setPosition(200, 200);
        this.node.addChild(enemy1); // 将生成的敌人加入节点树
        this.node.addChild(enemy2);
        this.node.addChild(enemy3);
        //enemy.getComponent('Enemy').init(); //接下来就可以调用 enemy 身上的脚本进行初始化
        console.log(this.enemyPool.size());
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {}
});

cc._RF.pop();
},{}],"shoot":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'df183HCsC9IhoOfrQQUeUBL', 'shoot');
// Script/shoot.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // bullet: {
        //     default: null,
        //     type: cc.Prefeb
        // }
        bullet: cc.Prefab,
        bp: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);

        // this.newStar = cc.instantiate(this.bullet);
        // this.bulletScript = newStar.getComponent("bullet");
        // this.bulletScript.setAngle();

        // console.log(this.bp.getPosition())
    },

    onTouchBegan: function onTouchBegan(event) {
        var scene = cc.director.getScene();

        var touchLoc = this.bp.convertToWorldSpaceAR();
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
        var normalizedVector = cc.pNormalize(cc.v2(x1 - x2, y1 - y2));
        // console.log(normalizedVector)
        var radians = Math.atan2(normalizedVector.y, -normalizedVector.x);
        // console.log(normalizedVector.x+","+normalizedVector.y)

        var degree = 180 / Math.PI * radians;

        var rotateSpeed = 2 * Math.PI;
        //那么旋转1弧度所用时间为  
        var rotate_1rad_time = 1 / rotateSpeed;
        //所以旋转的时长为  
        var rotateDuration = Math.abs(radians * rotate_1rad_time);

        // console.log(rotateDuration+","+degree)

        var rotation = cc.rotateTo(0.3, degree + 90);
        var call = cc.callFunc(function () {

            var touchLoc = this.bp.convertToWorldSpaceAR();

            var bullet = cc.instantiate(this.bullet);
            // bullet.position = mousePosition;
            bullet.rotation = degree + 90;
            bullet.setPosition(touchLoc.x, touchLoc.y);

            var setAngle = bullet.getComponent("bullet");
            setAngle.setAngle(mousePosition, this.node.getPosition());

            // bullet.active = true;
            scene.addChild(bullet);
        }, this);
        // console.log(radians)
        var seq = cc.sequence(rotation, call);
        this.node.runAction(seq);
    }
});

cc._RF.pop();
},{}]},{},["animate","bullet","fish","pool","shoot"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYW5pbWF0ZS5qcyIsImFzc2V0cy9TY3JpcHQvYnVsbGV0LmpzIiwiYXNzZXRzL1NjcmlwdC9maXNoLmpzIiwiYXNzZXRzL1NjcmlwdC9wb29sLmpzIiwiYXNzZXRzL1NjcmlwdC9zaG9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYUTs7QUFjWjtBQUNBO0FBR0E7QUFDSTtBQUNIO0FBQ0Q7QUFDSTtBQUVIOztBQUVEO0FBQ0E7O0FBRUE7QUFoQ0s7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBSFE7O0FBTVo7QUFDQTtBQUdBO0FBQ0c7QUFDQTs7QUFFQztBQUNBO0FBQ0E7O0FBR0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNJO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDSDs7QUFFRjs7QUFHQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHRDs7QUFFQTtBQUNBO0FBRUY7QUFDRDtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0E7QUFHSDtBQS9FSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWFE7O0FBY1o7QUFDQTtBQUNJO0FBRUg7QUFDRDtBQUNJO0FBQ0E7QUFDQTtBQUdIO0FBQ0Q7QUFDSTs7QUFHQTtBQUNIO0FBQ0Q7QUFDQTs7QUFFQTtBQXRDSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUQ7QUFDQztBQURXO0FBR2Y7QUFDSTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0g7O0FBRUQ7O0FBRUE7QUFDSTtBQUNJO0FBQ1I7QUFBaUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0g7QUFBUTtBQUNMO0FBQ0g7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIOztBQUVHO0FBQ0E7QUFyQ0s7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTlE7O0FBU1o7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNIOztBQUVEO0FBQ0k7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFRTtBQUNGO0FBRUY7QUFDRjtBQUNBO0FBQ0E7QUFJSDtBQWxGSSIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIGFuaTpjYy5BbmltYXRpb25cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9LFxuICAgIHBsYXlKdW1wOmZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuYW5pLnBsYXkoXCJqdW1wXCIpO1xuICAgIH0sXG4gICAgcGxheVJ1bjpmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmFuaS5wbGF5KFwicnVuXCIpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iLCJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGVlZDoxMDAsXG4gICAgICAgIHNwZWVkWDowLFxuICAgICAgICBzcGVlZFk6MFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFxuICAgIH0sXG4gICAgc2V0QW5nbGU6ZnVuY3Rpb24oYSxiKXtcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNwZWVkWClcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNwZWVkWSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhLngrXCIsXCIrYS55K1wifFwiK2IueCtcIixcIitiLnkpXG4gICAgICAgIHRoaXMuYnggPSBwYXJzZUludChhLngtYi54KTtcbiAgICAgICAgdGhpcy5ieSA9IHBhcnNlSW50KGEueS1iLnkpO1xuXG5cbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlZWRYK1wiLFwiK3RoaXMuc3BlZWRZKTtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRWZWN0b3IgPSBjYy5wTm9ybWFsaXplKGNjLnYyKHRoaXMuYngsdGhpcy5ieSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3JtYWxpemVkVmVjdG9yKVxuICAgICAgICB2YXIgcmFkaWFucyA9IE1hdGguYXRhbjIobm9ybWFsaXplZFZlY3Rvci55LCAtIG5vcm1hbGl6ZWRWZWN0b3IueCk7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYWRpYW5zKVxuXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5hYnModGhpcy5zcGVlZFgqNSAqIG5vcm1hbGl6ZWRWZWN0b3IueCk7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5hYnModGhpcy5zcGVlZFkqNSAqIG5vcm1hbGl6ZWRWZWN0b3IueSk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnNwZWVkWCA9IHBhcnNlSW50KGEueCkvdGhpcy5zcGVlZFg7XG4gICAgICAgIC8vIHRoaXMuc3BlZWRZID0gcGFyc2VJbnQoYS55KS90aGlzLnNwZWVkWTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJzZUludChhLngpK1wiLFwiK3BhcnNlSW50KGEueSkpO1xuICAgICAgICBpZih0aGlzLmJ4Pj0wJiZ0aGlzLmJ5Pj0wKXtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggKiAxO1xuICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAqIDE7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYng8PTAmJnRoaXMuYnk+PTApe1xuICAgICAgICAgICAgdGhpcy5zcGVlZFggPSB0aGlzLnNwZWVkWCAqIC0xO1xuICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAqIDE7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYng8PTAmJnRoaXMuYnk8PTApe1xuICAgICAgICAgICAgdGhpcy5zcGVlZFggPSB0aGlzLnNwZWVkWCAqIC0xO1xuICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAqIC0xO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmJ4Pj0wJiZ0aGlzLmJ5PD0wKXtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggKiAxO1xuICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNwZWVkWCtcIixcIit0aGlzLnNwZWVkWSlcbiAgICAgXG5cbiAgICAgICAgLy8gdmFyIGRlZ3JlZSA9IDE4MC9NYXRoLlBJICogcmFkaWFuczsgXG5cbiAgICAgICAgLy8gdmFyIHJvdGF0ZVNwZWVkID0gMiAqIE1hdGguUEk7ICBcbiAgICAgICAgLy8gLy/pgqPkuYjml4vovawx5byn5bqm5omA55So5pe26Ze05Li6ICBcbiAgICAgICAgLy8gdmFyIHJvdGF0ZV8xcmFkX3RpbWUgPSAxIC8gcm90YXRlU3BlZWQ7ICBcbiAgICAgICAgLy8gLy/miYDku6Xml4vovaznmoTml7bplb/kuLogIFxuICAgICAgICAvLyB2YXIgcm90YXRlRHVyYXRpb24gPSBNYXRoLmFicyhyYWRpYW5zICogcm90YXRlXzFyYWRfdGltZSk7IFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJvdGF0ZUR1cmF0aW9uK1wiLFwiK2RlZ3JlZSlcblxuXG4gICAgICAgLy8gdmFyIHQgPSBjYy5wRGlzdGFuY2UoY2MucChhLngsYS55KSxiKS90aGlzLnNwZWVkO1xuXG4gICAgICAgLy8gdmFyIG1vdmVCeSA9IGNjLm1vdmVCeSh0LCBjYy5wKGEueCxhLnkpKS5lYXNpbmcoY2MuRWFzZU91dFNpbmUoMykpOyBcbiAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKG1vdmVCeSk7XG5cbiAgICB9LFxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH0sXG4gICAgXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkWCAqIGR0O1xuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkWSAqIGR0O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfSxcbn0pO1xuIiwiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgYW5pOmNjLkFuaW1hdGlvblxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbmkucGxheShcImZpc2hcIik7XG5cbiAgICB9LFxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICAvLyB0aGlzLm5vZGUuY29sb3IgPSBcInJlZFwiXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMubm9kZS5jb2xvcj1jYy5Db2xvci5SRURcblxuXG4gICAgfSxcbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICB0aGlzLm5vZGUuY29sb3I9Y2MuQ29sb3IuV0hJVEVcblxuXG4gICAgICAgIC8vIHRoaXMubm9kZS5jb2xvciA9IFwiXCJcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuIiwiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgcHJvcGVydGllczoge1xuICAgIGVuZW15UHJlZmFiOiBjYy5QcmVmYWJcbn0sXG5vbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuZW15UG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgIGxldCBpbml0Q291bnQgPSA1O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdENvdW50OyArK2kpIHtcbiAgICAgICAgbGV0IGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYik7IC8vIOWIm+W7uuiKgueCuVxuICAgICAgICB0aGlzLmVuZW15UG9vbC5wdXQoZW5lbXkpOyAvLyDpgJrov4cgcHV0SW5Qb29sIOaOpeWPo+aUvuWFpeWvueixoeaxoFxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVuZW15UG9vbC5zaXplKCkpXG4gICAgXG4gICAgbGV0IGVuZW15MSA9IG51bGw7XG4gICAgICAgIGxldCBlbmVteTIgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGVuZW15MyA9IG51bGw7XG4gICAgaWYgKHRoaXMuZW5lbXlQb29sLnNpemUoKSA+IDApIHsgLy8g6YCa6L+HIHNpemUg5o6l5Y+j5Yik5pat5a+56LGh5rGg5Lit5piv5ZCm5pyJ56m66Zey55qE5a+56LGhXG4gICAgICAgIGVuZW15MSA9IHRoaXMuZW5lbXlQb29sLmdldCgpO1xuICAgICAgICBlbmVteTIgPSB0aGlzLmVuZW15UG9vbC5nZXQoKTtcbiAgICAgICAgZW5lbXkzID0gdGhpcy5lbmVteVBvb2wuZ2V0KCk7XG4gICAgfSBlbHNlIHsgLy8g5aaC5p6c5rKh5pyJ56m66Zey5a+56LGh77yM5Lmf5bCx5piv5a+56LGh5rGg5Lit5aSH55So5a+56LGh5LiN5aSf5pe277yM5oiR5Lus5bCx55SoIGNjLmluc3RhbnRpYXRlIOmHjeaWsOWIm+W7ulxuICAgICAgICBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlQcmVmYWIpO1xuICAgIH1cbiAgICBlbmVteTEuc2V0UG9zaXRpb24oMTAwLDEwMCk7XG4gICAgZW5lbXkyLnNldFBvc2l0aW9uKDIwMCwyMDApO1xuICAgIHRoaXMubm9kZS5hZGRDaGlsZChlbmVteTEpOyAvLyDlsIbnlJ/miJDnmoTmlYzkurrliqDlhaXoioLngrnmoJFcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZW5lbXkyKTtcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZW5lbXkzKTtcbiAgICAvL2VuZW15LmdldENvbXBvbmVudCgnRW5lbXknKS5pbml0KCk7IC8v5o6l5LiL5p2l5bCx5Y+v5Lul6LCD55SoIGVuZW15IOi6q+S4iueahOiEmuacrOi/m+ihjOWIneWni+WMllxuICAgIGNvbnNvbGUubG9nKHRoaXMuZW5lbXlQb29sLnNpemUoKSlcbiAgICBcbn0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIFxuICAgIH0sXG59KTtcbiIsImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGJ1bGxldDoge1xuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlByZWZlYlxuICAgICAgICAvLyB9XG4gICAgICAgIGJ1bGxldDogY2MuUHJlZmFiLFxuICAgICAgICBicDpjYy5Ob2RlXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMubmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0KTtcbiAgICAgICAgLy8gdGhpcy5idWxsZXRTY3JpcHQgPSBuZXdTdGFyLmdldENvbXBvbmVudChcImJ1bGxldFwiKTtcbiAgICAgICAgLy8gdGhpcy5idWxsZXRTY3JpcHQuc2V0QW5nbGUoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJwLmdldFBvc2l0aW9uKCkpXG4gICAgfSxcblxuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG5cbiAgICAgICAgdmFyIHRvdWNoTG9jID0gdGhpcy5icC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUigpKVxuICAgICAgICB2YXIgeDEgPSB0b3VjaExvYy54O1xuICAgICAgICB2YXIgeTEgPSB0b3VjaExvYy55O1xuICAgICAgICAvL2ppYW8gZHXop5LluqZcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICB2YXIgeDIgPSBtb3VzZVBvc2l0aW9uLng7XG4gICAgICAgIHZhciB5MiA9IG1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgXG4gICAgICAgIC8vIHZhciBkZWx0YVJvdGF0aW9uID0gOTAtTWF0aC5hdGFuMih5Mi15MSx4Mi14MSkqMTgwL01hdGguUEk7XG4gICAgICAgIC8vIHRoaXMubm9kZS5zZXRSb3RhdGlvbihkZWx0YVJvdGF0aW9uLTkwKVxuXG4gICAgICAgIC8v54Ku5Y+j5peL6L2sXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlZWRYK1wiLFwiK3RoaXMuc3BlZWRZKTtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRWZWN0b3IgPSBjYy5wTm9ybWFsaXplKGNjLnYyKHgxLXgyLHkxLXkyKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vcm1hbGl6ZWRWZWN0b3IpXG4gICAgICAgIHZhciByYWRpYW5zID0gTWF0aC5hdGFuMihub3JtYWxpemVkVmVjdG9yLnksIC0gbm9ybWFsaXplZFZlY3Rvci54KTsgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vcm1hbGl6ZWRWZWN0b3IueCtcIixcIitub3JtYWxpemVkVmVjdG9yLnkpXG5cbiAgICAgICAgdmFyIGRlZ3JlZSA9IDE4MC9NYXRoLlBJICogcmFkaWFuczsgXG5cblxuICAgICAgICB2YXIgcm90YXRlU3BlZWQgPSAyICogTWF0aC5QSTsgIFxuICAgICAgICAvL+mCo+S5iOaXi+i9rDHlvKfluqbmiYDnlKjml7bpl7TkuLogIFxuICAgICAgICB2YXIgcm90YXRlXzFyYWRfdGltZSA9IDEgLyByb3RhdGVTcGVlZDsgIFxuICAgICAgICAvL+aJgOS7peaXi+i9rOeahOaXtumVv+S4uiAgXG4gICAgICAgIHZhciByb3RhdGVEdXJhdGlvbiA9IE1hdGguYWJzKHJhZGlhbnMgKiByb3RhdGVfMXJhZF90aW1lKTsgXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocm90YXRlRHVyYXRpb24rXCIsXCIrZGVncmVlKVxuICAgICAgICBcbiAgICAgICAgdmFyIHJvdGF0aW9uID0gY2Mucm90YXRlVG8oMC4zLChkZWdyZWUrOTApKVxuICAgICAgICB2YXIgY2FsbCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRoaXMuYnAuY29udmVydFRvV29ybGRTcGFjZUFSKClcblxuICAgICAgICAgICAgdmFyIGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0KTtcbiAgICAgICAgICAgIC8vIGJ1bGxldC5wb3NpdGlvbiA9IG1vdXNlUG9zaXRpb247XG4gICAgICAgICAgICBidWxsZXQucm90YXRpb24gPSAoZGVncmVlKzkwKVxuICAgICAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKHRvdWNoTG9jLngsdG91Y2hMb2MueSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHNldEFuZ2xlID0gYnVsbGV0LmdldENvbXBvbmVudChcImJ1bGxldFwiKTtcbiAgICAgICAgICAgIHNldEFuZ2xlLnNldEFuZ2xlKG1vdXNlUG9zaXRpb24sdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgICAgICAgIC8vIGJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgc2NlbmUuYWRkQ2hpbGQoYnVsbGV0KTtcblxuICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmFkaWFucylcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKHJvdGF0aW9uLGNhbGwpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNlcSlcblxuXG4gICAgICBcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=