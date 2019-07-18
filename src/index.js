import $ from 'jquery'

$(document).ready(() => {
  getTopWord()
})

function getTopWord() {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => response.json())
  .then(word_info => {
    let word = Object.keys(word_info["word"])

    $("#top-word-here").append(word[0])
  })
}
