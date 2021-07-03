注册页面：
	1、验证码验证
		theAuthCode === iptAuthCode 则验证成功
		
	2、用户数据存储
		一个用户就是一个user对象，具有用户名、密码、邮箱等3个属性；
		使用一个person数组来存储user，每次push进去；
		[ 0: {username: "zwj", pwd: "123", email: "zwei5120@gmail.com"}
		  1: {username: "grl", pwd: "321", email: "1170747739@qq.com"} ]
		  
	3、用户输入账户、密码及邮箱时需要验证，所有验证通过，注册成功；
		
		
电影数据： 1. 获取所有的电影数据 https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies 
		   2. 获取所有的电影院数据 https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas 
		   3. 获取所有的电影种类数据 https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllTypes
演艺数据： 1. 获取所有的演艺数据 https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllArts 
		   2. 获取所有的剧院数据 https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllTheatres 
		   3. 获取所有的演艺种类数据 https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllTypes 
		   4. 获取所有的城市数据 https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllCiyies
		   
		   
		   搜索项：
			热映： title、director、actors、region、release（年份，即将上映没有）、
			
	购票记录数据：
		影片名称、订单编号、购买时间、影院名称、支付金额、支付状态（待支付/已支付）、删除按钮
	详细数据：影厅、票价、支付方式（会员卡）、购票手机号、场次（时间及场次）、票数、位置（可能多个）、总价、取票号
	
	每条购票数据都应该存为一个数组，每次push进ticketRecord这个二维数组中，再将这个二维数组作为属性值存在当前登录用户身上
	