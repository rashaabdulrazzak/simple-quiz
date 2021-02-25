const resultsContainer = document.getElementById("results");

function showResults() {
  var radios = document.getElementsByName("gender");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio

      if (radios[i].value === "Sporty") {
        resultsContainer.innerHTML = "Congrat! you get the right answer";
      } else {
        resultsContainer.innerHTML = "Sorry! try again";
      }
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
}
