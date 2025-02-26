document.addEventListener("DOMContentLoaded", function() {
  var cards = localStorage.getItem("cards");
  var cardContainer = document.getElementById("result");
  var parsedCards = [];

  if (cards) {
    parsedCards = JSON.parse(cards);
    // console.log(cards);
    displayCards(parsedCards);

  }

  function displayCards(cards) {
    cardContainer.innerHTML = "";

    cards.reverse().forEach(function(card, index) {
      var newDiv = document.createElement('div');
      newDiv.classList.add('card');
      
      newDiv.style.width = "300px";
      newDiv.style.height = "400px";
      newDiv.style.backgroundColor = "rgb(218 214 214)";
      newDiv.style.color = "black";
      newDiv.style.padding = "10px";
      newDiv.style.margin = "37px";
      newDiv.style.position = "relative";

      var heading = document.createElement('h2');
      heading.textContent = "WORD: " + card.word;

      var details = document.createElement("div");
      details.classList.add("details");
      details.style.padding = "10px";
      details.style.fontFamily = "Sitka Text";
      details.style.fontSize = "14px";

      var paragraph = document.createElement('p');
      paragraph.textContent = "Meaning: " + card.meaning;

      var image = document.createElement('img');
      image.src = 'del.png';
      image.style.width = "40px";
      image.style.height = "40px";
      image.style.position = "absolute";
      image.style.bottom = "10px";
      image.style.right = "10px";
      image.style.cursor = "pointer";
      image.style.borderRadius = "50%";

      image.addEventListener("click", function() {
        parsedCards.splice(index, 1);
        localStorage.setItem("cards", JSON.stringify(parsedCards));
        cardContainer.removeChild(newDiv);
      });

      details.appendChild(heading);
      details.appendChild(paragraph);
      details.appendChild(image);
      newDiv.appendChild(details);
      
      cardContainer.appendChild(newDiv);
    });
  }
});
