// =============================================================================
// 時代華語 Modern Chinese 1 — Complete Lesson Data (Lessons 1–7)
// =============================================================================
// NOTE: lessons 2-7 defined below lesson1

// ─── LESSON 1 ─────────────────────────────────────────────────────────────────
const lesson1 = {
  id: 1,
  title: '新同學',
  titlePinyin: 'Xīn Tóngxué',
  titleEn: 'The New Classmate',
  titleId: 'Teman Kelas Baru',
  level: 'BAB 1',
  icon: '👋',

  dialogues: [
    {
      id: 'D1',
      title: '對話一 Dialogue 1',
      setting: '在教室 In the classroom',
      lines: [
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '宜文，她是誰？', textPinyin: 'Yíwén, tā shì shéi?', textEn: 'Yiwen, who is she?' },
        { speaker: '宜文', pinyin: 'Yíwén', text: '她是新同學，叫友美。她很可愛。', textPinyin: 'Tā shì xīn tóngxué, jiào Yǒuměi. Tā hěn kěài.', textEn: 'She is our new classmate. Her name is Youmei. She is cute.' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '她是哪國人？妳知道嗎？', textPinyin: 'Tā shì nǎ guó rén? Nǐ zhīdào ma?', textEn: 'Which country is she from? Do you know?' },
        { speaker: '宜文', pinyin: 'Yíwén', text: '我知道，她是日本人。', textPinyin: 'Wǒ zhīdào, tā shì Rìběn rén.', textEn: 'Yes, I do. She is from Japan.' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '她很漂亮。', textPinyin: 'Tā hěn piàoliàng.', textEn: 'She is very pretty.' },
      ],
    },
    {
      id: 'D2',
      title: '對話二 Dialogue 2',
      setting: '在教室 In the classroom',
      lines: [
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '妳好！我是李中明，請問妳叫什麼名字？', textPinyin: 'Nǐ hǎo! Wǒ shì Lǐ Zhōngmíng, qǐngwèn nǐ jiào shénme míngzi?', textEn: 'Hi, my name is Li Zhongming. May I ask what your name is?' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '我姓小林，叫友美。', textPinyin: 'Wǒ xìng Xiǎolín, jiào Yǒuměi.', textEn: 'My surname is Xiaolin. My first name is Youmei.' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '請問妳是哪國人？', textPinyin: 'Qǐngwèn nǐ shì nǎ guó rén?', textEn: 'May I ask where you are from?' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '我是日本人，你呢？', textPinyin: 'Wǒ shì Rìběn rén, nǐ ne?', textEn: 'I am from Japan. How about you?' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '我是印尼人。妳喜歡台灣嗎？', textPinyin: 'Wǒ shì Yìnní rén. Nǐ xǐhuān Táiwān ma?', textEn: 'I am from Indonesia. Do you like Taiwan?' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '我喜歡台灣。', textPinyin: 'Wǒ xǐhuān Táiwān.', textEn: 'I like Taiwan.' },
      ],
    },
  ],

  vocabulary: [
    { id: 1,  char: '新',     pinyin: 'xīn',      pos: 'Vs',   en: 'new',                      id_: 'baru' },
    { id: 2,  char: '同學',   pinyin: 'tóngxué',  pos: 'N',    en: 'classmate',                id_: 'teman kelas',        example: '他是新同學。',         examplePinyin: 'Tā shì xīn tóngxué.',          exampleEn: 'He is the new classmate.' },
    { id: 3,  char: '她',     pinyin: 'tā',       pos: 'N',    en: 'she; her',                 id_: 'dia (perempuan)' },
    { id: 4,  char: '誰',     pinyin: 'shéi',     pos: 'N',    en: 'who',                      id_: 'siapa',              example: '她是誰？',             examplePinyin: 'Tā shì shéi?',                 exampleEn: 'Who is she?' },
    { id: 5,  char: '叫',     pinyin: 'jiào',     pos: 'Vst',  en: 'to be called',             id_: 'bernama / dipanggil',example: '我叫王宜文。',         examplePinyin: 'Wǒ jiào Wáng Yíwén.',          exampleEn: 'My name is Wang Yiwen.' },
    { id: 6,  char: '姓',     pinyin: 'xìng',     pos: 'Vst',  en: 'to be surnamed',           id_: 'bermarga',           example: '我姓王，叫宜文。',     examplePinyin: 'Wǒ xìng Wáng, jiào Yíwén.',   exampleEn: 'My surname is Wang. My first name is Yiwen.' },
    { id: 7,  char: '很',     pinyin: 'hěn',      pos: 'Adv',  en: 'very',                     id_: 'sangat' },
    { id: 8,  char: '可愛',   pinyin: 'kěài',     pos: 'Vs',   en: 'lovely; cute',             id_: 'lucu; menggemaskan', example: '新同學很可愛。',       examplePinyin: 'Xīn tóngxué hěn kěài.',        exampleEn: 'The new classmate is lovely.' },
    { id: 9,  char: '哪',     pinyin: 'nǎ / něi', pos: 'Det',  en: 'which',                    id_: 'yang mana' },
    { id: 10, char: '國',     pinyin: 'guó',      pos: 'N',    en: 'country',                  id_: 'negara',             example: '他是哪國人？',         examplePinyin: 'Tā shì nǎ guó rén?',           exampleEn: 'Which country is he from?' },
    { id: 11, char: '妳',     pinyin: 'nǐ',       pos: 'N',    en: 'you (female)',              id_: 'kamu (perempuan)' },
    { id: 12, char: '知道',   pinyin: 'zhīdào',   pos: 'Vst',  en: 'to know',                  id_: 'tahu' },
    { id: 13, char: '嗎',     pinyin: 'ma',       pos: 'Ptc',  en: 'yes/no question particle', id_: 'partikel pertanyaan ya/tidak' },
    { id: 14, char: '日本',   pinyin: 'Rìběn',    pos: 'N',    en: 'Japan',                    id_: 'Jepang' },
    { id: 15, char: '漂亮',   pinyin: 'piàoliàng',pos: 'Vs',   en: 'pretty; beautiful',        id_: 'cantik; indah',      example: '她很漂亮。',           examplePinyin: 'Tā hěn piàoliàng.',            exampleEn: 'She is very pretty.' },
    { id: 16, char: '什麼',   pinyin: 'shénme',   pos: 'N',    en: 'what',                     id_: 'apa' },
    { id: 17, char: '名字',   pinyin: 'míngzi',   pos: 'N',    en: 'first name; full name',    id_: 'nama' },
    { id: 18, char: '姓名',   pinyin: 'xìngmíng', pos: 'N',    en: 'surname and given name (full name)', id_: 'nama lengkap' },
    { id: 19, char: '呢',     pinyin: 'ne',       pos: 'Ptc',  en: '"how about" question particle', id_: 'partikel "bagaimana dengan"', example: '我是臺灣人，你呢？', examplePinyin: 'Wǒ shì Táiwān rén, nǐ ne?', exampleEn: 'I am Taiwanese. How about you?' },
    { id: 20, char: '印尼',   pinyin: 'Yìnní',    pos: 'N',    en: 'Indonesia',                id_: 'Indonesia' },
    { id: 21, char: '喜歡',   pinyin: 'xǐhuān',   pos: 'Vst',  en: 'to like',                  id_: 'suka',               example: '你喜歡臺灣嗎？',       examplePinyin: 'Nǐ xǐhuān Táiwān ma?',         exampleEn: 'Do you like Taiwan?' },
    { id: 22, char: '你好',   pinyin: 'nǐ hǎo',   pos: 'Phr',  en: 'hello',                    id_: 'halo' },
    { id: 23, char: '好',     pinyin: 'hǎo',      pos: 'Vs',   en: 'fine; good; well; nice; ok', id_: 'baik; bagus',      example: '你好嗎？我很好。',     examplePinyin: 'Nǐ hǎo ma? Wǒ hěn hǎo.',      exampleEn: 'How are you? I am good.' },
    { id: 24, char: '請問',   pinyin: 'qǐngwèn',  pos: 'Phr',  en: 'May I ask...; Excuse me...', id_: 'permisi; boleh saya tanya', example: '請問你是臺灣人嗎？', examplePinyin: 'Qǐngwèn nǐ shì Táiwān rén ma?', exampleEn: 'Excuse me, are you Taiwanese?' },
    { id: 25, char: '大家',   pinyin: 'dàjiā',    pos: 'N',    en: 'everyone',                 id_: 'semuanya',           example: '大家好，我是小林友美。', examplePinyin: 'Dàjiā hǎo, wǒ shì Xiǎolín Yǒuměi.', exampleEn: 'Hi everyone. I am Xiaolin Youmei.' },
    { id: 26, char: '朋友',   pinyin: 'péngyǒu',  pos: 'N',    en: 'friend',                   id_: 'teman' },
    { id: 27, char: '愛',     pinyin: 'ài',       pos: 'Vst',  en: 'to love',                  id_: 'mencintai',          example: '我愛你。',             examplePinyin: 'Wǒ ài nǐ.',                    exampleEn: 'I love you.' },
    { id: 28, char: '吃',     pinyin: 'chī',      pos: 'V',    en: 'to eat',                   id_: 'makan' },
    { id: 29, char: '水果',   pinyin: 'shuǐguǒ',  pos: 'N',    en: 'fruit',                    id_: 'buah',               example: '我愛吃水果。',         examplePinyin: 'Wǒ ài chī shuǐguǒ.',           exampleEn: 'I love eating fruit.' },
    { id: 30, char: '水',     pinyin: 'shuǐ',     pos: 'N',    en: 'water',                    id_: 'air' },
    { id: 31, char: '喝',     pinyin: 'hē',       pos: 'V',    en: 'to drink',                 id_: 'minum' },
    { id: 32, char: '茶',     pinyin: 'chá',      pos: 'N',    en: 'tea',                      id_: 'teh',                example: '我喜歡喝茶。',         examplePinyin: 'Wǒ xǐhuān hē chá.',            exampleEn: 'I like to drink tea.' },
    { id: 33, char: '珍珠奶茶', pinyin: 'zhēnzhū nǎichá', pos: 'N', en: 'bubble milk tea',    id_: 'teh susu mutiara (bubble tea)' },
    { id: 34, char: '奶茶',   pinyin: 'nǎichá',   pos: 'N',    en: 'milk tea',                 id_: 'teh susu' },
    { id: 35, char: '謝謝',   pinyin: 'xièxie',   pos: 'Vst',  en: 'to thank; thank you',      id_: 'terima kasih',       example: '謝謝你。',             examplePinyin: 'Xièxie nǐ.',                   exampleEn: 'Thank you.' },
    { id: 36, char: '不客氣', pinyin: 'bú kèqì',  pos: 'Phr',  en: 'You are welcome',          id_: 'sama-sama / kembali kasih' },
    { id: 37, char: '早安',   pinyin: 'zǎo ān',   pos: 'Phr',  en: 'good morning',             id_: 'selamat pagi' },
    { id: 38, char: '午安',   pinyin: 'wǔ ān',    pos: 'Phr',  en: 'good afternoon',           id_: 'selamat siang' },
    { id: 39, char: '晚安',   pinyin: 'wǎn ān',   pos: 'Phr',  en: 'good night',               id_: 'selamat malam' },
    { id: 40, char: '自我介紹', pinyin: 'zìwǒ jièshào', pos: 'Phr', en: 'self-introduction',  id_: 'perkenalan diri' },
    { id: 41, char: '忙',     pinyin: 'máng',     pos: 'Vs',   en: 'busy',                     id_: 'sibuk' },
    { id: 42, char: '累',     pinyin: 'lèi',      pos: 'Vs',   en: 'tired',                    id_: 'lelah' },
  ],

  phrases: [
    { zh: '你/妳好', pinyin: 'nǐ hǎo', en: 'hello', id_: 'halo' },
    { zh: '請問', pinyin: 'qǐngwèn', en: 'May I ask...; Excuse me...', id_: 'permisi; boleh saya tanya' },
    { zh: '謝謝', pinyin: 'xièxie', en: 'Thank you', id_: 'terima kasih' },
    { zh: '不客氣', pinyin: 'bú kèqì', en: 'You are welcome', id_: 'sama-sama' },
    { zh: '早安', pinyin: 'zǎo ān', en: 'Good morning', id_: 'selamat pagi' },
    { zh: '午安', pinyin: 'wǔ ān', en: 'Good afternoon', id_: 'selamat siang' },
    { zh: '晚安', pinyin: 'wǎn ān', en: 'Good night', id_: 'selamat malam' },
    { zh: '自我介紹', pinyin: 'zìwǒ jièshào', en: 'Self-introduction', id_: 'perkenalan diri' },
  ],

  grammar: [
    {
      id: 'G1',
      title: 'I. Sentences with 叫、姓 or 是',
      explanation: '叫, 姓 and 是 are used as verbs and equate two nouns in a sentence. 姓 is only used for a family name. 叫 can be used for either a given name or a full name.',
      pattern: '(Neg) N  叫 / 姓 / 是  N',
      examples: [
        { zh: '他叫中明。', pinyin: 'Tā jiào Zhōngmíng.', en: 'His name is Zhongming.' },
        { zh: '誰姓李？', pinyin: 'Shéi xìng Lǐ?', en: 'Whose surname is Li?' },
        { zh: '他不是臺灣人。', pinyin: 'Tā bú shì Táiwān rén.', en: 'He is not Taiwanese.' },
        { zh: '她是日本人，她不是台灣人。', pinyin: 'Tā shì Rìběn rén, tā bú shì Táiwān rén.', en: 'She is Japanese, she is not Taiwanese.' },
      ],
    },
    {
      id: 'G2',
      title: 'II. 很/不 Modifying State Verbs (Vs)',
      explanation: 'Adverbs 很 and 不 can be placed before a Vs. In this pattern, a Vs acts like an adjective — no need to add "to be" because it is already embedded in the Intransitive State Verb.',
      pattern: 'S  很 / 不  Vs',
      examples: [
        { zh: '她很漂亮。', pinyin: 'Tā hěn piàoliàng.', en: 'She is very pretty.' },
        { zh: '她很可愛。', pinyin: 'Tā hěn kěài.', en: 'She is very cute.' },
        { zh: '我們不累，王太太很累。', pinyin: 'Wǒmen bú lèi, Wáng tàitai hěn lèi.', en: 'We are not tired, Mrs. Wang is very tired.' },
        { zh: '王先生很忙。', pinyin: 'Wáng xiānshēng hěn máng.', en: 'Mr. Wang is very busy.' },
      ],
    },
    {
      id: 'G3',
      title: 'III. Simple Questions with Particle 嗎',
      explanation: 'A question can be formed by adding 嗎 at the end of a statement without any change in word order. It is close to a yes/no question in English.',
      pattern: 'Statement  嗎？',
      examples: [
        { zh: '他是臺灣人嗎？', pinyin: 'Tā shì Táiwān rén ma?', en: 'Is he Taiwanese?' },
        { zh: '她漂亮嗎？', pinyin: 'Tā piàoliàng ma?', en: 'Is she pretty?' },
        { zh: '你喜歡台灣嗎？', pinyin: 'Nǐ xǐhuān Táiwān ma?', en: 'Do you like Taiwan?' },
        { zh: '他是日本人嗎？不是，他是台灣人。', pinyin: 'Tā shì Rìběn rén ma? Bú shì, tā shì Táiwān rén.', en: 'Is he Japanese? No, he is Taiwanese.' },
      ],
    },
    {
      id: 'G4',
      title: 'IV. Abbreviated Questions with Particle 呢',
      explanation: '呢 is used at the end of a sentence in an abbreviated way to ask a question based on the previous clause.',
      pattern: 'Statement,  N  呢？',
      examples: [
        { zh: '我是臺灣人，你呢？', pinyin: 'Wǒ shì Táiwān rén, nǐ ne?', en: 'I am Taiwanese. How about you?' },
        { zh: '宜文姓王，中明呢？', pinyin: 'Yíwén xìng Wáng, Zhōngmíng ne?', en: "Yiwen's surname is Wang. How about Zhongming?" },
        { zh: '王太太很累，王先生呢？', pinyin: 'Wáng tàitai hěn lèi, Wáng xiānshēng ne?', en: 'Mrs. Wang is very tired. How about Mr. Wang?' },
      ],
    },
    {
      id: 'G5',
      title: 'V. Subject-Verb-Object Structure',
      explanation: '喜歡 and 愛 are transitive state verbs that take an object. The negative form uses 不 before the verb.',
      pattern: 'S  (不) 喜歡 / 愛  O',
      examples: [
        { zh: '我喜歡李小姐，不喜歡王小姐。', pinyin: 'Wǒ xǐhuān Lǐ xiǎojiě, bù xǐhuān Wáng xiǎojiě.', en: 'I like Miss Li, I do not like Miss Wang.' },
        { zh: '你喜歡什麼？', pinyin: 'Nǐ xǐhuān shénme?', en: 'What do you like?' },
        { zh: '我愛爸爸、媽媽。', pinyin: 'Wǒ ài bàba, māma.', en: 'I love dad and mom.' },
      ],
    },
  ],

  reading: {
    title: '自我介紹',
    titlePinyin: 'Zìwǒ Jièshào',
    titleEn: 'Self-introduction',
    zh: '大家早安！我姓小林，叫友美，我是日本人。我喜歡臺灣，台灣朋友很可愛。我愛吃水果，愛喝珍珠奶茶。謝謝大家！',
    pinyin: 'Dàjiā zǎo ān! Wǒ xìng Xiǎolín, jiào Yǒuměi. Wǒ shì Rìběn rén. Wǒ xǐhuān Táiwān, Táiwān péngyǒu hěn kěài. Wǒ ài chī shuǐguǒ, ài hē zhēnzhū nǎichá. Xièxie dàjiā!',
    en: 'Good morning, everyone! My surname is Xiaolin; my first name is Youmei. I am Japanese. I like Taiwan. Taiwanese friends are cute. I love eating fruit and drinking bubble milk tea. Thank you everyone!',
  },

  quiz: [
    { id: 'Q1', question: '她是新同學，___友美。', questionEn: 'She is the new classmate, ___ Youmei.', options: ['是', '叫', '姓', '有'], answer: 1 },
    { id: 'Q2', question: '她是___國人？', questionEn: 'Which country is she from?', options: ['什麼', '哪', '誰', '嗎'], answer: 1 },
    { id: 'Q3', question: '她很漂亮___？', questionEn: 'She is pretty, ___? (yes/no question)', options: ['呢', '吧', '嗎', '啊'], answer: 2 },
    { id: 'Q4', question: '我是日本人，你___？', questionEn: 'I am Japanese. How about you?', options: ['嗎', '呢', '吧', '啊'], answer: 1 },
    { id: 'Q5', question: '我___王，叫宜文。', questionEn: 'My surname is Wang. My first name is Yiwen.', options: ['叫', '是', '姓', '有'], answer: 2 },
    { id: 'Q6', question: '新同學___可愛。', questionEn: 'The new classmate is very cute.', options: ['不', '很', '嗎', '也'], answer: 1 },
    { id: 'Q7', question: '她___日本人，她___台灣人。', questionEn: 'She is Japanese, she is not Taiwanese.', options: ['是 / 不是', '不是 / 是', '叫 / 姓', '姓 / 叫'], answer: 0 },
    { id: 'Q8', question: '你___台灣嗎？', questionEn: 'Do you like Taiwan?', options: ['知道', '喜歡', '叫', '是'], answer: 1 },
    { id: 'Q9', question: '___早安！我姓小林，叫友美。', questionEn: '___ Good morning! My surname is Xiaolin, my name is Youmei.', options: ['朋友', '大家', '同學', '你好'], answer: 1 },
    { id: 'Q10', question: '我愛___水果。', questionEn: 'I love ___ fruit.', options: ['喝', '吃', '買', '看'], answer: 1 },
  ],
}

// ─── LESSON 2 ─────────────────────────────────────────────────────────────────
const lesson2 = {
  id: 2,
  title: '你幾點去學校？',
  titlePinyin: 'Nǐ Jǐ Diǎn Qù Xuéxiào?',
  titleEn: 'What Time Do You Go to School?',
  titleId: 'Kamu Jam Berapa Pergi ke Sekolah?',
  level: 'BAB 2',
  icon: '⏰',

  dialogues: [
    {
      id: 'D1',
      title: '對話一 Dialogue 1',
      setting: '在中明家 At Zhongming\'s place',
      lines: [
        { speaker: '媽媽', pinyin: 'Māma', text: '今天是星期一，你不去學校嗎？', textPinyin: 'Jīntiān shì xīngqí yī, nǐ bú qù xuéxiào ma?', textEn: 'It is Monday today; aren\'t you going to school?' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '我早上沒有課，九點去圖書館。', textPinyin: 'Wǒ zǎoshàng méi yǒu kè, jiǔ diǎn qù túshūguǎn.', textEn: 'I don\'t have class in the morning. I am going to the library at 9:00.' },
        { speaker: '媽媽', pinyin: 'Māma', text: '中午呢？你中午回家嗎？', textPinyin: 'Zhōngwǔ ne? Nǐ zhōngwǔ huí jiā ma?', textEn: 'How about noon? Are you coming back home at noon?' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '我下午有課，中午不回家。', textPinyin: 'Wǒ xiàwǔ yǒu kè, zhōngwǔ bù huí jiā.', textEn: 'I have class in the afternoon; I am not coming home at noon.' },
        { speaker: '媽媽', pinyin: 'Māma', text: '你幾點下課？', textPinyin: 'Nǐ jǐ diǎn xiàkè?', textEn: 'What time do you get out of class?' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '我四點四十分下課。', textPinyin: 'Wǒ sì diǎn sìshí fēn xiàkè.', textEn: 'I get out of class at 4:40.' },
      ],
    },
    {
      id: 'D2',
      title: '對話二 Dialogue 2',
      setting: '星期五下課以後 After class, Friday',
      lines: [
        { speaker: '宜文', pinyin: 'Yíwén', text: '今天是星期五，明天是週末，你們要不要來我家？', textPinyin: 'Jīntiān shì xīngqí wǔ, míngtiān shì zhōumò, nǐmen yào bú yào lái wǒ jiā?', textEn: 'Today is Friday and it is the weekend tomorrow. Do you want to come to my place?' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '明天是九月二十三號……啊！是妳的生日！', textPinyin: 'Míngtiān shì jiǔ yuè èrshísān hào... Ā! Shì nǐ de shēngrì!', textEn: 'It is September 23rd tomorrow... Ah! It is your birthday!' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '宜文，生日快樂！', textPinyin: 'Yíwén, shēngrì kuàilè!', textEn: 'Happy birthday, Yiwen!' },
        { speaker: '宜文', pinyin: 'Yíwén', text: '謝謝！明天晚上六點來我家，好不好？', textPinyin: 'Xièxie! Míngtiān wǎnshàng liù diǎn lái wǒ jiā, hǎo bù hǎo?', textEn: 'Thanks! How about coming to my place at 6 p.m. tomorrow?' },
        { speaker: '中明', pinyin: 'Zhōngmíng', text: '沒問題。', textPinyin: 'Méi wèntí.', textEn: 'No problem.' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '好，明天見。', textPinyin: 'Hǎo, míngtiān jiàn.', textEn: 'Okay, see you tomorrow.' },
      ],
    },
  ],

  vocabulary: [
    { id: 1,  char: '幾',     pinyin: 'jǐ',         pos: 'N',    en: 'how many?',              id_: 'berapa?' },
    { id: 2,  char: '點/點鐘', pinyin: 'diǎn/diǎnzhōng', pos: 'M', en: 'o\'clock',            id_: 'pukul', example: '現在幾點鐘？', examplePinyin: 'Xiànzài jǐ diǎnzhōng?', exampleEn: 'What time is it now?' },
    { id: 3,  char: '現在',   pinyin: 'xiànzài',    pos: 'N',    en: 'now',                    id_: 'sekarang' },
    { id: 4,  char: '去',     pinyin: 'qù',         pos: 'V',    en: 'to go',                  id_: 'pergi' },
    { id: 5,  char: '學校',   pinyin: 'xuéxiào',    pos: 'N',    en: 'school',                 id_: 'sekolah', example: '你幾點去學校？', examplePinyin: 'Nǐ jǐ diǎn qù xuéxiào?', exampleEn: 'What time do you go to school?' },
    { id: 6,  char: '媽媽',   pinyin: 'māma',       pos: 'N',    en: 'mom',                    id_: 'ibu' },
    { id: 7,  char: '爸爸',   pinyin: 'bàba',       pos: 'N',    en: 'dad',                    id_: 'ayah' },
    { id: 8,  char: '孩子',   pinyin: 'háizi',      pos: 'N',    en: 'child; children',        id_: 'anak' },
    { id: 9,  char: '沒',     pinyin: 'méi',        pos: 'Adv',  en: 'not (negates 有)',        id_: 'tidak (untuk 有)' },
    { id: 10, char: '課',     pinyin: 'kè',         pos: 'N',    en: 'class',                  id_: 'pelajaran; kelas', example: '你今天早上有課嗎？', examplePinyin: 'Nǐ jīntiān zǎoshàng yǒu kè ma?', exampleEn: 'Do you have class this morning?' },
    { id: 11, char: '今天',   pinyin: 'jīntiān',    pos: 'N',    en: 'today',                  id_: 'hari ini' },
    { id: 12, char: '星期',   pinyin: 'xīngqí',     pos: 'N',    en: 'week; day of the week',  id_: 'minggu (hari dalam seminggu)' },
    { id: 13, char: '月',     pinyin: 'yuè',        pos: 'N',    en: 'month',                  id_: 'bulan' },
    { id: 14, char: '號',     pinyin: 'hào',        pos: 'M',    en: 'measure word for dates', id_: 'kata pengukur untuk tanggal' },
    { id: 15, char: '日',     pinyin: 'rì',         pos: 'N',    en: 'day',                    id_: 'hari' },
    { id: 16, char: '星期天', pinyin: 'xīngqí tiān',pos: 'N',    en: 'Sunday',                 id_: 'hari Minggu' },
    { id: 17, char: '早上',   pinyin: 'zǎoshàng',   pos: 'N',    en: 'morning',                id_: 'pagi hari' },
    { id: 18, char: '上午',   pinyin: 'shàngwǔ',    pos: 'N',    en: 'morning (formal)',       id_: 'pagi hari (formal)' },
    { id: 19, char: '有',     pinyin: 'yǒu',        pos: 'Vst',  en: 'to have',                id_: 'memiliki' },
    { id: 20, char: '圖書館', pinyin: 'túshūguǎn',  pos: 'N',    en: 'library',                id_: 'perpustakaan', example: '你幾點去圖書館？', examplePinyin: 'Nǐ jǐ diǎn qù túshūguǎn?', exampleEn: 'What time will you go to the library?' },
    { id: 21, char: '中午',   pinyin: 'zhōngwǔ',    pos: 'N',    en: 'noon',                   id_: 'siang hari' },
    { id: 22, char: '回',     pinyin: 'huí',        pos: 'V',    en: 'to return',              id_: 'kembali; pulang' },
    { id: 23, char: '家',     pinyin: 'jiā',        pos: 'N',    en: 'home; house',            id_: 'rumah', example: '你中午回家嗎？', examplePinyin: 'Nǐ zhōngwǔ huí jiā ma?', exampleEn: 'Do you go home at noon?' },
    { id: 24, char: '家人',   pinyin: 'jiārén',     pos: 'N',    en: 'family members',         id_: 'anggota keluarga' },
    { id: 25, char: '下午',   pinyin: 'xiàwǔ',      pos: 'N',    en: 'afternoon',              id_: 'sore hari' },
    { id: 26, char: '下課',   pinyin: 'xiàkè',      pos: 'V-sep',en: 'class dismissed',        id_: 'selesai pelajaran' },
    { id: 27, char: '上課',   pinyin: 'shàngkè',    pos: 'V-sep',en: 'to go to class; attend class', id_: 'mulai pelajaran; mengikuti pelajaran' },
    { id: 28, char: '分',     pinyin: 'fēn',        pos: 'M',    en: 'minute',                 id_: 'menit', example: '我八點十分去學校。', examplePinyin: 'Wǒ bā diǎn shí fēn qù xuéxiào.', exampleEn: 'I go to school at 8:10.' },
    { id: 29, char: '明天',   pinyin: 'míngtiān',   pos: 'N',    en: 'tomorrow',               id_: 'besok' },
    { id: 30, char: '昨天',   pinyin: 'zuótiān',    pos: 'N',    en: 'yesterday',              id_: 'kemarin', example: '你昨天幾點回家？', examplePinyin: 'Nǐ zuótiān jǐ diǎn huí jiā?', exampleEn: 'What time did you go home yesterday?' },
    { id: 31, char: '週末',   pinyin: 'zhōumò',     pos: 'N',    en: 'weekend',                id_: 'akhir pekan' },
    { id: 32, char: '要',     pinyin: 'yào',        pos: 'Vaux', en: 'to want (to do something)', id_: 'ingin; mau', example: '你要水嗎？', examplePinyin: 'Nǐ yào shuǐ ma?', exampleEn: 'Do you want water?' },
    { id: 33, char: '來',     pinyin: 'lái',        pos: 'V',    en: 'to come',                id_: 'datang', example: '他今天不來學校嗎？', examplePinyin: 'Tā jīntiān bù lái xuéxiào ma?', exampleEn: 'Isn\'t he coming to school today?' },
    { id: 34, char: '啊',     pinyin: 'ā',          pos: 'Ptc',  en: 'interjection (surprise)', id_: 'ah (kata seru keterkejutan)' },
    { id: 35, char: '的',     pinyin: 'de',         pos: 'Ptc',  en: 'possessive particle',    id_: 'partikel kepemilikan' },
    { id: 36, char: '生日',   pinyin: 'shēngrì',    pos: 'N',    en: 'birthday',               id_: 'ulang tahun' },
    { id: 37, char: '快樂',   pinyin: 'kuàilè',     pos: 'Vs',   en: 'happy',                  id_: 'bahagia; selamat' },
    { id: 38, char: '晚上',   pinyin: 'wǎnshàng',   pos: 'N',    en: 'evening; night',         id_: 'malam hari' },
    { id: 39, char: '問題',   pinyin: 'wèntí',      pos: 'N',    en: 'question; problem',      id_: 'pertanyaan; masalah', example: '老師：你們有問題嗎？學生：沒有。', examplePinyin: 'Lǎoshī: Nǐmen yǒu wèntí ma? Xuéshēng: Méi yǒu.', exampleEn: 'Teacher: Do you have any questions? Student: No.' },
    { id: 40, char: '做',     pinyin: 'zuò',        pos: 'V',    en: 'to make; to do',         id_: 'membuat; melakukan', example: '你今天要做什麼？', examplePinyin: 'Nǐ jīntiān yào zuò shénme?', exampleEn: 'What do you want to do today?' },
    { id: 41, char: '歲',     pinyin: 'suì',        pos: 'M',    en: 'measure word for age',   id_: 'kata satuan umur' },
    { id: 42, char: '起床',   pinyin: 'qǐchuáng',   pos: 'Vp',   en: 'to get up',              id_: 'bangun tidur', example: '我今天七點起床。', examplePinyin: 'Wǒ jīntiān qī diǎn qǐchuáng.', exampleEn: 'I get up at 7 today.' },
    { id: 43, char: '午飯',   pinyin: 'wǔfàn',      pos: 'N',    en: 'lunch',                  id_: 'makan siang' },
    { id: 44, char: '早飯',   pinyin: 'zǎofàn',     pos: 'N',    en: 'breakfast',              id_: 'sarapan' },
    { id: 45, char: '晚飯',   pinyin: 'wǎnfàn',     pos: 'N',    en: 'dinner',                 id_: 'makan malam' },
    { id: 46, char: '飯',     pinyin: 'fàn',        pos: 'N',    en: 'cooked rice; meal',      id_: 'nasi; makanan' },
    { id: 47, char: '做飯',   pinyin: 'zuòfàn',     pos: 'V-sep',en: 'to cook',                id_: 'memasak', example: '我很喜歡做飯。', examplePinyin: 'Wǒ hěn xǐhuān zuòfàn.', exampleEn: 'I like cooking very much.' },
    { id: 48, char: '睡覺',   pinyin: 'shuìjiào',   pos: 'V-sep',en: 'to sleep; to go to bed', id_: 'tidur', example: '宜文昨天幾點睡覺？', examplePinyin: 'Yíwén zuótiān jǐ diǎn shuìjiào?', exampleEn: 'What time did Yiwen go to bed yesterday?' },
    { id: 49, char: '忙',     pinyin: 'máng',       pos: 'Vs',   en: 'busy',                   id_: 'sibuk' },
    { id: 50, char: '累',     pinyin: 'lèi',        pos: 'Vs',   en: 'tired',                  id_: 'lelah' },
  ],

  phrases: [
    { zh: '幾點/幾點鐘', pinyin: 'jǐ diǎn / jǐ diǎnzhōng', en: 'what time?', id_: 'jam berapa?' },
    { zh: '沒問題', pinyin: 'méi wèntí', en: 'No problem', id_: 'tidak masalah' },
    { zh: '明天見', pinyin: 'míngtiān jiàn', en: 'See you tomorrow', id_: 'sampai jumpa besok' },
    { zh: '再見', pinyin: 'zàijiàn', en: 'Good-bye', id_: 'selamat tinggal' },
    { zh: '生日快樂', pinyin: 'shēngrì kuàilè', en: 'Happy Birthday', id_: 'selamat ulang tahun' },
  ],

  grammar: [
    {
      id: 'G1',
      title: 'I. Indicating Time — Dates, Days, and Clock Time',
      explanation: 'When expressing a date in Chinese, the month comes before the date. Numbers 1–6 follow 星期 for Monday–Saturday. 幾 is used to ask about dates, months, and time.',
      pattern: 'Nu 月 Nu 號/日 ｜ 星期 Nu ｜ Nu 點 Nu 分',
      examples: [
        { zh: '現在幾點幾分？現在十點十五分。', pinyin: 'Xiànzài jǐ diǎn jǐ fēn? Xiànzài shí diǎn shíwǔ fēn.', en: 'What time is it? It is 10:15.' },
        { zh: '今天星期幾？今天星期一。', pinyin: 'Jīntiān xīngqí jǐ? Jīntiān xīngqí yī.', en: 'What day is today? Today is Monday.' },
        { zh: '今天幾月幾號？今天十二月七號。', pinyin: 'Jīntiān jǐ yuè jǐ hào? Jīntiān shíèr yuè qī hào.', en: 'What is today\'s date? Today is December 7th.' },
      ],
    },
    {
      id: 'G2',
      title: 'II. Placement of Time Words',
      explanation: 'In Chinese, the time of an event always precedes the verb.',
      pattern: 'S  Time Word  V (O)',
      examples: [
        { zh: '他八點回家。', pinyin: 'Tā bā diǎn huí jiā.', en: 'He goes home at 8 o\'clock.' },
        { zh: '我九點三十分上課。', pinyin: 'Wǒ jiǔ diǎn sānshí fēn shàngkè.', en: 'I start class at 9:30.' },
        { zh: '他今天沒有課。', pinyin: 'Tā jīntiān méi yǒu kè.', en: 'He doesn\'t have class today.' },
        { zh: '你幾點去圖書館？', pinyin: 'Nǐ jǐ diǎn qù túshūguǎn?', en: 'What time will you go to the library?' },
      ],
    },
    {
      id: 'G3',
      title: 'III. Expressing Possession with 有/沒有',
      explanation: '有 refers to possession or ownership and is always negated with 沒 (not 不).',
      pattern: 'S  有 / 沒有  O',
      examples: [
        { zh: '她有台灣朋友。', pinyin: 'Tā yǒu Táiwān péngyǒu.', en: 'She has a Taiwanese friend.' },
        { zh: '王先生有孩子嗎？王先生沒有孩子。', pinyin: 'Wáng xiānshēng yǒu háizi ma? Wáng xiānshēng méi yǒu háizi.', en: 'Does Mr. Wang have children? Mr. Wang doesn\'t have children.' },
        { zh: '你今天有課嗎？我今天下午有課。', pinyin: 'Nǐ jīntiān yǒu kè ma? Wǒ jīntiān xiàwǔ yǒu kè.', en: 'Do you have class today? I have class this afternoon.' },
      ],
    },
    {
      id: 'G4',
      title: 'IV. 的 as a Possessive Particle',
      explanation: 'N 的 N is used to show possession. When the possessor is a pronoun and the relationship is close (family, friends), 的 can be omitted.',
      pattern: 'N  的  N',
      examples: [
        { zh: '我的孩子 / 宜文的生日 / 台灣的學校', pinyin: 'wǒ de háizi / Yíwén de shēngrì / Táiwān de xuéxiào', en: 'my child / Yiwen\'s birthday / Taiwan\'s school' },
        { zh: '你的手機很新。', pinyin: 'Nǐ de shǒujī hěn xīn.', en: 'Your cell phone is very new.' },
        { zh: '我爸爸（= 我的爸爸）', pinyin: 'wǒ bàba (= wǒ de bàba)', en: 'my dad (的 can be omitted for close relationships)' },
      ],
    },
    {
      id: 'G5',
      title: 'V. Placement of Auxiliary Verbs (Vaux)',
      explanation: 'Auxiliary verbs (Vaux) like 要, 喜歡, 愛 always precede the main verb.',
      pattern: 'S  Vaux  V (O)',
      examples: [
        { zh: '我要喝茶。', pinyin: 'Wǒ yào hē chá.', en: 'I want to drink tea.' },
        { zh: '媽媽喜歡喝奶茶。', pinyin: 'Māma xǐhuān hē nǎichá.', en: 'Mom likes to drink milk tea.' },
        { zh: '你要去老師家嗎？', pinyin: 'Nǐ yào qù lǎoshī jiā ma?', en: 'Do you want to go to the teacher\'s place?' },
        { zh: '我愛吃水果，不愛喝珍珠奶茶。', pinyin: 'Wǒ ài chī shuǐguǒ, bú ài hē zhēnzhū nǎichá.', en: 'I love eating fruit, I don\'t love drinking bubble tea.' },
      ],
    },
  ],

  reading: {
    title: '友美做什麼？',
    titlePinyin: 'Yǒuměi Zuò Shénme?',
    titleEn: 'What Does Youmei Do?',
    zh: '友美是學生，十九歲。她早上六點三十分起床，七點去學校，八點四十分上課；中午十二點下課、吃午飯；下午一點去圖書館；四點回家做飯，晚上六點吃飯，十點睡覺。友美很忙！',
    pinyin: 'Yǒuměi shì xuéshēng, shíjiǔ suì. Tā zǎoshàng liù diǎn sānshí fēn qǐchuáng, qī diǎn qù xuéxiào, bā diǎn sìshí fēn shàngkè; zhōngwǔ shíèr diǎn xiàkè, chī wǔfàn; xiàwǔ yī diǎn qù túshūguǎn; sì diǎn huí jiā zuòfàn, wǎnshàng liù diǎn chīfàn, shí diǎn shuìjiào. Yǒuměi hěn máng!',
    en: 'Youmei is a student. She is 19 years old. She gets up at 6:30 a.m. She goes to school at 7:00. Her class starts at 8:40 and finishes at 12:00 for lunch. She goes to the library at 1:00 in the afternoon. She goes home and makes dinner at 4:00. She has dinner at 6:00 and goes to bed at 10:00. Youmei is very busy!',
  },

  quiz: [
    { id: 'Q1', question: '現在___點？', questionEn: 'What time is it now?', options: ['幾', '哪', '什麼', '多少'], answer: 0 },
    { id: 'Q2', question: '我早上___有課，九點去圖書館。', questionEn: 'I ___ have class in the morning, going to library at 9.', options: ['不', '沒', '沒有', '不有'], answer: 2 },
    { id: 'Q3', question: '今天___星期一。', questionEn: 'Today ___ Monday.', options: ['有', '是', '叫', '去'], answer: 1 },
    { id: 'Q4', question: '你___去學校？', questionEn: 'What time do you go to school?', options: ['幾點', '幾月', '幾號', '幾歲'], answer: 0 },
    { id: 'Q5', question: '明天是___的生日。', questionEn: 'Tomorrow is ___ birthday.', options: ['我', '你', '妳', '宜文'], answer: 3 },
    { id: 'Q6', question: '王先生___孩子嗎？', questionEn: 'Does Mr. Wang have children?', options: ['是', '有', '叫', '去'], answer: 1 },
    { id: 'Q7', question: '我___喝珍珠奶茶。', questionEn: 'I want to drink bubble tea.', options: ['是', '有', '要', '去'], answer: 2 },
    { id: 'Q8', question: '你的手機___新。', questionEn: 'Your cell phone is very new.', options: ['不', '很', '沒', '有'], answer: 1 },
    { id: 'Q9', question: '友美六點三十分___。', questionEn: 'Youmei ___ at 6:30.', options: ['睡覺', '上課', '起床', '回家'], answer: 2 },
    { id: 'Q10', question: '沒___！明天見。', questionEn: 'No ___! See you tomorrow.', options: ['問題', '課', '飯', '家'], answer: 0 },
  ],
}

const lesson3 = {
  "id": 3,
  "title": "買生日禮物",
  "titlePinyin": "Mǎi Shēngrì Lǐwù",
  "titleEn": "Buying Birthday Gifts",
  "titleId": "Membeli Hadiah Ulang Tahun",
  "level": "BAB 3",
  "icon": "🎁",
  "dialogues": [
    {
      "id": "D1",
      "title": "對話一 Dialogue 1",
      "setting": "在學校 At school",
      "lines": [
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "明天是友美的生日，我想送她一個禮物。",
          "textPinyin": "Míngtiān shì Yǒuměi de shēngrì, wǒ xiǎng sòng tā yī ge lǐwù.",
          "textEn": "It is Youmei's birthday tomorrow; I would like to give her a gift."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "妳想送她什麼？",
          "textPinyin": "Nǐ xiǎng sòng tā shénme?",
          "textEn": "What would you like to give her?"
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "友美愛看書，我想送她兩本中文書，你呢？",
          "textPinyin": "Yǒuměi ài kànshū, wǒ xiǎng sòng tā liǎng běn Zhōngwén shū, nǐ ne?",
          "textEn": "Youmei loves reading. I would like to give her two books in Chinese. How about you?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "我想買一些花和一個大蛋糕。",
          "textPinyin": "Wǒ xiǎng mǎi yīxiē huā hé yī ge dà dàngāo.",
          "textEn": "I would like to buy her some flowers and a big cake."
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "我們一起去買，好不好？",
          "textPinyin": "Wǒmen yīqǐ qù mǎi, hǎo bù hǎo?",
          "textEn": "How about we go get them together?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "好啊！",
          "textPinyin": "Hǎo a!",
          "textEn": "Okay!"
        }
      ]
    },
    {
      "id": "D2",
      "title": "對話二 Dialogue 2",
      "setting": "買禮物 Buying gifts",
      "lines": [
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "這種小鉛筆怎麼樣？",
          "textPinyin": "Zhè zhǒng xiǎo qiānbǐ zěnmeyàng?",
          "textEn": "What do you think about this type of small pencil?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "很可愛，友美喜歡可愛的東西。",
          "textPinyin": "Hěn kěài. Yǒuměi xǐhuān kěài de dōngxi.",
          "textEn": "It's very cute. Youmei likes cute stuff."
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "我們買兩枝，好不好？兩枝五十塊錢。",
          "textPinyin": "Wǒmen mǎi liǎng zhī, hǎo bù hǎo? Liǎng zhī wǔshí kuài qián.",
          "textEn": "How about we buy two of them? Two for 50 NT dollars."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "五十塊錢很便宜！妳看，哪個顏色漂亮？",
          "textPinyin": "Wǔshí kuài qián hěn piányí! Nǐ kàn, nǎ ge yánsè piàoliàng?",
          "textEn": "It is inexpensive! Look, which color is better?"
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "紅色、白色都好看。",
          "textPinyin": "Hóngsè, báisè, dōu hǎokàn.",
          "textEn": "Red and white are both good."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "我想友美喜歡白色，她常常穿白色的衣服。",
          "textPinyin": "Wǒ xiǎng Yǒuměi xǐhuān báisè, tā chángcháng chuān báisè de yīfu.",
          "textEn": "I think Youmei likes white, she often wears white clothes."
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "好，我們買白的。",
          "textPinyin": "Hǎo, wǒmen mǎi bái de.",
          "textEn": "Okay, we go for the white one."
        }
      ]
    }
  ],
  "vocabulary": [
    {
      "id": 1,
      "char": "買",
      "pinyin": "mǎi",
      "pos": "V",
      "en": "to buy",
      "id_": "membeli",
      "example": "你今天要買什麼？",
      "examplePinyin": "Nǐ jīntiān yào mǎi shénme?",
      "exampleEn": "What would you like to buy today?"
    },
    {
      "id": 2,
      "char": "禮物",
      "pinyin": "lǐwù",
      "pos": "N",
      "en": "gift (M:個)",
      "id_": "hadiah/kado"
    },
    {
      "id": 3,
      "char": "想(要)",
      "pinyin": "xiǎng(yào)",
      "pos": "Vaux",
      "en": "want to; would like to",
      "id_": "ingin; mau",
      "example": "我想喝珍珠奶茶。",
      "examplePinyin": "Wǒ xiǎng hē zhēnzhū nǎichá.",
      "exampleEn": "I want to have bubble milk tea."
    },
    {
      "id": 4,
      "char": "送",
      "pinyin": "sòng",
      "pos": "V",
      "en": "to give as a present",
      "id_": "memberi (sebagai hadiah)",
      "example": "明天是媽媽的生日，你想送她什麼禮物？",
      "examplePinyin": "Míngtiān shì māma de shēngrì, nǐ xiǎng sòng tā shénme lǐwù?",
      "exampleEn": "Tomorrow is mom's birthday, what do you want to give her?"
    },
    {
      "id": 5,
      "char": "個",
      "pinyin": "ge",
      "pos": "M",
      "en": "general measure word",
      "id_": "kata satuan umum",
      "example": "我有一個英國朋友。",
      "examplePinyin": "Wǒ yǒu yī ge Yīngguó péngyǒu.",
      "exampleEn": "I have a British friend."
    },
    {
      "id": 6,
      "char": "看",
      "pinyin": "kàn",
      "pos": "V",
      "en": "to read; to look; to watch",
      "id_": "membaca; melihat; menonton"
    },
    {
      "id": 7,
      "char": "書",
      "pinyin": "shū",
      "pos": "N",
      "en": "book (M:本)",
      "id_": "buku",
      "example": "他很喜歡看書。",
      "examplePinyin": "Tā hěn xǐhuān kànshū.",
      "exampleEn": "He likes reading books very much."
    },
    {
      "id": 8,
      "char": "兩",
      "pinyin": "liǎng",
      "pos": "N",
      "en": "two (for quantity)",
      "id_": "dua (untuk jumlah/barang)"
    },
    {
      "id": 9,
      "char": "本",
      "pinyin": "běn",
      "pos": "M",
      "en": "measure word for books",
      "id_": "kata pengukur untuk buku"
    },
    {
      "id": 10,
      "char": "中文",
      "pinyin": "Zhōngwén",
      "pos": "N",
      "en": "Chinese (language)",
      "id_": "bahasa Tionghoa"
    },
    {
      "id": 11,
      "char": "英文",
      "pinyin": "Yīngwén",
      "pos": "N",
      "en": "English (language)",
      "id_": "bahasa Inggris"
    },
    {
      "id": 12,
      "char": "一些",
      "pinyin": "yīxiē",
      "pos": "Det",
      "en": "some (for quantity)",
      "id_": "beberapa",
      "example": "我有一些中文書。",
      "examplePinyin": "Wǒ yǒu yīxiē Zhōngwén shū.",
      "exampleEn": "I have some books in Chinese."
    },
    {
      "id": 13,
      "char": "花",
      "pinyin": "huā",
      "pos": "N",
      "en": "flower (M:朵)",
      "id_": "bunga",
      "example": "我送媽媽一朵花。",
      "examplePinyin": "Wǒ sòng māma yī duǒ huā.",
      "exampleEn": "I gave mom a flower."
    },
    {
      "id": 14,
      "char": "朵",
      "pinyin": "duǒ",
      "pos": "M",
      "en": "measure word for flowers",
      "id_": "kata pengukur untuk bunga"
    },
    {
      "id": 15,
      "char": "和",
      "pinyin": "hé",
      "pos": "Conj",
      "en": "and",
      "id_": "dan",
      "example": "他送我花和一本書。",
      "examplePinyin": "Tā sòng wǒ huā hé yī běn shū.",
      "exampleEn": "He gave me flowers and a book."
    },
    {
      "id": 16,
      "char": "大",
      "pinyin": "dà",
      "pos": "Vs",
      "en": "big",
      "id_": "besar"
    },
    {
      "id": 17,
      "char": "小",
      "pinyin": "xiǎo",
      "pos": "Vs",
      "en": "small",
      "id_": "kecil"
    },
    {
      "id": 18,
      "char": "蛋糕",
      "pinyin": "dàngāo",
      "pos": "N",
      "en": "cake (M:個)",
      "id_": "kue"
    },
    {
      "id": 19,
      "char": "蛋",
      "pinyin": "dàn",
      "pos": "N",
      "en": "egg (M:個)",
      "id_": "telur"
    },
    {
      "id": 20,
      "char": "一起",
      "pinyin": "yīqǐ",
      "pos": "Adv",
      "en": "together",
      "id_": "bersama",
      "example": "昨天我們一起去圖書館。",
      "examplePinyin": "Zuótiān wǒmen yīqǐ qù túshūguǎn.",
      "exampleEn": "We went to the library together yesterday."
    },
    {
      "id": 21,
      "char": "這",
      "pinyin": "zhè/zhèi",
      "pos": "Det",
      "en": "this",
      "id_": "ini"
    },
    {
      "id": 22,
      "char": "那",
      "pinyin": "nà/nèi",
      "pos": "Det",
      "en": "that",
      "id_": "itu"
    },
    {
      "id": 23,
      "char": "種",
      "pinyin": "zhǒng",
      "pos": "M",
      "en": "species; kind; sort",
      "id_": "jenis; macam",
      "example": "你喜歡喝哪種茶？",
      "examplePinyin": "Nǐ xǐhuān hē nǎ zhǒng chá?",
      "exampleEn": "What kind of tea do you like?"
    },
    {
      "id": 24,
      "char": "鉛筆",
      "pinyin": "qiānbǐ",
      "pos": "N",
      "en": "pencil (M:枝)",
      "id_": "pensil"
    },
    {
      "id": 25,
      "char": "筆",
      "pinyin": "bǐ",
      "pos": "N",
      "en": "pen (M:枝)",
      "id_": "pena"
    },
    {
      "id": 26,
      "char": "怎麼樣",
      "pinyin": "zěnmeyàng",
      "pos": "Vs",
      "en": "How about? How is it?",
      "id_": "bagaimana?"
    },
    {
      "id": 27,
      "char": "東西",
      "pinyin": "dōngxi",
      "pos": "N",
      "en": "thing; stuff (M:個)",
      "id_": "barang; benda"
    },
    {
      "id": 28,
      "char": "枝",
      "pinyin": "zhī",
      "pos": "M",
      "en": "measure word for pens",
      "id_": "batang (kata ukur untuk pena/pensil)",
      "example": "我有兩枝鉛筆。",
      "examplePinyin": "Wǒ yǒu liǎng zhī qiānbǐ.",
      "exampleEn": "I have two pencils."
    },
    {
      "id": 29,
      "char": "塊",
      "pinyin": "kuài",
      "pos": "M",
      "en": "measure word for money",
      "id_": "kata ukur untuk uang"
    },
    {
      "id": 30,
      "char": "錢",
      "pinyin": "qián",
      "pos": "N",
      "en": "money",
      "id_": "uang",
      "example": "一枝筆幾塊錢？",
      "examplePinyin": "Yī zhī bǐ jǐ kuài qián?",
      "exampleEn": "How much does a pen cost?"
    },
    {
      "id": 31,
      "char": "元",
      "pinyin": "yuán",
      "pos": "M",
      "en": "unit of money",
      "id_": "unit uang (mata uang resmi)"
    },
    {
      "id": 32,
      "char": "顏色",
      "pinyin": "yánsè",
      "pos": "N",
      "en": "color",
      "id_": "warna",
      "example": "你喜歡什麼顏色？",
      "examplePinyin": "Nǐ xǐhuān shénme yánsè?",
      "exampleEn": "What color do you like?"
    },
    {
      "id": 33,
      "char": "便宜",
      "pinyin": "piányí",
      "pos": "Vs",
      "en": "cheap; inexpensive",
      "id_": "murah"
    },
    {
      "id": 34,
      "char": "貴",
      "pinyin": "guì",
      "pos": "Vs",
      "en": "expensive",
      "id_": "mahal"
    },
    {
      "id": 35,
      "char": "紅色",
      "pinyin": "hóngsè",
      "pos": "N",
      "en": "red color",
      "id_": "warna merah"
    },
    {
      "id": 36,
      "char": "白色",
      "pinyin": "báisè",
      "pos": "N",
      "en": "white color",
      "id_": "warna putih"
    },
    {
      "id": 37,
      "char": "都",
      "pinyin": "dōu",
      "pos": "Adv",
      "en": "all; both",
      "id_": "semua; keduanya",
      "example": "紅色的花、白色的花都很漂亮。",
      "examplePinyin": "Hóngsè de huā, báisè de huā, dōu hěn piàoliàng.",
      "exampleEn": "Red flowers and white flowers are both very beautiful."
    },
    {
      "id": 38,
      "char": "好看",
      "pinyin": "hǎokàn",
      "pos": "Vs",
      "en": "good-looking; beautiful",
      "id_": "bagus; cantik; tampan"
    },
    {
      "id": 39,
      "char": "常(常)",
      "pinyin": "cháng(cháng)",
      "pos": "Adv",
      "en": "often",
      "id_": "sering",
      "example": "我們常常一起去圖書館。",
      "examplePinyin": "Wǒmen chángcháng yīqǐ qù túshūguǎn.",
      "exampleEn": "We often go to the library together."
    },
    {
      "id": 40,
      "char": "穿",
      "pinyin": "chuān",
      "pos": "V",
      "en": "to wear",
      "id_": "memakai"
    },
    {
      "id": 41,
      "char": "衣服",
      "pinyin": "yīfu",
      "pos": "N",
      "en": "clothes (M:件)",
      "id_": "pakaian"
    },
    {
      "id": 42,
      "char": "件",
      "pinyin": "jiàn",
      "pos": "M",
      "en": "measure word for clothes",
      "id_": "kata pengukur untuk pakaian"
    },
    {
      "id": 43,
      "char": "請",
      "pinyin": "qǐng",
      "pos": "V",
      "en": "to invite; to treat",
      "id_": "mengundang; mentraktir"
    },
    {
      "id": 44,
      "char": "玩",
      "pinyin": "wán",
      "pos": "V",
      "en": "to play",
      "id_": "bermain"
    },
    {
      "id": 45,
      "char": "這些",
      "pinyin": "zhèxiē",
      "pos": "Det",
      "en": "these",
      "id_": "ini (banyak/beberapa)"
    },
    {
      "id": 46,
      "char": "那些",
      "pinyin": "nàxiē",
      "pos": "Det",
      "en": "those",
      "id_": "itu (banyak/beberapa)"
    },
    {
      "id": 47,
      "char": "點心",
      "pinyin": "diǎnxīn",
      "pos": "N",
      "en": "snack; light refreshments",
      "id_": "makanan ringan; snack"
    },
    {
      "id": 48,
      "char": "甜點",
      "pinyin": "tiándiǎn",
      "pos": "N",
      "en": "dessert",
      "id_": "hidangan penutup; dessert"
    },
    {
      "id": 49,
      "char": "甜",
      "pinyin": "tián",
      "pos": "Vs",
      "en": "sweet",
      "id_": "manis"
    },
    {
      "id": 50,
      "char": "開心",
      "pinyin": "kāixīn",
      "pos": "Vs",
      "en": "happy",
      "id_": "bahagia; senang"
    }
  ],
  "phrases": [
    {
      "zh": "好不好？",
      "pinyin": "hǎo bù hǎo?",
      "en": "How about it? (seeking agreement)",
      "id_": "bagaimana? (mencari persetujuan)"
    },
    {
      "zh": "好啊！",
      "pinyin": "hǎo a!",
      "en": "Great! / Sure!",
      "id_": "bagus! / tentu saja!"
    }
  ],
  "grammar": [
    {
      "id": "G1",
      "title": "I. Measure Words",
      "explanation": "When a noun is modified by a number, a measure word is necessary. The number 一 becomes 兩 when there is a measure word. 幾 (how many) is always used with a measure word.",
      "pattern": "Nu  M  N",
      "examples": [
        {
          "zh": "一個蛋糕 / 兩本書 / 幾朵花？",
          "pinyin": "yī ge dàngāo / liǎng běn shū / jǐ duǒ huā?",
          "en": "a cake / two books / how many flowers?"
        },
        {
          "zh": "你有幾個台灣朋友？我有三個台灣朋友。",
          "pinyin": "Nǐ yǒu jǐ ge Táiwān péngyǒu? Wǒ yǒu sān ge Táiwān péngyǒu.",
          "en": "How many Taiwanese friends do you have? I have three."
        },
        {
          "zh": "你有幾本中文書？我有五本中文書。",
          "pinyin": "Nǐ yǒu jǐ běn Zhōngwén shū? Wǒ yǒu wǔ běn Zhōngwén shū.",
          "en": "How many Chinese books do you have? I have five."
        }
      ]
    },
    {
      "id": "G2",
      "title": "II. S + 送 + Indirect Object + Direct Object",
      "explanation": "送 is followed by two objects. The indirect object is \"people\"; the direct object is the thing given.",
      "pattern": "S (Vaux) 送  Indirect O  Direct O",
      "examples": [
        {
          "zh": "媽媽送我一個禮物。",
          "pinyin": "Māma sòng wǒ yī ge lǐwù.",
          "en": "Mom gave me a gift."
        },
        {
          "zh": "我想送她花。",
          "pinyin": "Wǒ xiǎng sòng tā huā.",
          "en": "I want to give her flowers."
        },
        {
          "zh": "你想送媽媽什麼？我想送她花。",
          "pinyin": "Nǐ xiǎng sòng māma shénme? Wǒ xiǎng sòng tā huā.",
          "en": "What do you want to give mom? I want to give her flowers."
        }
      ]
    },
    {
      "id": "G3",
      "title": "III. 這/那/哪 + Nu + M + N",
      "explanation": "這 (this), 那 (that), 哪 (which) are used based on proximity. When the number is one, it is usually omitted. When two, use 兩.",
      "pattern": "這 / 那 / 哪  Nu  M  N",
      "examples": [
        {
          "zh": "這(一)種筆 / 那兩本書 / 哪十個人？",
          "pinyin": "zhè (yī) zhǒng bǐ / nà liǎng běn shū / nǎ shí ge rén?",
          "en": "this kind of pen / those two books / which ten people?"
        },
        {
          "zh": "你喜歡喝哪種茶？我喜歡喝這種茶。",
          "pinyin": "Nǐ xǐhuān hē nǎ zhǒng chá? Wǒ xǐhuān hē zhè zhǒng chá.",
          "en": "What kind of tea do you like? I like this kind."
        }
      ]
    },
    {
      "id": "G4",
      "title": "IV. 的 as a Modifier Marker",
      "explanation": "When a Vs modifies a noun, 的 can be used between them. One-syllable Vs can omit 的. Nouns mentioned previously can be omitted but 的 stays.",
      "pattern": "Vs 的 N  /  Vs(的) N  /  Vs 的 (N omitted)",
      "examples": [
        {
          "zh": "便宜的東西 / 新(的)書 / 大的(蛋糕)",
          "pinyin": "piányí de dōngxi / xīn (de) shū / dà de (dàngāo)",
          "en": "cheap things / new books / the big one (cake)"
        },
        {
          "zh": "你要買哪個蛋糕？他要買大的，我要買小的。",
          "pinyin": "Nǐ yào mǎi nǎ ge dàngāo? Tā yào mǎi dà de, wǒ yào mǎi xiǎo de.",
          "en": "Which cake do you want? He wants the big one, I want the small one."
        }
      ]
    },
    {
      "id": "G5",
      "title": "V. Expressing \"Both/All\" with 都",
      "explanation": "都 is an adverb and is always followed by a verb or Vs.",
      "pattern": "S  都  V(O) / Vs",
      "examples": [
        {
          "zh": "我們都買筆。",
          "pinyin": "Wǒmen dōu mǎi bǐ.",
          "en": "Both (all) of us bought pens."
        },
        {
          "zh": "這兩個顏色都很好看。",
          "pinyin": "Zhè liǎng ge yánsè dōu hěn hǎokàn.",
          "en": "These two colors are both very beautiful."
        },
        {
          "zh": "他們都喜歡喝珍珠奶茶嗎？",
          "pinyin": "Tāmen dōu xǐhuān hē zhēnzhū nǎichá ma?",
          "en": "Do they all like bubble tea?"
        }
      ]
    }
  ],
  "reading": {
    "title": "友美的生日",
    "titlePinyin": "Yǒuměi de Shēngrì",
    "titleEn": "Youmei's Birthday",
    "zh": "今天是友美的生日，她請我、中明和國安一起去她家玩。我們送友美花、兩本中文書、兩枝可愛的小鉛筆和一個大蛋糕，她很喜歡這些禮物。友美請我們吃點心和水果，大家都很開心。",
    "pinyin": "Jīntiān shì Yǒuměi de shēngrì, tā qǐng wǒ, Zhōngmíng hé Guó'ān yīqǐ qù tā jiā wán. Wǒmen sòng Yǒuměi huā, liǎng běn Zhōngwén shū, liǎng zhī kěài de xiǎo qiānbǐ hé yī ge dà dàngāo, tā hěn xǐhuān zhèxiē lǐwù. Yǒuměi qǐng wǒmen chī diǎnxīn hé shuǐguǒ, dàjiā dōu hěn kāixīn.",
    "en": "It is Youmei's birthday today. She invited me, Zhongming and Guoan to her place. We gave Youmei flowers, two Chinese books, two lovely small pencils, and a big cake. She likes these gifts very much. Youmei treated us with some snacks and fruit. We all had fun."
  },
  "quiz": [
    {
      "id": "Q1",
      "question": "我想___她一個禮物。",
      "questionEn": "I would like to ___ her a gift.",
      "options": [
        "買",
        "送",
        "給",
        "要"
      ],
      "answer": 1
    },
    {
      "id": "Q2",
      "question": "我想買___花和___大蛋糕。",
      "questionEn": "I want to buy ___ flowers and ___ big cake.",
      "options": [
        "一些 / 一個",
        "兩朵 / 兩個",
        "一本 / 一枝",
        "幾個 / 幾本"
      ],
      "answer": 0
    },
    {
      "id": "Q3",
      "question": "兩枝五十___錢，很便宜！",
      "questionEn": "Two for fifty ___ money, very cheap!",
      "options": [
        "元",
        "個",
        "塊",
        "本"
      ],
      "answer": 2
    },
    {
      "id": "Q4",
      "question": "紅色、白色___好看。",
      "questionEn": "Red and white are ___ good-looking.",
      "options": [
        "很",
        "都",
        "也",
        "不"
      ],
      "answer": 1
    },
    {
      "id": "Q5",
      "question": "她常常___白色的衣服。",
      "questionEn": "She often ___ white clothes.",
      "options": [
        "買",
        "送",
        "穿",
        "看"
      ],
      "answer": 2
    },
    {
      "id": "Q6",
      "question": "你有___本中文書？",
      "questionEn": "How many Chinese books do you have?",
      "options": [
        "什麼",
        "哪",
        "幾",
        "多少"
      ],
      "answer": 2
    },
    {
      "id": "Q7",
      "question": "便宜___東西 (cheap things)",
      "questionEn": "cheap ___ things",
      "options": [
        "的",
        "都",
        "很",
        "也"
      ],
      "answer": 0
    },
    {
      "id": "Q8",
      "question": "大家都很___。",
      "questionEn": "Everyone is very ___.",
      "options": [
        "漂亮",
        "開心",
        "便宜",
        "好看"
      ],
      "answer": 1
    }
  ]
}


const lesson4 = {
  "id": 4,
  "title": "你要咖啡還是茶？",
  "titlePinyin": "Nǐ Yào Kāfēi Háishì Chá?",
  "titleEn": "Would You Like Coffee or Tea?",
  "titleId": "Kamu Mau Kopi atau Teh?",
  "level": "BAB 4",
  "icon": "☕",
  "dialogues": [
    {
      "id": "D1",
      "title": "對話一 Dialogue 1",
      "setting": "在餐廳 At the restaurant",
      "lines": [
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "天氣好熱，我們去喝飲料，好不好？",
          "textPinyin": "Tiānqì hǎo rè, wǒmen qù hē yǐnliào, hǎo bù hǎo?",
          "textEn": "The weather is so hot. How about we go have some drinks?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "好啊！你想喝什麼？咖啡還是茶？",
          "textPinyin": "Hǎo a! Nǐ xiǎng hē shénme? Kāfēi háishì chá?",
          "textEn": "Okay! What would you like to drink? Coffee or tea?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "咖啡、茶，我都喜歡。我也很餓，想吃一點兒東西。",
          "textPinyin": "Kāfēi, chá, wǒ dōu xǐhuān. Wǒ yě hěn è, xiǎng chī yīdiǎnr dōngxi.",
          "textEn": "Coffee and tea, I like them both. I am also hungry; I would like to have some food."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "這家餐廳人太多，我們去那家餐廳，好嗎？他們的牛肉麵很好吃，也很便宜。",
          "textPinyin": "Zhè jiā cāntīng rén tài duō. Wǒmen qù nà jiā cāntīng, hǎo ma? Tāmen de niúròu miàn hěn hǎochī, yě hěn piányí.",
          "textEn": "There are too many people here. How about that restaurant? They have delicious beef noodles, and it is also cheap."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "太好了！我最愛吃牛肉麵。他們也賣飲料嗎？",
          "textPinyin": "Tài hǎo le! Wǒ zuì ài chī niúròu miàn. Tāmen yě mài yǐnliào ma?",
          "textEn": "That is awesome! Beef noodles is my favorite. Do they sell drinks as well?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "他們賣很多種飲料。",
          "textPinyin": "Tāmen mài hěn duō zhǒng yǐnliào.",
          "textEn": "They have various kinds of drink."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "我們現在去，好嗎？",
          "textPinyin": "Wǒmen xiànzài qù, hǎo ma?",
          "textEn": "Let us go now, okay?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "好。",
          "textPinyin": "Hǎo.",
          "textEn": "Okay."
        }
      ]
    },
    {
      "id": "D2",
      "title": "對話二 Dialogue 2",
      "setting": "在餐廳櫃台點餐 At the restaurant counter",
      "lines": [
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "小姐，我們要點兩碗牛肉麵和兩杯茶。",
          "textPinyin": "Xiǎojiě, wǒmen yào diǎn liǎng wǎn niúròu miàn hé liǎng bēi chá.",
          "textEn": "Miss, we would like to order two bowls of beef noodles and two cups of tea."
        },
        {
          "speaker": "店員",
          "pinyin": "Diànyuán",
          "text": "請問兩位要紅茶還是綠茶？",
          "textPinyin": "Qǐngwèn liǎng wèi yào hóngchá háishì lǜchá?",
          "textEn": "Would you like black tea or green tea?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "我要紅茶。",
          "textPinyin": "Wǒ yào hóngchá.",
          "textEn": "Black tea please."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "請給我們一杯紅茶、一杯綠茶。請問一共多少錢？",
          "textPinyin": "Qǐng gěi wǒmen yī bēi hóngchá, yī bēi lǜchá. Qǐngwèn yīgòng duōshǎo qián?",
          "textEn": "We would like a cup of black tea and a cup of green tea. How much altogether?"
        },
        {
          "speaker": "店員",
          "pinyin": "Diànyuán",
          "text": "一共兩百一十五塊錢。",
          "textPinyin": "Yīgòng liǎng bǎi yīshíwǔ kuài qián.",
          "textEn": "215 dollars in total."
        },
        {
          "speaker": "店員",
          "pinyin": "Diànyuán",
          "text": "找您七百八十五塊錢，謝謝。",
          "textPinyin": "Zhǎo nín qī bǎi bāshíwǔ kuài qián, xièxie.",
          "textEn": "Here is your 785 dollars of change, thanks."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "一共兩百多塊錢，好便宜！",
          "textPinyin": "Yīgòng liǎng bǎi duō kuài qián, hǎo piányí!",
          "textEn": "Only a little over 200. It is cheap!"
        }
      ]
    }
  ],
  "vocabulary": [
    {
      "id": 1,
      "char": "咖啡",
      "pinyin": "kāfēi",
      "pos": "N",
      "en": "coffee",
      "id_": "kopi"
    },
    {
      "id": 2,
      "char": "還是",
      "pinyin": "háishì",
      "pos": "Conj",
      "en": "or (for questions)",
      "id_": "atau (untuk pertanyaan)",
      "example": "你要喝什麼？咖啡還是茶？",
      "examplePinyin": "Nǐ yào hē shénme? Kāfēi háishì chá?",
      "exampleEn": "What do you want to drink? Coffee or tea?"
    },
    {
      "id": 3,
      "char": "天氣",
      "pinyin": "tiānqì",
      "pos": "N",
      "en": "weather",
      "id_": "cuaca"
    },
    {
      "id": 4,
      "char": "好",
      "pinyin": "hǎo",
      "pos": "Adv",
      "en": "very (colloquial intensifier)",
      "id_": "sangat (percakapan)",
      "example": "今天天氣好熱。",
      "examplePinyin": "Jīntiān tiānqì hǎo rè.",
      "exampleEn": "The weather is so hot today."
    },
    {
      "id": 5,
      "char": "熱",
      "pinyin": "rè",
      "pos": "Vs",
      "en": "hot",
      "id_": "panas"
    },
    {
      "id": 6,
      "char": "冷",
      "pinyin": "lěng",
      "pos": "Vs",
      "en": "cold",
      "id_": "dingin"
    },
    {
      "id": 7,
      "char": "飲料",
      "pinyin": "yǐnliào",
      "pos": "N",
      "en": "beverage",
      "id_": "minuman"
    },
    {
      "id": 8,
      "char": "也",
      "pinyin": "yě",
      "pos": "Adv",
      "en": "also; too; as well",
      "id_": "juga",
      "example": "我很忙，也很累。",
      "examplePinyin": "Wǒ hěn máng, yě hěn lèi.",
      "exampleEn": "I am very busy and tired as well."
    },
    {
      "id": 9,
      "char": "餓",
      "pinyin": "è",
      "pos": "Vs",
      "en": "hungry",
      "id_": "lapar"
    },
    {
      "id": 10,
      "char": "渴",
      "pinyin": "kě",
      "pos": "Vs",
      "en": "thirsty",
      "id_": "haus"
    },
    {
      "id": 11,
      "char": "(一)點(兒)",
      "pinyin": "(yī)diǎn(r)",
      "pos": "Det",
      "en": "a little; a bit",
      "id_": "sedikit"
    },
    {
      "id": 12,
      "char": "餐廳",
      "pinyin": "cāntīng",
      "pos": "N",
      "en": "restaurant (M:家)",
      "id_": "restoran"
    },
    {
      "id": 13,
      "char": "太",
      "pinyin": "tài",
      "pos": "Adv",
      "en": "too (excessively)",
      "id_": "terlalu",
      "example": "天氣太熱，我要喝飲料。",
      "examplePinyin": "Tiānqì tài rè, wǒ yào hē yǐnliào.",
      "exampleEn": "The weather is too hot, I want some beverage."
    },
    {
      "id": 14,
      "char": "多",
      "pinyin": "duō",
      "pos": "Vs-pred",
      "en": "many; much",
      "id_": "banyak"
    },
    {
      "id": 15,
      "char": "少",
      "pinyin": "shǎo",
      "pos": "Vs-pred",
      "en": "less; little",
      "id_": "sedikit; kurang"
    },
    {
      "id": 16,
      "char": "麵",
      "pinyin": "miàn",
      "pos": "N",
      "en": "noodles",
      "id_": "mie"
    },
    {
      "id": 17,
      "char": "好吃",
      "pinyin": "hǎochī",
      "pos": "Vs",
      "en": "delicious",
      "id_": "enak"
    },
    {
      "id": 18,
      "char": "好喝",
      "pinyin": "hǎohē",
      "pos": "Vs",
      "en": "tasty (drink)",
      "id_": "enak diminum"
    },
    {
      "id": 19,
      "char": "了",
      "pinyin": "le",
      "pos": "Ptc",
      "en": "used after Vs preceded by 太",
      "id_": "partikel (setelah 太)",
      "example": "我太累了，不想去玩。",
      "examplePinyin": "Wǒ tài lèi le, bù xiǎng qù wán.",
      "exampleEn": "I am so tired! I do not want to hang out."
    },
    {
      "id": 20,
      "char": "最",
      "pinyin": "zuì",
      "pos": "Adv",
      "en": "most",
      "id_": "paling",
      "example": "我最愛看書。",
      "examplePinyin": "Wǒ zuì ài kànshū.",
      "exampleEn": "I like to read the most."
    },
    {
      "id": 21,
      "char": "賣",
      "pinyin": "mài",
      "pos": "V",
      "en": "to sell",
      "id_": "menjual"
    },
    {
      "id": 22,
      "char": "點",
      "pinyin": "diǎn",
      "pos": "V",
      "en": "to order from a menu",
      "id_": "memesan"
    },
    {
      "id": 23,
      "char": "碗",
      "pinyin": "wǎn",
      "pos": "N/M",
      "en": "bowl; bowl of",
      "id_": "mangkuk"
    },
    {
      "id": 24,
      "char": "杯",
      "pinyin": "bēi",
      "pos": "M",
      "en": "cup of",
      "id_": "gelas (kata satuan)"
    },
    {
      "id": 25,
      "char": "一共",
      "pinyin": "yīgòng",
      "pos": "Adv",
      "en": "altogether; in total",
      "id_": "total"
    },
    {
      "id": 26,
      "char": "多少",
      "pinyin": "duōshǎo",
      "pos": "N",
      "en": "how many; how much",
      "id_": "berapa"
    },
    {
      "id": 27,
      "char": "百",
      "pinyin": "bǎi",
      "pos": "N",
      "en": "hundred",
      "id_": "seratus"
    },
    {
      "id": 28,
      "char": "千",
      "pinyin": "qiān",
      "pos": "N",
      "en": "thousand",
      "id_": "seribu"
    },
    {
      "id": 29,
      "char": "萬",
      "pinyin": "wàn",
      "pos": "N",
      "en": "ten thousand",
      "id_": "sepuluh ribu"
    },
    {
      "id": 30,
      "char": "零",
      "pinyin": "líng",
      "pos": "N",
      "en": "zero",
      "id_": "nol"
    },
    {
      "id": 31,
      "char": "找錢",
      "pinyin": "zhǎoqián",
      "pos": "V-sep",
      "en": "to give change",
      "id_": "memberi kembalian"
    },
    {
      "id": 32,
      "char": "您",
      "pinyin": "nín",
      "pos": "N",
      "en": "you (honorific)",
      "id_": "Anda (bentuk hormat)"
    },
    {
      "id": 33,
      "char": "紅茶",
      "pinyin": "hóngchá",
      "pos": "N",
      "en": "black tea",
      "id_": "teh hitam"
    },
    {
      "id": 34,
      "char": "綠茶",
      "pinyin": "lǜchá",
      "pos": "N",
      "en": "green tea",
      "id_": "teh hijau"
    },
    {
      "id": 35,
      "char": "請",
      "pinyin": "qǐng",
      "pos": "Vp",
      "en": "please",
      "id_": "tolong; silakan"
    },
    {
      "id": 36,
      "char": "給",
      "pinyin": "gěi",
      "pos": "V",
      "en": "to give",
      "id_": "memberi",
      "example": "請給我一杯綠茶。",
      "examplePinyin": "Qǐng gěi wǒ yī bēi lǜchá.",
      "exampleEn": "Please give me a cup of green tea."
    },
    {
      "id": 37,
      "char": "夏天",
      "pinyin": "xiàtiān",
      "pos": "N",
      "en": "summer",
      "id_": "musim panas"
    },
    {
      "id": 38,
      "char": "春天",
      "pinyin": "chūntiān",
      "pos": "N",
      "en": "spring",
      "id_": "musim semi"
    },
    {
      "id": 39,
      "char": "秋天",
      "pinyin": "qiūtiān",
      "pos": "N",
      "en": "autumn",
      "id_": "musim gugur"
    },
    {
      "id": 40,
      "char": "冬天",
      "pinyin": "dōngtiān",
      "pos": "N",
      "en": "winter",
      "id_": "musim dingin"
    },
    {
      "id": 41,
      "char": "果汁",
      "pinyin": "guǒzhī",
      "pos": "N",
      "en": "juice",
      "id_": "jus"
    },
    {
      "id": 42,
      "char": "牛奶",
      "pinyin": "niúnǎi",
      "pos": "N",
      "en": "milk",
      "id_": "susu"
    },
    {
      "id": 43,
      "char": "有的",
      "pinyin": "yǒude",
      "pos": "Det",
      "en": "some; some of",
      "id_": "ada yang / beberapa",
      "example": "有的很便宜，有的很貴。",
      "examplePinyin": "Yǒude hěn piányí, yǒude hěn guì.",
      "exampleEn": "Some are cheap, some are expensive."
    },
    {
      "id": 44,
      "char": "每",
      "pinyin": "měi",
      "pos": "Det",
      "en": "every; each",
      "id_": "setiap",
      "example": "我每個星期都有中文課。",
      "examplePinyin": "Wǒ měi ge xīngqí dōu yǒu Zhōngwén kè.",
      "exampleEn": "I have Chinese class every week."
    },
    {
      "id": 45,
      "char": "天",
      "pinyin": "tiān",
      "pos": "N/M",
      "en": "day",
      "id_": "hari"
    }
  ],
  "phrases": [
    {
      "zh": "太好了！",
      "pinyin": "tài hǎo le!",
      "en": "That is awesome! / Great!",
      "id_": "luar biasa! / bagus sekali!"
    },
    {
      "zh": "好嗎？",
      "pinyin": "hǎo ma?",
      "en": "Is that okay?",
      "id_": "bagaimana? / oke?"
    }
  ],
  "grammar": [
    {
      "id": "G1",
      "title": "I. Transposed Objects (Topic)",
      "explanation": "An object can be moved to the beginning of a sentence to become a topic. When the topic is plural, 都 is used after the subject.",
      "pattern": "Topic,  S + (Neg) + V  /  Topic,  S + 都 + (Neg) + V",
      "examples": [
        {
          "zh": "茶，我喜歡；咖啡，我不喜歡。",
          "pinyin": "Chá, wǒ xǐhuān; kāfēi, wǒ bù xǐhuān.",
          "en": "Tea, I like; coffee, I do not like."
        },
        {
          "zh": "大的、小的，我都要。",
          "pinyin": "Dà de, xiǎo de, wǒ dōu yào.",
          "en": "The big one and the small one, I want them both."
        },
        {
          "zh": "書、筆，我都有。",
          "pinyin": "Shū, bǐ, wǒ dōu yǒu.",
          "en": "The book and the pen, I have them both."
        }
      ]
    },
    {
      "id": "G2",
      "title": "II. Expressing Also/Too with 也",
      "explanation": "也 is an adverb followed by a verb or Vs. Used when the same subject does two things, or two subjects do the same thing.",
      "pattern": "S  也  V(O) / Vs",
      "examples": [
        {
          "zh": "她很漂亮，也很可愛。",
          "pinyin": "Tā hěn piàoliàng, yě hěn kěài.",
          "en": "She is very beautiful, and is also very cute."
        },
        {
          "zh": "我買書，也買筆。",
          "pinyin": "Wǒ mǎi shū, yě mǎi bǐ.",
          "en": "I bought a book, and a pen too."
        },
        {
          "zh": "他要喝奶茶，我也要喝奶茶。",
          "pinyin": "Tā yào hē nǎichá, wǒ yě yào hē nǎichá.",
          "en": "He wants milk tea, I also want milk tea."
        }
      ]
    },
    {
      "id": "G3",
      "title": "III. Expressing Excessively with 太……了",
      "explanation": "太 + Vs + 了 expresses that something is excessive or extreme.",
      "pattern": "太  Vs  了",
      "examples": [
        {
          "zh": "太好了！",
          "pinyin": "Tài hǎo le!",
          "en": "Awesome!"
        },
        {
          "zh": "今天太熱了。",
          "pinyin": "Jīntiān tài rè le.",
          "en": "Today is too hot."
        },
        {
          "zh": "我今天太累了，現在很想睡覺。",
          "pinyin": "Wǒ jīntiān tài lèi le, xiànzài hěn xiǎng shuìjiào.",
          "en": "I am so tired today, I really want to sleep now."
        }
      ]
    },
    {
      "id": "G4",
      "title": "IV. Numerical System in Chinese",
      "explanation": "Chinese numbers: 百 (hundred), 千 (thousand), 萬 (ten thousand), 零 (zero for gaps). 多 after a round number means more than.",
      "pattern": "萬  千  百  十  個",
      "examples": [
        {
          "zh": "一百零五 (105) / 兩千零五 (2005) / 六千五百 (6500)",
          "pinyin": "yī bǎi líng wǔ / liǎng qiān líng wǔ / liù qiān wǔ bǎi",
          "en": "105 / 2005 / 6500"
        },
        {
          "zh": "一共兩百多塊錢。",
          "pinyin": "Yīgòng liǎng bǎi duō kuài qián.",
          "en": "A little over 200 dollars in total."
        }
      ]
    },
    {
      "id": "G5",
      "title": "V. Expressing More Than with 多",
      "explanation": "多 after a round number means the actual amount is between that number and the next unit.",
      "pattern": "Nu  多  M  N  /  Nu  M  多",
      "examples": [
        {
          "zh": "十多個蛋糕 (11~19) / 二十多朵花 (21~29)",
          "pinyin": "shí duō ge dàngāo / èrshí duō duǒ huā",
          "en": "more than ten cakes / more than twenty flowers"
        },
        {
          "zh": "現在你有多少錢？五百多塊錢。",
          "pinyin": "Xiànzài nǐ yǒu duōshǎo qián? Wǔ bǎi duō kuài qián.",
          "en": "How much money do you have? A little over 500 dollars."
        },
        {
          "zh": "五塊多 (5~6元) / 十一點多 (11:00~12:00)",
          "pinyin": "wǔ kuài duō / shíyī diǎn duō",
          "en": "a little over 5 dollars / a little after 11 o'clock"
        }
      ]
    }
  ],
  "reading": {
    "title": "買飲料",
    "titlePinyin": "Mǎi Yǐnliào",
    "titleEn": "Buying Beverage",
    "zh": "台灣夏天的天氣很熱，很多人都喜歡喝飲料。飲料店很多，他們賣很多種飲料。果汁、牛奶、咖啡、茶都很好喝，有的很便宜，一杯二十多塊錢。我和朋友都很愛喝，我們每天都去買。",
    "pinyin": "Táiwān xiàtiān de tiānqì hěn rè, hěn duō rén dōu xǐhuān hē yǐnliào. Yǐnliào diàn hěn duō, tāmen mài hěn duō zhǒng yǐnliào. Guǒzhī, niúnǎi, kāfēi, chá dōu hěn hǎohē, yǒude hěn piányí, yī bēi èrshí duō kuài qián. Wǒ hé péngyǒu dōu hěn ài hē, wǒmen měi tiān dōu qù mǎi.",
    "en": "During summer the weather is very hot in Taiwan, many people like to have beverages. There are many beverage stores. They serve many kinds of beverages. Juice, milk, coffee and tea are all great. Some are very inexpensive; they cost more than 20 dollars for one. My friends and I all enjoy having beverages; we buy them every day."
  },
  "quiz": [
    {
      "id": "Q1",
      "question": "你想喝什麼？咖啡___茶？",
      "questionEn": "What would you like? Coffee ___ tea?",
      "options": [
        "和",
        "或",
        "還是",
        "也"
      ],
      "answer": 2
    },
    {
      "id": "Q2",
      "question": "太好___！",
      "questionEn": "That is awesome ___!",
      "options": [
        "嗎",
        "呢",
        "了",
        "吧"
      ],
      "answer": 2
    },
    {
      "id": "Q3",
      "question": "我___很忙，___很累。",
      "questionEn": "I am very busy, ___ very tired.",
      "options": [
        "都/也",
        "也/都",
        "很/不",
        "不/很"
      ],
      "answer": 0
    },
    {
      "id": "Q4",
      "question": "一共兩百___塊錢。",
      "questionEn": "A little over 200 dollars in total.",
      "options": [
        "多",
        "少",
        "很",
        "也"
      ],
      "answer": 0
    },
    {
      "id": "Q5",
      "question": "我___愛吃牛肉麵。",
      "questionEn": "I like beef noodles the ___.",
      "options": [
        "很",
        "都",
        "最",
        "也"
      ],
      "answer": 2
    },
    {
      "id": "Q6",
      "question": "請___我一杯綠茶。",
      "questionEn": "Please ___ me a cup of green tea.",
      "options": [
        "買",
        "送",
        "給",
        "賣"
      ],
      "answer": 2
    },
    {
      "id": "Q7",
      "question": "天氣太熱，我要喝___。",
      "questionEn": "The weather is too hot, I want some ___.",
      "options": [
        "飲料",
        "飯",
        "書",
        "衣服"
      ],
      "answer": 0
    },
    {
      "id": "Q8",
      "question": "我們每___都去買飲料。",
      "questionEn": "We go buy beverages every ___.",
      "options": [
        "星期",
        "天",
        "月",
        "年"
      ],
      "answer": 1
    }
  ]
}

const lesson5 = {
  "id": 5,
  "title": "我的錢包在哪裡？",
  "titlePinyin": "Wǒ de Qiánbāo Zài Nǎlǐ?",
  "titleEn": "Where Is My Wallet?",
  "titleId": "Dompet Saya Ada di Mana?",
  "level": "BAB 5",
  "icon": "👜",
  "dialogues": [
    {
      "id": "D1",
      "title": "對話一 Dialogue 1",
      "setting": "在咖啡廳 At the café",
      "lines": [
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "友美，妳這個週末要做什麼？",
          "textPinyin": "Yǒuměi, nǐ zhè ge zhōumò yào zuò shénme?",
          "textEn": "Youmei, what are you going to do this weekend?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "我要在家看書、聽音樂。",
          "textPinyin": "Wǒ yào zài jiā kànshū, tīng yīnyuè.",
          "textEn": "I am going to read and listen to music at home."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "妳星期六下午有空嗎？我們一起去喝下午茶，怎麼樣？",
          "textPinyin": "Nǐ xīngqí liù xiàwǔ yǒukòng ma? Wǒmen yīqǐ qù hē xiàwǔ chá, zěnmeyàng?",
          "textEn": "Are you available on Saturday afternoon? How about we have afternoon tea together?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "好啊！你想去哪裡？",
          "textPinyin": "Hǎo a! Nǐ xiǎng qù nǎlǐ?",
          "textEn": "Sounds great! Where do you want to go?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "我知道一家很不錯的咖啡廳，那裡的冰淇淋很好吃。",
          "textPinyin": "Wǒ zhīdào yī jiā hěn búcuò de kāfēitīng, nàlǐ de bīngqílín hěn hǎochī.",
          "textEn": "I know a nice café. They serve delicious ice cream."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "他們有巧克力冰淇淋嗎？",
          "textPinyin": "Tāmen yǒu qiǎokèlì bīngqílín ma?",
          "textEn": "Do they have chocolate ice cream?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "有啊！他們有很多種冰淇淋。",
          "textPinyin": "Yǒu a! Tāmen yǒu hěn duō zhǒng bīngqílín.",
          "textEn": "Oh, yeah. They have lots of kinds of ice cream."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "我們這個星期六下午兩點半去吧。",
          "textPinyin": "Wǒmen zhè ge xīngqí liù xiàwǔ liǎng diǎn bàn qù ba.",
          "textEn": "Let's go this Saturday at 2:30 p.m."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "好。",
          "textPinyin": "Hǎo.",
          "textEn": "Okay."
        }
      ]
    },
    {
      "id": "D2",
      "title": "對話二 Dialogue 2",
      "setting": "在家 At home",
      "lines": [
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "媽，我跟友美要去喝下午茶，可是我的錢包不在房間裡。",
          "textPinyin": "Mā, wǒ gēn Yǒuměi yào qù hē xiàwǔ chá, kěshì wǒ de qiánbāo bú zài fángjiān lǐ.",
          "textEn": "Mom, Youmei and I are going to have afternoon tea now, but my wallet is not in the bedroom."
        },
        {
          "speaker": "媽媽",
          "pinyin": "Māma",
          "text": "客廳的桌子上有一個錢包，是不是你的？",
          "textPinyin": "Kètīng de zhuōzi shàng yǒu yī ge qiánbāo, shì bú shì nǐ de?",
          "textEn": "In the living room, there is a wallet on the table. Is that yours?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "那不是我的，是哥哥的。我的錢包不在客廳裡。",
          "textPinyin": "Nà bú shì wǒ de, shì gēge de. Wǒ de qiánbāo bú zài kètīng lǐ.",
          "textEn": "It is not mine. It is my elder brother's. Mine is not in the living room."
        },
        {
          "speaker": "媽媽",
          "pinyin": "Māma",
          "text": "沙發下面呢？",
          "textPinyin": "Shāfā xiàmiàn ne?",
          "textEn": "How about checking under the sofa?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "沙發上面、下面跟旁邊都沒有。媽，妳幫我找，好嗎？",
          "textPinyin": "Shāfā shàngmiàn, xiàmiàn gēn pángbiān dōu méi yǒu. Mā, nǐ bāng wǒ zhǎo, hǎo ma?",
          "textEn": "It is neither on the sofa, under the sofa, nor beside the sofa. Mom, could you find it for me?"
        },
        {
          "speaker": "媽媽",
          "pinyin": "Māma",
          "text": "我很忙，現在要去廚房做飯，你再去房間找吧。",
          "textPinyin": "Wǒ hěn máng, xiànzài yào qù chúfáng zuòfàn, nǐ zài qù fángjiān zhǎo ba.",
          "textEn": "I am very busy and I am going to the kitchen to cook now. You go check your room again."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "啊！在這裡！錢包在我的書下面。",
          "textPinyin": "Ā! Zài zhèlǐ! Qiánbāo zài wǒ de shū xiàmiàn.",
          "textEn": "Ah! There it is! The wallet is under my book."
        }
      ]
    }
  ],
  "vocabulary": [
    {
      "id": 1,
      "char": "錢包",
      "pinyin": "qiánbāo",
      "pos": "N",
      "en": "wallet; purse (M:個)",
      "id_": "dompet",
      "example": "李小姐的錢包是紅色的。",
      "examplePinyin": "Lǐ xiǎojiě de qiánbāo shì hóngsè de.",
      "exampleEn": "Miss Li's purse is red."
    },
    {
      "id": 2,
      "char": "在",
      "pinyin": "zài",
      "pos": "Vst/Prep",
      "en": "(to be located) at; in; on",
      "id_": "berada; di",
      "example": "他在學校，不在家。",
      "examplePinyin": "Tā zài xuéxiào, bú zài jiā.",
      "exampleEn": "He is at school, not at home."
    },
    {
      "id": 3,
      "char": "哪裡/哪兒",
      "pinyin": "nǎlǐ/nǎr",
      "pos": "N",
      "en": "where",
      "id_": "di mana",
      "example": "我的錢包在哪裡？",
      "examplePinyin": "Wǒ de qiánbāo zài nǎlǐ?",
      "exampleEn": "Where is my wallet?"
    },
    {
      "id": 4,
      "char": "聽",
      "pinyin": "tīng",
      "pos": "V",
      "en": "to listen",
      "id_": "mendengar"
    },
    {
      "id": 5,
      "char": "音樂",
      "pinyin": "yīnyuè",
      "pos": "N",
      "en": "music",
      "id_": "musik",
      "example": "我喜歡聽音樂。",
      "examplePinyin": "Wǒ xǐhuān tīng yīnyuè.",
      "exampleEn": "I like to listen to music."
    },
    {
      "id": 6,
      "char": "下午茶",
      "pinyin": "xiàwǔ chá",
      "pos": "N",
      "en": "afternoon tea",
      "id_": "teh sore (afternoon tea)"
    },
    {
      "id": 7,
      "char": "不錯",
      "pinyin": "búcuò",
      "pos": "Vs",
      "en": "not bad; pretty good",
      "id_": "lumayan; tidak jelek",
      "example": "這本書很不錯。",
      "examplePinyin": "Zhè běn shū hěn búcuò.",
      "exampleEn": "This book is not bad."
    },
    {
      "id": 8,
      "char": "咖啡廳",
      "pinyin": "kāfēitīng",
      "pos": "N",
      "en": "café",
      "id_": "kafe",
      "example": "我喜歡去咖啡廳看書。",
      "examplePinyin": "Wǒ xǐhuān qù kāfēitīng kànshū.",
      "exampleEn": "I like to read at a café."
    },
    {
      "id": 9,
      "char": "那裡/那兒",
      "pinyin": "nàlǐ/nàr",
      "pos": "N",
      "en": "there",
      "id_": "di sana"
    },
    {
      "id": 10,
      "char": "這裡/這兒",
      "pinyin": "zhèlǐ/zhèr",
      "pos": "N",
      "en": "here",
      "id_": "di sini",
      "example": "我在學校，你要來這裡嗎？",
      "examplePinyin": "Wǒ zài xuéxiào, nǐ yào lái zhèlǐ ma?",
      "exampleEn": "I am at school. Do you want to come here?"
    },
    {
      "id": 11,
      "char": "冰淇淋",
      "pinyin": "bīngqílín",
      "pos": "N",
      "en": "ice cream",
      "id_": "es krim"
    },
    {
      "id": 12,
      "char": "巧克力",
      "pinyin": "qiǎokèlì",
      "pos": "N",
      "en": "chocolate",
      "id_": "cokelat"
    },
    {
      "id": 13,
      "char": "半",
      "pinyin": "bàn",
      "pos": "N",
      "en": "half",
      "id_": "setengah",
      "example": "現在十二點半。",
      "examplePinyin": "Xiànzài shíèr diǎn bàn.",
      "exampleEn": "It is half past twelve."
    },
    {
      "id": 14,
      "char": "吧",
      "pinyin": "ba",
      "pos": "Ptc",
      "en": "final particle for suggestion",
      "id_": "partikel akhir (saran/usulan)"
    },
    {
      "id": 15,
      "char": "有空",
      "pinyin": "yǒukòng",
      "pos": "Phr",
      "en": "free; at leisure; available",
      "id_": "ada waktu; senggang"
    },
    {
      "id": 16,
      "char": "沒(有)空",
      "pinyin": "méi(yǒu)kòng",
      "pos": "Phr",
      "en": "unavailable; not free",
      "id_": "tidak ada waktu; sibuk"
    },
    {
      "id": 17,
      "char": "跟",
      "pinyin": "gēn",
      "pos": "Conj",
      "en": "and",
      "id_": "dan",
      "example": "這個蛋糕跟這瓶果汁一共多少錢？",
      "examplePinyin": "Zhè ge dàngāo gēn zhè píng guǒzhī yīgòng duōshǎo qián?",
      "exampleEn": "How much do this cake and this bottle of juice cost?"
    },
    {
      "id": 18,
      "char": "可是",
      "pinyin": "kěshì",
      "pos": "Conj",
      "en": "but",
      "id_": "tetapi",
      "example": "我想去朋友家玩，可是沒有空。",
      "examplePinyin": "Wǒ xiǎng qù péngyǒu jiā wán, kěshì méi yǒukòng.",
      "exampleEn": "I would like to go to my friend's place, but I don't have time."
    },
    {
      "id": 19,
      "char": "房間",
      "pinyin": "fángjiān",
      "pos": "N",
      "en": "room (M:個/間)",
      "id_": "kamar"
    },
    {
      "id": 20,
      "char": "間",
      "pinyin": "jiān",
      "pos": "M",
      "en": "measure word for rooms",
      "id_": "kata satuan untuk kamar"
    },
    {
      "id": 21,
      "char": "房子",
      "pinyin": "fángzi",
      "pos": "N",
      "en": "building; house (M:棟)",
      "id_": "rumah/gedung"
    },
    {
      "id": 22,
      "char": "裡(面)",
      "pinyin": "lǐ(miàn)",
      "pos": "N",
      "en": "inside; in",
      "id_": "di dalam",
      "example": "你的書在房間裡。",
      "examplePinyin": "Nǐ de shū zài fángjiān lǐ.",
      "exampleEn": "Your book is in the room."
    },
    {
      "id": 23,
      "char": "外(面)",
      "pinyin": "wài(miàn)",
      "pos": "N",
      "en": "outside",
      "id_": "di luar"
    },
    {
      "id": 24,
      "char": "客廳",
      "pinyin": "kètīng",
      "pos": "N",
      "en": "living room (M:間)",
      "id_": "ruang tamu"
    },
    {
      "id": 25,
      "char": "桌子",
      "pinyin": "zhuōzi",
      "pos": "N",
      "en": "table (M:張)",
      "id_": "meja"
    },
    {
      "id": 26,
      "char": "椅子",
      "pinyin": "yǐzi",
      "pos": "N",
      "en": "chair (M:張)",
      "id_": "kursi"
    },
    {
      "id": 27,
      "char": "張",
      "pinyin": "zhāng",
      "pos": "M",
      "en": "measure word for tables and chairs",
      "id_": "kata satuan untuk meja/kursi/kertas"
    },
    {
      "id": 28,
      "char": "上(面)",
      "pinyin": "shàng(miàn)",
      "pos": "N",
      "en": "above; over; on top of",
      "id_": "di atas",
      "example": "你的筆在那本書上面。",
      "examplePinyin": "Nǐ de bǐ zài nà běn shū shàngmiàn.",
      "exampleEn": "Your pen is on top of the book."
    },
    {
      "id": 29,
      "char": "有",
      "pinyin": "yǒu",
      "pos": "Vst",
      "en": "there is/are; to exist",
      "id_": "ada",
      "example": "你的房間裡有幾張椅子？",
      "examplePinyin": "Nǐ de fángjiān lǐ yǒu jǐ zhāng yǐzi?",
      "exampleEn": "How many chairs are there in your room?"
    },
    {
      "id": 30,
      "char": "哥哥",
      "pinyin": "gēge",
      "pos": "N",
      "en": "elder brother",
      "id_": "kakak laki-laki"
    },
    {
      "id": 31,
      "char": "姐姐",
      "pinyin": "jiějie",
      "pos": "N",
      "en": "elder sister",
      "id_": "kakak perempuan"
    },
    {
      "id": 32,
      "char": "弟弟",
      "pinyin": "dìdi",
      "pos": "N",
      "en": "younger brother",
      "id_": "adik laki-laki"
    },
    {
      "id": 33,
      "char": "妹妹",
      "pinyin": "mèimei",
      "pos": "N",
      "en": "younger sister",
      "id_": "adik perempuan"
    },
    {
      "id": 34,
      "char": "沙發",
      "pinyin": "shāfā",
      "pos": "N",
      "en": "sofa (M:張)",
      "id_": "sofa"
    },
    {
      "id": 35,
      "char": "下(面)",
      "pinyin": "xià(miàn)",
      "pos": "N",
      "en": "below; under; underneath",
      "id_": "di bawah",
      "example": "你的錢包在那件衣服下面。",
      "examplePinyin": "Nǐ de qiánbāo zài nà jiàn yīfu xiàmiàn.",
      "exampleEn": "Your wallet is under that piece of clothing."
    },
    {
      "id": 36,
      "char": "旁邊",
      "pinyin": "pángbiān",
      "pos": "N",
      "en": "side; by the side of; next to",
      "id_": "di samping"
    },
    {
      "id": 37,
      "char": "前(面)",
      "pinyin": "qián(miàn)",
      "pos": "N",
      "en": "the front; in front",
      "id_": "di depan"
    },
    {
      "id": 38,
      "char": "後(面)",
      "pinyin": "hòu(miàn)",
      "pos": "N",
      "en": "at the back; behind",
      "id_": "di belakang"
    },
    {
      "id": 39,
      "char": "幫",
      "pinyin": "bāng",
      "pos": "V",
      "en": "to help",
      "id_": "membantu",
      "example": "他常常幫朋友，是一個好人。",
      "examplePinyin": "Tā chángcháng bāng péngyǒu, shì yī ge hǎo rén.",
      "exampleEn": "He helps his friends often. He is a nice guy."
    },
    {
      "id": 40,
      "char": "找",
      "pinyin": "zhǎo",
      "pos": "V",
      "en": "to look for",
      "id_": "mencari"
    },
    {
      "id": 41,
      "char": "廚房",
      "pinyin": "chúfáng",
      "pos": "N",
      "en": "kitchen (M:間)",
      "id_": "dapur"
    },
    {
      "id": 42,
      "char": "再",
      "pinyin": "zài",
      "pos": "Adv",
      "en": "again",
      "id_": "lagi",
      "example": "那家咖啡廳怎麼樣？你想再去嗎？",
      "examplePinyin": "Nà jiā kāfēitīng zěnmeyàng? Nǐ xiǎng zài qù ma?",
      "exampleEn": "What do you think about that café? Would you like to go again?"
    },
    {
      "id": 43,
      "char": "床",
      "pinyin": "chuáng",
      "pos": "N",
      "en": "bed (M:張)",
      "id_": "tempat tidur"
    },
    {
      "id": 44,
      "char": "家具",
      "pinyin": "jiājù",
      "pos": "N",
      "en": "furniture",
      "id_": "perabotan; furnitur"
    },
    {
      "id": 45,
      "char": "電視(機)",
      "pinyin": "diànshì(jī)",
      "pos": "N",
      "en": "TV (M:台)",
      "id_": "televisi (TV)"
    },
    {
      "id": 46,
      "char": "台",
      "pinyin": "tái",
      "pos": "M",
      "en": "measure word for TV sets, computers",
      "id_": "kata satuan untuk TV, komputer, mesin"
    },
    {
      "id": 47,
      "char": "窗戶",
      "pinyin": "chuānghù",
      "pos": "N",
      "en": "window",
      "id_": "jendela",
      "example": "窗戶前面有很多花，很漂亮。",
      "examplePinyin": "Chuānghù qiánmiàn yǒu hěn duō huā, hěn piàoliàng.",
      "exampleEn": "There are many flowers in front of the window. It's very beautiful."
    },
    {
      "id": 48,
      "char": "門",
      "pinyin": "mén",
      "pos": "N",
      "en": "door",
      "id_": "pintu"
    },
    {
      "id": 49,
      "char": "貓",
      "pinyin": "māo",
      "pos": "N",
      "en": "cat (M:隻)",
      "id_": "kucing"
    },
    {
      "id": 50,
      "char": "狗",
      "pinyin": "gǒu",
      "pos": "N",
      "en": "dog (M:隻)",
      "id_": "anjing"
    },
    {
      "id": 51,
      "char": "鳥",
      "pinyin": "niǎo",
      "pos": "N",
      "en": "bird (M:隻)",
      "id_": "burung"
    },
    {
      "id": 52,
      "char": "隻",
      "pinyin": "zhī",
      "pos": "M",
      "en": "measure word for animals",
      "id_": "kata satuan untuk hewan"
    }
  ],
  "phrases": [
    {
      "zh": "有空",
      "pinyin": "yǒukòng",
      "en": "to be free / available",
      "id_": "ada waktu; senggang"
    },
    {
      "zh": "沒(有)空",
      "pinyin": "méi(yǒu)kòng",
      "en": "to be unavailable",
      "id_": "tidak ada waktu"
    },
    {
      "zh": "曬太陽",
      "pinyin": "shài tàiyáng",
      "en": "to bask in the sun",
      "id_": "berjemur"
    }
  ],
  "grammar": [
    {
      "id": "G1",
      "title": "I. 在 as a Verb with a Place Word",
      "explanation": "在 always precedes the place word to express location.",
      "pattern": "S  (不)在  PW",
      "examples": [
        {
          "zh": "我在台灣。",
          "pinyin": "Wǒ zài Táiwān.",
          "en": "I am in Taiwan."
        },
        {
          "zh": "他不在圖書館。",
          "pinyin": "Tā bú zài túshūguǎn.",
          "en": "He is not at the library."
        },
        {
          "zh": "老師在哪裡？老師不在這裡，我不知道他在哪裡。",
          "pinyin": "Lǎoshī zài nǎlǐ? Lǎoshī bú zài zhèlǐ, wǒ bù zhīdào tā zài nǎlǐ.",
          "en": "Where is the teacher? The teacher is not here, I don't know where he is."
        }
      ]
    },
    {
      "id": "G2",
      "title": "II. Noun + Directional Word as a Place Word",
      "explanation": "Noun + Directional Word denotes the direction and location of a place. 在 can precede it as a verb or preposition.",
      "pattern": "S (不)在  N + Directional Word  /  S  在 N + Dir. Word  V(O)",
      "examples": [
        {
          "zh": "你的書在桌子上面。",
          "pinyin": "Nǐ de shū zài zhuōzi shàngmiàn.",
          "en": "Your book is on the table."
        },
        {
          "zh": "那家餐廳不在學校旁邊。",
          "pinyin": "Nà jiā cāntīng bú zài xuéxiào pángbiān.",
          "en": "That restaurant is not next to the school."
        },
        {
          "zh": "媽媽在廚房裡面做飯。",
          "pinyin": "Māma zài chúfáng lǐmiàn zuòfàn.",
          "en": "Mom is cooking in the kitchen."
        }
      ]
    },
    {
      "id": "G3",
      "title": "III. Existential Sentences with 有",
      "explanation": "有 placed after a place word expresses 'there is/are something at a place'. Always negated with 沒.",
      "pattern": "Place  (沒)有  N",
      "examples": [
        {
          "zh": "台灣有很多好吃的東西。",
          "pinyin": "Táiwān yǒu hěn duō hǎochī de dōngxi.",
          "en": "There is a lot of delicious food in Taiwan."
        },
        {
          "zh": "圖書館旁邊沒有咖啡廳。",
          "pinyin": "Túshūguǎn pángbiān méi yǒu kāfēitīng.",
          "en": "There is no café next to the library."
        },
        {
          "zh": "桌子上面有很多東西。",
          "pinyin": "Zhuōzi shàngmiàn yǒu hěn duō dōngxi.",
          "en": "There are a lot of things on the table."
        }
      ]
    },
    {
      "id": "G4",
      "title": "IV. Expressing Suggestion with 吧",
      "explanation": "吧 placed at the end of a sentence expresses a suggestion from the speaker.",
      "pattern": "Statement,  Statement  吧",
      "examples": [
        {
          "zh": "這個蛋糕太大，你買小的吧。",
          "pinyin": "Zhè ge dàngāo tài dà, nǐ mǎi xiǎo de ba.",
          "en": "This cake is too large, you had better buy the small one."
        },
        {
          "zh": "我也想去，我們一起去吧。",
          "pinyin": "Wǒ yě xiǎng qù, wǒmen yīqǐ qù ba.",
          "en": "I also want to go, let's go together."
        },
        {
          "zh": "我們這個星期六下午兩點半去吧。",
          "pinyin": "Wǒmen zhè ge xīngqí liù xiàwǔ liǎng diǎn bàn qù ba.",
          "en": "Let's go this Saturday at 2:30 p.m."
        }
      ]
    }
  ],
  "reading": {
    "title": "我的房間",
    "titlePinyin": "Wǒ de Fángjiān",
    "titleEn": "My Room",
    "zh": "我的房間裡有一張桌子、一張床跟一張沙發。沙發前面有一台很新的電視機，可是我不常看電視，我最喜歡在沙發上看書。我的書很多，有中文書，也有英文書。我房間的窗戶很大，我的貓喜歡在窗戶旁邊曬太陽。",
    "pinyin": "Wǒ de fángjiān lǐ yǒu yī zhāng zhuōzi, yī zhāng chuáng gēn yī zhāng shāfā. Shāfā qiánmiàn yǒu yī tái hěn xīn de diànshìjī, kěshì wǒ bù cháng kàn diànshì, wǒ zuì xǐhuān zài shāfā shàng kànshū. Wǒ de shū hěn duō, yǒu Zhōngwén shū, yě yǒu Yīngwén shū. Wǒ fángjiān de chuānghù hěn dà, wǒ de māo xǐhuān zài chuānghù pángbiān shài tàiyáng.",
    "en": "There is a table, a bed, and a sofa in my room. There is a new television in front of the sofa, but I do not watch television often. I like to read on the sofa the most. I have many books. I have books in Chinese and in English as well. The window in my room is big. My cat likes to bask in the sun next to it."
  },
  "quiz": [
    {
      "id": "Q1",
      "question": "我的錢包___在房間裡。",
      "questionEn": "My wallet is ___ in the bedroom.",
      "options": [
        "不",
        "沒",
        "沒有",
        "都"
      ],
      "answer": 0
    },
    {
      "id": "Q2",
      "question": "客廳的桌子___有一個錢包。",
      "questionEn": "There is a wallet ___ the table in the living room.",
      "options": [
        "下面",
        "上面",
        "旁邊",
        "裡面"
      ],
      "answer": 1
    },
    {
      "id": "Q3",
      "question": "沙發上面、下面___旁邊都沒有。",
      "questionEn": "On, under, ___ beside the sofa, there is nothing.",
      "options": [
        "和",
        "也",
        "跟",
        "都"
      ],
      "answer": 2
    },
    {
      "id": "Q4",
      "question": "你星期六下午___嗎？",
      "questionEn": "Are you ___ on Saturday afternoon?",
      "options": [
        "有空",
        "沒空",
        "有課",
        "沒課"
      ],
      "answer": 0
    },
    {
      "id": "Q5",
      "question": "我的書在桌子___。",
      "questionEn": "My book is ___ the table.",
      "options": [
        "上面",
        "下面",
        "旁邊",
        "裡面"
      ],
      "answer": 0
    },
    {
      "id": "Q6",
      "question": "台灣___很多好吃的東西。",
      "questionEn": "There ___ a lot of delicious food in Taiwan.",
      "options": [
        "是",
        "有",
        "在",
        "去"
      ],
      "answer": 1
    },
    {
      "id": "Q7",
      "question": "我們一起去___！",
      "questionEn": "Let's go together ___!",
      "options": [
        "嗎",
        "呢",
        "吧",
        "啊"
      ],
      "answer": 2
    },
    {
      "id": "Q8",
      "question": "媽媽在廚房___做飯。",
      "questionEn": "Mom is cooking ___ the kitchen.",
      "options": [
        "上面",
        "下面",
        "裡面",
        "旁邊"
      ],
      "answer": 2
    }
  ]
}

const lesson6 = {
  "id": 6,
  "title": "週末去打網球吧！",
  "titlePinyin": "Zhōumò Qù Dǎ Wǎngqiú Ba!",
  "titleEn": "Let's Play Tennis This Weekend!",
  "titleId": "Akhir Pekan Ayuk Pergi Bermain Tenis!",
  "level": "BAB 6",
  "icon": "🎾",
  "dialogues": [
    {
      "id": "D1",
      "title": "對話一 Dialogue 1",
      "setting": "在海邊 At the beach",
      "lines": [
        {
          "speaker": "國安",
          "pinyin": "Guó'ān",
          "text": "今天天氣不錯，海邊的風景也很漂亮，我想去游泳，妳們想去嗎？",
          "textPinyin": "Jīntiān tiānqì búcuò, hǎibiān de fēngjǐng yě hěn piàoliàng, wǒ xiǎng qù yóuyǒng, nǐmen xiǎng qù ma?",
          "textEn": "The weather is pretty good today, so is the view at the beach. I want to go swimming. Do you want to go?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "我不會游泳。宜文，妳會游泳嗎？",
          "textPinyin": "Wǒ bú huì yóuyǒng. Yíwén, nǐ huì yóuyǒng ma?",
          "textEn": "I can not swim. Yiwen, can you swim?"
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "我會游泳，可是游得不太好。",
          "textPinyin": "Wǒ huì yóuyǒng, kěshì yóu de bú tài hǎo.",
          "textEn": "I can swim, but not very well."
        },
        {
          "speaker": "國安",
          "pinyin": "Guó'ān",
          "text": "我們去跑步，怎麼樣？",
          "textPinyin": "Wǒmen qù pǎobù, zěnmeyàng?",
          "textEn": "How about we go running then?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "我不喜歡跑步，我跑步跑得很慢。",
          "textPinyin": "Wǒ bù xǐhuān pǎobù, wǒ pǎobù pǎo de hěn màn.",
          "textEn": "I do not like to run; I run slowly."
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "打網球怎麼樣？中明說妳的網球打得很好，我們一起去打吧。",
          "textPinyin": "Dǎ wǎngqiú zěnmeyàng? Zhōngmíng shuō nǐ de wǎngqiú dǎ de hěn hǎo, wǒmen yīqǐ qù dǎ ba.",
          "textEn": "How about playing tennis? Zhongming said you play it well. Let's go play it together."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "好啊。",
          "textPinyin": "Hǎo a.",
          "textEn": "Okay."
        }
      ]
    },
    {
      "id": "D2",
      "title": "對話二 Dialogue 2",
      "setting": "下課後 After class",
      "lines": [
        {
          "speaker": "國安",
          "pinyin": "Guó'ān",
          "text": "聽說這部電影很有趣，我們晚上一起去看，好不好？",
          "textPinyin": "Tīngshuō zhè bù diànyǐng hěn yǒuqù, wǒmen wǎnshàng yīqǐ qù kàn, hǎo bù hǎo?",
          "textEn": "I heard that this movie is very interesting. How about we go to see it tonight?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "我覺得有一點兒累，我想回家休息。",
          "textPinyin": "Wǒ juéde yǒu yīdiǎnr lèi, wǒ xiǎng huí jiā xiūxí.",
          "textEn": "I am feeling a bit tired, I want to go home for a rest."
        },
        {
          "speaker": "國安",
          "pinyin": "Guó'ān",
          "text": "你不要常常在家上網、看電腦、玩手機，應該去運動。明天我有空，我們可以一起去騎腳踏車。",
          "textPinyin": "Nǐ búyào chángcháng zài jiā shàngwǎng, kàn diànnǎo, wán shǒujī, yīnggāi qù yùndòng. Míngtiān wǒ yǒukòng, wǒmen kěyǐ yīqǐ qù qí jiǎotàchē.",
          "textEn": "Don't surf the internet, use the computer or play on the cell phone at home often. You should go exercise. I am available tomorrow. We can go ride bikes together."
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "可是我只想聽音樂、睡覺。",
          "textPinyin": "Kěshì wǒ zhǐ xiǎng tīng yīnyuè, shuìjiào.",
          "textEn": "But I only want to listen to music and sleep."
        },
        {
          "speaker": "國安",
          "pinyin": "Guó'ān",
          "text": "後天去呢？",
          "textPinyin": "Hòutiān qù ne?",
          "textEn": "How about the day after tomorrow then?"
        },
        {
          "speaker": "中明",
          "pinyin": "Zhōngmíng",
          "text": "這兩天天氣有點兒冷，我們週末去，好嗎？",
          "textPinyin": "Zhè liǎng tiān tiānqì yǒudiǎnr lěng, wǒmen zhōumò qù, hǎo ma?",
          "textEn": "It is a bit cold those two days. How about we do it this weekend?"
        }
      ]
    }
  ],
  "vocabulary": [
    {
      "id": 1,
      "char": "打",
      "pinyin": "dǎ",
      "pos": "V",
      "en": "to hit; to beat; to play (ball games)",
      "id_": "bermain / memukul"
    },
    {
      "id": 2,
      "char": "網球",
      "pinyin": "wǎngqiú",
      "pos": "N",
      "en": "tennis",
      "id_": "tenis"
    },
    {
      "id": 3,
      "char": "球",
      "pinyin": "qiú",
      "pos": "N",
      "en": "ball",
      "id_": "bola"
    },
    {
      "id": 4,
      "char": "籃球",
      "pinyin": "lánqiú",
      "pos": "N",
      "en": "basketball",
      "id_": "bola basket"
    },
    {
      "id": 5,
      "char": "棒球",
      "pinyin": "bàngqiú",
      "pos": "N",
      "en": "baseball",
      "id_": "bisbol/baseball"
    },
    {
      "id": 6,
      "char": "足球",
      "pinyin": "zúqiú",
      "pos": "N",
      "en": "football; soccer",
      "id_": "sepak bola"
    },
    {
      "id": 7,
      "char": "踢",
      "pinyin": "tī",
      "pos": "V",
      "en": "to kick",
      "id_": "menendang",
      "example": "那個孩子很愛踢足球。",
      "examplePinyin": "Nà ge háizi hěn ài tī zúqiú.",
      "exampleEn": "That kid loves to play soccer very much."
    },
    {
      "id": 8,
      "char": "海邊",
      "pinyin": "hǎibiān",
      "pos": "N",
      "en": "seaside; beach",
      "id_": "pantai"
    },
    {
      "id": 9,
      "char": "海",
      "pinyin": "hǎi",
      "pos": "N",
      "en": "ocean; sea",
      "id_": "laut / samudra"
    },
    {
      "id": 10,
      "char": "山",
      "pinyin": "shān",
      "pos": "N",
      "en": "mountain",
      "id_": "gunung"
    },
    {
      "id": 11,
      "char": "風景",
      "pinyin": "fēngjǐng",
      "pos": "N",
      "en": "scenery; landscapes",
      "id_": "pemandangan",
      "example": "你喜歡山上的風景還是海邊的風景？",
      "examplePinyin": "Nǐ xǐhuān shānshàng de fēngjǐng háishì hǎibiān de fēngjǐng?",
      "exampleEn": "Do you like the scenery on the mountain or on the beach?"
    },
    {
      "id": 12,
      "char": "游泳",
      "pinyin": "yóuyǒng",
      "pos": "V-sep",
      "en": "to swim",
      "id_": "berenang",
      "example": "天氣好熱，我們去游泳，好不好？",
      "examplePinyin": "Tiānqì hǎo rè, wǒmen qù yóuyǒng, hǎo bù hǎo?",
      "exampleEn": "The weather is so hot. How about we go swimming?"
    },
    {
      "id": 13,
      "char": "會",
      "pinyin": "huì",
      "pos": "Vaux",
      "en": "to be able to; can (learned skill)",
      "id_": "bisa / mampu",
      "example": "我不會游泳，你會嗎？",
      "examplePinyin": "Wǒ bú huì yóuyǒng, nǐ huì ma?",
      "exampleEn": "I can not swim, can you?"
    },
    {
      "id": 14,
      "char": "得",
      "pinyin": "de",
      "pos": "Ptc",
      "en": "complement marker",
      "id_": "partikel pelengkap",
      "example": "今天我去朋友家玩得很開心。",
      "examplePinyin": "Jīntiān wǒ qù péngyǒu jiā wán de hěn kāixīn.",
      "exampleEn": "I had fun at my friend's place today."
    },
    {
      "id": 15,
      "char": "跑步",
      "pinyin": "pǎobù",
      "pos": "V-sep",
      "en": "to run; jogging",
      "id_": "lari / berlari"
    },
    {
      "id": 16,
      "char": "跑",
      "pinyin": "pǎo",
      "pos": "Vi",
      "en": "to run",
      "id_": "berlari"
    },
    {
      "id": 17,
      "char": "慢",
      "pinyin": "màn",
      "pos": "Vs",
      "en": "slow; slowly",
      "id_": "lambat",
      "example": "我妹妹跑得很慢。",
      "examplePinyin": "Wǒ mèimei pǎo de hěn màn.",
      "exampleEn": "My younger sister runs very slowly."
    },
    {
      "id": 18,
      "char": "快",
      "pinyin": "kuài",
      "pos": "Vs",
      "en": "fast; quick",
      "id_": "cepat",
      "example": "她看書看得很快。",
      "examplePinyin": "Tā kànshū kàn de hěn kuài.",
      "exampleEn": "She reads very fast."
    },
    {
      "id": 19,
      "char": "說",
      "pinyin": "shuō",
      "pos": "V",
      "en": "to say; to speak; to talk",
      "id_": "berkata / berbicara",
      "example": "我朋友說這家餐廳的咖啡很好喝。",
      "examplePinyin": "Wǒ péngyǒu shuō zhè jiā cāntīng de kāfēi hěn hǎohē.",
      "exampleEn": "My friend said this restaurant's coffee is good."
    },
    {
      "id": 20,
      "char": "說話",
      "pinyin": "shuōhuà",
      "pos": "V-sep",
      "en": "to talk; to speak",
      "id_": "berbicara / bicara"
    },
    {
      "id": 21,
      "char": "電影",
      "pinyin": "diànyǐng",
      "pos": "N",
      "en": "movie (M:部)",
      "id_": "film"
    },
    {
      "id": 22,
      "char": "部",
      "pinyin": "bù",
      "pos": "M",
      "en": "measure word for movies",
      "id_": "kata satuan untuk film"
    },
    {
      "id": 23,
      "char": "電影院",
      "pinyin": "diànyǐngyuàn",
      "pos": "N",
      "en": "movie theater; cinema (M:家)",
      "id_": "bioskop"
    },
    {
      "id": 24,
      "char": "有趣",
      "pinyin": "yǒuqù",
      "pos": "Vs",
      "en": "interesting",
      "id_": "menarik",
      "example": "王老師的課很有趣，每個學生都喜歡她。",
      "examplePinyin": "Wáng lǎoshī de kè hěn yǒuqù, měi ge xuéshēng dōu xǐhuān tā.",
      "exampleEn": "Teacher Wang's class is very interesting; every student likes her."
    },
    {
      "id": 25,
      "char": "覺得",
      "pinyin": "juéde",
      "pos": "Vst",
      "en": "to feel; to think",
      "id_": "merasa / berpikir",
      "example": "我覺得這部電影很有趣，你覺得呢？",
      "examplePinyin": "Wǒ juéde zhè bù diànyǐng hěn yǒuqù, nǐ juéde ne?",
      "exampleEn": "I think this movie is very interesting. What do you think?"
    },
    {
      "id": 26,
      "char": "有(一)點(兒)",
      "pinyin": "yǒu(yī)diǎn(r)",
      "pos": "Adv",
      "en": "a little",
      "id_": "sedikit",
      "example": "那家店的冰淇淋很好吃，可是有點兒貴。",
      "examplePinyin": "Nà jiā diàn de bīngqílín hěn hǎochī, kěshì yǒudiǎnr guì.",
      "exampleEn": "That store has delicious ice cream, but it is a bit expensive."
    },
    {
      "id": 27,
      "char": "休息",
      "pinyin": "xiūxí",
      "pos": "Vi",
      "en": "to take a rest",
      "id_": "beristirahat",
      "example": "我很累，想在房間休息。",
      "examplePinyin": "Wǒ hěn lèi, xiǎng zài fángjiān xiūxí.",
      "exampleEn": "I am tired; I want to take a rest in the room."
    },
    {
      "id": 28,
      "char": "上網",
      "pinyin": "shàngwǎng",
      "pos": "V-sep",
      "en": "to use/surf the internet",
      "id_": "berselancar di internet"
    },
    {
      "id": 29,
      "char": "電腦",
      "pinyin": "diànnǎo",
      "pos": "N",
      "en": "computer (M:部)",
      "id_": "komputer"
    },
    {
      "id": 30,
      "char": "手機",
      "pinyin": "shǒujī",
      "pos": "N",
      "en": "cell phone (M:支)",
      "id_": "ponsel"
    },
    {
      "id": 31,
      "char": "支",
      "pinyin": "zhī",
      "pos": "M",
      "en": "measure word for cell phones",
      "id_": "kata satuan untuk ponsel"
    },
    {
      "id": 32,
      "char": "應該",
      "pinyin": "yīnggāi",
      "pos": "Vaux",
      "en": "should; ought to",
      "id_": "seharusnya",
      "example": "我們應該常常說請、謝謝。",
      "examplePinyin": "Wǒmen yīnggāi chángcháng shuō qǐng, xièxie.",
      "exampleEn": "We should say 'please', 'thank you' often."
    },
    {
      "id": 33,
      "char": "運動",
      "pinyin": "yùndòng",
      "pos": "Vi",
      "en": "to exercise",
      "id_": "berolahraga"
    },
    {
      "id": 34,
      "char": "可以",
      "pinyin": "kěyǐ",
      "pos": "Vaux",
      "en": "can; could (suggestion/permission)",
      "id_": "boleh / bisa",
      "example": "她很喜歡花，你可以送她一些漂亮的花。",
      "examplePinyin": "Tā hěn xǐhuān huā, nǐ kěyǐ sòng tā yīxiē piàoliàng de huā.",
      "exampleEn": "She likes flowers very much. You can give her some beautiful flowers."
    },
    {
      "id": 35,
      "char": "騎",
      "pinyin": "qí",
      "pos": "V",
      "en": "to ride",
      "id_": "mengendarai (sepeda, motor, kuda)"
    },
    {
      "id": 36,
      "char": "腳踏車/自行車",
      "pinyin": "jiǎotàchē/zìxíngchē",
      "pos": "N",
      "en": "bicycle; bike (M:部/輛)",
      "id_": "sepeda"
    },
    {
      "id": 37,
      "char": "輛",
      "pinyin": "liàng",
      "pos": "M",
      "en": "measure word for vehicles",
      "id_": "kata satuan untuk kendaraan"
    },
    {
      "id": 38,
      "char": "只",
      "pinyin": "zhǐ",
      "pos": "Adv",
      "en": "only; just",
      "id_": "hanya",
      "example": "我現在不餓，只想吃一點兒水果。",
      "examplePinyin": "Wǒ xiànzài bú è, zhǐ xiǎng chī yīdiǎnr shuǐguǒ.",
      "exampleEn": "I am not hungry now, I just want some fruit."
    },
    {
      "id": 39,
      "char": "後天",
      "pinyin": "hòutiān",
      "pos": "N",
      "en": "the day after tomorrow",
      "id_": "lusa"
    },
    {
      "id": 40,
      "char": "前天",
      "pinyin": "qiántiān",
      "pos": "N",
      "en": "the day before yesterday",
      "id_": "kemarin dulu"
    }
  ],
  "phrases": [
    {
      "zh": "聽說",
      "pinyin": "tīngshuō",
      "en": "to hear of; I heard that",
      "id_": "mendengar (kata orang)"
    },
    {
      "zh": "不要",
      "pinyin": "búyào",
      "en": "Don't... (imperative)",
      "id_": "jangan"
    }
  ],
  "grammar": [
    {
      "id": "G1",
      "title": "I. Expressing Acquired Skills with 會",
      "explanation": "會 indicates skills acquired through learning.",
      "pattern": "S  (不)會  V(O)",
      "examples": [
        {
          "zh": "我會游泳。",
          "pinyin": "Wǒ huì yóuyǒng.",
          "en": "I can swim."
        },
        {
          "zh": "我不會打棒球。",
          "pinyin": "Wǒ bú huì dǎ bàngqiú.",
          "en": "I cannot play baseball."
        },
        {
          "zh": "你會不會做飯？我會做飯。",
          "pinyin": "Nǐ huì bú huì zuòfàn? Wǒ huì zuòfàn.",
          "en": "Can you cook? I can cook."
        }
      ]
    },
    {
      "id": "G2",
      "title": "II. Complement Marker 得 — Basic",
      "explanation": "得 follows a verb and introduces the complement expressing the result or state of the action.",
      "pattern": "S  V  得  (A) Vs",
      "examples": [
        {
          "zh": "他跑得很快。",
          "pinyin": "Tā pǎo de hěn kuài.",
          "en": "He runs very fast."
        },
        {
          "zh": "你做得很好。",
          "pinyin": "Nǐ zuò de hěn hǎo.",
          "en": "You do very well."
        },
        {
          "zh": "我每天都睡得很好。",
          "pinyin": "Wǒ měi tiān dōu shuì de hěn hǎo.",
          "en": "I sleep very well every day."
        }
      ]
    },
    {
      "id": "G3",
      "title": "III. Complement Marker 得 — S-V-O as Topic",
      "explanation": "When the verb has an object, the V-O is placed as the topic, then V 得 Vs follows.",
      "pattern": "S  V+O  V  得  (A) Vs",
      "examples": [
        {
          "zh": "我妹妹吃飯吃得很慢。",
          "pinyin": "Wǒ mèimei chīfàn chī de hěn màn.",
          "en": "My younger sister eats very slowly."
        },
        {
          "zh": "你跑步跑得快嗎？我跑步跑得很快。",
          "pinyin": "Nǐ pǎobù pǎo de kuài ma? Wǒ pǎobù pǎo de hěn kuài.",
          "en": "Do you run fast? I run very fast."
        },
        {
          "zh": "你游泳游得怎麼樣？我游泳游得不太好。",
          "pinyin": "Nǐ yóuyǒng yóu de zěnmeyàng? Wǒ yóuyǒng yóu de bú tài hǎo.",
          "en": "How well do you swim? I don't swim very well."
        }
      ]
    },
    {
      "id": "G4",
      "title": "IV. 有(一)點(兒) as an Adverb",
      "explanation": "有(一)點(兒) is used as an adverb to express slightly/a little, modifying the Vs that follows it.",
      "pattern": "S  有(一)點(兒)  Vs",
      "examples": [
        {
          "zh": "天氣有一點兒冷。",
          "pinyin": "Tiānqì yǒu yīdiǎnr lěng.",
          "en": "The weather is a little cold."
        },
        {
          "zh": "我有點兒餓。",
          "pinyin": "Wǒ yǒudiǎnr è.",
          "en": "I am a little hungry."
        },
        {
          "zh": "一杯咖啡一百八十塊錢，我覺得有點兒貴。",
          "pinyin": "Yī bēi kāfēi yī bǎi bāshí kuài qián, wǒ juéde yǒudiǎnr guì.",
          "en": "A cup of coffee is 180 dollars, I think it is a bit expensive."
        }
      ]
    },
    {
      "id": "G5",
      "title": "V. Vaux 可以 — Suggestions and Permission",
      "explanation": "可以 is used to give suggestions or express permission. Negated with 不可以.",
      "pattern": "S  可以  V(O)  /  S  不可以  V(O)",
      "examples": [
        {
          "zh": "你可以送她一件紅色的新衣服。",
          "pinyin": "Nǐ kěyǐ sòng tā yī jiàn hóngsè de xīn yīfu.",
          "en": "You can give her a new red piece of clothing."
        },
        {
          "zh": "媽媽，我可以吃冰淇淋嗎？太冷了，不可以。",
          "pinyin": "Māma, wǒ kěyǐ chī bīngqílín ma? Tài lěng le, bù kěyǐ.",
          "en": "Mom, can I eat ice cream? It is too cold, you cannot."
        },
        {
          "zh": "我們可不可以在捷運上吃東西？不可以，也不可以喝飲料。",
          "pinyin": "Wǒmen kě bù kěyǐ zài jiéyùn shàng chī dōngxi? Bù kěyǐ, yě bù kěyǐ hē yǐnliào.",
          "en": "Can we eat on the MRT? No, and you cannot drink beverages either."
        }
      ]
    }
  ],
  "reading": {
    "title": "友美做什麼運動？",
    "titlePinyin": "Yǒuměi Zuò Shénme Yùndòng?",
    "titleEn": "What Sports Does Youmei Do?",
    "zh": "友美很喜歡運動。她會游泳，也會打網球，可是她游泳游得不太好，網球打得很好。她每個週末都去打網球，有時候也去騎腳踏車。她覺得運動很有趣，也很健康。她說：「你應該多運動！」",
    "pinyin": "Yǒuměi hěn xǐhuān yùndòng. Tā huì yóuyǒng, yě huì dǎ wǎngqiú, kěshì tā yóuyǒng yóu de bú tài hǎo, wǎngqiú dǎ de hěn hǎo. Tā měi ge zhōumò dōu qù dǎ wǎngqiú, yǒu shíhòu yě qù qí jiǎotàchē. Tā juéde yùndòng hěn yǒuqù, yě hěn jiànkāng. Tā shuō: 'Nǐ yīnggāi duō yùndòng!'",
    "en": "Youmei likes sports very much. She can swim and play tennis, but she does not swim very well; she plays tennis very well. She goes to play tennis every weekend, and sometimes rides a bicycle too. She thinks sports are interesting and healthy. She says: 'You should exercise more!'"
  },
  "quiz": [
    {
      "id": "Q1",
      "question": "我不___游泳。",
      "questionEn": "I cannot swim.",
      "options": [
        "是",
        "有",
        "會",
        "去"
      ],
      "answer": 2
    },
    {
      "id": "Q2",
      "question": "我跑步跑___很慢。",
      "questionEn": "I run very slowly.",
      "options": [
        "很",
        "得",
        "也",
        "都"
      ],
      "answer": 1
    },
    {
      "id": "Q3",
      "question": "你___不___做飯？",
      "questionEn": "Can you cook?",
      "options": [
        "會/會",
        "是/是",
        "有/有",
        "去/去"
      ],
      "answer": 0
    },
    {
      "id": "Q4",
      "question": "我___有一點兒累，想回家休息。",
      "questionEn": "I am feeling a bit tired, I want to go home for a rest.",
      "options": [
        "覺得",
        "知道",
        "說",
        "想"
      ],
      "answer": 0
    },
    {
      "id": "Q5",
      "question": "你___去運動，不要常常在家玩手機。",
      "questionEn": "You ___ go exercise, don't always play on your phone at home.",
      "options": [
        "可以",
        "應該",
        "會",
        "想"
      ],
      "answer": 1
    },
    {
      "id": "Q6",
      "question": "我們可以一起去___腳踏車。",
      "questionEn": "We can go ___ bikes together.",
      "options": [
        "打",
        "踢",
        "騎",
        "游"
      ],
      "answer": 2
    },
    {
      "id": "Q7",
      "question": "這部電影很___，我們去看吧！",
      "questionEn": "This movie is very ___, let's go watch it!",
      "options": [
        "有趣",
        "有空",
        "有錢",
        "有課"
      ],
      "answer": 0
    },
    {
      "id": "Q8",
      "question": "我___想聽音樂、睡覺。",
      "questionEn": "I ___ want to listen to music and sleep.",
      "options": [
        "都",
        "也",
        "只",
        "最"
      ],
      "answer": 2
    }
  ]
}

const lesson7 = {
  "id": 7,
  "title": "怎麼到飯店去？",
  "titlePinyin": "Zěnme Dào Fàndiàn Qù?",
  "titleEn": "How Do We Get to the Hotel?",
  "titleId": "Bagaimana Cara Pergi ke Hotel?",
  "level": "BAB 7",
  "icon": "🗺️",
  "dialogues": [
    {
      "id": "D1",
      "title": "對話一 Dialogue 1",
      "setting": "學校的下課休息時間 Break time at school",
      "lines": [
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "元真，我們明天幾點去找妳的韓國朋友？",
          "textPinyin": "Yuánzhēn, wǒmen míngtiān jǐ diǎn qù zhǎo nǐ de Hánguó péngyǒu?",
          "textEn": "Yuanzhen, what time are we going to meet up with your Korean friends tomorrow?"
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "我們下午四點要到天美飯店，她在那裡等我們。",
          "textPinyin": "Wǒmen xiàwǔ sì diǎn yào dào Tiānměi Fàndiàn, tā zài nàlǐ děng wǒmen.",
          "textEn": "We have to arrive at Tianmei Hotel at 4 in the afternoon. She will wait for us there."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "我們要怎麼去？坐捷運還是坐公車？",
          "textPinyin": "Wǒmen yào zěnme qù? Zuò jiéyùn háishì zuò gōngchē?",
          "textEn": "How do we get there? By MRT or bus?"
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "聽說那家飯店不遠，我想我們可以從學校走路去。",
          "textPinyin": "Tīngshuō nà jiā fàndiàn bù yuǎn, wǒ xiǎng wǒmen kěyǐ cóng xuéxiào zǒulù qù.",
          "textEn": "I heard that the hotel is not far; I think we can go there from the school on foot."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "可是我不知道怎麼走，妳知道嗎？",
          "textPinyin": "Kěshì wǒ bù zhīdào zěnme zǒu, nǐ zhīdào ma?",
          "textEn": "But I don't know how to get there, do you?"
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "我也不知道。我們可以先上網看地圖。",
          "textPinyin": "Wǒ yě bù zhīdào. Wǒmen kěyǐ xiān shàngwǎng kàn dìtú.",
          "textEn": "I don't know either. We can check the map online first."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "啊！上課了！我們先上課吧。",
          "textPinyin": "Ā! Shàngkè le! Wǒmen xiān shàngkè ba.",
          "textEn": "Ah! The class has started! Let's go to class now."
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "好。",
          "textPinyin": "Hǎo.",
          "textEn": "Okay."
        }
      ]
    },
    {
      "id": "D2",
      "title": "對話二 Dialogue 2",
      "setting": "下課了，元真和友美一起看地圖 After class, looking at the map",
      "lines": [
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "友美，妳看，天美飯店在大學路。我現在知道怎麼走了。",
          "textPinyin": "Yǒuměi, nǐ kàn, Tiānměi Fàndiàn zài Dàxué Lù. Wǒ xiànzài zhīdào zěnme zǒu le.",
          "textEn": "Look, Youmei. Tianmei Hotel is on Daxue Road. Now I know how to get there."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "啊！天美飯店在這裡！我知道這個地方，附近有郵局跟超級市場。",
          "textPinyin": "Ā! Tiānměi Fàndiàn zài zhèlǐ! Wǒ zhīdào zhè ge dìfāng, fùjìn yǒu yóujú gēn chāojíshìchǎng.",
          "textEn": "Ah! So here is Tianmei Hotel! I know this place. There is a post office and a supermarket nearby."
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "我想走路去一定沒問題。",
          "textPinyin": "Wǒ xiǎng zǒulù qù yīdìng méi wèntí.",
          "textEn": "I think it will certainly be okay going there on foot."
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "可是我覺得那裡有點兒遠，走路去太累了。",
          "textPinyin": "Kěshì wǒ juéde nàlǐ yǒudiǎnr yuǎn, zǒulù qù tài lèi le.",
          "textEn": "But I think it's a bit far. It's too tiring to get there on foot."
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "妳想怎麼去？",
          "textPinyin": "Nǐ xiǎng zěnme qù?",
          "textEn": "How do you want to get there?"
        },
        {
          "speaker": "友美",
          "pinyin": "Yǒuměi",
          "text": "坐捷運又方便又舒服，我們可以坐捷運。",
          "textPinyin": "Zuò jiéyùn yòu fāngbiàn yòu shūfu, wǒmen kěyǐ zuò jiéyùn.",
          "textEn": "Taking the MRT is convenient and comfortable. We can take the MRT."
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "好，我們明天坐捷運去吧。",
          "textPinyin": "Hǎo, wǒmen míngtiān zuò jiéyùn qù ba.",
          "textEn": "Ok, let's take the MRT to get there tomorrow."
        }
      ]
    }
  ],
  "vocabulary": [
    {
      "id": 1,
      "char": "怎麼",
      "pinyin": "zěnme",
      "pos": "Adv",
      "en": "how",
      "id_": "bagaimana",
      "example": "這首歌怎麼唱？",
      "examplePinyin": "Zhè shǒu gē zěnme chàng?",
      "exampleEn": "How do you sing this song?"
    },
    {
      "id": 2,
      "char": "到",
      "pinyin": "dào",
      "pos": "Prep",
      "en": "to (destination)",
      "id_": "ke (tujuan)",
      "example": "我要到他家去。",
      "examplePinyin": "Wǒ yào dào tā jiā qù.",
      "exampleEn": "I am going to his place."
    },
    {
      "id": 3,
      "char": "飯店",
      "pinyin": "fàndiàn",
      "pos": "N",
      "en": "hotel (M:家)",
      "id_": "hotel"
    },
    {
      "id": 4,
      "char": "旅館",
      "pinyin": "lǚguǎn",
      "pos": "N",
      "en": "inn; hotel (M:家)",
      "id_": "penginapan; hotel"
    },
    {
      "id": 5,
      "char": "找",
      "pinyin": "zhǎo",
      "pos": "V",
      "en": "to visit; to see (a person)",
      "id_": "mengunjungi; menemui",
      "example": "我今天想找朋友去吃飯。",
      "examplePinyin": "Wǒ jīntiān xiǎng zhǎo péngyǒu qù chīfàn.",
      "exampleEn": "I want to visit my friends and have a meal with them today."
    },
    {
      "id": 6,
      "char": "韓國",
      "pinyin": "Hánguó",
      "pos": "N",
      "en": "Korea",
      "id_": "Korea"
    },
    {
      "id": 7,
      "char": "到",
      "pinyin": "dào",
      "pos": "V",
      "en": "to arrive (at a place)",
      "id_": "tiba; sampai",
      "example": "我每天早上八點半到學校。",
      "examplePinyin": "Wǒ měi tiān zǎoshàng bā diǎn bàn dào xuéxiào.",
      "exampleEn": "I arrive at the school at 8:30 in the morning every day."
    },
    {
      "id": 8,
      "char": "等",
      "pinyin": "děng",
      "pos": "V",
      "en": "to wait for",
      "id_": "menunggu",
      "example": "我的朋友在那家旅館前面等我。",
      "examplePinyin": "Wǒ de péngyǒu zài nà jiā lǚguǎn qiánmiàn děng wǒ.",
      "exampleEn": "My friend is waiting for me in front of the inn."
    },
    {
      "id": 9,
      "char": "坐",
      "pinyin": "zuò",
      "pos": "V",
      "en": "to take (transportation)",
      "id_": "naik (transportasi)"
    },
    {
      "id": 10,
      "char": "捷運/地鐵",
      "pinyin": "jiéyùn/dìtiě",
      "pos": "N",
      "en": "MRT; metro; subway",
      "id_": "MRT; metro; kereta bawah tanah"
    },
    {
      "id": 11,
      "char": "公共汽車/公車",
      "pinyin": "gōnggòngqìchē/gōngchē",
      "pos": "N",
      "en": "bus (M:部/輛)",
      "id_": "bus"
    },
    {
      "id": 12,
      "char": "車(子)/汽車",
      "pinyin": "chē(zi)/qìchē",
      "pos": "N",
      "en": "automobile; car (M:輛)",
      "id_": "mobil"
    },
    {
      "id": 13,
      "char": "計程車",
      "pinyin": "jìchéngchē",
      "pos": "N",
      "en": "taxi (M:輛)",
      "id_": "taksi"
    },
    {
      "id": 14,
      "char": "火車",
      "pinyin": "huǒchē",
      "pos": "N",
      "en": "train",
      "id_": "kereta api"
    },
    {
      "id": 15,
      "char": "上車",
      "pinyin": "shàngchē",
      "pos": "V-sep",
      "en": "to get on a bus; to get in a car",
      "id_": "naik bus/mobil"
    },
    {
      "id": 16,
      "char": "下車",
      "pinyin": "xiàchē",
      "pos": "V-sep",
      "en": "to get off a bus; to get out of a car",
      "id_": "turun bus/mobil"
    },
    {
      "id": 17,
      "char": "遠",
      "pinyin": "yuǎn",
      "pos": "Vs",
      "en": "far",
      "id_": "jauh",
      "example": "他家有點兒遠，我們可以坐捷運去嗎？",
      "examplePinyin": "Tā jiā yǒudiǎnr yuǎn, wǒmen kěyǐ zuò jiéyùn qù ma?",
      "exampleEn": "His house is a bit far. Can we get there by MRT?"
    },
    {
      "id": 18,
      "char": "近",
      "pinyin": "jìn",
      "pos": "Vs",
      "en": "near",
      "id_": "dekat"
    },
    {
      "id": 19,
      "char": "想",
      "pinyin": "xiǎng",
      "pos": "Vst",
      "en": "to think",
      "id_": "berpikir",
      "example": "他很喜歡喝茶，我想你可以送他一些台灣茶。",
      "examplePinyin": "Tā hěn xǐhuān hē chá, wǒ xiǎng nǐ kěyǐ sòng tā yīxiē Táiwān chá.",
      "exampleEn": "He likes drinking tea very much. I think you can give him some Taiwan tea."
    },
    {
      "id": 20,
      "char": "從",
      "pinyin": "cóng",
      "pos": "Prep",
      "en": "from",
      "id_": "dari",
      "example": "他要從他家走路去學校。",
      "examplePinyin": "Tā yào cóng tā jiā zǒulù qù xuéxiào.",
      "exampleEn": "He is going to walk to school from his house."
    },
    {
      "id": 21,
      "char": "走路",
      "pinyin": "zǒulù",
      "pos": "V-sep",
      "en": "to walk (on foot)",
      "id_": "berjalan kaki"
    },
    {
      "id": 22,
      "char": "走",
      "pinyin": "zǒu",
      "pos": "Vi",
      "en": "to walk",
      "id_": "berjalan"
    },
    {
      "id": 23,
      "char": "先",
      "pinyin": "xiān",
      "pos": "Adv",
      "en": "first; in advance",
      "id_": "pertama; terlebih dahulu",
      "example": "我很餓，我們可以先吃飯嗎？",
      "examplePinyin": "Wǒ hěn è, wǒmen kěyǐ xiān chīfàn ma?",
      "exampleEn": "I am very hungry. Can we eat first?"
    },
    {
      "id": 24,
      "char": "地圖",
      "pinyin": "dìtú",
      "pos": "N",
      "en": "map (M:張)",
      "id_": "peta"
    },
    {
      "id": 25,
      "char": "錶/手錶",
      "pinyin": "biǎo/shǒubiǎo",
      "pos": "N",
      "en": "watch (M:個)",
      "id_": "jam tangan"
    },
    {
      "id": 26,
      "char": "了",
      "pinyin": "le",
      "pos": "Ptc",
      "en": "indicating changed situations",
      "id_": "partikel perubahan situasi",
      "example": "我累了，不想走了。",
      "examplePinyin": "Wǒ lèi le, bù xiǎng zǒu le.",
      "exampleEn": "I am tired. I do not want to walk anymore."
    },
    {
      "id": 27,
      "char": "路/馬路",
      "pinyin": "lù/mǎlù",
      "pos": "N",
      "en": "road (M:條)",
      "id_": "jalan"
    },
    {
      "id": 28,
      "char": "條",
      "pinyin": "tiáo",
      "pos": "M",
      "en": "measure word for roads, fish, rivers",
      "id_": "kata satuan untuk jalan, ikan, sungai"
    },
    {
      "id": 29,
      "char": "街",
      "pinyin": "jiē",
      "pos": "N",
      "en": "street (M:條)",
      "id_": "jalan (kecil)"
    },
    {
      "id": 30,
      "char": "地方",
      "pinyin": "dìfāng",
      "pos": "N",
      "en": "place",
      "id_": "tempat",
      "example": "這個地方好漂亮，我好喜歡。",
      "examplePinyin": "Zhè ge dìfāng hǎo piàoliàng, wǒ hǎo xǐhuān.",
      "exampleEn": "The place is beautiful; I like it very much."
    },
    {
      "id": 31,
      "char": "附近",
      "pinyin": "fùjìn",
      "pos": "N",
      "en": "vicinity; nearby",
      "id_": "sekitar; dekat sini",
      "example": "學校附近有很多飲料店。",
      "examplePinyin": "Xuéxiào fùjìn yǒu hěn duō yǐnliào diàn.",
      "exampleEn": "There are many beverage stores near the school."
    },
    {
      "id": 32,
      "char": "郵局",
      "pinyin": "yóujú",
      "pos": "N",
      "en": "post office (M:家/間)",
      "id_": "kantor pos"
    },
    {
      "id": 33,
      "char": "超級市場/超市",
      "pinyin": "chāojíshìchǎng/chāoshì",
      "pos": "N",
      "en": "supermarket (M:家)",
      "id_": "supermarket"
    },
    {
      "id": 34,
      "char": "一定",
      "pinyin": "yīdìng",
      "pos": "Adv",
      "en": "surely; certainly; definitely",
      "id_": "pasti; tentu saja",
      "example": "我明天有空，一定可以去。",
      "examplePinyin": "Wǒ míngtiān yǒukòng, yīdìng kěyǐ qù.",
      "exampleEn": "I am available tomorrow, so I definitely can go there."
    },
    {
      "id": 35,
      "char": "又",
      "pinyin": "yòu",
      "pos": "Adv",
      "en": "both...and...",
      "id_": "baik...maupun...",
      "example": "這種巧克力冰淇淋又便宜又好吃。",
      "examplePinyin": "Zhè zhǒng qiǎokèlì bīngqílín yòu piányí yòu hǎochī.",
      "exampleEn": "This chocolate ice cream is both inexpensive and delicious."
    },
    {
      "id": 36,
      "char": "方便",
      "pinyin": "fāngbiàn",
      "pos": "Vs",
      "en": "convenient",
      "id_": "nyaman; mudah",
      "example": "我每天坐捷運去上課，我覺得很方便。",
      "examplePinyin": "Wǒ měi tiān zuò jiéyùn qù shàngkè, wǒ juéde hěn fāngbiàn.",
      "exampleEn": "I go to school by MRT every day, I think it is very convenient."
    },
    {
      "id": 37,
      "char": "舒服",
      "pinyin": "shūfu",
      "pos": "Vs",
      "en": "comfortable",
      "id_": "nyaman; enak",
      "example": "今天天氣不冷也不熱，很舒服。",
      "examplePinyin": "Jīntiān tiānqì bù lěng yě bú rè, hěn shūfu.",
      "exampleEn": "The weather is neither hot nor cold today. It is very comfortable."
    },
    {
      "id": 38,
      "char": "線",
      "pinyin": "xiàn",
      "pos": "N",
      "en": "line (M:條)",
      "id_": "jalur; garis",
      "example": "我家附近有兩條捷運線。",
      "examplePinyin": "Wǒ jiā fùjìn yǒu liǎng tiáo jiéyùn xiàn.",
      "exampleEn": "There are two MRT lines near my place."
    },
    {
      "id": 39,
      "char": "藍",
      "pinyin": "lán",
      "pos": "Vs",
      "en": "blue",
      "id_": "biru"
    },
    {
      "id": 40,
      "char": "機場/飛機場",
      "pinyin": "jīchǎng/fēijīchǎng",
      "pos": "N",
      "en": "airport",
      "id_": "bandara"
    },
    {
      "id": 41,
      "char": "開車",
      "pinyin": "kāichē",
      "pos": "V-sep",
      "en": "to drive a car",
      "id_": "mengemudi"
    },
    {
      "id": 42,
      "char": "車站",
      "pinyin": "chēzhàn",
      "pos": "N",
      "en": "bus (or rail) station",
      "id_": "stasiun / halte"
    },
    {
      "id": 43,
      "char": "飛機",
      "pinyin": "fēijī",
      "pos": "N",
      "en": "airplane; aircraft (M:架)",
      "id_": "pesawat terbang"
    },
    {
      "id": 44,
      "char": "架",
      "pinyin": "jià",
      "pos": "M",
      "en": "measure word for airplanes",
      "id_": "kata satuan untuk pesawat"
    },
    {
      "id": 45,
      "char": "飛",
      "pinyin": "fēi",
      "pos": "Vi",
      "en": "to fly",
      "id_": "terbang"
    }
  ],
  "phrases": [
    {
      "zh": "又……又……",
      "pinyin": "yòu...yòu...",
      "en": "both...and...",
      "id_": "baik...maupun..."
    },
    {
      "zh": "一定",
      "pinyin": "yīdìng",
      "en": "definitely; certainly",
      "id_": "pasti; tentu saja"
    }
  ],
  "grammar": [
    {
      "id": "G1",
      "title": "I. Sentences with 從 or/and 到",
      "explanation": "從 (from) and 到 (to) are used to convey someone departing from somewhere or going to somewhere.",
      "pattern": "S  從 PW  來/去  /  S  到 PW  來/去  /  S  從 PW1  到 PW2  來/去",
      "examples": [
        {
          "zh": "你從哪裡來？我從飯店來。",
          "pinyin": "Nǐ cóng nǎlǐ lái? Wǒ cóng fàndiàn lái.",
          "en": "Where do you come from? I come from the hotel."
        },
        {
          "zh": "你到哪裡去？我到咖啡廳去。",
          "pinyin": "Nǐ dào nǎlǐ qù? Wǒ dào kāfēitīng qù.",
          "en": "Where are you going? I am going to the café."
        },
        {
          "zh": "我從我家到學校去上課。",
          "pinyin": "Wǒ cóng wǒ jiā dào xuéxiào qù shàngkè.",
          "en": "I go to school from my home for class."
        }
      ]
    },
    {
      "id": "G2",
      "title": "II. How to Get Around with Transportation",
      "explanation": "This pattern expresses how to get around with transportation or on foot.",
      "pattern": "S  怎麼  來/去  /  S  坐/騎/走路  來/去",
      "examples": [
        {
          "zh": "你們怎麼來？我們騎腳踏車來。",
          "pinyin": "Nǐmen zěnme lái? Wǒmen qí jiǎotàchē lái.",
          "en": "How do you get here? We ride bikes."
        },
        {
          "zh": "你要走路去嗎？我不要走路去，我要坐捷運去。",
          "pinyin": "Nǐ yào zǒulù qù ma? Wǒ bú yào zǒulù qù, wǒ yào zuò jiéyùn qù.",
          "en": "Do you want to walk? I don't want to walk, I want to take the MRT."
        },
        {
          "zh": "他坐公車到學校去嗎？不，他坐計程車到學校去。",
          "pinyin": "Tā zuò gōngchē dào xuéxiào qù ma? Bù, tā zuò jìchéngchē dào xuéxiào qù.",
          "en": "Does he take the bus to school? No, he takes a taxi to school."
        }
      ]
    },
    {
      "id": "G3",
      "title": "III. 了 Indicating Changed Situations",
      "explanation": "了 placed at the end of a sentence expresses a new or changed situation.",
      "pattern": "S  Vs  了  /  S  (Vaux) V  了",
      "examples": [
        {
          "zh": "我餓了，想吃一點東西。",
          "pinyin": "Wǒ è le, xiǎng chī yīdiǎn dōngxi.",
          "en": "I am hungry now, I want to eat something."
        },
        {
          "zh": "公車來了，我們可以上車了。",
          "pinyin": "Gōngchē lái le, wǒmen kěyǐ shàngchē le.",
          "en": "The bus is coming, we can get on now."
        },
        {
          "zh": "上課了，老師來了，我們不可以玩手機了。",
          "pinyin": "Shàngkè le, lǎoshī lái le, wǒmen bù kěyǐ wán shǒujī le.",
          "en": "Class has started, the teacher has come, we cannot play on our phones anymore."
        }
      ]
    },
    {
      "id": "G4",
      "title": "IV. Verb-Objects Serving as Topics",
      "explanation": "Verb-objects can be placed at the beginning of a sentence to serve as a topic.",
      "pattern": "V(O)  Comment",
      "examples": [
        {
          "zh": "坐捷運很方便。",
          "pinyin": "Zuò jiéyùn hěn fāngbiàn.",
          "en": "Taking the MRT is very convenient."
        },
        {
          "zh": "走路去太慢了！",
          "pinyin": "Zǒulù qù tài màn le!",
          "en": "Walking there is too slow!"
        },
        {
          "zh": "跑步、游泳、打網球，我都喜歡。",
          "pinyin": "Pǎobù, yóuyǒng, dǎ wǎngqiú, wǒ dōu xǐhuān.",
          "en": "Running, swimming, playing tennis, I like them all."
        }
      ]
    },
    {
      "id": "G5",
      "title": "V. Sentences with Adverb 又……又……",
      "explanation": "又……又…… is like 'both...and...'. It describes two qualities of the same subject. Cannot be followed by nouns.",
      "pattern": "S  又  Vs/(Vaux)V  又  Vs/(Vaux)V",
      "examples": [
        {
          "zh": "台北的捷運又快又方便。",
          "pinyin": "Táiběi de jiéyùn yòu kuài yòu fāngbiàn.",
          "en": "Taipei MRT is both fast and convenient."
        },
        {
          "zh": "他又會唱歌又會畫畫。",
          "pinyin": "Tā yòu huì chànggē yòu huì huàhuà.",
          "en": "He can both sing and paint."
        },
        {
          "zh": "這種巧克力冰淇淋又便宜又好吃。",
          "pinyin": "Zhè zhǒng qiǎokèlì bīngqílín yòu piányí yòu hǎochī.",
          "en": "This chocolate ice cream is both inexpensive and delicious."
        }
      ]
    }
  ],
  "reading": {
    "title": "從我家坐捷運很方便",
    "titlePinyin": "Cóng Wǒ Jiā Zuò Jiéyùn Hěn Fāngbiàn",
    "titleEn": "It Is Convenient to Take MRT from My Home",
    "zh": "我家附近有三條捷運線，一條紅的、一條綠的和一條藍的。我平常坐紅線去學校上課，週末也坐捷運去運動、看電影。朋友常來找我，他們都覺得坐捷運來我家，又快又方便。從我家到機場也不遠，開車去、坐捷運去都可以。機場附近的風景也很漂亮，我常常去看風景、看飛機。",
    "pinyin": "Wǒ jiā fùjìn yǒu sān tiáo jiéyùn xiàn, yī tiáo hóng de, yī tiáo lǜ de hé yī tiáo lán de. Wǒ píngcháng zuò hóng xiàn qù xuéxiào shàngkè, zhōumò yě zuò jiéyùn qù yùndòng, kàn diànyǐng. Péngyǒu cháng lái zhǎo wǒ, tāmen dōu juéde zuò jiéyùn lái wǒ jiā, yòu kuài yòu fāngbiàn. Cóng wǒ jiā dào jīchǎng yě bù yuǎn, kāichē qù, zuò jiéyùn qù dōu kěyǐ. Jīchǎng fùjìn de fēngjǐng yě hěn piàoliàng, wǒ chángcháng qù kàn fēngjǐng, kàn fēijī.",
    "en": "There are three MRT routes near my place; the red one, the green one and the blue one. I usually go to school by the red one. On weekends I take it to exercise or see a movie as well. My friends often visit me. They all think taking the MRT to my house is both fast and convenient. It is not far from my house to the airport. I can go by car or MRT. The scenery near the airport is beautiful; I often go there to see the view and watch the planes."
  },
  "quiz": [
    {
      "id": "Q1",
      "question": "我們要___去？坐捷運還是坐公車？",
      "questionEn": "How do we get there? By MRT or bus?",
      "options": [
        "什麼",
        "哪裡",
        "怎麼",
        "幾點"
      ],
      "answer": 2
    },
    {
      "id": "Q2",
      "question": "我們可以___學校走路去。",
      "questionEn": "We can walk there ___ school.",
      "options": [
        "到",
        "從",
        "在",
        "去"
      ],
      "answer": 1
    },
    {
      "id": "Q3",
      "question": "她在那裡___我們。",
      "questionEn": "She will ___ for us there.",
      "options": [
        "找",
        "等",
        "看",
        "去"
      ],
      "answer": 1
    },
    {
      "id": "Q4",
      "question": "坐捷運___方便___舒服。",
      "questionEn": "Taking the MRT is ___ convenient ___ comfortable.",
      "options": [
        "很/也",
        "又/又",
        "都/也",
        "也/都"
      ],
      "answer": 1
    },
    {
      "id": "Q5",
      "question": "上課___！我們先上課吧。",
      "questionEn": "Class has started ___! Let's go to class now.",
      "options": [
        "嗎",
        "呢",
        "了",
        "吧"
      ],
      "answer": 2
    },
    {
      "id": "Q6",
      "question": "我家附近有三___捷運線。",
      "questionEn": "There are three ___ MRT lines near my place.",
      "options": [
        "個",
        "條",
        "張",
        "本"
      ],
      "answer": 1
    },
    {
      "id": "Q7",
      "question": "那家飯店不___，我們走路去吧。",
      "questionEn": "That hotel is not ___, let's walk there.",
      "options": [
        "近",
        "遠",
        "大",
        "小"
      ],
      "answer": 1
    },
    {
      "id": "Q8",
      "question": "我___坐紅線去學校上課。",
      "questionEn": "I ___ go to school by the red line.",
      "options": [
        "常常",
        "平常",
        "一定",
        "應該"
      ],
      "answer": 1
    }
  ]
}

const lesson8 = {
  "id": 8,
  "title": "你為什麼不想走路？",
  "titlePinyin": "Nǐ Wèishénme Bù Xiǎng Zǒulù?",
  "titleEn": "Why Don't You Want to Walk?",
  "titleId": "Kenapa Kamu Tidak Mau Jalan Kaki?",
  "level": "BAB 8",
  "icon": "🛍️",
  "dialogues": [
    {
      "id": "D1",
      "title": "對話一 Dialogue 1",
      "setting": "在百貨公司附近 Near the department store",
      "lines": [
        {
          "speaker": "A",
          "pinyin": "A",
          "text": "你為什麼不想走路到學校去？",
          "textPinyin": "Nǐ wèishénme bù xiǎng zǒulù dào xuéxiào qù?",
          "textEn": "Why don't you want to walk to school?"
        },
        {
          "speaker": "B",
          "pinyin": "B",
          "text": "因為學校很遠，所以我不想走路到學校去。",
          "textPinyin": "Yīnwèi xuéxiào hěn yuǎn, suǒyǐ wǒ bù xiǎng zǒulù dào xuéxiào qù.",
          "textEn": "Because school is very far, so I don't want to walk to school."
        },
        {
          "speaker": "A",
          "pinyin": "A",
          "text": "為什麼你的朋友不跟你來？",
          "textPinyin": "Wèishénme nǐ de péngyǒu bù gēn nǐ lái?",
          "textEn": "Why didn't your friend come with you?"
        },
        {
          "speaker": "B",
          "pinyin": "B",
          "text": "因為他很累，所以他要在家休息。",
          "textPinyin": "Yīnwèi tā hěn lèi, suǒyǐ tā yào zài jiā xiūxí.",
          "textEn": "Because he is very tired, so he wants to rest at home."
        },
        {
          "speaker": "A",
          "pinyin": "A",
          "text": "你為什麼今天一定要去百貨公司？",
          "textPinyin": "Nǐ wèishénme jīntiān yīdìng yào qù bǎihuògōngsī?",
          "textEn": "Why do you definitely have to go to the department store today?"
        },
        {
          "speaker": "B",
          "pinyin": "B",
          "text": "因為明天是我弟弟的生日，所以我要去買他的生日禮物。",
          "textPinyin": "Yīnwèi míngtiān shì wǒ dìdi de shēngrì, suǒyǐ wǒ yào qù mǎi tā de shēngrì lǐwù.",
          "textEn": "Because tomorrow is my younger brother's birthday, so I am going to buy his birthday gift."
        }
      ]
    },
    {
      "id": "D2",
      "title": "對話二 Dialogue 2",
      "setting": "在百貨公司 At the department store",
      "lines": [
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "妳看，這條黃色的褲子不錯吧？",
          "textPinyin": "Nǐ kàn, zhè tiáo huángsè de kùzi búcuò ba?",
          "textEn": "Look, these yellow pants are not bad, right?"
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "很好看。這條藍的也很漂亮，藍色是今年很流行的顏色。",
          "textPinyin": "Hěn hǎokàn. Zhè tiáo lán de yě hěn piàoliàng, lánsè shì jīnnián hěn liúxíng de yánsè.",
          "textEn": "Very nice. This blue one is also very beautiful, blue is a very trendy color this year."
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "這兩條我都去穿穿看。",
          "textPinyin": "Zhè liǎng tiáo wǒ dōu qù chuān chuān kàn.",
          "textEn": "I will try on both of these."
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "妳覺得怎麼樣？",
          "textPinyin": "Nǐ juéde zěnmeyàng?",
          "textEn": "What do you think?"
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "都太短，也太小了。",
          "textPinyin": "Dōu tài duǎn, yě tài xiǎo le.",
          "textEn": "Both are too short and too small."
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "沒關係，我們可以下個週末再來看。對了，妳要買鞋子吧？",
          "textPinyin": "Méi guānxi, wǒmen kěyǐ xià ge zhōumò zài lái kàn. Duì le, nǐ yào mǎi xiézi ba?",
          "textEn": "No problem, we can come back next weekend. By the way, you want to buy shoes, right?"
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "是啊，我想買一雙黑色的。",
          "textPinyin": "Shì a, wǒ xiǎng mǎi yī shuāng hēisè de.",
          "textEn": "Yes, I want to buy a black pair."
        },
        {
          "speaker": "元真",
          "pinyin": "Yuánzhēn",
          "text": "鞋子都在一樓，我們到樓下去吧！九點了，百貨公司快要關了。",
          "textPinyin": "Xiézi dōu zài yī lóu, wǒmen dào lóuxià qù ba! Jiǔ diǎn le, bǎihuògōngsī kuài yào guān le.",
          "textEn": "All shoes are on the first floor, let's go downstairs! It is 9 o'clock, the department store is about to close."
        },
        {
          "speaker": "宜文",
          "pinyin": "Yíwén",
          "text": "電梯在哪裡！我們現在去買。",
          "textPinyin": "Diàntī zài nǎlǐ! Wǒmen xiànzài qù mǎi.",
          "textEn": "Where is the elevator! Let's go buy them now."
        }
      ]
    }
  ],
  "vocabulary": [
    {
      "id": 1,
      "char": "為什麼",
      "pinyin": "wèishénme",
      "pos": "Adv",
      "en": "why",
      "id_": "kenapa; mengapa",
      "example": "你為什麼不想走路到學校去？",
      "examplePinyin": "Nǐ wèishénme bù xiǎng zǒulù dào xuéxiào qù?",
      "exampleEn": "Why don't you want to walk to school?"
    },
    {
      "id": 2,
      "char": "因為",
      "pinyin": "yīnwèi",
      "pos": "Conj",
      "en": "because",
      "id_": "karena",
      "example": "因為學校很遠，所以我不想走路去。",
      "examplePinyin": "Yīnwèi xuéxiào hěn yuǎn, suǒyǐ wǒ bù xiǎng zǒulù qù.",
      "exampleEn": "Because school is very far, so I don't want to walk."
    },
    {
      "id": 3,
      "char": "所以",
      "pinyin": "suǒyǐ",
      "pos": "Conj",
      "en": "so; therefore",
      "id_": "jadi; oleh karena itu",
      "example": "因為他很累，所以他要在家休息。",
      "examplePinyin": "Yīnwèi tā hěn lèi, suǒyǐ tā yào zài jiā xiūxí.",
      "exampleEn": "Because he is very tired, so he wants to rest at home."
    },
    {
      "id": 4,
      "char": "百貨公司",
      "pinyin": "bǎihuògōngsī",
      "pos": "N",
      "en": "department store (M:家)",
      "id_": "department store",
      "example": "女生和男生都喜歡去百貨公司買東西。",
      "examplePinyin": "Nǚshēng hé nánshēng dōu xǐhuān qù bǎihuògōngsī mǎi dōngxi.",
      "exampleEn": "Girls and boys all like to shop at department stores."
    },
    {
      "id": 5,
      "char": "年輕",
      "pinyin": "niánqīng",
      "pos": "Vs",
      "en": "young",
      "id_": "muda",
      "example": "很多年輕人喜歡聽流行音樂。",
      "examplePinyin": "Hěn duō niánqīng rén xǐhuān tīng liúxíng yīnyuè.",
      "exampleEn": "Many young people like to listen to pop music."
    },
    {
      "id": 6,
      "char": "老",
      "pinyin": "lǎo",
      "pos": "Vs",
      "en": "old",
      "id_": "tua"
    },
    {
      "id": 7,
      "char": "皮包",
      "pinyin": "píbāo",
      "pos": "N",
      "en": "purse; handbag (M:個)",
      "id_": "tas; dompet",
      "example": "明天我有空，我想去買皮包。",
      "examplePinyin": "Míngtiān wǒ yǒukòng, wǒ xiǎng qù mǎi píbāo.",
      "exampleEn": "I am available tomorrow and I want to go shopping for a purse."
    },
    {
      "id": 8,
      "char": "女生",
      "pinyin": "nǚshēng",
      "pos": "N",
      "en": "girl",
      "id_": "perempuan; cewek"
    },
    {
      "id": 9,
      "char": "男生",
      "pinyin": "nánshēng",
      "pos": "N",
      "en": "boy",
      "id_": "laki-laki; cowok"
    },
    {
      "id": 10,
      "char": "雜誌",
      "pinyin": "zázhì",
      "pos": "N",
      "en": "magazine (M:本)",
      "id_": "majalah"
    },
    {
      "id": 11,
      "char": "舊",
      "pinyin": "jiù",
      "pos": "Vs",
      "en": "old; used",
      "id_": "lama; bekas",
      "example": "這本雜誌有點兒舊，我幫你買一本新的吧。",
      "examplePinyin": "Zhè běn zázhì yǒudiǎnr jiù, wǒ bāng nǐ mǎi yī běn xīn de ba.",
      "exampleEn": "This magazine is a little bit old, let me buy you a new one."
    },
    {
      "id": 12,
      "char": "流行",
      "pinyin": "liúxíng",
      "pos": "Vs",
      "en": "popular; trendy; fashionable",
      "id_": "populer; trendi; modis",
      "example": "藍色是今年很流行的顏色。",
      "examplePinyin": "Lánsè shì jīnnián hěn liúxíng de yánsè.",
      "exampleEn": "Blue is a very trendy color this year."
    },
    {
      "id": 13,
      "char": "今年",
      "pinyin": "jīnnián",
      "pos": "N",
      "en": "this year",
      "id_": "tahun ini"
    },
    {
      "id": 14,
      "char": "褲子",
      "pinyin": "kùzi",
      "pos": "N",
      "en": "pants; trousers (M:條)",
      "id_": "celana (panjang)"
    },
    {
      "id": 15,
      "char": "條",
      "pinyin": "tiáo",
      "pos": "M",
      "en": "measure word for pants, fish, roads",
      "id_": "kata satuan untuk celana, ikan, jalan"
    },
    {
      "id": 16,
      "char": "短",
      "pinyin": "duǎn",
      "pos": "Vs",
      "en": "short (length)",
      "id_": "pendek (panjang)"
    },
    {
      "id": 17,
      "char": "長",
      "pinyin": "cháng",
      "pos": "Vs",
      "en": "long",
      "id_": "panjang"
    },
    {
      "id": 18,
      "char": "鞋子",
      "pinyin": "xiézi",
      "pos": "N",
      "en": "shoes (M:雙)",
      "id_": "sepatu"
    },
    {
      "id": 19,
      "char": "雙",
      "pinyin": "shuāng",
      "pos": "M",
      "en": "measure word for pairs (shoes, socks, etc.)",
      "id_": "kata satuan untuk pasang (sepatu, kaus kaki, dll.)",
      "example": "我想買一雙黑色的鞋子。",
      "examplePinyin": "Wǒ xiǎng mǎi yī shuāng hēisè de xiézi.",
      "exampleEn": "I want to buy a black pair of shoes."
    },
    {
      "id": 20,
      "char": "黑色",
      "pinyin": "hēisè",
      "pos": "N",
      "en": "black color",
      "id_": "warna hitam"
    },
    {
      "id": 21,
      "char": "黑",
      "pinyin": "hēi",
      "pos": "Vs",
      "en": "black",
      "id_": "hitam"
    },
    {
      "id": 22,
      "char": "黃色",
      "pinyin": "huángsè",
      "pos": "N",
      "en": "yellow color",
      "id_": "warna kuning"
    },
    {
      "id": 23,
      "char": "黃",
      "pinyin": "huáng",
      "pos": "Vs",
      "en": "yellow",
      "id_": "kuning"
    },
    {
      "id": 24,
      "char": "樓",
      "pinyin": "lóu",
      "pos": "N/M",
      "en": "floor; storey; building",
      "id_": "lantai; gedung",
      "example": "鞋子都在一樓。",
      "examplePinyin": "Xiézi dōu zài yī lóu.",
      "exampleEn": "All shoes are on the first floor."
    },
    {
      "id": 25,
      "char": "樓下",
      "pinyin": "lóuxià",
      "pos": "N",
      "en": "downstairs",
      "id_": "lantai bawah"
    },
    {
      "id": 26,
      "char": "樓上",
      "pinyin": "lóushàng",
      "pos": "N",
      "en": "upstairs",
      "id_": "lantai atas"
    },
    {
      "id": 27,
      "char": "電梯",
      "pinyin": "diàntī",
      "pos": "N",
      "en": "elevator; lift (M:部/台)",
      "id_": "lift; elevator"
    },
    {
      "id": 28,
      "char": "沒關係",
      "pinyin": "méi guānxi",
      "pos": "Phr",
      "en": "No problem; It doesn't matter",
      "id_": "tidak apa-apa; tidak masalah"
    },
    {
      "id": 29,
      "char": "對了",
      "pinyin": "duì le",
      "pos": "Phr",
      "en": "By the way; That's right",
      "id_": "ngomong-ngomong; oh iya"
    },
    {
      "id": 30,
      "char": "快(要)……了",
      "pinyin": "kuài(yào)...le",
      "pos": "Phr",
      "en": "to be about to; going to happen soon",
      "id_": "akan segera; hampir",
      "example": "百貨公司快要關了。",
      "examplePinyin": "Bǎihuògōngsī kuài yào guān le.",
      "exampleEn": "The department store is about to close."
    },
    {
      "id": 31,
      "char": "關",
      "pinyin": "guān",
      "pos": "V",
      "en": "to close; to shut",
      "id_": "tutup; menutup"
    },
    {
      "id": 32,
      "char": "開",
      "pinyin": "kāi",
      "pos": "V",
      "en": "to open",
      "id_": "buka; membuka"
    },
    {
      "id": 33,
      "char": "比賽",
      "pinyin": "bǐsài",
      "pos": "N",
      "en": "competition; match; game",
      "id_": "pertandingan; kompetisi"
    },
    {
      "id": 34,
      "char": "首",
      "pinyin": "shǒu",
      "pos": "M",
      "en": "measure word for songs",
      "id_": "kata satuan untuk lagu",
      "example": "我只會唱三首中文歌。",
      "examplePinyin": "Wǒ zhǐ huì chàng sān shǒu Zhōngwén gē.",
      "exampleEn": "I can only sing three Chinese songs."
    },
    {
      "id": 35,
      "char": "唱歌",
      "pinyin": "chànggē",
      "pos": "V-sep",
      "en": "to sing (a song)",
      "id_": "bernyanyi"
    },
    {
      "id": 36,
      "char": "歌",
      "pinyin": "gē",
      "pos": "N",
      "en": "song (M:首)",
      "id_": "lagu"
    },
    {
      "id": 37,
      "char": "平常",
      "pinyin": "píngcháng",
      "pos": "Adv",
      "en": "usually; normally",
      "id_": "biasanya; pada umumnya",
      "example": "他平常都坐捷運來上課。",
      "examplePinyin": "Tā píngcháng dōu zuò jiéyùn lái shàngkè.",
      "exampleEn": "He usually takes the MRT to class."
    },
    {
      "id": 38,
      "char": "汽車",
      "pinyin": "qìchē",
      "pos": "N",
      "en": "car; automobile (M:輛)",
      "id_": "mobil"
    },
    {
      "id": 39,
      "char": "書店",
      "pinyin": "shūdiàn",
      "pos": "N",
      "en": "bookstore (M:家)",
      "id_": "toko buku"
    },
    {
      "id": 40,
      "char": "不一定",
      "pinyin": "bù yīdìng",
      "pos": "Adv",
      "en": "not necessarily",
      "id_": "belum tentu; tidak selalu",
      "example": "汽車很貴，他們不一定可以買新車。",
      "examplePinyin": "Qìchē hěn guì, tāmen bù yīdìng kěyǐ mǎi xīn chē.",
      "exampleEn": "Cars are expensive, they cannot necessarily buy a new car."
    },
    {
      "id": 41,
      "char": "跳舞",
      "pinyin": "tiàowǔ",
      "pos": "V-sep",
      "en": "to dance",
      "id_": "menari"
    },
    {
      "id": 42,
      "char": "畫畫",
      "pinyin": "huàhuà",
      "pos": "V-sep",
      "en": "to draw; to paint",
      "id_": "menggambar; melukis"
    },
    {
      "id": 43,
      "char": "興趣",
      "pinyin": "xìngqù",
      "pos": "N",
      "en": "interest; hobby",
      "id_": "hobi; minat",
      "example": "你有什麼興趣？",
      "examplePinyin": "Nǐ yǒu shénme xìngqù?",
      "exampleEn": "What are your interests?"
    },
    {
      "id": 44,
      "char": "真的",
      "pinyin": "zhēn de",
      "pos": "Adv",
      "en": "really; truly",
      "id_": "sungguh; benar-benar"
    },
    {
      "id": 45,
      "char": "學",
      "pinyin": "xué",
      "pos": "V",
      "en": "to learn; to study",
      "id_": "belajar",
      "example": "你為什麼想學中文？",
      "examplePinyin": "Nǐ wèishénme xiǎng xué Zhōngwén?",
      "exampleEn": "Why do you want to learn Chinese?"
    },
    {
      "id": 46,
      "char": "裙子",
      "pinyin": "qúnzi",
      "pos": "N",
      "en": "skirt; dress (M:條)",
      "id_": "rok",
      "example": "她今天穿了一條漂亮的裙子。",
      "examplePinyin": "Tā jīntiān chuān le yī tiáo piàoliàng de qúnzi.",
      "exampleEn": "She wore a beautiful skirt today."
    },
    {
      "id": 47,
      "char": "去年",
      "pinyin": "qùnián",
      "pos": "N",
      "en": "last year",
      "id_": "tahun lalu",
      "example": "去年我去了日本。",
      "examplePinyin": "Qùnián wǒ qù le Rìběn.",
      "exampleEn": "I went to Japan last year."
    },
    {
      "id": 48,
      "char": "年",
      "pinyin": "nián",
      "pos": "N",
      "en": "year",
      "id_": "tahun"
    },
    {
      "id": 49,
      "char": "明年",
      "pinyin": "míngnián",
      "pos": "N",
      "en": "next year",
      "id_": "tahun depan",
      "example": "明年我想去歐洲旅行。",
      "examplePinyin": "Míngnián wǒ xiǎng qù Ōuzhōu lǚxíng.",
      "exampleEn": "Next year I want to travel to Europe."
    },
    {
      "id": 50,
      "char": "牌子",
      "pinyin": "páizi",
      "pos": "N",
      "en": "brand; label (M:個)",
      "id_": "merek",
      "example": "這個牌子的鞋子很有名。",
      "examplePinyin": "Zhège páizi de xiézi hěn yǒumíng.",
      "exampleEn": "This brand of shoes is very famous."
    },
    {
      "id": 51,
      "char": "有名",
      "pinyin": "yǒumíng",
      "pos": "Vs",
      "en": "famous; well-known",
      "id_": "terkenal",
      "example": "這家餐廳很有名。",
      "examplePinyin": "Zhè jiā cāntīng hěn yǒumíng.",
      "exampleEn": "This restaurant is very famous."
    },
    {
      "id": 52,
      "char": "難",
      "pinyin": "nán",
      "pos": "Vs",
      "en": "difficult; hard",
      "id_": "sulit",
      "example": "中文很難，可是很有趣。",
      "examplePinyin": "Zhōngwén hěn nán, kěshì hěn yǒuqù.",
      "exampleEn": "Chinese is difficult, but very interesting."
    },
    {
      "id": 53,
      "char": "容易",
      "pinyin": "róngyì",
      "pos": "Vs",
      "en": "easy",
      "id_": "mudah",
      "example": "這個問題不容易回答。",
      "examplePinyin": "Zhège wèntí bù róngyì huídá.",
      "exampleEn": "This question is not easy to answer."
    },
    {
      "id": 54,
      "char": "最近",
      "pinyin": "zuìjìn",
      "pos": "N",
      "en": "recently; lately",
      "id_": "akhir-akhir ini",
      "example": "你最近好嗎？",
      "examplePinyin": "Nǐ zuìjìn hǎo ma?",
      "exampleEn": "How have you been lately?"
    },
    {
      "id": 55,
      "char": "胖",
      "pinyin": "pàng",
      "pos": "Vs",
      "en": "fat; chubby",
      "id_": "gemuk"
    },
    {
      "id": 56,
      "char": "瘦",
      "pinyin": "shòu",
      "pos": "Vs",
      "en": "thin; slim",
      "id_": "kurus"
    },
    {
      "id": 57,
      "char": "高",
      "pinyin": "gāo",
      "pos": "Vs",
      "en": "tall; high",
      "id_": "tinggi"
    },
    {
      "id": 58,
      "char": "矮",
      "pinyin": "ǎi",
      "pos": "Vs",
      "en": "short (height)",
      "id_": "pendek (tinggi badan)"
    },
    {
      "id": 59,
      "char": "公斤",
      "pinyin": "gōngjīn",
      "pos": "M",
      "en": "kilogram",
      "id_": "kilogram",
      "example": "他的體重是七十公斤。",
      "examplePinyin": "Tā de tǐzhòng shì qīshí gōngjīn.",
      "exampleEn": "His weight is 70 kilograms."
    },
    {
      "id": 60,
      "char": "斤",
      "pinyin": "jīn",
      "pos": "M",
      "en": "jin (0.5 kg; Chinese unit of weight)",
      "id_": "setengah kilogram (0,5 kg)"
    },
    {
      "id": 61,
      "char": "怕",
      "pinyin": "pà",
      "pos": "Vst",
      "en": "to be afraid of; to fear",
      "id_": "takut",
      "example": "我怕走夜路。",
      "examplePinyin": "Wǒ pà zǒu yè lù.",
      "exampleEn": "I am afraid of walking at night."
    },
    {
      "id": 62,
      "char": "跟",
      "pinyin": "gēn",
      "pos": "Prep",
      "en": "with; together with",
      "id_": "dengan; bersama",
      "example": "你要不要跟我一起去？",
      "examplePinyin": "Nǐ yào bú yào gēn wǒ yīqǐ qù?",
      "exampleEn": "Do you want to go together with me?"
    },
    {
      "id": 63,
      "char": "時間",
      "pinyin": "shíjiān",
      "pos": "N",
      "en": "time",
      "id_": "waktu",
      "example": "你有時間嗎？",
      "examplePinyin": "Nǐ yǒu shíjiān ma?",
      "exampleEn": "Do you have time?"
    },
    {
      "id": 64,
      "char": "吧",
      "pinyin": "ba",
      "pos": "Ptc",
      "en": "particle (suggestion / soft question)",
      "id_": "partikel (saran / pertanyaan ringan)",
      "example": "我們走吧！",
      "examplePinyin": "Wǒmen zǒu ba!",
      "exampleEn": "Let's go!"
    },
    {
      "id": 65,
      "char": "襪子",
      "pinyin": "wàzi",
      "pos": "N",
      "en": "socks (M:雙)",
      "id_": "kaus kaki"
    },
    {
      "id": 66,
      "char": "樓梯",
      "pinyin": "lóutī",
      "pos": "N",
      "en": "stairs; staircase",
      "id_": "tangga"
    },
    {
      "id": 67,
      "char": "快",
      "pinyin": "kuài",
      "pos": "Vs",
      "en": "fast; quick; soon",
      "id_": "cepat; sebentar lagi"
    },
    {
      "id": 68,
      "char": "請",
      "pinyin": "qǐng",
      "pos": "V",
      "en": "please; to invite; to treat",
      "id_": "tolong; silakan",
      "example": "請進！",
      "examplePinyin": "Qǐng jìn!",
      "exampleEn": "Please come in!"
    },
    {
      "id": 69,
      "char": "抱歉",
      "pinyin": "bàoqiàn",
      "pos": "Vs",
      "en": "sorry; to feel apologetic",
      "id_": "mohon maaf; meminta maaf",
      "example": "很抱歉，我來晚了。",
      "examplePinyin": "Hěn bàoqiàn, wǒ lái wǎn le.",
      "exampleEn": "I am very sorry, I came late."
    },
    {
      "id": 70,
      "char": "對不起",
      "pinyin": "duìbuqǐ",
      "pos": "Phr",
      "en": "sorry; I am sorry",
      "id_": "maaf",
      "example": "對不起，我不知道。",
      "examplePinyin": "Duìbuqǐ, wǒ bù zhīdào.",
      "exampleEn": "Sorry, I didn't know."
    },
    {
      "id": 71,
      "char": "不好意思",
      "pinyin": "bù hǎoyìsi",
      "pos": "Phr",
      "en": "excuse me; I'm embarrassed; sorry to bother you",
      "id_": "maaf; tidak enak hati; permisi",
      "example": "不好意思，請問廁所在哪裡？",
      "examplePinyin": "Bù hǎoyìsi, qǐngwèn cèsuǒ zài nǎlǐ?",
      "exampleEn": "Excuse me, where is the restroom?"
    }
  ],
  "phrases": [
    {
      "zh": "沒關係",
      "pinyin": "méi guānxi",
      "en": "No problem; It doesn't matter",
      "id_": "tidak apa-apa"
    },
    {
      "zh": "對了",
      "pinyin": "duì le",
      "en": "By the way; That's right",
      "id_": "ngomong-ngomong; oh iya"
    },
    {
      "zh": "快(要)……了",
      "pinyin": "kuài(yào)...le",
      "en": "to be about to (happen)",
      "id_": "akan segera; hampir"
    },
    {
      "zh": "不一定",
      "pinyin": "bù yīdìng",
      "en": "not necessarily",
      "id_": "belum tentu"
    },
    {
      "zh": "對不起",
      "pinyin": "duìbuqǐ",
      "en": "Sorry; I am sorry",
      "id_": "maaf"
    },
    {
      "zh": "不好意思",
      "pinyin": "bù hǎoyìsi",
      "en": "Excuse me; Sorry to bother you",
      "id_": "maaf; permisi; tidak enak hati"
    },
    {
      "zh": "抱歉",
      "pinyin": "bàoqiàn",
      "en": "I'm sorry; I apologize",
      "id_": "mohon maaf"
    }
  ],
  "grammar": [
    {
      "id": "G1",
      "title": "I. Expressing Reason with 因為……所以……",
      "explanation": "因為 (because) introduces the reason, and 所以 (so/therefore) introduces the result. Either part can be omitted when the context is clear.",
      "pattern": "因為  Reason,  所以  Result",
      "examples": [
        {
          "zh": "因為學校很遠，所以我不想走路到學校去。",
          "pinyin": "Yīnwèi xuéxiào hěn yuǎn, suǒyǐ wǒ bù xiǎng zǒulù dào xuéxiào qù.",
          "en": "Because school is very far, so I don't want to walk to school."
        },
        {
          "zh": "因為他很累，所以他要在家休息。",
          "pinyin": "Yīnwèi tā hěn lèi, suǒyǐ tā yào zài jiā xiūxí.",
          "en": "Because he is very tired, so he wants to rest at home."
        },
        {
          "zh": "因為我的錢不多，所以我不常買。",
          "pinyin": "Yīnwèi wǒ de qián bù duō, suǒyǐ wǒ bù cháng mǎi.",
          "en": "Because I don't have much money, so I don't buy often."
        }
      ]
    },
    {
      "id": "G2",
      "title": "II. Asking Reason with 為什麼",
      "explanation": "為什麼 (why) is placed before the verb or at the beginning of the sentence to ask for a reason.",
      "pattern": "S  為什麼  V(O)?  /  為什麼  S  V(O)?",
      "examples": [
        {
          "zh": "你為什麼不想走路到學校去？",
          "pinyin": "Nǐ wèishénme bù xiǎng zǒulù dào xuéxiào qù?",
          "en": "Why don't you want to walk to school?"
        },
        {
          "zh": "為什麼你的朋友不跟你來？",
          "pinyin": "Wèishénme nǐ de péngyǒu bù gēn nǐ lái?",
          "en": "Why didn't your friend come with you?"
        },
        {
          "zh": "你為什麼想學中文？",
          "pinyin": "Nǐ wèishénme xiǎng xué Zhōngwén?",
          "en": "Why do you want to learn Chinese?"
        }
      ]
    },
    {
      "id": "G3",
      "title": "III. V V 看 (to try and see)",
      "explanation": "A mono-syllable action verb is reduplicated and 看 is placed at the end to express trying something out.",
      "pattern": "S  V  V  看",
      "examples": [
        {
          "zh": "我穿穿看。",
          "pinyin": "Wǒ chuān chuān kàn.",
          "en": "I will try it on and see."
        },
        {
          "zh": "你可以先吃吃看。",
          "pinyin": "Nǐ kěyǐ xiān chī chī kàn.",
          "en": "You can try eating it first."
        },
        {
          "zh": "好，我喝喝看。",
          "pinyin": "Hǎo, wǒ hē hē kàn.",
          "en": "Okay, I will try drinking it."
        },
        {
          "zh": "你去客廳找找看。",
          "pinyin": "Nǐ qù kètīng zhǎo zhǎo kàn.",
          "en": "Go look for it in the living room."
        }
      ]
    },
    {
      "id": "G4",
      "title": "IV. 快(要)/要……了 (to be about to)",
      "explanation": "This pattern indicates that the action following 快(要)/要 is about to happen. 了 is always used at the end of the sentence.",
      "pattern": "(S)  快 / 快要 / 要  V(O)  了",
      "examples": [
        {
          "zh": "我們快要上課了。",
          "pinyin": "Wǒmen kuài yào shàngkè le.",
          "en": "Our class is about to start."
        },
        {
          "zh": "火車快要來了。",
          "pinyin": "Huǒchē kuài yào lái le.",
          "en": "The train is about to come."
        },
        {
          "zh": "九點了，百貨公司快要關了。",
          "pinyin": "Jiǔ diǎn le, bǎihuògōngsī kuài yào guān le.",
          "en": "It is 9 o'clock, the department store is about to close."
        },
        {
          "zh": "十月了，冬天快要到了。",
          "pinyin": "Shí yuè le, dōngtiān kuài yào dào le.",
          "en": "It is October, winter is about to arrive."
        }
      ]
    },
    {
      "id": "G5",
      "title": "V. Expressing Supposition with 吧",
      "explanation": "吧 at the end of a statement expresses that the speaker has an assumption but is asking for confirmation.",
      "pattern": "Statement  吧？",
      "examples": [
        {
          "zh": "你要買鞋子吧？",
          "pinyin": "Nǐ yào mǎi xiézi ba?",
          "en": "You want to buy shoes, don't you?"
        },
        {
          "zh": "你會唱中文歌吧？會。可是不多，我只會唱三首。",
          "pinyin": "Nǐ huì chàng Zhōngwén gē ba? Huì. Kěshì bù duō, wǒ zhǐ huì chàng sān shǒu.",
          "en": "You can sing Chinese songs, right? Yes. But not many, I can only sing three."
        },
        {
          "zh": "你現在有空吧？要不要跟我一起去看網球比賽？",
          "pinyin": "Nǐ xiànzài yǒukòng ba? Yào bú yào gēn wǒ yīqǐ qù kàn wǎngqiú bǐsài?",
          "en": "You are free now, right? Do you want to go watch the tennis match with me?"
        }
      ]
    }
  ],
  "reading": {
    "title": "年輕人喜歡新東西",
    "titlePinyin": "Niánqīng Rén Xǐhuān Xīn Dōngxi",
    "titleEn": "Young People Like New Things",
    "zh": "百貨公司裡有很多衣服、鞋子和皮包，都是最新的，所以很多年輕女生喜歡到百貨公司去，漂亮的、流行的衣服，她們都想穿穿看。很多年輕男生愛在書店看汽車雜誌，汽車很貴，他們不一定可以買新車，可是都看得很開心。我覺得有的舊東西很不錯，有的新東西也很有趣，我很喜歡看新車、新衣服，可是因為我的錢不多，所以我不常買。",
    "pinyin": "Bǎihuògōngsī lǐ yǒu hěn duō yīfu, xiézi hé píbāo, dōu shì zuì xīn de, suǒyǐ hěn duō niánqīng nǚshēng xǐhuān dào bǎihuògōngsī qù, piàoliàng de, liúxíng de yīfu, tāmen dōu xiǎng chuān chuān kàn. Hěn duō niánqīng nánshēng ài zài shūdiàn kàn qìchē zázhì, qìchē hěn guì, tāmen bù yīdìng kěyǐ mǎi xīn chē, kěshì dōu kàn de hěn kāixīn. Wǒ juéde yǒude jiù dōngxi hěn búcuò, yǒude xīn dōngxi yě hěn yǒuqù, wǒ hěn xǐhuān kàn xīn chē, xīn yīfu, kěshì yīnwèi wǒ de qián bù duō, suǒyǐ wǒ bù cháng mǎi.",
    "en": "There are many clothes, shoes and purses in the department store, all the latest, so many young girls like to go to the department store. They all want to try on the beautiful and trendy clothes. Many young boys love reading car magazines at the bookstore. Cars are expensive, they cannot necessarily buy a new car, but they all enjoy looking. I think some old things are pretty good, and some new things are also very interesting. I like looking at new cars and new clothes, but because I don't have much money, I don't buy often."
  },
  "quiz": [
    {
      "id": "Q1",
      "question": "你___不想走路到學校去？",
      "questionEn": "___ don't you want to walk to school?",
      "options": [
        "所以",
        "因為",
        "為什麼",
        "怎麼"
      ],
      "answer": 2
    },
    {
      "id": "Q2",
      "question": "___學校很遠，___我不想走路去。",
      "questionEn": "___ school is very far, ___ I don't want to walk.",
      "options": [
        "因為/所以",
        "所以/因為",
        "為什麼/因為",
        "因為/為什麼"
      ],
      "answer": 0
    },
    {
      "id": "Q3",
      "question": "我穿___看。",
      "questionEn": "I will try it on and see.",
      "options": [
        "穿穿",
        "穿一",
        "一穿",
        "穿了"
      ],
      "answer": 0
    },
    {
      "id": "Q4",
      "question": "百貨公司快要___了。",
      "questionEn": "The department store is about to ___.",
      "options": [
        "開",
        "來",
        "關",
        "去"
      ],
      "answer": 2
    },
    {
      "id": "Q5",
      "question": "你要買鞋子___？",
      "questionEn": "You want to buy shoes, ___?",
      "options": [
        "嗎",
        "呢",
        "吧",
        "啊"
      ],
      "answer": 2
    },
    {
      "id": "Q6",
      "question": "我想買一___黑色的鞋子。",
      "questionEn": "I want to buy a ___ pair of black shoes.",
      "options": [
        "個",
        "條",
        "雙",
        "件"
      ],
      "answer": 2
    },
    {
      "id": "Q7",
      "question": "藍色是今年很___的顏色。",
      "questionEn": "Blue is a very ___ color this year.",
      "options": [
        "流行",
        "好看",
        "便宜",
        "新"
      ],
      "answer": 0
    },
    {
      "id": "Q8",
      "question": "___我的錢不多，___我不常買。",
      "questionEn": "___ I don't have much money, ___ I don't buy often.",
      "options": [
        "因為/所以",
        "所以/因為",
        "為什麼/因為",
        "因為/為什麼"
      ],
      "answer": 0
    },
    {
      "id": "Q9",
      "question": "你可以先吃___看。",
      "questionEn": "You can try eating it first.",
      "options": [
        "吃吃",
        "一吃",
        "吃了",
        "吃看"
      ],
      "answer": 0
    },
    {
      "id": "Q10",
      "question": "火車快要___了。",
      "questionEn": "The train is about to ___.",
      "options": [
        "去",
        "走",
        "來",
        "開"
      ],
      "answer": 2
    }
  ]
}

// =============================================================================
// ─── LESSON 9 ─────────────────────────────────────────────────────────────────
// =============================================================================
const lesson9 = {
  id: 9,
  title: '我的中文課',
  titlePinyin: 'Wǒ de Zhōngwén Kè',
  titleEn: 'My Chinese Class',
  titleId: 'Kelas Bahasa Mandarin Saya',
  level: 'BAB 9',
  icon: '📚',

  dialogues: [
    {
      id: 'D1',
      title: '對話一 Dialogue 1',
      setting: '在學校 At school',
      lines: [
        { speaker: '國安', pinyin: 'Guó\'ān', text: '友美，這幾個句子的意思我不太懂，妳可以教我嗎？', textPinyin: 'Yǒuměi, zhè jǐ gè jùzi de yìsi wǒ bú tài dǒng, nǐ kěyǐ jiāo wǒ ma?', textEn: 'Youmei, I don\'t quite understand the meaning of these sentences. Can you teach me?' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '我覺得有點兒難，我也不太懂。', textPinyin: 'Wǒ juéde yǒudiǎnr nán, wǒ yě bú tài dǒng.', textEn: 'I think it\'s a bit difficult. I don\'t quite understand either.' },
        { speaker: '國安', pinyin: 'Guó\'ān', text: '這些句子真的不好學。', textPinyin: 'Zhèxiē jùzi zhēn de bù hǎo xué.', textEn: 'These sentences are really hard to learn.' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '我們可以去問家樂，他非常聰明，我想他懂。', textPinyin: 'Wǒmen kěyǐ qù wèn Jiālè, tā fēicháng cōngmíng, wǒ xiǎng tā dǒng.', textEn: 'We can go ask Jiale. He is very smart; I think he understands.' },
        { speaker: '國安', pinyin: 'Guó\'ān', text: '那麼我們現在去找他。', textPinyin: 'Nàme wǒmen xiànzài qù zhǎo tā.', textEn: 'Then let\'s go find him now.' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '現在他在上書法課，我們四點去吧。', textPinyin: 'Xiànzài tā zài shàng shūfǎ kè, wǒmen sì diǎn qù ba.', textEn: 'He is in calligraphy class right now. Let\'s go at 4 o\'clock.' },
        { speaker: '國安', pinyin: 'Guó\'ān', text: '可是從四點到五點半我要上英文課，六點去，怎麼樣？', textPinyin: 'Kěshì cóng sì diǎn dào wǔ diǎn bàn wǒ yào shàng Yīngwén kè, liù diǎn qù, zěnmeyàng?', textEn: 'But I have English class from 4 to 5:30. How about going at 6?' },
        { speaker: '友美', pinyin: 'Yǒuměi', text: '好。我先回宿舍做功課，再跟你一起去找他。', textPinyin: 'Hǎo. Wǒ xiān huí sùshè zuò gōngkè, zài gēn nǐ yīqǐ qù zhǎo tā.', textEn: 'OK. I\'ll go back to the dorm to do homework first, then go find him with you.' },
      ],
    },
  ],

  vocabulary: [
    { id: 1,  char: '句子',   pinyin: 'jùzi',       pos: 'N',    en: 'sentence (M:個)',          id_: 'kalimat' },
    { id: 2,  char: '意思',   pinyin: 'yìsi',       pos: 'N',    en: 'meaning',                  id_: 'arti; makna' },
    { id: 3,  char: '懂',     pinyin: 'dǒng',       pos: 'V',    en: 'to understand',            id_: 'mengerti; paham' },
    { id: 4,  char: '教',     pinyin: 'jiāo',       pos: 'V',    en: 'to teach',                 id_: 'mengajar; mengajari' },
    { id: 5,  char: '覺得',   pinyin: 'juéde',      pos: 'Vst',  en: 'to feel; to think',        id_: 'merasa; berpikir' },
    { id: 6,  char: '有點兒', pinyin: 'yǒudiǎnr',   pos: 'Adv',  en: 'a little; somewhat',       id_: 'sedikit; agak' },
    { id: 7,  char: '難',     pinyin: 'nán',        pos: 'Vs',   en: 'difficult; hard',          id_: 'sulit; susah' },
    { id: 8,  char: '這些',   pinyin: 'zhèxiē',     pos: 'Det',  en: 'these',                    id_: 'ini (jamak)' },
    { id: 9,  char: '真的',   pinyin: 'zhēn de',    pos: 'Adv',  en: 'really; truly',            id_: 'sungguh; benar-benar' },
    { id: 10, char: '好學',   pinyin: 'hǎo xué',    pos: 'Vs',   en: 'easy to learn',            id_: 'mudah dipelajari' },
    { id: 11, char: '問',     pinyin: 'wèn',        pos: 'V',    en: 'to ask',                   id_: 'bertanya' },
    { id: 12, char: '非常',   pinyin: 'fēicháng',   pos: 'Adv',  en: 'very; extremely',          id_: 'sangat; luar biasa' },
    { id: 13, char: '聰明',   pinyin: 'cōngmíng',   pos: 'Vs',   en: 'smart; clever',            id_: 'pintar; cerdas' },
    { id: 14, char: '想',     pinyin: 'xiǎng',      pos: 'Vaux', en: 'to think; to want to',     id_: 'berpikir; ingin' },
    { id: 15, char: '那麼',   pinyin: 'nàme',       pos: 'Conj', en: 'then; in that case',       id_: 'kalau begitu; maka' },
    { id: 16, char: '找',     pinyin: 'zhǎo',       pos: 'V',    en: 'to look for; to visit',    id_: 'mencari; menemui' },
    { id: 17, char: '書法',   pinyin: 'shūfǎ',      pos: 'N',    en: 'calligraphy',              id_: 'kaligrafi' },
    { id: 18, char: '可是',   pinyin: 'kěshì',      pos: 'Conj', en: 'but; however',             id_: 'tapi; namun' },
    { id: 19, char: '從',     pinyin: 'cóng',       pos: 'Prep', en: 'from',                     id_: 'dari' },
    { id: 20, char: '到',     pinyin: 'dào',        pos: 'Prep', en: 'to; until',                id_: 'ke; sampai' },
    { id: 21, char: '半',     pinyin: 'bàn',        pos: 'N',    en: 'half',                     id_: 'setengah' },
    { id: 22, char: '英文',   pinyin: 'Yīngwén',    pos: 'N',    en: 'English (language)',       id_: 'bahasa Inggris' },
    { id: 23, char: '怎麼樣', pinyin: 'zěnmeyàng',  pos: 'Phr',  en: 'how about it? what do you think?', id_: 'bagaimana? apa pendapatmu?' },
    { id: 24, char: '先',     pinyin: 'xiān',       pos: 'Adv',  en: 'first; before',            id_: 'dulu; pertama-tama' },
    { id: 25, char: '宿舍',   pinyin: 'sùshè',      pos: 'N',    en: 'dormitory (M:棟)',         id_: 'asrama; kos' },
    { id: 26, char: '功課',   pinyin: 'gōngkè',     pos: 'N',    en: 'homework',                 id_: 'pekerjaan rumah; PR' },
    { id: 27, char: '再',     pinyin: 'zài',        pos: 'Adv',  en: 'then; again; afterwards',  id_: 'lalu; kemudian; lagi' },
    { id: 28, char: '一起',   pinyin: 'yīqǐ',       pos: 'Adv',  en: 'together',                 id_: 'bersama-sama' },
    { id: 29, char: '擺脫',   pinyin: 'bǎituō',     pos: 'V',    en: 'to get rid of; to break free from', id_: 'terbebas dari; melepaskan diri', example: '我想擺脫這個壞習慣。', examplePinyin: 'Wǒ xiǎng bǎituō zhège huài xíguàn.', exampleEn: 'I want to get rid of this bad habit.' },
    { id: 30, char: '幹嘛',   pinyin: 'gànma',      pos: 'Phr',  en: 'what are you doing? why? what for?', id_: 'mau ngapain? kenapa? buat apa?', example: '你幹嘛這樣說？', examplePinyin: 'Nǐ gànma zhèyàng shuō?', exampleEn: 'Why do you say that?' },
    { id: 31, char: '在',     pinyin: 'zài',        pos: 'Adv',  en: 'in the process of (ongoing action)', id_: 'sedang (menunjukkan aksi berlangsung)', example: '他在上書法課。', examplePinyin: 'Tā zài shàng shūfǎ kè.', exampleEn: 'He is in calligraphy class.' },
    { id: 32, char: '騎',     pinyin: 'qí',         pos: 'V',    en: 'to ride (bicycle, horse)',          id_: 'mengendarai; naik (sepeda, kuda)', example: '他們在騎腳踏車。', examplePinyin: 'Tāmen zài qí jiǎotàchē.', exampleEn: 'They are riding bicycles.' },
    { id: 33, char: '腳踏車', pinyin: 'jiǎotàchē',  pos: 'N',    en: 'bicycle (M:輛)',                    id_: 'sepeda' },
    { id: 34, char: '運動',   pinyin: 'yùndòng',    pos: 'V/N',  en: 'to exercise; sports',              id_: 'berolahraga; olahraga', example: '你哥哥在做什麼？他在運動。', examplePinyin: 'Nǐ gēgē zài zuò shénme? Tā zài yùndòng.', exampleEn: 'What is your older brother doing? He is exercising.' },
    { id: 35, char: '打籃球', pinyin: 'dǎ lánqiú',  pos: 'V-sep',en: 'to play basketball',               id_: 'bermain basket', example: '他們在打籃球。', examplePinyin: 'Tāmen zài dǎ lánqiú.', exampleEn: 'They are playing basketball.' },
    { id: 36, char: '跳日本舞', pinyin: 'tiào Rìběn wǔ', pos: 'V', en: 'to dance Japanese dance',       id_: 'menari tari Jepang', example: '他們在跳日本舞。', examplePinyin: 'Tāmen zài tiào Rìběn wǔ.', exampleEn: 'They are dancing Japanese dance.' },
    { id: 37, char: '畫畫',   pinyin: 'huàhuà',     pos: 'V-sep',en: 'to draw; to paint',               id_: 'menggambar; melukis', example: '這個孩子在畫畫。', examplePinyin: 'Zhège háizi zài huàhuà.', exampleEn: 'This child is drawing.' },
    { id: 38, char: '春天',   pinyin: 'chūntiān',   pos: 'N',    en: 'spring (season)',                  id_: 'musim semi', example: '這裡的春天是從二月到四月。', examplePinyin: 'Zhèlǐ de chūntiān shì cóng èr yuè dào sì yuè.', exampleEn: 'Spring here is from February to April.' },
    { id: 39, char: '後天',   pinyin: 'hòutiān',    pos: 'N',    en: 'the day after tomorrow',           id_: 'lusa', example: '後天可以嗎？', examplePinyin: 'Hòutiān kěyǐ ma?', exampleEn: 'How about the day after tomorrow?' },
    { id: 40, char: '有空',   pinyin: 'yǒu kòng',   pos: 'V',    en: 'to be free; to have time',         id_: 'ada waktu; tidak sibuk', example: '我明天從早上到晚上都沒有空。', examplePinyin: 'Wǒ míngtiān cóng zǎoshàng dào wǎnshàng dōu méi yǒu kòng.', exampleEn: 'I am not free from morning to night tomorrow.' },
    { id: 41, char: '餐廳',   pinyin: 'cāntīng',    pos: 'N',    en: 'restaurant (M:家)',                 id_: 'restoran', example: '這家餐廳從二月五號到二月二十號休息。', examplePinyin: 'Zhè jiā cāntīng cóng èr yuè wǔ hào dào èr yuè èrshí hào xiūxi.', exampleEn: 'This restaurant is closed from Feb 5 to Feb 20.' },
    { id: 42, char: '休息',   pinyin: 'xiūxi',      pos: 'V',    en: 'to rest; to take a break; closed',  id_: 'istirahat; tutup (toko/restoran)', example: '這家餐廳今天休息。', examplePinyin: 'Zhè jiā cāntīng jīntiān xiūxi.', exampleEn: 'This restaurant is closed today.' },
    { id: 43, char: '棒球',   pinyin: 'bàngqiú',    pos: 'N',    en: 'baseball',                         id_: 'bisbol', example: '棒球比賽的時間是從幾點到幾點？', examplePinyin: 'Bàngqiú bǐsài de shíjiān shì cóng jǐ diǎn dào jǐ diǎn?', exampleEn: 'What time is the baseball game from?' },
    { id: 44, char: '法國',   pinyin: 'Fǎguó',      pos: 'N',    en: 'France',                           id_: 'Prancis', example: '他從2013年到2017年都在法國學畫畫。', examplePinyin: 'Tā cóng 2013 nián dào 2017 nián dōu zài Fǎguó xué huàhuà.', exampleEn: 'He studied painting in France from 2013 to 2017.' },
    { id: 45, char: '飯店',   pinyin: 'fàndiàn',    pos: 'N',    en: 'hotel (M:家)',                      id_: 'hotel', example: '我要怎麼到那家飯店？', examplePinyin: 'Wǒ yào zěnme dào nà jiā fàndiàn?', exampleEn: 'How do I get to that hotel?' },
    { id: 46, char: '捷運',   pinyin: 'jiéyùn',     pos: 'N',    en: 'MRT; metro; subway',               id_: 'MRT; kereta bawah tanah', example: '你要先坐捷運，再坐公車。', examplePinyin: 'Nǐ yào xiān zuò jiéyùn, zài zuò gōngchē.', exampleEn: 'Take the MRT first, then take the bus.' },
    { id: 47, char: '公車',   pinyin: 'gōngchē',    pos: 'N',    en: 'bus (M:輛)',                       id_: 'bus', example: '我每天坐公車去學校。', examplePinyin: 'Wǒ měitiān zuò gōngchē qù xuéxiào.', exampleEn: 'I take the bus to school every day.' },
    { id: 48, char: '東西',   pinyin: 'dōngxi',     pos: 'N',    en: 'thing; stuff; item',               id_: 'barang; sesuatu', example: '我想先去百貨公司買東西。', examplePinyin: 'Wǒ xiǎng xiān qù bǎihuògōngsī mǎi dōngxi.', exampleEn: 'I want to go to the department store to shop first.' },
  ],

  phrases: [
    { zh: '有點兒', pinyin: 'yǒudiǎnr', en: 'a little; somewhat', id_: 'sedikit; agak' },
    { zh: '怎麼樣', pinyin: 'zěnmeyàng', en: 'How about it? What do you think?', id_: 'bagaimana? apa pendapatmu?' },
    { zh: '那麼', pinyin: 'nàme', en: 'Then; In that case', id_: 'kalau begitu' },
  ],

  grammar: [
    {
      id: 'G1',
      title: 'I. "在 V" Indicating Ongoing Actions',
      explanation: '"在 V" indicates the progressive aspect of an action — something is currently happening. It is equivalent to "is/are + V-ing" in English.',
      pattern: 'S  在  V(O)',
      examples: [
        { zh: '他們在打籃球。', pinyin: 'Tāmen zài dǎ lánqiú.', en: 'They are playing basketball.' },
        { zh: '你在做什麼？我在做功課。', pinyin: 'Nǐ zài zuò shénme? Wǒ zài zuò gōngkè.', en: 'What are you doing? I am doing homework.' },
        { zh: '他們在做什麼？他們在騎腳踏車。', pinyin: 'Tāmen zài zuò shénme? Tāmen zài qí jiǎotàchē.', en: 'What are they doing? They are riding bicycles.' },
        { zh: '你哥哥在做什麼？他在運動。', pinyin: 'Nǐ gēgē zài zuò shénme? Tā zài yùndòng.', en: 'What is your older brother doing? He is exercising.' },
        { zh: '現在他在上書法課。', pinyin: 'Xiànzài tā zài shàng shūfǎ kè.', en: 'He is in calligraphy class right now.' },
      ],
    },
    {
      id: 'G2',
      title: 'II. 從……到…… (時間) — Indicating Duration of Time',
      explanation: '從……到…… can be used for a temporal duration of time, meaning "from... to...". It indicates the start and end point of a time period.',
      pattern: '從  Time1  到  Time2',
      examples: [
        { zh: '這裡的春天是從二月到四月。', pinyin: 'Zhèlǐ de chūntiān shì cóng èr yuè dào sì yuè.', en: 'Spring here is from February to April.' },
        { zh: '今天我從上午九點到下午五點都有課。', pinyin: 'Jīntiān wǒ cóng shàngwǔ jiǔ diǎn dào xiàwǔ wǔ diǎn dōu yǒu kè.', en: 'Today I have class from 9 a.m. to 5 p.m.' },
        { zh: '我明天從早上到晚上都沒有空，後天可以嗎？', pinyin: 'Wǒ míngtiān cóng zǎoshàng dào wǎnshàng dōu méi yǒu kòng, hòutiān kěyǐ ma?', en: 'I am not free from morning to night tomorrow. How about the day after tomorrow?' },
        { zh: '可是從四點到五點半我要上英文課。', pinyin: 'Kěshì cóng sì diǎn dào wǔ diǎn bàn wǒ yào shàng Yīngwén kè.', en: 'But I have English class from 4 to 5:30.' },
        { zh: '這家餐廳從二月五號到二月二十號休息。', pinyin: 'Zhè jiā cāntīng cóng èr yuè wǔ hào dào èr yuè èrshí hào xiūxi.', en: 'This restaurant is closed from February 5th to February 20th.' },
        { zh: '棒球的比賽是從一點到四點下午。', pinyin: 'Bàngqiú de bǐsài shì cóng yī diǎn dào sì diǎn xiàwǔ.', en: 'The baseball game is from 1 o\'clock to 4 in the afternoon.' },
        { zh: '他從2013年到2017年都在法國學畫畫。', pinyin: 'Tā cóng 2013 nián dào 2017 nián dōu zài Fǎguó xué huàhuà.', en: 'He studied painting in France from 2013 to 2017.' },
      ],
    },
    {
      id: 'G3',
      title: 'III. 先……再…… — First... Then...',
      explanation: '先 (first/before) and 再 (then/afterwards) are used together to indicate a sequence of actions. 先 introduces the first action, and 再 introduces the next action that follows.',
      pattern: 'S  先  V1(O),  再  V2(O)',
      examples: [
        { zh: '你們兩個人，誰先說？他先說，我再說。', pinyin: 'Nǐmen liǎng gè rén, shéi xiān shuō? Tā xiān shuō, wǒ zài shuō.', en: 'Between the two of you, who speaks first? He speaks first, then I speak.' },
        { zh: '我要怎麼到那家飯店？你要先坐捷運，再坐公車。', pinyin: 'Wǒ yào zěnme dào nà jiā fàndiàn? Nǐ yào xiān zuò jiéyùn, zài zuò gōngchē.', en: 'How do I get to that hotel? You should take the MRT first, then take the bus.' },
        { zh: '我想先去百貨公司買東西，再去朋友家。', pinyin: 'Wǒ xiǎng xiān qù bǎihuògōngsī mǎi dōngxi, zài qù péngyǒu jiā.', en: 'I want to go to the department store to shop first, then go to my friend\'s place.' },
        { zh: '好。我先回宿舍做功課，再跟你一起去找他。', pinyin: 'Hǎo. Wǒ xiān huí sùshè zuò gōngkè, zài gēn nǐ yīqǐ qù zhǎo tā.', en: 'OK. I\'ll go back to the dorm to do homework first, then go find him with you.' },
      ],
    },
  ],

  reading: {
    title: '我的中文課',
    titlePinyin: 'Wǒ de Zhōngwén Kè',
    titleEn: 'My Chinese Class',
    zh: '（coming soon）',
    pinyin: '（coming soon）',
    en: '（coming soon）',
  },

  quiz: [
    { id: 'Q1', question: '這幾個句子的___我不太懂。', questionEn: 'I don\'t quite understand the ___ of these sentences.', options: ['意思', '句子', '功課', '書法'], answer: 0 },
    { id: 'Q2', question: '我___有點兒難，我也不太懂。', questionEn: 'I ___ it\'s a bit difficult. I don\'t understand either.', options: ['想', '覺得', '懂', '教'], answer: 1 },
    { id: 'Q3', question: '他___聰明，我想他懂。', questionEn: 'He is ___ smart; I think he understands.', options: ['很', '有點兒', '非常', '真的'], answer: 2 },
    { id: 'Q4', question: '___我們現在去找他。', questionEn: '___ let\'s go find him now.', options: ['可是', '那麼', '從', '再'], answer: 1 },
    { id: 'Q5', question: '從四點___五點半我要上英文課。', questionEn: 'I have English class from 4 ___ 5:30.', options: ['和', '跟', '到', '在'], answer: 2 },
    { id: 'Q6', question: '我___回宿舍做功課，再去找他。', questionEn: 'I\'ll ___ go back to the dorm to do homework, then go find him.', options: ['再', '先', '也', '都'], answer: 1 },
    { id: 'Q7', question: '現在他在上___課。', questionEn: 'He is in ___ class right now.', options: ['英文', '書法', '中文', '數學'], answer: 1 },
    { id: 'Q8', question: '六點去，___？', questionEn: 'How about going at 6, ___?', options: ['好嗎', '怎麼樣', '對不對', '可以嗎'], answer: 1 },
  ],
}

// =============================================================================
// Export
// =============================================================================
export const lessons = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9]
export default lessons
