// Lesson 8 Data — 第八課 (Ke 8)

export const dialogue = {
  title: '對話二 Dialogue 2',
  setting: '（在百貨公司） At the Department Store',
  lines: [
    { speaker: '宜文', text: '妳看，這條黃色的褲子不錯吧？', translation: 'Look, these yellow pants are pretty nice, right?' },
    { speaker: '元真', text: '很好看。這條藍的也很漂亮，藍色是今年很流行的顏色。', translation: 'Very nice. These blue ones are also beautiful — blue is a very trendy color this year.' },
    { speaker: '宜文', text: '這兩條我都去穿穿看。', translation: 'I\'ll try on both of them.' },
    { speaker: '', text: '（五分鐘以後 Five minutes later）', translation: '' },
    { speaker: '元真', text: '妳覺得怎麼樣？', translation: 'What do you think?' },
    { speaker: '宜文', text: '都太短，也太小了。', translation: 'Both are too short and too small.' },
    { speaker: '元真', text: '沒關係，我們可以下個週末再來看。對了，妳要買鞋子吧？', translation: 'No worries, we can come back next weekend. By the way, you want to buy shoes, right?' },
    { speaker: '宜文', text: '是啊，我想買一雙黑色的。', translation: 'Yes, I want to buy a black pair.' },
    { speaker: '元真', text: '鞋子都在一樓，我們到樓下去吧！九點了，百貨公司快要關了。', translation: 'The shoes are all on the first floor, let\'s go downstairs! It\'s 9 o\'clock, the department store is about to close.' },
    { speaker: '宜文', text: '電梯在那裡！我們現在去買。', translation: 'The elevator is over there! Let\'s go buy them now.' },
  ],
}

export const vocabulary = [
  { word: '年輕', pinyin: 'niánqīng', pos: 'Vs', meaning: 'young', example: '很多年輕人喜歡聽流行音樂。', exampleTranslation: 'Many young people like to listen to pop music.' },
  { word: '老', pinyin: 'lǎo', pos: 'Vs', meaning: 'old', example: '', exampleTranslation: '' },
  { word: '皮包', pinyin: 'píbāo', pos: 'N', meaning: 'wallet; purse (M: 個)', example: '明天我有空，我想去買皮包。', exampleTranslation: 'I\'m free tomorrow, I want to go buy a purse.' },
  { word: '女生', pinyin: 'nǚshēng', pos: 'N', meaning: 'girl', example: '女生和男生都喜歡去百貨公司買東西。', exampleTranslation: 'Both girls and boys like to go shopping at the department store.' },
  { word: '男生', pinyin: 'nánshēng', pos: 'N', meaning: 'boy', example: '', exampleTranslation: '' },
  { word: '雜誌', pinyin: 'zázhì', pos: 'N', meaning: 'magazine (M: 本)', example: '這本雜誌有點兒舊，我幫你買一本新的吧。', exampleTranslation: 'This magazine is a bit old, let me buy you a new one.' },
  { word: '舊', pinyin: 'jiù', pos: 'Vs', meaning: 'old; used', example: '', exampleTranslation: '' },
]

export const reading = {
  title: '年輕人喜歡新東西',
  titleTranslation: 'Young People Like New Things',
  text: '百貨公司裡有很多衣服、鞋子和皮包，都是最新的，所以很多年輕女生喜歡到百貨公司去，漂亮的、流行的衣服，她們都想穿穿看。很多年輕男生愛在書店看汽車雜誌，汽車很貴，他們不一定可以買新車，可是都看得很高興。我覺得有的舊東西很不錯，有的新東西也很有趣，我很喜歡看新車、新衣服，可是因為我的錢不多，所以我不常買。',
  translation: 'Department stores have many clothes, shoes, and purses — all the latest styles — so many young women like to go to department stores. They all want to try on beautiful, trendy clothes. Many young men love to browse car magazines at bookstores. Cars are expensive and they may not be able to buy a new one, but they all enjoy looking. I think some old things are quite good, and some new things are also very interesting. I love looking at new cars and new clothes, but because I don\'t have much money, I don\'t buy them often.',
}

export const grammar = [
  {
    id: 'g1',
    pattern: '因為...所以... (Because... therefore...)',
    explanation: 'This structure connects a cause (因為 yīnwèi) with its result (所以 suǒyǐ). Both clauses can appear in the same sentence.',
    examples: [
      { zh: '因為學校很遠，所以我不想走路到學校去。', en: 'Because school is far, I don\'t want to walk there.' },
      { zh: '因為他很累，所以他在家休息。', en: 'Because he is tired, he is resting at home.' },
      { zh: '因為明天是我弟弟的生日，所以我要去買他的生日禮物。', en: 'Because tomorrow is my brother\'s birthday, I need to go buy his gift.' },
    ],
  },
  {
    id: 'g2',
    pattern: 'V V 看 — To try and see',
    explanation: 'Repeat a verb before 看 (kàn) to express trying something out. Pattern: S + V + V + 看',
    examples: [
      { zh: '我穿穿看。', en: 'I\'ll try it on and see.' },
      { zh: '你可以先吃吃看。', en: 'You can try eating it first.' },
      { zh: '好，我喝喝看。', en: 'OK, I\'ll give it a try.' },
      { zh: '你去客廳找找看。', en: 'Go look for it in the living room.' },
    ],
  },
  {
    id: 'g3',
    pattern: '快（要）/ 要......了 — To be about to',
    explanation: 'Use 快要...了 or 要...了 to express that something is about to happen. Pattern: S + 快要 + V(O) + 了',
    examples: [
      { zh: '我們快要上課了。', en: 'Our class is about to start.' },
      { zh: '火車快要來了。', en: 'The train is about to arrive.' },
      { zh: '十月了，冬天快要到了。', en: 'It\'s October, winter is almost here.' },
      { zh: '現在八點五十分了，圖書館快開了。', en: 'It\'s 8:50 now, the library is about to open.' },
    ],
  },
]
