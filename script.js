// Symptom Checker Logic

// Mental Health Chatbot
function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const messagesDiv = document.getElementById('messages');
  const userMessage = document.createElement('div');
  userMessage.innerText = 'You: ' + userInput;
  userMessage.style.fontWeight = 'bold';
  messagesDiv.appendChild(userMessage);
  
  const botResponse = document.createElement('div');
  botResponse.innerText = 'Bot: How can I help you with your mental health today?';
  botResponse.style.color = '#555';
  messagesDiv.appendChild(botResponse);
  
  document.getElementById('user-input').value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Smoothly show the selected section with fade animation
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === sectionId) {
          section.classList.add('active');
      }
  });
}

