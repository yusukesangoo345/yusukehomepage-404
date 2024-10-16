const text = "迷ってしまったようだね？"; // タイプライター式で表示するテキスト
const typewriterText = document.getElementById("typewriter-text");

let index = 0; // 現在の文字インデックス

function type() {
    if (index < text.length) {
        typewriterText.textContent += text.charAt(index); // 1文字追加
        index++;
        setTimeout(type, 100); // 次の文字を追加するまでの待機時間
    }
}

// ページが読み込まれるとタイプライターエフェクトを開始
window.onload = type;
