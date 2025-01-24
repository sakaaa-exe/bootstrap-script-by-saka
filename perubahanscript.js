const form = document.getElementById("messageForm");
const messageInput = document.getElementById("message");

const statusText = document.getElementById("status");

// Mengatur tinggi viewport yang dinamis menggunakan Javascript
const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Menangani fokus pada textarea agar tidak menggeser halaman
messageInput.addEventListener("focus", () => {
    document.body.style.overflow = "hidden"; // Menonaktifkan scroll saat mengetik
});

messageInput.addEventListener("blur", () => {
    document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll setelah selesai
});

// Menangani resize dan memperbarui tinggi viewport
window.addEventListener('resize', setViewportHeight);
setViewportHeight(); // Panggil sekali di awal

// Array pesan acak
const randomMessages = [
    "Kurangi nada bicara yang terlalu tinggi saat marah. Cobalah lebih tenang.",
    "Belajarlah untuk lebih mendengarkan orang lain tanpa menyela pembicaraan.",
    "Jangan terlalu sering bercanda dengan sarkasme, karena tidak semua orang bisa menerimanya.",
    "Usahakan untuk lebih jujur dalam mengungkapkan perasaanmu, jangan hanya dipendam.",
    "Kurangi kebiasaan berbicara dengan nada yang terkesan meremehkan orang lain.",
    "Perbaiki kebiasaan sering lupa janji kecil. Komitmen itu penting, sekecil apa pun itu.",
    "Belajarlah untuk lebih peka terhadap perasaan orang lain ketika berbicara.",
    "Kurangi menggunakan kata-kata kasar, meskipun hanya bercanda. Itu bisa menyakiti perasaan orang lain.",
    "Jangan terlalu sering membandingkan dirimu dengan orang lain dalam percakapan.",
    "Latih dirimu untuk tidak terlalu defensif ketika menerima kritik dari orang lain.",
    "Jangan terlalu sering memotong pembicaraan orang lain, beri mereka ruang untuk menyampaikan pendapat.",
    "Usahakan untuk lebih konsisten antara apa yang kamu katakan dan apa yang kamu lakukan.",
    "Belajarlah untuk memberikan pujian yang tulus kepada orang lain, itu bisa memperbaiki hubunganmu.",
    "Kurangi berbicara terlalu cepat ketika gugup. Ambil napas dalam-dalam dan tenangkan diri.",
    "Cobalah untuk tidak menggunakan nada bicara yang pasif-agresif, itu hanya menciptakan kesalahpahaman.",
    "Belajarlah mengontrol volume suara saat berbicara, jangan terlalu keras tanpa alasan.",
    "Jangan takut untuk meminta maaf saat salah berbicara, itu menunjukkan kedewasaanmu.",
    "Kurangi kebiasaan menggoda orang lain secara berlebihan, itu bisa membuat mereka tidak nyaman.",
    "Belajarlah untuk berbicara dengan lebih santai tanpa terlalu formal di situasi yang tidak membutuhkan.",
    "Cobalah untuk lebih sabar saat menjelaskan sesuatu kepada orang lain yang tidak langsung memahami.",
    "Cobalah berbicara lebih perlahan agar pesanmu lebih mudah dipahami.",
    "Kurangi kebiasaan berbicara sambil terbata-bata. Pikirkan dulu apa yang ingin kamu sampaikan.",
    "Latih dirimu untuk tidak gugup saat berbicara di depan umum. Ambil napas dalam dan fokus.",
    "Hindari berbicara terlalu terburu-buru. Beri jeda agar orang lain dapat mengikuti alur pembicaraanmu.",
    "Perbaiki artikulasi kata-katamu agar lebih jelas dan tidak terdengar 'belibet'.",
    "Cobalah berbicara dengan intonasi yang lebih stabil, jangan naik turun secara berlebihan.",
    "Jangan terlalu sering mengulang-ulang kata atau kalimat tanpa alasan, itu membuat komunikasi terlihat kurang fokus.",
    "Belajarlah untuk menghindari menggunakan terlalu banyak filler seperti 'uhm', 'eh', atau 'kayak' saat berbicara.",
    "Jangan langsung melompat ke topik lain saat berbicara. Selesaikan dulu satu topik sebelum pindah ke yang lain.",
    "Latih dirimu untuk menyusun kalimat dengan struktur yang lebih teratur agar pesanmu lebih mudah dipahami.",
    "Hindari berbicara terlalu cepat saat merasa antusias, itu bisa membingungkan lawan bicaramu.",
    "Cobalah untuk tidak menggunakan bahasa tubuh yang berlebihan saat berbicara, agar pesanmu tetap terlihat serius.",
    "Berusahalah untuk lebih percaya diri saat berbicara, sehingga pesanmu tidak terdengar ragu-ragu.",
    "Latih dirimu untuk tidak terlalu sering menggunakan jargon atau istilah yang sulit dipahami orang awam.",
    "Hindari terlalu banyak memotong kalimat dengan 'tapi' atau 'soalnya', karena itu membuat pesanmu terkesan tidak tuntas.",
    "Belajarlah untuk berbicara lebih fokus tanpa terlalu banyak menyimpang dari poin utama.",
    "Jangan terlalu sering menyisipkan lelucon ketika menyampaikan hal penting, agar pesan tidak kehilangan makna.",
    "Latih dirimu untuk tidak menggunakan kalimat yang terlalu panjang dan rumit saat berbicara.",
    "Usahakan berbicara dengan nada yang lebih santai, agar pesanmu terasa lebih ramah dan mudah diterima.",
    "Jangan malu untuk berhenti sejenak jika merasa bingung, daripada berbicara dengan kata-kata yang tidak terstruktur."
];

// Fungsi untuk mengirim pesan
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();

    if (message === "") {
        showMessage("Tolong tulis pesan!", "error");
        return;
    }

    // Proses kirim ke Telegram
    sendToTelegram(message);
});

const randomMessageButton = document.getElementById("randomMessage");
const dice = document.getElementById("dice");

// Simpan pesan yang sudah ditampilkan
let displayedMessages = [];
let isAnimating = false; // Status untuk mencegah animasi berulang

// Event listener untuk tombol pesan acak
randomMessageButton.addEventListener("click", function () {
    if (isAnimating) return; // Cegah jika animasi sedang berjalan

    // Tandai animasi dimulai
    isAnimating = true;

    // Pilih pesan acak
    let randomIndex;
    let randomMessage;

    // Cari pesan yang belum ditampilkan
    do {
        randomIndex = Math.floor(Math.random() * randomMessages.length);
        randomMessage = randomMessages[randomIndex];
    } while (displayedMessages.includes(randomMessage));

    // Tampilkan pesan baru
    messageInput.value = randomMessage;

    // Simpan pesan yang sudah ditampilkan
    displayedMessages.push(randomMessage);

    // Jika semua pesan sudah ditampilkan, reset daftar yang sudah ditampilkan
    if (displayedMessages.length === randomMessages.length) {
        displayedMessages = [];
    }

    // Tambahkan animasi dice
    dice.style.animation = "rollDice 1s infinite";
    setTimeout(() => {
        dice.style.animation = "none"; // Hentikan animasi setelah selesai
        isAnimating = false; // Tandai animasi selesai
    }, 800);
});

// Fungsi untuk mengirim pesan ke Telegram dengan format yang lebih baik
function sendToTelegram(message) {
    const botToken = "7654564974:AAEEruGqvu69kvkDT36kTXi5mxYLnwUjsOg"; // Ganti dengan token bot Telegram Anda
    const chatId = "981879069"; // Ganti dengan chat ID Anda

    // URL gambar (pastikan sudah diupload dan dapat diakses)
    const photoUrl = "https://drive.google.com/uc?id=1TLs6lI1fOhKPVBaaCYyBPflcUob3VtTC"; // Ganti dengan URL foto Anda

    // Dapatkan tanggal dan waktu saat ini
    const now = new Date();
    const optionsDate = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString("id-ID", optionsDate);
    const formattedTime = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    // Format pesan yang lebih elegan dengan informasi tambahan
    const formattedMessage = `
📬 *Pesan Anonim Baru Diterima!*  
━━━━━━━━━━━━━━━━━━━━━━━━━  
💬 *Isi Pesan:*  
_"${message}"_

📅 *Tanggal:* ${formattedDate}  
⏰ *Waktu:* ${formattedTime}  
🌐 *Dikirim Melalui:* Website Anonim  
━━━━━━━━━━━━━━━━━━━━━━━━━  

🔒 Pesan ini diterima secara *anonim*.  
💡 Klik tombol di bawah untuk membalas pesan ini.  
`;

    // Buat link balasan untuk halaman balasan pesan
    const replyLink = `https://sakaaa-exe.github.io/reply-perubahan/index.html?message=${encodeURIComponent(message)}`;

    // Tambahkan inline button untuk balasan
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;
    const payload = {
        chat_id: chatId,
        photo: photoUrl, // Kirim foto
        caption: formattedMessage, // Pesan teks dengan foto
        parse_mode: "Markdown", // Gunakan Markdown untuk format teks
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "Balas Pesan 📩",
                        url: replyLink, // Arahkan ke halaman balasan
                    },
                ],
            ],
        }),
    };

    fetch(telegramUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                showMessage("Pesan berhasil dikirim!", "success");
                messageInput.value = "";
            } else {
                showMessage("Gagal mengirim pesan.", "error");
            }
        })
        .catch(() => {
            showMessage("Terjadi kesalahan. Coba lagi.", "error");
        });
}

/// Elemen modal
const modal = document.getElementById("statusModal");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const closeModalBtn = document.querySelector(".close-btn");

function showMessage(message, type) {
    showModal(message, type); // Gunakan modal untuk menampilkan pesan
}

// Fungsi untuk menampilkan modal
function showModal(message, type) {
    modal.classList.add(type === "success" ? "modal-success" : "modal-error");
    modalTitle.textContent = type === "success" ? "Berhasil!" : "Gagal!";
    modalMessage.textContent = message;

    modal.style.display = "flex"; // Tampilkan modal
    setTimeout(() => {
        modal.style.opacity = "1"; // Fade-in
    }, 50);

    // Otomatis tutup modal setelah 3 detik
    setTimeout(closeModal, 3000);
}

// Fungsi untuk menutup modal
function closeModal() {
    modal.style.animation = "fadeOut 0.5s forwards"; // Animasi keluar
    setTimeout(() => {
        modal.style.display = "none"; // Sembunyikan modal
        modal.classList.remove("modal-success", "modal-error"); // Hapus tema
        modal.style.animation = ""; // Reset animasi
    }, 500);
}

// Event listener tombol close
closeModalBtn.addEventListener("click", closeModal);
