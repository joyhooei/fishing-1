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