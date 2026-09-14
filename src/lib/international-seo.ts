import type { Locale } from "./i18n";

export type InternationalSeoPage = {
  locale: Exclude<Locale, "tr">;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: { title: string; text: string }[];
  faq: [string, string][];
  cta: string;
};

export const internationalSeoPages: InternationalSeoPage[] = [
  {
    locale: "de",
    slug: "immobilie-tuerkei-verkaufen",
    eyebrow: "IMMOBILIE IN DER TÜRKEI VERKAUFEN",
    title: "Immobilie in der Türkei verkaufen – direkt aus Deutschland starten",
    description: "Haus, Wohnung, Grundstück oder geerbte Immobilie in der Türkei verkaufen: diskrete Vorprüfung aus Deutschland, auch bei Erbe, Miteigentum oder Vollmacht.",
    intro: "Sie leben in Deutschland, Österreich, der Schweiz oder einem anderen Land und besitzen eine Immobilie in der Türkei? Die erste Prüfung kann vollständig aus der Ferne beginnen. Entscheidend sind Lage, Eigentumsstruktur, Tapu-Daten, Zustand und Ihre realistische Verkaufsabsicht.",
    sections: [
      { title: "Erste Prüfung ohne Reise in die Türkei", text: "Für den Start reichen meist Ort bzw. Stadtteil, Objektart, ungefähre Größe, Eigentumsstatus und Preisvorstellung. Fotos, Tapu-Daten und weitere Unterlagen können bei Bedarf später ergänzt werden." },
      { title: "Erbe, Miteigentum und noch laufende Umschreibung", text: "Auch komplexere Eigentümerstrukturen können zunächst geprüft werden. Für einen verbindlichen Verkauf muss allerdings klar sein, wer Eigentümer ist, welche Anteile bestehen und wie eine rechtlich wirksame Übertragung erfolgen kann." },
      { title: "Vollmacht erst dann, wenn sie wirklich gebraucht wird", text: "Für die unverbindliche Vorprüfung ist keine Vollmacht nötig. Wenn später eine Vertretung bei einem offiziellen Vorgang vorgesehen ist, muss die konkrete Vollmacht für diesen Vorgang geeignet sein und separat geprüft werden." },
      { title: "Direkter Verkaufswunsch statt allgemeiner Rechtsberatung", text: "Wir prüfen Immobilien aus Ankaufsperspektive. Familienkonflikte, Gerichtsverfahren oder reine Rechtsfragen lösen wir nicht. Relevant sind Fälle, bei denen ein echter Verkaufswunsch besteht und ein umsetzbarer Übertragungsweg erkennbar ist." },
    ],
    faq: [
      ["Kann ich meine Immobilie in der Türkei aus Deutschland verkaufen?", "Die Vorbereitung und Vorprüfung kann aus Deutschland starten. Welche Form der persönlichen Teilnahme oder Vertretung im konkreten Verkauf nötig ist, muss vor dem offiziellen Vorgang geklärt werden."],
      ["Kann ich eine geerbte Immobilie prüfen lassen?", "Ja. Auch wenn die Erbumschreibung noch nicht abgeschlossen ist, kann eine erste Ankaufseinschätzung erfolgen."],
      ["Muss ich sofort Tapu und Ausweis senden?", "Nein. Für den Erstkontakt genügen grundlegende Objektdaten. Sensible Unterlagen werden nur angefragt, wenn sie für die weitere Prüfung erforderlich sind."],
    ],
    cta: "Immobilie prüfen lassen",
  },
  {
    locale: "de",
    slug: "geerbte-immobilie-tuerkei-verkaufen",
    eyebrow: "ERBE IN DER TÜRKEI",
    title: "Geerbte Immobilie in der Türkei verkaufen – auch mit mehreren Erben",
    description: "Geerbtes Haus, Grundstück oder Wohnung in der Türkei verkaufen: Vorprüfung bei mehreren Erben, laufender Umschreibung und Wohnsitz im Ausland.",
    intro: "Bei geerbten Immobilien scheitert ein Verkauf oft nicht am Objekt, sondern an unklaren Anteilen und unterschiedlichen Entscheidungen der Erben. Deshalb prüfen wir zuerst, ob aus der Eigentümerstruktur ein realistisch umsetzbarer Verkauf werden kann.",
    sections: [
      { title: "Die Immobilie kann vor Abschluss aller Formalitäten geprüft werden", text: "Eine unverbindliche Ankaufseinschätzung kann bereits mit den bekannten Objekt- und Erbdaten starten. Für den tatsächlichen Verkauf müssen Eigentum und Vertretungsbefugnisse rechtzeitig geklärt sein." },
      { title: "Mehrere Erben sind nicht automatisch ein Ausschluss", text: "Wichtig ist, welche Anteile bestehen und ob eine gemeinsame Verkaufsentscheidung möglich ist. Wenn nur ein Anteil verkauft werden soll, wird dieser Fall separat bewertet." },
      { title: "Leerstehende oder lange ungenutzte Immobilien sind relevant", text: "Gerade geerbte Häuser, Wohnungen oder Grundstücke stehen häufig lange leer. Renovierungsbedarf oder fehlende Nutzung schließen eine Prüfung nicht aus." },
    ],
    faq: [
      ["Ein Erbe lebt in Deutschland, andere in der Türkei – geht das?", "Ja. Die erste Prüfung kann unabhängig vom Wohnort der Erben starten."],
      ["Was wenn sich die Erben noch nicht vollständig einig sind?", "Die Situation kann beschrieben werden; ein verbindlicher Ankauf setzt jedoch einen rechtlich umsetzbaren Verkaufsweg voraus."],
      ["Kann auch nur ein Erbanteil geprüft werden?", "Ja, sofern Anteil und Eigentumsstruktur bekannt sind. Die wirtschaftliche Bewertung kann sich von einem Gesamtverkauf unterscheiden."],
    ],
    cta: "Erbimmobilie prüfen lassen",
  },
  {
    locale: "de",
    slug: "vollmacht-immobilienverkauf-tuerkei",
    eyebrow: "VERKAUF MIT VOLLMACHT",
    title: "Immobilienverkauf Türkei mit Vollmacht – was Eigentümer im Ausland beachten sollten",
    description: "Vorprüfung für Immobilienverkäufer im Ausland, die einen Verkauf in der Türkei per Vollmacht vorbereiten möchten.",
    intro: "Eine Vollmacht ist kein Ersatz für eine klare Eigentums- und Verkaufssituation. Deshalb prüfen wir zuerst die Immobilie und den Verkaufswunsch. Erst wenn der Vorgang grundsätzlich passt, wird geklärt, welche Form der Vertretung für die offizielle Abwicklung benötigt wird.",
    sections: [
      { title: "Für die Anfrage brauchen Sie noch keine Vollmacht", text: "Standort, Tapu-Situation, Größe, Objektart und Preisvorstellung reichen für die erste Einschätzung aus." },
      { title: "Nicht jede Vollmacht deckt jeden Immobilienvorgang ab", text: "Ob eine im Ausland ausgestellte Vollmacht für einen konkreten Tapu-Vorgang verwendet werden kann, hängt von Inhalt, Form und offizieller Anerkennung ab. Das muss vor der Transaktion fachlich geprüft werden." },
      { title: "Erst Ankaufseignung, dann Dokumentenaufwand", text: "So vermeiden Sie unnötige Kosten und Organisation, bevor feststeht, ob die Immobilie überhaupt zu unseren Ankaufskriterien passt." },
    ],
    faq: [
      ["Brauche ich für die erste Bewertung eine notarielle Vollmacht?", "Nein."],
      ["Kann ich aus Deutschland komplett aus der Ferne starten?", "Ja. Erst wenn ein offizieller Verkauf vorbereitet wird, müssen Teilnahme oder Vertretung konkret organisiert werden."],
      ["Prüfen Sie den Wortlaut meiner Vollmacht rechtlich?", "Nein. Wir bieten keine Rechtsberatung; die rechtliche Verwendbarkeit muss durch dafür befugte Stellen geprüft werden."],
    ],
    cta: "Verkauf aus dem Ausland anfragen",
  },
  {
    locale: "en",
    slug: "sell-property-turkey",
    eyebrow: "SELL PROPERTY IN TURKEY",
    title: "Sell property in Turkey from abroad – start with a private review",
    description: "Private acquisition review for owners selling a house, apartment, land or inherited property in Turkey while living abroad.",
    intro: "If you live outside Turkey, you can start with the property facts before arranging travel, powers of attorney or formal paperwork. We focus on whether the property and ownership situation are suitable for a direct acquisition review.",
    sections: [
      { title: "Start remotely", text: "Share the area, property type, approximate size, title status and asking price. Further documents can follow only if the file is potentially relevant." },
      { title: "Inheritance and shared ownership can still be reviewed", text: "Multiple heirs or co-owners do not automatically rule out a file, but ownership shares and the real ability to make a sale decision must become clear before a binding transaction." },
      { title: "A power of attorney is not needed for the initial review", text: "If representation is later required for an official transaction, the specific document and its legal suitability must be checked separately." },
    ],
    faq: [
      ["Can I start while living in Europe or the Gulf?", "Yes. The initial review can be handled remotely."],
      ["Do you buy inherited property?", "Inherited property can be reviewed if the ownership and transfer path can be clarified."],
      ["Do you provide legal representation?", "No. We review potential acquisition files; legal advice and litigation must be handled separately."],
    ],
    cta: "Request a private review",
  },
  {
    locale: "ru",
    slug: "prodat-nedvizhimost-v-turtsii",
    eyebrow: "ПРОДАЖА НЕДВИЖИМОСТИ В ТУРЦИИ",
    title: "Продать недвижимость в Турции, находясь за границей",
    description: "Предварительная конфиденциальная оценка квартиры, дома, земли или наследственной недвижимости в Турции для владельцев за рубежом.",
    intro: "Для первого шага не обязательно приезжать в Турцию. Можно начать с района, типа недвижимости, площади, информации Tapu, структуры собственников и ожидаемой цены.",
    sections: [
      { title: "Начните дистанционно", text: "Основные данные объекта позволяют понять, соответствует ли он критериям прямой инвестиционной покупки." },
      { title: "Наследство и долевая собственность", text: "Несколько наследников или владельцев не исключают рассмотрение, но до сделки должны быть понятны доли и возможность законного решения о продаже." },
      { title: "Доверенность нужна не для первой оценки", text: "Если на официальном этапе потребуется представитель, пригодность конкретной доверенности необходимо проверить отдельно." },
    ],
    faq: [
      ["Можно начать, находясь за пределами Турции?", "Да."],
      ["Можно подать наследственную недвижимость?", "Да, если структура наследников и путь оформления могут быть уточнены."],
      ["Вы ведёте судебные споры?", "Нет. Мы не оказываем услуги судебного представительства."],
    ],
    cta: "Отправить объект на проверку",
  },
  {
    locale: "ar",
    slug: "sell-property-turkey",
    eyebrow: "بيع عقار في تركيا",
    title: "بيع عقارك في تركيا من خارج البلاد – ابدأ بتقييم خاص",
    description: "تقييم أولي سري لأصحاب المنازل والشقق والأراضي والعقارات الموروثة في تركيا ممن يعيشون خارج البلاد.",
    intro: "يمكن بدء التقييم دون السفر إلى تركيا. في المرحلة الأولى يكفي إرسال المنطقة ونوع العقار والمساحة التقريبية ووضع سند الملكية وهيكل الملاك والسعر المتوقع.",
    sections: [
      { title: "ابدأ عن بُعد", text: "نراجع المعلومات الأساسية أولاً لمعرفة ما إذا كان العقار مناسباً لمعايير الشراء المباشر." },
      { title: "الإرث والملكية المشتركة لا تعني الرفض تلقائياً", text: "يمكن دراسة العقار مع وجود عدة ورثة أو ملاك، لكن يجب أن يصبح هيكل الملكية وطريق اتخاذ قرار البيع واضحاً قبل أي معاملة ملزمة." },
      { title: "لا تحتاج إلى وكالة في مرحلة التقييم الأولى", text: "إذا لزم ممثل في المعاملة الرسمية لاحقاً فيجب التحقق بشكل منفصل من صلاحية الوكالة للعملية المحددة." },
    ],
    faq: [
      ["هل يمكنني البدء وأنا خارج تركيا؟", "نعم، يمكن أن تبدأ المراجعة بالكامل عن بُعد."],
      ["هل يمكن تقييم عقار موروث؟", "نعم، إذا كان من الممكن توضيح الملكية وطريق نقلها."],
      ["هل تقدمون تمثيلاً قانونياً في النزاعات؟", "لا. نحن نراجع فرص الشراء ولا نقدم خدمات التقاضي."],
    ],
    cta: "اطلب التقييم",
  },
];

export function findInternationalSeoPage(locale: string, slug: string) {
  return internationalSeoPages.find((page) => page.locale === locale && page.slug === slug);
}
