let person = JSON.parse(localStorage.getItem('person-app')) || [];
let loginStatus = false;
let thePerson;
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
// 在数据库中遍历查找用户，并验证密码，成功后跳转到首页
function loginClick() {
    let acc = $('#username').val();
    let pwd = $('#pwd').val();
    let flag = false;
    person.forEach(item => {
        if (item.username === acc) {
            if (item.pwd === pwd) {
                // 登录成功，跳转首页
                loginStatus = acc;
                thePerson = item;
                sessionStorage.setItem('login', JSON.stringify(loginStatus));
                sessionStorage.setItem('theperson', JSON.stringify(thePerson));
                flag = true;
                location.href = '../html/主页.html';
                
            }
        }
    });
    if (!flag) {
        alert('用户名或密码输入错误');
    }

}

function backStep() {
    history.back();
}