content = open("public/games/flashcard_lengkap_intact/mandarin_l11.html", encoding="utf-8").read()

# Format: ("zh exact", "old id", "new id ikut urutan kata Mandarin")
fixes = [
    # 我以前在傳統醫院工作。
    # 我/saya  以前/dulu  在/di  傳統醫院/rumah sakit tradisional  工作/bekerja
    (
        'id:"Saya dulu bekerja di rumah sakit tradisional."',
        'id:"Saya dulu di rumah sakit tradisional bekerja."'
    ),
    # 我以前是學生。
    # 我/saya  以前/dulu  是/adalah  學生/pelajar
    (
        'id:"Saya dulu adalah pelajar."',
        'id:"Saya dulu adalah pelajar."'  # sudah urut, biarkan
    ),
    # 他以前住在台北。
    # 他/dia  以前/dulu  住/tinggal  在/di  台北/Taipei
    (
        'id:"Dia dulu tinggal di Taipei."',
        'id:"Dia dulu tinggal di Taipei."'  # sudah urut
    ),
    # 以前我住在台北。
    # 以前/dulu  我/saya  住/tinggal  在/di  台北/Taipei
    (
        'id:"Dulu saya tinggal di Taipei."',
        'id:"Dulu saya tinggal di Taipei."'  # sudah urut
    ),
    # 我以前不喜歡學中文，現在喜歡了。
    # 我/saya  以前/dulu  不/tidak  喜歡/suka  學/belajar  中文/Mandarin，現在/sekarang  喜歡/suka  了/sudah
    (
        'id:"Dulu tidak suka belajar Mandarin, sekarang sudah suka."',
        'id:"Saya dulu tidak suka belajar Mandarin, sekarang sudah suka."'
    ),
    # 我以前不喜歡學習中文，但是現在很喜歡了。
    # 我/saya  以前/dulu  不/tidak  喜歡/suka  學習/belajar  中文/Mandarin，但是/tapi  現在/sekarang  很/sangat  喜歡/suka  了/sudah
    (
        'id:"Dulu tidak suka belajar Mandarin, tapi sekarang sangat suka."',
        'id:"Saya dulu tidak suka belajar Mandarin, tapi sekarang sangat suka."'
    ),
    # 我吃飯以前必須洗手。
    # 我/saya  吃飯/makan  以前/sebelum  必須/harus  洗/cuci  手/tangan
    (
        'id:"Sebelum makan, saya harus cuci tangan."',
        'id:"Saya makan sebelum harus cuci tangan."'
    ),
    # 吃飯以前，我必須洗手。
    # 吃飯/makan  以前/sebelum，我/saya  必須/harus  洗手/cuci tangan
    (
        'id:"Sebelum makan, saya harus cuci tangan.",note:"以前 bisa di awal atau akhir klausa"',
        'id:"Makan sebelum, saya harus cuci tangan.",note:"以前 bisa di awal atau akhir klausa"'
    ),
    # 我去台灣以前，想先去日本玩。
    # 我/saya  去/pergi  台灣/Taiwan  以前/sebelum，想/ingin  先/dulu  去/pergi  日本/Jepang  玩/main
    (
        'id:"Sebelum ke Taiwan, ingin ke Jepang dulu."',
        'id:"Saya pergi Taiwan sebelum, ingin dulu pergi Jepang main."'
    ),
    # 去台灣以前，我要先去日本玩。
    # 去/pergi  台灣/Taiwan  以前/sebelum，我/saya  要/mau  先/dulu  去/pergi  日本/Jepang  玩/main
    (
        'id:"Sebelum ke Taiwan, saya mau ke Jepang dulu."',
        'id:"Pergi Taiwan sebelum, saya mau dulu pergi Jepang main."'
    ),
    # 你有工作經驗嗎？
    # 你/kamu  有/punya  工作/kerja  經驗/pengalaman  嗎/kah
    (
        'id:"Apakah kamu punya pengalaman kerja?"',
        'id:"Kamu punya pengalaman kerja?"'
    ),
    # 我沒有工作經驗。
    # 我/saya  沒有/tidak punya  工作/kerja  經驗/pengalaman
    (
        'id:"Saya tidak punya pengalaman kerja."',
        'id:"Saya tidak punya pengalaman kerja."'  # sudah urut
    ),
    # 我在學校有五年的工作經驗。
    # 我/saya  在/di  學校/sekolah  有/punya  五年/5 tahun  的/  工作/kerja  經驗/pengalaman
    (
        'id:"Saya punya 5 tahun pengalaman kerja di sekolah."',
        'id:"Saya di sekolah punya 5 tahun pengalaman kerja."'
    ),
    # 妳以前有什麼工作經驗？
    # 妳/kamu  以前/dulu  有/punya  什麼/apa  工作/kerja  經驗/pengalaman
    (
        'id:"Kamu dulu punya pengalaman kerja apa?"',
        'id:"Kamu dulu punya apa pengalaman kerja?"'
    ),
    # 我以前有教師經驗。
    # 我/saya  以前/dulu  有/punya  教師/guru  經驗/pengalaman
    (
        'id:"Saya dulu punya pengalaman mengajar."',
        'id:"Saya dulu punya pengalaman guru."'
    ),
    # 明天我幫你。
    # 明天/besok  我/saya  幫/bantu  你/kamu
    (
        'id:"Besok saya bantu kamu."',
        'id:"Besok saya bantu kamu."'  # sudah urut
    ),
    # 請你幫我拿桌子上的書。
    # 請/tolong  你/kamu  幫/bantu  我/saya  拿/ambil  桌子上/di atas meja  的/  書/buku
    (
        'id:"Tolong ambilkan buku di atas meja untukku."',
        'id:"Tolong kamu bantu saya ambil buku di atas meja."'
    ),
    # 謝謝你幫我的忙。
    # 謝謝/terima kasih  你/kamu  幫/bantu  我/saya  的忙/urusanku
    (
        'id:"Terima kasih sudah membantu saya."',
        'id:"Terima kasih kamu bantu urusan saya."'
    ),
    # 我沒有辦法。
    # 我/saya  沒有/tidak punya  辦法/cara/solusi
    (
        'id:"Saya tidak punya cara."',
        'id:"Saya tidak punya cara."'  # sudah urut
    ),
    # 我有辦法，我跟你一起去。
    # 我/saya  有/punya  辦法/cara，我/saya  跟/dengan  你/kamu  一起/bersama  去/pergi
    (
        'id:"Saya punya caranya, saya akan pergi bersamamu."',
        'id:"Saya punya cara, saya dengan kamu bersama pergi."'
    ),
    # 這個地方很奇怪。
    # 這個/ini  地方/tempat  很/sangat  奇怪/aneh
    (
        'id:"Tempat ini sangat aneh."',
        'id:"Tempat ini sangat aneh."'  # sudah urut
    ),
    # 我覺得這件事很奇怪。
    # 我/saya  覺得/merasa  這件事/hal ini  很/sangat  奇怪/aneh
    (
        'id:"Saya merasa hal ini sangat aneh."',
        'id:"Saya merasa hal ini sangat aneh."'  # sudah urut
    ),
    # 真奇怪，我的手機在哪裡？
    # 真/sungguh  奇怪/aneh，我的/saya punya  手機/HP  在/ada di  哪裡/mana
    (
        'id:"Sungguh aneh, HP saya ada di mana?"',
        'id:"Sungguh aneh, HP saya ada di mana?"'  # sudah urut
    ),
    # 真奇怪，我的手機剛才在這裡，現在不見了。
    # 真/sungguh  奇怪/aneh，我的/saya punya  手機/HP  剛才/tadi  在/ada di  這裡/sini，現在/sekarang  不見/hilang  了/sudah
    (
        'id:"Sungguh aneh, HP saya tadi di sini, sekarang hilang."',
        'id:"Sungguh aneh, HP saya tadi ada di sini, sekarang sudah hilang."'
    ),
    # 這幾天的天氣很奇怪。
    # 這幾天/beberapa hari ini  的/  天氣/cuaca  很/sangat  奇怪/aneh
    (
        'id:"Cuaca beberapa hari ini sangat aneh."',
        'id:"Cuaca beberapa hari ini sangat aneh."'  # sudah urut
    ),
    # 她的髮型很奇怪，但是我喜歡。
    # 她的/dia punya  髮型/gaya rambut  很/sangat  奇怪/aneh，但是/tapi  我/saya  喜歡/suka
    (
        'id:"Gaya rambutnya sangat aneh, tapi saya suka."',
        'id:"Gaya rambut dia sangat aneh, tapi saya suka."'
    ),
    # 你週末有什麼打算？
    # 你/kamu  週末/akhir pekan  有/punya  什麼/apa  打算/rencana
    (
        'id:"Kamu punya rencana apa untuk akhir pekan?"',
        'id:"Kamu akhir pekan punya apa rencana?"'
    ),
    # 可能這個週末吧。
    # 可能/mungkin  這個/ini  週末/akhir pekan  吧/ya
    (
        'id:"Mungkin akhir pekan ini."',
        'id:"Mungkin akhir pekan ini ya."'
    ),
    # 等你決定了，再給我打電話吧。
    # 等/tunggu  你/kamu  決定/memutuskan  了/sudah，再/baru  給/kepada  我/saya  打電話/telepon  吧/ya
    (
        'id:"Setelah kamu memutuskan, telepon saya ya."',
        'id:"Tunggu kamu memutuskan, baru telepon saya ya."'
    ),
    # 請問你的郵箱是什麼，我要給你發文件。
    # 請問/permisi  你的/kamu punya  郵箱/email  是/adalah  什麼/apa，我/saya  要/mau  給/kepada  你/kamu  發/kirim  文件/dokumen
    (
        'id:"Permisi, email kamu apa? Saya ingin mengirim dokumen."',
        'id:"Permisi, email kamu adalah apa, saya mau kepada kamu kirim dokumen."'
    ),
    # 你有沒有收到我給你發的電子郵件？
    # 你/kamu  有沒有/sudah atau belum  收到/terima  我/saya  給/kepada  你/kamu  發的/yang kirim  電子郵件/email
    (
        'id:"Apakah kamu sudah menerima email yang saya kirimkan?"',
        'id:"Kamu sudah atau belum terima saya kepada kamu yang kirim email?"'
    ),
    # 妳跟那位新朋友見面了沒有？
    # 妳/kamu  跟/dengan  那位/orang itu  新朋友/teman baru  見面/bertemu  了沒有/sudah atau belum
    (
        'id:"Apakah kamu sudah bertemu dengan teman baru itu?"',
        'id:"Kamu dengan orang itu teman baru bertemu sudah atau belum?"'
    ),
    # 我還沒決定要不要跟他見面。
    # 我/saya  還沒/belum  決定/memutuskan  要不要/mau atau tidak  跟/dengan  他/dia  見面/bertemu
    (
        'id:"Saya belum memutuskan mau bertemu dengannya atau tidak."',
        'id:"Saya belum memutuskan mau atau tidak dengan dia bertemu."'
    ),
    # 你擔心什麼？
    # 你/kamu  擔心/khawatir  什麼/apa
    (
        'id:"Kamu khawatir tentang apa?"',
        'id:"Kamu khawatir apa?"'
    ),
    # 我有一點兒緊張，我以前沒有這種經驗，所以覺得這樣有一點兒奇怪。
    # 我/saya  有一點兒/sedikit  緊張/gugup，我/saya  以前/dulu  沒有/tidak punya  這種/jenis ini  經驗/pengalaman，所以/jadi  覺得/merasa  這樣/seperti ini  有一點兒/sedikit  奇怪/aneh
    (
        'id:"Saya sedikit gugup, sebelumnya tidak punya pengalaman seperti ini, jadi merasa agak aneh."',
        'id:"Saya sedikit gugup, saya dulu tidak punya jenis ini pengalaman, jadi merasa seperti ini sedikit aneh."'
    ),
    # 妳不要緊張，我有辦法，我跟妳一起去。
    # 妳/kamu  不要/jangan  緊張/gugup，我/saya  有/punya  辦法/cara，我/saya  跟/dengan  妳/kamu  一起/bersama  去/pergi
    (
        'id:"Jangan gugup, saya punya caranya, saya akan pergi bersamamu."',
        'id:"Kamu jangan gugup, saya punya cara, saya dengan kamu bersama pergi."'
    ),
    # 太好了，謝謝你幫我的忙。
    # 太好了/bagus sekali，謝謝/terima kasih  你/kamu  幫/bantu  我的忙/urusan saya
    (
        'id:"Bagus sekali, terima kasih sudah membantu saya."',
        'id:"Bagus sekali, terima kasih kamu bantu urusan saya."'
    ),
    # 不客氣。妳打算什麼時候跟他見面？
    # 不客氣/sama-sama。妳/kamu  打算/berencana  什麼時候/kapan  跟/dengan  他/dia  見面/bertemu
    (
        'id:"Sama-sama. Kamu berencana kapan mau bertemu dengannya?"',
        'id:"Sama-sama. Kamu berencana kapan dengan dia bertemu?"'
    ),
    # 可能這個週末吧。如果你有空，我再跟他約時間。
    # 可能/mungkin  這個週末/akhir pekan ini  吧/ya。如果/kalau  你/kamu  有空/ada waktu，我/saya  再/baru  跟/dengan  他/dia  約/janjian  時間/waktu
    (
        'id:"Mungkin akhir pekan ini. Kalau kamu ada waktu, saya akan janjian waktu dengannya."',
        'id:"Mungkin akhir pekan ini ya. Kalau kamu ada waktu, saya baru dengan dia janjian waktu."'
    ),
    # 有空啊，但是我明天不會來學校，等你決定了，再給我打電話吧。
    # 有空/ada waktu  啊/ah，但是/tapi  我/saya  明天/besok  不會/tidak akan  來/datang  學校/sekolah，等/tunggu  你/kamu  決定了/sudah memutuskan，再/baru  給我/kepada saya  打電話/telepon  吧/ya
    (
        'id:"Ada waktu, tapi besok saya tidak ke sekolah. Setelah memutuskan, telepon saya ya."',
        'id:"Ada waktu, tapi saya besok tidak akan datang sekolah, tunggu kamu sudah memutuskan, baru telepon saya ya."'
    ),
    # QA answers
    # 友美要跟誰見面？→ 跟那位新朋友見面。
    (
        'id:"跟那位新朋友見面。 Dengan teman baru itu."',
        'id:"跟那位新朋友見面。 Dengan orang itu teman baru bertemu."'
    ),
    # 友美打算什麼時候見面？→ 這個週末。
    (
        'id:"這個週末。 Akhir pekan ini."',
        'id:"這個週末。 Akhir pekan ini."'  # sudah jelas
    ),
    # 為什麼友美覺得有點兒奇怪？→ 因為她有一點兒緊張，而且她以前沒有這種經驗。
    (
        'id:"因為她有一點兒緊張，而且她以前沒有這種經驗。 Karena gugup dan belum pernah punya pengalaman seperti ini."',
        'id:"因為她有一點兒緊張，而且她以前沒有這種經驗。 Karena dia sedikit gugup, dan dia dulu tidak punya jenis ini pengalaman."'
    ),
    # 宜文給友美什麼辦法？→ 宜文要跟友美一起去。
    (
        'id:"宜文要跟友美一起去。 Yiwen mau pergi bersama Yumei."',
        'id:"宜文要跟友美一起去。 Yiwen mau dengan Youmei bersama pergi."'
    ),
    # 明天宜文會來學校嗎？→ 不會，宜文明天不會來學校。
    (
        'id:"不會，宜文明天不會來學校。 Tidak, Yiwen tidak akan ke sekolah."',
        'id:"不會，宜文明天不會來學校。 Tidak akan, Yiwen besok tidak akan datang sekolah."'
    ),
    # 友美和宜文是通過什麼來聯繫？→ 通過打電話來聯繫。
    (
        'id:"通過打電話來聯繫。 Melalui telepon."',
        'id:"通過打電話來聯繫。 Melalui telepon datang berhubungan."'
    ),
    # 友美現在跟他約時間了嗎？→ 還沒，等友美決定了以後才跟他約時間。
    (
        'id:"還沒，等友美決定了以後才跟他約時間。 Belum, tunggu Yumei memutuskan dulu."',
        'id:"還沒，等友美決定了以後才跟他約時間。 Belum, tunggu Yumei sudah memutuskan baru dengan dia janjian waktu."'
    ),
]

count = 0
for old, new in fixes:
    if old == new:
        continue
    if old in content:
        content = content.replace(old, new)
        print(f"✓ Fixed: {old[:60]}")
        count += 1
    else:
        print(f"✗ NOT FOUND: {old[:60]}")

with open("public/games/flashcard_lengkap_intact/mandarin_l11.html", "w", encoding="utf-8") as f:
    f.write(content)

print(f"\nDone! Fixed {count} translations.")
