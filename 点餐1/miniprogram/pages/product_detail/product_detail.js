// pages/product_detail/product_detail.js
//初始化数据库
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_name: "",
    product_src: [],
    product_price: 0,
    product_detail: "",
    product_num: "",
    product_xq_src: "",
    id: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    console.log('产品的id已经获取到了', options.id)
    db.collection('product').doc(options.id).get({
      success: function (res) {
        console.log('商品详细信息获取成功', res)
        that.setData({
          product_src: res.data.src,
          product_name: res.data.name,
          product_num: res.data.num,
          product_price: res.data.price,
          product_detail: res.data.detail,
          product_xq_src: res.data.product_xq_src
        })
      },
      fail: function (res) {
        console.log('商品详细信息获取失败', res)
      }
    })
    db.collection('swiper').get({
      success: function (res) {
        console.log('轮播图获取成功', res)
        that.setData({
          banner: res.data
        })
      },
      fail: function (res) {
        console.log('轮播图获取失败', res)
      },
    })
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