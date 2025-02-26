document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("inputForm");
  var userInput = document.getElementById("user_input");
  
  form.addEventListener("submit", function(event) {
    console.log('skdskpkf');
    event.preventDefault(); 

    var word = userInput.value;
    if(word=="")
      {
        window.alert("Search box is empty!!"); 
      }
      else
      {
        retrieveMeaning(word);
        console.log(word);
        userInput.value=" ";
      }
  });

  function retrieveMeaning(word) {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(response=>response.json())
    .then(data => {
      var meaning = data[0].meanings[0].definitions[0].definition;
      
      createCard(word,meaning);

      var cardData = {
        word: word,
        meaning: meaning
    };
    
    var existingCards = localStorage.getItem("cards");
    var cards = existingCards ? JSON.parse(existingCards) : [];
    cards.push(cardData);
    localStorage.setItem("cards", JSON.stringify(cards));
    })
    .catch(error => {
      window.alert("Check spelling or give me a correct word!!");
    });
  }

  function createCard(word, meaning) {
    document.getElementById("card").style.display="block";
    document.getElementById("words").innerHTML=word;
    document.getElementById("mean").innerHTML=meaning;
  }

  var closediv = document.getElementById("close");
  closediv.addEventListener("click", function() {
  document.getElementById("card").style.display="none";
  });

});
