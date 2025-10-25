// example5_script.js
// 以巢狀 for 產生 1~9 的乘法表（可自訂範圍）

// 讓使用者輸入起始與結束數字
var start = parseInt(prompt('請輸入起始數字（例如 2）：'), 10);
var end = parseInt(prompt('請輸入結束數字（例如 5）：'), 10);

var output = '';

if (isNaN(start) || isNaN(end) || start < 1 || end > 9 || start > end) {
  output = '輸入範圍無效！請輸入 1~9 之間的數字，且起始 ≤ 結束。';
} else {
  // 巢狀 for 迴圈
  for (var i = start; i <= end; i++) {
    for (var j = 1; j <= 9; j++) {
      output += i + 'x' + j + '=' + (i * j) + '\t';
    }
    output += '\n';
  }
}

document.getElementById('result').textContent = output;
