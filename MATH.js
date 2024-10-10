function hitungBalok() {
    const panjang = parseFloat(document.getElementById('panjangBalok').value);
    const lebar = parseFloat(document.getElementById('lebarBalok').value);
    const tinggi = parseFloat(document.getElementById('tinggiBalok').value);
    const volume = panjang * lebar * tinggi;
    const keliling = 4 * (panjang + lebar + tinggi);
    const luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

    document.getElementById('VolumeBalok').innerText = volume.toFixed(2) + ' cm³';
    document.getElementById('kelilingBalok').innerText = keliling.toFixed(2) + ' cm';
    document.getElementById('luasBalok').innerText = luas.toFixed(2) + ' cm²';
}

function hitungKubus() {
    const sisi = parseFloat(document.getElementById('sisiKubus').value);
    const volume = sisi ** 3;
    const keliling = 12 * sisi;
    const luas = 6 * (sisi ** 2);

    document.getElementById('VolumeKubus').innerText = volume.toFixed(2) + ' cm³';
    document.getElementById('kelilingKubus').innerText = keliling.toFixed(2) + ' cm';
    document.getElementById('luasKubus').innerText = luas.toFixed(2) + ' cm²';
}

function hitungPrisma() {
    const alas = parseFloat(document.getElementById('alasPrisma').value);
    const tinggi = parseFloat(document.getElementById('tinggiPrisma').value);
    const volume = alas * tinggi; // Misalnya alas berbentuk segitiga
    const keliling = 3 * alas; // Misalnya prisma segitiga
    const luas = alas * tinggi; // Misalnya alas berbentuk segitiga

    document.getElementById('VolumePrisma').innerText = volume.toFixed(2) + ' cm³';
    document.getElementById('kelilingPrisma').innerText = keliling.toFixed(2) + ' cm';
    document.getElementById('luasPrisma').innerText = luas.toFixed(2) + ' cm²';
}

function hitungBola() {
    const jari = parseFloat(document.getElementById('jariBola').value);
    const volume = (4/3) * Math.PI * (jari ** 3);
    const keliling = 2 * Math.PI * jari;
    const luas = 4 * Math.PI * (jari ** 2);

    document.getElementById('VolumeBola').innerText = volume.toFixed(2) + ' cm³';
    document.getElementById('kelilingBola').innerText = keliling.toFixed(2) + ' cm';
    document.getElementById('luasBola').innerText = luas.toFixed(2) + ' cm²';
}

function hitungLingkaran() {
    const jari = parseFloat(document.getElementById('jariLingkaran').value);
    const keliling = 2 * Math.PI * jari;
    const luas = Math.PI * (jari ** 2);

    document.getElementById('kelilingLingkaran').innerText = keliling.toFixed(2) + ' cm';
    document.getElementById('luasLingkaran').innerText = luas.toFixed(2) + ' cm²';
}

function hitungPersegiPanjang() {
    const panjang = parseFloat(document.getElementById('panjangPersegiPanjang').value);
    const lebar = parseFloat(document.getElementById('lebarPersegiPanjang').value);
    const keliling = 2 * (panjang + lebar);
    const luas = panjang * lebar;

    document.getElementById('kelilingPersegiPanjang').innerText = keliling.toFixed(2) + ' cm';
    document.getElementById('luasPersegiPanjang').innerText = luas.toFixed(2) + ' cm²';
}

function hitungTrapesium() {
    const alasAtas = parseFloat(document.getElementById('alasAtas').value);
    const alasBawah = parseFloat(document.getElementById('alasBawah').value);
    const tinggi = parseFloat(document.getElementById('tinggiTrapesium').value);
    const keliling = alasAtas + alasBawah + (2 * Math.sqrt((alasBawah - alasAtas) ** 2 + tinggi ** 2)); 
    const luas = ((alasAtas + alasBawah) / 2) * tinggi;

    document.getElementById('kelilingTrapesium').innerText = keliling.toFixed(2) + ' cm';
    document.getElementById('luasTrapesium').innerText = luas.toFixed(2) + ' cm²';
}

function calculateGradeAndStatus(finalScore) {
    if (finalScore >= 0 && finalScore <= 20) {
        return { grade: 'E', status: 'Gagal' };
    } else if (finalScore >= 21 && finalScore <= 40) {
        return { grade: 'D', status: 'Gagal' };
    } else if (finalScore >= 41 && finalScore <= 60) {
        return { grade: 'C', status: 'Gagal' };
    } else if (finalScore >= 61 && finalScore <= 80) {
        return { grade: 'B', status: 'Lulus' };
    } else if (finalScore >= 81 && finalScore <= 100) {
        return { grade: 'A', status: 'Lulus' };
    } else {
        return { grade: 'Invalid', status: 'Invalid' };
    }
}

function calculateGrades() {
    for (let i = 1; i <= 5; i++) {
        let uts = parseFloat(document.getElementById(`uts${i}`).value);
        let uas = parseFloat(document.getElementById(`uas${i}`).value);

        if (!isNaN(uts) && !isNaN(uas)) {
            let finalScore = (uts + uas) / 2;
            let result = calculateGradeAndStatus(finalScore);

            document.getElementById(`final${i}`).innerText = finalScore.toFixed(2);
            document.getElementById(`grade${i}`).innerText = result.grade;
            document.getElementById(`status${i}`).innerText = result.status;
        } else {
            alert('Masukkan nilai UTS dan UAS yang valid untuk semua mahasiswa.');
        }
    }
}

function goBack() {
    window.location.href = 'index.html';
}