import Translator from './translator';

const translator = new Translator();

// Example command-line interface setup
const runTranslator = async () => {
    const textToTranslate = "Hello, how are you?"; // Example input
    const translatedText = translator.translate(textToTranslate);
    console.log(`Original: ${textToTranslate}`);
    console.log(`Translated: ${translatedText}`);
};

runTranslator();