const weapons=[
 "95式","G36C","AR18(89式)","M4A1","M4A4","SCAR-L","AK-47","SCAR-H","M16A4","AUG","RN94","AK14","M27","81式","HK50","AKAIpha","MC-X","ADS","APS",
 "Dual TMP","UZI","MK5","MP5","PP2000","05式","トンプソン","P90",
 "LSR-8","AWM","CS","AMR-83","Kar98k","M24","ゴールデンクマ","M1891","爆裂弓","SVD","Val","88式","56式","クロスボウ",
 "M860","M88C","SK12",
 "ガトリングガン","MK60","95式軽機関銃"
];
//団体
const weapons2 = [
 "95式","G36C","M4A1","M4A4","SCAR-L","AK-47","SCAR-H","M16A4","AUG","RN94","AK14","M27","81式","HK50","AKAIpha","MC-X",
 "Dual TMP","UZI","MK5","MP5","PP2000","05式","P90",
 "AWM","CS","AMR-83","M24","爆裂弓","SVD",
 "M860","M88C","SK12"
];
//メンスト
const weapons3 = [
 "95式","G36C","M4A1","M4A4","SCAR-L","AK-47","SCAR-H","M16A4","AUG","RN94","AK14","M27","81式","HK50","AKAIpha","MC-X",
 "Dual TMP","UZI","MK5","MP5","PP2000","05式","P90",
 "AWM","CS","AMR-83","M24","爆裂弓","SVD",
 "M860","M88C","SK12"
];

//アイコン
// アイコン更新関数
function updateFavicon() {
  const modeLabel = { squad: "団体", mensto: "メンスト" }[currentMode] || "通常"; // モード名簡略版
  const favicon = document.querySelector("link[rel='icon']");
  const appleIcon = document.querySelector("link[rel='apple-touch-icon']");

  // モードごとのアイコンURL
  const iconMap = {
    "通常": "./images/wb8ioTqw_400x400.jpg",
    "団体": "./images/dt.jpg",
    "メンスト": "./images/me.jpg"
  };

  if (iconMap[modeLabel]) {
    if (favicon) favicon.href = iconMap[modeLabel];
    if (appleIcon) appleIcon.href = iconMap[modeLabel];
  }
}
