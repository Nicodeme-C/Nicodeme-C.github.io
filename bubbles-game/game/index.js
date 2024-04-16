//******************************** */ VARIABLES***************************/
const gameTime = 30000; //Temps du jeu 30sec
let timer; // Variable pour stocker le timer du compte à rebours

//Counter pour les bulles
const counterDisplay = document.querySelector("h3");
let counter = 0;


//******************************** */ FONCTIONS***************************/

// Fonction pour démarrer le compte à rebours
const startTimer = () => {
    timer = setTimeout(() => {
        stopGame(); // Appelle la fonction pour arrêter le jeu lorsque le temps est écoulé
    }, gameTime);
}

// Fonction pour arrêter le jeu
const stopGame = () => {
    clearInterval(bubbleInterval); // Arrête la création de bulles
    alert("Game over! Your score is: " + counter); // Affiche l'alerte avec le score final
}

//Fonction creer des bulles
const createBubble = () => {
    
    
    const bubble = document.createElement("span"); // Creer un element span dans le html
    document.body.appendChild(bubble); // On declare que bubble est le fils de body
    bubble.classList.add("bubble"); // ajoute la class bubble a l'element bubble donc le span
    
const size = Math.random() * 200 + 100 + "px";

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
