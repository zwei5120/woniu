// 先测试获取城市数据
/* $.ajax({
    url: 'https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllCiyies',
    type: 'get',
    success: function (res) {
        // console.log(res);
        // let obj = JSON.parse(res);
        console.log(res.citys);
        // 数据请求成功
    }
}); */
// 定义一个对象来存储请求回来的4级联动数据
let movieData;
// 定义一个数组存储热映和即将上映的电影数据
let nowMovieData;
let upMovieData;
// 使用临时数组表示当前渲染的驱动数据
let nowArr1, upArr1;
// 定义用户登录状态
let loginStatus = JSON.parse(sessionStorage.getItem('login')) || false;
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
// 快速购票处的4级联动，影院-电影-时间-场次
$.ajax({
    url: '../json/fourLinkage.json',
    type: 'get',
    success: function (res) {
        // console.log(res);
        // 数据请求成功
        movieData = res.movieData;
        // 先进行影院的添加
        selectRender(movieData.yingyuan, 'cinema', '<option value="">选择影院</option>');
    }
});
// 定义一个下拉框作用函数，传入数据和select标签id后进行添加
function selectRender(arr, id, start) {
    let str = arr.map(item => `<option value='${item.name}' data-num='123'>${item.title}</option>`).join('');
    str = start + str;
    let item = document.getElementById(id);
    $(item).html(str);
}
// 根据影院来获取电影数据
function toMovie(item) {
    // 在更换影院选择后，应该刷新后面三个选择项
    $('#movie').html('<option value="">选择电影</option>');
    $('#time').html('<option value="">选择时间</option>');
    $('#session').html('<option value="">选择场次</option>');
    // 先获取选择的影院
    let cinema = item.value;
    // console.log(cinema);
    // 得到影院对应的电影
    let films = movieData.dianying[cinema];
    // console.log(films);
    selectRender(films, 'movie', '<option value="">选择电影</option>');

}
// 根据电影来获取时间数据
function toTime(item) {
    // 先获取选择的影院
    let movie = item.value;
    // console.log(movie);
    // 得到影院对应的电影
    let times = movieData.shijian[movie];
    // console.log(times);
    selectRender(times, 'time', '<option value="">选择时间</option>');
}
// 根据时间获取场次信息
function toSession(item) {
    // 先获取选择的影院
    let time = item.value;
    // console.log(time);
    // 得到影院对应的电影
    let sessions = movieData.changci[time];
    // console.log(sessions);
    selectRender(sessions, 'session', '<option value="">选择场次</option>');
}

// 从JSON文件中获取正在热映的数据信息
$.ajax({
    url: '../json/nowplaying.json',
    type: 'get',
    success: function (res) {
        console.log(res);
        // 获取数据成功，数据为数组，内含对象，对象为一部电影信息
        nowMovieData = res;
        // 先渲染12条数据
        nowArr1 = nowMovieData.slice(0, 12);
        // console.log(arr1);
        setTimeout(() => {
            $('.bigbox').css('display', 'none');
            movieRender(nowArr1, 'nowplaying');
        }, 800);
        
    }
});
// 定义一个电影渲染函数，将图片、影名、评分和id等信息写进页面
function movieRender(arr, id) {
    // console.log('进入函数');
    // 传入一个数组，将数组中包含的影片数据渲染到页面中
    let str = arr.map(item =>
        `
        <div class="item">
            <a href="" class="show1">
                <img src="${item.posterSrc}" alt="">
                <p>${item.title}</p>
            </a>
            <!-- 在此处书写hover时的效果 -->
            <div class="toHover">
                <p>${item.actors}</p>
                <div class="score">好评度：${item.score}</div>
                <a class="introduction"  data-movie-id='${item.id}' data-movie-type=${id} onclick="moreInfo(this)">
                    <div class="icon"></div>
                    <p>影片介绍</p>
                </a>
            </div>
        </div>
    `
    ).join('');
    // 将内容放置到父元素标签中
    let box = document.getElementById(id);
    // console.log(box);
    // console.log(str);
    $(box).html(str);
}
// 从JSON文件中获取即将上映的数据信息
$.ajax({
    url: '../json/upcoming.json',
    type: 'get',
    success: function (res) {
        console.log(res);
        // 获取数据成功，数据为数组，内含对象，对象为一部电影信息
        upMovieData = res;
        // 先渲染12条数据
        let upArr1 = upMovieData.slice(0, 12);
        // console.log(arr1);
        movieRender(upArr1, 'upcoming');
    }
});
let countnum = 12;
// 加载更多按钮函数
function getMoreMovie() {
    $('.bigbox').css('display', 'flex');
    let nowArr2 = nowMovieData.slice(countnum, countnum + 8);
    nowArr1 = nowArr1.concat(nowArr2);
    setTimeout(() => {
        $('.bigbox').css('display', 'none');
        movieRender(nowArr1, 'nowplaying');
    }, 500);
    countnum += 8;
}

// 点击影片介绍，跳转到影片详情页，并渲染其数据
function moreInfo(item) {
    console.log(item);
    let id = $(item).attr('data-movie-id');
    let type = $(item).attr('data-movie-type');
    console.log(id);
    console.log(type);
    location.href = `./影片详情页.html?data-movie-id=${id}&data-movie-type=${type}`;
}

let cinemaArr = ['1', '2', '3', '4', '5'];
let movieArr = ['1292213', '1295038', '1299398', '1849031', '1889243'];

// 4级联动之后，根据选择的值（影院、影片、时间、场次），点击快速购票到选座页面
function quickTicketToSeat() {
    // 先获取选择的4个下拉框的值
    let random = parseInt(Math.random() * 6);
    let cinemaId = cinemaArr[random];
    let movieId = movieArr[random];
    let time = '2021-07-23';
    let session = '19:30';
    console.log(cinemaId, movieId, time, session);
    location.href = `./选座.html?data-movie-id=${movieId}&data-cinema-id=${cinemaId}&time=${time}&session=${session}`;
}

// 搜素功能，获取input输入，在整个正在热映和即将上映的数据库中匹配
// 对匹配的数据加入到临时数据数组中，调用页面渲染函数写入页面
function movieSearch() {
    $('.bigbox').css('display', 'flex');
    let value = $('.ipt_search').val();
    console.log(value); //成功获取到值
    // 遍历nowMovieData和upMovieData两个数组内的对象
    let nowNewArr = nowMovieData.filter(item => {
        let titleHave = item.title.includes(value);
        let directorHave = item.director.includes(value);
        let actorsHave = item.actors.includes(value);
        let regionHave = item.region.includes(value);
        let releaseHave = item.release.includes(value);
        if (titleHave || directorHave || actorsHave || regionHave || releaseHave) {
            return true;
        }
    });
    let upNewArr = upMovieData.filter(item => {
        let titleHave = item.title.includes(value);
        let directorHave = item.director.includes(value);
        let actorsHave = item.actors.includes(value);
        let regionHave = item.region.includes(value);
        if (titleHave || directorHave || actorsHave || regionHave) {
            return true;
        }
    });
    nowNewArr = nowNewArr.concat(upNewArr);
    setTimeout(() => {
        $('.bigbox').css('display', 'none');
        movieRender(nowNewArr, 'nowplaying');
    }, 500);
    

}

function judgeNull(item) {
    let value = item.value;
    if (!value) {
        movieRender(nowArr1, 'nowplaying');
    }
}

// 跳转到会员中心
function toVip() {
    if(!loginStatus) {
        let isTo = confirm('尚未登录，是否前往登录页面？');
        if(isTo) {
            location.href = '../html/登陆.html';
        }
    }else{
        location.href = '../html/会员中心.html';
    }
}
$('.bigbox').css('display', 'flex');
// 更换城市
// $('#cityName').on('click')
function showCity() {
    $('.changeCity').toggleClass('showcity');
}

$('#toChangeCity').on('click', 'li', function() {
    let clsname = $(this).prop('class');
    if(clsname === 'cities') {
        let value = $(this).text();
        $('#cityName').html(value);
        $('.changeCity').toggleClass('showcity');
    }
});