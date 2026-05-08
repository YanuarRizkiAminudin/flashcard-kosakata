import re

# English translations for all cards
# Format: 'char': 'english meaning'
EN = {
  # L1
  '大家':'everyone','好':'good; fine; OK','我':'I; me','姓':'to be surnamed','叫':'to be called; named',
  '是':'to be (is/am/are)','日本':'Japan','台灣':'Taiwan','朋友':'friend','愛':'to love',
  '吃':'to eat','水果':'fruit','水':'water','喝':'to drink','茶':'tea',
  '珍珠奶茶':'bubble milk tea','奶茶':'milk tea','謝謝':'thank you','不客氣':'you are welcome',
  '哪國人':'person from which country','喜歡':'to like','忙':'busy','累':'tired',
  '他':'he; him','她':'she; her','你':'you','你呢':'how about you?',
  '新':'new','同學':'classmate','誰':'who','很':'very','可愛':'cute; lovely',
  '哪':'which','國':'country','妳':'you (female)','知道':'to know','嗎':'question particle (yes/no)',
  '漂亮':'pretty; beautiful','什麼':'what','名字':'first name; full name','姓名':'full name (surname + given name)',
  '呢':'question particle (how about...)','印尼':'Indonesia','你好':'hello','請問':'excuse me; may I ask',
  '早安':'good morning','午安':'good afternoon','晚安':'good night','自我介紹':'self-introduction',
  '中國':'China','美國':'USA','英國':'UK','韓國':'Korea',
  # L2
  '幾':'how many; how much','點/點鐘':"o'clock",'現在':'now','去':'to go','學校':'school',
  '媽媽':'mom','爸爸':'dad','孩子':'child; children','沒':'not (negates 有)','課':'class; lesson',
  '今天':'today','星期':'week; day of the week','月':'month','號':'date (measure word)','日':'day',
  '星期天':'Sunday','早上':'morning','上午':'morning (formal)','有':'to have','圖書館':'library',
  '中午':'noon','回':'to return','家':'home; house','家人':'family members','下午':'afternoon',
  '下課':'class dismissed','上課':'to attend class','分':'minute','明天':'tomorrow','昨天':'yesterday',
  '週末':'weekend','要':'to want (to do)','來':'to come','啊':'interjection (surprise)','的':'possessive particle',
  '生日':'birthday','快樂':'happy','晚上':'evening; night','問題':'question; problem','做':'to do; to make',
  '歲':'measure word for age','起床':'to get up','午飯':'lunch','早飯':'breakfast','晚飯':'dinner',
  '飯':'cooked rice; meal','做飯':'to cook','睡覺':'to sleep; go to bed',
  # L3
  '禮物':'gift; present','買':'to buy','錢':'money','多少':'how much; how many','塊':'dollar (measure word)',
  '便宜':'cheap; inexpensive','貴':'expensive','賣':'to sell','件':'measure word for clothes',
  '衣服':'clothes; clothing','顏色':'color','紅色':'red color','紅':'red','藍色':'blue color','藍':'blue',
  '白色':'white color','白':'white','綠色':'green color','綠':'green','粉紅色':'pink color',
  '大':'big; large','小':'small; little','不錯':'not bad; pretty good','覺得':'to feel; to think',
  '太':'too; excessively','了':'sentence-final particle','試穿':'to try on (clothes)','穿':'to wear; to put on',
  '送':'to give as a gift; to send','哥哥':'older brother','弟弟':'younger brother',
  '姐姐':'older sister','妹妹':'younger sister','兄弟姐妹':'siblings',
  '幾個':'how many (pieces)','個':'general measure word','本':'measure word for books',
  '杯':'measure word for cups','碗':'measure word for bowls',
  # L4
  '咖啡':'coffee','還是':'or (in questions)','要不要':'do you want to or not','點':'to order (food/drink)',
  '熱':'hot','冰':'iced; cold','加':'to add','糖':'sugar','奶':'milk','杯子':'cup; glass',
  '瓶':'bottle (measure word)','罐':'can (measure word)','果汁':'fruit juice','可樂':'cola',
  '茶葉蛋':'tea egg','便當':'bento box; lunch box','好吃':'delicious; tasty','好喝':'tasty (drinks)',
  '難吃':'bad-tasting (food)','難喝':'bad-tasting (drinks)','一起':'together',
  '請客':'to treat someone; to pay the bill','付錢':'to pay','找錢':'to give change',
  '收據':'receipt','菜單':'menu','服務生':'waiter; server','老闆':'boss; owner',
  # L5
  '錢包':'wallet; purse','在哪裡':'where is it','找':'to look for; to find','放':'to put; to place',
  '桌子':'table','椅子':'chair','上面':'on top; above','下面':'below; under','裡面':'inside',
  '外面':'outside','旁邊':'beside; next to','前面':'in front','後面':'behind; in back',
  '左邊':'left side','右邊':'right side','中間':'in the middle','房間':'room','客廳':'living room',
  '廚房':'kitchen','浴室':'bathroom','臥室':'bedroom','書房':'study room',
  '冰箱':'refrigerator','電視':'television','電腦':'computer','手機':'cell phone; mobile phone',
  '鑰匙':'key','眼鏡':'glasses; spectacles','書包':'school bag; backpack','雨傘':'umbrella',
  '帽子':'hat; cap','皮夾':'wallet','沙發':'sofa; couch',
  # L6
  '網球':'tennis','打球':'to play ball','運動':'to exercise; sports','游泳':'to swim',
  '跑步':'to run; jogging','爬山':'to climb a mountain; hiking','騎腳踏車':'to ride a bicycle',
  '打籃球':'to play basketball','踢足球':'to play soccer','打棒球':'to play baseball',
  '打羽毛球':'to play badminton','打高爾夫球':'to play golf','滑雪':'to ski',
  '健身房':'gym; fitness center','操場':'sports field; playground','球場':'court; field',
  '游泳池':'swimming pool','每天':'every day','每週':'every week','每個月':'every month',
  '常常':'often; frequently','有時候':'sometimes','很少':'rarely; seldom','從不':'never',
  '一起':'together','跟':'with; together with','對':'correct; right','錯':'wrong; incorrect',
  # L7
  '交通':'transportation; traffic','怎麼去':'how to get there','坐':'to sit; to take (transport)',
  '搭':'to take (transport)','騎':'to ride (bicycle/motorcycle)','開車':'to drive a car',
  '走路':'to walk','捷運':'MRT; metro; subway','公車':'bus','計程車':'taxi',
  '火車':'train','高鐵':'high-speed rail','飛機':'airplane','船':'boat; ship',
  '機車':'motorcycle; scooter','腳踏車':'bicycle','站':'station; stop','路':'road; street',
  '左轉':'turn left','右轉':'turn right','直走':'go straight','過馬路':'cross the road',
  '紅綠燈':'traffic light','斑馬線':'crosswalk; zebra crossing','地圖':'map',
  '遠':'far','近':'near; close','快':'fast; quick','慢':'slow',
  # L8
  '為什麼':'why','因為':'because','所以':'so; therefore','百貨公司':'department store',
  '年輕':'young','老':'old','皮包':'purse; handbag','女生':'girl','男生':'boy',
  '雜誌':'magazine','舊':'old; used','流行':'popular; trendy','今年':'this year',
  '褲子':'pants; trousers','條':'measure word for pants/roads/fish','短':'short (length)',
  '長':'long','鞋子':'shoes','雙':'measure word for pairs','黑色':'black color','黑':'black',
  '黃色':'yellow color','黃':'yellow','樓':'floor; storey','樓下':'downstairs','樓上':'upstairs',
  '電梯':'elevator; lift','沒關係':"no problem; it doesn't matter",'對了':'by the way; that\'s right',
  '快(要)……了':'to be about to (happen)','關':'to close; to shut','開':'to open',
  '比賽':'competition; match','首':'measure word for songs','唱歌':'to sing',
  '歌':'song','平常':'usually; normally','汽車':'car; automobile','書店':'bookstore',
  '不一定':'not necessarily','跳舞':'to dance','畫畫':'to draw; to paint',
  '興趣':'interest; hobby','真的':'really; truly','學':'to learn; to study',
  '裙子':'skirt; dress','去年':'last year','年':'year','明年':'next year',
  '牌子':'brand; label','有名':'famous; well-known','難':'difficult; hard',
  '容易':'easy','最近':'recently; lately','胖':'fat; chubby','瘦':'thin; slim',
  '高':'tall; high','矮':'short (height)','公斤':'kilogram','斤':'jin (0.5 kg)',
  '怕':'to be afraid of','跟':'with; together with','時間':'time','吧':'particle (suggestion)',
  '襪子':'socks','樓梯':'stairs; staircase','快':'fast; soon','請':'please; to invite',
  '抱歉':'sorry; I apologize','對不起':'sorry; I am sorry','不好意思':'excuse me; sorry to bother you',
  # L9
  '句子':'sentence','意思':'meaning','懂':'to understand','教':'to teach',
  '覺得':'to feel; to think','有點兒':'a little; somewhat','這些':'these',
  '好學':'easy to learn','問':'to ask','非常':'very; extremely','聰明':'smart; clever',
  '想':'to think; to want to','那麼':'then; in that case','找':'to look for; to visit',
  '書法':'calligraphy','可是':'but; however','從':'from','到':'to; until','半':'half',
  '英文':'English (language)','怎麼樣':'how about it? what do you think?',
  '先':'first; before','宿舍':'dormitory','功課':'homework','再':'then; again; afterwards',
  '擺脫':'to get rid of; to break free from','幹嘛':'what are you doing? why?',
  '在':'in the process of (ongoing)','騎':'to ride (bicycle/horse)',
  '腳踏車':'bicycle','運動':'to exercise; sports',
  '跳日本舞':'to dance Japanese dance','春天':'spring (season)',
  '後天':'the day after tomorrow','有空':'to be free; to have time',
  '餐廳':'restaurant','休息':'to rest; closed (shop)','棒球':'baseball',
  '法國':'France','飯店':'hotel','東西':'thing; stuff; item',
  '下個週末':'next weekend',
}

content = open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', encoding='utf-8').read()

# Add English field 'e' to each card
def add_english(m):
    card = m.group(0)
    char = re.search(r"z:'([^']+)'", card)
    if not char:
        return card
    z = char.group(1)
    en = EN.get(z, '')
    if 'e:' not in card and en:
        card = card.rstrip('}') + f",e:'{en}'" + '}'
    return card

new_content = re.sub(r"\{z:'[^']+',p:'[^']+',i:'[^']+',l:'L\d+'\}", add_english, content)

# Count how many got English
orig = len(re.findall(r"e:'", content))
new = len(re.findall(r"e:'", new_content))
print(f'English added: {new - orig} cards (was {orig}, now {new})')

open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', 'w', encoding='utf-8').write(new_content)
print('Done!')
