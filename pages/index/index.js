//index.js

let U = require('../../utils/util.js');

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getLoc: function() {
    // 在当前页面显示导航条加载动画
    wx.showNavigationBarLoading();
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        that.getNowData(res.latitude,res.longitude);
        that.getDailyData(res.latitude,res.longitude);
      }
    })
  },

  getNowData: function(lat,lon) {
    let that = this;
    let weatherAPI = 'https://api.thinkpage.cn/v3/weather/now.json?key=5xl6osr61dscpgjy&location='+lat+':'+lon+'&language=zh-Hans';
    wx.request({
      url: weatherAPI,
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        let result = res.data.results[0];
        that.setData({
          city: result.location.name,
          code: '/assets/' + result.now.code + '.png',
          skycon: result.now.text,
          skyconcolor: U.skyconColor(result.now.code),
          temperature: result.now.temperature,
          temperaturecolor: U.temperatureColor(result.now.temperature)
        })

        // 隐藏导航条加载动画
        wx.hideNavigationBarLoading();

        // wx.setNavigationBarTitle({
        //   title: result.location.name
        // })

      },
      fail: function(res) {
        console.log(res.data)
      }
    })
  },

  getDailyData: function(lat,lon) {
    let that = this;
    // let weatherAPI = 'https://api.thinkpage.cn/v3/weather/daily.json?key=5xl6osr61dscpgjy&location='+lat+':'+lon+'&language=zh-Hans&unit=c&start=0&days=2';
    let caiyunAPI = 'https://api.caiyunapp.com/v2/DxGJIQ==5n8qq9Np/' + lon + ',' + lat + '/forecast.json';
    wx.request({
      url: caiyunAPI,
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        let result = res.data.result.minutely.description;
        let aqi = res.data.result.hourly.aqi[0].value;
        console.log(aqi)
        that.setData({
          result: result,
          aqiStr: U.aqiStr(aqi),
          aqiClass: U.aqiClass(aqi)
        })

        // wx.setNavigationBarTitle({
        //   title: result.location.name
        // })

      },
      fail: function(res) {
        console.log(res.data)
      }
    })
  },
  
  onLoad: function() {
    console.log('onLoad')
    this.getLoc()
  }
})
