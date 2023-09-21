export function containsPhrase(text, words) {
  var preparedText = text.toUpperCase()
  return words.some((word) => preparedText.includes(word))
}

export function preparePhrase(phrase) {
  return phrase.split(' ').map((word) => word.trim().toUpperCase()).filter((word) => word.length)
}