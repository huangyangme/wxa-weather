//index.js

let U = require('../../utils/util.js');

//获取应用实例
var app = getApp()
Page({
  data: {
    candan: false
  },

  getLoc: function() {
    wx.showLoading({ title: '定位中…', mask: true });
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        that.getRealtime(res.latitude, res.longitude);
        that.getForecast(res.latitude,res.longitude);
      }
    })
  },

  getRealtime: function (lat, lon) {
    wx.showLoading({ title: '数据获取中…', mask: true });
    let that = this;
    wx.request({
      url: 'https://api.caiyunapp.com/v2/vYHrEZjjEI0D6=xI/' + lon + ',' + lat + '/realtime.json',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        let data = res.data.result;
        let skycon = data.skycon;
        let aqi = data.aqi;
        let temperature = data.temperature;
        console.log(aqi)
        if (skycon == 'CLEAR_NIGHT') {
          that.setData({
            caidan: true
          })
        }
        that.setData({
          code: '/assets/' + skycon + '.png',
          // code: '/assets/CLEAR_NIGHT.png',
          skycon: skycon,
          skyconText: U.skyconText(skycon),
          skyconColor: U.skyconColor(skycon),
          aqiStr: U.aqiStr(aqi),
          aqiClass: U.aqiClass(aqi),
          temperature: temperature,
          temperaturecolor: U.temperatureColor(temperature)
        })
      }
    })
  },

  getForecast: function(lat,lon) {
    wx.showLoading({ title: '数据获取中…', mask: true });
    let that = this;
    let caiyunAPI = 'https://api.caiyunapp.com/v2/vYHrEZjjEI0D6=xI/' + lon + ',' + lat + '/forecast.json';
    wx.request({
      url: caiyunAPI,
      header: { 'content-type': 'application/json' },
      success: function(res) {
        let result = res.data.result.minutely.description;
        let result_hourly = res.data.result.hourly.description;
        that.setData({
          result: result,
          result_hourly: result_hourly
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

  onShareAppMessage: function () {
    return {
      title: this.data.result_hourly,
      path: '/pages/index/index'
    }
  },

  // 下拉刷新
  onPullDownRefresh: function(){
    this.getLoc();
  },
  
  onLoad: function() {
    this.getLoc();
  }
})
