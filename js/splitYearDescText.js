// Mendapatkan elemen dengan ID 'year-description-text'
let elementYearDesc = document.getElementById('year-description-text');

// Mendapatkan teks dari elemen
let textWithoutTagsYearDesc =
  elementYearDesc.textContent || elementYearDesc.innerText;

// Memecah teks menjadi dua bagian
let partsYearDesc = textWithoutTagsYearDesc.split(' lets ');

// Menggabungkan kembali teks dengan pemisah baris
let modifiedTextYearDesc = partsYearDesc.join(' lets \n');

// Mengganti teks pada elemen dengan teks yang dimodifikasi
elementYearDesc.innerText = modifiedTextYearDesc;
