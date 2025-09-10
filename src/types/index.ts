export interface TranslationResult {
    originalText: string;
    translatedText: string;
    sourceLanguage: string;
    targetLanguage: string;
}

export interface LanguageDetectionResult {
    detectedLanguage: string;
    confidence: number;
}