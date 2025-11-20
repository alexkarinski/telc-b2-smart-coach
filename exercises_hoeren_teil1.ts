import { Exercise, ModuleType, QuestionType } from "./types";

export const EXERCISES_HOEREN_TEIL_1: Exercise[] = [
  // --- TEIL 1 VARIANTE 1 (Zarif) ---
  {
    id: "hoeren-t1-v1",
    title: "Hören Teil 1 (Variante 1 - Zarif)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 22 und 23.",
    questions: [
      {
        id: "h-t1-v1-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22. Der Vorgesetzte muss den Dienstplan ändern.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 1",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/195146",
        contextText: `Chef: Hallo Zarif, ich würde gerne über unseren Dienstplan für den Rest der Woche sprechen. In der Spätschicht ist ein Fahrer ausgefallen und wir suchen einen Ersatz.`,
        explanation: "Richtig. Ein Fahrer ist ausgefallen, daher muss der Plan geändert werden."
      },
      {
        id: "h-t1-v1-q23",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "23. Zarif ...",
        options: [
          "a) übernimmt eine Doppelschicht.",
          "b) soll dafür sorgen, dass die Kunden für die Zustellung zahlen.",
          "c) muss Regeln bei der Reihenfolge der Zustellungen beachten."
        ],
        correctAnswer: "c) muss Regeln bei der Reihenfolge der Zustellungen beachten.",
        points: 5,
        part: "Teil 1",
        contextText: "Chef: ...wenn du also Sendungen im Wagen hast, die mit den Wörtern „Wunschzeit gebucht“ gekennzeichnet sind, diese unbedingt zuerst ausliefern.",
        explanation: "Richtig ist c). Er muss die 'Wunschzeit'-Pakete zuerst ausliefern."
      }
    ]
  },

  // --- TEIL 1 VARIANTE 2 (Drucker) ---
  {
    id: "hoeren-t1-v2",
    title: "Hören Teil 1 (Variante 2 - Drucker)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 22 und 23.",
    questions: [
      {
        id: "h-t1-v2-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22. Kundin kann sich nicht um einen Drucker entscheiden.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 1",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/195148",
        contextText: "Kundin: ...Ich kenne mich mit Druckern nicht so gut aus. Können Sie mir nicht etwas empfehlen?",
        explanation: "Richtig. Sie bittet um Rat."
      },
      {
        id: "h-t1-v2-q23",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "23. Verkäufer empfiehlt",
        options: [
          "a) einen Drucker mit Papierkorb für mehr als 500 Blätter.",
          "b) ein multifunktionales Gerät.",
          "c) einen weiß-schwarzen Drucker."
        ],
        correctAnswer: "b) ein multifunktionales Gerät.",
        points: 5,
        part: "Teil 1",
        contextText: "Verkäufer: ...Wir haben sehr interessante Kombi-Geräte... Das Modell LD315 z.B. ist eine Kombination aus Drucker und Scanner...",
        explanation: "Richtig ist b). Kombi-Gerät = Multifunktional."
      }
    ]
  },
  // NEU 12.10.24 / 05.04.25
  {
    id: "hoeren-t1-v2-new",
    title: "Hören Teil 1 (Variante 2 Neu - 05.04.25)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch. (Neue Version)",
    questions: [
      {
        id: "h-t1-v2-new-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22. Kundin möchte / braucht eine Beratung / lässt sich beraten.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 1",
        explanation: "Laut Screenshot (100%)."
      },
      {
        id: "h-t1-v2-new-q23",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "23. Kundin",
        options: [
          "a) benötigt mindestens 5 Drucker.",
          "b) möchte mit dem Chef sprechen.",
          "c) möchte, dass die Drucker auch kopieren."
        ],
        correctAnswer: "b) möchte mit dem Chef sprechen.",
        points: 5,
        part: "Teil 1",
        contextText: "Kundin: Ich bespreche das mit meinem Chef und melde mich nochmal bei Ihnen.",
        explanation: "Richtig ist b)."
      }
    ]
  },

  // --- TEIL 1 VARIANTE 3 (Glastüren) ---
  {
    id: "hoeren-t1-v3",
    title: "Hören Teil 1 (Variante 3 - Glastüren)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 24 und 25.",
    questions: [
      {
        id: "h-t1-v3-q24",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "24. Frau Li von Cargo KG möchte Holztüren umtauschen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 1",
        // Link not explicitly in snippet, using placeholder or logic from series
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/195148", 
        contextText: "Anita Li: ...Wir haben also beschlossen, diese Türen zu entfernen, und sind auf der Suche nach etwas Neuem.",
        explanation: "Falsch. Sie will neue Türen kaufen, nicht umtauschen."
      },
      {
        id: "h-t1-v3-q25",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "25. Frau Li möchte",
        options: [
          "a) Türen, die viel Licht durchlassen, bei denen die Privatsphäre der Mitarbeitenden trotzdem nicht verletzt wird.",
          "b) helle Türen für den Eingangsbereich.",
          "c) verschiedene Modelle als Muster bekommen."
        ],
        correctAnswer: "a) Türen, die viel Licht durchlassen, bei denen die Privatsphäre der Mitarbeitenden trotzdem nicht verletzt wird.",
        points: 5,
        part: "Teil 1",
        contextText: "Anita Li: ...Welches Glas ist denn nicht vollständig durchsichtig, hat aber auf der anderen Seite trotzdem einen großen Lichteffekt?",
        explanation: "Richtig ist a). Lichteffekt + nicht vollständig durchsichtig (Privatsphäre)."
      }
    ]
  },

  // --- TEIL 1 VARIANTE 4 (Termin München) ---
  {
    id: "hoeren-t1-v4",
    title: "Hören Teil 1 (Variante 4 - Termin München)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 22 und 23.",
    questions: [
      {
        id: "h-t1-v4-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22. Karl und Michaella verschieben einen wichtigen Termin.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 1",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/124132",
        contextText: "Karl: ...Dann schlage ich Folgendes vor. Du fährst nach München und ich nehme den Termin in La Monde wahr.",
        explanation: "Falsch. Der Termin wird nicht verschoben, sondern von einer anderen Person (Michaella) wahrgenommen."
      },
      {
        id: "h-t1-v4-q23",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "23. Michaella soll",
        options: [
          "a) ihre geplante Dienstreise absagen.",
          "b) mit der Firma La Monde verhandeln.",
          "c) mit einem Kollegen nach München fahren."
        ],
        correctAnswer: "c) mit einem Kollegen nach München fahren.",
        points: 5,
        part: "Teil 1",
        contextText: "Karl: ...Aber du könntest doch mit Ebol fahren.",
        explanation: "Richtig ist c). Karl schlägt vor, dass sie mit Ebol nach München fährt."
      }
    ]
  },

  // --- TEIL 1 VARIANTE 5 (Friseursalon) ---
  {
    id: "hoeren-t1-v5",
    title: "Hören Teil 1 (Variante 5 - Friseursalon)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 22 und 23.",
    questions: [
      {
        id: "h-t1-v5-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22. Der Chef erklärt Melanie, mit welchen Produkten der Salon arbeitet.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 1",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/140339",
        contextText: "Chef: ...Dann empfehlen wir natürlich die, die wir hier benutzen. (Er nennt keine spezifischen Marken im Detail)",
        explanation: "Falsch. Laut Lösungsschlüssel (100%)."
      },
      {
        id: "h-t1-v5-q23",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "23. Im Friseursalon",
        options: [
          "a) dürfen keine Produkte bestimmter Marken empfohlen werden.",
          "b) ist der Chef für die Bestellung der Ware zuständig.",
          "c) wird das Trinkgeld regelmäßig unter den Mitarbeitern aufgeteilt."
        ],
        correctAnswer: "c) wird das Trinkgeld regelmäßig unter den Mitarbeitern aufgeteilt.",
        points: 5,
        part: "Teil 1",
        contextText: "Chef: Wir haben eine Kasse, in der wir das ganze Trinkgeld sammeln und einmal im Monat wird es verteilt.",
        explanation: "Richtig ist c)."
      }
    ]
  },

  // --- TEIL 1 VARIANTE 6 (Schulstart) ---
  {
    id: "hoeren-t1-v6",
    title: "Hören Teil 1 (Variante 6 - Schulstart)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 22 und 23.",
    questions: [
      {
        id: "h-t1-v6-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22. Am ersten Schultag unterhalten sich die Personen über organisatorische Fragen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 1",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/153239",
        contextText: "Barthum: ...Ihren Stundenplan haben Sie bekommen, oder? ... Dort stehen die Schränke...",
        explanation: "Richtig. Es geht um Stundenpläne, Schränke, Schlüssel."
      },
      {
        id: "h-t1-v6-q23",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "23. Frau Alimi",
        options: [
          "a) ist Frau Barthum Mitarbeiterin.",
          "b) ist eine neue Lehrerin.",
          "c) vertritt eine Kollegin."
        ],
        correctAnswer: "a) ist Frau Barthum Mitarbeiterin.",
        points: 5,
        part: "Teil 1",
        contextText: "Barthum: ...zu Frau Alimi, meiner Assistentin.",
        explanation: "Richtig ist a). Assistentin = Mitarbeiterin."
      }
    ]
  },

  // --- TEIL 1 VARIANTE 7 (Teamleiter) ---
  {
    id: "hoeren-t1-v7",
    title: "Hören Teil 1 (Variante 7 - Arbeitsplatz)",
    module: ModuleType.HOEREN,
    subType: "Teil 1",
    instruction: "Hören Sie das Gespräch und lösen Sie die Aufgaben 22 und 23.",
    questions: [
      {
        id: "h-t1-v7-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22. Der Teamleiter zeigt einer neuen Mitarbeiterin ihren Arbeitsplatz.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 1",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/136295",
        contextText: "Teamleiter: ...Sie sitzen hier neben Herrn Gombert...",
        explanation: "Richtig."
      },
      {
        id: "h-t1-v7-new-q22",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "22 (Neu 07.03.25). Der Teamleiter spricht mit der Mitarbeiterin über Schichtplan / Dienstplan.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 1",
        contextText: "Teamleiter: ...Dienstplan... Schichtplan...",
        explanation: "Richtig."
      },
      {
        id: "h-t1-v7-q23",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "23. Frau Blume",
        options: [
          "a) darf ihre Schichten selbst bestimmen.",
          "b) wird ab sofort im Kundenservice eingesetzt.",
          "c) wird die Kunden nur per E-Mail betreuen."
        ],
        correctAnswer: "b) wird ab sofort im Kundenservice eingesetzt.",
        points: 5,
        part: "Teil 1",
        contextText: "Teamleiter: ...Sie werden zuerst die per E-Mail eingegangenen Anfragen bearbeiten...",
        explanation: "Richtig ist b). E-Mail Bearbeitung ist Teil des Kundenservice."
      }
    ]
  }
];