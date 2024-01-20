// pages/index/index.js
Page({
  data: {
    imageUrl: '',
    tempFilePath: ''
  },
  
  // 选择图片
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        });
      }
    });
  },
  
  // 上传图片
  uploadImage: function () {
    var that = this;
    wx.uploadFile({
      url: 'http://localhost:8080/updateGoodsImage',
      filePath: that.data.tempFilePath,
      name: 'file',
      formData: {
        goodsName: encodeURIComponent('曹政') // 编码商品名
      },
      success: function (res) {
        // 直接使用后端返回的文件路径
        var data = res.data;
        console.log(data);
        if (data) {
          that.setData({
            imageUrl: 'http://localhost:8080/' + data
          });
          wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 2000
          });
        } else {
          wx.showToast({
            title: '上传失败',
            icon: 'none',
            duration: 2000
          });
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '上传失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  }
});
