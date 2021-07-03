    // 进入页面时，解析url中的电影id值，根据id获取对应详情信息，渲染页面
    // 解析url中的id
    function getIdFromUrl(str, item) {
        let params = new URLSearchParams(str);
        let id = params.get(item);
        return id;
    }
    let dataMovieId = getIdFromUrl(location.search, 'data-movie-id');
    let dataMovieType = getIdFromUrl(location.search, 'data-movie-type');
    //  console.log(dataMovieId);
    //  console.log(dataMovieType);
    //  定义一个变量接收解析出来的页面数据对象
    let CurPageObj;
    let nowplayingData, upcomingData;
    //   星星数量计数
    let starCount = 4; //默认为4星评论
    //   定义一个评论本地存储对象，放在localstorage中
    let comArr = {};
    // 每次进入页面时需要去读取本地的评论数据
    comArr = JSON.parse(localStorage.getItem('comments')) || {};
    comArr[dataMovieId] = comArr[dataMovieId] || [];
    // console.log(comArr);
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

    // 星星点击点亮事件
    function setGoldStar() {
        let li = event.target;
        console.log(li);
        if (li.tagName === 'LI') {
            $(li).addClass('goldStar');
            $(li).prevAll().addClass('goldStar');
            $(li).nextAll().removeClass('goldStar');
        }
        // 获取父节点，然后获取所有子节点并遍历计数点亮的星星数量
        // 根据数量进行评分及推荐语句修改
        let lis = li.parentNode.children;
        let count = 0;
        for (let i = 0; i < lis.length; i++) {
            if ($(lis[i]).hasClass('goldStar')) {
                count++;
            }
        }
        // 对count进行判断，并对后面的评分进行赋值
        switch (count) {
            case 0: {
                let str = `<span>0.0</span>没有评分`;
                $('#dynamic-score').html(str);
                break;
            }
            case 1: {
                let str = `<span>2.0</span>烂片`;
                $('#dynamic-score').html(str);
                starCount = 1;
                //  console.log(starCount);
                break;
            }
            case 2: {
                let str = `<span>4.0</span>还行`;
                $('#dynamic-score').html(str);
                starCount = 2;
                //  console.log(starCount);
                break;
            }
            case 3: {
                let str = `<span>6.0</span>勉强`;
                $('#dynamic-score').html(str);
                starCount = 3;
                //  console.log(starCount);
                break;
            }
            case 4: {
                let str = `<span>8.0</span>很棒，推荐大家去`;
                $('#dynamic-score').html(str);
                starCount = 4;
                //  console.log(starCount);
                break;
            }
            case 5: {
                let str = `<span>10.0</span>神片，此生必追`;
                $('#dynamic-score').html(str);
                starCount = 5;
                //  console.log(starCount);
                break;
            }
        }
    }

    //  定义评论存储数组
    //   let comArr;
    /*  $.ajax({
         url: '../json/nowplaying-detail.json',
         type: 'get',
         success: function (res) {
             nowplayingData = res;
             console.log(nowplayingData);
         },
         url: '../json/upcoming-detail.json',
         type: 'get',
         success: function (res) {
             upcomingData = res;
             console.log(upcomingData);
         }
     }); */


    //  根据电影类型（正在热映/即将上映）请求数据
    function Ajax(MovieType, obj, id, comArr) {
        console.log('进入函数');
        if (MovieType === 'nowplaying') {
            $.ajax({
                url: '../json/nowplaying-detail.json',
                type: 'get',
                success: function (res) {
                    CurPageObj = res[id];
                    pageRender(CurPageObj);
                    comRender(CurPageObj.comments);
                    // comArr = CurPageObj.comments || [];
                    if (comArr[dataMovieId]) {
                        comArr[dataMovieId].forEach(item => {
                            comRenderLi(item.score, item.text, item.time);
                        });
                    }
                }
            });
        } else if (MovieType === 'upcoming') {
            $.ajax({
                url: '../json/upcoming-detail.json',
                type: 'get',
                success: function (res) {
                    CurPageObj = res[id];
                    pageRender(CurPageObj);
                    comRender(CurPageObj.comments);
                    // comArr = CurPageObj.comments || [];
                    if (comArr[dataMovieId]) {
                        comArr[dataMovieId].forEach(item => {
                            comRenderLi(item.score, item.text, item, time);
                        });
                    }
                }
            });
        }
    }
    //  调用函数，传入接收对象，获取页面数据
    Ajax(dataMovieType, CurPageObj, dataMovieId, comArr);
    // 
    function pageRender(item) {
        let str = `
    <p>广州<span>8</span>家影城上映该片，共<span>28</span>个场次</p>
    <div class="body-item">
        <div class="title">
            <p>${item.title}</p>

        </div>
        <div class="content">
            <div class="left">
                <img src=${item.imgSrc} alt="">
            </div>
            <div class="right">

                <div class="content">
                    <div class="text">
                        <p><i>导演：</i>${item.director}</p>
                        <p>领衔主演：${item.actors}</p>
                        <p>国家/地区：${item.region}</p>
                        <p><i>类型 ：</i>${item.movieType}</p>
                        <p><i>片长 ：</i>${item.duration}</p>
                        <p><i>上映时间：</i>${item.release}</p>
                        <p><i>语言：</i>${item.language}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- 放置分页导航区域 -->
    <div class="nav-page">
        <!-- 导航栏标签位置 -->
        <div class="nav-title">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="home-tab" data-toggle="tab" href="#ticket-purchase" role="tab"
                        aria-controls="home" aria-selected="true">排片购票</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#plot-comment"
                        role="tab" aria-controls="profile" aria-selected="false">剧情与评论</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#trailer" role="tab"
                        aria-controls="contact" aria-selected="false">预告片</a>
                </li>
            </ul>
        </div>
        <!-- 导航栏标签对应页面内容放置区域 -->
        <div class="nav-content">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade" id="ticket-purchase" role="tabpanel" aria-labelledby="home-tab">
                    <!-- 排片购票 内容 -->
                    <div class="content">
                        拍片购票
                    </div>

                </div>
                <div class="tab-pane fade show active" id="plot-comment" role="tabpanel"
                    aria-labelledby="profile-tab">
                    <!-- 剧情与评论 内容 -->
                    <div class="content">
                        <!-- 简介部分 -->
                        <div class="introduction">
                            <p>澳门风云 剧情简介</p>
                            <div>
                                ${item.desc}
                            </div>
                            <p>剧照海报</p>
                            <img src=${item.posterSrc} alt="">
                        </div>
                        <!-- 评论部分 -->
                        <div class="comments">
                            <div class="title">
                                ${item.title} 全部评论
                            </div>
                            <div class="com-text">
                                <!-- 输入框区域 -->
                                <div class="text-input">
                                    <div class="icon"></div>
                                    <div class="text">
                                        <div class="input">
                                            <!-- 点击进行评分 -->
                                            <div class="star">
                                                <p>我要评分：</p>
                                                <ul class="star-num" onclick="setGoldStar()">
                                                    <li class="item goldStar"></li>
                                                    <li class="item goldStar"></li>
                                                    <li class="item goldStar"></li>
                                                    <li class="item goldStar"></li>
                                                    <li class="item"></li>
                                                </ul>
                                                <p id="dynamic-score"><span>8.0</span>很棒，推荐大家去</p>
                                            </div>
                                            <textarea name="" id="comment-text"></textarea>
                                        </div>
                                        <!-- 以上是文本框输入区域，以下是按钮提交区域 -->
                                        <div class="tosubmit">
                                            <div class="icon"></div>
                                            <div class="btn">
                                                <p><span>140</span>字</p>
                                                <button onclick="addComs()">我要发布</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 评论显示区域 -->
                                <div class="show-comments" id="show-comments">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade trailer-content" id="trailer" role="tabpanel" aria-labelledby="contact-tab">
                    <!-- 预告片 内容 -->
                    <div class="content">
                        <p>${item.title}</p>
                        <div class="trailer">
                            <!-- 播放控件 自动播放 循环播放 静音播放 -->
                            <video src="../video/海绵宝宝.mp4" controls autoplay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `;
        $('#main-left').html(str);
    }

    //  评论区域单独渲染，根据拿到的数据进行循环渲染（这里是请求回来的数据库中的评论数据，人为添加的在后面）
    function comRender(arr) {
        let str = arr.map(item =>
            `
        <div class="com-item">
            <div class="icon"></div>
            <div class="context">
                <div class="line1">
                    <p class="name">打酱油的</p>
                    <div class="star">
                        <ul class="star-num">
                            <li class="item goldStar"></li>
                            <li class="item goldStar"></li>
                            <li class="item goldStar"></li>
                            <li class="item goldStar"></li>
                            <li class="item"></li>
                        </ul>
                        <p><span>8.0</span></p>
                        <p class="date">2014/2/9 22:18:59</p> 
                    </div>   
                </div>
                <div class="line2">
                        ${item}
                </div>
            </div>
        </div>
        `
        ).join('');
        // 将生产的元素放进父元素中
        $('.show-comments').html(str);
    }
    //  人为添加评论渲染函数
    function comRenderLi(starCount, text, theMoment) {
        //  根据starCount产生星星标签
        let starStr = '';
        for (let i = 0; i < starCount; i++) {
            starStr += '<li class="item goldStar"></li>';
        }
        let str =
            `
        <div class="com-item">
            <div class="icon"></div>
            <div class="context">
                <div class="line1">
                    <p class="name">打酱油的</p>
                    <div class="star">
                        <ul class="star-num">
                            ${starStr}
                        </ul>
                        <p><span>${starCount*2}.0</span></p>
                        <p class="date">${theMoment}</p> 
                    </div>   
                </div>
                <div class="line2">
                        ${text}
                </div>
            </div>
        </div>
        `;
        let $newCom = $(str);
        // 将生产的元素放进父元素中
        $('.show-comments').prepend($newCom);
    }

    //  用户新添加的评论单独存放在本地，
    //  在远程数据库中的评论数据渲染结束后再进行渲染
    //  添加评论事件函数（先考虑存储，再考虑加载）
    function addComs() {
        // 要获取评分的星星数量，默认是4个；
        console.log(starCount);
        // 要获取评论的文本内容
        let text = $('#comment-text').val();
        // console.log(text);//评论内容已获取
        // 要获取点击发布评论时的具体时间2014/2/9 22:18:59
        let now = new Date();
        // console.log(now);//Fri Jun 25 2021 09:43:35 GMT+0800 (中国标准时间)
        let theMoment = `${now.getFullYear()}/${now.getMonth()}/${now.getDay()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        // console.log(theMoment); //时间表示格式已修改
        // 使用以上三个数据先渲染到评论中去
        comRenderLi(starCount, text, theMoment);
        // 已实现渲染，以下为存储部分
        // 用以上三个数据去渲染一条评论，并将这三个信息存储到本地缓存中
        /* let [dataMovieId] = {
            score: starCount,
            time: theMoment,
            comtext: text
        }; */
        //   将一次评论作为一个对象存储到id对应的数组中去
        let theCom = {
            score: starCount,
            time: theMoment,
            text: text
        };
        comArr[dataMovieId].push(theCom);
        console.log(comArr);
        localStorage.setItem('comments', JSON.stringify(comArr));


    }

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

    // 预告片渲染