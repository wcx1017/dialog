window.onload = function() {
    function box(obj) {
        this.obj = obj;
        this.box = document.getElementById(this.obj.boxId);
        this.btn = document.getElementById(this.obj.btnId);
        this.add();
        this.click();
    }
    box.prototype = {
        constructor: box,
        // 动态创建遮罩层
        add: function() {
            this.mask = document.createElement("div");
            document.body.appendChild(this.mask);
            this.mask.id = "mask";
        },
        // 动态创建弹框
        click: function() {
            this.add();
            var that = this;
            this.btn.onclick = function() {
                that.mask.style.display = "block";
                that.mask.innerHTML = "<div id = 'main'><span id='close'>&times;</span><h1>" + that.obj.h1 + "</h1><button id='btn'>" + that.obj.btn1 + "</button><button id='btn2'>" + that.obj.btn2 + "</button></div>";
                that.close = document.getElementById("close");
                that.btn = document.getElementById("btn");
                that.btn2 = document.getElementById("btn2");
                that.remove();
            }
        },
        // 点击按钮
        remove: function() {
            var that = this;
            this.close.onclick = function() {
                that.mask.style.display = "none";
            }
            this.btn.onclick = function() {
                that.mask.style.display = "none";
            }
            this.btn2.onclick = function() {
                that.mask.style.display = "none";
            }
        }
    }
    new box({
        boxId: "box",
        btnId: "action",
        closeId: "close",
        h1: "我是弹窗",
        btn1: "哦",
        btn2: "很好"
    });
}