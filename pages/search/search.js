//search.js
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    console.log('onLoad')
    // Do some initialize when page load.
  },
  onReady: function() {
    console.log('onReady')
    // Do something when page ready.
  },
  onShow: function() {
    console.log('onShow')
    // Do something when page show.
  },
  onHide: function() {
    console.log('onHide')
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})