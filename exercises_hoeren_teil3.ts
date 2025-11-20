import { Exercise, ModuleType, QuestionType } from "./types";

export const EXERCISES_HOEREN_TEIL_3: Exercise[] = [
  // --- VARIANTE 1: ERSTHELFER ---
  {
    id: "hoeren-t3-v1",
    title: "Hören Teil 3 (Variante 1 - Ersthelfer)",
    module: ModuleType.HOEREN,
    subType: "Teil 3",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 32-35.",
    questions: [
      { id: "h-t3-v1-q32", text: "32. An dem Betrieb gibt es", options: ["b) zurzeit genug Ersthelfer, als gesetzlich vorgeschrieben.", "a)..."], correctAnswer: "b) zurzeit genug Ersthelfer, als gesetzlich vorgeschrieben.", part: "Teil 3", audioUrl: "https://t.me/B2_C2_Deutsch/65534/124140", explanation: "Laut Transkript." },
      { id: "h-t3-v1-q33", text: "33. Ausbildung", options: ["a) ist kostenfrei.", "b)..."], correctAnswer: "a) ist kostenfrei.", part: "Teil 3", explanation: "Laut Transkript." },
      { id: "h-t3-v1-q34", text: "34. Anmeldung", options: ["c) sollen sich in 2 Wochen anmelden.", "b)..."], correctAnswer: "c) sollen sich in 2 Wochen anmelden.", part: "Teil 3", explanation: "Laut Transkript." },
      { id: "h-t3-v1-q35", text: "35. Murat", options: ["a) ob er als Ersthelfer arbeiten darf.", "b)..."], correctAnswer: "a) ob er als Ersthelfer arbeiten darf.", part: "Teil 3", explanation: "Laut Transkript." }
    ]
  },
  // --- VARIANTE 2: ARBEITSSCHUTZ ---
  {
    id: "hoeren-t3-v2",
    title: "Hören Teil 3 (Variante 2 - Arbeitsschutz)",
    module: ModuleType.HOEREN,
    subType: "Teil 3",
    instruction: "Hören Sie das Gespräch.",
    questions: [
      { id: "h-t3-v2-q32", text: "32. Unternehmen", options: ["a) hat ein anderes Unternehmen beauftragt.", "b)..."], correctAnswer: "a) hat ein anderes Unternehmen beauftragt.", part: "Teil 3", audioUrl: "https://t.me/B2_C2_Deutsch/65534/158142", explanation: "Laut Screenshot." },
      { id: "h-t3-v2-q33", text: "33. Fragebögen", options: ["c) vom Fachleuten analysiert.", "a)..."], correctAnswer: "c) vom Fachleuten analysiert.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v2-q34", text: "34. Fluchtwege", options: ["c) den genauen Sammelplatz bei Notfällen kennen.", "a)..."], correctAnswer: "c) den genauen Sammelplatz bei Notfällen kennen.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v2-q35", text: "35. Geschäftsführung", options: ["b) sucht weitere Ersthelfer.", "a)..."], correctAnswer: "b) sucht weitere Ersthelfer.", part: "Teil 3", explanation: "Laut Screenshot." }
    ]
  },
  // --- VARIANTE 3: LOGO ---
  {
    id: "hoeren-t3-v3",
    title: "Hören Teil 3 (Variante 3 - Logo)",
    module: ModuleType.HOEREN,
    subType: "Teil 3",
    instruction: "Hören Sie das Gespräch.",
    questions: [
      { id: "h-t3-v3-q32", text: "32. Altes Logo", options: ["b) passt nicht mehr zum Angebot.", "a)..."], correctAnswer: "b) passt nicht mehr zum Angebot.", part: "Teil 3", audioUrl: "https://t.me/B2_C2_Deutsch/65534/195152", explanation: "Laut Screenshot." },
      { id: "h-t3-v3-q33", text: "33. Neues Logo", options: ["c) zwei farbige Elemente.", "a)..."], correctAnswer: "c) zwei farbige Elemente.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v3-q34", text: "34. Herr Aydin", options: ["a) wird sich bei den Mitarbeitern Hilfe holen.", "b)..."], correctAnswer: "a) wird sich bei den Mitarbeitern Hilfe holen.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v3-q35", text: "35. Einführung", options: ["b) gefeiert werden.", "a)..."], correctAnswer: "b) gefeiert werden.", part: "Teil 3", explanation: "Laut Screenshot." }
    ]
  },
  // --- VARIANTE 4: UMWELTSCHUTZ ---
  {
    id: "hoeren-t3-v4",
    title: "Hören Teil 3 (Variante 4 - Umweltschutz)",
    module: ModuleType.HOEREN,
    subType: "Teil 3",
    instruction: "Hören Sie das Gespräch.",
    questions: [
      { id: "h-t3-v4-q32", text: "32. Computer", options: ["c) von allein in den Ruhemodus schalten.", "a)..."], correctAnswer: "c) von allein in den Ruhemodus schalten.", part: "Teil 3", audioUrl: "https://t.me/B2_C2_Deutsch/65534/140342", explanation: "Laut Screenshot." },
      { id: "h-t3-v4-q33", text: "33. Frau Seibert", options: ["a) den Entwurfmodus zu verwenden.", "b)..."], correctAnswer: "a) den Entwurfmodus zu verwenden.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v4-q34", text: "34. Abfall", options: ["c) weniger Abfall produziert wird.", "a)..."], correctAnswer: "c) weniger Abfall produziert wird.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v4-q35", text: "35. Geschäftsreisen", options: ["b) mit der Bahn haben verschiedene Vorteile.", "a)..."], correctAnswer: "b) mit der Bahn haben verschiedene Vorteile.", part: "Teil 3", explanation: "Laut Screenshot." }
    ]
  },
  // --- VARIANTE 5: NEUE FILIALE ---
  {
    id: "hoeren-t3-v5",
    title: "Hören Teil 3 (Variante 5 - Filiale Frankfurt)",
    module: ModuleType.HOEREN,
    subType: "Teil 3",
    instruction: "Hören Sie das Gespräch.",
    questions: [
      { id: "h-t3-v5-q32", text: "32. Werbekampagne", options: ["c) gestaltet eine Agentur.", "a)..."], correctAnswer: "c) gestaltet eine Agentur.", part: "Teil 3", audioUrl: "https://t.me/B2_C2_Deutsch/65534/190823", explanation: "Laut Screenshot." },
      { id: "h-t3-v5-q33", text: "33. Soziale Medien", options: ["c) die Bewerber besser kennenzulernen.", "a)..."], correctAnswer: "c) die Bewerber besser kennenzulernen.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v5-q34", text: "34. Beleuchtungskonzept", options: ["a) führte zu Unzufriedenheit bei der Kundschaft.", "b)..."], correctAnswer: "a) führte zu Unzufriedenheit bei der Kundschaft.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v5-q35", text: "35. Kundschaft", options: ["a) achtet mehr auf die Qualität als auf den Preis.", "b)..."], correctAnswer: "a) achtet mehr auf die Qualität als auf den Preis.", part: "Teil 3", explanation: "Laut Screenshot." }
    ]
  },
  // --- VARIANTE 6: BONUSSYSTEM ---
  {
    id: "hoeren-t3-v6",
    title: "Hören Teil 3 (Variante 6 - Bonussystem)",
    module: ModuleType.HOEREN,
    subType: "Teil 3",
    instruction: "Hören Sie das Gespräch.",
    questions: [
      { id: "h-t3-v6-q32", text: "32. Bonussystem", options: ["a) dient der Einsatzbereitschaft der Mitarbeitenden.", "b)..."], correctAnswer: "a) dient der Einsatzbereitschaft der Mitarbeitenden.", part: "Teil 3", audioUrl: "https://t.me/B2_C2_Deutsch/65534/153246", explanation: "Laut Screenshot." },
      { id: "h-t3-v6-q33", text: "33. Fragebögen", options: ["c) ein Mitarbeiterprofil erstellt.", "a)..."], correctAnswer: "c) ein Mitarbeiterprofil erstellt.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v6-q34", text: "34. Erstes Gespräch", options: ["a) findet nach einem Jahr statt.", "b)..."], correctAnswer: "a) findet nach einem Jahr statt.", part: "Teil 3", explanation: "Laut Screenshot." },
      { id: "h-t3-v6-q35", text: "35. Bonus", options: ["b) erhalten die Angestellten eine Sachleistung.", "a)..."], correctAnswer: "b) erhalten die Angestellten eine Sachleistung.", part: "Teil 3", explanation: "Laut Screenshot." }
    ]
  }
];