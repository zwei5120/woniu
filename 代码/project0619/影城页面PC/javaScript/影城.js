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
// 定义用户登录状态
let loginStatus = JSON.parse(sessionStorage.getItem('login')) || false;
if(loginStatus){
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
// 定义一个对象来存储请求回来的4级联动数据
let movieData;
// 定义数组存储远程请求的影片数据
let cinemaData, cinemaArr1, len;
// 快速购票处的4级联动，影院-电影-时间-场次
$.ajax({
    url: '../json/fourLinkage.json',
    type: 'get',
    success: function (res) {
        console.log(res);
        // 数据请求成功
        movieData = res.movieData;
        // 先进行影院的添加
        selectRender(movieData.yingyuan, 'cinema', '<option value="">选择影院</option>');
    }
});
// 定义一个下拉框作用函数，传入数据和select标签id后进行添加
function selectRender(arr, id, start) {
    let str = arr.map(item => `<option value='${item.name}'>${item.title}</option>`).join('');
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
    console.log(cinema);
    // 得到影院对应的电影
    let films = movieData.dianying[cinema];
    console.log(films);
    selectRender(films, 'movie', '<option value="">选择电影</option>');
    
}
// 根据电影来获取时间数据
function toTime(item) {
    // 先获取选择的影院
    let movie = item.value;
    console.log(movie);
    // 得到影院对应的电影
    let times = movieData.shijian[movie];
    console.log(times);
    selectRender(times, 'time', '<option value="">选择时间</option>');
}
// 根据时间获取场次信息
function toSession(item) {
    // 先获取选择的影院
    let time = item.value;
    console.log(time);
    // 得到影院对应的电影
    let sessions = movieData.changci[time];
    console.log(sessions);
    selectRender(sessions, 'session', '<option value="">选择场次</option>');
}

// 远程发起影片数据请求
$.ajax({
    url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
    type: 'get',
    success: function (res) {
        // console.log(res); //成功拿到数据，为一个对象，属性movies的值是一个长度21的数组
        // 数组中含有id、title等信息
        cinemaData = res.operas;
        // console.log(cinemaData);
        cinemaArr1 = cinemaData.slice(0, 3);
        len = cinemaData.length;
        $('#cinemaNum').html(len);
        movieRender(cinemaArr1, 'left-content');
        // 所有影片数据功有多少页
        let pages = parseInt(len / 3) + 1;
        // console.log(pages);
        $('#pages').html(`共有${pages}页`);

    }
});
// 定义一个渲染函数，向页面中渲染请求的影片数据
function movieRender(arr, id) {
    let newArr = arr.map(item =>
        `
        <div class="body-item">
            <div class="left">
                <img src=${item.img_src} alt="">
            </div>
            <div class="right">
                <div class="title">
                    <p>${item.name}</p>
                    <button onclick="buyTicket(this)" data-cinema-id=${item.id} data-cinema-movies=${item.movies}>购买选座</button>
                </div>
                <div class="content">
                    <p><i>地址：</i>${item.address}</p>
                    <p><i>电话：</i>${item.phone}</p>
                    <p>地铁1号线芳村站B1出口上右转30米；公交路线：芳村站（19、52、64、181、202、217、275、309、812、838、206、高峰快线206、夜11、夜29）芳村隧道口站（1、15、55、57、71、74、81、短线81、552、556、181、281、夜1、夜26）
                    </p>
                </div>
            </div>
        </div>
        `
    );
    let cur = document.getElementById(id);
    $(cur).html('');
    newArr.forEach(item => {
        let $item = $(item);
        $(cur).append($item);
    })
}
// 点击图片跳转到详情页面
function moreInfo(item) {
    console.log(item);
    let id = $(item).attr('data-movie-id');
    let type = $(item).attr('data-movie-type');
    console.log(id);
    console.log(type);
    location.href = `./影片详情页.html?data-movie-id=${id}&data-movie-type=${type}`;
}
// 点击购买选座跳转到购票页面
function buyTicket(item) {
    // console.log(item);
    let id = $(item).attr('data-cinema-id');
    // console.log(id);
    let movies = $(item).attr('data-cinema-movies');
    location.href = `./购票.html?data-cinema-id=${id}&data-cinema-movies=${movies}`;
}
// 以下实现翻页功能，每个页面显示5条数据，定义一个页面数字pageNum
let pageNum = 0;

function turnPage(num) {
    let count = num * 3;
    cinemaArr1 = cinemaData.slice(count, count + 3);
    movieRender(cinemaArr1, 'left-content');
}

// 为翻页按钮的父元素绑定点击事件
$('.changePage').on('click', 'a', function () {
    console.log(this);
    let cls = $(this).prop('class');
    console.log(cls);
    let num = parseInt($(this).prop('class').slice(9))
    console.log(num); //已获取到具体的a标签数字
    switch (num) {
        case 1: {
            pageNum = 0;
            break;
        }
        case 2: {
            while (pageNum > 0) {
                pageNum--;
                break;
            }
            break;
        }
        case 3: {
            pageNum = 0;
            break;
        }
        case 4: {
            pageNum = 1;
            break;
        }
        case 5: {
            pageNum = 2;
            break;
        }
        case 6: {
            pageNum = 3;
            break;
        }
        case 7: {
            while (pageNum < parseInt(len / 5)) {
                pageNum++;
                break;
            }
            break;
        }
        case 8: {
            pageNum = parseInt(len / 5);
            break;
        }
    }
    turnPage(pageNum);
})