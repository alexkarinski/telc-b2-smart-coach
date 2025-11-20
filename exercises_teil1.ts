import { Exercise, ModuleType } from "./types";

const OPTIONS_V1_OLD = [
  "a) Auf ins Abenteuer!\nDu hast Lust auf Sonne, Strand und eine fremde Sprache? Eine Sprachreise ermöglicht es dir nicht nur Land und Leute kennenzulernen, sondern auch deine frisch erworbenen Fähigkeiten direkt anzuwenden. Wo kannst du welche Sprachen lernen?",
  "b) Deutsch-japanische Zusammenarbeit.\nJapan gilt als innovativ und hat in der Forschung in Deutschland ein hohes Ansehen. So arbeiten beide Länder zum Beispiel eng in der Meeresforschung und im Umweltschutz zusammen. Die Bundesrepublik fördert die Zusammenarbeit erfahrener deutscher und japanischer Wissenschaftler.",
  "c) Job mit guten Zukunftsaussichten.\nWer verschiedene Sprachen fließend beherrscht und zwischen ihnen ohne Mühe hin- und herwechseln kann, ist der geborene Fremdsprachenkorrespondent. In diesem Jobprofil kann er oder sie seine/ihre Leidenschaft für Sprachen nämlich voll und ganz ausleben.",
  "d) Nutzen Sie das Recht für sich!\nBaumert & Partner helfen Ihnen, Ihr Recht durchzusetzen. Im Interview geben die Experten für Familienrecht Tipps zu folgenden Fragen: Wie gehen Sie aus einer Scheidung als Sieger heraus? Wie können Sie sich im Sorgerechtsstreit behaupten? Und welcher Anteil des Gehalts Ihres Expartners steht Ihnen zu?",
  "e) Umgangsformen im Berufsalltag.\nGewisse Verhaltensweisen, die im privaten Kontext völlig in Ordnung sind, können auf der Arbeit zu unangenehmen Stolpersteinen werden. Wie kleide ich mich richtig im Büro? Duzen oder siezen? Welche Themen sollten Sie im Smalltalk vermeiden?",
  "f) Souverän am Telefon.\nDie Begrüßung am Telefon dauert in der Regel nur zwei bis drei Sekunden, ist aber für den ersten Eindruck entscheidend. Die richtige Formulierung hängt davon ab, ob es sich um ein eingehendes Telefonat oder einen aktiven Anruf handelt. Worauf sollen Sie achten?",
  "g) Warum nicht mal ganz weit weg?\nDu träumst von einem Job im Ausland, dann knüpfe erste Kontakte durch ein Praktikum. Ohne großen Aufwand kannst du so auch deine Sprachkenntnisse perfektionieren. Aber es gibt noch mehr überzeugende Gründe für ein Auslandspraktikum.",
  "h) Zahl der Klagen rückläufig.\nSeit einigen Jahren geht die Zahl der Kündigungsschutzklagen kontinuierlich zurück, das bestätigt der Deutsche Anwaltsverein. Warum nur jeder Fünfte nach einer Kündigung Klage bei Gericht einreicht, warum es sich trotzdem für Sie lohnen kann und wie Sie dabei vorgehen müssen, erklärt der Arbeitsrechtsexperte Lars Hansso."
];

const OPTIONS_V1_NEW = [
  "a) Auf ins Abenteuer!\nDu hast Lust auf Sonne, Strand und eine fremde Sprache? Eine Sprachreise ermöglicht es dir nicht nur Land und Leute kennenzulernen, sondern auch deine frisch erworbenen Fähigkeiten direkt anzuwenden. Wo kannst du welche Sprachen lernen?",
  "b) Innovativer Klimaschutz.\nDeutschland hat in der Forschung auf der ganzen Welt ein hohes Ansehen. Das Land arbeitet in den Bereichen Umweltschutz und Meeresbiologie eng mit anderen Ländern zusammen. So fördert die Bundesrepublik Deutschland Austauschprogramme zwischen internationalen Forschern.",
  "c) Job mit guten Zukunftsaussichten.\nWer verschiedene Sprachen fließend beherrscht und zwischen ihnen ohne Mühe hin- und herwechseln kann, ist der geborene Fremdsprachenkorrespondent. Es gibt unterschiedliche Möglichkeiten und Wege, diesen Beruf zu erlernen und damit die eigene Leidenschaft für Sprachen auszuleben.",
  "d) Nutzen Sie das Recht für sich!\nBaumert & Partner helfen Ihnen, Ihr Recht durchzusetzen. Im Interview geben die Experten für Familienrecht Tipps zu folgenden Fragen: Wie gehen Sie aus einer Scheidung als Sieger hervor? Wie können Sie sich im Sorgerechtsstreit behaupten? Und welcher Anteil des Gehalts Ihres Expartners steht Ihnen zu?",
  "e) Umgangsformen im Berufsalltag.\nGewisse Verhaltensweisen, die im privaten Kontext völlig in Ordnung sind, können auf der Arbeit zu unangenehmen Stolpersteinen werden. Wie kleide ich mich richtig im Büro? Duzen oder siezen? Welche Themen sollten Sie im Smalltalk vermeiden?",
  "f) Souverän am Telefon.\nDie Begrüßung am Telefon dauert in der Regel nur zwei bis drei Sekunden, ist aber für den ersten Eindruck entscheidend. Die richtige Formulierung hängt davon ab, ob es sich um ein eingehendes Telefonat oder einen aktiven Anruf handelt. Worauf sollen Sie achten?",
  "g) Warum nicht mal ganz weit weg?\nDu träumst von einem Job im Ausland, dann knüpfe erste Kontakte durch ein Praktikum. Ohne großen Aufwand kannst du so auch deine Sprachkenntnisse perfektionieren. Aber es gibt noch mehr überzeugende Gründe für ein Auslandspraktikum.",
  "h) Zahl der Klagen rückläufig.\nSeit einigen Jahren geht die Zahl der Kündigungsschutzklagen kontinuierlich zurück, das bestätigt der Deutsche Anwaltsverein. Warum nur jeder Fünfte nach einer Kündigung Klage bei Gericht einreicht, warum es sich trotzdem für Sie lohnen kann und wie Sie dabei vorgehen müssen, erklärt der Arbeitsrechtsexperte Lars Hansso."
];

const OPTIONS_V2 = [
  "a) Achtung Kündigung.\nDas Arbeitsrecht unterscheidet zwischen personenbedingter, betriebsbedingter und verhaltensbedingter Beendigung des Arbeitsverhältnisses. Lesen Sie hier alle Informationen darüber, aus welchen Gründen der Arbeitgeber berechtigt ist zu kündigen.",
  "b) Automobilbranche boomt nach wie vor.\nVor allem im Südwesten Deutschlands können sich die Menschen weiterhin auf sichere und gut bezahlte Anstellungen in der Automobilindustrie verlassen. Warum lohnt es sich, bei einem Autobauer oder Zulieferer zu arbeiten? Welche Berufe sind am meisten gefragt?",
  "c) Firmen setzen auf flexible Arbeitsbedingungen.\nIn vielen Branchen sind Fachkräfte gefragt wie nie zuvor. Dabei haben immer mehr Firmen Schwierigkeiten, ihre Angestellten langfristig zu halten. Wer kann, wechselt schnell zu einem Arbeitgeber mit besseren Bedingungen. Viele große Unternehmen setzen nun verstärkt auf Flexibilität und familienfreundliche Leistungen wie Firmen-Kita oder Homeoffice.",
  "d) Förderung von Selbstständigen.\nIn den letzten Jahren ist die Zahl der Selbstständigen stetig gestiegen. Das liegt unter anderem auch an neuen staatlichen Förderungsmöglichkeiten für Jungunternehmer, die ihren eigenen Betrieb aufmachen möchten.",
  "e) Sein eigener Chef sein!\nDu willst keine starren Arbeitszeiten, weiten Anfahrtswege und keinen nervigen Umgang mit Kollegen und Chefs? Dann ist der Weg in die Existenzgründung eine echte Alternative. Ob als Übersetzer, Programmierer oder Steuerberater - Theo Geertz berät dich, wie du dein Fachwissen nutzen kannst, um zu Hause und auf eigene Rechnung zu arbeiten.",
  "f) Ungelernte Arbeitskräfte weiterhin benachteiligt.\nJe höher die Qualifikation, desto besser die Chancen auf dem Arbeitsmarkt. Wer keine Berufsausbildung hat, läuft Gefahr, in die Langzeitarbeitslosigkeit abzustürzen. Wer Arbeit hat, muss als Ungelernter mit geringerem Gehalt und schlechteren Aufstiegschancen rechnen.",
  "g) Möglichkeiten, mit einer Kündigung umzugehen.\nDu fühlst dich nach einer Kündigung gedemütigt und alleine gelassen und weißt nicht, wie es weitergehen soll? Das kann auch eine Chance sein, sich neu zu orientieren und vielleicht sogar die eigene Berufung zu finden.",
  "h) Wege und Chancen.\nDas Bundesministerium für Bildung und Forschung unterstützt bei der beruflichen Qualifizierung. Es hat ein Portal eingerichtet, um vor allem Ungelernte und Geringqualifizierte sowie Arbeitnehmer in Elternzeit über passende Aus- und Weiterbildungsmöglichkeiten zu informieren."
];

const OPTIONS_V3 = [
  "a) Pflegefreistellung für Mütter und Väter.\nArbeitnehmerinnen und Arbeitnehmer haben das Recht auf Freistellung am Arbeitsplatz, wenn ein im Haushalt lebendes Kind erkrankt und keine Betreuungsmöglichkeit vorhanden ist. Die Freistellung ist pro Arbeitsjahr begrenzt. In der Probezeit sollte man damit vorsichtig sein, da hier andere Kündigungsfristen gelten.",
  "b) Tipps für Frauen im Beruf.\nFrauen verkaufen sich oft unter Wert. Es ist besonders wichtig, dass Sie ausreichend über Ihre Rechte im Berufsleben informiert sind. Unsere Expertin für Arbeitsrecht gibt Tipps für Gehaltsverhandlungen und ein selbstbewusstes Auftreten. Außerdem informiert sie darüber, was Sie in einem Bewerbungsgespräch nicht erzählen müssen.",
  "c) Damit sich der Aufwand lohnt.\nStellenangebote online zu schalten, kann für Unternehmen schnell sehr kostspielig werden. Nicht nur die Bekanntheit der Webseite ist dafür entscheidend, sondern auch die regionale Reichweite und der Grad der Spezialisierung.",
  "d) Der Bundesverband der Tourismusbranche informiert.\nTrotz anhaltend großer Nachfrage von Seiten der Arbeitgeber ist die Zahl der Bewerbungen rückläufig. Auch auf dem Ausbildungsmarkt fehlt es an jungen Menschen, die sich für dieses Arbeitsfeld interessieren. Offene Stellen werden demzufolge zügig besetzt.",
  "e) Informationen rund um den Mutterschutz.\nFrauen dürfen nach dem Mutterschutzgesetz während einer Schwangerschaft und bis zu vier Monate nach der Geburt nicht gekündigt werden. Voraussetzung hierfür ist jedoch, dass der Arbeitgeber zum Zeitpunkt der Kündigung von der Schwangerschaft wusste.",
  "f) Rechte berufstätiger Eltern.\nEltern haben keinen Rechtsanspruch darauf, ihre Kinder am Arbeitsplatz zu betreuen. Die Entscheidung unterliegt der Zustimmung des Arbeitgebers und viele sind damit einverstanden, wenn sich so vermeiden lässt, dass sich die Eltern krankschreiben lassen. Arbeitsplätze, bei denen die Sicherheit des Kindes gefährdet ist, sind von dieser Regelung ausgeschlossen.",
  "g) Vom Traum zur Realität.\nAls angehender Gründer brauchen Sie nicht nur Branchenkenntnisse, sondern auch Wissen über betriebswirtschaftliche Vorgänge. Vom Businessplan und der richtigen Finanzierung über vernünftige Personalplanung bis hin zur Einholung der notwendigen Lizenzen kommen nun viele Dinge auf Sie zu.",
  "h) Die richtige Wahl spart Zeit und Frust.\nJe Suche nach einer neuen Stelle ist extrem zeitaufwendig. Im Internet erscheint das Angebot an offenen Stellen riesig, dennoch bleibt der Erfolge oft aus. Eine der wichtigsten Voraussetzungen ist es also, Jobangebote richtig zu filtern, um ohne großen Zeitaufwand die richtige Anzeige zu finden."
];

const OPTIONS_V3_NEW = [
  "a) Familienmitglieder betreuen.\nEltern haben einen Rechtsanspruch darauf, ihre kranken Kinder zu pflegen. Dafür haben sie eine bestimmte Anzahl an Tagen zur Verfügung, an denen sie freinehmen können. Aber generell gilt kranke Personen müssen zu Hause bleiben.",
  "b) Tipps für Frauen im Beruf.\nFrauen verkaufen sich oft unter Wert. Es ist besonders wichtig, dass Sie ausreichend über Ihre Rechte im Berufsleben informiert sind. Unsere Expertin für Arbeitsrecht gibt Tipps für Gehaltsverhandlungen und ein selbstbewusstes Auftreten. Außerdem informiert sie darüber, was Sie in einem Bewerbungsgespräch nicht erzählen müssen.",
  "c) Damit sich der Aufwand lohnt.\nStellenangebote online zu schalten, kann für Unternehmen schnell sehr kostspielig werden. Für den Erfolg muss unbedingt das richtige Stelleportal gewählt werden. Das gilt insbesondere für neu gegründete Unternehmen, die sich mehrfache Anzeigen finanziell nicht leisten können.",
  "d) Der Bundesverband der Tourismusbranche informiert.\nTrotz anhaltend großer Nachfrage von Seiten der Arbeitgeber ist die Zahl der Bewerbungen rückläufig. Auch auf dem Ausbildungsmarkt fehlt es an jungen Menschen, die sich für dieses Arbeitsfeld interessieren. Demzufolge gibt es aktuell eine Reihe offener Stellen.",
  "e) Informationen rund um den Mutterschutz.\nFrauen dürfen nach dem Mutterschutzgesetz während einer Schwangerschaft und bis zu vier Monate nach der Geburt nicht gekündigt werden. Voraussetzung hierfür ist jedoch, dass der Arbeitgeber zum Zeitpunkt der Kündigung von der Schwangerschaft wusste.",
  "f) Kinder am Arbeitsplatz.\nHäufig stimmen Arbeitgeber der Bitte von Eltern zu, ihre Kinder mit zur Arbeit zu bringen, wenn deren Betreuung kurzfristig ausfällt. Damit können Fehlzeiten vermieden werden. Diese Möglichkeit besteht nicht, wenn die Sicherheit des Kindes am Arbeitsplatz gefährdet ist.",
  "g) Vom Traum zur Realität.\nAls angehender Gründer brauchen Sie nicht nur Branchenkenntnisse, sondern auch Wissen über betriebswirtschaftliche Vorgänge. Vom Businessplan und der richtigen Finanzierung über vernünftige Personalplanung bis hin zur Einholung der notwendigen Lizenzen kommen nun viele Dinge auf Sie zu.",
  "h) Die richtige Wahl spart Zeit und Frust.\nDer Stellemarkt spielt sich heutzutage fast ausschließlich online ab. Im Internet erscheint das Angebot an offenen Stellen riesig, dennoch bleibt der Erfolge oft aus. Eine der wichtigsten Voraussetzungen ist es also, Jobangebote richtig zu filtern, um ohne großen Zeitaufwand die richtige Anzeige zu finden."
];

const OPTIONS_V4 = [
    "a) Erfolgreich neue Wege gehen.\nDas Buch „Mit Erfolg durchstarten“ von Dr. Vera Baumgart richtet sich vor allem an Akademikerinnen, die erfolgreich ein eigenes Unternehmen aufbauen wollen. Egal ob Sie sich in der Immobilienbranche, im Bauwesen oder im Gesundheitsbereich selbstständig machen, die Autorin hat Antworten auf alle wichtigen Fragen.",
    "b) Ein grüner Arbeitsplatz.\nDie Firma Heller aus Rostock will mit gutem Beispiel vorangehen und behauptet: „Klimafreundliche Energie und Müllvermeidung werden bei uns ganz großgeschrieben“. Aber geht das bei einer Transport- und Logistikfirma überhaupt? Die Antwort ist ein klares „Ja“.",
    "c) Verändertes Kaufverhalten.\nNeuesten Statistiken zufolge greifen Verbraucher in vielen Ländern der Europäischen Union immer mehr zu regionalen und ökologisch angebauten Lebensmitteln. Auch in deutschen Haushalten wird viel Wert auf gesunde Ernährung gelegt. Die Nachfrage nach Bioprodukten ist in den letzten Jahren stetig angestiegen.",
    "d) Jetzt im Buchhandel.\nIn seinem neuen Bestseller beschreibt Georg Könitz auf eindrucksvolle Weise, wie er von seinem ständig schlecht gelaunten Chef und zwei Mitarbeitern in seinem Team schikaniert, ausgegrenzt und lächerlich gemacht wurde - und wie es ihm schließlich gelang, diesen Teufelskreis zu durchbrechen. Von seinen Erfahrungen können alle, die Ähnliches erleben, profitieren.",
    "e) Der richtige Praktikumsplatz.\nEin Praktikum bietet tolle Möglichkeiten, den Berufsalltag kennenzulernen. Viele Praktikanten sind aber enttäuscht, dass sie nur Hilfsarbeiten verrichten dürfen und dafür schlecht oder gar nicht bezahlt werden. Auf dem Portaldeinpraktikum.de findest du jetzt aktuelle Infos und interessante Praktikumsstellen in ganz Deutschland.",
    "f) Eine Erfolgsgeschichte.\nDie Bilanz von Rita Jäger (34): Zwei abgebrochene Lehren und zahllose Hilfsjobs. Dann kam Tochter Samantha und Rita musste Verantwortung übernehmen. Im Interview erzählt sie, wie sie in einem Friseursalon die Chance bekam, ein Praktikum und anschließend eine Ausbildung zu machen. Nun hat sie ihren eigenen Salon eröffnet.",
    "g) Immobilienunternehmen expandiert.\nDie Frankfurter ImmobilienfirmaImmoInvest expandiert nach Süd- und Osteuropa. In den letzten Jahren hat das Unternehmen hohe Gewinne erwirtschaftet und plant nun, außerhalb Deutschlands mehrere Niederlassungen zu gründen.",
    "h) Neue Broschüre.\nSie überlegen, Ihren Lebensmittelpunkt in ein anderes Land zu verlegen? Ein Neuanfang ist eine große Chance, aber immer auch eine Herausforderung – besonders für den Partner oder die Partnerin und die Kinder. Unsere neue Broschüre bietet ausführliche Informationen und Hilfestellungen zum Leben und Arbeiten in der EU."
];

const OPTIONS_V5 = [
    "a) Hilfe für Betroffene.\nBeleidigungen, Ausgrenzung, versteckte Drohungen am Arbeitsplatz ist Mobbing leider weit verbreitet. Für viele Angestellte ist der Arbeitsalltag oft mit Angst verbunden. Das führt schnell zu gesundheitlichen und psychischen Problemen. Inzwischen gibt es zahlreiche Coaching-Programme für Mitarbeiter, die Strategien aufzeigen, wie man mit solchen Situationen besser umgehen kann.",
    "b) Ein starkes Team.\nPünktlich zum Start der Weltmeisterschaft präsentiert der Handballbund seine neue Vertragspartnerin, die deutsche Handwerkskammer. Wie passt das zusammen? „Ganz einfach“, so der Sprecher des Handballbundes. „Was für den Handballer die Weltmeisterschaft ist, ist für den Handwerker die Meisterprüfung.“",
    "c) Deutsche sind risikoscheu.\nIn Deutschland ist die Zahl der Unternehmensgründungen stark rückläufig, obwohl insbesondere viele jüngere Menschen angeben, dass sie sich gerne selbstständig machen würden. Warum der Sprung in die Selbstständigkeit oft doch nicht klappt, hat vielerlei Gründe.",
    "d) Handwerk und Karriere - passt das?\nFleischer, Klempner, Tischler - laut der Bundesagentur für Arbeit werden bei uns ca. 150.000 Handwerker gesucht. Doch viele Stellen bleiben unbesetzt. Dabei bieten Handwerksberufe gerade jungen Leuten die allerbesten Chancen für eine erfolgreiche Karriere.",
    "e) Stressfrei zum Ziel.\nAuch Fortbildungen können für eine Meisterprüfung im Handwerk anerkannt werden. Wenn Sie z. B. als Kfz-Servicetechniker einen Kurs in Elektronik erfolgreich absolviert haben, wird dieser Teil nicht noch einmal gesondert geprüft. Die Interessengemeinschaft „Das Handwerk“ hat die wichtigsten Zulassungsvoraussetzungen zur Meisterprüfung zusammengefasst.",
    "f) Nie wieder Opfer.\nSie wurde in ihrer Firma gemobbt und konnte es ihrem Chef nicht nachweisen. Aber die Atmosphäre verschlechterte sich zusehends. Die Autorin Stephanie Hauser verarbeitet in ihrem Roman «Nie wieder Opfer» auf eindrucksvolle Weise ihre eigenen Erfahrungen zum Thema „Mobbing“.",
    "g) Verpflichtend oder freiwillig.\nDie Anforderungen der Berufswelt ändern sich rasant und somit entsteht auch die Notwendigkeit für die Belegschaft, sich kontinuierlich weiterzubilden. Prinzipiell gilt, dass Mitarbeiter zur Teilnahme an Seminaren verpflichtet sind, wenn diese zur Ausübung ihrer Tätigkeit notwendig sind und in der normalen Arbeitszeit stattfinden.",
    "h) Karriereplan für eine vielversprechende Laufbahn.\nVor allem in Großstädten bieten immer mehr junge Unternehmen interessante Jobmöglichkeiten. Dennoch setzen die meisten Uniabsolventen nach wie vor auf große Konzerne, von denen sie sich eher Sicherheit und vielversprechende Karrierechancen erhoffen. Doch das können sie auch bei jungen Start-up-Unternehmen finden."
];

const OPTIONS_V6 = [
    "a) Die Lebensmittelbranche boomt.\nDer Einzelhandel ist einer der größten und umsatzstärksten Wirtschaftszweige national und international. Es werden dort ständig qualifizierte Mitarbeiter gesucht. Allein in Hessen werden jährlich 160.000 junge Menschen ausgebildet. Der Einzelhandel ist außerdem krisenfest, denn gegessen wird immer.",
    "b) Aus Fehlern anderer lernen.\nViele Unternehmer machen zu Beginn ihrer Selbstständigkeit ähnliche Fehler. Heute weiß man, dass ein durchdachter Businessplan und eine genaue Konkurrenzanalyse unverzichtbar sind. Worauf es noch ankommt, erfährst du in den Tipps des Erfolgscoachs Gregor Daub.",
    "c) Chancen im Einzelhandel.\nDie FOOD Unternehmensgruppe betreibt Supermärkte in zehn Ländern Europas. Der Branchenriese möchte weiter expandieren und hat gerade die Filialen der Jennings GmbH übernommen. Erfahrene Mitarbeiter finden dort interessante Möglichkeiten zur beruflichen Weiterentwicklung.",
    "d) Gute Nachrichten für gekündigte Mitarbeiter.\nDie Tankstellenkette Fairtank hat Bankrott angekündigt und schließt zum 31. März ihre 25 Filialen in Brandenburg. Rund 100 Mitarbeiter sind betroffen und suchen nun einen neuen Job. Für einige von ihnen gibt es eine Lösung: Tankstellen in der Umgebung haben ihre Unterstützung zugesagt.",
    "e) Was nun?\nEgal, ob die ganze Firma pleitegeht, eine Abteilung dichtmacht oder nur der eigene Job weg ist, eine Entlassung ist immer ein Schock. Arbeitsmarktexpertin Caroline Cuyper erklärt, was man als Angestellter tun muss, um möglichst schnell eine neue Stelle zu bekommen.",
    "f) Neue Kursreihe bei Arcadio.\nAb sofort bietet das Institut Arcadio neben seinen Handykursen für Senioren auch Weiterbildungen für Teilnehmer mit geringen Deutschkenntnissen an. Das Besondere daran: Die Dozenten verwenden eine einfache Sprache.",
    "g) Wenn die Mitarbeiter kündigen.\nImmer mehr Mitarbeiter kündigen und verlassen ihre Firma. Und zwar selbst dann, wenn sie mehr Gehalt bekommen als bei der Konkurrenz. Die Unternehmensberatung Schindler hat die häufigsten Gründe analysiert, warum sich Angestellte entscheiden, ihren Job zu wechseln.",
    "h) Bildung im neuen Zeitalter.\nSchneller technologischer Fortschritt, Globalisierung und Veränderungen auf dem Arbeitsmarkt haben dazu geführt, dass Fortbildungen Beruf eine immer wichtigere Rolle spielen. Zunehmend werden Online-Kurse und Webinare am Computer angeboten, die den Teilnehmern maximale Flexibilität versprechen."
];

const OPTIONS_V7 = [
    "a) Den Arbeitsplatz produktiv gestalten.\nDie richtige Atmosphäre am Arbeitsplatz ist für die effektive Erledigung der Aufgaben unerlässlich. Gerlinde Strauß beschreibt, wie man mit den richtigen Möbeln, Dekoartikeln, Licht, Ordnung am Arbeitsplatz und vielem mehr die eigene Umgebung so gestaltet, dass man die Zeit am Arbeitsplatz gerne und erfolgreich verbringt.",
    "b) Ohne Selbstdisziplin geht es nicht.\nDie Arbeit von zu Hause aus erfordert ein hohes Maß an Selbstdisziplin und die Fähigkeit des Selbstmanagements. Privates und Arbeit sollten strikt getrennt werden. Doch wie funktioniert das am besten? Helga Brinkmann hat einen Ratgeber für Arbeitskräfte herausgegeben, deren Unternehmen diese Form der Arbeit anbieten.",
    "c) Hobbys im Lebenslauf richtig einsetzen.\nAusbildung und Qualifikation sind in erster Linie wichtig, wenn man den Lebenslauf eines Bewerbers liest. Doch auch, welche Hobbys eine Person hat, kann Auskunft darüber geben, ob sie zum Unternehmen passt oder nicht. Lesen Sie hier wichtige Tipps und Tricks für eine überzeugende Bewerbung.",
    "d) Was unsere Körpersprache über uns verrät.\nOb beim Vorstellungsgespräch, bei wichtigen Verhandlungen mit Kunden oder am ersten Arbeitstag - unsere Körpersprache gibt immer Auskunft darüber, wie wir uns gerade fühlen, z. B. angespannt oder selbstsicher.",
    "e) Der erste Arbeitstag in der neuen Firma.\nSo klappt es mit den Kolleginnen. Anspannung ist ganz normal: Beim Start im neuen Job ist es wichtig, gut vorbereitet zu sein. Im folgenden Artikel von Irene Miller finden Sie eine Checkliste mit den wichtigsten Punkten, die Sie beachten sollten, damit der Einstieg gelingt.",
    "f) Angemessene Bezahlung?\nJeder möchte für seine Leistung fair bezahlt werden. Doch in vielen Berufsfeldern haben die Arbeitnehmer das Gefühl, unterbezahlt zu sein. Die Folge davon sind Motivationsverlust und Zweifel daran, ob man wirklich den richtigen Beruf gewählt hat. Lesen Sie hier, wie Sie erfolgreich Gehaltsverhandlungen führen.",
    "g) Körperliche Folgen von Stress.\nNicht jeder Stress macht krank. Es gibt auch positiven Stress, der die Leistungsfähigkeit eines Menschen erhöht. Wer aber unter Daueranspannung steht und körperliche Symptome wie Bluthochdruck, Magenbeschwerden oder eine anhaltende innere Anspannung spürt, muss etwas ändern.",
    "h) Frauen verdienen immer noch zu wenig.\nEuropaweit ist das Ziel der Gleichstellung noch längst nicht erreicht. Man denke hier nur an die nach wie vor ungleiche Bezahlung von Männern und Frauen und an die Besetzung von Stellen in der Führungsetage. Deutschland liegt bei diesem Vergleich noch immer auf einem der letzten Plätze."
];

export const EXERCISES_TEIL_1: Exercise[] = [
  {
    id: "lesen-t1-v1-old",
    title: "Lesen Teil 1 (Variante 1)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v1-q1",
        text: "1. Moutasem fragt sich, wie er neue Kollegen korrekt ansprechen sollte.",
        options: OPTIONS_V1_OLD,
        correctAnswer: OPTIONS_V1_OLD[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). 'Neue Kollegen ansprechen' bezieht sich direkt auf 'Umgangsformen im Berufsalltag' und die Frage 'Duzen oder siezen?'."
      },
      {
        id: "t1-v1-q2",
        text: "2. Selma wurde entlassen und will sich dagegen wehren.",
        options: OPTIONS_V1_OLD,
        correctAnswer: OPTIONS_V1_OLD[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). 'Entlassen' und 'sich wehren' verweisen auf 'Kündigungsschutzklagen' und den Gang zum 'Gericht'."
      },
      {
        id: "t1-v1-q3",
        text: "3. Anka überlegt, eine Ausbildung im Fremdsprachenbereich zu machen.",
        options: OPTIONS_V1_OLD,
        correctAnswer: OPTIONS_V1_OLD[2], // c
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist c). Der Text beschreibt das Jobprofil 'Fremdsprachenkorrespondent' für Leute, die 'verschiedene Sprachen fließend beherrschen'."
      },
      {
        id: "t1-v1-q4",
        text: "4. Sean ist Professor für Biologie und sucht einen Job im internationalen Umfeld.",
        options: OPTIONS_V1_OLD,
        correctAnswer: OPTIONS_V1_OLD[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). Schlüsselwörter sind 'Forschung', 'Meeresforschung' (Biologie) und die Zusammenarbeit 'deutscher und japanischer Wissenschaftler' (international)."
      },
      {
        id: "t1-v1-q5",
        text: "5. Yassin möchte erste Berufserfahrungen im Ausland sammeln.",
        options: OPTIONS_V1_OLD,
        correctAnswer: OPTIONS_V1_OLD[6], // g
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist g). 'Erste Berufserfahrungen' passt perfekt zu 'Praktikum' und 'Ausland' zu 'ganz weit weg'."
      }
    ]
  },
  {
    id: "lesen-t1-v1-new",
    title: "Lesen Teil 1 (Variante 1 - Neu 08.2024)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift. (Aktualisierte Version)",
    questions: [
      {
        id: "t1-v1-new-q1",
        text: "1. Moutasem fragt sich, wie er neue Kollegen korrekt ansprechen sollte.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). Stichworte: 'neue Kollegen ansprechen', 'Umgangsformen', 'Duzen oder siezen'."
      },
      {
        id: "t1-v1-new-q2",
        text: "2. Selma wurde entlassen und will sich dagegen wehren.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). Stichworte: 'entlassen' -> 'Kündigung', 'sich wehren' -> 'Klage bei Gericht'."
      },
      {
        id: "t1-v1-new-q3",
        text: "3. Anka überlegt, eine Ausbildung im Fremdsprachenbereich zu machen.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[2], // c
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist c). Der Text spricht davon, 'diesen Beruf zu erlernen' (Ausbildung) und die 'Leidenschaft für Sprachen auszuleben'."
      },
      {
        id: "t1-v1-new-q4",
        text: "4. Sean ist Professor für Biologie und sucht einen Job im internationalen Umfeld.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). Stichworte: 'Meeresbiologie', 'internationale Forscher', 'Austauschprogramme'."
      },
      {
        id: "t1-v1-new-q5",
        text: "5. Yassin möchte erste Berufserfahrungen im Ausland sammeln.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[6], // g
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist g). Stichworte: 'Job im Ausland', 'erste Kontakte durch ein Praktikum'."
      }
    ]
  },
  {
    id: "lesen-t1-v1-2025",
    title: "Lesen Teil 1 (Variante 1 - Neu 07.02.2025)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v1-2025-q1",
        text: "1. Mariarita wurde entlassen und will sich dagegen wehren.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). 'Entlassen' und 'sich wehren' verweisen auf 'Kündigungsschutzklagen' und den Gang zum 'Gericht'."
      },
      {
        id: "t1-v1-2025-q2",
        text: "2. Ettorina überlegt, eine Ausbildung im Fremdsprachenbereich zu machen.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[2], // c
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist c). Der Text spricht davon, 'diesen Beruf zu erlernen' (Ausbildung) und die 'Leidenschaft für Sprachen auszuleben'."
      },
      {
        id: "t1-v1-2025-q3",
        text: "3. Thom ist Wissenschaftler und sucht einen Job im internationalen Umfeld.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). Stichworte: 'Meeresbiologie', 'internationale Forscher', 'Austauschprogramme'."
      },
      {
        id: "t1-v1-2025-q4",
        text: "4. Baldassarre möchte erste Berufserfahrungen in verschiedenen Ländern sammeln.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[6], // g
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist g). 'Erste Berufserfahrungen' passt zu 'Praktikum' und 'Ausland'."
      },
      {
        id: "t1-v1-2025-q5",
        text: "5. Levi fragt sich, wie er neue Kollegen korrekt ansprechen sollte.",
        options: OPTIONS_V1_NEW,
        correctAnswer: OPTIONS_V1_NEW[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). Stichworte: 'neue Kollegen ansprechen', 'Umgangsformen', 'Duzen oder siezen'."
      }
    ]
  },
  {
    id: "lesen-t1-v2",
    title: "Lesen Teil 1 (Variante 2)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v2-q1",
        text: "1. Junis ist gelernter KIZ-Mechatroniker und möchte eine eigene Werkstatt gründen.",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[3], // d
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist d). 'Eigene Werkstatt gründen' passt zu 'Förderung von Selbstständigen' und 'eigenen Betrieb aufmachen'."
      },
      {
        id: "t1-v2-q2",
        text: "2. Maria arbeitet als Hilfsarbeiterin und möchte nun eine Berufsausbildung machen.",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). 'Hilfsarbeiterin' und 'Berufsausbildung' verweisen auf 'Wege und Chancen' für 'Ungelernte und Geringqualifizierte'."
      },
      {
        id: "t1-v2-q3",
        text: "3. Nikolett möchte sich nicht zwischen Familie und Arbeit entscheiden müssen.",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[2], // c
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist c). 'Zwischen Familie und Arbeit entscheiden' wird gelöst durch 'flexible Arbeitsbedingungen' und 'familienfreundliche Leistungen'."
      },
      {
        id: "t1-v2-q4",
        text: "4. Amin studiert Fremdsprachen und möchte nach seinem Abschluss freiberuflich arbeiten.",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). 'Fremdsprachen' und 'freiberuflich' passen perfekt zu 'Sein eigener Chef sein' und dem Beispiel 'Übersetzer' auf 'eigene Rechnung'."
      },
      {
        id: "t1-v2-q5",
        text: "5. Samita soll aus betrieblichen Gründen gekündigt werden und sie möchte dagegen vorgehen.",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[0], // a
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist a). 'Betrieblichen Gründen gekündigt' führt zum Text 'Achtung Kündigung', der 'betriebsbedingte Beendigung' thematisiert."
      }
    ]
  },
  {
    id: "lesen-t1-v3",
    title: "Lesen Teil 1 (Variante 3)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v3-q1",
        text: "1. Lamia überlegt, ob sie im Vorstellungsgespräch ihre Schwangerschaft erwähnen muss.",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). Der Text gibt Tipps für Frauen im Beruf und informiert darüber, 'was Sie in einem Bewerbungsgespräch nicht erzählen müssen' (z.B. Schwangerschaft)."
      },
      {
        id: "t1-v3-q2",
        text: "2. Raymond möchte im Internet einen Job finden.",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). Der Text 'Die richtige Wahl spart Zeit und Frust' handelt davon, wie man im 'Internet' aus dem riesigen Angebot 'Jobangebote richtig filtert'."
      },
      {
        id: "t1-v3-q3",
        text: "3. Karl will sich in der Gastronomie selbstständig machen.",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[6], // g
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist g). 'Selbstständig machen' passt zu 'Vom Traum zur Realität' und 'angehender Gründer' mit 'Businessplan'."
      },
      {
        id: "t1-v3-q4",
        text: "4. Sean ist unsicher, ob er seinen kranken Sohn mit ins Büro nehmen darf.",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[5], // f
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist f). Der Text 'Rechte berufstätiger Eltern' behandelt genau das Thema: 'Kinder am Arbeitsplatz zu betreuen' und die 'Zustimmung des Arbeitgebers'."
      },
      {
        id: "t1-v3-q5",
        text: "5. Ramona interessiert sich für Jobchancen als Reiseverkehrskauffrau.",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[3], // d
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist d). 'Reiseverkehrskauffrau' gehört zur 'Tourismusbranche'. Der Text erwähnt, dass 'offene Stellen zügig besetzt' werden."
      }
    ]
  },
  {
    id: "lesen-t1-v3-new",
    title: "Lesen Teil 1 (Variante 3 - Neu 07.2024)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift. (Aktualisierte Version)",
    questions: [
      {
        id: "t1-v3-new-q1",
        text: "1. Yuan Javier möchte im Internet einen Job finden.",
        options: OPTIONS_V3_NEW,
        correctAnswer: OPTIONS_V3_NEW[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). Der Text 'Die richtige Wahl spart Zeit und Frust' erwähnt explizit: 'Im Internet erscheint das Angebot an offenen Stellen riesig...'."
      },
      {
        id: "t1-v3-new-q2",
        text: "2. Paul will sich in der Gastronomie selbstständig machen.",
        options: OPTIONS_V3_NEW,
        correctAnswer: OPTIONS_V3_NEW[6], // g
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist g). 'Selbstständig machen' passt zu 'angehender Gründer' im Text g."
      },
      {
        id: "t1-v3-new-q3",
        text: "3. Avio ist unsicher, ob er seinen kranken Sohn mit ins Büro nehmen darf.",
        options: OPTIONS_V3_NEW,
        correctAnswer: OPTIONS_V3_NEW[0], // a
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist a). Der Text 'Familienmitglieder betreuen' sagt klar: 'generell gilt kranke Personen müssen zu Hause bleiben'. Dies beantwortet die Unsicherheit direkt."
      },
      {
        id: "t1-v3-new-q4",
        text: "4. Nora interessiert sich für Jobchancen als Reiseverkehrskauffrau.",
        options: OPTIONS_V3_NEW,
        correctAnswer: OPTIONS_V3_NEW[3], // d
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist d). Reiseverkehrskauffrau fällt unter die 'Tourismusbranche'. Der Text erwähnt eine 'Reihe offener Stellen'."
      },
      {
        id: "t1-v3-new-q5",
        text: "5. Anna Maria überlegt, ob sie im Vorstellungsgespräch ihre Schwangerschaft erwähnen muss.",
        options: OPTIONS_V3_NEW,
        correctAnswer: OPTIONS_V3_NEW[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). Der Text informiert darüber, 'was Sie in einem Bewerbungsgespräch nicht erzählen müssen' (impliziert Schwangerschaft)."
      }
    ]
  },
  {
    id: "lesen-t1-v4",
    title: "Lesen Teil 1 (Variante 4)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v4-q1",
        text: "1. Laura möchte während des Studiums Berufserfahrung sammeln.",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). 'Während des Studiums Berufserfahrung sammeln' passt ideal zu 'Praktikum', um den 'Berufsalltag kennenzulernen'."
      },
      {
        id: "t1-v4-q2",
        text: "2. Igor hat Familie und möchte im europäischen Ausland arbeiten.",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). 'Europäisches Ausland' und 'Familie' (Partnerin und Kinder) werden im Text 'Neue Broschüre' zum Thema 'Leben und Arbeiten in der EU' angesprochen."
      },
      {
        id: "t1-v4-q3",
        text: "3. Jens interessiert sich für das Thema Umweltschutz in Unternehmen.",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). Die Firma Heller wirbt mit 'Klimafreundliche Energie und Müllvermeidung', was genau dem Thema 'Umweltschutz in Unternehmen' entspricht."
      },
      {
        id: "t1-v4-q4",
        text: "4. Jasmin hat Probleme mit ihren Kollegen und braucht Hilfe.",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[3], // d
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist d). Der Text beschreibt, wie jemand von 'Mitarbeitern schikaniert' wurde (Mobbing) und wie man diesen 'Teufelskreis durchbrechen' kann."
      },
      {
        id: "t1-v4-q5",
        text: "5. Somayeh ist Architektin und möchte ihr eigenes Architekturbüro eröffnen.",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[0], // a
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist a). 'Eigenes Büro eröffnen' passt zu 'erfolgreich ein eigenes Unternehmen aufbauen' und der Erwähnung der 'Immobilienbranche' oder 'Bauwesen'."
      }
    ]
  },
  {
    id: "lesen-t1-v5",
    title: "Lesen Teil 1 (Variante 5)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v5-q1",
        text: "1. Yasmina sucht nach dem Realschulabschluss einen Beruf mit guten Perspektiven.",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[3], // d
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist d). Der Text 'Handwerk und Karriere' wirbt damit, dass Handwerker gesucht werden und 'allerbeste Chancen' bieten."
      },
      {
        id: "t1-v5-q2",
        text: "2. Jason überlegt, ob er bei einem neu gegründeten Unternehmen arbeiten soll.",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). 'Neu gegründetes Unternehmen' ist ein 'Start-up'. Der Text diskutiert Karrierechancen in 'jungen Start-up-Unternehmen'."
      },
      {
        id: "t1-v5-q3",
        text: "3. Hannah wird von ihren Kollegen schlecht behandelt und sucht Hilfe.",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[0], // a
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist a). 'Schlecht behandelt' deutet auf Mobbing hin. Text a) bietet 'Hilfe für Betroffene' bei Beleidigungen und Ausgrenzung."
      },
      {
        id: "t1-v5-q4",
        text: "4. Gacer fragt sich, ob sie Fortbildungen besuchen muss.",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[6], // g
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist g). Der Text 'Verpflichtend oder freiwillig' klärt genau die Frage, ob Mitarbeiter zur 'Teilnahme an Seminaren verpflichtet' sind."
      },
      {
        id: "t1-v5-q5",
        text: "5. Assem braucht Informationen zur Meisterprüfung.",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). Der Text informiert über 'Zulassungsvoraussetzungen zur Meisterprüfung' und Anerkennung von Fortbildungen."
      }
    ]
  },
  {
    id: "lesen-t1-v6",
    title: "Lesen Teil 1 (Variante 6)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v6-q1",
        text: "1. Silvie ist gelernte Verkäuferin und möchte in ihrem Job aufsteigen.",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[2], // c
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist c). Im Text 'Chancen im Einzelhandel' wird erwähnt, dass erfahrene Mitarbeiter 'Möglichkeiten zur beruflichen Weiterentwicklung' finden."
      },
      {
        id: "t1-v6-q2",
        text: "2. Brian sucht Computerkurse, die er von zu Hause aus machen kann.",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[7], // h
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist h). 'Online-Kurse und Webinare am Computer' bieten 'maximale Flexibilität', was Brian sucht."
      },
      {
        id: "t1-v6-q3",
        text: "3. Carl ist Umwelttechniker und möchte seine eigene Beratungsagentur gründen.",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). 'Agentur gründen' bedeutet Selbstständigkeit. Der Text 'Aus Fehlern anderer lernen' gibt Tipps (Businessplan) für Gründer."
      },
      {
        id: "t1-v6-q4",
        text: "4. Mira ist unsicher, wie es nach ihrem Arbeitsplatzverlust weitergehen soll.",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). 'Arbeitsplatzverlust' ist eine Entlassung. Der Text 'Was nun?' gibt Tipps, wie man schnell eine neue Stelle bekommt."
      },
      {
        id: "t1-v6-q5",
        text: "5. Karim sucht einen Ausbildungsplatz in einer sicheren Branche.",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[0], // a
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist a). Der Text beschreibt die Lebensmittelbranche/Einzelhandel als 'krisenfest' (sicher) und erwähnt, dass viele junge Menschen dort ausgebildet werden."
      }
    ]
  },
  {
    id: "lesen-t1-v7",
    title: "Lesen Teil 1 (Variante 7)",
    module: ModuleType.LESEN,
    subType: "Teil 1",
    instruction: "Lesen Sie die Überschriften a–h und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift.",
    questions: [
      {
        id: "t1-v7-q1",
        text: "1. Kurt sucht einen Job und braucht Anregungen für seine Unterlagen.",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[2], // c
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist c). 'Unterlagen' bezieht sich auf Bewerbungsunterlagen (Lebenslauf). Der Text gibt Tipps, wie man Hobbys im Lebenslauf einsetzt."
      },
      {
        id: "t1-v7-q2",
        text: "2. Juliette arbeitet gerne, fühlt sich aber oft erschöpft.",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[6], // g
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist g). 'Erschöpft' ist ein Symptom von Stress. Der Text 'Körperliche Folgen von Stress' thematisiert Daueranspannung und Erschöpfung."
      },
      {
        id: "t1-v7-q3",
        text: "3. Peter ist vor seinem Start im neuen Unternehmen nervös.",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[4], // e
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist e). Der Text 'Der erste Arbeitstag in der neuen Firma' behandelt genau diese Nervosität ('Anspannung ist ganz normal') beim Start."
      },
      {
        id: "t1-v7-q4",
        text: "4. Katharina ist wegen des niedrigen Verdienstes in ihrer Branche frustriert.",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[5], // f
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist f). 'Niedriger Verdienst' und 'frustriert' (Motivationsverlust) werden im Text 'Angemessene Bezahlung?' angesprochen."
      },
      {
        id: "t1-v7-q5",
        text: "5. Carlos braucht Tipps für seine Tätigkeit im Homeoffice.",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[1], // b
        points: 5,
        part: "Teil 1",
        explanation: "Richtig ist b). Der Text 'Ohne Selbstdisziplin geht es nicht' gibt Ratschläge für die 'Arbeit von zu Hause aus' (Homeoffice)."
      }
    ]
  }
];