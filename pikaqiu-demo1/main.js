
let string =  `
/* 首先画皮卡丘的皮 */
.skin *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.skin *::before{
    box-sizing: border-box;
}
.skin *::after{
    box-sizing: border-box;
}

body {
    
}
.skin {
    position: relative;
    background: #ffe600;
    min-height: 100vh;
}
 /* 接着是它的鼻子 */
.nose {
    width: 0px;
    height: 0px;
    border: 10px solid black;
    /* border-bottom: blue; */
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    border-color: black transparent transparent transparent;
    z-index: 10;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    50%{
        transform: rotate(0deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover {
    transform-origin: center bottom;
    animation: wave 0.5s infinite;
}

.nose .yuan {
    position: absolute;
    width: 20px;
    height: 8px;
    top: -15px;
    left: -10px;
    border-radius: 50%;
    background-color: black;
}
 /* 两只眼睛也别忘了 */
.eye-left {
    position: absolute;
    border: 1px solid grey;
    width: 64px;
    height: 64px;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    transform: translateX(-100px);  
    background-color: #2E2E2E;
    border-radius: 50%;
    z-index: 10;
}
.eye-right {
    position: absolute;
    border: 1px solid grey;
    width: 64px;
    height: 64px;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    transform: translateX(100px);  
    background-color: #2E2E2E;
    border-radius: 50%;
    z-index: 10;
}
.eye-left::after{
    content: "";
    width: 32px;
    height: 32px;
    border: 2px solid #000;
    display: block;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: 3px;
}
.eye-right::after{
    content: "";
    width: 32px;
    height: 32px;
    border: 2px solid #000;
    display: block;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: 3px;
}
 /* 还有它的嘴唇 */
.mouth {
    width: 150px;
    height: 150px;
    /* border: 1px solid red; */
    position: absolute;
    left: 50%;
    margin-left: -75px;
    top: 170px;
}

.mouth .up {
    position: relative;
    top: -5px;
    z-index: 1;
} 
.mouth .up .zzz {
    position: absolute;
    /* border: 1px solid blue; */
    width: 160px;
    height: 14px;
    z-index: 20;
    left: 50%;
    margin-left: -80px;
    top: -12px;
    background-color: #ffe600;
} 

.lip-left{
    border: 4px solid black;
    width: 80px;
    height: 20px;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    border-right-color: #ffe600;
    transform: rotate(-20deg);
    background-color: #ffe600;
}
.lip-right{
    position: absolute;
    right: 0;
    border:4px solid black;
    width: 80px;
    height: 20px;
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    border-left-color: #ffe600;
    transform: rotate(20deg);
    top: 0px;
    background-color: #ffe600;
}
.lip-left::after{
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid blue; */
    border-radius: 50%;
    position: absolute;
    top: -15px;
    /* right: 2px; */
    z-index: 30;
    background-color: #ffe600;;
    z-index: 30;
  }
.lip-right::after{
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    /* border: 1px solid blue; */
    border-radius: 50%;
    position: absolute;
    top: -15px;
    right: 0px;
    z-index: 30;
    background-color: #ffe600;;
    z-index: 30;
  }
.mouth .down {
    width: 150px;
    height: 140px;
    position: absolute;
    top: -1px;
    overflow: hidden;
  }
.mouth .down .yuan1{
    position: absolute;
    border: 1px solid black;
    width: 100px;
    height: 1000px;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    border-radius: 300px/1200px;
    background-color: #9b000a;
    overflow: hidden;
}
.yuan2 {
    position: absolute;
    width: 200px;
    height: 300px;
    bottom: -185px;
    left: 50%;
    margin-left: -100px;
    background-color: #ff485f;
    border-radius: 50%;
}
 /* 最后是两个脸颊喽 */
.face-left {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 2px solid black;
    left: 50%;
    margin-left: -40px;
    top: 180px;
    transform: translateX(-150px);
    border-radius: 50%;
    background-color: red;
}
.face-right {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 2px solid black;
    left: 50%;
    margin-left: -40px;
    top: 180px;
    transform: translateX(150px);
    border-radius: 50%;
    background-color: red;
}
`

let n = 0
let time = 100
let run = ()=> {
    {
        n = n + 1
        if (n > string.length) {
            return
        }
        demo.innerHTML = string.substr(0, n)
        demo2.innerText = string.substr(0, n)
        demo2.scrollTop = 999999
    }
}
let id = setInterval(() => run(), time);

btnPause.onclick = function () {
    window.clearInterval(id)
}

btnPlay.onclick = function () {
    id = setInterval(() => run(), time);
    console.log(n);
}

btnSlow.onclick = function () {
    time = 200
    window.clearInterval(id)
    id = setInterval(() => run(), time);
}

btnNormal.onclick = function () {
    time = 50
    window.clearInterval(id)
    id = setInterval(() => run(), time);
}

btnFast.onclick = function () {
    time = 0
    window.clearInterval(id)
    id = setInterval(() => run(), time);
}

