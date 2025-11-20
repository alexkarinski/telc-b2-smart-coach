
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Header } from './components/Header';
import { MOCK_EXERCISES } from './constants';
import { Exercise, ModuleType } from './types';
import { ExerciseView } from './components/ExerciseView';
import { Book, Headphones, PenTool, FileText, ChevronRight, Edit3 } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedModule, setSelectedModule] = useState<ModuleType>(ModuleType.LESEN);
  const [activeFilter, setActiveFilter] = useState<string>('Alle');

  // Reset filter when module changes
  useEffect(() => {
      setActiveFilter('Alle');
  }, [selectedModule]);

  // Main Dashboard View
  const renderDashboard = () => {
    // 1. Filter exercises by the selected module
    const moduleExercises = MOCK_EXERCISES.filter(e => e.module === selectedModule);
    
    // 2. Get unique subtypes for the filter pills
    const subTypes = ['Alle', ...Array.from(new Set(moduleExercises.map(e => e.subType || 'Sonstige')))].sort();

    // 3. Filter by subtype if selected
    const displayedExercises = activeFilter === 'Alle' 
        ? moduleExercises 
        : moduleExercises.filter(e => e.subType === activeFilter);

    return (
    <div className="p-4 pb-24 space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-teal-600 rounded-2xl p-6 text-white shadow-xl shadow-teal-900/10">
        <h2 className="text-2xl font-bold mb-2">Hallo Lerner!</h2>
        <p className="opacity-90 text-sm">Bereit für deine B2 Prüfung? Wähle ein Modul.</p>
      </div>

      {/* Module Selector */}
      <div className="grid grid-cols-4 gap-2">
        {Object.values(ModuleType).map((mod) => {
          let Icon = FileText;
          let color = "bg-blue-500";
          let label = "";

          switch(mod) {
            case ModuleType.LESEN: Icon = Book; color="bg-blue-500"; label="Lesen"; break;
            case ModuleType.SPRACHBAUSTEINE: Icon = PenTool; color="bg-purple-500"; label="Baust."; break;
            case ModuleType.HOEREN: Icon = Headphones; color="bg-orange-500"; label="Hören"; break;
            case ModuleType.SCHREIBEN: Icon = Edit3; color="bg-pink-500"; label="Schreib."; break;
          }

          const isActive = mod === selectedModule;

          return (
            <button 
              key={mod}
              onClick={() => setSelectedModule(mod)}
              className={`p-2 rounded-xl shadow-sm border transition-all flex flex-col items-center justify-center gap-1 active:scale-95 duration-200 ${isActive ? 'bg-white border-primary ring-2 ring-primary/10 scale-105 z-10' : 'bg-slate-50 border-slate-100 opacity-70 hover:opacity-100'}`}
            >
              <div className={`p-2 rounded-full ${color} bg-opacity-10`}>
                <Icon className={color.replace("bg-", "text-")} size={20} />
              </div>
              <span className={`font-semibold text-[10px] ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>{label}</span>
            </button>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800 text-lg capitalize">{selectedModule.toLowerCase()} Übungen</h3>
            {/* Sub-filter pills */}
            {subTypes.length > 1 && (
                <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-[60%] justify-end">
                    {subTypes.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${activeFilter === filter ? 'bg-gray-800 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            )}
        </div>
        
        <div className="space-y-3 min-h-[200px]">
          {displayedExercises.map((ex) => (
            <div 
              key={ex.id} 
              onClick={() => setSelectedExercise(ex)}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center cursor-pointer active:bg-gray-50 transition-all hover:shadow-md"
            >
              <div>
                <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{ex.title}</h4>
                <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md uppercase tracking-wide">{ex.subType}</span>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                        {ex.questions.length} {ex.questions.length === 1 ? 'Aufgabe' : 'Aufgaben'}
                    </p>
                </div>
              </div>
              <ChevronRight className="text-gray-300" size={20} />
            </div>
          ))}
          {displayedExercises.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="text-gray-300" size={32} />
                  </div>
                  <p className="text-gray-500 font-medium">Noch keine Übungen verfügbar.</p>
                  <p className="text-gray-400 text-xs mt-1">Wähle ein anderes Modul oder einen anderen Filter.</p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
  }

  const renderContent = () => {
    if (selectedExercise) {
      return (
        <ExerciseView 
          exercise={selectedExercise} 
          onComplete={() => setSelectedExercise(null)} 
          goBack={() => setSelectedExercise(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'practice':
        return (
            <div className="p-6 text-center pt-20">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <ActivityIcon className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Zufallsmodus</h2>
                    <p className="text-gray-500 mb-6">Der Coach wählt zufällige Aufgaben aus allen Bereichen.</p>
                    <button onClick={() => setSelectedExercise(MOCK_EXERCISES[Math.floor(Math.random() * MOCK_EXERCISES.length)])} className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                        Starten
                    </button>
                </div>
            </div>
        );
      case 'profile':
        return (
            <div className="p-6 pt-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center shadow-inner">
                        <span className="text-4xl">🎓</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">Student B2</h2>
                    <p className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm mt-2">Level: Fortgeschritten</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
                    <h3 className="font-bold text-gray-800 mb-4">Deine Statistik</h3>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3">
                        <span className="text-gray-600">Gelöste Aufgaben</span>
                        <span className="font-bold text-lg text-gray-900">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Genauigkeit</span>
                        <span className="font-bold text-lg text-gray-400">-</span>
                    </div>
                </div>
                <p className="text-xs text-gray-400 text-center">Statistiken werden lokal gespeichert.</p>
            </div>
        );
      default:
        return renderDashboard();
    }
  };

  // Helper for icons in the switch above
  const ActivityIcon = (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20">
      {!selectedExercise && <Header title="Telc B2 Coach" />}
      
      <main className="max-w-md mx-auto bg-slate-50 min-h-screen relative shadow-2xl shadow-slate-200 pb-20">
        {renderContent()}
      </main>

      {!selectedExercise && <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
}

export default App;
