function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  // turns the String into a String array and know when to seperate the string using regex
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

// this fucntion is to intake a big string and return the most reoccuring word 
function mostFrequentWord(text) {
  // turns text into an array of Strings and sorts them alphabetically 
  let words = getTokens(text);
  // an empty array to be populated with the number of times a word is used 
  let wordFrequencies = {};
  // a for loop to cycle through words 
  for (let i = 0; i <= words.length; i++) {
    // returns true if the value of words[i] is already in wordFrequencies
    if (words[i] in wordFrequencies) {
      // since the value is there, it adds to the count of a word
      wordFrequencies[words[i]]++;
    } else {
      // the value of word[i] hasnt been used yet so it adds to the array and it starts at 1
      wordFrequencies[words[i]] = 1;
    }
  }
  // sets the maxKey to the value of the first element in the array of WordFrequencies
  let currentMaxKey = Object.keys(wordFrequencies)[0];
  // grabs the count of the value that the maxKey is set to
  let currentMaxCount = wordFrequencies[currentMaxKey];
  // a for loop to check for the greatest number of times a word is used
  for (let word in wordFrequencies) {
    // returns true if the number in the array is greater than the current max number
    if (wordFrequencies[word] > currentMaxCount) {
      // sets the new index to MaxKey
      currentMaxKey = word;
      // sets the counter number to the new element or max number
      currentMaxCount = wordFrequencies[word]; 
    }
  }
  // returns the element that was most reoccuring in the string
  return currentMaxKey;
}
