// function skyconicon(s) {
//   if (s === '0' || s === '2') {
//     return 'A';
//   }
//   if (s === '1' || s === '3') {
//     return 'B';
//   }
//   if (s === '4') {
//     return 'G';
//   }
//   if (s === '5' || s === '7'){
//     return 'C'
//   }
//   if (s === '6' || s === '8') {
//     return 'D';
//   }
//   if (s === '9') {
//     return 'O';
//   }
//   if (s === '10') {
//     return 'P';
//   }
//   if (s === '11') {
//     return 'T';
//   }
//   if (s === '12') {
//     return 'V';
//   }
//   if (s === '13') {
//     return 'Q';
//   }
//   if (s === '14' || s === '15') {
//     return 'R';
//   }
//   if(s === '16' || s === '17' || s === '18'){
//     return 'S'
//   }
//   if(s === '19' || s === '20' || s === '21'){
//     return 'X'
//   }
//   if(s === '22' || s === '23' || s === '24' || s === '25'){
//     return 'W'
//   }
//   if (s === '26' || s === '27' || s === '28' || s === '29') {
//     return 'c'
//   }
//   if (s === '30' || s === '31') {
//     return 'N'
//   }
//   if (s === '32') {
//     return 'a'
//   }
//   if (s === '33') {
//     return 'b'
//   }
//   if (s === '34' || s === '35') {
//     return 'V'
//   }
//   if (s === '36') {
//     return 'e'
//   }
//   if (s === '37') {
//     return 'o'
//   }
//   if (s === '38') {
//     return 'h'
//   }
//   if (s === '99') {
//     return 'p'
//   }
// }

function skyconicon(s) {
  if (s === '0' || s === '2') {
    return 'icon-0-2';
  }
  if (s === '4' || s === '6' || s === '8' || s === '9') {
    return 'icon-4-6-8-9';
  }
  if (s === '5' || s === '7') {
    return 'icon-5-7';
  }
  if (s === '10' || s === '14') {
    return 'icon-10-14'
  }
  if (s === '13') {
    return 'icon-13';
  }
  if (s === '15') {
    return 'icon-15';
  }
  if (s === '11') {
    return 'icon-11';
  }
  if (s === '12') {
    return 'icon-12';
  }
  if (s === '12') {
    return 'V';
  }
  if (s === '13') {
    return 'Q';
  }
  if (s === '14' || s === '15') {
    return 'R';
  }
  if (s === '16' || s === '17' || s === '18') {
    return 'S'
  }
  if (s === '19' || s === '20' || s === '21') {
    return 'X'
  }
  if (s === '22' || s === '23' || s === '24' || s === '25') {
    return 'W'
  }
  if (s === '26' || s === '27' || s === '28' || s === '29') {
    return 'c'
  }
  if (s === '30' || s === '31') {
    return 'N'
  }
  if (s === '32') {
    return 'a'
  }
  if (s === '33') {
    return 'b'
  }
  if (s === '34' || s === '35') {
    return 'V'
  }
  if (s === '36') {
    return 'e'
  }
  if (s === '37') {
    return 'o'
  }
  if (s === '38') {
    return 'h'
  }
  if (s === '99') {
    return 'p'
  }
}

module.exports = {
  skyconicon: skyconicon
}
