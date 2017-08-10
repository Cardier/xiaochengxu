
//index.js
//获取应用实例
var app = getApp();
var bmap = require('../../libs/bmap-wx/bmap-wx.min.js');
var wxMarkerData = [];  
Page({
  data: {
    ak: "Z4cIiH79hFTTxBNCU9iQy0bLMayyGEdI", //填写申请到的ak  
    address: '',     //地址  
  },
  onLoad: function () {
    var that = this;
    /* 获取定位地理位置 */
    // 新建bmap对象   
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function (data) {
      console.log("fail");
    };
    var success = function (data) {
      //返回数据内，已经包含经纬度  
      console.log("succ");
      //使用wxMarkerData获取数据  
      wxMarkerData = data.wxMarkerData;
      //把所有数据放在初始化data内  
      that.setData({
        address: wxMarkerData[0].address
      });
    }
    // 发起regeocoding检索请求   
    BMap.regeocoding({
      fail: fail,
      success: success
    });
  }  
})
