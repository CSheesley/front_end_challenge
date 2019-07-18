import $ from 'jquery'

$(document).ready(() => {
  getTopWord()
})

function getTopWord() {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => response.json())
  .then(word_info => {
    let word = Object.keys(word_info["word"])
    let count = Object.values(word_info["word"])

    $("#top-word").append(word[0])
    $("#top-word-count").append(count[0])
  })
}
