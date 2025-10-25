// example6_script.js
// 將使用者輸入的逗號分隔數字字串，轉成陣列並計算總和、平均、最大值、最小值

var raw = prompt('請輸入多個數字（以逗號,分隔）：');
var result = '';

if (!raw) {
  result = '未輸入資料';
} else {
  // 先用 split() 切成陣列
  var parts = raw.split(',');
  var nums = [];

  // 將每個項目轉成數字
  for (var i = 0; i < parts.length; i++) {
    var n = parseFloat(parts[i]);
    if (!isNaN(n)) {
      nums.push(n);
    }
  }

  // 檢查是否有有效數字
  if (nums.length === 0) {
    result = '沒有可用的數字';
  } else {
    // 計算總和
    var sum = 0;
    for (var j = 0; j < nums.length; j++) {
      sum += nums[j];
    }

    // 計算平均、最大、最小
    var avg = sum / nums.length;
    var max = Math.max(...nums);
    var min = Math.min(...nums);

    // 組成輸出字串
    result = '有效數字：' + nums.join(', ') + '\n'
           + '總和：' + sum + '\n'
           + '平均：' + avg.toFixed(2) + '\n'
           + '最大值：' + max + '\n'
           + '最小值：' + min;
  }
}

// 顯示結果
document.getElementById('result').textContent = result;
