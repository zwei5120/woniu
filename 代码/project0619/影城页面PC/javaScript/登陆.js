// 生成验证码，点击更换验证码图片
// 定义变量接收验证码
let theAuthCode;
// 定义用户存储数组，并获取本地已存在的用户数据
let personArr = JSON.parse(localStorage.getItem('person')) || [];
// 定义验证码判断状态
let codeStatus = false;
// 定义登录状态
let loginStatus = false;
// 使用mock拦截请求，返回验证码数据
Mock.mock('./authCode.html', 'get', function () {
    let code = Mock.mock({
        'reg': /^\w{5}$/
    }.reg);
    let theUrl = Mock.Random.dataImage('70x34', code);
    return {
        'code': code,
        'imgUrl': theUrl
    }
});
// 使用Ajax发送验证码请求
$.ajax({
    url: './authCode.html',
    type: 'get',
    success: function (res) {
        console.log(res);
        let obj = JSON.parse(res);
        theAuthCode = obj.code;
        $('#authCode').prop('src', obj.imgUrl);
    }
});
// 定义点击事件，更换验证码图片
function changeAuthCode() {
    codeStatus = false;
    // 再次请求新的数据
    $.ajax({
        url: './authCode.html',
        type: 'get',
        success: function (res) {
            let obj = JSON.parse(res);
            theAuthCode = obj.code;
            $('#authCode').prop('src', obj.imgUrl);
        }
    });
}
// 验证码验证事件函数
function authCodeCompare(item) {
    let item1 = theAuthCode.toLowerCase();
    let item2 = $('#iptAuthCode').val().toLowerCase();
    if (item1 === item2) {
        codeStatus = true;
        $(item).css('border', '2px solid green');
        // alert('验证码输入正确');

    } else {
        codeStatus = false;
        $(item).css('border', '2px solid red');
        // alert('验证码输入错误');
    }
}
// 点击登陆事件函数
function login() {
    let protocalStatus = document.getElementById('protocal').checked;
    if (codeStatus && protocalStatus) {
        let username = $('#username').val();
        let pwd = $('#pwd').val();
        let res = personArr.some(item => item.username === username && item.pwd === pwd);
        if (res) {
            /* alert('登陆成功，即将跳转');
            setTimeout(()=>{
                location.href = './index主页.html';
            }, 2000); */
            loginStatus = username;
            sessionStorage.setItem('login', JSON.stringify(loginStatus));
            location.href = './index主页.html';
        } else {
            alert('用户名或密码错误');
        }
    } else if (!protocalStatus) {
        alert('未勾选用户协议');
    } else if (!codeStatus) {
        alert('验证码错误');
    }
    sessionStorage.setItem('login', JSON.stringify(loginStatus));

}

// 注册登录成功后，在sessionStorage中存储一个loginStatus
// 1、表示是否登录  2、表示登录的当前用户
