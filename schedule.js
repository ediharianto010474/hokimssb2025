// schedule.js - Data jadwal terpusat untuk Kejohanan Hoki MSSB Mukah 2025

const groups = {
    'A': {
        name: 'Lelaki Bawah 15 Tahun (Kumpulan A)',
        teams: ['SMK BELAWAI', 'SMK NORMAH', 'SMK MUKAH', 'SMK AGAMA IGAN']
    },
    'B': {
        name: 'Perempuan Bawah 15 Tahun (Kumpulan B)',
        teams: ['SMK BATANG IGAN', 'SMK BELAWAI', 'SMK 3 RIVERS', 'SMK MUKAH', 'SMK DALAT']
    },
    'C': {
        name: 'Lelaki Bawah 18 Tahun (Kumpulan C)',
        teams: ['SMK BELAWAI', 'SMK NORMAH', 'SMK DALAT']
    },
    'D': {
        name: 'Lelaki Bawah 18 Tahun (Kumpulan D)',
        teams: ['SMK 3 RIVERS', 'SMK BATANG IGAN', 'SMK AGAMA IGAN']
    },
    'E': {
        name: 'Perempuan Bawah 18 Tahun (Kumpulan E)',
        teams: ['SMK BELAWAI', 'SMK BATANG IGAN', 'SMK NORMAH']
    },
    'F': {
        name: 'Lelaki Bawah 12 Tahun (Kumpulan F)',
        teams: ['PASUKAN DARO', 'PASUKAN DALAT', 'PASUKAN MUKAH']
    },
    'G': {
        name: 'Perempuan Bawah 12 Tahun (Kumpulan G)',
        teams: ['PASUKAN DARO', 'PASUKAN DALAT', 'PASUKAN MUKAH']
    }
};

// Jadwal yang sudah dioptimumkan dari jadual.html
const tournamentSchedule = [
        { no: 1, groupId: 'A', category: 'Lelaki Bawah 15 Tahun (Kumpulan A)', team1: 'A1) SMK BELAWAI', team2: 'A2) SMK NORMAH', date: '2 Julai 2025', time: '08:00 AM' },
    { no: 2, groupId: 'B', category: 'Perempuan Bawah 15 Tahun (Kumpulan B)', team1: 'B1) SMK BATANG IGAN', team2: 'B2) SMK BELAWAI', date: '2 Julai 2025', time: '08:25 AM' },
    { no: 3, groupId: 'C', category: 'Lelaki Bawah 18 Tahun (Kumpulan C)', team1: 'C1) SMK BELAWAI', team2: 'C2) SMK NORMAH', date: '2 Julai 2025', time: '08:50 AM' },
    { no: 4, groupId: 'D', category: 'Lelaki Bawah 18 Tahun (Kumpulan D)', team1: 'D1) SMK MUKAH', team2: 'D2) SMK BATANG IGAN', date: '2 Julai 2025', time: '09:15 AM' },
    { no: 5, groupId: 'E', category: 'Perempuan Bawah 18 Tahun (Kumpulan E)', team1: 'E1) SMK BELAWAI', team2: 'E2) SMK BATANG IGAN', date: '2 Julai 2025', time: '09:40 AM' },
    { no: 6, groupId: 'A', category: 'Lelaki Bawah 15 Tahun (Kumpulan A)', team1: 'A3) SMK 3 RIVERS', team2: 'A4) SMK AGAMA IGAN', date: '2 Julai 2025', time: '10:05 AM' },
    { no: 7, groupId: 'B', category: 'Perempuan Bawah 15 Tahun (Kumpulan B)', team1: 'B3) SMK 3 RIVERS', team2: 'B4) SMK MUKAH', date: '2 Julai 2025', time: '10:30 AM' },
    { no: 8, groupId: 'D', category: 'Lelaki Bawah 18 Tahun (Kumpulan D)', team1: 'D1) SMK MUKAH', team2: 'D3) SMK AGAMA IGAN', date: '2 Julai 2025', time: '10:55 AM'},
    { no: 9, groupId: 'E', category: 'Perempuan Bawah 18 Tahun (Kumpulan E)', team1: 'E1) SMK BELAWAI', team2: 'E3) SMK NORMAH', date: '2 Julai 2025', time: '11:20 AM' },
    { no: 10, groupId: 'B', category: 'Perempuan Bawah 15 Tahun (Kumpulan B)', team1: 'B2) SMK BELAWAI', team2: 'B3) SMK 3 RIVERS', date: '2 Julai 2025', time: '11:45 AM' },
    { no: 11, groupId: 'A', category: 'Lelaki Bawah 15 Tahun (Kumpulan A)', team1: 'A1) SMK BELAWAI', team2: 'A3) SMK 3 RIVERS', date: '2 Julai 2025', time: '02:00 PM' },
    { no: 12, groupId: 'D', category: 'Lelaki Bawah 18 Tahun (Kumpulan D)', team1: 'D2) SMK BATANG IGAN', team2: 'D3) SMK AGAMA IGAN', date: '2 Julai 2025', time: '2:25 PM' },
    { no: 13, groupId: 'B', category: 'Perempuan Bawah 15 Tahun (Kumpulan B)', team1: 'B1) SMK BATANG IGAN', team2: 'B3) SMK 3 RIVERS', date: '2 Julai 2025', time: '02:50 PM' },
    { no: 14, groupId: 'E', category: 'Perempuan Bawah 18 Tahun (Kumpulan E)', team1: 'E2) SMK BATANG IGAN', team2: 'E3) SMK NORMAH', date: '2 Julai 2025', time: '03:15 PM' },
    { no: 15, groupId: 'A', category: 'Lelaki Bawah 15 Tahun (Kumpulan A)', team1: 'A2) SMK NORMAH', team2: 'A4) SMK AGAMA IGAN', date: '2 Julai 2025', time: '03:40 PM' },
    { no: 16, groupId: 'B', category: 'Perempuan Bawah 15 Tahun (Kumpulan B)', team1: 'B2) SMK BELAWAI', team2: 'B4) SMK MUKAH', date: '2 Julai 2025', time: '04:05 PM' },
    { no: 17, groupId: 'A', category: 'Lelaki Bawah 15 Tahun (Kumpulan A)', team1: 'A1) SMK BELAWAI', team2: 'A4) SMK AGAMA IGAN', date: '2 Julai 2025', time: '04:30 PM' },
    { no: 18, groupId: 'C', category: 'Lelaki Bawah 18 Tahun (Kumpulan C)', team1: 'C1) SMK BELAWAI', team2: 'C3) SMK DALAT', date: '3 Julai 2025', time: '08:00 AM' },
    { no: 19, groupId: 'F', category: 'Lelaki Bawah 12 Tahun (Kumpulan F)', team1: 'F1) PASUKAN DARO', team2: 'F2) PASUKAN DALAT', date: '3 Julai 2025', time: '08:25 AM' },
    { no: 20, groupId: 'G', category: 'Perempuan Bawah 12 Tahun (Kumpulan G)', team1: 'G2) PASUKAN DALAT', team2: 'G3) PASUKAN MUKAH', date: '3 Julai 2025', time: '08:50 AM' },
    { no: 21, groupId: 'F', category: 'Lelaki Bawah 12 Tahun (Kumpulan F)', team1: 'F2) PASUKAN DALAT', team2: 'F3) PASUKAN MUKAH', date: '3 Julai 2025', time: '09:15 AM' },
    { no: 22, groupId: 'G', category: 'Perempuan Bawah 12 Tahun (Kumpulan G)', team1: 'G1) PASUKAN DARO', team2: 'G2) PASUKAN DALAT', date: '3 Julai 2025', time: '09:40 AM' },
    { no: 23, groupId: 'C', category: 'Lelaki Bawah 18 Tahun (Kumpulan C)', team1: 'C2) SMK NORMAH', team2: 'C3) SMK DALAT', date: '3 Julai 2025', time: '10:05 AM' },
    { no: 24, groupId: 'B', category: 'Perempuan Bawah 15 Tahun (Kumpulan B)', team1: 'B1) SMK BATANG IGAN', team2: 'B4) SMK MUKAH', date: '3 Julai 2025', time: '10:30 AM' },
    { no: 25, groupId: 'F', category: 'Lelaki Bawah 12 Tahun (Kumpulan F)', team1: 'F1) PASUKAN DARO', team2: 'F3) PASUKAN MUKAH', date: '3 Julai 2025', time: '10:55 AM' },
    { no: 26, groupId: 'A', category: 'Lelaki Bawah 15 Tahun (Kumpulan A)', team1: 'A2) SMK NORMAH', team2: 'A3) SMK 3 RIVERS', date: '3 Julai 2025', time: '11:20 AM' },
    { no: 27, groupId: 'G', category: 'Perempuan Bawah 12 Tahun (Kumpulan G)', team1: 'G1) PASUKAN DARO', team2: 'G3) PASUKAN MUKAH', date: '3 Julai 2025', time: '11:45 AM' }
];
// Fungsi untuk mendapatkan jadwal berdasarkan groupId
function getMatchesByGroup(groupId) {
    return tournamentSchedule.filter(match => match.groupId === groupId);
}

// Fungsi untuk mendapatkan semua jadwal
function getAllMatches() {
    return tournamentSchedule;
}
