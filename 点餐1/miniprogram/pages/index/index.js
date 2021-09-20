const db = wx.cloud.database()

Page({
  data:{
    banner:[],
    fenlei:[],
    product:[],
    search:[]
  },
  search:function(e){
    let that = this
    db.collection('product').where({
      name:e.detail.value
    }).get({
      success:function(res){
        that.setData({
          search:res.data
        })
        console.log('搜索成功',that.data.search)
        if(that.data.search == ""){
          wx.showToast({
            title: '未找到商品',
            icon:"none"
          })
        }
      },
      fail:function(res){
        console.log('搜索失败',res)
      },
    })
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