// 首先应该向远程数据库发送请求，返回影院，影片数据
let filmData, cinemaData;
// 影院信息
$.ajax({
  url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
  type: 'get',
  success: function (res) {
    // console.log(res);
    cinemaData = res.operas;
    console.log(cinemaData); //获取到影院信息
    cinemaRender(cinemaData, 'theBox1');
    $('#theBox1:first-child').addClass('redBg');
    if ($('.redBg').attr('data-cinema-id')) {
      // 影片信息
      $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
        type: 'get',
        success: function (res) {
          // console.log(res);
          filmData = res.movies;
          console.log(filmData); //获取到影片信息
          let idToMovieArr = [];
          let movies = $('.redBg').attr('data-cinema-movies');
          console.log(movies);
          console.log(typeof movies);
          // 根据当前id对应的movies信息进行遍历渲染
          filmData.forEach(item => {
            let id = item.id;
            let isHave = movies.includes(id);
            if (isHave) {
              idToMovieArr.push(item);
            }
          });
          movieCard(idToMovieArr, 'movie-content');
        }
      });

    }
  }
});
/* // 影片信息
$.ajax({
    url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
    type: 'get',
    success: function (res) {
        // console.log(res);
        filmData = res.movies;
        console.log(filmData); //获取到影片信息
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
// 将影院信息渲染到页面中
function cinemaRender(arr, id) {
  let str = arr.map(item => `<li data-cinema-id=${item.id} data-cinema-movies=${item.movies}>${item.name}</li>`).join('');
  let item = document.getElementById(id);
  $(item).html(str);
  item.firstElementChild.setAttribute('class', 'redBg');
}
// 为li标签绑定点击事件
$("#theBox1").on('click', 'li', function () {
  console.log(this);
  $(this).addClass('redBg');
  $(this).siblings().removeClass('redBg');
  let str = $(this).attr('data-cinema-movies');
  console.log(str);
  cinemaToMovies(str);
});
// 从选中的影院所包含的影片信息来渲染下面的时间和场次信息
// 定义渲染函数，根据输入渲染页面
function movieCard(arr, id) {
  let str = arr.map(item =>
    `
        <div class="movie" data-movie-id=${item.id}>
            <div class="card">
              <div class="img">
                <img src=${item.imgSrc} alt="">
              </div>
              <h5>${item.title}</h5>
              <h5>片长：${item.duration}</h5>
            </div>
            <div class="screening">
              <table>
                <thead>
                  <tr>
                    <td>放映时间</td>
                    <td>影厅空位</td>
                    <td>语言/版本</td>
                    <td>影厅</td>
                    <td>优惠信息</td>
                    <td>网购价</td>
                    <td><button><a href="#">立即购票</a>  </button></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="time">12:20</td>
                    <td>余139/150</td>
                    <td>英语<span>3D</span></td>
                    <td class="session">5号厅</td>
                    <td><img src="../images/ticket/jifen.png" alt=""></td>
                    <td>￥65.00</td>
                    <td><button><a onclick="seatSelect(this)">立即购票</a> </button></td>
                  </tr>
                  <tr>
                    <td>12:20</td>
                    <td>余139/150</td>
                    <td>英语<span>3D</span></td>
                    <td>5号厅</td>
                    <td><img src="../images/ticket/jifen.png" alt=""></td>
                    <td>￥65.00</td>
                    <td><button><a onclick="seatSelect(this)">立即购票</a> </button></td>
                  </tr>
                  <tr>
                    <td>12:50</td>
                    <td>余139/150</td>
                    <td>英语<span>3D</span></td>
                    <td>7号厅</td>
                    <td><img src="../images/ticket/jifen.png" alt=""></td>
                    <td>￥65.00</td>
                    <td><button><a onclick="seatSelect(this)">立即购票</a> </button></td>
                  </tr>
                  <tr>
                    <td>12:20</td>
                    <td>余139/150</td>
                    <td>英语<span>3D</span></td>
                    <td>5号厅</td>
                    <td><img src="../images/ticket/jifen.png" alt=""></td>
                    <td>￥65.00</td>
                    <td><button><a onclick="seatSelect(this)">立即购票</a> </button></td>
                  </tr>
                  <tr>
                    <td>12:20</td>
                    <td>余139/150</td>
                    <td>英语<span>3D</span></td>
                    <td>5号厅</td>
                    <td><img src="../images/ticket/jifen.png" alt=""></td>
                    <td>￥65.00</td>
                    <td><button><a onclick="seatSelect(this)">立即购票</a> </button></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        `
  ).join('');
  let item = document.getElementById(id);
  $(item).html('');
  $(item).html(str);
}
// 定义影院点击更换下方影片函数
function cinemaToMovies(movies) {
  // 影片信息
  let idToMovieArr = [];
  // 根据当前id对应的movies信息进行遍历渲染
  filmData.forEach(item => {
    let id = item.id;
    if (movies.includes(id)) {
      idToMovieArr.push(item);
    }
  });
  movieCard(idToMovieArr, 'movie-content');
}
// 点击立即购票进入选座界面，传入4个参数：影院id、电影id、时间、场次；
// 根据这4个参数，确定具体是选的哪个场的座位
function seatSelect(item) {
    let movieId = $(item).parents('.movie').attr('data-movie-id');
    console.log(movieId);//电影id成功
    let cinemaId = $('.redBg').attr('data-cinema-id');
    console.log(cinemaId);//影院id成功
    let children = $(item).parents('td').prevAll();
    let time = children[5].innerHTML;
    let session = children[2].innerHTML;
    console.log(time);
    console.log(session);
    location.href = `./选座.html?data-movie-id=${movieId}&data-cinema-id=${cinemaId}&time=${time}&session=${session}`;

}