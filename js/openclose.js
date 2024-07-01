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


function get() {
            // 背景用のオーバーレイ要素を生成
            var overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.style.display = 'none'; // 最初は非表示
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // 半透明の黒背景
            overlay.style.zIndex = '1';
            document.body.appendChild(overlay);

            // テキストを表示するコンテナ要素を生成
            var textContainer = document.createElement('div');
            textContainer.id = 'text-container';
            textContainer.style.display = 'none'; // 最初は非表示
            textContainer.style.position = 'fixed';
            textContainer.style.top = '50%';
            textContainer.style.left = '50%';
            textContainer.style.transform = 'translate(-50%, -50%)';
            textContainer.style.textAlign = 'center';
            textContainer.style.color = 'white';
            textContainer.style.zIndex = '2';

            // テキストコンテンツを生成
            var heading = document.createElement('h2');
            heading.textContent = 'akaina site';
            heading.classList.add('glowing-text'); // 光るテキストのクラスを追加
            textContainer.appendChild(heading);

            var paragraph = document.createElement('p');
            paragraph.textContent = 'Play BGM.';
            paragraph.classList.add('glowing-text'); // 光るテキストのクラスを追加
            textContainer.appendChild(paragraph);

            // OKボタンを生成してテキストコンテナに追加
            var okButton = document.createElement('button');
            okButton.textContent = 'OK';
            okButton.style.display = 'flex';
            okButton.style.justifyContent = 'center';
            okButton.style.alignItems = 'center';
            okButton.style.width = '250px';
            okButton.style.margin = '0 auto';
            okButton.style.padding = '.9em 2em';
            okButton.style.border = 'none';
            okButton.style.borderRadius = '25px';
            okButton.style.backgroundColor = '#2589d0';
            okButton.style.color = '#fff';
            okButton.style.fontWeight = '600';
            okButton.style.fontSize = '1em';
            okButton.style.cursor = 'pointer';
            okButton.style.transition = 'background-color 0.3s, transform 0.3s';
            okButton.classList.add('button'); // ボタンにクラスを追加
            okButton.onclick = function() {
                // OKボタンがクリックされたときの処理
                closeOverlay();
	        createAndPlayAudio();
            };
            textContainer.appendChild(okButton);

            document.body.appendChild(textContainer);

        /*    // スタイル要素を生成してボタンのホバー時のアニメーションを設定する
            var style = document.createElement('style');
            style.textContent = `

            `;
            document.head.appendChild(style);*/

            // ページ読み込み後に背景を暗くしてテキストを表示する関数
            function openModal() {
                overlay.style.display = 'block';
                textContainer.style.display = 'block';
            }

            // モーダルを閉じる関数
            function closeOverlay() {
                overlay.style.display = 'none';
                textContainer.style.display = 'none';
            }

            // openModal関数を実行する例として、ページ読み込み時に実行する
            openModal();
  


  // JavaScriptでCSSスタイルを適用する場合
  const style = document.createElement('style');
  style.textContent = `
          /* ボタンのスタイル */
        .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 250px;
            margin: 0 auto;
            padding: .9em 2em;
            border: none;
            border-radius: 25px;
            background-color: #2589d0;
            color: #fff;
            font-weight: 600;
            font-size: 1em;
            cursor: pointer; /* ホバー時のカーソルをポインターにする */
            transition: background-color 0.3s, transform 0.3s; /* ホバー時のトランジションを設定 */
            background-color: #1c6ea4; /* ホバー時の背景色 */
            animation: anime-button-38 .3s linear infinite; /* ホバー時のアニメーションを適用 */
        }

        .button:hover {
            background-color: #1c6ea4; /* ホバー時の背景色 */
            animation: anime-button-38 .3s linear infinite; /* ホバー時のアニメーションを適用 */
        }

        @keyframes anime-button-38 {
            20% {
                transform: translate(-2px, 2px);
            }
            40% {
                transform: translate(-2px, -2px);
            }
            60% {
                transform: translate(2px, 2px);
            }
            80% {
                transform: translate(2px, -2px);
            }
        }

        /* 光るテキストのスタイル */
        .glowing-text {
            color: #fff;
            text-shadow: 0 0 10px #00f, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
        }
  *{text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);}


    .music-info {
      display: none; /* 初期状態では非表示 */
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.7); /* 背景色を濃くしてコントラストを高める */
      color: white;
      padding: 20px 30px; /* パディングを増やして読みやすくする */
      border-radius: 8px; /* 角を丸くする */
      font-size: 16px; /* フォントサイズを大きくする */
      font-weight: bold; /* フォントウェイトを太くする */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* シャドウを追加して視認性を高める */
      text-align: center; /* テキストを中央揃え */
      z-index: 9999; /* 最前面に表示 */
      transition: top 0.3s ease, opacity 0.3s ease; /* トランジション効果を追加 */
      /* テキストを光らせる効果 */
  　　text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* 白色のぼかしを追加して光らせる */
    }

    /* 表示用のクラス */
    .show {
      display: block;
      top: 20px;
      opacity: 1;
    }#info{
	display: none;
}

/*モーダルの横幅を変更したい場合*/
.modaal-container{
    max-width: 600px;
}

/*モーダルのボタンの色を変更したい場合*/
.modaal-close:after, 
.modaal-close:before{
	background:#ccc;	
}

.modaal-close:focus:after,
.modaal-close:focus:before,
.modaal-close:hover:after,
.modaal-close:hover:before{
	background:#666;
}
  `;

  // head要素にスタイルを追加する
  document.head.appendChild(style);

  // 音楽プレーヤーを作成し再生する関数
  function createAndPlayAudio() {
    // 音楽プレーヤーを作成
    const audioElement = document.createElement('audio');
    audioElement.id = 'musicplayer';
    audioElement.loop = true; // ループ再生
    audioElement.volume = 0.2; // 音量設定

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
      console.log('音楽名を表示');
    }, 50); // 少し遅延させて表示（ミリ秒単位）

    // 5秒後に音楽情報を消す
    setTimeout(() => {
      musicInfo.classList.remove('show'); // 'show'クラスを削除して非表示
      console.log('音楽名を消去');
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
  //document.body.addEventListener('click', createAndPlayAudio);

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
