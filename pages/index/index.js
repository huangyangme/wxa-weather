//index.js

let U = require('../../utils/util.js');

//获取应用实例
var app = getApp()
Page({

  getLoc: function() {
    wx.showLoading({ title: '定位中…', mask: true });
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        that.getNowData(res.latitude,res.longitude);
        that.getDailyData(res.latitude,res.longitude);
      }
    })
  },

  // getLocData: function() {
  //   wx.showLoading({ title: '定位中…', mask: true });
  //   let that = this;
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success: function(res) {
  //       wx.setStorageSync('position', {
  //         lat: res.latitude,
  //         lon: res.longitude
  //       });
  //       that.getNowData(res.latitude,res.longitude);
  //       that.getDailyData(res.latitude,res.longitude);
  //     }
  //   })
  // },

  getNowData: function(lat,lon) {
    wx.showLoading({ title: '数据获取中…', mask: true });
    let that = this;
    let weatherAPI = 'https://api.thinkpage.cn/v3/weather/now.json?key=5xl6osr61dscpgjy&location='+lat+':'+lon+'&language=zh-Hans';
    wx.request({
      url: weatherAPI,
      header: { 'content-type': 'application/json' },
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

        // wx.setNavigationBarTitle({ title: result.location.name })
        wx.hideLoading();
      },
      fail: function(res) {
        console.log(res.data)
        wx.hideLoading();
      }
    })
  },

  getDailyData: function(lat,lon) {
    wx.showLoading({ title: '数据获取中…', mask: true });
    let that = this;
    // let weatherAPI = 'https://api.thinkpage.cn/v3/weather/daily.json?key=5xl6osr61dscpgjy&location='+lat+':'+lon+'&language=zh-Hans&unit=c&start=0&days=2';
    let caiyunAPI = 'https://api.caiyunapp.com/v2/DxGJIQ==5n8qq9Np/' + lon + ',' + lat + '/forecast.json';
    wx.request({
      url: caiyunAPI,
      header: { 'content-type': 'application/json' },
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

        wx.stopPullDownRefresh();
        wx.hideLoading();
      },
      fail: function(res) {
        console.log(res.data);
        wx.hideLoading();
      }
    })
  },

  // 下拉刷新
  onPullDownRefresh: function(){
    this.getLoc();
  },
  
  onLoad: function() {
    this.getLoc();
  },

  // onShow: function() {
  //   let that = this;
  //   wx.getStorage({
  //     key: 'position',
  //     success: function(res){
  //       that.getNowData(res.latitude,res.longitude);
  //       that.getDailyData(res.latitude,res.longitude);
  //     },
  //     fail: function(res) {
  //       that.getLoc();
  //     }
  //   })
  // }
})
