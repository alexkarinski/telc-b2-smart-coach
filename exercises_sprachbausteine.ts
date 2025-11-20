import { Exercise, ModuleType } from "./types";

// --- OPTIONS LISTS ---
const OPTIONS_LIST_T1_V1_OLD = [
    "a) BESTIMMT", "b) DA", "c) DAMIT", "d) FÜR", "e) SICHER", 
    "f) SONDERN", "g) UM", "h) ÜBER", "i) WEGEN", "j) WIE"
];
const OPTIONS_LIST_T1_V1_NEW = [
    "a) GERNE", "b) DA", "c) DAMIT", "d) FÜR", "e) UM", 
    "f) ÜBER", "g) WEGEN", "h) WIE", "i) BEREITS", "j) ZUR"
]; 
const OPTIONS_LIST_T1_V2 = [
    "a) AUFGRUND", "b) DA", "c) DABEI", "d) DAMIT", "e) DASS",
    "f) DENNOCH", "g) INDEM", "h) OB", "i) OBWOHL", "j) SOBALD"
];
const OPTIONS_LIST_T1_V3 = [
    "a) ANSONSTEN", "b) DAFÜR", "c) DAHIN", "d) DAVON", "e) DEREN",
    "f) DESSEN", "g) HIERÜBER", "h) WAS", "i) WIE", "j) ANBEI"
];
const OPTIONS_LIST_T1_V3_NEW = [
    "a) ANSONSTEN", "b) DAFÜR", "c) DAHIN", "d) DAVON", "e) DEREN",
    "f) DESSEN", "g) ZURÜCK", "h) WAS", "i) WIE", "j) ANBEI", "k) HIERÜBER"
];
const OPTIONS_LIST_T1_V4 = [
    "a) ANHALTENDE", "b) AUSDRÜCKLICH", "c) MÖGLICH", "d) NÖTIG", "e) NUR",
    "f) SOWIE", "g) SPÄTERE", "h) VORZEITIGE", "i) WEGEN", "j) ZUM"
];
const OPTIONS_LIST_T1_V5 = [
    "a) ALS", "b) BEREITS", "c) EVENTUELL", "d) IN", "e) MANCHMAL",
    "f) DARAUF", "g) UNTER", "h) WAS", "i) WIE", "j) ZUM"
];
const OPTIONS_LIST_T1_V6 = [
    "a) DASS", "b) DESHALB", "c) INNERHALB", "d) OB", "e) WÄHREND",
    "f) WEIL", "g) WIE", "h) ZU", "j) ZUM", "k) ZUR"
];

// Helper texts for context (optional, helps reading flow in explanation/display)
const TEXT_T1_V1_OLD = `Sehr geehrte Damen und Herren,
zunächst bedanke ich mich für das freundliche, informative Telefonat. Wie besprochen übersende ich Ihnen meine Bewerbungsunterlagen. Auf Ihrer Homepage habe ich mich bereits über das Ausbildungskonzept Ihrer Hotelkette informiert und bin ...... [46] ......, in Ihrem Haus vielfältige Einblicke in die Arbeit eines Hotelkaufmannes erhalten zu können.
Ich arbeite sehr gerne mit Menschen zusammen. Teamfähigkeit und Flexibilität bringe ich als Voraussetzung mit und interessiere mich ...... [47] ...... die Abläufe in der Hotelverwaltung. Ein Praktikum in der Hotelbranche möchte ich deshalb absolvieren, ...... [48] ...... ich nicht nur im Umgang mit Menschen, ...... [49] ...... auch im Planen und Organisieren meine großen Stärken sehe.
Ich erwarte von diesem Praktikum, mein theoretisches Wissen durch praktische Erfahrung weiter vertiefen zu können, ...... [50] ...... mich dann mit meiner Berufswahl endgültig sicher zu sein. ...... [51] ...... überzeuge ich Sie in einem persönlichen Gespräch. Über eine Einladung würde ich mich sehr freuen.`;

const TEXT_T1_V5 = `Sehr geehrte Frau Sabani,
es freut mich sehr, dass ich in meinem Vorstellungsgespräch einen ersten positiven Eindruck hinterlassen habe und Sie mich ...... [46] ...... Probearbeiten einladen. Natürlich nutze ich sehr gern diese Gelegenheit, meine Fähigkeiten ...... [47] ...... Beweis zu stellen. Von den beiden Terminvorschlägen, die Sie mir geschickt haben, passt mir der nächste Dienstag am besten. Ich freue mich schon ...... [48] ...... bei dieser Gelegenheit ...... [49] ...... einen ersten Einblick in die Arbeitsabläufe und Abteilungen in Ihrem Haus zu bekommen.
Stellen Sie mir die Arbeitskleidung für diesen Tag zur Verfügung oder soll ich selbst spezielle Kleidung mitbringen? Gibt es noch irgendwas, ...... [50] ...... ich vorher besorgen muss? Brauche ich ...... [51] ...... noch eine ärztliche Bescheinigung vom Gesundheitsamt?
Danke im Voraus für eine kurze Beantwortung meiner Fragen.`;


export const EXERCISES_SPRACHBAUSTEINE: Exercise[] = [
  // ============================================================
  // TEIL 1
  // ============================================================
  {
    id: "sb-t1-v1-old",
    title: "Sprachbausteine Teil 1 (Variante 1 Alt)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51. Welche Lösung (a–j) passt am besten?",
    questions: [
      {
        id: "sb-t1-v1-old-46",
        text: "Lücke 46",
        options: OPTIONS_LIST_T1_V1_OLD,
        correctAnswer: "e) SICHER",
        part: "Teil 1",
        contextText: TEXT_T1_V1_OLD,
        explanation: "🇩🇪 Richtig: 'sicher'. Die Wendung lautet 'sich (Dativ) einer Sache sicher sein' oder umgangssprachlich 'ich bin sicher' drückt Überzeugung aus. Hier passt es semantisch am besten: Der Bewerber ist überzeugt, dass er Einblicke erhalten wird.\n\n🇷🇺 Правильно: 'sicher'. Выражение 'быть уверенным в чем-то' (ich bin mir sicher). Кандидат уверен, что получит опыт."
      },
      {
        id: "sb-t1-v1-old-47",
        text: "Lücke 47",
        options: OPTIONS_LIST_T1_V1_OLD,
        correctAnswer: "d) FÜR",
        part: "Teil 1",
        contextText: TEXT_T1_V1_OLD,
        explanation: "🇩🇪 Richtig: 'für'. Das Verb ist 'sich interessieren für' + Akkusativ.\n\n🇷🇺 Правильно: 'für'. Глагол 'интересоваться чем-либо' требует предлога 'für' (interessieren für die Abläufe)."
      },
      {
        id: "sb-t1-v1-old-48",
        text: "Lücke 48",
        options: OPTIONS_LIST_T1_V1_OLD,
        correctAnswer: "b) DA",
        part: "Teil 1",
        contextText: TEXT_T1_V1_OLD,
        explanation: "🇩🇪 Richtig: 'da'. Kausaler Nebensatz (Synonym zu 'weil'). Es wird ein Grund genannt.\n\n🇷🇺 Правильно: 'da'. Это союз 'так как/потому что', вводящий причину (почему он хочет пройти практику)."
      },
      {
        id: "sb-t1-v1-old-49",
        text: "Lücke 49",
        options: OPTIONS_LIST_T1_V1_OLD,
        correctAnswer: "f) SONDERN",
        part: "Teil 1",
        contextText: TEXT_T1_V1_OLD,
        explanation: "🇩🇪 Richtig: 'sondern'. Teil der Doppelkonjunktion 'nicht nur ..., sondern auch ...'.\n\n🇷🇺 Правильно: 'sondern'. Часть двойного союза 'не только ..., но и ...' (nicht nur ..., sondern auch)."
      },
      {
        id: "sb-t1-v1-old-50",
        text: "Lücke 50",
        options: OPTIONS_LIST_T1_V1_OLD,
        correctAnswer: "g) UM",
        part: "Teil 1",
        contextText: TEXT_T1_V1_OLD,
        explanation: "🇩🇪 Richtig: 'um'. Finale Infinitivkonstruktion: 'um ... zu'. Es drückt ein Ziel aus.\n\n🇷🇺 Правильно: 'um'. Конструкция 'um ... zu' означает 'чтобы' (для того, чтобы быть уверенным)."
      },
      {
        id: "sb-t1-v1-old-51",
        text: "Lücke 51",
        options: OPTIONS_LIST_T1_V1_OLD,
        correctAnswer: "a) BESTIMMT",
        part: "Teil 1",
        contextText: TEXT_T1_V1_OLD,
        explanation: "🇩🇪 Richtig: 'Bestimmt'. Adverb am Satzanfang. Es drückt Zuversicht aus (Sicherlich werde ich Sie überzeugen).\n\n🇷🇺 Правильно: 'Bestimmt'. Наречие 'определенно/несомненно', стоящее в начале предложения для усиления уверенности."
      }
    ]
  },
  {
    id: "sb-t1-v1-new",
    title: "Sprachbausteine Teil 1 (Variante 1 Neu 08.2024)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51. (Neue Version)",
    questions: [
      {
        id: "sb-t1-v1-new-46",
        text: "Lücke 46",
        options: OPTIONS_LIST_T1_V1_NEW,
        correctAnswer: "h) WIE",
        part: "Teil 1",
        contextText: "...... [46] ...... besprochen übersende ich Ihnen...",
        explanation: "🇩🇪 Richtig: 'Wie'. Die Floskel 'Wie besprochen' ist Standard in Geschäftsbriefen.\n\n🇷🇺 Правильно: 'Wie'. Фраза 'Как обсуждалось' (Wie besprochen) — стандарт для деловых писем."
      },
      {
        id: "sb-t1-v1-new-47",
        text: "Lücke 47",
        options: OPTIONS_LIST_T1_V1_NEW,
        correctAnswer: "i) BEREITS",
        part: "Teil 1",
        contextText: "Auf Ihrer Homepage habe ich mich ...... [47] ...... über das Ausbildungskonzept... informiert",
        explanation: "🇩🇪 Richtig: 'bereits'. Das Adverb (Synonym: schon) betont, dass die Handlung in der Vergangenheit abgeschlossen wurde.\n\n🇷🇺 Правильно: 'bereits'. Наречие 'уже' (schon)."
      },
      {
        id: "sb-t1-v1-new-48",
        text: "Lücke 48",
        options: OPTIONS_LIST_T1_V1_NEW,
        correctAnswer: "d) FÜR",
        part: "Teil 1",
        contextText: "...Interessiere mich ...... [48] ...... die Abläufe...",
        explanation: "🇩🇪 Richtig: 'für'. Das Verb ist 'sich interessieren für' + Akkusativ.\n\n🇷🇺 Правильно: 'für'. Интересоваться чем-то."
      },
      {
        id: "sb-t1-v1-new-49",
        text: "Lücke 49",
        options: OPTIONS_LIST_T1_V1_NEW,
        correctAnswer: "b) DA",
        part: "Teil 1",
        contextText: "...möchte ich deshalb absolvieren, ...... [49] ...... ich nicht nur...",
        explanation: "🇩🇪 Richtig: 'da'. Kausaler Nebensatzkonnektor (weil).\n\n🇷🇺 Правильно: 'da'. Так как (потому что)."
      },
      {
        id: "sb-t1-v1-new-50",
        text: "Lücke 50",
        options: OPTIONS_LIST_T1_V1_NEW,
        correctAnswer: "e) UM",
        part: "Teil 1",
        contextText: "...zu können, ...... [50] ...... mir dann mit meiner Berufswahl...",
        explanation: "🇩🇪 Richtig: 'um'. Einleitung einer Infinitivgruppe mit 'zu' ('um ... zu').\n\n🇷🇺 Правильно: 'um'. Чтобы."
      },
      {
        id: "sb-t1-v1-new-51",
        text: "Lücke 51",
        options: OPTIONS_LIST_T1_V1_NEW,
        correctAnswer: "a) GERNE",
        part: "Teil 1",
        contextText: "...... [51] ...... überzeuge ich Sie in einem persönlichen Gespräch.",
        explanation: "🇩🇪 Richtig: 'Gerne'. Dies ist ein Adverb der Art und Weise, das oft am Satzanfang steht, um Höflichkeit und Bereitschaft auszudrücken.\n\n🇷🇺 Правильно: 'Gerne'. Охотно/С удовольствием."
      }
    ]
  },
  {
    id: "sb-t1-v2",
    title: "Sprachbausteine Teil 1 (Variante 2)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51.",
    questions: [
      { id: "sb-t1-v2-46", text: "Lücke 46", options: OPTIONS_LIST_T1_V2, correctAnswer: "c) DABEI", part: "Teil 1", explanation: "Richtig ist 'dabei'. Pronominaladverb (da + bei). 'Bei dem Prüfen' -> 'Dabei'.\n\n🇷🇺 Правильно: 'dabei'. 'При этом' (при проверке)." , contextText: "...habe ihn ausführlich geprüft und ...... [46] ...... haben sich noch..." },
      { id: "sb-t1-v2-47", text: "Lücke 47", options: OPTIONS_LIST_T1_V2, correctAnswer: "f) DENNOCH", part: "Teil 1", explanation: "Richtig ist 'dennoch'. Es drückt einen Gegensatz aus (Konzessiv).\n\n🇷🇺 Правильно: 'dennoch'. 'Тем не менее/все же' (хотя в контракте нет, я рассчитываю).", contextText: "...Jobticket zugesagt, das im Vertrag nicht erwähnt wird. Kann ich ...... [47] ...... fest mit dieser Zusatzleistung rechnen?" },
      { id: "sb-t1-v2-48", text: "Lücke 48", options: OPTIONS_LIST_T1_V2, correctAnswer: "e) DASS", part: "Teil 1", explanation: "Richtig ist 'dass'. Konjunktion für einen Objektsatz.\n\n🇷🇺 Правильно: 'dass'. Союз 'что'.", contextText: "Im Vertrag steht, ...... [48] ...... Mitarbeiter bei Bedarf auch an einem anderen Ort..." },
      { id: "sb-t1-v2-49", text: "Lücke 49", options: OPTIONS_LIST_T1_V2, correctAnswer: "a) AUFGRUND", part: "Teil 1", explanation: "Richtig ist 'aufgrund'. Präposition mit Genitiv ('meiner familiären Situation').\n\n🇷🇺 Правильно: 'aufgrund'. Предлог 'из-за / по причине' с родительным падежом.", contextText: "Das war mir nicht bewusst und wäre ...... [49] ...... meiner familiären Situation momentan schwierig." },
      { id: "sb-t1-v2-50", text: "Lücke 50", options: OPTIONS_LIST_T1_V2, correctAnswer: "b) DA", part: "Teil 1", explanation: "Richtig ist 'da'. Kausaler Konnektor.\n\n🇷🇺 Правильно: 'da'. Так как.", contextText: "...nicht möglich, ...... [50] ...... ich, wie Sie wissen, zwei schulpflichtige Kinder habe." },
      { id: "sb-t1-v2-51", text: "Lücke 51", options: OPTIONS_LIST_T1_V2, correctAnswer: "j) SOBALD", part: "Teil 1", explanation: "Richtig ist 'sobald'. Temporale Konjunktion.\n\n🇷🇺 Правильно: 'sobald'. 'Как только'.", contextText: "...schicke Ihnen den Vertrag unverzüglich unterschrieben zurück, ...... [51] ...... diese Punkte geklärt sind." }
    ]
  },
  {
    id: "sb-t1-v3",
    title: "Sprachbausteine Teil 1 (Variante 3)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51.",
    questions: [
      { id: "sb-t1-v3-46", text: "Lücke 46", options: OPTIONS_LIST_T1_V3, correctAnswer: "g) HIERÜBER", part: "Teil 1", explanation: "Richtig ist 'Hierüber'. 'Sich freuen über etwas' -> 'Ich freue mich hierüber' (über die Nachricht).\n\n🇷🇺 Правильно: 'Hierüber'. 'Этому' (рад этому).", contextText: "...bei Ihnen anfangen zu dürfen. ...... [46] ...... freue ich mich wirklich sehr." },
      { id: "sb-t1-v3-47", text: "Lücke 47", options: OPTIONS_LIST_T1_V3, correctAnswer: "c) DAHIN", part: "Teil 1", explanation: "Richtig ist 'dahin'. Temporaladverb 'bis dahin'.\n\n🇷🇺 Правильно: 'dahin'. 'До тех пор' (до 1 марта).", contextText: "Aber bis ...... [47] ...... ist ja noch etwas Zeit..." },
      { id: "sb-t1-v3-48", text: "Lücke 48", options: OPTIONS_LIST_T1_V3, correctAnswer: "e) DEREN", part: "Teil 1", explanation: "Richtig ist 'deren'. Relativpronomen im Genitiv Plural.\n\n🇷🇺 Правильно: 'deren'. 'С помощью которых' (которых = Internetseiten).", contextText: "...Internetseiten empfehlen, mit ...... [48] ...... Hilfe ich mich intensiver..." },
      { id: "sb-t1-v3-49", text: "Lücke 49", options: OPTIONS_LIST_T1_V3, correctAnswer: "d) DAVON", part: "Teil 1", explanation: "Richtig ist 'davon'. Pronominaladverb (sprechen von).\n\n🇷🇺 Правильно: 'davon'. Говорить о том, что...", contextText: "Bei dem Vorstellungsgespräch sprachen Sie ...... [49] ......, dass Sie mir die Arbeitskleidung..." },
      { id: "sb-t1-v3-50", text: "Lücke 50", options: OPTIONS_LIST_T1_V3, correctAnswer: "b) DAFÜR", part: "Teil 1", explanation: "Richtig ist 'dafür'. Pronominaladverb (für die Kleidung).\n\n🇷🇺 Правильно: 'dafür'. Для этого (для одежды).", contextText: "Benötigen Sie ...... [50] ...... meine Kleider- und Schuhgröße?" },
      { id: "sb-t1-v3-51", text: "Lücke 51", options: OPTIONS_LIST_T1_V3, correctAnswer: "i) WIE", part: "Teil 1", explanation: "Richtig ist 'wie'. 'Wie besprochen'.\n\n🇷🇺 Правильно: 'wie'. Как обсуждалось.", contextText: "Das erforderliche ärztliche Attest... bringe ich, ...... [51] ...... besprochen, zum Arbeitsantritt mit." }
    ]
  },
  {
    id: "sb-t1-v3-new",
    title: "Sprachbausteine Teil 1 (Variante 3 Neu)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51.",
    questions: [
      { id: "sb-t1-v3-new-46", text: "Lücke 46", options: OPTIONS_LIST_T1_V3_NEW, correctAnswer: "g) ZURÜCK", part: "Teil 1", explanation: "Richtig ist 'zurück'. Teil des trennbaren Verbs 'zurücksenden'.\n\n🇷🇺 Правильно: 'zurück'. Приставка отделяемого глагола (zurücksenden).", contextText: "...sende ich Ihnen den unterschriebenen Arbeitsvertrag ...... [46] ......." },
      { id: "sb-t1-v3-new-47", text: "Lücke 47", options: OPTIONS_LIST_T1_V3_NEW, correctAnswer: "c) DAHIN", part: "Teil 1", explanation: "Richtig ist 'dahin'. Temporal: 'bis zu diesem Zeitpunkt'.\n\n🇷🇺 Правильно: 'dahin'. До того времени.", contextText: "Aber bis ...... [47] ...... ist ja noch etwas Zeit..." },
      { id: "sb-t1-v3-new-48", text: "Lücke 48", options: OPTIONS_LIST_T1_V3_NEW, correctAnswer: "e) DEREN", part: "Teil 1", explanation: "Richtig ist 'deren'. Genitiv Plural des Relativpronomens.\n\n🇷🇺 Правильно: 'deren'. Чьей (с помощью которых).", contextText: "...Internetseiten empfehlen, mit ...... [48] ...... Hilfe ich mich..." },
      { id: "sb-t1-v3-new-49", text: "Lücke 49", options: OPTIONS_LIST_T1_V3_NEW, correctAnswer: "d) DAVON", part: "Teil 1", explanation: "Richtig ist 'davon'. 'Sprechen von etwas'.\n\n🇷🇺 Правильно: 'davon'. О том.", contextText: "...sprachen Sie ...... [49] ......, dass Sie mir..." },
      { id: "sb-t1-v3-new-50", text: "Lücke 50", options: OPTIONS_LIST_T1_V3_NEW, correctAnswer: "b) DAFÜR", part: "Teil 1", explanation: "Richtig ist 'dafür'. Bezug: Für die Bereitstellung der Kleidung.\n\n🇷🇺 Правильно: 'dafür'. Для этого.", contextText: "...... [50] ...... meine Kleider- und Schuhgröße?" },
      { id: "sb-t1-v3-new-51", text: "Lücke 51", options: OPTIONS_LIST_T1_V3_NEW, correctAnswer: "i) WIE", part: "Teil 1", explanation: "Richtig ist 'wie'. 'Wie besprochen'.\n\n🇷🇺 Правильно: 'wie'. Как обсуждалось.", contextText: "...... [51] ...... besprochen, zum Arbeitsantritt mit." }
    ]
  },
  {
    id: "sb-t1-v4",
    title: "Sprachbausteine Teil 1 (Variante 4)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51.",
    questions: [
      { id: "sb-t1-v4-46", text: "Lücke 46", options: OPTIONS_LIST_T1_V4, correctAnswer: "j) ZUM", part: "Teil 1", explanation: "Richtig ist 'zum'. 'Zum nächstmöglichen Datum'.\n\n🇷🇺 Правильно: 'zum'. К (дате).", contextText: "...und fristgerecht ...... [46] ...... nächstmöglichen Datum." },
      { id: "sb-t1-v4-47", text: "Lücke 47", options: OPTIONS_LIST_T1_V4, correctAnswer: "c) MÖGLICH", part: "Teil 1", explanation: "Richtig ist 'möglich'. 'So bald wie möglich'.\n\n🇷🇺 Правильно: 'möglich'. Как можно скорее.", contextText: "...so bald wie ...... [47] ...... umziehen." },
      { id: "sb-t1-v4-48", text: "Lücke 48", options: OPTIONS_LIST_T1_V4, correctAnswer: "h) VORZEITIGE", part: "Teil 1", explanation: "Richtig ist 'vorzeitige'. Adjektivendung.\n\n🇷🇺 Правильно: 'vorzeitige'. Досрочное (освобождение).", contextText: "...bitte ich Sie um eine ...... [48] ...... Freistellung..." },
      { id: "sb-t1-v4-49", text: "Lücke 49", options: OPTIONS_LIST_T1_V4, correctAnswer: "b) AUSDRÜCKLICH", part: "Teil 1", explanation: "Richtig ist 'ausdrücklich'. Adverb.\n\n🇷🇺 Правильно: 'ausdrücklich'. Прямо/особо (поблагодарить).", contextText: "...möchte ich mich ...... [49] ...... bei Ihnen bedanken." },
      { id: "sb-t1-v4-50", text: "Lücke 50", options: OPTIONS_LIST_T1_V4, correctAnswer: "a) ANHALTENDE", part: "Teil 1", explanation: "Richtig ist 'anhaltende'. Adjektivendung.\n\n🇷🇺 Правильно: 'anhaltende'. Постоянную (поддержку).", contextText: "...für die ...... [50] ...... Unterstützung..." },
      { id: "sb-t1-v4-51", text: "Lücke 51", options: OPTIONS_LIST_T1_V4, correctAnswer: "f) SOWIE", part: "Teil 1", explanation: "Richtig ist 'sowie'. Konjunktion, synonym zu 'und'.\n\n🇷🇺 Правильно: 'sowie'. А также.", contextText: "Bitte bestätigen Sie mir den Erhalt... ...... [51] ...... das Datum, zu dem..." }
    ]
  },
  {
    id: "sb-t1-v5",
    title: "Sprachbausteine Teil 1 (Variante 5 - Probearbeiten)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51. Welche Lösung (a–j) passt am besten?",
    questions: [
      { 
        id: "sb-t1-v5-46", 
        text: "Lücke 46", 
        options: OPTIONS_LIST_T1_V5, 
        correctAnswer: "j) ZUM", 
        part: "Teil 1", 
        contextText: TEXT_T1_V5, 
        explanation: "🇩🇪 Richtig: 'zum'. 'Einladen zu' + Dativ -> zu dem = zum. \n\n🇷🇺 Правильно: 'zum'. 'Пригласить на' + существительное (zu dem Probearbeiten)." 
      },
      { 
        id: "sb-t1-v5-47", 
        text: "Lücke 47", 
        options: OPTIONS_LIST_T1_V5, 
        correctAnswer: "g) UNTER", 
        part: "Teil 1", 
        contextText: TEXT_T1_V5, 
        explanation: "🇩🇪 Richtig: 'unter'. Feste Nomen-Verb-Verbindung: 'etwas unter Beweis stellen'. \n\n🇷🇺 Правильно: 'unter'. Устойчивое выражение 'unter Beweis stellen' (доказать)." 
      },
      { 
        id: "sb-t1-v5-48", 
        text: "Lücke 48", 
        options: OPTIONS_LIST_T1_V5, 
        correctAnswer: "f) DARAUF", 
        part: "Teil 1", 
        contextText: TEXT_T1_V5, 
        explanation: "🇩🇪 Richtig: 'darauf'. 'Sich freuen auf' (Akkusativ). Pronominaladverb. \n\n🇷🇺 Правильно: 'darauf'. Глагол 'sich freuen auf' (радоваться предстоящему)." 
      },
      { 
        id: "sb-t1-v5-49", 
        text: "Lücke 49", 
        options: OPTIONS_LIST_T1_V5, 
        correctAnswer: "b) BEREITS", 
        part: "Teil 1", 
        contextText: TEXT_T1_V5, 
        explanation: "🇩🇪 Richtig: 'bereits'. Temporaladverb (schon/jetzt schon). \n\n🇷🇺 Правильно: 'bereits'. Означает 'уже'." 
      },
      { 
        id: "sb-t1-v5-50", 
        text: "Lücke 50", 
        options: OPTIONS_LIST_T1_V5, 
        correctAnswer: "h) WAS", 
        part: "Teil 1", 
        contextText: TEXT_T1_V5, 
        explanation: "🇩🇪 Richtig: 'was'. Relativpronomen nach Indefinitpronomen 'irgendwas'. \n\n🇷🇺 Правильно: 'was'. После неопределенных местоимений типа 'irgendwas'." 
      },
      { 
        id: "sb-t1-v5-51", 
        text: "Lücke 51", 
        options: OPTIONS_LIST_T1_V5, 
        correctAnswer: "c) EVENTUELL", 
        part: "Teil 1", 
        contextText: TEXT_T1_V5, 
        explanation: "🇩🇪 Richtig: 'eventuell'. Adverb der Möglichkeit (vielleicht). \n\n🇷🇺 Правильно: 'eventuell'. Наречие, означающее 'возможно'." 
      }
    ]
  },
  {
    id: "sb-t1-v6",
    title: "Sprachbausteine Teil 1 (Variante 6)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 1",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 46–51.",
    questions: [
      { id: "sb-t1-v6-46", text: "Lücke 46", options: OPTIONS_LIST_T1_V6, correctAnswer: "k) ZUR", part: "Teil 1", explanation: "Richtig ist 'zur'. 'Ausbildung zu' + Dativ (der Kauffrau). Zu + der = zur.\n\n🇷🇺 Правильно: 'zur'. На (кого? профессия).", contextText: "...dass ich meine Ausbildung ...... [46] ...... Kauffrau für Büromanagement..." },
      { id: "sb-t1-v6-47", text: "Lücke 47", options: OPTIONS_LIST_T1_V6, correctAnswer: "g) WIE", part: "Teil 1", explanation: "Richtig ist 'wie'. Es leitet eine indirekte Frage ein.\n\n🇷🇺 Правильно: 'wie'. Как.", contextText: "Ich würde gern wissen, ...... [47] ...... die Ausbildung zeitlich organisiert ist." },
      { id: "sb-t1-v6-48", text: "Lücke 48", options: OPTIONS_LIST_T1_V6, correctAnswer: "j) ZUM", part: "Teil 1", explanation: "Richtig ist 'zum'. 'im Gegensatz zu'.\n\n🇷🇺 Правильно: 'zum'. В отличие от.", contextText: "Im Gegensatz ...... [48] ...... praktischen Teil..." },
      { id: "sb-t1-v6-49", text: "Lücke 49", options: OPTIONS_LIST_T1_V6, correctAnswer: "b) DESHALB", part: "Teil 1", explanation: "Richtig ist 'Deshalb'. Konsekutiv (Folge).\n\n🇷🇺 Правильно: 'Deshalb'. Поэтому.", contextText: "...... [49] ...... wäre es wichtig, so schnell wie möglich..." },
      { id: "sb-t1-v6-50", text: "Lücke 50", options: OPTIONS_LIST_T1_V6, correctAnswer: "d) OB", part: "Teil 1", explanation: "Richtig ist 'ob'. Indirekte Ja/Nein-Frage.\n\n🇷🇺 Правильно: 'ob'. Ли (возможно ли).", contextText: "...möchte ich nachfragen, ...... [50] ...... es möglich wäre..." },
      { id: "sb-t1-v6-51", text: "Lücke 51", options: OPTIONS_LIST_T1_V6, correctAnswer: "e) WÄHREND", part: "Teil 1", explanation: "Richtig ist 'während'. Temporale Präposition mit Genitiv.\n\n🇷🇺 Правильно: 'während'. Во время.", contextText: "...wer mein Ansprechpartner ...... [51] ...... des praktischen Teils der Ausbildung sein wird." }
    ]
  },

  // ============================================================
  // TEIL 2
  // ============================================================
  {
    id: "sb-t2-v1",
    title: "Sprachbausteine Teil 2 (Variante 1)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57. Welche Lösung (a–c) passt am besten?",
    questions: [
      {
        id: "sb-t2-v1-52",
        text: "Lücke 52",
        options: ["a) einen Auftrag", "b) eine Bestellung", "c) eine Anforderung"],
        correctAnswer: "b) eine Bestellung",
        part: "Teil 2",
        contextText: "...entschieden wir uns für ...... [52] ...... von zwei Kaffeevollautomaten...",
        explanation: "🇩🇪 Richtig: 'eine Bestellung'. Man tätigt eine 'Bestellung' von Waren.\n\n🇷🇺 Правильно: 'eine Bestellung'. Заказ."
      },
      {
        id: "sb-t2-v1-53",
        text: "Lücke 53",
        options: ["a) bekommen danach", "b) bestellten dann", "c) erhielten daraufhin"],
        correctAnswer: "c) erhielten daraufhin",
        part: "Teil 2",
        contextText: "Wir ...... [53] ...... eine Auftragsbestätigung...",
        explanation: "🇩🇪 Richtig: 'erhielten daraufhin'. 'Erhielten' (Präteritum) + 'daraufhin' (Folge).\n\n🇷🇺 Правильно: 'erhielten daraufhin'. Получили после этого."
      },
      {
        id: "sb-t2-v1-54",
        text: "Lücke 54",
        options: ["a) Beim Verlauf", "b) Nach Ablauf", "c) Vor dem Zulauf"],
        correctAnswer: "b) Nach Ablauf",
        part: "Teil 2",
        contextText: "...... [54] ...... der Lieferfrist haben wir Sie telefonisch...",
        explanation: "🇩🇪 Richtig: 'Nach Ablauf'. Wenn die Frist vorbei ist ('Nach Ablauf').\n\n🇷🇺 Правильно: 'Nach Ablauf'. По истечении."
      },
      {
        id: "sb-t2-v1-55",
        text: "Lücke 55",
        options: ["a) Mittlerweile befinden", "b) Zurzeit haben", "c) Zwischenzeitlich sind"],
        correctAnswer: "a) Mittlerweile befinden",
        part: "Teil 2",
        contextText: "...... [55] ...... wir uns in KW 18...",
        explanation: "🇩🇪 Richtig: 'Mittlerweile befinden'. 'Sich befinden'.\n\n🇷🇺 Правильно: 'Mittlerweile befinden'. Тем временем находимся."
      },
      {
        id: "sb-t2-v1-56",
        text: "Lücke 56",
        options: ["a) nicht eingetroffen", "b) nicht erbracht", "c) nicht erhalten"],
        correctAnswer: "a) nicht eingetroffen",
        part: "Teil 2",
        contextText: "...bis dahin ...... [56] ...... sein...",
        explanation: "🇩🇪 Richtig: 'nicht eingetroffen'. Ware 'trifft ein' (Perfekt mit sein).\n\n🇷🇺 Правильно: 'nicht eingetroffen'. Не прибыл."
      },
      {
        id: "sb-t2-v1-57",
        text: "Lücke 57",
        options: ["a) schriftliche Auftragsbestätigung", "b) schriftliche Kündigung", "c) schriftliche Stellungnahme"],
        correctAnswer: "c) schriftliche Stellungnahme",
        part: "Teil 2",
        contextText: "Bitte schicken Sie uns umgehend eine ...... [57] .......",
        explanation: "🇩🇪 Richtig: 'schriftliche Stellungnahme'. Erklärung verlangt.\n\n🇷🇺 Правильно: 'schriftliche Stellungnahme'. Письменное объяснение."
      }
    ]
  },
  {
    id: "sb-t2-v1-new",
    title: "Sprachbausteine Teil 2 (Variante 1 Neu 07.2024)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57. (Neue Version)",
    questions: [
      {
        id: "sb-t2-v1-new-52",
        text: "Lücke 52",
        options: ["a) den Erwerb", "b) den Verkauf", "c) den Verleih"],
        correctAnswer: "a) den Erwerb",
        part: "Teil 2",
        contextText: "...entschieden wir uns für ...... [52] ...... von zwei Kaffeevollautomaten...",
        explanation: "🇩🇪 Richtig: 'den Erwerb'. 'Erwerb' bedeutet Kauf.\n\n🇷🇺 Правильно: 'den Erwerb'. Приобретение."
      },
      {
        id: "sb-t2-v1-new-53",
        text: "Lücke 53",
        options: ["a) bekommen danach", "b) bestellten dann", "c) erhielten daraufhin"],
        correctAnswer: "c) erhielten daraufhin",
        part: "Teil 2",
        contextText: "Wir ...... [53] ...... eine Auftragsbestätigung...",
        explanation: "🇩🇪 Richtig: 'erhielten daraufhin'.\n\n🇷🇺 Правильно: 'erhielten daraufhin'."
      },
      {
        id: "sb-t2-v1-new-54",
        text: "Lücke 54",
        options: ["a) darauf hingewiesen", "b) davor gewarnt", "c) diesbezüglich gefragt"],
        correctAnswer: "a) darauf hingewiesen",
        part: "Teil 2",
        contextText: "...haben wir Sie telefonisch mehrmals eindringlich ...... [54] ......, dass wir...",
        explanation: "🇩🇪 Richtig: 'darauf hingewiesen'. 'Jemanden auf etwas hinweisen'.\n\n🇷🇺 Правильно: 'darauf hingewiesen'. Указали на это."
      },
      {
        id: "sb-t2-v1-new-55",
        text: "Lücke 55",
        options: ["a) Mittlerweile befinden", "b) Zurzeit haben", "c) Zwischenzeitlich sind"],
        correctAnswer: "a) Mittlerweile befinden",
        part: "Teil 2",
        contextText: "...... [55] ...... wir uns in KW 18...",
        explanation: "🇩🇪 Richtig: 'Mittlerweile befinden'.\n\n🇷🇺 Правильно: 'Mittlerweile befinden'."
      },
      {
        id: "sb-t2-v1-new-56",
        text: "Lücke 56",
        options: ["a) nicht eingetroffen", "b) nicht erbracht", "c) nicht erhalten"],
        correctAnswer: "a) nicht eingetroffen",
        part: "Teil 2",
        contextText: "Sollte die Ware bis dahin ...... [56] ...... sein...",
        explanation: "🇩🇪 Richtig: 'nicht eingetroffen'.\n\n🇷🇺 Правильно: 'nicht eingetroffen'."
      },
      {
        id: "sb-t2-v1-new-57",
        text: "Lücke 57",
        options: ["a) schriftliche Auftragsbestätigung", "b) schriftliche Kündigung", "c) schriftliche Stellungnahme"],
        correctAnswer: "c) schriftliche Stellungnahme",
        part: "Teil 2",
        contextText: "Bitte schicken Sie uns umgehend eine ...... [57] .......",
        explanation: "🇩🇪 Richtig: 'schriftliche Stellungnahme'.\n\n🇷🇺 Правильно: 'schriftliche Stellungnahme'."
      }
    ]
  },
  {
    id: "sb-t2-v2",
    title: "Sprachbausteine Teil 2 (Variante 2)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57.",
    questions: [
      { id: "sb-t2-v2-52", text: "Lücke 52", options: ["a) Ihren Auftrag angenommen", "b) Ihre Bestellung erhalten", "c) Ihre Reklamation geprüft"], correctAnswer: "c) Ihre Reklamation geprüft", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Ihre Reklamation geprüft'. Kontext: Beschwerde.\n\n🇷🇺 Правильно: 'Ihre Reklamation geprüft'. Проверили вашу рекламацию.", contextText: "Wir haben ...... [52] ......" },
      { id: "sb-t2-v2-53", text: "Lücke 53", options: ["a) das Problem unbemerkt", "b) der Mangel übersehen", "c) der Schaden behoben"], correctAnswer: "b) der Mangel übersehen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'der Mangel übersehen'. 'der Mangel übersehen worden'.\n\n🇷🇺 Правильно: 'der Mangel übersehen'. Недостаток был просмотрен.", contextText: "...bei unserer Qualitätskontrolle ...... [53] ...... worden." },
      { id: "sb-t2-v2-54", text: "Lücke 54", options: ["a) Auf dieser Stelle", "b) In diesem Zustand", "c) Mit dieser Position"], correctAnswer: "b) In diesem Zustand", part: "Teil 2", explanation: "🇩🇪 Richtig: 'In diesem Zustand'. (kaputt).\n\n🇷🇺 Правильно: 'In diesem Zustand'. В этом состоянии.", contextText: "...... [54] ...... hätte die Couch nicht ausgeliefert werden dürfen." },
      { id: "sb-t2-v2-55", text: "Lücke 55", options: ["a) Fehler zu beanstanden", "b) Probleme zu berücksichtigen", "c) Unannehmlichkeiten zu entschuldigen"], correctAnswer: "c) Unannehmlichkeiten zu entschuldigen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Unannehmlichkeiten zu entschuldigen'. Feste Wendung.\n\n🇷🇺 Правильно: 'Unannehmlichkeiten zu entschuldigen'. Извинить за неудобства.", contextText: "Wir bitten Sie, die entstandenen ...... [55] ......." },
      { id: "sb-t2-v2-56", text: "Lücke 56", options: ["a) für den Betrag", "b) in Höhe von", "c) zum Preis von"], correctAnswer: "b) in Höhe von", part: "Teil 2", explanation: "🇩🇪 Richtig: 'in Höhe von'. Bei Geldbeträgen.\n\n🇷🇺 Правильно: 'in Höhe von'. В размере.", contextText: "Gutschein ...... [56] ...... 50 Euro." },
      { id: "sb-t2-v2-57", text: "Lücke 57", options: ["a) begrüßen zu dürfen", "b) beobachten zu dürfen", "c) besuchen zu dürfen"], correctAnswer: "a) begrüßen zu dürfen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'begrüßen zu dürfen'. Höfliche Schlussformel.\n\n🇷🇺 Правильно: 'begrüßen zu dürfen'. Приветствовать.", contextText: "...Sie bald wieder in unserer Filiale ...... [57] ......." }
    ]
  },
  {
    id: "sb-t2-v3",
    title: "Sprachbausteine Teil 2 (Variante 3)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57.",
    questions: [
      { id: "sb-t2-v3-52", text: "Lücke 52", options: ["a) nichts Gegenteiliges", "b) nur Anderes", "c) viel Negatives"], correctAnswer: "a) nichts Gegenteiliges", part: "Teil 2", explanation: "🇩🇪 Richtig: 'nichts Gegenteiliges'. Standardformulierung.\n\n🇷🇺 Правильно: 'nichts Gegenteiliges'. Ничего противоположного.", contextText: "Da wir ...... [52] ...... gehört haben..." },
      { id: "sb-t2-v3-53", text: "Lücke 53", options: ["a) Auszahlung veranlasst", "b) Einzahlung gemacht", "c) Zahlung eingegangen"], correctAnswer: "c) Zahlung eingegangen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Zahlung eingegangen'. (Wir haben kein Geld erhalten).\n\n🇷🇺 Правильно: 'Zahlung eingegangen'. Поступила оплата.", contextText: "Allerdings ist bislang ... keine ...... [53] ......." },
      { id: "sb-t2-v3-54", text: "Lücke 54", options: ["a) nachfolgenden Betrag", "b) schnellstmögliche Überweisung", "c) zeitnahe Korrektur"], correctAnswer: "b) schnellstmögliche Überweisung", part: "Teil 2", explanation: "🇩🇪 Richtig: 'schnellstmögliche Überweisung'. Man bittet bei Verzug um Überweisung.\n\n🇷🇺 Правильно: 'schnellstmögliche Überweisung'. Скорейший перевод.", contextText: "...mit der Bitte um ...... [54] ......." },
      { id: "sb-t2-v3-55", text: "Lücke 55", options: ["a) abgelaufen", "b) fällig", "c) verspätet"], correctAnswer: "b) fällig", part: "Teil 2", explanation: "🇩🇪 Richtig: 'fällig'. Rechnungen werden 'fällig'.\n\n🇷🇺 Правильно: 'fällig'. Подлежащий оплате (срок вышел).", contextText: "Da der Betrag bereits am 31. Oktober ...... [55] ...... war..." },
      { id: "sb-t2-v3-56", text: "Lücke 56", options: ["a) gewähren", "b) leisten", "c) überreichen"], correctAnswer: "a) gewähren", part: "Teil 2", explanation: "🇩🇪 Richtig: 'gewähren'. Skonto oder Rabatt 'gewährt' man.\n\n🇷🇺 Правильно: 'gewähren'. Предоставлять (скидку).", contextText: "...Skonto von 2% leider nicht mehr ...... [56] ......." },
      { id: "sb-t2-v3-57", text: "Lücke 57", options: ["a) infolgedessen", "b) währenddessen", "c) zwischenzeitlich"], correctAnswer: "c) zwischenzeitlich", part: "Teil 2", explanation: "🇩🇪 Richtig: 'zwischenzeitlich'. 'In der Zwischenzeit'.\n\n🇷🇺 Правильно: 'zwischenzeitlich'. Тем временем.", contextText: "Sollten Sie die Rechnung ...... [57] ...... bezahlt haben..." }
    ]
  },
  {
    id: "sb-t2-v4",
    title: "Sprachbausteine Teil 2 (Variante 4)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57.",
    questions: [
      { id: "sb-t2-v4-52", text: "Lücke 52", options: ["a) aufgrund Ihrer Erfahrung", "b) gemäß Ihren Wünschen", "c) laut Ihrer Zusage"], correctAnswer: "b) gemäß Ihren Wünschen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'gemäß Ihren Wünschen'. Entsprechend dem, was Sie wollten.\n\n🇷🇺 Правильно: 'gemäß Ihren Wünschen'. Согласно вашим пожеланиям.", contextText: "...Angebot ...... [52] ...... unterbreitet." },
      { id: "sb-t2-v4-53", text: "Lücke 53", options: ["a) das Angebot zu prüfen", "b) die Chancen zu nutzen", "c) die Gelegenheit zu bieten"], correctAnswer: "a) das Angebot zu prüfen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'das Angebot zu prüfen'.\n\n🇷🇺 Правильно: 'das Angebot zu prüfen'. Проверить предложение.", contextText: "Hatten Sie schon die Möglichkeit, ...... [53] ......?" },
      { id: "sb-t2-v4-54", text: "Lücke 54", options: ["a) gültig ist", "b) anerkannt wird", "c) einlösbar bleibt"], correctAnswer: "a) gültig ist", part: "Teil 2", explanation: "🇩🇪 Richtig: 'gültig ist'. Ein Angebot ist bis zu einem Datum 'gültig'.\n\n🇷🇺 Правильно: 'gültig ist'. Действительно.", contextText: "...Rabattaktion nur noch bis Ende des Jahres ...... [54] ......." },
      { id: "sb-t2-v4-55", text: "Lücke 55", options: ["a) in Kontakt zu treten", "b) in Verbindung zu setzen", "c) zur Verfügung zu stellen"], correctAnswer: "b) in Verbindung zu setzen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'in Verbindung zu setzen'. 'Sich mit jemandem in Verbindung setzen'.\n\n🇷🇺 Правильно: 'in Verbindung zu setzen'. Связаться.", contextText: "...sich mit uns ...... [55] ......." },
      { id: "sb-t2-v4-56", text: "Lücke 56", options: ["a) sind", "b) stehen", "c) stellen"], correctAnswer: "b) stehen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'stehen'. 'Zur Verfügung stehen' (vorhanden/bereit sein).\n\n🇷🇺 Правильно: 'stehen'. Находиться в распоряжении.", contextText: "Unsere Mitarbeiter ... ...... [56] ...... Ihnen gerne jederzeit zur Verfügung." },
      { id: "sb-t2-v4-57", text: "Lücke 57", options: ["a) bei unseren Kunden besuchen", "b) mit unseren Kunden begrüßen", "c) zu unseren Kunden zählen"], correctAnswer: "c) zu unseren Kunden zählen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'zu unseren Kunden zählen'. Jemanden als Kunden haben.\n\n🇷🇺 Правильно: 'zu unseren Kunden zählen'. Считать своим клиентом.", contextText: "...Sie künftig ...... [57] ...... zu können." }
    ]
  },
  {
    id: "sb-t2-v5",
    title: "Sprachbausteine Teil 2 (Variante 5)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57.",
    questions: [
      { id: "sb-t2-v5-52", text: "Lücke 52", options: ["a) Ihnen angegebene", "b) Ihr angeordnete", "c) mir angeführte"], correctAnswer: "a) Ihnen angegebene", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Ihnen angegebene'. Partizipialattribut. 'Die Adresse, die von Ihnen angegeben wurde'.\n\n🇷🇺 Правильно: 'Ihnen angegebene'. Указанный Вами.", contextText: "Bitte liefern Sie an die von ...... [52] ...... Lieferadresse." },
      { id: "sb-t2-v5-53", text: "Lücke 53", options: ["a) drei Prozent Ermäßigung bezahlen", "b) drei Prozent Rabatt wünschen", "c) drei Prozent Skonto gewähren"], correctAnswer: "c) drei Prozent Skonto gewähren", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Skonto gewähren'. Skonto ist ein Rabatt für schnelle Zahlung.\n\n🇷🇺 Правильно: 'Skonto gewähren'. Предоставить сконто.", contextText: "Wir werden bei Zahlung innerhalb von 7 Tagen ...... [53] ......." },
      { id: "sb-t2-v5-54", text: "Lücke 54", options: ["a) beglichen werden", "b) dokumentiert werden", "c) verhandelt werden"], correctAnswer: "a) beglichen werden", part: "Teil 2", explanation: "🇩🇪 Richtig: 'beglichen werden'. Eine Rechnung begleichen = bezahlen.\n\n🇷🇺 Правильно: 'beglichen werden'. Оплачен.", contextText: "Ansonsten muss der Rechnungsbetrag bis 30 Tage nach Wareneingang ...... [54] ......." },
      { id: "sb-t2-v5-55", text: "Lücke 55", options: ["a) entnehmen Sie bitte", "b) erfahren Sie direkt", "c) finden Sie gerne"], correctAnswer: "a) entnehmen Sie bitte", part: "Teil 2", explanation: "🇩🇪 Richtig: 'entnehmen Sie bitte'. 'Informationen aus etwas entnehmen'.\n\n🇷🇺 Правильно: 'entnehmen Sie bitte'. Взять (информацию).", contextText: "Die detaillierten Konditionen ...... [55] ...... unseren allgemeinen Geschäftsbedingungen." },
      { id: "sb-t2-v5-56", text: "Lücke 56", options: ["a) Auftragsnummer bereit", "b) Kundennummer fest", "c) Rechnungsnummer an"], correctAnswer: "a) Auftragsnummer bereit", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Auftragsnummer bereit'. 'Etwas bereithalten'.\n\n🇷🇺 Правильно: 'Auftragsnummer bereit'. Держать наготове номер заказа.", contextText: "Bitte halten Sie hierzu Ihre ...... [56] ......." },
      { id: "sb-t2-v5-57", text: "Lücke 57", options: ["a) Ausführung Ihres Auftrags", "b) Bearbeitung Ihrer Anfrage", "c) Durchführung Ihrer Arbeit"], correctAnswer: "a) Ausführung Ihres Auftrags", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Ausführung Ihres Auftrags'. Man führt einen Auftrag aus.\n\n🇷🇺 Правильно: 'Ausführung Ihres Auftrags'. Выполнение заказа.", contextText: "Wir versprechen Ihnen eine zuverlässige ...... [57] ......." }
    ]
  },
  {
    id: "sb-t2-v5-new",
    title: "Sprachbausteine Teil 2 (Variante 5 Neu 03/2025)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57. (Neue Version)",
    questions: [
      { id: "sb-t2-v5-new-52", text: "Lücke 52", options: ["a) Ihnen angegebene", "b) ...", "c) ..."], correctAnswer: "a) Ihnen angegebene", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Ihnen angegebene'.\n\n🇷🇺 Правильно: 'Ihnen angegebene'.", contextText: "Lieferadresse: ...... [52] ......." },
      { id: "sb-t2-v5-new-53", text: "Lücke 53", options: ["a) ...", "b) ...", "c) 3% Skonto gewähren"], correctAnswer: "c) 3% Skonto gewähren", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Skonto gewähren'.\n\n🇷🇺 Правильно: 'Skonto gewähren'.", contextText: "...bei Zahlung ... ...... [53] ......." },
      { id: "sb-t2-v5-new-54", text: "Lücke 54", options: ["a) beglichen werden", "b) ...", "c) ..."], correctAnswer: "a) beglichen werden", part: "Teil 2", explanation: "🇩🇪 Richtig: 'beglichen werden'.\n\n🇷🇺 Правильно: 'beglichen werden'.", contextText: "...muss der Betrag ...... [54] ......." },
      { id: "sb-t2-v5-new-55", text: "Lücke 55", options: ["a) erklären Sie", "b) erfahren Sie direkt", "c) finden Sie gerne"], correctAnswer: "c) finden Sie gerne", part: "Teil 2", explanation: "🇩🇪 Richtig: 'finden Sie gerne'. (Laut Schlüssel, obwohl stilistisch ungewöhnlich).\n\n🇷🇺 Правильно: 'finden Sie gerne'.", contextText: "Die Konditionen ...... [55] ...... in unseren AGBs." },
      { id: "sb-t2-v5-new-56", text: "Lücke 56", options: ["a) Auftragsnummer bereit", "b) ...", "c) ..."], correctAnswer: "a) Auftragsnummer bereit", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Auftragsnummer bereit'.\n\n🇷🇺 Правильно: 'Auftragsnummer bereit'.", contextText: "Halten Sie Ihre ...... [56] ......." },
      { id: "sb-t2-v5-new-57", text: "Lücke 57", options: ["a) Ausführung Ihres Auftrags", "b) ...", "c) ..."], correctAnswer: "a) Ausführung Ihres Auftrags", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Ausführung Ihres Auftrags'.\n\n🇷🇺 Правильно: 'Ausführung Ihres Auftrags'.", contextText: "...zuverlässige ...... [57] ......." }
    ]
  },
  {
    id: "sb-t2-v6",
    title: "Sprachbausteine Teil 2 (Variante 6)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57.",
    questions: [
      { id: "sb-t2-v6-52", text: "Lücke 52", options: ["a) folgendes Angebot", "b) folgendes Ergebnis", "c) folgende Informationen"], correctAnswer: "a) folgendes Angebot", part: "Teil 2", explanation: "🇩🇪 Richtig: 'folgendes Angebot'. Man unterbreitet ein Angebot.\n\n🇷🇺 Правильно: 'folgendes Angebot'. Предложение.", contextText: "...unterbreiten Ihnen ...... [52] ...... für..." },
      { id: "sb-t2-v6-53", text: "Lücke 53", options: ["a) in Absprache", "b) in Bezug", "c) in Höhe"], correctAnswer: "c) in Höhe", part: "Teil 2", explanation: "🇩🇪 Richtig: 'in Höhe'. Bei Geldbeträgen: 'in Höhe von 39 Euro'.\n\n🇷🇺 Правильно: 'in Höhe'. В размере.", contextText: "...Lieferpauschale ...... [53] ...... von 39,00 Euro." },
      { id: "sb-t2-v6-54", text: "Lücke 54", options: ["a) belaufen sich", "b) ergeben sich", "c) richten sich"], correctAnswer: "c) richten sich", part: "Teil 2", explanation: "🇩🇪 Richtig: 'richten sich'. 'Sich richten nach' (abhängen von).\n\n🇷🇺 Правильно: 'richten sich'. Зависят от.", contextText: "Die Kosten ... ...... [54] ...... nach dem Warenwert." },
      { id: "sb-t2-v6-55", text: "Lücke 55", options: ["a) die Absicht", "b) die Option", "c) die Verpflichtung"], correctAnswer: "b) die Option", part: "Teil 2", explanation: "🇩🇪 Richtig: 'die Option'. 'Die Option besteht' (die Möglichkeit gibt es).\n\n🇷🇺 Правильно: 'die Option'. Опция/возможность.", contextText: "Natürlich besteht auch ...... [55] ...... die Ware ... abzuholen." },
      { id: "sb-t2-v6-56", text: "Lücke 56", options: ["a) Diese Anfrage", "b) Dieses Angebot", "c) Diese Bestellung"], correctAnswer: "b) Dieses Angebot", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Dieses Angebot'. Rückbezug auf das Angebot.\n\n🇷🇺 Правильно: 'Dieses Angebot'. Это предложение.", contextText: "...... [56] ...... ist 14 Tage bindend." },
      { id: "sb-t2-v6-57", text: "Lücke 57", options: ["a) Ihren Auftrag", "b) Ihre Wünsche", "c) Ihr Verständnis"], correctAnswer: "a) Ihren Auftrag", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Ihren Auftrag'. Man freut sich darauf, den 'Auftrag' zu erhalten.\n\n🇷🇺 Правильно: 'Ihren Auftrag'. Ваш заказ.", contextText: "Wir würden uns sehr freuen, ...... [57] ...... zu erhalten." }
    ]
  },
  {
    id: "sb-t2-v7",
    title: "Sprachbausteine Teil 2 (Variante 7)",
    module: ModuleType.SPRACHBAUSTEINE,
    subType: "Teil 2",
    instruction: "Lesen Sie den Text und schließen Sie die Lücken 52–57.",
    questions: [
      { id: "sb-t2-v7-52", text: "Lücke 52", options: ["a) Dafür mussten", "b) Daher konnten", "c) Dazu sollten"], correctAnswer: "c) Dazu sollten", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Dazu sollten'. 'Dazu' (für diesen Zweck, die Einrichtung) 'sollten' Sie liefern.\n\n🇷🇺 Правильно: 'Dazu sollten'. Для этого должны были.", contextText: "...... [52] ...... Sie zehn Tische... liefern." },
      { id: "sb-t2-v7-53", text: "Lücke 53", options: ["a) unserem Angebot", "b) unserem Vorschriften", "c) unserer Bestellung"], correctAnswer: "c) unserer Bestellung", part: "Teil 2", explanation: "🇩🇪 Richtig: 'unserer Bestellung'. Die Lieferung entspricht nicht der 'Bestellung'.\n\n🇷🇺 Правильно: 'unserer Bestellung'. Нашему заказу.", contextText: "Leider entspricht die Lieferung nicht ...... [53] ......." },
      { id: "sb-t2-v7-54", text: "Lücke 54", options: ["a) gleich zurückzuschicken", "b) schnellstmöglich auszutauschen", "c) sofort zu reparieren"], correctAnswer: "b) schnellstmöglich auszutauschen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'schnellstmöglich auszutauschen'. Man bittet darum, falsche Ware gegen richtige 'auszutauschen'.\n\n🇷🇺 Правильно: 'schnellstmöglich auszutauschen'. Как можно скорее обменять.", contextText: "Wir bitten Sie, die reklamierten Möbelstücke ...... [54] ......." },
      { id: "sb-t2-v7-55", text: "Lücke 55", options: ["a) Aufpreis anbieten", "b) Preisnachlass gewähren", "c) Rabatt fordern"], correctAnswer: "b) Preisnachlass gewähren", part: "Teil 2", explanation: "🇩🇪 Richtig: 'Preisnachlass gewähren'. Wir behalten die Ware, wenn Sie uns einen 'Preisnachlass gewähren' (geben).\n\n🇷🇺 Правильно: 'Preisnachlass gewähren'. Предоставить скидку.", contextText: "Wenn Sie dafür einen entsprechenden ...... [55] ......." },
      { id: "sb-t2-v7-56", text: "Lücke 56", options: ["a) ein Angebot unterbreiten", "b) ein Gutachten erstellen", "c) eine Empfehlung geben"], correctAnswer: "b) ein Gutachten erstellen", part: "Teil 2", explanation: "🇩🇪 Richtig: 'ein Gutachten erstellen'. (Kontext: Schäden prüfen).\n\n🇷🇺 Правильно: 'ein Gutachten erstellen'. Составить экспертное заключение.", contextText: "Könnten Sie hierfür ...... [56] ......?" },
      { id: "sb-t2-v7-57", text: "Lücke 57", options: ["a) baldige Bezahlung", "b) gleichzeitige Stornierung", "c) umgehende Antwort"], correctAnswer: "c) umgehende Antwort", part: "Teil 2", explanation: "🇩🇪 Richtig: 'umgehende Antwort'. Man bittet am Ende eines Briefes oft um eine 'umgehende Antwort'.\n\n🇷🇺 Правильно: 'umgehende Antwort'. Немедленный ответ.", contextText: "Wir bitten um ...... [57] ......." }
    ]
  }
];