//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // wx.setStorageSync('logs', logs)
  },
  globalData:{
    userInfo:null
  }
})