/* script.js - Logique de la démo interactive */

const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');

// Fonction pour ajouter un message dans la boîte
function appendMessage(text, senderType) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderType);
    
    // Si c'est nous qui envoyons, on met juste le texte
    if (senderType === 'sent') {
        messageDiv.textContent = text;
    } 
    // Si c'est une réponse (received), on ajoute un nom fictif
    else {
        messageDiv.innerHTML = `<strong>Mentor Bot NextStep :</strong> ${text}`;
    }

    chatBox.appendChild(messageDiv);
    // Scroll automatique vers le bas pour voir le dernier message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fonction appelée quand on clique sur "Envoyer"
function sendMessage() {
    const text = messageInput.value.trim();
    if (text === "") return; // Ne rien faire si vide

    // 1. Afficher notre message
    appendMessage(text, 'sent');
    messageInput.value = ''; // Vider le champ

    // 2. Simuler une réponse automatique après 2 secondes
    setTimeout(() => {
        const simulatedResponses = [
            "C'est une excellente question. Sur NextStep, nous avons une section dédiée à cela.",
            "Merci pour ce partage ! C'est exactement l'esprit de notre communauté.",
            "Je vois. Un mentor va bientôt prendre contact avec vous à ce sujet.",
            "Absolument ! L'employabilité des jeunes est notre priorité absolue.",
            "Continuez comme ça, votre profil intéresse déjà des recruteurs."
        ];
        // Choisir une réponse aléatoire
        const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
        
        appendMessage(randomResponse, 'received');
    }, 2000); // 2000 millisecondes = 2 secondes
}

// Permettre d'envoyer avec la touche "Entrée"
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Petit bonus : scroll en bas au chargement de la page
window.onload = function() {
    if(chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
};