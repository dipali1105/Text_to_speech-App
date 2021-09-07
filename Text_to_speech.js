
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');



const speak = (message) => {
    var speech = new SpeechSynthesisUtterance();
  
    // Set the text and voice attributes.
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
  
    window.speechSynthesis.speak(speech);
  };
  

button.onclick = () => {
    const text = textarea.value;


    if(text != "" || text != " " ){

        speak(text);


    }
   


}