import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Header } from './components/Header';
import { MOCK_EXERCISES } from './constants';
import { Exercise, ModuleType } from './types';
import { ExerciseView } from './components/ExerciseView';
import { Book, Headphones, PenTool, FileText, ChevronRight, Edit3, Trophy, PieChart, Activity, Star } from 'lucide-react';

// Simple stats type
interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  exercisesCompleted: number;
  moduleStats: Record<ModuleType, { total: number; correct: number }>;
  history: { exerciseId: string; score: number; max: number; date: string }[];
}

const INITIAL_STATS: UserStats = {
  totalQuestions: 0,
  correctAnswers: 0,
  exercisesCompleted: 0,
  moduleStats: {
    [ModuleType.LESEN]: { total: 0, correct: 0 },
    [ModuleType.SPRACHBAUSTEINE]: { total: 0, correct: 0 },
    [ModuleType.HOEREN]: { total: 0, correct: 0 },
    [ModuleType.SCHREIBEN]: { total: 0, correct: 0 },
  },
  history: []
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedModule, setSelectedModule] = useState<ModuleType>(ModuleType.LESEN);
  const [activeFilter, setActiveFilter] = useState<string>('Alle');
  
  // Load stats from local storage if available
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('telc_stats');
    return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  // Save stats whenever they change
  useEffect(() => {
    localStorage.setItem('telc_stats', JSON.stringify(stats));
  }, [stats]);

  const handleExerciseFinish = (results: { correct: number; total: number; exerciseId: string; module: ModuleType }) => {
    setStats(prev => {
      const newStats = { ...prev };
      newStats.totalQuestions += results.total;
      newStats.correctAnswers += results.correct;
      newStats.exercisesCompleted += 1;
      
      // Update module specific stats
      if (results.module) {
          const modStat = newStats.moduleStats[results.module] || { total: 0, correct: 0 };
          modStat.total += results.total;
          modStat.correct += results.correct;
          newStats.moduleStats[results.module] = modStat;
      }

      newStats.history.unshift({
        exerciseId: results.exerciseId,
        score: results.correct,
        max: results.total,
        date: new Date().toISOString()
      });

      return newStats;
    });
    setSelectedExercise(null);
  };

  // Reset filter when module changes
  useEffect(() => {
      setActiveFilter('Alle');
  }, [selectedModule]);

  // Main Dashboard View
  const renderDashboard = () => {
    const moduleExercises = MOCK_EXERCISES.filter(e => e.module === selectedModule);
    const subTypes = ['Alle', ...Array.from(new Set(moduleExercises.map(e => e.subType || 'Sonstige')))].sort();
    
    const displayedExercises = activeFilter === 'Alle' 
        ? moduleExercises 
        : moduleExercises.filter(e => e.subType === activeFilter);

    return (
    <div className="p-4 pb-24 space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-teal-600 rounded-2xl p-6 text-white shadow-xl shadow-teal-900/10 relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">Hallo Lerner!</h2>
            <p className="opacity-90 text-sm mb-4">Bereit für deine B2 Prüfung?</p>
            
            <div className="flex gap-4 text-xs font-medium bg-white/10 p-2 rounded-lg backdrop-blur-sm inline-flex">
                <div className="flex items-center gap-1">
                    <Trophy size={14} className="text-yellow-300" />
                    <span>{stats.exercisesCompleted} Übungen</span>
                </div>
                <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-300" />
                    <span>{stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0}% Korrekt</span>
                </div>
            </div>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            <Book size={120} />
        </div>
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
              className={`p-2 rounded-xl shadow-sm border transition-all duration-200 flex flex-col items-center justify-center gap-1 ${isActive ? 'bg-white border-primary ring-2 ring-primary/10 scale-105 z-10 shadow-md' : 'bg-slate-50 border-slate-100 opacity-70 hover:opacity-100'}`}
            >
              <div className={`p-2 rounded-full ${color} bg-opacity-10`}>
                <Icon className={color.replace("bg-", "text-")} size={20} />
              </div>
              <span className={`font-semibold text-[10px] ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Exercise List */}
      <div>
        <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800 text-lg capitalize">{selectedModule.toLowerCase()} Übungen</h3>
            {subTypes.length > 1 && (
                <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-[60%] justify-end pb-1">
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
        
        <div className="space-y-3 pb-4">
          {displayedExercises.map((ex) => {
            // Check if this exercise has been done
            const isDone = stats.history.some(h => h.exerciseId === ex.id);
            
            return (
                <div 
                  key={ex.id} 
                  onClick={() => setSelectedExercise(ex)}
                  className={`bg-white p-4 rounded-xl border shadow-sm flex justify-between items-center cursor-pointer active:bg-gray-50 transition-all hover:shadow-md ${isDone ? 'border-green-200 bg-green-50/30' : 'border-gray-100'}`}
                >
                  <div>
                    <h4 className={`font-semibold text-sm line-clamp-1 ${isDone ? 'text-green-800' : 'text-gray-800'}`}>{ex.title}</h4>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md uppercase tracking-wide">{ex.subType}</span>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                            {ex.questions.length} {ex.questions.length === 1 ? 'Aufgabe' : 'Aufgaben'}
                        </p>
                        {isDone && <CheckCircleIcon className="w-3 h-3 text-green-500" />}
                    </div>
                  </div>
                  <ChevronRight className="text-gray-300" size={20} />
                </div>
            );
          })}
          {displayedExercises.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="text-gray-300" size={32} />
                  </div>
                  <p className="text-gray-500 font-medium">Noch keine Übungen verfügbar.</p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
  }

  const renderProfile = () => {
      const accuracy = stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0;
      
      return (
        <div className="p-6 pt-10 pb-24 space-y-6 animate-fade-in">
            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-4 flex items-center justify-center shadow-inner border-4 border-white">
                    <span className="text-4xl">🎓</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Dein Fortschritt</h2>
                <p className="text-gray-500 text-sm">B2 Prüfungsvorbereitung</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{stats.exercisesCompleted}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide font-bold">Übungen</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">{accuracy}%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide font-bold">Genauigkeit</div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <PieChart size={18} className="text-primary"/>
                    Modul-Statistik
                </h3>
                <div className="space-y-4">
                    {Object.entries(stats.moduleStats).map(([mod, data]) => {
                        const modAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                        return (
                            <div key={mod}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-gray-700 capitalize">{mod.toLowerCase()}</span>
                                    <span className="text-gray-500">{data.correct}/{data.total} ({modAccuracy}%)</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-primary transition-all duration-500 rounded-full" 
                                        style={{ width: `${modAccuracy}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Activity size={18} className="text-secondary"/>
                    Letzte Aktivitäten
                </h3>
                <div className="space-y-4">
                    {stats.history.slice(0, 5).map((h, i) => (
                        <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0">
                            <span className="text-gray-600 truncate max-w-[180px]">
                                {MOCK_EXERCISES.find(e => e.id === h.exerciseId)?.title || 'Übung'}
                            </span>
                            <span className={`font-bold ${h.score === h.max ? 'text-green-500' : 'text-gray-700'}`}>
                                {h.score}/{h.max}
                            </span>
                        </div>
                    ))}
                    {stats.history.length === 0 && <p className="text-gray-400 text-sm text-center py-4">Noch keine Aktivitäten.</p>}
                </div>
            </div>

            <button 
                onClick={() => {
                    if(confirm('Statistik wirklich zurücksetzen?')) {
                        setStats(INITIAL_STATS);
                    }
                }}
                className="w-full py-3 text-red-400 text-sm font-medium hover:bg-red-50 rounded-xl transition-colors"
            >
                Statistik zurücksetzen
            </button>
        </div>
      );
  }

  const renderContent = () => {
    if (selectedExercise) {
      return (
        <ExerciseView 
          exercise={selectedExercise} 
          onComplete={handleExerciseFinish}
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
        return renderProfile();
      default:
        return renderDashboard();
    }
  };

  // Simple Icons
  const CheckCircleIcon = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  );

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