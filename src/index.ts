import Translator from './translator';
import * as readline from 'readline';

const translator = new Translator();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter text to translate: ', async (textToTranslate) => {
    const translatedText = await translator.translate(textToTranslate);
    console.log(`Original: ${textToTranslate}`);
    console.log(`Translated: ${translatedText}`);
    rl.close();
});
