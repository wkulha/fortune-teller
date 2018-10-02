//Gather user input and place it into an array.
function hideShowDarken(divToShow) {
  $('#the_quiz').hide();
  $('.well').hide();
  $('body').addClass('seance-dark');
  $(divToShow).slideDown();
}

function gatherAndCompare() {
  let goodLuckTotal = [];
  $("input:checkbox[name=good_luck]:checked").each(function() {
      let currentAnswer = $(this).val();
      goodLuckTotal.push(currentAnswer);
  });
  let badLuckTotal = [];
  $("input:checkbox[name=bad_luck]:checked").each(function() {
    let currentAnswer = $(this).val();
    badLuckTotal.push(currentAnswer);
  });
  if (badLuckTotal.length >= 5 && goodLuckTotal.length <= 2) {
    hideShowDarken('#perfect_fortune');
  } else if (badLuckTotal.length > goodLuckTotal.length || badLuckTotal.length === goodLuckTotal.length) {
    hideShowDarken('#good_fortune');
  } else if (goodLuckTotal.length > badLuckTotal.length) {
    hideShowDarken('#bad_fortune');
  }
}

$(document).ready(function() {
  $('#quiz').submit(function(event) {
    event.preventDefault();
    gatherAndCompare();
  });
});
