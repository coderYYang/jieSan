let data = [{
  "name": "图书馆",
  "p": "115.712176,28.671626"
},
  {
    "name": "学生宿舍2栋",
    "p": "115.709971,28.669919"
  },
  {
    "name": "三元众创空间",
    "p": "115.710532,28.67051"
  },
  {
    "name": "江西应用科技学院",
    "p": "115.709595,28.67089"
  },
  {
    "name": "大学生活动中心",
    "p": "115.710777, 28.670402"
  }
];

let map = new BMap.Map("map");

map.addEventListener("click", function (e) {
  bd.classList.remove("open");
})

let photo = new BMap.Icon('../img/san1.png', new BMap.Size(24, 36));

//地图上添加照片
let lon, lat;
for (let i = 0; i < data.length; i++) {
  let arr = data[i].p.split(",");
  lon = parseFloat(arr[0]);
  lat = parseFloat(arr[1]);
  var point = new BMap.Point(lon, lat);
  let marker = new BMap.Marker(point, {
    icon: photo
  });
  map.addOverlay(marker);
}

//添加坐标点
map.centerAndZoom(point, 18);

//支持鼠标滚轮缩放
map.enableScrollWheelZoom(true);

//定位,需要自己的IP地址
let geo = document.querySelector(".getLocation");
geo.addEventListener("click", function () {
  new BMap.Geolocation().getCurrentPosition(
      function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          //通过Geolocation类的getStatus()可以判断是否成功定位。
          let mk = new BMap.Point(r.point);
          // console.log(r.point);
          map.panTo(r.ponit);
          map.addOverlay(r.point);
        }
      }, {
        enableHighAccuracy: true
      }
  );
});

