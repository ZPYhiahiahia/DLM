// pages/test/test.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {


   


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

  },

  clickMe:function(){
    this.setData({msg:"hello world"})
  },

  getlocation:function(){
    wx.getLocation({
      success: (res) => {
        console.log(res.latitude)
        console.log(res.longitude)

        // console.log(undefined === JSON.stringify());
        // console.log(undefined === JSON.stringify(undefined));
        // console.log("null" === JSON.stringify(null));

        // console.log("111" === JSON.stringify(111));
        // console.log('"111"' === JSON.stringify("111"));
        // console.log("true" === JSON.stringify(true));
        // console.log(undefined === JSON.stringify(function () { }));

        // console.log(undefined === JSON.parse(JSON.stringify()));
        // console.log(undefined === JSON.parse(JSON.stringify(undefined)));
        // console.log(null === JSON.parse(JSON.stringify(null)));

        // console.log(111 === JSON.parse(JSON.stringify(111)));
        // console.log("111" === JSON.parse(JSON.stringify("111")));
        // console.log(true === JSON.parse(JSON.stringify(true)));

        
        
      },
    })
  },
  

    



  }
)

    