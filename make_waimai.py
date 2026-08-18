# -*- coding: utf-8 -*-
import re

src_file = "public/games/flashcard_lengkap_intact/ayi_video.html"
dst_file = "public/games/flashcard_lengkap_intact/waimai_video.html"

with open(src_file, encoding="utf-8") as f:
    tmpl = f.read()

# Change title, h1, colors, sub
tmpl = tmpl.replace("阿姨！· Video Viral Mandarin", "外賣員 · Video Sosial Mandarin")
tmpl = tmpl.replace("😂 阿姨！· Video Viral", "🛵 外賣員 · Video Sosial")
tmpl = tmpl.replace("Video viral 阿姨 · 25 Vocab + 26 Kalimat", "Video sosial 外賣員 · 25 Vocab + 25 Kalimat")
tmpl = tmpl.replace("#dc2626", "#d97706")
tmpl = tmpl.replace("#db2777", "#f59e0b")
tmpl = tmpl.replace("rgba(220,38,38", "rgba(217,119,6")
tmpl = tmpl.replace("fee2e2", "fef3e2")
tmpl = tmpl.replace("fca5a5", "fcd34d")
tmpl = tmpl.replace("fff1f2", "fffbeb")
tmpl = tmpl.replace("b91c1c", "b45309")
tmpl = tmpl.replace("#9d174d", "#92400e")

V = [
'{t:"VOCAB",zh:"外賣",py:"wàimài",id:"pesan antar / delivery makanan",en:"food delivery / takeout"}',
'{t:"VOCAB",zh:"外賣員",py:"wàimài yuán",id:"kurir pesan antar / ojol makanan",en:"delivery rider / food delivery person"}',
'{t:"VOCAB",zh:"投訴",py:"tóusù",id:"mengadukan / melaporkan / komplain",en:"to complain / to file a complaint"}',
'{t:"VOCAB",zh:"辱罵",py:"rǔmà",id:"memaki / mencerca / menghina",en:"to insult / to verbally abuse"}',
'{t:"VOCAB",zh:"體諒",py:"tǐliàng",id:"memahami / berempati / maklum",en:"to understand / to show empathy"}',
'{t:"VOCAB",zh:"道歉",py:"dàoqiàn",id:"meminta maaf",en:"to apologize"}',
'{t:"VOCAB",zh:"指手畫腳",py:"zhǐ shǒu huà jiǎo",id:"main perintah / bertindak sewenang-wenang",en:"to boss people around"}',
'{t:"VOCAB",zh:"低三下四",py:"dī sān xià sì",id:"merendahkan diri / hina diri",en:"to be servile / to humble oneself excessively"}',
'{t:"VOCAB",zh:"退錢",py:"tuì qián",id:"mengembalikan uang / refund",en:"to refund money"}',
'{t:"VOCAB",zh:"微波爐",py:"wēibōlú",id:"microwave",en:"microwave oven"}',
'{t:"VOCAB",zh:"尊重",py:"zūnzhòng",id:"menghormati / menghargai",en:"to respect"}',
'{t:"VOCAB",zh:"理解",py:"lǐjiě",id:"memahami / pengertian",en:"to understand / understanding"}',
'{t:"VOCAB",zh:"不容易",py:"bù róngyì",id:"tidak mudah / susah payah",en:"not easy / difficult"}',
'{t:"VOCAB",zh:"擔待",py:"dāndài",id:"memaklumi / mengampuni",en:"to be understanding / to excuse"}',
'{t:"VOCAB",zh:"路人",py:"lùrén",id:"orang yang lewat / orang asing di jalan",en:"passerby / bystander"}',
'{t:"VOCAB",zh:"幹活",py:"gàn huó",id:"bekerja / melakukan pekerjaan",en:"to work / to do a job"}',
'{t:"VOCAB",zh:"發火",py:"fā huǒ",id:"marah-marah / naik pitam",en:"to lose one\'s temper / to get angry"}',
'{t:"VOCAB",zh:"服務行業",py:"fúwù hángyè",id:"industri jasa / sektor pelayanan",en:"service industry"}',
'{t:"VOCAB",zh:"下大雪",py:"xià dà xuě",id:"turun salju lebat",en:"heavy snowfall / snowing heavily"}',
'{t:"VOCAB",zh:"按時",py:"àn shí",id:"tepat waktu / sesuai jadwal",en:"on time / punctually"}',
'{t:"VOCAB",zh:"路不好走",py:"lù bù hǎo zǒu",id:"jalannya sulit dilalui",en:"the road is hard to travel"}',
'{t:"VOCAB",zh:"算了",py:"suàn le",id:"sudahlah / lupakan saja",en:"forget it / let it go / never mind"}',
'{t:"VOCAB",zh:"原諒",py:"yuánliàng",id:"memaafkan",en:"to forgive"}',
'{t:"VOCAB",zh:"善良",py:"shànliáng",id:"baik hati / penuh kebaikan",en:"kind-hearted / good-natured"}',
'{t:"VOCAB",zh:"大冬天",py:"dà dōngtiān",id:"musim dingin yang keras",en:"deep winter / harsh winter days"}',
'{t:"SENT",zh:"今天下著大雪，路不好走。",py:"Jīntiān xià zhe dà xuě, lù bù hǎo zǒu.",id:"Hari ini turun salju lebat, jalannya sulit dilalui.",en:"It is snowing heavily today and the road conditions are difficult."}',
'{t:"SENT",zh:"幹不好就別幹了好不好。",py:"Gàn bù hǎo jiù bié gàn le hǎo bu hǎo.",id:"Kalau tidak bisa kerja dengan baik, jangan kerja saja.",en:"If you cannot do it well, just stop doing it."}',
'{t:"SENT",zh:"人家送個外賣，你發這麼大火幹什麼？",py:"Rén jiā sòng ge wàimài, nǐ fā zhème dà huǒ gàn shénme?",id:"Orang hanya mengantarkan makanan, kenapa kamu marah sampai seperti itu?",en:"He is just delivering food, why are you getting so angry?"}',
'{t:"SENT",zh:"誰幹活容易？",py:"Shéi gàn huó róngyì?",id:"Siapa yang kerjanya mudah?",en:"Whose work is easy?"}',
'{t:"SENT",zh:"不是說你花了錢就可以指手畫腳了。",py:"Bù shì shuō nǐ huā le qián jiù kěyǐ zhǐ shǒu huà jiǎo le.",id:"Bukan berarti karena kamu bayar kamu bisa main perintah sesuka hati.",en:"Just because you paid does not mean you can boss people around."}',
'{t:"SENT",zh:"下雪天你也體諒一下。",py:"Xià xuě tiān nǐ yě tǐliàng yīxià.",id:"Di hari salju ini tolong juga sedikit berempati.",en:"On a snowy day like this, please show a little understanding."}',
'{t:"SENT",zh:"他們送外賣也不容易。",py:"Tāmen sòng wàimài yě bù róngyì.",id:"Mereka bekerja sebagai kurir makanan juga tidak mudah.",en:"It is also not easy for them to do food delivery."}',
'{t:"SENT",zh:"人家跟你道歉了，你還指著人家鼻子在這兒罵。",py:"Rén jiā gēn nǐ dàoqiàn le, nǐ hái zhǐ zhe rén jiā bízi zài zhèr mà.",id:"Orang sudah minta maaf, tapi kamu masih menunjuk hidungnya dan memaki.",en:"He already apologized to you, yet you are still pointing at him and scolding."}',
'{t:"SENT",zh:"你不用這麼低三下四的。",py:"Nǐ bù yòng zhème dī sān xià sì de.",id:"Kamu tidak perlu merendahkan diri seperti itu.",en:"You do not need to humble yourself so much."}',
'{t:"SENT",zh:"早晨點的，兩個半小時送到，你一個電話可能他的工作就沒了。",py:"Zǎochén diǎn de, liǎng ge bàn xiǎoshí sòng dào, nǐ yī ge diànhuà kěnéng tā de gōngzuò jiù méi le.",id:"Pesan dari pagi, dua setengah jam baru sampai. Satu telepon darimu mungkin dia langsung kehilangan pekerjaan.",en:"Ordered in the morning, took two and a half hours. One call from you and he might lose his job."}',
'{t:"SENT",zh:"都不容易是吧，大冬天的。",py:"Dōu bù róngyì shì ba, dà dōngtiān de.",id:"Semuanya tidak mudah ya, di musim dingin seperti ini.",en:"It is not easy for anyone, especially in deep winter like this."}',
'{t:"SENT",zh:"多一份理解，多一份尊重。",py:"Duō yī fèn lǐjiě, duō yī fèn zūnzhòng.",id:"Lebih banyak pengertian, lebih banyak penghormatan.",en:"One more share of understanding, one more share of respect.",note:"Pesan moral dari video ini"}',
'{t:"SENT",zh:"你先吃我這個，別投訴他。",py:"Nǐ xiān chī wǒ zhège, bié tóusù tā.",id:"Makan punyaku dulu, jangan melaporkannya.",en:"Eat mine first, do not file a complaint against him."}',
'{t:"SENT",zh:"做服務行業都不容易。",py:"Zuò fúwù hángyè dōu bù róngyì.",id:"Bekerja di industri jasa semuanya tidak mudah.",en:"Working in the service industry is not easy for anyone."}',
'{t:"SENT",zh:"我找個地方給你熱熱。",py:"Wǒ zhǎo ge dìfāng gěi nǐ rè re.",id:"Saya carikan tempat untuk memanaskan makananmu.",en:"I will find a place to heat it up for you."}',
'{t:"SENT",zh:"我領你到裡面吃一頓吧。",py:"Wǒ lǐng nǐ dào lǐmiàn chī yī dùn ba.",id:"Saya ajak kamu masuk ke dalam untuk makan ya.",en:"Let me take you inside for a meal."}',
'{t:"SENT",zh:"你有老有小怎麼了，我管你嗎？跟我有什麼關係？",py:"Nǐ yǒu lǎo yǒu xiǎo zěnme le, wǒ guǎn nǐ ma? Gēn wǒ yǒu shénme guānxi?",id:"Kamu punya orang tua dan anak kecil, memangnya kenapa? Apa urusanku?",en:"You have old and young to support, so what? Is that my business?"}',
'{t:"SENT",zh:"算了算了，你別投訴就行了。",py:"Suàn le suàn le, nǐ bié tóusù jiù xíng le.",id:"Sudahlah, asal kamu tidak melapor saja.",en:"Forget it, as long as you do not file a complaint."}',
'{t:"SENT",zh:"擔待點，大冬天都不容易。",py:"Dāndài diǎn, dà dōngtiān dōu bù róngyì.",id:"Maklumi sedikit, di musim dingin seperti ini semua orang susah.",en:"Be a little understanding, it is tough for everyone in deep winter."}',
'{t:"SENT",zh:"這飯多少錢，我給你買。",py:"Zhè fàn duōshǎo qián, wǒ gěi nǐ mǎi.",id:"Makanan ini berapa harganya, saya belikan untukmu.",en:"How much is this food? I will buy it for you."}',
'{t:"SENT",zh:"我就管了，怎麼著？",py:"Wǒ jiù guǎn le, zěnme zhe?",id:"Saya memang ikut campur, memangnya kenapa?",en:"I am getting involved, so what?"}',
'{t:"SENT",zh:"你這個人一看長得挺好的，心也挺善良。",py:"Nǐ zhège rén yī kàn zhǎng de tǐng hǎo de, xīn yě tǐng shànliáng.",id:"Melihatmu sekejap kamu terlihat tampan, hatimu juga baik.",en:"Looking at you, you appear to be a good-looking person with a kind heart."}',
'{t:"SENT",zh:"當外賣送餐員因為晚到而被人當街辱罵，看到這幕的路人會怎麼做呢？",py:"Dāng wàimài sòng cān yuán yīnwèi wǎn dào ér bèi rén dāng jiē rǔmà, kàn dào zhè mù de lùrén huì zěnme zuò ne?",id:"Ketika kurir makanan dimarahi di jalan karena terlambat, apa yang akan dilakukan orang yang melihatnya?",en:"When a food delivery rider is publicly scolded for being late, what will bystanders do?"}'
]

v_js = "var V=[\n" + ",\n".join(V) + "\n];"
tmpl = re.sub(r"var V=\[.*?\];", v_js, tmpl, flags=re.DOTALL)

with open(dst_file, "w", encoding="utf-8") as f:
    f.write(tmpl)

print("Written:", dst_file)
v = open(dst_file, encoding="utf-8").read()
for ch in ["外賣","辱罵","體諒","指手畫腳","尊重"]:
    print("OK" if ch in v else "MISSING", ch)