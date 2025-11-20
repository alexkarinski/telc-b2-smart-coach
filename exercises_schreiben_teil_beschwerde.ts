import { Exercise, ModuleType, QuestionType } from "./types";

// --- TEXT CONSTANTS FOR FULL CONTEXT ---

// V1 PUTZDIENST
const TEXT_V1_KUNDE = `Sehr geehrte Frau Woller,
leider muss ich mich heute mit einer Beschwerde an Sie wenden. Wir haben einen Vertrag mit Ihrer Firma für die Reinigung unserer Büroräume. In diesem Vertrag sind täglich 3 Stunden Arbeit bei uns festgelegt, und zwar von 6.00 Uhr bis 9.00 Uhr morgens.
In den letzten zwei Wochen war unsere Sekretärin einige Male bereits vor 9 Uhr im Büro, von Ihrem Putzdienst war aber niemand zu sehen. Wie kann das sein?
Wenn wir 3 Stunden bezahlen, erwarten wir auch, dass Ihr Personal drei Stunden bei uns arbeitet. Wenn Sie für die Reinigung unserer Räume weniger als die vereinbarte Zeit benötigen, sollten Sie uns darüber informieren, damit wir den Vertrag ändern.
Ich bitte um umgehende Stellungnahme und natürlich die Angleichung der Rechnung an die tatsächlich geleisteten Arbeitsstunden.
Mit freundlichen Grüßen
Theo Lassner`;

const TEXT_V1_INTERN = `Hallo Friederike,
gerade habe ich die angehängte Mail von der Firma Huber GmbH gelesen und bin schockiert. Ich verstehe den Ärger von Herrn Lassner, kann aber kaum glauben, was er da schreibt. Bitte sprich mal mit unseren Leuten und kläre, was da los ist, und antworte dann Herrn Lassner. Es ist ganz wichtig, dass du ihm zusagst, dass so etwas nie wieder vorkommen wird. Gib ihm auch einen Rabatt auf die nächste Rechnung in Höhe von 20 %. Wir dürfen die Firma mit diesem großen Auftrag keinesfalls als Kunden verlieren.
Danke dir und schönen Feierabend!
Gruß Heike

(Zusatzinfo aus Recherche: Grund war, dass das Dienstfahrzeug in Inspektion war und die Mitarbeiter öffentliche Verkehrsmittel nutzen mussten und deshalb früher gehen mussten/später kamen.)`;

// V2 TISCHLAMPE
const TEXT_V2_KUNDE = `Sehr geehrter Herr Richter,
vergangene Woche habe ich bei Ihnen 25 Tischlampen Modell TS 13 150 07 für unsere neuen Büroräume bestellt. Mir wurde telefonisch zugesagt, dass die Lampen noch diese Woche geliefert werden, aber jetzt ist schon Freitagnachmittag und sie sind leider noch immer nicht eingetroffen.
Das ist ärgerlich, da wir am Wochenende unsere Renovierungsarbeiten beenden und die Büros dann vollständig neu einrichten werden. Dazu würden natürlich auch die Lampen gehören, da wir am Montag unseren Bürobetrieb in funktionstüchtigen Räumen wieder aufnehmen wollen. Ich habe bereits mehrfach versucht, Sie telefonisch zu erreichen, und habe Nachrichten auf Ihrem Anrufbeantworter hinterlassen, aber ich wurde leider nicht zurückgerufen. Inzwischen habe ich einen Lieferanten gefunden, der uns kurzfristig andere Tischlampen liefern könnte.
Wenn Ihre Lampen also bis Montagmittag, 13:00 Uhr, nicht bei uns eingetroffen sind, werde ich die Bestellung bei Ihnen stornieren. Ich bitte um eine schnelle Antwort!
Mit freundlichen Grüßen
Evelyn Berger`;

const TEXT_V2_INTERN = `Lieber Herr Klein,
ich habe schon wieder eine Beschwerde einer Kundin vorliegen. Sie hat ihre bestellten Tischlampen nicht bekommen. Bitte antworten Sie Frau Berger und erklären Sie ihr, warum wir im Moment Lieferschwierigkeiten haben.
Versuchen Sie auch, sie davon zu überzeugen, noch bis nächste Woche zu warten und den Auftrag nicht zu stornieren. Bieten Sie ihr außerdem ein ähnliches Modell an, das wir auf Lager haben. Danke!
Herzliche Grüße
Knut Richter`;

// V3 WEBSEITE
const TEXT_V3_KUNDE = `Sehr geehrte Frau Spindler,
vielen Dank für Ihren Entwurf für unsere neue Firmenwebseite. Ich habe ihn gemeinsam mit dem Team gesichtet und dabei ist uns aufgefallen, dass Ihre Agentur die Vorgaben an zwei Stellen leider nicht umgesetzt hat:
Zum einen hatten wir besprochen, dass das Farbschema grau-orange sein sollte. Da statt Grau Blau gewählt wurde, glaube ich, dass es zu einem Missverständnis gekommen ist. Zum anderen sind auf der Seite mit den Ansprechpartnern die Namen eigener Mitarbeiter vertauscht worden. Im Anhang schicke ich Ihnen noch einmal eine Auflistung der Namen mit den dazugehörigen Bildern. Könnten Sie diese beide Punkte bitte bis Anfang nächster Woche nachbessern? Eine kurze Rückmeldung wäre nett.
Mit freundlichen Grüßen
Franz Stiller`;

const TEXT_V3_INTERN = `Hallo Frau Holsten,
ich habe heute Mittag die untenstehende Mail bekommen. Die vertauschten Namen sind unser Fehler und die verbessern wir auch. Bitte bestätigen Sie dem Kunden das. Aber mehr ist nun wirklich nicht drin. Das ist schon das fünfte Mal, dass er Korrekturwünsche hat, obwohl wir uns immer an die Vorgaben gehalten haben. So viele Korrekturen waren nicht vereinbart!
Wenn wir das noch machen sollten, geht das nur gegen zusätzliche Bezahlung. Ich rechne mit 200 (300) € extra. Bitte teilen Sie ihm dies mit und lassen Sie sich von ihm sein Okay geben.
Danke und viele Grüße
Jutta Spindler`;

// V4 SPÜLMASCHINE
const TEXT_V4_KUNDE = `Sehr geehrte Frau Sturm,
vor einer Woche haben wir bei Ihnen eine Spülmaschine für unsere Teeküche gekauft. Sie wurde sehr schnell geliefert und auch gleich eingebaut. Leider muss ich Ihnen heute aber mitteilen, dass sie bereits defekt ist. Beim Spülen ist Wasser ausgelaufen und nun ist unser Parkett beschädigt.
Ich bitte Sie, uns umgehend einen Techniker zu schicken, der das Gerät repariert. Wir brauchen die Spülmaschine spätestens übermorgen, da wir ein großes Meeting unserer Außendienstmitarbeiter haben und viele Personen bewirten müssen.
Außerdem müssen wir einen Teil des Parketts austauschen. Die Kosten dafür werden wir Ihnen in Rechnung stellen. Bitte schicken Sie mir so schnell wie möglich einer Terminvorschlag für die Reparatur und eine Bestätigung der Kostenübernahme. Vielen Dank!
Mit freundlichen Grüßen
Claudio Krüger`;

const TEXT_V4_INTERN = `Hallo Frau Retterstein,
ich habe gerade die unten stehende E-Mail von einem großen Kunden bekommen, der sich beschwert hat. Organisieren Sie doch bitte so schnell wie möglich einen Techniker, der sich die Spülmaschine ansieht, und schreiben Sie Herrn Krüger.
Entschuldigen Sie sich bitte für die Unannehmlichkeiten und sagen Sie ihm zu, dass wir seine Forderungen in seiner E-Mail prüfen werden.
Teilen Sie Herrn Krüger aber bitte vorsorglich mit, dass die Reparatur eventuell nicht sofort durchgeführt werden kann, falls wir Ersatzteile bestellen müssen.
Danke und viele Grüße
Dorothee Sturm`;

// V5 UMZUG
const TEXT_V5_KUNDE = `Sehr geehrte Frau Börne,
am Wochenende ist unser Büro mit Hilfe Ihres Unternehmens von Hanau nach Frankfurt umgezogen. Leider waren wir mit Ihrem Service überhaupt nicht zufrieden.
Ihre Mitarbeiter kamen eine halbe Stunde zu spät und nur zu dritt statt wie vereinbart zu viert. Deshalb dauerte der ganze Umzug natürlich länger als geplant und einige Arbeiten sind auch noch nicht abgeschlossen. Es sind noch nicht alle Möbel aufgebaut, deshalb konnten wir noch nicht unsere Sachen einräumen.
Bitte schicken Sie uns deshalb am Mittwochmorgen noch zwei Personen, die den Möbelaufbau erledigen. Des Weiteren sind Glasplatten zu Bruch gegangen und einige Schränke sind verkratzt. Ich gehe davon aus, dass Ihre Firma die Kosten dafür übernimmt.
Mit freundlichen Grüßen
Thomas Zaun`;

const TEXT_V5_INTERN = `Hallo Frau Kühne,
bitte schauen Sie sich mal die untenstehende E-Mail an.
Da ist wohl was schiefgegangen. Bitte schreiben Sie Herrn Zaun und erklären Sie ihm, warum es zu den Fehlern gekommen ist. Sagen Sie ihm zu, dass am Mittwochmorgen pünktlich zwei Männer da sein werden, die alles fertig machen.
Natürlich übernehmen wir auch die Verantwortung für die entstandenen Schäden. Die Firma hat uns das erste Mal gebucht und ich würde ungern einen negativen Eindruck hinterlassen. Ich verlasse mich auf Sie.
Danke und viele Grüße
Frieda Börne`;

// V6 DER DRUCKER (OLD)
const TEXT_V6_KUNDE_OLD = `Sehr geehrte Frau Aichele,
vorgestern wurde von einem Ihrer Mitarbeiter unser fast neues Druck- und Kopiergerät der Marke Lexios zum dritten Mal innerhalb von zwei Wochen geprüft, da bei diesem immer wieder Papierstaus aufgetreten sind. Gestern kam es schon wieder zu einer Fehlermeldung, was zur Folge hatte, dass wir Unterlagen nicht fristgerecht einreichen konnten. Aus diesem Grund haben wir eine für uns sehr wichtige Ausschreibung verpasst. Von einer Schadensersatzforderung sehen wir vorerst ab, wir fordern Sie aber auf, uns umgehend auf Ihre Kosten ein anderes Gerät zu liefern. Es handelt sich hier nämlich eindeutig um einen technischen Fehler, den wir nicht zu verantworten haben. Die Rechnungen für die drei vorangegangenen Technikereinsätze werden wir natürlich nicht bezahlen.
Ich erwarte Ihre umgehende Rückmeldung.
Mit freundlichen Grüßen
Benno Schmidt`;

const TEXT_V6_INTERN_OLD = `Hallo,
schau dir mal die Mail von der Firma Mova an. Laut unserem Techniker lag der Fehler erneut an der falschen Bedienung des Geräts. Antworte Herrn Schmidt bitte und weise ihn höflich daraufhin, dass die Lösung des Problems nicht in unserer Verantwortung liegt. Gerne kommt noch einmal ein Techniker in die Firma und weist die Mitarbeiter ein. Die Kosten für die Überprüfung des Geräts bleiben die Angelegenheit der Mova GmbH.
Viele Grüße
Sibyl`;

// V6 DER DRUCKER (NEW 01.2025)
const TEXT_V6_KUNDE_NEW = `Sehr geehrter Herr Brenner,
vor drei Tagen hat einer Ihrer Mitarbeiter das neue ABC-Druck-, Kopier- und Faxgerät inspiziert.
Dies war das zweite Mal innerhalb einer Woche, dass beim Versenden eines Faxes ein Fehlerzeichen auftrat. Leider kam gestern wieder eine Fehlermeldung, und wir sollten einige wichtige Unterlagen zum Treffen per Fax verschicken. Wir konnten diese jedoch nicht rechtzeitig versenden. Deshalb haben wir einen für uns sehr wichtigen Deal verloren. Wir sehen derzeit von Schadensersatzansprüchen ab, bitten Sie jedoch, uns umgehend und auf Ihre Kosten ein anderes Gerät zuzusenden.
Offensichtlich handelt es sich hierbei um einen technischen Fehler, für den wir keine Verantwortung übernehmen. Selbstverständlich übernehmen wir auch keine Rechnungen für vorangegangene technische Arbeiten.
Ich hoffe, dass wir schnellstmöglich eine Antwort von Ihnen erhalten.
Mit freundlichen Grüßen
Vala Zeller`;

const TEXT_V6_INTERN_NEW = `Guten Morgen,
Vor einer Stunde erhielt ich diese E-Mail von der Cavone GmbH.
Nach Angaben unseres Technikers lag der Fehler wiederum bei der Cavone GmbH. Bitte antworten Sie Frau Zeller und weisen Sie höflich darauf hin, dass es nicht in unserer Verantwortung liegt, das Problem zu lösen.
Der Techniker kommt gerne wieder ins Unternehmen und führt die Mitarbeiter kostenlos durch den Prozess.
Bitte teilen Sie ihr außerdem mit, dass die Kosten für die Untersuchung des Geräts weiterhin von ihrem Unternehmen, der Cavone GmbH, getragen werden.
Danke und viele Grüße
Paco Brenner`;

// V7 DIE RECHNUNG
const TEXT_V7_KUNDE = `Sehr geehrte Frau Klein,
wir haben Ihre Lieferung wie gewohnt zu unserer vollsten Zufriedenheit erhalten. Alle Artikel entsprechen absolut unseren Vorstellungen.
Leider muss ich Sie darauf hinweisen, dass in der beigelegten Rechnung einige Unstimmigkeiten aufgetreten sind.
Zunächst wurden statt der 100 Stück Pinsel Größe S 200 Stück berechnet. Außerdem wurden 50 Töpfe rote Farbe aufgeführt. Wir hatten aber grüne Farbe bestellt und geliefert bekommen, die preislich niedriger liegt. Wir bitten Sie, dies zu korrigieren. Des Weiteren waren wir verwundert, dass unser üblicher Rabatt von 10 % in dieser Rechnung nicht gewährt wurde. Das ist wahrscheinlich ein Versehen.
Wir bitten um Berichtigung der Rechnung und erneute Zusendung.
Mit freundlichen Grüßen
Joachim Schmidt`;

const TEXT_V7_INTERN = `Hallo,
ich habe heute die unten stehende E-Mail erhalten. Bitte kümmern Sie sich darum und antworten Sie dem Kunden höflich. Die Firma "Meier" ist ein langjähriger Kunde von uns. Wir können es uns nicht leisten, ihn zu verlieren.
Schreiben Sie ihm bitte von unserem Computerproblem und wie wir es gelöst haben. Natürlich bekommt er den Rabatt wie gewohnt.
Vielen Dank.
Anna Hoffner`;

// V8 MANGELHAFTE LIEFERUNG (T-SHIRTS)
const TEXT_V8_KUNDE = `Sehr geehrter Herr Mayer,
leider müssen wir Ihnen mitteilen, dass Ihre Lieferung nicht zu unserer Zufriedenheit ausgefallen ist. Wir müssen zwei Punkte beanstanden. Erstens wurden die Verpackungen der Hosen (Größe M und L) beim Transport beschädigt, sodass der Inhalt verschmutzt ist. In diesem Zustand können wir die Waren auf keinen Fall in den regulären Verkauf geben, sondern sie nur mit einem Rabatt anbieten. Wir halten daher einen Preisnachlass von 60% für angemessen. Des Weiteren teilen wir Ihnen mit, dass von den T-Shirts mit Aufdruck statt der bezahlten 100 Stück nur die Hälfte geliefert wurde. Wegen der beginnenden Sommersaison bitten wir um schnellstmögliche Nachlieferung der fehlenden Stückzahl auf Ihre Kosten spätestens bis zum 10.05. Wir hoffen, dass sich derartige Vorkommnisse in Zukunft vermeiden lassen, und bitten um prompte Erledigung.
Mit freundlichen Grüßen
Matthias Schramm`;

const TEXT_V8_INTERN = `Hallo,
mich erreichte die untenstehende E-Mail. Bitte kümmern Sie sich darum und antworten Sie dem Kunden höflich. Entschuldigen Sie sich für die verschmutzte Ware. Der geforderte Rabatt von 60% ist unverschämt. Bieten Sie ihm eine andere Lösung an. Die Nachlieferung der T-Shirts ist leider wegen unserer Mitarbeitersituation erst bis zum 12.05. möglich. Erklären Sie den Grund.
Vielen Dank
Siegfried Mayer
Teamleiter`;

// V9 PFLANZENLIEFERUNG
const TEXT_V9_KUNDE = `Sehr geehrter Herr Herrmann,
leider müssen wir Ihnen mitteilen, dass Ihre Pflanzen- und Blumenauswahl für unsere letzte Veranstaltung gänzlich unpassend war.
Wie Sie wissen, war das Thema unserer Ausstellung in der vergangenen Woche: „Nachhaltigkeit & Umweltverträglichkeit im Gartenbau – Lokal und Regional“.
Und Sie haben im Eingangsbereich aus dem fernen Ausland importierte exotische Pflanzen platziert, was verständlicherweise zu Beschwerden von Seiten der Besucher geführt hat.
Zudem wollten wir den diesjährigen Umweltpreis zusammen mit Blumensträußen vergeben. Diese waren aber mit Orchideen bestückt. Wie passt das zum Thema „regional“?
In dieser Situation haben wir daher entschieden, kurzfristigen Ersatz für die Sträuße von einem Aussteller zu beschaffen.
Wir bitten Sie, diese zusätzlichen Kosten zu ersetzen.
Solche Vorkommnisse müssen in Zukunft unter allen Umständen vermieden werden.
Wir erwarten Ihre Vorschläge und stehen für ein Gespräch jederzeit zur Verfügung.
Mit freundlichen Grüßen
Gabi Talheim`;

const TEXT_V9_INTERN = `Hallo,
die folgende E-Mail ist gestern bei mir eingegangen. Was war denn da los?
Bitte antworten Sie der Kundin höflich und machen Sie Vorschläge für unsere weitere Zusammenarbeit.
Wir schätzen Frau Talheim als langjährige Kundin und möchten sie deshalb nicht verlieren.
Teilen Sie ihr bitte auch mit, was wir ihr als Entschädigung für die entstandenen Unannehmlichkeiten anbieten.
Vielen Dank und viele Grüße
Michael Herrmann
Teamleiter`;

export const EXERCISES_SCHREIBEN_TEIL_BESCHWERDE: Exercise[] = [
  // --- STRUKTUR TRAINING ---
  {
    id: "schreiben-beschwerde-struktur",
    title: "Training: Struktur einer Beschwerdeantwort",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lernen Sie die Struktur einer Antwort auf eine Beschwerde. Beantworten Sie die Fragen zur richtigen Form.",
    questions: [
      {
        id: "struktur-q1",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "Was gehört in den Betreff?",
        options: [
          "a) Beschwerde über [Thema]",
          "b) Antwort auf Ihre Beschwerde über [Thema]",
          "c) Hallo [Name des Kunden]"
        ],
        correctAnswer: "b) Antwort auf Ihre Beschwerde über [Thema]",
        points: 5,
        part: "Struktur",
        explanation: "Richtig ist b). Der Betreff muss klar machen, worum es geht. Da Sie antworten, schreiben Sie 'Antwort auf Ihre Beschwerde/Reklamation über...' + Akkusativ/Genitiv."
      },
      // ... (Rest of structure questions as defined previously, kept brief here for space)
      {
        id: "struktur-q3",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "Wie entschuldigen Sie sich richtig?",
        options: [
          "a) Es tut uns leid, aber das war nicht unser Fehler.",
          "b) Wir bedauern sehr, dass Sie nicht zufrieden waren.",
          "c) Entschuldigung, dumm gelaufen."
        ],
        correctAnswer: "b) Wir bedauern sehr, dass Sie nicht zufrieden waren.",
        points: 5,
        part: "Struktur",
        explanation: "Richtig ist b). Eine formelle Entschuldigung ist wichtig: 'Wir bedauern sehr...' oder 'Es tut uns aufrichtig leid, dass...'."
      }
    ]
  },

  // --- VARIANTE 1: PUTZDIENST ---
  {
    id: "schreiben-beschwerde-v1",
    title: "L&S Beschwerde: Putzdienst (Variante 1)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20, und schreiben Sie dann die Antwort an den Kunden.",
    questions: [
      {
        id: "ls-v1-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Herr Lassner",
        options: [
          "a) möchte seine Rechnung nicht begleichen.",
          "b) ist mit der Sauberkeit im Büro nicht zufrieden.",
          "c) will nur die geleisteten Stunden bezahlen."
        ],
        correctAnswer: "c) will nur die geleisteten Stunden bezahlen.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V1_KUNDE,
        explanation: "Richtig ist c). Herr Lassner fordert 'die Angleichung der Rechnung an die tatsächlich geleisteten Arbeitsstunden'."
      },
      {
        id: "ls-v1-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Der Putzdienst (Neu 21.12.24)",
        options: [
          "a) hält die Arbeitszeit nicht ein.",
          "b) hat zu wenig Zeit.",
          "c) möchte einen neuen Vertrag."
        ],
        correctAnswer: "a) hält die Arbeitszeit nicht ein.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V1_KUNDE,
        explanation: "Richtig ist a). Das Personal arbeitet 'weniger als die vereinbarte Zeit'."
      },
      {
        id: "ls-v1-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Herrn Lassner.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V1_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V1_INTERN}`,
        structureHelp: "Sehr geehrter Herr Lassner,\n\nvielen Dank für Ihre Nachricht. Wir bedauern sehr, dass...\n\nIch habe sofort Rücksprache mit unseren Mitarbeitern gehalten. Der Grund für die verkürzte Arbeitszeit war, dass unser Dienstfahrzeug zur Inspektion musste und die Mitarbeiter deshalb auf öffentliche Verkehrsmittel angewiesen waren. Dadurch mussten sie 15 Minuten früher los.\n\nWir versichern Ihnen, dass sich so eine Situation nicht wiederholen wird. Als Entschädigung möchten wir Ihnen einen Rabatt von 20% auf die nächste Rechnung anbieten.\n\nMit freundlichen Grüßen\nFriederike Baumann",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 2: TISCHLAMPE ---
  {
    id: "schreiben-beschwerde-v2",
    title: "L&S Beschwerde: Tischlampe (Variante 2)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v2-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Frau Berger (Neu 03/21)",
        options: [
          "a) beschwert sich über die Qualität des Produktes.",
          "b) hat eine fehlerhafte Lieferung erhalten.",
          "c) wartet dringend auf die Lieferung."
        ],
        correctAnswer: "c) wartet dringend auf die Lieferung.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V2_KUNDE,
        explanation: "Richtig ist c). Die Lampen sind 'noch immer nicht eingetroffen' und sie werden für die Büroeinrichtung am Montag dringend benötigt."
      },
      {
        id: "ls-v2-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Die Renovierungsarbeiten",
        options: [
          "a) stehen kurz bevor.",
          "b) verzögern sich.",
          "c) sollen zeitnah abgeschlossen werden."
        ],
        correctAnswer: "c) sollen zeitnah abgeschlossen werden.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V2_KUNDE,
        explanation: "Richtig ist c). Sie sollen am Wochenende 'beendet' (abgeschlossen) werden, damit Montag der Betrieb startet."
      },
      {
        id: "ls-v2-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Frau Berger.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V2_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V2_INTERN}`,
        structureHelp: "Sehr geehrte Frau Berger,\n\nvielen Dank für Ihre E-Mail. Wir entschuldigen uns aufrichtig für die Verspätung.\n\nDer Grund für die Verzögerung ist ein unvorhergesehener Engpass bei unserem Lieferanten. Die Lampen werden voraussichtlich erst Ende nächster Woche bei uns eintreffen.\n\nDa wir Sie als Kundin sehr schätzen, möchten wir Ihnen anbieten, bis nächste Woche zu warten. Als Alternative haben wir ein sehr ähnliches Modell vorrätig, welches wir sofort versenden könnten.\n\nWir hoffen, dass Sie den Auftrag nicht stornieren.\n\nMit freundlichen Grüßen\nLukas Klein",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 3: WEBSEITE ---
  {
    id: "schreiben-beschwerde-v3",
    title: "L&S Beschwerde: Webseite (Variante 3)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v3-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Herr Stiller",
        options: [
          "a) ist mit dem Entwurf der Agentur nicht einverstanden.",
          "b) möchte, dass Frau Spindler sich einen Entwurf ansieht.",
          "c) möchte wissen, wer den Entwurf überarbeiten kann."
        ],
        correctAnswer: "a) ist mit dem Entwurf der Agentur nicht einverstanden.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V3_KUNDE,
        explanation: "Richtig ist a). Er nennt konkrete Punkte, die 'nicht umgesetzt' wurden (Fehler)."
      },
      {
        id: "ls-v3-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Die Agentur sagt, dass sie",
        options: [
          "a) Änderungen nur gegen Aufpreis macht.",
          "b) keine Fehler gemacht hat.",
          "c) keine Vorgaben von Herrn Stiller hatte."
        ],
        correctAnswer: "a) Änderungen nur gegen Aufpreis macht.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V3_INTERN,
        explanation: "Richtig ist a). 'Nur gegen zusätzliche Bezahlung' bedeutet gegen Aufpreis."
      },
      {
        id: "ls-v3-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Herrn Stiller.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V3_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V3_INTERN}`,
        structureHelp: "Sehr geehrter Herr Stiller,\n\nvielen Dank für Ihre Rückmeldung. Wir bedauern die entstandenen Unannehmlichkeiten.\n\nBezüglich der vertauschten Namen haben Sie völlig recht, das war unser Fehler. Wir werden dies selbstverständlich sofort und kostenlos korrigieren.\n\nWas das Farbschema betrifft, haben wir uns jedoch an die ursprünglichen Vorgaben gehalten. Da dies bereits die fünfte Korrekturrunde ist, müssten wir für diese Änderung einen Mehraufwand berechnen. Die Kosten hierfür würden 200 € betragen.\n\nBitte geben Sie uns Bescheid, ob wir die Änderung vornehmen sollen.\n\nMit freundlichen Grüßen\nMonika Holsten",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 4: SPÜLMASCHINE ---
  {
    id: "schreiben-beschwerde-v4",
    title: "L&S Beschwerde: Spülmaschine (Variante 4)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v4-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Der Kunde",
        options: [
          "a) fordert eine neue Spülmaschine.",
          "b) hat einen Wasserschaden in der Küche.",
          "c) beschwert sich über die Reparaturarbeiten."
        ],
        correctAnswer: "b) hat einen Wasserschaden in der Küche.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V4_KUNDE,
        explanation: "Richtig ist b). 'Wasser ausgelaufen... Parkett beschädigt' bedeutet einen Wasserschaden."
      },
      {
        id: "ls-v4-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Die Firma Küchenbedarf soll",
        options: [
          "a) die Reparatur der Spülmaschine in Rechnung stellen.",
          "b) innerhalb von zwei Tagen die Spülmaschine reparieren.",
          "c) das Parkett in der Teeküche umgehend ersetzen."
        ],
        correctAnswer: "b) innerhalb von zwei Tagen die Spülmaschine reparieren.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V4_KUNDE,
        explanation: "Richtig ist b). 'Spätestens übermorgen' entspricht 'innerhalb von zwei Tagen'."
      },
      {
        id: "ls-v4-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Herrn Krüger.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V4_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V4_INTERN}`,
        structureHelp: "Sehr geehrter Herr Krüger,\n\nvielen Dank für Ihre E-Mail. Wir bedauern sehr, dass Sie Probleme mit der neuen Spülmaschine haben und dadurch ein Wasserschaden entstanden ist.\n\nSelbstverständlich schicken wir Ihnen umgehend einen Techniker vorbei, um den Schaden zu begutachten. Wir werden Ihre Forderungen bezüglich der Reparatur und der Kostenübernahme prüfen.\n\nBitte beachten Sie jedoch, dass wir die Reparatur möglicherweise nicht sofort durchführen können, falls Ersatzteile bestellt werden müssen. Wir bemühen uns aber um eine schnelle Lösung.\n\nMit freundlichen Grüßen\nAnika Retterstein",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 5: UMZUG ---
  {
    id: "schreiben-beschwerde-v5",
    title: "L&S Beschwerde: Umzug (Variante 5)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v5-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Herr Zaun beschwert sich über",
        options: [
          "a) die Mitarbeiter der Firma. / die Verzögerung der Lieferung.",
          "b) die Qualität von Produkten.",
          "c) eine ausbleibende Lieferung."
        ],
        correctAnswer: "a) die Mitarbeiter der Firma. / die Verzögerung der Lieferung.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V5_KUNDE,
        explanation: "Richtig ist a). Er beschwert sich über das Zuspätkommen und die zu geringe Anzahl der Mitarbeiter."
      },
      {
        id: "ls-v5-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Herr Zaun",
        options: [
          "a) ist nach Hanau gezogen.",
          "b) musste seinen Umzug verschieben.",
          "c) verlangt Schadensersatz."
        ],
        correctAnswer: "c) verlangt Schadensersatz.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V5_KUNDE,
        explanation: "Richtig ist c). Er möchte, dass die Firma die Kosten für die Schäden (Glasplatten, Schränke) übernimmt."
      },
      {
        id: "ls-v5-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Herrn Zaun.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V5_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V5_INTERN}`,
        structureHelp: "Sehr geehrter Herr Zaun,\n\nvielen Dank für Ihre Nachricht. Wir entschuldigen uns aufrichtig für die Unannehmlichkeiten bei Ihrem Umzug.\n\nDer Grund für die Verspätung und das fehlende Personal war leider ein kurzfristiger krankheitsbedingter Ausfall.\n\nSelbstverständlich übernehmen wir die Kosten für die entstandenen Schäden an Ihren Möbeln. Bitte senden Sie uns hierfür Fotos oder Belege.\n\nZudem schicken wir Ihnen am Mittwochmorgen pünktlich zwei Mitarbeiter vorbei, die die restlichen Arbeiten erledigen werden.\n\nMit freundlichen Grüßen\nMonika Kühne",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 6: DER DRUCKER (OLD) ---
  {
    id: "schreiben-beschwerde-v6-old",
    title: "L&S Beschwerde: Der Drucker (Variante 6 - Alt)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v6-old-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Das Gerät",
        options: [
          "a) ist erst seit Kurzem im Einsatz.",
          "b) muss noch mal überprüft werden.",
          "c) wurde immer richtig bedient."
        ],
        correctAnswer: "a) ist erst seit Kurzem im Einsatz.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V6_KUNDE_OLD,
        explanation: "Richtig ist a). 'fast neues Druck- und Kopiergerät'."
      },
      {
        id: "ls-v6-old-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Die Firma Copyprofi (Alt)",
        options: [
          "a) besteht auf der Bezahlung der Rechnungen.",
          "b) repariert den Kopierer noch einmal kostenfrei.",
          "c) tauscht das Gerät schnellstmöglich aus."
        ],
        correctAnswer: "a) besteht auf der Bezahlung der Rechnungen.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V6_INTERN_OLD,
        explanation: "Richtig ist a). 'Die Kosten... bleiben Angelegenheit der Mova GmbH'."
      },
      {
        id: "ls-v6-old-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Herrn Schmidt.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V6_KUNDE_OLD}\n\nINTERNE ANWEISUNG:\n${TEXT_V6_INTERN_OLD}`,
        structureHelp: "Sehr geehrter Herr Schmidt,\n\nvielen Dank für Ihre Nachricht.\n\nWir haben den Fall geprüft. Unser Techniker hat festgestellt, dass der Fehler erneut durch eine falsche Bedienung verursacht wurde.\n\nDaher liegt die Verantwortung leider nicht bei uns und wir können die Kosten für die Überprüfung nicht übernehmen.\n\nGerne bieten wir Ihnen jedoch an, dass ein Techniker noch einmal vorbeikommt, um Ihre Mitarbeiter kostenlos in die richtige Bedienung des Gerätes einzuweisen.\n\nMit freundlichen Grüßen\n[Ihr Name]",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 6: DER DRUCKER (NEW 01.2025) ---
  {
    id: "schreiben-beschwerde-v6-new",
    title: "L&S Beschwerde: Der Drucker (Variante 6 - Neu 01.2025)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. (Neue Version)",
    questions: [
      {
        id: "ls-v6-new-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Das Gerät",
        options: [
          "a) ist erst seit Kurzem im Einsatz.",
          "b) muss noch mal überprüft werden.",
          "c) wurde immer richtig bedient."
        ],
        correctAnswer: "a) ist erst seit Kurzem im Einsatz.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V6_KUNDE_NEW,
        explanation: "Richtig ist a). 'das neue ABC-Druck- ... Gerät'."
      },
      {
        id: "ls-v6-new-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Die Firma",
        options: [
          "a) besteht auf der Bezahlung der Rechnungen.",
          "b) ...",
          "c) ..."
        ],
        correctAnswer: "a) besteht auf der Bezahlung der Rechnungen.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V6_INTERN_NEW,
        explanation: "Richtig ist a). 'Kosten... weiterhin von ihrem Unternehmen... getragen werden'."
      },
      {
        id: "ls-v6-new-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Frau Zeller.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V6_KUNDE_NEW}\n\nINTERNE ANWEISUNG:\n${TEXT_V6_INTERN_NEW}`,
        structureHelp: "Sehr geehrte Frau Zeller,\n\nvielen Dank für Ihre Nachricht. Wir bedauern die technischen Probleme.\n\nNach Rücksprache mit unserem Techniker müssen wir Ihnen jedoch mitteilen, dass der Fehler erneut auf Seiten Ihres Unternehmens lag und nicht in unserer Verantwortung.\n\nDaher können wir die Kosten für die Untersuchung leider nicht übernehmen.\n\nWir bieten Ihnen aber an, dass unser Techniker nochmals vorbeikommt, um Ihre Mitarbeiter kostenlos durch den Prozess zu führen.\n\nMit freundlichen Grüßen\n[Ihr Name]",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 7: RECHNUNG ---
  {
    id: "schreiben-beschwerde-v7",
    title: "L&S Beschwerde: Die Rechnung (Variante 7)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v7-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Der Kunde Joachim Schmidt",
        options: [
          "a) ist ein neuer Kunde.",
          "b) ist mit der gelieferten Ware zufrieden.",
          "c) braucht keine neue Rechnung."
        ],
        correctAnswer: "b) ist mit der gelieferten Ware zufrieden.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V7_KUNDE,
        explanation: "Richtig ist b). Er schreibt: 'Ihre Lieferung wie gewohnt zu unserer vollsten Zufriedenheit erhalten'."
      },
      {
        id: "ls-v7-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Die Malerbedarffirma",
        options: [
          "a) gewährt Herrn Schmidt zum ersten Mal Rabatt.",
          "b) gewährt Herrn Schmidt einen Rabatt in Höhe 5%.",
          "c) hatte Computerprobleme, die zu Fehlern in der Rechnung führte."
        ],
        correctAnswer: "c) hatte Computerprobleme, die zu Fehlern in der Rechnung führte.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V7_INTERN,
        explanation: "Richtig ist c). Sonja (interne Mail) erwähnt das 'Computerproblem', das dem Kunden erklärt werden soll."
      },
      {
        id: "ls-v7-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Herrn Schmidt.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V7_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V7_INTERN}`,
        structureHelp: "Sehr geehrter Herr Schmidt,\n\nvielen Dank für Ihre Nachricht und Ihre Geduld. Wir entschuldigen uns vielmals für die Fehler in der Rechnung.\n\nLeider hatten wir letzte Woche ein schwerwiegendes Computerproblem, das zu falschen Berechnungen geführt hat. Dieses Problem ist mittlerweile behoben.\n\nSelbstverständlich haben wir die Rechnung korrigiert: Die Pinselanzahl und die Farbe wurden angepasst. Auch Ihr üblicher Rabatt von 10% wurde nun berücksichtigt.\n\nAnbei erhalten Sie die neue Rechnung.\n\nMit freundlichen Grüßen\nAnna Hoffner",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 8: MANGELHAFTE LIEFERUNG (T-SHIRTS) ---
  {
    id: "schreiben-beschwerde-v8",
    title: "L&S Beschwerde: Mangelhafte Lieferung (Variante 8 - Neu 01./02.2025)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v8-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Herr Schramm",
        options: [
          "a) bemängelt Qualität und Menge der Lieferung.",
          "b) fand die gesamte Lieferung beschädigt vor.",
          "c) verlangt wegen der Lieferungsverzögerung einen Rabatt."
        ],
        correctAnswer: "a) bemängelt Qualität und Menge der Lieferung.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V8_KUNDE,
        explanation: "Richtig ist a). Qualität (beschädigte Verpackung/Inhalt verschmutzt) und Menge ('nur die Hälfte geliefert') werden bemängelt."
      },
      {
        id: "ls-v8-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Die Nachlieferung",
        options: [
          "a) bezahlt der Kunde.",
          "b) kommt im Sommer.",
          "c) umfasst 50 T-Shirts."
        ],
        correctAnswer: "c) umfasst 50 T-Shirts.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V8_INTERN,
        explanation: "Richtig ist c). Da Herr Schramm schrieb, dass von 100 nur die Hälfte kam, fehlen 50. Die Nachlieferung umfasst also 50 T-Shirts."
      },
      {
        id: "ls-v8-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Herrn Schramm.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V8_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V8_INTERN}`,
        structureHelp: "Sehr geehrter Herr Schramm,\n\nvielen Dank für Ihre Nachricht. Wir bedauern sehr, dass die Lieferung nicht zu Ihrer Zufriedenheit war.\n\nBezüglich der beschädigten Hosen möchten wir uns entschuldigen. Wir bieten Ihnen hierfür einen Preisnachlass von 20% an oder senden Ihnen gerne Ersatzware zu.\n\nWas die fehlenden T-Shirts betrifft, so können wir diese aufgrund eines hohen Krankenstandes in unserem Lager leider erst bis zum 12.05. nachliefern. Wir hoffen auf Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Ihr Name]",
        points: 40,
        part: "Schreiben"
      }
    ]
  },

  // --- VARIANTE 9: PFLANZENLIEFERUNG ---
  {
    id: "schreiben-beschwerde-v9",
    title: "L&S Beschwerde: Pflanzenlieferung (Variante 9)",
    module: ModuleType.SCHREIBEN,
    subType: "Beschwerde",
    instruction: "Lesen Sie die Beschwerde und die interne E-Mail. Lösen Sie zuerst die Aufgaben 19-20.",
    questions: [
      {
        id: "ls-v9-q19",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "19. Der Lieferant hat ...",
        options: [
          "a) die Dekoration passend zum Thema ausgewählt.",
          "b) die falsche Blumenauswahl getroffen.",
          "c) Ersatzsträuße aus der Region bestellt."
        ],
        correctAnswer: "b) die falsche Blumenauswahl getroffen.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V9_KUNDE,
        explanation: "Richtig ist b). Die Auswahl (exotische Pflanzen, Orchideen) passte nicht zum Thema 'Regional'."
      },
      {
        id: "ls-v9-q20",
        type: QuestionType.MULTIPLE_CHOICE,
        text: "20. Der Veranstalter musste ...",
        options: [
          "a) an einen Aussteller Blumen liefern.",
          "b) auf die Beschwerden der Besucher reagieren.",
          "c) den Umweltpreis ohne Blumen überreichen."
        ],
        correctAnswer: "b) auf die Beschwerden der Besucher reagieren.",
        points: 5,
        part: "Lesen",
        contextText: TEXT_V9_KUNDE,
        explanation: "Richtig ist b). Der Text erwähnt 'Beschwerden von Seiten der Besucher'."
      },
      {
        id: "ls-v9-essay",
        type: QuestionType.ESSAY,
        text: "Schreiben Sie eine E-Mail an Frau Talheim.",
        contextText: `KUNDENBESCHWERDE:\n${TEXT_V9_KUNDE}\n\nINTERNE ANWEISUNG:\n${TEXT_V9_INTERN}`,
        structureHelp: "Sehr geehrte Frau Talheim,\n\nvielen Dank für Ihre ehrliche Rückmeldung. Wir bedauern zutiefst, dass unsere Blumenauswahl nicht Ihren Erwartungen und dem Thema der Veranstaltung entsprochen hat.\n\nEs tut uns leid, dass dies zu Unannehmlichkeiten geführt hat. Selbstverständlich übernehmen wir die zusätzlichen Kosten für den Ersatz der Sträuße.\n\nDa wir Sie als langjährige Kundin sehr schätzen, möchten wir Ihnen als Entschädigung für die nächste Veranstaltung einen Rabatt von 25% anbieten. Wir werden in Zukunft sicherstellen, dass unsere Auswahl genau Ihren thematischen Vorgaben entspricht.\n\nMit freundlichen Grüßen\n[Ihr Name]",
        points: 40,
        part: "Schreiben"
      }
    ]
  }
];