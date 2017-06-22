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
    image: 'https://pixabay.com/get/e03db50a29fc1c2ad65a5854e34a4f95e470e4c818b5184995f4c77aa1eb_640.jpg',
    nowData: {
      "location": {
        "id": "C23NB62W20TF",
        "name": "西雅图",
        "country": "US",
        "timezone": "America/Los_Angeles",
        "timezone_offset": "-07:00"
      },
      "now": {
        "text": "多云", //天气现象文字
        "code": "4", //天气现象代码
        "temperature": "14", //温度，单位为c摄氏度或f华氏度
        "feels_like": "14", //体感温度，单位为c摄氏度或f华氏度
        "pressure": "1018", //气压，单位为mb百帕或in英寸
        "humidity": "76", //相对湿度，0~100，单位为百分比
        "visibility": "16.09", //能见度，单位为km公里或mi英里
        "wind_direction": "西北", //风向文字
        "wind_direction_degree": "340", //风向角度，范围0~360，0为正北，90为正东，180为正南，270为正西
        "wind_speed": "8.05", //风速，单位为km/h公里每小时或mph英里每小时
        "wind_scale": "2", //风力等级，请参考：http://baike.baidu.com/view/465076.htm
        "clouds": "90", //云量，范围0~100，天空被云覆盖的百分比 #目前不支持中国城市#
        "dew_point": "-12" //露点温度，请参考：http://baike.baidu.com/view/118348.htm #目前不支持中国城市#
      },
      "last_update": "2015-09-25T22:45:00-07:00" //数据更新时间（该城市的本地时间）
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getLoc();
    this.getPhoto();
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
        // that.getNow(res.latitude, res.longitude);
        that.getDaily(res.latitude, res.longitude);
      }
    })
  },

  getPic: function(w) {
    let that = this;
    wx.request({
      url: 'https://pixabay.com/api/?key=5693776-0401ed77a6c1c0c4555c4b0c6&q=' + w + '&image_type=photo&min_width=500&category=places&per_page=3&pretty=true',
      success: function(res) {
        console.log(res.data.hits[0].webformatURL);
        that.setData({
          image: res.data.hits[1].webformatURL
        })
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
        console.log(res.data.results[0])
        
        let resData = res.data.results[0];
        let location_name = resData.location.name;

        that.getPic(res.data.results[0].location.name);

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