//获取应用实例
const app = getApp()


Page({
  data: {
    
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mHidden:true,
    noCancel:true,
    uniIdInput:"",
    captchaHidden:true,
    captchaImageSrc:""
  },


 /* bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },*/
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){

      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {

      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  onShareAppMessage: function () {

  },

  btnTap: function () {
    this.setData({
      mHidden:false
    })
    
  },
  uniIdBlur: function (event) {
    
  }
  ,
  changeModel:function(){
    this.setData({
      mHidden:true
    });
  },
  modelCancel: function () {
    this.setData({
      mHidden:true
    });
  },
  
}

  

)
