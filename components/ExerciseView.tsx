import React, { useState, useEffect } from 'react';
import { Exercise, Question, QuestionType, AIExplanation, EssayCorrection } from '../types';
import { getExplanation, translateToRussian, correctEssay } from '../services/geminiService';
import { ExplanationModal } from './ExplanationModal';
import { Play, Pause, Edit3, Check, RotateCcw, Home, Languages, Sparkles, FileText, Send, Headphones, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface ExerciseViewProps {
  exercise: Exercise;
  onComplete: (results: { correct: number; total: number; exerciseId: string; module: any }) => void;
  goBack: () => void;
}

// Helper to highlight text gaps
const HighlightedText: React.FC<{ text: string; currentGapId: string }> = ({ text, currentGapId }) => {
  if (!text) return null;
  
  const parts = text.split(/(\[\d+\])/g);
  
  return (
    <div className="text-base leading-relaxed whitespace-pre-line text-gray-800">
      {parts.map((part, i) => {
        const match = part.match(/\[(\d+)\]/);
        if (match) {
           const gapNum = match[1];
           const isCurrent = currentGapId && currentGapId.endsWith(gapNum);
           
           return (
             <span 
                key={i} 
                className={`inline-block px-2 py-0.5 mx-1 rounded font-bold border ${isCurrent ? 'bg-secondary text-white border-secondary' : 'bg-gray-200 text-gray-600 border-gray-300'}`}
             >
               {gapNum}
             </span>
           );
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
};

export const ExerciseView: React.FC<ExerciseViewProps> = ({ exercise, onComplete, goBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // MC / Matching State
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  
  // Writing (Essay) State
  const [essayText, setEssayText] = useState('');
  const [showTemplate, setShowTemplate] = useState(false);
  const [essayCorrection, setEssayCorrection] = useState<EssayCorrection | null>(null);

  // Listening State
  const [showTranscript, setShowTranscript] = useState(false);

  const [explanationData, setExplanationData] = useState<AIExplanation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Translation States
  const [translatedQuestion, setTranslatedQuestion] = useState<string | null>(null);
  const [translatedContext, setTranslatedContext] = useState<string | null>(null);
  const [translatedOptions, setTranslatedOptions] = useState<Record<number, string>>({});
  
  const [isTranslatingQuestion, setIsTranslatingQuestion] = useState(false);
  const [isTranslatingContext, setIsTranslatingContext] = useState(false);
  const [isTranslatingOption, setIsTranslatingOption] = useState<number | null>(null);

  // Track correctness
  const [answerHistory, setAnswerHistory] = useState<Record<string, boolean>>({});

  const currentQuestion = exercise.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === exercise.questions.length - 1;
  const isEssay = currentQuestion.type === QuestionType.ESSAY;
  const isBeschwerde = exercise.subType === 'Beschwerde';
  const isHoeren = exercise.module === 'HOEREN';

  const useLowercaseLetters = currentQuestion.part === 'Teil 1' || currentQuestion.part === 'Teil 3';

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setTextInput('');
    setEssayText('');
    setEssayCorrection(null);
    setShowTemplate(false);
    setShowTranscript(false); // Hide transcript on new question
    setExplanationData(null);
    setTranslatedQuestion(null);
    setTranslatedContext(null);
    setTranslatedOptions({});
  }, [currentQuestionIndex]);

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const checkAnswer = async () => {
    if (isEssay) {
        setIsLoading(true);
        const result = await correctEssay(essayText, (currentQuestion.contextText || "") + " " + currentQuestion.text);
        setEssayCorrection(result);
        setIsLoading(false);
        setAnswerHistory(prev => ({
            ...prev,
            [currentQuestion.id]: true
        }));
    } else {
        setIsModalOpen(true);
        setIsLoading(true);

        const answer = selectedOption || textInput;
        const result = await getExplanation(currentQuestion, answer, exercise.module);
        
        setExplanationData(result);
        setAnswerHistory(prev => ({
            ...prev,
            [currentQuestion.id]: result.isCorrect
        }));

        setIsLoading(false);
    }
  };

  // Translation Handlers (Same as before)
  const handleTranslateQuestion = async () => {
      if (translatedQuestion) { setTranslatedQuestion(null); return; }
      setIsTranslatingQuestion(true);
      const translation = await translateToRussian(currentQuestion.text);
      setTranslatedQuestion(translation);
      setIsTranslatingQuestion(false);
  };

  const handleTranslateContext = async () => {
      if (!currentQuestion.contextText) return;
      if (translatedContext) { setTranslatedContext(null); return; }
      setIsTranslatingContext(true);
      const translation = await translateToRussian(currentQuestion.contextText);
      setTranslatedContext(translation);
      setIsTranslatingContext(false);
  };

  const handleTranslateOption = async (opt: string, index: number, e: React.MouseEvent) => {
      e.stopPropagation();
      if (translatedOptions[index]) {
          const newMap = {...translatedOptions};
          delete newMap[index];
          setTranslatedOptions(newMap);
          return;
      }
      setIsTranslatingOption(index);
      const translation = await translateToRussian(opt);
      setTranslatedOptions(prev => ({...prev, [index]: translation}));
      setIsTranslatingOption(null);
  }

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;
    const partStats: Record<string, { earned: number, max: number, questions: string[] }> = {};

    exercise.questions.forEach(q => {
        const points = q.points || 3;
        const part = q.part || 'Allgemein';

        if (!partStats[part]) {
            partStats[part] = { earned: 0, max: 0, questions: [] };
        }

        partStats[part].max += points;
        partStats[part].questions.push(q.id);
        maxScore += points;

        if (answerHistory[q.id]) {
            partStats[part].earned += points;
            totalScore += points;
        }
    });

    return { totalScore, maxScore, partStats };
  };

  const getBeschwerdeComplaintText = () => {
      if (!isBeschwerde || !isEssay) return null;
      return exercise.questions[0]?.contextText;
  };

  // Finish and pass data back
  const handleFinish = () => {
      const { totalScore, maxScore } = calculateScore();
      onComplete({
          correct: totalScore,
          total: maxScore,
          exerciseId: exercise.id,
          module: exercise.module
      });
  };

  if (showResults) {
      const { totalScore, maxScore, partStats } = calculateScore();
      const percentage = Math.round((totalScore / maxScore) * 100);

      return (
          <div className="min-h-screen bg-slate-50 p-4 pb-safe">
              <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-primary p-6 text-white text-center">
                      <h2 className="text-2xl font-bold mb-2">Ergebnis</h2>
                      <div className="text-6xl font-bold mb-2">{totalScore}</div>
                      <p className="opacity-80">von {maxScore} Punkten ({percentage}%)</p>
                  </div>

                  <div className="p-6">
                      <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm tracking-wider">Detaillierte Auswertung</h3>
                      
                      <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
                          <table className="w-full text-sm text-left">
                              <thead className="bg-gray-50 text-gray-500 font-medium">
                                  <tr>
                                      <th className="p-3">Teil</th>
                                      <th className="p-3 text-right">Punkte</th>
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                  {Object.entries(partStats).map(([partName, stats]) => (
                                      <tr key={partName}>
                                          <td className="p-3">
                                              <div className="font-semibold text-gray-800">{partName}</div>
                                              <div className="text-xs text-gray-400">{stats.questions.length} Fragen</div>
                                          </td>
                                          <td className="p-3 text-right">
                                              <span className={stats.earned === stats.max ? "text-green-600 font-bold" : "text-gray-700"}>
                                                  {stats.earned}
                                              </span>
                                              <span className="text-gray-400"> / {stats.max}</span>
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                              <tfoot className="bg-gray-50 font-bold text-gray-800">
                                  <tr>
                                      <td className="p-3">Gesamt</td>
                                      <td className="p-3 text-right text-primary">{totalScore} / {maxScore}</td>
                                  </tr>
                              </tfoot>
                          </table>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                          <button 
                            onClick={handleFinish}
                            className="flex items-center justify-center gap-2 p-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                          >
                              <span>Abschließen & Speichern</span>
                              <ArrowRight size={20} />
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      );
  }

  const beschwerdeComplaint = getBeschwerdeComplaintText();

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-6">
           <div className="flex flex-col">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full self-start mb-1">
                    {exercise.module}
                </span>
                <span className="text-xs font-medium text-gray-500">
                    {currentQuestion.part || 'Frage'} • {currentQuestion.points || 3} Punkte
                </span>
           </div>
           <span className="text-sm text-gray-400 font-medium">
             {currentQuestionIndex + 1} / {exercise.questions.length}
           </span>
        </div>
        
        <p className="text-sm text-gray-500 italic mb-4">{exercise.instruction}</p>
        
        {/* Question Content */}
        <div className="space-y-6 pb-24 animate-fade-in">
            
            {/* AUDIO PLAYER FOR HÖREN */}
            {isHoeren && currentQuestion.audioUrl && (
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 mb-4 shadow-sm">
                     <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-orange-600 flex items-center gap-2">
                            <Headphones size={20} />
                            Audio
                        </span>
                        <a 
                            href={currentQuestion.audioUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors"
                        >
                            🎧 Audio öffnen (Telegram)
                        </a>
                     </div>
                     
                     {/* Transcript Toggle */}
                     {currentQuestion.contextText && (
                         <div className="mt-2">
                             <div className="flex justify-between items-center">
                                <button 
                                    onClick={() => setShowTranscript(!showTranscript)}
                                    className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1 underline"
                                >
                                    {showTranscript ? <EyeOff size={14}/> : <Eye size={14}/>}
                                    {showTranscript ? 'Transkript verbergen' : 'Transkript anzeigen'}
                                </button>
                                
                                {showTranscript && (
                                    <button 
                                        onClick={() => { /* handle translate */ }}
                                        disabled={false}
                                        className="text-orange-400 hover:text-orange-600 transition-colors p-1"
                                    >
                                        <Languages size={14} />
                                    </button>
                                )}
                             </div>
                             
                             {showTranscript && (
                                 <div className="mt-3 pt-3 border-t border-orange-200 text-sm text-gray-700 leading-relaxed whitespace-pre-line animate-fade-in">
                                    {currentQuestion.contextText}
                                 </div>
                             )}
                         </div>
                     )}
                </div>
            )}

            {/* SPECIAL DISPLAY FOR BESCHWERDE WRITING TASK */}
            {isBeschwerde && isEssay && beschwerdeComplaint && (
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-sm text-gray-800 leading-relaxed mb-4 shadow-inner">
                     <span className="font-bold text-xs uppercase text-red-400 block mb-2">Originale Beschwerde</span>
                     <div className="whitespace-pre-line">{beschwerdeComplaint}</div>
                </div>
            )}

            {/* TEXT CONTEXT (Lesen / Sprachbausteine) */}
            {/* Hide context here for HÖREN unless transcript is open, logic handled above */}
            {!isHoeren && currentQuestion.contextText && (
            <div className={`bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm ${exercise.module === 'SPRACHBAUSTEINE' ? 'border-l-4 border-l-primary' : ''}`}>
                <div className="flex justify-between items-start mb-3">
                     <span className="font-bold text-xs uppercase text-slate-400 tracking-widest">
                        {exercise.module === 'SPRACHBAUSTEINE' ? 'Vollständiger Text' : (isBeschwerde && isEssay ? 'Interne Anweisung' : 'Kontext')}
                     </span>
                     <button 
                        onClick={handleTranslateContext}
                        disabled={isTranslatingContext}
                        className="text-slate-400 hover:text-primary transition-colors"
                     >
                         {isTranslatingContext ? (
                             <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                         ) : (
                             <Languages size={16} />
                         )}
                     </button>
                </div>
                
                {exercise.module === 'SPRACHBAUSTEINE' ? (
                    <HighlightedText text={currentQuestion.contextText} currentGapId={currentQuestion.id} />
                ) : (
                    <div className="whitespace-pre-line text-gray-700 text-sm leading-relaxed">
                        {translatedContext || currentQuestion.contextText}
                    </div>
                )}
            </div>
            )}

            <div>
                <div className="flex items-start justify-between gap-2 mb-4 bg-white sticky top-0 z-10 py-2">
                     <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900">
                            {currentQuestion.text}
                        </h2>
                        {/* Translation Display */}
                        {translatedQuestion && (
                             <div className="mt-2 p-2 bg-amber-50 text-amber-900 rounded-lg text-sm border border-amber-100 animate-fade-in">
                                 {translatedQuestion}
                             </div>
                        )}
                     </div>
                     
                     <button 
                        onClick={handleTranslateQuestion}
                        disabled={isTranslatingQuestion}
                        className={`p-2 rounded-full transition-colors ${translatedQuestion ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}
                        title="Frage übersetzen"
                     >
                         {isTranslatingQuestion ? (
                             <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                         ) : (
                             <Languages size={20} />
                         )}
                     </button>
                </div>
            
            {/* RENDER MC OPTIONS */}
            {currentQuestion.options && currentQuestion.options.length > 0 && !isEssay && (
                <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => {
                    // Calculate letter index
                    let letter = "";
                    if (useLowercaseLetters) {
                         if (opt === 'x') letter = 'x';
                         else letter = String.fromCharCode(97 + idx); // 97 is 'a'
                    } else {
                        letter = String.fromCharCode(65 + idx); // 65 is 'A'
                    }
                    
                    const isTranslated = !!translatedOptions[idx];

                    return (
                        <button
                        key={idx}
                        onClick={() => setSelectedOption(opt)}
                        className={`w-full p-4 text-left rounded-xl border-2 transition-all active:scale-[0.99] relative group ${
                            selectedOption === opt 
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                            : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
                        }`}
                        >
                        <div className="flex items-start gap-3">
                            <div className={`w-7 h-7 min-w-[1.75rem] rounded-full border-2 flex items-center justify-center text-sm font-bold mt-0.5 ${
                            selectedOption === opt ? 'border-primary text-primary' : 'border-gray-300 text-gray-400'
                            }`}>
                            {letter}
                            </div>
                            <div className="flex-1">
                                <span className={`text-gray-700 font-medium text-sm leading-relaxed whitespace-pre-line ${isTranslated ? 'hidden' : 'block'}`}>
                                    {opt}
                                </span>
                                {isTranslated && (
                                    <span className="text-amber-800 font-medium text-sm leading-relaxed whitespace-pre-line animate-fade-in block">
                                        {translatedOptions[idx]}
                                    </span>
                                )}
                            </div>
                            
                            <div 
                                onClick={(e) => handleTranslateOption(opt, idx, e)}
                                className={`p-1.5 rounded-full transition-colors z-20 ${isTranslated ? 'bg-amber-100 text-amber-700' : 'text-gray-300 hover:text-primary hover:bg-gray-50'}`}
                            >
                                {isTranslatingOption === idx ? (
                                     <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                     <Languages size={16} />
                                )}
                            </div>
                        </div>
                        </button>
                    );
                })}
                </div>
            )}

            {/* RENDER TEXT INPUT */}
            {(!currentQuestion.options || currentQuestion.options.length === 0) && !isEssay && (
                <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Ihre Antwort:</label>
                <input 
                    type="text" 
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg"
                    placeholder="Tippen Sie hier..."
                />
                </div>
            )}

            {/* RENDER ESSAY INPUT */}
            {isEssay && (
                <div className="space-y-4">
                    {currentQuestion.structureHelp && (
                        <div>
                            <button 
                                onClick={() => setShowTemplate(!showTemplate)}
                                className="text-sm text-primary font-bold flex items-center gap-1 mb-2 hover:underline"
                            >
                                <Sparkles size={16} />
                                {showTemplate ? 'Strukturhilfe ausblenden' : 'Strukturhilfe anzeigen'}
                            </button>
                            {showTemplate && (
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 whitespace-pre-line animate-fade-in">
                                    {currentQuestion.structureHelp}
                                </div>
                            )}
                        </div>
                    )}

                    <textarea
                        value={essayText}
                        onChange={(e) => setEssayText(e.target.value)}
                        className="w-full h-64 p-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-base leading-relaxed resize-none"
                        placeholder="Schreiben Sie Ihren Text hier..."
                    />

                    {/* Essay Correction Result */}
                    {essayCorrection && (
                        <div className="space-y-4 animate-fade-in">
                            <div className={`p-4 rounded-xl border ${essayCorrection.rating === 'Gut' ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-gray-800">Bewertung: {essayCorrection.rating}</span>
                                    <span className="text-sm font-mono bg-white px-2 py-1 rounded border">Grammatik: {essayCorrection.grammarScore}%</span>
                                </div>
                                <div className="text-sm text-gray-700">
                                    <strong>Tipps zur Verbesserung:</strong>
                                    <ul className="list-disc list-inside mt-1 space-y-1">
                                        {essayCorrection.feedback.map((tip, i) => (
                                            <li key={i}>{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                                    <Edit3 size={16} />
                                    Korrigierte Version
                                </h4>
                                <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
                                    {essayCorrection.correctedText}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
            
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 z-30 flex gap-3">
                <button 
                onClick={goBack}
                className="px-6 py-3 rounded-xl font-semibold text-gray-500 bg-gray-100"
                >
                Abbruch
                </button>
                
                {isEssay ? (
                    <button 
                        disabled={essayText.length < 10 || isLoading}
                        onClick={checkAnswer}
                        className="flex-1 py-3 rounded-xl font-bold text-white bg-primary disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <Send size={18} />
                                Korrigieren lassen
                            </>
                        )}
                    </button>
                ) : (
                    <button 
                        disabled={!selectedOption && !textInput}
                        onClick={checkAnswer}
                        className="flex-1 py-3 rounded-xl font-bold text-white bg-primary disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 active:scale-95 transition-all"
                    >
                    Prüfen & Erklären
                    </button>
                )}
            </div>
        </div>

        <ExplanationModal 
          isOpen={isModalOpen} 
          onClose={() => { setIsModalOpen(false); if (explanationData) handleNext(); }}
          explanation={explanationData}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};