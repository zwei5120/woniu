// 定义用户登录状态
let loginStatus = JSON.parse(sessionStorage.getItem('login')) || false;
console.log(loginStatus);
if (loginStatus) {
    $('#toLogin').html(`${loginStatus},已登录`);
}
// 退出当前账户
function quit() {
    $('#toLogin').html('登录');
    loginStatus = false;
    sessionStorage.setItem('login', loginStatus);
    $('.quit').hide();
}
// 会员中心必须登录，否则不应该访问，在之前的页面跳转前进行判断
// 进入会中心的，都已经是登录状态
// 根据当前用户id读取本地存储，筛选出当前用户数据信息
let person = JSON.parse(localStorage.getItem('person'));
let thePerson = person.filter(item => item.username === loginStatus)[0];
console.log(thePerson);
let phoneStatus = false;
// 已获取到当前用户数据，渲染到页面上
$('#acc').html(`${thePerson.username}`);
$('#email').html(`${thePerson.email}`);
freshOverage();
/* // 若会员卡读取为空，则可以创建一个
if(!`${thePerson.vipCard}`){
    $('#vipCard').html()
} */
let pwdStatus = false,
    pwdTwoStatus = false;
// 密码验证函数
function pwdfn(item) {
    // 先获取输入值
    let value = $(item).val();
    // 定义正则表达式进行验证
    let pwdreg = /\w{6,16}/;
    if (pwdreg.test(value)) {
        pwdStatus = true;
        $(item).css('border', '2px solid green');
        // $('#tip2').html('密码格式正确');
    } else {
        pwdStatus = false;
        $(item).css('border', '2px solid red');
        // $('#tip2').html('6~16个字符，区分大小写');
    }
    pwdTwiceFn();
}
// 二次密码输入并验证一致函数
function pwdTwiceFn() {
    let item = document.getElementById('newPwd2');
    let pwd1 = $(item).val();
    let pwd2 = $('#newPwd').val();
    if (pwd1 === pwd2) {
        pwdTwoStatus = true;
        $(item).css('border', '2px solid green');
        // $('#tip3').html('验证一致');
    } else {
        pwdTwoStatus = false;
        $(item).css('border', '2px solid red');
        // $('#tip3').html('再次输入密码');
    }
}
// 修改密码函数
function changePwd() {
    // 先获取旧密码
    let oldPwd = $('#oldPwd').val();
    let oldPwdStatus = (oldPwd === thePerson.pwd);
    let newPwd = $('#newPwd').val();
    // 两次输入新密码（并验证格式正确）一致后，再到本地存储中修改密码
    if (oldPwdStatus) {
        if (pwdStatus && pwdTwoStatus) {
            if (oldPwd !== newPwd) {
                //此时修改
                person.forEach(item => {
                    if (item.username === loginStatus) {
                        item.pwd = newPwd;
                        localStorage.setItem('person', JSON.stringify(person));
                        // 清除当前登录状态
                        loginStatus = false;
                        sessionStorage.setItem('login', JSON.stringify(loginStatus));
                        thePerson = {};
                        alert('密码修改成功，请点击确定跳转至登录界面');
                        location.href = '../html/登陆.html';
                    }
                });
            } else {
                //两次密码不能相同
                alert('新密码不能与原密码相同');
            }
        } else {
            //新密码验证未通过
            alert('请确认新密码格式正确');
        }
    } else {
        //旧密码输入错误
        alert('密码输入错误');
    }
    // 并且自动退出当前登录状态，需要重新登录
}

function toChangePwd() {
    $('.changePwd').toggleClass('show');
}

function showToVipCard() {
    $('.toVipCard').toggleClass('show');
}

// 验证右侧取票手机号码
function verifyPhoneNum(item) {
    // console.log(item);
    let value = item.value;
    console.log(value);
    // 定义一个正则表达式来验证输入的手机号码
    let numreg = /^[1][0-9]{10}/;
    if (numreg.test(value)) {
        phoneStatus = true;
        $(item).css('border', '2px solid green');
    } else {
        phoneStatus = false;
        $(item).css('border', '2px solid red');
    }
}

function phoneNum(item) {
    $(item).css('border', '2px solid black');
}
// 点击创建，生成卡号，并将卡号与电话存储到本地
function creatVipCard() {
    if (phoneStatus) {
        // 生成8位随机数作为会员卡号码
        let card = '';
        for (let i = 0; i < 8; i++) {
            card += parseInt(Math.random() * 9 + 1);
        }
        console.log(card);
        $('#cardNum').val(card);
        // 存储卡号和余额
        thePerson.cardNum = [card, 800];
        thePerson.phone = $('#phoneNum').val();
        person.forEach(item => {
            if (item.username === loginStatus) {
                item = thePerson;
                localStorage.setItem('person', JSON.stringify(person));
            }
        })
        freshOverage();
    }
}
// 定义一个本地刷新函数，每次修改密码或充值后调用，实现thePerson和本地的同步
function refreshLocal(thePerson, person) {
    person.forEach(item => {
        if (item.username === loginStatus) {
            item = thePerson;
            localStorage.setItem('person', JSON.stringify(person));
        }
    })
}
// 定义一个余额刷新函数
function freshOverage() {
    $('#showVipCard').html(thePerson.cardNum[0]);
    $('#overage').html(thePerson.cardNum[1]);
}

// 充值函数
function charge() {
    // 先获取卡号
    let cardval = $('#card').val();
    // 判断与本地存储的一致才能充值
    if (thePerson.cardNum[0] === cardval) {
        thePerson.cardNum[1] += Number($('#chargeNum').val());
        refreshLocal(thePerson, person);
        freshOverage();
        alert('充值成功，请前往余额查询');
    }
}

// 购票记录渲染函数
function ticketRender(arr) {
    let str = arr.map(obj => `
    <tr style="font-size: 12px; height: 30px;" class="title" onclick="showBody(this)">
        <td style="font-weight: bold;">${obj.film}</td>
        <td style="color: red;">${obj.orderNum}</td>
        <td>${obj.paytime}</td>
        <td>${obj.cinema}</td>
        <td style="color: red;">￥${obj.totalPrice}</td>
        <td>${obj.payStatus}</td>
        <td style="color: #0000ff;">删除</td>
    </tr>
    <tr style="height: 155px;" class="body">
        <td colspan="2">
            <div class="main-right-record-table">
                <div class="main-right-record-table-left">
                    <img src=${obj.filmImg} alt="">
                </div>
                <div class="main-right-record-table-right">
                    <p>影厅：<span>${obj.session}</span></p>
                    <p>票价：<span class="we">￥${obj.singlePrice}.00</span></p>
                    <p>支付方式：${obj.payType}</p>
                    <p>购票手机号：<span>${obj.phoneNum}</span></p>
                </div>
            </div>
    
        <td colspan="2">
            <div class="main-right-record-table-1">
                <p>场次：<span>${obj.paytime, obj.time}</span></p>
                <p>数量：<span class="we">${obj.tickets.length}</span></p>
                <p>支付卡号：${thePerson.cardNum[0]}</p>
            </div>
    
        <td colspan="3" style="width: 180px;">
            <div class="main-right-record-table-2">
                <p>位置：${obj.seats}</p>
                <p>金额：<span class="we">￥${obj.totalPrice}.000</span></p>
                <p>取票号：</p>
            </div>
    
    </tr>
    `).join('');
    $('tbody').html('');
    $('tbody').html(str);
    
}

ticketRender(thePerson.ticketRecord);
/* $('.title').click(()=>{
    $(this).next().toggleClass('show');
}) */
function showBody(item) {
    console.log($(item));
    $(item).next().toggleClass('show');
}