function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function temperatureColor(t) {
  let e = parseInt(t);
  if (e <= 0) {
    return 'color-0';
  } else if (e > 0 && e <= 10) {
    return 'color-1';
  } else if (e > 10 && e <= 18) {
    return 'color-2';
  } else {
    return 'color-3'
  }
}

function skyconColor(t) {
  let e = parseInt(t);
  if (e==0 || e==2 || e==5 || e==7) {
    return 'color-2';
  } else if (e == 38) {
    return 'color-3';
  } else if (e >= 10 && e < 18) {
    return 'color-1';
  } else if(e >= 19 && e < 25) {
    return 'color-0'
  } else {
    return 'color-4'
  }
}

function aqiStr(e) {
  if(e <= 50) {
    return '优';
  } else if (e > 50 && e <= 100) {
    return '良';
  } else if (e > 100 && e <= 150) {
    return '轻度污染';
  } else if (e > 150 && e <= 200) {
    return '中度污染';
  } else if (e > 200 && e <= 300) {
    return '重度污染';
  } else if (e > 500) {
    return '有毒';
  }
}

function aqiClass(e) {
  if(e <= 50) {
    return 'col-aqi-1';
  } else if (e > 50 && e <= 100) {
    return 'col-aqi-2';
  } else if (e > 100 && e <= 150) {
    return 'col-aqi-3';
  } else if (e > 150 && e <= 200) {
    return 'col-aqi-4';
  } else if (e > 200) {
    return 'col-aqi-5';
  }
}


module.exports = {
  skyconColor: skyconColor,
  temperatureColor: temperatureColor,
  aqiStr: aqiStr,
  aqiClass: aqiClass
}
