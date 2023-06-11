// vérifier si l'API SpeechRecognition est disponible dans le navigateur
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) { // vérifie si l'objet SpeechRecognition est présent dans l'objet window ou si l'objet webkitSpeechRecognition est présent dans l'objet window.
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;//crée une variable SpeechRecognition qui est soit l'objet SpeechRecognition soit l'objet webkitSpeechRecognition en fonction de ce qui est disponible dans le navigateur
    const recognition = new SpeechRecognition();
    const startBtn = document.getElementById('start-btn');
    const transcriptionOutput = document.getElementById('transcription-output');
  
    recognition.lang = 'ar-AR'; // définir la langue pour la reconnaissance de la parole en arabe
  
    startBtn.addEventListener('click', () => {   //ajoute un événement "click" au bouton "start-btn" qui appelle la méthode "start"
                                                   //  de l'objet recognition lorsque le bouton est cliqué.
      recognition.start();
    });
  
    recognition.onresult = (event) => {  // cette fonction s'exécute lorsque la reconnaissance de la parole est terminée.
      const transcription = event.results[0][0].transcript;       // event contient une liste de tous les résultats de la reconnaissance vocale                                              // Cette fonction récupère le texte transcrit et l'ajoute à l'élément "transcription-output". 
    transcriptionOutput.textContent += transcription + ' ';  // transcript récupère la chaîne de caractères de la transcription de la parole, qui est
    };                                                        //stockée dans la propriété transcript 
  
    recognition.onerror = (event) => {   //une fonction qui est appelée lorsque survient une erreur de reconnaissance de la parole
      console.error(event.error);
    };
  } else {
    alert("Désolé, la reconnaissance de la parole n'est pas prise en charge dans votre navigateur.");
  }
  
  
  
  
  