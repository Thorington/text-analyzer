// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
}
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

// function removeBadWords(words,text) {
//   const noBadWords = text.split(" ");
//   let i = 0;
//   noBadWords.forEach(function(element) {
//     if (element.toLowerCase().includes(words.toLowerCase())) {
//       noBadWords.splice(i, 1);
//     } else {i++;
//   } 
//   });
//   return noBadWords;
// }

function omitOffensiveWords(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let goodtext = []
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!offensiveWords.includes(element.toLowerCase())) {
      goodtext.push(element);
    }
  });

  return goodtext;
}