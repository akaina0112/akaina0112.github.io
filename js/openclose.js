window.onload = function() {
    generate();
    generateCopy1();
};

function generate() {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://github.com/akaina0112/Test/blob/main/copy2.js'; // copy2.js の GitHub パスを指定

    document.head.appendChild(scriptElement);
}

function generateCopy1() {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://github.com/akaina0112/Test/blob/main/copy.js'; // copy.js の GitHub パスを指定

    document.head.appendChild(scriptElement);
}
