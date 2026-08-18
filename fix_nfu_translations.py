content = open("public/games/flashcard_lengkap_intact/nfu_group_chat.html", encoding="utf-8").read()

fixes = [
    # "menindaklanjuti" → terlalu formal
    (
        'id:"Saya hanya ingin menindaklanjuti pesan saya sebelumnya mengenai penempatan jurusan dan mata kuliah."',
        'id:"Saya hanya ingin melanjutkan pesan saya sebelumnya tentang penempatan jurusan dan mata kuliah."'
    ),
    # "apakah ada pembaruan atau apakah ini bisa ditindaklanjuti" → terlalu kaku
    (
        'id:"Bisakah Anda memberi tahu saya apakah ada pembaruan atau apakah ini bisa ditindaklanjuti?"',
        'id:"Bisakah Anda memberi tahu saya apakah ada kabar terbaru atau apakah ini bisa dicek lebih lanjut?"'
    ),
    # "pemrosesan" → terlalu teknis
    (
        'id:"Sertifikat kesehatan saya mungkin membutuhkan beberapa minggu untuk diterbitkan dan sayangnya pemrosesan dokumen yang diperlukan lainnya juga membutuhkan waktu."',
        'id:"Sertifikat kesehatan saya mungkin butuh beberapa minggu untuk keluar dan sayangnya proses dokumen lainnya juga butuh waktu."'
    ),
    # "di luar kendali saya" → oke tapi bisa lebih simpel
    (
        'id:"Beberapa bagian dari proses ini di luar kendali saya sehingga saya khawatir tidak dapat menyiapkan semua dokumen sebelum tenggat waktu semula."',
        'id:"Beberapa bagian dari proses ini tidak bisa saya kendalikan, jadi saya khawatir tidak bisa menyiapkan semua dokumen sebelum batas waktu."'
    ),
    # "diwajibkan untuk melegalisir" → terlalu formal
    (
        'id:"Kami juga diwajibkan untuk melegalisir beberapa dokumen kami oleh Departemen Konsuler sebelum menyerahkannya."',
        'id:"Kami juga harus melegalisir beberapa dokumen kami di Departemen Konsuler sebelum bisa diserahkan."'
    ),
    # "melewati beberapa prosedur" → oke tapi bisa lebih natural
    (
        'id:"Proses ini membutuhkan cukup banyak waktu karena kami harus melewati beberapa prosedur dan menunggu dokumen diproses."',
        'id:"Proses ini butuh cukup banyak waktu karena kami harus melewati beberapa tahapan dan menunggu dokumen selesai diproses."'
    ),
    # "menyelesaikan survei" → oke, tapi "memperkirakan" terlalu formal
    (
        'id:"Kami memperkirakan akan menyelesaikan survei sekitar 7 hingga 8 hari setelah tenggat waktu 21 Agustus."',
        'id:"Kami perkirakan akan menyelesaikan survei sekitar 7 sampai 8 hari setelah batas waktu 21 Agustus."'
    ),
    # "mohon unggah catatan PDF" → oke tapi panjang
    (
        'id:"Untuk dokumen yang belum siap, mohon unggah catatan PDF yang menunjukkan perkiraan tanggal kapan setiap dokumen akan tersedia untuk dikirim."',
        'id:"Untuk dokumen yang belum siap, tolong upload catatan PDF yang berisi perkiraan tanggal kapan dokumen tersebut bisa dikirim."'
    ),
    # "disertifikasi dan dilegalisir" → bisa lebih simpel
    (
        'id:"Kami masih memiliki beberapa dokumen yang perlu disertifikasi dan dilegalisir di Konsulat."',
        'id:"Kami masih punya beberapa dokumen yang perlu disahkan dan dilegalisir di Konsulat."'
    ),
    # "tidak ada janji yang tersedia" → aneh, harusnya "tidak ada slot jadwal"
    (
        'id:"Saat ini tidak ada janji yang tersedia sehingga proses pengajuan visa kami akan tertunda."',
        'id:"Saat ini tidak ada jadwal yang tersedia sehingga proses pengajuan visa kami akan tertunda."'
    ),
    # "Kantor pemrosesan visa" → terlalu teknis
    (
        'id:"Kantor pemrosesan visa di pihak kami ingin memastikan apakah dokumen asli MOE dan LOA telah dikirim ke TECO Hanoi."',
        'id:"Kantor visa di pihak kami ingin memastikan apakah dokumen asli MOE dan LOA sudah dikirim ke TECO Hanoi."'
    ),
    # "menandai nama Anda di daftar tersebut agar staf TECO dapat memverifikasi" → terlalu panjang
    (
        'id:"Anda dapat mencetak Surat Persetujuan beserta daftar nama mahasiswa dan menandai nama Anda di daftar tersebut agar staf TECO dapat memverifikasi dengan catatan mereka."',
        'id:"Anda bisa cetak Surat Persetujuan beserta daftar nama mahasiswa dan tandai nama Anda agar staf TECO bisa mencocokkan dengan catatan mereka."'
    ),
    # "pengaturan transportasi alternatif" → terlalu kaku
    (
        'id:"Jika saya tiba di TPE pada 2 hingga 4 September tetapi setelah waktu penjemputan yang dijadwalkan, apakah ada pengaturan transportasi alternatif atau bantuan yang dapat disediakan NFU?"',
        'id:"Jika saya tiba di TPE pada 2 sampai 4 September tapi setelah waktu jemput yang dijadwalkan, apakah ada pilihan transportasi lain atau bantuan dari NFU?"'
    ),
    # "pengaturan mandiri" → aneh
    (
        'id:"Saya ingin memastikan apakah pengaturan mandiri adalah satu-satunya pilihan dalam situasi ini sebelum memesan tiket pesawat."',
        'id:"Saya ingin memastikan apakah pergi sendiri adalah satu-satunya pilihan sebelum saya memesan tiket pesawat."'
    ),
    # "Upacara Penutupan" → oke, tapi "check-out asrama" bisa lebih jelas
    (
        'id:"Upacara Penutupan FTIP Fall 2026 akan diadakan pada 4 Januari 2027 dan mahasiswa harus menyelesaikan proses check-out asrama sebelum 8 Januari 2027."',
        'id:"Acara Penutupan FTIP Fall 2026 akan diadakan pada 4 Januari 2027 dan mahasiswa harus selesai keluar dari asrama sebelum 8 Januari 2027."'
    ),
    # "Nomor Keputusan" → perlu penjelasan singkat
    (
        'id:"Saya ingin bertanya tentang Nomor Keputusan — nomor keputusan mana yang harus kami berikan ke pihak Vietnam untuk dokumen yang diperlukan?"',
        'id:"Saya ingin bertanya tentang Nomor Keputusan — nomor keputusan mana yang harus kami berikan ke pihak Vietnam untuk dokumen persyaratan?"'
    ),
    # "Bolehkah saya konfirmasi" → terlalu formal
    (
        'id:"Bolehkah saya konfirmasi apakah saya dapat mengirimkan Formulir Informasi Akhir pada 21 Agustus dengan semua dokumen yang diperlukan lainnya dan mengunggah catatan PDF yang menunjukkan perkiraan tanggal visa saya tersedia?"',
        'id:"Bolehkah saya tanyakan apakah saya bisa kirim Formulir Informasi Akhir pada 21 Agustus dengan dokumen lainnya, lalu upload catatan PDF yang berisi perkiraan tanggal visa saya siap?"'
    ),
    # "harap kirim ulang formulir dengan dokumen yang diperbarui" → oke tapi bisa lebih simpel
    (
        'id:"Setelah visa Anda tersedia, harap kirim ulang formulir dengan dokumen yang diperbarui."',
        'id:"Setelah visa Anda siap, tolong kirim ulang formulirnya dengan dokumen yang sudah diperbarui."'
    ),
    # "jika Anda berencana menggunakan layanan penjemputan... harap pilih tanggal yang Anda harapkan dalam polling" → terlalu panjang
    (
        'id:"Jika Anda berencana menggunakan layanan penjemputan Bandara Internasional Taoyuan NFU, harap pilih tanggal yang Anda harapkan dalam polling agar kami dapat mengatur transportasinya."',
        'id:"Jika Anda mau pakai layanan jemput bandara NFU, tolong pilih tanggal kedatangan Anda di polling agar kami bisa atur transportasinya."'
    ),
]

count = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new)
        print(f"✓ Fixed")
        count += 1
    else:
        # try to find partial match for debugging
        key = old[:60]
        print(f"✗ NOT FOUND: {key}...")

with open("public/games/flashcard_lengkap_intact/nfu_group_chat.html", "w", encoding="utf-8") as f:
    f.write(content)

print(f"\nDone! Fixed {count} translations.")
