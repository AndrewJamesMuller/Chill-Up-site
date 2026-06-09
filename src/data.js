
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

export const pagesLeft = [ 
    // право
    {
        slug: "law",
        title: "Право",
        img: "/public/law.svg",
        mainText: "Право - це система норм, що регулюють суспільні відносини та забезпечують справедливість. Вивчення права відкриває двері до кар'єри юриста, адвоката, судді чи прокурора. Ця професія вимагає аналітичного мислення, комунікаційних навичок та здатності працювати з великим обсягом інформації. Юристи можуть спеціалізуватися в різних галузях, таких як кримінальне право, цивільне право, міжнародне право та інші.",
        children: [
            "lawyer", 
            "advocate", 
            // "notary", 
            // "IT-law", 
            // "judicial-activity", 
            // "tax-law"
        ],
        type: "category"
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
        mainText: "Будівництво - це процес створення будинків, споруд та інфраструктури. Ця професія вимагає технічних знань, креативного мислення та здатності працювати в умовах ризику. Будівельники можуть спеціалізуватися в різних галузях, таких як цивільне будівництво, промислове будівництво, інженерне обладнання та інші.",
        children: [
            "civil-engineer",
            "construction-manager"
        ],
        type: "category"
    },
    {
        slug: "civil-engineer",
        title: "Цивільний інженер",
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
        mainText: "Спорт - це активність, яка сприяє розвитку фізичних та психологічних здібностей. Ця професія вимагає високого рівня підготовки, дисципліни та здатності працювати в умовах тиску. Спортсмени можуть спеціалізуватися в різних галузях, таких як командний спорт, індивідуальний спорт, тренерство та інші.",
        children: [
            "coach",
            "athlete"
        ],
        type: "category"
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
        mainText: "Маркетинг - це процес створення, комунікації та доставки цінності для клієнтів. Ця професія вимагає креативного мислення, аналітичних навичок та здатності працювати в умовах швидких змін. Маркетологи можуть спеціалізуватися в різних галузях, таких як цифровий маркетинг, бренд-менеджмент, ринкові дослідження та інші.",
        children: [
            "digital-marketing",
            "brand-management"
        ],
        type: "category"
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
        mainText: "Інженерія - це галузь знань, що поєднує принципи фізики, математики та технологій для розв'язання практичних задач. Ця професія вимагає аналітичного мислення, креативного підходу та здатності працювати в умовах швидких змін. Інженери можуть спеціалізуватися в різних галузях, таких як інженерна механіка, електрична інженерія, комп'ютерна інженерія та інші.",
        children: [
            "civil-engineer",
            "electrical-engineer",
            "computer-engineer"
        ],
        type: "category"
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
]

export const pagesRight = [
    // ================= IT =================
  {
    slug: "it",
    title: "IT-фахівці",
    img: "/public/it.svg",
    mainText:
      "IT-сфера охоплює розробку програмного забезпечення, веб-додатків, штучного інтелекту та системної інфраструктури. Це одна з найдинамічніших галузей, яка вимагає логічного мислення, постійного навчання та роботи з новими технологіями.",
    children: ["frontend-dev", "backend-dev", "ui-ux-dev"],
    type: "category",
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
    mainText:
      "Професія викладача пов'язана з навчанням та вихованням учнів і студентів. Це робота, яка вимагає терпіння, комунікаційних навичок та глибоких знань у своїй галузі.",
    children: ["school-teacher", "university-lecturer", "tutor"],
    type: "category",
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
    mainText:
      "Дизайн — це процес створення візуальних рішень для веб, графіки, продуктів та інтерфейсів. Дизайнери поєднують креативність та функціональність.",
    children: ["graphic-designer", "ui-ux-designer", "motion-designer"],
    type: "category",
  },
  {
    slug: "graphic-designer",
    title: "Графічний дизайнер",
    text: "a page about graphic designers",
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
    mainText:
      "Офісні професії включають адміністративну, організаційну та управлінську роботу. Це важлива частина бізнес-процесів будь-якої компанії.",
    children: ["office-manager", "secretary", "hr-manager"],
    type: "category",
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
    mainText:
      "Медицина — це галузь, що займається діагностикою, лікуванням та профілактикою захворювань. Вона вимагає високої відповідальності, знань та емпатії.",
    children: ["doctor", "surgeon", "nurse"],
    type: "category",
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