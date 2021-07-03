let accStatus = false,
    pwdStatus = false,
    pwdTwo = false;
let personApp = JSON.parse(localStorage.getItem('person-app')) || [];
// 定义正则表达式验证用户名
function verifyAcc(item) {
    let nameStatus = true;
    let accreg = /^[a-zA-Z]\w{5,11}/;
    let username = $(item).val();
    // 验证用户名是否重复
    personApp.forEach(item => {
        if (item.username === username) {
            nameStatus = false;
        }
    });
    if (accreg.test(username)) {
        if (nameStatus) {
            accStatus = true;
            $(item).css('border', '1px solid green');
        } else {
            alert('用户名重复');
            accStatus = false;
            $(item).css('border', '1px solid red');
        }
    } else {
        accStatus = false;
        $(item).css('border', '1px solid red');
    }
}

function backcss1(item) {
    $(item).css('border', '1px solid #cccccc');
}
// 定义正则表达式验证密码
function verifyPwd(item) {
    let accreg = /^[a-zA-Z]\w{5,11}/;
    let pwd = $(item).val();
    if (accreg.test(pwd)) {
        pwdStatus = true;
        $(item).css('border', '1px solid green');
    } else {
        pwdStatus = false;
        $(item).css('border', '1px solid red');
    }
}

function backcss2(item) {
    $(item).css('border', '1px solid #cccccc');
}

// 二次验证密码输入一致
function verifyPwd2(item) {
    let pwd = $('#pwd').val();
    let pwd2 = $('#pwd2').val();
    if (pwd === pwd2) {
        pwdTwo = true;
        $(item).css('border', '1px solid green');
    } else {
        pwdTwo = false;
        $(item).css('border', '1px solid red');
    }
}

function backcss3(item) {
    $(item).css('border', '1px solid #cccccc');
}

// 注册按钮点击事件
function register(item) {
    if (accStatus && pwdStatus && pwdTwo) {
        let thePerson = {};
        thePerson.username = $('#username').val();
        thePerson.pwd = $('#pwd').val();
        personApp.push(thePerson);
        localStorage.setItem('person-app', JSON.stringify(personApp));
        location.href = '../html/登录.html';
    } else {
        alert('请确认输入信息正确');
    }
}

// 点击眼睛图片实现密码显示切换
function showPwd(item) {
    let type = $('#pwd').prop('type');
    if (type === 'password') {
        $(item).removeClass('fa-eye-slash');
        $(item).addClass('fa-eye');
        $('#pwd').prop('type', 'text');
    } else if (type === 'text') {
        $(item).removeClass('fa-eye');
        $(item).addClass('fa-eye-slash');
        $('#pwd').prop('type', 'password');
    }
}

function showPwd2(item) {
    let type = $('#pwd2').prop('type');
    if (type === 'password') {
        $(item).removeClass('fa-eye-slash');
        $(item).addClass('fa-eye');
        $('#pwd2').prop('type', 'text');
    } else if (type === 'text') {
        $(item).removeClass('fa-eye');
        $(item).addClass('fa-eye-slash');
        $('#pwd2').prop('type', 'password');
    }
}

function backStep() {
    history.back();
}


