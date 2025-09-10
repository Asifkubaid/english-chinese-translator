export function formatText(text: string): string {
    return text.trim().replace(/\s+/g, ' ');
}

export function logTranslation(original: string, translated: string): void {
    console.log(`Original: ${original}`);
    console.log(`Translated: ${translated}`);
}