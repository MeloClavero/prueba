document.addEventListener('DOMContentLoaded', function () {
    const chatboxToggle = document.querySelector('.chatbox-toggle');
    const chatboxMessage = document.querySelector('.chatbox-message-wrapper');
    

    chatboxToggle.addEventListener('click', function () {
        chatboxMessage.classList.toggle('show');
        if (chatboxMessage.classList.contains('show')) {
            showWelcomeMessage()
            showOptions()
        }
        else{
            resetChatbox()
        }
    });
    
});

function showWelcomeMessage(){
    console.log('Mostrando mensaje de bienvenida'); 
    sendMessage('Hola, ¿en qué puedo ayudarte?', 'received-message')
    sendMessage('Por favor, seleccione una opción:', 'received-message')
}



//! show options con mensaje
function showOptions() {
    // Mostrar las opciones disponibles
    const subOptionsContainer = document.querySelector('.chatbox-message-content');
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('chatbox-message-item', 'received-message');

    optionsDiv.innerHTML = `
        <div class="options">
            <button class="option-button" onclick="showSubOptions('option1', 'Opción 1')">Opción 1</button>
            <button class="option-button" onclick="showSubOptions('option2', 'Opción 2')">Opción 2</button>
            <button class="option-button" onclick="showSubOptions('option3', 'Opción 3')">Opción 3</button>
        </div>
    `;
    
    subOptionsContainer.appendChild(optionsDiv);
    scrollToBottom(subOptionsContainer)
} 

function showSubOptions(optionId, message) {
    const subOptionsContainer = document.querySelector('.chatbox-message-content');
    const subOptionsDiv = document.createElement('div');
    subOptionsDiv.classList.add('chatbox-message-item', 'received-message');
    subOptionsDiv.id = optionId;

    // Enviar primero el mensaje de la opción seleccionada
    sendMessage(message, 'sent-message');

    // Agregar las subopciones después de enviar el mensaje
    switch (optionId) {
        case 'option1':
            subOptionsDiv.innerHTML = `
                <button class="option-button" onclick="sendMessage('Subopción 1.1', 'sent-message')">Subopción 1.1</button>
                <button class="option-button" onclick="sendMessage('Subopción 1.2', 'sent-message')">Subopción 1.2</button>
                <button class="option-button" onclick="sendMessage('Subopción 1.3', 'sent-message')">Subopción 1.3</button>
            `;
            break;
        case 'option2':
            subOptionsDiv.innerHTML = `
                <button class="option-button" onclick="sendMessage('Subopción 2.1', 'sent-message')">Subopción 2.1</button>
                <button class="option-button" onclick="sendMessage('Subopción 2.2', 'sent-message')">Subopción 2.2</button>
                <button class="option-button" onclick="sendMessage('Subopción 2.3', 'sent-message')">Subopción 2.3</button>
            `;
            break;
        case 'option3':
            subOptionsDiv.innerHTML = `
                <button class="option-button" onclick="sendMessage('Subopción 3.1', 'sent-message')">Subopción 3.1</button>
                <button class="option-button" onclick="sendMessage('Subopción 3.2', 'sent-message')">Subopción 3.2</button>
                <button class="option-button" onclick="sendMessage('Subopción 3.3', 'sent-message')">Subopción 3.3</button>
            `;
            break;
        default:
            break;
    }
    subOptionsContainer.appendChild(subOptionsDiv);
    subOptionsContainer.scrollTop = subOptionsContainer.scrollHeight;
}
function sendMessage(message,messageClass) {
    const messageContent = document.querySelector('.chatbox-message-content');
    const newMessage = document.createElement('div');
    newMessage.classList.add('chatbox-message-item',messageClass);
    newMessage.innerHTML = '<p>' + message + '</p>';
    messageContent.appendChild(newMessage);
}

function resetChatbox() {
    const messageContent = document.querySelector('.chatbox-message-content');
    messageContent.innerHTML = '';
}

