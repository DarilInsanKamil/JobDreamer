export const tandaPemisahTitik = (b) => {
    var _minus = false;
    if (b < 0) _minus = true;
    b = b.toString();
    b = b.replace(".", "");
    b = b.replace("-", "");
    let c = "";
    let panjang = b.length;
    let j = 0;
    for (let i = panjang; i > 0; i--) {
      j = j + 1;
      if (((j % 3) == 1) && (j != 1)) {
        c = b.substr(i - 1, 1) + "." + c;
      } else {
        c = b.substr(i - 1, 1) + c;
      }
    }
    if (_minus) c = "-" + c;
    return c;
  }

  export const splitter = (str) => {
    return str.split('\n')
  }