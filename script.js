// =========================
// BIOGLOW 台灣生物多樣性地圖
// =========================

// 建立地圖
const map = L.map("map").setView([23.7, 121], 7);

// OpenStreetMap 底圖
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap"
}).addTo(map);

// 生物資料
const animals = [

{
name:"台灣黑熊",
place:"玉山國家公園",
lat:23.47,
lng:120.96,
photo:"https://upload.wikimedia.org/wikipedia/commons/6/63/Formosan_black_bear.jpg",
intro:"台灣黑熊是台灣特有亞種，也是台灣最大的陸生哺乳動物。"
},

{
name:"帝雉",
place:"阿里山",
lat:23.51,
lng:120.80,
photo:"https://upload.wikimedia.org/wikipedia/commons/8/83/Mikado_Pheasant.jpg",
intro:"帝雉是台灣特有種鳥類，被稱為霧林中的王者。"
},

{
name:"黑面琵鷺",
place:"台江國家公園",
lat:23.02,
lng:120.14,
photo:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Black-faced_Spoonbill.jpg",
intro:"冬季會飛到台灣度冬，是珍貴的保育鳥類。"
},

{
name:"綠蠵龜",
place:"墾丁國家公園",
lat:21.95,
lng:120.78,
photo:"https://upload.wikimedia.org/wikipedia/commons/5/59/Green_turtle_swimming.jpg",
intro:"綠蠵龜生活在熱帶海域，是保育類海洋生物。"
},

{
name:"櫻花鉤吻鮭",
place:"雪霸國家公園",
lat:24.38,
lng:121.05,
photo:"https://upload.wikimedia.org/wikipedia/commons/8/8f/Oncorhynchus_masou.jpg",
intro:"台灣國寶魚，只生活在高山溪流。"
}

];

// 建立所有標記
animals.forEach(function(a){

const marker=L.marker([a.lat,a.lng]).addTo(map);

marker.bindPopup("<b>"+a.name+"</b><br>"+a.place);

marker.on("click",function(){

document.getElementById("name").innerHTML=a.name;

document.getElementById("photo").src=a.photo;

document.getElementById("intro").innerHTML=
"<b>地點：</b>"+a.place+
"<br><br>"+a.intro;

});

});

// 搜尋功能
document.querySelector(".topbar button").onclick=function(){

const key=document.getElementById("search").value.trim();

const result=animals.find(a=>
a.name.includes(key)||a.place.includes(key)
);

if(result){

map.setView([result.lat,result.lng],10);

document.getElementById("name").innerHTML=result.name;

document.getElementById("photo").src=result.photo;

document.getElementById("intro").innerHTML=
"<b>地點：</b>"+result.place+
"<br><br>"+result.intro;

}else{

alert("找不到資料");

}

};
