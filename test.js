const form = {
    nama: "Muhammad Imam",
    absen: 14
};

const formData = new FormData;
formData.append('nama', 'Muhammad Imam');
formData.append('absen', 14);

console.log(formData);