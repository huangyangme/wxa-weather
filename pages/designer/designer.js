// pages/designer/designer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location_name: '',
    location_country: ''
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLoc();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
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
      }
    })
  },

  getNow: function(lat,lon) {
    wx.showLoading({ title: '数据获取中…', mask: true });
    let that = this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json?key=5xl6osr61dscpgjy&location=' + lat + ':' + lon + '&language=zh-Hans',
      success: function (res) {
        console.log(res.data.results[0])
        let resData = res.data.results[0];
        let location_name = resData.location.name;

        that.setData({
          location_name: resData.location.name,
          location_country: resData.location.country,
          now_temperature: resData.now.temperature

        })
      }
    })
  },




})