function commonLetters(str1, str2) {
  const commonChar = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        commonChar.push(str1[i]);
      }
    }
  }
  return "Common letters: " + commonChar.join(", ");
}

     
