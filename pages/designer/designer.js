// pages/designer/designer.js
// https://www.seniverse.com/doc
// https://pixabay.com/api/docs/
// https://unsplash.com/documentation#get-a-random-photo

Page({

  /**
   * 页面的初始数据
   */
  data: {
    location_name: '',
    location_country: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLoc();
    this.getPhoto();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
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
        wx.hideLoading()
        console.log(res.data.results[0])
        
        let resData = res.data.results[0];
        let location_name = resData.location.name;
        that.setData({
          nowData: res.data.results[0],
          location_name: resData.location.name,
          location_country: resData.location.country,
          now_temperature: resData.now.temperature
        })
      }
    })
  },

  getDaily: function(lat, lon){
    let that = this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/daily.json?key=5xl6osr61dscpgjy&location=' + lat + ':' + lon + '&language=zh-Hans&unit=c&start=0&days=3',
      success: function(res) {
        console.log(res.data.results[0].daily)
        that.setData({
          dailyData: res.data.results[0].daily
        })
      }
    })
  }

})