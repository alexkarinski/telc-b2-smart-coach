import { Exercise, ModuleType } from "./types";

export const EXERCISES_TEIL_2: Exercise[] = [
  // --- VARIANTE 1 ---
  {
    id: "lesen-t2-v1-text1",
    title: "Lesen Teil 2 (Variante 1 - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v1-t1-q6",
        text: "6. Der Firmenausweis hat neben der Arbeitszeiterfassung auch andere Funktionen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nZugangskontrolle und Zeiterfassung\n\nAls Mitarbeiterinnen und Mitarbeiter erhalten Sie zu Beginn Ihres Arbeitsverhältnisses einen Firmenausweis mit Chip-Karte. Dieser berechtigt zum Zugang in das Unternehmensgebäude und dient gleichzeitig zur Erfassung der Arbeitszeit. Außerdem können Sie mit Ihrem Firmenausweis in der Kantine und am Getränkeautomaten bezahlen und das hauseigene Fitnessstudio benutzen.\nNeben den Aufzügen im Erdgeschoss finden Sie ein digitales Zeiterfassungsgerät. Bitte halten Sie beim Betreten und Verlassen des Gebäudes Ihren Firmenausweis in der blau markierte Fläche und vergewissern Sie sich, dass die Zeit des Arbeitsbeginns und Arbeitsendes richtig erfasst wurde. Dies erkennen Sie anhand der Anzeige des Geräts, die Ihnen Ihre monatliche Arbeitszeit anzeigt.\nDie Zeiterfassung berechnet automatisch die reguläre Arbeitszeit sowie eventuelle Über- als auch Minusstunden. Die Personalabteilung richtet Ihnen einen Zugang zu unserem Arbeitskontensystem PersoTime ein. Damit können Sie im Intranet Ihr Arbeitszeitkonto jederzeit einsehen.",
        explanation: "Richtig. Der Text besagt: 'Außerdem können Sie mit Ihrem Firmenausweis in der Kantine und am Getränkeautomaten bezahlen und das hauseigene Fitnessstudio benutzen.'"
      },
      {
        id: "t2-v1-t1-q7",
        text: "7. Überstunden",
        options: ["a) können online eingesehen werden.", "b) sind in der Firma grundsätzlich nicht erlaubt.", "c) werden von der Zeiterfassung nicht registriert."],
        correctAnswer: "a) können online eingesehen werden.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist a). Im Text steht: 'Damit können Sie im Intranet Ihr Arbeitszeitkonto jederzeit einsehen.' Das Intranet ist ein Online-System."
      }
    ]
  },
  {
    id: "lesen-t2-v1-text1-new",
    title: "Lesen Teil 2 (Variante 1 Neu - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v1-new-t1-q6",
        text: "6. Ein Firmenausweis kann innerhalb des Firmengebäudes als Zahlungsmittel verwendet werden. / Der Firmenausweis dient als firmeninternes Zahlungsmittel.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nZugangskontrolle und Zeiterfassung\n\nAls Mitarbeiterinnen und Mitarbeiter erhalten Sie zu Beginn Ihres Arbeitsverhältnisses einen Firmenausweis mit Chip-Karte. Dieser berechtigt zum Zugang in das Unternehmensgebäude und dient gleichzeitig zur Erfassung der Arbeitszeit. Außerdem können Sie mit Ihrem Firmenausweis in der Kantine und am Getränkeautomaten bezahlen und das hauseigene Fitnessstudio benutzen.\nNeben den Aufzügen im Erdgeschoss finden Sie ein digitales Zeiterfassungsgerät. Bitte halten Sie beim Betreten und Verlassen des Gebäudes Ihren Firmenausweis in der blau markierte Fläche und vergewissern Sie sich, dass die Zeit des Arbeitsbeginns und Arbeitsendes richtig erfasst wurde. Dies erkennen Sie anhand der Anzeige des Geräts, die Ihnen Ihre monatliche Arbeitszeit anzeigt.\nDie Zeiterfassung berechnet automatisch die reguläre Arbeitszeit sowie eventuelle Über- als auch Minusstunden. Die Personalabteilung richtet Ihnen einen Zugang zu unserem Arbeitskontensystem PersoTime ein. Damit können Sie im Intranet Ihr Arbeitszeitkonto jederzeit einsehen.",
        explanation: "Richtig. Im Text heißt es: 'Außerdem können Sie mit Ihrem Firmenausweis in der Kantine und am Getränkeautomaten bezahlen'."
      },
      {
        id: "t2-v1-new-t1-q7",
        text: "7. Das persönliche Arbeitszeitkonto",
        options: ["a) ist nur über die Personalabteilung einsehbar.", "b) buchen die Mitarbeiter ihre Stunden selbst. / müssen die Mitarbeiter selbst anlegen.", "c) wird täglich aktualisiert."],
        correctAnswer: "c) wird täglich aktualisiert.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist c). Die Zeiterfassung berechnet 'automatisch' die Zeiten. Dies geschieht in der Regel fortlaufend (täglich) bei jeder Buchung am Gerät."
      }
    ]
  },
  
  // --- VARIANTE 2 ---
  {
    id: "lesen-t2-v2-text1",
    title: "Lesen Teil 2 (Variante 2 - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v2-t1-q6",
        text: "6. Bei Gleitzeit können Mitarbeitende täglich beliebig viele Stunden arbeiten.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nArbeitszeit\n\nIn unserem Unternehmen arbeiten wir nach dem Gleitzeitsystem. Die Kernarbeitszeit ist Montag bis Freitag zwischen 9.00 Uhr und 15.30 Uhr. In dieser Zeit müssen alle Mitarbeitenden anwesend sein. Jede Abwesenheit während dieser Zeit muss genehmigt sein.\nDie tägliche Rahmenarbeitszeit ist von 6.00 Uhr bis 19.30 Uhr. Bitte beachten Sie, dass innerhalb dieses Zeitrahmens maximal acht, in Ausnahmefällen zehn, Stunden täglich gearbeitet werden dürfen.\nAlle Mitarbeitenden müssen beim Betreten und Verlassen des Gebäudes mit der Zeiterfassungskarte am Lesegerät ein- und ausstechen. So wird die tägliche Arbeitszeit auf dem Zeitkonto festgehalten. Dieses kann jederzeit am Lesegerät eingesehen werden.\nBei entsprechendem Guthaben kann einmal pro Monat ein ganzer Arbeitstag (acht Stunden) als Gleitzeittag genommen werden. Zu berücksichtigen ist, dass ein Minuskontostand im Folgemonat auszugleichen ist. Zusätzlich können im Monat Dezember bis zu vier Arbeitstage als Gleitzeittage genommen werden, um sie zwischen Weihnachten und Neujahr zu nutzen, wenn das Arbeitszeitkonto ein ausreichendes Guthaben aufweist.",
        explanation: "Falsch. Im Text steht: 'maximal acht, in Ausnahmefällen zehn, Stunden täglich'. 'Beliebig viele' ist daher nicht korrekt."
      },
      {
        id: "t2-v2-t1-q7",
        text: "7. Durch Gleitzeit ist es den Mitarbeitenden möglich,",
        options: ["a) ein Stundenguthaben aufzubauen.", "b) jeden Monat einige Tage freizunehmen.", "c) täglich mehr als acht Stunden zu arbeiten."],
        correctAnswer: "a) ein Stundenguthaben aufzubauen.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist a). Der Text erwähnt 'Bei entsprechendem Guthaben kann...'. b) ist falsch, da es nur 'einmal pro Monat ein ganzer Arbeitstag' ist. c) ist nur in Ausnahmefällen erlaubt."
      }
    ]
  },
  {
    id: "lesen-t2-v2-text1-new",
    title: "Lesen Teil 2 (Variante 2 Neu - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v2-new-t1-q6",
        text: "6. Die Beschäftigten dürfen mit der Arbeit anfangen, wann sie wollen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Arbeitszeit\n\nDie wöchentliche Arbeitszeit beträgt 40 Stunden - bei einem Arbeitstag von acht Stunden, wobei die Pausen nicht mitgerechnet werden. Es gilt die Fünf-Tage-Woche. Betriebsbedingt ist es möglich, dass Sie bis zu zehn Stunden pro Tag arbeiten. Diese Mehrarbeit ist aber nur in Ausnahmefällen erlaubt und muss innerhalb von sechs Monaten durch entsprechend kürzerer Arbeitstage ausgeglichen werden.\nWir haben flexible Arbeitszeiten. Sie können selbst bestimmen, wann Sie morgens anfangen zu arbeiten und wann Sie aufhören. Zwischen 10 und 15 Uhr, in der sogenannten Kernzeit, müssen Sie jedoch anwesend sein. Gleitzeiten sind zwischen 8 und 10 Uhr und 15 und 17 Uhr. Innerhalb dieser Zeiten können Sie anfangen bzw. aufhören zu arbeiten. Aus betrieblichen Gründen kann der Arbeitgeber die Gleitzeit für eine gewisse Zeit aussetzen.\nUnser elektronisches Zeiterfassungssystem registriert täglich die Zahl der von Ihnen geleisteten Arbeitsstunden auf Ihrem persönlichen Arbeitszeitkonto. Haben Sie in einer Woche mehr als 40 Stunden gearbeitet, sollten Ihre Überstunden bereits vor Monatsende durch weniger Arbeit abgebaut werden. Wenn ein Abbau nicht möglich ist, wird mit der Geschäftsführung eine rasche Lösung besprochen.",
        explanation: "Falsch. Es gibt definierte Gleitzeiten ('zwischen 8 und 10 Uhr') und eine Kernzeit ('10 und 15 Uhr'). Man darf also nicht völlig frei ('wann sie wollen') anfangen."
      },
      {
        id: "t2-v2-new-t1-q7",
        text: "7. Ergibt sich auf einem Arbeitszeitkonto ein Plus,",
        options: ["a) kann der Betrieb den Acht-Stunden-Tag verlängern oder verkürzen.", "b) ist schnellstmöglich ein Ausgleich zu finden.", "c) kann der Betrieb die Gleitzeitregelungen ändern."],
        correctAnswer: "b) ist schnellstmöglich ein Ausgleich zu finden.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist b). Der Text sagt: 'sollten Ihre Überstunden bereits vor Monatsende durch weniger Arbeit abgebaut werden'. Das bedeutet einen zeitnahen Ausgleich."
      }
    ]
  },

  // --- VARIANTE 3 ---
  {
    id: "lesen-t2-v3-text1",
    title: "Lesen Teil 2 (Variante 3 - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v3-t1-q6",
        text: "6. Im ersten halben Jahr nach Neueinstellung ist kein Urlaub möglich.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nUrlaub\n\nJedem Mitarbeiter und jeder Mitarbeiterin in unserem Unternehmen stehen je nach Betriebszugehörigkeit bis zu 26 Tage Urlaub zu.\nDer Urlaub sollte nach Möglichkeit innerhalb des laufenden Kalenderjahres genommen werden. In Ausnahmefällen kann diese Frist bis zum 31.3. des Folgejahres verlängert werden.\nGrundsätzlich besteht der volle Urlaubsanspruch erst nach Ablauf der sechsmonatigen Probezeit. Ein anteiliger Urlaub ist jedoch nach Rücksprache auch bereits während dieser Zeit möglich.\nUrlaubsanträge für das folgende Kalenderjahr sind spätestens bis zum 15.11. mittels des dafür vorgesehenen Formulars beim Abteilungsleiter bzw. seiner Vertretung einzureichen. Den Urlaubswünschen der einzelnen Mitarbeiter wird entsprochen, sofern diese mit den Betriebsabläufen vereinbar sind. Sollten sich die beantragten Urlaubszeiten einzelner Kollegen und Kolleginnen überschneiden, wird nach sozialen Aspekten entschieden.\nDer Abteilungsleiter prüft alle Urlaubsanträge unverzüglich. Sollten die Wünsche der Mitarbeiter unvereinbar sein, wird der Betriebsrat mit dem Ziel der Einigung hinzugezogen.",
        explanation: "Falsch. Der Text sagt: 'Ein anteiliger Urlaub ist jedoch nach Rücksprache auch bereits während dieser Zeit [Probezeit] möglich.'"
      },
      {
        id: "t2-v3-t1-q7",
        text: "7. Urlaubsanträge müssen",
        options: ["a) durch den Betriebsrat genehmigt werden.", "b) in jedem Fall bewilligt werden.", "c) rechtzeitig im Vorjahr gestellt werden."],
        correctAnswer: "c) rechtzeitig im Vorjahr gestellt werden.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist c). Im Text steht: 'Urlaubsanträge für das folgende Kalenderjahr sind spätestens bis zum 15.11. [...] einzureichen.' 15.11. ist im Vorjahr."
      }
    ]
  },

  // --- VARIANTE 4 ---
  {
    id: "lesen-t2-v4-text1",
    title: "Lesen Teil 2 (Variante 4 - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v4-t1-q6",
        text: "6. Die Regelungen am Arbeitsplatz wurden aktualisiert.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nRegelungen am Arbeitsplatz\n\nEs ist wichtig, dass auf dem Betriebsgelände der AKO.KG alle Maßnahmen eingehalten werden, damit Sie sich selbst und andere nicht gefährden. Bei der Bedienung der Maschinen sind die jeweiligen Sicherheitsbestimmungen zu befolgen, angepasst an die neuen Richtlinien laut Arbeitsschutzgesetz vom Januar dieses Jahres. Die Sicherheitsbestimmungen finden Sie in der Anlage zu dieser Willkommensmappe und zusammengefasst auch auf Informationsblättern an den Maschinen.\nSollten Sie hierzu Fragen haben, setzen Sie sich bitte mit unserer Sicherheitsbeauftragten Frau Scholz, Zimmer 122, Durchwahl - 308, in Verbindung.\nDies ist auch die Kontaktstelle für alle Störungen, Unfälle, Brand oder bei für Sie unklaren Situationen. In diesen Fällen kontaktieren Sie bitte auch immer den Empfang, Durchwahl -100.\nNach Verlassen der Werkstätten sind diese immer ordnungsgemäß abzuschließen, damit sich kein Unbefugter den Anlagen und Maschinen nähern kann. Der Arbeitsplatz muss sauber gehalten werden, damit umherliegender Unrat nicht zu einer Gefahrenquelle werden kann. Achten Sie dabei bitte auch auf die vorgeschriebene Trennung der Abfälle in die hierfür vorgesehenen Container im Hof.\nAuf dem gesamten Betriebsgelände ist Filmen und Fotografieren sowie der Konsum von Alkohol und Zigarettenkonsum nicht gestattet.",
        explanation: "Richtig. Der Text erwähnt Sicherheitsbestimmungen, die 'angepasst an die neuen Richtlinien laut Arbeitsschutzgesetz vom Januar dieses Jahres' sind."
      },
      {
        id: "t2-v4-t1-q7",
        text: "7. Auf dem Firmengelände",
        options: ["a) darf kein Abfall entsorgt werden.", "b) ist bei Gefahr Frau Scholz zu informieren.", "c) ist es nicht erlaubt, Nahrungsmittel zu sich zu nehmen."],
        correctAnswer: "b) ist bei Gefahr Frau Scholz zu informieren.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist b). Frau Scholz ist die Kontaktstelle für Störungen, Unfälle, Brand etc. ('bei Gefahr')."
      }
    ]
  },

  // --- VARIANTE 5 ---
  {
    id: "lesen-t2-v5-text1",
    title: "Lesen Teil 2 (Variante 5 - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v5-t1-q6",
        text: "6. Der Fitnessraum ist während der Arbeitszeit geöffnet.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nBetriebssport\n\nSportliche Aktivitäten werden bei uns großgeschrieben. So bieten wir unseren Mitarbeitern im Untergeschoss einen Fitnessraum mit Bodenmatten und mehreren Fitnessgeräten, wie z. B. zwei Indoor-Fahrradtrainern. Dieser ist für alle ganztägig frei und ohne Gebühr zugänglich und kann selbstverständlich auch in den Pausen genutzt werden.\nAußerdem nehmen wir als Unternehmen jedes Jahr am städtischen Firmenlauf teil. Es hat sich die Tradition entwickelt, dass sich die teilnehmenden Kolleginnen und Kollegen gemeinsam in einem wöchentlichen Lauftreff auf dieses Event vorbereiten.\nDieser findet jeden Mittwoch um 17:30 Uhr statt.\nAbwechslungsreich gestaltete Arbeitsplätze in den Büros tragen zur Steigerung der Aktivität auch während der Arbeit bei und wirken den negativen Auswirkungen langen Sitzens entgegen. Alle Schreibtische sind höhenverstellbar, sodass Arbeiten auch im Stehen möglich ist.\nZusätzlich bieten wir das sogenannte „Deskbike“ an - eine Art Büro-Fahrrad, das sich einfach unter einen höhenverstellbaren Schreibtisch rollen lässt. Damit möchten wir Ihnen die Möglichkeit bieten, Ihre Gesundheit zu stärken. Nicht zuletzt macht Bewegung auch einfach Spaß.",
        explanation: "Richtig. Der Text sagt: 'Dieser [Fitnessraum] ist für alle ganztägig frei und ohne Gebühr zugänglich'. 'Ganztägig' schließt die Arbeitszeit ein."
      },
      {
        id: "t2-v5-t1-q7",
        text: "7. Die Mitarbeiter",
        options: ["a) erhalten einen Zuschuss für ein Deskbike.", "b) haben teilweise spezielle Schreibtischen Stehhöhe.", "c) können das hausinterne Fitnessstudio gratis nutzen."],
        correctAnswer: "c) können das hausinterne Fitnessstudio gratis nutzen.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist c). Im Text steht: 'ohne Gebühr zugänglich'."
      }
    ]
  },
  {
    id: "lesen-t2-v5-text1-new",
    title: "Lesen Teil 2 (Variante 5 Neu - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v5-new-t1-q6",
        text: "6. Der Fitnessraum ist während der Arbeitszeit geöffnet.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nBetriebssport\n\nSportliche Aktivitäten werden bei uns großgeschrieben. So bieten wir unseren Mitarbeitern im Untergeschoss einen Fitnessraum mit Bodenmatten und mehreren Fitnessgeräten, wie z. B. zwei Indoor-Fahrradtrainern. Dieser ist für alle ganztägig frei und ohne Gebühr zugänglich und kann selbstverständlich auch in den Pausen genutzt werden.\nAußerdem nehmen wir als Unternehmen jedes Jahr am städtischen Firmenlauf teil. Es hat sich die Tradition entwickelt, dass sich die teilnehmenden Kolleginnen und Kollegen gemeinsam in einem wöchentlichen Lauftreff auf dieses Event vorbereiten.\nDieser findet jeden Mittwoch um 17:30 Uhr statt.\nAbwechslungsreich gestaltete Arbeitsplätze in den Büros tragen zur Steigerung der Aktivität auch während der Arbeit bei und wirken den negativen Auswirkungen langen Sitzens entgegen. Alle Schreibtische sind höhenverstellbar, sodass Arbeiten auch im Stehen möglich ist.\nZusätzlich bieten wir das sogenannte „Deskbike“ an - eine Art Büro-Fahrrad, das sich einfach unter einen höhenverstellbaren Schreibtisch rollen lässt. Damit möchten wir Ihnen die Möglichkeit bieten, Ihre Gesundheit zu stärken.\nNicht zuletzt macht Bewegung auch einfach Spaß.",
        explanation: "Richtig. Der Text ist identisch zur alten Version bezüglich der Öffnungszeiten."
      },
      {
        id: "t2-v5-new-t1-q7",
        text: "7. Die Mitarbeiter",
        options: ["a) haben teilweise spezielle Schreibtische in Stehhöhe.", "b) können das hausinterne Fitnessstudio gratis nutzen.", "c) erhalten einen Zuschuss für ein Deskbike."],
        correctAnswer: "b) können das hausinterne Fitnessstudio gratis nutzen.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist b). 'Ohne Gebühr zugänglich' bedeutet gratis."
      }
    ]
  },
  
  // --- VARIANTE 6 ---
  {
    id: "lesen-t2-v6-text1",
    title: "Lesen Teil 2 (Variante 6 - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v6-t1-q6",
        text: "6. Alle Mitarbeiter müssen ein paar pro Jahr im Einführungstag teilnehmen.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nEinführungstag\n\nUnsere Personalreferentin führt mehrmals jährlich einen Einführungstag für unsere neuen Mitarbeiterinnen und Mitarbeiter durch, an dem diese mit unterschiedlichen Arbeitsbereichen sowie den rechtlichen und organisatorischen Prozessen vertraut gemacht werden. Wir möchten darauf hinweisen, dass die Teilnahme an einer solchen Informationsveranstaltung verpflichtend ist.\nAm Einführungstag besteht außerdem die Möglichkeit, Kolleginnen und Kollegen aus anderen Abteilungen kennenzulernen.\nDie Abteilungsleiter werden bei dieser Gelegenheit in kurzen Worten einen Einblick in den Tätigkeitsbereich ihrer Teams geben.\nDa unser Unternehmen in einem hochsensiblen Bereich arbeitet, haben wir für unser gesamtes Gebäude ein komplexes Sicherheitssystem. Auch dieses stellen wir Ihnen im Rahmen des Orientierungstages im Detail vor. Weitere Einzelheiten zu diesem Tag, wie den Treffpunkt und den Ablauf, finden Sie in dieser Mappe. Eine gesonderte Anmeldung ist nicht erforderlich.\nFür Rückfragen zum Einführungstag steht die Personalabteilung gerne zur Verfügung.",
        explanation: "Falsch. Die Teilnahme ist nur für 'neue Mitarbeiterinnen und Mitarbeiter' verpflichtend, nicht für 'alle' mehrmals pro Jahr."
      },
      {
        id: "t2-v6-t1-q7",
        text: "7. Die Mitarbeiter",
        options: ["a) sollten sich in der Personalabteilung anmelden.", "b) der Abteilungsleiter stellt seine Mitarbeiter vor.", "c) werden neue Mitarbeiter über die Regelungen des Sicherheitssystems informieren."],
        correctAnswer: "c) werden neue Mitarbeiter über die Regelungen des Sicherheitssystems informieren.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Hinweis: Dies entspricht der Markierung in den Prüfungsunterlagen (Variante 6), auch wenn der Text 'wir stellen vor' (Personalabteilung) nahelegt. In neueren Versionen wurde dies korrigiert."
      }
    ]
  },
  {
    id: "lesen-t2-v6-text1-new",
    title: "Lesen Teil 2 (Variante 6 Neu - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben. (Neue Version ab 21.12.2024)",
    questions: [
      {
        id: "t2-v6-new-t1-q6",
        text: "6. Neue Mitarbeiter sollten sich in der Personalabteilung zum Einführungstag anmelden.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Falsch",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nEinführungstag\n\nUnsere Personalreferentin führt mehrmals jährlich einen Einführungstag für unsere neuen Mitarbeiterinnen und Mitarbeiter durch... (gleicher Text wie oben)...\nEine gesonderte Anmeldung ist nicht erforderlich.",
        explanation: "Falsch. Im Text steht ausdrücklich: 'Eine gesonderte Anmeldung ist nicht erforderlich.'"
      },
      {
        id: "t2-v6-new-t1-q7",
        text: "7. Die neuen Mitarbeiter",
        options: ["a) bekommen vom Abteilungsleiter eine Führung durch das Unternehmen.", "b) können an einem Einführungstag im Betrieb teilnehmen.", "c) werden mit den Funktionen des Sicherheitssystems vertraut gemacht."],
        correctAnswer: "c) werden mit den Funktionen des Sicherheitssystems vertraut gemacht.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist c). Der Text sagt: 'Auch dieses [Sicherheitssystem] stellen wir Ihnen im Rahmen des Orientierungstages im Detail vor.'"
      }
    ]
  },

  // --- VARIANTE 7 ---
  {
    id: "lesen-t2-v7-text1",
    title: "Lesen Teil 2 (Variante 7 - Text 1)",
    module: ModuleType.LESEN,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und lösen Sie die Aufgaben.",
    questions: [
      {
        id: "t2-v7-t1-q6",
        text: "6. Die Kantine ist immer geöffnet.",
        options: ["Richtig", "Falsch"],
        correctAnswer: "Richtig",
        points: 5,
        part: "Teil 2",
        contextText: "Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter\n\nEssen in der Kantine\n\nUnser Unternehmen arbeitet an sieben Tagen rund um die Uhr im Drei-Schicht-System. Deshalb steht auch unsere Kantine, die für die Mitarbeiterverpflegung sorgt, täglich 24 Stunden zur Verfügung. Um unnötige Wartezeiten in der Mittagszeit zu vermeiden, wurden in Abstimmung mit dem Betriebsrat aber folgende Essenszeiten für die einzelnen Abteilungen festgelegt : Während das Personal aus der Produktion und dem Lager in der ersten Gruppe von 12.00 bis 13.00 Uhr eine warme Mahlzeit zu sich nehmen kann, folgen die Mitarbeiterinnen und Mitarbeiter der Verwaltung in der zweiten Gruppe von 13.00 bis 14.00 Uhr.\n\nAußerdem können die Mitarbeitenden jederzeit frisch zubereitete Snacks oder kleine Mahlzeiten wie Suppen oder Nudelgerichte aus den in der Kantine aufgestellten Automaten entnehmen. Darüber hinaus befindet sich dort cine Mikrowelle, in der Sie mitgebrachte Speisen erwärmen können. Zusätzliche Automaten für kalte und warme Getränke befinden sich auf jeder Etage in unserem Firmengebäude.",
        explanation: "Richtig. Der Text sagt: 'Deshalb steht auch unsere Kantine ... täglich 24 Stunden zur Verfügung.'"
      },
      {
        id: "t2-v7-t1-q7",
        text: "7. Die Mitarbeiterinnen und Mitarbeiter",
        options: ["a) bekommen in der Kantine keine Getränke.", "b) können nachts in der Kantine essen.", "c) müssen mittags oft sehr lange anstehen."],
        correctAnswer: "b) können nachts in der Kantine essen.",
        points: 5,
        part: "Teil 2",
        contextText: "Siehe Text oben.",
        explanation: "Richtig ist b). Da die Kantine 'rund um die Uhr' (24h) geöffnet ist und Automaten/Mikrowelle bereitstehen, kann man auch nachts essen."
      }
    ]
  }
];
