// pages/settings/studentCheck/studentCheck.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uniIdInput:null,
    captchaHidden:true,
    captchaImageSrc:null,
  },

  uniIdTextBlur:function(event){
    this.setData({
      uniIdInput: event.detail.value
    })
    var that = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: app.globalData.host + "/user/register/checkNeedCaptcha",
      method: 'POST',
      header: {
        'Content-Type': "application/x-www-form-urlencoded" // "post"
      },
      data: {
        uniId: this.data.uniIdInput,
      },
      success: function (res) {
        wx.showToast({
          title: '请求成功',
          icon: 'fail',
          duration: 2000,
        })
        wx.hideLoading()        
        if (!res.data.checkResult) {
          that.setData({
            captchaHidden: true
          })
        }
        else {
          that.setData({
            captchaHidden: false
          })
          that.setData({
            captchaImageSrc: "data:image/jpeg;base64," + res.data.bytes
          })

        }
      },
      fail:function(){
        wx.showToast({
          title: '网络发生错误，请重试!',
          icon:'fail',
          duration:2000,
        })
        wx.hideLoading()
      }
      
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})