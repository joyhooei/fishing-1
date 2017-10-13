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