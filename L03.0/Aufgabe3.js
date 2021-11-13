//Leider ist es mir aufgrund von Zeitmangel nicht gelungen die Aufgabe vollständig fertigzustellen.
// Ein paar Einzelprobleme sind leider noch offen, daher funktioniert die Anwendung nicht richtig. 
var SequenzMemory;
(function (SequenzMemory) {
    window.addEventListener("load", handleLoad);
    var gameWord;
    var cardSize;
    var backgroundColor;
    var cardColor;
    var fontColor;
    var font;
    var timer;
    var countdown;
    var startBtn = document.querySelector("button");
    var arrayOriginal;
    function handleLoad() {
        var form = document.querySelector("#formSettings");
        form.addEventListener("change", handleChange);
        var startBtn = document.querySelector("button");
        startBtn.addEventListener("click", createField);
    }
    function handleChange(_event) {
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, _a = formData.entries(); _i < _a.length; _i++) {
            var entry = _a[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            switch (entry[0]) {
                case "size":
                    cardSize = Number(entry[1]);
                    break;
                case "backgroundColor":
                    backgroundColor = String(entry[1]);
                    break;
                case "cardColor":
                    cardColor = String(entry[1]);
                    break;
                case "fontColor":
                    fontColor = String(entry[1]);
                    break;
                case "font":
                    font = String(entry[1]);
                    break;
                case "time":
                    timer = Number(entry[1]);
                    break;
                case "gameWord":
                    gameWord = String(entry[1]);
                    break;
            }
        }
    }
    function createField(_event) {
        document.getElementById("formSettings").classList.add("isHidden");
        var container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
        var arrayShuffled = gameWord.split("");
        arrayOriginal = gameWord.split("");
        for (var index = 0; index < gameWord.length; index++) {
            var randomNumber = Math.floor(Math.random() * (arrayShuffled.length));
            console.log(arrayShuffled);
            var newCard = document.createElement("div");
            newCard.className = "card";
            newCard.id = String(index);
            container.appendChild(newCard);
            newCard.innerHTML = arrayShuffled[randomNumber];
            arrayShuffled.splice(randomNumber, 1);
            newCard.style.width = cardSize + "px";
            newCard.style.height = cardSize + "px";
            document.body.style.backgroundColor = backgroundColor;
            newCard.style.backgroundColor = cardColor;
            newCard.style.color = fontColor;
            newCard.style.fontFamily = font;
        }
        setTimeout(function () {
            coverupCards();
        }, 2000);
    }
    function coverupCards() {
        var cardArray = document.querySelectorAll(".card");
        console.log(cardArray);
        var cardID = cardArray[0].id;
        console.log(cardID);
        for (var index = 0; index < cardArray.length; index++) {
            cardArray[index].classList.add("hiddenCard");
            cardArray[index].addEventListener("click", checkCard);
        }
        setTimer();
    }
    function checkCard(_event) {
        /* console.log(_event.target.id); */
        // Hier liegt das größte Problem. Ich versuche auf die ID der Karte (also des Targets) zuzugreifen. Jedoch kann ich darauf nicht zugreifen. Weshlab?
        // Mit dem Code unten scheint es so, als wenn der Event Listener nur auf jeweils dem ersten Feld installiert ist und immer dieselben Werte annimmt. 
        // Deshalb funktioniert das weitere Vorgehen nicht korrekt.
        var cardClicked = document.querySelector(".card");
        cardClicked.classList.remove("hiddenCard");
        console.log(cardClicked.innerHTML);
        console.log(arrayOriginal[0]);
        if (cardClicked.innerHTML != arrayOriginal[0]) {
            window.alert("YOU LOST");
            coverupCards();
        }
        else if (cardClicked.innerHTML == arrayOriginal[arrayOriginal.length]) {
            window.alert("YOU WON");
        }
    }
    function setTimer() {
        var countdown = document.createElement("div");
        countdown.className = "timer";
        document.body.appendChild(countdown);
        countdown.classList.add("countdown");
    }
    // when lost coverupCards()
})(SequenzMemory || (SequenzMemory = {}));
//# sourceMappingURL=Aufgabe3.js.map