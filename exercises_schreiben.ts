import { Exercise, ModuleType, QuestionType } from "./types";

// --- GOLDENE STRUKTUR FÜR FORUMSBEITRAG (B2 BERUF) ---
// Ziel: Mindestens 160-180 Wörter.
const FORUM_TEMPLATE_B2 = (topic: string) => 
`BETREFF: ${topic}

1. ANREDE & EINLEITUNG
"Hallo zusammen,"
"ich habe die Ankündigung der Geschäftsleitung zum Thema '${topic}' gelesen und möchte gerne meine Meinung dazu äußern, da dieses Thema uns alle betrifft."
"Das Thema '${topic}' ist meiner Meinung nach sehr aktuell und diskussionswürdig."

2. MEINUNG ÄUSSERN (Klar positionieren)
"Grundsätzlich halte ich den Vorschlag für [eine hervorragende / eine schwierige] Idee."
"Ich stehe diesem Vorhaben eher [positiv / skeptisch] gegenüber."
"Einerseits verstehe ich die Absicht der Firma, andererseits..."

3. BEGRÜNDUNG & VORTEILE
"Ein entscheidender Vorteil dieser Maßnahme ist sicherlich, dass..."
"Dafür spricht eindeutig, dass..."
"Positiv zu bewerten ist, dass dadurch [z.B. die Gesundheit / das Teamklima] gefördert wird."

4. NACHTEILE & HERAUSFORDERUNGEN
"Allerdings darf man die Nachteile nicht außer Acht lassen. Ein großes Problem sehe ich darin, dass..."
"Kritisch betrachte ich, dass..."
"Für Mitarbeiter mit [z.B. Kindern / langem Arbeitsweg] könnte dies eine Belastung darstellen."

5. BEISPIEL / ERFAHRUNG
"Aus meiner eigenen Erfahrung kann ich berichten, dass..."
"In meiner früheren Firma hatten wir eine ähnliche Regelung. Damals hat sich gezeigt, dass..."
"Ein Kollege von mir hat in einer ähnlichen Situation erlebt, dass..."

6. FAZIT & LÖSUNGSVORSCHLAG
"Alles in allem überwiegen für mich die [Vorteile / Nachteile]."
"Ich würde vorschlagen, dass wir stattdessen..."
"Vielleicht könnte man als Kompromiss..."

7. ABSCHLUSS
"Ich bin sehr gespannt auf eure Meinungen zu diesem Thema."
"Wie seht ihr das? Ich freue mich auf die Diskussion."

Viele Grüße
[Dein Vorname]`;

export const EXERCISES_SCHREIBEN: Exercise[] = [
  // --- BESCHWERDEBRIEF (Basis) ---
  {
    id: "schreiben-beschwerde-1",
    title: "Beschwerdebrief (Training)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Schreiben Sie eine Beschwerde an den Veranstalter.",
    questions: [
      {
        id: "schr-b1-q1",
        type: QuestionType.ESSAY,
        text: "Situation: Sprachkurs entsprach nicht der Werbung.",
        contextText: "Sie haben an einem Deutschkurs teilgenommen... Lehrer unpünktlich, keine Bücher, Raum im Keller...",
        structureHelp: "Betreff: Beschwerde über meinen Sprachkurs\n\nSehr geehrte Damen und Herren,\n\nhiermit möchte ich mich über... beschweren.\n\nLeider entsprach der Kurs nicht der Beschreibung. Erstens...\nZweitens...\n\nAus diesen Gründen fordere ich...\n\nMit freundlichen Grüßen\n[Name]",
        points: 20,
        part: "Beschwerde"
      }
    ]
  },
  
  // --- THEMENBEREICH 1: ARBEITSZEIT & URLAUB ---
  {
    id: "schr-forum-arbeitszeit",
    title: "Forum: Arbeitszeit & Urlaub",
    module: ModuleType.SCHREIBEN,
    subType: "Forumsbeitrag",
    instruction: "Wählen Sie EINES der Themen und verfassen Sie einen Beitrag.",
    questions: [
      {
        id: "f-arb-1",
        type: QuestionType.ESSAY,
        text: "Thema: Überstunden & Freizeitausgleich",
        contextText: "SITUATION: Das Unternehmen muss alle Überstunden durch Freizeit ersetzen. Eine Bezahlung von Überstunden ist nicht mehr möglich. \n\nODER: Im nächsten Monat müssen alle Mitarbeiter jede Woche drei Stunden Überstunden machen (Großauftrag).",
        structureHelp: FORUM_TEMPLATE_B2("Freizeitausgleich statt Bezahlung"),
        points: 20,
        part: "Arbeitszeit"
      },
      {
        id: "f-arb-2",
        type: QuestionType.ESSAY,
        text: "Thema: Samstagsarbeit",
        contextText: "SITUATION: Alle Mitarbeiter sollen aufgrund der guten Auftragslage auch am Samstag arbeiten. Diese Zeiten werden mit 120% vergütet. \n\nODER: Alle sollen an zwei Samstagen im Monat arbeiten. Als Ausgleich erhalten sie am Ende des Jahres zusätzliche Urlaubstage.",
        structureHelp: FORUM_TEMPLATE_B2("Einführung von Samstagsarbeit"),
        points: 20,
        part: "Arbeitszeit"
      },
      {
        id: "f-arb-3",
        type: QuestionType.ESSAY,
        text: "Thema: Urlaubsplanung & Betriebsurlaub",
        contextText: "SITUATION: In den Sommerferien sollen nur Mitarbeiter mit schulpflichtigen Kindern Urlaub bekommen. \n\nODER: Immer wieder Konflikte wegen Urlaubsplanung. Die GL plant künftig im August vier Wochen Betriebsurlaub (Zwangsurlaub für alle).",
        structureHelp: FORUM_TEMPLATE_B2("Neue Urlaubsregelungen"),
        points: 20,
        part: "Arbeitszeit"
      },
      {
        id: "f-arb-4",
        type: QuestionType.ESSAY,
        text: "Thema: Schichtsystem & Nachtarbeit",
        contextText: "SITUATION: Ab dem kommenden Monat sollen die Mitarbeiter in der Produktion in allen Schichten arbeiten (Früh, Spät, Nacht). Dafür bekommen sie zwei Tage mehr Urlaub im Jahr.",
        structureHelp: FORUM_TEMPLATE_B2("Einführung von Schichtarbeit"),
        points: 20,
        part: "Arbeitszeit"
      }
    ]
  },

  // --- THEMENBEREICH 2: WEITERBILDUNG ---
  {
    id: "schr-forum-weiterbildung",
    title: "Forum: Weiterbildung",
    module: ModuleType.SCHREIBEN,
    subType: "Forumsbeitrag",
    instruction: "Wählen Sie EINES der Themen und verfassen Sie einen Beitrag.",
    questions: [
      {
        id: "f-wb-1",
        type: QuestionType.ESSAY,
        text: "Thema: Verpflichtende Kurse (Englisch/Computer)",
        contextText: "SITUATION: Alle Mitarbeiter sollen einen verpflichtenden Englisch- oder Computerkurs außerhalb der Arbeitszeit besuchen. Die Firma übernimmt die Kosten.",
        structureHelp: FORUM_TEMPLATE_B2("Verpflichtende Kurse in der Freizeit"),
        points: 20,
        part: "Weiterbildung"
      },
      {
        id: "f-wb-2",
        type: QuestionType.ESSAY,
        text: "Thema: Selbstzahler während Arbeitszeit",
        contextText: "SITUATION: Alle Mitarbeiter sollen an einer Weiterbildung teilnehmen. Diese findet während der Arbeitszeit statt, aber die Mitarbeiter müssen die Kosten selbst tragen.",
        structureHelp: FORUM_TEMPLATE_B2("Kostenübernahme durch Mitarbeiter"),
        points: 20,
        part: "Weiterbildung"
      },
      {
        id: "f-wb-3",
        type: QuestionType.ESSAY,
        text: "Thema: Workshop Zeitmanagement",
        contextText: "SITUATION: Alle Mitarbeiter sollen an einem Workshop 'Zeitmanagement' teilnehmen. Die Teilnahmegebühr soll jeder privat übernehmen.",
        structureHelp: FORUM_TEMPLATE_B2("Verpflichtender Workshop auf eigene Kosten"),
        points: 20,
        part: "Weiterbildung"
      }
    ]
  },

  // --- THEMENBEREICH 3: GESUNDHEIT & SOZIALES ---
  {
    id: "schr-forum-gesundheit",
    title: "Forum: Gesundheit & Soziales",
    module: ModuleType.SCHREIBEN,
    subType: "Forumsbeitrag",
    instruction: "Wählen Sie EINES der Themen und verfassen Sie einen Beitrag.",
    questions: [
      {
        id: "f-ges-1",
        type: QuestionType.ESSAY,
        text: "Thema: Sport & Fitness",
        contextText: "SITUATION: 'Mehr Geld für Sportkurse' - Mitarbeiter erhalten einen Bonus am Jahresende für regelmäßige Teilnahme. \n\nODER: 'Firmenfitness für 15 Euro' - Gebühr wird direkt vom Gehalt abgezogen für neues Studio.",
        structureHelp: FORUM_TEMPLATE_B2("Betriebliche Gesundheitsförderung"),
        points: 20,
        part: "Gesundheit"
      },
      {
        id: "f-ges-2",
        type: QuestionType.ESSAY,
        text: "Thema: Ernährung in der Kantine",
        contextText: "SITUATION: 'Einführung eines Veggie-Tages' - Freitags nur vegetarisches Essen. \n\nODER: 'Vegetarische Küche' - Die Betriebskantine soll in Zukunft nur noch vegetarisches Essen anbieten.",
        structureHelp: FORUM_TEMPLATE_B2("Umstellung des Kantinenangebots"),
        points: 20,
        part: "Gesundheit"
      },
      {
        id: "f-ges-3",
        type: QuestionType.ESSAY,
        text: "Thema: Rauchen",
        contextText: "SITUATION: 'Zigarettenpausen' - Nur noch während der geregelten Pausenzeiten erlaubt. \n\nODER: 'Raucherpausenraum' - Raucher bekommen einen Raum, müssen aber täglich 15 Minuten länger bleiben.",
        structureHelp: FORUM_TEMPLATE_B2("Neue Regelungen für Raucher"),
        points: 20,
        part: "Gesundheit"
      }
    ]
  },

  // --- THEMENBEREICH 4: BÜROAUSSTATTUNG & REGELN ---
  {
    id: "schr-forum-buero",
    title: "Forum: Büro & Regeln",
    module: ModuleType.SCHREIBEN,
    subType: "Forumsbeitrag",
    instruction: "Wählen Sie EINES der Themen und verfassen Sie einen Beitrag.",
    questions: [
      {
        id: "f-buero-1",
        type: QuestionType.ESSAY,
        text: "Thema: Kleiderordnung & Hygiene",
        contextText: "SITUATION: 'Kleiderordnung' - Auch im Sommer formelle Kleidung. \n\nODER: 'Einheitliche Kleidung' - Alle Mitarbeiter sollen Uniformen tragen, Reinigungskosten selbst zahlen. \n\nODER: 'Einmalhandschuhe' - Während der gesamten Arbeit tragen.",
        structureHelp: FORUM_TEMPLATE_B2("Vorschriften zu Kleidung und Hygiene"),
        points: 20,
        part: "Büroregeln"
      },
      {
        id: "f-buero-2",
        type: QuestionType.ESSAY,
        text: "Thema: Technik & Medien",
        contextText: "SITUATION: 'Radioverbot' - Wegen Beschwerden keine Musik mehr in Büros. \n\nODER: 'Handynutzung' - Private Handynutzung während der Arbeit komplett verboten. \n\nODER: 'Laptops für alle' - Auch privat nutzbar, aber Versicherung selbst zahlen.",
        structureHelp: FORUM_TEMPLATE_B2("Nutzung von Medien und Technik"),
        points: 20,
        part: "Büroregeln"
      },
      {
        id: "f-buero-3",
        type: QuestionType.ESSAY,
        text: "Thema: Arbeitsplatzgestaltung",
        contextText: "SITUATION: 'Großraumbüro' - Umbau zu offenen Räumen für bessere Kommunikation. \n\nODER: 'Fenster schließen und Licht aus' - Strenge Kontrollen beim Verlassen des Büros. \n\nODER: 'Pausenräume sauber machen' - Putzdienst abgeschafft, Mitarbeiter müssen selbst putzen.",
        structureHelp: FORUM_TEMPLATE_B2("Änderungen am Arbeitsplatz"),
        points: 20,
        part: "Büroregeln"
      }
    ]
  },

  // --- THEMENBEREICH 5: MOBILITÄT & UMWELT ---
  {
    id: "schr-forum-umwelt",
    title: "Forum: Mobilität & Umwelt",
    module: ModuleType.SCHREIBEN,
    subType: "Forumsbeitrag",
    instruction: "Wählen Sie EINES der Themen und verfassen Sie einen Beitrag.",
    questions: [
      {
        id: "f-umw-1",
        type: QuestionType.ESSAY,
        text: "Thema: Jobticket & Parken",
        contextText: "SITUATION: Kostenloses Jobticket für alle, dafür kostenpflichtige Parkplätze. \n\nODER: Monatliche Parkgebühr von 20 Euro eingeführt.",
        structureHelp: FORUM_TEMPLATE_B2("Jobticket vs. Parkgebühren"),
        points: 20,
        part: "Mobilität"
      },
      {
        id: "f-umw-2",
        type: QuestionType.ESSAY,
        text: "Thema: Nachhaltigkeit",
        contextText: "SITUATION: 'Weniger Müll' - Keine Pappbecher mehr, eigenes Geschirr. \n\nODER: 'Papiersparen' - Nur noch elektronische Lohnabrechnung.",
        structureHelp: FORUM_TEMPLATE_B2("Maßnahmen zur Nachhaltigkeit"),
        points: 20,
        part: "Umwelt"
      }
    ]
  }
];