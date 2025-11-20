import { VocabularyItem } from "../types";

const STORAGE_KEY = 'telc_vocabulary';

export const getVocabulary = (): VocabularyItem[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const addVocabularyItem = (item: Omit<VocabularyItem, 'id' | 'dateAdded' | 'box' | 'nextReview'>): VocabularyItem => {
    const items = getVocabulary();
    const newItem: VocabularyItem = {
        ...item,
        id: Date.now().toString(),
        dateAdded: new Date().toISOString(),
        box: 1, // Start in Box 1
        nextReview: Date.now() // Ready to review immediately
    };
    
    const updatedItems = [newItem, ...items];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
    return newItem;
};

export const removeVocabularyItem = (id: string): void => {
    const items = getVocabulary();
    const updatedItems = items.filter(i => i.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
};

// --- SRS LOGIC (Leitner System) ---

export const getDueWords = (): VocabularyItem[] => {
    const items = getVocabulary();
    const now = Date.now();
    return items.filter(item => !item.nextReview || item.nextReview <= now);
};

export const updateWordProgress = (id: string, quality: 'bad' | 'ok' | 'good'): void => {
    const items = getVocabulary();
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return;

    const item = items[index];
    let newBox = item.box || 1;

    // Simple Leitner Logic
    if (quality === 'good') {
        newBox = Math.min(5, newBox + 1); // Move up, max box 5
    } else if (quality === 'bad') {
        newBox = 1; // Reset to box 1
    }
    // 'ok' stays in same box

    // Calculate next review interval in days based on box
    const intervals = [0, 1, 3, 7, 14, 30]; // Box 1=1day, Box 5=30days
    // If box > 5, just cap it
    const daysToAdd = intervals[Math.min(newBox, 5)];
    const nextReviewDate = Date.now() + (daysToAdd * 24 * 60 * 60 * 1000);

    items[index] = {
        ...item,
        box: newBox,
        nextReview: nextReviewDate
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};