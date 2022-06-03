// $(document).ready(function () {
//   $("#userInput").on("submit", function (event) {
//     event.preventDefault();
    
//     const howManyLet = $('input:radio[name=howManyLet]:checked').val();
//     const favLetter = $('input:radio[name=favLetter]:checked').val();
//     const favThing = $('input:radio[name=favThing]:checked').val();
//     const favMotion = $('input:radio[name=favMotion]:checked').val();
//     const likeRed = $('input:radio[name=likeRed]:checked').val();
//     const fearWorms = $('input:radio[name=fearWorms]:checked').val();

    let score = 0;
    let total = 6;
    let point = 1;
    let highest = total * point;

    function init(Go){
      userInput.howManyLet('two');
      userInput.favLetter('g');
      userInput.favThing('monopoly');
      userInput.favMotion('move');
    }

    function init(Ruby){
      userInput.howManyLet('four');
      userInput.favLetter('r');
      userInput.favThing('jewelry');
      userInput.likeRed('yes');
    }

    function init(Python){
      userInput.howManyLet('six');
      userInput.favLetter('p');
      userInput.favThing('reptiles');
      userInput.favMotion('no');
    }

    $(document).ready(function (event) {
      event.preventDefault();

      function process(userInput) {
        if(q == "Go"){
          let submitted = $('input:radio[name=howManyLet]:checked').val();
          if (submitted == "")
        }
      }

    

    let result;

      
      



    // if (howManyLet === 'two') {
    //   result = $('#go').show();
    // }
    // if (likeRed === 'yes') {
    //   result = $('#ruby').show();
    // }
    // if (favThing === 'reptiles') {
    //   result = $('#python').show();
    // }
    // else  {
    //   result = $('#sorry').show();
    // }


    
  })
});
