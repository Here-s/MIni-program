const db = wx.cloud.database()

Page({
  data:{
    banner:[],
    fenlei:[]
  },

  onLoad:function(){
      let that = this
      db.collection('swiper').get({
        success:function(res){
          console.log('轮播图获取成功',res)
          that.setData({
            banner:res.data
          })
        },
        fail:function(res){
          console.log('轮播图获取失败',res)
        },
      })
      db.collection('fenlei').get({
        success:function(res){
          console.log('分类获取成功',res)
          that.setData({
            fenlei:res.data
          })
        },
        fail:function(res){
          console.log('分类获取失败',res)
        },
      })
      db.collection('product').get({
        success:function(res){
          console.log('商品获取成功',res)
          that.setData({
            product:res.data
          })
        },
        fail:function(res){
          console.log('商品获取失败',res)
        },
      })
  },
})