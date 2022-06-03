$(document).ready(function () {
  $('userInput').submit(function (event) {
    event.preventDefault();
    const howManyLet = $('input:radio[name=howManyLet]:checked').val();
    const favLetter = $('input:radio[name=favLetter]:checked').val();
    const favThing = $('input:radio[name=favThing]:checked').val();
    const favMotion = $('input:radio[name=favMotion]:checked').val();
    const likeRed = $('input:radio[name=likeRed]:checked').val();
    const fearWorms = $('input:radio[name=fearWorms]:checked').val();

    if (age >= 21) {
      $('#go').show();
    }

    if (age >= 21) {
      $('#ruby').show();
    }

    if (age >= 21) {
      $('#python').show();
    }
  }
});
