// Front-End, User Interface, User Logic
$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    let result = makeQuote(gender, age);

    $("#rate").text(result);
    $("#quote").show()

    event.preventDefault();
  });
});

// Back-End, Business Logic
function makeQuote(gender, age) {
  let quote = (100 - age) * 3;
    if(gender === 'male' || age < 26) {
      quote +=50;
    } else {
      alert('Please enter your age.');
    }
  // quote = calculateQuote(quote, gender, age);
  return quote;
}



