// prompt 取得溫度與單位
var inputTemp = prompt('請輸入溫度數值：');
var unit = prompt('請輸入單位（C 或 F）：').toUpperCase();

var temp = parseFloat(inputTemp);
var result = '';

function cToF(c) {
  return c * 9 / 5 + 32;
}

function fToC(f) {
  return (f - 32) * 5 / 9;
}

if (isNaN(temp) || (unit !== 'C' && unit !== 'F')) {
  result = '輸入錯誤，請輸入數字和正確單位 C 或 F';
} else if (unit === 'C') {
  var f = cToF(temp);
  result = temp + ' °C = ' + f.toFixed(2) + ' °F';
} else {
  var c = fToC(temp);
  result = temp + ' °F = ' + c.toFixed(2) + ' °C';
}

// 顯示結果
alert(result);
document.getElementById('result').textContent = result;
