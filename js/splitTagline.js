// Mendapatkan elemen dengan ID 'tagline'
let element = document.getElementById('tagline');

// Mendapatkan teks dari elemen
let textWithoutTags = element.textContent || element.innerText;

// Memecah teks menjadi dua bagian
let parts = textWithoutTags.split(' and ');

// Menggabungkan kembali teks dengan pemisah baris
let modifiedText = parts.join(' and \n');

// Mengganti teks pada elemen dengan teks yang dimodifikasi
element.innerText = modifiedText;
