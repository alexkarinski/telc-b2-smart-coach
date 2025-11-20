import React, { useState, useEffect } from 'react';
import { Book, Trash2, Plus, Search, Brain, Layers, Sparkles, RefreshCw } from 'lucide-react';
import { VocabularyItem } from '../types';
import { getVocabulary, removeVocabularyItem, addVocabularyItem, getDueWords } from '../services/vocabularyService';
import { generateVocabularyExercise } from '../services/geminiService';
import { FlashcardSession } from './FlashcardSession';
import { ExerciseView } from './ExerciseView';

export const VocabularyView: React.FC = () => {
    const [items, setItems] = useState<VocabularyItem[]>([]);
    const [mode, setMode] = useState<'LIST' | 'FLASHCARDS' | 'AI_TRAINING'>('LIST');
    const [showAddForm, setShowAddForm] = useState(false);
    const [newOriginal, setNewOriginal] = useState('');
    const [newTranslation, setNewTranslation] = useState('');
    const [newType, setNewType] = useState<'Wort' | 'Ausdruck' | 'Grammatik'>('Wort');
    const [searchTerm, setSearchTerm] = useState('');
    
    // AI Exercise State
    const [aiExercise, setAiExercise] = useState<any>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        setItems(getVocabulary());
    }, []);

    const dueCount = getDueWords().length;

    const handleAdd = () => {
        if (!newOriginal || !newTranslation) return;
        const newItem = addVocabularyItem({
            original: newOriginal,
            translation: newTranslation,
            type: newType
        });
        setItems([newItem, ...items]);
        setNewOriginal('');
        setNewTranslation('');
        setShowAddForm(false);
    };

    const handleDelete = (id: string) => {
        removeVocabularyItem(id);
        setItems(items.filter(i => i.id !== id));
    };

    const startAiTraining = async () => {
        setIsGenerating(true);
        const exercise = await generateVocabularyExercise(items);
        setAiExercise(exercise);
        setIsGenerating(false);
        if (exercise) setMode('AI_TRAINING');
    };

    if (mode === 'FLASHCARDS') {
        return <FlashcardSession onExit={() => setMode('LIST')} />;
    }

    if (mode === 'AI_TRAINING' && aiExercise) {
        return (
            <ExerciseView 
                exercise={aiExercise} 
                onComplete={() => setMode('LIST')} 
                goBack={() => setMode('LIST')} 
            />
        );
    }

    const filteredItems = items.filter(i => 
        i.original.toLowerCase().includes(searchTerm.toLowerCase()) || 
        i.translation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 pb-24 min-h-screen bg-slate-50 animate-fade-in">
            {/* HEADER & ACTIONS */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <Book className="text-primary" />
                        Wortschatz
                    </h2>
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                        {items.length} Einträge
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button 
                        onClick={() => setMode('FLASHCARDS')}
                        className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-primary to-teal-600 text-white rounded-xl shadow-md relative overflow-hidden active:scale-95 transition-all"
                    >
                        <Layers size={24} className="mb-2" />
                        <span className="font-bold text-sm">Karten lernen</span>
                        {dueCount > 0 && (
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                                {dueCount}
                            </span>
                        )}
                    </button>

                    <button 
                        onClick={startAiTraining}
                        disabled={items.length < 3 || isGenerating}
                        className="flex flex-col items-center justify-center p-4 bg-white border-2 border-primary/10 text-primary rounded-xl hover:bg-primary/5 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isGenerating ? <RefreshCw className="animate-spin mb-2" size={24}/> : <Sparkles size={24} className="mb-2" />}
                        <span className="font-bold text-sm">AI Training</span>
                    </button>
                </div>
            </div>

            {/* SEARCH & ADD */}
            <div className="flex gap-2 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input 
                        className="w-full pl-10 p-3 rounded-xl border border-gray-200 bg-white focus:border-primary outline-none"
                        placeholder="Suchen..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <button 
                    onClick={() => setShowAddForm(!showAddForm)}
                    className={`p-3 rounded-xl shadow-sm transition-colors ${showAddForm ? 'bg-gray-200 text-gray-600' : 'bg-primary text-white'}`}
                >
                    <Plus size={24} />
                </button>
            </div>

            {showAddForm && (
                <div className="bg-white p-4 rounded-xl shadow-md mb-6 border border-gray-100 animate-fade-in">
                    <input 
                        className="w-full p-3 mb-3 border border-gray-200 rounded-lg focus:border-primary outline-none font-medium"
                        placeholder="Deutsch (z.B. die Entscheidung treffen)"
                        value={newOriginal}
                        onChange={e => setNewOriginal(e.target.value)}
                    />
                    <input 
                        className="w-full p-3 mb-3 border border-gray-200 rounded-lg focus:border-primary outline-none"
                        placeholder="Russisch / Erklärung"
                        value={newTranslation}
                        onChange={e => setNewTranslation(e.target.value)}
                    />
                    <div className="flex gap-2 mb-4">
                        {['Wort', 'Ausdruck', 'Grammatik'].map(type => (
                            <button
                                key={type}
                                onClick={() => setNewType(type as any)}
                                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${newType === type ? 'bg-primary text-white border-primary' : 'bg-white text-gray-500 border-gray-200'}`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <button 
                        onClick={handleAdd}
                        className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold active:scale-95 transition-transform"
                    >
                        Speichern
                    </button>
                </div>
            )}

            {/* LIST */}
            <div className="space-y-3">
                {filteredItems.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start group">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                                    item.type === 'Grammatik' ? 'bg-purple-100 text-purple-700' : 
                                    item.type === 'Ausdruck' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                    {item.type}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    Box {item.box}
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-800 text-lg leading-tight mb-1">{item.original}</h4>
                            <p className="text-gray-500 text-sm">{item.translation}</p>
                        </div>
                        <button 
                            onClick={() => handleDelete(item.id)}
                            className="text-gray-300 hover:text-red-500 p-2 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
                {filteredItems.length === 0 && (
                    <div className="text-center py-10">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-300">
                            <Book size={24} />
                        </div>
                        <p className="text-gray-400 text-sm">Keine Vokabeln gefunden.</p>
                    </div>
                )}
            </div>
        </div>
    );
};