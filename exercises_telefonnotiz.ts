import { Exercise, ModuleType, QuestionType } from "./types";

export const EXERCISES_TELEFONNOTIZ: Exercise[] = [
  // --- VARIANTE 1: AUTOVERMIETUNG (Schmitt/Schmidt) ---
  {
    id: "tel-v1",
    title: "Telefonnotiz: Autovermietung (Variante 1)",
    module: ModuleType.HOEREN, // Part of Hearing & Writing
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v1-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name des Anrufers:",
        correctAnswer: "Schmitt", // Or Schmidt in new version
        points: 2,
        part: "Notiz",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/108835?single",
        contextText: "Audio: Herr Schmitt (alte Version) / Herr Schmidt (neue Version).",
        explanation: "Der Anrufer nennt seinen Namen am Anfang und buchstabiert ihn oft am Ende. (S-C-H-M-I-T-T oder S-C-H-M-I-D-T)."
      },
      {
        id: "tel-v1-tel",
        type: QuestionType.TEXT_INPUT,
        text: "Telefonnummer:",
        correctAnswer: "0171 88 45 545", // New version might have 0171 8845 5545
        points: 2,
        part: "Notiz",
        explanation: "Die Nummer wird meist am Ende genannt."
      },
      {
        id: "tel-v1-info",
        type: QuestionType.TEXT_INPUT,
        text: "Weitere Informationen / Zu erledigen:",
        correctAnswer: "Kleines Auto / 75 Euro pro Tag / voll getankt / Versicherung besprechen / Rückrufen",
        points: 2,
        part: "Notiz",
        explanation: "Schlüsselwörter: Kleines Auto, 75€/Tag (oder 80€ neu), voll getankt, Versicherung, Rückruf."
      }
    ]
  },

  // --- VARIANTE 2: MALER (Mayer) ---
  {
    id: "tel-v2",
    title: "Telefonnotiz: Malerfirma (Variante 2)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v2-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name des Anrufers:",
        correctAnswer: "Mayer",
        points: 2,
        part: "Notiz",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/109520",
        explanation: "Buchstabiert: M-A-Y-E-R."
      },
      {
        id: "tel-v2-tel",
        type: QuestionType.TEXT_INPUT,
        text: "Telefonnummer:",
        correctAnswer: "0512 37 285 618", // Or 0155 623 66 85 for new version
        points: 2,
        part: "Notiz",
        explanation: "Nummer notieren."
      },
      {
        id: "tel-v2-info",
        type: QuestionType.TEXT_INPUT,
        text: "Informationen:",
        correctAnswer: "Maler nicht gekommen / weiße und grüne Farbe mitbringen / bis morgen Mittag streichen / dringend Rückruf",
        points: 2,
        part: "Notiz",
        explanation: "Problem: Maler fehlen. Lösung: Farbe mitbringen, schnell streichen."
      }
    ]
  },

  // --- VARIANTE 3: PROSPEKTE (Städtler / Hoffmann / Becker) ---
  {
    id: "tel-v3",
    title: "Telefonnotiz: Prospekte (Variante 3)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v3-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name:",
        correctAnswer: "Städtler / Hoffmann / Becker",
        points: 2,
        part: "Notiz",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/125046",
        explanation: "Achten Sie auf die Buchstabierung."
      },
      {
        id: "tel-v3-tel",
        type: QuestionType.TEXT_INPUT,
        text: "Telefonnummer:",
        correctAnswer: "0173 536 47 15 / 0175 933 797 6",
        points: 2,
        part: "Notiz",
        explanation: "Nummer notieren."
      },
      {
        id: "tel-v3-info",
        type: QuestionType.TEXT_INPUT,
        text: "Zu erledigen / Info:",
        correctAnswer: "Fehlende Prospekte/Hüllen liefern / Rückruf",
        points: 2,
        part: "Notiz",
        explanation: "Es wurden zu wenige geliefert (100 statt 180, oder 120 statt 200). Nachlieferung gefordert."
      }
    ]
  },

  // --- VARIANTE 4: DRUCKEREI (Kienzle / Walther) ---
  {
    id: "tel-v4",
    title: "Telefonnotiz: Druckerei (Variante 4)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v4-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name:",
        correctAnswer: "Kienzle / Walther",
        points: 2,
        part: "Notiz",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/125091",
        explanation: "Buchstabiert: K-I-E-N-Z-L-E."
      },
      {
        id: "tel-v4-tel",
        type: QuestionType.TEXT_INPUT,
        text: "Telefonnummer:",
        correctAnswer: "0179 335 36 37 / 01734174737",
        points: 2,
        part: "Notiz",
        explanation: "Nummer notieren."
      },
      {
        id: "tel-v4-info",
        type: QuestionType.TEXT_INPUT,
        text: "Informationen:",
        correctAnswer: "Visitenkarten / Premium-Papier / Angebot 60,99 / Papiersorte bestätigen / Expressversand",
        points: 2,
        part: "Notiz",
        explanation: "Es geht um ein Angebot für Visitenkarten oder Kopierpapier. Bestätigung der Papiersorte nötig."
      }
    ]
  },

  // --- VARIANTE 5: TISCHRESERVIERUNG (Messner) ---
  {
    id: "tel-v5",
    title: "Telefonnotiz: Restaurant (Variante 5)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v5-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name:",
        correctAnswer: "Messner / Meßner / Herrmanns",
        points: 2,
        part: "Notiz",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/114261",
        explanation: "M-E-S-S-N-E-R."
      },
      {
        id: "tel-v5-tel",
        type: QuestionType.TEXT_INPUT,
        text: "Telefonnummer:",
        correctAnswer: "041-337-843-009 / 0172 439 378 6",
        points: 2,
        part: "Notiz",
        explanation: "Nummer notieren."
      },
      {
        id: "tel-v5-info",
        type: QuestionType.TEXT_INPUT,
        text: "Informationen:",
        correctAnswer: "Tischreservierung / 5 Personen / Freitag 19:30 / Parkplatz / Menü 1",
        points: 2,
        part: "Notiz",
        explanation: "Reservierung für eine Gruppe. Wichtige Punkte: Parkplatz und Menüwahl."
      }
    ]
  },

  // --- VARIANTE 6: GETRÄNKE (Wolff) ---
  {
    id: "tel-v6",
    title: "Telefonnotiz: Getränkelieferung (Variante 6)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v6-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name:",
        correctAnswer: "Wolff",
        points: 2,
        part: "Notiz",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/153235",
        explanation: "W-O-L-F-F."
      },
      {
        id: "tel-v6-tel",
        type: QuestionType.TEXT_INPUT,
        text: "Telefonnummer:",
        correctAnswer: "0162 744 642 8",
        points: 2,
        part: "Notiz",
        explanation: "Nummer notieren."
      },
      {
        id: "tel-v6-info",
        type: QuestionType.TEXT_INPUT,
        text: "Informationen:",
        correctAnswer: "Getränke für 200 Personen / Lieferung fehlt / bis 12 Uhr Bescheid / 50 Kästen Wasser",
        points: 2,
        part: "Notiz",
        explanation: "Die Lieferung für die Veranstaltung fehlt. Es ist dringend (bis 12 Uhr)."
      }
    ]
  },

  // --- VARIANTE 7: KOPIERER (Schulze) ---
  {
    id: "tel-v7",
    title: "Telefonnotiz: Kopierer (Variante 7)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v7-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name:",
        correctAnswer: "Schulze / Scholtz",
        points: 2,
        part: "Notiz",
        audioUrl: "https://t.me/B2_C2_Deutsch/65534/140321?single", // Assuming link from context
        explanation: "S-C-H-U-L-Z-E."
      },
      {
        id: "tel-v7-tel",
        type: QuestionType.TEXT_INPUT,
        text: "Telefonnummer:",
        correctAnswer: "0160 335 101 8 / 01740254831",
        points: 2,
        part: "Notiz",
        explanation: "Nummer notieren."
      },
      {
        id: "tel-v7-info",
        type: QuestionType.TEXT_INPUT,
        text: "Informationen:",
        correctAnswer: "Defekter Kopierer / Austausch dauert 4 Wochen / Leihgerät / Reparatur vor Ort",
        points: 2,
        part: "Notiz",
        explanation: "Kopierer kaputt. Frage nach Leihgerät oder Reparaturdauer."
      }
    ]
  },

  // --- VARIANTE 8: WEIN (Günther) ---
  {
    id: "tel-v8",
    title: "Telefonnotiz: Weinlieferung (Variante 8)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v8-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name:",
        correctAnswer: "Günther",
        points: 2,
        part: "Notiz",
        contextText: "Audio nicht verfügbar, aber aus Skript: Günther.",
        explanation: "Name."
      },
      {
        id: "tel-v8-info",
        type: QuestionType.TEXT_INPUT,
        text: "Informationen:",
        correctAnswer: "30 Flaschen Weißwein (nur 20 erhalten) / 50 Flaschen Rotwein (statt 30) / Zerbrochene Flaschen / Neue Rechnung",
        points: 2,
        part: "Notiz",
        explanation: "Falsche Lieferung (Menge/Sorte) und Bruch."
      }
    ]
  },

  // --- VARIANTE 9: GESCHIRR (Schweizer) ---
  {
    id: "tel-v9",
    title: "Telefonnotiz: Geschirr (Variante 9)",
    module: ModuleType.HOEREN,
    subType: "Telefonnotiz",
    instruction: "Hören Sie die Nachricht und notieren Sie die Informationen.",
    questions: [
      {
        id: "tel-v9-name",
        type: QuestionType.TEXT_INPUT,
        text: "Name:",
        correctAnswer: "Schweizer / Schwietzler",
        points: 2,
        part: "Notiz",
        explanation: "Name."
      },
      {
        id: "tel-v9-info",
        type: QuestionType.TEXT_INPUT,
        text: "Informationen:",
        correctAnswer: "Karton mit Tellern zerbrochen / 7 Teller kaputt / Ersatz schnellstmöglich",
        points: 2,
        part: "Notiz",
        explanation: "Lieferung beschädigt. Ersatz für Familienfeier benötigt."
      }
    ]
  }
];