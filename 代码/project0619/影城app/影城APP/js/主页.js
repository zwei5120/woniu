let loginStatus = JSON.parse(sessionStorage.getItem('login')) || false;
let personApp = JSON.parse(localStorage.getItem('person-app'));
let thePerson = JSON.parse(sessionStorage.getItem('theperson')) || {};
$('#showAcc').html(loginStatus);

let nowplaying, upcoming;
let movieScoreList;
// 详情数据
let playingDetail, comingDetail;

// 选座页面之前的信息收集
let toSeatInfo = {
    address: '成都双楠电影城'
};
// 选座信息
let seatInfo = [];

// 定义渲染函数
function movieRender(arr, id) {
    let str = arr.map(item => `
        <div class="movie-card">
            <a>
                <img src=${item.posterSrc} alt="" data-movie-id=${item.id}>
            </a>
            <p>${item.title}</p>
        </div>
    `).join('');
    $(`#${id}`).html('');
    $(`#${id}`).html(str);
}
// 通过Ajax请求电影数据，渲染到移动端页面中
$.ajax({
    url: '../json/nowplaying.json',
    type: 'get',
    success: function (res) {
        // console.log(res);//打印请求的数据
        nowplaying = res;
        movieRender(nowplaying.slice(0, 12), 'show-body1');
        // 评分榜，将正在热映的数组按照评分排序
        movieScoreList = nowplaying.sort((a, b) => b.score - a.score);
        scoreListRender(movieScoreList.slice(0, 5), 'show-score');
    }
});
// 即将上映数据
$.ajax({
    url: '../json/upcoming.json',
    type: 'get',
    success: function (res) {
        console.log(res); //打印请求的数据
        upcoming = res;
        console.log(upcoming);
        movieRender(nowplaying.slice(0, 12), 'show-body2');

    }
});
// 查看更多
function showMore1() {
    $('.content').hide();
    $('.changeArea').hide();
    $('.movie-content').hide();
    $('.top-content').show();
    $('.body-show2').show();

}

function showMore2() {
    $('.content').hide();
    $('.changeArea').hide();
    $('.movie-content').hide();
    $('.top-content').show();
    $('.body-show2').show();

}

// 评分榜渲染函数
function scoreListRender(arr, id) {
    let str = arr.map(item => `
        <div class="score-card">
            <div class="left">
                <img src=${item.posterSrc} alt="" data-movie-id=${item.id}>
            </div>
            <div class="right">
                <p id="movie-name">${item.title}</p>
                <p id="score">${item.score}</p>
                <p>年份：<span>${item.release}</span></p>
                <p>导演：<span>${item.director}</span></p>
                <p>演员：<span>${item.actors}</span></p>
                <p>时长：<span>${item.duration}</span></p>
                <p>地区：<span>${item.region}</span></p>
            </div>
        </div>
    `).join('');
    $(`#${id}`).html('');
    $(`#${id}`).html(str);
}

function backStep1() {
    $('.content').show();
    $('.changeArea').show();
    $('.movie-content').show();
    $('.top-content').hide();
    $('.body-show2').hide();
    // history.back();
}

// 第二个页面，查看更多
// 请求详情数据
$.ajax({
    url: '../json/nowplaying-Detail.json',
    type: 'get',
    success: function (res) {
        // console.log(res); //打印热映详情信息
        playingDetail = res;
        console.log('热映详情', playingDetail);
        // bodyShow2(playingDetail, )应该在点击加载更多的时候渲染
        bodyShow2(playingDetail, 'playing-show')
    }
});
// 即将上映详情数据
$.ajax({
    url: '../json/upcoming-Detail.json',
    type: 'get',
    success: function (res) {
        // console.log(res); //打印热映详情信息
        comingDetail = res;
        // console.log('即将详情', comingDetail);
        // bodyShow2(comingDetail, )应该在点击加载更多的时候渲染
        bodyShow2(comingDetail, 'coming-show');
    }
});

function bodyShow2(arr, id) {
    let str = '';
    for (let item in arr) {
        // console.log(arr[item]);
        let tmpstr = `
        <div class="movie-card">
            <div class="left">
                <img src=${arr[item].imgSrc} alt="">
            </div>
            <div class="right">
                <div class="up">
                    <p id="movie-name">${arr[item].title}</p>
                    <p id="score">评分：<span>${arr[item].score}</span></p>
                    <p>类型：<span>${arr[item].movieType}</span></p>
                    <p>时长：<span>${arr[item].duration}</span></p>
                </div>
                <button onclick="buyTicket(this)" data-movie-id=${arr[item].id}>立即购票</button>
            </div>
        </div>
        `;
        str += tmpstr;
    }
    $(`#${id}`).html('');
    $(`#${id}`).html(str);
}

// 切换按钮
/* $('.changeType').on('click', 'a', function(){
    $(this).addClass('show');
    $(this).siblings().removeClass('show');
}); */
function aClick1(item) {
    $('#playing-show').show();
    $('#coming-show').hide();
    $(item).addClass('show');
    $(item).siblings().removeClass('show');
}

function aClick2(item) {
    $('#playing-show').hide();
    $('#coming-show').show();
    $(item).addClass('show');
    $(item).siblings().removeClass('show');
}

// 修改密码界面，小眼睛按钮
// 点击眼睛图片实现密码显示切换
function showPwd1(item) {
    let type = $('#oldPwd').prop('type');
    if (type === 'password') {
        $(item).removeClass('fa-eye-slash');
        $(item).addClass('fa-eye');
        $('#oldPwd').prop('type', 'text');
    } else if (type === 'text') {
        $(item).removeClass('fa-eye');
        $(item).addClass('fa-eye-slash');
        $('#oldPwd').prop('type', 'password');
    }
}

function showPwd2(item) {
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

function showPwd3(item) {
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

// 修改密码点击函数
function changePwd() {
    // 获取旧密码，进行验证
    console.log(thePerson);
    let oldPwd = $('#oldPwd').val();
    if (thePerson.pwd === oldPwd) {
        // 旧密码验证通过，开始验证两次输入的新密码值
        let newPwd = $('#pwd').val();
        let newPwd2 = $('#pwd2').val();
        if (newPwd === newPwd2) {
            thePerson.pwd = newPwd;
            for (let i = 0, len = personApp.length; i < len; i++) {
                if (personApp[i].username === thePerson.username) {
                    personApp[i] = thePerson;
                    localStorage.setItem('person-app', JSON.stringify(personApp));
                    break;
                }
            }
            // 清除登录信息
            sessionStorage.removeItem('login');
            sessionStorage.removeItem('theperson');
            alert('修改密码成功，请重新登录，点击确定前往登录界面');
            location.href = '../html/登录.html';
        }
    } else {
        alert('请再次确认密码');
    }
}


// 我的页面切换功能
function changePwdPage() {
    $('.user-page .top,.user-body').hide();
    $('.changePwd-page').show();
}

function backToUserPage() {
    $('.user-page .top,.user-body').show();
    $('.changePwd-page').hide();
}

// 定义详情页渲染函数，根据点击电影的id渲染详情页面
function movieDetailRender(id) {
    // 遍历热映数组，拿到当前影片对象
    let theFilm = playingDetail[id];
    $('.movie-page .movie-content1 .top').css('background-image', `url(${theFilm.posterSrc})`);
    $('.movie-page .movie-content1 .title .left img').prop('src', `${theFilm.imgSrc}`);
    $('#detail-id').html(`${theFilm.title}`);
    $('#detail-type').html(`${theFilm.movieType}`);
    $('#detail-duration').html(`${theFilm.duration}`);
    // $('#detail-duration').html(`${theFilm.title}`);
    $('#detail-score').html(`${theFilm.score}`);
    $('.intro').html(`${theFilm.desc}`);
    toSeatInfo.title = theFilm.title;

}

// 点击首页的影片，跳转到影片详情页面
// 为首页渲染的元素动态绑定点击事件
$('#show-body1').on('click', 'img', function () {
    console.log($(this));
    let dataMovieId = $(this).attr('data-movie-id');
    // 切换到详情页面
    $('.main-container').hide();
    $('.user-page').hide();
    $('.changePwd-page').hide();
    $('.movie-page').show();
    $('.film-plan').show();
    $('.intro').hide();
    $('.movie-content1 .btn li:first-child').addClass('show');
    $('.movie-content1 .btn li:last-child').removeClass('show');
    $('.cinema-page').hide();
    $('.foot-content').hide();
    movieDetailRender(dataMovieId);
    dateRender();

});

// 影片页面切换功能
function movieShowPlan(item) {
    $(item).addClass('show');
    $(item).siblings().removeClass('show');
    $('.film-plan').show();
    $('.intro').hide();
    $('.seat-page').hide();
}

function movieShowIntro(item) {
    $(item).addClass('show');
    $(item).siblings().removeClass('show');
    $('.film-plan').hide();
    $('.intro').show();
}

// 返回箭头按钮，返回主页
function backToMainPage() {
    $('.cinema-page').hide();
    $('.main-container').show();
    // 底部按钮颜色切换
    $('#foot-item .item').removeClass('show');
    $('#foot-item .item:first-child').addClass('show');
    $('.foot-content').show();
}
// 影片详情页星期几点击事件
// 
$('.weekdays').on('click', 'div', function () {
    $(this).addClass('locked-show');
    $(this).siblings().removeClass('locked-show');
    let times = $(this).children();
    // console.log(times);
    toSeatInfo.dateTime = times[1].innerText + ' ' + times[0].innerText;
    console.log(toSeatInfo.dateTime);
});
// 动态渲染一周的日期
function dateRender() {
    let now = new Date();
    console.log(now);
    // 获取月
    let month = now.getMonth() + 1;
    console.log('月', month);
    //  获取日
    let day = now.getDate();
    console.log('日', day);
    // 获取星期几
    let weekday = now.getDay();
    console.log('星期', weekday);
    let elem = $('.movie-item-show .film-plan .weekdays');
    elem.html('');
    // 通过7次循环渲染到页面中
    for (let i = 0; i < 7; i++) {
        let str = `
        <div class="item">
            <p>星期${weekday}</p>
            <p>${month}月${day}日</p>
        </div>
        `;
        let $item = $(str);
        elem.append($item);
        day++;
        weekday++;
        if (weekday == 8) {
            weekday = 1;
        }
    }
    $('.movie-item-show .film-plan .weekdays .item:first-child').addClass('locked-show');
}
// 影院场次的点击选择事件
$('.line-sessions').on('click', 'li', function () {
    // 灰色的按钮代表不能选择的场次，白色的未可选项
    let itemColor = $(this).hasClass('gray');
    if (!itemColor) {
        $(this).addClass('blue');
        $(this).siblings().removeClass('blue');
        toSeatInfo.dateTime = toSeatInfo.dateTime + ' ' + $(this).html();
        console.log(toSeatInfo.dateTime);

    } else {
        alert('该场次票已售空');
    }
});

// 点击立即选座跳转到选座页面
function toSeatPage() {
    $('.movie-content1').hide();
    $('.seat-page').show();
    seatPageRender();
}

function backToSessionPage() {
    $('.movie-content1').show();
    $('.seat-page').hide();
}
// 选座页面信息渲染
function seatPageRender() {
    $('.film-name').html(`${toSeatInfo.title}`);
    $('.address-info').html(`${toSeatInfo.address + ' ' + toSeatInfo.dateTime}`);

}

// 选座页面
// 座位点击事件
$('.seat-page .seat-content .seat-body').on('click', '.item', function () {
    // console.log(this);
    let clsname = $(this).prop('class');
    console.log(typeof clsname);
    if (seatInfo.length < 4) {
        if (!clsname.includes('gray')) {
            if (!clsname.includes('blue')) {
                $(this).addClass('blue');
                seatInfo.push($(this).html());
                seatInfoRender(seatInfo);
            } else {
                $(this).removeClass('blue');
                let index = seatInfo.indexOf($(this).html());
                seatInfo.splice(index, 1);
                seatInfoRender(seatInfo);
            }
        }
    } else {
        if (clsname.includes('blue')) {
            $(this).removeClass('blue');
            let index = seatInfo.indexOf($(this).html());
            seatInfo.splice(index, 1);
            seatInfoRender(seatInfo);
        } else {
            alert('最多选择4个座位');
        }

    }

});
// 选座信息渲染函数，及存储
function seatInfoRender(arr) {
    let str = arr.map(item => `<div class="item">${item}</div>`).join('');
    $('.seatSelectShow .tickets-show .show-content').html('');
    $('.seatSelectShow .tickets-show .show-content').html(str);
    // 总价
    $('.seatSelectShow .tickets-show .totalPrice').html(`￥${arr.length*60}.00`);
}

// 立即购票按钮点击，前往确认订单页面
// 
function reviewOrder() {
    alert('购票成功');
    // 直接跳转到首页
    $('.main-container').show();
    $('.user-page').hide();
    $('.changePwd-page').hide();
    $('.movie-page').hide();
    $('.cinema-page').hide();
    $('.foot-content').show();
}




// 底部切换按钮功能
$('#foot-item').on('click', 'li', function () {
    console.log('123');
    $(this).addClass('show');
    $(this).siblings().removeClass('show');
    // 页面切换隐藏
    let value = $('.foot-content .show span').html();
    if (value === '我的') {
        $('.main-container').hide();
        $('.user-page').show();
        $('.changePwd-page').hide();
        $('.movie-page').hide();
        $('.cinema-page').hide();
        $('.foot-content').show();
    } else if (value === '首页') {
        $('.main-container').show();
        $('.user-page').hide();
        $('.changePwd-page').hide();
        $('.movie-page').hide();
        $('.cinema-page').hide();
        $('.foot-content').show();
    } else if (value === '影院') {
        $('.main-container').hide();
        $('.user-page').hide();
        $('.changePwd-page').hide();
        $('.movie-page').hide();
        $('.cinema-page').show();
        $('.foot-content').show();
    } else if (value === '影片') {
        $('.main-container').hide();
        $('.user-page').hide();
        $('.changePwd-page').hide();
        $('.movie-page').show();
        $('.film-plan').show();
        $('.intro').hide();
        $('.movie-content1 .btn li:first-child').addClass('show');
        $('.movie-content1 .btn li:last-child').removeClass('show');
        $('.cinema-page').hide();
        $('.foot-content').show();
    }
});
$('.foot-content').show();
$('.seat-page').hide();