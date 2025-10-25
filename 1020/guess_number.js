var target = Math.floor(Math.random() * 100) + 1;
var count = 0;
var guess;
var text = '';

// 將重複提示邏輯拆成函式
function getHint(g, t) {
  if (g < t) return '再大一點';
  if (g > t) return '再小一點';
  return '猜中了';
}

while (true) {
  var input = prompt('請猜一個 1~100 的數字：');
  guess = parseInt(input);
  count++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('請輸入 1~100 的整數');
    continue;
  }

  var hint = getHint(guess, target);
  alert(hint);

  if (guess === target) break;
}

text = '恭喜！你猜中了 ' + target + '，共猜了 ' + count + ' 次';
document.getElementById('result').textContent = text;
console.log(text);
