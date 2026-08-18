#!/usr/bin/env python3
# write_l11_cards.py
# Rebuilds mandarin_l11.html with proper UTF-8 encoding so Chinese characters display correctly.

import re

src = "public/games/flashcard_lengkap_intact/mandarin_l11.html"

# Read the file — try UTF-8 first, fall back to latin-1 (covers cp1252)
try:
    with open(src, encoding="utf-8") as f:
        content = f.read()
    print("Read file as UTF-8")
except UnicodeDecodeError:
    with open(src, encoding="latin-1") as f:
        content = f.read()
    print("Read file as latin-1 (cp1252 fallback)")

# ---------------------------------------------------------------------------
# The corrected JavaScript V array with proper Chinese characters
# ---------------------------------------------------------------------------
V_ARRAY = r"""var V=[
{t:"VOCAB",zh:"以前",py:"yiqian",id:"sebelumnya / dulu / dahulu",en:"before / in the past",note:"Dipakai sebelum atau sesudah subjek"},
{t:"VOCAB",zh:"經驗",py:"jingyAn",id:"pengalaman",en:"experience"},
{t:"VOCAB",zh:"這樣",py:"zhEyang",id:"seperti ini / begini",en:"like this / in this way"},
{t:"VOCAB",zh:"奇怪",py:"qiguai",id:"aneh / ganjil",en:"strange / weird / odd"},
{t:"VOCAB",zh:"辦法",py:"banfa",id:"cara / jalan keluar / solusi",en:"method / solution / way"},
{t:"VOCAB",zh:"幫忙",py:"bangmang",id:"membantu / bantuan",en:"to help",note:"幫你的忙 = membantu kamu"},
{t:"VOCAB",zh:"打算",py:"dasuan",id:"berencana / bermaksud",en:"to plan / to intend"},
{t:"VOCAB",zh:"可能",py:"keneng",id:"mungkin / kemungkinan",en:"maybe / possible"},
{t:"VOCAB",zh:"約",py:"yue",id:"membuat janji / janjian",en:"to make an appointment"},
{t:"VOCAB",zh:"但是",py:"danshi",id:"tetapi / namun",en:"but / however"},
{t:"VOCAB",zh:"決定",py:"jueding",id:"memutuskan",en:"to decide"},
{t:"VOCAB",zh:"擔心",py:"danxin",id:"khawatir / cemas",en:"to worry"},
{t:"VOCAB",zh:"緊張",py:"jinzhang",id:"gugup / tegang",en:"nervous / tense"},
{t:"VOCAB",zh:"這種",py:"zhEzhong",id:"jenis ini / semacam ini",en:"this kind of"},
{t:"SENT",zh:"我以前在傳統醫院工作。",py:"Wo yiqian zai chuantong yiyuan gongzuo.",id:"Saya dulu bekerja di rumah sakit tradisional.",en:"I used to work at a traditional hospital."},
{t:"SENT",zh:"我以前是學生。",py:"Wo yiqian shi xuesheng.",id:"Saya dulu adalah pelajar.",en:"I was a student before."},
{t:"SENT",zh:"他以前住在台北。",py:"Ta yiqian zhu zai Taibei.",id:"Dia dulu tinggal di Taipei.",en:"He used to live in Taipei."},
{t:"SENT",zh:"以前我住在台北。",py:"Yiqian wo zhu zai Taibei.",id:"Dulu saya tinggal di Taipei.",en:"Before, I lived in Taipei."},
{t:"SENT",zh:"我以前不喜歡學中文，現在喜歡了。",py:"Wo yiqian bu xihuan xue Zhongwen, xianzai xihuan le.",id:"Dulu tidak suka belajar Mandarin, sekarang sudah suka.",en:"I used to not like Chinese, now I do.",note:"了 = perubahan keadaan"},
{t:"SENT",zh:"我以前不喜歡學習中文，但是現在很喜歡了。",py:"Wo yiqian bu xihuan xuexi Zhongwen, danshi xianzai hen xihuan le.",id:"Dulu tidak suka belajar Mandarin, tapi sekarang sangat suka.",en:"I used to not like studying Chinese, but now I do."},
{t:"SENT",zh:"我吃飯以前必須洗手。",py:"Wo chifan yiqian bixu xi shou.",id:"Sebelum makan, saya harus cuci tangan.",en:"Before eating, I must wash my hands."},
{t:"SENT",zh:"吃飯以前，我必須洗手。",py:"Chifan yiqian, wo bixu xi shou.",id:"Sebelum makan, saya harus cuci tangan.",en:"Before eating, I must wash my hands.",note:"以前 bisa di awal atau akhir klausa"},
{t:"SENT",zh:"我去台灣以前，想先去日本玩。",py:"Wo qu Taiwan yiqian, xiang xian qu Riben wan.",id:"Sebelum ke Taiwan, ingin ke Jepang dulu.",en:"Before going to Taiwan, I want to visit Japan first."},
{t:"SENT",zh:"去台灣以前，我要先去日本玩。",py:"Qu Taiwan yiqian, wo yao xian qu Riben wan.",id:"Sebelum ke Taiwan, saya mau ke Jepang dulu.",en:"Before going to Taiwan, I will go to Japan first."},
{t:"SENT",zh:"你有工作經驗嗎？",py:"Ni you gongzuo jingyAn ma?",id:"Apakah kamu punya pengalaman kerja?",en:"Do you have work experience?"},
{t:"SENT",zh:"我沒有工作經驗。",py:"Wo meiyou gongzuo jingyAn.",id:"Saya tidak punya pengalaman kerja.",en:"I have no work experience."},
{t:"SENT",zh:"我在學校有五年的工作經驗。",py:"Wo zai xuexiao you wu nian de gongzuo jingyAn.",id:"Saya punya 5 tahun pengalaman kerja di sekolah.",en:"I have five years of work experience at school."},
{t:"SENT",zh:"妳以前有什麼工作經驗？",py:"Ni yiqian you shenme gongzuo jingyAn?",id:"Kamu dulu punya pengalaman kerja apa?",en:"What work experience did you have before?"},
{t:"SENT",zh:"我以前有教師經驗。",py:"Wo yiqian you jiaoshi jingyAn.",id:"Saya dulu punya pengalaman mengajar.",en:"I had teaching experience before."},
{t:"SENT",zh:"明天我幫你。",py:"Mingtian wo bang ni.",id:"Besok saya bantu kamu.",en:"I will help you tomorrow."},
{t:"SENT",zh:"請你幫我拿桌子上的書。",py:"Qing ni bang wo na zhuozi shang de shu.",id:"Tolong ambilkan buku di atas meja untukku.",en:"Please help me get the book on the table."},
{t:"SENT",zh:"謝謝你幫我的忙。",py:"Xiexie ni bang wo de mang.",id:"Terima kasih sudah membantu saya.",en:"Thank you for helping me.",note:"幫我的忙 = 幫我"},
{t:"SENT",zh:"我沒有辦法。",py:"Wo meiyou banfa.",id:"Saya tidak punya cara.",en:"I have no solution."},
{t:"SENT",zh:"我有辦法，我跟你一起去。",py:"Wo you banfa, wo gen ni yiqi qu.",id:"Saya punya caranya, saya akan pergi bersamamu.",en:"I have a solution, I will go with you."},
{t:"SENT",zh:"這個地方很奇怪。",py:"Zhege difang hen qiguai.",id:"Tempat ini sangat aneh.",en:"This place is very strange."},
{t:"SENT",zh:"我覺得這件事很奇怪。",py:"Wo juede zhejian shi hen qiguai.",id:"Saya merasa hal ini sangat aneh.",en:"I think this matter is very strange."},
{t:"SENT",zh:"真奇怪，我的手機在哪裡？",py:"Zhen qiguai, wo de shouji zai nali?",id:"Sungguh aneh, HP saya ada di mana?",en:"How strange, where is my phone?"},
{t:"SENT",zh:"真奇怪，我的手機剛才在這裡，現在不見了。",py:"Zhen qiguai, wo de shouji gangcai zai zheli, xianzai bu jian le.",id:"Sungguh aneh, HP saya tadi di sini, sekarang hilang.",en:"How strange, my phone was just here but now it is gone.",note:"剛才 = baru saja / tadi"},
{t:"SENT",zh:"這幾天的天氣很奇怪。",py:"Zhe ji tian de tianqi hen qiguai.",id:"Cuaca beberapa hari ini sangat aneh.",en:"The weather these past few days is very strange."},
{t:"SENT",zh:"她的髮型很奇怪，但是我喜歡。",py:"Ta de faxing hen qiguai, danshi wo xihuan.",id:"Gaya rambutnya sangat aneh, tapi saya suka.",en:"Her hairstyle is very strange, but I like it."},
{t:"SENT",zh:"你週末有什麼打算？",py:"Ni zhoumo you shenme dasuan?",id:"Kamu punya rencana apa untuk akhir pekan?",en:"What are your plans for the weekend?"},
{t:"SENT",zh:"可能這個週末吧。",py:"Keneng zhege zhoumo ba.",id:"Mungkin akhir pekan ini.",en:"Maybe this weekend.",note:"吧 = partikel dugaan"},
{t:"SENT",zh:"等你決定了，再給我打電話吧。",py:"Deng ni jueding le, zai gei wo da dianhua ba.",id:"Setelah kamu memutuskan, telepon saya ya.",en:"After you decide, give me a call."},
{t:"SENT",zh:"請問你的郵箱是什麼，我要給你發文件。",py:"Qingwen ni de youxiang shi shenme, wo yao gei ni fa wenjian.",id:"Permisi, email kamu apa? Saya ingin mengirim dokumen.",en:"Excuse me, what is your email? I want to send you a document."},
{t:"SENT",zh:"你有沒有收到我給你發的電子郵件？",py:"Ni you meiyou shoudao wo gei ni fa de dianziyoujian?",id:"Apakah kamu sudah menerima email yang saya kirimkan?",en:"Did you receive the email I sent you?"},
{t:"DIAL",zh:"妳跟那位新朋友見面了沒有？",py:"Ni gen na wei xin pengyou jianmian le meiyou?",id:"Apakah kamu sudah bertemu dengan teman baru itu?",en:"Have you met that new friend yet?"},
{t:"DIAL",zh:"我還沒決定要不要跟他見面。",py:"Wo hai mei jueding yao bu yao gen ta jianmian.",id:"Saya belum memutuskan mau bertemu dengannya atau tidak.",en:"I have not decided whether to meet him or not."},
{t:"DIAL",zh:"你擔心什麼？",py:"Ni danxin shenme?",id:"Kamu khawatir tentang apa?",en:"What are you worried about?"},
{t:"DIAL",zh:"我有一點兒緊張，我以前沒有這種經驗，所以覺得這樣有一點兒奇怪。",py:"Wo you yidianr jinzhang, wo yiqian meiyou zhEzhong jingyAn, suoyi juede zheyang you yidianr qiguai.",id:"Saya sedikit gugup, sebelumnya tidak punya pengalaman seperti ini, jadi merasa agak aneh.",en:"I am a bit nervous. I have never had this kind of experience, so it feels a bit strange."},
{t:"DIAL",zh:"妳不要緊張，我有辦法，我跟妳一起去。",py:"Ni bu yao jinzhang, wo you banfa, wo gen ni yiqi qu.",id:"Jangan gugup, saya punya caranya, saya akan pergi bersamamu.",en:"Do not be nervous. I have a solution. I will go with you."},
{t:"DIAL",zh:"太好了，謝謝你幫我的忙。",py:"Tai hao le, xiexie ni bang wo de mang.",id:"Bagus sekali, terima kasih sudah membantu saya.",en:"Great, thank you for your help.",note:"幫我的忙 = 幫我"},
{t:"DIAL",zh:"不客氣。妳打算什麼時候跟他見面？",py:"Bu keqi. Ni dasuan shenme shihou gen ta jianmian?",id:"Sama-sama. Kamu berencana kapan mau bertemu dengannya?",en:"You are welcome. When are you planning to meet him?"},
{t:"DIAL",zh:"可能這個週末吧。如果你有空，我再跟他約時間。",py:"Keneng zhege zhoumo ba. Ruguo ni you kong, wo zai gen ta yue shijian.",id:"Mungkin akhir pekan ini. Kalau kamu ada waktu, saya akan janjian waktu dengannya.",en:"Maybe this weekend. If you are free, I will arrange a time with him."},
{t:"DIAL",zh:"有空啊，但是我明天不會來學校，等你決定了，再給我打電話吧。",py:"You kong a, danshi wo mingtian bu hui lai xuexiao, deng ni jueding le, zai gei wo da dianhua ba.",id:"Ada waktu, tapi besok saya tidak ke sekolah. Setelah memutuskan, telepon saya ya.",en:"I am free, but I will not be at school tomorrow. After you decide, give me a call."},
{t:"QA",zh:"友美要跟誰見面？",py:"YouMei yao gen shei jianmian?",id:"跟那位新朋友見面。 Dengan teman baru itu.",en:"She wants to meet that new friend."},
{t:"QA",zh:"友美打算什麼時候見面？",py:"YouMei dasuan shenme shihou jianmian?",id:"這個週末。 Akhir pekan ini.",en:"This weekend."},
{t:"QA",zh:"為什麼友美覺得有點兒奇怪？",py:"Weishenme YouMei juede you dianr qiguai?",id:"因為她有一點兒緊張，而且她以前沒有這種經驗。 Karena gugup dan belum pernah punya pengalaman seperti ini.",en:"Because she is nervous and has never had this kind of experience."},
{t:"QA",zh:"宜文給友美什麼辦法？",py:"YiWen gei YouMei shenme banfa?",id:"宜文要跟友美一起去。 Yiwen mau pergi bersama Yumei.",en:"Yiwen will go together with Youmei."},
{t:"QA",zh:"明天宜文會來學校嗎？",py:"Mingtian YiWen hui lai xuexiao ma?",id:"不會，宜文明天不會來學校。 Tidak, Yiwen tidak akan ke sekolah.",en:"No, Yiwen will not come to school tomorrow."},
{t:"QA",zh:"友美和宜文是通過什麼來聯繫？",py:"YouMei he YiWen shi tongguo shenme lai lianxi?",id:"通過打電話來聯繫。 Melalui telepon.",en:"Through phone calls."},
{t:"QA",zh:"友美現在跟他約時間了嗎？",py:"YouMei xianzai gen ta yue shijian le ma?",id:"還沒，等友美決定了以後才跟他約時間。 Belum, tunggu Yumei memutuskan dulu.",en:"Not yet, she will wait until she decides."},
];"""

# Also fix the title and h1/sub text that contain mojibake
# Original broken title: "Mandarin L11 ? ?? ?? ??"  -> fixed
content = re.sub(
    r'<title>.*?</title>',
    '<title>Mandarin L11 · 以前 经验 奇怪</title>',
    content,
    flags=re.DOTALL
)

# Fix h1 text
content = re.sub(
    r'<h1>.*?</h1>',
    '<h1>曼德林 · 以前 经验 奇怪</h1>',
    content,
    flags=re.DOTALL
)

# Replace the entire var V=[...]; block
# Match from "var V=[" up to and including the closing "];"
new_content = re.sub(
    r'var V=\[.*?\];',
    V_ARRAY,
    content,
    flags=re.DOTALL
)

if new_content == content:
    print("WARNING: var V=[...]; pattern not found — check the file structure!")
else:
    print("Replaced var V=[...]; block successfully.")

# Write the result as UTF-8
with open(src, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Written: {src}")

# Quick verification — check that Chinese characters are present
with open(src, encoding="utf-8") as f:
    verify = f.read()

check_chars = ["以前", "經驗", "奇怪", "幫忙", "緊張"]
for ch in check_chars:
    if ch in verify:
        print(f"  ✓ Found: {ch}")
    else:
        print(f"  ✗ MISSING: {ch}")

print("Done.")
