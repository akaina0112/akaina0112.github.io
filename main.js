<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Human Horror</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,body{
    width:100%;
    height:100%;
    overflow:hidden;
}

body{
    width:100vw;
    height:100dvh;
    background: radial-gradient(circle, #222 0%, #000 75%);
    color:white;
    font-family:"Yu Gothic", sans-serif;
    position: relative;
}

/* 画面ノイズ */
body::before{
    content:"";
    position:absolute;
    inset:0;
    background: repeating-linear-gradient(
        0deg,
        rgba(255,255,255,.04) 0px,
        transparent 3px
    );
    animation:noise .15s infinite;
    pointer-events:none;
    z-index: 2;
}

@keyframes noise{
    0%{ transform:translate(0); }
    50%{ transform:translate(-3px,2px); }
    100%{ transform:translate(2px,-3px); }
}

/* 霧 */
.fog{
    position:absolute;
    width:200%;
    height:200%;
    background: radial-gradient(
        circle,
        rgba(120,120,120,.15),
        transparent 60%
    );
    animation:fog 30s linear infinite;
    z-index: 1;
}

@keyframes fog{
    from{ transform:translate(-20%,-20%); }
    to{ transform:translate(20%,20%); }
}

/* 表示文字 */
.text{
    position:absolute;
    transform: translate(-50%, -50%); /* 中央基準に配置 */
    width: auto;
    max-width: 80vw; /* スマホでも画面幅の80%以内に収める */
    text-align:center;
    word-break: break-word; /* 画面端で自動折り返し */
    font-size:clamp(18px, 5vw, 48px); /* スマホで見やすいフォントサイズ */
    line-height:1.5;
    font-weight:bold;
    text-shadow: 0 0 10px red, 0 0 40px black;
    animation: appear .8s forwards, shake .15s infinite;
    opacity: 1;
    transition: opacity 1.2s ease, filter 1.2s ease;
    z-index: 3;
}

/* 消滅時のフェードアウト */
.text.fade-out {
    opacity: 0;
    filter: blur(10px);
}

@keyframes appear{
    0%{
        opacity:0;
        filter:blur(20px);
        transform: translate(-50%,-50%) scale(1.4);
    }
    100%{
        opacity:1;
        filter:blur(0);
        transform: translate(-50%,-50%) scale(1);
    }
}

@keyframes shake{
    0%{ margin-left:0; }
    50%{ margin-left:3px; }
    100%{ margin-left:-3px; }
}

/* 画面の暗い部分 */
.vignette{
    position:absolute;
    inset:0;
    pointer-events:none;
    box-shadow: inset 0 0 200px black;
    z-index: 4;
}
</style>
</head>

<body>

<div class="fog"></div>
<div class="vignette"></div>

<script>
const words=[
    // 元のテキスト
    "人は愚かだ", "人は争う", "人は裏切る", "人は嘘をつく", "人は奪う",
    "人は支配する", "人は嫉妬する", "人は憎む", "人は傷つける", "人は忘れる",
    "人は自分を守るために他者を傷つける", "人は過ちを繰り返す", "欲望は終わらない",
    "笑顔の裏に隠された闇", "優しさは時に偽りになる", "正義は人によって変わる",
    "善人も悪人になる", "愛は時に狂気になる",
    "死から逃げられない", "終わりは必ず来る", "最後の瞬間", "消える意識",
    "失われる記憶", "存在が消えていく恐怖", "永遠の静寂",
    "死後に何があるのか", "暗闇の先には何がある", "目を閉じた後の世界",
    "誰にも届かない最後の声", "忘れ去られる名前",
    "死は恐怖か", "死は救いか", "生きる意味とは何か",
    "存在する理由とは何か", "最後に残るものは何か",
    "それでも人は愛する", "それでも人は生きる", "失うから大切にする", "終わりがあるから輝く",

    // 追加テキスト（人）
    "人は愚かだ", "人は争う", "人は面白い", "人は裏切る",
    "人は自分勝手だ", "人は愛する", "人は欲深い", "人は学ぶ",
    "人は脆い", "人は変わる",

    // 追加テキスト（犬）
    "犬は忠実だ", "犬は従順だ", "犬は賢い", "犬は遊ぶ",
    "犬は愛情深い", "犬は寂しがりだ", "犬は勇敢だ", "犬は騒がしい",
    "犬は人懐っこい", "犬は自由だ",

    // 追加テキスト（猫）
    "猫は気まぐれだ", "猫は自由だ", "猫は気高い", "猫は狡猾だ",
    "猫は臆病だ", "猫は好奇心旺盛だ", "猫は甘える", "猫は距離を置く",
    "猫は美しい", "猫は謎めいている"
];

function addText(){
    const div = document.createElement("div");
    div.className = "text";
    div.textContent = words[Math.floor(Math.random() * words.length)];

    // スマホでも画面内に収まる配置（30%〜70%の範囲）
    div.style.left = (Math.random() * 40 + 30) + "vw";
    div.style.top = (Math.random() * 40 + 30) + "dvh";

    // 文字色（赤・白・ごく稀に濃い赤）
    const colorRand = Math.random();
    if (colorRand > 0.6) {
        div.style.color = "#ff2222";
    } else if (colorRand > 0.1) {
        div.style.color = "#ffffff";
    } else {
        div.style.color = "#880000";
    }

    document.body.appendChild(div);

    // 古い文字を滑らかにフェードアウトして削除
    const texts = document.querySelectorAll(".text:not(.fade-out)");
    if(texts.length > 20){
        const oldText = texts[0];
        oldText.classList.add("fade-out");
        setTimeout(() => {
            oldText.remove();
        }, 1200);
    }
}

function loop(){
    addText();
    // 0.8秒〜2.5秒の間隔でランダム表示
    setTimeout(loop, Math.random() * 1700 + 800);
}

loop();
</script>

</body>
</html>
