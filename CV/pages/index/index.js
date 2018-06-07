//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myphoto: '/images/man.jpg',
    myname: '王子华',
    myjob: '软件测试工程师',
    myinfoArray: [
      '学历：大专',
      '工作经验：一年以上',
      '年龄：21岁',
      '电话：18320854199',
      'email:zihuaWangG@gmail.com',
      '居住地:深圳'
    ],
    myskillArray: [
      {
        "skillName":"Linux",
        "percent":75
      },
      {
        "skillName": "MySQL",
        "percent": 50
      },
      {
        "skillName": "Bug管理工具",
        "percent": 50
      }
    ],
    myprojectArray: [
      {
        "name": "好易贷",
        "url": "/pages/pone/index",
        "image": "",
        "descript":"好易贷是一款安全的互联网金融服务平台，该平台可以为大中、小微企业和个人消费提供贷款，投资用户也可以将闲散资金投放在这个平台上进行理财，投资成功即可获得收益。"
      },
      {
        "name": "颜美",
        "url": "/pages/ptwo/index",
        "image":"/images/logo1.png",
        "descript":"颜美 APP是一个结合化妆品点评、美妆教程、美妆资讯为一体的APP。为用户提供更多变美指南。"
      },
      {
        "name": "我要变强",
        "url": "/pages/pthree/index",
        "image": "",
        "descript": "“我要变强”是一个健身资讯类网站。该网站向用户提供健身相关的信息，指导健身爱好者制定科学的健身计划。帮助要减肥的人制定减肥方法，配置健康饮食，快速减肥。"
      }
    ],
    
  },

 
})
