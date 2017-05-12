function temperatureColor(t) {
  let e = parseInt(t);
  if (e <= 0) {
    return 'color-0';
  } else if (e > 0 && e <= 10) {
    return 'color-1';
  } else if (e > 10 && e <= 24) {
    return 'color-2';
  } else {
    return 'color-3';
  }
}

function skyconColor(s) {
  if (s === 'CLEAR_DAY') {
    return 'color-clear';
  } else if (s === 'RAIN' || s === 'SLEET') {
    return 'color-rain';
  } else {
    return 'color-others';
  }
}

function skyconText(s) {
  if (s === 'CLEAR_DAY') {
    return '晴';
  } else if (s === 'CLEAR_NIGHT') {
    return '晴夜';
  } else if (s === 'PARTLY_CLOUDY_DAY' || s === 'PARTLY_CLOUDY_NIGHT') {
    return '多云';
  } else if (s === 'CLOUDY') {
    return '阴';
  } else if (s === 'RAIN') {
    return '雨';
  } else if (s === 'SNOW') {
    return '雪';
  } else if (s === 'WIND') {
    return '风';
  } else if (s === 'FOG') {
    return '雾';
  } else if (s === 'HAZE') {
    return '霾';
  } else if (s === 'SLEET') {
    return '冻雨';
  } else {
    return '没见过的天气'
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
  skyconText: skyconText,
  skyconColor: skyconColor,
  temperatureColor: temperatureColor,
  aqiStr: aqiStr,
  aqiClass: aqiClass
}
