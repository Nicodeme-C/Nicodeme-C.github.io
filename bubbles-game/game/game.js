//******************************** */ DECLARATIONS DE CONSTANTES ET VARIABLES***************************/
let gameTime = 30000; //Temps du jeu 30sec
let timer; // Variable pour stocker le timer du compte à rebours


//Counter pour les bulles
const counterDisplay = document.querySelector("h3");
let counter = 0;

//Pour diminuer le temps du jeu
const timerDisplay  = document.getElementById("timeofgame");

const timeClass = document.querySelector(".time");
const titleTime = document.querySelector("h2");
let audio = new Audio("./pop.mp3");

//******************************** */ FONCTIONS***************************/

// Fonction pour démarrer le compte à rebours
const startTimer = () => {
    timer = setInterval(() => { 
        gameTime -= 1000; // Décrémenter le temps restant de 1 seconde
        timerDisplay.textContent = (gameTime / 1000) + "s"; // Mettre à jour le contenu du timerDisplay avec le temps restant en secondes
        if (gameTime <= 30000) {

            timerDisplay.style.color = "green";
         
            timeClass.style.border = "2px solid green";
            titleTime.style.color = "green";
        if (gameTime <= 10000) {

            timerDisplay.style.color = "orange";
         
            timeClass.style.border = "2px solid orange";
            titleTime.style.color = "orange";

            if (gameTime <= 5000) {
               timerDisplay.style.color = "red";
           
               timeClass.style.border = "2px solid red";
               titleTime.style.color = "red";
            }

    }}
        if (gameTime <= 0) { // Vérifier si le temps restant est écoulé
            stopGame(); // Appelle la fonction pour arrêter le jeu lorsque le temps est écoulé
           
        }
    }, 1000); // Répéter l'exécution de la fonction toutes les secondes (1000 millisecondes)
}

//Fonction pour rejouer
const playAgain = () => {
    const playAgainConfirmed = confirm("Congratulations! Do you want to play again?");
    if (playAgainConfirmed) {
        location.reload(); // Recharge la page pour relancer une nouvelle partie
    } else {
   const replayEnd = document.createElement("a") // Creer un bouton dans le html
   document.body.appendChild(replayEnd); // On declare que replayEnd est le fils de body
   replayEnd.classList.add("replayend"); // ajoute la class replayend a l'element replayend donc le h5
   replayEnd.href = "https://nicodeme-c.github.io/bubbles-game"; // Définir l'URL de destination du lien
   replayEnd.textContent = "Play Again"; // Définir le texte du lien

  }
}

// Fonction pour arrêter le jeu
const stopGame = () => {
    clearInterval(bubbleInterval); // Arrête la création de bulles
    clearInterval(timer);
    alert("Game over! Your score is: " + counter); // Affiche l'alerte avec le score final
    playAgain(); // Appelle la fonction pour rejouer
}

//Fonction creer des bulles
const createBubble = () => {
    
    
    const bubble = document.createElement("span"); // Creer un element span dans le html
    document.body.appendChild(bubble); // On declare que bubble est le fils de body
    bubble.classList.add("bubble"); // ajoute la class bubble a l'element bubble donc le span
    
const size = Math.random() * 200 + 100 + "px"; // Math fonction pour generer des chiffres aléatoires entre 0 et 1, en multipliant par 200 et en ajoutant 100 le chiffre sera compris entre 100 et 300

bubble.style.width = size;
bubble.style.height = size;

bubble.style.top = Math.random() * 100 +  50 + "%";
bubble.style.left = Math.random() * 100 + "%";
const plusMinus = Math.random() > 0.5 ? 1 : -1;
bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
    if (!audio.paused) { 
        audio.pause(); 
        audio.currentTime = 0; 
    }
    audio.play();
    
});

setTimeout(() => {
    bubble.remove();
}, 9000);
}



//**************************************************************/




// Appel de la fonction pour démarrer le compte à rebours au début du jeu
startTimer();

//Creation périodique des bulles
const bubbleInterval = setInterval(createBubble, 700);




