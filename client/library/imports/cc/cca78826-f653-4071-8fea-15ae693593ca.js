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