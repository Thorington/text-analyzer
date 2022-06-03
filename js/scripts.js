$(document).ready(function () {
  $('userInput').submit(function (event) {
    event.preventDefault();
    const howManyLet = $('input:radio[name=howManyLet]:checked').val();
    const favLetter = $('input:radio[name=favLetter]:checked').val();
    const favThing = $('input:radio[name=favThing]:checked').val();
    const favMotion = $('input:radio[name=favMotion]:checked').val();
    const likeRed = $('input:radio[name=likeRed]:checked').val();
    const fearWorms = $('input:radio[name=fearWorms]:checked').val();

    let result = howManyLet + favLetter + favThing + favMotion + likeRed + fearWorms;

   

      $("#result").text(language);
      $("#language").show();
  })
});
