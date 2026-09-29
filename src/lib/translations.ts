export type Language = "id" | "en"

const english: Record<string, string> = {
  Home: "Home",
  About: "About",
  Pendidikan: "Education",
  Skills: "Skills",
  Portfolio: "Portfolio",
  CV: "CV",
  "Ganti Tema": "Toggle theme",
  Calon: "Aspiring",
  "Tentang Saya": "About Me",
  "Halo! Saya adalah siswa SMK Negeri 7 Semarang jurusan Informasi Jaringan dan Aplikasi dengan minat di bidang web development. Saat ini saya sedang mempelajari fullstack web development, mulai dari pengembangan tampilan (front-end) hingga pengelolaan sistem (back-end). Saya memiliki semangat untuk terus belajar dan mengembangkan keterampilan di bidang teknologi. Portofolio ini saya buat sebagai tempat untuk menampilkan hasil karya dan proses belajar saya.": "Hello! I am a student at SMK Negeri 7 Semarang, majoring in Information, Networking, and Applications, with an interest in web development. I am currently learning full-stack web development, from building front-end interfaces to managing back-end systems. I am eager to keep learning and growing my skills in technology. I created this portfolio to share my work and learning journey.",
  "Riwayat Keluarga": "Family Background",
  "Saya lahir di": "I was born in",
  "dan merupakan": "and am an",
  "anak tunggal": "only child",
  ". Saya tumbuh dalam lingkungan keluarga yang selalu mendukung saya untuk belajar dan berkembang, khususnya di bidang teknologi.": ". I grew up in a family that always encourages me to learn and grow, especially in technology.",
  Hobi: "Hobbies",
  Coding: "Coding",
  "Desain Grafis": "Graphic Design",
  "Mendengarkan & Bermain Musik": "Listening to and Playing Music",
  "Membaca Buku": "Reading",
  "Eksplorasi Hal Baru": "Exploring New Things",
  Minat: "Interests",
  "Web Development": "Web Development",
  "UI/UX Design": "UI/UX Design",
  "Mobile App": "Mobile Apps",
  Networking: "Networking",
  "Cita-cita / Tujuan Karier": "Career Goals",
  "Saya bercita-cita menjadi": "I aspire to become a",
  "yang tidak hanya mampu membangun aplikasi, tetapi juga menciptakan solusi digital yang berdampak. Saat ini, saya berfokus untuk terus belajar dan mempersiapkan diri agar dapat mengikuti program": "who can not only build applications but also create impactful digital solutions. I am focused on learning and preparing to take part in a",
  "magang di bidang teknologi": "technology internship",
  "sebagai langkah awal memasuki dunia industri.": "as my first step into the industry.",
  "Kelebihan Diri": "Strengths",
  "Cepat Belajar": "Quick Learner",
  Teliti: "Detail-Oriented",
  Kreatif: "Creative",
  "Mampu Bekerja dalam Tim": "Team Player",
  "Latar Belakang": "Background",
  "Riwayat Pendidikan": "Education",
  "2024 – Skrg": "2024 – Present",
  "Jurusan Informasi Jaringan dan Aplikasi": "Information, Networking, and Applications Major",
  "Semarang, Indonesia": "Semarang, Indonesia",
  "Mempelajari dasar-dasar jaringan komputer, pemrograman, serta pengembangan teknologi informasi dengan fokus pada web development.": "Studying computer networking fundamentals, programming, and information technology, with a focus on web development.",
  "Sekolah Menengah Pertama": "Junior High School",
  "Menyelesaikan pendidikan menengah pertama dengan baik serta mulai tertarik pada bidang teknologi.": "Completed junior high school and began developing an interest in technology.",
  "Sekolah Dasar": "Elementary School",
  "Menyelesaikan pendidikan dasar selama 6 tahun dengan hasil yang memuaskan.": "Completed six years of elementary education with strong results.",
  "Taman Kanak-kanak": "Kindergarten",
  "Mengikuti pendidikan anak usia dini sebagai dasar pembentukan karakter dan kemampuan dasar.": "Attended early childhood education, building foundational skills and character.",
  Kemampuan: "Skills",
  "Web & Programming": "Web & Programming",
  "JavaScript (Dasar)": "JavaScript (Basic)",
  "PHP (Dasar)": "PHP (Basic)",
  "MySQL (Dasar)": "MySQL (Basic)",
  "Networking & Tools": "Networking & Tools",
  "Linux (Dasar)": "Linux (Basic)",
  "Design & Creative": "Design & Creative",
  "Figma (Dasar)": "Figma (Basic)",
  "Video Editing": "Video Editing",
  Karya: "Selected Work",
  "Berikut adalah beberapa karya yang saya kerjakan sebagai bagian dari proses belajar dan pengembangan keterampilan di berbagai bidang teknologi dan kreativitas.": "A selection of projects created as part of my learning journey and skill development across technology and creative fields.",
  Semua: "All",
  Achievements: "Achievements",
  Web: "Web",
  Desain: "Design",
  Jaringan: "Networking",
  Lainnya: "Other",
  "Kompetisi internasional sains dan inovasi berbasis teknologi dengan praktik dan pengujian sederhana.": "An international science and innovation competition featuring technology-based projects, practical work, and basic testing.",
  "Kompetisi internasional dengan riset mendalam, praktik, dan penyempurnaan hasil presentasi.": "An international competition involving in-depth research, practical work, and presentation refinement.",
  "Proyek sains terapan berbasis teknologi dengan penelitian, praktik, dan analisis hasil.": "An applied science project using technology, research, practical work, and results analysis.",
  "Kompetisi IT tingkat nasional oleh ITS untuk mengasah kemampuan teknologi informasi.": "A national IT competition hosted by ITS to develop information technology skills.",
  "Finalis lomba nasional IoT & Networking PENS dengan solusi konektivitas dan efisiensi sistem.": "A finalist in PENS's national IoT and Networking competition, developing connectivity and system-efficiency solutions.",
  "Pelatihan Cisco IT Essentials — hardware, sistem operasi, dan dasar-dasar jaringan komputer.": "Cisco IT Essentials training covering computer hardware, operating systems, and networking fundamentals.",
  "Website edukasi grafis dengan materi pembelajaran desain yang interaktif dan menarik.": "An educational graphics website with engaging, interactive design lessons.",
  "Website ucapan ulang tahun interaktif sebagai hadiah digital yang berkesan.": "An interactive birthday greeting website made as a memorable digital gift.",
  "Desain UI/UX aplikasi pengelolaan sampah berbasis digital dengan prototype interaktif.": "UI/UX design for a digital waste-management app, including an interactive prototype.",
  "Desain dan pengembangan UI/UX website portfolio pribadi yang responsif dan modern.": "UI/UX design and development for a responsive, modern personal portfolio website.",
  "Desain produk kreatif custom cup dengan konsep visual yang unik dan menarik.": "A custom cup product design with a distinctive visual concept.",
  "Implementasi routing dinamis OSPF untuk menghubungkan beberapa jaringan secara otomatis.": "Dynamic OSPF routing that automatically connects multiple networks.",
  "Konfigurasi routing dinamis BGP dengan 3 RouterBoard Mikrotik antar jaringan berbeda.": "Dynamic BGP routing configured across three MikroTik RouterBoards and separate networks.",
  "Implementasi routing dinamis BGP untuk menghubungkan beberapa autonomous system.": "Dynamic BGP routing connecting multiple autonomous systems.",
  "Konfigurasi routing dinamis 3 RouterBoard Mikrotik untuk jaringan yang terhubung otomatis.": "Dynamic routing configured across three MikroTik RouterBoards for automatically connected networks.",
  "Inovasi cangkang telur dan batang bayam sebagai solusi food waste dengan nilai gizi tinggi.": "An egg-shell and spinach-stem innovation to reduce food waste while adding nutritional value.",
  "Inovasi pemanfaatan limbah bahan makanan untuk mengurangi food waste dan stunting.": "An innovative use of food by-products to reduce food waste and stunting.",
  "Solusi inovatif pencegahan keracunan makanan berbasis smart system.": "A smart-system solution designed to help prevent food poisoning.",
  "Sistem monitoring cerdas berbasis IoT untuk mendeteksi keamanan makanan.": "An IoT-based smart monitoring system for food safety.",
  "Curriculum Vitae": "Curriculum Vitae",
  "Unduh CV saya dalam format PDF": "Download my CV as a PDF",
  "Unduh CV (PDF)": "Download CV (PDF)",
  "Data Pribadi": "Personal Information",
  "Nama Lengkap": "Full Name",
  "Tempat, Tanggal Lahir": "Place and Date of Birth",
  "Jenis Kelamin": "Gender",
  Perempuan: "Female",
  Agama: "Religion",
  Katolik: "Catholic",
  Alamat: "Address",
  "No. HP / WhatsApp": "Phone / WhatsApp",
  "2024 – Sekarang": "2024 – Present",
  "Jurusan Sistem Informasi Jaringan dan Aplikasi": "Information Systems, Networking, and Applications Major",
  "2021 – 2024": "2021 – 2024",
  "2015 – 2021": "2015 – 2021",
  "2013 – 2015": "2013 – 2015",
  "Pengalaman / Karya Ilmiah": "Experience / Research Projects",
  "Karya Ilmiah — Adding Nutritional Value to A Kids Friendly Panacotta": "Research Project — Adding Nutritional Value to a Kid-Friendly Panna Cotta",
  "Karya Ilmiah — Reduce Food Waste & Increase Nutrition to Reduce Stunting Rates with Panacotta": "Research Project — Reducing Food Waste and Stunting Through More Nutritious Panna Cotta",
  "Kursus — Cisco Networking Academy": "Course — Cisco Networking Academy",
  "Internet of Things — Pencegahan Keracunan Makanan": "Internet of Things — Food Poisoning Prevention",
  "FTR & Sistem Pengukuran dan Monitoring Cerdas": "FTR & Smart Measurement and Monitoring System",
  "Hubungi Saya": "Contact Me",
  "Interested in collaborating or have any questions? Feel free to reach out — I'd love to connect!": "Interested in collaborating or have a question? Get in touch. I'd love to connect!",
  "Kunjungi Website": "Visit Website",
  "Lihat di Google Drive": "View on Google Drive",
  "International Science and Invention Fair 2023": "International Science and Invention Fair 2023",
  "Mengikuti kompetisi internasional di bidang sains dan inovasi dengan mengembangkan proyek berbasis teknologi. Selain pembuatan konsep, juga melakukan praktik dan pengujian sederhana untuk mendukung hasil penelitian.": "Participated in an international science and innovation competition by developing a technology-based project, including hands-on work and basic testing to support the research.",
  "Canva · Microsoft PowerPoint · Google Docs · Eksperimen/Laboratorium Dasar": "Canva · Microsoft PowerPoint · Google Docs · Basic Experiments/Lab Work",
  "International Science and Invention Fair 2024": "International Science and Invention Fair 2024",
  "Berpartisipasi dalam kompetisi internasional dengan pengembangan proyek yang lebih mendalam, termasuk proses riset, praktik, serta penyempurnaan hasil dan presentasi.": "Participated in an international competition with a more in-depth project, including research, practical work, and refinement of the results and presentation.",
  "Canva · PowerPoint · Google Docs · Eksperimen/Laboratorium": "Canva · PowerPoint · Google Docs · Experiments/Lab Work",
  "Indonesia International Applied Science Project Olympiad 2023": "Indonesia International Applied Science Project Olympiad 2023",
  "Mengembangkan proyek sains terapan dengan pendekatan berbasis teknologi, termasuk proses penelitian, praktik, serta analisis hasil untuk menyelesaikan suatu permasalahan.": "Developed a technology-based applied science project, including research, practical work, and results analysis to address a problem.",
  "Canva · Microsoft Office · Google Docs · Praktik/Laboratorium": "Canva · Microsoft Office · Google Docs · Practical/Lab Work",
  "Peserta Olimpiade IT ARA 7.0 ITS 2026": "ARA 7.0 ITS IT Olympiad Participant 2026",
  "Berpartisipasi dalam kompetisi IT tingkat nasional yang diselenggarakan oleh ITS. Mengasah kemampuan di bidang teknologi informasi serta memperluas wawasan dan pengalaman kompetitif.": "Participated in a national IT competition hosted by ITS, strengthening information technology skills and gaining valuable competition experience.",
  "Finalis PENS — Lomba Tingkat Nasional IoT & Networking 2025": "PENS Finalist — National IoT & Networking Competition 2025",
  "Berhasil menjadi finalis dalam lomba tingkat nasional di bidang IoT dan jaringan. Mengembangkan solusi berbasis teknologi yang berfokus pada konektivitas dan efisiensi sistem.": "Reached the finals of a national IoT and networking competition, developing a technology-based solution focused on connectivity and system efficiency.",
  "Cisco IT Essentials 2025": "Cisco IT Essentials 2025",
  "Menyelesaikan pelatihan Cisco IT Essentials yang mencakup dasar-dasar perangkat keras komputer, sistem operasi, serta jaringan.": "Completed Cisco IT Essentials training covering computer hardware, operating systems, and networking fundamentals.",
  "Website edukasi grafis yang menyajikan materi pembelajaran desain grafis secara interaktif dan menarik.": "An educational website offering engaging, interactive graphic design lessons.",
  "Website ucapan ulang tahun yang dibuat dengan tampilan yang menarik dan interaktif sebagai hadiah digital yang berkesan.": "An engaging, interactive birthday website created as a memorable digital gift.",
  "Desain UI/UX aplikasi SORAI untuk pengelolaan sampah berbasis digital. Mencakup wireframe, mockup, dan prototype interaktif yang berfokus pada kemudahan pengguna.": "UI/UX design for SORAI, a digital waste-management app, including wireframes, mockups, and a user-friendly interactive prototype.",
  "Desain dan pengembangan UI/UX website portfolio pribadi. Mencakup proses desain di Figma hingga implementasi front-end yang responsif dan modern.": "UI/UX design and development for a personal portfolio, from Figma design through responsive, modern front-end implementation.",
  "Desain produk kreatif berupa custom cup dengan konsep visual yang unik dan menarik. Dibuat sebagai karya desain produk yang memadukan estetika dan fungsi.": "A custom cup product design that combines a distinctive visual concept with practical function.",
  "Implementasi routing dinamis menggunakan protokol OSPF (Open Shortest Path First) untuk menghubungkan beberapa jaringan secara otomatis dan efisien.": "Dynamic routing with OSPF (Open Shortest Path First) to connect multiple networks automatically and efficiently.",
  "Konfigurasi routing dinamis Border Gateway Protocol (BGP) menggunakan 3 router dengan RouterBoard Mikrotik untuk menghubungkan antar jaringan yang berbeda.": "Dynamic Border Gateway Protocol (BGP) routing configured on three MikroTik RouterBoards to connect separate networks.",
  "Implementasi routing dinamis Border Gateway Protocol (BGP) untuk menghubungkan beberapa autonomous system dalam jaringan yang lebih kompleks.": "Dynamic Border Gateway Protocol (BGP) routing connecting autonomous systems in a more complex network.",
  "Konfigurasi routing dinamis menggunakan 3 router dengan RouterBoard Mikrotik untuk membangun jaringan yang saling terhubung secara otomatis dan efisien.": "Dynamic routing configured on three MikroTik RouterBoards to build an automatically connected, efficient network.",
  "Karya ilmiah tentang inovasi pemanfaatan cangkang telur dan batang bayam untuk mengurangi limbah makanan sekaligus menambah nilai gizi pada dessert Panacotta ramah anak.": "A research project exploring egg shells and spinach stems to reduce food waste and add nutrition to a kid-friendly panna cotta dessert.",
  "Karya ilmiah tentang inovasi pemanfaatan cangkang telur, batang bayam, dan bunga telang sebagai solusi kreatif untuk mengurangi limbah makanan (food waste) dan meningkatkan nutrisi untuk mengurangi stunting.": "A research project using egg shells, spinach stems, and butterfly pea flowers to reduce food waste and improve nutrition to help address stunting.",
  "Proyek Smart Food Safety Detector sebagai solusi inovatif untuk pencegahan keracunan makanan menggunakan teknologi pendeteksi keamanan pangan berbasis smart system.": "Smart Food Safety Detector is an innovative food-safety monitoring project designed to help prevent food poisoning.",
  "Proyek FTR SMKN 7 Semarang berupa perangkat pendeteksi keamanan makanan berbasis IoT (PATRIOT) sebagai sistem monitoring cerdas untuk mencegah bahaya keracunan makanan.": "A SMKN 7 Semarang FTR project: PATRIOT, an IoT-based food-safety detector and smart monitoring system designed to help prevent food poisoning.",
}

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

function translate(value: string, language: Language) {
  if (language === "id") return value
  return english[normalize(value)] || value
}

const originalTextNodes: Array<{ node: Text; value: string }> = []
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
while (textWalker.nextNode()) {
  const node = textWalker.currentNode as Text
  if (!node.textContent?.trim() || node.parentElement?.closest("#root, script, style")) continue
  originalTextNodes.push({ node, value: node.textContent })
}

const translatableAttributes = ["title", "alt", "data-title", "data-desc", "data-tech"]
const originalAttributes: Array<{ element: Element; name: string; value: string }> = []
document.body.querySelectorAll("*").forEach((element) => {
  if (element.closest("#root")) return
  translatableAttributes.forEach((name) => {
    const value = element.getAttribute(name)
    if (value !== null) originalAttributes.push({ element, name, value })
  })
})

export function applyLanguage(language: Language) {
  document.documentElement.lang = language
  window.localStorage.setItem("language", language)

  originalTextNodes.forEach(({ node, value }) => {
    const leading = value.match(/^\s*/)?.[0] || ""
    const trailing = value.match(/\s*$/)?.[0] || ""
    const content = value.slice(leading.length, value.length - trailing.length || undefined)
    node.textContent = `${leading}${translate(content, language)}${trailing}`
  })

  originalAttributes.forEach(({ element, name, value }) => {
    element.setAttribute(name, translate(value, language))
  })

  window.dispatchEvent(new Event("portfolio-language-change"))
}
