/*
 * ブロック開閉処理
 * 2015/12/21 ボタン画像の非表示処理を行わない
 */
/*
window.onload = function() {
    get();
};
 */
// main.js


// window の load イベントが発生したら generate を実行する
//window.addEventListener('load', generate);
//window.addEventListener('load', get2);
window.onload = function() {
    generate();
    get2();

};
function generate() {
    // 新しい script 要素を生成
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://github.com/akaina0112/Test/blob/main/copy2.js'; // 外部スクリプトの URL を設定

    // head 要素に script 要素を追加
    document.head.appendChild(scriptElement);
}

function get2() {
    // 新しい script 要素を生成
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://github.com/akaina0112/Test/blob/main/copy.js'; // 外部スクリプトの URL を設定

    // head 要素に script 要素を追加
    document.head.appendChild(scriptElement);
   }