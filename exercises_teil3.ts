import { Exercise, ModuleType } from "./types";

// --- OPTIONS DEFINITIONS ---

const OPTIONS_V1 = [
  "a) Günther, vor 9 Stunden\nDas kann man pauschal gar nicht so sagen. Wie das in deinem Unternehmen geregelt ist, steht in deinem Arbeitsvertrag. Ab wann du eine Arbeitsunfähigkeitsbescheinigung brauchst, findest du meistens unter den Paragraphen „Arbeitsverhinderung“ oder „Krankheit“.",
  "b) Marion, vor 4 Stunden\nNein, vorher musst du erst mal eine Abmahnung bekommen. Wenn du dann allerdings noch mal fehlst, ohne Bescheid zu sagen, musst du mit der Kündigung rechnen. Such doch noch mal das Gespräch mit deinem Chef. Ihr findet bestimmt eine Lösung.",
  "c) Karin, vor 45 Minuten\nDu kannst nicht einfach kommen und gehen, wann du willst, auch wenn du die Absicht hattest, die versäumte Zeit nachzuholen. Die Arbeitszeiten sind ja vertraglich geregelt. Wenn sich Mitarbeiter nicht daran halten, ist eine Abmahnung vor der Kündigung nicht notwendig.",
  "d) Elli, vor 3 Stunden\nWie du selbst schreibst, können im Krankheitsfall die Urlaubstage auf dein Urlaubskonto zurückgebucht werden. Du brauchst natürlich ein ärztliches Attest. Das gilt allerdings nicht, wenn du dich um ein krankes Kind kümmern musst. In diesem Fall gelten die Urlaubstage als genommen.",
  "e) Sabine, vor 40 Minuten\nDiese Situation kennen doch alle Eltern. Wenn ich für meinen Sohn mal keine Betreuung finde, kann ich ihn auch ausnahmsweise mit ins Büro nehmen. Meine Chefin ist da zum Glück sehr verständnisvoll.",
  "f) Jorge, vor 2 Stunden\nAlso ich gehe immer gleich am ersten Krankheitstag zum Arzt. Sicher ist sicher. Außerdem kann es nicht schaden, wenn dich ein Doktor anschaut, wenn du dich nicht wohlfühlst. Gerade wenn du Kinder hast, ist es wichtig, dass du weißt, was dir fehlt. Du willst ja niemanden anstecken.",
  "x) Keine passende Anzeige"
];

// Version with updated answer D text (New formulation 08.2024)
const OPTIONS_V1_NEW_D = [
  "a) Günther, vor 9 Stunden\nDas kann man pauschal gar nicht so sagen. Wie das in deinem Unternehmen geregelt ist, steht in deinem Arbeitsvertrag. Ab wann du eine Arbeitsunfähigkeitsbescheinigung brauchst, findest du meistens unter den Paragraphen „Arbeitsverhinderung“ oder „Krankheit“.",
  "b) Marion, vor 4 Stunden\nNein, vorher musst du erst mal eine Abmahnung bekommen. Wenn du dann allerdings noch mal fehlst, ohne Bescheid zu sagen, musst du mit der Kündigung rechnen. Such doch noch mal das Gespräch mit deinem Chef. Ihr findet bestimmt eine Lösung.",
  "c) Karin, vor 45 Minuten\nDu kannst nicht einfach kommen und gehen, wann du willst, auch wenn du die Absicht hattest, die versäumte Zeit nachzuholen. Die Arbeitszeiten sind ja vertraglich geregelt. Wenn sich Mitarbeiter nicht daran halten, ist eine Abmahnung vor der Kündigung nicht notwendig.",
  "d) Elli, vor 3 Stunden\nWie du selbst schreibst, können im Krankheitsfall die Urlaubstage auf dein Urlaubskonto zurückgebucht werden. Du brauchst natürlich ab dem ersten Tag ein ärztliches Attest. Anders sieht es aus, wenn du einen Familienangehörigen betreust. Das ist dann nicht Sache deines Arbeitgebers.",
  "e) Sabine, vor 40 Minuten\nDiese Situation kennen doch alle Eltern. Wenn ich für meinen Sohn mal keine Betreuung finde, kann ich ihn auch ausnahmsweise mit ins Büro nehmen. Meine Chefin ist da zum Glück sehr verständnisvoll.",
  "f) Jorge, vor 2 Stunden\nAlso ich gehe immer gleich am ersten Krankheitstag zum Arzt. Sicher ist sicher. Außerdem kann es nicht schaden, wenn dich ein Doktor anschaut, wenn du dich nicht wohlfühlst. Gerade wenn du Kinder hast, ist es wichtig, dass du weißt, was dir fehlt. Du willst ja niemanden anstecken.",
  "x) Keine passende Anzeige"
];

const OPTIONS_V1_2025 = [
  "a) Jose Cristobal, vor 9 Stunden\nDas kann man pauschal gar nicht so sagen. Wie das in deinem Unternehmen geregelt ist, steht in deinem Arbeitsvertrag. Ab wann du eine Arbeitsunfähigkeitsbescheinigung brauchst, findest du meistens unter den Paragraphen „Arbeitsverhinderung“ oder „Krankheit“.",
  "b) Gracia Maria, vor 4 Stunden\nNein, vorher musst du erst mal eine Abmahnung bekommen. Wenn du dann allerdings noch mal fehlst, ohne Bescheid zu sagen, musst du mit der Kündigung rechnen. Such doch noch mal das Gespräch mit deinem Chef. Ihr findet bestimmt eine Lösung.",
  "c) Lina, vor 45 Minuten\nDu kannst nicht einfach kommen und gehen, wann du willst, auch wenn du die Absicht hattest, die versäumte Zeit nachzuholen. Die Arbeitszeiten sind ja vertraglich geregelt. Wenn sich Mitarbeiter nicht daran halten, ist eine Abmahnung vor der Kündigung nicht notwendig.",
  "d) Ilda, vor 3 Stunden\nWie du selbst schreibst, können im Krankheitsfall die Urlaubstage auf dein Urlaubskonto zurückgebucht werden. Du brauchst natürlich ab dem ersten Tag ein ärztliches Attest. Anders sieht es aus, wenn du einen Familienangehörigen betreust. Das ist dann nicht Sache deines Arbeitgebers.",
  "e) Antonia, vor 40 Minuten\nDiese Situation kennen doch alle Eltern. Wenn ich für meinen Sohn mal keine Betreuung finde, kann ich ihn auch ausnahmsweise mit ins Büro nehmen. Meine Chefin ist da zum Glück sehr verständnisvoll.",
  "f) Jorge, vor 2 Stunden\nAlso ich gehe immer gleich am ersten Krankheitstag zum Arzt. Sicher ist sicher. Außerdem kann es nicht schaden, wenn dich ein Doktor anschaut, wenn du dich nicht wohlfühlst. Gerade wenn du Kinder hast, ist es wichtig, dass du weißt, was dir fehlt. Du willst ja niemanden anstecken.",
  "x) Keine passende Anzeige"
];


const OPTIONS_V2 = [
  "a) Susi, vor 1 Stunde\nSolange du so nicht weniger arbeitest als im Vertrag vereinbart, müsstest du rechtlich auf der sicheren Seite sein. Wenn du es genau wissen willst, solltest du in diesem Fall einen Anwalt für Arbeitsrecht kontaktieren. Mit einer Rechtsschutzversicherung wird das auch nicht so teuer.",
  "b) Julia, vor 1 Stunde\nRein rechtlich kannst du das nicht ohne Zustimmung deiner Eltern machen. Sie müssen die Kündigung sogar unterschreiben. An deiner Stelle würde ich mir das aber noch mal überlegen. Ich kann deinen Vater jedenfalls gut verstehen. Er macht sich halt Sorgen um deine Zukunft.",
  "c) Jürgen, vor 2 Stunden\nHi, ich würde die Ausbildung auf keinen Fall abbrechen. Mit Berufen im Finanzbereich hast du gute Aussichten auf dem Arbeitsmarkt und verdienst später auch gutes Geld. Mach dir das nicht kaputt. Meine Tochter ist Steuerberaterin und sucht händeringend nach fähigen Mitarbeitern. Sie kann sich vor Aufträgen gar nicht retten.",
  "d) Jochen, vor 5 Stunden\nAlso ich würde noch warten, bis dein Kind etwas größer ist, und mich jetzt noch nicht um einen Ausbildungsplatz bewerben. Wenn es etwas selbstständiger ist, wird vieles leichter. Eine Ausbildung kannst du auch in drei oder vier Jahren noch machen. Dein Kind braucht dich jetzt.",
  "e) Achim, vor 6 Stunden\nSchutz von Leben und Gesundheit ist das oberste Gebot. Um dich und dein Kind zu schützen, darfst du während der Schwangerschaft keine körperlich anstrengenden Arbeiten verrichten und auch Tätigkeiten, bei denen du Lärm, Schmutz, Kälte usw. ausgesetzt bist, sind tabu.",
  "f) Peter, vor 12 Stunden\nWarum das denn? Es gibt doch heutzutage Möglichkeiten, das Kind unterzubringen, während man arbeitet. Können dich deine Eltern vielleicht unterstützen? Sprich mal mit deinem Chef! Wenn der sieht, dass dir die Ausbildung wichtig ist, wird sich eine Lösung finden. Aber versuch auf jeden Fall, die Ausbildung durchzuziehen.",
  "x) Keine passende Anzeige"
];

// New version for Variant 2 with updated text for Option B
const OPTIONS_V2_NEW = [
  "a) Susi, vor 1 Stunde\nSolange du so nicht weniger arbeitest als im Vertrag vereinbart, müsstest du rechtlich auf der sicheren Seite sein. Wenn du es genau wissen willst, solltest du in diesem Fall einen Anwalt für Arbeitsrecht kontaktieren. Mit einer Rechtsschutzversicherung wird das auch nicht so teuer.",
  "b) Julia, vor 1 Stunde\nDamit Minderjährige die Ausbildung verlassen, müssen die Eltern eine Kündigung unterschreiben. An deiner Stelle würde ich mir das aber noch mal überlegen. Ich kann deinen Vater jedenfalls gut verstehen. Er macht sich halt Sorgen um deine Zukunft.",
  "c) Jürgen, vor 2 Stunden\nHi, ich würde die Ausbildung auf keinen Fall abbrechen. Mit Berufen im Finanzbereich hast du gute Aussichten auf dem Arbeitsmarkt und verdienst später auch gutes Geld. Mach dir das nicht kaputt. Meine Tochter ist Steuerberaterin und sucht händeringend nach fähigen Mitarbeitern. Sie kann sich vor Aufträgen gar nicht retten.",
  "d) Jochen, vor 5 Stunden\nAlso ich würde noch warten, bis dein Kind etwas größer ist, und mich jetzt noch nicht um einen Ausbildungsplatz bewerben. Wenn es etwas selbstständiger ist, wird vieles leichter. Eine Ausbildung kannst du auch in drei oder vier Jahren noch machen. Dein Kind braucht dich jetzt.",
  "e) Achim, vor 6 Stunden\nSchutz von Leben und Gesundheit ist das oberste Gebot. Um dich und dein Kind zu schützen, darfst du während der Schwangerschaft keine körperlich anstrengenden Arbeiten verrichten und auch Tätigkeiten, bei denen du Lärm, Schmutz, Kälte usw. ausgesetzt bist, sind tabu.",
  "f) Peter, vor 12 Stunden\nWarum das denn? Es gibt doch heutzutage Möglichkeiten, das Kind unterzubringen, während man arbeitet. Können dich deine Eltern vielleicht unterstützen? Sprich mal mit deinem Chef! Wenn der sieht, dass dir die Ausbildung wichtig ist, wird sich eine Lösung finden. Aber versuch auf jeden Fall, die Ausbildung durchzuziehen.",
  "x) Keine passende Anzeige"
];

const OPTIONS_V3 = [
  "a) Thilo, vor 45 Minuten\nIn meinen Augen ist Familie das Wichtigste auf der Welt. Es ist doch auch ein Gewinn, wenn man mehr Zeit mit seinen Kindern verbringen kann und weniger gestresst ist. Ich würde mich auf jeden Fall für Teilzeit entscheiden.",
  "b) Henny, vor 1 Stunde\nAlso ich finde es nicht gut, wenn Geschäfte und Supermärkte an Samstagen so lange geöffnet sind. Ihr müsst doch bedenken, dass dort auch Menschen arbeiten müssen. Sie wollen doch ebenfalls Wochenende haben und zu ihren Familien. Ich bin ganz klar gegen längere Ladenöffnungszeiten.",
  "c) Angela, vor 6 Stunden\nJeder Arbeitnehmer hat einen Rechtsanspruch auf Teilzeitarbeit. Allerdings musst du länger als sechs Monate bei dem Unternehmen beschäftigt sein. Man muss sich das aber genau überlegen, da man nicht nur kurz- oder mittelfristig weniger verdient, sondern auch weniger Rentenansprüche hat. Schau doch mal im Internet, wie viel das ausmacht.",
  "d) Ratna, vor 2 Stunden\nSeit Kurzem haben Arbeitnehmer das Recht, eine befristete Zeit weniger zu arbeiten, aber das gilt bestimmt nicht rückwirkend. Soviel ich weiß, hast du also keinen Anspruch, in die Vollzeit zurückzukehren. Sprich doch einfach mal mit deinem Chef.",
  "e) Alex, vor 30 Minuten\nDer Samstag ist ein normaler Werktag und deshalb kann der Arbeitgeber anordnen, dass an diesem Tag auch gearbeitet wird. Dabei spielt es keine Rolle, ob du Kinder hast oder nicht. Oft ist es aber auch so, dass du dann an einem anderen Tag in der Woche frei bekommst.",
  "f) Gerhard, vor 3 Stunden\nAlso ich würde mir das gut überlegen. Wenn du bisher gut über die Runden gekommen bist, könntest du dir doch etwas mehr Freizeit gönnen. Meines Erachtens geht es hier auch um mehr Lebensqualität. Das Leben ist zu kurz, um nur zu arbeiten.",
  "x) Keine passende Anzeige"
];

const OPTIONS_V4 = [
  "a) Cécile, vor 3 Stunden\nLeider muss ich dich enttäuschen. Die Regelung ist gesetzeskonform. Das Minimum legt sogar nur bei 20 Tagen. Sei froh, dass du mehr hast. Bei manchen Arbeitgebern erhöht sich der Urlaubsanspruch mit längerer Firmenzugehörigkeit.",
  "b) Limit, vor 5 Stunden\nMeines Wissens gibt es keine gesetzliche Regelung dafür, aber sprich doch einfach mit eurem Chef. Dem ist vielleicht gar nicht klar, dass du das nicht so toll findest, wenn du immer erst so kurz vorher weißt, an welchen Tagen du arbeiten musst und wann du frei hast.",
  "c) Susanne, vor 3 Stunden\nUrlaub muss immer rechtzeitig beantragt werden, aber der Arbeitgeber ist nicht unbedingt verpflichtet, ihn zu gewähren. Wann Urlaub genommen werden darf, entscheidet der Chef. Aufgrund dringender betrieblicher Gründe kann ein Urlaubsantrag auch abgelehnt werden.",
  "d) Nico, vor 30 Minuten\nSchau doch mal in deinen Arbeitsvertrag, da ist das sicher geregelt. Soviel ich weiß, gib es keine gesetzlichen Einschränkungen für angestellte Arbeitnehmer. Allerdings darfs du keine sieben Tage am Stück arbeiten. Der Samstag gilt in Deutschland als normalen Wochentag.",
  "e) Greta, vor 2 Stunden\nIch arbeite auch im Einzelhandel und bei uns ist es so geregelt, dass man einen festen Wochentag freibekommt, wenn man immer samstags arbeitet. Das kommt mir entgegen. So kann ich entspannt unter der Woche einkaufen oder ins Schwimmbad gehen.",
  "f) Michele, vor 6 Stunden\nDas kann dein Chef nicht einfach so machen. Personelle Engpässe reichen für den Widerruf eines Urlaubsantrags nicht aus. Wenn du deinen Urlaub tatsächlich nicht antrittst, muss der Arbeitgeber alle Kosten tragen, die dir durch die Urlaubsverschiebung entstehen.",
  "x) Keine passende Anzeige"
];

const OPTIONS_V5 = [
  "a) Hans, vor 2 Stunden\nDer Arbeitgeber hat eine Fürsorgepflicht und dazu gehört auch, dass er für Fahrzeuge der Mitarbeiter eine Unterbringungsmöglichkeit zu schaffen hat, aber nur, wenn das ohne zu großen Aufwand geht. Wenn ein Unternehmen in der Innenstadt ist, gibt es einfach nicht genug Platz für ihre Parkmöglichkeiten.",
  "b) Thilo, vor 45 Minuten\nWenn die Bahn wegen eines Sturms nicht weiterfahren kann und in einem Bahnhof stehen bleiben, haben die Fahrgäste meistens Anspruch auf einen Taxigutschein, damit sie auf diese Weise ihr Ziel erreichen. Du kannst auf der Webseite der Deutschen Bahn nachlesen, unter welchen Umständen die Bahn deine Weiterfahrt bezahlt.",
  "c) Johannes, vor 3 Stunden\nWenn du auf dem Weg zur Arbeit einen Autounfall hast, bezahlt die Unfallversicherung nur Personenschäden. Sachschäden sind dabei nicht inbegriffen. Du kannst aber grundsätzlich selbst entscheiden, welches Fahrzeug du für den Arbeitsweg benutzt.",
  "d) Jacqueline, vor 30 Minuten\nDu bist dafür verantwortlich, rechtzeitig an deinem Arbeitsplatz zu erscheinen. Wie du das machst, ist deine Sache. Aber du kannst keinesfalls die Verantwortung auf die öffentlichen Verkehrsmittel schieben und dich auf den Standpunkt stellen, dass du nichts mit deiner Verspätung kannst.",
  "e) Andrej, vor 4 Stunden\nNatürlich hast du an deinem Arbeitsplatz Versicherungsschutz, aber dieser gilt nicht in allen Teilen des Gebäudes. Auf der Toilette bist du zum Beispiel nicht versichert. Warum das so ist, weiß ich aber auch nicht.",
  "f) Alex, vor 45 Minuten\nAls Arbeitnehmer musst du dafür sorgen, zum Job zu kommen. Wenn das nicht, darfst du aber keine Abmahnung bekommen. Ob du ein Taxi nehmen muss, achte darauf an, ob die Kosten dafür über deinem Arbeitslohn fair einen Tag sind und diese Kosten für dich nicht zumutbar sind.",
  "x) Keine passende Anzeige"
];

const OPTIONS_V5_NEW = [
    "a) Enric, vor 2 Stunden\nDer Arbeitgeber hat eine Fürsorgepflicht und dazu gehört auch, dass er für Fahrzeuge der Mitarbeiter eine Unterbringungsmöglichkeit zu schaffen hat, aber nur, wenn das ohne zu großen Aufwand geht...",
    "b) Mallory, vor 45 Minuten\nWenn die Bahn wegen eines Sturms nicht weiterfahren kann und in einem Bahnhof stehen bleiben, haben die Fahrgäste meistens Anspruch auf einen Taxigutschein...",
    "c) Mao, vor 3 Stunden\nWenn du auf dem Weg zur Arbeit einen Autounfall hast, bezahlt die Unfallversicherung nur Personenschäden. Sachschäden sind dabei nicht inbegriffen...",
    "d) Nastasia, vor 30 Minuten\nDu bist dafür verantwortlich, rechtzeitig an deinem Arbeitsplatz zu erscheinen. Wie du das machst, ist deine Sache...",
    "e) Bartomeu, vor 4 Stunden\nNatürlich hast du an deinem Arbeitsplatz Versicherungsschutz, aber dieser gilt nicht in allen Teilen des Gebäudes...",
    "f) Sterre, vor 45 Minuten\nAls Arbeitnehmer musst du dafür sorgen, zum Job zu kommen. Wenn das nicht, darfst du aber keine Abmahnung bekommen...",
    "x) Keine passende Anzeige"
];


const OPTIONS_V6 = [
    "a) Andres, vor 8 Minuten\nWenn du in Sportkleidung in die Firma kommst und dich dort noch umziehst, ist das Privatsache. Du musst dafür sorgen, dass du pünktlich mit deiner Arbeit beginnen kannst. In diesem Fall ist die Umkleidezeit keine Arbeitszeit.",
    "b) Paula, vor 3 Stunden\nDer Weg zur Arbeit ist private Zeit. Du trägst die Verantwortung dafür, pünktlich vor Ort zu sein, egal wie weit dein Weg ist. Wenn du z.B. im Stau stehst oder die S-Bahn streikt und du deshalb zu spät kommst, musst du die Zeit nacharbeiten.",
    "c) Raimund, vor 6 Stunden\nArbeitnehmer/innen haben in der Regel alle zwei Jahre Anspruch auf fünf Tage Bildungsurlaub. Die Gesetze sind aber nicht in jedem Bundesland gleich. So variiert zum Beispiel die Anzahl der Tage für Bildungsurlaub je nachdem, ob du Voll- oder Teilzeit tätig bist.",
    "d) Hubert, vor 38 Minuten\nIch finde das Tragen von Dienstkleidung absolut veraltet. Warum müssen alle im Unternehmen gleich gekleidet sein? Jeder Mensch hat doch seinen eigenen Stil, mit dem er sich wohlfühlt. Ich kann verstehen, dass du die Uniform nicht auch noch im Zug tragen möchtest.",
    "e) Yvonne, vor 7 Stunden\nWenn du selbst entscheidest, eine Fortbildung zu besuchen, und das vorher nicht mit deinem Arbeitgeber absprichst, ist das reines Privatvergnügen. Schickt dein Chef dich allerdings seinerseits auf ein Seminar, handelt es sich um Arbeitszeit.",
    "f) Winfried, vor 25 Minuten\nDas ist ein schwieriges Thema. Wenn du während der Reise zum Beispiel deinen Termin vorbereitest oder mit dem Laptop ein Protokoll schreibst, ist das Arbeitszeit. Wenn du dich aber mit privaten Dingen wie einem Roman oder einem privaten Telefonat beschäftigst, gilt das als Freizeit.",
    "x) Keine passende Anzeige"
];

const OPTIONS_V7 = [
    "a) Stefan, vor 4 Stunden\nKaum jemandem gelingt es, 45 Jahre durchgehend so ein hohes Gehalt zu verdienen, dass er später die Höchstrente bekommt Das liegt schon allein daran, dass man während der Ausbildung und in den ersten Berufsjahren weniger verdient.",
    "b) Jana, vor 34 Minuten\nAuch Firmen helfen, für die Zukunft vorzusorgen, denn man kann gar nicht früh genug damit anfangen. Erkundige dich bei deinem Arbeitgeber, ob eine betriebliche Altersvorsorge angeboten wird. Wenn man dann später Rentner ist, bekommt man eine zusätzliche Rente.",
    "c) Antje, vor 7 Stunden\nWenn man mindestens fünf Jahre versicherungspflichtig beschäftigt war, hat man Anspruch auf die gesetzliche Rente. Dabei spielt es keine Rolle, oh man Teilzeit oder Vollzeit gearbeitet hat. Es gibt aber noch Unterschiede zwischen Ost und West.",
    "d) Jonas, vor 2 Stunden\nMan hat das Recht, früher als mit 67 Jahren in Rente zu gehen, aber man muss Abschläge in Kauf nehmen. Im Moment sind das für jeden Monat, den man weniger arbeitet, 0,3 Prozent weniger. Man muss sich das genau ausrechnen, ob man sich das leisten kann.",
    "e) Jörg, vor 5 Stunden\nFür alle, die nach 1964 geboren sind, gilt dass sie bis 67 Jahre arbeiten müssen. Außer, wenn man mit 65 schon 45 Beitragsjahre nachweisen kann, also Jahre, in denen man in die Rentenversicherung eingezahlt hat.",
    "f) Lia, vor 12 Stunden\nWenn man jung ist, sollte man sein Leben doch erst einmal genießen. Über Alter und Krankheit kann man sich immer noch Gedanken machen. Wer weiß, ob es später, wenn wir so weit sind, überhaupt noch eine Rente geben wird.",
    "x) Keine passende Anzeige"
];

// --- EXERCISES ---

export const EXERCISES_TEIL_3: Exercise[] = [
  {
    id: "lesen-t3-v1",
    title: "Lesen Teil 3 (Variante 1)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f. Welche Anzeige passt zu welcher Situation? Markieren Sie x, wenn keine Anzeige passt.",
    questions: [
      {
        id: "t3-v1-q10",
        text: "10. Gabi: Ich hatte gerade Urlaub und gleich am ersten Urlaubstag wurde meine Kleine krank und ich musste sie vier Tage lang pflegen. Wenn ich im Urlaub krank werde, kann ich die Tage zurückbekommen. Aber wie ist das, wenn das Kind krank wird?",
        options: OPTIONS_V1,
        correctAnswer: OPTIONS_V1[3], // d
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist d). Elli erklärt: 'Das gilt allerdings nicht, wenn du dich um ein krankes Kind kümmern musst. In diesem Fall gelten die Urlaubstage als genommen.' Das beantwortet Gabis Frage direkt (leider negativ)."
      },
      {
        id: "t3-v1-q11",
        text: "11. Charlotte: Ich konnte leider mal wieder nicht zur Arbeit gehen, weil mein Kind krank war. Als ich heute angerufen habe, hat mein Chef total überzogen reagiert und mir mit Kündigung gedroht, wenn ich mehr als einen Tag fehle. Das geht doch nicht, oder?",
        options: OPTIONS_V1,
        correctAnswer: OPTIONS_V1[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Es gibt keine Anzeige, die spezifisch auf die Drohung der Kündigung bei 'Kind krank' eingeht. Sabine (e) spricht über 'Kind ins Büro mitnehmen', aber das ist eine Lösung für die Zukunft, keine rechtliche Klärung der Kündigungsdrohung."
      },
      {
        id: "t3-v1-q12",
        text: "12. Lars: Ich bin letzten Montag mit furchtbaren Kopfschmerzen aufgewacht und konnte nicht aufstehen. Leider habe ich vergessen, meinen Arbeitgeber anzurufen, und bin im Bett geblieben. Jetzt will mein Chef mir kündigen, weil ich unentschuldigt gefehlt habe. Geht das so einfach?",
        options: OPTIONS_V1,
        correctAnswer: OPTIONS_V1[1], // b
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist b). Marion erklärt, dass man normalerweise erst eine 'Abmahnung' bekommen muss, bevor man gekündigt wird, es sei denn, man fehlt wiederholt unentschuldigt."
      },
      {
        id: "t3-v1-q13",
        text: "13. Kamil: Gestern war ich krank. Als ich heute wieder im Büro war, wollte mein Chef direkt die Krankschreibung haben. Ich war immer der Meinung, die braucht man erst nach drei Tagen?",
        options: OPTIONS_V1,
        correctAnswer: OPTIONS_V1[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Günther erklärt: 'Ab wann du eine Arbeitsunfähigkeitsbescheinigung brauchst, ... steht in deinem Arbeitsvertrag.' Es gibt also keine pauschale 3-Tage-Regel."
      }
    ]
  },
  {
    id: "lesen-t3-v1-new",
    title: "Lesen Teil 3 (Variante 1 Neu 08.2024)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f. (Neue Version)",
    questions: [
      {
        id: "t3-v1-new-q10",
        text: "10. Gabi: Ich hatte gerade Urlaub und gleich am ersten Urlaubstag wurde meine Kleine krank... (wie oben)",
        options: OPTIONS_V1_NEW_D,
        correctAnswer: OPTIONS_V1_NEW_D[3], // d (Updated Text)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist d). Der neue Text von Elli ('Anders sieht es aus, wenn du einen Familienangehörigen betreust. Das ist dann nicht Sache deines Arbeitgebers') bestätigt, dass man die Urlaubstage nicht zurückbekommt."
      },
      {
        id: "t3-v1-new-q11",
        text: "11. Charlotte: ... Chef hat total überzogen reagiert... (wie oben)",
        options: OPTIONS_V1_NEW_D,
        correctAnswer: OPTIONS_V1_NEW_D[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Keine passenden Informationen."
      },
      {
        id: "t3-v1-new-q12",
        text: "12. Lars: ... vergessen, meinen Arbeitgeber anzurufen... (wie oben)",
        options: OPTIONS_V1_NEW_D,
        correctAnswer: OPTIONS_V1_NEW_D[1], // b
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist b). Siehe Erklärung oben."
      },
      {
        id: "t3-v1-new-q13",
        text: "13. Kamil: ... Chef wollte direkt die Krankschreibung haben... (wie oben)",
        options: OPTIONS_V1_NEW_D,
        correctAnswer: OPTIONS_V1_NEW_D[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Siehe Erklärung oben."
      }
    ]
  },
  {
    id: "lesen-t3-v1-2025",
    title: "Lesen Teil 3 (Variante 1 Neu 07.02.2025)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f. (Version 2025)",
    questions: [
      {
        id: "t3-v1-2025-q10",
        text: "10. Petra: Ich konnte leider mal wieder nicht zur Arbeit gehen, weil mein Kind krank war. Als ich heute angerufen habe, hat mein Chef total überzogen reagiert und mir mit Kündigung gedroht...",
        options: OPTIONS_V1_2025,
        correctAnswer: OPTIONS_V1_2025[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Entspricht der Situation von Charlotte in der alten Version. Keine passende Anzeige."
      },
      {
        id: "t3-v1-2025-q11",
        text: "11. Giovanni: Ich bin letzten Montag mit furchtbaren Kopfschmerzen aufgewacht und konnte nicht aufstehen. Leider habe ich vergessen, meinen Arbeitgeber anzurufen...",
        options: OPTIONS_V1_2025,
        correctAnswer: OPTIONS_V1_2025[1], // b (Gracia Maria)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist b). Gracia Maria gibt den Tipp bezüglich Abmahnung vs. Kündigung."
      },
      {
        id: "t3-v1-2025-q12",
        text: "12. Leo: Gestern war ich krank. Als ich heute wieder im Büro war, wollte mein Chef direkt die Krankschreibung haben...",
        options: OPTIONS_V1_2025,
        correctAnswer: OPTIONS_V1_2025[0], // a (Jose Cristobal)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Jose Cristobal erklärt, dass das im Arbeitsvertrag geregelt ist."
      },
      {
        id: "t3-v1-2025-q13",
        text: "13. Ines Maria: Ich hatte gerade Urlaub und gleich am ersten Urlaubstag wurde meine Kleine krank...",
        options: OPTIONS_V1_2025,
        correctAnswer: OPTIONS_V1_2025[3], // d (Ilda)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist d). Ilda erklärt, dass Krankheit des Kindes im Urlaub nicht zur Rückbuchung der Tage führt."
      }
    ]
  },
  {
    id: "lesen-t3-v2",
    title: "Lesen Teil 3 (Variante 2)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f.",
    questions: [
      {
        id: "t3-v2-q10",
        text: "10. Inka: Ich bin Auszubildende in einem Büro und muss immer pünktlich Feierabend machen, weil ich meinen einjährigen Sohn von der Krippe abholen muss. Mein Chef sieht das gar nicht gern und droht mir jetzt sogar mit Kündigung.",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Susi sagt: 'Solange du so nicht weniger arbeitest als im Vertrag vereinbart, müsstest du rechtlich auf der sicheren Seite sein.' Das hilft Inka."
      },
      {
        id: "t3-v2-q11",
        text: "11. Jacqueline: Hallo Leute! Vor ein paar Monaten habe ich mit einer Ausbildung begonnen. Und jetzt bin ich schwanger... Was soll ich bloß machen? Es wird bestimmt schwierig, Kind und Arbeit zu vereinbaren. Soll ich die Ausbildung abbrechen?",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[5], // f
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist f). Peter motiviert: 'Versuch auf jeden Fall, die Ausbildung durchzuziehen' und spricht Möglichkeiten der Unterbringung an."
      },
      {
        id: "t3-v2-q12",
        text: "12. Hans-Peter: Guten Abend, ich bin Ende 40 und mein Sohn ist inzwischen erwachsen. Jetzt möchte ich beruflich was ganz Neues machen und eine Ausbildung zum Steuerfachangestellten anfangen. Meint ihr, ich habe in meinem Alter noch Chancen?",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Keine Anzeige geht auf eine 'Neuausbildung mit Ende 40' ein. Jürgen (c) rät nur davon ab, eine Ausbildung *abzubrechen*, das passt hier nicht."
      },
      {
        id: "t3-v2-q13",
        text: "13. Max: Hallo, ich mache momentan eine Ausbildung zum Einzelhandelskaufmann. Ich habe noch ein Jahr bis zum Abschluss und habe wirklich keine Lust mehr. Mein Vater möchte, dass ich die Ausbildung fertig mache. Ich bin noch nicht 18. Kann ich trotzdem einfach kündigen?",
        options: OPTIONS_V2,
        correctAnswer: OPTIONS_V2[1], // b
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist b). Julia erklärt: 'Rein rechtlich kannst du das [Kündigen] nicht ohne Zustimmung deiner Eltern machen', da Max noch minderjährig ist."
      }
    ]
  },
  {
    id: "lesen-t3-v2-new",
    title: "Lesen Teil 3 (Variante 2 Neu 07.03.2025)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f. (Neue Formulierung - Minderjährige)",
    questions: [
      {
        id: "t3-v2-new-q10",
        text: "10. Inka: Ich bin Auszubildende in einem Büro... (wie oben)",
        options: OPTIONS_V2_NEW,
        correctAnswer: OPTIONS_V2_NEW[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Siehe oben."
      },
      {
        id: "t3-v2-new-q11",
        text: "11. Jacqueline: Hallo Leute! Vor ein paar Monaten habe ich mit einer Ausbildung begonnen... (wie oben)",
        options: OPTIONS_V2_NEW,
        correctAnswer: OPTIONS_V2_NEW[5], // f
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist f). Siehe oben."
      },
      {
        id: "t3-v2-new-q12",
        text: "12. Hans-Peter: Guten Abend, ich bin Ende 40... (wie oben)",
        options: OPTIONS_V2_NEW,
        correctAnswer: OPTIONS_V2_NEW[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Siehe oben."
      },
      {
        id: "t3-v2-new-q13",
        text: "13. Max: Hallo, ich mache momentan eine Ausbildung zum Einzelhandelskaufmann. ... Ich bin noch nicht 18. Kann ich trotzdem einfach kündigen?",
        options: OPTIONS_V2_NEW,
        correctAnswer: OPTIONS_V2_NEW[1], // b (Updated Text)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist b). Die neue Formulierung 'Damit Minderjährige die Ausbildung verlassen, müssen die Eltern eine Kündigung unterschreiben' bestätigt direkt, dass Max nicht alleine kündigen kann."
      }
    ]
  },
  {
    id: "lesen-t3-v3",
    title: "Lesen Teil 3 (Variante 3)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f.",
    questions: [
      {
        id: "t3-v3-q10",
        text: "10. Som: Meine Kinder sind unter der Woche ganztags in der Kita, damit ich Vollzeit arbeiten kann. Jetzt soll ich in den nächsten Wochen samstags ins Büro kommen. Ich habe aber niemanden, der da auf meine Kinder aufpassen kann. Kann der Arbeitgeber das verlangen?",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[4], // e
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist e). Alex erklärt: 'Der Samstag ist ein normaler Werktag und deshalb kann der Arbeitgeber anordnen, dass an diesem Tag auch gearbeitet wird.'"
      },
      {
        id: "t3-v3-q11",
        text: "11. Reinhold: Ich arbeite seit zwölf Jahren 20 Stunden die Woche und würde jetzt gerne, weil die Kinder aus dem Haus sind, meine Arbeitszeit aufstocken und wieder Vollzeit arbeiten. Habe ich ein Recht darauf?",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[3], // d
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist d). Ratna erklärt die Rechtslage zur 'Brückenteilzeit' (Rückkehrrecht), aber weist darauf hin, dass dies 'bestimmt nicht rückwirkend' gilt, wenn man schon lange Teilzeit arbeitet ohne vorherige Befristung."
      },
      {
        id: "t3-v3-q12",
        text: "12. Mandy: Seit zwei Jahren arbeite ich Vollzeit in einem Unternehmen und dieser Job macht mir auch viel Spaß. Aus familiären Gründen würde ich gerne eine dreijährige Auszeit nehmen. Ich überlege, ob ich mir das finanziell leisten kann.",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Keine Anzeige berät über die 'finanzielle Leistbarkeit einer Auszeit'."
      },
      {
        id: "t3-v3-q13",
        text: "13. Nici: Ich bekomme jetzt das zweite Kind und werde danach wahrscheinlich erst mal Teilzeit arbeiten. Jetzt habe ich ziemlich große Angst, dass ich in meiner Karriere den Anschluss verpasse.",
        options: OPTIONS_V3,
        correctAnswer: OPTIONS_V3[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Thilo bestärkt darin, dass 'Familie das Wichtigste' ist und man sich für Teilzeit entscheiden sollte."
      }
    ]
  },
  {
    id: "lesen-t3-v4",
    title: "Lesen Teil 3 (Variante 4)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f.",
    questions: [
      {
        id: "t3-v4-q10",
        text: "10. Thia: Voll gemein, ich habe nur 25 Urlaubstage! Mein Freund hat hingegen 30 Tage im Jahr. Ich frage mich, ob mir nicht auch mehr Tage zustehen.",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Cécile erklärt, dass das gesetzliche Minimum sogar nur bei 20 Tagen liegt und 25 somit gesetzeskonform sind."
      },
      {
        id: "t3-v4-q11",
        text: "11. Marilena: Ich arbeite im Einzelhandel und bei uns gilt jede Woche ein anderer Dienstplan. Wir bekommen den Plan immer erst am Ende der Vorwoche und deshalb können wir unsere Freizeit natürlich auch nicht richtig planen. Ist das erlaubt?",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[1], // b
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist b). Limit schlägt vor, mit dem Chef zu sprechen, da es keine klare gesetzliche Regelung für die Ankündigungsfrist von Dienstplänen gibt (außer 'billiges Ermessen')."
      },
      {
        id: "t3-v4-q12",
        text: "12. Hans: Ich habe nach der Genehmigung meines Urlaubs diesen gebucht und jetzt hat mein Chef gemerkt, dass ein anderer Kollege schon vorher zur selben Zeit Urlaub eingereicht hat. Jetzt will mir meinen wieder streichen. Darf er das?",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[5], // f
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist f). Michele erklärt, dass 'personelle Engpässe' für einen Widerruf des Urlaubs nicht ausreichen."
      },
      {
        id: "t3-v4-q13",
        text: "13. Lisa: Ich mache zurzeit ein Pflichtpraktikum in einem Unternehmen und arbeite von Montag bis Freitag acht Stunden täglich. Jetzt soll ich nächsten Samstag auch noch kommen. Bin ich dazu verpflichtet?",
        options: OPTIONS_V4,
        correctAnswer: OPTIONS_V4[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Keine Anzeige thematisiert spezifisch 'Pflichtpraktikum' und 'Samstagsarbeit' zusätzlich zur Vollzeitwoche. Nico (d) spricht allgemein über angestellte Arbeitnehmer."
      }
    ]
  },
  {
    id: "lesen-t3-v5",
    title: "Lesen Teil 3 (Variante 5)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f.",
    questions: [
      {
        id: "t3-v5-q10",
        text: "10. Mikke: Heute hatte ich auf dem Weg zur Arbeit einen Unfall. Ich habe noch einen Umweg über der Kita gemacht, bin gestolpert und habe mir den Knöchel gebrochen. Bin ich denn jetzt versichert? Ich habe ja nicht den direkten Weg zur Arbeit genommen.",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Normalerweise sind Wege zur Kita versichert, aber keine der Anzeigen (a-f) bestätigt dies explizit. Johannes (c) spricht über Autounfälle und Sachschäden."
      },
      {
        id: "t3-v5-q11",
        text: "11. Ludmilla: Ich habe eine Abmahnung bekommen, weil ich regelmäßig zu spät zur Arbeit komme. Ich fahre immer rechtzeitig von zu Hause weg und finde dann bei der Firma keine Parkmöglichkeit. Muss der Arbeitgeber nicht eigentlich seinen Mitarbeiter Parkplatz stellen?",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Hans erklärt, dass der Arbeitgeber in der Innenstadt oft 'nicht genug Platz' hat und nur 'wenn das ohne zu großen Aufwand geht' Parkplätze stellen muss."
      },
      {
        id: "t3-v5-q12",
        text: "12. Peter: Ich wollte heute Morgen mit der S-Bahn zur Arbeit fahren, aber diese ist wegen des Unwetters ausgefallen. So hatte ich keine Möglichkeit ins Büro zu kommen. Da ich kein Auto habe, hätte ich ein Taxi nehmen müssen?",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[5], // f
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist f). Alex diskutiert die Frage, ob man ein Taxi nehmen muss und ob die Kosten 'zumutbar' sind."
      },
      {
        id: "t3-v5-q13",
        text: "13. Ingo: Immer das Gleiche. Der Bus kommt zu spät, steht im Stau oder fällt aus. Jetzt habe ich Ärger mit meinem Chef, weil ich öfter mit Verspätung im Büro erscheine. Bin ich verpflichtet, immer ein früherer Bus zu nehmen, damit ich pünktlich bin?",
        options: OPTIONS_V5,
        correctAnswer: OPTIONS_V5[3], // d
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist d). Jacqueline sagt klar: 'Du bist dafür verantwortlich, rechtzeitig an deinem Arbeitsplatz zu erscheinen.'"
      }
    ]
  },
  {
    id: "lesen-t3-v5-new",
    title: "Lesen Teil 3 (Variante 5 Neu)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f. (Mit neuen Namen)",
    questions: [
      {
        id: "t3-v5-new-q10",
        text: "10. Natalie: Ich habe eine Abmahnung bekommen, weil ich regelmäßig zu spät zur Arbeit komme... (wie oben)",
        options: OPTIONS_V5_NEW,
        correctAnswer: OPTIONS_V5_NEW[0], // a (Enric)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Enric erklärt die Lage zu Parkplätzen."
      },
      {
        id: "t3-v5-new-q11",
        text: "11. Batiste: Ich wollte heute Morgen mit der S-Bahn zur Arbeit fahren... (wie oben)",
        options: OPTIONS_V5_NEW,
        correctAnswer: OPTIONS_V5_NEW[5], // f (Sterre)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist f). Sterre diskutiert die Zumutbarkeit von Taxikosten."
      },
      {
        id: "t3-v5-new-q12",
        text: "12. Alfons: Immer das Gleiche. Der Bus kommt zu spät... (wie oben)",
        options: OPTIONS_V5_NEW,
        correctAnswer: OPTIONS_V5_NEW[3], // d (Nastasia)
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist d). Nastasia betont die Eigenverantwortung."
      },
      {
        id: "t3-v5-new-q13",
        text: "13. Karel: Heute hatte ich auf dem Weg zur Arbeit einen Unfall... (wie oben)",
        options: OPTIONS_V5_NEW,
        correctAnswer: OPTIONS_V5_NEW[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Siehe Erklärung oben."
      }
    ]
  },
  {
    id: "lesen-t3-v6",
    title: "Lesen Teil 3 (Variante 6)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f.",
    questions: [
      {
        id: "t3-v6-q10",
        text: "10. Claudia: Ich muss während der Arbeit eine Uniform tragen. Mir ist es unangenehm, die schon morgens in der Bahn anzuhaben, und ich möchte mich lieber im Hotel umziehen. Muss ich dafür früher kommen oder gilt die Umkleidezeit als Arbeitszeit?",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Andres (a) sagt 'Umkleidezeit keine Arbeitszeit', Hubert (d) redet nur über Stil. Aber neuere Urteile sehen Umkleidezeit oft als Arbeitszeit, wenn Uniform Pflicht ist. In diesem Testkontext passt jedoch keine Anzeige *bestätigend* zu Claudias Wunsch (oder Andres verneint es direkt). Die offizielle Lösung ist oft X, weil Andres von 'Sportkleidung' spricht, nicht Uniform."
      },
      {
        id: "t3-v6-q11",
        text: "11. Maisel: Gestern war ich für einen Tag bei einem Kunden in Norddeutschland. Ich bin mit dem Zug gefahren und habe während der Fahrt gelesen. Insgesamt war ich elf Stunden unterwegs und habe Überstunden geltend gemacht. Die will mein Arbeitgeber nicht anerkennen.",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[5], // f
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist f). Winfried erklärt: 'Wenn du dich aber mit privaten Dingen wie einem Roman ... beschäftigst, gilt das als Freizeit.'"
      },
      {
        id: "t3-v6-q12",
        text: "12. Cristof: Ich war am Wochenende auf einer Fortbildung, die für meine Arbeit relevant war. Ich wollte mir jetzt einen Urlaubstag gutschreiben lassen, aber meine Chefin sagt, das sei meine private Angelegenheit...",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[4], // e
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist e). Yvonne sagt: 'Wenn du selbst entscheidest ... und das vorher nicht mit deinem Arbeitgeber absprichst, ist das reines Privatvergnügen.'"
      },
      {
        id: "t3-v6-q13",
        text: "13. Samira: Ich fahre morgens mit dem Fahrrad in die Firma, bin immer pünktlich um 9.00 Uhr da und mache mich dann fertig. Ab sofort soll ich früher kommen und darf mich nicht mehr während der Arbeitszeit umziehen. Ist das korrekt?",
        options: OPTIONS_V6,
        correctAnswer: OPTIONS_V6[0], // a
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist a). Andres spricht über Sportkleidung (Fahrrad fahren): 'In diesem Fall ist die Umkleidezeit keine Arbeitszeit.'"
      }
    ]
  },
  {
    id: "lesen-t3-v7",
    title: "Lesen Teil 3 (Variante 7)",
    module: ModuleType.LESEN,
    subType: "Teil 3",
    instruction: "Lesen Sie die Situationen 10–13 und die Anzeigen a–f.",
    questions: [
      {
        id: "t3-v7-q10",
        text: "10. Torsten: Wir hatten neulich im Büro eine Diskussion darüber, ab wann man in Rente gehen kann. Ich dachte immer, man muss bis 67 arbeiten. Aber meine Kollegin meinte, dass sie zwei Jahre früher in Rente gehen wird. Geht das überhaupt?",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[4], // e
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist e). Jörg erklärt, dass man mit 65 gehen kann, wenn man '45 Beitragsjahre nachweisen kann'."
      },
      {
        id: "t3-v7-q11",
        text: "11. Hella: Meine Rente wird ja nicht so berauschend sein, vor allem, weil ich wegen meiner zwei Kinder einige Jahre nicht oder nur Teilzeit gearbeitet habe. Es ist ja wohl schon so, dass ich dafür jetzt irgendwie bestraft werde, oder?",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[6], // x
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist x). Keine Anzeige geht spezifisch auf die Anrechnung von Erziehungszeiten für die Rente ein."
      },
      {
        id: "t3-v7-q12",
        text: "12. Petra: Mein Mann geht in zwei Jahren in Rente. Ich müsste noch vier Jahre arbeiten. Wir haben uns überlegt, dass wir zusammen in Rente gehen und noch viele gemeinsame Jahre mit verschiedenen Aktivitäten erleben wollen. Welche Folgen hätte das?",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[3], // d
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist d). Jonas erklärt: 'man muss Abschläge in Kauf nehmen ... 0,3 Prozent weniger' pro Monat."
      },
      {
        id: "t3-v7-q13",
        text: "13. Leni: Ich bin ja noch jung und denke überhaupt noch nicht an die Rente. Aber es wird ja immer wieder gesagt, dass die normale Rente irgendwann nicht mehr ausreichen wird. Was kann ich denn jetzt schon für später tun?",
        options: OPTIONS_V7,
        correctAnswer: OPTIONS_V7[1], // b
        points: 5,
        part: "Teil 3",
        explanation: "Richtig ist b). Jana rät: 'Erkundige dich bei deinem Arbeitgeber, ob eine betriebliche Altersvorsorge angeboten wird.'"
      }
    ]
  }
];