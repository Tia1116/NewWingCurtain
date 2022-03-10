window.addEventListener("load", function () {
  // scroll images

  var entry = document.querySelector(".newWing-entry");
  var prev = entry.querySelector(".prev");
  var next = entry.querySelector(".next");
  var ul = entry.querySelector("ul");
  var lis = ul.querySelectorAll("li");
  var enWidth = 1270;
  var indicator = entry.querySelector(".indicator");
  var num = 0;
  var circle = 0;
  var flag = true;


  // for (var i = 0; i < lis.length; i++) {
  //   var li = document.createElement("li");
  //   li.setAttribute("index", i);
  //   indicator.appendChild(li);
  //   li.addEventListener("click", function () {
  //     // 干掉所有人 把所有的小li 清除 current 类名
  //     for (var i = 0; i < ol.children.length; i++) {
  //       indicator.children[i].className = "";
  //     }
  //     // 留下我自己  当前的小li 设置current 类名
  //     this.className = "current";
  //     // 5. 点击小圆圈，移动图片 当然移动的是 ul
  //     // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
  //     // 当我们点击了某个小li 就拿到当前小li 的索引号
  //     var index = this.getAttribute("index");
  //     // 当我们点击了某个小li 就要把这个li 的索引号给 num
  //     num = index;
  //     // 当我们点击了某个小li 就要把这个li 的索引号给 circle
  //     circle = index;
  //     // num = circle = index;
  //     console.log(enWidth);
  //     console.log(index);

  //     animate(ul, -index * enWidth);
  //   });
  // }
  console.log("this is offsetWidth"+enWidth);
  //when mouse move in img eara show nav button
  entry.addEventListener('mouseenter', function () {
  
    prev.style.display = "block";
    next.style.display = "block";
    // clearInterval(timer);
    // timer = null;
  });

  //when mouse move out img eara hidde nav button and set img shift automatically

  entry.addEventListener("mouseleave", function () {
    console.log(222);
    prev.style.display = 'none';
    next.style.display = 'none';
    // timer = setInterval(function () {
    //   next.click();
    // }, 2000);
  });

  prev.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = lis.length - 1;
        ul.style.left = -num * enWidth + "px";
      }
      num--;
      animate(ul, -num * enWidth, function () {
        flag = true;
      });
      // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
      // circle--;
      // // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
      // // if (circle < 0) {
      // //     circle = ol.children.length - 1;
      // // }
      // circle = circle < 0 ? indicator.children.length - 1 : circle;
      // 调用函数
      // circleChange();
    }
  });
  next.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == lis.length-1) {
        ul.style.left=0;
        num=0;
      }
      num++;
      animate(ul, -num * enWidth, function () {
        flag = true;
      });
      // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
      // circle--;
      // // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
      // // if (circle < 0) {
      // //     circle = ol.children.length - 1;
      // // }
      // circle = circle < 0 ? indicator.children.length + 1 : circle;
      // 调用函数
      // circleChange();
    }
  });

  // var timer = setInterval(function () {
  //   next.click();
  // }, 3000);

  // function circleChange() {
  //   // 先清除其余小圆圈的current类名
  //   for (var i = 0; i < indicator.children.length; i++) {
  //     indicator.children[i].className = "";
  //   }
  //   // 留下当前的小圆圈的current类名
  //   indicator.children[circle].className = "current";
  // }

  function animate(obj, target, callback) {
    // clear previous interval
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      // 步长值写到定时器的里面
      // 把我们步长值改为整数 不要出现小数的问题
      // var step = Math.ceil((target - obj.offsetLeft) / 10);
      var step = (target - obj.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (obj.offsetLeft == target) {
        // 停止动画 本质是停止定时器
        clearInterval(obj.timer);
        // 回调函数写到定时器结束里面
        // if (callback) {
        //     // 调用函数
        //     callback();
        // }
        callback && callback();
      }
      // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
      obj.style.left = obj.offsetLeft + step + "px";
    }, 15);
  }
});
