// pages/settings/studentCheck/studentCheck.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uniIdInput: "",
    passwordInput: "",
    captchaInput: "",
    captchaHidden:true,
    captchaImageSrc:"",
    toast:null,
  },
  uniIdBindInput:function(event){
    this.setData({
      uniIdInput:event.detail.value
    })
  },
  uniIdBindBlur:function(event){
    this.setData({
      uniIdInput: event.detail.value
    })
    if (this.data.uniIdInput === "" || this.data.uniId === null){
      this.selftoast.showToast("学号不能为空");
      return;
    }
    var that = this;
    wx.showLoading({
      title: '验证中...',
    })
    wx.request({
      url: app.globalData.studentHost + "/user/checkNeedCaptcha",
      method: 'POST',
      header: {
        'Content-Type': "application/x-www-form-urlencoded" // "post"
      },
      data: {
        uniId: this.data.uniIdInput,
      },
      success: function (res) {
        wx.hideLoading()        
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          duration: 2000,
          
        })
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
        wx.hideLoading()
        that.selftoast.showToast("网络错误,请重试")
      }
      
    })

  },
  passwordBindInput:function(event){
    this.setData({
      passwordInput:event.detail.value
    })


  },
  captchaBindInput:function(event){
    this.setData({
      captchaInput:event.detail.value
    })
  },
  studentCheckConfirmButtonBindTap:function(){
    var that = this
    if (that.data.uniIdInput === "" || that.data.uniIdInput === ""){
      that.selftoast.showToast("输入内容不能为空")
      return
    }
    wx.showLoading({
      title: '验证中...',
    })
    wx.request({
      url:app.globalData.studentHost+'/user/checkStudent',
      method:'POST',
      data:{
        uniId:that.data.uniIdInput,
        password:that.data.passwordInput,
        captcha:that.data.captchaInput,
      },
      header: {
        'Content-Type': "application/x-www-form-urlencoded" // "post"
      },
      success:function(res){
        wx.hideLoading()
        if (res.data['status'] == 'ok'){
          if (res.data['response'] == 'success'){
          wx.showToast({
            title: '验证成功',
            duration:2000,
          })
        }
        else if (res.data['response'] == 'wrongAccount'){
            that.selftoast.showToast("账号或密码错误")          
        }
        else if (res.data['response'] == 'wrongCaptcha'){
            that.selftoast.showToast("验证码错误")          

        }
        else{
            that.selftoast.showToast("请求频繁")          

        }
      }
        else{
          that.selftoast.showToast("网络错误")          

        }
      }
    }) 
  }
,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.selftoast = this.selectComponent("#toast")

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