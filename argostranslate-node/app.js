// app.js

const { PythonShell } = require("python-shell");

function translateText(inputText, sourceLang, targetLang) {
  return new Promise((resolve, reject) => {
    PythonShell.run("./translate.py", {
      args: [inputText, sourceLang, targetLang],
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]);  // The translated text is returned as the first result
      }
    });
  });
}

// Example usage
const inputText = "Hello, how are you?";
const sourceLang = "en";  // English
const targetLang = "fr";  // French

translateText(inputText, sourceLang, targetLang)
  .then((translatedText) => {
    console.log("Translated Text:", translatedText);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
