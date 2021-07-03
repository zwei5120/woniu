// 生成验证码，点击更换验证码图片
// 定义变量接收验证码
let theAuthCode;
// 定义用户存储数组，并获取本地已存在的用户数据
let personArr = JSON.parse(localStorage.getItem('person')) || [];
// 定义账户名、密码、邮箱、验证码的状态，根据综合状态判断点击按钮的使用
let accStatus = false,
    pwdStatus = false,
    emailStatus = false,
    pwdTwoStatus = false,
    codeStatus = false;
// 使用mock拦截请求，返回验证码数据
Mock.mock('./authCode.html', 'get', function () {
    let code = Mock.mock({
        'reg': /^\w{5}$/
    }.reg);
    let theUrl = Mock.Random.dataImage('64x32', code);
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
        $(item).css('border', '2px solid red');
        // alert('验证码输入错误');
    }
}
// 用户名验证函数
function accfn(item) {
    // console.log('进入函数');
    // console.log(item);
    // 首先获取输入值
    let value = item.value;
    // console.log(value);
    // 定义一个正则表达式进行匹配（6~18个字符，可使用字母、数字、下划线，需以字母开头）
    let accreg = /^[a-zA-Z]{1}[a-z0-9A-Z]{5,17}/;
    let res = accreg.test(value);
    if (res) {
        // 用户名格式正确之后，需要查询是否重复
        let isHave = personArr.some(item => item.username === value);
        if (!isHave) {
            $(item).css('border', '1px solid green');
            $('#tip1').html('用户名正确');
            accStatus = true;
        } else {
            $(item).css('border', '1px solid red');
            $('#tip1').html('用户名已存在');
            accStatus = false;
        }
    } else {
        $(item).css('border', '1px solid red');
        $('#tip1').html('6~18个字符，可使用字母、数字、下划线，需以字母开头');
        accStatus = false;
    }
}
// 密码验证函数
function pwdfn(item) {
    // 先获取输入值
    let value = $(item).val();
    // 定义正则表达式进行验证
    let pwdreg = /\w{6,16}/;
    if (pwdreg.test(value)) {
        pwdStatus = true;
        $(item).css('border', '1px solid green');
        $('#tip2').html('密码格式正确');
    } else {
        pwdStatus = false;
        $(item).css('border', '1px solid red');
        $('#tip2').html('6~16个字符，区分大小写');
    }
}
// 二次密码输入并验证一致函数
function pwdTwicefn(item) {
    let pwd1 = $(item).val();
    let pwd2 = $('#pwd').val();
    if(pwd1 === pwd2){
        pwdTwoStatus = true;
        $(item).css('border', '1px solid green');
        $('#tip3').html('验证一致');
    }else{
        pwdTwoStatus = false;
        $(item).css('border', '1px solid red');
        $('#tip3').html('再次输入密码');
    }
}
// 邮箱格式验证
function emailfn(item) {
    let value = $(item).val();
    // 定义正则表达式验证邮箱格式
    // let emailreg = /^\d{6,15}[@]['163'|'126'|'qq'|'gmail']['.com']&/;
    let emailreg = /^[a-zA-Z0-9-]{6,12}@(qq|163|126|gmail).com$/;
    if(emailreg.test(value)){
        emailStatus = true;
        $(item).css('border', '1px solid green');
        $('#tip4').html('邮箱格式正确');
    }else{
        emailStatus = false;
        $(item).css('border', '1px solid red');
        $('#tip4').html('6~18个字符，可使用字母、数字、下划线，需以字母开头');
    }
}

// 注册按钮点击事件，获取用户名、密码和邮箱，进行本地存储
function register() {
    let protocalStatus = document.getElementById('protocal').checked;
    console.log(protocalStatus);
    if (accStatus && pwdStatus && pwdTwoStatus && emailStatus && codeStatus && protocalStatus) {
        let username = $('#username').val();
        let pwd = $('#pwd').val();
        let email = $('#email').val();
        let user = {
            username: username,
            pwd: pwd,
            email: email
        }
        personArr.push(user);
        localStorage.setItem('person', JSON.stringify(personArr));
        location.href = './登陆.html';
    } else {
        alert('请检查信息，确保输入正确');
    }
}