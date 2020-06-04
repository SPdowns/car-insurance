// Front-End, User Interface, User Logic
$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    // let quote = (100 - age) * 3;
    // if (gender === 'male' && age < 26) {
    //   quote += 50;
    // }
    let result = makeQuote(gender, age);

    $("#rate").text(result);
    $("#quote").show()

    event.preventDefault();
  });
});

// Back-End, Business Logic
function makeQuote(gender, age) {
  let quote = (100 - age) * 3;
  // if(gender === 'male' && age < 26) {
  //   quote +=50;
  // }
  quote = calculateQuote(quote, gender, age);
  return quote;
}

function calculateQuote(quote, gender, age) {
  if(gender === 'male' && age < 26) {
    quote +=50;
  }
  return quote;
}

function recursiveFunction(index) {
  if(index < 10) {
    index++;
    return recursiveFunction(index);
  }
  return index;
}

