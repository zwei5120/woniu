$('#second_box').css('display', 'none');


// 先从url中解析传过来的参数
function getIdFromUrl(str, item) {
    let params = new URLSearchParams(str);
    let id = params.get(item);
    return id;
}
let dataMovieId = getIdFromUrl(location.search, 'data-movie-id');
let dataCinemaId = getIdFromUrl(location.search, 'data-cinema-id');
let time = getIdFromUrl(location.search, 'time');
let session = getIdFromUrl(location.search, 'session');
// 解析参数成功
/* console.log(dataMovieId);
console.log(dataCinemaId);
console.log(time);
console.log(session); */
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
// 定义一个定时器，没隔20秒访问loginStatus的值，未登录则提示登录
setInterval(() => {
    if (!loginStatus) {
        let isLogin = confirm('您尚未登录，是否前往登录页面？');
        if (isLogin) {
            location.href = '../html/登陆.html';
        }
    }
}, 20000);
// 根据当前用户id读取本地存储，筛选出当前用户数据信息
let person = JSON.parse(localStorage.getItem('person'));
let thePerson = person.filter(item => item.username === loginStatus)[0];
console.log(thePerson);

// 首先应该向远程数据库发送请求，返回影院，影片数据
let filmData, cinemaData;
// 当前影院、当前影片的数据
let theFilm, theCinema;
// 二维数组临时存储座位信息
let seatArr = [];
// 验证码接收变量
let theAuthCode;
// 选座信息存储对象（已选的座位）
let seatSelectedArr = {};
// 电话号码和验证码验证结果状态值
let phoneStatus = false,
    codeStatus = false;
// 倒计时状态
let countDownStatus = true;
// 影片单价
let singlePrice = parseInt(document.getElementById('onlinePrice').innerHTML);
// console.log(singlePrice);
let seatSelectedId = dataCinemaId + dataMovieId + time;
// 读取本地存储的选座信息
seatSelectedArr = JSON.parse(localStorage.getItem('seat')) || {};
seatSelectedArr[seatSelectedId] = seatSelectedArr[seatSelectedId] || [];
// 每次进入页面，都将被选中的座位渲染成红色
// 定义一个临时对象，将购票信息存储起来，如果最后支付，则作为一条购票记录存起来
// 如果最后未支付，则清空对象的数据
let tmpTicketRecordObj = {};
// 时间场次
tmpTicketRecordObj.time = time;
tmpTicketRecordObj.session = session;




// 影院信息与影片数据获取，并找到当前的影院和影片
$.ajax({
    url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
    type: 'get',
    success: function (res) {
        // console.log(res);
        cinemaData = res.operas;
        // console.log(cinemaData); //获取到影院信息，数组对象形式
        cinemaData.forEach(item => {
            if (item.id == dataCinemaId) {
                theCinema = item; //对象赋值
            }
        })
        console.log(theCinema);
        tmpTicketRecordObj.cinema = theCinema.name;
        if (dataMovieId) {
            // 影片信息
            $.ajax({
                url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
                type: 'get',
                success: function (res) {
                    // console.log(res);
                    filmData = res.movies;
                    // console.log(filmData); //获取到影片信息，数组对象形式
                    // 根据当前id对应的movies信息进行遍历渲染
                    filmData.forEach(item => {
                        if (item.id === dataMovieId) {
                            theFilm = item; //对象赋值
                        }
                    });
                    console.log(theFilm);
                    tmpTicketRecordObj.film = theFilm.title;
                    tmpTicketRecordObj.filmImg = theFilm.imgSrc;
                    detailRender(theCinema, theFilm, 'detail-box')
                }
            });

        }
    }
});
// 头部影片、影院即场次信息渲染函数
function detailRender(theCinema, theFilm, id) {
    let str = `
        <ul>
            <li><img src=${theFilm.imgSrc} alt=""></li>
            <li>
                <p>影片：${theFilm.title}</p>
                <p>场次：${time} ${session}</p>
                <p>正价：￥80.00</p>
            </li>
            <li>
                <p>影院：${theCinema.name}</p>
                <p>片长：${theFilm.duration}</p>
                <p>网购价:<span>￥68.00</span></p>
            </li>
            <li>
                <p>影厅：${session}</p>
                <p>语言：${theFilm.language}</p>
                <p><span>会员价按会员折扣标准执行</span></p>
            </li>
        </ul>
    `;
    let item = document.getElementById(id);
    $(item).html('');
    $(item).html(str);
}

// 为座位图片绑定点击事件，绑定在父元素choose_seat上
$('.click_select').on('click', 'img', function () {
    let clsName = $(this).prop('class');
    // 获取每个绿色选中座位的行列属性值，并统计他们的数量，超过4个就不能再选座了
    let greenSeats = document.querySelectorAll('.green');
    // 红色禁止选座
    if (clsName !== 'red') {
        // 选座数量达到4个时禁止再增加选座
        if (greenSeats.length < 4) {
            if (clsName === 'green') {
                $(this).removeClass(clsName);
                $(this).addClass('white');
                $(this).prop('src', `../images/ticket/white.png`)
            } else {
                $(this).removeClass(clsName);
                $(this).addClass('green');
                $(this).prop('src', `../images/ticket/green.png`)
            }

        } else {
            if (clsName === 'green') {
                $(this).removeClass(clsName);
                $(this).addClass('white');
                $(this).prop('src', `../images/ticket/white.png`)
            } else {
                alert('已达选座数量上限');
            }
        }
    }
    // 在选座结束时再次获取页面中的选座信息，将座位行列信息存进数组，渲染到指定区域
    greenSeats = document.querySelectorAll('.green');
    // console.log(greenSeats);
    seatArr = [];
    greenSeats.forEach(item => {
        let tmpArr = [$(item).attr('data-row'), $(item).attr('data-col')];
        seatArr.push(tmpArr);
    });
    // console.log(seatArr);
    // 每次点击选座后都渲染以下右侧的显示区域
    seatSelectedRender(seatArr, 'button_group');

});
// 
function singleSeat(line, col, id) {
    // console.log('进入函数');
    let str = '';
    for (let i = 1; i <= col; i++) {
        str += `<img class='white' data-row=${line} data-col=${i} src="../images/ticket/white.png" alt="">`;
    }
    // console.log(str);
    let item = document.getElementById(id);
    // console.log(item);
    $(item).html('');
    $(item).html(str);
}

// 定义一个座位动态渲染函数
function seatRender() {
    singleSeat(1, 21, 'line1');
    singleSeat(2, 21, 'line2');
    singleSeat(3, 17, 'line3');
    singleSeat(4, 17, 'line4');
    singleSeat(5, 17, 'line5');
    singleSeat(6, 17, 'line6');
    singleSeat(7, 17, 'line7');
    singleSeat(8, 17, 'line8');
    singleSeat(9, 17, 'line9');
    singleSeat(10, 17, 'line10');
}
seatRender();


// 定义一个已选座位在右侧显示的渲染函数
function seatSelectedRender(arr, id) {
    let str = arr.map(item => `<span>${item[0]}排${item[1]}座</span>`).join('');
    let elem = document.getElementById(id);
    $(elem).html('');
    $(elem).html(str);
    tmpTicketRecordObj.seats = str;
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
        tmpTicketRecordObj.phoneNum = value;
    } else {
        phoneStatus = false;
        $(item).css('border', '2px solid red');
    }
}

function phoneNum(item) {
    $(item).css('border', '2px solid black');
}

// 验证码请求与拦截及渲染
// 使用mock拦截请求，返回验证码数据
Mock.mock('./authCode.html', 'get', function () {
    let code = Mock.mock({
        'reg': /^\w{5}$/
    }.reg);
    let theUrl = Mock.Random.dataImage('60x24', code);
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
        // console.log(res);
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

function codeNum(item) {
    $(item).css('border', '2px solid black');
}

// 在电话号码和验证码经过验证后，点击立即购票跳转到支付界面，有1个15分钟的倒计时
// 倒计时函数
function countDown(minutes) {
    let seconds = 60;
    minutes--;
    let intervalId = setInterval(() => {
        seconds--;
        let str = `${minutes}: ${seconds}`;
        $('#countdown').html(str);
        if (seconds === 0) {
            minutes--;
            seconds = 60;
        }
        if (minutes < 0) {
            countDownStatus = false;
            clearInterval(intervalId);
        }
    }, 1000);
}

// 立即购票，页面切换
$('#immediately_ticket').click(function () {
    // && codeStatus
    if (phoneStatus && codeStatus) {
        // 只有切换页面效果
        $('#first_box').css('display', 'none');
        $('#second_box').css('display', 'flex');
        $('.mobile_phones').css('border-left', '18px solid #eaeaea');
        $('.mobile_phone').css({
            'background-color': '#eaeaea',
            'color': '#666666'
        });
        $('.confirm_payment').css({
            'background-color': '#f57921',
            'color': 'white'
        });
        countDown(2);
        // 进入支付界面后开始倒计时，点击确认支付就弹出模态框，在模态框中渲染购票数据
        modalRender();
    } else {
        alert('请确认电话号码和验证码正确');
        changeAuthCode();
    }
})

// 定义一个模态框渲染函数，将影片信息写入
function modalRender() {
    // console.log('进入函数');
    // 生成订单号，前8位是日期，后8位是随机数
    let now = new Date();
    console.log(now);
    let year = now.getFullYear();
    console.log(year);
    let month = now.getMonth() + 1;
    console.log(month);
    let date2 = now.getDate();
    console.log(date2);
    let hour2 = now.getHours();
    console.log(hour2);
    let minutes2 = now.getMinutes();
    console.log(minutes2);
    let seconds2 = now.getSeconds();
    console.log(seconds2);
    // let time2 = now.getTime;
    let randStr = '';
    for (let i = 0; i < 8; i++) {
        randStr += parseInt(Math.random() * 9 + 1);
    }
    console.log(randStr);
    let orderNum = '' + year + month + date2 + hour2 + minutes2 + seconds2 + randStr;
    console.log(orderNum);
    tmpTicketRecordObj.orderNum = orderNum;
    let str = `
        <h4>订单号：
            <span>${orderNum}</span>
        </h4>
        <p>
            影片：
            <span>${theFilm.title}</span>
        </p>
        <p>
            影厅：
            <span>${session}</span>
        </p>
        <p>
            影城：
            <span>${theCinema.name}</span>
        </p>
        <p>
            时间：
            <span>${time}</span>
        </p>
        <p>
            数量：<titlt>${seatArr.length}</titlt>
            <span class="a_table">
              ${$('#button_group').html()}
            </span>
        </p>
        <p>
            单价：
            <span>${singlePrice}元/张,总金额：${seatArr.length*singlePrice}元</span>
        </p>
        <p>
            手机号码：
            <span class="number">${$('#phone-number').val()}</span>
        </p>
    `;
    $('.modal-body').html('');
    $('.modal-body').html(str);
    if (thePerson.cardNum) {
        vipRender();
    }
    tmpTicketRecordObj.tickets = seatArr;
    tmpTicketRecordObj.totalPrice = seatArr.length * singlePrice;
    tmpTicketRecordObj.singlePrice = singlePrice;

}

// 在模态框中点击确认支付按钮，选座将被锁定，跳转到选座页面
function payToSeat() {
    // 倒计时结束前可付款
    if (countDownStatus) {
        // 检测会员卡余额，必须会员卡支付
        if (thePerson.cardNum) {
            $('.bigbox').css('display', 'flex');
            // 从会员卡余额中扣除总价，再更新到本次存储中
            thePerson.cardNum[1] -= seatArr.length * singlePrice;
            person.forEach(item => {
                if (item.username === loginStatus) {
                    item = thePerson;
                    localStorage.setItem('person', JSON.stringify(person));
                }
            })
            // 开始存储订单信息：
            tmpTicketRecordObj.payType = 'vipCard';
            tmpTicketRecordObj.payStatus = '已支付';
            let theMoment = new Date();
            tmpTicketRecordObj.paytime = theMoment;
            /* setTimeout(() => {
                $('.bigbox').css('display', 'none');
            }, 2000); */
            
            // alert('支付成功，页面即将跳转');
            setTimeout(() => {
                $('.bigbox').css('display', 'none');
                // 关闭模态框
                $('.close').click();
                // 只有切换页面效果
                $('#first_box').css('display', 'block');
                $('#second_box').css('display', 'none');
            }, 3000);
            // 将购票信息存到当前用户数据中
            thePerson.ticketRecord = thePerson.ticketRecord || [];
            thePerson.ticketRecord.push(tmpTicketRecordObj);
            person.forEach(item => {
                if (item.username === loginStatus) {
                    item = thePerson;
                    localStorage.setItem('person', JSON.stringify(person));
                }
            })
            // 在此处将选座数组存储到本地
            // 先拼接cinema、movie和time信息，座位id
            // let seatSelectedId = dataCinemaId + dataMovieId + time;
            seatArr.forEach(item => {
                seatSelectedArr[seatSelectedId].push(item);
            });
            localStorage.setItem('seat', JSON.stringify(seatSelectedArr));
            redSeat(seatArr);
        } else {
            // 没有会员卡，前往创建
            if (confirm('订单必须使用会员卡支付，检测到您还未绑定会员卡，无法计算当前订单，是否前往绑定？')) {
                location.href = '../html/会员中心.html';
            }
        }
    } else {
        alert('超过15分钟未付款，请重新选座购票');
        location.href = '#';
        // 关闭模态框
        $('.close').click();
        // 回到第一个页面
        // 只有切换页面效果
        $('#first_box').css('display', 'block');
        $('#second_box').css('display', 'none');
    }


}

// 红色座位渲染函数
function redSeat(arr) {
    arr.forEach(item => {
        // &:nth-child()
        let $elem = $(`#line${item[0]} img:nth-child(${item[1]})`);
        // console.log($elem);
        $elem.prop('class', 'red');
        $elem.prop('src', '../images/ticket/red.png');

    });
}

console.log(seatSelectedArr[seatSelectedId]);
if (seatSelectedArr[seatSelectedId]) {
    redSeat(seatSelectedArr[seatSelectedId]);
}

// 进入支付界面时将渲染会员卡的信息
function vipRender() {
    $('#vipname').html('钻石会员');
    $('#vipcard').html(`卡号： ${thePerson.cardNum[0]}`);
    $('#charge').html(`余额： ￥${thePerson.cardNum[1]}`);
    $('#totalPrice').html(`会员价： ￥${seatArr.length*singlePrice}元`);
}

// 返回上一步的函数
function backToLastStep() {
    // 如果实在确认支付界面，则返回选座界面
    if ($('#second_box').css('display') === 'flex') {
        // 关闭模态框
        $('.close').click();
        // 回到第一个页面
        // 只有切换页面效果
        $('#first_box').css('display', 'block');
        $('#second_box').css('display', 'none');
    } else {
        // 如果不是，则返回购票界面
        history.back();
    }
}

// 定义一个动画，在需要时播放出来,动画播放函数
function playAnimation() {
    $('.bigbox').toggleClass('showAnimation');
}
console.log($('.bigbox'));
// $('.bigbox').css('display', 'flex');
