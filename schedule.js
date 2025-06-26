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

// Jadwal perlawanan dikemaskini
const tournamentSchedule = [
    { no: 1, groupId: 'A', category: groups.A.name, team1: 'A1) SMK BELAWAI', team2: 'A2) SMK NORMAH', date: '2 Julai 2025', time: '07:30 AM' },
    { no: 2, groupId: 'A', category: groups.A.name, team1: 'A3) SMK MUKAH', team2: 'A4) SMK AGAMA IGAN', date: '2 Julai 2025', time: '08:00 AM' },
    { no: 3, groupId: 'B', category: groups.B.name, team1: 'B1) SMK BATANG IGAN', team2: 'B2) SMK BELAWAI', date: '2 Julai 2025', time: '08:30 AM' },
    { no: 4, groupId: 'D', category: groups.D.name, team1: 'D1) SMK 3 RIVERS', team2: 'D2) SMK BATANG IGAN', date: '2 Julai 2025', time: '09:00 AM' },
    { no: 5, groupId: 'E', category: groups.E.name, team1: 'E1) SMK BELAWAI', team2: 'E2) SMK BATANG IGAN', date: '2 Julai 2025', time: '09:30 AM' },
    { no: 6, groupId: 'D', category: groups.D.name, team1: 'D3) SMK AGAMA IGAN', team2: 'D1) SMK 3 RIVERS', date: '2 Julai 2025', time: '10:00 AM' },
    { no: 7, groupId: 'B', category: groups.B.name, team1: 'B3) SMK 3 RIVERS', team2: 'B4) SMK MUKAH', date: '2 Julai 2025', time: '10:30 AM' },
    { no: 8, groupId: 'E', category: groups.E.name, team1: 'E3) SMK NORMAH', team2: 'E1) SMK BELAWAI', date: '2 Julai 2025', time: '11:00 AM' },
    { no: 9, groupId: 'B', category: groups.B.name, team1: 'B2) SMK BELAWAI', team2: 'B3) SMK 3 RIVERS', date: '2 Julai 2025', time: '11:30 AM' },
    { no: 10, groupId: 'A', category: groups.A.name, team1: 'A1) SMK BELAWAI', team2: 'A3) SMK MUKAH', date: '2 Julai 2025', time: '01:00 PM' },
    { no: 11, groupId: 'D', category: groups.D.name, team1: 'D2) SMK BATANG IGAN', team2: 'D3) SMK AGAMA IGAN', date: '2 Julai 2025', time: '01:30 PM' },
    { no: 12, groupId: 'E', category: groups.E.name, team1: 'E2) SMK BATANG IGAN', team2: 'E3) SMK NORMAH', date: '2 Julai 2025', time: '02:00 PM' },
    { no: 13, groupId: 'A', category: groups.A.name, team1: 'A2) SMK NORMAH', team2: 'A4) SMK AGAMA IGAN', date: '2 Julai 2025', time: '02:30 PM' },

    // Semua perlawanan melibatkan DALAT disusun pada 3 Julai
    { no: 14, groupId: 'C', category: groups.C.name, team1: 'C1) SMK BELAWAI', team2: 'C3) SMK DALAT', date: '3 Julai 2025', time: '07:30 AM' },
    { no: 15, groupId: 'B', category: groups.B.name, team1: 'B5) SMK DALAT', team2: 'B4) SMK MUKAH', date: '3 Julai 2025', time: '08:00 AM' },
    { no: 16, groupId: 'C', category: groups.C.name, team1: 'C2) SMK NORMAH', team2: 'C3) SMK DALAT', date: '3 Julai 2025', time: '08:30 AM' },
    { no: 17, groupId: 'F', category: groups.F.name, team1: 'F1) PASUKAN DARO', team2: 'F2) PASUKAN DALAT', date: '3 Julai 2025', time: '09:00 AM' },
    { no: 18, groupId: 'G', category: groups.G.name, team1: 'G2) PASUKAN DALAT', team2: 'G3) PASUKAN MUKAH', date: '3 Julai 2025', time: '09:30 AM' },
    { no: 19, groupId: 'F', category: groups.F.name, team1: 'F2) PASUKAN DALAT', team2: 'F3) PASUKAN MUKAH', date: '3 Julai 2025', time: '10:00 AM' },
    { no: 20, groupId: 'G', category: groups.G.name, team1: 'G1) PASUKAN DARO', team2: 'G2) PASUKAN DALAT', date: '3 Julai 2025', time: '10:30 AM' },
    { no: 21, groupId: 'B', category: groups.B.name, team1: 'B5) SMK DALAT', team2: 'B1) SMK BATANG IGAN', date: '3 Julai 2025', time: '11:00 AM' },
    { no: 22, groupId: 'G', category: groups.G.name, team1: 'G1) PASUKAN DARO', team2: 'G3) PASUKAN MUKAH', date: '3 Julai 2025', time: '11:30 AM' }
];

// Fungsi untuk mendapatkan jadwal berdasarkan groupId
function getMatchesByGroup(groupId) {
    return tournamentSchedule.filter(match => match.groupId === groupId);
}

// Fungsi untuk mendapatkan semua jadwal
function getAllMatches() {
    return tournamentSchedule;
}
