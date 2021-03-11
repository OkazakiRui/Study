const button = document.getElementById('button');
const text = document.getElementById('text');
const results = [];

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

const refreshText = () => {
  text.innerHTML = '';
  for (let i = 0; i < results.length; i++) {
    text.innerHTML = text.innerHTML + results[i] + '<hr>';
  }
};

button.addEventListener('click', () => {
  recognition.start();
});

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    recognition.start();
  }
});

recognition.onresult = (event) => {
  results.push(event.results[0][0].transcript);
  refreshText();
};
