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

window.addEventListener('load', get);
    // ページが読み込まれたときに実行する初期化処理
 function go() {

        // 画像がタップされたときの処理
        function removeImage() {
            var imageContainer = document.getElementById('imageContainer');
            imageContainer.style.opacity = '0'; // 透明度を変更してフェードアウトさせるなどのアニメーションを適用することもできる
            setTimeout(function() {
                imageContainer.remove(); // 要素を削除する
            }, 500); // 0.5秒後に要素を削除する、適切な時間を設定
        }

        // 画像を表示する関数
        function showImage(imageUrl) {
            var imageContainer = document.createElement('div'); // 新しい <div> 要素を作成
            imageContainer.id = 'imageContainer'; // id を設定
            imageContainer.classList.add('full-screen-image'); // クラスを設定
            imageContainer.style.backgroundImage = 'url(' + imageUrl + ')'; // 背景画像を設定
            document.body.appendChild(imageContainer); // body に追加

            // タップ（クリック）イベントを設定する
            imageContainer.addEventListener('click', function() {
                removeImage();
            });
            
            imageContainer.style.display = 'block'; // 画像を表示する
        }

        // 画像を表示する（例としてURLを指定）
        var imageUrl = '../images/2.jpg'; // 画像のパスを指定する
        showImage(imageUrl);
 };

function get() { 
	go();
  // 音楽プレーヤーを作成し再生する関数
  function createAndPlayAudio() {
    // 音楽プレーヤーを作成
    const audioElement = document.createElement('audio');
    audioElement.id = 'musicplayer';
    audioElement.loop = true; // ループ再生
	  
    var volumePercentage = 2; // 詳細の音量を設定したい場合
    // パーセンテージを0から1の範囲に変換して音量を設定
    audioElement.volume = volumePercentage / 100;//音量設定
　　console.log('現在の音量:', audioElement.volume);//音量確認

    // 音楽ファイルの設定
    const sourceElement = document.createElement('source');
    sourceElement.src = 'https://akaina0112.github.io/Test/bgm.mp3';
    sourceElement.type = 'audio/mpeg';

    audioElement.appendChild(sourceElement); // <audio>要素に音楽ファイルを追加
    document.body.appendChild(audioElement); // <body>要素に<audio>要素を追加

    // 音楽情報を表示する要素を作成
    const musicInfo = document.createElement('div');
    musicInfo.classList.add('music-info');
    musicInfo.textContent = '音楽名: Nightcore - Vicetone - Nevada'; // 音楽名を設定
    document.body.appendChild(musicInfo); // <body>要素に<div>要素を追加

    // 音楽情報の表示を通知風に
    setTimeout(() => {
      musicInfo.classList.add('show'); // 'show'クラスを追加して表示
      console.log('音楽名: Nightcore - Vicetone - Nevada');
    }, 50); // 少し遅延させて表示（ミリ秒単位）

    // 5秒後に音楽情報を消す
    setTimeout(() => {
      musicInfo.classList.remove('show'); // 'show'クラスを削除して非表示
    }, 4100); // 5秒後に消えるように設定（ミリ秒単位）


    // 音楽を再生する
    audioElement.play().then(() => {
      console.log('音楽が再生されました');
    }).catch(error => {
      console.log('音楽の再生に失敗しました:', error);
    });

    // イベントリスナーを削除（再生が開始されたら不要）
    document.body.removeEventListener('click', createAndPlayAudio);
  }

  // ページをクリックしたときに createAndPlayAudio 関数を実行
  document.body.addEventListener('click', createAndPlayAudio);

  // アニメーションを切り替え関数
  function switchSlide() {
    slide1.style.opacity = '1'; // 初期状態でslide1を表示

    slide1.addEventListener('animationend', function() {
      // slide1のアニメーションが終了したら、次の画像（slide2）へ切り替える
      slide1.style.opacity = '0'; // 現在の画像をフェードアウトさせる
      slide2.style.opacity = '1'; // 次の画像をフェードインさせる
      slide1.style.animation = 'none'; // アニメーションをリセット
      slide2.style.animation = 'slide2 5s linear forwards'; // slide2のアニメーションを開始
    });

    slide2.addEventListener('animationend', function() {
      // slide2のアニメーションが終了したら、次の画像（slide1）へ切り替える
      slide2.style.opacity = '0'; // 現在の画像をフェードアウトさせる
      slide1.style.opacity = '1'; // 次の画像をフェードインさせる
      slide2.style.animation = 'none'; // アニメーションをリセット
      slide1.style.animation = 'slide1 5s linear forwards'; // slide1のアニメーションを開始
    });

    // 初期アニメーションを開始
    slide1.style.animation = 'slide1 5s linear forwards';
  }

  // アニメーションを切り替え関数を要素作成後に実行
 // switchSlide(); 
switchSlide2();

};

   function switchSlide2() {
            // CSSを動的に生成す
            const style = document.createElement('style');
            style.textContent = `
	    .full-screen-image {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                display: none; /* 最初は非表示 */
            }
                #notification {
                    display: none;
                    position: fixed;
                    top: -100px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #444444;
                    color: white;
                    padding: 20px 30px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: bold;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    z-index: 9999;
                    transition: top 0.3s ease;
                }

                #notification span {
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
                }

                #notification button {
                    color: #e6e6fa;
                    margin-top: 10px;
                    padding: 10px 20px;
                    background-color: transparent;
                    background-image: url('https://github.com/akaina0112/Test/blob/main/cat.gif');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                    animation: catWalk 5s linear infinite;
                }

                #notification button:hover {
                    opacity: 0.8;
                }

                @keyframes catWalk {
                    0% { background-position: left top; }
                    100% { background-position: right top; }
                }
            `;
            document.head.appendChild(style);

            // HTMLを動的に生成する
            const notification = document.createElement('div');
            notification.id = 'notification';
            notification.innerHTML = `
                <span id="notification-message"></span><br>
                <span id="notification-message2"></span><br>
                <button id="notification-close">OK</button>
            `;
            document.body.appendChild(notification);

            // JavaScriptを動的に生成する
            // キーボードショートカットの無効化
            document.addEventListener('keydown', function(event) {
                if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'p')) {
                    event.preventDefault();
                    showNotification('このショートカットは無効化されています。');
                }
            });

            // 右クリックの無効化
            document.addEventListener('contextmenu', function(event) {
                event.preventDefault();
                showRightClickNotification('右クリックは無効化されています。');
            });

            // 通知を表示する関数（ショートカット無効化用）
            function showNotification(message) {
                const notification = document.getElementById('notification');
                const notificationMessage = notification.querySelector('#notification-message');
                const notificationMessage2 = notification.querySelector('#notification-message2');
                notificationMessage.textContent = message;
                notificationMessage2.textContent = 'This shortcut has been disabled.';
                notification.style.display = 'block';
                notification.style.top = '20px';
            }

            // 通知を表示する関数（右クリック無効化用）
            function showRightClickNotification(message) {
                const notification = document.getElementById('notification');
                const notificationMessage = notification.querySelector('#notification-message');
                const notificationMessage2 = notification.querySelector('#notification-message2');
                notificationMessage.textContent = message;
                notificationMessage2.textContent = 'Right click is disabled.';
                notification.style.display = 'block';
                notification.style.top = '20px';
            }

            // OKボタンをクリックしたときの処理
            document.getElementById('notification-close').addEventListener('click', function() {
                const notification = document.getElementById('notification');
                notification.style.top = '-100px';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 510);
            });
   }


function classList(e) {
    if (e.classList) return e.classList;   // Return e.classList if it exists
    else return new CSSClassList(e);       // Otherwise try to fake it
}

// CSSClassList is a JavaScript class that simulates DOMTokenList
function CSSClassList(e) { this.e = e; }

// Return true if e.className contains the class c, false otherwise
CSSClassList.prototype.contains = function(c) {
    // Check that c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1) 
        throw new Error("Invalid class name: '" + c + "'");
    // Check common cases first
    var classes = this.e.className;
    if (!classes) return false;       // e has no classes at all
    if (classes === c) return true;   // e has one class that matches exactly
    
    // Otherwise, use a RegExp to search for c as a word by itself
    // \b in a regular expression requires a match at a word boundary.
    return classes.search("\\b" + c + "\\b") != -1;
};

// Add c to the e.className if it is not already present
CSSClassList.prototype.add = function(c) {
    if (this.contains(c)) return;            // Do nothing if already present
    var classes = this.e.className;
    if (classes && classes[classes.length-1] != " ")
        c = " " + c;                         // Add a space if we need one
    this.e.className += c;                   // Add c to the className
};

// Remove all occurrences of c from e.className
CSSClassList.prototype.remove = function(c) {
    // Make sure c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1) 
        throw new Error("Invalid class name: '" + c + "'");
    // Remove all occurances of c as a word, plus any trailing space
    var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
};

// Add c to e.className if it is not already present and return true.
// Otherwise, remove all occurrences of c from e.className and return false.
CSSClassList.prototype.toggle = function(c) {
    if (this.contains(c)) {  // If e.className contains c
        this.remove(c);      // then remove it.
        return false;
    }
    else {                   // Otherwise:
        this.add(c);         // add it.
        return true;
    }
};

// Return e.className itself
CSSClassList.prototype.toString = function() { return this.e.className; };

// Return of the names in e.className
CSSClassList.prototype.toArray = function() {
    return this.e.className.match(/\b\w+\b/g) || [];
};
function do_onoff(hdr, item)
{
	var e = document.getElementById(hdr);
	var e2 = document.getElementById(item);
	if (e2.style.display == 'none') {
		e2.style.display = '';
		classList(e).remove('close');
		classList(e).add('open');
	} else {
		e2.style.display = 'none';
		classList(e).remove('open');
		classList(e).add('close');
	}
}
function open_close(hdr, item)
{
	var e = document.getElementById(hdr);
	var e2 = document.getElementById(item);
	e.addEventListener("click", function() { do_onoff(hdr, item); }, false);

	classList(e).remove('open');
	classList(e).add('close');
	if (classList(e).contains('open')) {
//		e.style.display = '';
		e2.style.display = '';
	}
	if (classList(e).contains('close')) {
//		e.style.display = '';
		e2.style.display = 'none';
	}

}
function OCisSmartPhone()
{
	return (
		(navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || 
		navigator.userAgent.indexOf('iPod') > 0 || 
		navigator.userAgent.indexOf('Android') > 0);
}
function OCdisplayWidth()
{
	return window.parent.screen.width;
}
function OCwindowWidth()
{
	if (window.screen.width < window.innerWidth) {
		return window.screen.width;
	}
	return window.innerWidth;
}

