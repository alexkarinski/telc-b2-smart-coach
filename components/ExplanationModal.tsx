import React, { useState, useEffect } from 'react';
import { X, Lightbulb, Check, XCircle, Languages } from 'lucide-react';
import { AIExplanation } from '../types';
import { translateToRussian } from '../services/geminiService';

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  explanation: AIExplanation | null;
  isLoading: boolean;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({ isOpen, onClose, explanation, isLoading }) => {
  const [translatedExplanation, setTranslatedExplanation] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  // Reset translation when a new explanation loads
  useEffect(() => {
      setTranslatedExplanation(null);
  }, [explanation]);

  if (!isOpen) return null;

  const handleTranslate = async () => {
      if (!explanation) return;
      
      if (translatedExplanation) {
          setTranslatedExplanation(null); // Toggle off
          return;
      }

      setIsTranslating(true);
      // Translate both the core explanation and the better alternative if it exists
      const textToTranslate = `Erklärung: ${explanation.explanation} \n\n ${explanation.betterAlternative ? 'Bessere Alternative: ' + explanation.betterAlternative : ''}`;
      
      const result = await translateToRussian(textToTranslate);
      setTranslatedExplanation(result);
      setIsTranslating(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full sm:w-[400px] sm:rounded-2xl rounded-t-2xl shadow-2xl p-6 min-h-[300px] transform transition-transform duration-300 flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center mb-4 shrink-0">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Lightbulb className="text-secondary" size={20} />
            Coach Erklärung
          </h3>
          <div className="flex gap-2">
             {explanation && !isLoading && (
                 <button 
                    onClick={handleTranslate}
                    disabled={isTranslating}
                    className={`p-2 rounded-full transition-colors ${translatedExplanation ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}
                    title="Auf Deutsch/Russisch"
                 >
                     {isTranslating ? (
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                     ) : (
                        <span className="flex items-center gap-1 text-xs font-bold">
                            <Languages size={16} />
                            {translatedExplanation ? 'RU' : 'DE'}
                        </span>
                     )}
                 </button>
             )}
             <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                <X size={20} />
             </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-40 space-y-4 shrink-0">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500 animate-pulse">Der AI Coach analysiert...</p>
          </div>
        ) : explanation ? (
          <div className="space-y-4 overflow-y-auto">
            <div className={`flex items-center gap-2 text-lg font-bold shrink-0 ${explanation.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
              {explanation.isCorrect ? <Check size={24} /> : <XCircle size={24} />}
              {explanation.isCorrect ? 'Richtig!' : 'Nicht ganz...'}
            </div>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Grammatik: {explanation.grammarTopic}
              </p>
              
              {translatedExplanation ? (
                  <div className="animate-fade-in bg-amber-50/50 p-2 rounded-lg border border-amber-100/50">
                      <p className="text-amber-900 leading-relaxed whitespace-pre-line">
                        {translatedExplanation}
                      </p>
                  </div>
              ) : (
                  <p className="text-gray-800 leading-relaxed">
                    {explanation.explanation}
                  </p>
              )}
            </div>

            {!explanation.isCorrect && explanation.betterAlternative && !translatedExplanation && (
               <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-sm text-green-800">
                 <strong>Besser: </strong> {explanation.betterAlternative}
               </div>
            )}
            
            <button onClick={onClose} className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-medium active:scale-95 transition-transform shrink-0">
              Verstanden
            </button>
          </div>
        ) : (
          <p>Ein Fehler ist aufgetreten.</p>
        )}
      </div>
    </div>
  );
};