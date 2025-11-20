import { Exercise, ModuleType, QuestionType } from "./types";

export const EXERCISES_HOEREN_TEIL_2: Exercise[] = [
  // --- VARIANTE 1: DIENSTHANDY ---
  {
    id: "hoeren-t2-v1",
    title: "Hören Teil 2 (Variante 1 - Diensthandy)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche. (28-31)",
    questions: [
      { id: "h-t2-v1-q28", text: "28. Mitarbeiter sollten ihr Diensthandy nach der Arbeit ausschalten.", options: ["a) ...ausschalten.", "b)...", "c)..."], correctAnswer: "a) ...ausschalten.", part: "Teil 2", audioUrl: "https://t.me/B2_C2_Deutsch/65534/153245", explanation: "Laut Transkript." },
      { id: "h-t2-v1-q29", text: "29. Urlaub", options: ["b) Im Urlaub sollte man sich Arbeitsgelegenheiten nicht beschäftigen.", "a)...", "c)..."], correctAnswer: "b) Im Urlaub sollte man sich Arbeitsgelegenheiten nicht beschäftigen.", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v1-q30", text: "30. Privatleben", options: ["c) Man sollte das Privatleben respektieren...", "a)..."], correctAnswer: "c) Man sollte das Privatleben respektieren...", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v1-q31", text: "31. Wochenende", options: ["d) Für manche Kunden ist es wichtig, dass der Kundenservice auch am Wochenende verfügbar ist.", "a)..."], correctAnswer: "d) Für manche Kunden ist es wichtig...", part: "Teil 2", explanation: "Laut Transkript." }
    ]
  },
  // --- VARIANTE 1 NEW ---
  {
    id: "hoeren-t2-v1-new",
    title: "Hören Teil 2 (Variante 1 Neu - 150321)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche. (Neue Version)",
    questions: [
      { id: "h-t2-v1-new-q28", text: "28", options: ["a) Diensthandys sollten nur während der Arbeitszeit verwendet werden.", "b)..."], correctAnswer: "a) Diensthandys sollten nur während der Arbeitszeit verwendet werden.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v1-new-q29", text: "29", options: ["d) In der Freizeit und im Urlaub sollte man abschalten.", "a)..."], correctAnswer: "d) In der Freizeit und im Urlaub sollte man abschalten.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v1-new-q30", text: "30", options: ["e) Man sollte das Privatleben der Kollegen respektieren.", "a)..."], correctAnswer: "e) Man sollte das Privatleben der Kollegen respektieren.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v1-new-q31", text: "31", options: ["b) Für manche ist Kundenservice am Wochenende selbstverständlich.", "a)..."], correctAnswer: "b) Für manche ist Kundenservice am Wochenende selbstverständlich.", part: "Teil 2", explanation: "Laut Screenshot." }
    ]
  },

  // --- VARIANTE 2: SPRACHKENNTNISSE ---
  {
    id: "hoeren-t2-v2",
    title: "Hören Teil 2 (Variante 2 - Sprachkenntnisse)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche.",
    questions: [
      { id: "h-t2-v2-q28", text: "28", options: ["b) Ein Mitarbeiter nutzt eine besondere Urlaubsregelung...", "a)..."], correctAnswer: "b) Ein Mitarbeiter nutzt eine besondere Urlaubsregelung...", part: "Teil 2", audioUrl: "https://t.me/B2_C2_Deutsch/65534/195149", explanation: "Bildungsurlaub." },
      { id: "h-t2-v2-q29", text: "29", options: ["d) Die Firma überlegt, ob sie weiterhin Übersetzungsdienste benötigt.", "a)..."], correctAnswer: "d) Die Firma überlegt, ob sie weiterhin Übersetzungsdienste benötigt.", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v2-q30", text: "30", options: ["c) Ein Mitarbeiter hilft einem Kollegen...", "a)..."], correctAnswer: "c) Ein Mitarbeiter hilft einem Kollegen...", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v2-q31", text: "31", options: ["a) Die Firma möchte, dass alle Mitarbeiter ihre Englischkenntnisse verbessern.", "b)..."], correctAnswer: "a) Die Firma möchte, dass alle Mitarbeiter ihre Englischkenntnisse verbessern.", part: "Teil 2", explanation: "Laut Transkript." }
    ]
  },
  // --- VARIANTE 2 NEW 1 (170101) ---
  {
    id: "hoeren-t2-v2-new1",
    title: "Hören Teil 2 (Variante 2 Neu - 170101)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche.",
    questions: [
      { id: "h-t2-v2-n1-q28", text: "28", options: ["f) Arbeitnehmer haben jedes Jahr Anspruch auf Bildungsurlaub.", "a)..."], correctAnswer: "f) Arbeitnehmer haben jedes Jahr Anspruch auf Bildungsurlaub.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v2-n1-q29", text: "29", options: ["e) Mitarbeitende mit Sprachkenntnissen können ein Übersetzungsbüro nicht ersetzen.", "a)..."], correctAnswer: "e) Mitarbeitende mit Sprachkenntnissen können ein Übersetzungsbüro nicht ersetzen.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v2-n1-q30", text: "30", options: ["c) Mehrsprachige Kollegen sind eine große Unterstützung beim Kundenkontakt.", "a)..."], correctAnswer: "c) Mehrsprachige Kollegen sind eine große Unterstützung beim Kundenkontakt.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v2-n1-q31", text: "31", options: ["a) Englischkenntnisse werden immer wichtiger.", "b)..."], correctAnswer: "a) Englischkenntnisse werden immer wichtiger.", part: "Teil 2", explanation: "Laut Screenshot." }
    ]
  },
  // --- VARIANTE 2 NEW 2 (170221) ---
  {
    id: "hoeren-t2-v2-new2",
    title: "Hören Teil 2 (Variante 2 Neu - 170221)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche.",
    questions: [
      { id: "h-t2-v2-n2-q28", text: "28", options: ["b) Die Mitarbeitende können Bildungsurlaub zur Weiterbildung nehmen.", "a)..."], correctAnswer: "b) Die Mitarbeitende können Bildungsurlaub zur Weiterbildung nehmen.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v2-n2-q29", text: "29", options: ["d) Die Übersetzung sollte von professionellen Übersetzern durchgeführt werden.", "a)..."], correctAnswer: "d) Die Übersetzung sollte von professionellen Übersetzern durchgeführt werden.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v2-n2-q30", text: "30", options: ["c) Mitarbeitende, die mehrere Sprachen beherrschen, können ihre Kollegen beim Verkauf unterstützen.", "a)..."], correctAnswer: "c) Mitarbeitende, die mehrere Sprachen beherrschen, können ihre Kollegen beim Verkauf unterstützen.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v2-n2-q31", text: "31", options: ["a) Gute Englischkenntnisse sind ein Vorteil in internationalen Unternehmen.", "b)..."], correctAnswer: "a) Gute Englischkenntnisse sind ein Vorteil in internationalen Unternehmen.", part: "Teil 2", explanation: "Laut Screenshot." }
    ]
  },

  // --- VARIANTE 3: FIRMENFEIER ---
  {
    id: "hoeren-t2-v3",
    title: "Hören Teil 2 (Variante 3 - Firmenfeier)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche.",
    questions: [
      { id: "h-t2-v3-q28", text: "28. Firmenlauf", options: ["f) Für den Lauf werden sportliche Mitarbeiter gesucht.", "a)..."], correctAnswer: "f) Für den Lauf werden sportliche Mitarbeiter gesucht.", part: "Teil 2", audioUrl: "https://t.me/B2_C2_Deutsch/65534/195151", explanation: "Laut Transkript." },
      { id: "h-t2-v3-q29", text: "29. Jubiläum", options: ["d) Die Firma plant aus besonderem Anlass eine Kunden-Kampagne.", "a)..."], correctAnswer: "d) Die Firma plant aus besonderem Anlass eine Kunden-Kampagne.", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v3-q30", text: "30. Ausflug", options: ["e) Es gibt verschiedene Programmpunkte beim Betriebsausflug.", "a)..."], correctAnswer: "e) Es gibt verschiedene Programmpunkte beim Betriebsausflug.", part: "Teil 2", explanation: "Laut Screenshot." },
      { id: "h-t2-v3-q31", text: "31. Kleidung", options: ["b) Auf der Firmenfeier gibt es keine Kleiderordnung.", "a)..."], correctAnswer: "b) Auf der Firmenfeier gibt es keine Kleiderordnung.", part: "Teil 2", explanation: "Laut Transkript." }
    ]
  },

  // --- VARIANTE 4: URLAUB/ARBEITSZEIT ---
  {
    id: "hoeren-t2-v4",
    title: "Hören Teil 2 (Variante 4 - Urlaub/Arbeitszeit)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche.",
    questions: [
      { id: "h-t2-v4-q28", text: "28. Vertretung", options: ["c) Manchmal müssen Kollegen auch die Aufgaben anderer übernehmen.", "a)..."], correctAnswer: "c) Manchmal müssen Kollegen auch die Aufgaben anderer übernehmen.", part: "Teil 2", audioUrl: "https://t.me/B2_C2_Deutsch/65534/124135", explanation: "Laut Transkript." },
      { id: "h-t2-v4-q29", text: "29. Urlaubszeiten", options: ["b) Einige Kollegen können nur zu bestimmten Zeiten Urlaub nehmen.", "a)..."], correctAnswer: "b) Einige Kollegen können nur zu bestimmten Zeiten Urlaub nehmen.", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v4-q30", text: "30. Krankheit im Urlaub", options: ["d) Unter gewissen Umständen gehen Urlaubstage nicht verloren.", "a)..."], correctAnswer: "d) Unter gewissen Umständen gehen Urlaubstage nicht verloren.", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v4-q31", text: "31. Sonderurlaub", options: ["a) Arbeitnehmer bekommen zu besonderen Anlässen frei.", "b)..."], correctAnswer: "a) Arbeitnehmer bekommen zu besonderen Anlässen frei.", part: "Teil 2", explanation: "Laut Transkript." }
    ]
  },

  // --- VARIANTE 5: GESUNDHEIT ---
  {
    id: "hoeren-t2-v5",
    title: "Hören Teil 2 (Variante 5 - Gesundheit)",
    module: ModuleType.HOEREN,
    subType: "Teil 2",
    instruction: "Hören Sie die Gespräche.",
    questions: [
      { id: "h-t2-v5-q28", text: "28. Krankheit", options: ["a) Regelungen zur Arbeitsunfähigkeit unterscheiden sich von Unternehmen zu Unternehmen.", "b)..."], correctAnswer: "a) Regelungen zur Arbeitsunfähigkeit unterscheiden sich von Unternehmen zu Unternehmen.", part: "Teil 2", audioUrl: "https://t.me/B2_C2_Deutsch/65534/158139", explanation: "Laut Transkript." },
      { id: "h-t2-v5-q29", text: "29. Vorsorge", options: ["d) Manche Arbeitgeber bieten Maßnahmen für die Gesundheitsvorsorge an.", "a)..."], correctAnswer: "d) Manche Arbeitgeber bieten Maßnahmen für die Gesundheitsvorsorge an.", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v5-q30", text: "30. Hygiene", options: ["c) Arbeitgeber sollte mehr für die Hygiene im Betrieb tun.", "a)..."], correctAnswer: "c) Arbeitgeber sollte mehr für die Hygiene im Betrieb tun.", part: "Teil 2", explanation: "Laut Transkript." },
      { id: "h-t2-v5-q31", text: "31. Arbeitsplatz", options: ["b) Die Arbeitsplatzgestaltung hat einen Einfluss auf die Gesundheit der Mitarbeiter.", "a)..."], correctAnswer: "b) Die Arbeitsplatzgestaltung hat einen Einfluss auf die Gesundheit der Mitarbeiter.", part: "Teil 2", explanation: "Laut Screenshot." }
    ]
  }
];