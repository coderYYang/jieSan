//获取button，input，div，em
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let em1 = document.getElementById("em1");
let username = document.getElementById("username");
let userphone = document.getElementById("userphone");
let usercode = document.getElementById("usercode");
let toast = document.getElementById("toast");

//验证码获取禁用
btn1.disabled = true;
userphone.oninput = function () {
  if (!/^1[3-9][0-9]{9}$/.test(userphone.value) || userphone.value === null) {
    btn1.disabled = true;
  } else {
    btn1.disabled = false;
  }
}

//生成6为随机数验证码
let sum = "";
//btn1验证码倒计时
let i = 60;
btn1.addEventListener("click", function () {
  for (let i = 1; i <= 6; i++) {
    let num = Math.floor(Math.random() * 10);
    sum += num;
    // console.log(this.sum);
  }
  console.log(sum);
  i = 60;
  btn1.disabled = true;
  // btn1.style.borderColor = "#ddd";
  // btn1.style.backgroundColor = "#ddd";
  em1.style.color = "#000";
  em1.innerHTML = i + "s重新发送";
  let countDown = setInterval(function () {
    if (i == 1) {
      i = 60;
      btn1.disabled = false;
      // btn1.style.borderColor = "#00BFFF";
      // btn1.style.backgroundColor = "#fff";
      // em1.style.color = "#00BFFF";
      em1.innerHTML = "重新发送";
      clearInterval(countDown);
    } else {
      i--;
      em1.innerHTML = i + "s重新发送";
    }
  }, 1000);
});

//btn2输入弹出提示
btn2.addEventListener("click", function () {
  // console.log(sum);
  if (username.value == "" || !/^[\u0391-\uFFE5]+$/.test(username.value)) {
    toastTip("用户名必须为中文!!!");
    username.focus();
  } else if (userphone.value == "" || !/^1[3-9][0-9]{9}$/.test(userphone.value)) {
    toastTip("请输入正确的手机号!!!");
    userphone.focus();
  } else if (usercode.value != sum || usercode.value == "") {
    toastTip("您的验证码错误!!!");
    usercode.focus();
  } else {
    // toastTip("登录成功");
    //本页面跳转
    window.location.href = "index.html";
    //跳转另一个页面
    // window.open("index.html");
  }
});

//提交提示框
function toastTip(msg, time) {
  // if (!el) {
  //   el = document.body;
  // } else {
  //   el = document.querySelector(el);
  // }

  // let _toast = document.querySelector(".toast")[0];
  // if(_toast){
  //   _toast.remove();
  // }

  toast.classList.add("open");
  toast.innerHTML = msg;

  //判断提示框显示时间
  if (msg.length <= 10) {
    time = 1500;
  } else if (msg.length > 10) {
    time = 3000;
  } else {
    time = 1500;
  }

  let timer = setTimeout(function () {
    toast.classList.remove("open");
    clearTimeout(timer);
    // setTimeout(function () {
    //   _toast.remove();
    // }, 1000);
  }, time);
}
