const rot13 = message =>
  message
    .split('')
    .map((letter) => {
      let code = letter.charCodeAt();
      if (code >= 65 && code <= 90) {
        code = 65 + ((code + (13 - 65)) % 26);
      } else if (code >= 97 && code <= 122) {
        code = 97 + ((code + (13 - 97)) % 26);
      }
      return String.fromCharCode(code);
    }).join('');

export default rot13;
