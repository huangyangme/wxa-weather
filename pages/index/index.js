// pages/designer/designer.js
// https://www.seniverse.com/doc
// https://pixabay.com/api/docs/
// https://unsplash.com/documentation#get-a-random-photo

let U = require('../../utils/util.js');
Page({
  data: {
  },

  onLoad: function (options) {
    this.getLoc();
    this.getPhoto();
  },

  onShow: function () {
  },

  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },

  getLoc: function () {
    wx.showLoading({ title: '定位中…', mask: true });
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.getNow(res.latitude, res.longitude);
        that.getDaily(res.latitude, res.longitude);
      }
    })
  },

  getPhoto: function() {
    let that = this;
    wx.request({
      url: 'https://api.unsplash.com/photos/random?orientation=portrait&client_id=3e8beded2efc246e5df094b2650deff66466d4f9b6fa9e975433316725db71f9',
      success: function(res) {
        console.log(res.data)
        that.setData({
          photo: res.data.urls.regular
        })
      }
    })
  },

  getNow: function(lat,lon) {
    wx.showLoading({ title: '数据获取中…', mask: true });
    let that = this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json?key=5xl6osr61dscpgjy&location=' + lat + ':' + lon + '&language=zh-Hans',
      success: function (res) {
        wx.hideLoading();
        that.setData({
          nowData: res.data.results[0]
          // nowCode: U.skyconicon(res.data.results[0].now.code)
        })
      }
    })
  },

  getDaily: function(lat, lon){
    let that = this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/daily.json?key=5xl6osr61dscpgjy&location=' + lat + ':' + lon + '&language=zh-Hans&unit=c&start=0&days=3',
      success: function(res) {
        wx.hideLoading();
        that.setData({
          dailyData: res.data.results[0].daily
        })
      }
    })
  }

})