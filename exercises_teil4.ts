import { Exercise, ModuleType } from "./types";

export const EXERCISES_TEIL_4: Exercise[] = [
  // --- VARIANTE 1 ---
  {
    id: "lesen-t4-v1-old",
    title: "Lesen Teil 4 (Variante 1)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v1-q14",
        text: "14. Der Termin der nächsten Sitzung",
        options: [
          "a) findet nach Abstimmung im Herbst statt.",
          "b) muss verlegt werden.",
          "c) wird noch bekannt gegeben."
        ],
        correctAnswer: "a) findet nach Abstimmung im Herbst statt.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 20.06.20XX\n...\nTOP 1 Begrüßung und Genehmigung der Tagesordnungspunkte\nVE begrüßt alle Anwesenden... Als nächster Besprechungstermin wird der 24.09.20XX nach der Urlaubszeit einstimmig festgelegt.",
        explanation: "Richtig ist a). Der 24.09. liegt im Herbst und der Termin wurde 'einstimmig festgelegt' (Abstimmung)."
      },
      {
        id: "t4-v1-q15",
        text: "15. Die Firma",
        options: [
          "a) hat ohne Weiteres die Preiserhöhung des Zulieferers akzeptiert.",
          "b) will sich an den höheren Transportkosten gern beteiligen.",
          "c) wird einen neuen Vertragspartner suchen."
        ],
        correctAnswer: "c) wird einen neuen Vertragspartner suchen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 2 Probleme mit einem Zulieferer\n...Wir behalten es uns vor, bis zum 31. des kommenden Monats einen für uns günstigeren Zulieferer zu finden... Ziel ist es, ohne weitere Ansprüche beiderseits von dem Vertrag des Zulieferers zurückzutreten.",
        explanation: "Richtig ist c). Die Firma will einen 'günstigeren Zulieferer finden' und vom alten Vertrag zurücktreten."
      },
      {
        id: "t4-v1-q16",
        text: "16. Die Abteilung Qualitätssicherung",
        options: [
          "a) berichtet von 30 Prozent fehlerhafter Produkte.",
          "b) hat keine Qualitätsprobleme.",
          "c) verzeichnet erste Erfolge."
        ],
        correctAnswer: "c) verzeichnet erste Erfolge.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Zwischenstand Qualitätssicherung\n...Dies führt seit drei Monaten zu einem messbaren Erfolg, berichtet JR. Die Zahl der Reklamationen ist zurückgegangen.",
        explanation: "Richtig ist c). Es wird von einem 'messbaren Erfolg' und zurückgegangenen Reklamationen berichtet."
      },
      {
        id: "t4-v1-q17",
        text: "17. Die Mitarbeitenden",
        options: [
          "a) haben mit dem Betriebsrat gesprochen.",
          "b) können alle Überstunden als Freizeit nehmen.",
          "c) müssen zurzeit Mehrarbeit leisten."
        ],
        correctAnswer: "c) müssen zurzeit Mehrarbeit leisten.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Neue Überstundenregelung\nVE dankt allen Mitarbeitenden für die mehrheitliche Bereitschaft, Überstunden zu leisten... Bisher konnten... Überstunden als Freizeit ausgleichen... momentan nicht möglich ist.",
        explanation: "Richtig ist c). Überstunden (Mehrarbeit) werden geleistet und Freizeitausgleich ist momentan nicht möglich."
      },
      {
        id: "t4-v1-q18",
        text: "18. Das Fahrtenbuch",
        options: [
          "a) dokumentiert alle gefahrenen Kilometer.",
          "b) enthält nichtdienstliche Autofahrten.",
          "c) wird von allen Mitarbeitern geführt."
        ],
        correctAnswer: "b) enthält nichtdienstliche Autofahrten.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Private Nutzung der Dienstwagen\n...Es wird aber darauf hingewiesen, dass dann unbedingt ein Fahrtenbuch geführt werden muss, das die privat gefahrenen Kilometer angibt.",
        explanation: "Richtig ist b). Das Fahrtenbuch muss die 'privat gefahrenen Kilometer' (nichtdienstlich) angeben."
      }
    ]
  },
  {
    id: "lesen-t4-v1-new",
    title: "Lesen Teil 4 (Variante 1 Neu 08.2024)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten? (Neue Version)",
    questions: [
      {
        id: "t4-v1-new-q14",
        text: "14. Der Termin der nächsten Sitzung",
        options: [
          "a) findet nach Abstimmung im Herbst statt.",
          "b) muss verlegt werden.",
          "c) wird noch bekannt gegeben."
        ],
        correctAnswer: "a) findet nach Abstimmung im Herbst statt.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 20.06.20XX\nTOP 1 Begrüßung... Als nächster Besprechungstermin wird der 24.09.20XX nach der Urlaubszeit einstimmig festgelegt.",
        explanation: "Richtig ist a). Der 24.09. ist im Herbst."
      },
      {
        id: "t4-v1-new-q15",
        text: "15. Die Firma",
        options: [
          "a) hat ohne Weiteres die Preiserhöhung des Zulieferers akzeptiert.",
          "b) will sich an den höheren Transportkosten gern beteiligen.",
          "c) wird einen neuen Vertragspartner suchen."
        ],
        correctAnswer: "c) wird einen neuen Vertragspartner suchen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 2 Probleme mit einem Zulieferer\nMH berichtet, dass unser südamerikanischer Zulieferer... die Preise für seine Vorprodukte ohne weitere Absprache erhöht und uns in Rechnung gestellt hat... Wir behalten es uns vor... einen für uns günstigeren Zulieferer zu finden.",
        explanation: "Richtig ist c). Die Firma will einen 'günstigeren Zulieferer finden'."
      },
      {
        id: "t4-v1-new-q16",
        text: "16. Die Abteilung Qualitätssicherung",
        options: [
          "a) berichtet von 30 Prozent fehlerhafter Produkte.",
          "b) hat keine Qualitätsprobleme.",
          "c) verzeichnet erste Erfolge."
        ],
        correctAnswer: "c) verzeichnet erste Erfolge.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Zwischenstand Qualitätssicherung\nDies führt seit drei Monaten zu einem messbaren Erfolg.",
        explanation: "Richtig ist c). 'Messbarer Erfolg'."
      },
      {
        id: "t4-v1-new-q17",
        text: "17. Die Mitarbeitenden",
        options: [
          "a) haben mit dem Betriebsrat gesprochen.",
          "b) können alle Überstunden als Freizeit nehmen.",
          "c) müssen zurzeit Mehrarbeit leisten."
        ],
        correctAnswer: "c) müssen zurzeit Mehrarbeit leisten.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Neue Überstundenregelung\nVE dankt allen Mitarbeitenden für die mehrheitliche Bereitschaft, Überstunden zu leisten.",
        explanation: "Richtig ist c). 'Überstunden zu leisten' bedeutet Mehrarbeit."
      },
      {
        id: "t4-v1-new-q18",
        text: "18. Das Fahrtenbuch",
        options: [
          "a) dokumentiert alle gefahrenen Kilometer.",
          "b) enthält nichtdienstliche Autofahrten.",
          "c) wird von allen Mitarbeitern geführt."
        ],
        correctAnswer: "b) enthält nichtdienstliche Autofahrten.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Private Nutzung der Dienstwagen\n...Fahrtenbuch..., das die privat gefahrenen Kilometer angibt.",
        explanation: "Richtig ist b). 'Privat gefahrene Kilometer' sind nichtdienstlich."
      }
    ]
  },

  // --- VARIANTE 2 ---
  {
    id: "lesen-t4-v2",
    title: "Lesen Teil 4 (Variante 2)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v2-q14",
        text: "14. Für neue Werbemaßnahmen",
        options: [
          "a) werden kreative Mitarbeiter gesucht.",
          "b) wird ein Gesamtbetrag von 150.000 € bereitgestellt.",
          "c) wurden Kostenvoranschläge angefragt."
        ],
        correctAnswer: "b) wird ein Gesamtbetrag von 150.000 € bereitgestellt.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 14.02.20XX\n...\nTOP 2 Neue Marketingmaßnahmen\n...Es ist geplant, neue Wege zu gehen... Für alle diese Maßnahmen steht insgesamt ein Budget von 150.000 € zur Verfügung.",
        explanation: "Richtig ist b). Im Text wird ein Budget von 150.000 € für die Maßnahmen genannt."
      },
      {
        id: "t4-v2-q15",
        text: "15. Herr Hamann",
        options: [
          "a) hat bereits ein Konzept vorbereitet.",
          "b) ist dienstrechtlich verhindert.",
          "c) stellt die Resultate seiner Arbeit vor."
        ],
        correctAnswer: "a) hat bereits ein Konzept vorbereitet.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Qualitätsmanagement\nMH hat vor der heutigen Sitzung allen Anwesenden erste Vorschläge zur Verbesserung... zugeschickt... Da MH heute wegen Krankheit nicht an dem Meeting teilnehmen kann...",
        explanation: "Richtig ist a). 'Erste Vorschläge zur Verbesserung' entsprechen einem Konzept, das er bereits zugeschickt (vorbereitet) hat."
      },
      {
        id: "t4-v2-q16",
        text: "16. Die Mittagspause",
        options: [
          "a) ist 30 Minuten lang.",
          "b) wird um 30 Minuten verlängert.",
          "c) wird um 30 Minuten verschoben."
        ],
        correctAnswer: "a) ist 30 Minuten lang.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Anpassung der Pausenzeiten\n...Sie schlägt ein erweitertes Zeitfenster zwischen 11:30 Uhr und 13:00 Uhr vor, in dem eine Mittagspause von 30 Minuten gemacht werden kann.",
        explanation: "Richtig ist a). Die Dauer der Pause beträgt 30 Minuten."
      },
      {
        id: "t4-v2-q17",
        text: "17. Der Standort der neuen Fahrradständer",
        options: [
          "a) wird an der Informationstafel bekanntgegeben.",
          "b) wird dem Betriebsrat mitgeteilt.",
          "c) wird zwischen Tor 2 und 3 geplant."
        ],
        correctAnswer: "a) wird an der Informationstafel bekanntgegeben.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Standorte der neuen Fahrradständer\n...Dementsprechend werden der Lageplan überarbeitet... und am Schwarzen Brett des Betriebsrats aushängen.",
        explanation: "Richtig ist a). Das 'Schwarze Brett' ist die Informationstafel."
      },
      {
        id: "t4-v2-q18",
        text: "18. Frau Schlosser",
        options: [
          "a) macht Frau Schmidt ein Geschenk.",
          "b) verlässt das Unternehmen.",
          "c) wird von Frau Meier vertreten."
        ],
        correctAnswer: "c) wird von Frau Meier vertreten.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 6 Sonstiges\nDie Assistentin der Geschäftsleitung, Frau Schlosser, verabschiedet sich in den Mutterschutz... Ansprechpartnerin bis zu ihrer Rückkehr wird für alle ab sofort Frau Meier...",
        explanation: "Richtig ist c). Frau Meier ist die Ansprechpartnerin bis zur Rückkehr, also die Vertretung."
      }
    ]
  },

  // --- VARIANTE 3 ---
  {
    id: "lesen-t4-v3",
    title: "Lesen Teil 4 (Variante 3)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v3-q14",
        text: "14. Bei der Sitzung wird",
        options: [
          "a) das Protokoll der letzten Besprechung geändert.",
          "b) die Tagesordnung genehmigt.",
          "c) über Personalthemen gesprochen."
        ],
        correctAnswer: "c) über Personalthemen gesprochen.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 19.11.20XX\n...\nTOP 2 Personal\nDie Kundenbetreuung ist aktuell unterbesetzt... Auch in der Personalabteilung herrscht hoher Krankenstand.",
        explanation: "Richtig ist c). TOP 2 befasst sich explizit mit 'Personal'."
      },
      {
        id: "t4-v3-q15",
        text: "15. Einige Mitarbeiter machen Überstunden,",
        options: [
          "a) da andere Urlaub machen.",
          "b) obwohl sie krank sind.",
          "c) weil viele Kollegen krank sind."
        ],
        correctAnswer: "c) weil viele Kollegen krank sind.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 2 Personal\n...weil viele Kollegen krank sind. Auch in der Personalabteilung herrscht hoher Krankenstand... Aufgrund des hohen Krankenstands mussten einige Kollegen in den letzten Monaten besonders viele Überstunden machen.",
        explanation: "Richtig ist c). 'Aufgrund des hohen Krankenstands... Überstunden'."
      },
      {
        id: "t4-v3-q16",
        text: "16. KM (Kurt Meichsner)",
        options: [
          "a) ist Wettbewerber der Firma.",
          "b) möchte sein Konzept besprechen.",
          "c) plant eine Rabattaktion im Frühling."
        ],
        correctAnswer: "b) möchte sein Konzept besprechen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Kundenbindung, Rabattaktion\nKM hat hierfür bereits einen ersten Entwurf für ein Konzept ausgearbeitet... Konzept in einer kleineren Runde zu diskutieren.",
        explanation: "Richtig ist b). KM hat ein Konzept ausgearbeitet und will es diskutieren."
      },
      {
        id: "t4-v3-q17",
        text: "17. Die Firma",
        options: [
          "a) besucht die Frühjahrsmesse regelmäßig.",
          "b) braucht Hilfe bei der Standgestaltung.",
          "c) lässt gerade Broschüren drucken."
        ],
        correctAnswer: "c) lässt gerade Broschüren drucken.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Vorbereitungen der Messe\n...Messeauftritt sind bereits im Druck [Broschüren].",
        explanation: "Richtig ist c). 'Auch die Broschüren zu unserem Messeauftritt sind bereits im Druck'."
      },
      {
        id: "t4-v3-q18",
        text: "18. Persönliche Gegenstände",
        options: [
          "a) können nicht in der Küche bleiben.",
          "b) sollen am Donnerstag mitgenommen werden.",
          "c) sollen weggeworfen werden."
        ],
        correctAnswer: "a) können nicht in der Küche bleiben.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 6 Sonstiges (oder 5 in anderen Versionen)\n...dass die Teeküche Montag... gestrichen... Küche dafür komplett ausgeräumt... persönliche Gegenstände... mitnehmen. Ansonsten werden diese durch AW entsorgt.",
        explanation: "Richtig ist a). Sie müssen raus (mitgenommen) werden, sonst werden sie entsorgt."
      }
    ]
  },

  // --- VARIANTE 4 ---
  {
    id: "lesen-t4-v4",
    title: "Lesen Teil 4 (Variante 4)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v4-q14",
        text: "14. Die neue Werbestrategie",
        options: [
          "a) beinhaltet ein Video über die Produktionsabläufe.",
          "b) ist wegen der schlechten Verkaufszahlen notwendig.",
          "c) lässt sich sehr schnell und kostengünstig umsetzen."
        ],
        correctAnswer: "b) ist wegen der schlechten Verkaufszahlen notwendig.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 15.04.2003\n...\nTOP 2 Neue Werbemaßnahmen\nJM berichtet, dass die Marketingabteilung eine neue Werbestrategie entwickelt hat, um die Verkaufszahlen wieder zu verbessern.",
        explanation: "Richtig ist b). Ziel ist es, 'die Verkaufszahlen wieder zu verbessern', was impliziert, dass sie aktuell schlecht sind."
      },
      {
        id: "t4-v4-q15",
        text: "15. Die Reinigungsfirma",
        options: [
          "a) hält sich nicht an die vereinbarten Putzzeiten.",
          "b) putzt die Büros der Firma nicht regelmäßig.",
          "c) wird den Vertrag demnächst kündigen."
        ],
        correctAnswer: "a) hält sich nicht an die vereinbarten Putzzeiten.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Beschwerden über schlecht geputzte Büros\n...Dazu kommt, dass die Reinigungskräfte bei Eintreffen der Mitarbeiter gegen 9 Uhr noch anwesend sind, obwohl die Reinigungsarbeiten bis 8.30 Uhr abgeschlossen sein sollten.",
        explanation: "Richtig ist a). Sie sind nach 8.30 Uhr noch da, halten also die Zeiten nicht ein."
      },
      {
        id: "t4-v4-q16",
        text: "16. Die Fortbildung für Ersthelfer",
        options: [
          "a) ist nur mit begrenzter Teilnehmerzahl möglich.",
          "b) müssen die Teilnehmer nur einmal absolvieren.",
          "c) wird beim Deutschen Roten Kreuz veranstaltet."
        ],
        correctAnswer: "a) ist nur mit begrenzter Teilnehmerzahl möglich.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Fortbildung der Ersthelfer\n...Jonas Braun weist allerdings darauf hin, dass die Teilnehmerzahl auf Acht Personen beschränkt ist.",
        explanation: "Richtig ist a). Die Zahl ist auf acht Personen beschränkt."
      },
      {
        id: "t4-v4-q17",
        text: "17. Das Jobticket",
        options: [
          "a) soll zu 60 Prozent finanziert werden.",
          "b) kann in der Personalabteilung beantragt werden.",
          "c) wird ab nächsten Monat eingeführt."
        ],
        correctAnswer: "b) kann in der Personalabteilung beantragt werden.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Einführung eines Jobtickets\n...Antragsformulare sind bei JS [Personal]. Er steht auch für Fragen zur Verfügung.",
        explanation: "Richtig ist b). JS (Leitung Personal) gibt die Formulare aus."
      },
      {
        id: "t4-v4-q18",
        text: "18. Der Streik in Litauen",
        options: [
          "a) dauert immer noch an.",
          "b) fand landesweit statt.",
          "c) führte zu Lieferproblemen."
        ],
        correctAnswer: "c) führte zu Lieferproblemen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 6 Sonstiges\nTK berichtet, dass sich die Lieferzeiten unseres Zulieferers wieder normalisiert haben. Die Ursache der Verzögerungen war ein Mitarbeiterstreik in der Partnerfirma in Litauen...",
        explanation: "Richtig ist c). Der Streik war die 'Ursache der Verzögerungen' (Lieferprobleme)."
      }
    ]
  },

  // --- VARIANTE 5 ---
  {
    id: "lesen-t4-v5",
    title: "Lesen Teil 4 (Variante 5)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v5-q14",
        text: "14. Frau Wagner",
        options: [
          "a) bittet um Änderungen des Protokolls vom 08.01.",
          "b) hat heute noch einen anderen wichtigen Termin.",
          "c) schlägt einen zusätzlichen Tagesordnungspunkt vor."
        ],
        correctAnswer: "b) hat heute noch einen anderen wichtigen Termin.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 05.02.20XX\nTOP 1 Begrüßung... Aufgrund terminlicher Verpflichtungen muss KW [Katrin Wagner] die Sitzung früher verlassen.",
        explanation: "Richtig ist b). 'Terminliche Verpflichtungen' heißt, sie hat einen anderen Termin."
      },
      {
        id: "t4-v5-q15",
        text: "15. Die Geschäftsleitung möchte, dass",
        options: [
          "a) das Thema Krankmeldung nicht mehr besprochen wird.",
          "b) man bei Krankheit spätestens am dritten Tag zum Arzt geht.",
          "c) sich Mitarbeiter bei Krankheit sofort krankschreiben lassen."
        ],
        correctAnswer: "c) sich Mitarbeiter bei Krankheit sofort krankschreiben lassen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Neue Krankmeldungsregelung\n...dass die Mitarbeiter künftig schon ab dem ersten Krankheitstag einen Krankenschein vom Arzt benötigen.",
        explanation: "Richtig ist c). 'Ab dem ersten Krankheitstag' bedeutet sofort."
      },
      {
        id: "t4-v5-q16",
        text: "16. Karl Lehmann soll",
        options: [
          "a) besseres Verpackungsmaterial einkaufen.",
          "b) einen Finanzierungsplan erstellen.",
          "c) Kontakt mit der Spedition aufnehmen."
        ],
        correctAnswer: "b) einen Finanzierungsplan erstellen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 2 Probleme bei der Warenauslieferung\n...Dafür werden KL [Karl Lehmann] und TR zusammen ein Konzept zur Finanzierung erarbeiten.",
        explanation: "Richtig ist b). Ein 'Konzept zur Finanzierung' ist ein Finanzierungsplan."
      },
      {
        id: "t4-v5-q17",
        text: "17. In der Produktionsabteilung",
        options: [
          "a) gibt es derzeit genügend Mitarbeiter.",
          "b) will man alle Zeitarbeiter fest anstellen.",
          "c) wurden zwei neue Mitarbeiter fest eingestellt."
        ],
        correctAnswer: "a) gibt es derzeit genügend Mitarbeiter.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Berichte\n...dass durch die Einstellung von zehn Zeitarbeitskräften... der personelle Engpass für den Moment behoben werden konnte...",
        explanation: "Richtig ist a). Der Engpass ist 'behoben', also gibt es momentan genug Mitarbeiter."
      },
      {
        id: "t4-v5-q18",
        text: "18. In der Kantine",
        options: [
          "a) bekommt man in den kommenden Wochen kein Essen.",
          "b) kann man ab Montag von 12 bis 14 Uhr zu Mittag essen.",
          "c) sollten die Essensmarken abgeschafft werden."
        ],
        correctAnswer: "a) bekommt man in den kommenden Wochen kein Essen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Sanierung der Kantine\n...dass die Küche ab dem kommenden Montag saniert wird und die Kantine infolgedessen voraussichtlich sechs bis acht Wochen geschlossen sein wird.",
        explanation: "Richtig ist a). Die Kantine ist 'geschlossen', also gibt es kein Essen."
      }
    ]
  },

  // --- VARIANTE 6 ---
  {
    id: "lesen-t4-v6",
    title: "Lesen Teil 4 (Variante 6)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v6-q14",
        text: "14. Frau Bruhns",
        options: [
          "a) arbeitet seit einigen Wochen in der Buchhaltung.",
          "b) bezahlt die Gehälter der Mitarbeiter*innen.",
          "c) nimmt bald ihre Tätigkeit auf."
        ],
        correctAnswer: "a) arbeitet seit einigen Wochen in der Buchhaltung.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 27.08.20XX\n...\nTOP 1 Begrüßung... GS eröffnet die Sitzung, begrüßt alle Anwesenden und stellt den Kolleg*innen Hilde Bruhns vor, die seit dem 1. August in der Abteilung Buchhaltung für die Auszahlung der Gehälter etc. zuständig ist.",
        explanation: "Richtig ist a). Das Protokoll ist vom 27.08., sie arbeitet seit dem 1. August (einige Wochen)."
      },
      {
        id: "t4-v6-q15",
        text: "15. Der Erste-Hilfe-Kurs",
        options: [
          "a) findet jeden Freitag statt.",
          "b) ist für alle Mitarbeiter*innen verpflichtend.",
          "c) wird vom Roten Kreuz durchgeführt."
        ],
        correctAnswer: "c) wird vom Roten Kreuz durchgeführt.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 2 Erste-Hilfe-Kurs\n...TK hat bereits mit dem Roten Kreuz gesprochen. Es wäre möglich, dort kurzfristig einen solchen Kurs an zwei Freitagsterminen zu buchen.",
        explanation: "Richtig ist c). Das 'Rote Kreuz' wird als Anbieter genannt."
      },
      {
        id: "t4-v6-q16",
        text: "16. Homeoffice",
        options: [
          "a) erfordert die Anschaffung neuer Arbeitsgeräte.",
          "b) verringert die Arbeitszeit der Mitarbeitenden.",
          "c) wird von vielen Mitarbeitenden gewünscht."
        ],
        correctAnswer: "c) wird von vielen Mitarbeitenden gewünscht.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Homeoffice\nBT stellt dar, dass immer wieder Mitarbeiter*innen den Wunsch an sie herantragen, den einen oder anderen Tag in der Woche von zu Hause aus zu arbeiten...",
        explanation: "Richtig ist c). Mitarbeiter tragen den 'Wunsch' heran."
      },
      {
        id: "t4-v6-q17",
        text: "17. In der Abteilung Buchhaltung",
        options: [
          "a) gibt es zu viele Beschäftigte.",
          "b) sind viele Kolleg*innen erkrankt.",
          "c) soll eine Stelle ausgeschrieben werden."
        ],
        correctAnswer: "c) soll eine Stelle ausgeschrieben werden.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Personelle Engpässe in der Buchhaltung\n...sodass das verbleibende Kolleg*innen viele Überstunden machen müssen... Er plant, eine weitere Mitarbeiterin oder ein weiteren Mitarbeiter einzustellen.",
        explanation: "Richtig ist c). 'Einstellen' bedeutet, eine Stelle auszuschreiben."
      },
      {
        id: "t4-v6-q18",
        text: "18. Der Betriebsausflug wird",
        options: [
          "a) für den ganzen Tag geplant.",
          "b) jedes Jahr von den gleichen Personen organisiert.",
          "c) zum besseren Kennenlernen der Kolleg*innen genutzt."
        ],
        correctAnswer: "a) für den ganzen Tag geplant.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Betriebsausflug\n...morgens um 9.00 Uhr vor dem Haupteingang... Die Rückkehr zur Firma ist für 19.00 Uhr gleichen Tag vorgesehen.",
        explanation: "Richtig ist a). Von 9.00 bis 19.00 Uhr ist praktisch der 'ganze Tag'."
      }
    ]
  },

  // --- VARIANTE 7 ---
  {
    id: "lesen-t4-v7",
    title: "Lesen Teil 4 (Variante 7)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v7-q14",
        text: "14. Bei der Sitzung wird",
        options: [
          "a) das Protokoll der letzten Besprechung geändert.",
          "b) die Tagesordnung genehmigt.",
          "c) über Personalthemen gesprochen."
        ],
        correctAnswer: "b) die Tagesordnung genehmigt.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 15.01.20XX\nTOP 1... Danach erkundigt sich... ob noch zusätzliche Themen... Hierzu gibt es keine Kommentare und damit gilt die Tagesordnung als genehmigt.",
        explanation: "Richtig ist b). 'Tagesordnung als genehmigt'."
      },
      {
        id: "t4-v7-q15",
        text: "15. Um Kosten zu sparen,",
        options: [
          "a) sollen einige Empfangsmitarbeiter*innen in ein Call-Center wechseln.",
          "b) werden die Aufgaben der Mitarbeitenden am Empfang neu festgelegt.",
          "c) wird der Empfang demnächst geschlossen."
        ],
        correctAnswer: "b) werden die Aufgaben der Mitarbeitenden am Empfang neu festgelegt.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 2 Kosteneinsparungen\n...Durch die so gewonnene Zeitersparnis am Empfang können Mitarbeiter*innen von dort flexibler eingesetzt werden...",
        explanation: "Richtig ist b). Aufgaben werden neu verteilt/flexibler eingesetzt."
      },
      {
        id: "t4-v7-q16",
        text: "16. Der Lagerbestand muss",
        options: [
          "a) an die Produktion angepasst werden.",
          "b) dauerhaft ausgebaut werden.",
          "c) kurzfristig reduziert werden."
        ],
        correctAnswer: "a) an die Produktion angepasst werden.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Lagebericht Produktion\n...Das Lagerungsmanagement ist optimierbar, d.h., dass sowohl zu hohe als auch niedrige Lagermengen vermieden werden müssen...",
        explanation: "Richtig ist a). Optimierung/Vermeidung von zu hoch/niedrig bedeutet Anpassung an den Bedarf (Produktion)."
      },
      {
        id: "t4-v7-q17",
        text: "17. Der Betriebsarzt wird",
        options: [
          "a) mit Dr. Mertens zusammenarbeiten.",
          "b) zukünftig selbstständig arbeiten.",
          "c) zum Jahresende entlassen."
        ],
        correctAnswer: "b) zukünftig selbstständig arbeiten.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 4 Kündigung des Betriebsarztes\n...dass unser Betriebsarzt die Firma zum Jahresende verlässt, da er eine eigene Praxis eröffnen will.",
        explanation: "Richtig ist b). 'Eigene Praxis eröffnen' bedeutet selbstständig arbeiten."
      },
      {
        id: "t4-v7-q18",
        text: "18. Die betriebliche Altersvorsorge",
        options: [
          "a) kann bei einem vereinbarten Termin besprochen werden.",
          "b) nehmen viele Mitarbeiter*innen an.",
          "c) wird neu in der Firma eingeführt."
        ],
        correctAnswer: "a) kann bei einem vereinbarten Termin besprochen werden.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Betriebliche Altersvorsorge\n...Zusätzlich bietet die Versicherungsgesellschaft immer donnerstags eine gesonderte Sprechstunde an, zu der man sich aber anmelden muss.",
        explanation: "Richtig ist a). 'Anmelden muss' bedeutet Termin vereinbaren."
      }
    ]
  },
  
  // --- VARIANTE 9 ---
  {
    id: "lesen-t4-v9",
    title: "Lesen Teil 4 (Variante 9)",
    module: ModuleType.LESEN,
    subType: "Teil 4",
    instruction: "Lesen Sie den Text und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?",
    questions: [
      {
        id: "t4-v9-q14",
        text: "14. Das Protokoll",
        options: [
          "a) der letzten Sitzung ist nach Überarbeitung genehmigt.",
          "b) nennt die Teilnehmer der Januar-Sitzung.",
          "c) wird heute von Frau Schäfer geschrieben."
        ],
        correctAnswer: "c) wird heute von Frau Schäfer geschrieben.",
        points: 5,
        part: "Teil 4",
        contextText: "Protokoll 19. Februar 20XX\nProtokollantin: Volha Schäfer",
        explanation: "Richtig ist c). Volha Schäfer ist als Protokollantin aufgeführt."
      },
      {
        id: "t4-v9-q15",
        text: "15. Die neue Fertigungsanlage",
        options: [
          "a) kommt in die Werkshalle IV.",
          "b) steht in einem Neubau.",
          "c) wird in Italien gebaut."
        ],
        correctAnswer: "c) wird in Italien gebaut.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 2 Stand des Projekts „Fertigungsanlage“\n...Auftrag an eine Firma aus Italien... Fertigungsanlage in Italien begonnen.",
        explanation: "Richtig ist c). 'Herstellung der Fertigungsanlage in Italien begonnen'."
      },
      {
        id: "t4-v9-q16",
        text: "16. Metallkästen und Metallgehäuse",
        options: [
          "a) lassen sich nur in Deutschland verkaufen.",
          "b) sind eine Belastung für die Produktion.",
          "c) zeigen steigende Verkaufszahlen."
        ],
        correctAnswer: "c) zeigen steigende Verkaufszahlen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 3 Berichte\n...Metallgehäuse für den Hochbau zeigen sehr gute Verkaufszahlen.",
        explanation: "Richtig ist c). 'Sehr gute Verkaufszahlen'."
      },
      {
        id: "t4-v9-q17",
        text: "17. Das Update der Software",
        options: [
          "a) erfordert ein neues Computersystem.",
          "b) schließt einen eintägigen Workshop mit ein.",
          "c) wird am Freitag installiert."
        ],
        correctAnswer: "c) wird am Freitag installiert.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 5 Update der Software\nWL spielt am kommenden Freitag ab 19 Uhr ein Software-Update...",
        explanation: "Richtig ist c). 'Freitag ab 19 Uhr'."
      },
      {
        id: "t4-v9-q18",
        text: "18. Die Geschäftsführerin",
        options: [
          "a) berichtet über Ort und Termin eines Sommerfests.",
          "b) erwartet eine genaue Planung des Sommerfests.",
          "c) möchte zum Sommerfest Kunden und Lieferanten einladen."
        ],
        correctAnswer: "c) möchte zum Sommerfest Kunden und Lieferanten einladen.",
        points: 5,
        part: "Teil 4",
        contextText: "TOP 6 Sonstiges\n...Alle wichtigen Kunden und großen Lieferanten werden eingeladen.",
        explanation: "Richtig ist c). Einladung an Kunden und Lieferanten."
      }
    ]
  }
];