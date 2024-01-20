let username, age, id, password;

Page({
  getName(event) {
    username = event.detail.value,
    console.log(event.detail.value)
  },
 
  getAge(event) {
    age = event.detail.value,
    console.log(event.detail.value)
  },

  getId(event) {
    id = event.detail.value,
    console.log(event.detail.value)
  },

  getPassword(event) {
    password = event.detail.value,
    console.log(event.detail.value)
  },

  add() {
    console.log(username, age, id, password,)
    wx.request({
      url: 'http://localhost:8080/add',
      method: 'GET',
      data: {
        name: username,
        age,
        id,
        password,
      },
      success(res){
        console.log("添加成功", res)
      },
      fail(res){
        console.log("添加失败", res)
      }
    })
  },

  delete() {
    wx.request({
      url: 'http://localhost:8080/deleteOne',
      method: 'GET',
      data: {
        name: username
      },

      success(res){
        console.log("成功删除", res)
        if(res.statusCode = 200) {
          wx.showToast({
            title: '删除成功',
          })
        } else {
          wx.showToast({
            title: '删除失败',
          })
        }
      },

      fail(res) {
        console.log("删除失败", res)
      }
    })
  },

  update() {

  },
  
  getAll() {
    let that = this;
    wx.request({
      url: 'http://localhost:8080/getAll',
      method: 'GET',
  
      success(res){
        console.log("成功获得", res)
        if(res.statusCode = 200) {
          that.setData({
            datalist : res.data
          })
          wx.showToast({
            title: '获得成功',
          })
        } else {
          wx.showToast({
            title: '获得失败',
          })
        }
      },

      fail(res) {
        console.log("获得失败", res)
      }
    })
  },
})