        /* 
     蜗牛ATM系统
    a)要求：
    i.   用二维数组保存用户名、密码、余额，默认有一个用户，名字为admin，密码为ad123,余额为1000.
    ii.  新建用户默认有一定金额(1000).
    iii. 每个功能用不同的函数
    b)所包含功能
    i.登录、注册、查询、转账、存钱、取钱、修改密码
    c)系统大致流程
    i.显示一级菜单(1. 登录 2. 注册 3. 退出)
    ii.当选择注册选项时执行注册功能，执行退出，整个项目结束。
    iii.当选择登录并登录成功后进入二级菜单
       二级菜单：1. 查询 2. 取钱 3. 存钱 4. 转账 5. 修改密码 6. 返回上一级
    iv.选择对应功能并执行后返回二级菜单，只能通过选项6退回到一级菜单


    分析
    1. 欢迎界面
    2. 显示一级菜单(1. 登录 2. 注册 3. 退出)
    3.  让用户选择一级菜单操作 ：  如果是注册，那就去注册用户（重复步骤2,3），如果是退出，那么就结束ATM使用
        当选择登陆的时候，登陆失败，就提示他登陆失败，然后继续输入信息
                          登陆成功，就进入二级菜单
    4， 二级菜单： 1. 查询 2. 取钱 3. 存钱 4. 转账 5. 修改密码 6. 返回上一级
        选择1-5的时候，执行对应的功能，返回二级菜单。
        选择选项6的时候，就返回一级菜单
*/
        alert('欢迎来到我的ATM机');
        let users = [ // 所有用户
            ['admin', 'ad123', 1000]
        ];
        // 定义一个登录成功后，用于标记当前登录状态的用户名
        let theUserNameIndex;

        let showFirst = true;
        while (showFirst) {
            let num = prompt('1. 登录 2. 注册 3. 退出') - 0;
            switch (num) {
                case 1:
                    // 登录
                    login();
                    break;
                case 2:
                    // 注册
                    register();
                    break;
                case 3:
                    showFirst = false;
                    break;
                default:
                    alert('无效输入！');
            }
        }

        // 登录
        // 需要获取用户名和密码的输入，并与users中的数据进行比较
        function login() {
            let user = prompt("请输入用户名：");
            let pwd = prompt('请输入密码：');
            // 设置验证是否成功的变量
            let isCertified = false;
            // 针对已经存在的用户及密码列表进行循环遍历
            // for (let i = 0; i < users.length; i++) {
            //     console.log(users[i]);
            //     users[i].forEach(item =>{
            //         console.log(item);
            //     })
            //     if (users[i].includes(user) && users[i].includes(pwd)) {
            //         isCertified = true;
            //     }
            // }
            users.forEach((item, index) => {
                if (item.includes(user) && item.includes(pwd)) {
                    isCertified = true;
                    theUserNameIndex = index;
                }
            })
            if (isCertified) {
                menu(); // 开启二级菜单
            }
        }

        // 注册
        function register() {
            let user = prompt('请输入用户名');
            let pwd = prompt('请输入密码');
            users.push([user, pwd, 1000]);
        }

        // 需要定义一个功能函数，输入用户名，返回其在二维数组中一维数组的位置,没有则返回false
        function getIndexOfTheUser(username) {
            let index = -1;
            users.forEach((item, ind) => {
                if (item.includes(username)) {
                    index = ind;
                }
            })
            return index;

        }


        // 二级菜单
        function menu() {
            let showSecond = true;
            while (showSecond) {
                let num = prompt(' 1. 查询 2. 取钱 3. 存钱 4. 转账 5. 修改密码 6. 返回上一级') - 0;
                switch (num) {
                    case 1:
                        // 进入查询
                        theQuery();

                        break;
                    case 2:
                        // 进入取钱
                        getMoney();
                        break;
                    case 3:
                        // 存钱功能
                        theDeposit();
                        break;
                    case 4:
                        // 转账功能
                        theTransfer();
                        break;
                    case 5:
                        // 修改密码
                        changePwd();
                        showSecond = false;
                        break;
                    case 6:
                        // 返回上一级
                        showSecond = false;
                        break;
                    default:
                        alert('无效输入！');
                }
            }
        }

        // 定义查询函数，需要根据当前用户名来进行查询
        function theQuery() {
            // return users[theindex][2];
            alert('当前账户余额为：' + users[theUserNameIndex][2]);
        }
        // 定义取钱函数
        function getMoney() {
            // 定义一个while循环，针对输错数字时的反复输入，定义变量值来进行标记
            let isContinue = true;
            while (isContinue) {
                // 获取取钱金额
                let num = prompt('请输入取钱数量：') - 0;
                // 需要判断num为整数，如100或50的倍数，其他值判定为无效输入
                // 并且取钱数量不能大于用户本身额度
                if (num % 50 != 0) {
                    alert('输入金额为无效数字，必须为50或100的倍数');
                    continue;
                } else if (num > users[theUserNameIndex][2]) {
                    alert('输入金额与用户本身额度，你没有这么多钱');
                    continue;
                } else {
                    users[theUserNameIndex][2] -= num;
                    alert('取钱成功');
                    isContinue = false;
                    break;
                }
            }

        }
        // 定义存钱函数
        function theDeposit() {
            // 存钱金额也必须时50或100的倍数，因此也需要while循环来获取合法数字输入
            let isContinue = true;
            while (isContinue) {
                // 获取存钱金额
                let num = prompt('请输入存钱数量：') - 0;
                // 需要判断num为整数，如100或50的倍数，其他值判定为无效输入
                // 并且取钱数量不能大于用户本身额度
                if (num % 50 != 0) {
                    alert('输入金额为无效数字，必须为50或100的倍数');
                    continue;
                } else {
                    users[theUserNameIndex][2] += num;
                    alert('存钱成功');
                    isContinue = false;
                    break;
                }
            }
        }
        // 定义转账功能
        function theTransfer() {
            // 需要获取转账用户及转账金额
            // 要判断转账用户是否存在，并判断转账金额是否合法及额度是否足够
            let isContinue = true;
            while (isContinue) {
                let toName = prompt('输入转账用户：');
                if (getIndexOfTheUser(toName) == -1) {
                    alert('该用户不存在，请重新输入');
                } else {
                    let isContinue2 = true;
                    while (isContinue2) {
                        let toNum = prompt('用户名正确，请输入转账金额：') - 0;
                        if (toNum > users[theUserNameIndex][2]) {
                            alert('超过当前用户账户额度，你没有这么多钱');
                            continue;
                        } else {
                            users[theUserNameIndex][2] -= toNum;
                            users[getIndexOfTheUser(toName)][2] += toNum;
                            alert('转账成功');
                            isContinue = false;
                            isContinue2 = false;
                            break;
                        }
                    }

                }
            }
        }
        // 修改密码功能
        function changePwd() {
            let isContinue = true;
            while (isContinue) {
                // 首先输入原密码进行校验是否为当前用户
                let oldpwd = prompt('请输入原密码：');
                if (users[theUserNameIndex][1] !== oldpwd) {
                    alert('密码错误，请重新输入');
                    continue;
                } else {
                    let newpwd = prompt('请输入新密码：');
                    users[theUserNameIndex][1] = newpwd;
                    alert('密码修改成功，请重新登录');
                    theUserNameIndex = undefined;
                    isContinue = false;
                    break;
                }
            }
        }