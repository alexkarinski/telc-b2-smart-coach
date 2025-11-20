import { Exercise, ModuleType } from "./types";

export const EXERCISES_TEIL_2_TEXT_2: Exercise[] = [
  // --- VARIANTE 1 (Text 2) ---
  {
    id: "lesen-t2-v1-text2-old",
    title: "Lesen Teil 2 (Variante 1 - Text 2 Alt)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben. (Alte Version vor 08.2024)",
    questions: [
      {
        id: "t2-v1-t2-old-q8",
        text: "8. Ein Fahrradunfall auf dem Weg zur Arbeit zählt nicht als Arbeitsunfall.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nArbeitsunfälle\n\nArbeitsunfälle sind Unfälle, die Beschäftigte bei der Ausübung ihrer Arbeit oder einer Dienstreise erleiden. Es muss also ein ursächlicher Zusammenhang mit der beruflichen Tätigkeit bestehen.\n...\nZu Arbeitsunfällen zählen auch Wegeunfälle, also Unfälle, die sich auf dem direkten Weg zwischen dem Wohngebäude und der Arbeitsstätte ereignen. Dieser Weg beginnt vor der eigenen Haustür und endet, sobald die Arbeitnehmenden das Unternehmen erreicht haben. Dabei sind bestimmte notwendige Umwege mitversichert, wie etwa der Weg zur Kita, Umleitungen oder im Falle von Fahrgemeinschaften, unabhängig davon, mit welchen Verkehrsmitteln man sich fortbewegt.",
        explanation: "Falsch. Der Text besagt: 'Zu Arbeitsunfällen zählen auch Wegeunfälle... unabhängig davon, mit welchen Verkehrsmitteln man sich fortbewegt.' Ein Fahrradunfall ist also versichert."
      },
      {
        id: "t2-v1-t2-old-q9",
        text: "9. Nach einem Arbeitsunfall",
        options: ["a) bezahlt die Berufsgenossenschaft sofort Verletztengeld.", "b) erhalten Arbeitnehmer sechs Wochen volles Gehalt.", "c) muss ein Bericht vom Arzt beim Arbeitgeber abgegeben werden."],
        correctAnswer: "b) erhalten Arbeitnehmer sechs Wochen volles Gehalt.",
        points: 5,
        part: "Teil 2",
        contextText: "Im Falle einer Arbeitsunfähigkeit nach einem Arbeitsunfall erhalten Arbeitnehmende für sechs Wochen eine Lohnfortzahlung vom Arbeitgeber, danach übernimmt die Berufsgenossenschaft (BG), zahlt u. a. Verletztengeld in Höhe von 80 Prozent des Bruttogehalts...",
        explanation: "Richtig ist b). Der Text sagt: 'erhalten Arbeitnehmende für sechs Wochen eine Lohnfortzahlung vom Arbeitgeber'."
      }
    ]
  },
  {
    id: "lesen-t2-v1-text2-new",
    title: "Lesen Teil 2 (Variante 1 - Text 2 Neu)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben. (Neue Version ab 08.2024)",
    questions: [
      {
        id: "t2-v1-t2-new-q8",
        text: "8. Im Falle eines Arbeitsunfalls muss man sofort einen Bericht beim Arbeitgeber einreichen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Nach einem Arbeitsunfall müssen Beschäftigte ihren Arbeitgeber umgehend über den Unfall in Kenntnis setzen und sich ggf. in Behandlung begeben. Außerdem ist, sobald es der Gesundheitszustand des Geschädigten zulässt, ein detaillierter Unfallbericht zu verfassen und der Personalabteilung vorzulegen.",
        explanation: "Falsch. Der Bericht muss erst verfasst werden, 'sobald es der Gesundheitszustand des Geschädigten zulässt', nicht zwingend sofort (im Sinne von 'unverzüglich', wenn man verletzt ist)."
      },
      {
        id: "t2-v1-t2-new-q9",
        text: "9. Nach einem Arbeitsunfall",
        options: ["a) bezahlt die Berufsgenossenschaft sofort Verletztengeld.", "b) erhalten Arbeitnehmer sechs Wochen volles Gehalt.", "c) trägt der Arbeitgeber die Kosten für die medizinische Versorgung."],
        correctAnswer: "b) erhalten Arbeitnehmer sechs Wochen volles Gehalt.",
        points: 5,
        part: "Teil 2",
        contextText: "Im Falle einer Arbeitsunfähigkeit nach einem Arbeitsunfall erhalten Arbeitnehmende für sechs Wochen eine Lohnfortzahlung vom Arbeitgeber...",
        explanation: "Richtig ist b). Siehe Textstelle zur Lohnfortzahlung."
      }
    ]
  },

  // --- VARIANTE 2 (Text 2) ---
  {
    id: "lesen-t2-v2-text2",
    title: "Lesen Teil 2 (Variante 2 - Text 2)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v2-t2-q8",
        text: "8. Die Mitarbeiter müssen einmal pro Jahr ein Seminar zum Datenschutz belegen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nWichtige Hinweise zum Datenschutz\n...\nEine Teilnahme an einem solchen Training muss spätestens alle drei Jahre erfolgen und durch ein Zertifikat nachgewiesen werden.",
        explanation: "Falsch. Der Text schreibt vor: 'spätestens alle drei Jahre', nicht einmal pro Jahr."
      },
      {
        id: "t2-v2-t2-q9",
        text: "9. Die Teilnahme am Seminar",
        options: ["a) gilt als Arbeitszeit.", "b) ist kostenpflichtig.", "c) muss bei WissMax erfolgen."],
        correctAnswer: "a) gilt als Arbeitszeit.",
        points: 5,
        part: "Teil 2",
        contextText: "Der Besuch des Seminars wird als Arbeitszeit angerechnet und ist für unsere Mitarbeiter kostenfrei.\n...\nAlternativ können Sie auch eine vergleichbare Schulung bei einem anderen Anbieter besuchen.",
        explanation: "Richtig ist a). Der Text sagt explizit: 'Der Besuch des Seminars wird als Arbeitszeit angerechnet'. c) ist falsch, da auch andere Anbieter möglich sind."
      }
    ]
  },

  // --- VARIANTE 3 (Text 2) ---
  {
    id: "lesen-t2-v3-text2-old",
    title: "Lesen Teil 2 (Variante 3 - Text 2 Alt)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben. (Alte Version vor 07.2024)",
    questions: [
      {
        id: "t2-v3-t2-old-q8",
        text: "8. Das Rauchverbot auf dem Firmengelände schließt E-Zigaretten aus.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nRauchen\n\nIm gesamten Betrieb gilt striktes Rauchverbot... Eine Missachtung dieser Regel zieht eine Abmahnung nach sich.\nDas Rauchverbot schließt Zigaretten, Zigarren, Pfeifen und den Konsum ähnlich verwendbarer Substanzen sowie jeglichen Gebrauch von E-Zigaretten mit ein.",
        explanation: "Falsch. Der Text sagt, das Verbot schließt E-Zigaretten 'mit ein' (also sind sie auch verboten), es schließt sie nicht 'aus' (erlaubt)."
      },
      {
        id: "t2-v3-t2-old-q9",
        text: "9. Raucher",
        options: ["a) müssen ihre Pausenzeiten nicht dokumentieren.", "b) sind auch in der Raucherpause bei Unfällen versichert.", "c) sollen die Terrassentür beim Rauchen schließen."],
        correctAnswer: "c) sollen die Terrassentür beim Rauchen schließen.",
        points: 5,
        part: "Teil 2",
        contextText: "Bei Veranstaltungen ist das Rauchen auch auf der Dachterrasse des Gebäudes A zulässig, Beschäftigte, die dort rauchen, sind dazu angehalten, die Terrassentür geschlossen zu halten.",
        explanation: "Richtig ist c). Im Text steht: 'dazu angehalten, die Terrassentür geschlossen zu halten'."
      }
    ]
  },
  {
    id: "lesen-t2-v3-text2-new",
    title: "Lesen Teil 2 (Variante 3 - Text 2 Neu)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben. (Neue Version ab 07.2024)",
    questions: [
      {
        id: "t2-v3-t2-new-q8",
        text: "8. Das Rauchverbot auf dem Firmengelände schließt E-Zigaretten ein.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Das Rauchverbot schließt Zigaretten, Zigarren, Pfeifen und den Konsum ähnlich verwendbarer Substanzen sowie jeglichen Gebrauch von E-Zigaretten mit ein.",
        explanation: "Richtig. Der Text bestätigt, dass E-Zigaretten inbegriffen (verboten) sind."
      },
      {
        id: "t2-v3-t2-new-q9",
        text: "9. Raucher",
        options: ["a) erhalten weitere Informationen zu den Raucherbestimmungen in der Personalabteilung.", "b) müssen ihre Pausenzeiten dokumentieren.", "c) sind auch in der Raucherpause bei Unfällen versichert."],
        correctAnswer: "b) müssen ihre Pausenzeiten dokumentieren.",
        points: 5,
        part: "Teil 2",
        contextText: "Raucherpausen sind nicht Bestandteil der Arbeitszeit, deshalb müssen sich Mitarbeiter ordnungsgemäß vom Zeiterfassungssystem ab- bzw. nach Beendigung der Pause wieder anmelden.",
        explanation: "Richtig ist b). Das An- und Abmelden am Zeiterfassungssystem ist eine Dokumentation der Pausenzeiten."
      }
    ]
  },

  // --- VARIANTE 4 (Text 2) ---
  {
    id: "lesen-t2-v4-text2",
    title: "Lesen Teil 2 (Variante 4 - Text 2)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v4-t2-q8",
        text: "8. Das Unternehmen unterstützt die Mitarbeiter finanziell bei privaten Problemen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nLebensarbeitszeitkonto\n...\nBei Bedarf können Sie Ihre angesparten Stunden wieder einlösen. Das Lebensarbeitszeitkonto bietet die Chance, adäquat auf verschiedene Bedürfnisse zu verschiedenen Zeiten im Laufe des Arbeitslebens einzugehen. Beispielsweise könnte die angesparte Zeit etwa für die Betreuung von pflegebedürftigen Angehörigen genutzt werden.",
        explanation: "Falsch. Das Unternehmen bietet 'angesparte Zeit' (Freistellung) an, aber keine direkte 'finanzielle Unterstützung' für private Probleme."
      },
      {
        id: "t2-v4-t2-q9",
        text: "9. Die Mitarbeiter können",
        options: ["a) bei Bedarf von zu Hause aus arbeiten.", "b) sich maximal ein halbes Jahr beurlauben lassen.", "c) Geldleistungen für die Pflege von Angehörigen erhalten."],
        correctAnswer: "a) bei Bedarf von zu Hause aus arbeiten.",
        points: 5,
        part: "Teil 2",
        contextText: "Wenn Sie eine gewisse zeitliche Flexibilität brauchen, können Sie auch kurzfristig nach Absprache im Homeoffice arbeiten. Für die Arbeit von zu Hause aus stehen den Mitarbeitern und Mitarbeiterinnen ein firmeneigener Laptop und ein Diensthandy zur Verfügung.",
        explanation: "Richtig ist a). Der Text bestätigt die Möglichkeit, 'nach Absprache im Homeoffice [zu] arbeiten'."
      }
    ]
  },

  // --- VARIANTE 5 (Text 2) ---
  {
    id: "lesen-t2-v5-text2",
    title: "Lesen Teil 2 (Variante 5 - Text 2)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v5-t2-q8",
        text: "8. Auszubildende ohne ordentlich geführtes Berichtsheft dürfen nicht an der Abschlussprüfung teilnehmen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nBerichtsheft\n\nDas Berichtsheft ist der Nachweis, dass die Ausbildung ordnungsgemäß verläuft... Darüber hinaus bietet es Ihnen die Möglichkeit, den Zeitaufwand für bestimmte Tätigkeiten präziser einzuschätzen und Ihre Aufgaben zu reflektieren.\nWeiterhin wird Ihr Tätigkeitsbereich für Beteiligte im Unternehmen und für die Stellen, die für die Berufsausbildung zuständig sind, nachvollziehbar dargestellt. Es ist Pflicht, das Berichtsheft jeweils vor der Zwischen- und der Abschlussprüfung vorzulegen. Nur wenn es vollständig ist, wird der Prüfungsausschuss Sie zu den Prüfungen zulassen.",
        explanation: "Richtig. Der Text sagt: 'Nur wenn es vollständig ist, wird der Prüfungsausschuss Sie zu den Prüfungen zulassen.'"
      },
      {
        id: "t2-v5-t2-q9",
        text: "9. Das Berichtsheft muss",
        options: ["a) in der Freizeit geführt werden.", "b) dem Ausbildungsleiter regelmäßig gezeigt werden.", "c) jeden Tag ausgefüllt werden."],
        correctAnswer: "b) dem Ausbildungsleiter regelmäßig gezeigt werden.",
        points: 5,
        part: "Teil 2",
        contextText: "In festen Abständen haben Sie das Heft Ihrem Ausbildungsleiter zur Kenntnisnahme vorzulegen.",
        explanation: "Richtig ist b). 'In festen Abständen' bedeutet 'regelmäßig'."
      }
    ]
  },

  // --- VARIANTE 6 (Text 2) ---
  {
    id: "lesen-t2-v6-text2",
    title: "Lesen Teil 2 (Variante 6 - Text 2)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v6-t2-q8",
        text: "8. Die Mitarbeitenden dürfen ihre Passwörter frühestens alle sechs Monate ändern.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nDatenschutz\n\nIhre im Unternehmen verwendeten Passwörter dürfen unter keinen Umständen weitergegeben und müssen regelmäßig alle sechs Monate geändert werden.",
        explanation: "Falsch. Der Text sagt 'müssen regelmäßig alle sechs Monate geändert werden' (Verpflichtung), nicht 'frühestens' (Verbot, es früher zu tun)."
      },
      {
        id: "t2-v6-t2-q9",
        text: "9. Vertrauliche Daten",
        options: ["a) dürfen nicht auf dem PC gespeichert werden.", "b) müssen nach einer bestimmten Zeit gelöscht werden.", "c) sollen ausgedruckt und abgeheftet werden."],
        correctAnswer: "b) müssen nach einer bestimmten Zeit gelöscht werden.",
        points: 5,
        part: "Teil 2",
        contextText: "Vertrauliche und personenbezogene Daten müssen nach Dienstschluss verschlossen werden. Sie dürfen zudem nicht länger als unbedingt erforderlich aufgehoben oder gespeichert werden.",
        explanation: "Richtig ist b). 'Nicht länger als unbedingt erforderlich ... gespeichert' bedeutet, sie müssen gelöscht werden, wenn sie nicht mehr gebraucht werden (bestimmte Zeit)."
      }
    ]
  },

  // --- VARIANTE 7 (Text 2) ---
  {
    id: "lesen-t2-v7-text2",
    title: "Lesen Teil 2 (Variante 7 - Text 2)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v7-t2-q8",
        text: "8. Alle Mitarbeitenden müssen für eine Arbeits-Unfallversicherung sorgen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nArbeitsunfall und Berufsgenossenschaft (BG)\n\nMit dem Arbeitsantritt in unserem Unternehmen sind Sie als Arbeitnehmer*in automatisch gesetzlich unfallversichert.",
        explanation: "Falsch. Die Versicherung erfolgt 'automatisch' mit Arbeitsantritt, die Mitarbeiter müssen nicht selbst dafür sorgen."
      },
      {
        id: "t2-v7-t2-q9",
        text: "9. Nach einem Arbeitsunfall",
        options: ["a) muss man sich einem Durchgangsarzt vorstellen.", "b) schickt die BG einen Arzt oder Rettungswagen.", "c) übernimmt die BG sofort die Gehaltsfortzahlungen."],
        correctAnswer: "a) muss man sich einem Durchgangsarzt vorstellen.",
        points: 5,
        part: "Teil 2",
        contextText: "Ob mit der ohne Krankenhausaufenthalt, müssen Sie aber in jedem Fall von einem Durchgangsarzt untersucht werden.",
        explanation: "Richtig ist a). Der Text verlangt: 'müssen Sie aber in jedem Fall von einem Durchgangsarzt untersucht werden'."
      }
    ]
  }
];
