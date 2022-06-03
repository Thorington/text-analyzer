$(document).ready(function () {
  $('userInput').submit(function (event) {
    event.preventDefault();
    const howManyLet = $('input:radio[name=howManyLet]:checked').val();
    const favLetter = $('input:radio[name=favLetter]:checked').val();
    const favThing = $('input:radio[name=favThing]:checked').val();
    const favMotion = $('input:radio[name=favMotion]:checked').val();
    const likeRed = $('input:radio[name=likeRed]:checked').val();
    const fearWorms = $('input:radio[name=fearWorms]:checked').val();

    if (howManyLet === two) {
      $('#go').show();
    }

    if (howManyLet === four) {
      $('#ruby').show();
    }

    if (howManyLet === six) {
      $('#python').show();
    }
  })
});
