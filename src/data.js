
// поради на головній сторінці
export const steps = [
    {
        text: "Переглянь сторінку з переліком професійних напрямків",
        link: "/ProfCatalog"
    },
    {text: "Перейди на сторінку напряму, що тебе цікавить"},
    {text: "Прочитай інформацію про вибраний професійний напрям"},
    {text: "Перейди на сторінку спеціальності з даного переліку"},
    {text: "прочитай корисні поради для вступу"}
]


// Масиви з професійними напрямками та спеціальностями

// export const ProfPages1 = [
//     law = {
//         title: "Право",
//         img: "/public/law.svg",
//         mainText: "Право - це система норм, що регулюють суспільні відносини та забезпечують справедливість. Вивчення права відкриває двері до кар'єри юриста, адвоката, судді чи прокурора. Ця професія вимагає аналітичного мислення, комунікаційних навичок та здатності працювати з великим обсягом інформації. Юристи можуть спеціалізуватися в різних галузях, таких як кримінальне право, цивільне право, міжнародне право та інші.",
//         directions = [
//             "Цивільне право Адвокатура Нотаріат IT-право Судова діяльність Податкове право"
//             ]
//             }
// ]   

export const pages = [ 
    // право
    {
        slug: "law",
        title: "Право",
        img: "/public/law.svg",
        imageMain: "/public/tematic-law.png",
        mainText: "Право — це сфера, пов'язана із захистом прав громадян, забезпеченням справедливості та дотриманням законів. Фахівці цієї галузі працюють із юридичними документами, консультують клієнтів і представляють їхні інтереси. Для успішної роботи необхідні уважність, відповідальність та аналітичне мислення. Правнича освіта відкриває можливості для роботи в державному та приватному секторах.",
        children: [
            "lawyer", 
            "advocate", 
            // "notary", 
            // "IT-law", 
            // "judicial-activity", 
            // "tax-law"
        ],
        type: "category",
        column: "left"
    },
    {
        slug: "lawyer",
        title: "Юрист",
        text: "a page about lawyers",
        type: "page"
    },
    {
        slug: "advocate",
        title: "Адвокат",
        text: "a page about advocates",
         type: "page"
    },

    // будівництво
    {
        slug: "construction",
        title: "Будівництво",
        img: "/public/builder1.svg",
        imageMain: "/public/building.jpg",
        mainText: "Будівництво охоплює проєктування, спорудження та обслуговування будівель і різних інженерних об'єктів. Спеціалісти цієї галузі беруть участь у створенні житлових будинків, доріг, мостів та інших споруд. Робота вимагає технічних знань, точності та вміння працювати в команді. Будівельна сфера залишається важливою для розвитку будь-якої країни.",
        children: [
            "building-engineer",
            "construction-manager"
        ],
        type: "category",
        column: "left"
    },
    {
        slug: "building-engineer",
        title: "будівельний інженер",
        text: "a page about civil engineers",
         type: "page"
    },
    {
        slug: "construction-manager",
        title: "Керівник будівельного проекту",
        text: "a page about construction managers",
         type: "page"
    },

// спорт
    {
        slug: "sports",
        title: "Спорт",
        img: "/public/sports1.svg",
        imageMain: "/public/tematic-sport.png",
        mainText: "Спортивна галузь об'єднує професії, пов'язані з фізичною підготовкою, тренуванням та розвитком здорового способу життя. Фахівці працюють зі спортсменами різного рівня та допомагають їм досягати високих результатів. У цій сфері важливими є дисципліна, витривалість і комунікаційні навички. Спорт також відкриває можливості для роботи у сфері освіти та реабілітації.",
        children: [
            "coach",
            "athlete"
        ],
        type: "category",
        column: "left"
    },
    {
        slug: "coach",
        title: "Тренер",
        text: "a page about coaches",
         type: "page"
    },
    {
        slug: "athlete",
        title: "Спортсмен",
        text: "a page about athletes",
         type: "page"
    },

    // маркетинг
    {
        slug: "marketing",
        title: "Маркетинг",
        img: "/public/marketing.svg",
        imageMain: "/public/tematic-marketing.png",
        mainText: "Маркетинг займається просуванням товарів, послуг і брендів на ринку. Спеціалісти аналізують потреби споживачів, створюють рекламні кампанії та досліджують конкурентне середовище. Для роботи необхідні креативність, аналітичне мислення та вміння працювати з інформацією. Маркетинг є важливою складовою розвитку сучасного бізнесу.",
        children: [
            "digital-marketing",
            "brand-management"
        ],
        type: "category",
        column: "left"
    },
    {
        slug: "digital-marketing",
        title: "Цифровий маркетинг",
        text: "a page about digital marketing",
         type: "page"
    },
    {
        slug: "brand-management",
        title: "Бренд-менеджмент",
        text: "a page about brand management",
         type: "page"
    },

    // інженери
    {
        slug: "engineering",
        title: "Інженерія",
        img: "/public/engineering.svg",
        imageMain: "/public/tematic-engeneering.png",
        mainText: "Інженерія поєднує науку, техніку та практичні рішення для створення нових технологій і систем. Інженери проєктують механізми, обладнання, будівлі та інші технічні об'єкти. Професія вимагає глибоких знань математики, фізики та технічного мислення. Інженерні спеціальності залишаються затребуваними в багатьох галузях економіки.",
        children: [
            "civil-engineer",
            "electrical-engineer",
            "computer-engineer",
            "pppp",
            "dfedfergretgre",
            "oxcdwsefr"
        ],
        type: "category",
        column: "left"
    },
    {
        slug: "civil-engineer",
        title: "Цивільний інженер",
        text: "a page about civil engineers",
         type: "page"
    },
    {
        slug: "electrical-engineer",
        title: "Електричний інженер",
        text: "a page about electrical engineers",
         type: "page"
    },
    {
        slug: "computer-engineer",
        title: "Комп'ютерний інженер",
        text: "a page about computer engineers",
         type: "page"
    },

    {
        slug: "pppp",
        title: "pppp",
        text: "a page about computer engineers",
         type: "page"
    },
    {
        slug: "dfedfergretgre",
        title: "dfedfergretgre",
        text: "a page about computer engineers",
         type: "page"
    },
    {
        slug: "oxcdwsefr",
        title: "oxcdwsefr",
        text: "a page about computer engineers",
         type: "page"
    },

    // it
    {
    slug: "it",
    title: "IT-фахівці",
    img: "/public/it.svg",
    imageMain: "/public/tematic-it.png",
    mainText:
      "IT-сфера охоплює розробку програмного забезпечення, комп'ютерних систем та цифрових сервісів. Фахівці створюють сайти, мобільні застосунки, бази даних та інші технологічні продукти. У цій галузі важливими є логічне мислення, уважність до деталей та готовність постійно навчатися. IT пропонує широкий вибір напрямків і перспектив для професійного розвитку.",
    children: ["frontend-dev", "backend-dev", "ui-ux-dev"],
    type: "category",
    column: "right"
  },
  {
    slug: "frontend-dev",
    title: "Frontend розробник",
    text: "a page about frontend developers",
    type: "page",
  },
  {
    slug: "backend-dev",
    title: "Backend розробник",
    text: "a page about backend developers",
    type: "page",
  },
  {
    slug: "ui-ux-dev",
    title: "UI/UX дизайнер у IT",
    text: "a page about UI/UX designers in IT",
    type: "page",
  },

  // ================= Викладачі =================
  {
    slug: "teaching",
    title: "Викладачі",
    img: "/public/teacher.svg",
    imageMain: "/public/tematic-teaching.png",
    mainText:
      "Викладання — це діяльність, спрямована на передачу знань, навичок та досвіду іншим людям. Педагоги працюють у школах, коледжах, університетах та освітніх центрах. Для цієї професії важливими є терпіння, відповідальність та вміння знаходити підхід до учнів. Робота викладача відіграє важливу роль у розвитку суспільства.",
    children: ["school-teacher", "university-lecturer", "tutor"],
    type: "category",
    column: "right"
  },
  {
    slug: "school-teacher",
    title: "Шкільний вчитель",
    text: "a page about school teachers",
    type: "page",
  },
  {
    slug: "university-lecturer",
    title: "Університетський викладач",
    text: "a page about university lecturers",
    type: "page",
  },
  {
    slug: "tutor",
    title: "Репетитор",
    text: "a page about tutors",
    type: "page",
  },

  // ================= Дизайн =================
  {
    slug: "design",
    title: "Дизайн",
    img: "/public/design.svg",
    imageMain: "/public/tematic-design.png",
    mainText:
      "Дизайн поєднує творчість і практичні рішення для створення зручних та привабливих продуктів. Дизайнери працюють із графікою, інтерфейсами, рекламою, одягом та багатьма іншими напрямками. Для успіху в цій сфері необхідні креативність, почуття стилю та увага до деталей. Дизайнери допомагають зробити інформацію та продукти зрозумілими й естетичними.",
    children: ["graphic-designer", "ui-ux-designer", "motion-designer"],
    type: "category",
    column: "right"
  },
  {
    slug: "graphic-designer",
    title: "Графічний дизайн",
    text: "Графічний дизайн — це спеціальність, що поєднує творчість, мистецтво та сучасні цифрові технології для створення візуальної комунікації. Графічні дизайнери розробляють логотипи, фірмовий стиль компаній, рекламні матеріали, упаковку товарів, ілюстрації, вебдизайн та інші візуальні продукти. Основна мета дизайнера — передати інформацію зрозуміло, естетично та ефективно.",
    titleAboutLearn: "Що вивчають студенти",
    listOfLearning: [
      "основи композиції та кольорознавства;",
      "типографіку та роботу зі шрифтами;",
      "академічний рисунок і живопис;",
      "історію мистецтва та дизайну;",
      "брендинг та розробку фірмового стилю;",
      "рекламний дизайн;",
      "дизайн друкованої продукції;",
      "вебдизайн та цифровий дизайн;",
      "створення ілюстрацій;",
      "роботу з професійними графічними редакторами."
    ],
    titleAboutSkills: "Необхідні навички",
    listOfSkills: [
      "творче мислення;",
      "розвинене почуття стилю та естетики;",
      "уважність до деталей;",
      "комунікабельність;",
      "здатність працювати з дедлайнами;",
      "бажання постійно вдосконалювати свої навички."
    ],
    titleOfProfessions: "Ким можна працювати",
    listOfPossibleWork: [
      "графічними дизайнерами;",
      "бренд-дизайнерами;",
      "вебдизайнерами;",
      "ілюстраторами;",
      "дизайнерами поліграфічної продукції;",
      "дизайнерами упаковки;",
      "фахівцями з комп'ютерної графіки;",
      "артдиректорами (з досвідом роботи)."
    ],
    titleOfPreferences: "Переваги спеціальності",
    listOfPreferences: [
      "можливість реалізовувати творчі ідеї;",
      "велика кількість напрямків для розвитку;",
      "можливість працювати віддалено;",
      "затребуваність у рекламі, маркетингу та цифрових медіа;",
      "можливість працювати як фрилансер або в компанії."
    ],
    type: "page",
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX дизайнер",
    text: "a page about UI/UX designers",
    type: "page",
  },
  {
    slug: "motion-designer",
    title: "Motion дизайнер",
    text: "a page about motion designers",
    type: "page",
  },

  // ================= Офісна справа =================
  {
    slug: "office",
    title: "Офісна справа",
    img: "/public/office.svg",
    imageMain: "/public/tematic-office.png",
    mainText:
      "Офісна справа охоплює професії, пов'язані з організацією роботи підприємств та установ. Фахівці займаються документообігом, комунікацією, плануванням і координацією процесів. Для роботи важливі відповідальність, організованість та навички спілкування. Ця сфера є необхідною для ефективної діяльності будь-якої організації.",
    children: ["office-manager", "secretary", "hr-manager"],
    type: "category",
    column: "right"
  },
  {
    slug: "office-manager",
    title: "Офіс-менеджер",
    text: "a page about office managers",
    type: "page",
  },
  {
    slug: "secretary",
    title: "Секретар",
    text: "a page about secretaries",
    type: "page",
  },
  {
    slug: "hr-manager",
    title: "HR-менеджер",
    text: "a page about HR managers",
    type: "page",
  },

  // ================= Медицина =================
  {
    slug: "medicine",
    title: "Лікарська справа",
    img: "/public/doctor.svg",
    imageMain: "/public/tematic-doctor.png",
    mainText:
      "Медична галузь об'єднує професії, пов'язані з діагностикою, лікуванням та профілактикою захворювань. Лікарі допомагають людям підтримувати здоров'я та покращувати якість життя. Для цієї роботи потрібні ґрунтовні знання, відповідальність і готовність постійно вдосконалюватися. Медичні професії є одними з найважливіших і найшанованіших у суспільстві.",
    children: ["doctor", "surgeon", "nurse"],
    type: "category",
    column: "right"
  },
  {
    slug: "doctor",
    title: "Лікар",
    text: "a page about doctors",
    type: "page",
  },
  {
    slug: "surgeon",
    title: "Хірург",
    text: "a page about surgeons",
    type: "page",
  },
  {
    slug: "nurse",
    title: "Медсестра",
    text: "a page about nurses",
    type: "page",
  },
];