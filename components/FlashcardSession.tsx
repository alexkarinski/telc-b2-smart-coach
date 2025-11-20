import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../types';
import { getDueWords, updateWordProgress } from '../services/vocabularyService';
import { Check, X, RotateCcw, ThumbsUp, Brain } from 'lucide-react';

export const FlashcardSession: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const [dueWords, setDueWords] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const due = getDueWords();
    setDueWords(due);
  }, []);

  const handleRate = (quality: 'bad' | 'ok' | 'good') => {
    const currentWord = dueWords[currentIndex];
    updateWordProgress(currentWord.id, quality);

    if (currentIndex < dueWords.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
    } else {
      setFinished(true);
    }
  };

  if (dueWords.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 text-4xl">
          🎉
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Alles erledigt!</h2>
        <p className="text-gray-500 mb-6">Du hast keine Karten mehr für heute. Komm morgen wieder!</p>
        <button onClick={onExit} className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold">
          Zurück
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Training beendet!</h2>
        <p className="text-gray-600 mb-8">Du hast {dueWords.length} Wörter wiederholt.</p>
        <button onClick={onExit} className="px-6 py-3 bg-primary text-white rounded-xl font-bold">
          Fertig
        </button>
      </div>
    );
  }

  const currentWord = dueWords[currentIndex];

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
        <span>Karte {currentIndex + 1} von {dueWords.length}</span>
        <span>Box: {currentWord.box}/5</span>
      </div>

      <div 
        onClick={() => !isFlipped && setIsFlipped(true)}
        className={`flex-1 relative cursor-pointer perspective-1000 group`}
      >
        <div className={`relative w-full h-full transition-all duration-500 transform ${isFlipped ? 'rotate-y-180' : ''} preserve-3d`}>
          
          {/* FRONT */}
          {!isFlipped && (
             <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center p-8 backface-hidden">
                <span className="text-xs font-bold uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
                  {currentWord.type}
                </span>
                <h2 className="text-3xl font-bold text-gray-800 text-center leading-tight">
                  {currentWord.original}
                </h2>
                <p className="text-gray-400 text-sm mt-8 absolute bottom-8">Tippen zum Umdrehen</p>
             </div>
          )}

          {/* BACK (Result) */}
          {isFlipped && (
             <div className="absolute inset-0 bg-slate-800 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8">
                <h3 className="text-xl font-medium text-slate-300 mb-2">{currentWord.original}</h3>
                <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
                <h2 className="text-3xl font-bold text-center leading-tight">
                  {currentWord.translation}
                </h2>
             </div>
          )}
        </div>
      </div>

      {/* CONTROLS */}
      {isFlipped && (
        <div className="mt-8 grid grid-cols-3 gap-3 animate-fade-in-up">
          <button 
            onClick={() => handleRate('bad')}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-red-100 text-red-600 active:scale-95 transition-transform"
          >
            <RotateCcw size={24} className="mb-1"/>
            <span className="text-xs font-bold">Nochmal</span>
          </button>
          
          <button 
            onClick={() => handleRate('ok')}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-amber-100 text-amber-600 active:scale-95 transition-transform"
          >
            <Brain size={24} className="mb-1"/>
            <span className="text-xs font-bold">Schwer</span>
          </button>
          
          <button 
            onClick={() => handleRate('good')}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-green-100 text-green-600 active:scale-95 transition-transform"
          >
            <ThumbsUp size={24} className="mb-1"/>
            <span className="text-xs font-bold">Gut</span>
          </button>
        </div>
      )}
    </div>
  );
};