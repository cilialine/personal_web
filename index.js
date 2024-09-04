// 欢迎栏部分
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function checkLocalStorage() {
    let user = getLocalStorage("username");
    if (user !== null) {
        alert("你回来啦！" + user + " ! \n欢迎你再次访问!");
    } else {
        user = prompt("请输入你的名字:", "");
        if (user !== "" && user !== null) {
            setLocalStorage("username", user);
        }
        alert("你好！" + user + "\n等你很久啦!欢迎你的访问!");
    }
}
// 搜索框部分
function searchFunction() {
    alert("你好呀！\n感谢你的搜索,但目前网站还没有具体内容可以供于搜索。后续敬请期待嗷！")
}
// 展开侧边栏
let olink = document.getElementById("openbuttons");
let count = 0;
olink.onclick = function () {
    count = count + 1;
    if (count % 2 == 0) {
        document.getElementById("mychangebuttons").style.width = "0";
        document.getElementById("openbuttons").style.marginLeft = "0";
        document.getElementById("mychangebuttons").style.fontSize = "0";

    }
    else {
        document.getElementById("mychangebuttons").style.width = "250px";
        document.getElementById("openbuttons").style.marginLeft = "250px";
        document.getElementById("mychangebuttons").style.fontSize = "25px";

    }
}
let olink1 = document.getElementById("outbutton");
let count1 = 0;
olink1.onclick = function () {
    count1 = count1 + 1;
    if (count1 % 4 == 0) {
        alert("这么纠结嗷？回寝室吃泡面算了")
    }
    else {
        outgoingeat()
    }
}
let olink2 = document.getElementById("inbutton");
let count2 = 0;
olink2.onclick = function () {
    count2 = count2 + 1;
    if (count2 % 4 == 0) {
        alert("这么纠结嗷？回寝室吃泡面算了")
    }
    else {
        insidefood()
    }
}

// 侧边栏展开图标动画
function openFunction(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "14.3%";
    document.getElementById("main").style.marginLeft = "14.3%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

// 吃点啥嘞
function insidefood() {
    const elements = ["欣园 - 海苔拌饭", "欣园 - 火锅自助", "欣园 -自选水饺", "欣园 - 麻辣香锅", "欣园 - 拉面", "欣园 - 肠粉", "欣园 - 煲仔饭", "欣园 - 麻辣拌", "悦园-水煮肉片", "悦园-牛排", "悦园-炸串", "悦园-水煮鱼", "悦园-火锅套餐", "悦园-川菜", "悦园-炒饭", "悦园-盖浇饭", "悦园-西餐", "悦园-自选炒菜"];
    const randomIndex1 = Math.floor(Math.random() * elements.length);
    const randomElement1 = elements[randomIndex1];
    document.getElementById("eatfood").innerHTML = randomElement1;
}
function outgoingeat() {
    const elements = ["馄饨", "拉面", "烩面", "热干面", "刀削面", "油泼面", "炸酱面", "炒面", "重庆小面", "米线", "酸辣粉", "土豆粉", "螺狮粉", "凉皮儿", "麻辣烫", "肉夹馍", "羊肉汤", "炒饭", "盖浇饭", "卤肉饭", "烤肉饭", "黄焖鸡米饭", "驴肉火烧", "川菜", "麻辣香锅", "火锅", "酸菜鱼", "烤串", "披萨", "烤鸭", "寿司", "蟹黄包", "煎饼果子", "生煎", "炒年糕", "", "肯德基！！疯狂星期四！", "麦当劳！麦门永存！"];
    const randomIndex2 = Math.floor(Math.random() * elements.length);
    const randomElement2 = elements[randomIndex2];
    document.getElementById("eatfood").innerHTML = randomElement2;
}
// 大作业怎么样？
function f1() {
    alert("好嘞！！!")
}
let flag = 1;
function f() {
    let Bn = document.getElementById('Bn');
    let aWidth = document.body.clientWidth || document.documentElement.clientWidth;
    let aHeight = document.body.clientHeight || document.documentElement.clientHeight;
    let sJs1 = Math.floor(Math.random() * aHeight);
    let sJs2 = Math.floor(Math.random() * aWidth);
    if (flag == 1) {
        Bn.style.top = sJs1 + 'px';
        Bn.style.left = sJs2 + 'px';
        flag = 2;

    } else if (flag == 2) {
        Bn.style.top = sJs1 + 'px';
        Bn.style.left = sJs2 + 'px';
        flag = 3;
        alert('这不是你的真心话QAQ 那我再改改好不？');
    } else if (flag == 3) {
        Bn.style.top = 235 + 'px';
        Bn.style.left = 286 + 'px';
        flag = 4;
    } else if (flag == 4) {
        Bn.style.top = 235 + 'px';
        Bn.style.left = 360 + 'px';
        flag = 1;
    }
}
function f2() {
    alert('这不是你的真心话QAQ 那我再改改好不？');
}
// 轮播图部分
let items = document.querySelectorAll(".item");
let points = document.querySelectorAll(".point")
let left = document.getElementById("leftBtn");
let right = document.getElementById("rightBtn");
let all = document.querySelector(".warp")
let index = 0;
let time = 0;


let clearActive = function () {
    for (i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (j = 0; j < points.length; j++) {
        points[j].className = 'point';
    }
}


let goIndex = function () {
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active'
}

let goLeft = function () {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    goIndex();
}


let goRight = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}



left.addEventListener('click', function () {
    goLeft();
    time = 0;
})

right.addEventListener('click', function () {
    goRight();
    time = 0;
})

for (i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        let pointIndex = this.getAttribute('data-index')
        index = pointIndex;
        goIndex();
        time = 0;
    })
}

let timer;
function play() {
    timer = setInterval(() => {
        time++;
        if (time == 20) {
            goRight();
            time = 0;
        }
    }, 100)
}
play();

all.onmousemove = function () {
    clearInterval(timer)
}

all.onmouseleave = function () {
    play();
}
