
//https://www.twblogs.net/a/5ba2d13b2b71771a4da9d6ec
//https://www.wfublog.com/2020/07/js-string-encryption-decryption-aes.html#section3
var str = ">ref|NP_001263624.1|:1-307 cellular tumor antigen p53 isoform h [Homo sapiens]MDDLMLSPDDIEQWFTEDPGPDEAPRMPEAAPPVAPAPAAPTPAAPAPAPSWPLSSSVPSQKTYQGSYGFRLGFLHSGTAKSVTCTYSPALNKMFCQLAKTCPVQLWVDSTPPPGTRVRAMAIYKQSQHMTEVVRRCPHHERCSDSDGLAPPQHLIRVEGNLRVEYLDDRNTFRHSVVVPYEPPEVGSDCTTIHYNYMCNSSCMGGMNRRPILTIITLEDSSGNLLGRNSFEVRVCACPGRDRRTEEENLRKKGEPHHELPPGSTKRALPNNTSSSPQPKKKPLDGEYFTLQMLLDLRWCYFLINSS"
key = "monday",
  encodeStr = encode(str, key),
  decodeStr = decode(encodeStr, key);

console.log(str);
console.log(key);
console.log(encodeStr);
console.log(decodeStr);


function encode(f, j) { f = btoa(escape(f)); 
  var l = ""; 
  for (var c = 0; c < j.length; c++) { 
    l += j.charCodeAt(c).toString() 
  } 
  var g = Math.floor(l.length / 5); 
  var b = parseInt(l.charAt(g) + l.charAt(g * 2) + l.charAt(g * 3) + l.charAt(g * 4) + l.charAt(g * 5)); 
  var a = Math.ceil(j.length / 2); 
  var h = Math.pow(2, 31) - 1; 
  var d = Math.round(Math.random() * 1000000000) % 100000000; l += d; 
  while (l.length > 10) { 
    l = (parseInt(l.substring(0, 10)) + parseInt(l.substring(10, l.length))).toString() } l = (b * l + a) % h; var e = ""; 
    var k = ""; 
    for (c = 0; c < f.length; c++) { 
      e = parseInt(f.charCodeAt(c) ^ Math.floor((l / h) * 255)); 
      if (e < 16) { 
        k += "0" + e.toString(16) 
      } else { 
        k += e.toString(16) 
      } 
      l = (b * l + a) % h 
    } d = d.toString(16); 
    while (d.length < 8) { 
      d = "0" + d 
    } 
    k += d; 
    return k 
}

function decode(f, j) { 
  var l = ""; 
  for (var c = 0; c < j.length; c++) { 
    l += j.charCodeAt(c).toString() 
  } 
  var g = Math.floor(l.length / 5); 
  var b = parseInt(l.charAt(g) + l.charAt(g * 2) + l.charAt(g * 3) + l.charAt(g * 4) + l.charAt(g * 5)); 
  var a = Math.round(j.length / 2); 
  var h = Math.pow(2, 31) - 1; 
  var d = parseInt(f.substring(f.length - 8, f.length), 16); 
  f = f.substring(0, f.length - 8); 
  l += d; 
  while (l.length > 10) { 
    l = (parseInt(l.substring(0, 10)) + parseInt(l.substring(10, l.length))).toString() 
  } 
  l = (b * l + a) % h; 
  var e = ""; 
  var k = ""; 
  for (c = 0; c < f.length; c += 2) { 
    e = parseInt(parseInt(f.substring(c, c + 2), 16) ^ Math.floor((l / h) * 255)); 
    k += String.fromCharCode(e); 
    l = (b * l + a) % h 
  } 
  return unescape(atob(k));
}

